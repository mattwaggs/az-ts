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
} from "ts-morph";
import _ from "lodash";

export const generateClassesFromYaml = (yamlNodes: Node[]): void => {
  const project = new Project();

  const generatedSourceDir = path.join(__dirname, "../../gen/src/");
  if (!project.getDirectory(generatedSourceDir)) {
    project.createDirectory(generatedSourceDir);
  }

  project.createSourceFile(
    path.join(generatedSourceDir, "az.ts"),
    {
      statements: [
        "import './base';",
        ...yamlNodes.map(generateClassFromNode),
        ...yamlNodes
          .map((classNode) => {
            return classNode?.directCommands || [];
          })
          .filter((a) => a?.length > 0)
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

  project.save();
};

const generateClassFromNode = (node: Node): StatementStructures => {
  return {
    isExported: true,
    kind: StructureKind.Class,
    name: node.uid,
    docs: [node.summary],
    methods: node.directCommands?.map(generateCommand) || [],
  };
};

const generateCommand = (node: DirectCommand): MethodDeclarationStructure => {
  const commandBuilderClassName = `${node.uid}_command_builder`;
  let returnedCommandBuilder = `return new ${commandBuilderClassName}(this);`;
  if (node.requiredParameters?.length > 0) {
    const params = node.requiredParameters
      .map((p) => {
        return _.camelCase(parameterNameToUseableName(p.name));
      })
      .join(", ");

    returnedCommandBuilder = `return new ${commandBuilderClassName}(this, ${params});`;
  }

  return {
    kind: StructureKind.Method,
    name: node.uid,
    docs: [generateDocCommentsForCommand(node)],
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
            name: "commandParent",
            type: "ICommandParent",
          },
          ...(node.requiredParameters?.map(generateParameters) || []),
        ],
        statements: ["super(commandParent);"],
      },
    ],
    methods:
      node.optionalParameters?.map((p) =>
        generateCommandBuilderMethodFromParam(p, node)
      ) || [],
  };
};

const generateCommandBuilderMethodFromParam = (
  node: OptionalParameter,
  parent: DirectCommand
): MethodDeclarationStructure => {
  const className = `${parent.uid}_command_builder`;

  return {
    kind: StructureKind.Method,
    name: _.camelCase(parameterNameToUseableName(node.name)),
    docs: [node.summary],
    parameters: [
      {
        kind: StructureKind.Parameter,
        name: "value",
        type: getParameterTypeFrom(node),
      },
    ],
    returnType: className,
    statements: [
      `this.setFlag("${parameterNameToUseableName(node.name)}", value);`,
      `return this;`,
    ],
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
