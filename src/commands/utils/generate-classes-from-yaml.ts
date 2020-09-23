import path from "path";
import { DirectCommand, Node, RequiredParameter } from "../gen/yaml-structure";
import {
  Project,
  StructureKind,
  StatementedNodeStructure,
  StatementStructures,
  MethodDeclarationStructure,
  ParameterDeclarationStructure,
} from "ts-morph";
import _ from "lodash";

export const generateClassesFromYaml = (yamlNodes: Node[]) => {
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
    kind: StructureKind.Class,
    name: node.uid,
    docs: [node.summary],
    methods: node.directCommands?.map(generateCommand) || [],
  };
};

const generateCommand = (node: DirectCommand): MethodDeclarationStructure => {
  const docComments = [
    node.summary,
    "Syntax:",
    "```",
    node.syntax,
    "```",
    ...(node.requiredParameters?.map((param) => {
      const paramName = _.camelCase(parameterNameToUseableName(param.name));
      return `@param {string} ${paramName} ${param.summary}`;
    }) || []),
  ];

  return {
    kind: StructureKind.Method,
    name: node.uid,
    docs: [docComments.filter((line) => !!line).join("\n")],
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
    type: "string",
  };
};

const parameterNameToUseableName = (paramName: string) => {
  var parameterName = paramName;

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
