export interface ICommandParent<T extends any> {
  commandPath: string;
  data?: T;
}

export abstract class CommandBuilder<T = any> {
  constructor(private commandParent: ICommandParent<T>) {}

  _flags: { [key: string]: string } = {};

  setFlag = (key: string, value: string): void => {
    this._flags[key] = value;
  };

  execute(): void {
    const commandArgs =
      Object.keys(this._flags)
        .map((flag) => {
          return `${flag} ${this._flags[flag]}`;
        })
        .reduce((a, b) => `${a} ${b}`) || "";

    const fullCommand = `${this.commandParent.commandPath} ${commandArgs}`;
    console.log("executing command: ", fullCommand);
  }
}
