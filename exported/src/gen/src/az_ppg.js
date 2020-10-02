"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var base_1 = require("../base");
/** Manage Proximity Placement Groups. */
var az_ppg = /** @class */ (function () {
    function az_ppg() {
    }
    /**
     * Create a proximity placement group.
     *
     * Syntax:
     * ```
     * az ppg create --name
     *               --resource-group
     *               [--location]
     *               [--subscription]
     *               [--tags]
     *               [--type]
     * ```
     *
     * @param {string} name The name of the proximity placement group.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_ppg.create = function (name, resourceGroup) {
        return new az_ppg_create_command_builder("az ppg create", 'az_ppg_create_command_result', name, resourceGroup);
    };
    /**
     * Delete a proximity placement group.
     *
     * Syntax:
     * ```
     * az ppg delete --name
     *               --resource-group
     *               [--subscription]
     * ```
     *
     * @param {string} name The name of the proximity placement group.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_ppg["delete"] = function (name, resourceGroup) {
        return new az_ppg_delete_command_builder("az ppg delete", 'az_ppg_delete_command_result', name, resourceGroup);
    };
    /**
     * List proximity placement groups.
     *
     * Syntax:
     * ```
     * az ppg list [--query-examples]
     *             [--resource-group]
     *             [--subscription]
     * ```
     */
    az_ppg.list = function () {
        return new az_ppg_list_command_builder("az ppg list", 'az_ppg_list_command_result');
    };
    /**
     * Get a proximity placement group.
     *
     * Syntax:
     * ```
     * az ppg show --name
     *             --resource-group
     *             [--include-colocation-status]
     *             [--query-examples]
     *             [--subscription]
     * ```
     *
     * @param {string} name The name of the proximity placement group.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_ppg.show = function (name, resourceGroup) {
        return new az_ppg_show_command_builder("az ppg show", 'az_ppg_show_command_result', name, resourceGroup);
    };
    /**
     * Update a proximity placement group.
     *
     * Syntax:
     * ```
     * az ppg update --name
     *               --resource-group
     *               [--add]
     *               [--force-string]
     *               [--include-colocation-status]
     *               [--remove]
     *               [--set]
     *               [--subscription]
     * ```
     *
     * @param {string} name The name of the proximity placement group.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_ppg.update = function (name, resourceGroup) {
        return new az_ppg_update_command_builder("az ppg update", 'az_ppg_update_command_result', name, resourceGroup);
    };
    return az_ppg;
}());
exports.az_ppg = az_ppg;
/**
 * Create a proximity placement group.
 *
 * Syntax:
 * ```
 * az ppg create --name
 *               --resource-group
 *               [--location]
 *               [--subscription]
 *               [--tags]
 *               [--type]
 * ```
 *
 * @param {string} name The name of the proximity placement group.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_ppg_create_command_builder = /** @class */ (function (_super) {
    __extends(az_ppg_create_command_builder, _super);
    function az_ppg_create_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the proximity placement group. */
    az_ppg_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_ppg_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_ppg_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_ppg_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_ppg_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    /** The type of the proximity placement group. Allowed values: Standard. */
    az_ppg_create_command_builder.prototype.type = function (value) {
        this.setFlag("--type", value);
        return this;
    };
    return az_ppg_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a proximity placement group.
 *
 * Syntax:
 * ```
 * az ppg delete --name
 *               --resource-group
 *               [--subscription]
 * ```
 *
 * @param {string} name The name of the proximity placement group.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_ppg_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_ppg_delete_command_builder, _super);
    function az_ppg_delete_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the proximity placement group. */
    az_ppg_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_ppg_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_ppg_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_ppg_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List proximity placement groups.
 *
 * Syntax:
 * ```
 * az ppg list [--query-examples]
 *             [--resource-group]
 *             [--subscription]
 * ```
 */
var az_ppg_list_command_builder = /** @class */ (function (_super) {
    __extends(az_ppg_list_command_builder, _super);
    function az_ppg_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_ppg_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_ppg_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_ppg_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_ppg_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Get a proximity placement group.
 *
 * Syntax:
 * ```
 * az ppg show --name
 *             --resource-group
 *             [--include-colocation-status]
 *             [--query-examples]
 *             [--subscription]
 * ```
 *
 * @param {string} name The name of the proximity placement group.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_ppg_show_command_builder = /** @class */ (function (_super) {
    __extends(az_ppg_show_command_builder, _super);
    function az_ppg_show_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the proximity placement group. */
    az_ppg_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_ppg_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Enable fetching the colocation status of all the resources in the proximity placement group. */
    az_ppg_show_command_builder.prototype.includeColocationStatus = function (value) {
        this.setFlag("--include-colocation-status", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_ppg_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_ppg_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_ppg_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update a proximity placement group.
 *
 * Syntax:
 * ```
 * az ppg update --name
 *               --resource-group
 *               [--add]
 *               [--force-string]
 *               [--include-colocation-status]
 *               [--remove]
 *               [--set]
 *               [--subscription]
 * ```
 *
 * @param {string} name The name of the proximity placement group.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_ppg_update_command_builder = /** @class */ (function (_super) {
    __extends(az_ppg_update_command_builder, _super);
    function az_ppg_update_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the proximity placement group. */
    az_ppg_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_ppg_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_ppg_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_ppg_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** IncludeColocationStatus=true enables fetching the colocation status of all the resources in the proximity placement group. */
    az_ppg_update_command_builder.prototype.includeColocationStatus = function (value) {
        this.setFlag("--include-colocation-status", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_ppg_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_ppg_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_ppg_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_ppg_update_command_builder;
}(base_1.CommandBuilder));
