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
exports.az_maps = exports.az_maps_account = exports.az_maps_account_keys = void 0;
var base_1 = require("../base");
/** Manage Azure Maps account keys. */
var az_maps_account_keys = /** @class */ (function () {
    function az_maps_account_keys() {
    }
    /**
     * List the keys to use with the Maps APIs.
     *
     * Syntax:
     * ```
     * az maps account keys list --name
     *                           --resource-group
     *                           [--query-examples]
     *                           [--subscription]
     * ```
     *
     * @param {string} name The name of the maps account.
     * @param {string} resourceGroup Resource group name.
     */
    az_maps_account_keys.list = function (name, resourceGroup) {
        return new az_maps_account_keys_list_command_builder("az maps account keys list", 'az_maps_account_keys_list_command_result', name, resourceGroup);
    };
    /**
     * Renew either the primary or secondary key for use with the Maps APIs.
     *
     * Syntax:
     * ```
     * az maps account keys renew --key {primary, secondary}
     *                            --name
     *                            --resource-group
     *                            [--subscription]
     * ```
     *
     * @param {'primary' | 'secondary'} key Whether the operation refers to the primary or secondary key.
     * @param {string} name The name of the maps account.
     * @param {string} resourceGroup Resource group name.
     */
    az_maps_account_keys.renew = function (key, name, resourceGroup) {
        return new az_maps_account_keys_renew_command_builder("az maps account keys renew", 'az_maps_account_keys_renew_command_result', key, name, resourceGroup);
    };
    return az_maps_account_keys;
}());
exports.az_maps_account_keys = az_maps_account_keys;
/** Manage Azure Maps accounts. */
var az_maps_account = /** @class */ (function () {
    function az_maps_account() {
    }
    /**
     * Create a maps account.
     *
     * Syntax:
     * ```
     * az maps account create --name
     *                        --resource-group
     *                        [--accept-tos]
     *                        [--sku {S0, S1}]
     *                        [--subscription]
     *                        [--tags]
     * ```
     *
     * @param {string} name The name of the maps account.
     * @param {string} resourceGroup Resource group name.
     */
    az_maps_account.create = function (name, resourceGroup) {
        return new az_maps_account_create_command_builder("az maps account create", 'az_maps_account_create_command_result', name, resourceGroup);
    };
    /**
     * Delete a maps account.
     *
     * Syntax:
     * ```
     * az maps account delete [--ids]
     *                        [--name]
     *                        [--resource-group]
     *                        [--subscription]
     * ```
     */
    az_maps_account["delete"] = function () {
        return new az_maps_account_delete_command_builder("az maps account delete", 'az_maps_account_delete_command_result');
    };
    /**
     * Show all maps accounts in a subscription or in a resource group.
     *
     * Syntax:
     * ```
     * az maps account list [--query-examples]
     *                      [--resource-group]
     *                      [--subscription]
     * ```
     */
    az_maps_account.list = function () {
        return new az_maps_account_list_command_builder("az maps account list", 'az_maps_account_list_command_result');
    };
    /**
     * Show the details of a maps account.
     *
     * Syntax:
     * ```
     * az maps account show [--ids]
     *                      [--name]
     *                      [--query-examples]
     *                      [--resource-group]
     *                      [--subscription]
     * ```
     */
    az_maps_account.show = function () {
        return new az_maps_account_show_command_builder("az maps account show", 'az_maps_account_show_command_result');
    };
    /**
     * Update the properties of a maps account.
     *
     * Syntax:
     * ```
     * az maps account update [--add]
     *                        [--force-string]
     *                        [--ids]
     *                        [--name]
     *                        [--remove]
     *                        [--resource-group]
     *                        [--set]
     *                        [--sku {S0, S1}]
     *                        [--subscription]
     *                        [--tags]
     * ```
     */
    az_maps_account.update = function () {
        return new az_maps_account_update_command_builder("az maps account update", 'az_maps_account_update_command_result');
    };
    return az_maps_account;
}());
exports.az_maps_account = az_maps_account;
/** Manage Azure Maps. */
var az_maps = /** @class */ (function () {
    function az_maps() {
    }
    return az_maps;
}());
exports.az_maps = az_maps;
/**
 * List the keys to use with the Maps APIs.
 *
 * Syntax:
 * ```
 * az maps account keys list --name
 *                           --resource-group
 *                           [--query-examples]
 *                           [--subscription]
 * ```
 *
 * @param {string} name The name of the maps account.
 * @param {string} resourceGroup Resource group name.
 */
var az_maps_account_keys_list_command_builder = /** @class */ (function (_super) {
    __extends(az_maps_account_keys_list_command_builder, _super);
    function az_maps_account_keys_list_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the maps account. */
    az_maps_account_keys_list_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Resource group name. */
    az_maps_account_keys_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_maps_account_keys_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_maps_account_keys_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_maps_account_keys_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Renew either the primary or secondary key for use with the Maps APIs.
 *
 * Syntax:
 * ```
 * az maps account keys renew --key {primary, secondary}
 *                            --name
 *                            --resource-group
 *                            [--subscription]
 * ```
 *
 * @param {'primary' | 'secondary'} key Whether the operation refers to the primary or secondary key.
 * @param {string} name The name of the maps account.
 * @param {string} resourceGroup Resource group name.
 */
var az_maps_account_keys_renew_command_builder = /** @class */ (function (_super) {
    __extends(az_maps_account_keys_renew_command_builder, _super);
    function az_maps_account_keys_renew_command_builder(commandPath, resultDataTypeName, key, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.key(key);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Whether the operation refers to the primary or secondary key. */
    az_maps_account_keys_renew_command_builder.prototype.key = function (value) {
        this.setFlag("--key", value);
        return this;
    };
    /** The name of the maps account. */
    az_maps_account_keys_renew_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Resource group name. */
    az_maps_account_keys_renew_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_maps_account_keys_renew_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_maps_account_keys_renew_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a maps account.
 *
 * Syntax:
 * ```
 * az maps account create --name
 *                        --resource-group
 *                        [--accept-tos]
 *                        [--sku {S0, S1}]
 *                        [--subscription]
 *                        [--tags]
 * ```
 *
 * @param {string} name The name of the maps account.
 * @param {string} resourceGroup Resource group name.
 */
var az_maps_account_create_command_builder = /** @class */ (function (_super) {
    __extends(az_maps_account_create_command_builder, _super);
    function az_maps_account_create_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the maps account. */
    az_maps_account_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Resource group name. */
    az_maps_account_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Accept the Terms of Service, and do not prompt for confirmation. */
    az_maps_account_create_command_builder.prototype.acceptTos = function (value) {
        this.setFlag("--accept-tos", value);
        return this;
    };
    /** The name of the SKU. */
    az_maps_account_create_command_builder.prototype.sku = function (value) {
        this.setFlag("--sku", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_maps_account_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_maps_account_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_maps_account_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a maps account.
 *
 * Syntax:
 * ```
 * az maps account delete [--ids]
 *                        [--name]
 *                        [--resource-group]
 *                        [--subscription]
 * ```
 */
var az_maps_account_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_maps_account_delete_command_builder, _super);
    function az_maps_account_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_maps_account_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the maps account. */
    az_maps_account_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Resource group name. */
    az_maps_account_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_maps_account_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_maps_account_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * Show all maps accounts in a subscription or in a resource group.
 *
 * Syntax:
 * ```
 * az maps account list [--query-examples]
 *                      [--resource-group]
 *                      [--subscription]
 * ```
 */
var az_maps_account_list_command_builder = /** @class */ (function (_super) {
    __extends(az_maps_account_list_command_builder, _super);
    function az_maps_account_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_maps_account_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Resource group name. */
    az_maps_account_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_maps_account_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_maps_account_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Show the details of a maps account.
 *
 * Syntax:
 * ```
 * az maps account show [--ids]
 *                      [--name]
 *                      [--query-examples]
 *                      [--resource-group]
 *                      [--subscription]
 * ```
 */
var az_maps_account_show_command_builder = /** @class */ (function (_super) {
    __extends(az_maps_account_show_command_builder, _super);
    function az_maps_account_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_maps_account_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the maps account. */
    az_maps_account_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_maps_account_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Resource group name. */
    az_maps_account_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_maps_account_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_maps_account_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update the properties of a maps account.
 *
 * Syntax:
 * ```
 * az maps account update [--add]
 *                        [--force-string]
 *                        [--ids]
 *                        [--name]
 *                        [--remove]
 *                        [--resource-group]
 *                        [--set]
 *                        [--sku {S0, S1}]
 *                        [--subscription]
 *                        [--tags]
 * ```
 */
var az_maps_account_update_command_builder = /** @class */ (function (_super) {
    __extends(az_maps_account_update_command_builder, _super);
    function az_maps_account_update_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_maps_account_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_maps_account_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_maps_account_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the maps account. */
    az_maps_account_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_maps_account_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Resource group name. */
    az_maps_account_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_maps_account_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** The name of the SKU. */
    az_maps_account_update_command_builder.prototype.sku = function (value) {
        this.setFlag("--sku", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_maps_account_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_maps_account_update_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_maps_account_update_command_builder;
}(base_1.CommandBuilder));
