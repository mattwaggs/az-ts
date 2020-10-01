import { options } from "./commands/baseCommand";
import { Help, Build, BuildMeta, BuildDataTypes, RunFile } from "./commands";
import tsNode from "ts-node";

function main() {
  if (options.help) {
    return Help.execute(options);
  }

  if (options["build-meta"]) {
    return BuildMeta.execute(options);
  }

  if (options["build-datatypes"]) {
    return BuildDataTypes.execute(options);
  }

  if (options.build) {
    return Build.execute(options);
  }

  if (options.file) {
    return RunFile.execute(options);
  }

  return Help.execute(options);
}

main();
