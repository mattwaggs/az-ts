import path from "path";
import { Command, OptionsResult } from "./baseCommand";
import { CleanUp } from "./utils/cleanup";
import { cloneRepoToTempDir } from "./utils/clone-repo";
import { extractNodesFromFilesInDirectory } from "./utils/extract-from-yml";
import { Node } from "./gen/yaml-structure";
import { generateClassesFromYaml } from "./utils/generate-classes-from-yaml";

class BuildCommand implements Command {
  execute = (_: OptionsResult) => {
    CleanUp(({ addCleanupTask }) => {
      console.log("cloning azure-docs-cli repo...");
      const [tempDir, cleanupTask] = cloneRepoToTempDir();
      addCleanupTask(cleanupTask);

      console.log("done.\n");
      console.log("extracting all yml files...");
      const folderPath = path.join(tempDir, "latest/docs-ref-autogen");
      const nodes: Node[] = extractNodesFromFilesInDirectory(folderPath);

      console.log("done.\n");
      console.log("converting parsed yaml data to classes...");
      generateClassesFromYaml(nodes);

      console.log("done.\n");
    });
  };
}

export const Build = new BuildCommand();
