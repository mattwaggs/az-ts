import { CommandBuilder } from '../base';
import { az_hdinsight_application_create_command_result } from './models/az_hdinsight_application_create_command_result';
import { az_hdinsight_application_delete_command_result } from './models/az_hdinsight_application_delete_command_result';
import { az_hdinsight_application_list_command_result } from './models/az_hdinsight_application_list_command_result';
import { az_hdinsight_application_show_command_result } from './models/az_hdinsight_application_show_command_result';
import { az_hdinsight_application_wait_command_result } from './models/az_hdinsight_application_wait_command_result';
import { az_hdinsight_autoscale_condition_create_command_result } from './models/az_hdinsight_autoscale_condition_create_command_result';
import { az_hdinsight_autoscale_condition_delete_command_result } from './models/az_hdinsight_autoscale_condition_delete_command_result';
import { az_hdinsight_autoscale_condition_list_command_result } from './models/az_hdinsight_autoscale_condition_list_command_result';
import { az_hdinsight_autoscale_condition_update_command_result } from './models/az_hdinsight_autoscale_condition_update_command_result';
import { az_hdinsight_autoscale_condition_wait_command_result } from './models/az_hdinsight_autoscale_condition_wait_command_result';
import { az_hdinsight_autoscale_create_command_result } from './models/az_hdinsight_autoscale_create_command_result';
import { az_hdinsight_autoscale_delete_command_result } from './models/az_hdinsight_autoscale_delete_command_result';
import { az_hdinsight_autoscale_list_timezones_command_result } from './models/az_hdinsight_autoscale_list_timezones_command_result';
import { az_hdinsight_autoscale_show_command_result } from './models/az_hdinsight_autoscale_show_command_result';
import { az_hdinsight_autoscale_update_command_result } from './models/az_hdinsight_autoscale_update_command_result';
import { az_hdinsight_autoscale_wait_command_result } from './models/az_hdinsight_autoscale_wait_command_result';
import { az_hdinsight_host_list_command_result } from './models/az_hdinsight_host_list_command_result';
import { az_hdinsight_host_restart_command_result } from './models/az_hdinsight_host_restart_command_result';
import { az_hdinsight_monitor_disable_command_result } from './models/az_hdinsight_monitor_disable_command_result';
import { az_hdinsight_monitor_enable_command_result } from './models/az_hdinsight_monitor_enable_command_result';
import { az_hdinsight_monitor_show_command_result } from './models/az_hdinsight_monitor_show_command_result';
import { az_hdinsight_script_action_delete_command_result } from './models/az_hdinsight_script_action_delete_command_result';
import { az_hdinsight_script_action_execute_command_result } from './models/az_hdinsight_script_action_execute_command_result';
import { az_hdinsight_script_action_list_command_result } from './models/az_hdinsight_script_action_list_command_result';
import { az_hdinsight_script_action_list_execution_history_command_result } from './models/az_hdinsight_script_action_list_execution_history_command_result';
import { az_hdinsight_script_action_promote_command_result } from './models/az_hdinsight_script_action_promote_command_result';
import { az_hdinsight_script_action_show_execution_details_command_result } from './models/az_hdinsight_script_action_show_execution_details_command_result';
import { az_hdinsight_create_command_result } from './models/az_hdinsight_create_command_result';
import { az_hdinsight_delete_command_result } from './models/az_hdinsight_delete_command_result';
import { az_hdinsight_list_command_result } from './models/az_hdinsight_list_command_result';
import { az_hdinsight_list_usage_command_result } from './models/az_hdinsight_list_usage_command_result';
import { az_hdinsight_resize_command_result } from './models/az_hdinsight_resize_command_result';
import { az_hdinsight_rotate_disk_encryption_key_command_result } from './models/az_hdinsight_rotate_disk_encryption_key_command_result';
import { az_hdinsight_show_command_result } from './models/az_hdinsight_show_command_result';
import { az_hdinsight_update_command_result } from './models/az_hdinsight_update_command_result';
import { az_hdinsight_wait_command_result } from './models/az_hdinsight_wait_command_result';
/** Manage HDInsight applications. */
export declare class az_hdinsight_application {
    /**
     * Create an application for a HDInsight cluster.
     *
     * Syntax:
     * ```
     * az hdinsight application create --cluster-name
     *                                 --name
     *                                 --resource-group
     *                                 --script-action-name
     *                                 --script-uri
     *                                 [--access-mode]
     *                                 [--destination-port]
     *                                 [--disable-gateway-auth {false, true}]
     *                                 [--edgenode-size]
     *                                 [--marketplace-id]
     *                                 [--no-validation-timeout]
     *                                 [--script-parameters]
     *                                 [--ssh-password]
     *                                 [--ssh-public-key]
     *                                 [--ssh-user]
     *                                 [--sub-domain-suffix]
     *                                 [--subnet]
     *                                 [--subscription]
     *                                 [--tags]
     *                                 [--type {CustomApplication, RServer}]
     *                                 [--vnet-name]
     * ```
     *
     * @param {string} clusterName The name of the cluster.
     * @param {string} name The constant value for the application name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} scriptActionName The name of the script action.
     * @param {string} scriptUri The URI to the script.
     */
    static create(clusterName: string, name: string, resourceGroup: string, scriptActionName: string, scriptUri: string): az_hdinsight_application_create_command_builder;
    /**
     * Deletes the specified application on the HDInsight cluster.
     *
     * Syntax:
     * ```
     * az hdinsight application delete --cluster-name
     *                                 --name
     *                                 --resource-group
     *                                 [--no-wait]
     *                                 [--subscription]
     *                                 [--yes]
     * ```
     *
     * @param {string} clusterName The name of the cluster.
     * @param {string} name The constant value for the application name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static delete(clusterName: string, name: string, resourceGroup: string): az_hdinsight_application_delete_command_builder;
    /**
     * Lists all of the applications for the HDInsight cluster.
     *
     * Syntax:
     * ```
     * az hdinsight application list --cluster-name
     *                               --resource-group
     *                               [--query-examples]
     *                               [--subscription]
     * ```
     *
     * @param {string} clusterName The name of the cluster.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static list(clusterName: string, resourceGroup: string): az_hdinsight_application_list_command_builder;
    /**
     * Gets properties of the specified application.
     *
     * Syntax:
     * ```
     * az hdinsight application show --cluster-name
     *                               --name
     *                               --resource-group
     *                               [--query-examples]
     *                               [--subscription]
     * ```
     *
     * @param {string} clusterName The name of the cluster.
     * @param {string} name The constant value for the application name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static show(clusterName: string, name: string, resourceGroup: string): az_hdinsight_application_show_command_builder;
    /**
     * Place the CLI in a waiting state until an operation is complete.
     *
     * Syntax:
     * ```
     * az hdinsight application wait --cluster-name
     *                               --name
     *                               --resource-group
     *                               [--created]
     *                               [--custom]
     *                               [--deleted]
     *                               [--exists]
     *                               [--interval]
     *                               [--subscription]
     *                               [--timeout]
     *                               [--updated]
     * ```
     *
     * @param {string} clusterName The name of the cluster.
     * @param {string} name The constant value for the application name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static wait(clusterName: string, name: string, resourceGroup: string): az_hdinsight_application_wait_command_builder;
}
/** Manage schedule condition of the HDInsight cluster which enabled Schedule-based Autoscale. */
export declare class az_hdinsight_autoscale_condition {
    /**
     * Add a new schedule condition.
     *
     * Syntax:
     * ```
     * az hdinsight autoscale condition create --cluster-name
     *                                         --days {Friday, Monday, Saturday, Sunday, Thursday, Tuesday, Wednesday}
     *                                         --resource-group
     *                                         --time
     *                                         --workernode-count
     *                                         [--no-wait]
     *                                         [--subscription]
     * ```
     *
     * @param {string} clusterName The name of the cluster.
     * @param {'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday'} days A space-delimited list of schedule day.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} time The 24-hour time in the form xx:xx in days.
     * @param {string} workernodeCount The schedule workernode count.
     */
    static create(clusterName: string, days: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday', resourceGroup: string, time: string, workernodeCount: string): az_hdinsight_autoscale_condition_create_command_builder;
    /**
     * Delete schedule condition.
     *
     * Syntax:
     * ```
     * az hdinsight autoscale condition delete --cluster-name
     *                                         --index
     *                                         --resource-group
     *                                         [--no-wait]
     *                                         [--subscription]
     *                                         [--yes]
     * ```
     *
     * @param {string} clusterName The name of the cluster.
     * @param {string} index The Space-separated list of condition indices which starts with 0 to delete.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static delete(clusterName: string, index: string, resourceGroup: string): az_hdinsight_autoscale_condition_delete_command_builder;
    /**
     * List all schedule conditions.
     *
     * Syntax:
     * ```
     * az hdinsight autoscale condition list --cluster-name
     *                                       --resource-group
     *                                       [--query-examples]
     *                                       [--subscription]
     * ```
     *
     * @param {string} clusterName The name of the cluster.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static list(clusterName: string, resourceGroup: string): az_hdinsight_autoscale_condition_list_command_builder;
    /**
     * Update a schedule condition.
     *
     * Syntax:
     * ```
     * az hdinsight autoscale condition update --cluster-name
     *                                         --index
     *                                         --resource-group
     *                                         [--days {Friday, Monday, Saturday, Sunday, Thursday, Tuesday, Wednesday}]
     *                                         [--no-wait]
     *                                         [--subscription]
     *                                         [--time]
     *                                         [--workernode-count]
     * ```
     *
     * @param {string} clusterName The name of the cluster.
     * @param {string} index The schedule condition index which starts with 0.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static update(clusterName: string, index: string, resourceGroup: string): az_hdinsight_autoscale_condition_update_command_builder;
    /**
     * Place the CLI in a waiting state until an operation is complete.
     *
     * Syntax:
     * ```
     * az hdinsight autoscale condition wait --name
     *                                       --resource-group
     *                                       [--created]
     *                                       [--custom]
     *                                       [--deleted]
     *                                       [--exists]
     *                                       [--interval]
     *                                       [--subscription]
     *                                       [--timeout]
     *                                       [--updated]
     * ```
     *
     * @param {string} name The name of the cluster.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static wait(name: string, resourceGroup: string): az_hdinsight_autoscale_condition_wait_command_builder;
}
/** Manage HDInsight cluster's Autoscale configuration. */
export declare class az_hdinsight_autoscale {
    /**
     * Enable Autoscale for a running cluster.
     *
     * Syntax:
     * ```
     * az hdinsight autoscale create --cluster-name
     *                               --resource-group
     *                               --type {Load, Schedule}
     *                               [--days {Friday, Monday, Saturday, Sunday, Thursday, Tuesday, Wednesday}]
     *                               [--max-workernode-count]
     *                               [--min-workernode-count]
     *                               [--no-wait]
     *                               [--subscription]
     *                               [--time]
     *                               [--timezone]
     *                               [--workernode-count]
     *                               [--yes]
     * ```
     *
     * @param {string} clusterName The name of the cluster.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {'Load' | 'Schedule'} type The autoscale type.
     */
    static create(clusterName: string, resourceGroup: string, type: 'Load' | 'Schedule'): az_hdinsight_autoscale_create_command_builder;
    /**
     * Disable Autoscale for a running cluster.
     *
     * Syntax:
     * ```
     * az hdinsight autoscale delete --cluster-name
     *                               --resource-group
     *                               [--no-wait]
     *                               [--subscription]
     *                               [--yes]
     * ```
     *
     * @param {string} clusterName The name of the cluster.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static delete(clusterName: string, resourceGroup: string): az_hdinsight_autoscale_delete_command_builder;
    /**
     * List the available timezone name when enabling Schedule-based Autoscale.
     *
     * Syntax:
     * ```
     * az hdinsight autoscale list-timezones [--subscription]
     * ```
     */
    static list_timezones(): az_hdinsight_autoscale_list_timezones_command_builder;
    /**
     * Get the Autoscale configuration of a specified cluster.
     *
     * Syntax:
     * ```
     * az hdinsight autoscale show --cluster-name
     *                             --resource-group
     *                             [--query-examples]
     *                             [--subscription]
     * ```
     *
     * @param {string} clusterName The name of the cluster.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static show(clusterName: string, resourceGroup: string): az_hdinsight_autoscale_show_command_builder;
    /**
     * Update the Autoscale configuration.
     *
     * Syntax:
     * ```
     * az hdinsight autoscale update --cluster-name
     *                               --resource-group
     *                               [--max-workernode-count]
     *                               [--min-workernode-count]
     *                               [--no-wait]
     *                               [--subscription]
     *                               [--timezone]
     * ```
     *
     * @param {string} clusterName The name of the cluster.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static update(clusterName: string, resourceGroup: string): az_hdinsight_autoscale_update_command_builder;
    /**
     * Place the CLI in a waiting state until an operation is complete.
     *
     * Syntax:
     * ```
     * az hdinsight autoscale wait --name
     *                             --resource-group
     *                             [--created]
     *                             [--custom]
     *                             [--deleted]
     *                             [--exists]
     *                             [--interval]
     *                             [--subscription]
     *                             [--timeout]
     *                             [--updated]
     * ```
     *
     * @param {string} name The name of the cluster.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static wait(name: string, resourceGroup: string): az_hdinsight_autoscale_wait_command_builder;
}
/** Manage HDInsight cluster's virtual hosts. */
export declare class az_hdinsight_host {
    /**
     * List the hosts of the specified HDInsight cluster.
     *
     * Syntax:
     * ```
     * az hdinsight host list --cluster-name
     *                        --resource-group
     *                        [--query-examples]
     *                        [--subscription]
     * ```
     *
     * @param {string} clusterName The name of the cluster.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static list(clusterName: string, resourceGroup: string): az_hdinsight_host_list_command_builder;
    /**
     * Restart the specific hosts of the specified HDInsight cluster.
     *
     * Syntax:
     * ```
     * az hdinsight host restart --cluster-name
     *                           --host-names
     *                           --resource-group
     *                           [--subscription]
     *                           [--yes]
     * ```
     *
     * @param {string} clusterName The name of the cluster.
     * @param {string} hostNames A space-delimited list of host names that need to be restarted.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static restart(clusterName: string, hostNames: string, resourceGroup: string): az_hdinsight_host_restart_command_builder;
}
/** Manage Azure Monitor logs integration on an HDInsight cluster. */
export declare class az_hdinsight_monitor {
    /**
     * Disable the Azure Monitor logs integration on an HDInsight cluster.
     *
     * Syntax:
     * ```
     * az hdinsight monitor disable --name
     *                              --resource-group
     *                              [--subscription]
     * ```
     *
     * @param {string} name The name of the cluster.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static disable(name: string, resourceGroup: string): az_hdinsight_monitor_disable_command_builder;
    /**
     * Enable the Azure Monitor logs integration on an HDInsight cluster.
     *
     * Syntax:
     * ```
     * az hdinsight monitor enable --name
     *                             --resource-group
     *                             --workspace
     *                             [--no-validation-timeout]
     *                             [--primary-key]
     *                             [--subscription]
     * ```
     *
     * @param {string} name The name of the cluster.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} workspace The name, resource ID or workspace ID of Log Analytics workspace.
     */
    static enable(name: string, resourceGroup: string, workspace: string): az_hdinsight_monitor_enable_command_builder;
    /**
     * Get the status of Azure Monitor logs integration on an HDInsight cluster.
     *
     * Syntax:
     * ```
     * az hdinsight monitor show --name
     *                           --resource-group
     *                           [--query-examples]
     *                           [--subscription]
     * ```
     *
     * @param {string} name The name of the cluster.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static show(name: string, resourceGroup: string): az_hdinsight_monitor_show_command_builder;
}
/** Manage HDInsight script actions. */
export declare class az_hdinsight_script_action {
    /**
     * Deletes a specified persisted script action of the cluster.
     *
     * Syntax:
     * ```
     * az hdinsight script-action delete --cluster-name
     *                                   --name
     *                                   --resource-group
     *                                   [--subscription]
     * ```
     *
     * @param {string} clusterName The name of the cluster.
     * @param {string} name The name of the script.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static delete(clusterName: string, name: string, resourceGroup: string): az_hdinsight_script_action_delete_command_builder;
    /**
     * Execute script actions on the specified HDInsight cluster.
     *
     * Syntax:
     * ```
     * az hdinsight script-action execute --cluster-name
     *                                    --name
     *                                    --resource-group
     *                                    --roles
     *                                    --script-uri
     *                                    [--persist-on-success]
     *                                    [--script-parameters]
     *                                    [--subscription]
     * ```
     *
     * @param {string} clusterName The name of the cluster.
     * @param {string} name The name of the script action.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} roles A space-delimited list of roles (nodes) where the script will be executed. Valid roles are headnode, workernode, zookeepernode, edgenode.
     * @param {string} scriptUri The URI to the script.
     */
    static execute(clusterName: string, name: string, resourceGroup: string, roles: string, scriptUri: string): az_hdinsight_script_action_execute_command_builder;
    /**
     * Lists all the persisted script actions for the specified cluster.
     *
     * Syntax:
     * ```
     * az hdinsight script-action list --cluster-name
     *                                 --resource-group
     *                                 [--query-examples]
     *                                 [--subscription]
     * ```
     *
     * @param {string} clusterName The name of the cluster.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static list(clusterName: string, resourceGroup: string): az_hdinsight_script_action_list_command_builder;
    /**
     * Lists all scripts' execution history for the specified cluster.
     *
     * Syntax:
     * ```
     * az hdinsight script-action list-execution-history --cluster-name
     *                                                   --resource-group
     *                                                   [--subscription]
     * ```
     *
     * @param {string} clusterName The name of the cluster.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static list_execution_history(clusterName: string, resourceGroup: string): az_hdinsight_script_action_list_execution_history_command_builder;
    /**
     * Promotes the specified ad-hoc script execution to a persisted script.
     *
     * Syntax:
     * ```
     * az hdinsight script-action promote --cluster-name
     *                                    --execution-id
     *                                    --resource-group
     *                                    [--subscription]
     * ```
     *
     * @param {string} clusterName The name of the cluster.
     * @param {string} executionId The script execution id.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static promote(clusterName: string, executionId: string, resourceGroup: string): az_hdinsight_script_action_promote_command_builder;
    /**
     * Gets the script execution detail for the given script execution ID.
     *
     * Syntax:
     * ```
     * az hdinsight script-action show-execution-details --cluster-name
     *                                                   --execution-id
     *                                                   --resource-group
     *                                                   [--subscription]
     * ```
     *
     * @param {string} clusterName The name of the cluster.
     * @param {string} executionId The script execution id.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static show_execution_details(clusterName: string, executionId: string, resourceGroup: string): az_hdinsight_script_action_show_execution_details_command_builder;
}
/** Manage HDInsight resources. */
export declare class az_hdinsight {
    /**
     * Create a new cluster.
     *
     * Syntax:
     * ```
     * az hdinsight create --name
     *                     --resource-group
     *                     --type
     *                     [--assign-identity]
     *                     [--autoscale-count]
     *                     [--autoscale-max-count]
     *                     [--autoscale-min-count]
     *                     [--autoscale-type {Load, Schedule}]
     *                     [--cluster-admin-account]
     *                     [--cluster-admin-password]
     *                     [--cluster-configurations]
     *                     [--cluster-tier {Premium, Standard}]
     *                     [--cluster-users-group-dns]
     *                     [--component-version]
     *                     [--days {Friday, Monday, Saturday, Sunday, Thursday, Tuesday, Wednesday}]
     *                     [--domain]
     *                     [--edgenode-size]
     *                     [--encryption-algorithm {RSA-OAEP, RSA-OAEP-256, RSA1_5}]
     *                     [--encryption-at-host {false, true}]
     *                     [--encryption-in-transit {false, true}]
     *                     [--encryption-key-name]
     *                     [--encryption-key-version]
     *                     [--encryption-vault-uri]
     *                     [--esp]
     *                     [--headnode-size]
     *                     [--http-password]
     *                     [--http-user]
     *                     [--kafka-client-group-id]
     *                     [--kafka-client-group-name]
     *                     [--kafka-management-node-count]
     *                     [--kafka-management-node-size]
     *                     [--ldaps-urls]
     *                     [--location]
     *                     [--minimal-tls-version {1.0, 1.1, 1.2}]
     *                     [--no-validation-timeout]
     *                     [--no-wait]
     *                     [--outbound-public-network-access-type {PublicLoadBalancer, UDR}]
     *                     [--public-network-access-type {InboundAndOutbound, OutboundOnly}]
     *                     [--ssh-password]
     *                     [--ssh-public-key]
     *                     [--ssh-user]
     *                     [--storage-account]
     *                     [--storage-account-key]
     *                     [--storage-account-managed-identity]
     *                     [--storage-container]
     *                     [--storage-filesystem]
     *                     [--subnet]
     *                     [--subscription]
     *                     [--tags]
     *                     [--time]
     *                     [--timezone]
     *                     [--version]
     *                     [--vnet-name]
     *                     [--workernode-count]
     *                     [--workernode-data-disk-size]
     *                     [--workernode-data-disk-storage-account-type {premium_lrs, standard_lrs}]
     *                     [--workernode-data-disks-per-node]
     *                     [--workernode-size]
     *                     [--zookeepernode-size]
     * ```
     *
     * @param {string} name The name of the cluster.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} type Type of HDInsight cluster, like: hadoop, interactivehive, hbase, kafka, storm, spark, rserver, mlservices. See also: <a href="https://docs.microsoft.com/azure/hdinsight/hdinsight-hadoop-provision-linux-clusters#cluster-types">https://docs.microsoft.com/azure/hdinsight/hdinsight-hadoop-provision-linux-clusters#cluster-types</a>.
     */
    static create(name: string, resourceGroup: string, type: string): az_hdinsight_create_command_builder;
    /**
     * Deletes the specified HDInsight cluster.
     *
     * Syntax:
     * ```
     * az hdinsight delete --name
     *                     --resource-group
     *                     [--no-wait]
     *                     [--subscription]
     *                     [--yes]
     * ```
     *
     * @param {string} name The name of the cluster.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static delete(name: string, resourceGroup: string): az_hdinsight_delete_command_builder;
    /**
     * List HDInsight clusters in a resource group or subscription.
     *
     * Syntax:
     * ```
     * az hdinsight list [--query-examples]
     *                   [--resource-group]
     *                   [--subscription]
     * ```
     */
    static list(): az_hdinsight_list_command_builder;
    /**
     * Lists the usages for the specified location.
     *
     * Syntax:
     * ```
     * az hdinsight list-usage --location
     *                         [--subscription]
     * ```
     *
     * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
     */
    static list_usage(location: string): az_hdinsight_list_usage_command_builder;
    /**
     * Resizes the specified HDInsight cluster to the specified size.
     *
     * Syntax:
     * ```
     * az hdinsight resize --name
     *                     --resource-group
     *                     --workernode-count
     *                     [--no-wait]
     *                     [--subscription]
     * ```
     *
     * @param {string} name The name of the cluster.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} workernodeCount The target worker node instance count for the operation.
     */
    static resize(name: string, resourceGroup: string, workernodeCount: string): az_hdinsight_resize_command_builder;
    /**
     * Rotate the disk encryption key of the specified HDInsight cluster.
     *
     * Syntax:
     * ```
     * az hdinsight rotate-disk-encryption-key --encryption-key-name
     *                                         --encryption-key-version
     *                                         --encryption-vault-uri
     *                                         --name
     *                                         --resource-group
     *                                         [--no-wait]
     *                                         [--subscription]
     * ```
     *
     * @param {string} encryptionKeyName Key name that is used for enabling disk encryption.
     * @param {string} encryptionKeyVersion Key version that is used for enabling disk encryption.
     * @param {string} encryptionVaultUri Base key vault URI where the customers key is located eg. <a href="https://myvault.vault.azure.net">https://myvault.vault.azure.net</a>.
     * @param {string} name The name of the cluster.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static rotate_disk_encryption_key(encryptionKeyName: string, encryptionKeyVersion: string, encryptionVaultUri: string, name: string, resourceGroup: string): az_hdinsight_rotate_disk_encryption_key_command_builder;
    /**
     * Gets the specified cluster.
     *
     * Syntax:
     * ```
     * az hdinsight show --name
     *                   --resource-group
     *                   [--query-examples]
     *                   [--subscription]
     * ```
     *
     * @param {string} name The name of the cluster.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static show(name: string, resourceGroup: string): az_hdinsight_show_command_builder;
    /**
     * Patch HDInsight cluster with the specified parameters.
     *
     * Syntax:
     * ```
     * az hdinsight update --name
     *                     --resource-group
     *                     [--no-wait]
     *                     [--subscription]
     *                     [--tags]
     * ```
     *
     * @param {string} name The name of the cluster.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static update(name: string, resourceGroup: string): az_hdinsight_update_command_builder;
    /**
     * Place the CLI in a waiting state until an operation is complete.
     *
     * Syntax:
     * ```
     * az hdinsight wait --name
     *                   --resource-group
     *                   [--created]
     *                   [--custom]
     *                   [--deleted]
     *                   [--exists]
     *                   [--interval]
     *                   [--subscription]
     *                   [--timeout]
     *                   [--updated]
     * ```
     *
     * @param {string} name The name of the cluster.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static wait(name: string, resourceGroup: string): az_hdinsight_wait_command_builder;
}
/**
 * Create an application for a HDInsight cluster.
 *
 * Syntax:
 * ```
 * az hdinsight application create --cluster-name
 *                                 --name
 *                                 --resource-group
 *                                 --script-action-name
 *                                 --script-uri
 *                                 [--access-mode]
 *                                 [--destination-port]
 *                                 [--disable-gateway-auth {false, true}]
 *                                 [--edgenode-size]
 *                                 [--marketplace-id]
 *                                 [--no-validation-timeout]
 *                                 [--script-parameters]
 *                                 [--ssh-password]
 *                                 [--ssh-public-key]
 *                                 [--ssh-user]
 *                                 [--sub-domain-suffix]
 *                                 [--subnet]
 *                                 [--subscription]
 *                                 [--tags]
 *                                 [--type {CustomApplication, RServer}]
 *                                 [--vnet-name]
 * ```
 *
 * @param {string} clusterName The name of the cluster.
 * @param {string} name The constant value for the application name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} scriptActionName The name of the script action.
 * @param {string} scriptUri The URI to the script.
 */
declare class az_hdinsight_application_create_command_builder extends CommandBuilder<az_hdinsight_application_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, clusterName: string, name: string, resourceGroup: string, scriptActionName: string, scriptUri: string);
    /** The name of the cluster. */
    clusterName(value: string): az_hdinsight_application_create_command_builder;
    /** The constant value for the application name. */
    name(value: string): az_hdinsight_application_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_hdinsight_application_create_command_builder;
    /** The name of the script action. */
    scriptActionName(value: string): az_hdinsight_application_create_command_builder;
    /** The URI to the script. */
    scriptUri(value: string): az_hdinsight_application_create_command_builder;
    /** The access mode for the application. */
    accessMode(value: string): az_hdinsight_application_create_command_builder;
    /** The destination port to connect to. */
    destinationPort(value: string): az_hdinsight_application_create_command_builder;
    /** Indicates whether to disable gateway authentication. Default is to enable gateway authentication. Default: false. */
    disableGatewayAuth(value: boolean): az_hdinsight_application_create_command_builder;
    /** The size of the node. See also: <a href="https://docs.microsoft.com/azure/hdinsight/hdinsight-hadoop-provision-linux-clusters#configure-cluster-size">https://docs.microsoft.com/azure/hdinsight/hdinsight-hadoop-provision-linux-clusters#configure-cluster-size</a>. */
    edgenodeSize(value: string): az_hdinsight_application_create_command_builder;
    /** The marketplace identifier. */
    marketplaceId(value: string): az_hdinsight_application_create_command_builder;
    /** Permit timeout error during argument validation phase. If omitted, validation timeout error will be permitted. */
    noValidationTimeout(value: string): az_hdinsight_application_create_command_builder;
    /** The parameters for the script. */
    scriptParameters(value: string): az_hdinsight_application_create_command_builder;
    /** SSH password for the cluster nodes. */
    sshPassword(value: string): az_hdinsight_application_create_command_builder;
    /** SSH public key for the cluster nodes. */
    sshPublicKey(value: string): az_hdinsight_application_create_command_builder;
    /** SSH username for the cluster nodes. */
    sshUser(value: string): az_hdinsight_application_create_command_builder;
    /** The subdomain suffix of the application. */
    subDomainSuffix(value: string): az_hdinsight_application_create_command_builder;
    /** The name or ID of subnet. If name is supplied, `--vnet-name` must be supplied. */
    subnet(value: string): az_hdinsight_application_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_hdinsight_application_create_command_builder;
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_hdinsight_application_create_command_builder;
    /** The application type. */
    type(value: 'CustomApplication' | 'RServer'): az_hdinsight_application_create_command_builder;
    /** The name of a virtual network. */
    vnetName(value: string): az_hdinsight_application_create_command_builder;
}
/**
 * Deletes the specified application on the HDInsight cluster.
 *
 * Syntax:
 * ```
 * az hdinsight application delete --cluster-name
 *                                 --name
 *                                 --resource-group
 *                                 [--no-wait]
 *                                 [--subscription]
 *                                 [--yes]
 * ```
 *
 * @param {string} clusterName The name of the cluster.
 * @param {string} name The constant value for the application name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_hdinsight_application_delete_command_builder extends CommandBuilder<az_hdinsight_application_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, clusterName: string, name: string, resourceGroup: string);
    /** The name of the cluster. */
    clusterName(value: string): az_hdinsight_application_delete_command_builder;
    /** The constant value for the application name. */
    name(value: string): az_hdinsight_application_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_hdinsight_application_delete_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_hdinsight_application_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_hdinsight_application_delete_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_hdinsight_application_delete_command_builder;
}
/**
 * Lists all of the applications for the HDInsight cluster.
 *
 * Syntax:
 * ```
 * az hdinsight application list --cluster-name
 *                               --resource-group
 *                               [--query-examples]
 *                               [--subscription]
 * ```
 *
 * @param {string} clusterName The name of the cluster.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_hdinsight_application_list_command_builder extends CommandBuilder<az_hdinsight_application_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, clusterName: string, resourceGroup: string);
    /** The name of the cluster. */
    clusterName(value: string): az_hdinsight_application_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_hdinsight_application_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_hdinsight_application_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_hdinsight_application_list_command_builder;
}
/**
 * Gets properties of the specified application.
 *
 * Syntax:
 * ```
 * az hdinsight application show --cluster-name
 *                               --name
 *                               --resource-group
 *                               [--query-examples]
 *                               [--subscription]
 * ```
 *
 * @param {string} clusterName The name of the cluster.
 * @param {string} name The constant value for the application name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_hdinsight_application_show_command_builder extends CommandBuilder<az_hdinsight_application_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, clusterName: string, name: string, resourceGroup: string);
    /** The name of the cluster. */
    clusterName(value: string): az_hdinsight_application_show_command_builder;
    /** The constant value for the application name. */
    name(value: string): az_hdinsight_application_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_hdinsight_application_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_hdinsight_application_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_hdinsight_application_show_command_builder;
}
/**
 * Place the CLI in a waiting state until an operation is complete.
 *
 * Syntax:
 * ```
 * az hdinsight application wait --cluster-name
 *                               --name
 *                               --resource-group
 *                               [--created]
 *                               [--custom]
 *                               [--deleted]
 *                               [--exists]
 *                               [--interval]
 *                               [--subscription]
 *                               [--timeout]
 *                               [--updated]
 * ```
 *
 * @param {string} clusterName The name of the cluster.
 * @param {string} name The constant value for the application name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_hdinsight_application_wait_command_builder extends CommandBuilder<az_hdinsight_application_wait_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, clusterName: string, name: string, resourceGroup: string);
    /** The name of the cluster. */
    clusterName(value: string): az_hdinsight_application_wait_command_builder;
    /** The constant value for the application name. */
    name(value: string): az_hdinsight_application_wait_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_hdinsight_application_wait_command_builder;
    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    created(value: string): az_hdinsight_application_wait_command_builder;
    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    custom(value: string): az_hdinsight_application_wait_command_builder;
    /** Wait until deleted. */
    deleted(value: string): az_hdinsight_application_wait_command_builder;
    /** Wait until the resource exists. */
    exists(value: string): az_hdinsight_application_wait_command_builder;
    /** Polling interval in seconds. */
    interval(value: string): az_hdinsight_application_wait_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_hdinsight_application_wait_command_builder;
    /** Maximum wait in seconds. */
    timeout(value: string): az_hdinsight_application_wait_command_builder;
    /** Wait until updated with provisioningState at 'Succeeded'. */
    updated(value: string): az_hdinsight_application_wait_command_builder;
}
/**
 * Add a new schedule condition.
 *
 * Syntax:
 * ```
 * az hdinsight autoscale condition create --cluster-name
 *                                         --days {Friday, Monday, Saturday, Sunday, Thursday, Tuesday, Wednesday}
 *                                         --resource-group
 *                                         --time
 *                                         --workernode-count
 *                                         [--no-wait]
 *                                         [--subscription]
 * ```
 *
 * @param {string} clusterName The name of the cluster.
 * @param {'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday'} days A space-delimited list of schedule day.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} time The 24-hour time in the form xx:xx in days.
 * @param {string} workernodeCount The schedule workernode count.
 */
declare class az_hdinsight_autoscale_condition_create_command_builder extends CommandBuilder<az_hdinsight_autoscale_condition_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, clusterName: string, days: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday', resourceGroup: string, time: string, workernodeCount: string);
    /** The name of the cluster. */
    clusterName(value: string): az_hdinsight_autoscale_condition_create_command_builder;
    /** A space-delimited list of schedule day. */
    days(value: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday'): az_hdinsight_autoscale_condition_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_hdinsight_autoscale_condition_create_command_builder;
    /** The 24-hour time in the form xx:xx in days. */
    time(value: string): az_hdinsight_autoscale_condition_create_command_builder;
    /** The schedule workernode count. */
    workernodeCount(value: string): az_hdinsight_autoscale_condition_create_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_hdinsight_autoscale_condition_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_hdinsight_autoscale_condition_create_command_builder;
}
/**
 * Delete schedule condition.
 *
 * Syntax:
 * ```
 * az hdinsight autoscale condition delete --cluster-name
 *                                         --index
 *                                         --resource-group
 *                                         [--no-wait]
 *                                         [--subscription]
 *                                         [--yes]
 * ```
 *
 * @param {string} clusterName The name of the cluster.
 * @param {string} index The Space-separated list of condition indices which starts with 0 to delete.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_hdinsight_autoscale_condition_delete_command_builder extends CommandBuilder<az_hdinsight_autoscale_condition_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, clusterName: string, index: string, resourceGroup: string);
    /** The name of the cluster. */
    clusterName(value: string): az_hdinsight_autoscale_condition_delete_command_builder;
    /** The Space-separated list of condition indices which starts with 0 to delete. */
    index(value: string): az_hdinsight_autoscale_condition_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_hdinsight_autoscale_condition_delete_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_hdinsight_autoscale_condition_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_hdinsight_autoscale_condition_delete_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_hdinsight_autoscale_condition_delete_command_builder;
}
/**
 * List all schedule conditions.
 *
 * Syntax:
 * ```
 * az hdinsight autoscale condition list --cluster-name
 *                                       --resource-group
 *                                       [--query-examples]
 *                                       [--subscription]
 * ```
 *
 * @param {string} clusterName The name of the cluster.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_hdinsight_autoscale_condition_list_command_builder extends CommandBuilder<az_hdinsight_autoscale_condition_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, clusterName: string, resourceGroup: string);
    /** The name of the cluster. */
    clusterName(value: string): az_hdinsight_autoscale_condition_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_hdinsight_autoscale_condition_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_hdinsight_autoscale_condition_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_hdinsight_autoscale_condition_list_command_builder;
}
/**
 * Update a schedule condition.
 *
 * Syntax:
 * ```
 * az hdinsight autoscale condition update --cluster-name
 *                                         --index
 *                                         --resource-group
 *                                         [--days {Friday, Monday, Saturday, Sunday, Thursday, Tuesday, Wednesday}]
 *                                         [--no-wait]
 *                                         [--subscription]
 *                                         [--time]
 *                                         [--workernode-count]
 * ```
 *
 * @param {string} clusterName The name of the cluster.
 * @param {string} index The schedule condition index which starts with 0.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_hdinsight_autoscale_condition_update_command_builder extends CommandBuilder<az_hdinsight_autoscale_condition_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, clusterName: string, index: string, resourceGroup: string);
    /** The name of the cluster. */
    clusterName(value: string): az_hdinsight_autoscale_condition_update_command_builder;
    /** The schedule condition index which starts with 0. */
    index(value: string): az_hdinsight_autoscale_condition_update_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_hdinsight_autoscale_condition_update_command_builder;
    /** A space-delimited list of schedule day. */
    days(value: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday'): az_hdinsight_autoscale_condition_update_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_hdinsight_autoscale_condition_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_hdinsight_autoscale_condition_update_command_builder;
    /** The 24-hour time in the form xx:xx in days. */
    time(value: string): az_hdinsight_autoscale_condition_update_command_builder;
    /** The schedule workernode count. */
    workernodeCount(value: string): az_hdinsight_autoscale_condition_update_command_builder;
}
/**
 * Place the CLI in a waiting state until an operation is complete.
 *
 * Syntax:
 * ```
 * az hdinsight autoscale condition wait --name
 *                                       --resource-group
 *                                       [--created]
 *                                       [--custom]
 *                                       [--deleted]
 *                                       [--exists]
 *                                       [--interval]
 *                                       [--subscription]
 *                                       [--timeout]
 *                                       [--updated]
 * ```
 *
 * @param {string} name The name of the cluster.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_hdinsight_autoscale_condition_wait_command_builder extends CommandBuilder<az_hdinsight_autoscale_condition_wait_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** The name of the cluster. */
    name(value: string): az_hdinsight_autoscale_condition_wait_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_hdinsight_autoscale_condition_wait_command_builder;
    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    created(value: string): az_hdinsight_autoscale_condition_wait_command_builder;
    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    custom(value: string): az_hdinsight_autoscale_condition_wait_command_builder;
    /** Wait until deleted. */
    deleted(value: string): az_hdinsight_autoscale_condition_wait_command_builder;
    /** Wait until the resource exists. */
    exists(value: string): az_hdinsight_autoscale_condition_wait_command_builder;
    /** Polling interval in seconds. */
    interval(value: string): az_hdinsight_autoscale_condition_wait_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_hdinsight_autoscale_condition_wait_command_builder;
    /** Maximum wait in seconds. */
    timeout(value: string): az_hdinsight_autoscale_condition_wait_command_builder;
    /** Wait until updated with provisioningState at 'Succeeded'. */
    updated(value: string): az_hdinsight_autoscale_condition_wait_command_builder;
}
/**
 * Enable Autoscale for a running cluster.
 *
 * Syntax:
 * ```
 * az hdinsight autoscale create --cluster-name
 *                               --resource-group
 *                               --type {Load, Schedule}
 *                               [--days {Friday, Monday, Saturday, Sunday, Thursday, Tuesday, Wednesday}]
 *                               [--max-workernode-count]
 *                               [--min-workernode-count]
 *                               [--no-wait]
 *                               [--subscription]
 *                               [--time]
 *                               [--timezone]
 *                               [--workernode-count]
 *                               [--yes]
 * ```
 *
 * @param {string} clusterName The name of the cluster.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {'Load' | 'Schedule'} type The autoscale type.
 */
declare class az_hdinsight_autoscale_create_command_builder extends CommandBuilder<az_hdinsight_autoscale_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, clusterName: string, resourceGroup: string, type: 'Load' | 'Schedule');
    /** The name of the cluster. */
    clusterName(value: string): az_hdinsight_autoscale_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_hdinsight_autoscale_create_command_builder;
    /** The autoscale type. */
    type(value: 'Load' | 'Schedule'): az_hdinsight_autoscale_create_command_builder;
    /** A space-delimited list of schedule day. */
    days(value: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday'): az_hdinsight_autoscale_create_command_builder;
    /** The max workernode count for Load-based atuoscale. */
    maxWorkernodeCount(value: string): az_hdinsight_autoscale_create_command_builder;
    /** The minimal workernode count for Load-based atuoscale. */
    minWorkernodeCount(value: string): az_hdinsight_autoscale_create_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_hdinsight_autoscale_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_hdinsight_autoscale_create_command_builder;
    /** The 24-hour time in the form xx:xx in days. */
    time(value: string): az_hdinsight_autoscale_create_command_builder;
    /** The timezone for schedule autoscale type. Values from `az hdinsight autoscale list-timezones`. */
    timezone(value: string): az_hdinsight_autoscale_create_command_builder;
    /** The schedule workernode count. */
    workernodeCount(value: string): az_hdinsight_autoscale_create_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_hdinsight_autoscale_create_command_builder;
}
/**
 * Disable Autoscale for a running cluster.
 *
 * Syntax:
 * ```
 * az hdinsight autoscale delete --cluster-name
 *                               --resource-group
 *                               [--no-wait]
 *                               [--subscription]
 *                               [--yes]
 * ```
 *
 * @param {string} clusterName The name of the cluster.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_hdinsight_autoscale_delete_command_builder extends CommandBuilder<az_hdinsight_autoscale_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, clusterName: string, resourceGroup: string);
    /** The name of the cluster. */
    clusterName(value: string): az_hdinsight_autoscale_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_hdinsight_autoscale_delete_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_hdinsight_autoscale_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_hdinsight_autoscale_delete_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_hdinsight_autoscale_delete_command_builder;
}
/**
 * List the available timezone name when enabling Schedule-based Autoscale.
 *
 * Syntax:
 * ```
 * az hdinsight autoscale list-timezones [--subscription]
 * ```
 */
declare class az_hdinsight_autoscale_list_timezones_command_builder extends CommandBuilder<az_hdinsight_autoscale_list_timezones_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_hdinsight_autoscale_list_timezones_command_builder;
}
/**
 * Get the Autoscale configuration of a specified cluster.
 *
 * Syntax:
 * ```
 * az hdinsight autoscale show --cluster-name
 *                             --resource-group
 *                             [--query-examples]
 *                             [--subscription]
 * ```
 *
 * @param {string} clusterName The name of the cluster.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_hdinsight_autoscale_show_command_builder extends CommandBuilder<az_hdinsight_autoscale_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, clusterName: string, resourceGroup: string);
    /** The name of the cluster. */
    clusterName(value: string): az_hdinsight_autoscale_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_hdinsight_autoscale_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_hdinsight_autoscale_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_hdinsight_autoscale_show_command_builder;
}
/**
 * Update the Autoscale configuration.
 *
 * Syntax:
 * ```
 * az hdinsight autoscale update --cluster-name
 *                               --resource-group
 *                               [--max-workernode-count]
 *                               [--min-workernode-count]
 *                               [--no-wait]
 *                               [--subscription]
 *                               [--timezone]
 * ```
 *
 * @param {string} clusterName The name of the cluster.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_hdinsight_autoscale_update_command_builder extends CommandBuilder<az_hdinsight_autoscale_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, clusterName: string, resourceGroup: string);
    /** The name of the cluster. */
    clusterName(value: string): az_hdinsight_autoscale_update_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_hdinsight_autoscale_update_command_builder;
    /** The max workernode count for Load-based atuoscale. */
    maxWorkernodeCount(value: string): az_hdinsight_autoscale_update_command_builder;
    /** The minimal workernode count for Load-based atuoscale. */
    minWorkernodeCount(value: string): az_hdinsight_autoscale_update_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_hdinsight_autoscale_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_hdinsight_autoscale_update_command_builder;
    /** The timezone for schedule autoscale type. Values from `az hdinsight autoscale list-timezones`. */
    timezone(value: string): az_hdinsight_autoscale_update_command_builder;
}
/**
 * Place the CLI in a waiting state until an operation is complete.
 *
 * Syntax:
 * ```
 * az hdinsight autoscale wait --name
 *                             --resource-group
 *                             [--created]
 *                             [--custom]
 *                             [--deleted]
 *                             [--exists]
 *                             [--interval]
 *                             [--subscription]
 *                             [--timeout]
 *                             [--updated]
 * ```
 *
 * @param {string} name The name of the cluster.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_hdinsight_autoscale_wait_command_builder extends CommandBuilder<az_hdinsight_autoscale_wait_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** The name of the cluster. */
    name(value: string): az_hdinsight_autoscale_wait_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_hdinsight_autoscale_wait_command_builder;
    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    created(value: string): az_hdinsight_autoscale_wait_command_builder;
    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    custom(value: string): az_hdinsight_autoscale_wait_command_builder;
    /** Wait until deleted. */
    deleted(value: string): az_hdinsight_autoscale_wait_command_builder;
    /** Wait until the resource exists. */
    exists(value: string): az_hdinsight_autoscale_wait_command_builder;
    /** Polling interval in seconds. */
    interval(value: string): az_hdinsight_autoscale_wait_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_hdinsight_autoscale_wait_command_builder;
    /** Maximum wait in seconds. */
    timeout(value: string): az_hdinsight_autoscale_wait_command_builder;
    /** Wait until updated with provisioningState at 'Succeeded'. */
    updated(value: string): az_hdinsight_autoscale_wait_command_builder;
}
/**
 * List the hosts of the specified HDInsight cluster.
 *
 * Syntax:
 * ```
 * az hdinsight host list --cluster-name
 *                        --resource-group
 *                        [--query-examples]
 *                        [--subscription]
 * ```
 *
 * @param {string} clusterName The name of the cluster.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_hdinsight_host_list_command_builder extends CommandBuilder<az_hdinsight_host_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, clusterName: string, resourceGroup: string);
    /** The name of the cluster. */
    clusterName(value: string): az_hdinsight_host_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_hdinsight_host_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_hdinsight_host_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_hdinsight_host_list_command_builder;
}
/**
 * Restart the specific hosts of the specified HDInsight cluster.
 *
 * Syntax:
 * ```
 * az hdinsight host restart --cluster-name
 *                           --host-names
 *                           --resource-group
 *                           [--subscription]
 *                           [--yes]
 * ```
 *
 * @param {string} clusterName The name of the cluster.
 * @param {string} hostNames A space-delimited list of host names that need to be restarted.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_hdinsight_host_restart_command_builder extends CommandBuilder<az_hdinsight_host_restart_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, clusterName: string, hostNames: string, resourceGroup: string);
    /** The name of the cluster. */
    clusterName(value: string): az_hdinsight_host_restart_command_builder;
    /** A space-delimited list of host names that need to be restarted. */
    hostNames(value: string): az_hdinsight_host_restart_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_hdinsight_host_restart_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_hdinsight_host_restart_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_hdinsight_host_restart_command_builder;
}
/**
 * Disable the Azure Monitor logs integration on an HDInsight cluster.
 *
 * Syntax:
 * ```
 * az hdinsight monitor disable --name
 *                              --resource-group
 *                              [--subscription]
 * ```
 *
 * @param {string} name The name of the cluster.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_hdinsight_monitor_disable_command_builder extends CommandBuilder<az_hdinsight_monitor_disable_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** The name of the cluster. */
    name(value: string): az_hdinsight_monitor_disable_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_hdinsight_monitor_disable_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_hdinsight_monitor_disable_command_builder;
}
/**
 * Enable the Azure Monitor logs integration on an HDInsight cluster.
 *
 * Syntax:
 * ```
 * az hdinsight monitor enable --name
 *                             --resource-group
 *                             --workspace
 *                             [--no-validation-timeout]
 *                             [--primary-key]
 *                             [--subscription]
 * ```
 *
 * @param {string} name The name of the cluster.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} workspace The name, resource ID or workspace ID of Log Analytics workspace.
 */
declare class az_hdinsight_monitor_enable_command_builder extends CommandBuilder<az_hdinsight_monitor_enable_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string, workspace: string);
    /** The name of the cluster. */
    name(value: string): az_hdinsight_monitor_enable_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_hdinsight_monitor_enable_command_builder;
    /** The name, resource ID or workspace ID of Log Analytics workspace. */
    workspace(value: string): az_hdinsight_monitor_enable_command_builder;
    /** Permit timeout error during argument validation phase. If omitted, validation timeout error will be permitted. */
    noValidationTimeout(value: string): az_hdinsight_monitor_enable_command_builder;
    /** The certificate for the Log Analytics workspace. Required when workspace ID is provided. */
    primaryKey(value: string): az_hdinsight_monitor_enable_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_hdinsight_monitor_enable_command_builder;
}
/**
 * Get the status of Azure Monitor logs integration on an HDInsight cluster.
 *
 * Syntax:
 * ```
 * az hdinsight monitor show --name
 *                           --resource-group
 *                           [--query-examples]
 *                           [--subscription]
 * ```
 *
 * @param {string} name The name of the cluster.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_hdinsight_monitor_show_command_builder extends CommandBuilder<az_hdinsight_monitor_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** The name of the cluster. */
    name(value: string): az_hdinsight_monitor_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_hdinsight_monitor_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_hdinsight_monitor_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_hdinsight_monitor_show_command_builder;
}
/**
 * Deletes a specified persisted script action of the cluster.
 *
 * Syntax:
 * ```
 * az hdinsight script-action delete --cluster-name
 *                                   --name
 *                                   --resource-group
 *                                   [--subscription]
 * ```
 *
 * @param {string} clusterName The name of the cluster.
 * @param {string} name The name of the script.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_hdinsight_script_action_delete_command_builder extends CommandBuilder<az_hdinsight_script_action_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, clusterName: string, name: string, resourceGroup: string);
    /** The name of the cluster. */
    clusterName(value: string): az_hdinsight_script_action_delete_command_builder;
    /** The name of the script. */
    name(value: string): az_hdinsight_script_action_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_hdinsight_script_action_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_hdinsight_script_action_delete_command_builder;
}
/**
 * Execute script actions on the specified HDInsight cluster.
 *
 * Syntax:
 * ```
 * az hdinsight script-action execute --cluster-name
 *                                    --name
 *                                    --resource-group
 *                                    --roles
 *                                    --script-uri
 *                                    [--persist-on-success]
 *                                    [--script-parameters]
 *                                    [--subscription]
 * ```
 *
 * @param {string} clusterName The name of the cluster.
 * @param {string} name The name of the script action.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} roles A space-delimited list of roles (nodes) where the script will be executed. Valid roles are headnode, workernode, zookeepernode, edgenode.
 * @param {string} scriptUri The URI to the script.
 */
declare class az_hdinsight_script_action_execute_command_builder extends CommandBuilder<az_hdinsight_script_action_execute_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, clusterName: string, name: string, resourceGroup: string, roles: string, scriptUri: string);
    /** The name of the cluster. */
    clusterName(value: string): az_hdinsight_script_action_execute_command_builder;
    /** The name of the script action. */
    name(value: string): az_hdinsight_script_action_execute_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_hdinsight_script_action_execute_command_builder;
    /** A space-delimited list of roles (nodes) where the script will be executed. Valid roles are headnode, workernode, zookeepernode, edgenode. */
    roles(value: string): az_hdinsight_script_action_execute_command_builder;
    /** The URI to the script. */
    scriptUri(value: string): az_hdinsight_script_action_execute_command_builder;
    /** If the scripts needs to be persisted. */
    persistOnSuccess(value: string): az_hdinsight_script_action_execute_command_builder;
    /** The parameters for the script. */
    scriptParameters(value: string): az_hdinsight_script_action_execute_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_hdinsight_script_action_execute_command_builder;
}
/**
 * Lists all the persisted script actions for the specified cluster.
 *
 * Syntax:
 * ```
 * az hdinsight script-action list --cluster-name
 *                                 --resource-group
 *                                 [--query-examples]
 *                                 [--subscription]
 * ```
 *
 * @param {string} clusterName The name of the cluster.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_hdinsight_script_action_list_command_builder extends CommandBuilder<az_hdinsight_script_action_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, clusterName: string, resourceGroup: string);
    /** The name of the cluster. */
    clusterName(value: string): az_hdinsight_script_action_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_hdinsight_script_action_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_hdinsight_script_action_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_hdinsight_script_action_list_command_builder;
}
/**
 * Lists all scripts' execution history for the specified cluster.
 *
 * Syntax:
 * ```
 * az hdinsight script-action list-execution-history --cluster-name
 *                                                   --resource-group
 *                                                   [--subscription]
 * ```
 *
 * @param {string} clusterName The name of the cluster.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_hdinsight_script_action_list_execution_history_command_builder extends CommandBuilder<az_hdinsight_script_action_list_execution_history_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, clusterName: string, resourceGroup: string);
    /** The name of the cluster. */
    clusterName(value: string): az_hdinsight_script_action_list_execution_history_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_hdinsight_script_action_list_execution_history_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_hdinsight_script_action_list_execution_history_command_builder;
}
/**
 * Promotes the specified ad-hoc script execution to a persisted script.
 *
 * Syntax:
 * ```
 * az hdinsight script-action promote --cluster-name
 *                                    --execution-id
 *                                    --resource-group
 *                                    [--subscription]
 * ```
 *
 * @param {string} clusterName The name of the cluster.
 * @param {string} executionId The script execution id.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_hdinsight_script_action_promote_command_builder extends CommandBuilder<az_hdinsight_script_action_promote_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, clusterName: string, executionId: string, resourceGroup: string);
    /** The name of the cluster. */
    clusterName(value: string): az_hdinsight_script_action_promote_command_builder;
    /** The script execution id. */
    executionId(value: string): az_hdinsight_script_action_promote_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_hdinsight_script_action_promote_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_hdinsight_script_action_promote_command_builder;
}
/**
 * Gets the script execution detail for the given script execution ID.
 *
 * Syntax:
 * ```
 * az hdinsight script-action show-execution-details --cluster-name
 *                                                   --execution-id
 *                                                   --resource-group
 *                                                   [--subscription]
 * ```
 *
 * @param {string} clusterName The name of the cluster.
 * @param {string} executionId The script execution id.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_hdinsight_script_action_show_execution_details_command_builder extends CommandBuilder<az_hdinsight_script_action_show_execution_details_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, clusterName: string, executionId: string, resourceGroup: string);
    /** The name of the cluster. */
    clusterName(value: string): az_hdinsight_script_action_show_execution_details_command_builder;
    /** The script execution id. */
    executionId(value: string): az_hdinsight_script_action_show_execution_details_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_hdinsight_script_action_show_execution_details_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_hdinsight_script_action_show_execution_details_command_builder;
}
/**
 * Create a new cluster.
 *
 * Syntax:
 * ```
 * az hdinsight create --name
 *                     --resource-group
 *                     --type
 *                     [--assign-identity]
 *                     [--autoscale-count]
 *                     [--autoscale-max-count]
 *                     [--autoscale-min-count]
 *                     [--autoscale-type {Load, Schedule}]
 *                     [--cluster-admin-account]
 *                     [--cluster-admin-password]
 *                     [--cluster-configurations]
 *                     [--cluster-tier {Premium, Standard}]
 *                     [--cluster-users-group-dns]
 *                     [--component-version]
 *                     [--days {Friday, Monday, Saturday, Sunday, Thursday, Tuesday, Wednesday}]
 *                     [--domain]
 *                     [--edgenode-size]
 *                     [--encryption-algorithm {RSA-OAEP, RSA-OAEP-256, RSA1_5}]
 *                     [--encryption-at-host {false, true}]
 *                     [--encryption-in-transit {false, true}]
 *                     [--encryption-key-name]
 *                     [--encryption-key-version]
 *                     [--encryption-vault-uri]
 *                     [--esp]
 *                     [--headnode-size]
 *                     [--http-password]
 *                     [--http-user]
 *                     [--kafka-client-group-id]
 *                     [--kafka-client-group-name]
 *                     [--kafka-management-node-count]
 *                     [--kafka-management-node-size]
 *                     [--ldaps-urls]
 *                     [--location]
 *                     [--minimal-tls-version {1.0, 1.1, 1.2}]
 *                     [--no-validation-timeout]
 *                     [--no-wait]
 *                     [--outbound-public-network-access-type {PublicLoadBalancer, UDR}]
 *                     [--public-network-access-type {InboundAndOutbound, OutboundOnly}]
 *                     [--ssh-password]
 *                     [--ssh-public-key]
 *                     [--ssh-user]
 *                     [--storage-account]
 *                     [--storage-account-key]
 *                     [--storage-account-managed-identity]
 *                     [--storage-container]
 *                     [--storage-filesystem]
 *                     [--subnet]
 *                     [--subscription]
 *                     [--tags]
 *                     [--time]
 *                     [--timezone]
 *                     [--version]
 *                     [--vnet-name]
 *                     [--workernode-count]
 *                     [--workernode-data-disk-size]
 *                     [--workernode-data-disk-storage-account-type {premium_lrs, standard_lrs}]
 *                     [--workernode-data-disks-per-node]
 *                     [--workernode-size]
 *                     [--zookeepernode-size]
 * ```
 *
 * @param {string} name The name of the cluster.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} type Type of HDInsight cluster, like: hadoop, interactivehive, hbase, kafka, storm, spark, rserver, mlservices. See also: <a href="https://docs.microsoft.com/azure/hdinsight/hdinsight-hadoop-provision-linux-clusters#cluster-types">https://docs.microsoft.com/azure/hdinsight/hdinsight-hadoop-provision-linux-clusters#cluster-types</a>.
 */
declare class az_hdinsight_create_command_builder extends CommandBuilder<az_hdinsight_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string, type: string);
    /** The name of the cluster. */
    name(value: string): az_hdinsight_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_hdinsight_create_command_builder;
    /** Type of HDInsight cluster, like: hadoop, interactivehive, hbase, kafka, storm, spark, rserver, mlservices. See also: <a href="https://docs.microsoft.com/azure/hdinsight/hdinsight-hadoop-provision-linux-clusters#cluster-types">https://docs.microsoft.com/azure/hdinsight/hdinsight-hadoop-provision-linux-clusters#cluster-types</a>. */
    type(value: string): az_hdinsight_create_command_builder;
    /** The name or ID of user assigned identity. */
    assignIdentity(value: string): az_hdinsight_create_command_builder;
    /** The scheduled workernode count. */
    autoscaleWorkernodeCount(value: string): az_hdinsight_create_command_builder;
    /** The max workernode count for Load-based atuoscale. */
    autoscaleMaxWorkernodeCount(value: string): az_hdinsight_create_command_builder;
    /** The minimal workernode count for Load-based atuoscale. */
    autoscaleMinWorkernodeCount(value: string): az_hdinsight_create_command_builder;
    /** The autoscale type. */
    autoscaleType(value: 'Load' | 'Schedule'): az_hdinsight_create_command_builder;
    /** The domain user account that will have admin privileges on the cluster. Required only when create cluster with Enterprise Security Package. */
    clusterAdminAccount(value: string): az_hdinsight_create_command_builder;
    /** The domain admin password. Required only when create cluster with Enterprise Security Package. */
    clusterAdminPassword(value: string): az_hdinsight_create_command_builder;
    /** Extra configurations of various components. Configurations may be supplied from a file using the `@{path}` syntax or a JSON string. See also: <a href="https://docs.microsoft.com/azure/hdinsight/hdinsight-hadoop-customize-cluster-bootstrap">https://docs.microsoft.com/azure/hdinsight/hdinsight-hadoop-customize-cluster-bootstrap</a>. */
    clusterConfigurations(value: string): az_hdinsight_create_command_builder;
    /** The tier of the cluster. */
    clusterTier(value: 'Premium' | 'Standard'): az_hdinsight_create_command_builder;
    /** A space-delimited list of Distinguished Names for cluster user groups. Required only when create cluster with Enterprise Security Package. */
    clusterUsersGroupDns(value: string): az_hdinsight_create_command_builder;
    /** The versions of various Hadoop components, in space-separated versions in 'component=version' format. Example: Spark=2.0 Hadoop=2.7.3 See also: <a href="https://docs.microsoft.com/azure/hdinsight/hdinsight-component-versioning#hadoop-components-available-with-different-hdinsight-versions">https://docs.microsoft.com/azure/hdinsight/hdinsight-component-versioning#hadoop-components-available-with-different-hdinsight-versions</a>. */
    componentVersion(value: string): az_hdinsight_create_command_builder;
    /** A space-delimited list of schedule day. */
    days(value: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday'): az_hdinsight_create_command_builder;
    /** The name or resource ID of the user's Azure Active Directory Domain Service. Required only when create cluster with Enterprise Security Package. */
    domain(value: string): az_hdinsight_create_command_builder;
    /** The size of the node. See also: <a href="https://docs.microsoft.com/azure/hdinsight/hdinsight-hadoop-provision-linux-clusters#configure-cluster-size">https://docs.microsoft.com/azure/hdinsight/hdinsight-hadoop-provision-linux-clusters#configure-cluster-size</a>. */
    edgenodeSize(value: string): az_hdinsight_create_command_builder;
    /** Algorithm identifier for encryption. */
    encryptionAlgorithm(value: 'RSA-OAEP' | 'RSA-OAEP-256' | 'RSA1_5'): az_hdinsight_create_command_builder;
    /** Indicates whether enable encryption at host or not. */
    encryptionAtHost(value: boolean): az_hdinsight_create_command_builder;
    /** Indicates whether enable encryption in transit. */
    encryptionInTransit(value: boolean): az_hdinsight_create_command_builder;
    /** Key name that is used for enabling disk encryption. */
    encryptionKeyName(value: string): az_hdinsight_create_command_builder;
    /** Key version that is used for enabling disk encryption. */
    encryptionKeyVersion(value: string): az_hdinsight_create_command_builder;
    /** Base key vault URI where the customers key is located eg. <a href="https://myvault.vault.azure.net">https://myvault.vault.azure.net</a>. */
    encryptionVaultUri(value: string): az_hdinsight_create_command_builder;
    /** Specify to create cluster with Enterprise Security Package. If omitted, creating cluster with Enterprise Security Package will not not allowed. */
    esp(value: string): az_hdinsight_create_command_builder;
    /** The size of the node. See also: <a href="https://docs.microsoft.com/azure/hdinsight/hdinsight-hadoop-provision-linux-clusters#configure-cluster-size">https://docs.microsoft.com/azure/hdinsight/hdinsight-hadoop-provision-linux-clusters#configure-cluster-size</a>. */
    headnodeSize(value: string): az_hdinsight_create_command_builder;
    /** HTTP password for the cluster. Will prompt if not given. */
    httpPassword(value: string): az_hdinsight_create_command_builder;
    /** HTTP username for the cluster.  Default: admin. */
    httpUser(value: string): az_hdinsight_create_command_builder;
    /** The client AAD security group id for Kafka Rest Proxy. */
    kafkaClientGroupId(value: string): az_hdinsight_create_command_builder;
    /** The client AAD security group name for Kafka Rest Proxy. */
    kafkaClientGroupName(value: string): az_hdinsight_create_command_builder;
    /** The number of kafka management node in the cluster. */
    kafkaManagementNodeCount(value: string): az_hdinsight_create_command_builder;
    /** The size of the node. See also: <a href="https://docs.microsoft.com/azure/hdinsight/hdinsight-hadoop-provision-linux-clusters#configure-cluster-size">https://docs.microsoft.com/azure/hdinsight/hdinsight-hadoop-provision-linux-clusters#configure-cluster-size</a>. */
    kafkaManagementNodeSize(value: string): az_hdinsight_create_command_builder;
    /** A space-delimited list of LDAPS protocol URLs to communicate with the Active Directory. Required only when create cluster with Enterprise Security Package. */
    ldapsUrls(value: string): az_hdinsight_create_command_builder;
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_hdinsight_create_command_builder;
    /** The minimal supported TLS version. */
    minimalTlsVersion(value: '1.0' | '1.1' | '1.2'): az_hdinsight_create_command_builder;
    /** Permit timeout error during argument validation phase. If omitted, validation timeout error will be permitted. */
    noValidationTimeout(value: string): az_hdinsight_create_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_hdinsight_create_command_builder;
    /** The outbound only public network access type. */
    outboundPublicNetworkAccessType(value: 'PublicLoadBalancer' | 'UDR'): az_hdinsight_create_command_builder;
    /** The public network access type. */
    publicNetworkAccessType(value: 'InboundAndOutbound' | 'OutboundOnly'): az_hdinsight_create_command_builder;
    /** SSH password for the cluster nodes. If none specified, uses the HTTP password. */
    sshPassword(value: string): az_hdinsight_create_command_builder;
    /** SSH public key for the cluster nodes. */
    sshPublicKey(value: string): az_hdinsight_create_command_builder;
    /** SSH username for the cluster nodes. */
    sshUser(value: string): az_hdinsight_create_command_builder;
    /** The name or ID of the storage account. */
    storageAccount(value: string): az_hdinsight_create_command_builder;
    /** The storage account key. A key can be retrieved automatically if the user has access to the storage account. */
    storageAccountKey(value: string): az_hdinsight_create_command_builder;
    /** User-assigned managed identity with access to the storage account filesystem. Only required when storage account type is Azure Data Lake Storage Gen2. */
    storageAccountManagedIdentity(value: string): az_hdinsight_create_command_builder;
    /** The storage container the cluster will use. Uses the cluster name if none was specified. (WASB only). */
    storageContainer(value: string): az_hdinsight_create_command_builder;
    /** The storage filesystem the cluster will use. Uses the cluster name if none was specified. (DFS only). */
    storageFilesystem(value: string): az_hdinsight_create_command_builder;
    /** The name or ID of subnet. If name is supplied, `--vnet-name` must be supplied. */
    subnet(value: string): az_hdinsight_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_hdinsight_create_command_builder;
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_hdinsight_create_command_builder;
    /** The 24-hour time in the form of xx:xx in days. */
    time(value: string): az_hdinsight_create_command_builder;
    /** The timezone for schedule autoscale type. Values from `az hdinsight autoscale list-timezones`. */
    timezone(value: string): az_hdinsight_create_command_builder;
    /** The HDInsight cluster version. See also: <a href="https://docs.microsoft.com/azure/hdinsight/hdinsight-component-versioning#supported-hdinsight-versions">https://docs.microsoft.com/azure/hdinsight/hdinsight-component-versioning#supported-hdinsight-versions</a>. */
    version(value: string): az_hdinsight_create_command_builder;
    /** The name of a virtual network. */
    vnetName(value: string): az_hdinsight_create_command_builder;
    /** The number of worker nodes in the cluster. */
    workernodeCount(value: string): az_hdinsight_create_command_builder;
    /** The size of the data disk in GB, e.g. 1023. */
    workernodeDataDiskSize(value: string): az_hdinsight_create_command_builder;
    /** The type of storage account that will be used for the data disks: standard_lrs or premium_lrs. */
    workernodeDataDiskStorageAccountType(value: 'premium_lrs' | 'standard_lrs'): az_hdinsight_create_command_builder;
    /** The number of data disks to use per worker node. */
    workernodeDataDisksPerNode(value: string): az_hdinsight_create_command_builder;
    /** The size of the node. See also: <a href="https://docs.microsoft.com/azure/hdinsight/hdinsight-hadoop-provision-linux-clusters#configure-cluster-size">https://docs.microsoft.com/azure/hdinsight/hdinsight-hadoop-provision-linux-clusters#configure-cluster-size</a>. */
    workernodeSize(value: string): az_hdinsight_create_command_builder;
    /** The size of the node. See also: <a href="https://docs.microsoft.com/azure/hdinsight/hdinsight-hadoop-provision-linux-clusters#configure-cluster-size">https://docs.microsoft.com/azure/hdinsight/hdinsight-hadoop-provision-linux-clusters#configure-cluster-size</a>. */
    zookeepernodeSize(value: string): az_hdinsight_create_command_builder;
}
/**
 * Deletes the specified HDInsight cluster.
 *
 * Syntax:
 * ```
 * az hdinsight delete --name
 *                     --resource-group
 *                     [--no-wait]
 *                     [--subscription]
 *                     [--yes]
 * ```
 *
 * @param {string} name The name of the cluster.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_hdinsight_delete_command_builder extends CommandBuilder<az_hdinsight_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** The name of the cluster. */
    name(value: string): az_hdinsight_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_hdinsight_delete_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_hdinsight_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_hdinsight_delete_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_hdinsight_delete_command_builder;
}
/**
 * List HDInsight clusters in a resource group or subscription.
 *
 * Syntax:
 * ```
 * az hdinsight list [--query-examples]
 *                   [--resource-group]
 *                   [--subscription]
 * ```
 */
declare class az_hdinsight_list_command_builder extends CommandBuilder<az_hdinsight_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_hdinsight_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_hdinsight_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_hdinsight_list_command_builder;
}
/**
 * Lists the usages for the specified location.
 *
 * Syntax:
 * ```
 * az hdinsight list-usage --location
 *                         [--subscription]
 * ```
 *
 * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
 */
declare class az_hdinsight_list_usage_command_builder extends CommandBuilder<az_hdinsight_list_usage_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, location: string);
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_hdinsight_list_usage_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_hdinsight_list_usage_command_builder;
}
/**
 * Resizes the specified HDInsight cluster to the specified size.
 *
 * Syntax:
 * ```
 * az hdinsight resize --name
 *                     --resource-group
 *                     --workernode-count
 *                     [--no-wait]
 *                     [--subscription]
 * ```
 *
 * @param {string} name The name of the cluster.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} workernodeCount The target worker node instance count for the operation.
 */
declare class az_hdinsight_resize_command_builder extends CommandBuilder<az_hdinsight_resize_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string, workernodeCount: string);
    /** The name of the cluster. */
    name(value: string): az_hdinsight_resize_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_hdinsight_resize_command_builder;
    /** The target worker node instance count for the operation. */
    workernodeCount(value: string): az_hdinsight_resize_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_hdinsight_resize_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_hdinsight_resize_command_builder;
}
/**
 * Rotate the disk encryption key of the specified HDInsight cluster.
 *
 * Syntax:
 * ```
 * az hdinsight rotate-disk-encryption-key --encryption-key-name
 *                                         --encryption-key-version
 *                                         --encryption-vault-uri
 *                                         --name
 *                                         --resource-group
 *                                         [--no-wait]
 *                                         [--subscription]
 * ```
 *
 * @param {string} encryptionKeyName Key name that is used for enabling disk encryption.
 * @param {string} encryptionKeyVersion Key version that is used for enabling disk encryption.
 * @param {string} encryptionVaultUri Base key vault URI where the customers key is located eg. <a href="https://myvault.vault.azure.net">https://myvault.vault.azure.net</a>.
 * @param {string} name The name of the cluster.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_hdinsight_rotate_disk_encryption_key_command_builder extends CommandBuilder<az_hdinsight_rotate_disk_encryption_key_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, encryptionKeyName: string, encryptionKeyVersion: string, encryptionVaultUri: string, name: string, resourceGroup: string);
    /** Key name that is used for enabling disk encryption. */
    encryptionKeyName(value: string): az_hdinsight_rotate_disk_encryption_key_command_builder;
    /** Key version that is used for enabling disk encryption. */
    encryptionKeyVersion(value: string): az_hdinsight_rotate_disk_encryption_key_command_builder;
    /** Base key vault URI where the customers key is located eg. <a href="https://myvault.vault.azure.net">https://myvault.vault.azure.net</a>. */
    encryptionVaultUri(value: string): az_hdinsight_rotate_disk_encryption_key_command_builder;
    /** The name of the cluster. */
    name(value: string): az_hdinsight_rotate_disk_encryption_key_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_hdinsight_rotate_disk_encryption_key_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_hdinsight_rotate_disk_encryption_key_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_hdinsight_rotate_disk_encryption_key_command_builder;
}
/**
 * Gets the specified cluster.
 *
 * Syntax:
 * ```
 * az hdinsight show --name
 *                   --resource-group
 *                   [--query-examples]
 *                   [--subscription]
 * ```
 *
 * @param {string} name The name of the cluster.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_hdinsight_show_command_builder extends CommandBuilder<az_hdinsight_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** The name of the cluster. */
    name(value: string): az_hdinsight_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_hdinsight_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_hdinsight_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_hdinsight_show_command_builder;
}
/**
 * Patch HDInsight cluster with the specified parameters.
 *
 * Syntax:
 * ```
 * az hdinsight update --name
 *                     --resource-group
 *                     [--no-wait]
 *                     [--subscription]
 *                     [--tags]
 * ```
 *
 * @param {string} name The name of the cluster.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_hdinsight_update_command_builder extends CommandBuilder<az_hdinsight_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** The name of the cluster. */
    name(value: string): az_hdinsight_update_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_hdinsight_update_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_hdinsight_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_hdinsight_update_command_builder;
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_hdinsight_update_command_builder;
}
/**
 * Place the CLI in a waiting state until an operation is complete.
 *
 * Syntax:
 * ```
 * az hdinsight wait --name
 *                   --resource-group
 *                   [--created]
 *                   [--custom]
 *                   [--deleted]
 *                   [--exists]
 *                   [--interval]
 *                   [--subscription]
 *                   [--timeout]
 *                   [--updated]
 * ```
 *
 * @param {string} name The name of the cluster.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_hdinsight_wait_command_builder extends CommandBuilder<az_hdinsight_wait_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** The name of the cluster. */
    name(value: string): az_hdinsight_wait_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_hdinsight_wait_command_builder;
    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    created(value: string): az_hdinsight_wait_command_builder;
    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    custom(value: string): az_hdinsight_wait_command_builder;
    /** Wait until deleted. */
    deleted(value: string): az_hdinsight_wait_command_builder;
    /** Wait until the resource exists. */
    exists(value: string): az_hdinsight_wait_command_builder;
    /** Polling interval in seconds. */
    interval(value: string): az_hdinsight_wait_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_hdinsight_wait_command_builder;
    /** Maximum wait in seconds. */
    timeout(value: string): az_hdinsight_wait_command_builder;
    /** Wait until updated with provisioningState at 'Succeeded'. */
    updated(value: string): az_hdinsight_wait_command_builder;
}
export {};
