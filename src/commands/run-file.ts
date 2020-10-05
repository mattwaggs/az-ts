import { Command, OptionsResult } from "./baseCommand";
import shelljs from "shelljs";

class RunFileCommand implements Command {
  execute = (options: OptionsResult) => {
    shelljs.exec(`ts-node ${options.file}`);
    return Promise.resolve();
  };
}

export const RunFile = new RunFileCommand();
