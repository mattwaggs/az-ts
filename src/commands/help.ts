import { Command, OptionsResult, displayLogo, usage } from "./baseCommand";

class HelpCommand implements Command {
  execute = (options: OptionsResult) => {
    displayLogo();
    console.log(usage);
    return Promise.resolve();
  };
}

export const Help = new HelpCommand();
