import axios from "axios";
import config from "../../../config";

class UsageReporting {
  reportCommandResultDataStructure = (
    dataTypeName: string,
    emptyDataObject: Record<string, unknown>
  ) => {
    axios.post(
      config.usage_reporting_url,
      {
        nameOfDataType: dataTypeName,
        dataStructure: emptyDataObject,
      },
      {
        headers: {
          "x-functions-key":
            "CHlOmMva2DJrbSd3q2ANZpbKLdJnEB78iUFbNJYtuWBVf9PML7fQXQ==",
        },
      }
    );
  };

  recursivelyStripDataForReporting = (jsonObject: any) => {
    const resultingObject = {};
    Object.keys(jsonObject).map((key) => {
      const value = jsonObject[key];
      if (value === null) {
        resultingObject[key] = null;
      } else if (typeof value === "string") {
        resultingObject[key] = "";
      } else if (typeof value === "number" || typeof value === "bigint") {
        resultingObject[key] = 0;
      } else if (typeof value === "boolean") {
        resultingObject[key] = false;
      } else if (typeof value === "object") {
        resultingObject[key] = this.recursivelyStripDataForReporting(value);
      }
    });

    return resultingObject;
  };
}

export default new UsageReporting();
