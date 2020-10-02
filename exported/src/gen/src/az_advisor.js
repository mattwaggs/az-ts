"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.az_advisor = exports.az_advisor_recommendation = exports.az_advisor_configuration = void 0;
var base_1 = require("../base");
/** Manage Azure Advisor configuration. */
var az_advisor_configuration = /** @class */ (function () {
    function az_advisor_configuration() {
    }
    /**
     * List Azure Advisor configuration for the entire subscription.
     *
     * Syntax:
     * ```
     * az advisor configuration list [--query-examples]
     *                               [--subscription]
     * ```
     */
    az_advisor_configuration.list = function () {
        return new az_advisor_configuration_list_command_builder("az advisor configuration list", 'az_advisor_configuration_list_command_result');
    };
    /**
     * Show Azure Advisor configuration for the given subscription or resource group.
     *
     * Syntax:
     * ```
     * az advisor configuration show [--query-examples]
     *                               [--resource-group]
     *                               [--subscription]
     * ```
     */
    az_advisor_configuration.show = function () {
        return new az_advisor_configuration_show_command_builder("az advisor configuration show", 'az_advisor_configuration_show_command_result');
    };
    /**
     * Update Azure Advisor configuration.
     *
     * Syntax:
     * ```
     * az advisor configuration update [--add]
     *                                 [--exclude]
     *                                 [--force-string]
     *                                 [--include]
     *                                 [--low-cpu-threshold {10, 15, 20, 5}]
     *                                 [--remove]
     *                                 [--resource-group]
     *                                 [--set]
     *                                 [--subscription]
     * ```
     */
    az_advisor_configuration.update = function () {
        return new az_advisor_configuration_update_command_builder("az advisor configuration update", 'az_advisor_configuration_update_command_result');
    };
    return az_advisor_configuration;
}());
exports.az_advisor_configuration = az_advisor_configuration;
/** Review Azure Advisor recommendations. */
var az_advisor_recommendation = /** @class */ (function () {
    function az_advisor_recommendation() {
    }
    /**
     * Disable Azure Advisor recommendations.
     *
     * Syntax:
     * ```
     * az advisor recommendation disable [--days]
     *                                   [--ids]
     *                                   [--name]
     *                                   [--resource-group]
     *                                   [--subscription]
     * ```
     */
    az_advisor_recommendation.disable = function () {
        return new az_advisor_recommendation_disable_command_builder("az advisor recommendation disable", 'az_advisor_recommendation_disable_command_result');
    };
    /**
     * Enable Azure Advisor recommendations.
     *
     * Syntax:
     * ```
     * az advisor recommendation enable [--ids]
     *                                  [--name]
     *                                  [--resource-group]
     *                                  [--subscription]
     * ```
     */
    az_advisor_recommendation.enable = function () {
        return new az_advisor_recommendation_enable_command_builder("az advisor recommendation enable", 'az_advisor_recommendation_enable_command_result');
    };
    /**
     * List Azure Advisor recommendations.
     *
     * Syntax:
     * ```
     * az advisor recommendation list [--category {Cost, HighAvailability, Performance, Security}]
     *                                [--ids]
     *                                [--query-examples]
     *                                [--refresh]
     *                                [--resource-group]
     *                                [--subscription]
     * ```
     */
    az_advisor_recommendation.list = function () {
        return new az_advisor_recommendation_list_command_builder("az advisor recommendation list", 'az_advisor_recommendation_list_command_result');
    };
    return az_advisor_recommendation;
}());
exports.az_advisor_recommendation = az_advisor_recommendation;
/** Manage Azure Advisor. */
var az_advisor = /** @class */ (function () {
    function az_advisor() {
    }
    return az_advisor;
}());
exports.az_advisor = az_advisor;
/**
 * List Azure Advisor configuration for the entire subscription.
 *
 * Syntax:
 * ```
 * az advisor configuration list [--query-examples]
 *                               [--subscription]
 * ```
 */
var az_advisor_configuration_list_command_builder = /** @class */ (function (_super) {
    __extends(az_advisor_configuration_list_command_builder, _super);
    function az_advisor_configuration_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_advisor_configuration_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_advisor_configuration_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_advisor_configuration_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Show Azure Advisor configuration for the given subscription or resource group.
 *
 * Syntax:
 * ```
 * az advisor configuration show [--query-examples]
 *                               [--resource-group]
 *                               [--subscription]
 * ```
 */
var az_advisor_configuration_show_command_builder = /** @class */ (function (_super) {
    __extends(az_advisor_configuration_show_command_builder, _super);
    function az_advisor_configuration_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_advisor_configuration_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_advisor_configuration_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_advisor_configuration_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_advisor_configuration_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update Azure Advisor configuration.
 *
 * Syntax:
 * ```
 * az advisor configuration update [--add]
 *                                 [--exclude]
 *                                 [--force-string]
 *                                 [--include]
 *                                 [--low-cpu-threshold {10, 15, 20, 5}]
 *                                 [--remove]
 *                                 [--resource-group]
 *                                 [--set]
 *                                 [--subscription]
 * ```
 */
var az_advisor_configuration_update_command_builder = /** @class */ (function (_super) {
    __extends(az_advisor_configuration_update_command_builder, _super);
    function az_advisor_configuration_update_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_advisor_configuration_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** Exclude from recommendation generation. */
    az_advisor_configuration_update_command_builder.prototype.exclude = function (value) {
        this.setFlag("--exclude", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_advisor_configuration_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** Include in recommendation generation. */
    az_advisor_configuration_update_command_builder.prototype.include = function (value) {
        this.setFlag("--include", value);
        return this;
    };
    /** Value for low CPU threshold. */
    az_advisor_configuration_update_command_builder.prototype.lowCpuThreshold = function (value) {
        this.setFlag("--low-cpu-threshold", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_advisor_configuration_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_advisor_configuration_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_advisor_configuration_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_advisor_configuration_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_advisor_configuration_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Disable Azure Advisor recommendations.
 *
 * Syntax:
 * ```
 * az advisor recommendation disable [--days]
 *                                   [--ids]
 *                                   [--name]
 *                                   [--resource-group]
 *                                   [--subscription]
 * ```
 */
var az_advisor_recommendation_disable_command_builder = /** @class */ (function (_super) {
    __extends(az_advisor_recommendation_disable_command_builder, _super);
    function az_advisor_recommendation_disable_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Number of days to disable. If not specified, the recommendation is disabled forever. */
    az_advisor_recommendation_disable_command_builder.prototype.days = function (value) {
        this.setFlag("--days", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). If provided, no other "Resource Id" arguments should be specified. */
    az_advisor_recommendation_disable_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the recommendation as output by the list command. */
    az_advisor_recommendation_disable_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_advisor_recommendation_disable_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_advisor_recommendation_disable_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_advisor_recommendation_disable_command_builder;
}(base_1.CommandBuilder));
/**
 * Enable Azure Advisor recommendations.
 *
 * Syntax:
 * ```
 * az advisor recommendation enable [--ids]
 *                                  [--name]
 *                                  [--resource-group]
 *                                  [--subscription]
 * ```
 */
var az_advisor_recommendation_enable_command_builder = /** @class */ (function (_super) {
    __extends(az_advisor_recommendation_enable_command_builder, _super);
    function az_advisor_recommendation_enable_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). If provided, no other "Resource Id" arguments should be specified. */
    az_advisor_recommendation_enable_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the recommendation as output by the list command. */
    az_advisor_recommendation_enable_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_advisor_recommendation_enable_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_advisor_recommendation_enable_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_advisor_recommendation_enable_command_builder;
}(base_1.CommandBuilder));
/**
 * List Azure Advisor recommendations.
 *
 * Syntax:
 * ```
 * az advisor recommendation list [--category {Cost, HighAvailability, Performance, Security}]
 *                                [--ids]
 *                                [--query-examples]
 *                                [--refresh]
 *                                [--resource-group]
 *                                [--subscription]
 * ```
 */
var az_advisor_recommendation_list_command_builder = /** @class */ (function (_super) {
    __extends(az_advisor_recommendation_list_command_builder, _super);
    function az_advisor_recommendation_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Name of recommendation category. */
    az_advisor_recommendation_list_command_builder.prototype.category = function (value) {
        this.setFlag("--category", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). If provided, no other "Resource Id" arguments should be specified. */
    az_advisor_recommendation_list_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_advisor_recommendation_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Generate new recommendations. */
    az_advisor_recommendation_list_command_builder.prototype.refresh = function (value) {
        this.setFlag("--refresh", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_advisor_recommendation_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_advisor_recommendation_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_advisor_recommendation_list_command_builder;
}(base_1.CommandBuilder));
