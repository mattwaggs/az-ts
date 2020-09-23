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
      statements: yamlNodes.map(generateClassFromNode),
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
  return {
    kind: StructureKind.Method,
    name: node.uid,
    docs: [generateDocCommentsForCommand(node)],
    returnType: "void",
    parameters: node.requiredParameters?.map(generateParameters) || [],
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
    `\`\`\`${(node.requiredParameters?.length || 0) > 0 ? "\n" : ""}`,
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
    docs: [generateDocCommentsForCommand(node)],
    ctors: [
      {
        kind: StructureKind.Constructor,
        parameters: node.requiredParameters?.map(generateParameters) || [],
      },
    ],
    methods:
      node.optionalParameters?.map(generateCommandBuilderMethodFromParm) || [],
  };
};

const generateCommandBuilderMethodFromParm = (
  node: OptionalParameter
): MethodDeclarationStructure => {
  return {
    kind: StructureKind.Method,
    name: parameterNameToUseableName(node.name),
    docs: [node.summary],
    parameters: [
      {
        kind: StructureKind.Parameter,
        name: "value",
        type: getParameterTypeFrom(node),
      },
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
