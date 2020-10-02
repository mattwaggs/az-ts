export declare abstract class CommandBuilder<T = void> {
    private commandPath;
    private resultDataTypeName;
    constructor(commandPath: string, resultDataTypeName: string);
    protected _flags: {
        [key: string]: string;
    };
    protected setFlag: (key: string, value: string) => void;
    execute(): T;
}
