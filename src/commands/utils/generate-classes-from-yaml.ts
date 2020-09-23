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
  return {
    kind: StructureKind.Method,
    name: node.uid,
    docs: [`${node.summary}\n\nSyntax: \n\n\`\`\`${node.syntax}\n\`\`\``],
    returnType: "void",
    parameters: node.requiredParameters?.map(generateParameters) || [],
  };
};

const generateParameters = (
  node: RequiredParameter
): ParameterDeclarationStructure => {
  return {
    kind: StructureKind.Parameter,
    name: _.camelCase(node.name),
  };
};
