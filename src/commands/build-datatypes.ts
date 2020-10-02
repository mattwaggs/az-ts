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
    return CleanUp(async ({ addCleanupTask }) => {
      const data = await usage.getAllUsage();
      const rows = data.map((row) => {
        const typeName = row.partitionKey;
        const dataStructure = JSON.parse(row.data);
        return { typeName, dataStructure };
      });

      const groups = _.groupBy(rows, (r) => r.typeName);
      const results: { [key: string]: any[] } = {};

      Object.keys(groups).map((key) => {
        results[key] = groups[key]
          .map((o) => o.dataStructure)
          .reduce((a, b) => a.concat(b), []);
      });

      Object.keys(results).map((key) => {
        const json = results[key];
        if (Array.isArray(json) && json.length === 0) {
          return;
        } else if (
          Array.isArray(json) &&
          json.every((item) => Array.isArray(item))
        ) {
          const interfaces = this.convertJsonArrayToTS(json, key);
          const fileName = path.join(__dirname, `../gen/src/models/${key}.ts`);
          this.saveGeneratedInterfaces(interfaces, fileName);
        } else {
          const interfaces = this.convertJsonToTS(json, key);
          const fileName = path.join(__dirname, `../gen/src/models/${key}.ts`);
          this.saveGeneratedInterfaces(interfaces, fileName);
        }
      });

      console.log("done.\n");
    });
  };

  convertJsonArrayToTS = (json: any, rootObjectName: string) => {
    const interfaces = JsonToTS(json).map((typeInterface) => {
      return typeInterface.replace(/RootObject/g, `${rootObjectName}_item`);
    });

    return [
      `type ${rootObjectName} = ${rootObjectName}_item[];`,
      ...interfaces,
    ];
  };

  convertJsonToTS = (json: any, rootObjectName: string) => {
    return JsonToTS(json).map((typeInterface) => {
      return typeInterface.replace(/RootObject/g, rootObjectName);
    });
  };

  saveGeneratedInterfaces = (interfaces: string[], filePath: string) => {
    const content = interfaces
      .map((typeInterface, index) => {
        if (index === 0) {
          return `export ${typeInterface}`;
        }
        return typeInterface;
      })
      .join("\n\n");

    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, content);
  };
}

export const BuildDataTypes = new BuildDataTypesCommand();
