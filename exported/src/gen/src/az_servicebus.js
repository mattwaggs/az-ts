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
exports.az_servicebus = exports.az_servicebus_topic = exports.az_servicebus_topic_subscription = exports.az_servicebus_topic_subscription_rule = exports.az_servicebus_topic_authorization_rule = exports.az_servicebus_topic_authorization_rule_keys = exports.az_servicebus_queue = exports.az_servicebus_queue_authorization_rule = exports.az_servicebus_queue_authorization_rule_keys = exports.az_servicebus_namespace = exports.az_servicebus_namespace_network_rule = exports.az_servicebus_namespace_authorization_rule = exports.az_servicebus_namespace_authorization_rule_keys = exports.az_servicebus_migration = exports.az_servicebus_georecovery_alias = exports.az_servicebus_georecovery_alias_authorization_rule = exports.az_servicebus_georecovery_alias_authorization_rule_keys = void 0;
var base_1 = require("../base");
/** Manage Azure Authorization Rule keys for Service Bus Namespace. */
var az_servicebus_georecovery_alias_authorization_rule_keys = /** @class */ (function () {
    function az_servicebus_georecovery_alias_authorization_rule_keys() {
    }
    /**
     * List the keys and connection strings of Authorization Rule for the Service Bus Namespace.
     *
     * Syntax:
     * ```
     * az servicebus georecovery-alias authorization-rule keys list --alias
     *                                                              --name
     *                                                              --namespace-name
     *                                                              --resource-group
     *                                                              [--query-examples]
     *                                                              [--subscription]
     * ```
     *
     * @param {string} alias Name of Geo-Disaster Recovery Configuration Alias.
     * @param {string} name Name of Namespace AuthorizationRule.
     * @param {string} namespaceName Name of Namespace.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_servicebus_georecovery_alias_authorization_rule_keys.list = function (alias, name, namespaceName, resourceGroup) {
        return new az_servicebus_georecovery_alias_authorization_rule_keys_list_command_builder("az servicebus georecovery-alias authorization-rule keys list", 'az_servicebus_georecovery_alias_authorization_rule_keys_list_command_result', alias, name, namespaceName, resourceGroup);
    };
    return az_servicebus_georecovery_alias_authorization_rule_keys;
}());
exports.az_servicebus_georecovery_alias_authorization_rule_keys = az_servicebus_georecovery_alias_authorization_rule_keys;
/** Manage Azure Service Bus Authorization Rule for Namespace with Geo-Disaster Recovery Configuration Alias. */
var az_servicebus_georecovery_alias_authorization_rule = /** @class */ (function () {
    function az_servicebus_georecovery_alias_authorization_rule() {
    }
    /**
     * Shows the list of Authorization Rule by Service Bus Namespace.
     *
     * Syntax:
     * ```
     * az servicebus georecovery-alias authorization-rule list --alias
     *                                                         --namespace-name
     *                                                         --resource-group
     *                                                         [--query-examples]
     *                                                         [--subscription]
     * ```
     *
     * @param {string} alias Name of Geo-Disaster Recovery Configuration Alias.
     * @param {string} namespaceName Name of Namespace.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_servicebus_georecovery_alias_authorization_rule.list = function (alias, namespaceName, resourceGroup) {
        return new az_servicebus_georecovery_alias_authorization_rule_list_command_builder("az servicebus georecovery-alias authorization-rule list", 'az_servicebus_georecovery_alias_authorization_rule_list_command_result', alias, namespaceName, resourceGroup);
    };
    /**
     * Gets an authorization rule for a namespace by rule name.
     *
     * Syntax:
     * ```
     * az servicebus georecovery-alias authorization-rule show [--alias]
     *                                                         [--ids]
     *                                                         [--name]
     *                                                         [--namespace-name]
     *                                                         [--query-examples]
     *                                                         [--resource-group]
     *                                                         [--subscription]
     * ```
     */
    az_servicebus_georecovery_alias_authorization_rule.show = function () {
        return new az_servicebus_georecovery_alias_authorization_rule_show_command_builder("az servicebus georecovery-alias authorization-rule show", 'az_servicebus_georecovery_alias_authorization_rule_show_command_result');
    };
    return az_servicebus_georecovery_alias_authorization_rule;
}());
exports.az_servicebus_georecovery_alias_authorization_rule = az_servicebus_georecovery_alias_authorization_rule;
/** Manage Azure Service Bus Geo-Disaster Recovery Configuration Alias. */
var az_servicebus_georecovery_alias = /** @class */ (function () {
    function az_servicebus_georecovery_alias() {
    }
    /**
     * Disables Service Bus Geo-Disaster Recovery Configuration Alias and stops replicating changes from primary to secondary namespaces.
     *
     * Syntax:
     * ```
     * az servicebus georecovery-alias break-pair [--alias]
     *                                            [--ids]
     *                                            [--namespace-name]
     *                                            [--resource-group]
     *                                            [--subscription]
     * ```
     */
    az_servicebus_georecovery_alias.break_pair = function () {
        return new az_servicebus_georecovery_alias_break_pair_command_builder("az servicebus georecovery-alias break-pair", 'az_servicebus_georecovery_alias_break_pair_command_result');
    };
    /**
     * Deletes Service Bus Geo-Disaster Recovery Configuration Alias request accepted.
     *
     * Syntax:
     * ```
     * az servicebus georecovery-alias delete [--alias]
     *                                        [--ids]
     *                                        [--namespace-name]
     *                                        [--resource-group]
     *                                        [--subscription]
     * ```
     */
    az_servicebus_georecovery_alias["delete"] = function () {
        return new az_servicebus_georecovery_alias_delete_command_builder("az servicebus georecovery-alias delete", 'az_servicebus_georecovery_alias_delete_command_result');
    };
    /**
     * Check if Geo Recovery Alias Name is available.
     *
     * Syntax:
     * ```
     * az servicebus georecovery-alias exists --alias
     *                                        --namespace-name
     *                                        --resource-group
     *                                        [--subscription]
     * ```
     *
     * @param {string} alias Name of Geo-Disaster Recovery Configuration Alias to check availability.
     * @param {string} namespaceName Name of Namespace.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_servicebus_georecovery_alias.exists = function (alias, namespaceName, resourceGroup) {
        return new az_servicebus_georecovery_alias_exists_command_builder("az servicebus georecovery-alias exists", 'az_servicebus_georecovery_alias_exists_command_result', alias, namespaceName, resourceGroup);
    };
    /**
     * Invokes Service Bus Geo-Disaster Recovery Configuration Alias failover and re-configure the alias to point to the secondary namespace.
     *
     * Syntax:
     * ```
     * az servicebus georecovery-alias fail-over [--alias]
     *                                           [--ids]
     *                                           [--namespace-name]
     *                                           [--resource-group]
     *                                           [--subscription]
     * ```
     */
    az_servicebus_georecovery_alias.fail_over = function () {
        return new az_servicebus_georecovery_alias_fail_over_command_builder("az servicebus georecovery-alias fail-over", 'az_servicebus_georecovery_alias_fail_over_command_result');
    };
    /**
     * Gets all Alias(Disaster Recovery configurations).
     *
     * Syntax:
     * ```
     * az servicebus georecovery-alias list --namespace-name
     *                                      --resource-group
     *                                      [--query-examples]
     *                                      [--subscription]
     * ```
     *
     * @param {string} namespaceName Name of Namespace.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_servicebus_georecovery_alias.list = function (namespaceName, resourceGroup) {
        return new az_servicebus_georecovery_alias_list_command_builder("az servicebus georecovery-alias list", 'az_servicebus_georecovery_alias_list_command_result', namespaceName, resourceGroup);
    };
    /**
     * Sets Service Bus Geo-Disaster Recovery Configuration Alias for the give Namespace.
     *
     * Syntax:
     * ```
     * az servicebus georecovery-alias set --partner-namespace
     *                                     [--alias]
     *                                     [--alternate-name]
     *                                     [--ids]
     *                                     [--namespace-name]
     *                                     [--resource-group]
     *                                     [--subscription]
     * ```
     *
     * @param {string} partnerNamespace Name (if within the same resource group) or ARM Id of Primary/Secondary Service Bus  namespace name, which is part of GEO DR pairing.
     */
    az_servicebus_georecovery_alias.set = function (partnerNamespace) {
        return new az_servicebus_georecovery_alias_set_command_builder("az servicebus georecovery-alias set", 'az_servicebus_georecovery_alias_set_command_result', partnerNamespace);
    };
    /**
     * Shows properties of Service Bus Geo-Disaster Recovery Configuration Alias for Primay/Secondary Namespace.
     *
     * Syntax:
     * ```
     * az servicebus georecovery-alias show [--alias]
     *                                      [--ids]
     *                                      [--namespace-name]
     *                                      [--query-examples]
     *                                      [--resource-group]
     *                                      [--subscription]
     * ```
     */
    az_servicebus_georecovery_alias.show = function () {
        return new az_servicebus_georecovery_alias_show_command_builder("az servicebus georecovery-alias show", 'az_servicebus_georecovery_alias_show_command_result');
    };
    return az_servicebus_georecovery_alias;
}());
exports.az_servicebus_georecovery_alias = az_servicebus_georecovery_alias;
/** Manage Azure Service Bus Migration of Standard to Premium. */
var az_servicebus_migration = /** @class */ (function () {
    function az_servicebus_migration() {
    }
    /**
     * Disable the Service Bus Migration of Standard to Premium namespace.
     *
     * Syntax:
     * ```
     * az servicebus migration abort [--ids]
     *                               [--name]
     *                               [--resource-group]
     *                               [--subscription]
     * ```
     */
    az_servicebus_migration.abort = function () {
        return new az_servicebus_migration_abort_command_builder("az servicebus migration abort", 'az_servicebus_migration_abort_command_result');
    };
    /**
     * Completes the Service Bus Migration of Standard to Premium namespace.
     *
     * Syntax:
     * ```
     * az servicebus migration complete [--ids]
     *                                  [--name]
     *                                  [--resource-group]
     *                                  [--subscription]
     * ```
     */
    az_servicebus_migration.complete = function () {
        return new az_servicebus_migration_complete_command_builder("az servicebus migration complete", 'az_servicebus_migration_complete_command_result');
    };
    /**
     * Shows properties of properties of Service Bus Migration.
     *
     * Syntax:
     * ```
     * az servicebus migration show [--ids]
     *                              [--name]
     *                              [--query-examples]
     *                              [--resource-group]
     *                              [--subscription]
     * ```
     */
    az_servicebus_migration.show = function () {
        return new az_servicebus_migration_show_command_builder("az servicebus migration show", 'az_servicebus_migration_show_command_result');
    };
    /**
     * Create and Start Service Bus Migration of Standard to Premium namespace.
     *
     * Syntax:
     * ```
     * az servicebus migration start --post-migration-name
     *                               --target-namespace
     *                               [--ids]
     *                               [--name]
     *                               [--resource-group]
     *                               [--subscription]
     * ```
     *
     * @param {string} postMigrationName Post migration name is the name that can be used to connect to standard namespace after migration is complete.
     * @param {string} targetNamespace Name (if within the same resource group) or ARM Id of empty Premium Service Bus namespace name that will be target of the migration.
     */
    az_servicebus_migration.start = function (postMigrationName, targetNamespace) {
        return new az_servicebus_migration_start_command_builder("az servicebus migration start", 'az_servicebus_migration_start_command_result', postMigrationName, targetNamespace);
    };
    return az_servicebus_migration;
}());
exports.az_servicebus_migration = az_servicebus_migration;
/** Manage Azure Authorization Rule connection strings for Namespace. */
var az_servicebus_namespace_authorization_rule_keys = /** @class */ (function () {
    function az_servicebus_namespace_authorization_rule_keys() {
    }
    /**
     * List the keys and connection strings of Authorization Rule for Service Bus Namespace.
     *
     * Syntax:
     * ```
     * az servicebus namespace authorization-rule keys list --name
     *                                                      --namespace-name
     *                                                      --resource-group
     *                                                      [--query-examples]
     *                                                      [--subscription]
     * ```
     *
     * @param {string} name Name of Namespace Authorization Rule.
     * @param {string} namespaceName Name of Namespace.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_servicebus_namespace_authorization_rule_keys.list = function (name, namespaceName, resourceGroup) {
        return new az_servicebus_namespace_authorization_rule_keys_list_command_builder("az servicebus namespace authorization-rule keys list", 'az_servicebus_namespace_authorization_rule_keys_list_command_result', name, namespaceName, resourceGroup);
    };
    /**
     * Regenerate keys of Authorization Rule for the Service Bus Namespace.
     *
     * Syntax:
     * ```
     * az servicebus namespace authorization-rule keys renew --key {PrimaryKey, SecondaryKey}
     *                                                       [--ids]
     *                                                       [--key-value]
     *                                                       [--name]
     *                                                       [--namespace-name]
     *                                                       [--resource-group]
     *                                                       [--subscription]
     * ```
     *
     * @param {'PrimaryKey' | 'SecondaryKey'} key Specifies Primary or Secondary key needs to be reset.
     */
    az_servicebus_namespace_authorization_rule_keys.renew = function (key) {
        return new az_servicebus_namespace_authorization_rule_keys_renew_command_builder("az servicebus namespace authorization-rule keys renew", 'az_servicebus_namespace_authorization_rule_keys_renew_command_result', key);
    };
    return az_servicebus_namespace_authorization_rule_keys;
}());
exports.az_servicebus_namespace_authorization_rule_keys = az_servicebus_namespace_authorization_rule_keys;
/** Manage Azure Service Bus Namespace Authorization Rule. */
var az_servicebus_namespace_authorization_rule = /** @class */ (function () {
    function az_servicebus_namespace_authorization_rule() {
    }
    /**
     * Create Authorization Rule for the given Service Bus Namespace.
     *
     * Syntax:
     * ```
     * az servicebus namespace authorization-rule create --name
     *                                                   --namespace-name
     *                                                   --resource-group
     *                                                   --rights {Listen, Manage, Send}
     *                                                   [--subscription]
     * ```
     *
     * @param {string} name Name of Namespace Authorization Rule.
     * @param {string} namespaceName Name of Namespace.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {'Listen' | 'Manage' | 'Send'} rights Space-separated list of Authorization rule rights.
     */
    az_servicebus_namespace_authorization_rule.create = function (name, namespaceName, resourceGroup, rights) {
        return new az_servicebus_namespace_authorization_rule_create_command_builder("az servicebus namespace authorization-rule create", 'az_servicebus_namespace_authorization_rule_create_command_result', name, namespaceName, resourceGroup, rights);
    };
    /**
     * Deletes the Authorization Rule of the Service Bus Namespace.
     *
     * Syntax:
     * ```
     * az servicebus namespace authorization-rule delete [--ids]
     *                                                   [--name]
     *                                                   [--namespace-name]
     *                                                   [--resource-group]
     *                                                   [--subscription]
     * ```
     */
    az_servicebus_namespace_authorization_rule["delete"] = function () {
        return new az_servicebus_namespace_authorization_rule_delete_command_builder("az servicebus namespace authorization-rule delete", 'az_servicebus_namespace_authorization_rule_delete_command_result');
    };
    /**
     * Shows the list of Authorization Rule by Service Bus Namespace.
     *
     * Syntax:
     * ```
     * az servicebus namespace authorization-rule list --namespace-name
     *                                                 --resource-group
     *                                                 [--query-examples]
     *                                                 [--subscription]
     * ```
     *
     * @param {string} namespaceName Name of the Namespace.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_servicebus_namespace_authorization_rule.list = function (namespaceName, resourceGroup) {
        return new az_servicebus_namespace_authorization_rule_list_command_builder("az servicebus namespace authorization-rule list", 'az_servicebus_namespace_authorization_rule_list_command_result', namespaceName, resourceGroup);
    };
    /**
     * Shows the details of Service Bus Namespace Authorization Rule.
     *
     * Syntax:
     * ```
     * az servicebus namespace authorization-rule show [--ids]
     *                                                 [--name]
     *                                                 [--namespace-name]
     *                                                 [--query-examples]
     *                                                 [--resource-group]
     *                                                 [--subscription]
     * ```
     */
    az_servicebus_namespace_authorization_rule.show = function () {
        return new az_servicebus_namespace_authorization_rule_show_command_builder("az servicebus namespace authorization-rule show", 'az_servicebus_namespace_authorization_rule_show_command_result');
    };
    /**
     * Updates Authorization Rule for the given Service Bus Namespace.
     *
     * Syntax:
     * ```
     * az servicebus namespace authorization-rule update --rights {Listen, Manage, Send}
     *                                                   [--add]
     *                                                   [--force-string]
     *                                                   [--ids]
     *                                                   [--name]
     *                                                   [--namespace-name]
     *                                                   [--remove]
     *                                                   [--resource-group]
     *                                                   [--set]
     *                                                   [--subscription]
     * ```
     *
     * @param {'Listen' | 'Manage' | 'Send'} rights Space-separated list of Authorization rule rights.
     */
    az_servicebus_namespace_authorization_rule.update = function (rights) {
        return new az_servicebus_namespace_authorization_rule_update_command_builder("az servicebus namespace authorization-rule update", 'az_servicebus_namespace_authorization_rule_update_command_result', rights);
    };
    return az_servicebus_namespace_authorization_rule;
}());
exports.az_servicebus_namespace_authorization_rule = az_servicebus_namespace_authorization_rule;
/** Manage Azure ServiceBus networkruleSet for namespace. */
var az_servicebus_namespace_network_rule = /** @class */ (function () {
    function az_servicebus_namespace_network_rule() {
    }
    /**
     * Add a network rule for a namespace.
     *
     * Syntax:
     * ```
     * az servicebus namespace network-rule add --namespace-name
     *                                          --resource-group
     *                                          [--action {Allow}]
     *                                          [--ignore-missing-endpoint {false, true}]
     *                                          [--ip-address]
     *                                          [--subnet]
     *                                          [--subscription]
     *                                          [--vnet-name]
     * ```
     *
     * @param {string} namespaceName Name of the Namespace.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_servicebus_namespace_network_rule.add = function (namespaceName, resourceGroup) {
        return new az_servicebus_namespace_network_rule_add_command_builder("az servicebus namespace network-rule add", 'az_servicebus_namespace_network_rule_add_command_result', namespaceName, resourceGroup);
    };
    /**
     * Show properties of Network rule of the given Namespace.
     *
     * Syntax:
     * ```
     * az servicebus namespace network-rule list --namespace-name
     *                                           --resource-group
     *                                           [--query-examples]
     *                                           [--subscription]
     * ```
     *
     * @param {string} namespaceName Name of the Namespace.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_servicebus_namespace_network_rule.list = function (namespaceName, resourceGroup) {
        return new az_servicebus_namespace_network_rule_list_command_builder("az servicebus namespace network-rule list", 'az_servicebus_namespace_network_rule_list_command_result', namespaceName, resourceGroup);
    };
    /**
     * Remove network rule for a namespace.
     *
     * Syntax:
     * ```
     * az servicebus namespace network-rule remove --namespace-name
     *                                             --resource-group
     *                                             [--ip-address]
     *                                             [--subnet]
     *                                             [--subscription]
     *                                             [--vnet-name]
     * ```
     *
     * @param {string} namespaceName Name of the Namespace.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_servicebus_namespace_network_rule.remove = function (namespaceName, resourceGroup) {
        return new az_servicebus_namespace_network_rule_remove_command_builder("az servicebus namespace network-rule remove", 'az_servicebus_namespace_network_rule_remove_command_result', namespaceName, resourceGroup);
    };
    return az_servicebus_namespace_network_rule;
}());
exports.az_servicebus_namespace_network_rule = az_servicebus_namespace_network_rule;
/** Manage Azure Service Bus Namespace. */
var az_servicebus_namespace = /** @class */ (function () {
    function az_servicebus_namespace() {
    }
    /**
     * Create a Service Bus Namespace.
     *
     * Syntax:
     * ```
     * az servicebus namespace create --name
     *                                --resource-group
     *                                [--capacity {1, 2, 4, 8}]
     *                                [--default-action]
     *                                [--location]
     *                                [--sku {Basic, Premium, Standard}]
     *                                [--subscription]
     *                                [--tags]
     * ```
     *
     * @param {string} name Name of Namespace.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_servicebus_namespace.create = function (name, resourceGroup) {
        return new az_servicebus_namespace_create_command_builder("az servicebus namespace create", 'az_servicebus_namespace_create_command_result', name, resourceGroup);
    };
    /**
     * Deletes the Service Bus Namespace.
     *
     * Syntax:
     * ```
     * az servicebus namespace delete [--ids]
     *                                [--name]
     *                                [--resource-group]
     *                                [--subscription]
     * ```
     */
    az_servicebus_namespace["delete"] = function () {
        return new az_servicebus_namespace_delete_command_builder("az servicebus namespace delete", 'az_servicebus_namespace_delete_command_result');
    };
    /**
     * Check for the availability of the given name for the Namespace.
     *
     * Syntax:
     * ```
     * az servicebus namespace exists --name
     *                                [--subscription]
     * ```
     *
     * @param {string} name Namespace name. Name can contain only letters, numbers, and hyphens. The namespace must start with a letter, and it must end with a letter or number.
     */
    az_servicebus_namespace.exists = function (name) {
        return new az_servicebus_namespace_exists_command_builder("az servicebus namespace exists", 'az_servicebus_namespace_exists_command_result', name);
    };
    /**
     * List the Service Bus Namespaces.
     *
     * Syntax:
     * ```
     * az servicebus namespace list [--query-examples]
     *                              [--resource-group]
     *                              [--subscription]
     * ```
     */
    az_servicebus_namespace.list = function () {
        return new az_servicebus_namespace_list_command_builder("az servicebus namespace list", 'az_servicebus_namespace_list_command_result');
    };
    /**
     * Shows the Service Bus Namespace details.
     *
     * Syntax:
     * ```
     * az servicebus namespace show [--ids]
     *                              [--name]
     *                              [--query-examples]
     *                              [--resource-group]
     *                              [--subscription]
     * ```
     */
    az_servicebus_namespace.show = function () {
        return new az_servicebus_namespace_show_command_builder("az servicebus namespace show", 'az_servicebus_namespace_show_command_result');
    };
    /**
     * Updates a Service Bus Namespace.
     *
     * Syntax:
     * ```
     * az servicebus namespace update [--add]
     *                                [--capacity {1, 2, 4, 8}]
     *                                [--default-action]
     *                                [--force-string]
     *                                [--ids]
     *                                [--name]
     *                                [--remove]
     *                                [--resource-group]
     *                                [--set]
     *                                [--sku {Basic, Premium, Standard}]
     *                                [--subscription]
     *                                [--tags]
     * ```
     */
    az_servicebus_namespace.update = function () {
        return new az_servicebus_namespace_update_command_builder("az servicebus namespace update", 'az_servicebus_namespace_update_command_result');
    };
    return az_servicebus_namespace;
}());
exports.az_servicebus_namespace = az_servicebus_namespace;
/** Manage Azure Authorization Rule keys for Service Bus Queue. */
var az_servicebus_queue_authorization_rule_keys = /** @class */ (function () {
    function az_servicebus_queue_authorization_rule_keys() {
    }
    /**
     * List the keys and connection strings of Authorization Rule for the given Service Bus Queue.
     *
     * Syntax:
     * ```
     * az servicebus queue authorization-rule keys list --name
     *                                                  --namespace-name
     *                                                  --queue-name
     *                                                  --resource-group
     *                                                  [--query-examples]
     *                                                  [--subscription]
     * ```
     *
     * @param {string} name Name of Queue Authorization Rule.
     * @param {string} namespaceName Name of Namespace.
     * @param {string} queueName Name of Queue.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_servicebus_queue_authorization_rule_keys.list = function (name, namespaceName, queueName, resourceGroup) {
        return new az_servicebus_queue_authorization_rule_keys_list_command_builder("az servicebus queue authorization-rule keys list", 'az_servicebus_queue_authorization_rule_keys_list_command_result', name, namespaceName, queueName, resourceGroup);
    };
    /**
     * Regenerate keys of Authorization Rule for Service Bus Queue.
     *
     * Syntax:
     * ```
     * az servicebus queue authorization-rule keys renew --key {PrimaryKey, SecondaryKey}
     *                                                   [--ids]
     *                                                   [--key-value]
     *                                                   [--name]
     *                                                   [--namespace-name]
     *                                                   [--queue-name]
     *                                                   [--resource-group]
     *                                                   [--subscription]
     * ```
     *
     * @param {'PrimaryKey' | 'SecondaryKey'} key Specifies Primary or Secondary key needs to be reset.
     */
    az_servicebus_queue_authorization_rule_keys.renew = function (key) {
        return new az_servicebus_queue_authorization_rule_keys_renew_command_builder("az servicebus queue authorization-rule keys renew", 'az_servicebus_queue_authorization_rule_keys_renew_command_result', key);
    };
    return az_servicebus_queue_authorization_rule_keys;
}());
exports.az_servicebus_queue_authorization_rule_keys = az_servicebus_queue_authorization_rule_keys;
/** Manage Azure Service Bus Queue Authorization Rule. */
var az_servicebus_queue_authorization_rule = /** @class */ (function () {
    function az_servicebus_queue_authorization_rule() {
    }
    /**
     * Create Authorization Rule for the given Service Bus Queue.
     *
     * Syntax:
     * ```
     * az servicebus queue authorization-rule create --name
     *                                               --namespace-name
     *                                               --queue-name
     *                                               --resource-group
     *                                               --rights {Listen, Manage, Send}
     *                                               [--subscription]
     * ```
     *
     * @param {string} name Name of Queue Authorization Rule.
     * @param {string} namespaceName Name of Namespace.
     * @param {string} queueName Name of Queue.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {'Listen' | 'Manage' | 'Send'} rights Space-separated list of Authorization rule rights.
     */
    az_servicebus_queue_authorization_rule.create = function (name, namespaceName, queueName, resourceGroup, rights) {
        return new az_servicebus_queue_authorization_rule_create_command_builder("az servicebus queue authorization-rule create", 'az_servicebus_queue_authorization_rule_create_command_result', name, namespaceName, queueName, resourceGroup, rights);
    };
    /**
     * Delete the Authorization Rule of Service Bus Queue.
     *
     * Syntax:
     * ```
     * az servicebus queue authorization-rule delete [--ids]
     *                                               [--name]
     *                                               [--namespace-name]
     *                                               [--queue-name]
     *                                               [--resource-group]
     *                                               [--subscription]
     * ```
     */
    az_servicebus_queue_authorization_rule["delete"] = function () {
        return new az_servicebus_queue_authorization_rule_delete_command_builder("az servicebus queue authorization-rule delete", 'az_servicebus_queue_authorization_rule_delete_command_result');
    };
    /**
     * List of Authorization Rule by Service Bus Queue.
     *
     * Syntax:
     * ```
     * az servicebus queue authorization-rule list --namespace-name
     *                                             --queue-name
     *                                             --resource-group
     *                                             [--query-examples]
     *                                             [--subscription]
     * ```
     *
     * @param {string} namespaceName Name of Namespace.
     * @param {string} queueName Name of Queue.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_servicebus_queue_authorization_rule.list = function (namespaceName, queueName, resourceGroup) {
        return new az_servicebus_queue_authorization_rule_list_command_builder("az servicebus queue authorization-rule list", 'az_servicebus_queue_authorization_rule_list_command_result', namespaceName, queueName, resourceGroup);
    };
    /**
     * Show properties of Authorization Rule for the given Service Bus Queue.
     *
     * Syntax:
     * ```
     * az servicebus queue authorization-rule show [--ids]
     *                                             [--name]
     *                                             [--namespace-name]
     *                                             [--query-examples]
     *                                             [--queue-name]
     *                                             [--resource-group]
     *                                             [--subscription]
     * ```
     */
    az_servicebus_queue_authorization_rule.show = function () {
        return new az_servicebus_queue_authorization_rule_show_command_builder("az servicebus queue authorization-rule show", 'az_servicebus_queue_authorization_rule_show_command_result');
    };
    /**
     * Update Authorization Rule for the given Service Bus Queue.
     *
     * Syntax:
     * ```
     * az servicebus queue authorization-rule update --rights {Listen, Manage, Send}
     *                                               [--add]
     *                                               [--force-string]
     *                                               [--ids]
     *                                               [--name]
     *                                               [--namespace-name]
     *                                               [--queue-name]
     *                                               [--remove]
     *                                               [--resource-group]
     *                                               [--set]
     *                                               [--subscription]
     * ```
     *
     * @param {'Listen' | 'Manage' | 'Send'} rights Space-separated list of Authorization rule rights.
     */
    az_servicebus_queue_authorization_rule.update = function (rights) {
        return new az_servicebus_queue_authorization_rule_update_command_builder("az servicebus queue authorization-rule update", 'az_servicebus_queue_authorization_rule_update_command_result', rights);
    };
    return az_servicebus_queue_authorization_rule;
}());
exports.az_servicebus_queue_authorization_rule = az_servicebus_queue_authorization_rule;
/** Manage Azure Service Bus Queue and Authorization Rule. */
var az_servicebus_queue = /** @class */ (function () {
    function az_servicebus_queue() {
    }
    /**
     * Create the Service Bus Queue.
     *
     * Syntax:
     * ```
     * az servicebus queue create --name
     *                            --namespace-name
     *                            --resource-group
     *                            [--auto-delete-on-idle]
     *                            [--default-message-time-to-live]
     *                            [--duplicate-detection-history-time-window]
     *                            [--enable-batched-operations {false, true}]
     *                            [--enable-dead-lettering-on-message-expiration {false, true}]
     *                            [--enable-duplicate-detection {false, true}]
     *                            [--enable-express {false, true}]
     *                            [--enable-partitioning {false, true}]
     *                            [--enable-session {false, true}]
     *                            [--forward-dead-lettered-messages-to]
     *                            [--forward-to]
     *                            [--lock-duration]
     *                            [--max-delivery-count]
     *                            [--max-size {1024, 10240, 2048, 20480, 3072, 4096, 40960, 5120, 81920}]
     *                            [--status {Active, Disabled, SendDisabled}]
     *                            [--subscription]
     * ```
     *
     * @param {string} name Name of Queue.
     * @param {string} namespaceName Name of Namespace.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_servicebus_queue.create = function (name, namespaceName, resourceGroup) {
        return new az_servicebus_queue_create_command_builder("az servicebus queue create", 'az_servicebus_queue_create_command_result', name, namespaceName, resourceGroup);
    };
    /**
     * Deletes the Service Bus Queue.
     *
     * Syntax:
     * ```
     * az servicebus queue delete [--ids]
     *                            [--name]
     *                            [--namespace-name]
     *                            [--resource-group]
     *                            [--subscription]
     * ```
     */
    az_servicebus_queue["delete"] = function () {
        return new az_servicebus_queue_delete_command_builder("az servicebus queue delete", 'az_servicebus_queue_delete_command_result');
    };
    /**
     * List the Queue by Service Bus Namepsace.
     *
     * Syntax:
     * ```
     * az servicebus queue list --namespace-name
     *                          --resource-group
     *                          [--query-examples]
     *                          [--skip]
     *                          [--subscription]
     *                          [--top]
     * ```
     *
     * @param {string} namespaceName Name of Namespace.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_servicebus_queue.list = function (namespaceName, resourceGroup) {
        return new az_servicebus_queue_list_command_builder("az servicebus queue list", 'az_servicebus_queue_list_command_result', namespaceName, resourceGroup);
    };
    /**
     * Shows the Service Bus Queue Details.
     *
     * Syntax:
     * ```
     * az servicebus queue show [--ids]
     *                          [--name]
     *                          [--namespace-name]
     *                          [--query-examples]
     *                          [--resource-group]
     *                          [--subscription]
     * ```
     */
    az_servicebus_queue.show = function () {
        return new az_servicebus_queue_show_command_builder("az servicebus queue show", 'az_servicebus_queue_show_command_result');
    };
    /**
     * Updates existing Service Bus Queue.
     *
     * Syntax:
     * ```
     * az servicebus queue update [--add]
     *                            [--auto-delete-on-idle]
     *                            [--default-message-time-to-live]
     *                            [--duplicate-detection-history-time-window]
     *                            [--enable-batched-operations {false, true}]
     *                            [--enable-dead-lettering-on-message-expiration {false, true}]
     *                            [--enable-duplicate-detection {false, true}]
     *                            [--enable-express {false, true}]
     *                            [--enable-partitioning {false, true}]
     *                            [--enable-session {false, true}]
     *                            [--force-string]
     *                            [--forward-dead-lettered-messages-to]
     *                            [--forward-to]
     *                            [--ids]
     *                            [--lock-duration]
     *                            [--max-delivery-count]
     *                            [--max-size {1024, 10240, 2048, 20480, 3072, 4096, 40960, 5120, 81920}]
     *                            [--name]
     *                            [--namespace-name]
     *                            [--remove]
     *                            [--resource-group]
     *                            [--set]
     *                            [--status {Active, Disabled, SendDisabled}]
     *                            [--subscription]
     * ```
     */
    az_servicebus_queue.update = function () {
        return new az_servicebus_queue_update_command_builder("az servicebus queue update", 'az_servicebus_queue_update_command_result');
    };
    return az_servicebus_queue;
}());
exports.az_servicebus_queue = az_servicebus_queue;
/** Manage Azure Authorization Rule keys for Service Bus Topic. */
var az_servicebus_topic_authorization_rule_keys = /** @class */ (function () {
    function az_servicebus_topic_authorization_rule_keys() {
    }
    /**
     * List the keys and connection strings of Authorization Rule for Service Bus Topic.
     *
     * Syntax:
     * ```
     * az servicebus topic authorization-rule keys list --name
     *                                                  --namespace-name
     *                                                  --resource-group
     *                                                  --topic-name
     *                                                  [--query-examples]
     *                                                  [--subscription]
     * ```
     *
     * @param {string} name Name of Topic Authorization Rule.
     * @param {string} namespaceName Name of Namespace.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} topicName Name of Topic.
     */
    az_servicebus_topic_authorization_rule_keys.list = function (name, namespaceName, resourceGroup, topicName) {
        return new az_servicebus_topic_authorization_rule_keys_list_command_builder("az servicebus topic authorization-rule keys list", 'az_servicebus_topic_authorization_rule_keys_list_command_result', name, namespaceName, resourceGroup, topicName);
    };
    /**
     * Regenerate keys of Authorization Rule for Service Bus Topic.
     *
     * Syntax:
     * ```
     * az servicebus topic authorization-rule keys renew --key {PrimaryKey, SecondaryKey}
     *                                                   [--ids]
     *                                                   [--key-value]
     *                                                   [--name]
     *                                                   [--namespace-name]
     *                                                   [--resource-group]
     *                                                   [--subscription]
     *                                                   [--topic-name]
     * ```
     *
     * @param {'PrimaryKey' | 'SecondaryKey'} key Specifies Primary or Secondary key needs to be reset.
     */
    az_servicebus_topic_authorization_rule_keys.renew = function (key) {
        return new az_servicebus_topic_authorization_rule_keys_renew_command_builder("az servicebus topic authorization-rule keys renew", 'az_servicebus_topic_authorization_rule_keys_renew_command_result', key);
    };
    return az_servicebus_topic_authorization_rule_keys;
}());
exports.az_servicebus_topic_authorization_rule_keys = az_servicebus_topic_authorization_rule_keys;
/** Manage Azure Service Bus Topic Authorization Rule. */
var az_servicebus_topic_authorization_rule = /** @class */ (function () {
    function az_servicebus_topic_authorization_rule() {
    }
    /**
     * Create Authorization Rule for given Service Bus Topic.
     *
     * Syntax:
     * ```
     * az servicebus topic authorization-rule create --name
     *                                               --namespace-name
     *                                               --resource-group
     *                                               --rights {Listen, Manage, Send}
     *                                               --topic-name
     *                                               [--subscription]
     * ```
     *
     * @param {string} name Name of Topic Authorization Rule.
     * @param {string} namespaceName Name of Namespace.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {'Listen' | 'Manage' | 'Send'} rights Space-separated list of Authorization rule rights.
     * @param {string} topicName Name of Topic.
     */
    az_servicebus_topic_authorization_rule.create = function (name, namespaceName, resourceGroup, rights, topicName) {
        return new az_servicebus_topic_authorization_rule_create_command_builder("az servicebus topic authorization-rule create", 'az_servicebus_topic_authorization_rule_create_command_result', name, namespaceName, resourceGroup, rights, topicName);
    };
    /**
     * Deletes the Authorization Rule of the given Service Bus Topic.
     *
     * Syntax:
     * ```
     * az servicebus topic authorization-rule delete [--ids]
     *                                               [--name]
     *                                               [--namespace-name]
     *                                               [--resource-group]
     *                                               [--subscription]
     *                                               [--topic-name]
     * ```
     */
    az_servicebus_topic_authorization_rule["delete"] = function () {
        return new az_servicebus_topic_authorization_rule_delete_command_builder("az servicebus topic authorization-rule delete", 'az_servicebus_topic_authorization_rule_delete_command_result');
    };
    /**
     * Shows list of Authorization Rule by Service Bus Topic.
     *
     * Syntax:
     * ```
     * az servicebus topic authorization-rule list --namespace-name
     *                                             --resource-group
     *                                             --topic-name
     *                                             [--query-examples]
     *                                             [--subscription]
     * ```
     *
     * @param {string} namespaceName Name of Namespace.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} topicName Name of Topic.
     */
    az_servicebus_topic_authorization_rule.list = function (namespaceName, resourceGroup, topicName) {
        return new az_servicebus_topic_authorization_rule_list_command_builder("az servicebus topic authorization-rule list", 'az_servicebus_topic_authorization_rule_list_command_result', namespaceName, resourceGroup, topicName);
    };
    /**
     * Shows the details of Authorization Rule for given Service Bus Topic.
     *
     * Syntax:
     * ```
     * az servicebus topic authorization-rule show [--ids]
     *                                             [--name]
     *                                             [--namespace-name]
     *                                             [--query-examples]
     *                                             [--resource-group]
     *                                             [--subscription]
     *                                             [--topic-name]
     * ```
     */
    az_servicebus_topic_authorization_rule.show = function () {
        return new az_servicebus_topic_authorization_rule_show_command_builder("az servicebus topic authorization-rule show", 'az_servicebus_topic_authorization_rule_show_command_result');
    };
    /**
     * Create Authorization Rule for given Service Bus Topic.
     *
     * Syntax:
     * ```
     * az servicebus topic authorization-rule update --rights {Listen, Manage, Send}
     *                                               [--add]
     *                                               [--force-string]
     *                                               [--ids]
     *                                               [--name]
     *                                               [--namespace-name]
     *                                               [--remove]
     *                                               [--resource-group]
     *                                               [--set]
     *                                               [--subscription]
     *                                               [--topic-name]
     * ```
     *
     * @param {'Listen' | 'Manage' | 'Send'} rights Space-separated list of Authorization rule rights.
     */
    az_servicebus_topic_authorization_rule.update = function (rights) {
        return new az_servicebus_topic_authorization_rule_update_command_builder("az servicebus topic authorization-rule update", 'az_servicebus_topic_authorization_rule_update_command_result', rights);
    };
    return az_servicebus_topic_authorization_rule;
}());
exports.az_servicebus_topic_authorization_rule = az_servicebus_topic_authorization_rule;
/** Manage Azure Service Bus Rule. */
var az_servicebus_topic_subscription_rule = /** @class */ (function () {
    function az_servicebus_topic_subscription_rule() {
    }
    /**
     * Create the ServiceBus Rule for Subscription.
     *
     * Syntax:
     * ```
     * az servicebus topic subscription rule create --name
     *                                              --namespace-name
     *                                              --resource-group
     *                                              --subscription-name
     *                                              --topic-name
     *                                              [--action-compatibility-level]
     *                                              [--action-sql-expression]
     *                                              [--content-type]
     *                                              [--correlation-id]
     *                                              [--enable-action-preprocessing {false, true}]
     *                                              [--enable-correlation-preprocessing {false, true}]
     *                                              [--enable-sql-preprocessing {false, true}]
     *                                              [--filter-sql-expression]
     *                                              [--label]
     *                                              [--message-id]
     *                                              [--reply-to]
     *                                              [--reply-to-session-id]
     *                                              [--session-id]
     *                                              [--subscription]
     *                                              [--to]
     * ```
     *
     * @param {string} name Name of Rule.
     * @param {string} namespaceName Name of Namespace.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} subscriptionName Name of Subscription.
     * @param {string} topicName Name of Topic.
     */
    az_servicebus_topic_subscription_rule.create = function (name, namespaceName, resourceGroup, subscriptionName, topicName) {
        return new az_servicebus_topic_subscription_rule_create_command_builder("az servicebus topic subscription rule create", 'az_servicebus_topic_subscription_rule_create_command_result', name, namespaceName, resourceGroup, subscriptionName, topicName);
    };
    /**
     * Deletes the ServiceBus Rule.
     *
     * Syntax:
     * ```
     * az servicebus topic subscription rule delete [--ids]
     *                                              [--name]
     *                                              [--namespace-name]
     *                                              [--resource-group]
     *                                              [--subscription]
     *                                              [--subscription-name]
     *                                              [--topic-name]
     * ```
     */
    az_servicebus_topic_subscription_rule["delete"] = function () {
        return new az_servicebus_topic_subscription_rule_delete_command_builder("az servicebus topic subscription rule delete", 'az_servicebus_topic_subscription_rule_delete_command_result');
    };
    /**
     * List the ServiceBus Rule by Subscription.
     *
     * Syntax:
     * ```
     * az servicebus topic subscription rule list --namespace-name
     *                                            --resource-group
     *                                            --subscription-name
     *                                            --topic-name
     *                                            [--query-examples]
     *                                            [--skip]
     *                                            [--subscription]
     *                                            [--top]
     * ```
     *
     * @param {string} namespaceName Name of Namespace.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} subscriptionName Name of Subscription.
     * @param {string} topicName Name of Topic.
     */
    az_servicebus_topic_subscription_rule.list = function (namespaceName, resourceGroup, subscriptionName, topicName) {
        return new az_servicebus_topic_subscription_rule_list_command_builder("az servicebus topic subscription rule list", 'az_servicebus_topic_subscription_rule_list_command_result', namespaceName, resourceGroup, subscriptionName, topicName);
    };
    /**
     * Shows ServiceBus Rule Details.
     *
     * Syntax:
     * ```
     * az servicebus topic subscription rule show [--ids]
     *                                            [--name]
     *                                            [--namespace-name]
     *                                            [--query-examples]
     *                                            [--resource-group]
     *                                            [--subscription]
     *                                            [--subscription-name]
     *                                            [--topic-name]
     * ```
     */
    az_servicebus_topic_subscription_rule.show = function () {
        return new az_servicebus_topic_subscription_rule_show_command_builder("az servicebus topic subscription rule show", 'az_servicebus_topic_subscription_rule_show_command_result');
    };
    /**
     * Updates the ServiceBus Rule for Subscription.
     *
     * Syntax:
     * ```
     * az servicebus topic subscription rule update [--action-compatibility-level]
     *                                              [--action-sql-expression]
     *                                              [--add]
     *                                              [--content-type]
     *                                              [--correlation-id]
     *                                              [--enable-action-preprocessing {false, true}]
     *                                              [--enable-correlation-preprocessing {false, true}]
     *                                              [--enable-sql-preprocessing {false, true}]
     *                                              [--filter-sql-expression]
     *                                              [--force-string]
     *                                              [--ids]
     *                                              [--label]
     *                                              [--message-id]
     *                                              [--name]
     *                                              [--namespace-name]
     *                                              [--remove]
     *                                              [--reply-to]
     *                                              [--reply-to-session-id]
     *                                              [--resource-group]
     *                                              [--session-id]
     *                                              [--set]
     *                                              [--subscription]
     *                                              [--subscription-name]
     *                                              [--to]
     *                                              [--topic-name]
     * ```
     */
    az_servicebus_topic_subscription_rule.update = function () {
        return new az_servicebus_topic_subscription_rule_update_command_builder("az servicebus topic subscription rule update", 'az_servicebus_topic_subscription_rule_update_command_result');
    };
    return az_servicebus_topic_subscription_rule;
}());
exports.az_servicebus_topic_subscription_rule = az_servicebus_topic_subscription_rule;
/** Manage Azure Service Bus Subscription. */
var az_servicebus_topic_subscription = /** @class */ (function () {
    function az_servicebus_topic_subscription() {
    }
    /**
     * Create the ServiceBus Subscription.
     *
     * Syntax:
     * ```
     * az servicebus topic subscription create --name
     *                                         --namespace-name
     *                                         --resource-group
     *                                         --topic-name
     *                                         [--auto-delete-on-idle]
     *                                         [--dead-letter-on-filter-exceptions {false, true}]
     *                                         [--default-message-time-to-live]
     *                                         [--enable-batched-operations {false, true}]
     *                                         [--enable-dead-lettering-on-message-expiration {false, true}]
     *                                         [--enable-session {false, true}]
     *                                         [--forward-dead-lettered-messages-to]
     *                                         [--forward-to]
     *                                         [--lock-duration]
     *                                         [--max-delivery-count]
     *                                         [--status {Active, Disabled, ReceiveDisabled, SendDisabled}]
     *                                         [--subscription]
     * ```
     *
     * @param {string} name Name of Subscription.
     * @param {string} namespaceName Name of Namespace.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} topicName Name of Topic.
     */
    az_servicebus_topic_subscription.create = function (name, namespaceName, resourceGroup, topicName) {
        return new az_servicebus_topic_subscription_create_command_builder("az servicebus topic subscription create", 'az_servicebus_topic_subscription_create_command_result', name, namespaceName, resourceGroup, topicName);
    };
    /**
     * Deletes the Service Bus Subscription.
     *
     * Syntax:
     * ```
     * az servicebus topic subscription delete [--ids]
     *                                         [--name]
     *                                         [--namespace-name]
     *                                         [--resource-group]
     *                                         [--subscription]
     *                                         [--topic-name]
     * ```
     */
    az_servicebus_topic_subscription["delete"] = function () {
        return new az_servicebus_topic_subscription_delete_command_builder("az servicebus topic subscription delete", 'az_servicebus_topic_subscription_delete_command_result');
    };
    /**
     * List the Subscription by Service Bus Topic.
     *
     * Syntax:
     * ```
     * az servicebus topic subscription list --namespace-name
     *                                       --resource-group
     *                                       --topic-name
     *                                       [--query-examples]
     *                                       [--skip]
     *                                       [--subscription]
     *                                       [--top]
     * ```
     *
     * @param {string} namespaceName Name of Namespace.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} topicName Name of Topic.
     */
    az_servicebus_topic_subscription.list = function (namespaceName, resourceGroup, topicName) {
        return new az_servicebus_topic_subscription_list_command_builder("az servicebus topic subscription list", 'az_servicebus_topic_subscription_list_command_result', namespaceName, resourceGroup, topicName);
    };
    /**
     * Shows Service Bus Subscription Details.
     *
     * Syntax:
     * ```
     * az servicebus topic subscription show [--ids]
     *                                       [--name]
     *                                       [--namespace-name]
     *                                       [--query-examples]
     *                                       [--resource-group]
     *                                       [--subscription]
     *                                       [--topic-name]
     * ```
     */
    az_servicebus_topic_subscription.show = function () {
        return new az_servicebus_topic_subscription_show_command_builder("az servicebus topic subscription show", 'az_servicebus_topic_subscription_show_command_result');
    };
    /**
     * Updates the ServiceBus Subscription.
     *
     * Syntax:
     * ```
     * az servicebus topic subscription update [--add]
     *                                         [--auto-delete-on-idle]
     *                                         [--dead-letter-on-filter-exceptions {false, true}]
     *                                         [--default-message-time-to-live]
     *                                         [--enable-batched-operations {false, true}]
     *                                         [--enable-dead-lettering-on-message-expiration {false, true}]
     *                                         [--enable-session {false, true}]
     *                                         [--force-string]
     *                                         [--forward-dead-lettered-messages-to]
     *                                         [--forward-to]
     *                                         [--ids]
     *                                         [--lock-duration]
     *                                         [--max-delivery-count]
     *                                         [--name]
     *                                         [--namespace-name]
     *                                         [--remove]
     *                                         [--resource-group]
     *                                         [--set]
     *                                         [--status {Active, Disabled, ReceiveDisabled, SendDisabled}]
     *                                         [--subscription]
     *                                         [--topic-name]
     * ```
     */
    az_servicebus_topic_subscription.update = function () {
        return new az_servicebus_topic_subscription_update_command_builder("az servicebus topic subscription update", 'az_servicebus_topic_subscription_update_command_result');
    };
    return az_servicebus_topic_subscription;
}());
exports.az_servicebus_topic_subscription = az_servicebus_topic_subscription;
/** Manage Azure Service Bus Topic and Authorization Rule. */
var az_servicebus_topic = /** @class */ (function () {
    function az_servicebus_topic() {
    }
    /**
     * Create the Service Bus Topic.
     *
     * Syntax:
     * ```
     * az servicebus topic create --name
     *                            --namespace-name
     *                            --resource-group
     *                            [--auto-delete-on-idle]
     *                            [--default-message-time-to-live]
     *                            [--duplicate-detection-history-time-window]
     *                            [--enable-batched-operations {false, true}]
     *                            [--enable-duplicate-detection {false, true}]
     *                            [--enable-express {false, true}]
     *                            [--enable-ordering {false, true}]
     *                            [--enable-partitioning {false, true}]
     *                            [--max-size {1024, 10240, 2048, 20480, 3072, 4096, 40960, 5120, 81920}]
     *                            [--status {Active, Disabled, SendDisabled}]
     *                            [--subscription]
     * ```
     *
     * @param {string} name Name of Topic.
     * @param {string} namespaceName Name of Namespace.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_servicebus_topic.create = function (name, namespaceName, resourceGroup) {
        return new az_servicebus_topic_create_command_builder("az servicebus topic create", 'az_servicebus_topic_create_command_result', name, namespaceName, resourceGroup);
    };
    /**
     * Deletes the Service Bus Topic.
     *
     * Syntax:
     * ```
     * az servicebus topic delete [--ids]
     *                            [--name]
     *                            [--namespace-name]
     *                            [--resource-group]
     *                            [--subscription]
     * ```
     */
    az_servicebus_topic["delete"] = function () {
        return new az_servicebus_topic_delete_command_builder("az servicebus topic delete", 'az_servicebus_topic_delete_command_result');
    };
    /**
     * List the Topic by Service Bus Namepsace.
     *
     * Syntax:
     * ```
     * az servicebus topic list --namespace-name
     *                          --resource-group
     *                          [--query-examples]
     *                          [--skip]
     *                          [--subscription]
     *                          [--top]
     * ```
     *
     * @param {string} namespaceName Name of Namespace.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_servicebus_topic.list = function (namespaceName, resourceGroup) {
        return new az_servicebus_topic_list_command_builder("az servicebus topic list", 'az_servicebus_topic_list_command_result', namespaceName, resourceGroup);
    };
    /**
     * Shows the Service Bus Topic Details.
     *
     * Syntax:
     * ```
     * az servicebus topic show [--ids]
     *                          [--name]
     *                          [--namespace-name]
     *                          [--query-examples]
     *                          [--resource-group]
     *                          [--subscription]
     * ```
     */
    az_servicebus_topic.show = function () {
        return new az_servicebus_topic_show_command_builder("az servicebus topic show", 'az_servicebus_topic_show_command_result');
    };
    /**
     * Updates the Service Bus Topic.
     *
     * Syntax:
     * ```
     * az servicebus topic update [--add]
     *                            [--auto-delete-on-idle]
     *                            [--default-message-time-to-live]
     *                            [--duplicate-detection-history-time-window]
     *                            [--enable-batched-operations {false, true}]
     *                            [--enable-duplicate-detection {false, true}]
     *                            [--enable-express {false, true}]
     *                            [--enable-ordering {false, true}]
     *                            [--enable-partitioning {false, true}]
     *                            [--force-string]
     *                            [--ids]
     *                            [--max-size {1024, 10240, 2048, 20480, 3072, 4096, 40960, 5120, 81920}]
     *                            [--name]
     *                            [--namespace-name]
     *                            [--remove]
     *                            [--resource-group]
     *                            [--set]
     *                            [--status {Active, Disabled, SendDisabled}]
     *                            [--subscription]
     * ```
     */
    az_servicebus_topic.update = function () {
        return new az_servicebus_topic_update_command_builder("az servicebus topic update", 'az_servicebus_topic_update_command_result');
    };
    return az_servicebus_topic;
}());
exports.az_servicebus_topic = az_servicebus_topic;
/** Manage Azure Service Bus namespaces, queues, topics, subscriptions, rules and geo-disaster recovery configuration alias. */
var az_servicebus = /** @class */ (function () {
    function az_servicebus() {
    }
    return az_servicebus;
}());
exports.az_servicebus = az_servicebus;
/**
 * List the keys and connection strings of Authorization Rule for the Service Bus Namespace.
 *
 * Syntax:
 * ```
 * az servicebus georecovery-alias authorization-rule keys list --alias
 *                                                              --name
 *                                                              --namespace-name
 *                                                              --resource-group
 *                                                              [--query-examples]
 *                                                              [--subscription]
 * ```
 *
 * @param {string} alias Name of Geo-Disaster Recovery Configuration Alias.
 * @param {string} name Name of Namespace AuthorizationRule.
 * @param {string} namespaceName Name of Namespace.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_servicebus_georecovery_alias_authorization_rule_keys_list_command_builder = /** @class */ (function (_super) {
    __extends(az_servicebus_georecovery_alias_authorization_rule_keys_list_command_builder, _super);
    function az_servicebus_georecovery_alias_authorization_rule_keys_list_command_builder(commandPath, resultDataTypeName, alias, name, namespaceName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.alias(alias);
        _this.name(name);
        _this.namespaceName(namespaceName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of Geo-Disaster Recovery Configuration Alias. */
    az_servicebus_georecovery_alias_authorization_rule_keys_list_command_builder.prototype.alias = function (value) {
        this.setFlag("--alias", value);
        return this;
    };
    /** Name of Namespace AuthorizationRule. */
    az_servicebus_georecovery_alias_authorization_rule_keys_list_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of Namespace. */
    az_servicebus_georecovery_alias_authorization_rule_keys_list_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_servicebus_georecovery_alias_authorization_rule_keys_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_servicebus_georecovery_alias_authorization_rule_keys_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_servicebus_georecovery_alias_authorization_rule_keys_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_servicebus_georecovery_alias_authorization_rule_keys_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Shows the list of Authorization Rule by Service Bus Namespace.
 *
 * Syntax:
 * ```
 * az servicebus georecovery-alias authorization-rule list --alias
 *                                                         --namespace-name
 *                                                         --resource-group
 *                                                         [--query-examples]
 *                                                         [--subscription]
 * ```
 *
 * @param {string} alias Name of Geo-Disaster Recovery Configuration Alias.
 * @param {string} namespaceName Name of Namespace.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_servicebus_georecovery_alias_authorization_rule_list_command_builder = /** @class */ (function (_super) {
    __extends(az_servicebus_georecovery_alias_authorization_rule_list_command_builder, _super);
    function az_servicebus_georecovery_alias_authorization_rule_list_command_builder(commandPath, resultDataTypeName, alias, namespaceName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.alias(alias);
        _this.namespaceName(namespaceName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of Geo-Disaster Recovery Configuration Alias. */
    az_servicebus_georecovery_alias_authorization_rule_list_command_builder.prototype.alias = function (value) {
        this.setFlag("--alias", value);
        return this;
    };
    /** Name of Namespace. */
    az_servicebus_georecovery_alias_authorization_rule_list_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_servicebus_georecovery_alias_authorization_rule_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_servicebus_georecovery_alias_authorization_rule_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_servicebus_georecovery_alias_authorization_rule_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_servicebus_georecovery_alias_authorization_rule_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Gets an authorization rule for a namespace by rule name.
 *
 * Syntax:
 * ```
 * az servicebus georecovery-alias authorization-rule show [--alias]
 *                                                         [--ids]
 *                                                         [--name]
 *                                                         [--namespace-name]
 *                                                         [--query-examples]
 *                                                         [--resource-group]
 *                                                         [--subscription]
 * ```
 */
var az_servicebus_georecovery_alias_authorization_rule_show_command_builder = /** @class */ (function (_super) {
    __extends(az_servicebus_georecovery_alias_authorization_rule_show_command_builder, _super);
    function az_servicebus_georecovery_alias_authorization_rule_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Name of the Geo-Disaster Recovery Configuration Alias. */
    az_servicebus_georecovery_alias_authorization_rule_show_command_builder.prototype.alias = function (value) {
        this.setFlag("--alias", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_servicebus_georecovery_alias_authorization_rule_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of Namespace Authorization Rule. */
    az_servicebus_georecovery_alias_authorization_rule_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of Namespace. */
    az_servicebus_georecovery_alias_authorization_rule_show_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_servicebus_georecovery_alias_authorization_rule_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_servicebus_georecovery_alias_authorization_rule_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_servicebus_georecovery_alias_authorization_rule_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_servicebus_georecovery_alias_authorization_rule_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Disables Service Bus Geo-Disaster Recovery Configuration Alias and stops replicating changes from primary to secondary namespaces.
 *
 * Syntax:
 * ```
 * az servicebus georecovery-alias break-pair [--alias]
 *                                            [--ids]
 *                                            [--namespace-name]
 *                                            [--resource-group]
 *                                            [--subscription]
 * ```
 */
var az_servicebus_georecovery_alias_break_pair_command_builder = /** @class */ (function (_super) {
    __extends(az_servicebus_georecovery_alias_break_pair_command_builder, _super);
    function az_servicebus_georecovery_alias_break_pair_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Name of the Geo-Disaster Recovery Configuration Alias. */
    az_servicebus_georecovery_alias_break_pair_command_builder.prototype.alias = function (value) {
        this.setFlag("--alias", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_servicebus_georecovery_alias_break_pair_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of Namespace. */
    az_servicebus_georecovery_alias_break_pair_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_servicebus_georecovery_alias_break_pair_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_servicebus_georecovery_alias_break_pair_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_servicebus_georecovery_alias_break_pair_command_builder;
}(base_1.CommandBuilder));
/**
 * Deletes Service Bus Geo-Disaster Recovery Configuration Alias request accepted.
 *
 * Syntax:
 * ```
 * az servicebus georecovery-alias delete [--alias]
 *                                        [--ids]
 *                                        [--namespace-name]
 *                                        [--resource-group]
 *                                        [--subscription]
 * ```
 */
var az_servicebus_georecovery_alias_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_servicebus_georecovery_alias_delete_command_builder, _super);
    function az_servicebus_georecovery_alias_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Name of the Geo-Disaster Recovery Configuration Alias. */
    az_servicebus_georecovery_alias_delete_command_builder.prototype.alias = function (value) {
        this.setFlag("--alias", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_servicebus_georecovery_alias_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of Namespace. */
    az_servicebus_georecovery_alias_delete_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_servicebus_georecovery_alias_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_servicebus_georecovery_alias_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_servicebus_georecovery_alias_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * Check if Geo Recovery Alias Name is available.
 *
 * Syntax:
 * ```
 * az servicebus georecovery-alias exists --alias
 *                                        --namespace-name
 *                                        --resource-group
 *                                        [--subscription]
 * ```
 *
 * @param {string} alias Name of Geo-Disaster Recovery Configuration Alias to check availability.
 * @param {string} namespaceName Name of Namespace.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_servicebus_georecovery_alias_exists_command_builder = /** @class */ (function (_super) {
    __extends(az_servicebus_georecovery_alias_exists_command_builder, _super);
    function az_servicebus_georecovery_alias_exists_command_builder(commandPath, resultDataTypeName, alias, namespaceName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.alias(alias);
        _this.namespaceName(namespaceName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of Geo-Disaster Recovery Configuration Alias to check availability. */
    az_servicebus_georecovery_alias_exists_command_builder.prototype.alias = function (value) {
        this.setFlag("--alias", value);
        return this;
    };
    /** Name of Namespace. */
    az_servicebus_georecovery_alias_exists_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_servicebus_georecovery_alias_exists_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_servicebus_georecovery_alias_exists_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_servicebus_georecovery_alias_exists_command_builder;
}(base_1.CommandBuilder));
/**
 * Invokes Service Bus Geo-Disaster Recovery Configuration Alias failover and re-configure the alias to point to the secondary namespace.
 *
 * Syntax:
 * ```
 * az servicebus georecovery-alias fail-over [--alias]
 *                                           [--ids]
 *                                           [--namespace-name]
 *                                           [--resource-group]
 *                                           [--subscription]
 * ```
 */
var az_servicebus_georecovery_alias_fail_over_command_builder = /** @class */ (function (_super) {
    __extends(az_servicebus_georecovery_alias_fail_over_command_builder, _super);
    function az_servicebus_georecovery_alias_fail_over_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Name of the Geo-Disaster Recovery Configuration Alias. */
    az_servicebus_georecovery_alias_fail_over_command_builder.prototype.alias = function (value) {
        this.setFlag("--alias", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_servicebus_georecovery_alias_fail_over_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of Namespace. */
    az_servicebus_georecovery_alias_fail_over_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_servicebus_georecovery_alias_fail_over_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_servicebus_georecovery_alias_fail_over_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_servicebus_georecovery_alias_fail_over_command_builder;
}(base_1.CommandBuilder));
/**
 * Gets all Alias(Disaster Recovery configurations).
 *
 * Syntax:
 * ```
 * az servicebus georecovery-alias list --namespace-name
 *                                      --resource-group
 *                                      [--query-examples]
 *                                      [--subscription]
 * ```
 *
 * @param {string} namespaceName Name of Namespace.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_servicebus_georecovery_alias_list_command_builder = /** @class */ (function (_super) {
    __extends(az_servicebus_georecovery_alias_list_command_builder, _super);
    function az_servicebus_georecovery_alias_list_command_builder(commandPath, resultDataTypeName, namespaceName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.namespaceName(namespaceName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of Namespace. */
    az_servicebus_georecovery_alias_list_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_servicebus_georecovery_alias_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_servicebus_georecovery_alias_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_servicebus_georecovery_alias_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_servicebus_georecovery_alias_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Sets Service Bus Geo-Disaster Recovery Configuration Alias for the give Namespace.
 *
 * Syntax:
 * ```
 * az servicebus georecovery-alias set --partner-namespace
 *                                     [--alias]
 *                                     [--alternate-name]
 *                                     [--ids]
 *                                     [--namespace-name]
 *                                     [--resource-group]
 *                                     [--subscription]
 * ```
 *
 * @param {string} partnerNamespace Name (if within the same resource group) or ARM Id of Primary/Secondary Service Bus  namespace name, which is part of GEO DR pairing.
 */
var az_servicebus_georecovery_alias_set_command_builder = /** @class */ (function (_super) {
    __extends(az_servicebus_georecovery_alias_set_command_builder, _super);
    function az_servicebus_georecovery_alias_set_command_builder(commandPath, resultDataTypeName, partnerNamespace) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.partnerNamespace(partnerNamespace);
        return _this;
    }
    /** Name (if within the same resource group) or ARM Id of Primary/Secondary Service Bus  namespace name, which is part of GEO DR pairing. */
    az_servicebus_georecovery_alias_set_command_builder.prototype.partnerNamespace = function (value) {
        this.setFlag("--partner-namespace", value);
        return this;
    };
    /** Name of the Geo-Disaster Recovery Configuration Alias. */
    az_servicebus_georecovery_alias_set_command_builder.prototype.alias = function (value) {
        this.setFlag("--alias", value);
        return this;
    };
    /** Alternate Name (Post failover) for Primary Namespace, when Namespace name and Alias name are same. */
    az_servicebus_georecovery_alias_set_command_builder.prototype.alternateName = function (value) {
        this.setFlag("--alternate-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_servicebus_georecovery_alias_set_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of Namespace. */
    az_servicebus_georecovery_alias_set_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_servicebus_georecovery_alias_set_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_servicebus_georecovery_alias_set_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_servicebus_georecovery_alias_set_command_builder;
}(base_1.CommandBuilder));
/**
 * Shows properties of Service Bus Geo-Disaster Recovery Configuration Alias for Primay/Secondary Namespace.
 *
 * Syntax:
 * ```
 * az servicebus georecovery-alias show [--alias]
 *                                      [--ids]
 *                                      [--namespace-name]
 *                                      [--query-examples]
 *                                      [--resource-group]
 *                                      [--subscription]
 * ```
 */
var az_servicebus_georecovery_alias_show_command_builder = /** @class */ (function (_super) {
    __extends(az_servicebus_georecovery_alias_show_command_builder, _super);
    function az_servicebus_georecovery_alias_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Name of the Geo-Disaster Recovery Configuration Alias. */
    az_servicebus_georecovery_alias_show_command_builder.prototype.alias = function (value) {
        this.setFlag("--alias", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_servicebus_georecovery_alias_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of Namespace. */
    az_servicebus_georecovery_alias_show_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_servicebus_georecovery_alias_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_servicebus_georecovery_alias_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_servicebus_georecovery_alias_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_servicebus_georecovery_alias_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Disable the Service Bus Migration of Standard to Premium namespace.
 *
 * Syntax:
 * ```
 * az servicebus migration abort [--ids]
 *                               [--name]
 *                               [--resource-group]
 *                               [--subscription]
 * ```
 */
var az_servicebus_migration_abort_command_builder = /** @class */ (function (_super) {
    __extends(az_servicebus_migration_abort_command_builder, _super);
    function az_servicebus_migration_abort_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_servicebus_migration_abort_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of Standard Namespace. */
    az_servicebus_migration_abort_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_servicebus_migration_abort_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_servicebus_migration_abort_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_servicebus_migration_abort_command_builder;
}(base_1.CommandBuilder));
/**
 * Completes the Service Bus Migration of Standard to Premium namespace.
 *
 * Syntax:
 * ```
 * az servicebus migration complete [--ids]
 *                                  [--name]
 *                                  [--resource-group]
 *                                  [--subscription]
 * ```
 */
var az_servicebus_migration_complete_command_builder = /** @class */ (function (_super) {
    __extends(az_servicebus_migration_complete_command_builder, _super);
    function az_servicebus_migration_complete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_servicebus_migration_complete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of Standard Namespace. */
    az_servicebus_migration_complete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_servicebus_migration_complete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_servicebus_migration_complete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_servicebus_migration_complete_command_builder;
}(base_1.CommandBuilder));
/**
 * Shows properties of properties of Service Bus Migration.
 *
 * Syntax:
 * ```
 * az servicebus migration show [--ids]
 *                              [--name]
 *                              [--query-examples]
 *                              [--resource-group]
 *                              [--subscription]
 * ```
 */
var az_servicebus_migration_show_command_builder = /** @class */ (function (_super) {
    __extends(az_servicebus_migration_show_command_builder, _super);
    function az_servicebus_migration_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_servicebus_migration_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of Standard Namespace. */
    az_servicebus_migration_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_servicebus_migration_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_servicebus_migration_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_servicebus_migration_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_servicebus_migration_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Create and Start Service Bus Migration of Standard to Premium namespace.
 *
 * Syntax:
 * ```
 * az servicebus migration start --post-migration-name
 *                               --target-namespace
 *                               [--ids]
 *                               [--name]
 *                               [--resource-group]
 *                               [--subscription]
 * ```
 *
 * @param {string} postMigrationName Post migration name is the name that can be used to connect to standard namespace after migration is complete.
 * @param {string} targetNamespace Name (if within the same resource group) or ARM Id of empty Premium Service Bus namespace name that will be target of the migration.
 */
var az_servicebus_migration_start_command_builder = /** @class */ (function (_super) {
    __extends(az_servicebus_migration_start_command_builder, _super);
    function az_servicebus_migration_start_command_builder(commandPath, resultDataTypeName, postMigrationName, targetNamespace) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.postMigrationName(postMigrationName);
        _this.targetNamespace(targetNamespace);
        return _this;
    }
    /** Post migration name is the name that can be used to connect to standard namespace after migration is complete. */
    az_servicebus_migration_start_command_builder.prototype.postMigrationName = function (value) {
        this.setFlag("--post-migration-name", value);
        return this;
    };
    /** Name (if within the same resource group) or ARM Id of empty Premium Service Bus namespace name that will be target of the migration. */
    az_servicebus_migration_start_command_builder.prototype.targetNamespace = function (value) {
        this.setFlag("--target-namespace", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_servicebus_migration_start_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of Standard Namespace used as source of the migration. */
    az_servicebus_migration_start_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_servicebus_migration_start_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_servicebus_migration_start_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_servicebus_migration_start_command_builder;
}(base_1.CommandBuilder));
/**
 * List the keys and connection strings of Authorization Rule for Service Bus Namespace.
 *
 * Syntax:
 * ```
 * az servicebus namespace authorization-rule keys list --name
 *                                                      --namespace-name
 *                                                      --resource-group
 *                                                      [--query-examples]
 *                                                      [--subscription]
 * ```
 *
 * @param {string} name Name of Namespace Authorization Rule.
 * @param {string} namespaceName Name of Namespace.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_servicebus_namespace_authorization_rule_keys_list_command_builder = /** @class */ (function (_super) {
    __extends(az_servicebus_namespace_authorization_rule_keys_list_command_builder, _super);
    function az_servicebus_namespace_authorization_rule_keys_list_command_builder(commandPath, resultDataTypeName, name, namespaceName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.namespaceName(namespaceName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of Namespace Authorization Rule. */
    az_servicebus_namespace_authorization_rule_keys_list_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of Namespace. */
    az_servicebus_namespace_authorization_rule_keys_list_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_servicebus_namespace_authorization_rule_keys_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_servicebus_namespace_authorization_rule_keys_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_servicebus_namespace_authorization_rule_keys_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_servicebus_namespace_authorization_rule_keys_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Regenerate keys of Authorization Rule for the Service Bus Namespace.
 *
 * Syntax:
 * ```
 * az servicebus namespace authorization-rule keys renew --key {PrimaryKey, SecondaryKey}
 *                                                       [--ids]
 *                                                       [--key-value]
 *                                                       [--name]
 *                                                       [--namespace-name]
 *                                                       [--resource-group]
 *                                                       [--subscription]
 * ```
 *
 * @param {'PrimaryKey' | 'SecondaryKey'} key Specifies Primary or Secondary key needs to be reset.
 */
var az_servicebus_namespace_authorization_rule_keys_renew_command_builder = /** @class */ (function (_super) {
    __extends(az_servicebus_namespace_authorization_rule_keys_renew_command_builder, _super);
    function az_servicebus_namespace_authorization_rule_keys_renew_command_builder(commandPath, resultDataTypeName, key) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.key(key);
        return _this;
    }
    /** Specifies Primary or Secondary key needs to be reset. */
    az_servicebus_namespace_authorization_rule_keys_renew_command_builder.prototype.key = function (value) {
        this.setFlag("--key", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_servicebus_namespace_authorization_rule_keys_renew_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Optional, if the key value provided, is set for KeyType or autogenerated Key value set for keyType. */
    az_servicebus_namespace_authorization_rule_keys_renew_command_builder.prototype.keyValue = function (value) {
        this.setFlag("--key-value", value);
        return this;
    };
    /** Name of Namespace Authorization Rule. */
    az_servicebus_namespace_authorization_rule_keys_renew_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of Namespace. */
    az_servicebus_namespace_authorization_rule_keys_renew_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_servicebus_namespace_authorization_rule_keys_renew_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_servicebus_namespace_authorization_rule_keys_renew_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_servicebus_namespace_authorization_rule_keys_renew_command_builder;
}(base_1.CommandBuilder));
/**
 * Create Authorization Rule for the given Service Bus Namespace.
 *
 * Syntax:
 * ```
 * az servicebus namespace authorization-rule create --name
 *                                                   --namespace-name
 *                                                   --resource-group
 *                                                   --rights {Listen, Manage, Send}
 *                                                   [--subscription]
 * ```
 *
 * @param {string} name Name of Namespace Authorization Rule.
 * @param {string} namespaceName Name of Namespace.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {'Listen' | 'Manage' | 'Send'} rights Space-separated list of Authorization rule rights.
 */
var az_servicebus_namespace_authorization_rule_create_command_builder = /** @class */ (function (_super) {
    __extends(az_servicebus_namespace_authorization_rule_create_command_builder, _super);
    function az_servicebus_namespace_authorization_rule_create_command_builder(commandPath, resultDataTypeName, name, namespaceName, resourceGroup, rights) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.namespaceName(namespaceName);
        _this.resourceGroup(resourceGroup);
        _this.rights(rights);
        return _this;
    }
    /** Name of Namespace Authorization Rule. */
    az_servicebus_namespace_authorization_rule_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of Namespace. */
    az_servicebus_namespace_authorization_rule_create_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_servicebus_namespace_authorization_rule_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Space-separated list of Authorization rule rights. */
    az_servicebus_namespace_authorization_rule_create_command_builder.prototype.rights = function (value) {
        this.setFlag("--rights", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_servicebus_namespace_authorization_rule_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_servicebus_namespace_authorization_rule_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Deletes the Authorization Rule of the Service Bus Namespace.
 *
 * Syntax:
 * ```
 * az servicebus namespace authorization-rule delete [--ids]
 *                                                   [--name]
 *                                                   [--namespace-name]
 *                                                   [--resource-group]
 *                                                   [--subscription]
 * ```
 */
var az_servicebus_namespace_authorization_rule_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_servicebus_namespace_authorization_rule_delete_command_builder, _super);
    function az_servicebus_namespace_authorization_rule_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_servicebus_namespace_authorization_rule_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of Namespace Authorization Rule. */
    az_servicebus_namespace_authorization_rule_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of Namespace. */
    az_servicebus_namespace_authorization_rule_delete_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_servicebus_namespace_authorization_rule_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_servicebus_namespace_authorization_rule_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_servicebus_namespace_authorization_rule_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * Shows the list of Authorization Rule by Service Bus Namespace.
 *
 * Syntax:
 * ```
 * az servicebus namespace authorization-rule list --namespace-name
 *                                                 --resource-group
 *                                                 [--query-examples]
 *                                                 [--subscription]
 * ```
 *
 * @param {string} namespaceName Name of the Namespace.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_servicebus_namespace_authorization_rule_list_command_builder = /** @class */ (function (_super) {
    __extends(az_servicebus_namespace_authorization_rule_list_command_builder, _super);
    function az_servicebus_namespace_authorization_rule_list_command_builder(commandPath, resultDataTypeName, namespaceName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.namespaceName(namespaceName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the Namespace. */
    az_servicebus_namespace_authorization_rule_list_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_servicebus_namespace_authorization_rule_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_servicebus_namespace_authorization_rule_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_servicebus_namespace_authorization_rule_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_servicebus_namespace_authorization_rule_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Shows the details of Service Bus Namespace Authorization Rule.
 *
 * Syntax:
 * ```
 * az servicebus namespace authorization-rule show [--ids]
 *                                                 [--name]
 *                                                 [--namespace-name]
 *                                                 [--query-examples]
 *                                                 [--resource-group]
 *                                                 [--subscription]
 * ```
 */
var az_servicebus_namespace_authorization_rule_show_command_builder = /** @class */ (function (_super) {
    __extends(az_servicebus_namespace_authorization_rule_show_command_builder, _super);
    function az_servicebus_namespace_authorization_rule_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_servicebus_namespace_authorization_rule_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of Namespace Authorization Rule. */
    az_servicebus_namespace_authorization_rule_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of Namespace. */
    az_servicebus_namespace_authorization_rule_show_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_servicebus_namespace_authorization_rule_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_servicebus_namespace_authorization_rule_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_servicebus_namespace_authorization_rule_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_servicebus_namespace_authorization_rule_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Updates Authorization Rule for the given Service Bus Namespace.
 *
 * Syntax:
 * ```
 * az servicebus namespace authorization-rule update --rights {Listen, Manage, Send}
 *                                                   [--add]
 *                                                   [--force-string]
 *                                                   [--ids]
 *                                                   [--name]
 *                                                   [--namespace-name]
 *                                                   [--remove]
 *                                                   [--resource-group]
 *                                                   [--set]
 *                                                   [--subscription]
 * ```
 *
 * @param {'Listen' | 'Manage' | 'Send'} rights Space-separated list of Authorization rule rights.
 */
var az_servicebus_namespace_authorization_rule_update_command_builder = /** @class */ (function (_super) {
    __extends(az_servicebus_namespace_authorization_rule_update_command_builder, _super);
    function az_servicebus_namespace_authorization_rule_update_command_builder(commandPath, resultDataTypeName, rights) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.rights(rights);
        return _this;
    }
    /** Space-separated list of Authorization rule rights. */
    az_servicebus_namespace_authorization_rule_update_command_builder.prototype.rights = function (value) {
        this.setFlag("--rights", value);
        return this;
    };
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_servicebus_namespace_authorization_rule_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_servicebus_namespace_authorization_rule_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_servicebus_namespace_authorization_rule_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of Namespace Authorization Rule. */
    az_servicebus_namespace_authorization_rule_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of Namespace. */
    az_servicebus_namespace_authorization_rule_update_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_servicebus_namespace_authorization_rule_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_servicebus_namespace_authorization_rule_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_servicebus_namespace_authorization_rule_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_servicebus_namespace_authorization_rule_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_servicebus_namespace_authorization_rule_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Add a network rule for a namespace.
 *
 * Syntax:
 * ```
 * az servicebus namespace network-rule add --namespace-name
 *                                          --resource-group
 *                                          [--action {Allow}]
 *                                          [--ignore-missing-endpoint {false, true}]
 *                                          [--ip-address]
 *                                          [--subnet]
 *                                          [--subscription]
 *                                          [--vnet-name]
 * ```
 *
 * @param {string} namespaceName Name of the Namespace.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_servicebus_namespace_network_rule_add_command_builder = /** @class */ (function (_super) {
    __extends(az_servicebus_namespace_network_rule_add_command_builder, _super);
    function az_servicebus_namespace_network_rule_add_command_builder(commandPath, resultDataTypeName, namespaceName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.namespaceName(namespaceName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the Namespace. */
    az_servicebus_namespace_network_rule_add_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_servicebus_namespace_network_rule_add_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Action of the IP rule. */
    az_servicebus_namespace_network_rule_add_command_builder.prototype.action = function (value) {
        this.setFlag("--action", value);
        return this;
    };
    /** A boolean value that indicates whether to ignore missing vnet Service Endpoint. */
    az_servicebus_namespace_network_rule_add_command_builder.prototype.ignoreMissingEndpoint = function (value) {
        this.setFlag("--ignore-missing-endpoint", value.toString());
        return this;
    };
    /** IPv4 address or CIDR range. */
    az_servicebus_namespace_network_rule_add_command_builder.prototype.ipAddress = function (value) {
        this.setFlag("--ip-address", value);
        return this;
    };
    /** Name or ID of subnet. If name is supplied, `--vnet-name` must be supplied. */
    az_servicebus_namespace_network_rule_add_command_builder.prototype.subnet = function (value) {
        this.setFlag("--subnet", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_servicebus_namespace_network_rule_add_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Name of the Virtual Network. */
    az_servicebus_namespace_network_rule_add_command_builder.prototype.vnetName = function (value) {
        this.setFlag("--vnet-name", value);
        return this;
    };
    return az_servicebus_namespace_network_rule_add_command_builder;
}(base_1.CommandBuilder));
/**
 * Show properties of Network rule of the given Namespace.
 *
 * Syntax:
 * ```
 * az servicebus namespace network-rule list --namespace-name
 *                                           --resource-group
 *                                           [--query-examples]
 *                                           [--subscription]
 * ```
 *
 * @param {string} namespaceName Name of the Namespace.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_servicebus_namespace_network_rule_list_command_builder = /** @class */ (function (_super) {
    __extends(az_servicebus_namespace_network_rule_list_command_builder, _super);
    function az_servicebus_namespace_network_rule_list_command_builder(commandPath, resultDataTypeName, namespaceName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.namespaceName(namespaceName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the Namespace. */
    az_servicebus_namespace_network_rule_list_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_servicebus_namespace_network_rule_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_servicebus_namespace_network_rule_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_servicebus_namespace_network_rule_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_servicebus_namespace_network_rule_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Remove network rule for a namespace.
 *
 * Syntax:
 * ```
 * az servicebus namespace network-rule remove --namespace-name
 *                                             --resource-group
 *                                             [--ip-address]
 *                                             [--subnet]
 *                                             [--subscription]
 *                                             [--vnet-name]
 * ```
 *
 * @param {string} namespaceName Name of the Namespace.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_servicebus_namespace_network_rule_remove_command_builder = /** @class */ (function (_super) {
    __extends(az_servicebus_namespace_network_rule_remove_command_builder, _super);
    function az_servicebus_namespace_network_rule_remove_command_builder(commandPath, resultDataTypeName, namespaceName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.namespaceName(namespaceName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the Namespace. */
    az_servicebus_namespace_network_rule_remove_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_servicebus_namespace_network_rule_remove_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** IPv4 address or CIDR range. */
    az_servicebus_namespace_network_rule_remove_command_builder.prototype.ipAddress = function (value) {
        this.setFlag("--ip-address", value);
        return this;
    };
    /** Name or ID of subnet. If name is supplied, `--vnet-name` must be supplied. */
    az_servicebus_namespace_network_rule_remove_command_builder.prototype.subnet = function (value) {
        this.setFlag("--subnet", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_servicebus_namespace_network_rule_remove_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Name of the Virtual Network. */
    az_servicebus_namespace_network_rule_remove_command_builder.prototype.vnetName = function (value) {
        this.setFlag("--vnet-name", value);
        return this;
    };
    return az_servicebus_namespace_network_rule_remove_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a Service Bus Namespace.
 *
 * Syntax:
 * ```
 * az servicebus namespace create --name
 *                                --resource-group
 *                                [--capacity {1, 2, 4, 8}]
 *                                [--default-action]
 *                                [--location]
 *                                [--sku {Basic, Premium, Standard}]
 *                                [--subscription]
 *                                [--tags]
 * ```
 *
 * @param {string} name Name of Namespace.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_servicebus_namespace_create_command_builder = /** @class */ (function (_super) {
    __extends(az_servicebus_namespace_create_command_builder, _super);
    function az_servicebus_namespace_create_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of Namespace. */
    az_servicebus_namespace_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_servicebus_namespace_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Number of message units. This property is only applicable to namespaces of Premium SKU. */
    az_servicebus_namespace_create_command_builder.prototype.capacity = function (value) {
        this.setFlag("--capacity", value);
        return this;
    };
    /** Default action for network rule set. */
    az_servicebus_namespace_create_command_builder.prototype.defaultAction = function (value) {
        this.setFlag("--default-action", value);
        return this;
    };
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_servicebus_namespace_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Namespace SKU. */
    az_servicebus_namespace_create_command_builder.prototype.sku = function (value) {
        this.setFlag("--sku", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_servicebus_namespace_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_servicebus_namespace_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_servicebus_namespace_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Deletes the Service Bus Namespace.
 *
 * Syntax:
 * ```
 * az servicebus namespace delete [--ids]
 *                                [--name]
 *                                [--resource-group]
 *                                [--subscription]
 * ```
 */
var az_servicebus_namespace_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_servicebus_namespace_delete_command_builder, _super);
    function az_servicebus_namespace_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_servicebus_namespace_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of Namespace. */
    az_servicebus_namespace_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_servicebus_namespace_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_servicebus_namespace_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_servicebus_namespace_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * Check for the availability of the given name for the Namespace.
 *
 * Syntax:
 * ```
 * az servicebus namespace exists --name
 *                                [--subscription]
 * ```
 *
 * @param {string} name Namespace name. Name can contain only letters, numbers, and hyphens. The namespace must start with a letter, and it must end with a letter or number.
 */
var az_servicebus_namespace_exists_command_builder = /** @class */ (function (_super) {
    __extends(az_servicebus_namespace_exists_command_builder, _super);
    function az_servicebus_namespace_exists_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** Namespace name. Name can contain only letters, numbers, and hyphens. The namespace must start with a letter, and it must end with a letter or number. */
    az_servicebus_namespace_exists_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_servicebus_namespace_exists_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_servicebus_namespace_exists_command_builder;
}(base_1.CommandBuilder));
/**
 * List the Service Bus Namespaces.
 *
 * Syntax:
 * ```
 * az servicebus namespace list [--query-examples]
 *                              [--resource-group]
 *                              [--subscription]
 * ```
 */
var az_servicebus_namespace_list_command_builder = /** @class */ (function (_super) {
    __extends(az_servicebus_namespace_list_command_builder, _super);
    function az_servicebus_namespace_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_servicebus_namespace_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_servicebus_namespace_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_servicebus_namespace_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_servicebus_namespace_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Shows the Service Bus Namespace details.
 *
 * Syntax:
 * ```
 * az servicebus namespace show [--ids]
 *                              [--name]
 *                              [--query-examples]
 *                              [--resource-group]
 *                              [--subscription]
 * ```
 */
var az_servicebus_namespace_show_command_builder = /** @class */ (function (_super) {
    __extends(az_servicebus_namespace_show_command_builder, _super);
    function az_servicebus_namespace_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_servicebus_namespace_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of Namespace. */
    az_servicebus_namespace_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_servicebus_namespace_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_servicebus_namespace_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_servicebus_namespace_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_servicebus_namespace_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Updates a Service Bus Namespace.
 *
 * Syntax:
 * ```
 * az servicebus namespace update [--add]
 *                                [--capacity {1, 2, 4, 8}]
 *                                [--default-action]
 *                                [--force-string]
 *                                [--ids]
 *                                [--name]
 *                                [--remove]
 *                                [--resource-group]
 *                                [--set]
 *                                [--sku {Basic, Premium, Standard}]
 *                                [--subscription]
 *                                [--tags]
 * ```
 */
var az_servicebus_namespace_update_command_builder = /** @class */ (function (_super) {
    __extends(az_servicebus_namespace_update_command_builder, _super);
    function az_servicebus_namespace_update_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_servicebus_namespace_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** Number of message units. This property is only applicable to namespaces of Premium SKU. */
    az_servicebus_namespace_update_command_builder.prototype.capacity = function (value) {
        this.setFlag("--capacity", value);
        return this;
    };
    /** Default action for network rule set. */
    az_servicebus_namespace_update_command_builder.prototype.defaultAction = function (value) {
        this.setFlag("--default-action", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_servicebus_namespace_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_servicebus_namespace_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of Namespace. */
    az_servicebus_namespace_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_servicebus_namespace_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_servicebus_namespace_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_servicebus_namespace_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Namespace SKU. */
    az_servicebus_namespace_update_command_builder.prototype.sku = function (value) {
        this.setFlag("--sku", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_servicebus_namespace_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_servicebus_namespace_update_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_servicebus_namespace_update_command_builder;
}(base_1.CommandBuilder));
/**
 * List the keys and connection strings of Authorization Rule for the given Service Bus Queue.
 *
 * Syntax:
 * ```
 * az servicebus queue authorization-rule keys list --name
 *                                                  --namespace-name
 *                                                  --queue-name
 *                                                  --resource-group
 *                                                  [--query-examples]
 *                                                  [--subscription]
 * ```
 *
 * @param {string} name Name of Queue Authorization Rule.
 * @param {string} namespaceName Name of Namespace.
 * @param {string} queueName Name of Queue.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_servicebus_queue_authorization_rule_keys_list_command_builder = /** @class */ (function (_super) {
    __extends(az_servicebus_queue_authorization_rule_keys_list_command_builder, _super);
    function az_servicebus_queue_authorization_rule_keys_list_command_builder(commandPath, resultDataTypeName, name, namespaceName, queueName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.namespaceName(namespaceName);
        _this.queueName(queueName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of Queue Authorization Rule. */
    az_servicebus_queue_authorization_rule_keys_list_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of Namespace. */
    az_servicebus_queue_authorization_rule_keys_list_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Name of Queue. */
    az_servicebus_queue_authorization_rule_keys_list_command_builder.prototype.queueName = function (value) {
        this.setFlag("--queue-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_servicebus_queue_authorization_rule_keys_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_servicebus_queue_authorization_rule_keys_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_servicebus_queue_authorization_rule_keys_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_servicebus_queue_authorization_rule_keys_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Regenerate keys of Authorization Rule for Service Bus Queue.
 *
 * Syntax:
 * ```
 * az servicebus queue authorization-rule keys renew --key {PrimaryKey, SecondaryKey}
 *                                                   [--ids]
 *                                                   [--key-value]
 *                                                   [--name]
 *                                                   [--namespace-name]
 *                                                   [--queue-name]
 *                                                   [--resource-group]
 *                                                   [--subscription]
 * ```
 *
 * @param {'PrimaryKey' | 'SecondaryKey'} key Specifies Primary or Secondary key needs to be reset.
 */
var az_servicebus_queue_authorization_rule_keys_renew_command_builder = /** @class */ (function (_super) {
    __extends(az_servicebus_queue_authorization_rule_keys_renew_command_builder, _super);
    function az_servicebus_queue_authorization_rule_keys_renew_command_builder(commandPath, resultDataTypeName, key) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.key(key);
        return _this;
    }
    /** Specifies Primary or Secondary key needs to be reset. */
    az_servicebus_queue_authorization_rule_keys_renew_command_builder.prototype.key = function (value) {
        this.setFlag("--key", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_servicebus_queue_authorization_rule_keys_renew_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Optional, if the key value provided, is set for KeyType or autogenerated Key value set for keyType. */
    az_servicebus_queue_authorization_rule_keys_renew_command_builder.prototype.keyValue = function (value) {
        this.setFlag("--key-value", value);
        return this;
    };
    /** Name of Queue Authorization Rule. */
    az_servicebus_queue_authorization_rule_keys_renew_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of Namespace. */
    az_servicebus_queue_authorization_rule_keys_renew_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Name of Queue. */
    az_servicebus_queue_authorization_rule_keys_renew_command_builder.prototype.queueName = function (value) {
        this.setFlag("--queue-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_servicebus_queue_authorization_rule_keys_renew_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_servicebus_queue_authorization_rule_keys_renew_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_servicebus_queue_authorization_rule_keys_renew_command_builder;
}(base_1.CommandBuilder));
/**
 * Create Authorization Rule for the given Service Bus Queue.
 *
 * Syntax:
 * ```
 * az servicebus queue authorization-rule create --name
 *                                               --namespace-name
 *                                               --queue-name
 *                                               --resource-group
 *                                               --rights {Listen, Manage, Send}
 *                                               [--subscription]
 * ```
 *
 * @param {string} name Name of Queue Authorization Rule.
 * @param {string} namespaceName Name of Namespace.
 * @param {string} queueName Name of Queue.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {'Listen' | 'Manage' | 'Send'} rights Space-separated list of Authorization rule rights.
 */
var az_servicebus_queue_authorization_rule_create_command_builder = /** @class */ (function (_super) {
    __extends(az_servicebus_queue_authorization_rule_create_command_builder, _super);
    function az_servicebus_queue_authorization_rule_create_command_builder(commandPath, resultDataTypeName, name, namespaceName, queueName, resourceGroup, rights) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.namespaceName(namespaceName);
        _this.queueName(queueName);
        _this.resourceGroup(resourceGroup);
        _this.rights(rights);
        return _this;
    }
    /** Name of Queue Authorization Rule. */
    az_servicebus_queue_authorization_rule_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of Namespace. */
    az_servicebus_queue_authorization_rule_create_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Name of Queue. */
    az_servicebus_queue_authorization_rule_create_command_builder.prototype.queueName = function (value) {
        this.setFlag("--queue-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_servicebus_queue_authorization_rule_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Space-separated list of Authorization rule rights. */
    az_servicebus_queue_authorization_rule_create_command_builder.prototype.rights = function (value) {
        this.setFlag("--rights", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_servicebus_queue_authorization_rule_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_servicebus_queue_authorization_rule_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete the Authorization Rule of Service Bus Queue.
 *
 * Syntax:
 * ```
 * az servicebus queue authorization-rule delete [--ids]
 *                                               [--name]
 *                                               [--namespace-name]
 *                                               [--queue-name]
 *                                               [--resource-group]
 *                                               [--subscription]
 * ```
 */
var az_servicebus_queue_authorization_rule_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_servicebus_queue_authorization_rule_delete_command_builder, _super);
    function az_servicebus_queue_authorization_rule_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_servicebus_queue_authorization_rule_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of Queue Authorization Rule. */
    az_servicebus_queue_authorization_rule_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of Namespace. */
    az_servicebus_queue_authorization_rule_delete_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Name of Queue. */
    az_servicebus_queue_authorization_rule_delete_command_builder.prototype.queueName = function (value) {
        this.setFlag("--queue-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_servicebus_queue_authorization_rule_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_servicebus_queue_authorization_rule_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_servicebus_queue_authorization_rule_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List of Authorization Rule by Service Bus Queue.
 *
 * Syntax:
 * ```
 * az servicebus queue authorization-rule list --namespace-name
 *                                             --queue-name
 *                                             --resource-group
 *                                             [--query-examples]
 *                                             [--subscription]
 * ```
 *
 * @param {string} namespaceName Name of Namespace.
 * @param {string} queueName Name of Queue.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_servicebus_queue_authorization_rule_list_command_builder = /** @class */ (function (_super) {
    __extends(az_servicebus_queue_authorization_rule_list_command_builder, _super);
    function az_servicebus_queue_authorization_rule_list_command_builder(commandPath, resultDataTypeName, namespaceName, queueName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.namespaceName(namespaceName);
        _this.queueName(queueName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of Namespace. */
    az_servicebus_queue_authorization_rule_list_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Name of Queue. */
    az_servicebus_queue_authorization_rule_list_command_builder.prototype.queueName = function (value) {
        this.setFlag("--queue-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_servicebus_queue_authorization_rule_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_servicebus_queue_authorization_rule_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_servicebus_queue_authorization_rule_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_servicebus_queue_authorization_rule_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Show properties of Authorization Rule for the given Service Bus Queue.
 *
 * Syntax:
 * ```
 * az servicebus queue authorization-rule show [--ids]
 *                                             [--name]
 *                                             [--namespace-name]
 *                                             [--query-examples]
 *                                             [--queue-name]
 *                                             [--resource-group]
 *                                             [--subscription]
 * ```
 */
var az_servicebus_queue_authorization_rule_show_command_builder = /** @class */ (function (_super) {
    __extends(az_servicebus_queue_authorization_rule_show_command_builder, _super);
    function az_servicebus_queue_authorization_rule_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_servicebus_queue_authorization_rule_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of Queue Authorization Rule. */
    az_servicebus_queue_authorization_rule_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of Namespace. */
    az_servicebus_queue_authorization_rule_show_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_servicebus_queue_authorization_rule_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of Queue. */
    az_servicebus_queue_authorization_rule_show_command_builder.prototype.queueName = function (value) {
        this.setFlag("--queue-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_servicebus_queue_authorization_rule_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_servicebus_queue_authorization_rule_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_servicebus_queue_authorization_rule_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update Authorization Rule for the given Service Bus Queue.
 *
 * Syntax:
 * ```
 * az servicebus queue authorization-rule update --rights {Listen, Manage, Send}
 *                                               [--add]
 *                                               [--force-string]
 *                                               [--ids]
 *                                               [--name]
 *                                               [--namespace-name]
 *                                               [--queue-name]
 *                                               [--remove]
 *                                               [--resource-group]
 *                                               [--set]
 *                                               [--subscription]
 * ```
 *
 * @param {'Listen' | 'Manage' | 'Send'} rights Space-separated list of Authorization rule rights.
 */
var az_servicebus_queue_authorization_rule_update_command_builder = /** @class */ (function (_super) {
    __extends(az_servicebus_queue_authorization_rule_update_command_builder, _super);
    function az_servicebus_queue_authorization_rule_update_command_builder(commandPath, resultDataTypeName, rights) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.rights(rights);
        return _this;
    }
    /** Space-separated list of Authorization rule rights. */
    az_servicebus_queue_authorization_rule_update_command_builder.prototype.rights = function (value) {
        this.setFlag("--rights", value);
        return this;
    };
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_servicebus_queue_authorization_rule_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_servicebus_queue_authorization_rule_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_servicebus_queue_authorization_rule_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of Queue Authorization Rule. */
    az_servicebus_queue_authorization_rule_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of Namespace. */
    az_servicebus_queue_authorization_rule_update_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Name of Queue. */
    az_servicebus_queue_authorization_rule_update_command_builder.prototype.queueName = function (value) {
        this.setFlag("--queue-name", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_servicebus_queue_authorization_rule_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_servicebus_queue_authorization_rule_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_servicebus_queue_authorization_rule_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_servicebus_queue_authorization_rule_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_servicebus_queue_authorization_rule_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Create the Service Bus Queue.
 *
 * Syntax:
 * ```
 * az servicebus queue create --name
 *                            --namespace-name
 *                            --resource-group
 *                            [--auto-delete-on-idle]
 *                            [--default-message-time-to-live]
 *                            [--duplicate-detection-history-time-window]
 *                            [--enable-batched-operations {false, true}]
 *                            [--enable-dead-lettering-on-message-expiration {false, true}]
 *                            [--enable-duplicate-detection {false, true}]
 *                            [--enable-express {false, true}]
 *                            [--enable-partitioning {false, true}]
 *                            [--enable-session {false, true}]
 *                            [--forward-dead-lettered-messages-to]
 *                            [--forward-to]
 *                            [--lock-duration]
 *                            [--max-delivery-count]
 *                            [--max-size {1024, 10240, 2048, 20480, 3072, 4096, 40960, 5120, 81920}]
 *                            [--status {Active, Disabled, SendDisabled}]
 *                            [--subscription]
 * ```
 *
 * @param {string} name Name of Queue.
 * @param {string} namespaceName Name of Namespace.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_servicebus_queue_create_command_builder = /** @class */ (function (_super) {
    __extends(az_servicebus_queue_create_command_builder, _super);
    function az_servicebus_queue_create_command_builder(commandPath, resultDataTypeName, name, namespaceName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.namespaceName(namespaceName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of Queue. */
    az_servicebus_queue_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of Namespace. */
    az_servicebus_queue_create_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_servicebus_queue_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** ISO 8601 timeSpan or duration time format for idle interval after which the queue is automatically deleted. The minimum duration is 5 minutes. */
    az_servicebus_queue_create_command_builder.prototype.autoDeleteOnIdle = function (value) {
        this.setFlag("--auto-delete-on-idle", value);
        return this;
    };
    /** ISO 8601 timespan or duration time format for default message to live value. This is the duration after which the message expires, starting from when the message is sent to Service Bus. This is the default value used when TimeToLive is not set on a message itself. */
    az_servicebus_queue_create_command_builder.prototype.defaultMessageTimeToLive = function (value) {
        this.setFlag("--default-message-time-to-live", value);
        return this;
    };
    /** ISO 8601 timeSpan structure that defines the duration of the duplicate detection history. The default value is 10 minutes. */
    az_servicebus_queue_create_command_builder.prototype.duplicateDetectionHistoryTimeWindow = function (value) {
        this.setFlag("--duplicate-detection-history-time-window", value);
        return this;
    };
    /** Allow server-side batched operations. */
    az_servicebus_queue_create_command_builder.prototype.enableBatchedOperations = function (value) {
        this.setFlag("--enable-batched-operations", value.toString());
        return this;
    };
    /** A boolean value that indicates whether this queue has dead letter support when a message expires. */
    az_servicebus_queue_create_command_builder.prototype.enableDeadLetteringOnMessageExpiration = function (value) {
        this.setFlag("--enable-dead-lettering-on-message-expiration", value.toString());
        return this;
    };
    /** A boolean value indicating if this queue requires duplicate detection. */
    az_servicebus_queue_create_command_builder.prototype.enableDuplicateDetection = function (value) {
        this.setFlag("--enable-duplicate-detection", value.toString());
        return this;
    };
    /** A boolean value that indicates whether Express Entities are enabled. An express queue holds a message in memory temporarily before writing it to persistent storage. */
    az_servicebus_queue_create_command_builder.prototype.enableExpress = function (value) {
        this.setFlag("--enable-express", value.toString());
        return this;
    };
    /** A boolean value that indicates whether the queue is to be partitioned across multiple message brokers. */
    az_servicebus_queue_create_command_builder.prototype.enablePartitioning = function (value) {
        this.setFlag("--enable-partitioning", value.toString());
        return this;
    };
    /** A boolean value indicating whether the queue supports the concept of sessions. */
    az_servicebus_queue_create_command_builder.prototype.enableSession = function (value) {
        this.setFlag("--enable-session", value.toString());
        return this;
    };
    /** Queue/Topic name to forward the Dead Letter message. */
    az_servicebus_queue_create_command_builder.prototype.forwardDeadLetteredMessagesTo = function (value) {
        this.setFlag("--forward-dead-lettered-messages-to", value);
        return this;
    };
    /** Queue/Topic name to forward the messages. */
    az_servicebus_queue_create_command_builder.prototype.forwardTo = function (value) {
        this.setFlag("--forward-to", value);
        return this;
    };
    /** String ISO 8601 timespan or duration format for duration of a peek-lock; that is, the amount of time that the message is locked for other receivers. The maximum value for LockDuration is 5 minutes; the default value is 1 minute. */
    az_servicebus_queue_create_command_builder.prototype.lockDuration = function (value) {
        this.setFlag("--lock-duration", value);
        return this;
    };
    /** The maximum delivery count. A message is automatically deadlettered after this number of deliveries. default value is 10. */
    az_servicebus_queue_create_command_builder.prototype.maxDeliveryCount = function (value) {
        this.setFlag("--max-delivery-count", value);
        return this;
    };
    /** Maximum size of queue in megabytes, which is the size of the memory allocated for the queue. Default is 1024. Max for Standard SKU is 5120 and for Premium SKU is 81920. */
    az_servicebus_queue_create_command_builder.prototype.maxSize = function (value) {
        this.setFlag("--max-size", value);
        return this;
    };
    /** Enumerates the possible values for the status of a messaging entity. */
    az_servicebus_queue_create_command_builder.prototype.status = function (value) {
        this.setFlag("--status", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_servicebus_queue_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_servicebus_queue_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Deletes the Service Bus Queue.
 *
 * Syntax:
 * ```
 * az servicebus queue delete [--ids]
 *                            [--name]
 *                            [--namespace-name]
 *                            [--resource-group]
 *                            [--subscription]
 * ```
 */
var az_servicebus_queue_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_servicebus_queue_delete_command_builder, _super);
    function az_servicebus_queue_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_servicebus_queue_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of Queue. */
    az_servicebus_queue_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of Namespace. */
    az_servicebus_queue_delete_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_servicebus_queue_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_servicebus_queue_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_servicebus_queue_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List the Queue by Service Bus Namepsace.
 *
 * Syntax:
 * ```
 * az servicebus queue list --namespace-name
 *                          --resource-group
 *                          [--query-examples]
 *                          [--skip]
 *                          [--subscription]
 *                          [--top]
 * ```
 *
 * @param {string} namespaceName Name of Namespace.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_servicebus_queue_list_command_builder = /** @class */ (function (_super) {
    __extends(az_servicebus_queue_list_command_builder, _super);
    function az_servicebus_queue_list_command_builder(commandPath, resultDataTypeName, namespaceName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.namespaceName(namespaceName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of Namespace. */
    az_servicebus_queue_list_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_servicebus_queue_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_servicebus_queue_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Skip is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skip parameter that specifies a starting point to use for subsequent calls. */
    az_servicebus_queue_list_command_builder.prototype.skip = function (value) {
        this.setFlag("--skip", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_servicebus_queue_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** May be used to limit the number of results to the most recent N usageDetails. */
    az_servicebus_queue_list_command_builder.prototype.top = function (value) {
        this.setFlag("--top", value);
        return this;
    };
    return az_servicebus_queue_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Shows the Service Bus Queue Details.
 *
 * Syntax:
 * ```
 * az servicebus queue show [--ids]
 *                          [--name]
 *                          [--namespace-name]
 *                          [--query-examples]
 *                          [--resource-group]
 *                          [--subscription]
 * ```
 */
var az_servicebus_queue_show_command_builder = /** @class */ (function (_super) {
    __extends(az_servicebus_queue_show_command_builder, _super);
    function az_servicebus_queue_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_servicebus_queue_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of Queue. */
    az_servicebus_queue_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of Namespace. */
    az_servicebus_queue_show_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_servicebus_queue_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_servicebus_queue_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_servicebus_queue_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_servicebus_queue_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Updates existing Service Bus Queue.
 *
 * Syntax:
 * ```
 * az servicebus queue update [--add]
 *                            [--auto-delete-on-idle]
 *                            [--default-message-time-to-live]
 *                            [--duplicate-detection-history-time-window]
 *                            [--enable-batched-operations {false, true}]
 *                            [--enable-dead-lettering-on-message-expiration {false, true}]
 *                            [--enable-duplicate-detection {false, true}]
 *                            [--enable-express {false, true}]
 *                            [--enable-partitioning {false, true}]
 *                            [--enable-session {false, true}]
 *                            [--force-string]
 *                            [--forward-dead-lettered-messages-to]
 *                            [--forward-to]
 *                            [--ids]
 *                            [--lock-duration]
 *                            [--max-delivery-count]
 *                            [--max-size {1024, 10240, 2048, 20480, 3072, 4096, 40960, 5120, 81920}]
 *                            [--name]
 *                            [--namespace-name]
 *                            [--remove]
 *                            [--resource-group]
 *                            [--set]
 *                            [--status {Active, Disabled, SendDisabled}]
 *                            [--subscription]
 * ```
 */
var az_servicebus_queue_update_command_builder = /** @class */ (function (_super) {
    __extends(az_servicebus_queue_update_command_builder, _super);
    function az_servicebus_queue_update_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_servicebus_queue_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** ISO 8601 timeSpan or duration time format for idle interval after which the queue is automatically deleted. The minimum duration is 5 minutes. */
    az_servicebus_queue_update_command_builder.prototype.autoDeleteOnIdle = function (value) {
        this.setFlag("--auto-delete-on-idle", value);
        return this;
    };
    /** ISO 8601 timespan or duration time format for default message to live value. This is the duration after which the message expires, starting from when the message is sent to Service Bus. This is the default value used when TimeToLive is not set on a message itself. */
    az_servicebus_queue_update_command_builder.prototype.defaultMessageTimeToLive = function (value) {
        this.setFlag("--default-message-time-to-live", value);
        return this;
    };
    /** ISO 8601 timeSpan structure that defines the duration of the duplicate detection history. The default value is 10 minutes. */
    az_servicebus_queue_update_command_builder.prototype.duplicateDetectionHistoryTimeWindow = function (value) {
        this.setFlag("--duplicate-detection-history-time-window", value);
        return this;
    };
    /** Allow server-side batched operations. */
    az_servicebus_queue_update_command_builder.prototype.enableBatchedOperations = function (value) {
        this.setFlag("--enable-batched-operations", value.toString());
        return this;
    };
    /** A boolean value that indicates whether this queue has dead letter support when a message expires. */
    az_servicebus_queue_update_command_builder.prototype.enableDeadLetteringOnMessageExpiration = function (value) {
        this.setFlag("--enable-dead-lettering-on-message-expiration", value.toString());
        return this;
    };
    /** A boolean value indicating if this queue requires duplicate detection. */
    az_servicebus_queue_update_command_builder.prototype.enableDuplicateDetection = function (value) {
        this.setFlag("--enable-duplicate-detection", value.toString());
        return this;
    };
    /** A boolean value that indicates whether Express Entities are enabled. An express queue holds a message in memory temporarily before writing it to persistent storage. */
    az_servicebus_queue_update_command_builder.prototype.enableExpress = function (value) {
        this.setFlag("--enable-express", value.toString());
        return this;
    };
    /** A boolean value that indicates whether the queue is to be partitioned across multiple message brokers. */
    az_servicebus_queue_update_command_builder.prototype.enablePartitioning = function (value) {
        this.setFlag("--enable-partitioning", value.toString());
        return this;
    };
    /** A boolean value indicating whether the queue supports the concept of sessions. */
    az_servicebus_queue_update_command_builder.prototype.enableSession = function (value) {
        this.setFlag("--enable-session", value.toString());
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_servicebus_queue_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** Queue/Topic name to forward the Dead Letter message. */
    az_servicebus_queue_update_command_builder.prototype.forwardDeadLetteredMessagesTo = function (value) {
        this.setFlag("--forward-dead-lettered-messages-to", value);
        return this;
    };
    /** Queue/Topic name to forward the messages. */
    az_servicebus_queue_update_command_builder.prototype.forwardTo = function (value) {
        this.setFlag("--forward-to", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_servicebus_queue_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** String ISO 8601 timespan or duration format for duration of a peek-lock; that is, the amount of time that the message is locked for other receivers. The maximum value for LockDuration is 5 minutes; the default value is 1 minute. */
    az_servicebus_queue_update_command_builder.prototype.lockDuration = function (value) {
        this.setFlag("--lock-duration", value);
        return this;
    };
    /** The maximum delivery count. A message is automatically deadlettered after this number of deliveries. default value is 10. */
    az_servicebus_queue_update_command_builder.prototype.maxDeliveryCount = function (value) {
        this.setFlag("--max-delivery-count", value);
        return this;
    };
    /** Maximum size of queue in megabytes, which is the size of the memory allocated for the queue. Default is 1024. Max for Standard SKU is 5120 and for Premium SKU is 81920. */
    az_servicebus_queue_update_command_builder.prototype.maxSize = function (value) {
        this.setFlag("--max-size", value);
        return this;
    };
    /** Name of Queue. */
    az_servicebus_queue_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of Namespace. */
    az_servicebus_queue_update_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_servicebus_queue_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_servicebus_queue_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_servicebus_queue_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Enumerates the possible values for the status of a messaging entity. */
    az_servicebus_queue_update_command_builder.prototype.status = function (value) {
        this.setFlag("--status", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_servicebus_queue_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_servicebus_queue_update_command_builder;
}(base_1.CommandBuilder));
/**
 * List the keys and connection strings of Authorization Rule for Service Bus Topic.
 *
 * Syntax:
 * ```
 * az servicebus topic authorization-rule keys list --name
 *                                                  --namespace-name
 *                                                  --resource-group
 *                                                  --topic-name
 *                                                  [--query-examples]
 *                                                  [--subscription]
 * ```
 *
 * @param {string} name Name of Topic Authorization Rule.
 * @param {string} namespaceName Name of Namespace.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} topicName Name of Topic.
 */
var az_servicebus_topic_authorization_rule_keys_list_command_builder = /** @class */ (function (_super) {
    __extends(az_servicebus_topic_authorization_rule_keys_list_command_builder, _super);
    function az_servicebus_topic_authorization_rule_keys_list_command_builder(commandPath, resultDataTypeName, name, namespaceName, resourceGroup, topicName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.namespaceName(namespaceName);
        _this.resourceGroup(resourceGroup);
        _this.topicName(topicName);
        return _this;
    }
    /** Name of Topic Authorization Rule. */
    az_servicebus_topic_authorization_rule_keys_list_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of Namespace. */
    az_servicebus_topic_authorization_rule_keys_list_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_servicebus_topic_authorization_rule_keys_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of Topic. */
    az_servicebus_topic_authorization_rule_keys_list_command_builder.prototype.topicName = function (value) {
        this.setFlag("--topic-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_servicebus_topic_authorization_rule_keys_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_servicebus_topic_authorization_rule_keys_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_servicebus_topic_authorization_rule_keys_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Regenerate keys of Authorization Rule for Service Bus Topic.
 *
 * Syntax:
 * ```
 * az servicebus topic authorization-rule keys renew --key {PrimaryKey, SecondaryKey}
 *                                                   [--ids]
 *                                                   [--key-value]
 *                                                   [--name]
 *                                                   [--namespace-name]
 *                                                   [--resource-group]
 *                                                   [--subscription]
 *                                                   [--topic-name]
 * ```
 *
 * @param {'PrimaryKey' | 'SecondaryKey'} key Specifies Primary or Secondary key needs to be reset.
 */
var az_servicebus_topic_authorization_rule_keys_renew_command_builder = /** @class */ (function (_super) {
    __extends(az_servicebus_topic_authorization_rule_keys_renew_command_builder, _super);
    function az_servicebus_topic_authorization_rule_keys_renew_command_builder(commandPath, resultDataTypeName, key) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.key(key);
        return _this;
    }
    /** Specifies Primary or Secondary key needs to be reset. */
    az_servicebus_topic_authorization_rule_keys_renew_command_builder.prototype.key = function (value) {
        this.setFlag("--key", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_servicebus_topic_authorization_rule_keys_renew_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Optional, if the key value provided, is set for KeyType or autogenerated Key value set for keyType. */
    az_servicebus_topic_authorization_rule_keys_renew_command_builder.prototype.keyValue = function (value) {
        this.setFlag("--key-value", value);
        return this;
    };
    /** Name of Topic Authorization Rule. */
    az_servicebus_topic_authorization_rule_keys_renew_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of Namespace. */
    az_servicebus_topic_authorization_rule_keys_renew_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_servicebus_topic_authorization_rule_keys_renew_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_servicebus_topic_authorization_rule_keys_renew_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Name of Topic. */
    az_servicebus_topic_authorization_rule_keys_renew_command_builder.prototype.topicName = function (value) {
        this.setFlag("--topic-name", value);
        return this;
    };
    return az_servicebus_topic_authorization_rule_keys_renew_command_builder;
}(base_1.CommandBuilder));
/**
 * Create Authorization Rule for given Service Bus Topic.
 *
 * Syntax:
 * ```
 * az servicebus topic authorization-rule create --name
 *                                               --namespace-name
 *                                               --resource-group
 *                                               --rights {Listen, Manage, Send}
 *                                               --topic-name
 *                                               [--subscription]
 * ```
 *
 * @param {string} name Name of Topic Authorization Rule.
 * @param {string} namespaceName Name of Namespace.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {'Listen' | 'Manage' | 'Send'} rights Space-separated list of Authorization rule rights.
 * @param {string} topicName Name of Topic.
 */
var az_servicebus_topic_authorization_rule_create_command_builder = /** @class */ (function (_super) {
    __extends(az_servicebus_topic_authorization_rule_create_command_builder, _super);
    function az_servicebus_topic_authorization_rule_create_command_builder(commandPath, resultDataTypeName, name, namespaceName, resourceGroup, rights, topicName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.namespaceName(namespaceName);
        _this.resourceGroup(resourceGroup);
        _this.rights(rights);
        _this.topicName(topicName);
        return _this;
    }
    /** Name of Topic Authorization Rule. */
    az_servicebus_topic_authorization_rule_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of Namespace. */
    az_servicebus_topic_authorization_rule_create_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_servicebus_topic_authorization_rule_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Space-separated list of Authorization rule rights. */
    az_servicebus_topic_authorization_rule_create_command_builder.prototype.rights = function (value) {
        this.setFlag("--rights", value);
        return this;
    };
    /** Name of Topic. */
    az_servicebus_topic_authorization_rule_create_command_builder.prototype.topicName = function (value) {
        this.setFlag("--topic-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_servicebus_topic_authorization_rule_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_servicebus_topic_authorization_rule_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Deletes the Authorization Rule of the given Service Bus Topic.
 *
 * Syntax:
 * ```
 * az servicebus topic authorization-rule delete [--ids]
 *                                               [--name]
 *                                               [--namespace-name]
 *                                               [--resource-group]
 *                                               [--subscription]
 *                                               [--topic-name]
 * ```
 */
var az_servicebus_topic_authorization_rule_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_servicebus_topic_authorization_rule_delete_command_builder, _super);
    function az_servicebus_topic_authorization_rule_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_servicebus_topic_authorization_rule_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of Topic Authorization Rule. */
    az_servicebus_topic_authorization_rule_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of Namespace. */
    az_servicebus_topic_authorization_rule_delete_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_servicebus_topic_authorization_rule_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_servicebus_topic_authorization_rule_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Name of Topic. */
    az_servicebus_topic_authorization_rule_delete_command_builder.prototype.topicName = function (value) {
        this.setFlag("--topic-name", value);
        return this;
    };
    return az_servicebus_topic_authorization_rule_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * Shows list of Authorization Rule by Service Bus Topic.
 *
 * Syntax:
 * ```
 * az servicebus topic authorization-rule list --namespace-name
 *                                             --resource-group
 *                                             --topic-name
 *                                             [--query-examples]
 *                                             [--subscription]
 * ```
 *
 * @param {string} namespaceName Name of Namespace.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} topicName Name of Topic.
 */
var az_servicebus_topic_authorization_rule_list_command_builder = /** @class */ (function (_super) {
    __extends(az_servicebus_topic_authorization_rule_list_command_builder, _super);
    function az_servicebus_topic_authorization_rule_list_command_builder(commandPath, resultDataTypeName, namespaceName, resourceGroup, topicName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.namespaceName(namespaceName);
        _this.resourceGroup(resourceGroup);
        _this.topicName(topicName);
        return _this;
    }
    /** Name of Namespace. */
    az_servicebus_topic_authorization_rule_list_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_servicebus_topic_authorization_rule_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of Topic. */
    az_servicebus_topic_authorization_rule_list_command_builder.prototype.topicName = function (value) {
        this.setFlag("--topic-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_servicebus_topic_authorization_rule_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_servicebus_topic_authorization_rule_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_servicebus_topic_authorization_rule_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Shows the details of Authorization Rule for given Service Bus Topic.
 *
 * Syntax:
 * ```
 * az servicebus topic authorization-rule show [--ids]
 *                                             [--name]
 *                                             [--namespace-name]
 *                                             [--query-examples]
 *                                             [--resource-group]
 *                                             [--subscription]
 *                                             [--topic-name]
 * ```
 */
var az_servicebus_topic_authorization_rule_show_command_builder = /** @class */ (function (_super) {
    __extends(az_servicebus_topic_authorization_rule_show_command_builder, _super);
    function az_servicebus_topic_authorization_rule_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_servicebus_topic_authorization_rule_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of Topic Authorization Rule. */
    az_servicebus_topic_authorization_rule_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of Namespace. */
    az_servicebus_topic_authorization_rule_show_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_servicebus_topic_authorization_rule_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_servicebus_topic_authorization_rule_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_servicebus_topic_authorization_rule_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Name of Topic. */
    az_servicebus_topic_authorization_rule_show_command_builder.prototype.topicName = function (value) {
        this.setFlag("--topic-name", value);
        return this;
    };
    return az_servicebus_topic_authorization_rule_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Create Authorization Rule for given Service Bus Topic.
 *
 * Syntax:
 * ```
 * az servicebus topic authorization-rule update --rights {Listen, Manage, Send}
 *                                               [--add]
 *                                               [--force-string]
 *                                               [--ids]
 *                                               [--name]
 *                                               [--namespace-name]
 *                                               [--remove]
 *                                               [--resource-group]
 *                                               [--set]
 *                                               [--subscription]
 *                                               [--topic-name]
 * ```
 *
 * @param {'Listen' | 'Manage' | 'Send'} rights Space-separated list of Authorization rule rights.
 */
var az_servicebus_topic_authorization_rule_update_command_builder = /** @class */ (function (_super) {
    __extends(az_servicebus_topic_authorization_rule_update_command_builder, _super);
    function az_servicebus_topic_authorization_rule_update_command_builder(commandPath, resultDataTypeName, rights) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.rights(rights);
        return _this;
    }
    /** Space-separated list of Authorization rule rights. */
    az_servicebus_topic_authorization_rule_update_command_builder.prototype.rights = function (value) {
        this.setFlag("--rights", value);
        return this;
    };
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_servicebus_topic_authorization_rule_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_servicebus_topic_authorization_rule_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_servicebus_topic_authorization_rule_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of Topic Authorization Rule. */
    az_servicebus_topic_authorization_rule_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of Namespace. */
    az_servicebus_topic_authorization_rule_update_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_servicebus_topic_authorization_rule_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_servicebus_topic_authorization_rule_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_servicebus_topic_authorization_rule_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_servicebus_topic_authorization_rule_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Name of Topic. */
    az_servicebus_topic_authorization_rule_update_command_builder.prototype.topicName = function (value) {
        this.setFlag("--topic-name", value);
        return this;
    };
    return az_servicebus_topic_authorization_rule_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Create the ServiceBus Rule for Subscription.
 *
 * Syntax:
 * ```
 * az servicebus topic subscription rule create --name
 *                                              --namespace-name
 *                                              --resource-group
 *                                              --subscription-name
 *                                              --topic-name
 *                                              [--action-compatibility-level]
 *                                              [--action-sql-expression]
 *                                              [--content-type]
 *                                              [--correlation-id]
 *                                              [--enable-action-preprocessing {false, true}]
 *                                              [--enable-correlation-preprocessing {false, true}]
 *                                              [--enable-sql-preprocessing {false, true}]
 *                                              [--filter-sql-expression]
 *                                              [--label]
 *                                              [--message-id]
 *                                              [--reply-to]
 *                                              [--reply-to-session-id]
 *                                              [--session-id]
 *                                              [--subscription]
 *                                              [--to]
 * ```
 *
 * @param {string} name Name of Rule.
 * @param {string} namespaceName Name of Namespace.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} subscriptionName Name of Subscription.
 * @param {string} topicName Name of Topic.
 */
var az_servicebus_topic_subscription_rule_create_command_builder = /** @class */ (function (_super) {
    __extends(az_servicebus_topic_subscription_rule_create_command_builder, _super);
    function az_servicebus_topic_subscription_rule_create_command_builder(commandPath, resultDataTypeName, name, namespaceName, resourceGroup, subscriptionName, topicName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.namespaceName(namespaceName);
        _this.resourceGroup(resourceGroup);
        _this.subscriptionName(subscriptionName);
        _this.topicName(topicName);
        return _this;
    }
    /** Name of Rule. */
    az_servicebus_topic_subscription_rule_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of Namespace. */
    az_servicebus_topic_subscription_rule_create_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_servicebus_topic_subscription_rule_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of Subscription. */
    az_servicebus_topic_subscription_rule_create_command_builder.prototype.subscriptionName = function (value) {
        this.setFlag("--subscription-name", value);
        return this;
    };
    /** Name of Topic. */
    az_servicebus_topic_subscription_rule_create_command_builder.prototype.topicName = function (value) {
        this.setFlag("--topic-name", value);
        return this;
    };
    /** This property is reserved for future use. An integer value showing the compatibility level, currently hard-coded to 20. */
    az_servicebus_topic_subscription_rule_create_command_builder.prototype.actionCompatibilityLevel = function (value) {
        this.setFlag("--action-compatibility-level", value);
        return this;
    };
    /** Action SQL expression. */
    az_servicebus_topic_subscription_rule_create_command_builder.prototype.actionSqlExpression = function (value) {
        this.setFlag("--action-sql-expression", value);
        return this;
    };
    /** Content type of message. */
    az_servicebus_topic_subscription_rule_create_command_builder.prototype.contentType = function (value) {
        this.setFlag("--content-type", value);
        return this;
    };
    /** Identifier of correlation. */
    az_servicebus_topic_subscription_rule_create_command_builder.prototype.correlationId = function (value) {
        this.setFlag("--correlation-id", value);
        return this;
    };
    /** A boolean value that indicates whether the rule action requires preprocessing. */
    az_servicebus_topic_subscription_rule_create_command_builder.prototype.enableActionPreprocessing = function (value) {
        this.setFlag("--enable-action-preprocessing", value.toString());
        return this;
    };
    /** A boolean value that indicates whether the rule action requires preprocessing. */
    az_servicebus_topic_subscription_rule_create_command_builder.prototype.enableCorrelationPreprocessing = function (value) {
        this.setFlag("--enable-correlation-preprocessing", value.toString());
        return this;
    };
    /** A boolean value that indicates whether the rule action requires preprocessing. */
    az_servicebus_topic_subscription_rule_create_command_builder.prototype.enableSqlPreprocessing = function (value) {
        this.setFlag("--enable-sql-preprocessing", value.toString());
        return this;
    };
    /** SQL expression. e.g. myproperty=test. */
    az_servicebus_topic_subscription_rule_create_command_builder.prototype.filterSqlExpression = function (value) {
        this.setFlag("--filter-sql-expression", value);
        return this;
    };
    /** Application specific label. */
    az_servicebus_topic_subscription_rule_create_command_builder.prototype.label = function (value) {
        this.setFlag("--label", value);
        return this;
    };
    /** Identifier of message. */
    az_servicebus_topic_subscription_rule_create_command_builder.prototype.messageId = function (value) {
        this.setFlag("--message-id", value);
        return this;
    };
    /** Address of the queue to reply to. */
    az_servicebus_topic_subscription_rule_create_command_builder.prototype.replyTo = function (value) {
        this.setFlag("--reply-to", value);
        return this;
    };
    /** Session identifier to reply to. */
    az_servicebus_topic_subscription_rule_create_command_builder.prototype.replyToSessionId = function (value) {
        this.setFlag("--reply-to-session-id", value);
        return this;
    };
    /** Session identifier. */
    az_servicebus_topic_subscription_rule_create_command_builder.prototype.sessionId = function (value) {
        this.setFlag("--session-id", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_servicebus_topic_subscription_rule_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Address to send to. */
    az_servicebus_topic_subscription_rule_create_command_builder.prototype.to = function (value) {
        this.setFlag("--to", value);
        return this;
    };
    return az_servicebus_topic_subscription_rule_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Deletes the ServiceBus Rule.
 *
 * Syntax:
 * ```
 * az servicebus topic subscription rule delete [--ids]
 *                                              [--name]
 *                                              [--namespace-name]
 *                                              [--resource-group]
 *                                              [--subscription]
 *                                              [--subscription-name]
 *                                              [--topic-name]
 * ```
 */
var az_servicebus_topic_subscription_rule_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_servicebus_topic_subscription_rule_delete_command_builder, _super);
    function az_servicebus_topic_subscription_rule_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_servicebus_topic_subscription_rule_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of Rule. */
    az_servicebus_topic_subscription_rule_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of Namespace. */
    az_servicebus_topic_subscription_rule_delete_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_servicebus_topic_subscription_rule_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_servicebus_topic_subscription_rule_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Name of Subscription. */
    az_servicebus_topic_subscription_rule_delete_command_builder.prototype.subscriptionName = function (value) {
        this.setFlag("--subscription-name", value);
        return this;
    };
    /** Name of Topic. */
    az_servicebus_topic_subscription_rule_delete_command_builder.prototype.topicName = function (value) {
        this.setFlag("--topic-name", value);
        return this;
    };
    return az_servicebus_topic_subscription_rule_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List the ServiceBus Rule by Subscription.
 *
 * Syntax:
 * ```
 * az servicebus topic subscription rule list --namespace-name
 *                                            --resource-group
 *                                            --subscription-name
 *                                            --topic-name
 *                                            [--query-examples]
 *                                            [--skip]
 *                                            [--subscription]
 *                                            [--top]
 * ```
 *
 * @param {string} namespaceName Name of Namespace.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} subscriptionName Name of Subscription.
 * @param {string} topicName Name of Topic.
 */
var az_servicebus_topic_subscription_rule_list_command_builder = /** @class */ (function (_super) {
    __extends(az_servicebus_topic_subscription_rule_list_command_builder, _super);
    function az_servicebus_topic_subscription_rule_list_command_builder(commandPath, resultDataTypeName, namespaceName, resourceGroup, subscriptionName, topicName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.namespaceName(namespaceName);
        _this.resourceGroup(resourceGroup);
        _this.subscriptionName(subscriptionName);
        _this.topicName(topicName);
        return _this;
    }
    /** Name of Namespace. */
    az_servicebus_topic_subscription_rule_list_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_servicebus_topic_subscription_rule_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of Subscription. */
    az_servicebus_topic_subscription_rule_list_command_builder.prototype.subscriptionName = function (value) {
        this.setFlag("--subscription-name", value);
        return this;
    };
    /** Name of Topic. */
    az_servicebus_topic_subscription_rule_list_command_builder.prototype.topicName = function (value) {
        this.setFlag("--topic-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_servicebus_topic_subscription_rule_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Skip is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skip parameter that specifies a starting point to use for subsequent calls. */
    az_servicebus_topic_subscription_rule_list_command_builder.prototype.skip = function (value) {
        this.setFlag("--skip", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_servicebus_topic_subscription_rule_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** May be used to limit the number of results to the most recent N usageDetails. */
    az_servicebus_topic_subscription_rule_list_command_builder.prototype.top = function (value) {
        this.setFlag("--top", value);
        return this;
    };
    return az_servicebus_topic_subscription_rule_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Shows ServiceBus Rule Details.
 *
 * Syntax:
 * ```
 * az servicebus topic subscription rule show [--ids]
 *                                            [--name]
 *                                            [--namespace-name]
 *                                            [--query-examples]
 *                                            [--resource-group]
 *                                            [--subscription]
 *                                            [--subscription-name]
 *                                            [--topic-name]
 * ```
 */
var az_servicebus_topic_subscription_rule_show_command_builder = /** @class */ (function (_super) {
    __extends(az_servicebus_topic_subscription_rule_show_command_builder, _super);
    function az_servicebus_topic_subscription_rule_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_servicebus_topic_subscription_rule_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of Rule. */
    az_servicebus_topic_subscription_rule_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of Namespace. */
    az_servicebus_topic_subscription_rule_show_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_servicebus_topic_subscription_rule_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_servicebus_topic_subscription_rule_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_servicebus_topic_subscription_rule_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Name of Subscription. */
    az_servicebus_topic_subscription_rule_show_command_builder.prototype.subscriptionName = function (value) {
        this.setFlag("--subscription-name", value);
        return this;
    };
    /** Name of Topic. */
    az_servicebus_topic_subscription_rule_show_command_builder.prototype.topicName = function (value) {
        this.setFlag("--topic-name", value);
        return this;
    };
    return az_servicebus_topic_subscription_rule_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Updates the ServiceBus Rule for Subscription.
 *
 * Syntax:
 * ```
 * az servicebus topic subscription rule update [--action-compatibility-level]
 *                                              [--action-sql-expression]
 *                                              [--add]
 *                                              [--content-type]
 *                                              [--correlation-id]
 *                                              [--enable-action-preprocessing {false, true}]
 *                                              [--enable-correlation-preprocessing {false, true}]
 *                                              [--enable-sql-preprocessing {false, true}]
 *                                              [--filter-sql-expression]
 *                                              [--force-string]
 *                                              [--ids]
 *                                              [--label]
 *                                              [--message-id]
 *                                              [--name]
 *                                              [--namespace-name]
 *                                              [--remove]
 *                                              [--reply-to]
 *                                              [--reply-to-session-id]
 *                                              [--resource-group]
 *                                              [--session-id]
 *                                              [--set]
 *                                              [--subscription]
 *                                              [--subscription-name]
 *                                              [--to]
 *                                              [--topic-name]
 * ```
 */
var az_servicebus_topic_subscription_rule_update_command_builder = /** @class */ (function (_super) {
    __extends(az_servicebus_topic_subscription_rule_update_command_builder, _super);
    function az_servicebus_topic_subscription_rule_update_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** This property is reserved for future use. An integer value showing the compatibility level, currently hard-coded to 20. */
    az_servicebus_topic_subscription_rule_update_command_builder.prototype.actionCompatibilityLevel = function (value) {
        this.setFlag("--action-compatibility-level", value);
        return this;
    };
    /** Action SQL expression. */
    az_servicebus_topic_subscription_rule_update_command_builder.prototype.actionSqlExpression = function (value) {
        this.setFlag("--action-sql-expression", value);
        return this;
    };
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_servicebus_topic_subscription_rule_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** Content type of message. */
    az_servicebus_topic_subscription_rule_update_command_builder.prototype.contentType = function (value) {
        this.setFlag("--content-type", value);
        return this;
    };
    /** Identifier of correlation. */
    az_servicebus_topic_subscription_rule_update_command_builder.prototype.correlationId = function (value) {
        this.setFlag("--correlation-id", value);
        return this;
    };
    /** A boolean value that indicates whether the rule action requires preprocessing. */
    az_servicebus_topic_subscription_rule_update_command_builder.prototype.enableActionPreprocessing = function (value) {
        this.setFlag("--enable-action-preprocessing", value.toString());
        return this;
    };
    /** A boolean value that indicates whether the rule action requires preprocessing. */
    az_servicebus_topic_subscription_rule_update_command_builder.prototype.enableCorrelationPreprocessing = function (value) {
        this.setFlag("--enable-correlation-preprocessing", value.toString());
        return this;
    };
    /** A boolean value that indicates whether the rule action requires preprocessing. */
    az_servicebus_topic_subscription_rule_update_command_builder.prototype.enableSqlPreprocessing = function (value) {
        this.setFlag("--enable-sql-preprocessing", value.toString());
        return this;
    };
    /** SQL expression. e.g. myproperty=test. */
    az_servicebus_topic_subscription_rule_update_command_builder.prototype.filterSqlExpression = function (value) {
        this.setFlag("--filter-sql-expression", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_servicebus_topic_subscription_rule_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_servicebus_topic_subscription_rule_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Application specific label. */
    az_servicebus_topic_subscription_rule_update_command_builder.prototype.label = function (value) {
        this.setFlag("--label", value);
        return this;
    };
    /** Identifier of message. */
    az_servicebus_topic_subscription_rule_update_command_builder.prototype.messageId = function (value) {
        this.setFlag("--message-id", value);
        return this;
    };
    /** Name of Rule. */
    az_servicebus_topic_subscription_rule_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of Namespace. */
    az_servicebus_topic_subscription_rule_update_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_servicebus_topic_subscription_rule_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Address of the queue to reply to. */
    az_servicebus_topic_subscription_rule_update_command_builder.prototype.replyTo = function (value) {
        this.setFlag("--reply-to", value);
        return this;
    };
    /** Session identifier to reply to. */
    az_servicebus_topic_subscription_rule_update_command_builder.prototype.replyToSessionId = function (value) {
        this.setFlag("--reply-to-session-id", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_servicebus_topic_subscription_rule_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Session identifier. */
    az_servicebus_topic_subscription_rule_update_command_builder.prototype.sessionId = function (value) {
        this.setFlag("--session-id", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_servicebus_topic_subscription_rule_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_servicebus_topic_subscription_rule_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Name of Subscription. */
    az_servicebus_topic_subscription_rule_update_command_builder.prototype.subscriptionName = function (value) {
        this.setFlag("--subscription-name", value);
        return this;
    };
    /** Address to send to. */
    az_servicebus_topic_subscription_rule_update_command_builder.prototype.to = function (value) {
        this.setFlag("--to", value);
        return this;
    };
    /** Name of Topic. */
    az_servicebus_topic_subscription_rule_update_command_builder.prototype.topicName = function (value) {
        this.setFlag("--topic-name", value);
        return this;
    };
    return az_servicebus_topic_subscription_rule_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Create the ServiceBus Subscription.
 *
 * Syntax:
 * ```
 * az servicebus topic subscription create --name
 *                                         --namespace-name
 *                                         --resource-group
 *                                         --topic-name
 *                                         [--auto-delete-on-idle]
 *                                         [--dead-letter-on-filter-exceptions {false, true}]
 *                                         [--default-message-time-to-live]
 *                                         [--enable-batched-operations {false, true}]
 *                                         [--enable-dead-lettering-on-message-expiration {false, true}]
 *                                         [--enable-session {false, true}]
 *                                         [--forward-dead-lettered-messages-to]
 *                                         [--forward-to]
 *                                         [--lock-duration]
 *                                         [--max-delivery-count]
 *                                         [--status {Active, Disabled, ReceiveDisabled, SendDisabled}]
 *                                         [--subscription]
 * ```
 *
 * @param {string} name Name of Subscription.
 * @param {string} namespaceName Name of Namespace.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} topicName Name of Topic.
 */
var az_servicebus_topic_subscription_create_command_builder = /** @class */ (function (_super) {
    __extends(az_servicebus_topic_subscription_create_command_builder, _super);
    function az_servicebus_topic_subscription_create_command_builder(commandPath, resultDataTypeName, name, namespaceName, resourceGroup, topicName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.namespaceName(namespaceName);
        _this.resourceGroup(resourceGroup);
        _this.topicName(topicName);
        return _this;
    }
    /** Name of Subscription. */
    az_servicebus_topic_subscription_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of Namespace. */
    az_servicebus_topic_subscription_create_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_servicebus_topic_subscription_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of Topic. */
    az_servicebus_topic_subscription_create_command_builder.prototype.topicName = function (value) {
        this.setFlag("--topic-name", value);
        return this;
    };
    /** ISO 8601 timeSpan  or duration time format for idle interval after which the topic is automatically deleted. The minimum duration is 5 minutes. */
    az_servicebus_topic_subscription_create_command_builder.prototype.autoDeleteOnIdle = function (value) {
        this.setFlag("--auto-delete-on-idle", value);
        return this;
    };
    /** Allow dead lettering when filter evaluation exceptions occur. */
    az_servicebus_topic_subscription_create_command_builder.prototype.deadLetterOnFilterExceptions = function (value) {
        this.setFlag("--dead-letter-on-filter-exceptions", value.toString());
        return this;
    };
    /** ISO 8601 or duration time format for Default message timespan to live value. This is the duration after which the message expires, starting from when the message is sent to Service Bus. This is the default value used when TimeToLive is not set on a message itself. */
    az_servicebus_topic_subscription_create_command_builder.prototype.defaultMessageTimeToLive = function (value) {
        this.setFlag("--default-message-time-to-live", value);
        return this;
    };
    /** Allow server-side batched operations. */
    az_servicebus_topic_subscription_create_command_builder.prototype.enableBatchedOperations = function (value) {
        this.setFlag("--enable-batched-operations", value.toString());
        return this;
    };
    /** A boolean Value that indicates whether a subscription has dead letter support when a message expires. */
    az_servicebus_topic_subscription_create_command_builder.prototype.enableDeadLetteringOnMessageExpiration = function (value) {
        this.setFlag("--enable-dead-lettering-on-message-expiration", value.toString());
        return this;
    };
    /** A boolean value indicating if a subscription supports the concept of sessions. */
    az_servicebus_topic_subscription_create_command_builder.prototype.enableSession = function (value) {
        this.setFlag("--enable-session", value.toString());
        return this;
    };
    /** Queue/Topic name to forward the Dead Letter message. */
    az_servicebus_topic_subscription_create_command_builder.prototype.forwardDeadLetteredMessagesTo = function (value) {
        this.setFlag("--forward-dead-lettered-messages-to", value);
        return this;
    };
    /** Queue/Topic name to forward the messages. */
    az_servicebus_topic_subscription_create_command_builder.prototype.forwardTo = function (value) {
        this.setFlag("--forward-to", value);
        return this;
    };
    /** ISO 8601 or duration format (day:minute:seconds) for lock duration timespan for the subscription. The default value is 1 minute. */
    az_servicebus_topic_subscription_create_command_builder.prototype.lockDuration = function (value) {
        this.setFlag("--lock-duration", value);
        return this;
    };
    /** Number of maximum deliveries. */
    az_servicebus_topic_subscription_create_command_builder.prototype.maxDeliveryCount = function (value) {
        this.setFlag("--max-delivery-count", value);
        return this;
    };
    /** Enumerates the possible values for the status of a messaging entity. */
    az_servicebus_topic_subscription_create_command_builder.prototype.status = function (value) {
        this.setFlag("--status", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_servicebus_topic_subscription_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_servicebus_topic_subscription_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Deletes the Service Bus Subscription.
 *
 * Syntax:
 * ```
 * az servicebus topic subscription delete [--ids]
 *                                         [--name]
 *                                         [--namespace-name]
 *                                         [--resource-group]
 *                                         [--subscription]
 *                                         [--topic-name]
 * ```
 */
var az_servicebus_topic_subscription_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_servicebus_topic_subscription_delete_command_builder, _super);
    function az_servicebus_topic_subscription_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_servicebus_topic_subscription_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of Subscription. */
    az_servicebus_topic_subscription_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of Namespace. */
    az_servicebus_topic_subscription_delete_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_servicebus_topic_subscription_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_servicebus_topic_subscription_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Name of Topic. */
    az_servicebus_topic_subscription_delete_command_builder.prototype.topicName = function (value) {
        this.setFlag("--topic-name", value);
        return this;
    };
    return az_servicebus_topic_subscription_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List the Subscription by Service Bus Topic.
 *
 * Syntax:
 * ```
 * az servicebus topic subscription list --namespace-name
 *                                       --resource-group
 *                                       --topic-name
 *                                       [--query-examples]
 *                                       [--skip]
 *                                       [--subscription]
 *                                       [--top]
 * ```
 *
 * @param {string} namespaceName Name of Namespace.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} topicName Name of Topic.
 */
var az_servicebus_topic_subscription_list_command_builder = /** @class */ (function (_super) {
    __extends(az_servicebus_topic_subscription_list_command_builder, _super);
    function az_servicebus_topic_subscription_list_command_builder(commandPath, resultDataTypeName, namespaceName, resourceGroup, topicName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.namespaceName(namespaceName);
        _this.resourceGroup(resourceGroup);
        _this.topicName(topicName);
        return _this;
    }
    /** Name of Namespace. */
    az_servicebus_topic_subscription_list_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_servicebus_topic_subscription_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of Topic. */
    az_servicebus_topic_subscription_list_command_builder.prototype.topicName = function (value) {
        this.setFlag("--topic-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_servicebus_topic_subscription_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Skip is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skip parameter that specifies a starting point to use for subsequent calls. */
    az_servicebus_topic_subscription_list_command_builder.prototype.skip = function (value) {
        this.setFlag("--skip", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_servicebus_topic_subscription_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** May be used to limit the number of results to the most recent N usageDetails. */
    az_servicebus_topic_subscription_list_command_builder.prototype.top = function (value) {
        this.setFlag("--top", value);
        return this;
    };
    return az_servicebus_topic_subscription_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Shows Service Bus Subscription Details.
 *
 * Syntax:
 * ```
 * az servicebus topic subscription show [--ids]
 *                                       [--name]
 *                                       [--namespace-name]
 *                                       [--query-examples]
 *                                       [--resource-group]
 *                                       [--subscription]
 *                                       [--topic-name]
 * ```
 */
var az_servicebus_topic_subscription_show_command_builder = /** @class */ (function (_super) {
    __extends(az_servicebus_topic_subscription_show_command_builder, _super);
    function az_servicebus_topic_subscription_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_servicebus_topic_subscription_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of Subscription. */
    az_servicebus_topic_subscription_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of Namespace. */
    az_servicebus_topic_subscription_show_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_servicebus_topic_subscription_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_servicebus_topic_subscription_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_servicebus_topic_subscription_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Name of Topic. */
    az_servicebus_topic_subscription_show_command_builder.prototype.topicName = function (value) {
        this.setFlag("--topic-name", value);
        return this;
    };
    return az_servicebus_topic_subscription_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Updates the ServiceBus Subscription.
 *
 * Syntax:
 * ```
 * az servicebus topic subscription update [--add]
 *                                         [--auto-delete-on-idle]
 *                                         [--dead-letter-on-filter-exceptions {false, true}]
 *                                         [--default-message-time-to-live]
 *                                         [--enable-batched-operations {false, true}]
 *                                         [--enable-dead-lettering-on-message-expiration {false, true}]
 *                                         [--enable-session {false, true}]
 *                                         [--force-string]
 *                                         [--forward-dead-lettered-messages-to]
 *                                         [--forward-to]
 *                                         [--ids]
 *                                         [--lock-duration]
 *                                         [--max-delivery-count]
 *                                         [--name]
 *                                         [--namespace-name]
 *                                         [--remove]
 *                                         [--resource-group]
 *                                         [--set]
 *                                         [--status {Active, Disabled, ReceiveDisabled, SendDisabled}]
 *                                         [--subscription]
 *                                         [--topic-name]
 * ```
 */
var az_servicebus_topic_subscription_update_command_builder = /** @class */ (function (_super) {
    __extends(az_servicebus_topic_subscription_update_command_builder, _super);
    function az_servicebus_topic_subscription_update_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_servicebus_topic_subscription_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** ISO 8601 timeSpan  or duration time format for idle interval after which the topic is automatically deleted. The minimum duration is 5 minutes. */
    az_servicebus_topic_subscription_update_command_builder.prototype.autoDeleteOnIdle = function (value) {
        this.setFlag("--auto-delete-on-idle", value);
        return this;
    };
    /** Allow dead lettering when filter evaluation exceptions occur. */
    az_servicebus_topic_subscription_update_command_builder.prototype.deadLetterOnFilterExceptions = function (value) {
        this.setFlag("--dead-letter-on-filter-exceptions", value.toString());
        return this;
    };
    /** ISO 8601 or duration time format for Default message timespan to live value. This is the duration after which the message expires, starting from when the message is sent to Service Bus. This is the default value used when TimeToLive is not set on a message itself. */
    az_servicebus_topic_subscription_update_command_builder.prototype.defaultMessageTimeToLive = function (value) {
        this.setFlag("--default-message-time-to-live", value);
        return this;
    };
    /** Allow server-side batched operations. */
    az_servicebus_topic_subscription_update_command_builder.prototype.enableBatchedOperations = function (value) {
        this.setFlag("--enable-batched-operations", value.toString());
        return this;
    };
    /** A boolean Value that indicates whether a subscription has dead letter support when a message expires. */
    az_servicebus_topic_subscription_update_command_builder.prototype.enableDeadLetteringOnMessageExpiration = function (value) {
        this.setFlag("--enable-dead-lettering-on-message-expiration", value.toString());
        return this;
    };
    /** A boolean value indicating if a subscription supports the concept of sessions. */
    az_servicebus_topic_subscription_update_command_builder.prototype.enableSession = function (value) {
        this.setFlag("--enable-session", value.toString());
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_servicebus_topic_subscription_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** Queue/Topic name to forward the Dead Letter message. */
    az_servicebus_topic_subscription_update_command_builder.prototype.forwardDeadLetteredMessagesTo = function (value) {
        this.setFlag("--forward-dead-lettered-messages-to", value);
        return this;
    };
    /** Queue/Topic name to forward the messages. */
    az_servicebus_topic_subscription_update_command_builder.prototype.forwardTo = function (value) {
        this.setFlag("--forward-to", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_servicebus_topic_subscription_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** ISO 8601 or duration format (day:minute:seconds) for lock duration timespan for the subscription. The default value is 1 minute. */
    az_servicebus_topic_subscription_update_command_builder.prototype.lockDuration = function (value) {
        this.setFlag("--lock-duration", value);
        return this;
    };
    /** Number of maximum deliveries. */
    az_servicebus_topic_subscription_update_command_builder.prototype.maxDeliveryCount = function (value) {
        this.setFlag("--max-delivery-count", value);
        return this;
    };
    /** Name of Subscription. */
    az_servicebus_topic_subscription_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of Namespace. */
    az_servicebus_topic_subscription_update_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_servicebus_topic_subscription_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_servicebus_topic_subscription_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_servicebus_topic_subscription_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Enumerates the possible values for the status of a messaging entity. */
    az_servicebus_topic_subscription_update_command_builder.prototype.status = function (value) {
        this.setFlag("--status", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_servicebus_topic_subscription_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Name of Topic. */
    az_servicebus_topic_subscription_update_command_builder.prototype.topicName = function (value) {
        this.setFlag("--topic-name", value);
        return this;
    };
    return az_servicebus_topic_subscription_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Create the Service Bus Topic.
 *
 * Syntax:
 * ```
 * az servicebus topic create --name
 *                            --namespace-name
 *                            --resource-group
 *                            [--auto-delete-on-idle]
 *                            [--default-message-time-to-live]
 *                            [--duplicate-detection-history-time-window]
 *                            [--enable-batched-operations {false, true}]
 *                            [--enable-duplicate-detection {false, true}]
 *                            [--enable-express {false, true}]
 *                            [--enable-ordering {false, true}]
 *                            [--enable-partitioning {false, true}]
 *                            [--max-size {1024, 10240, 2048, 20480, 3072, 4096, 40960, 5120, 81920}]
 *                            [--status {Active, Disabled, SendDisabled}]
 *                            [--subscription]
 * ```
 *
 * @param {string} name Name of Topic.
 * @param {string} namespaceName Name of Namespace.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_servicebus_topic_create_command_builder = /** @class */ (function (_super) {
    __extends(az_servicebus_topic_create_command_builder, _super);
    function az_servicebus_topic_create_command_builder(commandPath, resultDataTypeName, name, namespaceName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.namespaceName(namespaceName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of Topic. */
    az_servicebus_topic_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of Namespace. */
    az_servicebus_topic_create_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_servicebus_topic_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** ISO 8601 timespan or duration time format for idle interval after which the topic is automatically deleted. The minimum duration is 5 minutes. */
    az_servicebus_topic_create_command_builder.prototype.autoDeleteOnIdle = function (value) {
        this.setFlag("--auto-delete-on-idle", value);
        return this;
    };
    /** ISO 8601 or duration time format for Default message timespan to live value. This is the duration after which the message expires, starting from when the message is sent to Service Bus. This is the default value used when TimeToLive is not set on a message itself. */
    az_servicebus_topic_create_command_builder.prototype.defaultMessageTimeToLive = function (value) {
        this.setFlag("--default-message-time-to-live", value);
        return this;
    };
    /** ISO 8601 timespan or duration time format for structure that defines the duration of the duplicate detection history. The default value is 10 minutes. */
    az_servicebus_topic_create_command_builder.prototype.duplicateDetectionHistoryTimeWindow = function (value) {
        this.setFlag("--duplicate-detection-history-time-window", value);
        return this;
    };
    /** Allow server-side batched operations. */
    az_servicebus_topic_create_command_builder.prototype.enableBatchedOperations = function (value) {
        this.setFlag("--enable-batched-operations", value.toString());
        return this;
    };
    /** A boolean value indicating if this topic requires duplicate detection. */
    az_servicebus_topic_create_command_builder.prototype.enableDuplicateDetection = function (value) {
        this.setFlag("--enable-duplicate-detection", value.toString());
        return this;
    };
    /** A boolean value that indicates whether Express Entities are enabled. An express topic holds a message in memory temporarily before writing it to persistent storage. */
    az_servicebus_topic_create_command_builder.prototype.enableExpress = function (value) {
        this.setFlag("--enable-express", value.toString());
        return this;
    };
    /** A boolean value that indicates whether the topic supports ordering. */
    az_servicebus_topic_create_command_builder.prototype.enableOrdering = function (value) {
        this.setFlag("--enable-ordering", value.toString());
        return this;
    };
    /** A boolean value that indicates whether the topic to be partitioned across multiple message brokers is enabled. */
    az_servicebus_topic_create_command_builder.prototype.enablePartitioning = function (value) {
        this.setFlag("--enable-partitioning", value.toString());
        return this;
    };
    /** Maximum size of topic in megabytes, which is the size of the memory allocated for the topic. Default is 1024. Max for Standard SKU is 5120 and for Premium SKU is 81920. */
    az_servicebus_topic_create_command_builder.prototype.maxSize = function (value) {
        this.setFlag("--max-size", value);
        return this;
    };
    /** Enumerates the possible values for the status of a messaging entity. */
    az_servicebus_topic_create_command_builder.prototype.status = function (value) {
        this.setFlag("--status", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_servicebus_topic_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_servicebus_topic_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Deletes the Service Bus Topic.
 *
 * Syntax:
 * ```
 * az servicebus topic delete [--ids]
 *                            [--name]
 *                            [--namespace-name]
 *                            [--resource-group]
 *                            [--subscription]
 * ```
 */
var az_servicebus_topic_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_servicebus_topic_delete_command_builder, _super);
    function az_servicebus_topic_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_servicebus_topic_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of Topic. */
    az_servicebus_topic_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of Namespace. */
    az_servicebus_topic_delete_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_servicebus_topic_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_servicebus_topic_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_servicebus_topic_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List the Topic by Service Bus Namepsace.
 *
 * Syntax:
 * ```
 * az servicebus topic list --namespace-name
 *                          --resource-group
 *                          [--query-examples]
 *                          [--skip]
 *                          [--subscription]
 *                          [--top]
 * ```
 *
 * @param {string} namespaceName Name of Namespace.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_servicebus_topic_list_command_builder = /** @class */ (function (_super) {
    __extends(az_servicebus_topic_list_command_builder, _super);
    function az_servicebus_topic_list_command_builder(commandPath, resultDataTypeName, namespaceName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.namespaceName(namespaceName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of Namespace. */
    az_servicebus_topic_list_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_servicebus_topic_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_servicebus_topic_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Skip is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skip parameter that specifies a starting point to use for subsequent calls. */
    az_servicebus_topic_list_command_builder.prototype.skip = function (value) {
        this.setFlag("--skip", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_servicebus_topic_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** May be used to limit the number of results to the most recent N usageDetails. */
    az_servicebus_topic_list_command_builder.prototype.top = function (value) {
        this.setFlag("--top", value);
        return this;
    };
    return az_servicebus_topic_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Shows the Service Bus Topic Details.
 *
 * Syntax:
 * ```
 * az servicebus topic show [--ids]
 *                          [--name]
 *                          [--namespace-name]
 *                          [--query-examples]
 *                          [--resource-group]
 *                          [--subscription]
 * ```
 */
var az_servicebus_topic_show_command_builder = /** @class */ (function (_super) {
    __extends(az_servicebus_topic_show_command_builder, _super);
    function az_servicebus_topic_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_servicebus_topic_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of Topic. */
    az_servicebus_topic_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of Namespace. */
    az_servicebus_topic_show_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_servicebus_topic_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_servicebus_topic_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_servicebus_topic_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_servicebus_topic_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Updates the Service Bus Topic.
 *
 * Syntax:
 * ```
 * az servicebus topic update [--add]
 *                            [--auto-delete-on-idle]
 *                            [--default-message-time-to-live]
 *                            [--duplicate-detection-history-time-window]
 *                            [--enable-batched-operations {false, true}]
 *                            [--enable-duplicate-detection {false, true}]
 *                            [--enable-express {false, true}]
 *                            [--enable-ordering {false, true}]
 *                            [--enable-partitioning {false, true}]
 *                            [--force-string]
 *                            [--ids]
 *                            [--max-size {1024, 10240, 2048, 20480, 3072, 4096, 40960, 5120, 81920}]
 *                            [--name]
 *                            [--namespace-name]
 *                            [--remove]
 *                            [--resource-group]
 *                            [--set]
 *                            [--status {Active, Disabled, SendDisabled}]
 *                            [--subscription]
 * ```
 */
var az_servicebus_topic_update_command_builder = /** @class */ (function (_super) {
    __extends(az_servicebus_topic_update_command_builder, _super);
    function az_servicebus_topic_update_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_servicebus_topic_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** ISO 8601 timespan or duration time format for idle interval after which the topic is automatically deleted. The minimum duration is 5 minutes. */
    az_servicebus_topic_update_command_builder.prototype.autoDeleteOnIdle = function (value) {
        this.setFlag("--auto-delete-on-idle", value);
        return this;
    };
    /** ISO 8601 or duration time format for Default message timespan to live value. This is the duration after which the message expires, starting from when the message is sent to Service Bus. This is the default value used when TimeToLive is not set on a message itself. */
    az_servicebus_topic_update_command_builder.prototype.defaultMessageTimeToLive = function (value) {
        this.setFlag("--default-message-time-to-live", value);
        return this;
    };
    /** ISO 8601 timespan or duration time format for structure that defines the duration of the duplicate detection history. The default value is 10 minutes. */
    az_servicebus_topic_update_command_builder.prototype.duplicateDetectionHistoryTimeWindow = function (value) {
        this.setFlag("--duplicate-detection-history-time-window", value);
        return this;
    };
    /** Allow server-side batched operations. */
    az_servicebus_topic_update_command_builder.prototype.enableBatchedOperations = function (value) {
        this.setFlag("--enable-batched-operations", value.toString());
        return this;
    };
    /** A boolean value indicating if this topic requires duplicate detection. */
    az_servicebus_topic_update_command_builder.prototype.enableDuplicateDetection = function (value) {
        this.setFlag("--enable-duplicate-detection", value.toString());
        return this;
    };
    /** A boolean value that indicates whether Express Entities are enabled. An express topic holds a message in memory temporarily before writing it to persistent storage. */
    az_servicebus_topic_update_command_builder.prototype.enableExpress = function (value) {
        this.setFlag("--enable-express", value.toString());
        return this;
    };
    /** A boolean value that indicates whether the topic supports ordering. */
    az_servicebus_topic_update_command_builder.prototype.enableOrdering = function (value) {
        this.setFlag("--enable-ordering", value.toString());
        return this;
    };
    /** A boolean value that indicates whether the topic to be partitioned across multiple message brokers is enabled. */
    az_servicebus_topic_update_command_builder.prototype.enablePartitioning = function (value) {
        this.setFlag("--enable-partitioning", value.toString());
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_servicebus_topic_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_servicebus_topic_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Maximum size of topic in megabytes, which is the size of the memory allocated for the topic. Default is 1024. Max for Standard SKU is 5120 and for Premium SKU is 81920. */
    az_servicebus_topic_update_command_builder.prototype.maxSize = function (value) {
        this.setFlag("--max-size", value);
        return this;
    };
    /** Name of Topic. */
    az_servicebus_topic_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of Namespace. */
    az_servicebus_topic_update_command_builder.prototype.namespaceName = function (value) {
        this.setFlag("--namespace-name", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_servicebus_topic_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_servicebus_topic_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_servicebus_topic_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Enumerates the possible values for the status of a messaging entity. */
    az_servicebus_topic_update_command_builder.prototype.status = function (value) {
        this.setFlag("--status", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_servicebus_topic_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_servicebus_topic_update_command_builder;
}(base_1.CommandBuilder));
