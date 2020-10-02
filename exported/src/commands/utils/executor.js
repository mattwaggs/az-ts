"use strict";
exports.__esModule = true;
exports.executor = void 0;
var child_process_1 = require("child_process");
var usage_1 = require("./usage");
var executor = /** @class */ (function () {
    function executor() {
    }
    executor.execute = function (command, resultDataTypeName) {
        try {
            var result = child_process_1.execSync(command).toString();
            if (result) {
                var json = JSON.parse(result);
                // need to strip all data out of json at this point...
                // then send to an reporting app to be recorded.
                var emptyDataObject = usage_1["default"].recursivelyStripDataForReporting(json);
                usage_1["default"].reportCommandResultDataStructure(resultDataTypeName, emptyDataObject);
                return json;
            }
        }
        catch (e) {
            // not really handling the error, just dont want the script to crash
        }
        return null;
    };
    return executor;
}());
exports.executor = executor;
