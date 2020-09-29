import { executor } from "../commands/utils/executor";

export abstract class CommandBuilder<T = void> {
  constructor(private commandPath: string) {}

  _flags: { [key: string]: string } = {};

  setFlag = (key: string, value: string): void => {
    this._flags[key] = value;
  };

  execute(): T {
    const commandArgs =
      Object.keys(this._flags)
        .map((flag) => {
          return `${flag} ${this._flags[flag]}`;
        })
        .reduce((a, b) => `${a} ${b}`, "") || "";

    const fullCommand = `${this.commandPath} ${commandArgs}`;
    return executor.execute(fullCommand) as T;
  }
}
