import { executor } from "../commands/utils/executor";

export abstract class CommandBuilder<T = void> {
  constructor(
    private commandPath: string,
    private resultDataTypeName: string
  ) {}

  protected _flags: { [key: string]: string } = {};

  protected setFlag = (key: string, value: string): void => {
    this._flags[key] = value;
  };

  execute(): T {
    const commandArgs =
      Object.keys(this._flags)
        .map((flag) => {
          const wrapInQuotes = /;/.test(this._flags[flag]);
          if (wrapInQuotes) {
            return `${flag} "${this._flags[flag]}"`;
          } else {
            return `${flag} ${this._flags[flag]}`;
          }
        })
        .reduce((a, b) => `${a} ${b}`, "") || "";

    const fullCommand = `${this.commandPath} ${commandArgs}`;
    return executor.execute(fullCommand, this.resultDataTypeName) as T;
  }
}
