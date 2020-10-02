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
exports.az_cache = void 0;
var base_1 = require("../base");
/** Commands to manage CLI objects cached using the `--defer` argument. */
var az_cache = /** @class */ (function () {
    function az_cache() {
    }
    /**
     * Delete an object from the cache.
     *
     * Syntax:
     * ```
     * az cache delete --name
     *                 --resource-group
     *                 --resource-type
     *                 [--subscription]
     * ```
     *
     * @param {string} name The resource name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} resourceType The resource type.
     */
    az_cache["delete"] = function (name, resourceGroup, resourceType) {
        return new az_cache_delete_command_builder("az cache delete", 'az_cache_delete_command_result', name, resourceGroup, resourceType);
    };
    /**
     * List the contents of the object cache.
     *
     * Syntax:
     * ```
     * az cache list [--query-examples]
     *               [--subscription]
     * ```
     */
    az_cache.list = function () {
        return new az_cache_list_command_builder("az cache list", 'az_cache_list_command_result');
    };
    /**
     * Clear the entire CLI object cache.
     *
     * Syntax:
     * ```
     * az cache purge [--subscription]
     * ```
     */
    az_cache.purge = function () {
        return new az_cache_purge_command_builder("az cache purge", 'az_cache_purge_command_result');
    };
    /**
     * Show the contents of a specific object in the cache.
     *
     * Syntax:
     * ```
     * az cache show --name
     *               --resource-group
     *               --resource-type
     *               [--query-examples]
     *               [--subscription]
     * ```
     *
     * @param {string} name The resource name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} resourceType The resource type.
     */
    az_cache.show = function (name, resourceGroup, resourceType) {
        return new az_cache_show_command_builder("az cache show", 'az_cache_show_command_result', name, resourceGroup, resourceType);
    };
    return az_cache;
}());
exports.az_cache = az_cache;
/**
 * Delete an object from the cache.
 *
 * Syntax:
 * ```
 * az cache delete --name
 *                 --resource-group
 *                 --resource-type
 *                 [--subscription]
 * ```
 *
 * @param {string} name The resource name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} resourceType The resource type.
 */
var az_cache_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_cache_delete_command_builder, _super);
    function az_cache_delete_command_builder(commandPath, resultDataTypeName, name, resourceGroup, resourceType) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.resourceType(resourceType);
        return _this;
    }
    /** The resource name. */
    az_cache_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cache_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The resource type. */
    az_cache_delete_command_builder.prototype.resourceType = function (value) {
        this.setFlag("--resource-type", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cache_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cache_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List the contents of the object cache.
 *
 * Syntax:
 * ```
 * az cache list [--query-examples]
 *               [--subscription]
 * ```
 */
var az_cache_list_command_builder = /** @class */ (function (_super) {
    __extends(az_cache_list_command_builder, _super);
    function az_cache_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_cache_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cache_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cache_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Clear the entire CLI object cache.
 *
 * Syntax:
 * ```
 * az cache purge [--subscription]
 * ```
 */
var az_cache_purge_command_builder = /** @class */ (function (_super) {
    __extends(az_cache_purge_command_builder, _super);
    function az_cache_purge_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cache_purge_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cache_purge_command_builder;
}(base_1.CommandBuilder));
/**
 * Show the contents of a specific object in the cache.
 *
 * Syntax:
 * ```
 * az cache show --name
 *               --resource-group
 *               --resource-type
 *               [--query-examples]
 *               [--subscription]
 * ```
 *
 * @param {string} name The resource name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} resourceType The resource type.
 */
var az_cache_show_command_builder = /** @class */ (function (_super) {
    __extends(az_cache_show_command_builder, _super);
    function az_cache_show_command_builder(commandPath, resultDataTypeName, name, resourceGroup, resourceType) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.resourceType(resourceType);
        return _this;
    }
    /** The resource name. */
    az_cache_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cache_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The resource type. */
    az_cache_show_command_builder.prototype.resourceType = function (value) {
        this.setFlag("--resource-type", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_cache_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cache_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cache_show_command_builder;
}(base_1.CommandBuilder));
