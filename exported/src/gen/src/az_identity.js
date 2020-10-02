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
/** Managed Service Identities. */
var az_identity = /** @class */ (function () {
    function az_identity() {
    }
    /**
     * Create or update an identity in the specified subscription and resource group.
     *
     * Syntax:
     * ```
     * az identity create --name
     *                    --resource-group
     *                    [--location]
     *                    [--subscription]
     *                    [--tags]
     * ```
     *
     * @param {string} name The name of the identity resource.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_identity.create = function (name, resourceGroup) {
        return new az_identity_create_command_builder("az identity create", 'az_identity_create_command_result', name, resourceGroup);
    };
    /**
     * Deletes the identity.
     *
     * Syntax:
     * ```
     * az identity delete [--ids]
     *                    [--name]
     *                    [--resource-group]
     *                    [--subscription]
     * ```
     */
    az_identity["delete"] = function () {
        return new az_identity_delete_command_builder("az identity delete", 'az_identity_delete_command_result');
    };
    /**
     * List Managed Service Identities.
     *
     * Syntax:
     * ```
     * az identity list [--query-examples]
     *                  [--resource-group]
     *                  [--subscription]
     * ```
     */
    az_identity.list = function () {
        return new az_identity_list_command_builder("az identity list", 'az_identity_list_command_result');
    };
    /**
     * Lists available operations for the Managed Identity provider.
     *
     * Syntax:
     * ```
     * az identity list-operations [--subscription]
     * ```
     */
    az_identity.list_operations = function () {
        return new az_identity_list_operations_command_builder("az identity list-operations", 'az_identity_list_operations_command_result');
    };
    /**
     * Gets the identity.
     *
     * Syntax:
     * ```
     * az identity show [--ids]
     *                  [--name]
     *                  [--query-examples]
     *                  [--resource-group]
     *                  [--subscription]
     * ```
     */
    az_identity.show = function () {
        return new az_identity_show_command_builder("az identity show", 'az_identity_show_command_result');
    };
    return az_identity;
}());
exports.az_identity = az_identity;
/**
 * Create or update an identity in the specified subscription and resource group.
 *
 * Syntax:
 * ```
 * az identity create --name
 *                    --resource-group
 *                    [--location]
 *                    [--subscription]
 *                    [--tags]
 * ```
 *
 * @param {string} name The name of the identity resource.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_identity_create_command_builder = /** @class */ (function (_super) {
    __extends(az_identity_create_command_builder, _super);
    function az_identity_create_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the identity resource. */
    az_identity_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_identity_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_identity_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_identity_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_identity_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_identity_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Deletes the identity.
 *
 * Syntax:
 * ```
 * az identity delete [--ids]
 *                    [--name]
 *                    [--resource-group]
 *                    [--subscription]
 * ```
 */
var az_identity_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_identity_delete_command_builder, _super);
    function az_identity_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_identity_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the identity resource. */
    az_identity_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_identity_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_identity_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_identity_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List Managed Service Identities.
 *
 * Syntax:
 * ```
 * az identity list [--query-examples]
 *                  [--resource-group]
 *                  [--subscription]
 * ```
 */
var az_identity_list_command_builder = /** @class */ (function (_super) {
    __extends(az_identity_list_command_builder, _super);
    function az_identity_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_identity_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_identity_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_identity_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_identity_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Lists available operations for the Managed Identity provider.
 *
 * Syntax:
 * ```
 * az identity list-operations [--subscription]
 * ```
 */
var az_identity_list_operations_command_builder = /** @class */ (function (_super) {
    __extends(az_identity_list_operations_command_builder, _super);
    function az_identity_list_operations_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_identity_list_operations_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_identity_list_operations_command_builder;
}(base_1.CommandBuilder));
/**
 * Gets the identity.
 *
 * Syntax:
 * ```
 * az identity show [--ids]
 *                  [--name]
 *                  [--query-examples]
 *                  [--resource-group]
 *                  [--subscription]
 * ```
 */
var az_identity_show_command_builder = /** @class */ (function (_super) {
    __extends(az_identity_show_command_builder, _super);
    function az_identity_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_identity_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the identity resource. */
    az_identity_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_identity_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_identity_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_identity_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_identity_show_command_builder;
}(base_1.CommandBuilder));
