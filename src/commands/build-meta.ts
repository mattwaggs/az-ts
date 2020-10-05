import fs from "fs";
import path from "path";
import { Command, OptionsResult } from "./baseCommand";
import { CleanUp } from "./utils/cleanup";
import { cloneRepoToTempDir } from "./utils/clone-repo";
import { extractNodesFromFilesInDirectory } from "./utils/extract-from-yml";
import JsonToTS from "json-to-ts";

class BuildMetaCommand implements Command {
  execute = (_: OptionsResult) => {
    return CleanUp(({ addCleanupTask }) => {
      console.log("cloning azure-docs-cli repo...");
      const [tempDir, cleanupTask] = cloneRepoToTempDir();
      addCleanupTask(cleanupTask);

      console.log("done.\n");
      console.log("extracting all yml files...");
      const folderPath = path.join(tempDir, "latest/docs-ref-autogen");
      const nodes: any[] = extractNodesFromFilesInDirectory(folderPath);

      console.log("done.\n");
      console.log("converting yaml structure to typescript interfaces...");
      const interfaces = this.convertJsonToTS(nodes);
      const generatedFilePath = path.join(__dirname, "./gen/yaml-structure.ts");
      this.saveGeneratedInterfaces(interfaces, generatedFilePath);

      console.log("done.\n");
      console.log(`Saved to ${generatedFilePath}\n`);
    });
  };

  convertJsonToTS = (json: any) => {
    return JsonToTS(json).map((typeInterface) => {
      return typeInterface.replace(/RootObject/g, "Node");
    });
  };

  saveGeneratedInterfaces = (interfaces: string[], filePath: string) => {
    const content = interfaces
      .map((typeInterface) => `export ${typeInterface}`)
      .join("\n\n");

    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, content);
  };
}

export const BuildMeta = new BuildMetaCommand();
