import path from "path";
import {
  DirectCommand,
  Node,
  OptionalParameter,
  RequiredParameter,
} from "../gen/yaml-structure";
import {
  Project,
  StructureKind,
  StatementStructures,
  MethodDeclarationStructure,
  ParameterDeclarationStructure,
  ClassDeclarationStructure,
  VariableDeclarationKind,
  PropertyDeclarationStructure,
} from "ts-morph";
import _ from "lodash";

import fs from "fs";

export const generateClassesFromYaml = (yamlNodes: Node[]): void => {
  const project = new Project();

  const generatedSourceDir = path.join(__dirname, "../../gen/src/");
  if (!project.getDirectory(generatedSourceDir)) {
    project.createDirectory(generatedSourceDir);
  }

  // the current structure of node uids looks like:
  // az_webapp_create_etc_etc
  // we can group these by the first word after az
  // az_`webapp`_create_etc_etc => webapp
  const groupIdentifierRegex = RegExp("^([a-zA-Z]+_[a-zA-Z-]+)_*.*$");
  const getGroupIdentifierName = (id: string) => {
    // return groupIdentifierRegex.exec(id)?.[1];
    const results = groupIdentifierRegex.exec(id);
    if (!results) {
      return id;
    }
    return results[1];
  };

  const groups = _.groupBy(yamlNodes, (node) =>
    getGroupIdentifierName(node.uid)
  );

  const generatedFileNames = []; // tracking these since I need to import them later

  Object.keys(groups).forEach((key) => {
    const nodes = groups[key];
    const fileName = path.join(generatedSourceDir, `${key}.ts`);
    generateProjectFileForGroupOfNodes(project, fileName, nodes);
    generatedFileNames.push(`./src/${key}.ts`);

    nodes.forEach((node) => {
      node.directCommands?.forEach((dc) => {
        generateModelFileForNode(project, "./src/gen/src/models", dc);
      });
    });
  });

  // after the individual modules have been created we need to create
  // the master object heirarchy.  This is what allows us to write
  // `az.keyvault.secret` and have it return a `new az_keyvault_secret();`
  buildMasterHeirarchy(project, generatedFileNames, yamlNodes);

  project.save();
};

const generateModelFileForNode = (
  project: Project,
  dir: string,
  node: DirectCommand
) => {
  const nameOfType = `${node.uid}_command_result`;

  if (!project.getDirectory(dir)) {
    project.createDirectory(dir);
  }

  const filePath = path.join(dir, `${nameOfType}.ts`);
  try {
    project.createSourceFile(
      filePath,
      {
        statements: [`export type ${nameOfType} = Record<string, unknown>`],
      },
      {
        overwrite: true,
      }
    );
  } catch (e) {
    // would have preferred to not use try catch, but was having trouble
    // detecting if file exists
  }
};

const noDashes = (input: string) => {
  const result = input.replace(/-/g, "_");
  if (result.match(/^\d/)) {
    // starts with a number, like az_storage.404Document(); ughh..
    return `_${result}`;
  }

  return result;
};

const generateProjectFileForGroupOfNodes = (
  project: Project,
  fileName: string,
  nodes: Node[]
): void => {
  project.createSourceFile(
    fileName,
    {
      statements: [
        "import { CommandBuilder } from '../base';",
        ...nodes
          .map((n) => n?.directCommands || [])
          .filter((n) => n?.length > 0)
          .reduce((a, b) => a.concat(b), [])
          .map(generateImportForNode),
        ...nodes.map(generateClassFromNode),
        ...nodes
          .map((n) => n?.directCommands || [])
          .filter((n) => n?.length > 0)
          .reduce((a, b) => a.concat(b), [])
          .map((commandNode) => {
            return generateCommandBuilderClass(commandNode);
          }),
      ],
    },
    {
      overwrite: true,
    }
  );
};

const generateImportForNode = (node: DirectCommand): string => {
  const nameOfType = `${node.uid}_command_result`;
  return `import { ${nameOfType} } from './models/${nameOfType}'`;
};

const generateClassFromNode = (node: Node): StatementStructures => {
  const generatedClass: StatementStructures = {
    isExported: true,
    kind: StructureKind.Class,
    name: noDashes(node.uid),
    docs: [node.summary],
    methods: node.directCommands?.map((dc) => generateCommand(node, dc)) || [],
  };

  return generatedClass;
};

const generateCommand = (
  parentNode: Node,
  command: DirectCommand
): MethodDeclarationStructure => {
  const commandBuilderClassName = `${command.uid}_command_builder`;
  const commandPath = `"${command.name}"`;
  const commandResultName = `${command.uid}_command_result`;
  let returnedCommandBuilder = `return new ${commandBuilderClassName}(${commandPath}, '${commandResultName}');`;
  if (command.requiredParameters?.length > 0) {
    const params = command.requiredParameters
      .map((p) => {
        return _.camelCase(parameterNameToUseableName(p.name));
      })
      .join(", ");

    returnedCommandBuilder = `return new ${commandBuilderClassName}(${commandPath}, '${commandResultName}', ${params});`;
  }

  return {
    kind: StructureKind.Method,
    name: noDashes(command.uid.replace(`${parentNode.uid}_`, "")),
    docs: [generateDocCommentsForCommand(command)],
    isStatic: true,
    returnType: commandBuilderClassName,
    parameters: command.requiredParameters?.map(generateParameters) || [],
    statements: [returnedCommandBuilder],
  };
};

const generateParameters = (
  node: RequiredParameter
): ParameterDeclarationStructure => {
  return {
    kind: StructureKind.Parameter,
    name: _.camelCase(parameterNameToUseableName(node.name)),
    type: getParameterTypeFrom(node),
  };
};

const parameterNameToUseableName = (paramName: string) => {
  let parameterName = paramName;

  // sometimes the parameters have a short version
  // i.e. `--name -n` this causes problems, so we should
  // remove the shorter version
  if (parameterName.indexOf(" ") > -1) {
    const parameterNames = paramName.split(" ");
    const longestLength = Math.max(...parameterNames.map((n) => n.length));
    const longestParameterName = parameterNames.find(
      (p) => p.length === longestLength
    );

    if (longestParameterName) {
      parameterName = longestParameterName;
    }
  }

  return parameterName;
};

const generateDocCommentsForCommand = (node: DirectCommand) => {
  const docComments = [
    node.summary,
    "\nSyntax:",
    "```",
    node.syntax,
    `\`\`\`${node.requiredParameters?.length > 0 ? "\n" : ""}`,
    ...(node.requiredParameters?.map((param) => {
      const paramName = _.camelCase(parameterNameToUseableName(param.name));
      return `@param {${getParameterTypeFrom(param)}} ${paramName} ${
        param.summary
      }`;
    }) || []),
  ];

  return docComments.filter((line) => !!line).join("\n");
};

const generateCommandBuilderClass = (
  node: DirectCommand
): ClassDeclarationStructure => {
  const className = `${node.uid}_command_builder`;

  type AnyParameter = RequiredParameter | OptionalParameter;
  const required: AnyParameter[] = node.requiredParameters || [];
  const optional: AnyParameter[] = node.optionalParameters || [];

  const allParams: AnyParameter[] = required.concat(optional);

  return {
    kind: StructureKind.Class,
    name: noDashes(className),
    extends: `CommandBuilder<${node.uid}_command_result>`,
    docs: [generateDocCommentsForCommand(node)],
    ctors: [
      {
        kind: StructureKind.Constructor,
        parameters: [
          {
            kind: StructureKind.Parameter,
            name: "commandPath",
            type: "string",
          },
          {
            kind: StructureKind.Parameter,
            name: "resultDataTypeName",
            type: "string",
          },
          ...(node.requiredParameters?.map(generateParameters) || []),
        ],
        statements: [
          "super(commandPath, resultDataTypeName);",
          ...(node.requiredParameters?.map((param) => {
            const paramName = _.camelCase(
              parameterNameToUseableName(param.name)
            );
            return `this.${paramName}(${paramName})`;
          }) || []),
        ],
      },
    ],
    methods:
      allParams?.map((p) => generateCommandBuilderMethodFromParam(p, node)) ||
      [],
  };
};

const generateCommandBuilderMethodFromParam = (
  node: OptionalParameter,
  parent: DirectCommand
): MethodDeclarationStructure => {
  const className = `${parent.uid}_command_builder`;
  const parameterType = getParameterTypeFrom(node);
  const setFlagStatement =
    parameterType === "boolean"
      ? `this.setFlag("${parameterNameToUseableName(
          node.name
        )}", value.toString());`
      : `this.setFlag("${parameterNameToUseableName(node.name)}", value);`;

  return {
    kind: StructureKind.Method,
    name: noDashes(_.camelCase(parameterNameToUseableName(node.name))),
    docs: [node.summary],
    parameters: [
      {
        kind: StructureKind.Parameter,
        name: "value",
        type: parameterType,
      },
    ],
    returnType: className,
    statements: [setFlagStatement, `return this;`],
  };
};

const getParameterTypeFrom = (
  node: OptionalParameter | RequiredParameter
): string => {
  if (node.parameterValueGroup) {
    if (node.parameterValueGroup === "false, true") {
      return "boolean";
    }
    return node.parameterValueGroup
      .split(", ")
      .map((item) => `'${item}'`)
      .join(" | ");
  } else {
    return "string";
  }
};

const buildMasterHeirarchy = (
  project: Project,
  filesToImport: string[],
  nodes: Node[]
): void => {
  const classTree = generateNestedCommandStructure(nodes);

  project.createSourceFile(
    path.join(__dirname, "../../gen/az.ts"),
    {
      statements: [
        ...filesToImport.map((fileName) => {
          const namespaceFromFileName = /(?:\.\/src\/)([a-z]*_?[a-z-]+)(?:\.ts)/i.exec(
            fileName
          )?.[1];
          return `import * as _${_.camelCase(
            namespaceFromFileName
          )} from '${fileName.replace(".ts", "")}';`;
        }),
        ...recursivelyGetStatementsFromClassTree(classTree),
      ],
    },
    {
      overwrite: true,
    }
  );
};

class VerboseClassStructure {
  path: string;
  shouldExtend?: string;
  commands: string[] = [];
  nestedClasses: VerboseClassStructure[] = [];
}

const generateNestedCommandStructure = (nodes: Node[]): any => {
  // we should order the objects like this:
  // ```
  // az_webapp
  // az_webapp_auth
  // az_webapp_auth_update
  // ```
  // so that way when we use lodash's set method, we aren't erasing deeper
  // objects.
  //
  // otherwise I imagine it would do this:
  // ```
  // object['az']['webapp']['auth']['update'] = function() { /* etc */};
  // object['az']['webapp'] = function() { /* etc */};
  // ```
  // and obviously that erases the earlier thing...

  const orderedNodes = _.sortBy(nodes, (n) => n.uid);
  const output = {};

  orderedNodes.forEach((node) => {
    const path = node.uid.replace(/_/g, ".");
    _.set(output, path, node.uid);
  });

  // make sure nodes with nested nodes, have the _extends property set
  // this will allow the ts generator code to extend a base command class
  orderedNodes.forEach((node) => {
    const path = node.uid.replace(/_/g, ".");
    const thingAtPath = _.get(output, path);
    if (typeof thingAtPath === "object") {
      const extendsPath = path + "._extends";
      _.set(output, extendsPath, node.uid);

      const docsPath = path + "._docs";
      _.set(output, docsPath, node.summary);
    }
  });

  // we have to output this in reverse order now, because if we start with the
  // root az class, its properties (webapp) will complain im using it before
  // the class is declared...
  // order needs to be
  //
  // class az_webapp_auth
  // class az_webapp
  // class az

  //const commandNodeIds = orderedNodes.map((n) => n.uid);
  //const results = recursivelyGenerateMoreVerboseTreeStructure(
  //  commandNodeIds,
  //  output
  //);

  //fs.writeFileSync("./results.json", JSON.stringify(results));

  return output;
};

const recursivelyGetStatementsFromClassTree = (
  classTree: any,
  pathSoFar?: string
): ClassDeclarationStructure[] => {
  return Object.keys(classTree)
    .map((key) => {
      const dependencies: ClassDeclarationStructure[] = [];
      const object = classTree[key];

      if (typeof object === "object") {
        recursivelyGetStatementsFromClassTree(
          object,
          pathSoFar ? pathSoFar + "_" + key : key
        ).forEach((dep) => {
          dependencies.push(dep);
        });
      }

      if (typeof object === "object") {
        const thisClassName = pathSoFar
          ? _.camelCase(pathSoFar + "_" + key)
          : key;

        const properties = Object.keys(object).filter(
          (k) => !k.startsWith("_")
        );

        const thisClass: ClassDeclarationStructure = {
          isExported: !pathSoFar, // exported if root object
          kind: StructureKind.Class,
          name: noDashes(thisClassName),
          properties: properties.map((p) => {
            const initializer =
              typeof object[p] === "string"
                ? getImportedClassName(object[p])
                : _.camelCase(thisClassName + "_" + p);

            const prop: PropertyDeclarationStructure = {
              name: _.camelCase(p),
              kind: StructureKind.Property,
              isStatic: true,
              initializer: initializer,
              docs: object[p]?.["_docs"] ? [object[p]?.["_docs"]] : [],
            };

            return prop;
          }),
        };

        if (object.hasOwnProperty("_extends")) {
          thisClass.extends = getImportedClassName(object["_extends"]);
        }

        if (object.hasOwnProperty("_docs")) {
          thisClass.docs = [object["_docs"]];
        }

        return [...dependencies, thisClass];
      }

      return [...dependencies];
    })
    .reduce((a, b) => a.concat(b));
};

const getImportedClassName = (className: string) => {
  // if the name is az_webapp_create, we need to access it as:
  // _az_webapp.az_webapp_create because '_az_webapp' is the namespace under which
  // the module was imported from
  const regex = RegExp(/^([a-z]+_[a-z-]+)_?(?:.*)$/, "i");
  const results = regex.exec(className);
  const namespace = results?.[1];

  return namespace
    ? `_${_.camelCase(namespace)}.${noDashes(className)}`
    : `_${_.camelCase(className)}.${noDashes(className)}`;
};
