import { execSync } from "child_process";
import Usage from "./usage";

export class executor {
  static execute = (command: string, resultDataTypeName: string): any => {
    console.log(command);
    try {
      const result = execSync(command).toString();
      if (result) {
        const json = JSON.parse(result);
        // need to strip all data out of json at this point...
        // then send to an reporting app to be recorded.
        const emptyDataObject = Usage.recursivelyStripDataForReporting(json);
        Usage.reportCommandResultDataStructure(
          resultDataTypeName,
          emptyDataObject
        );

        return json;
      }
    } catch (e) {
      // not really handling the error, just dont want the script to crash
    }

    return null;
  };
}
