import { options } from "./commands/baseCommand";
import { Help, Build, BuildMeta } from "./commands";

function main() {
  if (options.help) {
    return Help.execute(options);
  }

  if (options["build-meta"]) {
    return BuildMeta.execute(options);
  }

  if (options.build) {
    return Build.execute(options);
  }

  return Help.execute(options);
}

main();

