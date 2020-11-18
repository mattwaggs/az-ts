import { CommandBuilder } from '../base';
import { az_hdinsight_application_create_command_result } from './models/az_hdinsight_application_create_command_result'
import { az_hdinsight_application_delete_command_result } from './models/az_hdinsight_application_delete_command_result'
import { az_hdinsight_application_list_command_result } from './models/az_hdinsight_application_list_command_result'
import { az_hdinsight_application_show_command_result } from './models/az_hdinsight_application_show_command_result'
import { az_hdinsight_application_wait_command_result } from './models/az_hdinsight_application_wait_command_result'
import { az_hdinsight_autoscale_condition_create_command_result } from './models/az_hdinsight_autoscale_condition_create_command_result'
import { az_hdinsight_autoscale_condition_delete_command_result } from './models/az_hdinsight_autoscale_condition_delete_command_result'
import { az_hdinsight_autoscale_condition_list_command_result } from './models/az_hdinsight_autoscale_condition_list_command_result'
import { az_hdinsight_autoscale_condition_update_command_result } from './models/az_hdinsight_autoscale_condition_update_command_result'
import { az_hdinsight_autoscale_condition_wait_command_result } from './models/az_hdinsight_autoscale_condition_wait_command_result'
import { az_hdinsight_autoscale_create_command_result } from './models/az_hdinsight_autoscale_create_command_result'
import { az_hdinsight_autoscale_delete_command_result } from './models/az_hdinsight_autoscale_delete_command_result'
import { az_hdinsight_autoscale_list_timezones_command_result } from './models/az_hdinsight_autoscale_list_timezones_command_result'
import { az_hdinsight_autoscale_show_command_result } from './models/az_hdinsight_autoscale_show_command_result'
import { az_hdinsight_autoscale_update_command_result } from './models/az_hdinsight_autoscale_update_command_result'
import { az_hdinsight_autoscale_wait_command_result } from './models/az_hdinsight_autoscale_wait_command_result'
import { az_hdinsight_host_list_command_result } from './models/az_hdinsight_host_list_command_result'
import { az_hdinsight_host_restart_command_result } from './models/az_hdinsight_host_restart_command_result'
import { az_hdinsight_monitor_disable_command_result } from './models/az_hdinsight_monitor_disable_command_result'
import { az_hdinsight_monitor_enable_command_result } from './models/az_hdinsight_monitor_enable_command_result'
import { az_hdinsight_monitor_show_command_result } from './models/az_hdinsight_monitor_show_command_result'
import { az_hdinsight_script_action_delete_command_result } from './models/az_hdinsight_script_action_delete_command_result'
import { az_hdinsight_script_action_execute_command_result } from './models/az_hdinsight_script_action_execute_command_result'
import { az_hdinsight_script_action_list_command_result } from './models/az_hdinsight_script_action_list_command_result'
import { az_hdinsight_script_action_list_execution_history_command_result } from './models/az_hdinsight_script_action_list_execution_history_command_result'
import { az_hdinsight_script_action_promote_command_result } from './models/az_hdinsight_script_action_promote_command_result'
import { az_hdinsight_script_action_show_execution_details_command_result } from './models/az_hdinsight_script_action_show_execution_details_command_result'
import { az_hdinsight_create_command_result } from './models/az_hdinsight_create_command_result'
import { az_hdinsight_delete_command_result } from './models/az_hdinsight_delete_command_result'
import { az_hdinsight_list_command_result } from './models/az_hdinsight_list_command_result'
import { az_hdinsight_list_usage_command_result } from './models/az_hdinsight_list_usage_command_result'
import { az_hdinsight_resize_command_result } from './models/az_hdinsight_resize_command_result'
import { az_hdinsight_rotate_disk_encryption_key_command_result } from './models/az_hdinsight_rotate_disk_encryption_key_command_result'
import { az_hdinsight_show_command_result } from './models/az_hdinsight_show_command_result'
import { az_hdinsight_update_command_result } from './models/az_hdinsight_update_command_result'
import { az_hdinsight_wait_command_result } from './models/az_hdinsight_wait_command_result'

/** Manage HDInsight applications. */
export class az_hdinsight_application {
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
    static create(clusterName: string, name: string, resourceGroup: string, scriptActionName: string, scriptUri: string): az_hdinsight_application_create_command_builder {
        return new az_hdinsight_application_create_command_builder("az hdinsight application create", 'az_hdinsight_application_create_command_result', clusterName, name, resourceGroup, scriptActionName, scriptUri);
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
    static delete(clusterName: string, name: string, resourceGroup: string): az_hdinsight_application_delete_command_builder {
        return new az_hdinsight_application_delete_command_builder("az hdinsight application delete", 'az_hdinsight_application_delete_command_result', clusterName, name, resourceGroup);
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
    static list(clusterName: string, resourceGroup: string): az_hdinsight_application_list_command_builder {
        return new az_hdinsight_application_list_command_builder("az hdinsight application list", 'az_hdinsight_application_list_command_result', clusterName, resourceGroup);
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
    static show(clusterName: string, name: string, resourceGroup: string): az_hdinsight_application_show_command_builder {
        return new az_hdinsight_application_show_command_builder("az hdinsight application show", 'az_hdinsight_application_show_command_result', clusterName, name, resourceGroup);
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
    static wait(clusterName: string, name: string, resourceGroup: string): az_hdinsight_application_wait_command_builder {
        return new az_hdinsight_application_wait_command_builder("az hdinsight application wait", 'az_hdinsight_application_wait_command_result', clusterName, name, resourceGroup);
    }
}

/** Manage schedule condition of the HDInsight cluster which enabled Schedule-based Autoscale. */
export class az_hdinsight_autoscale_condition {
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
    static create(clusterName: string, days: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday', resourceGroup: string, time: string, workernodeCount: string): az_hdinsight_autoscale_condition_create_command_builder {
        return new az_hdinsight_autoscale_condition_create_command_builder("az hdinsight autoscale condition create", 'az_hdinsight_autoscale_condition_create_command_result', clusterName, days, resourceGroup, time, workernodeCount);
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
    static delete(clusterName: string, index: string, resourceGroup: string): az_hdinsight_autoscale_condition_delete_command_builder {
        return new az_hdinsight_autoscale_condition_delete_command_builder("az hdinsight autoscale condition delete", 'az_hdinsight_autoscale_condition_delete_command_result', clusterName, index, resourceGroup);
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
    static list(clusterName: string, resourceGroup: string): az_hdinsight_autoscale_condition_list_command_builder {
        return new az_hdinsight_autoscale_condition_list_command_builder("az hdinsight autoscale condition list", 'az_hdinsight_autoscale_condition_list_command_result', clusterName, resourceGroup);
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
    static update(clusterName: string, index: string, resourceGroup: string): az_hdinsight_autoscale_condition_update_command_builder {
        return new az_hdinsight_autoscale_condition_update_command_builder("az hdinsight autoscale condition update", 'az_hdinsight_autoscale_condition_update_command_result', clusterName, index, resourceGroup);
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
    static wait(name: string, resourceGroup: string): az_hdinsight_autoscale_condition_wait_command_builder {
        return new az_hdinsight_autoscale_condition_wait_command_builder("az hdinsight autoscale condition wait", 'az_hdinsight_autoscale_condition_wait_command_result', name, resourceGroup);
    }
}

/** Manage HDInsight cluster's Autoscale configuration. */
export class az_hdinsight_autoscale {
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
    static create(clusterName: string, resourceGroup: string, type: 'Load' | 'Schedule'): az_hdinsight_autoscale_create_command_builder {
        return new az_hdinsight_autoscale_create_command_builder("az hdinsight autoscale create", 'az_hdinsight_autoscale_create_command_result', clusterName, resourceGroup, type);
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
    static delete(clusterName: string, resourceGroup: string): az_hdinsight_autoscale_delete_command_builder {
        return new az_hdinsight_autoscale_delete_command_builder("az hdinsight autoscale delete", 'az_hdinsight_autoscale_delete_command_result', clusterName, resourceGroup);
    }

    /**
     * List the available timezone name when enabling Schedule-based Autoscale.
     *
     * Syntax:
     * ```
     * az hdinsight autoscale list-timezones [--subscription]
     * ```
     */
    static list_timezones(): az_hdinsight_autoscale_list_timezones_command_builder {
        return new az_hdinsight_autoscale_list_timezones_command_builder("az hdinsight autoscale list-timezones", 'az_hdinsight_autoscale_list_timezones_command_result');
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
    static show(clusterName: string, resourceGroup: string): az_hdinsight_autoscale_show_command_builder {
        return new az_hdinsight_autoscale_show_command_builder("az hdinsight autoscale show", 'az_hdinsight_autoscale_show_command_result', clusterName, resourceGroup);
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
    static update(clusterName: string, resourceGroup: string): az_hdinsight_autoscale_update_command_builder {
        return new az_hdinsight_autoscale_update_command_builder("az hdinsight autoscale update", 'az_hdinsight_autoscale_update_command_result', clusterName, resourceGroup);
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
    static wait(name: string, resourceGroup: string): az_hdinsight_autoscale_wait_command_builder {
        return new az_hdinsight_autoscale_wait_command_builder("az hdinsight autoscale wait", 'az_hdinsight_autoscale_wait_command_result', name, resourceGroup);
    }
}

/** Manage HDInsight cluster's virtual hosts. */
export class az_hdinsight_host {
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
    static list(clusterName: string, resourceGroup: string): az_hdinsight_host_list_command_builder {
        return new az_hdinsight_host_list_command_builder("az hdinsight host list", 'az_hdinsight_host_list_command_result', clusterName, resourceGroup);
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
    static restart(clusterName: string, hostNames: string, resourceGroup: string): az_hdinsight_host_restart_command_builder {
        return new az_hdinsight_host_restart_command_builder("az hdinsight host restart", 'az_hdinsight_host_restart_command_result', clusterName, hostNames, resourceGroup);
    }
}

/** Manage Azure Monitor logs integration on an HDInsight cluster. */
export class az_hdinsight_monitor {
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
    static disable(name: string, resourceGroup: string): az_hdinsight_monitor_disable_command_builder {
        return new az_hdinsight_monitor_disable_command_builder("az hdinsight monitor disable", 'az_hdinsight_monitor_disable_command_result', name, resourceGroup);
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
    static enable(name: string, resourceGroup: string, workspace: string): az_hdinsight_monitor_enable_command_builder {
        return new az_hdinsight_monitor_enable_command_builder("az hdinsight monitor enable", 'az_hdinsight_monitor_enable_command_result', name, resourceGroup, workspace);
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
    static show(name: string, resourceGroup: string): az_hdinsight_monitor_show_command_builder {
        return new az_hdinsight_monitor_show_command_builder("az hdinsight monitor show", 'az_hdinsight_monitor_show_command_result', name, resourceGroup);
    }
}

/** Manage HDInsight script actions. */
export class az_hdinsight_script_action {
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
    static delete(clusterName: string, name: string, resourceGroup: string): az_hdinsight_script_action_delete_command_builder {
        return new az_hdinsight_script_action_delete_command_builder("az hdinsight script-action delete", 'az_hdinsight_script_action_delete_command_result', clusterName, name, resourceGroup);
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
    static execute(clusterName: string, name: string, resourceGroup: string, roles: string, scriptUri: string): az_hdinsight_script_action_execute_command_builder {
        return new az_hdinsight_script_action_execute_command_builder("az hdinsight script-action execute", 'az_hdinsight_script_action_execute_command_result', clusterName, name, resourceGroup, roles, scriptUri);
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
    static list(clusterName: string, resourceGroup: string): az_hdinsight_script_action_list_command_builder {
        return new az_hdinsight_script_action_list_command_builder("az hdinsight script-action list", 'az_hdinsight_script_action_list_command_result', clusterName, resourceGroup);
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
    static list_execution_history(clusterName: string, resourceGroup: string): az_hdinsight_script_action_list_execution_history_command_builder {
        return new az_hdinsight_script_action_list_execution_history_command_builder("az hdinsight script-action list-execution-history", 'az_hdinsight_script_action_list_execution_history_command_result', clusterName, resourceGroup);
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
    static promote(clusterName: string, executionId: string, resourceGroup: string): az_hdinsight_script_action_promote_command_builder {
        return new az_hdinsight_script_action_promote_command_builder("az hdinsight script-action promote", 'az_hdinsight_script_action_promote_command_result', clusterName, executionId, resourceGroup);
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
    static show_execution_details(clusterName: string, executionId: string, resourceGroup: string): az_hdinsight_script_action_show_execution_details_command_builder {
        return new az_hdinsight_script_action_show_execution_details_command_builder("az hdinsight script-action show-execution-details", 'az_hdinsight_script_action_show_execution_details_command_result', clusterName, executionId, resourceGroup);
    }
}

/** Manage HDInsight resources. */
export class az_hdinsight {
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
     *                     [--enable-private-link {false, true}]
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
     *                     [--idbroker]
     *                     [--kafka-client-group-id]
     *                     [--kafka-client-group-name]
     *                     [--kafka-management-node-count]
     *                     [--kafka-management-node-size]
     *                     [--ldaps-urls]
     *                     [--location]
     *                     [--minimal-tls-version {1.0, 1.1, 1.2}]
     *                     [--no-validation-timeout]
     *                     [--no-wait]
     *                     [--resource-provider-connection {Inbound, Outbound}]
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
    static create(name: string, resourceGroup: string, type: string): az_hdinsight_create_command_builder {
        return new az_hdinsight_create_command_builder("az hdinsight create", 'az_hdinsight_create_command_result', name, resourceGroup, type);
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
    static delete(name: string, resourceGroup: string): az_hdinsight_delete_command_builder {
        return new az_hdinsight_delete_command_builder("az hdinsight delete", 'az_hdinsight_delete_command_result', name, resourceGroup);
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
    static list(): az_hdinsight_list_command_builder {
        return new az_hdinsight_list_command_builder("az hdinsight list", 'az_hdinsight_list_command_result');
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
    static list_usage(location: string): az_hdinsight_list_usage_command_builder {
        return new az_hdinsight_list_usage_command_builder("az hdinsight list-usage", 'az_hdinsight_list_usage_command_result', location);
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
    static resize(name: string, resourceGroup: string, workernodeCount: string): az_hdinsight_resize_command_builder {
        return new az_hdinsight_resize_command_builder("az hdinsight resize", 'az_hdinsight_resize_command_result', name, resourceGroup, workernodeCount);
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
    static rotate_disk_encryption_key(encryptionKeyName: string, encryptionKeyVersion: string, encryptionVaultUri: string, name: string, resourceGroup: string): az_hdinsight_rotate_disk_encryption_key_command_builder {
        return new az_hdinsight_rotate_disk_encryption_key_command_builder("az hdinsight rotate-disk-encryption-key", 'az_hdinsight_rotate_disk_encryption_key_command_result', encryptionKeyName, encryptionKeyVersion, encryptionVaultUri, name, resourceGroup);
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
    static show(name: string, resourceGroup: string): az_hdinsight_show_command_builder {
        return new az_hdinsight_show_command_builder("az hdinsight show", 'az_hdinsight_show_command_result', name, resourceGroup);
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
    static update(name: string, resourceGroup: string): az_hdinsight_update_command_builder {
        return new az_hdinsight_update_command_builder("az hdinsight update", 'az_hdinsight_update_command_result', name, resourceGroup);
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
    static wait(name: string, resourceGroup: string): az_hdinsight_wait_command_builder {
        return new az_hdinsight_wait_command_builder("az hdinsight wait", 'az_hdinsight_wait_command_result', name, resourceGroup);
    }
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
class az_hdinsight_application_create_command_builder extends CommandBuilder<az_hdinsight_application_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, clusterName: string, name: string, resourceGroup: string, scriptActionName: string, scriptUri: string) {
        super(commandPath, resultDataTypeName);
        this.clusterName(clusterName)
        this.name(name)
        this.resourceGroup(resourceGroup)
        this.scriptActionName(scriptActionName)
        this.scriptUri(scriptUri)
    }

    /** The name of the cluster. */
    clusterName(value: string): az_hdinsight_application_create_command_builder {
        this.setFlag("--cluster-name", value);
        return this;
    }

    /** The constant value for the application name. */
    name(value: string): az_hdinsight_application_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_hdinsight_application_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the script action. */
    scriptActionName(value: string): az_hdinsight_application_create_command_builder {
        this.setFlag("--script-action-name", value);
        return this;
    }

    /** The URI to the script. */
    scriptUri(value: string): az_hdinsight_application_create_command_builder {
        this.setFlag("--script-uri", value);
        return this;
    }

    /** The access mode for the application. */
    accessMode(value: string): az_hdinsight_application_create_command_builder {
        this.setFlag("--access-mode", value);
        return this;
    }

    /** The destination port to connect to. */
    destinationPort(value: string): az_hdinsight_application_create_command_builder {
        this.setFlag("--destination-port", value);
        return this;
    }

    /** Indicates whether to disable gateway authentication. Default is to enable gateway authentication. Default: false. */
    disableGatewayAuth(value: boolean): az_hdinsight_application_create_command_builder {
        this.setFlag("--disable-gateway-auth", value.toString());
        return this;
    }

    /** The size of the node. See also: <a href="https://docs.microsoft.com/azure/hdinsight/hdinsight-hadoop-provision-linux-clusters#configure-cluster-size">https://docs.microsoft.com/azure/hdinsight/hdinsight-hadoop-provision-linux-clusters#configure-cluster-size</a>. */
    edgenodeSize(value: string): az_hdinsight_application_create_command_builder {
        this.setFlag("--edgenode-size", value);
        return this;
    }

    /** The marketplace identifier. */
    marketplaceId(value: string): az_hdinsight_application_create_command_builder {
        this.setFlag("--marketplace-id", value);
        return this;
    }

    /** Permit timeout error during argument validation phase. If omitted, validation timeout error will be permitted. */
    noValidationTimeout(value: string): az_hdinsight_application_create_command_builder {
        this.setFlag("--no-validation-timeout", value);
        return this;
    }

    /** The parameters for the script. */
    scriptParameters(value: string): az_hdinsight_application_create_command_builder {
        this.setFlag("--script-parameters", value);
        return this;
    }

    /** SSH password for the cluster nodes. */
    sshPassword(value: string): az_hdinsight_application_create_command_builder {
        this.setFlag("--ssh-password", value);
        return this;
    }

    /** SSH public key for the cluster nodes. */
    sshPublicKey(value: string): az_hdinsight_application_create_command_builder {
        this.setFlag("--ssh-public-key", value);
        return this;
    }

    /** SSH username for the cluster nodes. */
    sshUser(value: string): az_hdinsight_application_create_command_builder {
        this.setFlag("--ssh-user", value);
        return this;
    }

    /** The subdomain suffix of the application. */
    subDomainSuffix(value: string): az_hdinsight_application_create_command_builder {
        this.setFlag("--sub-domain-suffix", value);
        return this;
    }

    /** The name or ID of subnet. If name is supplied, `--vnet-name` must be supplied. */
    subnet(value: string): az_hdinsight_application_create_command_builder {
        this.setFlag("--subnet", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_hdinsight_application_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_hdinsight_application_create_command_builder {
        this.setFlag("--tags", value);
        return this;
    }

    /** The application type. */
    type(value: 'CustomApplication' | 'RServer'): az_hdinsight_application_create_command_builder {
        this.setFlag("--type", value);
        return this;
    }

    /** The name of a virtual network. */
    vnetName(value: string): az_hdinsight_application_create_command_builder {
        this.setFlag("--vnet-name", value);
        return this;
    }
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
class az_hdinsight_application_delete_command_builder extends CommandBuilder<az_hdinsight_application_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, clusterName: string, name: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.clusterName(clusterName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the cluster. */
    clusterName(value: string): az_hdinsight_application_delete_command_builder {
        this.setFlag("--cluster-name", value);
        return this;
    }

    /** The constant value for the application name. */
    name(value: string): az_hdinsight_application_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_hdinsight_application_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_hdinsight_application_delete_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_hdinsight_application_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_hdinsight_application_delete_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
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
class az_hdinsight_application_list_command_builder extends CommandBuilder<az_hdinsight_application_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, clusterName: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.clusterName(clusterName)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the cluster. */
    clusterName(value: string): az_hdinsight_application_list_command_builder {
        this.setFlag("--cluster-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_hdinsight_application_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_hdinsight_application_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_hdinsight_application_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_hdinsight_application_show_command_builder extends CommandBuilder<az_hdinsight_application_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, clusterName: string, name: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.clusterName(clusterName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the cluster. */
    clusterName(value: string): az_hdinsight_application_show_command_builder {
        this.setFlag("--cluster-name", value);
        return this;
    }

    /** The constant value for the application name. */
    name(value: string): az_hdinsight_application_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_hdinsight_application_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_hdinsight_application_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_hdinsight_application_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_hdinsight_application_wait_command_builder extends CommandBuilder<az_hdinsight_application_wait_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, clusterName: string, name: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.clusterName(clusterName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the cluster. */
    clusterName(value: string): az_hdinsight_application_wait_command_builder {
        this.setFlag("--cluster-name", value);
        return this;
    }

    /** The constant value for the application name. */
    name(value: string): az_hdinsight_application_wait_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_hdinsight_application_wait_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    created(value: string): az_hdinsight_application_wait_command_builder {
        this.setFlag("--created", value);
        return this;
    }

    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    custom(value: string): az_hdinsight_application_wait_command_builder {
        this.setFlag("--custom", value);
        return this;
    }

    /** Wait until deleted. */
    deleted(value: string): az_hdinsight_application_wait_command_builder {
        this.setFlag("--deleted", value);
        return this;
    }

    /** Wait until the resource exists. */
    exists(value: string): az_hdinsight_application_wait_command_builder {
        this.setFlag("--exists", value);
        return this;
    }

    /** Polling interval in seconds. */
    interval(value: string): az_hdinsight_application_wait_command_builder {
        this.setFlag("--interval", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_hdinsight_application_wait_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Maximum wait in seconds. */
    timeout(value: string): az_hdinsight_application_wait_command_builder {
        this.setFlag("--timeout", value);
        return this;
    }

    /** Wait until updated with provisioningState at 'Succeeded'. */
    updated(value: string): az_hdinsight_application_wait_command_builder {
        this.setFlag("--updated", value);
        return this;
    }
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
class az_hdinsight_autoscale_condition_create_command_builder extends CommandBuilder<az_hdinsight_autoscale_condition_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, clusterName: string, days: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday', resourceGroup: string, time: string, workernodeCount: string) {
        super(commandPath, resultDataTypeName);
        this.clusterName(clusterName)
        this.days(days)
        this.resourceGroup(resourceGroup)
        this.time(time)
        this.workernodeCount(workernodeCount)
    }

    /** The name of the cluster. */
    clusterName(value: string): az_hdinsight_autoscale_condition_create_command_builder {
        this.setFlag("--cluster-name", value);
        return this;
    }

    /** A space-delimited list of schedule day. */
    days(value: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday'): az_hdinsight_autoscale_condition_create_command_builder {
        this.setFlag("--days", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_hdinsight_autoscale_condition_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The 24-hour time in the form xx:xx in days. */
    time(value: string): az_hdinsight_autoscale_condition_create_command_builder {
        this.setFlag("--time", value);
        return this;
    }

    /** The schedule workernode count. */
    workernodeCount(value: string): az_hdinsight_autoscale_condition_create_command_builder {
        this.setFlag("--workernode-count", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_hdinsight_autoscale_condition_create_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_hdinsight_autoscale_condition_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_hdinsight_autoscale_condition_delete_command_builder extends CommandBuilder<az_hdinsight_autoscale_condition_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, clusterName: string, index: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.clusterName(clusterName)
        this.index(index)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the cluster. */
    clusterName(value: string): az_hdinsight_autoscale_condition_delete_command_builder {
        this.setFlag("--cluster-name", value);
        return this;
    }

    /** The Space-separated list of condition indices which starts with 0 to delete. */
    index(value: string): az_hdinsight_autoscale_condition_delete_command_builder {
        this.setFlag("--index", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_hdinsight_autoscale_condition_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_hdinsight_autoscale_condition_delete_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_hdinsight_autoscale_condition_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_hdinsight_autoscale_condition_delete_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
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
class az_hdinsight_autoscale_condition_list_command_builder extends CommandBuilder<az_hdinsight_autoscale_condition_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, clusterName: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.clusterName(clusterName)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the cluster. */
    clusterName(value: string): az_hdinsight_autoscale_condition_list_command_builder {
        this.setFlag("--cluster-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_hdinsight_autoscale_condition_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_hdinsight_autoscale_condition_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_hdinsight_autoscale_condition_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_hdinsight_autoscale_condition_update_command_builder extends CommandBuilder<az_hdinsight_autoscale_condition_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, clusterName: string, index: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.clusterName(clusterName)
        this.index(index)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the cluster. */
    clusterName(value: string): az_hdinsight_autoscale_condition_update_command_builder {
        this.setFlag("--cluster-name", value);
        return this;
    }

    /** The schedule condition index which starts with 0. */
    index(value: string): az_hdinsight_autoscale_condition_update_command_builder {
        this.setFlag("--index", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_hdinsight_autoscale_condition_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** A space-delimited list of schedule day. */
    days(value: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday'): az_hdinsight_autoscale_condition_update_command_builder {
        this.setFlag("--days", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_hdinsight_autoscale_condition_update_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_hdinsight_autoscale_condition_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** The 24-hour time in the form xx:xx in days. */
    time(value: string): az_hdinsight_autoscale_condition_update_command_builder {
        this.setFlag("--time", value);
        return this;
    }

    /** The schedule workernode count. */
    workernodeCount(value: string): az_hdinsight_autoscale_condition_update_command_builder {
        this.setFlag("--workernode-count", value);
        return this;
    }
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
class az_hdinsight_autoscale_condition_wait_command_builder extends CommandBuilder<az_hdinsight_autoscale_condition_wait_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the cluster. */
    name(value: string): az_hdinsight_autoscale_condition_wait_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_hdinsight_autoscale_condition_wait_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    created(value: string): az_hdinsight_autoscale_condition_wait_command_builder {
        this.setFlag("--created", value);
        return this;
    }

    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    custom(value: string): az_hdinsight_autoscale_condition_wait_command_builder {
        this.setFlag("--custom", value);
        return this;
    }

    /** Wait until deleted. */
    deleted(value: string): az_hdinsight_autoscale_condition_wait_command_builder {
        this.setFlag("--deleted", value);
        return this;
    }

    /** Wait until the resource exists. */
    exists(value: string): az_hdinsight_autoscale_condition_wait_command_builder {
        this.setFlag("--exists", value);
        return this;
    }

    /** Polling interval in seconds. */
    interval(value: string): az_hdinsight_autoscale_condition_wait_command_builder {
        this.setFlag("--interval", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_hdinsight_autoscale_condition_wait_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Maximum wait in seconds. */
    timeout(value: string): az_hdinsight_autoscale_condition_wait_command_builder {
        this.setFlag("--timeout", value);
        return this;
    }

    /** Wait until updated with provisioningState at 'Succeeded'. */
    updated(value: string): az_hdinsight_autoscale_condition_wait_command_builder {
        this.setFlag("--updated", value);
        return this;
    }
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
class az_hdinsight_autoscale_create_command_builder extends CommandBuilder<az_hdinsight_autoscale_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, clusterName: string, resourceGroup: string, type: 'Load' | 'Schedule') {
        super(commandPath, resultDataTypeName);
        this.clusterName(clusterName)
        this.resourceGroup(resourceGroup)
        this.type(type)
    }

    /** The name of the cluster. */
    clusterName(value: string): az_hdinsight_autoscale_create_command_builder {
        this.setFlag("--cluster-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_hdinsight_autoscale_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The autoscale type. */
    type(value: 'Load' | 'Schedule'): az_hdinsight_autoscale_create_command_builder {
        this.setFlag("--type", value);
        return this;
    }

    /** A space-delimited list of schedule day. */
    days(value: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday'): az_hdinsight_autoscale_create_command_builder {
        this.setFlag("--days", value);
        return this;
    }

    /** The max workernode count for Load-based atuoscale. */
    maxWorkernodeCount(value: string): az_hdinsight_autoscale_create_command_builder {
        this.setFlag("--max-workernode-count", value);
        return this;
    }

    /** The minimal workernode count for Load-based atuoscale. */
    minWorkernodeCount(value: string): az_hdinsight_autoscale_create_command_builder {
        this.setFlag("--min-workernode-count", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_hdinsight_autoscale_create_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_hdinsight_autoscale_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** The 24-hour time in the form xx:xx in days. */
    time(value: string): az_hdinsight_autoscale_create_command_builder {
        this.setFlag("--time", value);
        return this;
    }

    /** The timezone for schedule autoscale type. Values from `az hdinsight autoscale list-timezones`. */
    timezone(value: string): az_hdinsight_autoscale_create_command_builder {
        this.setFlag("--timezone", value);
        return this;
    }

    /** The schedule workernode count. */
    workernodeCount(value: string): az_hdinsight_autoscale_create_command_builder {
        this.setFlag("--workernode-count", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_hdinsight_autoscale_create_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
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
class az_hdinsight_autoscale_delete_command_builder extends CommandBuilder<az_hdinsight_autoscale_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, clusterName: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.clusterName(clusterName)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the cluster. */
    clusterName(value: string): az_hdinsight_autoscale_delete_command_builder {
        this.setFlag("--cluster-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_hdinsight_autoscale_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_hdinsight_autoscale_delete_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_hdinsight_autoscale_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_hdinsight_autoscale_delete_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
}

/**
 * List the available timezone name when enabling Schedule-based Autoscale.
 *
 * Syntax:
 * ```
 * az hdinsight autoscale list-timezones [--subscription]
 * ```
 */
class az_hdinsight_autoscale_list_timezones_command_builder extends CommandBuilder<az_hdinsight_autoscale_list_timezones_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_hdinsight_autoscale_list_timezones_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_hdinsight_autoscale_show_command_builder extends CommandBuilder<az_hdinsight_autoscale_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, clusterName: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.clusterName(clusterName)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the cluster. */
    clusterName(value: string): az_hdinsight_autoscale_show_command_builder {
        this.setFlag("--cluster-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_hdinsight_autoscale_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_hdinsight_autoscale_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_hdinsight_autoscale_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_hdinsight_autoscale_update_command_builder extends CommandBuilder<az_hdinsight_autoscale_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, clusterName: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.clusterName(clusterName)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the cluster. */
    clusterName(value: string): az_hdinsight_autoscale_update_command_builder {
        this.setFlag("--cluster-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_hdinsight_autoscale_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The max workernode count for Load-based atuoscale. */
    maxWorkernodeCount(value: string): az_hdinsight_autoscale_update_command_builder {
        this.setFlag("--max-workernode-count", value);
        return this;
    }

    /** The minimal workernode count for Load-based atuoscale. */
    minWorkernodeCount(value: string): az_hdinsight_autoscale_update_command_builder {
        this.setFlag("--min-workernode-count", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_hdinsight_autoscale_update_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_hdinsight_autoscale_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** The timezone for schedule autoscale type. Values from `az hdinsight autoscale list-timezones`. */
    timezone(value: string): az_hdinsight_autoscale_update_command_builder {
        this.setFlag("--timezone", value);
        return this;
    }
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
class az_hdinsight_autoscale_wait_command_builder extends CommandBuilder<az_hdinsight_autoscale_wait_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the cluster. */
    name(value: string): az_hdinsight_autoscale_wait_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_hdinsight_autoscale_wait_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    created(value: string): az_hdinsight_autoscale_wait_command_builder {
        this.setFlag("--created", value);
        return this;
    }

    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    custom(value: string): az_hdinsight_autoscale_wait_command_builder {
        this.setFlag("--custom", value);
        return this;
    }

    /** Wait until deleted. */
    deleted(value: string): az_hdinsight_autoscale_wait_command_builder {
        this.setFlag("--deleted", value);
        return this;
    }

    /** Wait until the resource exists. */
    exists(value: string): az_hdinsight_autoscale_wait_command_builder {
        this.setFlag("--exists", value);
        return this;
    }

    /** Polling interval in seconds. */
    interval(value: string): az_hdinsight_autoscale_wait_command_builder {
        this.setFlag("--interval", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_hdinsight_autoscale_wait_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Maximum wait in seconds. */
    timeout(value: string): az_hdinsight_autoscale_wait_command_builder {
        this.setFlag("--timeout", value);
        return this;
    }

    /** Wait until updated with provisioningState at 'Succeeded'. */
    updated(value: string): az_hdinsight_autoscale_wait_command_builder {
        this.setFlag("--updated", value);
        return this;
    }
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
class az_hdinsight_host_list_command_builder extends CommandBuilder<az_hdinsight_host_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, clusterName: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.clusterName(clusterName)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the cluster. */
    clusterName(value: string): az_hdinsight_host_list_command_builder {
        this.setFlag("--cluster-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_hdinsight_host_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_hdinsight_host_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_hdinsight_host_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_hdinsight_host_restart_command_builder extends CommandBuilder<az_hdinsight_host_restart_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, clusterName: string, hostNames: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.clusterName(clusterName)
        this.hostNames(hostNames)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the cluster. */
    clusterName(value: string): az_hdinsight_host_restart_command_builder {
        this.setFlag("--cluster-name", value);
        return this;
    }

    /** A space-delimited list of host names that need to be restarted. */
    hostNames(value: string): az_hdinsight_host_restart_command_builder {
        this.setFlag("--host-names", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_hdinsight_host_restart_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_hdinsight_host_restart_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_hdinsight_host_restart_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
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
class az_hdinsight_monitor_disable_command_builder extends CommandBuilder<az_hdinsight_monitor_disable_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the cluster. */
    name(value: string): az_hdinsight_monitor_disable_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_hdinsight_monitor_disable_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_hdinsight_monitor_disable_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_hdinsight_monitor_enable_command_builder extends CommandBuilder<az_hdinsight_monitor_enable_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string, workspace: string) {
        super(commandPath, resultDataTypeName);
        this.name(name)
        this.resourceGroup(resourceGroup)
        this.workspace(workspace)
    }

    /** The name of the cluster. */
    name(value: string): az_hdinsight_monitor_enable_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_hdinsight_monitor_enable_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name, resource ID or workspace ID of Log Analytics workspace. */
    workspace(value: string): az_hdinsight_monitor_enable_command_builder {
        this.setFlag("--workspace", value);
        return this;
    }

    /** Permit timeout error during argument validation phase. If omitted, validation timeout error will be permitted. */
    noValidationTimeout(value: string): az_hdinsight_monitor_enable_command_builder {
        this.setFlag("--no-validation-timeout", value);
        return this;
    }

    /** The certificate for the Log Analytics workspace. Required when workspace ID is provided. */
    primaryKey(value: string): az_hdinsight_monitor_enable_command_builder {
        this.setFlag("--primary-key", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_hdinsight_monitor_enable_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_hdinsight_monitor_show_command_builder extends CommandBuilder<az_hdinsight_monitor_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the cluster. */
    name(value: string): az_hdinsight_monitor_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_hdinsight_monitor_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_hdinsight_monitor_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_hdinsight_monitor_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_hdinsight_script_action_delete_command_builder extends CommandBuilder<az_hdinsight_script_action_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, clusterName: string, name: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.clusterName(clusterName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the cluster. */
    clusterName(value: string): az_hdinsight_script_action_delete_command_builder {
        this.setFlag("--cluster-name", value);
        return this;
    }

    /** The name of the script. */
    name(value: string): az_hdinsight_script_action_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_hdinsight_script_action_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_hdinsight_script_action_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_hdinsight_script_action_execute_command_builder extends CommandBuilder<az_hdinsight_script_action_execute_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, clusterName: string, name: string, resourceGroup: string, roles: string, scriptUri: string) {
        super(commandPath, resultDataTypeName);
        this.clusterName(clusterName)
        this.name(name)
        this.resourceGroup(resourceGroup)
        this.roles(roles)
        this.scriptUri(scriptUri)
    }

    /** The name of the cluster. */
    clusterName(value: string): az_hdinsight_script_action_execute_command_builder {
        this.setFlag("--cluster-name", value);
        return this;
    }

    /** The name of the script action. */
    name(value: string): az_hdinsight_script_action_execute_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_hdinsight_script_action_execute_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** A space-delimited list of roles (nodes) where the script will be executed. Valid roles are headnode, workernode, zookeepernode, edgenode. */
    roles(value: string): az_hdinsight_script_action_execute_command_builder {
        this.setFlag("--roles", value);
        return this;
    }

    /** The URI to the script. */
    scriptUri(value: string): az_hdinsight_script_action_execute_command_builder {
        this.setFlag("--script-uri", value);
        return this;
    }

    /** If the scripts needs to be persisted. */
    persistOnSuccess(value: string): az_hdinsight_script_action_execute_command_builder {
        this.setFlag("--persist-on-success", value);
        return this;
    }

    /** The parameters for the script. */
    scriptParameters(value: string): az_hdinsight_script_action_execute_command_builder {
        this.setFlag("--script-parameters", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_hdinsight_script_action_execute_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_hdinsight_script_action_list_command_builder extends CommandBuilder<az_hdinsight_script_action_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, clusterName: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.clusterName(clusterName)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the cluster. */
    clusterName(value: string): az_hdinsight_script_action_list_command_builder {
        this.setFlag("--cluster-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_hdinsight_script_action_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_hdinsight_script_action_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_hdinsight_script_action_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_hdinsight_script_action_list_execution_history_command_builder extends CommandBuilder<az_hdinsight_script_action_list_execution_history_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, clusterName: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.clusterName(clusterName)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the cluster. */
    clusterName(value: string): az_hdinsight_script_action_list_execution_history_command_builder {
        this.setFlag("--cluster-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_hdinsight_script_action_list_execution_history_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_hdinsight_script_action_list_execution_history_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_hdinsight_script_action_promote_command_builder extends CommandBuilder<az_hdinsight_script_action_promote_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, clusterName: string, executionId: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.clusterName(clusterName)
        this.executionId(executionId)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the cluster. */
    clusterName(value: string): az_hdinsight_script_action_promote_command_builder {
        this.setFlag("--cluster-name", value);
        return this;
    }

    /** The script execution id. */
    executionId(value: string): az_hdinsight_script_action_promote_command_builder {
        this.setFlag("--execution-id", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_hdinsight_script_action_promote_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_hdinsight_script_action_promote_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_hdinsight_script_action_show_execution_details_command_builder extends CommandBuilder<az_hdinsight_script_action_show_execution_details_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, clusterName: string, executionId: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.clusterName(clusterName)
        this.executionId(executionId)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the cluster. */
    clusterName(value: string): az_hdinsight_script_action_show_execution_details_command_builder {
        this.setFlag("--cluster-name", value);
        return this;
    }

    /** The script execution id. */
    executionId(value: string): az_hdinsight_script_action_show_execution_details_command_builder {
        this.setFlag("--execution-id", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_hdinsight_script_action_show_execution_details_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_hdinsight_script_action_show_execution_details_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
 *                     [--enable-private-link {false, true}]
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
 *                     [--idbroker]
 *                     [--kafka-client-group-id]
 *                     [--kafka-client-group-name]
 *                     [--kafka-management-node-count]
 *                     [--kafka-management-node-size]
 *                     [--ldaps-urls]
 *                     [--location]
 *                     [--minimal-tls-version {1.0, 1.1, 1.2}]
 *                     [--no-validation-timeout]
 *                     [--no-wait]
 *                     [--resource-provider-connection {Inbound, Outbound}]
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
class az_hdinsight_create_command_builder extends CommandBuilder<az_hdinsight_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string, type: string) {
        super(commandPath, resultDataTypeName);
        this.name(name)
        this.resourceGroup(resourceGroup)
        this.type(type)
    }

    /** The name of the cluster. */
    name(value: string): az_hdinsight_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_hdinsight_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Type of HDInsight cluster, like: hadoop, interactivehive, hbase, kafka, storm, spark, rserver, mlservices. See also: <a href="https://docs.microsoft.com/azure/hdinsight/hdinsight-hadoop-provision-linux-clusters#cluster-types">https://docs.microsoft.com/azure/hdinsight/hdinsight-hadoop-provision-linux-clusters#cluster-types</a>. */
    type(value: string): az_hdinsight_create_command_builder {
        this.setFlag("--type", value);
        return this;
    }

    /** The name or ID of user assigned identity. */
    assignIdentity(value: string): az_hdinsight_create_command_builder {
        this.setFlag("--assign-identity", value);
        return this;
    }

    /** The scheduled workernode count. */
    autoscaleWorkernodeCount(value: string): az_hdinsight_create_command_builder {
        this.setFlag("--autoscale-workernode-count", value);
        return this;
    }

    /** The max workernode count for Load-based atuoscale. */
    autoscaleMaxWorkernodeCount(value: string): az_hdinsight_create_command_builder {
        this.setFlag("--autoscale-max-workernode-count", value);
        return this;
    }

    /** The minimal workernode count for Load-based atuoscale. */
    autoscaleMinWorkernodeCount(value: string): az_hdinsight_create_command_builder {
        this.setFlag("--autoscale-min-workernode-count", value);
        return this;
    }

    /** The autoscale type. */
    autoscaleType(value: 'Load' | 'Schedule'): az_hdinsight_create_command_builder {
        this.setFlag("--autoscale-type", value);
        return this;
    }

    /** The domain user account that will have admin privileges on the cluster. Required only when create cluster with Enterprise Security Package. */
    clusterAdminAccount(value: string): az_hdinsight_create_command_builder {
        this.setFlag("--cluster-admin-account", value);
        return this;
    }

    /** The domain admin password. Required only when create cluster with Enterprise Security Package. */
    clusterAdminPassword(value: string): az_hdinsight_create_command_builder {
        this.setFlag("--cluster-admin-password", value);
        return this;
    }

    /** Extra configurations of various components. Configurations may be supplied from a file using the `@{path}` syntax or a JSON string. See also: <a href="https://docs.microsoft.com/azure/hdinsight/hdinsight-hadoop-customize-cluster-bootstrap">https://docs.microsoft.com/azure/hdinsight/hdinsight-hadoop-customize-cluster-bootstrap</a>. */
    clusterConfigurations(value: string): az_hdinsight_create_command_builder {
        this.setFlag("--cluster-configurations", value);
        return this;
    }

    /** The tier of the cluster. */
    clusterTier(value: 'Premium' | 'Standard'): az_hdinsight_create_command_builder {
        this.setFlag("--cluster-tier", value);
        return this;
    }

    /** A space-delimited list of Distinguished Names for cluster user groups. Required only when create cluster with Enterprise Security Package. */
    clusterUsersGroupDns(value: string): az_hdinsight_create_command_builder {
        this.setFlag("--cluster-users-group-dns", value);
        return this;
    }

    /** The versions of various Hadoop components, in space-separated versions in 'component=version' format. Example: Spark=2.0 Hadoop=2.7.3 See also: <a href="https://docs.microsoft.com/azure/hdinsight/hdinsight-component-versioning#hadoop-components-available-with-different-hdinsight-versions">https://docs.microsoft.com/azure/hdinsight/hdinsight-component-versioning#hadoop-components-available-with-different-hdinsight-versions</a>. */
    componentVersion(value: string): az_hdinsight_create_command_builder {
        this.setFlag("--component-version", value);
        return this;
    }

    /** A space-delimited list of schedule day. */
    days(value: 'Friday' | 'Monday' | 'Saturday' | 'Sunday' | 'Thursday' | 'Tuesday' | 'Wednesday'): az_hdinsight_create_command_builder {
        this.setFlag("--days", value);
        return this;
    }

    /** The name or resource ID of the user's Azure Active Directory Domain Service. Required only when create cluster with Enterprise Security Package. */
    domain(value: string): az_hdinsight_create_command_builder {
        this.setFlag("--domain", value);
        return this;
    }

    /** The size of the node. See also: <a href="https://docs.microsoft.com/azure/hdinsight/hdinsight-hadoop-provision-linux-clusters#configure-cluster-size">https://docs.microsoft.com/azure/hdinsight/hdinsight-hadoop-provision-linux-clusters#configure-cluster-size</a>. */
    edgenodeSize(value: string): az_hdinsight_create_command_builder {
        this.setFlag("--edgenode-size", value);
        return this;
    }

    /** Indicate whether enable the private link or not. */
    enablePrivateLink(value: boolean): az_hdinsight_create_command_builder {
        this.setFlag("--enable-private-link", value.toString());
        return this;
    }

    /** Algorithm identifier for encryption. */
    encryptionAlgorithm(value: 'RSA-OAEP' | 'RSA-OAEP-256' | 'RSA1_5'): az_hdinsight_create_command_builder {
        this.setFlag("--encryption-algorithm", value);
        return this;
    }

    /** Indicates whether enable encryption at host or not. */
    encryptionAtHost(value: boolean): az_hdinsight_create_command_builder {
        this.setFlag("--encryption-at-host", value.toString());
        return this;
    }

    /** Indicates whether enable encryption in transit. */
    encryptionInTransit(value: boolean): az_hdinsight_create_command_builder {
        this.setFlag("--encryption-in-transit", value.toString());
        return this;
    }

    /** Key name that is used for enabling disk encryption. */
    encryptionKeyName(value: string): az_hdinsight_create_command_builder {
        this.setFlag("--encryption-key-name", value);
        return this;
    }

    /** Key version that is used for enabling disk encryption. */
    encryptionKeyVersion(value: string): az_hdinsight_create_command_builder {
        this.setFlag("--encryption-key-version", value);
        return this;
    }

    /** Base key vault URI where the customers key is located eg. <a href="https://myvault.vault.azure.net">https://myvault.vault.azure.net</a>. */
    encryptionVaultUri(value: string): az_hdinsight_create_command_builder {
        this.setFlag("--encryption-vault-uri", value);
        return this;
    }

    /** Specify to create cluster with Enterprise Security Package. If omitted, creating cluster with Enterprise Security Package will not not allowed. */
    esp(value: string): az_hdinsight_create_command_builder {
        this.setFlag("--esp", value);
        return this;
    }

    /** The size of the node. See also: <a href="https://docs.microsoft.com/azure/hdinsight/hdinsight-hadoop-provision-linux-clusters#configure-cluster-size">https://docs.microsoft.com/azure/hdinsight/hdinsight-hadoop-provision-linux-clusters#configure-cluster-size</a>. */
    headnodeSize(value: string): az_hdinsight_create_command_builder {
        this.setFlag("--headnode-size", value);
        return this;
    }

    /** HTTP password for the cluster. Will prompt if not given. */
    httpPassword(value: string): az_hdinsight_create_command_builder {
        this.setFlag("--http-password", value);
        return this;
    }

    /** HTTP username for the cluster.  Default: admin. */
    httpUser(value: string): az_hdinsight_create_command_builder {
        this.setFlag("--http-user", value);
        return this;
    }

    /** Specify to create ESP cluster with HDInsight ID Broker. If omitted, creating ESP cluster with HDInsight ID Broker will not not allowed. */
    idbroker(value: string): az_hdinsight_create_command_builder {
        this.setFlag("--idbroker", value);
        return this;
    }

    /** The client AAD security group id for Kafka Rest Proxy. */
    kafkaClientGroupId(value: string): az_hdinsight_create_command_builder {
        this.setFlag("--kafka-client-group-id", value);
        return this;
    }

    /** The client AAD security group name for Kafka Rest Proxy. */
    kafkaClientGroupName(value: string): az_hdinsight_create_command_builder {
        this.setFlag("--kafka-client-group-name", value);
        return this;
    }

    /** The number of kafka management node in the cluster. */
    kafkaManagementNodeCount(value: string): az_hdinsight_create_command_builder {
        this.setFlag("--kafka-management-node-count", value);
        return this;
    }

    /** The size of the node. See also: <a href="https://docs.microsoft.com/azure/hdinsight/hdinsight-hadoop-provision-linux-clusters#configure-cluster-size">https://docs.microsoft.com/azure/hdinsight/hdinsight-hadoop-provision-linux-clusters#configure-cluster-size</a>. */
    kafkaManagementNodeSize(value: string): az_hdinsight_create_command_builder {
        this.setFlag("--kafka-management-node-size", value);
        return this;
    }

    /** A space-delimited list of LDAPS protocol URLs to communicate with the Active Directory. Required only when create cluster with Enterprise Security Package. */
    ldapsUrls(value: string): az_hdinsight_create_command_builder {
        this.setFlag("--ldaps-urls", value);
        return this;
    }

    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_hdinsight_create_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** The minimal supported TLS version. */
    minimalTlsVersion(value: '1.0' | '1.1' | '1.2'): az_hdinsight_create_command_builder {
        this.setFlag("--minimal-tls-version", value);
        return this;
    }

    /** Permit timeout error during argument validation phase. If omitted, validation timeout error will be permitted. */
    noValidationTimeout(value: string): az_hdinsight_create_command_builder {
        this.setFlag("--no-validation-timeout", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_hdinsight_create_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** The resource provider connection type. */
    resourceProviderConnection(value: 'Inbound' | 'Outbound'): az_hdinsight_create_command_builder {
        this.setFlag("--resource-provider-connection", value);
        return this;
    }

    /** SSH password for the cluster nodes. If none specified, uses the HTTP password. */
    sshPassword(value: string): az_hdinsight_create_command_builder {
        this.setFlag("--ssh-password", value);
        return this;
    }

    /** SSH public key for the cluster nodes. */
    sshPublicKey(value: string): az_hdinsight_create_command_builder {
        this.setFlag("--ssh-public-key", value);
        return this;
    }

    /** SSH username for the cluster nodes. */
    sshUser(value: string): az_hdinsight_create_command_builder {
        this.setFlag("--ssh-user", value);
        return this;
    }

    /** The name or ID of the storage account. */
    storageAccount(value: string): az_hdinsight_create_command_builder {
        this.setFlag("--storage-account", value);
        return this;
    }

    /** The storage account key. A key can be retrieved automatically if the user has access to the storage account. */
    storageAccountKey(value: string): az_hdinsight_create_command_builder {
        this.setFlag("--storage-account-key", value);
        return this;
    }

    /** User-assigned managed identity with access to the storage account filesystem. Only required when storage account type is Azure Data Lake Storage Gen2. */
    storageAccountManagedIdentity(value: string): az_hdinsight_create_command_builder {
        this.setFlag("--storage-account-managed-identity", value);
        return this;
    }

    /** The storage container the cluster will use. Uses the cluster name if none was specified. (WASB only). */
    storageContainer(value: string): az_hdinsight_create_command_builder {
        this.setFlag("--storage-container", value);
        return this;
    }

    /** The storage filesystem the cluster will use. Uses the cluster name if none was specified. (DFS only). */
    storageFilesystem(value: string): az_hdinsight_create_command_builder {
        this.setFlag("--storage-filesystem", value);
        return this;
    }

    /** The name or ID of subnet. If name is supplied, `--vnet-name` must be supplied. */
    subnet(value: string): az_hdinsight_create_command_builder {
        this.setFlag("--subnet", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_hdinsight_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_hdinsight_create_command_builder {
        this.setFlag("--tags", value);
        return this;
    }

    /** The 24-hour time in the form of xx:xx in days. */
    time(value: string): az_hdinsight_create_command_builder {
        this.setFlag("--time", value);
        return this;
    }

    /** The timezone for schedule autoscale type. Values from `az hdinsight autoscale list-timezones`. */
    timezone(value: string): az_hdinsight_create_command_builder {
        this.setFlag("--timezone", value);
        return this;
    }

    /** The HDInsight cluster version. See also: <a href="https://docs.microsoft.com/azure/hdinsight/hdinsight-component-versioning#supported-hdinsight-versions">https://docs.microsoft.com/azure/hdinsight/hdinsight-component-versioning#supported-hdinsight-versions</a>. */
    version(value: string): az_hdinsight_create_command_builder {
        this.setFlag("--version", value);
        return this;
    }

    /** The name of a virtual network. */
    vnetName(value: string): az_hdinsight_create_command_builder {
        this.setFlag("--vnet-name", value);
        return this;
    }

    /** The number of worker nodes in the cluster. */
    workernodeCount(value: string): az_hdinsight_create_command_builder {
        this.setFlag("--workernode-count", value);
        return this;
    }

    /** The size of the data disk in GB, e.g. 1023. */
    workernodeDataDiskSize(value: string): az_hdinsight_create_command_builder {
        this.setFlag("--workernode-data-disk-size", value);
        return this;
    }

    /** The type of storage account that will be used for the data disks: standard_lrs or premium_lrs. */
    workernodeDataDiskStorageAccountType(value: 'premium_lrs' | 'standard_lrs'): az_hdinsight_create_command_builder {
        this.setFlag("--workernode-data-disk-storage-account-type", value);
        return this;
    }

    /** The number of data disks to use per worker node. */
    workernodeDataDisksPerNode(value: string): az_hdinsight_create_command_builder {
        this.setFlag("--workernode-data-disks-per-node", value);
        return this;
    }

    /** The size of the node. See also: <a href="https://docs.microsoft.com/azure/hdinsight/hdinsight-hadoop-provision-linux-clusters#configure-cluster-size">https://docs.microsoft.com/azure/hdinsight/hdinsight-hadoop-provision-linux-clusters#configure-cluster-size</a>. */
    workernodeSize(value: string): az_hdinsight_create_command_builder {
        this.setFlag("--workernode-size", value);
        return this;
    }

    /** The size of the node. See also: <a href="https://docs.microsoft.com/azure/hdinsight/hdinsight-hadoop-provision-linux-clusters#configure-cluster-size">https://docs.microsoft.com/azure/hdinsight/hdinsight-hadoop-provision-linux-clusters#configure-cluster-size</a>. */
    zookeepernodeSize(value: string): az_hdinsight_create_command_builder {
        this.setFlag("--zookeepernode-size", value);
        return this;
    }
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
class az_hdinsight_delete_command_builder extends CommandBuilder<az_hdinsight_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the cluster. */
    name(value: string): az_hdinsight_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_hdinsight_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_hdinsight_delete_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_hdinsight_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_hdinsight_delete_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
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
class az_hdinsight_list_command_builder extends CommandBuilder<az_hdinsight_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_hdinsight_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_hdinsight_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_hdinsight_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_hdinsight_list_usage_command_builder extends CommandBuilder<az_hdinsight_list_usage_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, location: string) {
        super(commandPath, resultDataTypeName);
        this.location(location)
    }

    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_hdinsight_list_usage_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_hdinsight_list_usage_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_hdinsight_resize_command_builder extends CommandBuilder<az_hdinsight_resize_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string, workernodeCount: string) {
        super(commandPath, resultDataTypeName);
        this.name(name)
        this.resourceGroup(resourceGroup)
        this.workernodeCount(workernodeCount)
    }

    /** The name of the cluster. */
    name(value: string): az_hdinsight_resize_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_hdinsight_resize_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The target worker node instance count for the operation. */
    workernodeCount(value: string): az_hdinsight_resize_command_builder {
        this.setFlag("--workernode-count", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_hdinsight_resize_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_hdinsight_resize_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_hdinsight_rotate_disk_encryption_key_command_builder extends CommandBuilder<az_hdinsight_rotate_disk_encryption_key_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, encryptionKeyName: string, encryptionKeyVersion: string, encryptionVaultUri: string, name: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.encryptionKeyName(encryptionKeyName)
        this.encryptionKeyVersion(encryptionKeyVersion)
        this.encryptionVaultUri(encryptionVaultUri)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Key name that is used for enabling disk encryption. */
    encryptionKeyName(value: string): az_hdinsight_rotate_disk_encryption_key_command_builder {
        this.setFlag("--encryption-key-name", value);
        return this;
    }

    /** Key version that is used for enabling disk encryption. */
    encryptionKeyVersion(value: string): az_hdinsight_rotate_disk_encryption_key_command_builder {
        this.setFlag("--encryption-key-version", value);
        return this;
    }

    /** Base key vault URI where the customers key is located eg. <a href="https://myvault.vault.azure.net">https://myvault.vault.azure.net</a>. */
    encryptionVaultUri(value: string): az_hdinsight_rotate_disk_encryption_key_command_builder {
        this.setFlag("--encryption-vault-uri", value);
        return this;
    }

    /** The name of the cluster. */
    name(value: string): az_hdinsight_rotate_disk_encryption_key_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_hdinsight_rotate_disk_encryption_key_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_hdinsight_rotate_disk_encryption_key_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_hdinsight_rotate_disk_encryption_key_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_hdinsight_show_command_builder extends CommandBuilder<az_hdinsight_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the cluster. */
    name(value: string): az_hdinsight_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_hdinsight_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_hdinsight_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_hdinsight_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_hdinsight_update_command_builder extends CommandBuilder<az_hdinsight_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the cluster. */
    name(value: string): az_hdinsight_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_hdinsight_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_hdinsight_update_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_hdinsight_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_hdinsight_update_command_builder {
        this.setFlag("--tags", value);
        return this;
    }
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
class az_hdinsight_wait_command_builder extends CommandBuilder<az_hdinsight_wait_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the cluster. */
    name(value: string): az_hdinsight_wait_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_hdinsight_wait_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    created(value: string): az_hdinsight_wait_command_builder {
        this.setFlag("--created", value);
        return this;
    }

    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    custom(value: string): az_hdinsight_wait_command_builder {
        this.setFlag("--custom", value);
        return this;
    }

    /** Wait until deleted. */
    deleted(value: string): az_hdinsight_wait_command_builder {
        this.setFlag("--deleted", value);
        return this;
    }

    /** Wait until the resource exists. */
    exists(value: string): az_hdinsight_wait_command_builder {
        this.setFlag("--exists", value);
        return this;
    }

    /** Polling interval in seconds. */
    interval(value: string): az_hdinsight_wait_command_builder {
        this.setFlag("--interval", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_hdinsight_wait_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Maximum wait in seconds. */
    timeout(value: string): az_hdinsight_wait_command_builder {
        this.setFlag("--timeout", value);
        return this;
    }

    /** Wait until updated with provisioningState at 'Succeeded'. */
    updated(value: string): az_hdinsight_wait_command_builder {
        this.setFlag("--updated", value);
        return this;
    }
}
