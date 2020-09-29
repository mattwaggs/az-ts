import { execSync } from "child_process";

export class executor {
  static execute = (command: string) => {
    const result = execSync(command).toString();
    const json = JSON.parse(result);

    // need to strip all data out of json at this point...
    // then send to an azure function to be recorded.

    return json;
  };
}
