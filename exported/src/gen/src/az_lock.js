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
/** Manage Azure locks. */
var az_lock = /** @class */ (function () {
    function az_lock() {
    }
    /**
     * Create a lock.
     *
     * Syntax:
     * ```
     * az lock create --lock-type {CanNotDelete, ReadOnly}
     *                --name
     *                [--namespace]
     *                [--notes]
     *                [--parent]
     *                [--resource]
     *                [--resource-group]
     *                [--resource-type]
     *                [--subscription]
     * ```
     *
     * @param {'CanNotDelete' | 'ReadOnly'} lockType The type of lock restriction.
     * @param {string} name Name of the lock.
     */
    az_lock.create = function (lockType, name) {
        return new az_lock_create_command_builder("az lock create", 'az_lock_create_command_result', lockType, name);
    };
    /**
     * Delete a lock.
     *
     * Syntax:
     * ```
     * az lock delete [--ids]
     *                [--name]
     *                [--namespace]
     *                [--parent]
     *                [--resource]
     *                [--resource-group]
     *                [--resource-type]
     *                [--subscription]
     * ```
     */
    az_lock["delete"] = function () {
        return new az_lock_delete_command_builder("az lock delete", 'az_lock_delete_command_result');
    };
    /**
     * List lock information.
     *
     * Syntax:
     * ```
     * az lock list [--filter-string]
     *              [--namespace]
     *              [--parent]
     *              [--query-examples]
     *              [--resource]
     *              [--resource-group]
     *              [--resource-type]
     *              [--subscription]
     * ```
     */
    az_lock.list = function () {
        return new az_lock_list_command_builder("az lock list", 'az_lock_list_command_result');
    };
    /**
     * Show the properties of a lock.
     *
     * Syntax:
     * ```
     * az lock show [--ids]
     *              [--name]
     *              [--namespace]
     *              [--parent]
     *              [--query-examples]
     *              [--resource]
     *              [--resource-group]
     *              [--resource-type]
     *              [--subscription]
     * ```
     */
    az_lock.show = function () {
        return new az_lock_show_command_builder("az lock show", 'az_lock_show_command_result');
    };
    /**
     * Update a lock.
     *
     * Syntax:
     * ```
     * az lock update [--ids]
     *                [--lock-type {CanNotDelete, ReadOnly}]
     *                [--name]
     *                [--namespace]
     *                [--notes]
     *                [--parent]
     *                [--resource]
     *                [--resource-group]
     *                [--resource-type]
     *                [--subscription]
     * ```
     */
    az_lock.update = function () {
        return new az_lock_update_command_builder("az lock update", 'az_lock_update_command_result');
    };
    return az_lock;
}());
exports.az_lock = az_lock;
/**
 * Create a lock.
 *
 * Syntax:
 * ```
 * az lock create --lock-type {CanNotDelete, ReadOnly}
 *                --name
 *                [--namespace]
 *                [--notes]
 *                [--parent]
 *                [--resource]
 *                [--resource-group]
 *                [--resource-type]
 *                [--subscription]
 * ```
 *
 * @param {'CanNotDelete' | 'ReadOnly'} lockType The type of lock restriction.
 * @param {string} name Name of the lock.
 */
var az_lock_create_command_builder = /** @class */ (function (_super) {
    __extends(az_lock_create_command_builder, _super);
    function az_lock_create_command_builder(commandPath, resultDataTypeName, lockType, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.lockType(lockType);
        _this.name(name);
        return _this;
    }
    /** The type of lock restriction. */
    az_lock_create_command_builder.prototype.lockType = function (value) {
        this.setFlag("--lock-type", value);
        return this;
    };
    /** Name of the lock. */
    az_lock_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Provider namespace (Ex: 'Microsoft.Provider'). */
    az_lock_create_command_builder.prototype.namespace = function (value) {
        this.setFlag("--namespace", value);
        return this;
    };
    /** Notes about this lock. */
    az_lock_create_command_builder.prototype.notes = function (value) {
        this.setFlag("--notes", value);
        return this;
    };
    /** The parent path (Ex: 'resA/myA/resB/myB'). */
    az_lock_create_command_builder.prototype.parent = function (value) {
        this.setFlag("--parent", value);
        return this;
    };
    /** Name or ID of the resource being locked. If an ID is given, other resource arguments should not be given. */
    az_lock_create_command_builder.prototype.resourceName = function (value) {
        this.setFlag("--resource-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_lock_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The resource type (Ex: 'resC'). Can also accept namespace/type format (Ex: 'Microsoft.Provider/resC'). */
    az_lock_create_command_builder.prototype.resourceType = function (value) {
        this.setFlag("--resource-type", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_lock_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_lock_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a lock.
 *
 * Syntax:
 * ```
 * az lock delete [--ids]
 *                [--name]
 *                [--namespace]
 *                [--parent]
 *                [--resource]
 *                [--resource-group]
 *                [--resource-type]
 *                [--subscription]
 * ```
 */
var az_lock_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_lock_delete_command_builder, _super);
    function az_lock_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). If provided, no other "Resource Id" arguments should be specified. */
    az_lock_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the lock. */
    az_lock_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Provider namespace (Ex: 'Microsoft.Provider'). */
    az_lock_delete_command_builder.prototype.namespace = function (value) {
        this.setFlag("--namespace", value);
        return this;
    };
    /** The parent path (Ex: 'resA/myA/resB/myB'). */
    az_lock_delete_command_builder.prototype.parent = function (value) {
        this.setFlag("--parent", value);
        return this;
    };
    /** Name or ID of the resource being locked. If an ID is given, other resource arguments should not be given. */
    az_lock_delete_command_builder.prototype.resourceName = function (value) {
        this.setFlag("--resource-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_lock_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The resource type (Ex: 'resC'). Can also accept namespace/type format (Ex: 'Microsoft.Provider/resC'). */
    az_lock_delete_command_builder.prototype.resourceType = function (value) {
        this.setFlag("--resource-type", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_lock_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_lock_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List lock information.
 *
 * Syntax:
 * ```
 * az lock list [--filter-string]
 *              [--namespace]
 *              [--parent]
 *              [--query-examples]
 *              [--resource]
 *              [--resource-group]
 *              [--resource-type]
 *              [--subscription]
 * ```
 */
var az_lock_list_command_builder = /** @class */ (function (_super) {
    __extends(az_lock_list_command_builder, _super);
    function az_lock_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** A query filter to use to restrict the results. */
    az_lock_list_command_builder.prototype.filterString = function (value) {
        this.setFlag("--filter-string", value);
        return this;
    };
    /** Provider namespace (Ex: 'Microsoft.Provider'). */
    az_lock_list_command_builder.prototype.namespace = function (value) {
        this.setFlag("--namespace", value);
        return this;
    };
    /** The parent path (Ex: 'resA/myA/resB/myB'). */
    az_lock_list_command_builder.prototype.parent = function (value) {
        this.setFlag("--parent", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_lock_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of the resource being locked. If an ID is given, other resource arguments should not be given. */
    az_lock_list_command_builder.prototype.resourceName = function (value) {
        this.setFlag("--resource-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_lock_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The resource type (Ex: 'resC'). Can also accept namespace/type format (Ex: 'Microsoft.Provider/resC'). */
    az_lock_list_command_builder.prototype.resourceType = function (value) {
        this.setFlag("--resource-type", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_lock_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_lock_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Show the properties of a lock.
 *
 * Syntax:
 * ```
 * az lock show [--ids]
 *              [--name]
 *              [--namespace]
 *              [--parent]
 *              [--query-examples]
 *              [--resource]
 *              [--resource-group]
 *              [--resource-type]
 *              [--subscription]
 * ```
 */
var az_lock_show_command_builder = /** @class */ (function (_super) {
    __extends(az_lock_show_command_builder, _super);
    function az_lock_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). If provided, no other "Resource Id" arguments should be specified. */
    az_lock_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the lock. */
    az_lock_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Provider namespace (Ex: 'Microsoft.Provider'). */
    az_lock_show_command_builder.prototype.namespace = function (value) {
        this.setFlag("--namespace", value);
        return this;
    };
    /** The parent path (Ex: 'resA/myA/resB/myB'). */
    az_lock_show_command_builder.prototype.parent = function (value) {
        this.setFlag("--parent", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_lock_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of the resource being locked. If an ID is given, other resource arguments should not be given. */
    az_lock_show_command_builder.prototype.resourceName = function (value) {
        this.setFlag("--resource-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_lock_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The resource type (Ex: 'resC'). Can also accept namespace/type format (Ex: 'Microsoft.Provider/resC'). */
    az_lock_show_command_builder.prototype.resourceType = function (value) {
        this.setFlag("--resource-type", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_lock_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_lock_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update a lock.
 *
 * Syntax:
 * ```
 * az lock update [--ids]
 *                [--lock-type {CanNotDelete, ReadOnly}]
 *                [--name]
 *                [--namespace]
 *                [--notes]
 *                [--parent]
 *                [--resource]
 *                [--resource-group]
 *                [--resource-type]
 *                [--subscription]
 * ```
 */
var az_lock_update_command_builder = /** @class */ (function (_super) {
    __extends(az_lock_update_command_builder, _super);
    function az_lock_update_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). If provided, no other "Resource Id" arguments should be specified. */
    az_lock_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The type of lock restriction. */
    az_lock_update_command_builder.prototype.lockType = function (value) {
        this.setFlag("--lock-type", value);
        return this;
    };
    /** Name of the lock. */
    az_lock_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Provider namespace (Ex: 'Microsoft.Provider'). */
    az_lock_update_command_builder.prototype.namespace = function (value) {
        this.setFlag("--namespace", value);
        return this;
    };
    /** Notes about this lock. */
    az_lock_update_command_builder.prototype.notes = function (value) {
        this.setFlag("--notes", value);
        return this;
    };
    /** The parent path (Ex: 'resA/myA/resB/myB'). */
    az_lock_update_command_builder.prototype.parent = function (value) {
        this.setFlag("--parent", value);
        return this;
    };
    /** Name or ID of the resource being locked. If an ID is given, other resource arguments should not be given. */
    az_lock_update_command_builder.prototype.resourceName = function (value) {
        this.setFlag("--resource-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_lock_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The resource type (Ex: 'resC'). Can also accept namespace/type format (Ex: 'Microsoft.Provider/resC'). */
    az_lock_update_command_builder.prototype.resourceType = function (value) {
        this.setFlag("--resource-type", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_lock_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_lock_update_command_builder;
}(base_1.CommandBuilder));
