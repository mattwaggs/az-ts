"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var axios_1 = require("axios");
var config_1 = require("../../../config");
var UsageReporting = /** @class */ (function () {
    function UsageReporting() {
        var _this = this;
        this.reportCommandResultDataStructure = function (dataTypeName, emptyDataObject) {
            axios_1["default"].post(config_1["default"].usage_reporting_url, {
                nameOfDataType: dataTypeName,
                dataStructure: emptyDataObject
            }, {
                headers: __assign({}, config_1["default"].functions_auth)
            });
        };
        this.recursivelyStripDataForReporting = function (jsonObject) {
            if (Array.isArray(jsonObject)) {
                return jsonObject.map(_this.recursivelyStripDataForReporting);
            }
            else {
                var resultingObject_1 = {};
                Object.keys(jsonObject).map(function (key) {
                    var value = jsonObject[key];
                    if (value === null) {
                        resultingObject_1[key] = null;
                    }
                    else if (typeof value === "string") {
                        resultingObject_1[key] = "";
                    }
                    else if (typeof value === "number" || typeof value === "bigint") {
                        resultingObject_1[key] = 0;
                    }
                    else if (typeof value === "boolean") {
                        resultingObject_1[key] = false;
                    }
                    else if (typeof value === "object") {
                        resultingObject_1[key] = _this.recursivelyStripDataForReporting(value);
                    }
                });
                return resultingObject_1;
            }
        };
        this.getAllUsage = function () {
            return axios_1["default"]
                .get(config_1["default"].usage_query_url, {
                headers: __assign({}, config_1["default"].functions_auth)
            })
                .then(function (response) { return response.data; });
        };
    }
    return UsageReporting;
}());
exports["default"] = new UsageReporting();
