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
          ...config.functions_auth,
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

  getAllUsage = (): Promise<any> => {
    return axios
      .get(config.usage_query_url, {
        headers: {
          ...config.functions_auth,
        },
      })
      .then((response) => response.data);
  };
}

export default new UsageReporting();
