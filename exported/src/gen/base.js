"use strict";
exports.__esModule = true;
exports.CommandBuilder = void 0;
var executor_1 = require("../commands/utils/executor");
var CommandBuilder = /** @class */ (function () {
    function CommandBuilder(commandPath, resultDataTypeName) {
        var _this = this;
        this.commandPath = commandPath;
        this.resultDataTypeName = resultDataTypeName;
        this._flags = {};
        this.setFlag = function (key, value) {
            _this._flags[key] = value;
        };
    }
    CommandBuilder.prototype.execute = function () {
        var _this = this;
        var commandArgs = Object.keys(this._flags)
            .map(function (flag) {
            var wrapInQuotes = /;/.test(_this._flags[flag]);
            if (wrapInQuotes) {
                return flag + " \"" + _this._flags[flag] + "\"";
            }
            else {
                return flag + " " + _this._flags[flag];
            }
        })
            .reduce(function (a, b) { return a + " " + b; }, "") || "";
        var fullCommand = this.commandPath + " " + commandArgs;
        return executor_1.executor.execute(fullCommand, this.resultDataTypeName);
    };
    return CommandBuilder;
}());
exports.CommandBuilder = CommandBuilder;
