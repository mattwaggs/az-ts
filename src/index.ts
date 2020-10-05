import { options } from "./commands/baseCommand";
import { Help, Build, BuildMeta, BuildDataTypes, RunFile } from "./commands";
import tsNode from "ts-node";

async function main() {
  if (options.help) {
    return await Help.execute(options);
  }

  if (options["build-meta"]) {
    return await BuildMeta.execute(options);
  }

  if (options["build-datatypes"]) {
    return await BuildDataTypes.execute(options);
  }

  if (options.build) {
    return await Build.execute(options);
  }

  if (options.file) {
    return await RunFile.execute(options);
  }

  return await Help.execute(options);
}

main().then(() => {
  console.log();
});
