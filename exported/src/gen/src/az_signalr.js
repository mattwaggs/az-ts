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
exports.az_signalr = exports.az_signalr_upstream = exports.az_signalr_network_rule = exports.az_signalr_key = exports.az_signalr_cors = void 0;
var base_1 = require("../base");
/** Manage CORS for Azure SignalR Service. */
var az_signalr_cors = /** @class */ (function () {
    function az_signalr_cors() {
    }
    /**
     * Add allowed origins to a SignalR Service.
     *
     * Syntax:
     * ```
     * az signalr cors add --allowed-origins
     *                     --name
     *                     --resource-group
     *                     [--subscription]
     * ```
     *
     * @param {string} allowedOrigins Space separated origins that should be allowed to make cross-origin calls (for example: <a href="http://example.com:12345">http://example.com:12345</a>). To allow all, use "\*".
     * @param {string} name Name of signalr service.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_signalr_cors.add = function (allowedOrigins, name, resourceGroup) {
        return new az_signalr_cors_add_command_builder("az signalr cors add", 'az_signalr_cors_add_command_result', allowedOrigins, name, resourceGroup);
    };
    /**
     * List allowed origins of a SignalR Service.
     *
     * Syntax:
     * ```
     * az signalr cors list --name
     *                      --resource-group
     *                      [--query-examples]
     *                      [--subscription]
     * ```
     *
     * @param {string} name Name of signalr service.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_signalr_cors.list = function (name, resourceGroup) {
        return new az_signalr_cors_list_command_builder("az signalr cors list", 'az_signalr_cors_list_command_result', name, resourceGroup);
    };
    /**
     * Remove allowed origins from a SignalR Service.
     *
     * Syntax:
     * ```
     * az signalr cors remove --allowed-origins
     *                        --name
     *                        --resource-group
     *                        [--subscription]
     * ```
     *
     * @param {string} allowedOrigins Space separated origins that should be allowed to make cross-origin calls (for example: <a href="http://example.com:12345">http://example.com:12345</a>). To allow all, use "\*".
     * @param {string} name Name of signalr service.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_signalr_cors.remove = function (allowedOrigins, name, resourceGroup) {
        return new az_signalr_cors_remove_command_builder("az signalr cors remove", 'az_signalr_cors_remove_command_result', allowedOrigins, name, resourceGroup);
    };
    return az_signalr_cors;
}());
exports.az_signalr_cors = az_signalr_cors;
/** Manage keys for Azure SignalR Service. */
var az_signalr_key = /** @class */ (function () {
    function az_signalr_key() {
    }
    /**
     * List the access keys for a SignalR Service.
     *
     * Syntax:
     * ```
     * az signalr key list --name
     *                     --resource-group
     *                     [--query-examples]
     *                     [--subscription]
     * ```
     *
     * @param {string} name Name of signalr service.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_signalr_key.list = function (name, resourceGroup) {
        return new az_signalr_key_list_command_builder("az signalr key list", 'az_signalr_key_list_command_result', name, resourceGroup);
    };
    /**
     * Regenerate the access key for a SignalR Service.
     *
     * Syntax:
     * ```
     * az signalr key renew --key-type {primary, secondary}
     *                      --name
     *                      --resource-group
     *                      [--subscription]
     * ```
     *
     * @param {'primary' | 'secondary'} keyType The name of access key to regenerate.
     * @param {string} name Name of signalr service.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_signalr_key.renew = function (keyType, name, resourceGroup) {
        return new az_signalr_key_renew_command_builder("az signalr key renew", 'az_signalr_key_renew_command_result', keyType, name, resourceGroup);
    };
    return az_signalr_key;
}());
exports.az_signalr_key = az_signalr_key;
/** Manage network rules. */
var az_signalr_network_rule = /** @class */ (function () {
    function az_signalr_network_rule() {
    }
    /**
     * Get the Network access control of SignalR Service.
     *
     * Syntax:
     * ```
     * az signalr network-rule list --name
     *                              --resource-group
     *                              [--query-examples]
     *                              [--subscription]
     * ```
     *
     * @param {string} name Name of signalr service.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_signalr_network_rule.list = function (name, resourceGroup) {
        return new az_signalr_network_rule_list_command_builder("az signalr network-rule list", 'az_signalr_network_rule_list_command_result', name, resourceGroup);
    };
    /**
     * Update the Network access control of SignalR Service.
     *
     * Syntax:
     * ```
     * az signalr network-rule update --name
     *                                --resource-group
     *                                [--allow]
     *                                [--connection-name]
     *                                [--deny]
     *                                [--public-network {false, true}]
     *                                [--subscription]
     * ```
     *
     * @param {string} name Name of signalr service.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_signalr_network_rule.update = function (name, resourceGroup) {
        return new az_signalr_network_rule_update_command_builder("az signalr network-rule update", 'az_signalr_network_rule_update_command_result', name, resourceGroup);
    };
    return az_signalr_network_rule;
}());
exports.az_signalr_network_rule = az_signalr_network_rule;
/** Manage upstream settings. */
var az_signalr_upstream = /** @class */ (function () {
    function az_signalr_upstream() {
    }
    /**
     * List upstream settings of an existing SignalR Service.
     *
     * Syntax:
     * ```
     * az signalr upstream clear --name
     *                           --resource-group
     *                           [--subscription]
     * ```
     *
     * @param {string} name Name of signalr service.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_signalr_upstream.clear = function (name, resourceGroup) {
        return new az_signalr_upstream_clear_command_builder("az signalr upstream clear", 'az_signalr_upstream_clear_command_result', name, resourceGroup);
    };
    /**
     * List upstream settings of an existing SignalR Service.
     *
     * Syntax:
     * ```
     * az signalr upstream list --name
     *                          --resource-group
     *                          [--query-examples]
     *                          [--subscription]
     * ```
     *
     * @param {string} name Name of signalr service.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_signalr_upstream.list = function (name, resourceGroup) {
        return new az_signalr_upstream_list_command_builder("az signalr upstream list", 'az_signalr_upstream_list_command_result', name, resourceGroup);
    };
    /**
     * Update order sensitive upstream settings for an existing SignalR Service.
     *
     * Syntax:
     * ```
     * az signalr upstream update --name
     *                            --resource-group
     *                            --template
     *                            [--subscription]
     * ```
     *
     * @param {string} name Name of signalr service.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} template Template item for upstream settings. Use key=value pattern to set properties. Supported keys are "url-template", "hub-pattern", "event-pattern", "category-pattern".
     */
    az_signalr_upstream.update = function (name, resourceGroup, template) {
        return new az_signalr_upstream_update_command_builder("az signalr upstream update", 'az_signalr_upstream_update_command_result', name, resourceGroup, template);
    };
    return az_signalr_upstream;
}());
exports.az_signalr_upstream = az_signalr_upstream;
/** Manage Azure SignalR Service. */
var az_signalr = /** @class */ (function () {
    function az_signalr() {
    }
    /**
     * Creates a SignalR Service.
     *
     * Syntax:
     * ```
     * az signalr create --name
     *                   --resource-group
     *                   --sku
     *                   [--allowed-origins]
     *                   [--default-action {Allow, Deny}]
     *                   [--enable-message-logs {false, true}]
     *                   [--location]
     *                   [--service-mode {Classic, Default, Serverless}]
     *                   [--subscription]
     *                   [--tags]
     *                   [--unit-count]
     * ```
     *
     * @param {string} name Name of signalr service.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} sku The sku name of the signalr service. E.g. Standard_S1.
     */
    az_signalr.create = function (name, resourceGroup, sku) {
        return new az_signalr_create_command_builder("az signalr create", 'az_signalr_create_command_result', name, resourceGroup, sku);
    };
    /**
     * Deletes a SignalR Service.
     *
     * Syntax:
     * ```
     * az signalr delete --name
     *                   --resource-group
     *                   [--subscription]
     * ```
     *
     * @param {string} name Name of signalr service.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_signalr["delete"] = function (name, resourceGroup) {
        return new az_signalr_delete_command_builder("az signalr delete", 'az_signalr_delete_command_result', name, resourceGroup);
    };
    /**
     * Lists all the SignalR Service under the current subscription.
     *
     * Syntax:
     * ```
     * az signalr list [--query-examples]
     *                 [--resource-group]
     *                 [--subscription]
     * ```
     */
    az_signalr.list = function () {
        return new az_signalr_list_command_builder("az signalr list", 'az_signalr_list_command_result');
    };
    /**
     * Restart an existing SignalR Service.
     *
     * Syntax:
     * ```
     * az signalr restart --name
     *                    --resource-group
     *                    [--subscription]
     * ```
     *
     * @param {string} name Name of signalr service.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_signalr.restart = function (name, resourceGroup) {
        return new az_signalr_restart_command_builder("az signalr restart", 'az_signalr_restart_command_result', name, resourceGroup);
    };
    /**
     * Get the details of a SignalR Service.
     *
     * Syntax:
     * ```
     * az signalr show --name
     *                 --resource-group
     *                 [--query-examples]
     *                 [--subscription]
     * ```
     *
     * @param {string} name Name of signalr service.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_signalr.show = function (name, resourceGroup) {
        return new az_signalr_show_command_builder("az signalr show", 'az_signalr_show_command_result', name, resourceGroup);
    };
    /**
     * Update an existing SignalR Service.
     *
     * Syntax:
     * ```
     * az signalr update --name
     *                   --resource-group
     *                   [--add]
     *                   [--allowed-origins]
     *                   [--default-action {Allow, Deny}]
     *                   [--enable-message-logs {false, true}]
     *                   [--force-string]
     *                   [--remove]
     *                   [--service-mode {Classic, Default, Serverless}]
     *                   [--set]
     *                   [--sku]
     *                   [--subscription]
     *                   [--tags]
     *                   [--unit-count]
     * ```
     *
     * @param {string} name Name of signalr service.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_signalr.update = function (name, resourceGroup) {
        return new az_signalr_update_command_builder("az signalr update", 'az_signalr_update_command_result', name, resourceGroup);
    };
    return az_signalr;
}());
exports.az_signalr = az_signalr;
/**
 * Add allowed origins to a SignalR Service.
 *
 * Syntax:
 * ```
 * az signalr cors add --allowed-origins
 *                     --name
 *                     --resource-group
 *                     [--subscription]
 * ```
 *
 * @param {string} allowedOrigins Space separated origins that should be allowed to make cross-origin calls (for example: <a href="http://example.com:12345">http://example.com:12345</a>). To allow all, use "\*".
 * @param {string} name Name of signalr service.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_signalr_cors_add_command_builder = /** @class */ (function (_super) {
    __extends(az_signalr_cors_add_command_builder, _super);
    function az_signalr_cors_add_command_builder(commandPath, resultDataTypeName, allowedOrigins, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.allowedOrigins(allowedOrigins);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Space separated origins that should be allowed to make cross-origin calls (for example: <a href="http://example.com:12345">http://example.com:12345</a>). To allow all, use "\*". */
    az_signalr_cors_add_command_builder.prototype.allowedOrigins = function (value) {
        this.setFlag("--allowed-origins", value);
        return this;
    };
    /** Name of signalr service. */
    az_signalr_cors_add_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_signalr_cors_add_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_signalr_cors_add_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_signalr_cors_add_command_builder;
}(base_1.CommandBuilder));
/**
 * List allowed origins of a SignalR Service.
 *
 * Syntax:
 * ```
 * az signalr cors list --name
 *                      --resource-group
 *                      [--query-examples]
 *                      [--subscription]
 * ```
 *
 * @param {string} name Name of signalr service.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_signalr_cors_list_command_builder = /** @class */ (function (_super) {
    __extends(az_signalr_cors_list_command_builder, _super);
    function az_signalr_cors_list_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of signalr service. */
    az_signalr_cors_list_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_signalr_cors_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_signalr_cors_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_signalr_cors_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_signalr_cors_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Remove allowed origins from a SignalR Service.
 *
 * Syntax:
 * ```
 * az signalr cors remove --allowed-origins
 *                        --name
 *                        --resource-group
 *                        [--subscription]
 * ```
 *
 * @param {string} allowedOrigins Space separated origins that should be allowed to make cross-origin calls (for example: <a href="http://example.com:12345">http://example.com:12345</a>). To allow all, use "\*".
 * @param {string} name Name of signalr service.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_signalr_cors_remove_command_builder = /** @class */ (function (_super) {
    __extends(az_signalr_cors_remove_command_builder, _super);
    function az_signalr_cors_remove_command_builder(commandPath, resultDataTypeName, allowedOrigins, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.allowedOrigins(allowedOrigins);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Space separated origins that should be allowed to make cross-origin calls (for example: <a href="http://example.com:12345">http://example.com:12345</a>). To allow all, use "\*". */
    az_signalr_cors_remove_command_builder.prototype.allowedOrigins = function (value) {
        this.setFlag("--allowed-origins", value);
        return this;
    };
    /** Name of signalr service. */
    az_signalr_cors_remove_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_signalr_cors_remove_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_signalr_cors_remove_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_signalr_cors_remove_command_builder;
}(base_1.CommandBuilder));
/**
 * List the access keys for a SignalR Service.
 *
 * Syntax:
 * ```
 * az signalr key list --name
 *                     --resource-group
 *                     [--query-examples]
 *                     [--subscription]
 * ```
 *
 * @param {string} name Name of signalr service.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_signalr_key_list_command_builder = /** @class */ (function (_super) {
    __extends(az_signalr_key_list_command_builder, _super);
    function az_signalr_key_list_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of signalr service. */
    az_signalr_key_list_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_signalr_key_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_signalr_key_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_signalr_key_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_signalr_key_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Regenerate the access key for a SignalR Service.
 *
 * Syntax:
 * ```
 * az signalr key renew --key-type {primary, secondary}
 *                      --name
 *                      --resource-group
 *                      [--subscription]
 * ```
 *
 * @param {'primary' | 'secondary'} keyType The name of access key to regenerate.
 * @param {string} name Name of signalr service.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_signalr_key_renew_command_builder = /** @class */ (function (_super) {
    __extends(az_signalr_key_renew_command_builder, _super);
    function az_signalr_key_renew_command_builder(commandPath, resultDataTypeName, keyType, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.keyType(keyType);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of access key to regenerate. */
    az_signalr_key_renew_command_builder.prototype.keyType = function (value) {
        this.setFlag("--key-type", value);
        return this;
    };
    /** Name of signalr service. */
    az_signalr_key_renew_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_signalr_key_renew_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_signalr_key_renew_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_signalr_key_renew_command_builder;
}(base_1.CommandBuilder));
/**
 * Get the Network access control of SignalR Service.
 *
 * Syntax:
 * ```
 * az signalr network-rule list --name
 *                              --resource-group
 *                              [--query-examples]
 *                              [--subscription]
 * ```
 *
 * @param {string} name Name of signalr service.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_signalr_network_rule_list_command_builder = /** @class */ (function (_super) {
    __extends(az_signalr_network_rule_list_command_builder, _super);
    function az_signalr_network_rule_list_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of signalr service. */
    az_signalr_network_rule_list_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_signalr_network_rule_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_signalr_network_rule_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_signalr_network_rule_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_signalr_network_rule_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Update the Network access control of SignalR Service.
 *
 * Syntax:
 * ```
 * az signalr network-rule update --name
 *                                --resource-group
 *                                [--allow]
 *                                [--connection-name]
 *                                [--deny]
 *                                [--public-network {false, true}]
 *                                [--subscription]
 * ```
 *
 * @param {string} name Name of signalr service.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_signalr_network_rule_update_command_builder = /** @class */ (function (_super) {
    __extends(az_signalr_network_rule_update_command_builder, _super);
    function az_signalr_network_rule_update_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of signalr service. */
    az_signalr_network_rule_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_signalr_network_rule_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The allowed virtual network rule. Space-separeted list of scope to assign. Allowed values: ClientConnection, ServerConnection, RESTAPI. */
    az_signalr_network_rule_update_command_builder.prototype.allow = function (value) {
        this.setFlag("--allow", value);
        return this;
    };
    /** Space-separeted list of private endpoint connection name. */
    az_signalr_network_rule_update_command_builder.prototype.connectionName = function (value) {
        this.setFlag("--connection-name", value);
        return this;
    };
    /** The denied virtual network rule. Space-separeted list of scope to assign. Allowed values: ClientConnection, ServerConnection, RESTAPI. */
    az_signalr_network_rule_update_command_builder.prototype.deny = function (value) {
        this.setFlag("--deny", value);
        return this;
    };
    /** Set rules for public network. */
    az_signalr_network_rule_update_command_builder.prototype.publicNetwork = function (value) {
        this.setFlag("--public-network", value.toString());
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_signalr_network_rule_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_signalr_network_rule_update_command_builder;
}(base_1.CommandBuilder));
/**
 * List upstream settings of an existing SignalR Service.
 *
 * Syntax:
 * ```
 * az signalr upstream clear --name
 *                           --resource-group
 *                           [--subscription]
 * ```
 *
 * @param {string} name Name of signalr service.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_signalr_upstream_clear_command_builder = /** @class */ (function (_super) {
    __extends(az_signalr_upstream_clear_command_builder, _super);
    function az_signalr_upstream_clear_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of signalr service. */
    az_signalr_upstream_clear_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_signalr_upstream_clear_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_signalr_upstream_clear_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_signalr_upstream_clear_command_builder;
}(base_1.CommandBuilder));
/**
 * List upstream settings of an existing SignalR Service.
 *
 * Syntax:
 * ```
 * az signalr upstream list --name
 *                          --resource-group
 *                          [--query-examples]
 *                          [--subscription]
 * ```
 *
 * @param {string} name Name of signalr service.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_signalr_upstream_list_command_builder = /** @class */ (function (_super) {
    __extends(az_signalr_upstream_list_command_builder, _super);
    function az_signalr_upstream_list_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of signalr service. */
    az_signalr_upstream_list_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_signalr_upstream_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_signalr_upstream_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_signalr_upstream_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_signalr_upstream_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Update order sensitive upstream settings for an existing SignalR Service.
 *
 * Syntax:
 * ```
 * az signalr upstream update --name
 *                            --resource-group
 *                            --template
 *                            [--subscription]
 * ```
 *
 * @param {string} name Name of signalr service.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} template Template item for upstream settings. Use key=value pattern to set properties. Supported keys are "url-template", "hub-pattern", "event-pattern", "category-pattern".
 */
var az_signalr_upstream_update_command_builder = /** @class */ (function (_super) {
    __extends(az_signalr_upstream_update_command_builder, _super);
    function az_signalr_upstream_update_command_builder(commandPath, resultDataTypeName, name, resourceGroup, template) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.template(template);
        return _this;
    }
    /** Name of signalr service. */
    az_signalr_upstream_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_signalr_upstream_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Template item for upstream settings. Use key=value pattern to set properties. Supported keys are "url-template", "hub-pattern", "event-pattern", "category-pattern". */
    az_signalr_upstream_update_command_builder.prototype.template = function (value) {
        this.setFlag("--template", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_signalr_upstream_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_signalr_upstream_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Creates a SignalR Service.
 *
 * Syntax:
 * ```
 * az signalr create --name
 *                   --resource-group
 *                   --sku
 *                   [--allowed-origins]
 *                   [--default-action {Allow, Deny}]
 *                   [--enable-message-logs {false, true}]
 *                   [--location]
 *                   [--service-mode {Classic, Default, Serverless}]
 *                   [--subscription]
 *                   [--tags]
 *                   [--unit-count]
 * ```
 *
 * @param {string} name Name of signalr service.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} sku The sku name of the signalr service. E.g. Standard_S1.
 */
var az_signalr_create_command_builder = /** @class */ (function (_super) {
    __extends(az_signalr_create_command_builder, _super);
    function az_signalr_create_command_builder(commandPath, resultDataTypeName, name, resourceGroup, sku) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.sku(sku);
        return _this;
    }
    /** Name of signalr service. */
    az_signalr_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_signalr_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The sku name of the signalr service. E.g. Standard_S1. */
    az_signalr_create_command_builder.prototype.sku = function (value) {
        this.setFlag("--sku", value);
        return this;
    };
    /** Space separated origins that should be allowed to make cross-origin calls (for example: <a href="http://example.com:12345">http://example.com:12345</a>). To allow all, use "\*". */
    az_signalr_create_command_builder.prototype.allowedOrigins = function (value) {
        this.setFlag("--allowed-origins", value);
        return this;
    };
    /** Default action to apply when no rule matches. */
    az_signalr_create_command_builder.prototype.defaultAction = function (value) {
        this.setFlag("--default-action", value);
        return this;
    };
    /** The switch for messaging logs which signalr service will generate or not. */
    az_signalr_create_command_builder.prototype.enableMessageLogs = function (value) {
        this.setFlag("--enable-message-logs", value.toString());
        return this;
    };
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_signalr_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** The service mode which signalr service will be working on. */
    az_signalr_create_command_builder.prototype.serviceMode = function (value) {
        this.setFlag("--service-mode", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_signalr_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_signalr_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    /** The number of signalr service unit count. */
    az_signalr_create_command_builder.prototype.unitCount = function (value) {
        this.setFlag("--unit-count", value);
        return this;
    };
    return az_signalr_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Deletes a SignalR Service.
 *
 * Syntax:
 * ```
 * az signalr delete --name
 *                   --resource-group
 *                   [--subscription]
 * ```
 *
 * @param {string} name Name of signalr service.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_signalr_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_signalr_delete_command_builder, _super);
    function az_signalr_delete_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of signalr service. */
    az_signalr_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_signalr_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_signalr_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_signalr_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * Lists all the SignalR Service under the current subscription.
 *
 * Syntax:
 * ```
 * az signalr list [--query-examples]
 *                 [--resource-group]
 *                 [--subscription]
 * ```
 */
var az_signalr_list_command_builder = /** @class */ (function (_super) {
    __extends(az_signalr_list_command_builder, _super);
    function az_signalr_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_signalr_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_signalr_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_signalr_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_signalr_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Restart an existing SignalR Service.
 *
 * Syntax:
 * ```
 * az signalr restart --name
 *                    --resource-group
 *                    [--subscription]
 * ```
 *
 * @param {string} name Name of signalr service.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_signalr_restart_command_builder = /** @class */ (function (_super) {
    __extends(az_signalr_restart_command_builder, _super);
    function az_signalr_restart_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of signalr service. */
    az_signalr_restart_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_signalr_restart_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_signalr_restart_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_signalr_restart_command_builder;
}(base_1.CommandBuilder));
/**
 * Get the details of a SignalR Service.
 *
 * Syntax:
 * ```
 * az signalr show --name
 *                 --resource-group
 *                 [--query-examples]
 *                 [--subscription]
 * ```
 *
 * @param {string} name Name of signalr service.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_signalr_show_command_builder = /** @class */ (function (_super) {
    __extends(az_signalr_show_command_builder, _super);
    function az_signalr_show_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of signalr service. */
    az_signalr_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_signalr_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_signalr_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_signalr_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_signalr_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update an existing SignalR Service.
 *
 * Syntax:
 * ```
 * az signalr update --name
 *                   --resource-group
 *                   [--add]
 *                   [--allowed-origins]
 *                   [--default-action {Allow, Deny}]
 *                   [--enable-message-logs {false, true}]
 *                   [--force-string]
 *                   [--remove]
 *                   [--service-mode {Classic, Default, Serverless}]
 *                   [--set]
 *                   [--sku]
 *                   [--subscription]
 *                   [--tags]
 *                   [--unit-count]
 * ```
 *
 * @param {string} name Name of signalr service.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_signalr_update_command_builder = /** @class */ (function (_super) {
    __extends(az_signalr_update_command_builder, _super);
    function az_signalr_update_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of signalr service. */
    az_signalr_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_signalr_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_signalr_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** Space separated origins that should be allowed to make cross-origin calls (for example: <a href="http://example.com:12345">http://example.com:12345</a>). To allow all, use "\*". */
    az_signalr_update_command_builder.prototype.allowedOrigins = function (value) {
        this.setFlag("--allowed-origins", value);
        return this;
    };
    /** Default action to apply when no rule matches. */
    az_signalr_update_command_builder.prototype.defaultAction = function (value) {
        this.setFlag("--default-action", value);
        return this;
    };
    /** The switch for messaging logs which signalr service will generate or not. */
    az_signalr_update_command_builder.prototype.enableMessageLogs = function (value) {
        this.setFlag("--enable-message-logs", value.toString());
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_signalr_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_signalr_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** The service mode which signalr service will be working on. */
    az_signalr_update_command_builder.prototype.serviceMode = function (value) {
        this.setFlag("--service-mode", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_signalr_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** The sku name of the signalr service. E.g. Standard_S1. */
    az_signalr_update_command_builder.prototype.sku = function (value) {
        this.setFlag("--sku", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_signalr_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_signalr_update_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    /** The number of signalr service unit count. */
    az_signalr_update_command_builder.prototype.unitCount = function (value) {
        this.setFlag("--unit-count", value);
        return this;
    };
    return az_signalr_update_command_builder;
}(base_1.CommandBuilder));
