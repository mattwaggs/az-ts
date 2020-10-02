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
/** Manage identity of Cognitive Services accounts. */
var az_cognitiveservices_account_identity = /** @class */ (function () {
    function az_cognitiveservices_account_identity() {
    }
    /**
     * Assign an identity of a Cognitive Services account.
     *
     * Syntax:
     * ```
     * az cognitiveservices account identity assign --name
     *                                              --resource-group
     *                                              [--subscription]
     * ```
     *
     * @param {string} name Cognitive service account name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cognitiveservices_account_identity.assign = function (name, resourceGroup) {
        return new az_cognitiveservices_account_identity_assign_command_builder("az cognitiveservices account identity assign", 'az_cognitiveservices_account_identity_assign_command_result', name, resourceGroup);
    };
    /**
     * Remove the identity from a Cognitive Services account.
     *
     * Syntax:
     * ```
     * az cognitiveservices account identity remove --name
     *                                              --resource-group
     *                                              [--subscription]
     * ```
     *
     * @param {string} name Cognitive service account name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cognitiveservices_account_identity.remove = function (name, resourceGroup) {
        return new az_cognitiveservices_account_identity_remove_command_builder("az cognitiveservices account identity remove", 'az_cognitiveservices_account_identity_remove_command_result', name, resourceGroup);
    };
    /**
     * Show the identity of a Cognitive Services account.
     *
     * Syntax:
     * ```
     * az cognitiveservices account identity show --name
     *                                            --resource-group
     *                                            [--query-examples]
     *                                            [--subscription]
     * ```
     *
     * @param {string} name Cognitive service account name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cognitiveservices_account_identity.show = function (name, resourceGroup) {
        return new az_cognitiveservices_account_identity_show_command_builder("az cognitiveservices account identity show", 'az_cognitiveservices_account_identity_show_command_result', name, resourceGroup);
    };
    return az_cognitiveservices_account_identity;
}());
exports.az_cognitiveservices_account_identity = az_cognitiveservices_account_identity;
/** Manage Azure Cognitive Services accounts. */
var az_cognitiveservices_account_keys = /** @class */ (function () {
    function az_cognitiveservices_account_keys() {
    }
    /**
     * Manage Azure Cognitive Services accounts.
     *
     * Syntax:
     * ```
     * az cognitiveservices account keys list --name
     *                                        --resource-group
     *                                        [--query-examples]
     *                                        [--subscription]
     * ```
     *
     * @param {string} name Cognitive service account name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cognitiveservices_account_keys.list = function (name, resourceGroup) {
        return new az_cognitiveservices_account_keys_list_command_builder("az cognitiveservices account keys list", 'az_cognitiveservices_account_keys_list_command_result', name, resourceGroup);
    };
    /**
     * Manage Azure Cognitive Services accounts.
     *
     * Syntax:
     * ```
     * az cognitiveservices account keys regenerate --key-name {key1, key2}
     *                                              --name
     *                                              --resource-group
     *                                              [--subscription]
     * ```
     *
     * @param {'key1' | 'key2'} keyName Key name to generate.
     * @param {string} name Cognitive service account name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cognitiveservices_account_keys.regenerate = function (keyName, name, resourceGroup) {
        return new az_cognitiveservices_account_keys_regenerate_command_builder("az cognitiveservices account keys regenerate", 'az_cognitiveservices_account_keys_regenerate_command_result', keyName, name, resourceGroup);
    };
    return az_cognitiveservices_account_keys;
}());
exports.az_cognitiveservices_account_keys = az_cognitiveservices_account_keys;
/** Manage network rules. */
var az_cognitiveservices_account_network_rule = /** @class */ (function () {
    function az_cognitiveservices_account_network_rule() {
    }
    /**
     * Add a network rule.
     *
     * Syntax:
     * ```
     * az cognitiveservices account network-rule add --name
     *                                               --resource-group
     *                                               [--ip-address]
     *                                               [--subnet]
     *                                               [--subscription]
     *                                               [--vnet-name]
     * ```
     *
     * @param {string} name Cognitive service account name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cognitiveservices_account_network_rule.add = function (name, resourceGroup) {
        return new az_cognitiveservices_account_network_rule_add_command_builder("az cognitiveservices account network-rule add", 'az_cognitiveservices_account_network_rule_add_command_result', name, resourceGroup);
    };
    /**
     * List network rules.
     *
     * Syntax:
     * ```
     * az cognitiveservices account network-rule list --name
     *                                                --resource-group
     *                                                [--query-examples]
     *                                                [--subscription]
     * ```
     *
     * @param {string} name Cognitive service account name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cognitiveservices_account_network_rule.list = function (name, resourceGroup) {
        return new az_cognitiveservices_account_network_rule_list_command_builder("az cognitiveservices account network-rule list", 'az_cognitiveservices_account_network_rule_list_command_result', name, resourceGroup);
    };
    /**
     * Remove a network rule.
     *
     * Syntax:
     * ```
     * az cognitiveservices account network-rule remove --name
     *                                                  --resource-group
     *                                                  [--ip-address]
     *                                                  [--subnet]
     *                                                  [--subscription]
     *                                                  [--vnet-name]
     * ```
     *
     * @param {string} name Cognitive service account name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cognitiveservices_account_network_rule.remove = function (name, resourceGroup) {
        return new az_cognitiveservices_account_network_rule_remove_command_builder("az cognitiveservices account network-rule remove", 'az_cognitiveservices_account_network_rule_remove_command_result', name, resourceGroup);
    };
    return az_cognitiveservices_account_network_rule;
}());
exports.az_cognitiveservices_account_network_rule = az_cognitiveservices_account_network_rule;
/** Manage Azure Cognitive Services accounts. */
var az_cognitiveservices_account = /** @class */ (function () {
    function az_cognitiveservices_account() {
    }
    /**
     * Manage Azure Cognitive Services accounts.
     *
     * Syntax:
     * ```
     * az cognitiveservices account create --kind
     *                                     --location
     *                                     --name
     *                                     --resource-group
     *                                     --sku
     *                                     [--api-properties]
     *                                     [--assign-identity]
     *                                     [--custom-domain]
     *                                     [--encryption]
     *                                     [--storage]
     *                                     [--subscription]
     *                                     [--tags]
     *                                     [--yes]
     * ```
     *
     * @param {string} kind The API name of cognitive services account.
     * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
     * @param {string} name Cognitive service account name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} sku Name of the Sku of cognitive services account.
     */
    az_cognitiveservices_account.create = function (kind, location, name, resourceGroup, sku) {
        return new az_cognitiveservices_account_create_command_builder("az cognitiveservices account create", 'az_cognitiveservices_account_create_command_result', kind, location, name, resourceGroup, sku);
    };
    /**
     * Manage Azure Cognitive Services accounts.
     *
     * Syntax:
     * ```
     * az cognitiveservices account delete --name
     *                                     --resource-group
     *                                     [--subscription]
     * ```
     *
     * @param {string} name Cognitive service account name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cognitiveservices_account["delete"] = function (name, resourceGroup) {
        return new az_cognitiveservices_account_delete_command_builder("az cognitiveservices account delete", 'az_cognitiveservices_account_delete_command_result', name, resourceGroup);
    };
    /**
     * Manage Azure Cognitive Services accounts.
     *
     * Syntax:
     * ```
     * az cognitiveservices account list [--query-examples]
     *                                   [--resource-group]
     *                                   [--subscription]
     * ```
     */
    az_cognitiveservices_account.list = function () {
        return new az_cognitiveservices_account_list_command_builder("az cognitiveservices account list", 'az_cognitiveservices_account_list_command_result');
    };
    /**
     * List all valid kinds for Azure Cognitive Services account.
     *
     * Syntax:
     * ```
     * az cognitiveservices account list-kinds [--subscription]
     * ```
     */
    az_cognitiveservices_account.list_kinds = function () {
        return new az_cognitiveservices_account_list_kinds_command_builder("az cognitiveservices account list-kinds", 'az_cognitiveservices_account_list_kinds_command_result');
    };
    /**
     * Manage Azure Cognitive Services accounts.
     *
     * Syntax:
     * ```
     * az cognitiveservices account list-skus [--kind]
     *                                        [--location]
     *                                        [--name]
     *                                        [--resource-group]
     *                                        [--subscription]
     * ```
     */
    az_cognitiveservices_account.list_skus = function () {
        return new az_cognitiveservices_account_list_skus_command_builder("az cognitiveservices account list-skus", 'az_cognitiveservices_account_list_skus_command_result');
    };
    /**
     * List usages for Azure Cognitive Services account.
     *
     * Syntax:
     * ```
     * az cognitiveservices account list-usage --name
     *                                         --resource-group
     *                                         [--subscription]
     * ```
     *
     * @param {string} name Cognitive service account name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cognitiveservices_account.list_usage = function (name, resourceGroup) {
        return new az_cognitiveservices_account_list_usage_command_builder("az cognitiveservices account list-usage", 'az_cognitiveservices_account_list_usage_command_result', name, resourceGroup);
    };
    /**
     * Manage Azure Cognitive Services accounts.
     *
     * Syntax:
     * ```
     * az cognitiveservices account show --name
     *                                   --resource-group
     *                                   [--query-examples]
     *                                   [--subscription]
     * ```
     *
     * @param {string} name Cognitive service account name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cognitiveservices_account.show = function (name, resourceGroup) {
        return new az_cognitiveservices_account_show_command_builder("az cognitiveservices account show", 'az_cognitiveservices_account_show_command_result', name, resourceGroup);
    };
    /**
     * Manage Azure Cognitive Services accounts.
     *
     * Syntax:
     * ```
     * az cognitiveservices account update --name
     *                                     --resource-group
     *                                     [--api-properties]
     *                                     [--custom-domain]
     *                                     [--encryption]
     *                                     [--sku]
     *                                     [--storage]
     *                                     [--subscription]
     *                                     [--tags]
     * ```
     *
     * @param {string} name Cognitive service account name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_cognitiveservices_account.update = function (name, resourceGroup) {
        return new az_cognitiveservices_account_update_command_builder("az cognitiveservices account update", 'az_cognitiveservices_account_update_command_result', name, resourceGroup);
    };
    return az_cognitiveservices_account;
}());
exports.az_cognitiveservices_account = az_cognitiveservices_account;
/** Manage Azure Cognitive Services accounts. */
var az_cognitiveservices = /** @class */ (function () {
    function az_cognitiveservices() {
    }
    /**
     * Manage Azure Cognitive Services accounts.
     *
     * Syntax:
     * ```
     * az cognitiveservices list [--query-examples]
     *                           [--resource-group]
     *                           [--subscription]
     * ```
     */
    az_cognitiveservices.list = function () {
        return new az_cognitiveservices_list_command_builder("az cognitiveservices list", 'az_cognitiveservices_list_command_result');
    };
    return az_cognitiveservices;
}());
exports.az_cognitiveservices = az_cognitiveservices;
/**
 * Assign an identity of a Cognitive Services account.
 *
 * Syntax:
 * ```
 * az cognitiveservices account identity assign --name
 *                                              --resource-group
 *                                              [--subscription]
 * ```
 *
 * @param {string} name Cognitive service account name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_cognitiveservices_account_identity_assign_command_builder = /** @class */ (function (_super) {
    __extends(az_cognitiveservices_account_identity_assign_command_builder, _super);
    function az_cognitiveservices_account_identity_assign_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Cognitive service account name. */
    az_cognitiveservices_account_identity_assign_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cognitiveservices_account_identity_assign_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cognitiveservices_account_identity_assign_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cognitiveservices_account_identity_assign_command_builder;
}(base_1.CommandBuilder));
/**
 * Remove the identity from a Cognitive Services account.
 *
 * Syntax:
 * ```
 * az cognitiveservices account identity remove --name
 *                                              --resource-group
 *                                              [--subscription]
 * ```
 *
 * @param {string} name Cognitive service account name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_cognitiveservices_account_identity_remove_command_builder = /** @class */ (function (_super) {
    __extends(az_cognitiveservices_account_identity_remove_command_builder, _super);
    function az_cognitiveservices_account_identity_remove_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Cognitive service account name. */
    az_cognitiveservices_account_identity_remove_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cognitiveservices_account_identity_remove_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cognitiveservices_account_identity_remove_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cognitiveservices_account_identity_remove_command_builder;
}(base_1.CommandBuilder));
/**
 * Show the identity of a Cognitive Services account.
 *
 * Syntax:
 * ```
 * az cognitiveservices account identity show --name
 *                                            --resource-group
 *                                            [--query-examples]
 *                                            [--subscription]
 * ```
 *
 * @param {string} name Cognitive service account name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_cognitiveservices_account_identity_show_command_builder = /** @class */ (function (_super) {
    __extends(az_cognitiveservices_account_identity_show_command_builder, _super);
    function az_cognitiveservices_account_identity_show_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Cognitive service account name. */
    az_cognitiveservices_account_identity_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cognitiveservices_account_identity_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_cognitiveservices_account_identity_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cognitiveservices_account_identity_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cognitiveservices_account_identity_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Manage Azure Cognitive Services accounts.
 *
 * Syntax:
 * ```
 * az cognitiveservices account keys list --name
 *                                        --resource-group
 *                                        [--query-examples]
 *                                        [--subscription]
 * ```
 *
 * @param {string} name Cognitive service account name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_cognitiveservices_account_keys_list_command_builder = /** @class */ (function (_super) {
    __extends(az_cognitiveservices_account_keys_list_command_builder, _super);
    function az_cognitiveservices_account_keys_list_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Cognitive service account name. */
    az_cognitiveservices_account_keys_list_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cognitiveservices_account_keys_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_cognitiveservices_account_keys_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cognitiveservices_account_keys_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cognitiveservices_account_keys_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Manage Azure Cognitive Services accounts.
 *
 * Syntax:
 * ```
 * az cognitiveservices account keys regenerate --key-name {key1, key2}
 *                                              --name
 *                                              --resource-group
 *                                              [--subscription]
 * ```
 *
 * @param {'key1' | 'key2'} keyName Key name to generate.
 * @param {string} name Cognitive service account name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_cognitiveservices_account_keys_regenerate_command_builder = /** @class */ (function (_super) {
    __extends(az_cognitiveservices_account_keys_regenerate_command_builder, _super);
    function az_cognitiveservices_account_keys_regenerate_command_builder(commandPath, resultDataTypeName, keyName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.keyName(keyName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Key name to generate. */
    az_cognitiveservices_account_keys_regenerate_command_builder.prototype.keyName = function (value) {
        this.setFlag("--key-name", value);
        return this;
    };
    /** Cognitive service account name. */
    az_cognitiveservices_account_keys_regenerate_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cognitiveservices_account_keys_regenerate_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cognitiveservices_account_keys_regenerate_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cognitiveservices_account_keys_regenerate_command_builder;
}(base_1.CommandBuilder));
/**
 * Add a network rule.
 *
 * Syntax:
 * ```
 * az cognitiveservices account network-rule add --name
 *                                               --resource-group
 *                                               [--ip-address]
 *                                               [--subnet]
 *                                               [--subscription]
 *                                               [--vnet-name]
 * ```
 *
 * @param {string} name Cognitive service account name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_cognitiveservices_account_network_rule_add_command_builder = /** @class */ (function (_super) {
    __extends(az_cognitiveservices_account_network_rule_add_command_builder, _super);
    function az_cognitiveservices_account_network_rule_add_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Cognitive service account name. */
    az_cognitiveservices_account_network_rule_add_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cognitiveservices_account_network_rule_add_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** IPv4 address or CIDR range. */
    az_cognitiveservices_account_network_rule_add_command_builder.prototype.ipAddress = function (value) {
        this.setFlag("--ip-address", value);
        return this;
    };
    /** Name or ID of subnet. If name is supplied, `--vnet-name` must be supplied. */
    az_cognitiveservices_account_network_rule_add_command_builder.prototype.subnet = function (value) {
        this.setFlag("--subnet", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cognitiveservices_account_network_rule_add_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Name of a virtual network. */
    az_cognitiveservices_account_network_rule_add_command_builder.prototype.vnetName = function (value) {
        this.setFlag("--vnet-name", value);
        return this;
    };
    return az_cognitiveservices_account_network_rule_add_command_builder;
}(base_1.CommandBuilder));
/**
 * List network rules.
 *
 * Syntax:
 * ```
 * az cognitiveservices account network-rule list --name
 *                                                --resource-group
 *                                                [--query-examples]
 *                                                [--subscription]
 * ```
 *
 * @param {string} name Cognitive service account name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_cognitiveservices_account_network_rule_list_command_builder = /** @class */ (function (_super) {
    __extends(az_cognitiveservices_account_network_rule_list_command_builder, _super);
    function az_cognitiveservices_account_network_rule_list_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Cognitive service account name. */
    az_cognitiveservices_account_network_rule_list_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cognitiveservices_account_network_rule_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_cognitiveservices_account_network_rule_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cognitiveservices_account_network_rule_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cognitiveservices_account_network_rule_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Remove a network rule.
 *
 * Syntax:
 * ```
 * az cognitiveservices account network-rule remove --name
 *                                                  --resource-group
 *                                                  [--ip-address]
 *                                                  [--subnet]
 *                                                  [--subscription]
 *                                                  [--vnet-name]
 * ```
 *
 * @param {string} name Cognitive service account name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_cognitiveservices_account_network_rule_remove_command_builder = /** @class */ (function (_super) {
    __extends(az_cognitiveservices_account_network_rule_remove_command_builder, _super);
    function az_cognitiveservices_account_network_rule_remove_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Cognitive service account name. */
    az_cognitiveservices_account_network_rule_remove_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cognitiveservices_account_network_rule_remove_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** IPv4 address or CIDR range. */
    az_cognitiveservices_account_network_rule_remove_command_builder.prototype.ipAddress = function (value) {
        this.setFlag("--ip-address", value);
        return this;
    };
    /** Name or ID of subnet. If name is supplied, `--vnet-name` must be supplied. */
    az_cognitiveservices_account_network_rule_remove_command_builder.prototype.subnet = function (value) {
        this.setFlag("--subnet", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cognitiveservices_account_network_rule_remove_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Name of a virtual network. */
    az_cognitiveservices_account_network_rule_remove_command_builder.prototype.vnetName = function (value) {
        this.setFlag("--vnet-name", value);
        return this;
    };
    return az_cognitiveservices_account_network_rule_remove_command_builder;
}(base_1.CommandBuilder));
/**
 * Manage Azure Cognitive Services accounts.
 *
 * Syntax:
 * ```
 * az cognitiveservices account create --kind
 *                                     --location
 *                                     --name
 *                                     --resource-group
 *                                     --sku
 *                                     [--api-properties]
 *                                     [--assign-identity]
 *                                     [--custom-domain]
 *                                     [--encryption]
 *                                     [--storage]
 *                                     [--subscription]
 *                                     [--tags]
 *                                     [--yes]
 * ```
 *
 * @param {string} kind The API name of cognitive services account.
 * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
 * @param {string} name Cognitive service account name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} sku Name of the Sku of cognitive services account.
 */
var az_cognitiveservices_account_create_command_builder = /** @class */ (function (_super) {
    __extends(az_cognitiveservices_account_create_command_builder, _super);
    function az_cognitiveservices_account_create_command_builder(commandPath, resultDataTypeName, kind, location, name, resourceGroup, sku) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.kind(kind);
        _this.location(location);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.sku(sku);
        return _this;
    }
    /** The API name of cognitive services account. */
    az_cognitiveservices_account_create_command_builder.prototype.kind = function (value) {
        this.setFlag("--kind", value);
        return this;
    };
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_cognitiveservices_account_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Cognitive service account name. */
    az_cognitiveservices_account_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cognitiveservices_account_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Sku of cognitive services account. */
    az_cognitiveservices_account_create_command_builder.prototype.sku = function (value) {
        this.setFlag("--sku", value);
        return this;
    };
    /** Api properties in JSON format or a=b c=d format. Some cognitive services (i.e. QnA Maker) require extra api properties to create the account. */
    az_cognitiveservices_account_create_command_builder.prototype.apiProperties = function (value) {
        this.setFlag("--api-properties", value);
        return this;
    };
    /** Generate and assign an Azure Active Directory Identity for this account. */
    az_cognitiveservices_account_create_command_builder.prototype.assignIdentity = function (value) {
        this.setFlag("--assign-identity", value);
        return this;
    };
    /** User domain assigned to the account. Name is the CNAME source. */
    az_cognitiveservices_account_create_command_builder.prototype.customDomain = function (value) {
        this.setFlag("--custom-domain", value);
        return this;
    };
    /** The encryption properties for this resource, in JSON format. */
    az_cognitiveservices_account_create_command_builder.prototype.encryption = function (value) {
        this.setFlag("--encryption", value);
        return this;
    };
    /** The storage accounts for this resource, in JSON array format. */
    az_cognitiveservices_account_create_command_builder.prototype.storage = function (value) {
        this.setFlag("--storage", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cognitiveservices_account_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_cognitiveservices_account_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    /** Do not prompt for terms confirmation. */
    az_cognitiveservices_account_create_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_cognitiveservices_account_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Manage Azure Cognitive Services accounts.
 *
 * Syntax:
 * ```
 * az cognitiveservices account delete --name
 *                                     --resource-group
 *                                     [--subscription]
 * ```
 *
 * @param {string} name Cognitive service account name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_cognitiveservices_account_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_cognitiveservices_account_delete_command_builder, _super);
    function az_cognitiveservices_account_delete_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Cognitive service account name. */
    az_cognitiveservices_account_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cognitiveservices_account_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cognitiveservices_account_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cognitiveservices_account_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * Manage Azure Cognitive Services accounts.
 *
 * Syntax:
 * ```
 * az cognitiveservices account list [--query-examples]
 *                                   [--resource-group]
 *                                   [--subscription]
 * ```
 */
var az_cognitiveservices_account_list_command_builder = /** @class */ (function (_super) {
    __extends(az_cognitiveservices_account_list_command_builder, _super);
    function az_cognitiveservices_account_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_cognitiveservices_account_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cognitiveservices_account_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cognitiveservices_account_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cognitiveservices_account_list_command_builder;
}(base_1.CommandBuilder));
/**
 * List all valid kinds for Azure Cognitive Services account.
 *
 * Syntax:
 * ```
 * az cognitiveservices account list-kinds [--subscription]
 * ```
 */
var az_cognitiveservices_account_list_kinds_command_builder = /** @class */ (function (_super) {
    __extends(az_cognitiveservices_account_list_kinds_command_builder, _super);
    function az_cognitiveservices_account_list_kinds_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cognitiveservices_account_list_kinds_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cognitiveservices_account_list_kinds_command_builder;
}(base_1.CommandBuilder));
/**
 * Manage Azure Cognitive Services accounts.
 *
 * Syntax:
 * ```
 * az cognitiveservices account list-skus [--kind]
 *                                        [--location]
 *                                        [--name]
 *                                        [--resource-group]
 *                                        [--subscription]
 * ```
 */
var az_cognitiveservices_account_list_skus_command_builder = /** @class */ (function (_super) {
    __extends(az_cognitiveservices_account_list_skus_command_builder, _super);
    function az_cognitiveservices_account_list_skus_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The API name of cognitive services account. */
    az_cognitiveservices_account_list_skus_command_builder.prototype.kind = function (value) {
        this.setFlag("--kind", value);
        return this;
    };
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_cognitiveservices_account_list_skus_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Cognitive service account name. */
    az_cognitiveservices_account_list_skus_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cognitiveservices_account_list_skus_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cognitiveservices_account_list_skus_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cognitiveservices_account_list_skus_command_builder;
}(base_1.CommandBuilder));
/**
 * List usages for Azure Cognitive Services account.
 *
 * Syntax:
 * ```
 * az cognitiveservices account list-usage --name
 *                                         --resource-group
 *                                         [--subscription]
 * ```
 *
 * @param {string} name Cognitive service account name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_cognitiveservices_account_list_usage_command_builder = /** @class */ (function (_super) {
    __extends(az_cognitiveservices_account_list_usage_command_builder, _super);
    function az_cognitiveservices_account_list_usage_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Cognitive service account name. */
    az_cognitiveservices_account_list_usage_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cognitiveservices_account_list_usage_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cognitiveservices_account_list_usage_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cognitiveservices_account_list_usage_command_builder;
}(base_1.CommandBuilder));
/**
 * Manage Azure Cognitive Services accounts.
 *
 * Syntax:
 * ```
 * az cognitiveservices account show --name
 *                                   --resource-group
 *                                   [--query-examples]
 *                                   [--subscription]
 * ```
 *
 * @param {string} name Cognitive service account name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_cognitiveservices_account_show_command_builder = /** @class */ (function (_super) {
    __extends(az_cognitiveservices_account_show_command_builder, _super);
    function az_cognitiveservices_account_show_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Cognitive service account name. */
    az_cognitiveservices_account_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cognitiveservices_account_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_cognitiveservices_account_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cognitiveservices_account_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cognitiveservices_account_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Manage Azure Cognitive Services accounts.
 *
 * Syntax:
 * ```
 * az cognitiveservices account update --name
 *                                     --resource-group
 *                                     [--api-properties]
 *                                     [--custom-domain]
 *                                     [--encryption]
 *                                     [--sku]
 *                                     [--storage]
 *                                     [--subscription]
 *                                     [--tags]
 * ```
 *
 * @param {string} name Cognitive service account name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_cognitiveservices_account_update_command_builder = /** @class */ (function (_super) {
    __extends(az_cognitiveservices_account_update_command_builder, _super);
    function az_cognitiveservices_account_update_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Cognitive service account name. */
    az_cognitiveservices_account_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cognitiveservices_account_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Api properties in JSON format or a=b c=d format. Some cognitive services (i.e. QnA Maker) require extra api properties to create the account. */
    az_cognitiveservices_account_update_command_builder.prototype.apiProperties = function (value) {
        this.setFlag("--api-properties", value);
        return this;
    };
    /** User domain assigned to the account. Name is the CNAME source. */
    az_cognitiveservices_account_update_command_builder.prototype.customDomain = function (value) {
        this.setFlag("--custom-domain", value);
        return this;
    };
    /** The encryption properties for this resource, in JSON format. */
    az_cognitiveservices_account_update_command_builder.prototype.encryption = function (value) {
        this.setFlag("--encryption", value);
        return this;
    };
    /** Name of the Sku of cognitive services account. */
    az_cognitiveservices_account_update_command_builder.prototype.sku = function (value) {
        this.setFlag("--sku", value);
        return this;
    };
    /** The storage accounts for this resource, in JSON array format. */
    az_cognitiveservices_account_update_command_builder.prototype.storage = function (value) {
        this.setFlag("--storage", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cognitiveservices_account_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_cognitiveservices_account_update_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_cognitiveservices_account_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Manage Azure Cognitive Services accounts.
 *
 * Syntax:
 * ```
 * az cognitiveservices list [--query-examples]
 *                           [--resource-group]
 *                           [--subscription]
 * ```
 */
var az_cognitiveservices_list_command_builder = /** @class */ (function (_super) {
    __extends(az_cognitiveservices_list_command_builder, _super);
    function az_cognitiveservices_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_cognitiveservices_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_cognitiveservices_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_cognitiveservices_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_cognitiveservices_list_command_builder;
}(base_1.CommandBuilder));
