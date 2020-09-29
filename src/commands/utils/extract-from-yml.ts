import path from "path";
import fs from "fs";
import yaml from "yaml";

export const extractNodesFromFilesInDirectory = (directory: string) => {
  const nodes: any[] = [];

  fs.readdirSync(directory)
    .filter((p) => !p.endsWith("TOC.yml"))
    .forEach((p) => {
      const fullPath = path.join(directory, p);
      const stats = fs.statSync(fullPath);

      // is yaml file
      if (stats.isFile() && p.endsWith(".yml")) {
        const fileContents = fs.readFileSync(fullPath).toString();
        const node = yaml.parse(fileContents);
        nodes.push(node);
      } else if (stats.isDirectory()) {
        extractNodesFromFilesInDirectory(fullPath).forEach((node) => {
          nodes.push(node);
        });
      }
    });

  return nodes;
};
