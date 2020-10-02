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
/** Manage Azure Authorization Rule keys for Relay Service Hybrid Connection. */
var az_relay_hyco_authorization_rule_keys = /** @class */ (function () {
    function az_relay_hyco_authorization_rule_keys() {
    }
    /**
     * List the keys and connection strings of Authorization Rule for Relay Service Hybrid Connection.
     *
     * Syntax:
     * ```
     * az relay hyco authorization-rule keys list --hybrid-connection-name
     *                                            --name
     *                                            --namespace-name
     *                                            --resource-group
     *                                            [--query-examples]
     *                                            [--subscription]
     * ```
     *
     * @param {string} hybridConnectionName Name of Hybrid Connection.
     * @param {string} name Name of Hybrid Connection Authorization Rule.
     * @param {string} namespaceName Name of Namespace.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_relay_hyco_authorization_rule_keys.list = function (hybridConnectionName, name, namespaceName, resourceGroup) {
        return new az_relay_hyco_authorization_rule_keys_list_command_builder("az relay hyco authorization-rule keys list", 'az_relay_hyco_authorization_rule_keys_list_command_result', hybridConnectionName, name, namespaceName, resourceGroup);
    };
    /**
     * Regenerate keys of Authorization Rule for Relay Service Hybrid Connection.
     *
     * Syntax:
     * ```
     * az relay hyco authorization-rule keys renew --key {PrimaryKey, SecondaryKey}
     *                                             [--hybrid-connection-name]
     *                                             [--ids]
     *                                             [--key-value]
     *                                             [--name]
     *                                             [--namespace-name]
     *                                             [--resource-group]
     *                                             [--subscription]
     * ```
     *
     * @param {'PrimaryKey' | 'SecondaryKey'} key Specifies Primary or Secondary key needs to be reset.
     */
    az_relay_hyco_authorization_rule_keys.renew = function (key) {
        return new az_relay_hyco_authorization_rule_keys_renew_command_builder("az relay hyco authorization-rule keys renew", 'az_relay_hyco_authorization_rule_keys_renew_command_result', key);
    };
    return az_relay_hyco_authorization_rule_keys;
}());
exports.az_relay_hyco_authorization_rule_keys = az_relay_hyco_authorization_rule_keys;
/** Manage Azure Relay Service Hybrid Connection Authorization Rule. */
var az_relay_hyco_authorization_rule = /** @class */ (function () {
    function az_relay_hyco_authorization_rule() {
    }
    /**
     * Create Authorization Rule for given Relay Service Hybrid Connection.
     *
     * Syntax:
     * ```
     * az relay hyco authorization-rule create --hybrid-connection-name
     *                                         --name
     *                                         --namespace-name
     *                                         --resource-group
     *                                         [--rights {Listen, Manage, Send}]
     *                                         [--subscription]
     * ```
     *
     * @param {string} hybridConnectionName Name of Hybrid Connection.
     * @param {string} name Name of Hybrid Connection Authorization Rule.
     * @param {string} namespaceName Name of Namespace.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_relay_hyco_authorization_rule.create = function (hybridConnectionName, name, namespaceName, resourceGroup) {
        return new az_relay_hyco_authorization_rule_create_command_builder("az relay hyco authorization-rule create", 'az_relay_hyco_authorization_rule_create_command_result', hybridConnectionName, name, namespaceName, resourceGroup);
    };
    /**
     * Deletes the Authorization Rule of the given Relay Service Hybrid Connection.
     *
     * Syntax:
     * ```
     * az relay hyco authorization-rule delete [--hybrid-connection-name]
     *                                         [--ids]
     *                                         [--name]
     *                                         [--namespace-name]
     *                                         [--resource-group]
     *                                         [--subscription]
     * ```
     */
    az_relay_hyco_authorization_rule["delete"] = function () {
        return new az_relay_hyco_authorization_rule_delete_command_builder("az relay hyco authorization-rule delete", 'az_relay_hyco_authorization_rule_delete_command_result');
    };
    /**
     * Shows list of Authorization Rule by Relay Service Hybrid Connection.
     *
     * Syntax:
     * ```
     * az relay hyco authorization-rule list --hybrid-connection-name
     *                                       --namespace-name
     *                                       --resource-group
     *                                       [--query-examples]
     *                                       [--subscription]
     * ```
     *
     * @param {string} hybridConnectionName Name of Hybrid Connection.
     * @param {string} namespaceName Name of Namespace.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_relay_hyco_authorization_rule.list = function (hybridConnectionName, namespaceName, resourceGroup) {
        return new az_relay_hyco_authorization_rule_list_command_builder("az relay hyco authorization-rule list", 'az_relay_hyco_authorization_rule_list_command_result', hybridConnectionName, namespaceName, resourceGroup);
    };
    /**
     * Shows the details of Authorization Rule for given Relay Service Hybrid Connection.
     *
     * Syntax:
     * ```
     * az relay hyco authorization-rule show [--hybrid-connection-name]
     *                                       [--ids]
     *                                       [--name]
     *                                       [--namespace-name]
     *                                       [--query-examples]
     *                                       [--resource-group]
     *                                       [--subscription]
     * ```
     */
    az_relay_hyco_authorization_rule.show = function () {
        return new az_relay_hyco_authorization_rule_show_command_builder("az relay hyco authorization-rule show", 'az_relay_hyco_authorization_rule_show_command_result');
    };
    /**
     * Create Authorization Rule for given Relay Service Hybrid Connection.
     *
     * Syntax:
     * ```
     * az relay hyco authorization-rule update --rights {Listen, Manage, Send}
     *                                         [--add]
     *                                         [--force-string]
     *                                         [--hybrid-connection-name]
     *                                         [--ids]
     *                                         [--name]
     *                                         [--namespace-name]
     *                                         [--remove]
     *                                         [--resource-group]
     *                                         [--set]
     *                                         [--subscription]
     * ```
     *
     * @param {'Listen' | 'Manage' | 'Send'} rights Space-separated list of Authorization rule rights.
     */
    az_relay_hyco_authorization_rule.update = function (rights) {
        return new az_relay_hyco_authorization_rule_update_command_builder("az relay hyco authorization-rule update", 'az_relay_hyco_authorization_rule_update_command_result', rights);
    };
    return az_relay_hyco_authorization_rule;
}());
exports.az_relay_hyco_authorization_rule = az_relay_hyco_authorization_rule;
/** Manage Azure Relay Service Hybrid Connection and Authorization Rule. */
var az_relay_hyco = /** @class */ (function () {
    function az_relay_hyco() {
    }
    /**
     * Create the Relay Service Hybrid Connection.
     *
     * Syntax:
     * ```
     * az relay hyco create --name
     *                      --namespace-name
     *                      --resource-group
     *                      [--requires-client-authorization {false, true}]
     *                      [--subscription]
     *                      [--user-metadata]
     * ```
     *
     * @param {string} name Name of Hybrid Connection.
     * @param {string} namespaceName Name of Namespace.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_relay_hyco.create = function (name, namespaceName, resourceGroup) {
        return new az_relay_hyco_create_command_builder("az relay hyco create", 'az_relay_hyco_create_command_result', name, namespaceName, resourceGroup);
    };
    /**
     * Deletes the Relay Service Hybrid Connection.
     *
     * Syntax:
     * ```
     * az relay hyco delete [--ids]
     *                      [--name]
     *                      [--namespace-name]
     *                      [--resource-group]
     *                      [--subscription]
     * ```
     */
    az_relay_hyco["delete"] = function () {
        return new az_relay_hyco_delete_command_builder("az relay hyco delete", 'az_relay_hyco_delete_command_result');
    };
    /**
     * List the Hybrid Connection by Relay Service Namepsace.
     *
     * Syntax:
     * ```
     * az relay hyco list --namespace-name
     *                    --resource-group
     *                    [--query-examples]
     *                    [--subscription]
     * ```
     *
     * @param {string} namespaceName Name of Namespace.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_relay_hyco.list = function (namespaceName, resourceGroup) {
        return new az_relay_hyco_list_command_builder("az relay hyco list", 'az_relay_hyco_list_command_result', namespaceName, resourceGroup);
    };
    /**
     * Shows the Relay Service Hybrid Connection Details.
     *
     * Syntax:
     * ```
     * az relay hyco show [--ids]
     *                    [--name]
     *                    [--namespace-name]
     *                    [--query-examples]
     *                    [--resource-group]
     *                    [--subscription]
     * ```
     */
    az_relay_hyco.show = function () {
        return new az_relay_hyco_show_command_builder("az relay hyco show", 'az_relay_hyco_show_command_result');
    };
    /**
     * Updates the Relay Service Hybrid Connection.
     *
     * Syntax:
     * ```
     * az relay hyco update [--add]
     *                      [--force-string]
     *                      [--ids]
     *                      [--name]
     *                      [--namespace-name]
     *                      [--remove]
     *                      [--requires-client-authorization {false, true}]
     *                      [--resource-group]
     *                      [--set]
     *                      [--status {Active, Disabled, ReceiveDisabled, SendDisabled}]
     *                      [--subscription]
     *                      [--user-metadata]
     * ```
     */
    az_relay_hyco.update = function () {
        return new az_relay_hyco_update_command_builder("az relay hyco update", 'az_relay_hyco_update_command_result');
    };
    return az_relay_hyco;
}());
exports.az_relay_hyco = az_relay_hyco;
/** Manage Azure Authorization Rule connection strings for Namespace. */
var az_relay_namespace_authorization_rule_keys = /** @class */ (function () {
    function az_relay_namespace_authorization_rule_keys() {
    }
    /**
     * List the keys and connection strings of Authorization Rule for Relay Service Namespace.
     *
     * Syntax:
     * ```
     * az relay namespace authorization-rule keys list --name
     *                                                 --namespace-name
     *                                                 --resource-group
     *                                                 [--query-examples]
     *                                                 [--subscription]
     * ```
     *
     * @param {string} name Name of Namespace Authorization Rule.
     * @param {string} namespaceName Name of Namespace.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_relay_namespace_authorization_rule_keys.list = function (name, namespaceName, resourceGroup) {
        return new az_relay_namespace_authorization_rule_keys_list_command_builder("az relay namespace authorization-rule keys list", 'az_relay_namespace_authorization_rule_keys_list_command_result', name, namespaceName, resourceGroup);
    };
    /**
     * Regenerate keys of Authorization Rule for the Relay Service Namespace.
     *
     * Syntax:
     * ```
     * az relay namespace authorization-rule keys renew --key {PrimaryKey, SecondaryKey}
     *                                                  [--ids]
     *                                                  [--key-value]
     *                                                  [--name]
     *                                                  [--namespace-name]
     *                                                  [--resource-group]
     *                                                  [--subscription]
     * ```
     *
     * @param {'PrimaryKey' | 'SecondaryKey'} key Specifies Primary or Secondary key needs to be reset.
     */
    az_relay_namespace_authorization_rule_keys.renew = function (key) {
        return new az_relay_namespace_authorization_rule_keys_renew_command_builder("az relay namespace authorization-rule keys renew", 'az_relay_namespace_authorization_rule_keys_renew_command_result', key);
    };
    return az_relay_namespace_authorization_rule_keys;
}());
exports.az_relay_namespace_authorization_rule_keys = az_relay_namespace_authorization_rule_keys;
/** Manage Azure Relay Service Namespace Authorization Rule. */
var az_relay_namespace_authorization_rule = /** @class */ (function () {
    function az_relay_namespace_authorization_rule() {
    }
    /**
     * Create Authorization Rule for the given Relay Service Namespace.
     *
     * Syntax:
     * ```
     * az relay namespace authorization-rule create --name
     *                                              --namespace-name
     *                                              --resource-group
     *                                              [--rights {Listen, Manage, Send}]
     *                                              [--subscription]
     * ```
     *
     * @param {string} name Name of Namespace Authorization Rule.
     * @param {string} namespaceName Name of Namespace.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_relay_namespace_authorization_rule.create = function (name, namespaceName, resourceGroup) {
        return new az_relay_namespace_authorization_rule_create_command_builder("az relay namespace authorization-rule create", 'az_relay_namespace_authorization_rule_create_command_result', name, namespaceName, resourceGroup);
    };
    /**
     * Deletes the Authorization Rule of the Relay Service Namespace.
     *
     * Syntax:
     * ```
     * az relay namespace authorization-rule delete [--ids]
     *                                              [--name]
     *                                              [--namespace-name]
     *                                              [--resource-group]
     *                                              [--subscription]
     * ```
     */
    az_relay_namespace_authorization_rule["delete"] = function () {
        return new az_relay_namespace_authorization_rule_delete_command_builder("az relay namespace authorization-rule delete", 'az_relay_namespace_authorization_rule_delete_command_result');
    };
    /**
     * Shows the list of Authorization Rule by Relay Service Namespace.
     *
     * Syntax:
     * ```
     * az relay namespace authorization-rule list --namespace-name
     *                                            --resource-group
     *                                            [--query-examples]
     *                                            [--subscription]
     * ```
     *
     * @param {string} namespaceName Name of the Namespace.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_relay_namespace_authorization_rule.list = function (namespaceName, resourceGroup) {
        return new az_relay_namespace_authorization_rule_list_command_builder("az relay namespace authorization-rule list", 'az_relay_namespace_authorization_rule_list_command_result', namespaceName, resourceGroup);
    };
    /**
     * Shows the details of Relay Service Namespace Authorization Rule.
     *
     * Syntax:
     * ```
     * az relay namespace authorization-rule show [--ids]
     *                                            [--name]
     *                                            [--namespace-name]
     *                                            [--query-examples]
     *                                            [--resource-group]
     *                                            [--subscription]
     * ```
     */
    az_relay_namespace_authorization_rule.show = function () {
        return new az_relay_namespace_authorization_rule_show_command_builder("az relay namespace authorization-rule show", 'az_relay_namespace_authorization_rule_show_command_result');
    };
    /**
     * Updates Authorization Rule for the given Relay Service Namespace.
     *
     * Syntax:
     * ```
     * az relay namespace authorization-rule update --rights {Listen, Manage, Send}
     *                                              [--add]
     *                                              [--force-string]
     *                                              [--ids]
     *                                              [--name]
     *                                              [--namespace-name]
     *                                              [--remove]
     *                                              [--resource-group]
     *                                              [--set]
     *                                              [--subscription]
     * ```
     *
     * @param {'Listen' | 'Manage' | 'Send'} rights Space-separated list of Authorization rule rights.
     */
    az_relay_namespace_authorization_rule.update = function (rights) {
        return new az_relay_namespace_authorization_rule_update_command_builder("az relay namespace authorization-rule update", 'az_relay_namespace_authorization_rule_update_command_result', rights);
    };
    return az_relay_namespace_authorization_rule;
}());
exports.az_relay_namespace_authorization_rule = az_relay_namespace_authorization_rule;
/** Manage Azure Relay Service Namespace. */
var az_relay_namespace = /** @class */ (function () {
    function az_relay_namespace() {
    }
    /**
     * Create a Relay Service Namespace.
     *
     * Syntax:
     * ```
     * az relay namespace create --name
     *                           --resource-group
     *                           [--location]
     *                           [--subscription]
     *                           [--tags]
     * ```
     *
     * @param {string} name Name of Namespace.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_relay_namespace.create = function (name, resourceGroup) {
        return new az_relay_namespace_create_command_builder("az relay namespace create", 'az_relay_namespace_create_command_result', name, resourceGroup);
    };
    /**
     * Deletes the Relay Service Namespace.
     *
     * Syntax:
     * ```
     * az relay namespace delete [--ids]
     *                           [--name]
     *                           [--resource-group]
     *                           [--subscription]
     * ```
     */
    az_relay_namespace["delete"] = function () {
        return new az_relay_namespace_delete_command_builder("az relay namespace delete", 'az_relay_namespace_delete_command_result');
    };
    /**
     * Check for the availability of the given name for the Namespace.
     *
     * Syntax:
     * ```
     * az relay namespace exists --name
     *                           [--subscription]
     * ```
     *
     * @param {string} name Namespace name. Name can contain only letters, numbers, and hyphens. The namespace must start with a letter, and it must end with a letter or number.
     */
    az_relay_namespace.exists = function (name) {
        return new az_relay_namespace_exists_command_builder("az relay namespace exists", 'az_relay_namespace_exists_command_result', name);
    };
    /**
     * List the Relay Service Namespaces.
     *
     * Syntax:
     * ```
     * az relay namespace list [--query-examples]
     *                         [--resource-group]
     *                         [--subscription]
     * ```
     */
    az_relay_namespace.list = function () {
        return new az_relay_namespace_list_command_builder("az relay namespace list", 'az_relay_namespace_list_command_result');
    };
    /**
     * Shows the Relay Service Namespace details.
     *
     * Syntax:
     * ```
     * az relay namespace show [--ids]
     *                         [--name]
     *                         [--query-examples]
     *                         [--resource-group]
     *                         [--subscription]
     * ```
     */
    az_relay_namespace.show = function () {
        return new az_relay_namespace_show_command_builder("az relay namespace show", 'az_relay_namespace_show_command_result');
    };
    /**
     * Updates a Relay Service Namespace.
     *
     * Syntax:
     * ```
     * az relay namespace update [--add]
     *                           [--force-string]
     *                           [--ids]
     *                           [--name]
     *                           [--remove]
     *                           [--resource-group]
     *                           [--set]
     *                           [--subscription]
     *                           [--tags]
     * ```
     */
    az_relay_namespace.update = function () {
        return new az_relay_namespace_update_command_builder("az relay namespace update", 'az_relay_namespace_update_command_result');
    };
    return az_relay_namespace;
}());
exports.az_relay_namespace = az_relay_namespace;
/** Manage Azure Authorization Rule keys for Relay Service WCF Relay. */
var az_relay_wcfrelay_authorization_rule_keys = /** @class */ (function () {
    function az_relay_wcfrelay_authorization_rule_keys() {
    }
    /**
     * List the keys and connection strings of Authorization Rule for the given Relay Service WCF Relay.
     *
     * Syntax:
     * ```
     * az relay wcfrelay authorization-rule keys list --name
     *                                                --namespace-name
     *                                                --relay-name
     *                                                --resource-group
     *                                                [--query-examples]
     *                                                [--subscription]
     * ```
     *
     * @param {string} name Name of WCF Relay Authorization Rule.
     * @param {string} namespaceName Name of Namespace.
     * @param {string} relayName Name of WCF Relay.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_relay_wcfrelay_authorization_rule_keys.list = function (name, namespaceName, relayName, resourceGroup) {
        return new az_relay_wcfrelay_authorization_rule_keys_list_command_builder("az relay wcfrelay authorization-rule keys list", 'az_relay_wcfrelay_authorization_rule_keys_list_command_result', name, namespaceName, relayName, resourceGroup);
    };
    /**
     * Regenerate keys of Authorization Rule for Relay Service WCF Relay.
     *
     * Syntax:
     * ```
     * az relay wcfrelay authorization-rule keys renew --key {PrimaryKey, SecondaryKey}
     *                                                 [--ids]
     *                                                 [--key-value]
     *                                                 [--name]
     *                                                 [--namespace-name]
     *                                                 [--relay-name]
     *                                                 [--resource-group]
     *                                                 [--subscription]
     * ```
     *
     * @param {'PrimaryKey' | 'SecondaryKey'} key Specifies Primary or Secondary key needs to be reset.
     */
    az_relay_wcfrelay_authorization_rule_keys.renew = function (key) {
        return new az_relay_wcfrelay_authorization_rule_keys_renew_command_builder("az relay wcfrelay authorization-rule keys renew", 'az_relay_wcfrelay_authorization_rule_keys_renew_command_result', key);
    };
    return az_relay_wcfrelay_authorization_rule_keys;
}());
exports.az_relay_wcfrelay_authorization_rule_keys = az_relay_wcfrelay_authorization_rule_keys;
/** Manage Azure Relay Service WCF Relay Authorization Rule. */
var az_relay_wcfrelay_authorization_rule = /** @class */ (function () {
    function az_relay_wcfrelay_authorization_rule() {
    }
    /**
     * Create Authorization Rule for the given Relay Service WCF Relay.
     *
     * Syntax:
     * ```
     * az relay wcfrelay authorization-rule create --name
     *                                             --namespace-name
     *                                             --relay-name
     *                                             --resource-group
     *                                             [--rights {Listen, Manage, Send}]
     *                                             [--subscription]
     * ```
     *
     * @param {string} name Name of WCF Relay Authorization Rule.
     * @param {string} namespaceName Name of Namespace.
     * @param {string} relayName Name of WCF Relay.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_relay_wcfrelay_authorization_rule.create = function (name, namespaceName, relayName, resourceGroup) {
        return new az_relay_wcfrelay_authorization_rule_create_command_builder("az relay wcfrelay authorization-rule create", 'az_relay_wcfrelay_authorization_rule_create_command_result', name, namespaceName, relayName, resourceGroup);
    };
    /**
     * Delete the Authorization Rule of Relay Service WCF Relay.
     *
     * Syntax:
     * ```
     * az relay wcfrelay authorization-rule delete [--ids]
     *                                             [--name]
     *                                             [--namespace-name]
     *                                             [--relay-name]
     *                                             [--resource-group]
     *                                             [--subscription]
     * ```
     */
    az_relay_wcfrelay_authorization_rule["delete"] = function () {
        return new az_relay_wcfrelay_authorization_rule_delete_command_builder("az relay wcfrelay authorization-rule delete", 'az_relay_wcfrelay_authorization_rule_delete_command_result');
    };
    /**
     * List of Authorization Rule by Relay Service WCF Relay.
     *
     * Syntax:
     * ```
     * az relay wcfrelay authorization-rule list --namespace-name
     *                                           --relay-name
     *                                           --resource-group
     *                                           [--query-examples]
     *                                           [--subscription]
     * ```
     *
     * @param {string} namespaceName Name of Namespace.
     * @param {string} relayName Name of WCF Relay.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_relay_wcfrelay_authorization_rule.list = function (namespaceName, relayName, resourceGroup) {
        return new az_relay_wcfrelay_authorization_rule_list_command_builder("az relay wcfrelay authorization-rule list", 'az_relay_wcfrelay_authorization_rule_list_command_result', namespaceName, relayName, resourceGroup);
    };
    /**
     * Show properties of Authorization Rule for the given Relay Service WCF Relay.
     *
     * Syntax:
     * ```
     * az relay wcfrelay authorization-rule show [--ids]
     *                                           [--name]
     *                                           [--namespace-name]
     *                                           [--query-examples]
     *                                           [--relay-name]
     *                                           [--resource-group]
     *                                           [--subscription]
     * ```
     */
    az_relay_wcfrelay_authorization_rule.show = function () {
        return new az_relay_wcfrelay_authorization_rule_show_command_builder("az relay wcfrelay authorization-rule show", 'az_relay_wcfrelay_authorization_rule_show_command_result');
    };
    /**
     * Update Authorization Rule for the given Relay Service WCF Relay.
     *
     * Syntax:
     * ```
     * az relay wcfrelay authorization-rule update --rights {Listen, Manage, Send}
     *                                             [--add]
     *                                             [--force-string]
     *                                             [--ids]
     *                                             [--name]
     *                                             [--namespace-name]
     *                                             [--relay-name]
     *                                             [--remove]
     *                                             [--resource-group]
     *                                             [--set]
     *                                             [--subscription]
     * ```
     *
     * @param {'Listen' | 'Manage' | 'Send'} rights Space-separated list of Authorization rule rights.
     */
    az_relay_wcfrelay_authorization_rule.update = function (rights) {
        return new az_relay_wcfrelay_authorization_rule_update_command_builder("az relay wcfrelay authorization-rule update", 'az_relay_wcfrelay_authorization_rule_update_command_result', rights);
    };
    return az_relay_wcfrelay_authorization_rule;
}());
exports.az_relay_wcfrelay_authorization_rule = az_relay_wcfrelay_authorization_rule;
/** Manage Azure Relay Service WCF Relay and Authorization Rule. */
var az_relay_wcfrelay = /** @class */ (function () {
    function az_relay_wcfrelay() {
    }
    /**
     * Create the Relay Service WCF Relay.
     *
     * Syntax:
     * ```
     * az relay wcfrelay create --name
     *                          --namespace-name
     *                          --relay-type {Http, NetTcp}
     *                          --resource-group
     *                          [--requires-client-authorization {false, true}]
     *                          [--requires-transport-security {false, true}]
     *                          [--subscription]
     *                          [--user-metadata]
     * ```
     *
     * @param {string} name Name of WCF Relay.
     * @param {string} namespaceName Name of Namespace.
     * @param {'Http' | 'NetTcp'} relayType Relay type.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_relay_wcfrelay.create = function (name, namespaceName, relayType, resourceGroup) {
        return new az_relay_wcfrelay_create_command_builder("az relay wcfrelay create", 'az_relay_wcfrelay_create_command_result', name, namespaceName, relayType, resourceGroup);
    };
    /**
     * Deletes the Relay Service WCF Relay.
     *
     * Syntax:
     * ```
     * az relay wcfrelay delete [--ids]
     *                          [--name]
     *                          [--namespace-name]
     *                          [--resource-group]
     *                          [--subscription]
     * ```
     */
    az_relay_wcfrelay["delete"] = function () {
        return new az_relay_wcfrelay_delete_command_builder("az relay wcfrelay delete", 'az_relay_wcfrelay_delete_command_result');
    };
    /**
     * List the WCF Relay by Relay Service Namepsace.
     *
     * Syntax:
     * ```
     * az relay wcfrelay list --namespace-name
     *                        --resource-group
     *                        [--query-examples]
     *                        [--subscription]
     * ```
     *
     * @param {string} namespaceName Name of Namespace.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_relay_wcfrelay.list = function (namespaceName, resourceGroup) {
        return new az_relay_wcfrelay_list_command_builder("az relay wcfrelay list", 'az_relay_wcfrelay_list_command_result', namespaceName, resourceGroup);
    };
    /**
     * Shows the Relay Service WCF Relay Details.
     *
     * Syntax:
     * ```
     * az relay wcfrelay show [--ids]
     *                        [--name]
     *                        [--namespace-name]
     *                        [--query-examples]
     *                        [--resource-group]
     *                        [--subscription]
     * ```
     */
    az_relay_wcfrelay.show = function () {
        return new az_relay_wcfrelay_show_command_builder("az relay wcfrelay show", 'az_relay_wcfrelay_show_command_result');
    };
    /**
     * Updates existing Relay Service WCF Relay.
     *
     * Syntax:
     * ```
     * az relay wcfrelay update [--add]
     *                          [--force-string]
     *                          [--ids]
     *                          [--name]
     *                          [--namespace-name]
     *                          [--relay-type {Http, NetTcp}]
     *                          [--remove]
     *                          [--resource-group]
     *                          [--set]
     *                          [--status {Active, Disabled, ReceiveDisabled, SendDisabled}]
     *                          [--subscription]
     *                          [--user-metadata]
     * ```
     */
    az_relay_wcfrelay.update = function () {
        return new az_relay_wcfrelay_update_command_builder("az relay wcfrelay update", 'az_relay_wcfrelay_update_command_result');
    };
    return az_relay_wcfrelay;
}());
exports.az_relay_wcfrelay = az_relay_wcfrelay;
/** Manage Azure Relay Service namespaces, WCF relays, hybrid connections, and rules. */
var az_relay = /** @class */ (function () {
    function az_relay() {
    }
    return az_relay;
}());
exports.az_relay = az_relay;
/**
 * List the keys and connection strings of Authorization Rule for Relay Service Hybrid Connection.
 *
 * Syntax:
 * ```
 * az relay hyco authorization-rule keys list --hybrid-connection-name
 *                                            --name
 *                                            --namespace-name
 *                                            --resource-group
 *                                            [--query-examples]
 *                                            [--subscription]
 * ```
 *
 * @param {string} hybridConnectionName Name of Hybrid Connection.
 * @param {string} name Name of Hybrid Connection Authorization Rule.
 * @param {string} namespaceName Name of Namespace.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_relay_hyco_authorization_rule_keys_list_command_builder = /** @class */ (function (_super) {
    __extends(az_relay_hyco_authorization_rule_keys_list_command_builder, _super);
    function az_relay_hyco_authorization_rule_keys_list_command_builder(commandPath, resultDataTypeName, hybridConnectionName, name, namespaceName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.hybridConnectionName(hybridConnectionName);
        _this.name(name);
        _this.namespaceName(namespaceName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of Hybrid Connection. */
    az_relay_hyco_authorization_rule_keys_list_command_builder.prototype.hybridConnectionName = function (value) {
        this.setFlag("--hybrid-connection-name", value);
        return this;
    };
    /** Name of Hybrid Connection Authorization Rule. */
    az_relay_hyco_authorization_rule_keys_list_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of Namespace. */
    az_relay_hyco_authorization_rule_keys_list_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_relay_hyco_authorization_rule_keys_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_relay_hyco_authorization_rule_keys_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_relay_hyco_authorization_rule_keys_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_relay_hyco_authorization_rule_keys_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Regenerate keys of Authorization Rule for Relay Service Hybrid Connection.
 *
 * Syntax:
 * ```
 * az relay hyco authorization-rule keys renew --key {PrimaryKey, SecondaryKey}
 *                                             [--hybrid-connection-name]
 *                                             [--ids]
 *                                             [--key-value]
 *                                             [--name]
 *                                             [--namespace-name]
 *                                             [--resource-group]
 *                                             [--subscription]
 * ```
 *
 * @param {'PrimaryKey' | 'SecondaryKey'} key Specifies Primary or Secondary key needs to be reset.
 */
var az_relay_hyco_authorization_rule_keys_renew_command_builder = /** @class */ (function (_super) {
    __extends(az_relay_hyco_authorization_rule_keys_renew_command_builder, _super);
    function az_relay_hyco_authorization_rule_keys_renew_command_builder(commandPath, resultDataTypeName, key) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.key(key);
        return _this;
    }
    /** Specifies Primary or Secondary key needs to be reset. */
    az_relay_hyco_authorization_rule_keys_renew_command_builder.prototype.key = function (value) {
        this.setFlag("--key", value);
        return this;
    };
    /** Name of Hybrid Connection. */
    az_relay_hyco_authorization_rule_keys_renew_command_builder.prototype.hybridConnectionName = function (value) {
        this.setFlag("--hybrid-connection-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_relay_hyco_authorization_rule_keys_renew_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Optional, if the key value provided, is set for KeyType or autogenerated Key value set for keyType. */
    az_relay_hyco_authorization_rule_keys_renew_command_builder.prototype.keyValue = function (value) {
        this.setFlag("--key-value", value);
        return this;
    };
    /** Name of Hybrid Connection Authorization Rule. */
    az_relay_hyco_authorization_rule_keys_renew_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of Namespace. */
    az_relay_hyco_authorization_rule_keys_renew_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_relay_hyco_authorization_rule_keys_renew_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_relay_hyco_authorization_rule_keys_renew_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_relay_hyco_authorization_rule_keys_renew_command_builder;
}(base_1.CommandBuilder));
/**
 * Create Authorization Rule for given Relay Service Hybrid Connection.
 *
 * Syntax:
 * ```
 * az relay hyco authorization-rule create --hybrid-connection-name
 *                                         --name
 *                                         --namespace-name
 *                                         --resource-group
 *                                         [--rights {Listen, Manage, Send}]
 *                                         [--subscription]
 * ```
 *
 * @param {string} hybridConnectionName Name of Hybrid Connection.
 * @param {string} name Name of Hybrid Connection Authorization Rule.
 * @param {string} namespaceName Name of Namespace.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_relay_hyco_authorization_rule_create_command_builder = /** @class */ (function (_super) {
    __extends(az_relay_hyco_authorization_rule_create_command_builder, _super);
    function az_relay_hyco_authorization_rule_create_command_builder(commandPath, resultDataTypeName, hybridConnectionName, name, namespaceName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.hybridConnectionName(hybridConnectionName);
        _this.name(name);
        _this.namespaceName(namespaceName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of Hybrid Connection. */
    az_relay_hyco_authorization_rule_create_command_builder.prototype.hybridConnectionName = function (value) {
        this.setFlag("--hybrid-connection-name", value);
        return this;
    };
    /** Name of Hybrid Connection Authorization Rule. */
    az_relay_hyco_authorization_rule_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of Namespace. */
    az_relay_hyco_authorization_rule_create_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_relay_hyco_authorization_rule_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Space-separated list of Authorization rule rights. */
    az_relay_hyco_authorization_rule_create_command_builder.prototype.rights = function (value) {
        this.setFlag("--rights", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_relay_hyco_authorization_rule_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_relay_hyco_authorization_rule_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Deletes the Authorization Rule of the given Relay Service Hybrid Connection.
 *
 * Syntax:
 * ```
 * az relay hyco authorization-rule delete [--hybrid-connection-name]
 *                                         [--ids]
 *                                         [--name]
 *                                         [--namespace-name]
 *                                         [--resource-group]
 *                                         [--subscription]
 * ```
 */
var az_relay_hyco_authorization_rule_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_relay_hyco_authorization_rule_delete_command_builder, _super);
    function az_relay_hyco_authorization_rule_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Name of Hybrid Connection. */
    az_relay_hyco_authorization_rule_delete_command_builder.prototype.hybridConnectionName = function (value) {
        this.setFlag("--hybrid-connection-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_relay_hyco_authorization_rule_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of Hybrid Connection Authorization Rule. */
    az_relay_hyco_authorization_rule_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of Namespace. */
    az_relay_hyco_authorization_rule_delete_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_relay_hyco_authorization_rule_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_relay_hyco_authorization_rule_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_relay_hyco_authorization_rule_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * Shows list of Authorization Rule by Relay Service Hybrid Connection.
 *
 * Syntax:
 * ```
 * az relay hyco authorization-rule list --hybrid-connection-name
 *                                       --namespace-name
 *                                       --resource-group
 *                                       [--query-examples]
 *                                       [--subscription]
 * ```
 *
 * @param {string} hybridConnectionName Name of Hybrid Connection.
 * @param {string} namespaceName Name of Namespace.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_relay_hyco_authorization_rule_list_command_builder = /** @class */ (function (_super) {
    __extends(az_relay_hyco_authorization_rule_list_command_builder, _super);
    function az_relay_hyco_authorization_rule_list_command_builder(commandPath, resultDataTypeName, hybridConnectionName, namespaceName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.hybridConnectionName(hybridConnectionName);
        _this.namespaceName(namespaceName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of Hybrid Connection. */
    az_relay_hyco_authorization_rule_list_command_builder.prototype.hybridConnectionName = function (value) {
        this.setFlag("--hybrid-connection-name", value);
        return this;
    };
    /** Name of Namespace. */
    az_relay_hyco_authorization_rule_list_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_relay_hyco_authorization_rule_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_relay_hyco_authorization_rule_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_relay_hyco_authorization_rule_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_relay_hyco_authorization_rule_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Shows the details of Authorization Rule for given Relay Service Hybrid Connection.
 *
 * Syntax:
 * ```
 * az relay hyco authorization-rule show [--hybrid-connection-name]
 *                                       [--ids]
 *                                       [--name]
 *                                       [--namespace-name]
 *                                       [--query-examples]
 *                                       [--resource-group]
 *                                       [--subscription]
 * ```
 */
var az_relay_hyco_authorization_rule_show_command_builder = /** @class */ (function (_super) {
    __extends(az_relay_hyco_authorization_rule_show_command_builder, _super);
    function az_relay_hyco_authorization_rule_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Name of Hybrid Connection. */
    az_relay_hyco_authorization_rule_show_command_builder.prototype.hybridConnectionName = function (value) {
        this.setFlag("--hybrid-connection-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_relay_hyco_authorization_rule_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of Hybrid Connection Authorization Rule. */
    az_relay_hyco_authorization_rule_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of Namespace. */
    az_relay_hyco_authorization_rule_show_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_relay_hyco_authorization_rule_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_relay_hyco_authorization_rule_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_relay_hyco_authorization_rule_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_relay_hyco_authorization_rule_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Create Authorization Rule for given Relay Service Hybrid Connection.
 *
 * Syntax:
 * ```
 * az relay hyco authorization-rule update --rights {Listen, Manage, Send}
 *                                         [--add]
 *                                         [--force-string]
 *                                         [--hybrid-connection-name]
 *                                         [--ids]
 *                                         [--name]
 *                                         [--namespace-name]
 *                                         [--remove]
 *                                         [--resource-group]
 *                                         [--set]
 *                                         [--subscription]
 * ```
 *
 * @param {'Listen' | 'Manage' | 'Send'} rights Space-separated list of Authorization rule rights.
 */
var az_relay_hyco_authorization_rule_update_command_builder = /** @class */ (function (_super) {
    __extends(az_relay_hyco_authorization_rule_update_command_builder, _super);
    function az_relay_hyco_authorization_rule_update_command_builder(commandPath, resultDataTypeName, rights) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.rights(rights);
        return _this;
    }
    /** Space-separated list of Authorization rule rights. */
    az_relay_hyco_authorization_rule_update_command_builder.prototype.rights = function (value) {
        this.setFlag("--rights", value);
        return this;
    };
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_relay_hyco_authorization_rule_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_relay_hyco_authorization_rule_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** Name of Hybrid Connection. */
    az_relay_hyco_authorization_rule_update_command_builder.prototype.hybridConnectionName = function (value) {
        this.setFlag("--hybrid-connection-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_relay_hyco_authorization_rule_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of Hybrid Connection Authorization Rule. */
    az_relay_hyco_authorization_rule_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of Namespace. */
    az_relay_hyco_authorization_rule_update_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_relay_hyco_authorization_rule_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_relay_hyco_authorization_rule_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_relay_hyco_authorization_rule_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_relay_hyco_authorization_rule_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_relay_hyco_authorization_rule_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Create the Relay Service Hybrid Connection.
 *
 * Syntax:
 * ```
 * az relay hyco create --name
 *                      --namespace-name
 *                      --resource-group
 *                      [--requires-client-authorization {false, true}]
 *                      [--subscription]
 *                      [--user-metadata]
 * ```
 *
 * @param {string} name Name of Hybrid Connection.
 * @param {string} namespaceName Name of Namespace.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_relay_hyco_create_command_builder = /** @class */ (function (_super) {
    __extends(az_relay_hyco_create_command_builder, _super);
    function az_relay_hyco_create_command_builder(commandPath, resultDataTypeName, name, namespaceName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.namespaceName(namespaceName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of Hybrid Connection. */
    az_relay_hyco_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of Namespace. */
    az_relay_hyco_create_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_relay_hyco_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Indicates whether client authorization is required. */
    az_relay_hyco_create_command_builder.prototype.requiresClientAuthorization = function (value) {
        this.setFlag("--requires-client-authorization", value.toString());
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_relay_hyco_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Endpoint metadata. */
    az_relay_hyco_create_command_builder.prototype.userMetadata = function (value) {
        this.setFlag("--user-metadata", value);
        return this;
    };
    return az_relay_hyco_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Deletes the Relay Service Hybrid Connection.
 *
 * Syntax:
 * ```
 * az relay hyco delete [--ids]
 *                      [--name]
 *                      [--namespace-name]
 *                      [--resource-group]
 *                      [--subscription]
 * ```
 */
var az_relay_hyco_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_relay_hyco_delete_command_builder, _super);
    function az_relay_hyco_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_relay_hyco_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of Hybrid Connection. */
    az_relay_hyco_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of Namespace. */
    az_relay_hyco_delete_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_relay_hyco_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_relay_hyco_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_relay_hyco_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List the Hybrid Connection by Relay Service Namepsace.
 *
 * Syntax:
 * ```
 * az relay hyco list --namespace-name
 *                    --resource-group
 *                    [--query-examples]
 *                    [--subscription]
 * ```
 *
 * @param {string} namespaceName Name of Namespace.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_relay_hyco_list_command_builder = /** @class */ (function (_super) {
    __extends(az_relay_hyco_list_command_builder, _super);
    function az_relay_hyco_list_command_builder(commandPath, resultDataTypeName, namespaceName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.namespaceName(namespaceName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of Namespace. */
    az_relay_hyco_list_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_relay_hyco_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_relay_hyco_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_relay_hyco_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_relay_hyco_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Shows the Relay Service Hybrid Connection Details.
 *
 * Syntax:
 * ```
 * az relay hyco show [--ids]
 *                    [--name]
 *                    [--namespace-name]
 *                    [--query-examples]
 *                    [--resource-group]
 *                    [--subscription]
 * ```
 */
var az_relay_hyco_show_command_builder = /** @class */ (function (_super) {
    __extends(az_relay_hyco_show_command_builder, _super);
    function az_relay_hyco_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_relay_hyco_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of Hybrid Connection. */
    az_relay_hyco_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of Namespace. */
    az_relay_hyco_show_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_relay_hyco_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_relay_hyco_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_relay_hyco_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_relay_hyco_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Updates the Relay Service Hybrid Connection.
 *
 * Syntax:
 * ```
 * az relay hyco update [--add]
 *                      [--force-string]
 *                      [--ids]
 *                      [--name]
 *                      [--namespace-name]
 *                      [--remove]
 *                      [--requires-client-authorization {false, true}]
 *                      [--resource-group]
 *                      [--set]
 *                      [--status {Active, Disabled, ReceiveDisabled, SendDisabled}]
 *                      [--subscription]
 *                      [--user-metadata]
 * ```
 */
var az_relay_hyco_update_command_builder = /** @class */ (function (_super) {
    __extends(az_relay_hyco_update_command_builder, _super);
    function az_relay_hyco_update_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_relay_hyco_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_relay_hyco_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_relay_hyco_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of Hybrid Connection. */
    az_relay_hyco_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of Namespace. */
    az_relay_hyco_update_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_relay_hyco_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Indicates whether client authorization is required. */
    az_relay_hyco_update_command_builder.prototype.requiresClientAuthorization = function (value) {
        this.setFlag("--requires-client-authorization", value.toString());
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_relay_hyco_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_relay_hyco_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Enumerates the possible values for the status of a messaging entity. */
    az_relay_hyco_update_command_builder.prototype.status = function (value) {
        this.setFlag("--status", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_relay_hyco_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Endpoint metadata. */
    az_relay_hyco_update_command_builder.prototype.userMetadata = function (value) {
        this.setFlag("--user-metadata", value);
        return this;
    };
    return az_relay_hyco_update_command_builder;
}(base_1.CommandBuilder));
/**
 * List the keys and connection strings of Authorization Rule for Relay Service Namespace.
 *
 * Syntax:
 * ```
 * az relay namespace authorization-rule keys list --name
 *                                                 --namespace-name
 *                                                 --resource-group
 *                                                 [--query-examples]
 *                                                 [--subscription]
 * ```
 *
 * @param {string} name Name of Namespace Authorization Rule.
 * @param {string} namespaceName Name of Namespace.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_relay_namespace_authorization_rule_keys_list_command_builder = /** @class */ (function (_super) {
    __extends(az_relay_namespace_authorization_rule_keys_list_command_builder, _super);
    function az_relay_namespace_authorization_rule_keys_list_command_builder(commandPath, resultDataTypeName, name, namespaceName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.namespaceName(namespaceName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of Namespace Authorization Rule. */
    az_relay_namespace_authorization_rule_keys_list_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of Namespace. */
    az_relay_namespace_authorization_rule_keys_list_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_relay_namespace_authorization_rule_keys_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_relay_namespace_authorization_rule_keys_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_relay_namespace_authorization_rule_keys_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_relay_namespace_authorization_rule_keys_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Regenerate keys of Authorization Rule for the Relay Service Namespace.
 *
 * Syntax:
 * ```
 * az relay namespace authorization-rule keys renew --key {PrimaryKey, SecondaryKey}
 *                                                  [--ids]
 *                                                  [--key-value]
 *                                                  [--name]
 *                                                  [--namespace-name]
 *                                                  [--resource-group]
 *                                                  [--subscription]
 * ```
 *
 * @param {'PrimaryKey' | 'SecondaryKey'} key Specifies Primary or Secondary key needs to be reset.
 */
var az_relay_namespace_authorization_rule_keys_renew_command_builder = /** @class */ (function (_super) {
    __extends(az_relay_namespace_authorization_rule_keys_renew_command_builder, _super);
    function az_relay_namespace_authorization_rule_keys_renew_command_builder(commandPath, resultDataTypeName, key) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.key(key);
        return _this;
    }
    /** Specifies Primary or Secondary key needs to be reset. */
    az_relay_namespace_authorization_rule_keys_renew_command_builder.prototype.key = function (value) {
        this.setFlag("--key", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_relay_namespace_authorization_rule_keys_renew_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Optional, if the key value provided, is set for KeyType or autogenerated Key value set for keyType. */
    az_relay_namespace_authorization_rule_keys_renew_command_builder.prototype.keyValue = function (value) {
        this.setFlag("--key-value", value);
        return this;
    };
    /** Name of Namespace Authorization Rule. */
    az_relay_namespace_authorization_rule_keys_renew_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of Namespace. */
    az_relay_namespace_authorization_rule_keys_renew_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_relay_namespace_authorization_rule_keys_renew_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_relay_namespace_authorization_rule_keys_renew_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_relay_namespace_authorization_rule_keys_renew_command_builder;
}(base_1.CommandBuilder));
/**
 * Create Authorization Rule for the given Relay Service Namespace.
 *
 * Syntax:
 * ```
 * az relay namespace authorization-rule create --name
 *                                              --namespace-name
 *                                              --resource-group
 *                                              [--rights {Listen, Manage, Send}]
 *                                              [--subscription]
 * ```
 *
 * @param {string} name Name of Namespace Authorization Rule.
 * @param {string} namespaceName Name of Namespace.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_relay_namespace_authorization_rule_create_command_builder = /** @class */ (function (_super) {
    __extends(az_relay_namespace_authorization_rule_create_command_builder, _super);
    function az_relay_namespace_authorization_rule_create_command_builder(commandPath, resultDataTypeName, name, namespaceName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.namespaceName(namespaceName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of Namespace Authorization Rule. */
    az_relay_namespace_authorization_rule_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of Namespace. */
    az_relay_namespace_authorization_rule_create_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_relay_namespace_authorization_rule_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Space-separated list of Authorization rule rights. */
    az_relay_namespace_authorization_rule_create_command_builder.prototype.rights = function (value) {
        this.setFlag("--rights", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_relay_namespace_authorization_rule_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_relay_namespace_authorization_rule_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Deletes the Authorization Rule of the Relay Service Namespace.
 *
 * Syntax:
 * ```
 * az relay namespace authorization-rule delete [--ids]
 *                                              [--name]
 *                                              [--namespace-name]
 *                                              [--resource-group]
 *                                              [--subscription]
 * ```
 */
var az_relay_namespace_authorization_rule_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_relay_namespace_authorization_rule_delete_command_builder, _super);
    function az_relay_namespace_authorization_rule_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_relay_namespace_authorization_rule_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of Namespace Authorization Rule. */
    az_relay_namespace_authorization_rule_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of Namespace. */
    az_relay_namespace_authorization_rule_delete_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_relay_namespace_authorization_rule_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_relay_namespace_authorization_rule_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_relay_namespace_authorization_rule_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * Shows the list of Authorization Rule by Relay Service Namespace.
 *
 * Syntax:
 * ```
 * az relay namespace authorization-rule list --namespace-name
 *                                            --resource-group
 *                                            [--query-examples]
 *                                            [--subscription]
 * ```
 *
 * @param {string} namespaceName Name of the Namespace.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_relay_namespace_authorization_rule_list_command_builder = /** @class */ (function (_super) {
    __extends(az_relay_namespace_authorization_rule_list_command_builder, _super);
    function az_relay_namespace_authorization_rule_list_command_builder(commandPath, resultDataTypeName, namespaceName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.namespaceName(namespaceName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the Namespace. */
    az_relay_namespace_authorization_rule_list_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_relay_namespace_authorization_rule_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_relay_namespace_authorization_rule_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_relay_namespace_authorization_rule_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_relay_namespace_authorization_rule_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Shows the details of Relay Service Namespace Authorization Rule.
 *
 * Syntax:
 * ```
 * az relay namespace authorization-rule show [--ids]
 *                                            [--name]
 *                                            [--namespace-name]
 *                                            [--query-examples]
 *                                            [--resource-group]
 *                                            [--subscription]
 * ```
 */
var az_relay_namespace_authorization_rule_show_command_builder = /** @class */ (function (_super) {
    __extends(az_relay_namespace_authorization_rule_show_command_builder, _super);
    function az_relay_namespace_authorization_rule_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_relay_namespace_authorization_rule_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of Namespace Authorization Rule. */
    az_relay_namespace_authorization_rule_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of Namespace. */
    az_relay_namespace_authorization_rule_show_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_relay_namespace_authorization_rule_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_relay_namespace_authorization_rule_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_relay_namespace_authorization_rule_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_relay_namespace_authorization_rule_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Updates Authorization Rule for the given Relay Service Namespace.
 *
 * Syntax:
 * ```
 * az relay namespace authorization-rule update --rights {Listen, Manage, Send}
 *                                              [--add]
 *                                              [--force-string]
 *                                              [--ids]
 *                                              [--name]
 *                                              [--namespace-name]
 *                                              [--remove]
 *                                              [--resource-group]
 *                                              [--set]
 *                                              [--subscription]
 * ```
 *
 * @param {'Listen' | 'Manage' | 'Send'} rights Space-separated list of Authorization rule rights.
 */
var az_relay_namespace_authorization_rule_update_command_builder = /** @class */ (function (_super) {
    __extends(az_relay_namespace_authorization_rule_update_command_builder, _super);
    function az_relay_namespace_authorization_rule_update_command_builder(commandPath, resultDataTypeName, rights) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.rights(rights);
        return _this;
    }
    /** Space-separated list of Authorization rule rights. */
    az_relay_namespace_authorization_rule_update_command_builder.prototype.rights = function (value) {
        this.setFlag("--rights", value);
        return this;
    };
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_relay_namespace_authorization_rule_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_relay_namespace_authorization_rule_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_relay_namespace_authorization_rule_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of Namespace Authorization Rule. */
    az_relay_namespace_authorization_rule_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of Namespace. */
    az_relay_namespace_authorization_rule_update_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_relay_namespace_authorization_rule_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_relay_namespace_authorization_rule_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_relay_namespace_authorization_rule_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_relay_namespace_authorization_rule_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_relay_namespace_authorization_rule_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a Relay Service Namespace.
 *
 * Syntax:
 * ```
 * az relay namespace create --name
 *                           --resource-group
 *                           [--location]
 *                           [--subscription]
 *                           [--tags]
 * ```
 *
 * @param {string} name Name of Namespace.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_relay_namespace_create_command_builder = /** @class */ (function (_super) {
    __extends(az_relay_namespace_create_command_builder, _super);
    function az_relay_namespace_create_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of Namespace. */
    az_relay_namespace_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_relay_namespace_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_relay_namespace_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_relay_namespace_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_relay_namespace_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_relay_namespace_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Deletes the Relay Service Namespace.
 *
 * Syntax:
 * ```
 * az relay namespace delete [--ids]
 *                           [--name]
 *                           [--resource-group]
 *                           [--subscription]
 * ```
 */
var az_relay_namespace_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_relay_namespace_delete_command_builder, _super);
    function az_relay_namespace_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_relay_namespace_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of Namespace. */
    az_relay_namespace_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_relay_namespace_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_relay_namespace_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_relay_namespace_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * Check for the availability of the given name for the Namespace.
 *
 * Syntax:
 * ```
 * az relay namespace exists --name
 *                           [--subscription]
 * ```
 *
 * @param {string} name Namespace name. Name can contain only letters, numbers, and hyphens. The namespace must start with a letter, and it must end with a letter or number.
 */
var az_relay_namespace_exists_command_builder = /** @class */ (function (_super) {
    __extends(az_relay_namespace_exists_command_builder, _super);
    function az_relay_namespace_exists_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** Namespace name. Name can contain only letters, numbers, and hyphens. The namespace must start with a letter, and it must end with a letter or number. */
    az_relay_namespace_exists_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_relay_namespace_exists_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_relay_namespace_exists_command_builder;
}(base_1.CommandBuilder));
/**
 * List the Relay Service Namespaces.
 *
 * Syntax:
 * ```
 * az relay namespace list [--query-examples]
 *                         [--resource-group]
 *                         [--subscription]
 * ```
 */
var az_relay_namespace_list_command_builder = /** @class */ (function (_super) {
    __extends(az_relay_namespace_list_command_builder, _super);
    function az_relay_namespace_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_relay_namespace_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_relay_namespace_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_relay_namespace_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_relay_namespace_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Shows the Relay Service Namespace details.
 *
 * Syntax:
 * ```
 * az relay namespace show [--ids]
 *                         [--name]
 *                         [--query-examples]
 *                         [--resource-group]
 *                         [--subscription]
 * ```
 */
var az_relay_namespace_show_command_builder = /** @class */ (function (_super) {
    __extends(az_relay_namespace_show_command_builder, _super);
    function az_relay_namespace_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_relay_namespace_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of Namespace. */
    az_relay_namespace_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_relay_namespace_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_relay_namespace_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_relay_namespace_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_relay_namespace_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Updates a Relay Service Namespace.
 *
 * Syntax:
 * ```
 * az relay namespace update [--add]
 *                           [--force-string]
 *                           [--ids]
 *                           [--name]
 *                           [--remove]
 *                           [--resource-group]
 *                           [--set]
 *                           [--subscription]
 *                           [--tags]
 * ```
 */
var az_relay_namespace_update_command_builder = /** @class */ (function (_super) {
    __extends(az_relay_namespace_update_command_builder, _super);
    function az_relay_namespace_update_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_relay_namespace_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_relay_namespace_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_relay_namespace_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of Namespace. */
    az_relay_namespace_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_relay_namespace_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_relay_namespace_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_relay_namespace_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_relay_namespace_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_relay_namespace_update_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_relay_namespace_update_command_builder;
}(base_1.CommandBuilder));
/**
 * List the keys and connection strings of Authorization Rule for the given Relay Service WCF Relay.
 *
 * Syntax:
 * ```
 * az relay wcfrelay authorization-rule keys list --name
 *                                                --namespace-name
 *                                                --relay-name
 *                                                --resource-group
 *                                                [--query-examples]
 *                                                [--subscription]
 * ```
 *
 * @param {string} name Name of WCF Relay Authorization Rule.
 * @param {string} namespaceName Name of Namespace.
 * @param {string} relayName Name of WCF Relay.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_relay_wcfrelay_authorization_rule_keys_list_command_builder = /** @class */ (function (_super) {
    __extends(az_relay_wcfrelay_authorization_rule_keys_list_command_builder, _super);
    function az_relay_wcfrelay_authorization_rule_keys_list_command_builder(commandPath, resultDataTypeName, name, namespaceName, relayName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.namespaceName(namespaceName);
        _this.relayName(relayName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of WCF Relay Authorization Rule. */
    az_relay_wcfrelay_authorization_rule_keys_list_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of Namespace. */
    az_relay_wcfrelay_authorization_rule_keys_list_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Name of WCF Relay. */
    az_relay_wcfrelay_authorization_rule_keys_list_command_builder.prototype.relayName = function (value) {
        this.setFlag("--relay-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_relay_wcfrelay_authorization_rule_keys_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_relay_wcfrelay_authorization_rule_keys_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_relay_wcfrelay_authorization_rule_keys_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_relay_wcfrelay_authorization_rule_keys_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Regenerate keys of Authorization Rule for Relay Service WCF Relay.
 *
 * Syntax:
 * ```
 * az relay wcfrelay authorization-rule keys renew --key {PrimaryKey, SecondaryKey}
 *                                                 [--ids]
 *                                                 [--key-value]
 *                                                 [--name]
 *                                                 [--namespace-name]
 *                                                 [--relay-name]
 *                                                 [--resource-group]
 *                                                 [--subscription]
 * ```
 *
 * @param {'PrimaryKey' | 'SecondaryKey'} key Specifies Primary or Secondary key needs to be reset.
 */
var az_relay_wcfrelay_authorization_rule_keys_renew_command_builder = /** @class */ (function (_super) {
    __extends(az_relay_wcfrelay_authorization_rule_keys_renew_command_builder, _super);
    function az_relay_wcfrelay_authorization_rule_keys_renew_command_builder(commandPath, resultDataTypeName, key) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.key(key);
        return _this;
    }
    /** Specifies Primary or Secondary key needs to be reset. */
    az_relay_wcfrelay_authorization_rule_keys_renew_command_builder.prototype.key = function (value) {
        this.setFlag("--key", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_relay_wcfrelay_authorization_rule_keys_renew_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Optional, if the key value provided, is set for KeyType or autogenerated Key value set for keyType. */
    az_relay_wcfrelay_authorization_rule_keys_renew_command_builder.prototype.keyValue = function (value) {
        this.setFlag("--key-value", value);
        return this;
    };
    /** Name of WCF Relay Authorization Rule. */
    az_relay_wcfrelay_authorization_rule_keys_renew_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of Namespace. */
    az_relay_wcfrelay_authorization_rule_keys_renew_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Name of WCF Relay. */
    az_relay_wcfrelay_authorization_rule_keys_renew_command_builder.prototype.relayName = function (value) {
        this.setFlag("--relay-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_relay_wcfrelay_authorization_rule_keys_renew_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_relay_wcfrelay_authorization_rule_keys_renew_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_relay_wcfrelay_authorization_rule_keys_renew_command_builder;
}(base_1.CommandBuilder));
/**
 * Create Authorization Rule for the given Relay Service WCF Relay.
 *
 * Syntax:
 * ```
 * az relay wcfrelay authorization-rule create --name
 *                                             --namespace-name
 *                                             --relay-name
 *                                             --resource-group
 *                                             [--rights {Listen, Manage, Send}]
 *                                             [--subscription]
 * ```
 *
 * @param {string} name Name of WCF Relay Authorization Rule.
 * @param {string} namespaceName Name of Namespace.
 * @param {string} relayName Name of WCF Relay.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_relay_wcfrelay_authorization_rule_create_command_builder = /** @class */ (function (_super) {
    __extends(az_relay_wcfrelay_authorization_rule_create_command_builder, _super);
    function az_relay_wcfrelay_authorization_rule_create_command_builder(commandPath, resultDataTypeName, name, namespaceName, relayName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.namespaceName(namespaceName);
        _this.relayName(relayName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of WCF Relay Authorization Rule. */
    az_relay_wcfrelay_authorization_rule_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of Namespace. */
    az_relay_wcfrelay_authorization_rule_create_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Name of WCF Relay. */
    az_relay_wcfrelay_authorization_rule_create_command_builder.prototype.relayName = function (value) {
        this.setFlag("--relay-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_relay_wcfrelay_authorization_rule_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Space-separated list of Authorization rule rights. */
    az_relay_wcfrelay_authorization_rule_create_command_builder.prototype.rights = function (value) {
        this.setFlag("--rights", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_relay_wcfrelay_authorization_rule_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_relay_wcfrelay_authorization_rule_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete the Authorization Rule of Relay Service WCF Relay.
 *
 * Syntax:
 * ```
 * az relay wcfrelay authorization-rule delete [--ids]
 *                                             [--name]
 *                                             [--namespace-name]
 *                                             [--relay-name]
 *                                             [--resource-group]
 *                                             [--subscription]
 * ```
 */
var az_relay_wcfrelay_authorization_rule_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_relay_wcfrelay_authorization_rule_delete_command_builder, _super);
    function az_relay_wcfrelay_authorization_rule_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_relay_wcfrelay_authorization_rule_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of WCF Relay Authorization Rule. */
    az_relay_wcfrelay_authorization_rule_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of Namespace. */
    az_relay_wcfrelay_authorization_rule_delete_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Name of WCF Relay. */
    az_relay_wcfrelay_authorization_rule_delete_command_builder.prototype.relayName = function (value) {
        this.setFlag("--relay-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_relay_wcfrelay_authorization_rule_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_relay_wcfrelay_authorization_rule_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_relay_wcfrelay_authorization_rule_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List of Authorization Rule by Relay Service WCF Relay.
 *
 * Syntax:
 * ```
 * az relay wcfrelay authorization-rule list --namespace-name
 *                                           --relay-name
 *                                           --resource-group
 *                                           [--query-examples]
 *                                           [--subscription]
 * ```
 *
 * @param {string} namespaceName Name of Namespace.
 * @param {string} relayName Name of WCF Relay.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_relay_wcfrelay_authorization_rule_list_command_builder = /** @class */ (function (_super) {
    __extends(az_relay_wcfrelay_authorization_rule_list_command_builder, _super);
    function az_relay_wcfrelay_authorization_rule_list_command_builder(commandPath, resultDataTypeName, namespaceName, relayName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.namespaceName(namespaceName);
        _this.relayName(relayName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of Namespace. */
    az_relay_wcfrelay_authorization_rule_list_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Name of WCF Relay. */
    az_relay_wcfrelay_authorization_rule_list_command_builder.prototype.relayName = function (value) {
        this.setFlag("--relay-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_relay_wcfrelay_authorization_rule_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_relay_wcfrelay_authorization_rule_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_relay_wcfrelay_authorization_rule_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_relay_wcfrelay_authorization_rule_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Show properties of Authorization Rule for the given Relay Service WCF Relay.
 *
 * Syntax:
 * ```
 * az relay wcfrelay authorization-rule show [--ids]
 *                                           [--name]
 *                                           [--namespace-name]
 *                                           [--query-examples]
 *                                           [--relay-name]
 *                                           [--resource-group]
 *                                           [--subscription]
 * ```
 */
var az_relay_wcfrelay_authorization_rule_show_command_builder = /** @class */ (function (_super) {
    __extends(az_relay_wcfrelay_authorization_rule_show_command_builder, _super);
    function az_relay_wcfrelay_authorization_rule_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_relay_wcfrelay_authorization_rule_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of WCF Relay Authorization Rule. */
    az_relay_wcfrelay_authorization_rule_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of Namespace. */
    az_relay_wcfrelay_authorization_rule_show_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_relay_wcfrelay_authorization_rule_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of WCF Relay. */
    az_relay_wcfrelay_authorization_rule_show_command_builder.prototype.relayName = function (value) {
        this.setFlag("--relay-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_relay_wcfrelay_authorization_rule_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_relay_wcfrelay_authorization_rule_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_relay_wcfrelay_authorization_rule_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update Authorization Rule for the given Relay Service WCF Relay.
 *
 * Syntax:
 * ```
 * az relay wcfrelay authorization-rule update --rights {Listen, Manage, Send}
 *                                             [--add]
 *                                             [--force-string]
 *                                             [--ids]
 *                                             [--name]
 *                                             [--namespace-name]
 *                                             [--relay-name]
 *                                             [--remove]
 *                                             [--resource-group]
 *                                             [--set]
 *                                             [--subscription]
 * ```
 *
 * @param {'Listen' | 'Manage' | 'Send'} rights Space-separated list of Authorization rule rights.
 */
var az_relay_wcfrelay_authorization_rule_update_command_builder = /** @class */ (function (_super) {
    __extends(az_relay_wcfrelay_authorization_rule_update_command_builder, _super);
    function az_relay_wcfrelay_authorization_rule_update_command_builder(commandPath, resultDataTypeName, rights) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.rights(rights);
        return _this;
    }
    /** Space-separated list of Authorization rule rights. */
    az_relay_wcfrelay_authorization_rule_update_command_builder.prototype.rights = function (value) {
        this.setFlag("--rights", value);
        return this;
    };
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_relay_wcfrelay_authorization_rule_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_relay_wcfrelay_authorization_rule_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_relay_wcfrelay_authorization_rule_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of WCF Relay Authorization Rule. */
    az_relay_wcfrelay_authorization_rule_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of Namespace. */
    az_relay_wcfrelay_authorization_rule_update_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Name of WCF Relay. */
    az_relay_wcfrelay_authorization_rule_update_command_builder.prototype.relayName = function (value) {
        this.setFlag("--relay-name", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_relay_wcfrelay_authorization_rule_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_relay_wcfrelay_authorization_rule_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_relay_wcfrelay_authorization_rule_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_relay_wcfrelay_authorization_rule_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_relay_wcfrelay_authorization_rule_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Create the Relay Service WCF Relay.
 *
 * Syntax:
 * ```
 * az relay wcfrelay create --name
 *                          --namespace-name
 *                          --relay-type {Http, NetTcp}
 *                          --resource-group
 *                          [--requires-client-authorization {false, true}]
 *                          [--requires-transport-security {false, true}]
 *                          [--subscription]
 *                          [--user-metadata]
 * ```
 *
 * @param {string} name Name of WCF Relay.
 * @param {string} namespaceName Name of Namespace.
 * @param {'Http' | 'NetTcp'} relayType Relay type.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_relay_wcfrelay_create_command_builder = /** @class */ (function (_super) {
    __extends(az_relay_wcfrelay_create_command_builder, _super);
    function az_relay_wcfrelay_create_command_builder(commandPath, resultDataTypeName, name, namespaceName, relayType, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.namespaceName(namespaceName);
        _this.relayType(relayType);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of WCF Relay. */
    az_relay_wcfrelay_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of Namespace. */
    az_relay_wcfrelay_create_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Relay type. */
    az_relay_wcfrelay_create_command_builder.prototype.relayType = function (value) {
        this.setFlag("--relay-type", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_relay_wcfrelay_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Indicates whether client authorization is required. */
    az_relay_wcfrelay_create_command_builder.prototype.requiresClientAuthorization = function (value) {
        this.setFlag("--requires-client-authorization", value.toString());
        return this;
    };
    /** Indicates whether transport security is required. */
    az_relay_wcfrelay_create_command_builder.prototype.requiresTransportSecurity = function (value) {
        this.setFlag("--requires-transport-security", value.toString());
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_relay_wcfrelay_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Endpoint metadata. */
    az_relay_wcfrelay_create_command_builder.prototype.userMetadata = function (value) {
        this.setFlag("--user-metadata", value);
        return this;
    };
    return az_relay_wcfrelay_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Deletes the Relay Service WCF Relay.
 *
 * Syntax:
 * ```
 * az relay wcfrelay delete [--ids]
 *                          [--name]
 *                          [--namespace-name]
 *                          [--resource-group]
 *                          [--subscription]
 * ```
 */
var az_relay_wcfrelay_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_relay_wcfrelay_delete_command_builder, _super);
    function az_relay_wcfrelay_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_relay_wcfrelay_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of WCF Relay. */
    az_relay_wcfrelay_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of Namespace. */
    az_relay_wcfrelay_delete_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_relay_wcfrelay_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_relay_wcfrelay_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_relay_wcfrelay_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List the WCF Relay by Relay Service Namepsace.
 *
 * Syntax:
 * ```
 * az relay wcfrelay list --namespace-name
 *                        --resource-group
 *                        [--query-examples]
 *                        [--subscription]
 * ```
 *
 * @param {string} namespaceName Name of Namespace.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_relay_wcfrelay_list_command_builder = /** @class */ (function (_super) {
    __extends(az_relay_wcfrelay_list_command_builder, _super);
    function az_relay_wcfrelay_list_command_builder(commandPath, resultDataTypeName, namespaceName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.namespaceName(namespaceName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of Namespace. */
    az_relay_wcfrelay_list_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_relay_wcfrelay_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_relay_wcfrelay_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_relay_wcfrelay_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_relay_wcfrelay_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Shows the Relay Service WCF Relay Details.
 *
 * Syntax:
 * ```
 * az relay wcfrelay show [--ids]
 *                        [--name]
 *                        [--namespace-name]
 *                        [--query-examples]
 *                        [--resource-group]
 *                        [--subscription]
 * ```
 */
var az_relay_wcfrelay_show_command_builder = /** @class */ (function (_super) {
    __extends(az_relay_wcfrelay_show_command_builder, _super);
    function az_relay_wcfrelay_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_relay_wcfrelay_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of WCF Relay. */
    az_relay_wcfrelay_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of Namespace. */
    az_relay_wcfrelay_show_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_relay_wcfrelay_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_relay_wcfrelay_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_relay_wcfrelay_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_relay_wcfrelay_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Updates existing Relay Service WCF Relay.
 *
 * Syntax:
 * ```
 * az relay wcfrelay update [--add]
 *                          [--force-string]
 *                          [--ids]
 *                          [--name]
 *                          [--namespace-name]
 *                          [--relay-type {Http, NetTcp}]
 *                          [--remove]
 *                          [--resource-group]
 *                          [--set]
 *                          [--status {Active, Disabled, ReceiveDisabled, SendDisabled}]
 *                          [--subscription]
 *                          [--user-metadata]
 * ```
 */
var az_relay_wcfrelay_update_command_builder = /** @class */ (function (_super) {
    __extends(az_relay_wcfrelay_update_command_builder, _super);
    function az_relay_wcfrelay_update_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_relay_wcfrelay_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_relay_wcfrelay_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_relay_wcfrelay_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of WCF Relay. */
    az_relay_wcfrelay_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of Namespace. */
    az_relay_wcfrelay_update_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Relay type. */
    az_relay_wcfrelay_update_command_builder.prototype.relayType = function (value) {
        this.setFlag("--relay-type", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_relay_wcfrelay_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_relay_wcfrelay_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_relay_wcfrelay_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Enumerates the possible values for the status of a messaging entity. */
    az_relay_wcfrelay_update_command_builder.prototype.status = function (value) {
        this.setFlag("--status", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_relay_wcfrelay_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Endpoint metadata. */
    az_relay_wcfrelay_update_command_builder.prototype.userMetadata = function (value) {
        this.setFlag("--user-metadata", value);
        return this;
    };
    return az_relay_wcfrelay_update_command_builder;
}(base_1.CommandBuilder));
