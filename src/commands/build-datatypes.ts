import fs from "fs";
import path from "path";
import { Command, OptionsResult } from "./baseCommand";
import { CleanUp } from "./utils/cleanup";
import { cloneRepoToTempDir } from "./utils/clone-repo";
import { extractNodesFromFilesInDirectory } from "./utils/extract-from-yml";
import JsonToTS from "json-to-ts";
import usage from "./utils/usage";
import _ from "lodash";

class BuildDataTypesCommand implements Command {
  execute = (opts: OptionsResult) => {
    CleanUp(({ addCleanupTask }) => {
      usage.getAllUsage().then((data) => {
        const rows = data.map((row) => {
          const typeName = data.partitionKey;
          const dataStructure = JSON.parse(data.data);
          return { typeName, dataStructure };
        });

        const groups = _.groupBy(rows, (r) => r.typeName);

        Object.keys(groups).map((key) => {
          const json = JSON.stringify(groups[key]);
          const interfaces = this.convertJsonToTS(json, key);
          const fileName = path.join(__dirname, `../gen/src/models/${key}.ts`);
          this.saveGeneratedInterfaces(interfaces, fileName);
        });

        // group data structures by type name
      });

      console.log("done.\n");
    });
  };

  convertJsonToTS = (json: any, rootObjectName: string) => {
    return JsonToTS(json).map((typeInterface) => {
      return typeInterface.replace(/RootObject/g, rootObjectName);
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

export const BuildDataTypes = new BuildDataTypesCommand();
