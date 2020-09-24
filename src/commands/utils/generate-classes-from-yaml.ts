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
  const groupIdentifierRegex = RegExp("^(?:az_)([a-zA-Z]+)_*.*$");
  const getGroupIdentifierName = (id: string) => {
    return groupIdentifierRegex.exec(id)?.[1];
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
  });

  // after the individual modules have been created we need to create
  // the master object heirarchy.  This is what allows us to write
  // `az.keyvault.secret` and have it return a `new az_keyvault_secret();`
  buildMasterHeirarchy(project, generatedFileNames, yamlNodes);

  project.save();
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
        ...nodes.map(generateClassFromNode),
        ...nodes
          .map((n) => n?.directCommands || [])
          .filter((n) => n?.length > 0)
          .reduce((a, b) => a.concat(b))
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

const generateClassFromNode = (node: Node): StatementStructures => {
  const generatedClass: StatementStructures = {
    isExported: true,
    kind: StructureKind.Class,
    name: node.uid,
    docs: [node.summary],
    methods: node.directCommands?.map(generateCommand) || [],
  };

  return generatedClass;
};

const generateCommand = (node: DirectCommand): MethodDeclarationStructure => {
  const commandBuilderClassName = `${node.uid}_command_builder`;
  const commandPath = `"${node.name}"`;
  let returnedCommandBuilder = `return new ${commandBuilderClassName}(${commandPath});`;
  if (node.requiredParameters?.length > 0) {
    const params = node.requiredParameters
      .map((p) => {
        return _.camelCase(parameterNameToUseableName(p.name));
      })
      .join(", ");

    returnedCommandBuilder = `return new ${commandBuilderClassName}(${commandPath}, ${params});`;
  }

  return {
    kind: StructureKind.Method,
    name: node.uid,
    docs: [generateDocCommentsForCommand(node)],
    isStatic: true,
    returnType: commandBuilderClassName,
    parameters: node.requiredParameters?.map(generateParameters) || [],
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
    name: className,
    extends: "CommandBuilder",
    docs: [generateDocCommentsForCommand(node)],
    ctors: [
      {
        kind: StructureKind.Constructor,
        parameters: [
          {
            kind: StructureKind.Parameter,
            name: "commandPath",
            type: "string", // any because we dont have response data types yet
          },
          ...(node.requiredParameters?.map(generateParameters) || []),
        ],
        statements: [
          "super(commandParent);",
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
    name: _.camelCase(parameterNameToUseableName(node.name)),
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
          return `import '${fileName.replace(".ts", "")}';`;
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

  // we have to output this in reverse order now, because if we start with the
  // root az class, its properties (webapp) will complain im using it before
  // the class is declared...
  // order needs to be
  //
  // class az_webapp_auth
  // class az_webapp
  // class az

  const commandNodeIds = orderedNodes.map((n) => n.uid);
  const results = recursivelyGenerateMoreVerboseTreeStructure(
    commandNodeIds,
    output
  );

  return results;
};

const recursivelyGenerateMoreVerboseTreeStructure = (
  commandNodeIds: string[],
  object: any,
  pathSoFar?: string
): VerboseClassStructure[] => {
  return Object.keys(object).map((key) => {
    const outputClass = new VerboseClassStructure();
    outputClass.path = pathSoFar ? pathSoFar + "_" + key : key;

    if (typeof object[key] === "string") {
      // this is the furthest depth
      outputClass.commands.push(object[key]);
    } else {
      if (commandNodeIds.indexOf(outputClass.path) > -1) {
        outputClass.shouldExtend = outputClass.path;
      }
      outputClass.nestedClasses = recursivelyGenerateMoreVerboseTreeStructure(
        commandNodeIds,
        object[key],
        outputClass.path
      );
    }
    return outputClass;
  });
};

const recursivelyGetStatementsFromClassTree = (
  classTree: VerboseClassStructure[]
): ClassDeclarationStructure[] => {
  // gross code becuase lame exception, cannot `.reduce` on empty array
  const dependenciesPlural: ClassDeclarationStructure[][] =
    classTree.map((c) =>
      recursivelyGetStatementsFromClassTree(c.nestedClasses)
    ) || [];

  const dependencies: ClassDeclarationStructure[] =
    dependenciesPlural?.length > 0
      ? dependenciesPlural.reduce((a, b) => a.concat(b))
      : [];

  const currentClasses: ClassDeclarationStructure[] = classTree.map((c) => {
    const exportedClass: ClassDeclarationStructure = {
      kind: StructureKind.Class,
      name: _.camelCase(c.path),
      docs: [], // tbd
      properties: [
        ...c.commands.map((command) => {
          const prop: PropertyDeclarationStructure = {
            kind: StructureKind.Property,
            name: _.camelCase(command.replace(c.path, "")),
            isStatic: true,
            docs: [], // tbd
            initializer: command,
          };

          return prop;
        }),
        ...c.nestedClasses.map((nested) => {
          const prop: PropertyDeclarationStructure = {
            kind: StructureKind.Property,
            name: _.camelCase(nested.path.replace(c.path, "")),
            isStatic: true,
            docs: [], // tbd
            initializer: _.camelCase(nested.path),
          };

          return prop;
        }),
      ],
    };

    if (c.shouldExtend) {
      exportedClass.extends = c.shouldExtend;
    }

    return exportedClass;
  });

  return dependencies.concat(currentClasses);
};
