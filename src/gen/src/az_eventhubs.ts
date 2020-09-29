import { CommandBuilder } from '../base';
import { az_eventhubs_cluster_namespace_list_command_result } from './models/az_eventhubs_cluster_namespace_list_command_result'
import { az_eventhubs_cluster_available_region_command_result } from './models/az_eventhubs_cluster_available_region_command_result'
import { az_eventhubs_cluster_create_command_result } from './models/az_eventhubs_cluster_create_command_result'
import { az_eventhubs_cluster_delete_command_result } from './models/az_eventhubs_cluster_delete_command_result'
import { az_eventhubs_cluster_list_command_result } from './models/az_eventhubs_cluster_list_command_result'
import { az_eventhubs_cluster_show_command_result } from './models/az_eventhubs_cluster_show_command_result'
import { az_eventhubs_cluster_update_command_result } from './models/az_eventhubs_cluster_update_command_result'
import { az_eventhubs_cluster_wait_command_result } from './models/az_eventhubs_cluster_wait_command_result'
import { az_eventhubs_eventhub_authorization_rule_keys_list_command_result } from './models/az_eventhubs_eventhub_authorization_rule_keys_list_command_result'
import { az_eventhubs_eventhub_authorization_rule_keys_renew_command_result } from './models/az_eventhubs_eventhub_authorization_rule_keys_renew_command_result'
import { az_eventhubs_eventhub_authorization_rule_create_command_result } from './models/az_eventhubs_eventhub_authorization_rule_create_command_result'
import { az_eventhubs_eventhub_authorization_rule_delete_command_result } from './models/az_eventhubs_eventhub_authorization_rule_delete_command_result'
import { az_eventhubs_eventhub_authorization_rule_list_command_result } from './models/az_eventhubs_eventhub_authorization_rule_list_command_result'
import { az_eventhubs_eventhub_authorization_rule_show_command_result } from './models/az_eventhubs_eventhub_authorization_rule_show_command_result'
import { az_eventhubs_eventhub_authorization_rule_update_command_result } from './models/az_eventhubs_eventhub_authorization_rule_update_command_result'
import { az_eventhubs_eventhub_consumer_group_create_command_result } from './models/az_eventhubs_eventhub_consumer_group_create_command_result'
import { az_eventhubs_eventhub_consumer_group_delete_command_result } from './models/az_eventhubs_eventhub_consumer_group_delete_command_result'
import { az_eventhubs_eventhub_consumer_group_list_command_result } from './models/az_eventhubs_eventhub_consumer_group_list_command_result'
import { az_eventhubs_eventhub_consumer_group_show_command_result } from './models/az_eventhubs_eventhub_consumer_group_show_command_result'
import { az_eventhubs_eventhub_consumer_group_update_command_result } from './models/az_eventhubs_eventhub_consumer_group_update_command_result'
import { az_eventhubs_eventhub_create_command_result } from './models/az_eventhubs_eventhub_create_command_result'
import { az_eventhubs_eventhub_delete_command_result } from './models/az_eventhubs_eventhub_delete_command_result'
import { az_eventhubs_eventhub_list_command_result } from './models/az_eventhubs_eventhub_list_command_result'
import { az_eventhubs_eventhub_show_command_result } from './models/az_eventhubs_eventhub_show_command_result'
import { az_eventhubs_eventhub_update_command_result } from './models/az_eventhubs_eventhub_update_command_result'
import { az_eventhubs_georecovery_alias_authorization_rule_keys_list_command_result } from './models/az_eventhubs_georecovery_alias_authorization_rule_keys_list_command_result'
import { az_eventhubs_georecovery_alias_authorization_rule_list_command_result } from './models/az_eventhubs_georecovery_alias_authorization_rule_list_command_result'
import { az_eventhubs_georecovery_alias_authorization_rule_show_command_result } from './models/az_eventhubs_georecovery_alias_authorization_rule_show_command_result'
import { az_eventhubs_georecovery_alias_break_pair_command_result } from './models/az_eventhubs_georecovery_alias_break_pair_command_result'
import { az_eventhubs_georecovery_alias_delete_command_result } from './models/az_eventhubs_georecovery_alias_delete_command_result'
import { az_eventhubs_georecovery_alias_exists_command_result } from './models/az_eventhubs_georecovery_alias_exists_command_result'
import { az_eventhubs_georecovery_alias_fail_over_command_result } from './models/az_eventhubs_georecovery_alias_fail_over_command_result'
import { az_eventhubs_georecovery_alias_list_command_result } from './models/az_eventhubs_georecovery_alias_list_command_result'
import { az_eventhubs_georecovery_alias_set_command_result } from './models/az_eventhubs_georecovery_alias_set_command_result'
import { az_eventhubs_georecovery_alias_show_command_result } from './models/az_eventhubs_georecovery_alias_show_command_result'
import { az_eventhubs_namespace_authorization_rule_keys_list_command_result } from './models/az_eventhubs_namespace_authorization_rule_keys_list_command_result'
import { az_eventhubs_namespace_authorization_rule_keys_renew_command_result } from './models/az_eventhubs_namespace_authorization_rule_keys_renew_command_result'
import { az_eventhubs_namespace_authorization_rule_create_command_result } from './models/az_eventhubs_namespace_authorization_rule_create_command_result'
import { az_eventhubs_namespace_authorization_rule_delete_command_result } from './models/az_eventhubs_namespace_authorization_rule_delete_command_result'
import { az_eventhubs_namespace_authorization_rule_list_command_result } from './models/az_eventhubs_namespace_authorization_rule_list_command_result'
import { az_eventhubs_namespace_authorization_rule_show_command_result } from './models/az_eventhubs_namespace_authorization_rule_show_command_result'
import { az_eventhubs_namespace_authorization_rule_update_command_result } from './models/az_eventhubs_namespace_authorization_rule_update_command_result'
import { az_eventhubs_namespace_network_rule_add_command_result } from './models/az_eventhubs_namespace_network_rule_add_command_result'
import { az_eventhubs_namespace_network_rule_list_command_result } from './models/az_eventhubs_namespace_network_rule_list_command_result'
import { az_eventhubs_namespace_network_rule_remove_command_result } from './models/az_eventhubs_namespace_network_rule_remove_command_result'
import { az_eventhubs_namespace_create_command_result } from './models/az_eventhubs_namespace_create_command_result'
import { az_eventhubs_namespace_delete_command_result } from './models/az_eventhubs_namespace_delete_command_result'
import { az_eventhubs_namespace_exists_command_result } from './models/az_eventhubs_namespace_exists_command_result'
import { az_eventhubs_namespace_list_command_result } from './models/az_eventhubs_namespace_list_command_result'
import { az_eventhubs_namespace_show_command_result } from './models/az_eventhubs_namespace_show_command_result'
import { az_eventhubs_namespace_update_command_result } from './models/az_eventhubs_namespace_update_command_result'

/** Manage Azure EventHubs Cluster for namespace. */
export class az_eventhubs_cluster_namespace {
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
    static list(name: string, resourceGroup: string): az_eventhubs_cluster_namespace_list_command_builder {
        return new az_eventhubs_cluster_namespace_list_command_builder("az eventhubs cluster namespace list", name, resourceGroup);
    }
}

/** Manage Azure EventHubs Clusters. */
export class az_eventhubs_cluster {
    /**
     * List the quantity of available pre-provisioned Event Hubs Clusters, indexed by Azure region.
     *
     * Syntax:
     * ```
     * az eventhubs cluster available-region [--subscription]
     * ```
     */
    static available_region(): az_eventhubs_cluster_available_region_command_builder {
        return new az_eventhubs_cluster_available_region_command_builder("az eventhubs cluster available-region");
    }

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
    static create(name: string, resourceGroup: string): az_eventhubs_cluster_create_command_builder {
        return new az_eventhubs_cluster_create_command_builder("az eventhubs cluster create", name, resourceGroup);
    }

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
    static delete(name: string, resourceGroup: string): az_eventhubs_cluster_delete_command_builder {
        return new az_eventhubs_cluster_delete_command_builder("az eventhubs cluster delete", name, resourceGroup);
    }

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
    static list(resourceGroup: string): az_eventhubs_cluster_list_command_builder {
        return new az_eventhubs_cluster_list_command_builder("az eventhubs cluster list", resourceGroup);
    }

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
    static show(name: string, resourceGroup: string): az_eventhubs_cluster_show_command_builder {
        return new az_eventhubs_cluster_show_command_builder("az eventhubs cluster show", name, resourceGroup);
    }

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
    static update(name: string, resourceGroup: string): az_eventhubs_cluster_update_command_builder {
        return new az_eventhubs_cluster_update_command_builder("az eventhubs cluster update", name, resourceGroup);
    }

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
    static wait(name: string, resourceGroup: string): az_eventhubs_cluster_wait_command_builder {
        return new az_eventhubs_cluster_wait_command_builder("az eventhubs cluster wait", name, resourceGroup);
    }
}

/** Manage Azure Authorizationrule connection strings for Eventhub. */
export class az_eventhubs_eventhub_authorization_rule_keys {
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
    static list(eventhubName: string, name: string, namespaceName: string, resourceGroup: string): az_eventhubs_eventhub_authorization_rule_keys_list_command_builder {
        return new az_eventhubs_eventhub_authorization_rule_keys_list_command_builder("az eventhubs eventhub authorization-rule keys list", eventhubName, name, namespaceName, resourceGroup);
    }

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
    static renew(key: 'PrimaryKey' | 'SecondaryKey'): az_eventhubs_eventhub_authorization_rule_keys_renew_command_builder {
        return new az_eventhubs_eventhub_authorization_rule_keys_renew_command_builder("az eventhubs eventhub authorization-rule keys renew", key);
    }
}

/** Manage Azure Service Bus Authorizationrule for Eventhub. */
export class az_eventhubs_eventhub_authorization_rule {
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
    static create(eventhubName: string, name: string, namespaceName: string, resourceGroup: string, rights: 'Listen' | 'Manage' | 'Send'): az_eventhubs_eventhub_authorization_rule_create_command_builder {
        return new az_eventhubs_eventhub_authorization_rule_create_command_builder("az eventhubs eventhub authorization-rule create", eventhubName, name, namespaceName, resourceGroup, rights);
    }

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
    static delete(): az_eventhubs_eventhub_authorization_rule_delete_command_builder {
        return new az_eventhubs_eventhub_authorization_rule_delete_command_builder("az eventhubs eventhub authorization-rule delete");
    }

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
    static list(eventhubName: string, namespaceName: string, resourceGroup: string): az_eventhubs_eventhub_authorization_rule_list_command_builder {
        return new az_eventhubs_eventhub_authorization_rule_list_command_builder("az eventhubs eventhub authorization-rule list", eventhubName, namespaceName, resourceGroup);
    }

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
    static show(): az_eventhubs_eventhub_authorization_rule_show_command_builder {
        return new az_eventhubs_eventhub_authorization_rule_show_command_builder("az eventhubs eventhub authorization-rule show");
    }

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
    static update(rights: 'Listen' | 'Manage' | 'Send'): az_eventhubs_eventhub_authorization_rule_update_command_builder {
        return new az_eventhubs_eventhub_authorization_rule_update_command_builder("az eventhubs eventhub authorization-rule update", rights);
    }
}

/** Manage Azure Event Hubs consumergroup. */
export class az_eventhubs_eventhub_consumer_group {
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
    static create(eventhubName: string, name: string, namespaceName: string, resourceGroup: string): az_eventhubs_eventhub_consumer_group_create_command_builder {
        return new az_eventhubs_eventhub_consumer_group_create_command_builder("az eventhubs eventhub consumer-group create", eventhubName, name, namespaceName, resourceGroup);
    }

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
    static delete(): az_eventhubs_eventhub_consumer_group_delete_command_builder {
        return new az_eventhubs_eventhub_consumer_group_delete_command_builder("az eventhubs eventhub consumer-group delete");
    }

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
    static list(eventhubName: string, namespaceName: string, resourceGroup: string): az_eventhubs_eventhub_consumer_group_list_command_builder {
        return new az_eventhubs_eventhub_consumer_group_list_command_builder("az eventhubs eventhub consumer-group list", eventhubName, namespaceName, resourceGroup);
    }

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
    static show(): az_eventhubs_eventhub_consumer_group_show_command_builder {
        return new az_eventhubs_eventhub_consumer_group_show_command_builder("az eventhubs eventhub consumer-group show");
    }

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
    static update(): az_eventhubs_eventhub_consumer_group_update_command_builder {
        return new az_eventhubs_eventhub_consumer_group_update_command_builder("az eventhubs eventhub consumer-group update");
    }
}

/** Manage Azure EventHubs eventhub and authorization-rule. */
export class az_eventhubs_eventhub {
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
    static create(name: string, namespaceName: string, resourceGroup: string): az_eventhubs_eventhub_create_command_builder {
        return new az_eventhubs_eventhub_create_command_builder("az eventhubs eventhub create", name, namespaceName, resourceGroup);
    }

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
    static delete(): az_eventhubs_eventhub_delete_command_builder {
        return new az_eventhubs_eventhub_delete_command_builder("az eventhubs eventhub delete");
    }

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
    static list(namespaceName: string, resourceGroup: string): az_eventhubs_eventhub_list_command_builder {
        return new az_eventhubs_eventhub_list_command_builder("az eventhubs eventhub list", namespaceName, resourceGroup);
    }

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
    static show(): az_eventhubs_eventhub_show_command_builder {
        return new az_eventhubs_eventhub_show_command_builder("az eventhubs eventhub show");
    }

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
    static update(): az_eventhubs_eventhub_update_command_builder {
        return new az_eventhubs_eventhub_update_command_builder("az eventhubs eventhub update");
    }
}

/** Manage Azure Event Hubs Authorizationrule connection strings for Geo Recovery configuration Alias. */
export class az_eventhubs_georecovery_alias_authorization_rule_keys {
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
    static list(alias: string, name: string, namespaceName: string, resourceGroup: string): az_eventhubs_georecovery_alias_authorization_rule_keys_list_command_builder {
        return new az_eventhubs_georecovery_alias_authorization_rule_keys_list_command_builder("az eventhubs georecovery-alias authorization-rule keys list", alias, name, namespaceName, resourceGroup);
    }
}

/** Manage Azure EventHubs Authorizationrule for Geo Recovery configuration Alias. */
export class az_eventhubs_georecovery_alias_authorization_rule {
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
    static list(alias: string, namespaceName: string, resourceGroup: string): az_eventhubs_georecovery_alias_authorization_rule_list_command_builder {
        return new az_eventhubs_georecovery_alias_authorization_rule_list_command_builder("az eventhubs georecovery-alias authorization-rule list", alias, namespaceName, resourceGroup);
    }

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
    static show(): az_eventhubs_georecovery_alias_authorization_rule_show_command_builder {
        return new az_eventhubs_georecovery_alias_authorization_rule_show_command_builder("az eventhubs georecovery-alias authorization-rule show");
    }
}

/** Manage Azure EventHubs Geo Recovery configuration Alias. */
export class az_eventhubs_georecovery_alias {
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
    static break_pair(): az_eventhubs_georecovery_alias_break_pair_command_builder {
        return new az_eventhubs_georecovery_alias_break_pair_command_builder("az eventhubs georecovery-alias break-pair");
    }

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
    static delete(): az_eventhubs_georecovery_alias_delete_command_builder {
        return new az_eventhubs_georecovery_alias_delete_command_builder("az eventhubs georecovery-alias delete");
    }

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
    static exists(alias: string, namespaceName: string, resourceGroup: string): az_eventhubs_georecovery_alias_exists_command_builder {
        return new az_eventhubs_georecovery_alias_exists_command_builder("az eventhubs georecovery-alias exists", alias, namespaceName, resourceGroup);
    }

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
    static fail_over(): az_eventhubs_georecovery_alias_fail_over_command_builder {
        return new az_eventhubs_georecovery_alias_fail_over_command_builder("az eventhubs georecovery-alias fail-over");
    }

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
    static list(namespaceName: string, resourceGroup: string): az_eventhubs_georecovery_alias_list_command_builder {
        return new az_eventhubs_georecovery_alias_list_command_builder("az eventhubs georecovery-alias list", namespaceName, resourceGroup);
    }

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
    static set(partnerNamespace: string): az_eventhubs_georecovery_alias_set_command_builder {
        return new az_eventhubs_georecovery_alias_set_command_builder("az eventhubs georecovery-alias set", partnerNamespace);
    }

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
    static show(): az_eventhubs_georecovery_alias_show_command_builder {
        return new az_eventhubs_georecovery_alias_show_command_builder("az eventhubs georecovery-alias show");
    }
}

/** Manage Azure EventHubs Authorizationrule connection strings for Namespace. */
export class az_eventhubs_namespace_authorization_rule_keys {
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
    static list(name: string, namespaceName: string, resourceGroup: string): az_eventhubs_namespace_authorization_rule_keys_list_command_builder {
        return new az_eventhubs_namespace_authorization_rule_keys_list_command_builder("az eventhubs namespace authorization-rule keys list", name, namespaceName, resourceGroup);
    }

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
    static renew(key: 'PrimaryKey' | 'SecondaryKey'): az_eventhubs_namespace_authorization_rule_keys_renew_command_builder {
        return new az_eventhubs_namespace_authorization_rule_keys_renew_command_builder("az eventhubs namespace authorization-rule keys renew", key);
    }
}

/** Manage Azure EventHubs Authorizationrule for Namespace. */
export class az_eventhubs_namespace_authorization_rule {
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
    static create(name: string, namespaceName: string, resourceGroup: string, rights: 'Listen' | 'Manage' | 'Send'): az_eventhubs_namespace_authorization_rule_create_command_builder {
        return new az_eventhubs_namespace_authorization_rule_create_command_builder("az eventhubs namespace authorization-rule create", name, namespaceName, resourceGroup, rights);
    }

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
    static delete(): az_eventhubs_namespace_authorization_rule_delete_command_builder {
        return new az_eventhubs_namespace_authorization_rule_delete_command_builder("az eventhubs namespace authorization-rule delete");
    }

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
    static list(namespaceName: string, resourceGroup: string): az_eventhubs_namespace_authorization_rule_list_command_builder {
        return new az_eventhubs_namespace_authorization_rule_list_command_builder("az eventhubs namespace authorization-rule list", namespaceName, resourceGroup);
    }

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
    static show(): az_eventhubs_namespace_authorization_rule_show_command_builder {
        return new az_eventhubs_namespace_authorization_rule_show_command_builder("az eventhubs namespace authorization-rule show");
    }

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
    static update(rights: 'Listen' | 'Manage' | 'Send'): az_eventhubs_namespace_authorization_rule_update_command_builder {
        return new az_eventhubs_namespace_authorization_rule_update_command_builder("az eventhubs namespace authorization-rule update", rights);
    }
}

/** Manage Azure EventHubs networkruleset for namespace. */
export class az_eventhubs_namespace_network_rule {
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
    static add(namespaceName: string, resourceGroup: string): az_eventhubs_namespace_network_rule_add_command_builder {
        return new az_eventhubs_namespace_network_rule_add_command_builder("az eventhubs namespace network-rule add", namespaceName, resourceGroup);
    }

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
    static list(namespaceName: string, resourceGroup: string): az_eventhubs_namespace_network_rule_list_command_builder {
        return new az_eventhubs_namespace_network_rule_list_command_builder("az eventhubs namespace network-rule list", namespaceName, resourceGroup);
    }

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
    static remove(namespaceName: string, resourceGroup: string): az_eventhubs_namespace_network_rule_remove_command_builder {
        return new az_eventhubs_namespace_network_rule_remove_command_builder("az eventhubs namespace network-rule remove", namespaceName, resourceGroup);
    }
}

/** Manage Azure EventHubs namespace and Authorizationrule. */
export class az_eventhubs_namespace {
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
    static create(name: string, resourceGroup: string): az_eventhubs_namespace_create_command_builder {
        return new az_eventhubs_namespace_create_command_builder("az eventhubs namespace create", name, resourceGroup);
    }

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
    static delete(): az_eventhubs_namespace_delete_command_builder {
        return new az_eventhubs_namespace_delete_command_builder("az eventhubs namespace delete");
    }

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
    static exists(name: string): az_eventhubs_namespace_exists_command_builder {
        return new az_eventhubs_namespace_exists_command_builder("az eventhubs namespace exists", name);
    }

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
    static list(): az_eventhubs_namespace_list_command_builder {
        return new az_eventhubs_namespace_list_command_builder("az eventhubs namespace list");
    }

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
    static show(): az_eventhubs_namespace_show_command_builder {
        return new az_eventhubs_namespace_show_command_builder("az eventhubs namespace show");
    }

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
    static update(): az_eventhubs_namespace_update_command_builder {
        return new az_eventhubs_namespace_update_command_builder("az eventhubs namespace update");
    }
}

/** Manage Azure Event Hubs namespaces, eventhubs, consumergroups and geo recovery configurations - Alias. */
export class az_eventhubs {
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
class az_eventhubs_cluster_namespace_list_command_builder extends CommandBuilder<az_eventhubs_cluster_namespace_list_command_result> {
    constructor(commandPath: string, name: string, resourceGroup: string) {
        super(commandPath);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Name of Cluster. */
    name(value: string): az_eventhubs_cluster_namespace_list_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_eventhubs_cluster_namespace_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_eventhubs_cluster_namespace_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_eventhubs_cluster_namespace_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List the quantity of available pre-provisioned Event Hubs Clusters, indexed by Azure region.
 *
 * Syntax:
 * ```
 * az eventhubs cluster available-region [--subscription]
 * ```
 */
class az_eventhubs_cluster_available_region_command_builder extends CommandBuilder<az_eventhubs_cluster_available_region_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_eventhubs_cluster_available_region_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_eventhubs_cluster_create_command_builder extends CommandBuilder<az_eventhubs_cluster_create_command_result> {
    constructor(commandPath: string, name: string, resourceGroup: string) {
        super(commandPath);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Name of Cluster. */
    name(value: string): az_eventhubs_cluster_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_eventhubs_cluster_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Capacity for Sku, allowed value : 1. */
    capacity(value: string): az_eventhubs_cluster_create_command_builder {
        this.setFlag("--capacity", value);
        return this;
    }

    /** Location of the Cluster, for locations of available pre-provision clusters, please check az evetnhubs. */
    location(value: string): az_eventhubs_cluster_create_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_eventhubs_cluster_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_eventhubs_cluster_create_command_builder {
        this.setFlag("--tags", value);
        return this;
    }
}

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
class az_eventhubs_cluster_delete_command_builder extends CommandBuilder<az_eventhubs_cluster_delete_command_result> {
    constructor(commandPath: string, name: string, resourceGroup: string) {
        super(commandPath);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Name of Cluster. */
    name(value: string): az_eventhubs_cluster_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_eventhubs_cluster_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_eventhubs_cluster_delete_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_eventhubs_cluster_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_eventhubs_cluster_delete_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
}

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
class az_eventhubs_cluster_list_command_builder extends CommandBuilder<az_eventhubs_cluster_list_command_result> {
    constructor(commandPath: string, resourceGroup: string) {
        super(commandPath);
        this.resourceGroup(resourceGroup)
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_eventhubs_cluster_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_eventhubs_cluster_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_eventhubs_cluster_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_eventhubs_cluster_show_command_builder extends CommandBuilder<az_eventhubs_cluster_show_command_result> {
    constructor(commandPath: string, name: string, resourceGroup: string) {
        super(commandPath);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Name of Cluster. */
    name(value: string): az_eventhubs_cluster_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_eventhubs_cluster_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_eventhubs_cluster_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_eventhubs_cluster_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_eventhubs_cluster_update_command_builder extends CommandBuilder<az_eventhubs_cluster_update_command_result> {
    constructor(commandPath: string, name: string, resourceGroup: string) {
        super(commandPath);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Name of Cluster. */
    name(value: string): az_eventhubs_cluster_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_eventhubs_cluster_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_eventhubs_cluster_update_command_builder {
        this.setFlag("--add", value);
        return this;
    }

    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_eventhubs_cluster_update_command_builder {
        this.setFlag("--force-string", value);
        return this;
    }

    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_eventhubs_cluster_update_command_builder {
        this.setFlag("--remove", value);
        return this;
    }

    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_eventhubs_cluster_update_command_builder {
        this.setFlag("--set", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_eventhubs_cluster_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_eventhubs_cluster_update_command_builder {
        this.setFlag("--tags", value);
        return this;
    }
}

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
class az_eventhubs_cluster_wait_command_builder extends CommandBuilder<az_eventhubs_cluster_wait_command_result> {
    constructor(commandPath: string, name: string, resourceGroup: string) {
        super(commandPath);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Name of Cluster. */
    name(value: string): az_eventhubs_cluster_wait_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_eventhubs_cluster_wait_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    created(value: string): az_eventhubs_cluster_wait_command_builder {
        this.setFlag("--created", value);
        return this;
    }

    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    custom(value: string): az_eventhubs_cluster_wait_command_builder {
        this.setFlag("--custom", value);
        return this;
    }

    /** Wait until deleted. */
    deleted(value: string): az_eventhubs_cluster_wait_command_builder {
        this.setFlag("--deleted", value);
        return this;
    }

    /** Wait until the resource exists. */
    exists(value: string): az_eventhubs_cluster_wait_command_builder {
        this.setFlag("--exists", value);
        return this;
    }

    /** Polling interval in seconds. */
    interval(value: string): az_eventhubs_cluster_wait_command_builder {
        this.setFlag("--interval", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_eventhubs_cluster_wait_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Maximum wait in seconds. */
    timeout(value: string): az_eventhubs_cluster_wait_command_builder {
        this.setFlag("--timeout", value);
        return this;
    }

    /** Wait until updated with provisioningState at 'Succeeded'. */
    updated(value: string): az_eventhubs_cluster_wait_command_builder {
        this.setFlag("--updated", value);
        return this;
    }
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
class az_eventhubs_eventhub_authorization_rule_keys_list_command_builder extends CommandBuilder<az_eventhubs_eventhub_authorization_rule_keys_list_command_result> {
    constructor(commandPath: string, eventhubName: string, name: string, namespaceName: string, resourceGroup: string) {
        super(commandPath);
        this.eventhubName(eventhubName)
        this.name(name)
        this.namespaceName(namespaceName)
        this.resourceGroup(resourceGroup)
    }

    /** Name of EventHub. */
    eventhubName(value: string): az_eventhubs_eventhub_authorization_rule_keys_list_command_builder {
        this.setFlag("--eventhub-name", value);
        return this;
    }

    /** Name of EventHub AuthorizationRule. */
    name(value: string): az_eventhubs_eventhub_authorization_rule_keys_list_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of Namespace. */
    namespaceName(value: string): az_eventhubs_eventhub_authorization_rule_keys_list_command_builder {
        this.setFlag("--namespace-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_eventhubs_eventhub_authorization_rule_keys_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_eventhubs_eventhub_authorization_rule_keys_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_eventhubs_eventhub_authorization_rule_keys_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_eventhubs_eventhub_authorization_rule_keys_renew_command_builder extends CommandBuilder<az_eventhubs_eventhub_authorization_rule_keys_renew_command_result> {
    constructor(commandPath: string, key: 'PrimaryKey' | 'SecondaryKey') {
        super(commandPath);
        this.key(key)
    }

    /** Specifies Primary or Secondary key needs to be reset. */
    key(value: 'PrimaryKey' | 'SecondaryKey'): az_eventhubs_eventhub_authorization_rule_keys_renew_command_builder {
        this.setFlag("--key", value);
        return this;
    }

    /** Name of EventHub. */
    eventhubName(value: string): az_eventhubs_eventhub_authorization_rule_keys_renew_command_builder {
        this.setFlag("--eventhub-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_eventhubs_eventhub_authorization_rule_keys_renew_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Optional, if the key value provided, is set for KeyType or autogenerated Key value set for keyType. */
    keyValue(value: string): az_eventhubs_eventhub_authorization_rule_keys_renew_command_builder {
        this.setFlag("--key-value", value);
        return this;
    }

    /** Name of EventHub AuthorizationRule. */
    name(value: string): az_eventhubs_eventhub_authorization_rule_keys_renew_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of Namespace. */
    namespaceName(value: string): az_eventhubs_eventhub_authorization_rule_keys_renew_command_builder {
        this.setFlag("--namespace-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_eventhubs_eventhub_authorization_rule_keys_renew_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_eventhubs_eventhub_authorization_rule_keys_renew_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_eventhubs_eventhub_authorization_rule_create_command_builder extends CommandBuilder<az_eventhubs_eventhub_authorization_rule_create_command_result> {
    constructor(commandPath: string, eventhubName: string, name: string, namespaceName: string, resourceGroup: string, rights: 'Listen' | 'Manage' | 'Send') {
        super(commandPath);
        this.eventhubName(eventhubName)
        this.name(name)
        this.namespaceName(namespaceName)
        this.resourceGroup(resourceGroup)
        this.rights(rights)
    }

    /** Name of EventHub. */
    eventhubName(value: string): az_eventhubs_eventhub_authorization_rule_create_command_builder {
        this.setFlag("--eventhub-name", value);
        return this;
    }

    /** Name of EventHub AuthorizationRule. */
    name(value: string): az_eventhubs_eventhub_authorization_rule_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of Namespace. */
    namespaceName(value: string): az_eventhubs_eventhub_authorization_rule_create_command_builder {
        this.setFlag("--namespace-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_eventhubs_eventhub_authorization_rule_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Space-separated list of Authorization rule rights. */
    rights(value: 'Listen' | 'Manage' | 'Send'): az_eventhubs_eventhub_authorization_rule_create_command_builder {
        this.setFlag("--rights", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_eventhubs_eventhub_authorization_rule_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_eventhubs_eventhub_authorization_rule_delete_command_builder extends CommandBuilder<az_eventhubs_eventhub_authorization_rule_delete_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Name of EventHub. */
    eventhubName(value: string): az_eventhubs_eventhub_authorization_rule_delete_command_builder {
        this.setFlag("--eventhub-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_eventhubs_eventhub_authorization_rule_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of EventHub AuthorizationRule. */
    name(value: string): az_eventhubs_eventhub_authorization_rule_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of Namespace. */
    namespaceName(value: string): az_eventhubs_eventhub_authorization_rule_delete_command_builder {
        this.setFlag("--namespace-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_eventhubs_eventhub_authorization_rule_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_eventhubs_eventhub_authorization_rule_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_eventhubs_eventhub_authorization_rule_list_command_builder extends CommandBuilder<az_eventhubs_eventhub_authorization_rule_list_command_result> {
    constructor(commandPath: string, eventhubName: string, namespaceName: string, resourceGroup: string) {
        super(commandPath);
        this.eventhubName(eventhubName)
        this.namespaceName(namespaceName)
        this.resourceGroup(resourceGroup)
    }

    /** Name of EventHub. */
    eventhubName(value: string): az_eventhubs_eventhub_authorization_rule_list_command_builder {
        this.setFlag("--eventhub-name", value);
        return this;
    }

    /** Name of Namespace. */
    namespaceName(value: string): az_eventhubs_eventhub_authorization_rule_list_command_builder {
        this.setFlag("--namespace-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_eventhubs_eventhub_authorization_rule_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_eventhubs_eventhub_authorization_rule_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_eventhubs_eventhub_authorization_rule_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_eventhubs_eventhub_authorization_rule_show_command_builder extends CommandBuilder<az_eventhubs_eventhub_authorization_rule_show_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Name of EventHub. */
    eventhubName(value: string): az_eventhubs_eventhub_authorization_rule_show_command_builder {
        this.setFlag("--eventhub-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_eventhubs_eventhub_authorization_rule_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of EventHub AuthorizationRule. */
    name(value: string): az_eventhubs_eventhub_authorization_rule_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of Namespace. */
    namespaceName(value: string): az_eventhubs_eventhub_authorization_rule_show_command_builder {
        this.setFlag("--namespace-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_eventhubs_eventhub_authorization_rule_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_eventhubs_eventhub_authorization_rule_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_eventhubs_eventhub_authorization_rule_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_eventhubs_eventhub_authorization_rule_update_command_builder extends CommandBuilder<az_eventhubs_eventhub_authorization_rule_update_command_result> {
    constructor(commandPath: string, rights: 'Listen' | 'Manage' | 'Send') {
        super(commandPath);
        this.rights(rights)
    }

    /** Space-separated list of Authorization rule rights. */
    rights(value: 'Listen' | 'Manage' | 'Send'): az_eventhubs_eventhub_authorization_rule_update_command_builder {
        this.setFlag("--rights", value);
        return this;
    }

    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_eventhubs_eventhub_authorization_rule_update_command_builder {
        this.setFlag("--add", value);
        return this;
    }

    /** Name of EventHub. */
    eventhubName(value: string): az_eventhubs_eventhub_authorization_rule_update_command_builder {
        this.setFlag("--eventhub-name", value);
        return this;
    }

    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_eventhubs_eventhub_authorization_rule_update_command_builder {
        this.setFlag("--force-string", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_eventhubs_eventhub_authorization_rule_update_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of EventHub AuthorizationRule. */
    name(value: string): az_eventhubs_eventhub_authorization_rule_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of Namespace. */
    namespaceName(value: string): az_eventhubs_eventhub_authorization_rule_update_command_builder {
        this.setFlag("--namespace-name", value);
        return this;
    }

    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_eventhubs_eventhub_authorization_rule_update_command_builder {
        this.setFlag("--remove", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_eventhubs_eventhub_authorization_rule_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_eventhubs_eventhub_authorization_rule_update_command_builder {
        this.setFlag("--set", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_eventhubs_eventhub_authorization_rule_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_eventhubs_eventhub_consumer_group_create_command_builder extends CommandBuilder<az_eventhubs_eventhub_consumer_group_create_command_result> {
    constructor(commandPath: string, eventhubName: string, name: string, namespaceName: string, resourceGroup: string) {
        super(commandPath);
        this.eventhubName(eventhubName)
        this.name(name)
        this.namespaceName(namespaceName)
        this.resourceGroup(resourceGroup)
    }

    /** Name of EventHub. */
    eventhubName(value: string): az_eventhubs_eventhub_consumer_group_create_command_builder {
        this.setFlag("--eventhub-name", value);
        return this;
    }

    /** Name of ConsumerGroup. */
    name(value: string): az_eventhubs_eventhub_consumer_group_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of Namespace. */
    namespaceName(value: string): az_eventhubs_eventhub_consumer_group_create_command_builder {
        this.setFlag("--namespace-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_eventhubs_eventhub_consumer_group_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_eventhubs_eventhub_consumer_group_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Usermetadata is a placeholder to store user-defined string data with maximum length 1024. e.g. it can be used to store descriptive data, such as list of teams and their contact information also user-defined configuration settings can be stored. */
    userMetadata(value: string): az_eventhubs_eventhub_consumer_group_create_command_builder {
        this.setFlag("--user-metadata", value);
        return this;
    }
}

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
class az_eventhubs_eventhub_consumer_group_delete_command_builder extends CommandBuilder<az_eventhubs_eventhub_consumer_group_delete_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Name of EventHub. */
    eventhubName(value: string): az_eventhubs_eventhub_consumer_group_delete_command_builder {
        this.setFlag("--eventhub-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_eventhubs_eventhub_consumer_group_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of ConsumerGroup. */
    name(value: string): az_eventhubs_eventhub_consumer_group_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of Namespace. */
    namespaceName(value: string): az_eventhubs_eventhub_consumer_group_delete_command_builder {
        this.setFlag("--namespace-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_eventhubs_eventhub_consumer_group_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_eventhubs_eventhub_consumer_group_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_eventhubs_eventhub_consumer_group_list_command_builder extends CommandBuilder<az_eventhubs_eventhub_consumer_group_list_command_result> {
    constructor(commandPath: string, eventhubName: string, namespaceName: string, resourceGroup: string) {
        super(commandPath);
        this.eventhubName(eventhubName)
        this.namespaceName(namespaceName)
        this.resourceGroup(resourceGroup)
    }

    /** Name of EventHub. */
    eventhubName(value: string): az_eventhubs_eventhub_consumer_group_list_command_builder {
        this.setFlag("--eventhub-name", value);
        return this;
    }

    /** Name of Namespace. */
    namespaceName(value: string): az_eventhubs_eventhub_consumer_group_list_command_builder {
        this.setFlag("--namespace-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_eventhubs_eventhub_consumer_group_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_eventhubs_eventhub_consumer_group_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Skip is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skip parameter that specifies a starting point to use for subsequent calls. */
    skip(value: string): az_eventhubs_eventhub_consumer_group_list_command_builder {
        this.setFlag("--skip", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_eventhubs_eventhub_consumer_group_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** May be used to limit the number of results to the most recent N usageDetails. */
    top(value: string): az_eventhubs_eventhub_consumer_group_list_command_builder {
        this.setFlag("--top", value);
        return this;
    }
}

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
class az_eventhubs_eventhub_consumer_group_show_command_builder extends CommandBuilder<az_eventhubs_eventhub_consumer_group_show_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Name of EventHub. */
    eventhubName(value: string): az_eventhubs_eventhub_consumer_group_show_command_builder {
        this.setFlag("--eventhub-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_eventhubs_eventhub_consumer_group_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of ConsumerGroup. */
    name(value: string): az_eventhubs_eventhub_consumer_group_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of Namespace. */
    namespaceName(value: string): az_eventhubs_eventhub_consumer_group_show_command_builder {
        this.setFlag("--namespace-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_eventhubs_eventhub_consumer_group_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_eventhubs_eventhub_consumer_group_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_eventhubs_eventhub_consumer_group_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_eventhubs_eventhub_consumer_group_update_command_builder extends CommandBuilder<az_eventhubs_eventhub_consumer_group_update_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_eventhubs_eventhub_consumer_group_update_command_builder {
        this.setFlag("--add", value);
        return this;
    }

    /** Name of EventHub. */
    eventhubName(value: string): az_eventhubs_eventhub_consumer_group_update_command_builder {
        this.setFlag("--eventhub-name", value);
        return this;
    }

    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_eventhubs_eventhub_consumer_group_update_command_builder {
        this.setFlag("--force-string", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_eventhubs_eventhub_consumer_group_update_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of ConsumerGroup. */
    name(value: string): az_eventhubs_eventhub_consumer_group_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of Namespace. */
    namespaceName(value: string): az_eventhubs_eventhub_consumer_group_update_command_builder {
        this.setFlag("--namespace-name", value);
        return this;
    }

    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_eventhubs_eventhub_consumer_group_update_command_builder {
        this.setFlag("--remove", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_eventhubs_eventhub_consumer_group_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_eventhubs_eventhub_consumer_group_update_command_builder {
        this.setFlag("--set", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_eventhubs_eventhub_consumer_group_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Usermetadata is a placeholder to store user-defined string data with maximum length 1024. e.g. it can be used to store descriptive data, such as list of teams and their contact information also user-defined configuration settings can be stored. */
    userMetadata(value: string): az_eventhubs_eventhub_consumer_group_update_command_builder {
        this.setFlag("--user-metadata", value);
        return this;
    }
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
class az_eventhubs_eventhub_create_command_builder extends CommandBuilder<az_eventhubs_eventhub_create_command_result> {
    constructor(commandPath: string, name: string, namespaceName: string, resourceGroup: string) {
        super(commandPath);
        this.name(name)
        this.namespaceName(namespaceName)
        this.resourceGroup(resourceGroup)
    }

    /** Name of Eventhub. */
    name(value: string): az_eventhubs_eventhub_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of Namespace. */
    namespaceName(value: string): az_eventhubs_eventhub_create_command_builder {
        this.setFlag("--namespace-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_eventhubs_eventhub_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Blob naming convention for archive, e.g. {Namespace}/{EventHub}/{PartitionId}/{Year}/{Month}/{Day}/{Hour}/{Minute}/{Second}. Here all the parameters (Namespace,EventHub .. etc) are mandatory irrespective of order. */
    archiveNameFormat(value: string): az_eventhubs_eventhub_create_command_builder {
        this.setFlag("--archive-name-format", value);
        return this;
    }

    /** Blob container Name. */
    blobContainer(value: string): az_eventhubs_eventhub_create_command_builder {
        this.setFlag("--blob-container", value);
        return this;
    }

    /** Allows you to set the frequency with which the capture to Azure Blobs will happen, value should between 60 to 900 seconds. */
    captureInterval(value: string): az_eventhubs_eventhub_create_command_builder {
        this.setFlag("--capture-interval", value);
        return this;
    }

    /** Defines the amount of data built up in your Event Hub before an capture operation, value should be between 10485760 to 524288000 bytes. */
    captureSizeLimit(value: string): az_eventhubs_eventhub_create_command_builder {
        this.setFlag("--capture-size-limit", value);
        return this;
    }

    /** Name for capture destination, should be EventHubArchive.AzureBlockBlob. */
    destinationName(value: string): az_eventhubs_eventhub_create_command_builder {
        this.setFlag("--destination-name", value);
        return this;
    }

    /** A boolean value that indicates whether capture description is enabled. */
    enableCapture(value: boolean): az_eventhubs_eventhub_create_command_builder {
        this.setFlag("--enable-capture", value.toString());
        return this;
    }

    /** Number of days to retain events for this Event Hub, value should be 1 to 7 days and depends on Namespace sku. if Namespace sku is Basic than value should be one and is Manadatory parameter. Namespace sku is standard value should be 1 to 7 days, default is 7 days and is optional parameter. */
    messageRetention(value: string): az_eventhubs_eventhub_create_command_builder {
        this.setFlag("--message-retention", value);
        return this;
    }

    /** Number of partitions created for the Event Hub. By default, allowed values are 2-32. Lower value of 1 is supported with Kafka enabled namespaces. In presence of a custom quota, the upper limit will match the upper limit of the quota. */
    partitionCount(value: string): az_eventhubs_eventhub_create_command_builder {
        this.setFlag("--partition-count", value);
        return this;
    }

    /** A boolean value that indicates whether to Skip Empty. */
    skipEmptyArchives(value: boolean): az_eventhubs_eventhub_create_command_builder {
        this.setFlag("--skip-empty-archives", value.toString());
        return this;
    }

    /** Status of Eventhub. */
    status(value: 'Active' | 'Disabled' | 'SendDisabled'): az_eventhubs_eventhub_create_command_builder {
        this.setFlag("--status", value);
        return this;
    }

    /** Name (if within same resource group and not of type Classic Storage) or ARM id of the storage account to be used to create the blobs. */
    storageAccount(value: string): az_eventhubs_eventhub_create_command_builder {
        this.setFlag("--storage-account", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_eventhubs_eventhub_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_eventhubs_eventhub_delete_command_builder extends CommandBuilder<az_eventhubs_eventhub_delete_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_eventhubs_eventhub_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of Eventhub. */
    name(value: string): az_eventhubs_eventhub_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of Namespace. */
    namespaceName(value: string): az_eventhubs_eventhub_delete_command_builder {
        this.setFlag("--namespace-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_eventhubs_eventhub_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_eventhubs_eventhub_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_eventhubs_eventhub_list_command_builder extends CommandBuilder<az_eventhubs_eventhub_list_command_result> {
    constructor(commandPath: string, namespaceName: string, resourceGroup: string) {
        super(commandPath);
        this.namespaceName(namespaceName)
        this.resourceGroup(resourceGroup)
    }

    /** Name of Namespace. */
    namespaceName(value: string): az_eventhubs_eventhub_list_command_builder {
        this.setFlag("--namespace-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_eventhubs_eventhub_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_eventhubs_eventhub_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Skip is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skip parameter that specifies a starting point to use for subsequent calls. */
    skip(value: string): az_eventhubs_eventhub_list_command_builder {
        this.setFlag("--skip", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_eventhubs_eventhub_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** May be used to limit the number of results to the most recent N usageDetails. */
    top(value: string): az_eventhubs_eventhub_list_command_builder {
        this.setFlag("--top", value);
        return this;
    }
}

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
class az_eventhubs_eventhub_show_command_builder extends CommandBuilder<az_eventhubs_eventhub_show_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_eventhubs_eventhub_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of Eventhub. */
    name(value: string): az_eventhubs_eventhub_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of Namespace. */
    namespaceName(value: string): az_eventhubs_eventhub_show_command_builder {
        this.setFlag("--namespace-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_eventhubs_eventhub_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_eventhubs_eventhub_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_eventhubs_eventhub_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_eventhubs_eventhub_update_command_builder extends CommandBuilder<az_eventhubs_eventhub_update_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_eventhubs_eventhub_update_command_builder {
        this.setFlag("--add", value);
        return this;
    }

    /** Blob naming convention for archive, e.g. {Namespace}/{EventHub}/{PartitionId}/{Year}/{Month}/{Day}/{Hour}/{Minute}/{Second}. Here all the parameters (Namespace,EventHub .. etc) are mandatory irrespective of order. */
    archiveNameFormat(value: string): az_eventhubs_eventhub_update_command_builder {
        this.setFlag("--archive-name-format", value);
        return this;
    }

    /** Blob container Name. */
    blobContainer(value: string): az_eventhubs_eventhub_update_command_builder {
        this.setFlag("--blob-container", value);
        return this;
    }

    /** Allows you to set the frequency with which the capture to Azure Blobs will happen, value should between 60 to 900 seconds. */
    captureInterval(value: string): az_eventhubs_eventhub_update_command_builder {
        this.setFlag("--capture-interval", value);
        return this;
    }

    /** Defines the amount of data built up in your Event Hub before an capture operation, value should be between 10485760 to 524288000 bytes. */
    captureSizeLimit(value: string): az_eventhubs_eventhub_update_command_builder {
        this.setFlag("--capture-size-limit", value);
        return this;
    }

    /** Name for capture destination, should be EventHubArchive.AzureBlockBlob. */
    destinationName(value: string): az_eventhubs_eventhub_update_command_builder {
        this.setFlag("--destination-name", value);
        return this;
    }

    /** A boolean value that indicates whether capture description is enabled. */
    enableCapture(value: boolean): az_eventhubs_eventhub_update_command_builder {
        this.setFlag("--enable-capture", value.toString());
        return this;
    }

    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_eventhubs_eventhub_update_command_builder {
        this.setFlag("--force-string", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_eventhubs_eventhub_update_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Number of days to retain events for this Event Hub, value should be 1 to 7 days and depends on Namespace sku. if Namespace sku is Basic than value should be one and is Manadatory parameter. Namespace sku is standard value should be 1 to 7 days, default is 7 days and is optional parameter. */
    messageRetention(value: string): az_eventhubs_eventhub_update_command_builder {
        this.setFlag("--message-retention", value);
        return this;
    }

    /** Name of Eventhub. */
    name(value: string): az_eventhubs_eventhub_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of Namespace. */
    namespaceName(value: string): az_eventhubs_eventhub_update_command_builder {
        this.setFlag("--namespace-name", value);
        return this;
    }

    /** Number of partitions created for the Event Hub. By default, allowed values are 2-32. Lower value of 1 is supported with Kafka enabled namespaces. In presence of a custom quota, the upper limit will match the upper limit of the quota. */
    partitionCount(value: string): az_eventhubs_eventhub_update_command_builder {
        this.setFlag("--partition-count", value);
        return this;
    }

    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_eventhubs_eventhub_update_command_builder {
        this.setFlag("--remove", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_eventhubs_eventhub_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_eventhubs_eventhub_update_command_builder {
        this.setFlag("--set", value);
        return this;
    }

    /** A boolean value that indicates whether to Skip Empty. */
    skipEmptyArchives(value: boolean): az_eventhubs_eventhub_update_command_builder {
        this.setFlag("--skip-empty-archives", value.toString());
        return this;
    }

    /** Status of Eventhub. */
    status(value: 'Active' | 'Disabled' | 'SendDisabled'): az_eventhubs_eventhub_update_command_builder {
        this.setFlag("--status", value);
        return this;
    }

    /** Name (if within same resource group and not of type Classic Storage) or ARM id of the storage account to be used to create the blobs. */
    storageAccount(value: string): az_eventhubs_eventhub_update_command_builder {
        this.setFlag("--storage-account", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_eventhubs_eventhub_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_eventhubs_georecovery_alias_authorization_rule_keys_list_command_builder extends CommandBuilder<az_eventhubs_georecovery_alias_authorization_rule_keys_list_command_result> {
    constructor(commandPath: string, alias: string, name: string, namespaceName: string, resourceGroup: string) {
        super(commandPath);
        this.alias(alias)
        this.name(name)
        this.namespaceName(namespaceName)
        this.resourceGroup(resourceGroup)
    }

    /** Name of Geo-Disaster Recovery Configuration Alias. */
    alias(value: string): az_eventhubs_georecovery_alias_authorization_rule_keys_list_command_builder {
        this.setFlag("--alias", value);
        return this;
    }

    /** Name of Namespace AuthorizationRule. */
    name(value: string): az_eventhubs_georecovery_alias_authorization_rule_keys_list_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of Namespace. */
    namespaceName(value: string): az_eventhubs_georecovery_alias_authorization_rule_keys_list_command_builder {
        this.setFlag("--namespace-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_eventhubs_georecovery_alias_authorization_rule_keys_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_eventhubs_georecovery_alias_authorization_rule_keys_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_eventhubs_georecovery_alias_authorization_rule_keys_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_eventhubs_georecovery_alias_authorization_rule_list_command_builder extends CommandBuilder<az_eventhubs_georecovery_alias_authorization_rule_list_command_result> {
    constructor(commandPath: string, alias: string, namespaceName: string, resourceGroup: string) {
        super(commandPath);
        this.alias(alias)
        this.namespaceName(namespaceName)
        this.resourceGroup(resourceGroup)
    }

    /** Name of Geo-Disaster Recovery Configuration Alias. */
    alias(value: string): az_eventhubs_georecovery_alias_authorization_rule_list_command_builder {
        this.setFlag("--alias", value);
        return this;
    }

    /** Name of Namespace. */
    namespaceName(value: string): az_eventhubs_georecovery_alias_authorization_rule_list_command_builder {
        this.setFlag("--namespace-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_eventhubs_georecovery_alias_authorization_rule_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_eventhubs_georecovery_alias_authorization_rule_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_eventhubs_georecovery_alias_authorization_rule_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_eventhubs_georecovery_alias_authorization_rule_show_command_builder extends CommandBuilder<az_eventhubs_georecovery_alias_authorization_rule_show_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Name of Geo-Disaster Recovery Configuration Alias. */
    alias(value: string): az_eventhubs_georecovery_alias_authorization_rule_show_command_builder {
        this.setFlag("--alias", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_eventhubs_georecovery_alias_authorization_rule_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of Namespace AuthorizationRule. */
    name(value: string): az_eventhubs_georecovery_alias_authorization_rule_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of Namespace. */
    namespaceName(value: string): az_eventhubs_georecovery_alias_authorization_rule_show_command_builder {
        this.setFlag("--namespace-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_eventhubs_georecovery_alias_authorization_rule_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_eventhubs_georecovery_alias_authorization_rule_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_eventhubs_georecovery_alias_authorization_rule_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_eventhubs_georecovery_alias_break_pair_command_builder extends CommandBuilder<az_eventhubs_georecovery_alias_break_pair_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Name of Geo-Disaster Recovery Configuration Alias. */
    alias(value: string): az_eventhubs_georecovery_alias_break_pair_command_builder {
        this.setFlag("--alias", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_eventhubs_georecovery_alias_break_pair_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of Namespace. */
    namespaceName(value: string): az_eventhubs_georecovery_alias_break_pair_command_builder {
        this.setFlag("--namespace-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_eventhubs_georecovery_alias_break_pair_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_eventhubs_georecovery_alias_break_pair_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_eventhubs_georecovery_alias_delete_command_builder extends CommandBuilder<az_eventhubs_georecovery_alias_delete_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Name of Geo-Disaster Recovery Configuration Alias. */
    alias(value: string): az_eventhubs_georecovery_alias_delete_command_builder {
        this.setFlag("--alias", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_eventhubs_georecovery_alias_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of Namespace. */
    namespaceName(value: string): az_eventhubs_georecovery_alias_delete_command_builder {
        this.setFlag("--namespace-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_eventhubs_georecovery_alias_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_eventhubs_georecovery_alias_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_eventhubs_georecovery_alias_exists_command_builder extends CommandBuilder<az_eventhubs_georecovery_alias_exists_command_result> {
    constructor(commandPath: string, alias: string, namespaceName: string, resourceGroup: string) {
        super(commandPath);
        this.alias(alias)
        this.namespaceName(namespaceName)
        this.resourceGroup(resourceGroup)
    }

    /** Name of Geo Recovery Configs - Alias to check availability. */
    alias(value: string): az_eventhubs_georecovery_alias_exists_command_builder {
        this.setFlag("--alias", value);
        return this;
    }

    /** Name of Namespace. */
    namespaceName(value: string): az_eventhubs_georecovery_alias_exists_command_builder {
        this.setFlag("--namespace-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_eventhubs_georecovery_alias_exists_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_eventhubs_georecovery_alias_exists_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_eventhubs_georecovery_alias_fail_over_command_builder extends CommandBuilder<az_eventhubs_georecovery_alias_fail_over_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Name of Geo-Disaster Recovery Configuration Alias. */
    alias(value: string): az_eventhubs_georecovery_alias_fail_over_command_builder {
        this.setFlag("--alias", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_eventhubs_georecovery_alias_fail_over_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of Namespace. */
    namespaceName(value: string): az_eventhubs_georecovery_alias_fail_over_command_builder {
        this.setFlag("--namespace-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_eventhubs_georecovery_alias_fail_over_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_eventhubs_georecovery_alias_fail_over_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_eventhubs_georecovery_alias_list_command_builder extends CommandBuilder<az_eventhubs_georecovery_alias_list_command_result> {
    constructor(commandPath: string, namespaceName: string, resourceGroup: string) {
        super(commandPath);
        this.namespaceName(namespaceName)
        this.resourceGroup(resourceGroup)
    }

    /** Name of Namespace. */
    namespaceName(value: string): az_eventhubs_georecovery_alias_list_command_builder {
        this.setFlag("--namespace-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_eventhubs_georecovery_alias_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_eventhubs_georecovery_alias_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_eventhubs_georecovery_alias_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_eventhubs_georecovery_alias_set_command_builder extends CommandBuilder<az_eventhubs_georecovery_alias_set_command_result> {
    constructor(commandPath: string, partnerNamespace: string) {
        super(commandPath);
        this.partnerNamespace(partnerNamespace)
    }

    /** Name (if within the same resource group) or ARM Id of the Primary/Secondary eventhub namespace name, which is part of GEO DR pairing. */
    partnerNamespace(value: string): az_eventhubs_georecovery_alias_set_command_builder {
        this.setFlag("--partner-namespace", value);
        return this;
    }

    /** Name of Geo-Disaster Recovery Configuration Alias. */
    alias(value: string): az_eventhubs_georecovery_alias_set_command_builder {
        this.setFlag("--alias", value);
        return this;
    }

    /** Alternate Name for the Alias, when the Namespace name and Alias name are same. */
    alternateName(value: string): az_eventhubs_georecovery_alias_set_command_builder {
        this.setFlag("--alternate-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_eventhubs_georecovery_alias_set_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of Namespace. */
    namespaceName(value: string): az_eventhubs_georecovery_alias_set_command_builder {
        this.setFlag("--namespace-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_eventhubs_georecovery_alias_set_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_eventhubs_georecovery_alias_set_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_eventhubs_georecovery_alias_show_command_builder extends CommandBuilder<az_eventhubs_georecovery_alias_show_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Name of Geo-Disaster Recovery Configuration Alias. */
    alias(value: string): az_eventhubs_georecovery_alias_show_command_builder {
        this.setFlag("--alias", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_eventhubs_georecovery_alias_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of Namespace. */
    namespaceName(value: string): az_eventhubs_georecovery_alias_show_command_builder {
        this.setFlag("--namespace-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_eventhubs_georecovery_alias_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_eventhubs_georecovery_alias_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_eventhubs_georecovery_alias_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_eventhubs_namespace_authorization_rule_keys_list_command_builder extends CommandBuilder<az_eventhubs_namespace_authorization_rule_keys_list_command_result> {
    constructor(commandPath: string, name: string, namespaceName: string, resourceGroup: string) {
        super(commandPath);
        this.name(name)
        this.namespaceName(namespaceName)
        this.resourceGroup(resourceGroup)
    }

    /** Name of Namespace AuthorizationRule. */
    name(value: string): az_eventhubs_namespace_authorization_rule_keys_list_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of Namespace. */
    namespaceName(value: string): az_eventhubs_namespace_authorization_rule_keys_list_command_builder {
        this.setFlag("--namespace-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_eventhubs_namespace_authorization_rule_keys_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_eventhubs_namespace_authorization_rule_keys_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_eventhubs_namespace_authorization_rule_keys_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_eventhubs_namespace_authorization_rule_keys_renew_command_builder extends CommandBuilder<az_eventhubs_namespace_authorization_rule_keys_renew_command_result> {
    constructor(commandPath: string, key: 'PrimaryKey' | 'SecondaryKey') {
        super(commandPath);
        this.key(key)
    }

    /** Specifies Primary or Secondary key needs to be reset. */
    key(value: 'PrimaryKey' | 'SecondaryKey'): az_eventhubs_namespace_authorization_rule_keys_renew_command_builder {
        this.setFlag("--key", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_eventhubs_namespace_authorization_rule_keys_renew_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Optional, if the key value provided, is set for KeyType or autogenerated Key value set for keyType. */
    keyValue(value: string): az_eventhubs_namespace_authorization_rule_keys_renew_command_builder {
        this.setFlag("--key-value", value);
        return this;
    }

    /** Name of Namespace AuthorizationRule. */
    name(value: string): az_eventhubs_namespace_authorization_rule_keys_renew_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of Namespace. */
    namespaceName(value: string): az_eventhubs_namespace_authorization_rule_keys_renew_command_builder {
        this.setFlag("--namespace-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_eventhubs_namespace_authorization_rule_keys_renew_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_eventhubs_namespace_authorization_rule_keys_renew_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_eventhubs_namespace_authorization_rule_create_command_builder extends CommandBuilder<az_eventhubs_namespace_authorization_rule_create_command_result> {
    constructor(commandPath: string, name: string, namespaceName: string, resourceGroup: string, rights: 'Listen' | 'Manage' | 'Send') {
        super(commandPath);
        this.name(name)
        this.namespaceName(namespaceName)
        this.resourceGroup(resourceGroup)
        this.rights(rights)
    }

    /** Name of Namespace AuthorizationRule. */
    name(value: string): az_eventhubs_namespace_authorization_rule_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of Namespace. */
    namespaceName(value: string): az_eventhubs_namespace_authorization_rule_create_command_builder {
        this.setFlag("--namespace-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_eventhubs_namespace_authorization_rule_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Space-separated list of Authorization rule rights. */
    rights(value: 'Listen' | 'Manage' | 'Send'): az_eventhubs_namespace_authorization_rule_create_command_builder {
        this.setFlag("--rights", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_eventhubs_namespace_authorization_rule_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_eventhubs_namespace_authorization_rule_delete_command_builder extends CommandBuilder<az_eventhubs_namespace_authorization_rule_delete_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_eventhubs_namespace_authorization_rule_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of Namespace AuthorizationRule. */
    name(value: string): az_eventhubs_namespace_authorization_rule_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of Namespace. */
    namespaceName(value: string): az_eventhubs_namespace_authorization_rule_delete_command_builder {
        this.setFlag("--namespace-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_eventhubs_namespace_authorization_rule_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_eventhubs_namespace_authorization_rule_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_eventhubs_namespace_authorization_rule_list_command_builder extends CommandBuilder<az_eventhubs_namespace_authorization_rule_list_command_result> {
    constructor(commandPath: string, namespaceName: string, resourceGroup: string) {
        super(commandPath);
        this.namespaceName(namespaceName)
        this.resourceGroup(resourceGroup)
    }

    /** Name of Namespace. */
    namespaceName(value: string): az_eventhubs_namespace_authorization_rule_list_command_builder {
        this.setFlag("--namespace-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_eventhubs_namespace_authorization_rule_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_eventhubs_namespace_authorization_rule_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_eventhubs_namespace_authorization_rule_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_eventhubs_namespace_authorization_rule_show_command_builder extends CommandBuilder<az_eventhubs_namespace_authorization_rule_show_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_eventhubs_namespace_authorization_rule_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of Namespace AuthorizationRule. */
    name(value: string): az_eventhubs_namespace_authorization_rule_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of Namespace. */
    namespaceName(value: string): az_eventhubs_namespace_authorization_rule_show_command_builder {
        this.setFlag("--namespace-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_eventhubs_namespace_authorization_rule_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_eventhubs_namespace_authorization_rule_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_eventhubs_namespace_authorization_rule_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_eventhubs_namespace_authorization_rule_update_command_builder extends CommandBuilder<az_eventhubs_namespace_authorization_rule_update_command_result> {
    constructor(commandPath: string, rights: 'Listen' | 'Manage' | 'Send') {
        super(commandPath);
        this.rights(rights)
    }

    /** Space-separated list of Authorization rule rights. */
    rights(value: 'Listen' | 'Manage' | 'Send'): az_eventhubs_namespace_authorization_rule_update_command_builder {
        this.setFlag("--rights", value);
        return this;
    }

    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_eventhubs_namespace_authorization_rule_update_command_builder {
        this.setFlag("--add", value);
        return this;
    }

    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_eventhubs_namespace_authorization_rule_update_command_builder {
        this.setFlag("--force-string", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_eventhubs_namespace_authorization_rule_update_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of Namespace AuthorizationRule. */
    name(value: string): az_eventhubs_namespace_authorization_rule_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of Namespace. */
    namespaceName(value: string): az_eventhubs_namespace_authorization_rule_update_command_builder {
        this.setFlag("--namespace-name", value);
        return this;
    }

    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_eventhubs_namespace_authorization_rule_update_command_builder {
        this.setFlag("--remove", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_eventhubs_namespace_authorization_rule_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_eventhubs_namespace_authorization_rule_update_command_builder {
        this.setFlag("--set", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_eventhubs_namespace_authorization_rule_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_eventhubs_namespace_network_rule_add_command_builder extends CommandBuilder<az_eventhubs_namespace_network_rule_add_command_result> {
    constructor(commandPath: string, namespaceName: string, resourceGroup: string) {
        super(commandPath);
        this.namespaceName(namespaceName)
        this.resourceGroup(resourceGroup)
    }

    /** Name of the Namespace. */
    namespaceName(value: string): az_eventhubs_namespace_network_rule_add_command_builder {
        this.setFlag("--namespace-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_eventhubs_namespace_network_rule_add_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Action of the IP rule. */
    action(value: 'Allow'): az_eventhubs_namespace_network_rule_add_command_builder {
        this.setFlag("--action", value);
        return this;
    }

    /** A boolean value that indicates whether to ignore missing vnet Service Endpoint. */
    ignoreMissingEndpoint(value: boolean): az_eventhubs_namespace_network_rule_add_command_builder {
        this.setFlag("--ignore-missing-endpoint", value.toString());
        return this;
    }

    /** IPv4 address or CIDR range - 10.6.0.0/24. */
    ipAddress(value: string): az_eventhubs_namespace_network_rule_add_command_builder {
        this.setFlag("--ip-address", value);
        return this;
    }

    /** Name or ID of subnet. If name is supplied, `--vnet-name` must be supplied. */
    subnet(value: string): az_eventhubs_namespace_network_rule_add_command_builder {
        this.setFlag("--subnet", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_eventhubs_namespace_network_rule_add_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Name of the Virtual Network. */
    vnetName(value: string): az_eventhubs_namespace_network_rule_add_command_builder {
        this.setFlag("--vnet-name", value);
        return this;
    }
}

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
class az_eventhubs_namespace_network_rule_list_command_builder extends CommandBuilder<az_eventhubs_namespace_network_rule_list_command_result> {
    constructor(commandPath: string, namespaceName: string, resourceGroup: string) {
        super(commandPath);
        this.namespaceName(namespaceName)
        this.resourceGroup(resourceGroup)
    }

    /** Name of the Namespace. */
    namespaceName(value: string): az_eventhubs_namespace_network_rule_list_command_builder {
        this.setFlag("--namespace-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_eventhubs_namespace_network_rule_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_eventhubs_namespace_network_rule_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_eventhubs_namespace_network_rule_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_eventhubs_namespace_network_rule_remove_command_builder extends CommandBuilder<az_eventhubs_namespace_network_rule_remove_command_result> {
    constructor(commandPath: string, namespaceName: string, resourceGroup: string) {
        super(commandPath);
        this.namespaceName(namespaceName)
        this.resourceGroup(resourceGroup)
    }

    /** Name of the Namespace. */
    namespaceName(value: string): az_eventhubs_namespace_network_rule_remove_command_builder {
        this.setFlag("--namespace-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_eventhubs_namespace_network_rule_remove_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** IPv4 address or CIDR range - 10.6.0.0/24. */
    ipAddress(value: string): az_eventhubs_namespace_network_rule_remove_command_builder {
        this.setFlag("--ip-address", value);
        return this;
    }

    /** Name or ID of subnet. If name is supplied, `--vnet-name` must be supplied. */
    subnet(value: string): az_eventhubs_namespace_network_rule_remove_command_builder {
        this.setFlag("--subnet", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_eventhubs_namespace_network_rule_remove_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Name of the Virtual Network. */
    vnetName(value: string): az_eventhubs_namespace_network_rule_remove_command_builder {
        this.setFlag("--vnet-name", value);
        return this;
    }
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
class az_eventhubs_namespace_create_command_builder extends CommandBuilder<az_eventhubs_namespace_create_command_result> {
    constructor(commandPath: string, name: string, resourceGroup: string) {
        super(commandPath);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Name of Namespace. */
    name(value: string): az_eventhubs_namespace_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_eventhubs_namespace_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** A boolean value that indicates whether Managed Identity is enabled. */
    assignIdentity(value: boolean): az_eventhubs_namespace_create_command_builder {
        this.setFlag("--assign-identity", value.toString());
        return this;
    }

    /** Capacity for Sku. */
    capacity(value: string): az_eventhubs_namespace_create_command_builder {
        this.setFlag("--capacity", value);
        return this;
    }

    /** Luster ARM ID of the Namespace. */
    clusterArmId(value: string): az_eventhubs_namespace_create_command_builder {
        this.setFlag("--cluster-arm-id", value);
        return this;
    }

    /** Default Action for Network Rule Set. */
    defaultAction(value: 'Allow' | 'Deny'): az_eventhubs_namespace_create_command_builder {
        this.setFlag("--default-action", value);
        return this;
    }

    /** A boolean value that indicates whether AutoInflate is enabled for eventhub namespace. */
    enableAutoInflate(value: boolean): az_eventhubs_namespace_create_command_builder {
        this.setFlag("--enable-auto-inflate", value.toString());
        return this;
    }

    /** A boolean value that indicates whether Kafka is enabled for eventhub namespace. */
    enableKafka(value: boolean): az_eventhubs_namespace_create_command_builder {
        this.setFlag("--enable-kafka", value.toString());
        return this;
    }

    /** A boolean value that indicates whether Trusted Service Access is enabled for Network Rule Set. */
    enableTrustedServiceAccess(value: boolean): az_eventhubs_namespace_create_command_builder {
        this.setFlag("--enable-trusted-service-access", value.toString());
        return this;
    }

    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_eventhubs_namespace_create_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** Upper limit of throughput units when AutoInflate is enabled, vaule should be within 0 to 20 throughput units. ( 0 if AutoInflateEnabled = true). */
    maximumThroughputUnits(value: string): az_eventhubs_namespace_create_command_builder {
        this.setFlag("--maximum-throughput-units", value);
        return this;
    }

    /** Namespace SKU. */
    sku(value: 'Basic' | 'Standard'): az_eventhubs_namespace_create_command_builder {
        this.setFlag("--sku", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_eventhubs_namespace_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_eventhubs_namespace_create_command_builder {
        this.setFlag("--tags", value);
        return this;
    }

    /** Enabling this property creates a Standard EventHubs Namespace in regions supported availability zones. */
    zoneRedundant(value: boolean): az_eventhubs_namespace_create_command_builder {
        this.setFlag("--zone-redundant", value.toString());
        return this;
    }
}

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
class az_eventhubs_namespace_delete_command_builder extends CommandBuilder<az_eventhubs_namespace_delete_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_eventhubs_namespace_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of Namespace. */
    name(value: string): az_eventhubs_namespace_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_eventhubs_namespace_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_eventhubs_namespace_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_eventhubs_namespace_exists_command_builder extends CommandBuilder<az_eventhubs_namespace_exists_command_result> {
    constructor(commandPath: string, name: string) {
        super(commandPath);
        this.name(name)
    }

    /** Name to check the namespace name availability. */
    name(value: string): az_eventhubs_namespace_exists_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_eventhubs_namespace_exists_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_eventhubs_namespace_list_command_builder extends CommandBuilder<az_eventhubs_namespace_list_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_eventhubs_namespace_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_eventhubs_namespace_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_eventhubs_namespace_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_eventhubs_namespace_show_command_builder extends CommandBuilder<az_eventhubs_namespace_show_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_eventhubs_namespace_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of Namespace. */
    name(value: string): az_eventhubs_namespace_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_eventhubs_namespace_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_eventhubs_namespace_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_eventhubs_namespace_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_eventhubs_namespace_update_command_builder extends CommandBuilder<az_eventhubs_namespace_update_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_eventhubs_namespace_update_command_builder {
        this.setFlag("--add", value);
        return this;
    }

    /** A boolean value that indicates whether Managed Identity is enabled. */
    assignIdentity(value: boolean): az_eventhubs_namespace_update_command_builder {
        this.setFlag("--assign-identity", value.toString());
        return this;
    }

    /** Capacity for Sku. */
    capacity(value: string): az_eventhubs_namespace_update_command_builder {
        this.setFlag("--capacity", value);
        return this;
    }

    /** Default Action for Network Rule Set. */
    defaultAction(value: 'Allow' | 'Deny'): az_eventhubs_namespace_update_command_builder {
        this.setFlag("--default-action", value);
        return this;
    }

    /** A boolean value that indicates whether AutoInflate is enabled for eventhub namespace. */
    enableAutoInflate(value: boolean): az_eventhubs_namespace_update_command_builder {
        this.setFlag("--enable-auto-inflate", value.toString());
        return this;
    }

    /** A boolean value that indicates whether Kafka is enabled for eventhub namespace. */
    enableKafka(value: boolean): az_eventhubs_namespace_update_command_builder {
        this.setFlag("--enable-kafka", value.toString());
        return this;
    }

    /** A boolean value that indicates whether Trusted Service Access is enabled for Network Rule Set. */
    enableTrustedServiceAccess(value: boolean): az_eventhubs_namespace_update_command_builder {
        this.setFlag("--enable-trusted-service-access", value.toString());
        return this;
    }

    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_eventhubs_namespace_update_command_builder {
        this.setFlag("--force-string", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_eventhubs_namespace_update_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the KeyVault key. */
    keyName(value: string): az_eventhubs_namespace_update_command_builder {
        this.setFlag("--key-name", value);
        return this;
    }

    /** Encryption key source. */
    keySource(value: 'Microsoft.KeyVault'): az_eventhubs_namespace_update_command_builder {
        this.setFlag("--key-source", value);
        return this;
    }

    /** The Uri of the KeyVault. */
    keyVaultUri(value: string): az_eventhubs_namespace_update_command_builder {
        this.setFlag("--key-vault-uri", value);
        return this;
    }

    /** The version of the KeyVault key to use. */
    keyVersion(value: string): az_eventhubs_namespace_update_command_builder {
        this.setFlag("--key-version", value);
        return this;
    }

    /** Upper limit of throughput units when AutoInflate is enabled, vaule should be within 0 to 20 throughput units. ( 0 if AutoInflateEnabled = true). */
    maximumThroughputUnits(value: string): az_eventhubs_namespace_update_command_builder {
        this.setFlag("--maximum-throughput-units", value);
        return this;
    }

    /** Name of Namespace. */
    name(value: string): az_eventhubs_namespace_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_eventhubs_namespace_update_command_builder {
        this.setFlag("--remove", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_eventhubs_namespace_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_eventhubs_namespace_update_command_builder {
        this.setFlag("--set", value);
        return this;
    }

    /** Namespace SKU. */
    sku(value: 'Basic' | 'Standard'): az_eventhubs_namespace_update_command_builder {
        this.setFlag("--sku", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_eventhubs_namespace_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_eventhubs_namespace_update_command_builder {
        this.setFlag("--tags", value);
        return this;
    }
}
