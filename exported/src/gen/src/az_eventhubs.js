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
exports.az_eventhubs = exports.az_eventhubs_namespace = exports.az_eventhubs_namespace_network_rule = exports.az_eventhubs_namespace_authorization_rule = exports.az_eventhubs_namespace_authorization_rule_keys = exports.az_eventhubs_georecovery_alias = exports.az_eventhubs_georecovery_alias_authorization_rule = exports.az_eventhubs_georecovery_alias_authorization_rule_keys = exports.az_eventhubs_eventhub = exports.az_eventhubs_eventhub_consumer_group = exports.az_eventhubs_eventhub_authorization_rule = exports.az_eventhubs_eventhub_authorization_rule_keys = exports.az_eventhubs_cluster = exports.az_eventhubs_cluster_namespace = void 0;
var base_1 = require("../base");
/** Manage Azure EventHubs Cluster for namespace. */
var az_eventhubs_cluster_namespace = /** @class */ (function () {
    function az_eventhubs_cluster_namespace() {
    }
    /**
     * List of Namespaces within given Cluster.
     *
     * Syntax:
     * ```
     * az eventhubs cluster namespace list --name
     *                                     --resource-group
     *                                     [--query-examples]
     *                                     [--subscription]
     * ```
     *
     * @param {string} name Name of Cluster.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_eventhubs_cluster_namespace.list = function (name, resourceGroup) {
        return new az_eventhubs_cluster_namespace_list_command_builder("az eventhubs cluster namespace list", 'az_eventhubs_cluster_namespace_list_command_result', name, resourceGroup);
    };
    return az_eventhubs_cluster_namespace;
}());
exports.az_eventhubs_cluster_namespace = az_eventhubs_cluster_namespace;
/** Manage Azure EventHubs Clusters. */
var az_eventhubs_cluster = /** @class */ (function () {
    function az_eventhubs_cluster() {
    }
    /**
     * List the quantity of available pre-provisioned Event Hubs Clusters, indexed by Azure region.
     *
     * Syntax:
     * ```
     * az eventhubs cluster available-region [--subscription]
     * ```
     */
    az_eventhubs_cluster.available_region = function () {
        return new az_eventhubs_cluster_available_region_command_builder("az eventhubs cluster available-region", 'az_eventhubs_cluster_available_region_command_result');
    };
    /**
     * Create EventHubs Cluster.
     *
     * Syntax:
     * ```
     * az eventhubs cluster create --name
     *                             --resource-group
     *                             [--capacity]
     *                             [--location]
     *                             [--subscription]
     *                             [--tags]
     * ```
     *
     * @param {string} name Name of Cluster.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_eventhubs_cluster.create = function (name, resourceGroup) {
        return new az_eventhubs_cluster_create_command_builder("az eventhubs cluster create", 'az_eventhubs_cluster_create_command_result', name, resourceGroup);
    };
    /**
     * Delete an existing Event Hubs Cluster.
     *
     * Syntax:
     * ```
     * az eventhubs cluster delete --name
     *                             --resource-group
     *                             [--no-wait]
     *                             [--subscription]
     *                             [--yes]
     * ```
     *
     * @param {string} name Name of Cluster.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_eventhubs_cluster["delete"] = function (name, resourceGroup) {
        return new az_eventhubs_cluster_delete_command_builder("az eventhubs cluster delete", 'az_eventhubs_cluster_delete_command_result', name, resourceGroup);
    };
    /**
     * List the available Event Hubs Clusters within an ARM resource group.
     *
     * Syntax:
     * ```
     * az eventhubs cluster list --resource-group
     *                           [--query-examples]
     *                           [--subscription]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_eventhubs_cluster.list = function (resourceGroup) {
        return new az_eventhubs_cluster_list_command_builder("az eventhubs cluster list", 'az_eventhubs_cluster_list_command_result', resourceGroup);
    };
    /**
     * Get the resource description of the specified Event Hubs Cluster.
     *
     * Syntax:
     * ```
     * az eventhubs cluster show --name
     *                           --resource-group
     *                           [--query-examples]
     *                           [--subscription]
     * ```
     *
     * @param {string} name Name of Cluster.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_eventhubs_cluster.show = function (name, resourceGroup) {
        return new az_eventhubs_cluster_show_command_builder("az eventhubs cluster show", 'az_eventhubs_cluster_show_command_result', name, resourceGroup);
    };
    /**
     * Update tags of EventHubs Cluster.
     *
     * Syntax:
     * ```
     * az eventhubs cluster update --name
     *                             --resource-group
     *                             [--add]
     *                             [--force-string]
     *                             [--remove]
     *                             [--set]
     *                             [--subscription]
     *                             [--tags]
     * ```
     *
     * @param {string} name Name of Cluster.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_eventhubs_cluster.update = function (name, resourceGroup) {
        return new az_eventhubs_cluster_update_command_builder("az eventhubs cluster update", 'az_eventhubs_cluster_update_command_result', name, resourceGroup);
    };
    /**
     * Place the CLI in a waiting state until a condition of the Cluster operation is completed.
     *
     * Syntax:
     * ```
     * az eventhubs cluster wait --name
     *                           --resource-group
     *                           [--created]
     *                           [--custom]
     *                           [--deleted]
     *                           [--exists]
     *                           [--interval]
     *                           [--subscription]
     *                           [--timeout]
     *                           [--updated]
     * ```
     *
     * @param {string} name Name of Cluster.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_eventhubs_cluster.wait = function (name, resourceGroup) {
        return new az_eventhubs_cluster_wait_command_builder("az eventhubs cluster wait", 'az_eventhubs_cluster_wait_command_result', name, resourceGroup);
    };
    return az_eventhubs_cluster;
}());
exports.az_eventhubs_cluster = az_eventhubs_cluster;
/** Manage Azure Authorizationrule connection strings for Eventhub. */
var az_eventhubs_eventhub_authorization_rule_keys = /** @class */ (function () {
    function az_eventhubs_eventhub_authorization_rule_keys() {
    }
    /**
     * Shows the connection strings of Authorizationrule for the Eventhub.
     *
     * Syntax:
     * ```
     * az eventhubs eventhub authorization-rule keys list --eventhub-name
     *                                                    --name
     *                                                    --namespace-name
     *                                                    --resource-group
     *                                                    [--query-examples]
     *                                                    [--subscription]
     * ```
     *
     * @param {string} eventhubName Name of EventHub.
     * @param {string} name Name of EventHub AuthorizationRule.
     * @param {string} namespaceName Name of Namespace.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_eventhubs_eventhub_authorization_rule_keys.list = function (eventhubName, name, namespaceName, resourceGroup) {
        return new az_eventhubs_eventhub_authorization_rule_keys_list_command_builder("az eventhubs eventhub authorization-rule keys list", 'az_eventhubs_eventhub_authorization_rule_keys_list_command_result', eventhubName, name, namespaceName, resourceGroup);
    };
    /**
     * Regenerate the connection strings of Authorizationrule for the namespace.
     *
     * Syntax:
     * ```
     * az eventhubs eventhub authorization-rule keys renew --key {PrimaryKey, SecondaryKey}
     *                                                     [--eventhub-name]
     *                                                     [--ids]
     *                                                     [--key-value]
     *                                                     [--name]
     *                                                     [--namespace-name]
     *                                                     [--resource-group]
     *                                                     [--subscription]
     * ```
     *
     * @param {'PrimaryKey' | 'SecondaryKey'} key Specifies Primary or Secondary key needs to be reset.
     */
    az_eventhubs_eventhub_authorization_rule_keys.renew = function (key) {
        return new az_eventhubs_eventhub_authorization_rule_keys_renew_command_builder("az eventhubs eventhub authorization-rule keys renew", 'az_eventhubs_eventhub_authorization_rule_keys_renew_command_result', key);
    };
    return az_eventhubs_eventhub_authorization_rule_keys;
}());
exports.az_eventhubs_eventhub_authorization_rule_keys = az_eventhubs_eventhub_authorization_rule_keys;
/** Manage Azure Service Bus Authorizationrule for Eventhub. */
var az_eventhubs_eventhub_authorization_rule = /** @class */ (function () {
    function az_eventhubs_eventhub_authorization_rule() {
    }
    /**
     * Creates Authorizationrule for the given Eventhub.
     *
     * Syntax:
     * ```
     * az eventhubs eventhub authorization-rule create --eventhub-name
     *                                                 --name
     *                                                 --namespace-name
     *                                                 --resource-group
     *                                                 --rights {Listen, Manage, Send}
     *                                                 [--subscription]
     * ```
     *
     * @param {string} eventhubName Name of EventHub.
     * @param {string} name Name of EventHub AuthorizationRule.
     * @param {string} namespaceName Name of Namespace.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {'Listen' | 'Manage' | 'Send'} rights Space-separated list of Authorization rule rights.
     */
    az_eventhubs_eventhub_authorization_rule.create = function (eventhubName, name, namespaceName, resourceGroup, rights) {
        return new az_eventhubs_eventhub_authorization_rule_create_command_builder("az eventhubs eventhub authorization-rule create", 'az_eventhubs_eventhub_authorization_rule_create_command_result', eventhubName, name, namespaceName, resourceGroup, rights);
    };
    /**
     * Deletes the Authorizationrule of Eventhub.
     *
     * Syntax:
     * ```
     * az eventhubs eventhub authorization-rule delete [--eventhub-name]
     *                                                 [--ids]
     *                                                 [--name]
     *                                                 [--namespace-name]
     *                                                 [--resource-group]
     *                                                 [--subscription]
     * ```
     */
    az_eventhubs_eventhub_authorization_rule["delete"] = function () {
        return new az_eventhubs_eventhub_authorization_rule_delete_command_builder("az eventhubs eventhub authorization-rule delete", 'az_eventhubs_eventhub_authorization_rule_delete_command_result');
    };
    /**
     * Shows the list of Authorization-rules by Eventhub.
     *
     * Syntax:
     * ```
     * az eventhubs eventhub authorization-rule list --eventhub-name
     *                                               --namespace-name
     *                                               --resource-group
     *                                               [--query-examples]
     *                                               [--subscription]
     * ```
     *
     * @param {string} eventhubName Name of EventHub.
     * @param {string} namespaceName Name of Namespace.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_eventhubs_eventhub_authorization_rule.list = function (eventhubName, namespaceName, resourceGroup) {
        return new az_eventhubs_eventhub_authorization_rule_list_command_builder("az eventhubs eventhub authorization-rule list", 'az_eventhubs_eventhub_authorization_rule_list_command_result', eventhubName, namespaceName, resourceGroup);
    };
    /**
     * Shows the details of Authorizationrule.
     *
     * Syntax:
     * ```
     * az eventhubs eventhub authorization-rule show [--eventhub-name]
     *                                               [--ids]
     *                                               [--name]
     *                                               [--namespace-name]
     *                                               [--query-examples]
     *                                               [--resource-group]
     *                                               [--subscription]
     * ```
     */
    az_eventhubs_eventhub_authorization_rule.show = function () {
        return new az_eventhubs_eventhub_authorization_rule_show_command_builder("az eventhubs eventhub authorization-rule show", 'az_eventhubs_eventhub_authorization_rule_show_command_result');
    };
    /**
     * Updates Authorizationrule for the given Eventhub.
     *
     * Syntax:
     * ```
     * az eventhubs eventhub authorization-rule update --rights {Listen, Manage, Send}
     *                                                 [--add]
     *                                                 [--eventhub-name]
     *                                                 [--force-string]
     *                                                 [--ids]
     *                                                 [--name]
     *                                                 [--namespace-name]
     *                                                 [--remove]
     *                                                 [--resource-group]
     *                                                 [--set]
     *                                                 [--subscription]
     * ```
     *
     * @param {'Listen' | 'Manage' | 'Send'} rights Space-separated list of Authorization rule rights.
     */
    az_eventhubs_eventhub_authorization_rule.update = function (rights) {
        return new az_eventhubs_eventhub_authorization_rule_update_command_builder("az eventhubs eventhub authorization-rule update", 'az_eventhubs_eventhub_authorization_rule_update_command_result', rights);
    };
    return az_eventhubs_eventhub_authorization_rule;
}());
exports.az_eventhubs_eventhub_authorization_rule = az_eventhubs_eventhub_authorization_rule;
/** Manage Azure Event Hubs consumergroup. */
var az_eventhubs_eventhub_consumer_group = /** @class */ (function () {
    function az_eventhubs_eventhub_consumer_group() {
    }
    /**
     * Creates the EventHub ConsumerGroup.
     *
     * Syntax:
     * ```
     * az eventhubs eventhub consumer-group create --eventhub-name
     *                                             --name
     *                                             --namespace-name
     *                                             --resource-group
     *                                             [--subscription]
     *                                             [--user-metadata]
     * ```
     *
     * @param {string} eventhubName Name of EventHub.
     * @param {string} name Name of ConsumerGroup.
     * @param {string} namespaceName Name of Namespace.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_eventhubs_eventhub_consumer_group.create = function (eventhubName, name, namespaceName, resourceGroup) {
        return new az_eventhubs_eventhub_consumer_group_create_command_builder("az eventhubs eventhub consumer-group create", 'az_eventhubs_eventhub_consumer_group_create_command_result', eventhubName, name, namespaceName, resourceGroup);
    };
    /**
     * Deletes the ConsumerGroup.
     *
     * Syntax:
     * ```
     * az eventhubs eventhub consumer-group delete [--eventhub-name]
     *                                             [--ids]
     *                                             [--name]
     *                                             [--namespace-name]
     *                                             [--resource-group]
     *                                             [--subscription]
     * ```
     */
    az_eventhubs_eventhub_consumer_group["delete"] = function () {
        return new az_eventhubs_eventhub_consumer_group_delete_command_builder("az eventhubs eventhub consumer-group delete", 'az_eventhubs_eventhub_consumer_group_delete_command_result');
    };
    /**
     * List the ConsumerGroup by Eventhub.
     *
     * Syntax:
     * ```
     * az eventhubs eventhub consumer-group list --eventhub-name
     *                                           --namespace-name
     *                                           --resource-group
     *                                           [--query-examples]
     *                                           [--skip]
     *                                           [--subscription]
     *                                           [--top]
     * ```
     *
     * @param {string} eventhubName Name of EventHub.
     * @param {string} namespaceName Name of Namespace.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_eventhubs_eventhub_consumer_group.list = function (eventhubName, namespaceName, resourceGroup) {
        return new az_eventhubs_eventhub_consumer_group_list_command_builder("az eventhubs eventhub consumer-group list", 'az_eventhubs_eventhub_consumer_group_list_command_result', eventhubName, namespaceName, resourceGroup);
    };
    /**
     * Shows the ConsumerGroup Details.
     *
     * Syntax:
     * ```
     * az eventhubs eventhub consumer-group show [--eventhub-name]
     *                                           [--ids]
     *                                           [--name]
     *                                           [--namespace-name]
     *                                           [--query-examples]
     *                                           [--resource-group]
     *                                           [--subscription]
     * ```
     */
    az_eventhubs_eventhub_consumer_group.show = function () {
        return new az_eventhubs_eventhub_consumer_group_show_command_builder("az eventhubs eventhub consumer-group show", 'az_eventhubs_eventhub_consumer_group_show_command_result');
    };
    /**
     * Updates the EventHub ConsumerGroup.
     *
     * Syntax:
     * ```
     * az eventhubs eventhub consumer-group update [--add]
     *                                             [--eventhub-name]
     *                                             [--force-string]
     *                                             [--ids]
     *                                             [--name]
     *                                             [--namespace-name]
     *                                             [--remove]
     *                                             [--resource-group]
     *                                             [--set]
     *                                             [--subscription]
     *                                             [--user-metadata]
     * ```
     */
    az_eventhubs_eventhub_consumer_group.update = function () {
        return new az_eventhubs_eventhub_consumer_group_update_command_builder("az eventhubs eventhub consumer-group update", 'az_eventhubs_eventhub_consumer_group_update_command_result');
    };
    return az_eventhubs_eventhub_consumer_group;
}());
exports.az_eventhubs_eventhub_consumer_group = az_eventhubs_eventhub_consumer_group;
/** Manage Azure EventHubs eventhub and authorization-rule. */
var az_eventhubs_eventhub = /** @class */ (function () {
    function az_eventhubs_eventhub() {
    }
    /**
     * Creates the EventHubs Eventhub.
     *
     * Syntax:
     * ```
     * az eventhubs eventhub create --name
     *                              --namespace-name
     *                              --resource-group
     *                              [--archive-name-format]
     *                              [--blob-container]
     *                              [--capture-interval]
     *                              [--capture-size-limit]
     *                              [--destination-name]
     *                              [--enable-capture {false, true}]
     *                              [--message-retention]
     *                              [--partition-count]
     *                              [--skip-empty-archives {false, true}]
     *                              [--status {Active, Disabled, SendDisabled}]
     *                              [--storage-account]
     *                              [--subscription]
     * ```
     *
     * @param {string} name Name of Eventhub.
     * @param {string} namespaceName Name of Namespace.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_eventhubs_eventhub.create = function (name, namespaceName, resourceGroup) {
        return new az_eventhubs_eventhub_create_command_builder("az eventhubs eventhub create", 'az_eventhubs_eventhub_create_command_result', name, namespaceName, resourceGroup);
    };
    /**
     * Deletes the Eventhub.
     *
     * Syntax:
     * ```
     * az eventhubs eventhub delete [--ids]
     *                              [--name]
     *                              [--namespace-name]
     *                              [--resource-group]
     *                              [--subscription]
     * ```
     */
    az_eventhubs_eventhub["delete"] = function () {
        return new az_eventhubs_eventhub_delete_command_builder("az eventhubs eventhub delete", 'az_eventhubs_eventhub_delete_command_result');
    };
    /**
     * List the EventHub by Namepsace.
     *
     * Syntax:
     * ```
     * az eventhubs eventhub list --namespace-name
     *                            --resource-group
     *                            [--query-examples]
     *                            [--skip]
     *                            [--subscription]
     *                            [--top]
     * ```
     *
     * @param {string} namespaceName Name of Namespace.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_eventhubs_eventhub.list = function (namespaceName, resourceGroup) {
        return new az_eventhubs_eventhub_list_command_builder("az eventhubs eventhub list", 'az_eventhubs_eventhub_list_command_result', namespaceName, resourceGroup);
    };
    /**
     * Shows the Eventhub Details.
     *
     * Syntax:
     * ```
     * az eventhubs eventhub show [--ids]
     *                            [--name]
     *                            [--namespace-name]
     *                            [--query-examples]
     *                            [--resource-group]
     *                            [--subscription]
     * ```
     */
    az_eventhubs_eventhub.show = function () {
        return new az_eventhubs_eventhub_show_command_builder("az eventhubs eventhub show", 'az_eventhubs_eventhub_show_command_result');
    };
    /**
     * Updates the EventHubs Eventhub.
     *
     * Syntax:
     * ```
     * az eventhubs eventhub update [--add]
     *                              [--archive-name-format]
     *                              [--blob-container]
     *                              [--capture-interval]
     *                              [--capture-size-limit]
     *                              [--destination-name]
     *                              [--enable-capture {false, true}]
     *                              [--force-string]
     *                              [--ids]
     *                              [--message-retention]
     *                              [--name]
     *                              [--namespace-name]
     *                              [--partition-count]
     *                              [--remove]
     *                              [--resource-group]
     *                              [--set]
     *                              [--skip-empty-archives {false, true}]
     *                              [--status {Active, Disabled, SendDisabled}]
     *                              [--storage-account]
     *                              [--subscription]
     * ```
     */
    az_eventhubs_eventhub.update = function () {
        return new az_eventhubs_eventhub_update_command_builder("az eventhubs eventhub update", 'az_eventhubs_eventhub_update_command_result');
    };
    return az_eventhubs_eventhub;
}());
exports.az_eventhubs_eventhub = az_eventhubs_eventhub;
/** Manage Azure Event Hubs Authorizationrule connection strings for Geo Recovery configuration Alias. */
var az_eventhubs_georecovery_alias_authorization_rule_keys = /** @class */ (function () {
    function az_eventhubs_georecovery_alias_authorization_rule_keys() {
    }
    /**
     * Shows the keys and connection strings of Authorizationrule for the EventHubs Namespace.
     *
     * Syntax:
     * ```
     * az eventhubs georecovery-alias authorization-rule keys list --alias
     *                                                             --name
     *                                                             --namespace-name
     *                                                             --resource-group
     *                                                             [--query-examples]
     *                                                             [--subscription]
     * ```
     *
     * @param {string} alias Name of Geo-Disaster Recovery Configuration Alias.
     * @param {string} name Name of Namespace AuthorizationRule.
     * @param {string} namespaceName Name of Namespace.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_eventhubs_georecovery_alias_authorization_rule_keys.list = function (alias, name, namespaceName, resourceGroup) {
        return new az_eventhubs_georecovery_alias_authorization_rule_keys_list_command_builder("az eventhubs georecovery-alias authorization-rule keys list", 'az_eventhubs_georecovery_alias_authorization_rule_keys_list_command_result', alias, name, namespaceName, resourceGroup);
    };
    return az_eventhubs_georecovery_alias_authorization_rule_keys;
}());
exports.az_eventhubs_georecovery_alias_authorization_rule_keys = az_eventhubs_georecovery_alias_authorization_rule_keys;
/** Manage Azure EventHubs Authorizationrule for Geo Recovery configuration Alias. */
var az_eventhubs_georecovery_alias_authorization_rule = /** @class */ (function () {
    function az_eventhubs_georecovery_alias_authorization_rule() {
    }
    /**
     * List of Authorizationrule by EventHubs Namespace.
     *
     * Syntax:
     * ```
     * az eventhubs georecovery-alias authorization-rule list --alias
     *                                                        --namespace-name
     *                                                        --resource-group
     *                                                        [--query-examples]
     *                                                        [--subscription]
     * ```
     *
     * @param {string} alias Name of Geo-Disaster Recovery Configuration Alias.
     * @param {string} namespaceName Name of Namespace.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_eventhubs_georecovery_alias_authorization_rule.list = function (alias, namespaceName, resourceGroup) {
        return new az_eventhubs_georecovery_alias_authorization_rule_list_command_builder("az eventhubs georecovery-alias authorization-rule list", 'az_eventhubs_georecovery_alias_authorization_rule_list_command_result', alias, namespaceName, resourceGroup);
    };
    /**
     * Show properties of EventHubs Geo-Disaster Recovery Configuration Alias and Namespace Authorizationrule.
     *
     * Syntax:
     * ```
     * az eventhubs georecovery-alias authorization-rule show [--alias]
     *                                                        [--ids]
     *                                                        [--name]
     *                                                        [--namespace-name]
     *                                                        [--query-examples]
     *                                                        [--resource-group]
     *                                                        [--subscription]
     * ```
     */
    az_eventhubs_georecovery_alias_authorization_rule.show = function () {
        return new az_eventhubs_georecovery_alias_authorization_rule_show_command_builder("az eventhubs georecovery-alias authorization-rule show", 'az_eventhubs_georecovery_alias_authorization_rule_show_command_result');
    };
    return az_eventhubs_georecovery_alias_authorization_rule;
}());
exports.az_eventhubs_georecovery_alias_authorization_rule = az_eventhubs_georecovery_alias_authorization_rule;
/** Manage Azure EventHubs Geo Recovery configuration Alias. */
var az_eventhubs_georecovery_alias = /** @class */ (function () {
    function az_eventhubs_georecovery_alias() {
    }
    /**
     * Disables Geo-Disaster Recovery Configuration Alias and stops replicating changes from primary to secondary namespaces.
     *
     * Syntax:
     * ```
     * az eventhubs georecovery-alias break-pair [--alias]
     *                                           [--ids]
     *                                           [--namespace-name]
     *                                           [--resource-group]
     *                                           [--subscription]
     * ```
     */
    az_eventhubs_georecovery_alias.break_pair = function () {
        return new az_eventhubs_georecovery_alias_break_pair_command_builder("az eventhubs georecovery-alias break-pair", 'az_eventhubs_georecovery_alias_break_pair_command_result');
    };
    /**
     * Delete Geo-Disaster Recovery Configuration Alias.
     *
     * Syntax:
     * ```
     * az eventhubs georecovery-alias delete [--alias]
     *                                       [--ids]
     *                                       [--namespace-name]
     *                                       [--resource-group]
     *                                       [--subscription]
     * ```
     */
    az_eventhubs_georecovery_alias["delete"] = function () {
        return new az_eventhubs_georecovery_alias_delete_command_builder("az eventhubs georecovery-alias delete", 'az_eventhubs_georecovery_alias_delete_command_result');
    };
    /**
     * Check the availability of Geo-Disaster Recovery Configuration Alias Name.
     *
     * Syntax:
     * ```
     * az eventhubs georecovery-alias exists --alias
     *                                       --namespace-name
     *                                       --resource-group
     *                                       [--subscription]
     * ```
     *
     * @param {string} alias Name of Geo Recovery Configs - Alias to check availability.
     * @param {string} namespaceName Name of Namespace.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_eventhubs_georecovery_alias.exists = function (alias, namespaceName, resourceGroup) {
        return new az_eventhubs_georecovery_alias_exists_command_builder("az eventhubs georecovery-alias exists", 'az_eventhubs_georecovery_alias_exists_command_result', alias, namespaceName, resourceGroup);
    };
    /**
     * Invokes Geo-Disaster Recovery Configuration Alias to point to the secondary namespace.
     *
     * Syntax:
     * ```
     * az eventhubs georecovery-alias fail-over [--alias]
     *                                          [--ids]
     *                                          [--namespace-name]
     *                                          [--resource-group]
     *                                          [--subscription]
     * ```
     */
    az_eventhubs_georecovery_alias.fail_over = function () {
        return new az_eventhubs_georecovery_alias_fail_over_command_builder("az eventhubs georecovery-alias fail-over", 'az_eventhubs_georecovery_alias_fail_over_command_result');
    };
    /**
     * Gets all Alias(Disaster Recovery configurations).
     *
     * Syntax:
     * ```
     * az eventhubs georecovery-alias list --namespace-name
     *                                     --resource-group
     *                                     [--query-examples]
     *                                     [--subscription]
     * ```
     *
     * @param {string} namespaceName Name of Namespace.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_eventhubs_georecovery_alias.list = function (namespaceName, resourceGroup) {
        return new az_eventhubs_georecovery_alias_list_command_builder("az eventhubs georecovery-alias list", 'az_eventhubs_georecovery_alias_list_command_result', namespaceName, resourceGroup);
    };
    /**
     * Sets a Geo-Disaster Recovery Configuration Alias for the give Namespace.
     *
     * Syntax:
     * ```
     * az eventhubs georecovery-alias set --partner-namespace
     *                                    [--alias]
     *                                    [--alternate-name]
     *                                    [--ids]
     *                                    [--namespace-name]
     *                                    [--resource-group]
     *                                    [--subscription]
     * ```
     *
     * @param {string} partnerNamespace Name (if within the same resource group) or ARM Id of the Primary/Secondary eventhub namespace name, which is part of GEO DR pairing.
     */
    az_eventhubs_georecovery_alias.set = function (partnerNamespace) {
        return new az_eventhubs_georecovery_alias_set_command_builder("az eventhubs georecovery-alias set", 'az_eventhubs_georecovery_alias_set_command_result', partnerNamespace);
    };
    /**
     * Shows properties of Geo-Disaster Recovery Configuration Alias for Primay or Secondary Namespace.
     *
     * Syntax:
     * ```
     * az eventhubs georecovery-alias show [--alias]
     *                                     [--ids]
     *                                     [--namespace-name]
     *                                     [--query-examples]
     *                                     [--resource-group]
     *                                     [--subscription]
     * ```
     */
    az_eventhubs_georecovery_alias.show = function () {
        return new az_eventhubs_georecovery_alias_show_command_builder("az eventhubs georecovery-alias show", 'az_eventhubs_georecovery_alias_show_command_result');
    };
    return az_eventhubs_georecovery_alias;
}());
exports.az_eventhubs_georecovery_alias = az_eventhubs_georecovery_alias;
/** Manage Azure EventHubs Authorizationrule connection strings for Namespace. */
var az_eventhubs_namespace_authorization_rule_keys = /** @class */ (function () {
    function az_eventhubs_namespace_authorization_rule_keys() {
    }
    /**
     * Shows the connection strings for namespace.
     *
     * Syntax:
     * ```
     * az eventhubs namespace authorization-rule keys list --name
     *                                                     --namespace-name
     *                                                     --resource-group
     *                                                     [--query-examples]
     *                                                     [--subscription]
     * ```
     *
     * @param {string} name Name of Namespace AuthorizationRule.
     * @param {string} namespaceName Name of Namespace.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_eventhubs_namespace_authorization_rule_keys.list = function (name, namespaceName, resourceGroup) {
        return new az_eventhubs_namespace_authorization_rule_keys_list_command_builder("az eventhubs namespace authorization-rule keys list", 'az_eventhubs_namespace_authorization_rule_keys_list_command_result', name, namespaceName, resourceGroup);
    };
    /**
     * Regenerate the connection strings of Authorizationrule for the namespace.
     *
     * Syntax:
     * ```
     * az eventhubs namespace authorization-rule keys renew --key {PrimaryKey, SecondaryKey}
     *                                                      [--ids]
     *                                                      [--key-value]
     *                                                      [--name]
     *                                                      [--namespace-name]
     *                                                      [--resource-group]
     *                                                      [--subscription]
     * ```
     *
     * @param {'PrimaryKey' | 'SecondaryKey'} key Specifies Primary or Secondary key needs to be reset.
     */
    az_eventhubs_namespace_authorization_rule_keys.renew = function (key) {
        return new az_eventhubs_namespace_authorization_rule_keys_renew_command_builder("az eventhubs namespace authorization-rule keys renew", 'az_eventhubs_namespace_authorization_rule_keys_renew_command_result', key);
    };
    return az_eventhubs_namespace_authorization_rule_keys;
}());
exports.az_eventhubs_namespace_authorization_rule_keys = az_eventhubs_namespace_authorization_rule_keys;
/** Manage Azure EventHubs Authorizationrule for Namespace. */
var az_eventhubs_namespace_authorization_rule = /** @class */ (function () {
    function az_eventhubs_namespace_authorization_rule() {
    }
    /**
     * Creates Authorizationrule for the given Namespace.
     *
     * Syntax:
     * ```
     * az eventhubs namespace authorization-rule create --name
     *                                                  --namespace-name
     *                                                  --resource-group
     *                                                  --rights {Listen, Manage, Send}
     *                                                  [--subscription]
     * ```
     *
     * @param {string} name Name of Namespace AuthorizationRule.
     * @param {string} namespaceName Name of Namespace.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {'Listen' | 'Manage' | 'Send'} rights Space-separated list of Authorization rule rights.
     */
    az_eventhubs_namespace_authorization_rule.create = function (name, namespaceName, resourceGroup, rights) {
        return new az_eventhubs_namespace_authorization_rule_create_command_builder("az eventhubs namespace authorization-rule create", 'az_eventhubs_namespace_authorization_rule_create_command_result', name, namespaceName, resourceGroup, rights);
    };
    /**
     * Deletes the Authorizationrule of the namespace.
     *
     * Syntax:
     * ```
     * az eventhubs namespace authorization-rule delete [--ids]
     *                                                  [--name]
     *                                                  [--namespace-name]
     *                                                  [--resource-group]
     *                                                  [--subscription]
     * ```
     */
    az_eventhubs_namespace_authorization_rule["delete"] = function () {
        return new az_eventhubs_namespace_authorization_rule_delete_command_builder("az eventhubs namespace authorization-rule delete", 'az_eventhubs_namespace_authorization_rule_delete_command_result');
    };
    /**
     * Shows the list of Authorizationrule by Namespace.
     *
     * Syntax:
     * ```
     * az eventhubs namespace authorization-rule list --namespace-name
     *                                                --resource-group
     *                                                [--query-examples]
     *                                                [--subscription]
     * ```
     *
     * @param {string} namespaceName Name of Namespace.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_eventhubs_namespace_authorization_rule.list = function (namespaceName, resourceGroup) {
        return new az_eventhubs_namespace_authorization_rule_list_command_builder("az eventhubs namespace authorization-rule list", 'az_eventhubs_namespace_authorization_rule_list_command_result', namespaceName, resourceGroup);
    };
    /**
     * Shows the details of Authorizationrule.
     *
     * Syntax:
     * ```
     * az eventhubs namespace authorization-rule show [--ids]
     *                                                [--name]
     *                                                [--namespace-name]
     *                                                [--query-examples]
     *                                                [--resource-group]
     *                                                [--subscription]
     * ```
     */
    az_eventhubs_namespace_authorization_rule.show = function () {
        return new az_eventhubs_namespace_authorization_rule_show_command_builder("az eventhubs namespace authorization-rule show", 'az_eventhubs_namespace_authorization_rule_show_command_result');
    };
    /**
     * Updates Authorizationrule for the given Namespace.
     *
     * Syntax:
     * ```
     * az eventhubs namespace authorization-rule update --rights {Listen, Manage, Send}
     *                                                  [--add]
     *                                                  [--force-string]
     *                                                  [--ids]
     *                                                  [--name]
     *                                                  [--namespace-name]
     *                                                  [--remove]
     *                                                  [--resource-group]
     *                                                  [--set]
     *                                                  [--subscription]
     * ```
     *
     * @param {'Listen' | 'Manage' | 'Send'} rights Space-separated list of Authorization rule rights.
     */
    az_eventhubs_namespace_authorization_rule.update = function (rights) {
        return new az_eventhubs_namespace_authorization_rule_update_command_builder("az eventhubs namespace authorization-rule update", 'az_eventhubs_namespace_authorization_rule_update_command_result', rights);
    };
    return az_eventhubs_namespace_authorization_rule;
}());
exports.az_eventhubs_namespace_authorization_rule = az_eventhubs_namespace_authorization_rule;
/** Manage Azure EventHubs networkruleset for namespace. */
var az_eventhubs_namespace_network_rule = /** @class */ (function () {
    function az_eventhubs_namespace_network_rule() {
    }
    /**
     * Add a network rule for a namespace.
     *
     * Syntax:
     * ```
     * az eventhubs namespace network-rule add --namespace-name
     *                                         --resource-group
     *                                         [--action {Allow}]
     *                                         [--ignore-missing-endpoint {false, true}]
     *                                         [--ip-address]
     *                                         [--subnet]
     *                                         [--subscription]
     *                                         [--vnet-name]
     * ```
     *
     * @param {string} namespaceName Name of the Namespace.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_eventhubs_namespace_network_rule.add = function (namespaceName, resourceGroup) {
        return new az_eventhubs_namespace_network_rule_add_command_builder("az eventhubs namespace network-rule add", 'az_eventhubs_namespace_network_rule_add_command_result', namespaceName, resourceGroup);
    };
    /**
     * Show properties of Network rule of the given Namespace.
     *
     * Syntax:
     * ```
     * az eventhubs namespace network-rule list --namespace-name
     *                                          --resource-group
     *                                          [--query-examples]
     *                                          [--subscription]
     * ```
     *
     * @param {string} namespaceName Name of the Namespace.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_eventhubs_namespace_network_rule.list = function (namespaceName, resourceGroup) {
        return new az_eventhubs_namespace_network_rule_list_command_builder("az eventhubs namespace network-rule list", 'az_eventhubs_namespace_network_rule_list_command_result', namespaceName, resourceGroup);
    };
    /**
     * Remove network rule for a namespace.
     *
     * Syntax:
     * ```
     * az eventhubs namespace network-rule remove --namespace-name
     *                                            --resource-group
     *                                            [--ip-address]
     *                                            [--subnet]
     *                                            [--subscription]
     *                                            [--vnet-name]
     * ```
     *
     * @param {string} namespaceName Name of the Namespace.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_eventhubs_namespace_network_rule.remove = function (namespaceName, resourceGroup) {
        return new az_eventhubs_namespace_network_rule_remove_command_builder("az eventhubs namespace network-rule remove", 'az_eventhubs_namespace_network_rule_remove_command_result', namespaceName, resourceGroup);
    };
    return az_eventhubs_namespace_network_rule;
}());
exports.az_eventhubs_namespace_network_rule = az_eventhubs_namespace_network_rule;
/** Manage Azure EventHubs namespace and Authorizationrule. */
var az_eventhubs_namespace = /** @class */ (function () {
    function az_eventhubs_namespace() {
    }
    /**
     * Creates the EventHubs Namespace.
     *
     * Syntax:
     * ```
     * az eventhubs namespace create --name
     *                               --resource-group
     *                               [--assign-identity {false, true}]
     *                               [--capacity]
     *                               [--cluster-arm-id]
     *                               [--default-action {Allow, Deny}]
     *                               [--enable-auto-inflate {false, true}]
     *                               [--enable-kafka {false, true}]
     *                               [--enable-trusted-service-access {false, true}]
     *                               [--location]
     *                               [--maximum-throughput-units]
     *                               [--sku {Basic, Standard}]
     *                               [--subscription]
     *                               [--tags]
     *                               [--zone-redundant {false, true}]
     * ```
     *
     * @param {string} name Name of Namespace.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_eventhubs_namespace.create = function (name, resourceGroup) {
        return new az_eventhubs_namespace_create_command_builder("az eventhubs namespace create", 'az_eventhubs_namespace_create_command_result', name, resourceGroup);
    };
    /**
     * Deletes the Namespaces.
     *
     * Syntax:
     * ```
     * az eventhubs namespace delete [--ids]
     *                               [--name]
     *                               [--resource-group]
     *                               [--subscription]
     * ```
     */
    az_eventhubs_namespace["delete"] = function () {
        return new az_eventhubs_namespace_delete_command_builder("az eventhubs namespace delete", 'az_eventhubs_namespace_delete_command_result');
    };
    /**
     * Check for the availability of the given name for the Namespace.
     *
     * Syntax:
     * ```
     * az eventhubs namespace exists --name
     *                               [--subscription]
     * ```
     *
     * @param {string} name Name to check the namespace name availability.
     */
    az_eventhubs_namespace.exists = function (name) {
        return new az_eventhubs_namespace_exists_command_builder("az eventhubs namespace exists", 'az_eventhubs_namespace_exists_command_result', name);
    };
    /**
     * Lists the EventHubs Namespaces.
     *
     * Syntax:
     * ```
     * az eventhubs namespace list [--query-examples]
     *                             [--resource-group]
     *                             [--subscription]
     * ```
     */
    az_eventhubs_namespace.list = function () {
        return new az_eventhubs_namespace_list_command_builder("az eventhubs namespace list", 'az_eventhubs_namespace_list_command_result');
    };
    /**
     * Shows the Event Hubs Namespace Details.
     *
     * Syntax:
     * ```
     * az eventhubs namespace show [--ids]
     *                             [--name]
     *                             [--query-examples]
     *                             [--resource-group]
     *                             [--subscription]
     * ```
     */
    az_eventhubs_namespace.show = function () {
        return new az_eventhubs_namespace_show_command_builder("az eventhubs namespace show", 'az_eventhubs_namespace_show_command_result');
    };
    /**
     * Updates the EventHubs Namespace.
     *
     * Syntax:
     * ```
     * az eventhubs namespace update [--add]
     *                               [--assign-identity {false, true}]
     *                               [--capacity]
     *                               [--default-action {Allow, Deny}]
     *                               [--enable-auto-inflate {false, true}]
     *                               [--enable-kafka {false, true}]
     *                               [--enable-trusted-service-access {false, true}]
     *                               [--force-string]
     *                               [--ids]
     *                               [--key-name]
     *                               [--key-source {Microsoft.KeyVault}]
     *                               [--key-vault-uri]
     *                               [--key-version]
     *                               [--maximum-throughput-units]
     *                               [--name]
     *                               [--remove]
     *                               [--resource-group]
     *                               [--set]
     *                               [--sku {Basic, Standard}]
     *                               [--subscription]
     *                               [--tags]
     * ```
     */
    az_eventhubs_namespace.update = function () {
        return new az_eventhubs_namespace_update_command_builder("az eventhubs namespace update", 'az_eventhubs_namespace_update_command_result');
    };
    return az_eventhubs_namespace;
}());
exports.az_eventhubs_namespace = az_eventhubs_namespace;
/** Manage Azure Event Hubs namespaces, eventhubs, consumergroups and geo recovery configurations - Alias. */
var az_eventhubs = /** @class */ (function () {
    function az_eventhubs() {
    }
    return az_eventhubs;
}());
exports.az_eventhubs = az_eventhubs;
/**
 * List of Namespaces within given Cluster.
 *
 * Syntax:
 * ```
 * az eventhubs cluster namespace list --name
 *                                     --resource-group
 *                                     [--query-examples]
 *                                     [--subscription]
 * ```
 *
 * @param {string} name Name of Cluster.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_eventhubs_cluster_namespace_list_command_builder = /** @class */ (function (_super) {
    __extends(az_eventhubs_cluster_namespace_list_command_builder, _super);
    function az_eventhubs_cluster_namespace_list_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of Cluster. */
    az_eventhubs_cluster_namespace_list_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventhubs_cluster_namespace_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_eventhubs_cluster_namespace_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventhubs_cluster_namespace_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_eventhubs_cluster_namespace_list_command_builder;
}(base_1.CommandBuilder));
/**
 * List the quantity of available pre-provisioned Event Hubs Clusters, indexed by Azure region.
 *
 * Syntax:
 * ```
 * az eventhubs cluster available-region [--subscription]
 * ```
 */
var az_eventhubs_cluster_available_region_command_builder = /** @class */ (function (_super) {
    __extends(az_eventhubs_cluster_available_region_command_builder, _super);
    function az_eventhubs_cluster_available_region_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventhubs_cluster_available_region_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_eventhubs_cluster_available_region_command_builder;
}(base_1.CommandBuilder));
/**
 * Create EventHubs Cluster.
 *
 * Syntax:
 * ```
 * az eventhubs cluster create --name
 *                             --resource-group
 *                             [--capacity]
 *                             [--location]
 *                             [--subscription]
 *                             [--tags]
 * ```
 *
 * @param {string} name Name of Cluster.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_eventhubs_cluster_create_command_builder = /** @class */ (function (_super) {
    __extends(az_eventhubs_cluster_create_command_builder, _super);
    function az_eventhubs_cluster_create_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of Cluster. */
    az_eventhubs_cluster_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventhubs_cluster_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Capacity for Sku, allowed value : 1. */
    az_eventhubs_cluster_create_command_builder.prototype.capacity = function (value) {
        this.setFlag("--capacity", value);
        return this;
    };
    /** Location of the Cluster, for locations of available pre-provision clusters, please check az evetnhubs. */
    az_eventhubs_cluster_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventhubs_cluster_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_eventhubs_cluster_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_eventhubs_cluster_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete an existing Event Hubs Cluster.
 *
 * Syntax:
 * ```
 * az eventhubs cluster delete --name
 *                             --resource-group
 *                             [--no-wait]
 *                             [--subscription]
 *                             [--yes]
 * ```
 *
 * @param {string} name Name of Cluster.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_eventhubs_cluster_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_eventhubs_cluster_delete_command_builder, _super);
    function az_eventhubs_cluster_delete_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of Cluster. */
    az_eventhubs_cluster_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventhubs_cluster_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_eventhubs_cluster_delete_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventhubs_cluster_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_eventhubs_cluster_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_eventhubs_cluster_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List the available Event Hubs Clusters within an ARM resource group.
 *
 * Syntax:
 * ```
 * az eventhubs cluster list --resource-group
 *                           [--query-examples]
 *                           [--subscription]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_eventhubs_cluster_list_command_builder = /** @class */ (function (_super) {
    __extends(az_eventhubs_cluster_list_command_builder, _super);
    function az_eventhubs_cluster_list_command_builder(commandPath, resultDataTypeName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventhubs_cluster_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_eventhubs_cluster_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventhubs_cluster_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_eventhubs_cluster_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Get the resource description of the specified Event Hubs Cluster.
 *
 * Syntax:
 * ```
 * az eventhubs cluster show --name
 *                           --resource-group
 *                           [--query-examples]
 *                           [--subscription]
 * ```
 *
 * @param {string} name Name of Cluster.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_eventhubs_cluster_show_command_builder = /** @class */ (function (_super) {
    __extends(az_eventhubs_cluster_show_command_builder, _super);
    function az_eventhubs_cluster_show_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of Cluster. */
    az_eventhubs_cluster_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventhubs_cluster_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_eventhubs_cluster_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventhubs_cluster_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_eventhubs_cluster_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update tags of EventHubs Cluster.
 *
 * Syntax:
 * ```
 * az eventhubs cluster update --name
 *                             --resource-group
 *                             [--add]
 *                             [--force-string]
 *                             [--remove]
 *                             [--set]
 *                             [--subscription]
 *                             [--tags]
 * ```
 *
 * @param {string} name Name of Cluster.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_eventhubs_cluster_update_command_builder = /** @class */ (function (_super) {
    __extends(az_eventhubs_cluster_update_command_builder, _super);
    function az_eventhubs_cluster_update_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of Cluster. */
    az_eventhubs_cluster_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventhubs_cluster_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_eventhubs_cluster_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_eventhubs_cluster_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_eventhubs_cluster_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_eventhubs_cluster_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventhubs_cluster_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_eventhubs_cluster_update_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_eventhubs_cluster_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Place the CLI in a waiting state until a condition of the Cluster operation is completed.
 *
 * Syntax:
 * ```
 * az eventhubs cluster wait --name
 *                           --resource-group
 *                           [--created]
 *                           [--custom]
 *                           [--deleted]
 *                           [--exists]
 *                           [--interval]
 *                           [--subscription]
 *                           [--timeout]
 *                           [--updated]
 * ```
 *
 * @param {string} name Name of Cluster.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_eventhubs_cluster_wait_command_builder = /** @class */ (function (_super) {
    __extends(az_eventhubs_cluster_wait_command_builder, _super);
    function az_eventhubs_cluster_wait_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of Cluster. */
    az_eventhubs_cluster_wait_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventhubs_cluster_wait_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    az_eventhubs_cluster_wait_command_builder.prototype.created = function (value) {
        this.setFlag("--created", value);
        return this;
    };
    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    az_eventhubs_cluster_wait_command_builder.prototype.custom = function (value) {
        this.setFlag("--custom", value);
        return this;
    };
    /** Wait until deleted. */
    az_eventhubs_cluster_wait_command_builder.prototype.deleted = function (value) {
        this.setFlag("--deleted", value);
        return this;
    };
    /** Wait until the resource exists. */
    az_eventhubs_cluster_wait_command_builder.prototype.exists = function (value) {
        this.setFlag("--exists", value);
        return this;
    };
    /** Polling interval in seconds. */
    az_eventhubs_cluster_wait_command_builder.prototype.interval = function (value) {
        this.setFlag("--interval", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventhubs_cluster_wait_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Maximum wait in seconds. */
    az_eventhubs_cluster_wait_command_builder.prototype.timeout = function (value) {
        this.setFlag("--timeout", value);
        return this;
    };
    /** Wait until updated with provisioningState at 'Succeeded'. */
    az_eventhubs_cluster_wait_command_builder.prototype.updated = function (value) {
        this.setFlag("--updated", value);
        return this;
    };
    return az_eventhubs_cluster_wait_command_builder;
}(base_1.CommandBuilder));
/**
 * Shows the connection strings of Authorizationrule for the Eventhub.
 *
 * Syntax:
 * ```
 * az eventhubs eventhub authorization-rule keys list --eventhub-name
 *                                                    --name
 *                                                    --namespace-name
 *                                                    --resource-group
 *                                                    [--query-examples]
 *                                                    [--subscription]
 * ```
 *
 * @param {string} eventhubName Name of EventHub.
 * @param {string} name Name of EventHub AuthorizationRule.
 * @param {string} namespaceName Name of Namespace.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_eventhubs_eventhub_authorization_rule_keys_list_command_builder = /** @class */ (function (_super) {
    __extends(az_eventhubs_eventhub_authorization_rule_keys_list_command_builder, _super);
    function az_eventhubs_eventhub_authorization_rule_keys_list_command_builder(commandPath, resultDataTypeName, eventhubName, name, namespaceName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.eventhubName(eventhubName);
        _this.name(name);
        _this.namespaceName(namespaceName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of EventHub. */
    az_eventhubs_eventhub_authorization_rule_keys_list_command_builder.prototype.eventhubName = function (value) {
        this.setFlag("--eventhub-name", value);
        return this;
    };
    /** Name of EventHub AuthorizationRule. */
    az_eventhubs_eventhub_authorization_rule_keys_list_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of Namespace. */
    az_eventhubs_eventhub_authorization_rule_keys_list_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventhubs_eventhub_authorization_rule_keys_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_eventhubs_eventhub_authorization_rule_keys_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventhubs_eventhub_authorization_rule_keys_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_eventhubs_eventhub_authorization_rule_keys_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Regenerate the connection strings of Authorizationrule for the namespace.
 *
 * Syntax:
 * ```
 * az eventhubs eventhub authorization-rule keys renew --key {PrimaryKey, SecondaryKey}
 *                                                     [--eventhub-name]
 *                                                     [--ids]
 *                                                     [--key-value]
 *                                                     [--name]
 *                                                     [--namespace-name]
 *                                                     [--resource-group]
 *                                                     [--subscription]
 * ```
 *
 * @param {'PrimaryKey' | 'SecondaryKey'} key Specifies Primary or Secondary key needs to be reset.
 */
var az_eventhubs_eventhub_authorization_rule_keys_renew_command_builder = /** @class */ (function (_super) {
    __extends(az_eventhubs_eventhub_authorization_rule_keys_renew_command_builder, _super);
    function az_eventhubs_eventhub_authorization_rule_keys_renew_command_builder(commandPath, resultDataTypeName, key) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.key(key);
        return _this;
    }
    /** Specifies Primary or Secondary key needs to be reset. */
    az_eventhubs_eventhub_authorization_rule_keys_renew_command_builder.prototype.key = function (value) {
        this.setFlag("--key", value);
        return this;
    };
    /** Name of EventHub. */
    az_eventhubs_eventhub_authorization_rule_keys_renew_command_builder.prototype.eventhubName = function (value) {
        this.setFlag("--eventhub-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_eventhubs_eventhub_authorization_rule_keys_renew_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Optional, if the key value provided, is set for KeyType or autogenerated Key value set for keyType. */
    az_eventhubs_eventhub_authorization_rule_keys_renew_command_builder.prototype.keyValue = function (value) {
        this.setFlag("--key-value", value);
        return this;
    };
    /** Name of EventHub AuthorizationRule. */
    az_eventhubs_eventhub_authorization_rule_keys_renew_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of Namespace. */
    az_eventhubs_eventhub_authorization_rule_keys_renew_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventhubs_eventhub_authorization_rule_keys_renew_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventhubs_eventhub_authorization_rule_keys_renew_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_eventhubs_eventhub_authorization_rule_keys_renew_command_builder;
}(base_1.CommandBuilder));
/**
 * Creates Authorizationrule for the given Eventhub.
 *
 * Syntax:
 * ```
 * az eventhubs eventhub authorization-rule create --eventhub-name
 *                                                 --name
 *                                                 --namespace-name
 *                                                 --resource-group
 *                                                 --rights {Listen, Manage, Send}
 *                                                 [--subscription]
 * ```
 *
 * @param {string} eventhubName Name of EventHub.
 * @param {string} name Name of EventHub AuthorizationRule.
 * @param {string} namespaceName Name of Namespace.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {'Listen' | 'Manage' | 'Send'} rights Space-separated list of Authorization rule rights.
 */
var az_eventhubs_eventhub_authorization_rule_create_command_builder = /** @class */ (function (_super) {
    __extends(az_eventhubs_eventhub_authorization_rule_create_command_builder, _super);
    function az_eventhubs_eventhub_authorization_rule_create_command_builder(commandPath, resultDataTypeName, eventhubName, name, namespaceName, resourceGroup, rights) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.eventhubName(eventhubName);
        _this.name(name);
        _this.namespaceName(namespaceName);
        _this.resourceGroup(resourceGroup);
        _this.rights(rights);
        return _this;
    }
    /** Name of EventHub. */
    az_eventhubs_eventhub_authorization_rule_create_command_builder.prototype.eventhubName = function (value) {
        this.setFlag("--eventhub-name", value);
        return this;
    };
    /** Name of EventHub AuthorizationRule. */
    az_eventhubs_eventhub_authorization_rule_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of Namespace. */
    az_eventhubs_eventhub_authorization_rule_create_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventhubs_eventhub_authorization_rule_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Space-separated list of Authorization rule rights. */
    az_eventhubs_eventhub_authorization_rule_create_command_builder.prototype.rights = function (value) {
        this.setFlag("--rights", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventhubs_eventhub_authorization_rule_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_eventhubs_eventhub_authorization_rule_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Deletes the Authorizationrule of Eventhub.
 *
 * Syntax:
 * ```
 * az eventhubs eventhub authorization-rule delete [--eventhub-name]
 *                                                 [--ids]
 *                                                 [--name]
 *                                                 [--namespace-name]
 *                                                 [--resource-group]
 *                                                 [--subscription]
 * ```
 */
var az_eventhubs_eventhub_authorization_rule_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_eventhubs_eventhub_authorization_rule_delete_command_builder, _super);
    function az_eventhubs_eventhub_authorization_rule_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Name of EventHub. */
    az_eventhubs_eventhub_authorization_rule_delete_command_builder.prototype.eventhubName = function (value) {
        this.setFlag("--eventhub-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_eventhubs_eventhub_authorization_rule_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of EventHub AuthorizationRule. */
    az_eventhubs_eventhub_authorization_rule_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of Namespace. */
    az_eventhubs_eventhub_authorization_rule_delete_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventhubs_eventhub_authorization_rule_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventhubs_eventhub_authorization_rule_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_eventhubs_eventhub_authorization_rule_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * Shows the list of Authorization-rules by Eventhub.
 *
 * Syntax:
 * ```
 * az eventhubs eventhub authorization-rule list --eventhub-name
 *                                               --namespace-name
 *                                               --resource-group
 *                                               [--query-examples]
 *                                               [--subscription]
 * ```
 *
 * @param {string} eventhubName Name of EventHub.
 * @param {string} namespaceName Name of Namespace.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_eventhubs_eventhub_authorization_rule_list_command_builder = /** @class */ (function (_super) {
    __extends(az_eventhubs_eventhub_authorization_rule_list_command_builder, _super);
    function az_eventhubs_eventhub_authorization_rule_list_command_builder(commandPath, resultDataTypeName, eventhubName, namespaceName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.eventhubName(eventhubName);
        _this.namespaceName(namespaceName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of EventHub. */
    az_eventhubs_eventhub_authorization_rule_list_command_builder.prototype.eventhubName = function (value) {
        this.setFlag("--eventhub-name", value);
        return this;
    };
    /** Name of Namespace. */
    az_eventhubs_eventhub_authorization_rule_list_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventhubs_eventhub_authorization_rule_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_eventhubs_eventhub_authorization_rule_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventhubs_eventhub_authorization_rule_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_eventhubs_eventhub_authorization_rule_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Shows the details of Authorizationrule.
 *
 * Syntax:
 * ```
 * az eventhubs eventhub authorization-rule show [--eventhub-name]
 *                                               [--ids]
 *                                               [--name]
 *                                               [--namespace-name]
 *                                               [--query-examples]
 *                                               [--resource-group]
 *                                               [--subscription]
 * ```
 */
var az_eventhubs_eventhub_authorization_rule_show_command_builder = /** @class */ (function (_super) {
    __extends(az_eventhubs_eventhub_authorization_rule_show_command_builder, _super);
    function az_eventhubs_eventhub_authorization_rule_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Name of EventHub. */
    az_eventhubs_eventhub_authorization_rule_show_command_builder.prototype.eventhubName = function (value) {
        this.setFlag("--eventhub-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_eventhubs_eventhub_authorization_rule_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of EventHub AuthorizationRule. */
    az_eventhubs_eventhub_authorization_rule_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of Namespace. */
    az_eventhubs_eventhub_authorization_rule_show_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_eventhubs_eventhub_authorization_rule_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventhubs_eventhub_authorization_rule_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventhubs_eventhub_authorization_rule_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_eventhubs_eventhub_authorization_rule_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Updates Authorizationrule for the given Eventhub.
 *
 * Syntax:
 * ```
 * az eventhubs eventhub authorization-rule update --rights {Listen, Manage, Send}
 *                                                 [--add]
 *                                                 [--eventhub-name]
 *                                                 [--force-string]
 *                                                 [--ids]
 *                                                 [--name]
 *                                                 [--namespace-name]
 *                                                 [--remove]
 *                                                 [--resource-group]
 *                                                 [--set]
 *                                                 [--subscription]
 * ```
 *
 * @param {'Listen' | 'Manage' | 'Send'} rights Space-separated list of Authorization rule rights.
 */
var az_eventhubs_eventhub_authorization_rule_update_command_builder = /** @class */ (function (_super) {
    __extends(az_eventhubs_eventhub_authorization_rule_update_command_builder, _super);
    function az_eventhubs_eventhub_authorization_rule_update_command_builder(commandPath, resultDataTypeName, rights) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.rights(rights);
        return _this;
    }
    /** Space-separated list of Authorization rule rights. */
    az_eventhubs_eventhub_authorization_rule_update_command_builder.prototype.rights = function (value) {
        this.setFlag("--rights", value);
        return this;
    };
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_eventhubs_eventhub_authorization_rule_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** Name of EventHub. */
    az_eventhubs_eventhub_authorization_rule_update_command_builder.prototype.eventhubName = function (value) {
        this.setFlag("--eventhub-name", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_eventhubs_eventhub_authorization_rule_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_eventhubs_eventhub_authorization_rule_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of EventHub AuthorizationRule. */
    az_eventhubs_eventhub_authorization_rule_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of Namespace. */
    az_eventhubs_eventhub_authorization_rule_update_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_eventhubs_eventhub_authorization_rule_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventhubs_eventhub_authorization_rule_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_eventhubs_eventhub_authorization_rule_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventhubs_eventhub_authorization_rule_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_eventhubs_eventhub_authorization_rule_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Creates the EventHub ConsumerGroup.
 *
 * Syntax:
 * ```
 * az eventhubs eventhub consumer-group create --eventhub-name
 *                                             --name
 *                                             --namespace-name
 *                                             --resource-group
 *                                             [--subscription]
 *                                             [--user-metadata]
 * ```
 *
 * @param {string} eventhubName Name of EventHub.
 * @param {string} name Name of ConsumerGroup.
 * @param {string} namespaceName Name of Namespace.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_eventhubs_eventhub_consumer_group_create_command_builder = /** @class */ (function (_super) {
    __extends(az_eventhubs_eventhub_consumer_group_create_command_builder, _super);
    function az_eventhubs_eventhub_consumer_group_create_command_builder(commandPath, resultDataTypeName, eventhubName, name, namespaceName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.eventhubName(eventhubName);
        _this.name(name);
        _this.namespaceName(namespaceName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of EventHub. */
    az_eventhubs_eventhub_consumer_group_create_command_builder.prototype.eventhubName = function (value) {
        this.setFlag("--eventhub-name", value);
        return this;
    };
    /** Name of ConsumerGroup. */
    az_eventhubs_eventhub_consumer_group_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of Namespace. */
    az_eventhubs_eventhub_consumer_group_create_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventhubs_eventhub_consumer_group_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventhubs_eventhub_consumer_group_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Usermetadata is a placeholder to store user-defined string data with maximum length 1024. e.g. it can be used to store descriptive data, such as list of teams and their contact information also user-defined configuration settings can be stored. */
    az_eventhubs_eventhub_consumer_group_create_command_builder.prototype.userMetadata = function (value) {
        this.setFlag("--user-metadata", value);
        return this;
    };
    return az_eventhubs_eventhub_consumer_group_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Deletes the ConsumerGroup.
 *
 * Syntax:
 * ```
 * az eventhubs eventhub consumer-group delete [--eventhub-name]
 *                                             [--ids]
 *                                             [--name]
 *                                             [--namespace-name]
 *                                             [--resource-group]
 *                                             [--subscription]
 * ```
 */
var az_eventhubs_eventhub_consumer_group_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_eventhubs_eventhub_consumer_group_delete_command_builder, _super);
    function az_eventhubs_eventhub_consumer_group_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Name of EventHub. */
    az_eventhubs_eventhub_consumer_group_delete_command_builder.prototype.eventhubName = function (value) {
        this.setFlag("--eventhub-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_eventhubs_eventhub_consumer_group_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of ConsumerGroup. */
    az_eventhubs_eventhub_consumer_group_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of Namespace. */
    az_eventhubs_eventhub_consumer_group_delete_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventhubs_eventhub_consumer_group_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventhubs_eventhub_consumer_group_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_eventhubs_eventhub_consumer_group_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List the ConsumerGroup by Eventhub.
 *
 * Syntax:
 * ```
 * az eventhubs eventhub consumer-group list --eventhub-name
 *                                           --namespace-name
 *                                           --resource-group
 *                                           [--query-examples]
 *                                           [--skip]
 *                                           [--subscription]
 *                                           [--top]
 * ```
 *
 * @param {string} eventhubName Name of EventHub.
 * @param {string} namespaceName Name of Namespace.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_eventhubs_eventhub_consumer_group_list_command_builder = /** @class */ (function (_super) {
    __extends(az_eventhubs_eventhub_consumer_group_list_command_builder, _super);
    function az_eventhubs_eventhub_consumer_group_list_command_builder(commandPath, resultDataTypeName, eventhubName, namespaceName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.eventhubName(eventhubName);
        _this.namespaceName(namespaceName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of EventHub. */
    az_eventhubs_eventhub_consumer_group_list_command_builder.prototype.eventhubName = function (value) {
        this.setFlag("--eventhub-name", value);
        return this;
    };
    /** Name of Namespace. */
    az_eventhubs_eventhub_consumer_group_list_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventhubs_eventhub_consumer_group_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_eventhubs_eventhub_consumer_group_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Skip is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skip parameter that specifies a starting point to use for subsequent calls. */
    az_eventhubs_eventhub_consumer_group_list_command_builder.prototype.skip = function (value) {
        this.setFlag("--skip", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventhubs_eventhub_consumer_group_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** May be used to limit the number of results to the most recent N usageDetails. */
    az_eventhubs_eventhub_consumer_group_list_command_builder.prototype.top = function (value) {
        this.setFlag("--top", value);
        return this;
    };
    return az_eventhubs_eventhub_consumer_group_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Shows the ConsumerGroup Details.
 *
 * Syntax:
 * ```
 * az eventhubs eventhub consumer-group show [--eventhub-name]
 *                                           [--ids]
 *                                           [--name]
 *                                           [--namespace-name]
 *                                           [--query-examples]
 *                                           [--resource-group]
 *                                           [--subscription]
 * ```
 */
var az_eventhubs_eventhub_consumer_group_show_command_builder = /** @class */ (function (_super) {
    __extends(az_eventhubs_eventhub_consumer_group_show_command_builder, _super);
    function az_eventhubs_eventhub_consumer_group_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Name of EventHub. */
    az_eventhubs_eventhub_consumer_group_show_command_builder.prototype.eventhubName = function (value) {
        this.setFlag("--eventhub-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_eventhubs_eventhub_consumer_group_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of ConsumerGroup. */
    az_eventhubs_eventhub_consumer_group_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of Namespace. */
    az_eventhubs_eventhub_consumer_group_show_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_eventhubs_eventhub_consumer_group_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventhubs_eventhub_consumer_group_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventhubs_eventhub_consumer_group_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_eventhubs_eventhub_consumer_group_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Updates the EventHub ConsumerGroup.
 *
 * Syntax:
 * ```
 * az eventhubs eventhub consumer-group update [--add]
 *                                             [--eventhub-name]
 *                                             [--force-string]
 *                                             [--ids]
 *                                             [--name]
 *                                             [--namespace-name]
 *                                             [--remove]
 *                                             [--resource-group]
 *                                             [--set]
 *                                             [--subscription]
 *                                             [--user-metadata]
 * ```
 */
var az_eventhubs_eventhub_consumer_group_update_command_builder = /** @class */ (function (_super) {
    __extends(az_eventhubs_eventhub_consumer_group_update_command_builder, _super);
    function az_eventhubs_eventhub_consumer_group_update_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_eventhubs_eventhub_consumer_group_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** Name of EventHub. */
    az_eventhubs_eventhub_consumer_group_update_command_builder.prototype.eventhubName = function (value) {
        this.setFlag("--eventhub-name", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_eventhubs_eventhub_consumer_group_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_eventhubs_eventhub_consumer_group_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of ConsumerGroup. */
    az_eventhubs_eventhub_consumer_group_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of Namespace. */
    az_eventhubs_eventhub_consumer_group_update_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_eventhubs_eventhub_consumer_group_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventhubs_eventhub_consumer_group_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_eventhubs_eventhub_consumer_group_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventhubs_eventhub_consumer_group_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Usermetadata is a placeholder to store user-defined string data with maximum length 1024. e.g. it can be used to store descriptive data, such as list of teams and their contact information also user-defined configuration settings can be stored. */
    az_eventhubs_eventhub_consumer_group_update_command_builder.prototype.userMetadata = function (value) {
        this.setFlag("--user-metadata", value);
        return this;
    };
    return az_eventhubs_eventhub_consumer_group_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Creates the EventHubs Eventhub.
 *
 * Syntax:
 * ```
 * az eventhubs eventhub create --name
 *                              --namespace-name
 *                              --resource-group
 *                              [--archive-name-format]
 *                              [--blob-container]
 *                              [--capture-interval]
 *                              [--capture-size-limit]
 *                              [--destination-name]
 *                              [--enable-capture {false, true}]
 *                              [--message-retention]
 *                              [--partition-count]
 *                              [--skip-empty-archives {false, true}]
 *                              [--status {Active, Disabled, SendDisabled}]
 *                              [--storage-account]
 *                              [--subscription]
 * ```
 *
 * @param {string} name Name of Eventhub.
 * @param {string} namespaceName Name of Namespace.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_eventhubs_eventhub_create_command_builder = /** @class */ (function (_super) {
    __extends(az_eventhubs_eventhub_create_command_builder, _super);
    function az_eventhubs_eventhub_create_command_builder(commandPath, resultDataTypeName, name, namespaceName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.namespaceName(namespaceName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of Eventhub. */
    az_eventhubs_eventhub_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of Namespace. */
    az_eventhubs_eventhub_create_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventhubs_eventhub_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Blob naming convention for archive, e.g. {Namespace}/{EventHub}/{PartitionId}/{Year}/{Month}/{Day}/{Hour}/{Minute}/{Second}. Here all the parameters (Namespace,EventHub .. etc) are mandatory irrespective of order. */
    az_eventhubs_eventhub_create_command_builder.prototype.archiveNameFormat = function (value) {
        this.setFlag("--archive-name-format", value);
        return this;
    };
    /** Blob container Name. */
    az_eventhubs_eventhub_create_command_builder.prototype.blobContainer = function (value) {
        this.setFlag("--blob-container", value);
        return this;
    };
    /** Allows you to set the frequency with which the capture to Azure Blobs will happen, value should between 60 to 900 seconds. */
    az_eventhubs_eventhub_create_command_builder.prototype.captureInterval = function (value) {
        this.setFlag("--capture-interval", value);
        return this;
    };
    /** Defines the amount of data built up in your Event Hub before an capture operation, value should be between 10485760 to 524288000 bytes. */
    az_eventhubs_eventhub_create_command_builder.prototype.captureSizeLimit = function (value) {
        this.setFlag("--capture-size-limit", value);
        return this;
    };
    /** Name for capture destination, should be EventHubArchive.AzureBlockBlob. */
    az_eventhubs_eventhub_create_command_builder.prototype.destinationName = function (value) {
        this.setFlag("--destination-name", value);
        return this;
    };
    /** A boolean value that indicates whether capture description is enabled. */
    az_eventhubs_eventhub_create_command_builder.prototype.enableCapture = function (value) {
        this.setFlag("--enable-capture", value.toString());
        return this;
    };
    /** Number of days to retain events for this Event Hub, value should be 1 to 7 days and depends on Namespace sku. if Namespace sku is Basic than value should be one and is Manadatory parameter. Namespace sku is standard value should be 1 to 7 days, default is 7 days and is optional parameter. */
    az_eventhubs_eventhub_create_command_builder.prototype.messageRetention = function (value) {
        this.setFlag("--message-retention", value);
        return this;
    };
    /** Number of partitions created for the Event Hub. By default, allowed values are 2-32. Lower value of 1 is supported with Kafka enabled namespaces. In presence of a custom quota, the upper limit will match the upper limit of the quota. */
    az_eventhubs_eventhub_create_command_builder.prototype.partitionCount = function (value) {
        this.setFlag("--partition-count", value);
        return this;
    };
    /** A boolean value that indicates whether to Skip Empty. */
    az_eventhubs_eventhub_create_command_builder.prototype.skipEmptyArchives = function (value) {
        this.setFlag("--skip-empty-archives", value.toString());
        return this;
    };
    /** Status of Eventhub. */
    az_eventhubs_eventhub_create_command_builder.prototype.status = function (value) {
        this.setFlag("--status", value);
        return this;
    };
    /** Name (if within same resource group and not of type Classic Storage) or ARM id of the storage account to be used to create the blobs. */
    az_eventhubs_eventhub_create_command_builder.prototype.storageAccount = function (value) {
        this.setFlag("--storage-account", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventhubs_eventhub_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_eventhubs_eventhub_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Deletes the Eventhub.
 *
 * Syntax:
 * ```
 * az eventhubs eventhub delete [--ids]
 *                              [--name]
 *                              [--namespace-name]
 *                              [--resource-group]
 *                              [--subscription]
 * ```
 */
var az_eventhubs_eventhub_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_eventhubs_eventhub_delete_command_builder, _super);
    function az_eventhubs_eventhub_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_eventhubs_eventhub_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of Eventhub. */
    az_eventhubs_eventhub_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of Namespace. */
    az_eventhubs_eventhub_delete_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventhubs_eventhub_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventhubs_eventhub_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_eventhubs_eventhub_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List the EventHub by Namepsace.
 *
 * Syntax:
 * ```
 * az eventhubs eventhub list --namespace-name
 *                            --resource-group
 *                            [--query-examples]
 *                            [--skip]
 *                            [--subscription]
 *                            [--top]
 * ```
 *
 * @param {string} namespaceName Name of Namespace.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_eventhubs_eventhub_list_command_builder = /** @class */ (function (_super) {
    __extends(az_eventhubs_eventhub_list_command_builder, _super);
    function az_eventhubs_eventhub_list_command_builder(commandPath, resultDataTypeName, namespaceName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.namespaceName(namespaceName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of Namespace. */
    az_eventhubs_eventhub_list_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventhubs_eventhub_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_eventhubs_eventhub_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Skip is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skip parameter that specifies a starting point to use for subsequent calls. */
    az_eventhubs_eventhub_list_command_builder.prototype.skip = function (value) {
        this.setFlag("--skip", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventhubs_eventhub_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** May be used to limit the number of results to the most recent N usageDetails. */
    az_eventhubs_eventhub_list_command_builder.prototype.top = function (value) {
        this.setFlag("--top", value);
        return this;
    };
    return az_eventhubs_eventhub_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Shows the Eventhub Details.
 *
 * Syntax:
 * ```
 * az eventhubs eventhub show [--ids]
 *                            [--name]
 *                            [--namespace-name]
 *                            [--query-examples]
 *                            [--resource-group]
 *                            [--subscription]
 * ```
 */
var az_eventhubs_eventhub_show_command_builder = /** @class */ (function (_super) {
    __extends(az_eventhubs_eventhub_show_command_builder, _super);
    function az_eventhubs_eventhub_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_eventhubs_eventhub_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of Eventhub. */
    az_eventhubs_eventhub_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of Namespace. */
    az_eventhubs_eventhub_show_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_eventhubs_eventhub_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventhubs_eventhub_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventhubs_eventhub_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_eventhubs_eventhub_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Updates the EventHubs Eventhub.
 *
 * Syntax:
 * ```
 * az eventhubs eventhub update [--add]
 *                              [--archive-name-format]
 *                              [--blob-container]
 *                              [--capture-interval]
 *                              [--capture-size-limit]
 *                              [--destination-name]
 *                              [--enable-capture {false, true}]
 *                              [--force-string]
 *                              [--ids]
 *                              [--message-retention]
 *                              [--name]
 *                              [--namespace-name]
 *                              [--partition-count]
 *                              [--remove]
 *                              [--resource-group]
 *                              [--set]
 *                              [--skip-empty-archives {false, true}]
 *                              [--status {Active, Disabled, SendDisabled}]
 *                              [--storage-account]
 *                              [--subscription]
 * ```
 */
var az_eventhubs_eventhub_update_command_builder = /** @class */ (function (_super) {
    __extends(az_eventhubs_eventhub_update_command_builder, _super);
    function az_eventhubs_eventhub_update_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_eventhubs_eventhub_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** Blob naming convention for archive, e.g. {Namespace}/{EventHub}/{PartitionId}/{Year}/{Month}/{Day}/{Hour}/{Minute}/{Second}. Here all the parameters (Namespace,EventHub .. etc) are mandatory irrespective of order. */
    az_eventhubs_eventhub_update_command_builder.prototype.archiveNameFormat = function (value) {
        this.setFlag("--archive-name-format", value);
        return this;
    };
    /** Blob container Name. */
    az_eventhubs_eventhub_update_command_builder.prototype.blobContainer = function (value) {
        this.setFlag("--blob-container", value);
        return this;
    };
    /** Allows you to set the frequency with which the capture to Azure Blobs will happen, value should between 60 to 900 seconds. */
    az_eventhubs_eventhub_update_command_builder.prototype.captureInterval = function (value) {
        this.setFlag("--capture-interval", value);
        return this;
    };
    /** Defines the amount of data built up in your Event Hub before an capture operation, value should be between 10485760 to 524288000 bytes. */
    az_eventhubs_eventhub_update_command_builder.prototype.captureSizeLimit = function (value) {
        this.setFlag("--capture-size-limit", value);
        return this;
    };
    /** Name for capture destination, should be EventHubArchive.AzureBlockBlob. */
    az_eventhubs_eventhub_update_command_builder.prototype.destinationName = function (value) {
        this.setFlag("--destination-name", value);
        return this;
    };
    /** A boolean value that indicates whether capture description is enabled. */
    az_eventhubs_eventhub_update_command_builder.prototype.enableCapture = function (value) {
        this.setFlag("--enable-capture", value.toString());
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_eventhubs_eventhub_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_eventhubs_eventhub_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Number of days to retain events for this Event Hub, value should be 1 to 7 days and depends on Namespace sku. if Namespace sku is Basic than value should be one and is Manadatory parameter. Namespace sku is standard value should be 1 to 7 days, default is 7 days and is optional parameter. */
    az_eventhubs_eventhub_update_command_builder.prototype.messageRetention = function (value) {
        this.setFlag("--message-retention", value);
        return this;
    };
    /** Name of Eventhub. */
    az_eventhubs_eventhub_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of Namespace. */
    az_eventhubs_eventhub_update_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Number of partitions created for the Event Hub. By default, allowed values are 2-32. Lower value of 1 is supported with Kafka enabled namespaces. In presence of a custom quota, the upper limit will match the upper limit of the quota. */
    az_eventhubs_eventhub_update_command_builder.prototype.partitionCount = function (value) {
        this.setFlag("--partition-count", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_eventhubs_eventhub_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventhubs_eventhub_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_eventhubs_eventhub_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** A boolean value that indicates whether to Skip Empty. */
    az_eventhubs_eventhub_update_command_builder.prototype.skipEmptyArchives = function (value) {
        this.setFlag("--skip-empty-archives", value.toString());
        return this;
    };
    /** Status of Eventhub. */
    az_eventhubs_eventhub_update_command_builder.prototype.status = function (value) {
        this.setFlag("--status", value);
        return this;
    };
    /** Name (if within same resource group and not of type Classic Storage) or ARM id of the storage account to be used to create the blobs. */
    az_eventhubs_eventhub_update_command_builder.prototype.storageAccount = function (value) {
        this.setFlag("--storage-account", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventhubs_eventhub_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_eventhubs_eventhub_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Shows the keys and connection strings of Authorizationrule for the EventHubs Namespace.
 *
 * Syntax:
 * ```
 * az eventhubs georecovery-alias authorization-rule keys list --alias
 *                                                             --name
 *                                                             --namespace-name
 *                                                             --resource-group
 *                                                             [--query-examples]
 *                                                             [--subscription]
 * ```
 *
 * @param {string} alias Name of Geo-Disaster Recovery Configuration Alias.
 * @param {string} name Name of Namespace AuthorizationRule.
 * @param {string} namespaceName Name of Namespace.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_eventhubs_georecovery_alias_authorization_rule_keys_list_command_builder = /** @class */ (function (_super) {
    __extends(az_eventhubs_georecovery_alias_authorization_rule_keys_list_command_builder, _super);
    function az_eventhubs_georecovery_alias_authorization_rule_keys_list_command_builder(commandPath, resultDataTypeName, alias, name, namespaceName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.alias(alias);
        _this.name(name);
        _this.namespaceName(namespaceName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of Geo-Disaster Recovery Configuration Alias. */
    az_eventhubs_georecovery_alias_authorization_rule_keys_list_command_builder.prototype.alias = function (value) {
        this.setFlag("--alias", value);
        return this;
    };
    /** Name of Namespace AuthorizationRule. */
    az_eventhubs_georecovery_alias_authorization_rule_keys_list_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of Namespace. */
    az_eventhubs_georecovery_alias_authorization_rule_keys_list_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventhubs_georecovery_alias_authorization_rule_keys_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_eventhubs_georecovery_alias_authorization_rule_keys_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventhubs_georecovery_alias_authorization_rule_keys_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_eventhubs_georecovery_alias_authorization_rule_keys_list_command_builder;
}(base_1.CommandBuilder));
/**
 * List of Authorizationrule by EventHubs Namespace.
 *
 * Syntax:
 * ```
 * az eventhubs georecovery-alias authorization-rule list --alias
 *                                                        --namespace-name
 *                                                        --resource-group
 *                                                        [--query-examples]
 *                                                        [--subscription]
 * ```
 *
 * @param {string} alias Name of Geo-Disaster Recovery Configuration Alias.
 * @param {string} namespaceName Name of Namespace.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_eventhubs_georecovery_alias_authorization_rule_list_command_builder = /** @class */ (function (_super) {
    __extends(az_eventhubs_georecovery_alias_authorization_rule_list_command_builder, _super);
    function az_eventhubs_georecovery_alias_authorization_rule_list_command_builder(commandPath, resultDataTypeName, alias, namespaceName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.alias(alias);
        _this.namespaceName(namespaceName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of Geo-Disaster Recovery Configuration Alias. */
    az_eventhubs_georecovery_alias_authorization_rule_list_command_builder.prototype.alias = function (value) {
        this.setFlag("--alias", value);
        return this;
    };
    /** Name of Namespace. */
    az_eventhubs_georecovery_alias_authorization_rule_list_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventhubs_georecovery_alias_authorization_rule_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_eventhubs_georecovery_alias_authorization_rule_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventhubs_georecovery_alias_authorization_rule_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_eventhubs_georecovery_alias_authorization_rule_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Show properties of EventHubs Geo-Disaster Recovery Configuration Alias and Namespace Authorizationrule.
 *
 * Syntax:
 * ```
 * az eventhubs georecovery-alias authorization-rule show [--alias]
 *                                                        [--ids]
 *                                                        [--name]
 *                                                        [--namespace-name]
 *                                                        [--query-examples]
 *                                                        [--resource-group]
 *                                                        [--subscription]
 * ```
 */
var az_eventhubs_georecovery_alias_authorization_rule_show_command_builder = /** @class */ (function (_super) {
    __extends(az_eventhubs_georecovery_alias_authorization_rule_show_command_builder, _super);
    function az_eventhubs_georecovery_alias_authorization_rule_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Name of Geo-Disaster Recovery Configuration Alias. */
    az_eventhubs_georecovery_alias_authorization_rule_show_command_builder.prototype.alias = function (value) {
        this.setFlag("--alias", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_eventhubs_georecovery_alias_authorization_rule_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of Namespace AuthorizationRule. */
    az_eventhubs_georecovery_alias_authorization_rule_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of Namespace. */
    az_eventhubs_georecovery_alias_authorization_rule_show_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_eventhubs_georecovery_alias_authorization_rule_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventhubs_georecovery_alias_authorization_rule_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventhubs_georecovery_alias_authorization_rule_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_eventhubs_georecovery_alias_authorization_rule_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Disables Geo-Disaster Recovery Configuration Alias and stops replicating changes from primary to secondary namespaces.
 *
 * Syntax:
 * ```
 * az eventhubs georecovery-alias break-pair [--alias]
 *                                           [--ids]
 *                                           [--namespace-name]
 *                                           [--resource-group]
 *                                           [--subscription]
 * ```
 */
var az_eventhubs_georecovery_alias_break_pair_command_builder = /** @class */ (function (_super) {
    __extends(az_eventhubs_georecovery_alias_break_pair_command_builder, _super);
    function az_eventhubs_georecovery_alias_break_pair_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Name of Geo-Disaster Recovery Configuration Alias. */
    az_eventhubs_georecovery_alias_break_pair_command_builder.prototype.alias = function (value) {
        this.setFlag("--alias", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_eventhubs_georecovery_alias_break_pair_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of Namespace. */
    az_eventhubs_georecovery_alias_break_pair_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventhubs_georecovery_alias_break_pair_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventhubs_georecovery_alias_break_pair_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_eventhubs_georecovery_alias_break_pair_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete Geo-Disaster Recovery Configuration Alias.
 *
 * Syntax:
 * ```
 * az eventhubs georecovery-alias delete [--alias]
 *                                       [--ids]
 *                                       [--namespace-name]
 *                                       [--resource-group]
 *                                       [--subscription]
 * ```
 */
var az_eventhubs_georecovery_alias_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_eventhubs_georecovery_alias_delete_command_builder, _super);
    function az_eventhubs_georecovery_alias_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Name of Geo-Disaster Recovery Configuration Alias. */
    az_eventhubs_georecovery_alias_delete_command_builder.prototype.alias = function (value) {
        this.setFlag("--alias", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_eventhubs_georecovery_alias_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of Namespace. */
    az_eventhubs_georecovery_alias_delete_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventhubs_georecovery_alias_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventhubs_georecovery_alias_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_eventhubs_georecovery_alias_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * Check the availability of Geo-Disaster Recovery Configuration Alias Name.
 *
 * Syntax:
 * ```
 * az eventhubs georecovery-alias exists --alias
 *                                       --namespace-name
 *                                       --resource-group
 *                                       [--subscription]
 * ```
 *
 * @param {string} alias Name of Geo Recovery Configs - Alias to check availability.
 * @param {string} namespaceName Name of Namespace.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_eventhubs_georecovery_alias_exists_command_builder = /** @class */ (function (_super) {
    __extends(az_eventhubs_georecovery_alias_exists_command_builder, _super);
    function az_eventhubs_georecovery_alias_exists_command_builder(commandPath, resultDataTypeName, alias, namespaceName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.alias(alias);
        _this.namespaceName(namespaceName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of Geo Recovery Configs - Alias to check availability. */
    az_eventhubs_georecovery_alias_exists_command_builder.prototype.alias = function (value) {
        this.setFlag("--alias", value);
        return this;
    };
    /** Name of Namespace. */
    az_eventhubs_georecovery_alias_exists_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventhubs_georecovery_alias_exists_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventhubs_georecovery_alias_exists_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_eventhubs_georecovery_alias_exists_command_builder;
}(base_1.CommandBuilder));
/**
 * Invokes Geo-Disaster Recovery Configuration Alias to point to the secondary namespace.
 *
 * Syntax:
 * ```
 * az eventhubs georecovery-alias fail-over [--alias]
 *                                          [--ids]
 *                                          [--namespace-name]
 *                                          [--resource-group]
 *                                          [--subscription]
 * ```
 */
var az_eventhubs_georecovery_alias_fail_over_command_builder = /** @class */ (function (_super) {
    __extends(az_eventhubs_georecovery_alias_fail_over_command_builder, _super);
    function az_eventhubs_georecovery_alias_fail_over_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Name of Geo-Disaster Recovery Configuration Alias. */
    az_eventhubs_georecovery_alias_fail_over_command_builder.prototype.alias = function (value) {
        this.setFlag("--alias", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_eventhubs_georecovery_alias_fail_over_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of Namespace. */
    az_eventhubs_georecovery_alias_fail_over_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventhubs_georecovery_alias_fail_over_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventhubs_georecovery_alias_fail_over_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_eventhubs_georecovery_alias_fail_over_command_builder;
}(base_1.CommandBuilder));
/**
 * Gets all Alias(Disaster Recovery configurations).
 *
 * Syntax:
 * ```
 * az eventhubs georecovery-alias list --namespace-name
 *                                     --resource-group
 *                                     [--query-examples]
 *                                     [--subscription]
 * ```
 *
 * @param {string} namespaceName Name of Namespace.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_eventhubs_georecovery_alias_list_command_builder = /** @class */ (function (_super) {
    __extends(az_eventhubs_georecovery_alias_list_command_builder, _super);
    function az_eventhubs_georecovery_alias_list_command_builder(commandPath, resultDataTypeName, namespaceName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.namespaceName(namespaceName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of Namespace. */
    az_eventhubs_georecovery_alias_list_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventhubs_georecovery_alias_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_eventhubs_georecovery_alias_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventhubs_georecovery_alias_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_eventhubs_georecovery_alias_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Sets a Geo-Disaster Recovery Configuration Alias for the give Namespace.
 *
 * Syntax:
 * ```
 * az eventhubs georecovery-alias set --partner-namespace
 *                                    [--alias]
 *                                    [--alternate-name]
 *                                    [--ids]
 *                                    [--namespace-name]
 *                                    [--resource-group]
 *                                    [--subscription]
 * ```
 *
 * @param {string} partnerNamespace Name (if within the same resource group) or ARM Id of the Primary/Secondary eventhub namespace name, which is part of GEO DR pairing.
 */
var az_eventhubs_georecovery_alias_set_command_builder = /** @class */ (function (_super) {
    __extends(az_eventhubs_georecovery_alias_set_command_builder, _super);
    function az_eventhubs_georecovery_alias_set_command_builder(commandPath, resultDataTypeName, partnerNamespace) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.partnerNamespace(partnerNamespace);
        return _this;
    }
    /** Name (if within the same resource group) or ARM Id of the Primary/Secondary eventhub namespace name, which is part of GEO DR pairing. */
    az_eventhubs_georecovery_alias_set_command_builder.prototype.partnerNamespace = function (value) {
        this.setFlag("--partner-namespace", value);
        return this;
    };
    /** Name of Geo-Disaster Recovery Configuration Alias. */
    az_eventhubs_georecovery_alias_set_command_builder.prototype.alias = function (value) {
        this.setFlag("--alias", value);
        return this;
    };
    /** Alternate Name for the Alias, when the Namespace name and Alias name are same. */
    az_eventhubs_georecovery_alias_set_command_builder.prototype.alternateName = function (value) {
        this.setFlag("--alternate-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_eventhubs_georecovery_alias_set_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of Namespace. */
    az_eventhubs_georecovery_alias_set_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventhubs_georecovery_alias_set_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventhubs_georecovery_alias_set_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_eventhubs_georecovery_alias_set_command_builder;
}(base_1.CommandBuilder));
/**
 * Shows properties of Geo-Disaster Recovery Configuration Alias for Primay or Secondary Namespace.
 *
 * Syntax:
 * ```
 * az eventhubs georecovery-alias show [--alias]
 *                                     [--ids]
 *                                     [--namespace-name]
 *                                     [--query-examples]
 *                                     [--resource-group]
 *                                     [--subscription]
 * ```
 */
var az_eventhubs_georecovery_alias_show_command_builder = /** @class */ (function (_super) {
    __extends(az_eventhubs_georecovery_alias_show_command_builder, _super);
    function az_eventhubs_georecovery_alias_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Name of Geo-Disaster Recovery Configuration Alias. */
    az_eventhubs_georecovery_alias_show_command_builder.prototype.alias = function (value) {
        this.setFlag("--alias", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_eventhubs_georecovery_alias_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of Namespace. */
    az_eventhubs_georecovery_alias_show_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_eventhubs_georecovery_alias_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventhubs_georecovery_alias_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventhubs_georecovery_alias_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_eventhubs_georecovery_alias_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Shows the connection strings for namespace.
 *
 * Syntax:
 * ```
 * az eventhubs namespace authorization-rule keys list --name
 *                                                     --namespace-name
 *                                                     --resource-group
 *                                                     [--query-examples]
 *                                                     [--subscription]
 * ```
 *
 * @param {string} name Name of Namespace AuthorizationRule.
 * @param {string} namespaceName Name of Namespace.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_eventhubs_namespace_authorization_rule_keys_list_command_builder = /** @class */ (function (_super) {
    __extends(az_eventhubs_namespace_authorization_rule_keys_list_command_builder, _super);
    function az_eventhubs_namespace_authorization_rule_keys_list_command_builder(commandPath, resultDataTypeName, name, namespaceName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.namespaceName(namespaceName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of Namespace AuthorizationRule. */
    az_eventhubs_namespace_authorization_rule_keys_list_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of Namespace. */
    az_eventhubs_namespace_authorization_rule_keys_list_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventhubs_namespace_authorization_rule_keys_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_eventhubs_namespace_authorization_rule_keys_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventhubs_namespace_authorization_rule_keys_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_eventhubs_namespace_authorization_rule_keys_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Regenerate the connection strings of Authorizationrule for the namespace.
 *
 * Syntax:
 * ```
 * az eventhubs namespace authorization-rule keys renew --key {PrimaryKey, SecondaryKey}
 *                                                      [--ids]
 *                                                      [--key-value]
 *                                                      [--name]
 *                                                      [--namespace-name]
 *                                                      [--resource-group]
 *                                                      [--subscription]
 * ```
 *
 * @param {'PrimaryKey' | 'SecondaryKey'} key Specifies Primary or Secondary key needs to be reset.
 */
var az_eventhubs_namespace_authorization_rule_keys_renew_command_builder = /** @class */ (function (_super) {
    __extends(az_eventhubs_namespace_authorization_rule_keys_renew_command_builder, _super);
    function az_eventhubs_namespace_authorization_rule_keys_renew_command_builder(commandPath, resultDataTypeName, key) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.key(key);
        return _this;
    }
    /** Specifies Primary or Secondary key needs to be reset. */
    az_eventhubs_namespace_authorization_rule_keys_renew_command_builder.prototype.key = function (value) {
        this.setFlag("--key", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_eventhubs_namespace_authorization_rule_keys_renew_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Optional, if the key value provided, is set for KeyType or autogenerated Key value set for keyType. */
    az_eventhubs_namespace_authorization_rule_keys_renew_command_builder.prototype.keyValue = function (value) {
        this.setFlag("--key-value", value);
        return this;
    };
    /** Name of Namespace AuthorizationRule. */
    az_eventhubs_namespace_authorization_rule_keys_renew_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of Namespace. */
    az_eventhubs_namespace_authorization_rule_keys_renew_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventhubs_namespace_authorization_rule_keys_renew_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventhubs_namespace_authorization_rule_keys_renew_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_eventhubs_namespace_authorization_rule_keys_renew_command_builder;
}(base_1.CommandBuilder));
/**
 * Creates Authorizationrule for the given Namespace.
 *
 * Syntax:
 * ```
 * az eventhubs namespace authorization-rule create --name
 *                                                  --namespace-name
 *                                                  --resource-group
 *                                                  --rights {Listen, Manage, Send}
 *                                                  [--subscription]
 * ```
 *
 * @param {string} name Name of Namespace AuthorizationRule.
 * @param {string} namespaceName Name of Namespace.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {'Listen' | 'Manage' | 'Send'} rights Space-separated list of Authorization rule rights.
 */
var az_eventhubs_namespace_authorization_rule_create_command_builder = /** @class */ (function (_super) {
    __extends(az_eventhubs_namespace_authorization_rule_create_command_builder, _super);
    function az_eventhubs_namespace_authorization_rule_create_command_builder(commandPath, resultDataTypeName, name, namespaceName, resourceGroup, rights) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.namespaceName(namespaceName);
        _this.resourceGroup(resourceGroup);
        _this.rights(rights);
        return _this;
    }
    /** Name of Namespace AuthorizationRule. */
    az_eventhubs_namespace_authorization_rule_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of Namespace. */
    az_eventhubs_namespace_authorization_rule_create_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventhubs_namespace_authorization_rule_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Space-separated list of Authorization rule rights. */
    az_eventhubs_namespace_authorization_rule_create_command_builder.prototype.rights = function (value) {
        this.setFlag("--rights", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventhubs_namespace_authorization_rule_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_eventhubs_namespace_authorization_rule_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Deletes the Authorizationrule of the namespace.
 *
 * Syntax:
 * ```
 * az eventhubs namespace authorization-rule delete [--ids]
 *                                                  [--name]
 *                                                  [--namespace-name]
 *                                                  [--resource-group]
 *                                                  [--subscription]
 * ```
 */
var az_eventhubs_namespace_authorization_rule_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_eventhubs_namespace_authorization_rule_delete_command_builder, _super);
    function az_eventhubs_namespace_authorization_rule_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_eventhubs_namespace_authorization_rule_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of Namespace AuthorizationRule. */
    az_eventhubs_namespace_authorization_rule_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of Namespace. */
    az_eventhubs_namespace_authorization_rule_delete_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventhubs_namespace_authorization_rule_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventhubs_namespace_authorization_rule_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_eventhubs_namespace_authorization_rule_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * Shows the list of Authorizationrule by Namespace.
 *
 * Syntax:
 * ```
 * az eventhubs namespace authorization-rule list --namespace-name
 *                                                --resource-group
 *                                                [--query-examples]
 *                                                [--subscription]
 * ```
 *
 * @param {string} namespaceName Name of Namespace.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_eventhubs_namespace_authorization_rule_list_command_builder = /** @class */ (function (_super) {
    __extends(az_eventhubs_namespace_authorization_rule_list_command_builder, _super);
    function az_eventhubs_namespace_authorization_rule_list_command_builder(commandPath, resultDataTypeName, namespaceName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.namespaceName(namespaceName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of Namespace. */
    az_eventhubs_namespace_authorization_rule_list_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventhubs_namespace_authorization_rule_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_eventhubs_namespace_authorization_rule_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventhubs_namespace_authorization_rule_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_eventhubs_namespace_authorization_rule_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Shows the details of Authorizationrule.
 *
 * Syntax:
 * ```
 * az eventhubs namespace authorization-rule show [--ids]
 *                                                [--name]
 *                                                [--namespace-name]
 *                                                [--query-examples]
 *                                                [--resource-group]
 *                                                [--subscription]
 * ```
 */
var az_eventhubs_namespace_authorization_rule_show_command_builder = /** @class */ (function (_super) {
    __extends(az_eventhubs_namespace_authorization_rule_show_command_builder, _super);
    function az_eventhubs_namespace_authorization_rule_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_eventhubs_namespace_authorization_rule_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of Namespace AuthorizationRule. */
    az_eventhubs_namespace_authorization_rule_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of Namespace. */
    az_eventhubs_namespace_authorization_rule_show_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_eventhubs_namespace_authorization_rule_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventhubs_namespace_authorization_rule_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventhubs_namespace_authorization_rule_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_eventhubs_namespace_authorization_rule_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Updates Authorizationrule for the given Namespace.
 *
 * Syntax:
 * ```
 * az eventhubs namespace authorization-rule update --rights {Listen, Manage, Send}
 *                                                  [--add]
 *                                                  [--force-string]
 *                                                  [--ids]
 *                                                  [--name]
 *                                                  [--namespace-name]
 *                                                  [--remove]
 *                                                  [--resource-group]
 *                                                  [--set]
 *                                                  [--subscription]
 * ```
 *
 * @param {'Listen' | 'Manage' | 'Send'} rights Space-separated list of Authorization rule rights.
 */
var az_eventhubs_namespace_authorization_rule_update_command_builder = /** @class */ (function (_super) {
    __extends(az_eventhubs_namespace_authorization_rule_update_command_builder, _super);
    function az_eventhubs_namespace_authorization_rule_update_command_builder(commandPath, resultDataTypeName, rights) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.rights(rights);
        return _this;
    }
    /** Space-separated list of Authorization rule rights. */
    az_eventhubs_namespace_authorization_rule_update_command_builder.prototype.rights = function (value) {
        this.setFlag("--rights", value);
        return this;
    };
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_eventhubs_namespace_authorization_rule_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_eventhubs_namespace_authorization_rule_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_eventhubs_namespace_authorization_rule_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of Namespace AuthorizationRule. */
    az_eventhubs_namespace_authorization_rule_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of Namespace. */
    az_eventhubs_namespace_authorization_rule_update_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_eventhubs_namespace_authorization_rule_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventhubs_namespace_authorization_rule_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_eventhubs_namespace_authorization_rule_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventhubs_namespace_authorization_rule_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_eventhubs_namespace_authorization_rule_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Add a network rule for a namespace.
 *
 * Syntax:
 * ```
 * az eventhubs namespace network-rule add --namespace-name
 *                                         --resource-group
 *                                         [--action {Allow}]
 *                                         [--ignore-missing-endpoint {false, true}]
 *                                         [--ip-address]
 *                                         [--subnet]
 *                                         [--subscription]
 *                                         [--vnet-name]
 * ```
 *
 * @param {string} namespaceName Name of the Namespace.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_eventhubs_namespace_network_rule_add_command_builder = /** @class */ (function (_super) {
    __extends(az_eventhubs_namespace_network_rule_add_command_builder, _super);
    function az_eventhubs_namespace_network_rule_add_command_builder(commandPath, resultDataTypeName, namespaceName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.namespaceName(namespaceName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the Namespace. */
    az_eventhubs_namespace_network_rule_add_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventhubs_namespace_network_rule_add_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Action of the IP rule. */
    az_eventhubs_namespace_network_rule_add_command_builder.prototype.action = function (value) {
        this.setFlag("--action", value);
        return this;
    };
    /** A boolean value that indicates whether to ignore missing vnet Service Endpoint. */
    az_eventhubs_namespace_network_rule_add_command_builder.prototype.ignoreMissingEndpoint = function (value) {
        this.setFlag("--ignore-missing-endpoint", value.toString());
        return this;
    };
    /** IPv4 address or CIDR range - 10.6.0.0/24. */
    az_eventhubs_namespace_network_rule_add_command_builder.prototype.ipAddress = function (value) {
        this.setFlag("--ip-address", value);
        return this;
    };
    /** Name or ID of subnet. If name is supplied, `--vnet-name` must be supplied. */
    az_eventhubs_namespace_network_rule_add_command_builder.prototype.subnet = function (value) {
        this.setFlag("--subnet", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventhubs_namespace_network_rule_add_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Name of the Virtual Network. */
    az_eventhubs_namespace_network_rule_add_command_builder.prototype.vnetName = function (value) {
        this.setFlag("--vnet-name", value);
        return this;
    };
    return az_eventhubs_namespace_network_rule_add_command_builder;
}(base_1.CommandBuilder));
/**
 * Show properties of Network rule of the given Namespace.
 *
 * Syntax:
 * ```
 * az eventhubs namespace network-rule list --namespace-name
 *                                          --resource-group
 *                                          [--query-examples]
 *                                          [--subscription]
 * ```
 *
 * @param {string} namespaceName Name of the Namespace.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_eventhubs_namespace_network_rule_list_command_builder = /** @class */ (function (_super) {
    __extends(az_eventhubs_namespace_network_rule_list_command_builder, _super);
    function az_eventhubs_namespace_network_rule_list_command_builder(commandPath, resultDataTypeName, namespaceName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.namespaceName(namespaceName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the Namespace. */
    az_eventhubs_namespace_network_rule_list_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventhubs_namespace_network_rule_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_eventhubs_namespace_network_rule_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventhubs_namespace_network_rule_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_eventhubs_namespace_network_rule_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Remove network rule for a namespace.
 *
 * Syntax:
 * ```
 * az eventhubs namespace network-rule remove --namespace-name
 *                                            --resource-group
 *                                            [--ip-address]
 *                                            [--subnet]
 *                                            [--subscription]
 *                                            [--vnet-name]
 * ```
 *
 * @param {string} namespaceName Name of the Namespace.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_eventhubs_namespace_network_rule_remove_command_builder = /** @class */ (function (_super) {
    __extends(az_eventhubs_namespace_network_rule_remove_command_builder, _super);
    function az_eventhubs_namespace_network_rule_remove_command_builder(commandPath, resultDataTypeName, namespaceName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.namespaceName(namespaceName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the Namespace. */
    az_eventhubs_namespace_network_rule_remove_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventhubs_namespace_network_rule_remove_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** IPv4 address or CIDR range - 10.6.0.0/24. */
    az_eventhubs_namespace_network_rule_remove_command_builder.prototype.ipAddress = function (value) {
        this.setFlag("--ip-address", value);
        return this;
    };
    /** Name or ID of subnet. If name is supplied, `--vnet-name` must be supplied. */
    az_eventhubs_namespace_network_rule_remove_command_builder.prototype.subnet = function (value) {
        this.setFlag("--subnet", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventhubs_namespace_network_rule_remove_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Name of the Virtual Network. */
    az_eventhubs_namespace_network_rule_remove_command_builder.prototype.vnetName = function (value) {
        this.setFlag("--vnet-name", value);
        return this;
    };
    return az_eventhubs_namespace_network_rule_remove_command_builder;
}(base_1.CommandBuilder));
/**
 * Creates the EventHubs Namespace.
 *
 * Syntax:
 * ```
 * az eventhubs namespace create --name
 *                               --resource-group
 *                               [--assign-identity {false, true}]
 *                               [--capacity]
 *                               [--cluster-arm-id]
 *                               [--default-action {Allow, Deny}]
 *                               [--enable-auto-inflate {false, true}]
 *                               [--enable-kafka {false, true}]
 *                               [--enable-trusted-service-access {false, true}]
 *                               [--location]
 *                               [--maximum-throughput-units]
 *                               [--sku {Basic, Standard}]
 *                               [--subscription]
 *                               [--tags]
 *                               [--zone-redundant {false, true}]
 * ```
 *
 * @param {string} name Name of Namespace.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_eventhubs_namespace_create_command_builder = /** @class */ (function (_super) {
    __extends(az_eventhubs_namespace_create_command_builder, _super);
    function az_eventhubs_namespace_create_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of Namespace. */
    az_eventhubs_namespace_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventhubs_namespace_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** A boolean value that indicates whether Managed Identity is enabled. */
    az_eventhubs_namespace_create_command_builder.prototype.assignIdentity = function (value) {
        this.setFlag("--assign-identity", value.toString());
        return this;
    };
    /** Capacity for Sku. */
    az_eventhubs_namespace_create_command_builder.prototype.capacity = function (value) {
        this.setFlag("--capacity", value);
        return this;
    };
    /** Luster ARM ID of the Namespace. */
    az_eventhubs_namespace_create_command_builder.prototype.clusterArmId = function (value) {
        this.setFlag("--cluster-arm-id", value);
        return this;
    };
    /** Default Action for Network Rule Set. */
    az_eventhubs_namespace_create_command_builder.prototype.defaultAction = function (value) {
        this.setFlag("--default-action", value);
        return this;
    };
    /** A boolean value that indicates whether AutoInflate is enabled for eventhub namespace. */
    az_eventhubs_namespace_create_command_builder.prototype.enableAutoInflate = function (value) {
        this.setFlag("--enable-auto-inflate", value.toString());
        return this;
    };
    /** A boolean value that indicates whether Kafka is enabled for eventhub namespace. */
    az_eventhubs_namespace_create_command_builder.prototype.enableKafka = function (value) {
        this.setFlag("--enable-kafka", value.toString());
        return this;
    };
    /** A boolean value that indicates whether Trusted Service Access is enabled for Network Rule Set. */
    az_eventhubs_namespace_create_command_builder.prototype.enableTrustedServiceAccess = function (value) {
        this.setFlag("--enable-trusted-service-access", value.toString());
        return this;
    };
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_eventhubs_namespace_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Upper limit of throughput units when AutoInflate is enabled, vaule should be within 0 to 20 throughput units. ( 0 if AutoInflateEnabled = true). */
    az_eventhubs_namespace_create_command_builder.prototype.maximumThroughputUnits = function (value) {
        this.setFlag("--maximum-throughput-units", value);
        return this;
    };
    /** Namespace SKU. */
    az_eventhubs_namespace_create_command_builder.prototype.sku = function (value) {
        this.setFlag("--sku", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventhubs_namespace_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_eventhubs_namespace_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    /** Enabling this property creates a Standard EventHubs Namespace in regions supported availability zones. */
    az_eventhubs_namespace_create_command_builder.prototype.zoneRedundant = function (value) {
        this.setFlag("--zone-redundant", value.toString());
        return this;
    };
    return az_eventhubs_namespace_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Deletes the Namespaces.
 *
 * Syntax:
 * ```
 * az eventhubs namespace delete [--ids]
 *                               [--name]
 *                               [--resource-group]
 *                               [--subscription]
 * ```
 */
var az_eventhubs_namespace_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_eventhubs_namespace_delete_command_builder, _super);
    function az_eventhubs_namespace_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_eventhubs_namespace_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of Namespace. */
    az_eventhubs_namespace_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventhubs_namespace_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventhubs_namespace_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_eventhubs_namespace_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * Check for the availability of the given name for the Namespace.
 *
 * Syntax:
 * ```
 * az eventhubs namespace exists --name
 *                               [--subscription]
 * ```
 *
 * @param {string} name Name to check the namespace name availability.
 */
var az_eventhubs_namespace_exists_command_builder = /** @class */ (function (_super) {
    __extends(az_eventhubs_namespace_exists_command_builder, _super);
    function az_eventhubs_namespace_exists_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** Name to check the namespace name availability. */
    az_eventhubs_namespace_exists_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventhubs_namespace_exists_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_eventhubs_namespace_exists_command_builder;
}(base_1.CommandBuilder));
/**
 * Lists the EventHubs Namespaces.
 *
 * Syntax:
 * ```
 * az eventhubs namespace list [--query-examples]
 *                             [--resource-group]
 *                             [--subscription]
 * ```
 */
var az_eventhubs_namespace_list_command_builder = /** @class */ (function (_super) {
    __extends(az_eventhubs_namespace_list_command_builder, _super);
    function az_eventhubs_namespace_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_eventhubs_namespace_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventhubs_namespace_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventhubs_namespace_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_eventhubs_namespace_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Shows the Event Hubs Namespace Details.
 *
 * Syntax:
 * ```
 * az eventhubs namespace show [--ids]
 *                             [--name]
 *                             [--query-examples]
 *                             [--resource-group]
 *                             [--subscription]
 * ```
 */
var az_eventhubs_namespace_show_command_builder = /** @class */ (function (_super) {
    __extends(az_eventhubs_namespace_show_command_builder, _super);
    function az_eventhubs_namespace_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_eventhubs_namespace_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of Namespace. */
    az_eventhubs_namespace_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_eventhubs_namespace_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventhubs_namespace_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventhubs_namespace_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_eventhubs_namespace_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Updates the EventHubs Namespace.
 *
 * Syntax:
 * ```
 * az eventhubs namespace update [--add]
 *                               [--assign-identity {false, true}]
 *                               [--capacity]
 *                               [--default-action {Allow, Deny}]
 *                               [--enable-auto-inflate {false, true}]
 *                               [--enable-kafka {false, true}]
 *                               [--enable-trusted-service-access {false, true}]
 *                               [--force-string]
 *                               [--ids]
 *                               [--key-name]
 *                               [--key-source {Microsoft.KeyVault}]
 *                               [--key-vault-uri]
 *                               [--key-version]
 *                               [--maximum-throughput-units]
 *                               [--name]
 *                               [--remove]
 *                               [--resource-group]
 *                               [--set]
 *                               [--sku {Basic, Standard}]
 *                               [--subscription]
 *                               [--tags]
 * ```
 */
var az_eventhubs_namespace_update_command_builder = /** @class */ (function (_super) {
    __extends(az_eventhubs_namespace_update_command_builder, _super);
    function az_eventhubs_namespace_update_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_eventhubs_namespace_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** A boolean value that indicates whether Managed Identity is enabled. */
    az_eventhubs_namespace_update_command_builder.prototype.assignIdentity = function (value) {
        this.setFlag("--assign-identity", value.toString());
        return this;
    };
    /** Capacity for Sku. */
    az_eventhubs_namespace_update_command_builder.prototype.capacity = function (value) {
        this.setFlag("--capacity", value);
        return this;
    };
    /** Default Action for Network Rule Set. */
    az_eventhubs_namespace_update_command_builder.prototype.defaultAction = function (value) {
        this.setFlag("--default-action", value);
        return this;
    };
    /** A boolean value that indicates whether AutoInflate is enabled for eventhub namespace. */
    az_eventhubs_namespace_update_command_builder.prototype.enableAutoInflate = function (value) {
        this.setFlag("--enable-auto-inflate", value.toString());
        return this;
    };
    /** A boolean value that indicates whether Kafka is enabled for eventhub namespace. */
    az_eventhubs_namespace_update_command_builder.prototype.enableKafka = function (value) {
        this.setFlag("--enable-kafka", value.toString());
        return this;
    };
    /** A boolean value that indicates whether Trusted Service Access is enabled for Network Rule Set. */
    az_eventhubs_namespace_update_command_builder.prototype.enableTrustedServiceAccess = function (value) {
        this.setFlag("--enable-trusted-service-access", value.toString());
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_eventhubs_namespace_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_eventhubs_namespace_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the KeyVault key. */
    az_eventhubs_namespace_update_command_builder.prototype.keyName = function (value) {
        this.setFlag("--key-name", value);
        return this;
    };
    /** Encryption key source. */
    az_eventhubs_namespace_update_command_builder.prototype.keySource = function (value) {
        this.setFlag("--key-source", value);
        return this;
    };
    /** The Uri of the KeyVault. */
    az_eventhubs_namespace_update_command_builder.prototype.keyVaultUri = function (value) {
        this.setFlag("--key-vault-uri", value);
        return this;
    };
    /** The version of the KeyVault key to use. */
    az_eventhubs_namespace_update_command_builder.prototype.keyVersion = function (value) {
        this.setFlag("--key-version", value);
        return this;
    };
    /** Upper limit of throughput units when AutoInflate is enabled, vaule should be within 0 to 20 throughput units. ( 0 if AutoInflateEnabled = true). */
    az_eventhubs_namespace_update_command_builder.prototype.maximumThroughputUnits = function (value) {
        this.setFlag("--maximum-throughput-units", value);
        return this;
    };
    /** Name of Namespace. */
    az_eventhubs_namespace_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_eventhubs_namespace_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_eventhubs_namespace_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_eventhubs_namespace_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Namespace SKU. */
    az_eventhubs_namespace_update_command_builder.prototype.sku = function (value) {
        this.setFlag("--sku", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_eventhubs_namespace_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_eventhubs_namespace_update_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_eventhubs_namespace_update_command_builder;
}(base_1.CommandBuilder));
