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
/** Manage HDInsight applications. */
var az_hdinsight_application = /** @class */ (function () {
    function az_hdinsight_application() {
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
    az_hdinsight_application.create = function (clusterName, name, resourceGroup, scriptActionName, scriptUri) {
        return new az_hdinsight_application_create_command_builder("az hdinsight application create", 'az_hdinsight_application_create_command_result', clusterName, name, resourceGroup, scriptActionName, scriptUri);
    };
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
    az_hdinsight_application["delete"] = function (clusterName, name, resourceGroup) {
        return new az_hdinsight_application_delete_command_builder("az hdinsight application delete", 'az_hdinsight_application_delete_command_result', clusterName, name, resourceGroup);
    };
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
    az_hdinsight_application.list = function (clusterName, resourceGroup) {
        return new az_hdinsight_application_list_command_builder("az hdinsight application list", 'az_hdinsight_application_list_command_result', clusterName, resourceGroup);
    };
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
    az_hdinsight_application.show = function (clusterName, name, resourceGroup) {
        return new az_hdinsight_application_show_command_builder("az hdinsight application show", 'az_hdinsight_application_show_command_result', clusterName, name, resourceGroup);
    };
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
    az_hdinsight_application.wait = function (clusterName, name, resourceGroup) {
        return new az_hdinsight_application_wait_command_builder("az hdinsight application wait", 'az_hdinsight_application_wait_command_result', clusterName, name, resourceGroup);
    };
    return az_hdinsight_application;
}());
exports.az_hdinsight_application = az_hdinsight_application;
/** Manage schedule condition of the HDInsight cluster which enabled Schedule-based Autoscale. */
var az_hdinsight_autoscale_condition = /** @class */ (function () {
    function az_hdinsight_autoscale_condition() {
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
    az_hdinsight_autoscale_condition.create = function (clusterName, days, resourceGroup, time, workernodeCount) {
        return new az_hdinsight_autoscale_condition_create_command_builder("az hdinsight autoscale condition create", 'az_hdinsight_autoscale_condition_create_command_result', clusterName, days, resourceGroup, time, workernodeCount);
    };
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
    az_hdinsight_autoscale_condition["delete"] = function (clusterName, index, resourceGroup) {
        return new az_hdinsight_autoscale_condition_delete_command_builder("az hdinsight autoscale condition delete", 'az_hdinsight_autoscale_condition_delete_command_result', clusterName, index, resourceGroup);
    };
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
    az_hdinsight_autoscale_condition.list = function (clusterName, resourceGroup) {
        return new az_hdinsight_autoscale_condition_list_command_builder("az hdinsight autoscale condition list", 'az_hdinsight_autoscale_condition_list_command_result', clusterName, resourceGroup);
    };
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
    az_hdinsight_autoscale_condition.update = function (clusterName, index, resourceGroup) {
        return new az_hdinsight_autoscale_condition_update_command_builder("az hdinsight autoscale condition update", 'az_hdinsight_autoscale_condition_update_command_result', clusterName, index, resourceGroup);
    };
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
    az_hdinsight_autoscale_condition.wait = function (name, resourceGroup) {
        return new az_hdinsight_autoscale_condition_wait_command_builder("az hdinsight autoscale condition wait", 'az_hdinsight_autoscale_condition_wait_command_result', name, resourceGroup);
    };
    return az_hdinsight_autoscale_condition;
}());
exports.az_hdinsight_autoscale_condition = az_hdinsight_autoscale_condition;
/** Manage HDInsight cluster's Autoscale configuration. */
var az_hdinsight_autoscale = /** @class */ (function () {
    function az_hdinsight_autoscale() {
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
    az_hdinsight_autoscale.create = function (clusterName, resourceGroup, type) {
        return new az_hdinsight_autoscale_create_command_builder("az hdinsight autoscale create", 'az_hdinsight_autoscale_create_command_result', clusterName, resourceGroup, type);
    };
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
    az_hdinsight_autoscale["delete"] = function (clusterName, resourceGroup) {
        return new az_hdinsight_autoscale_delete_command_builder("az hdinsight autoscale delete", 'az_hdinsight_autoscale_delete_command_result', clusterName, resourceGroup);
    };
    /**
     * List the available timezone name when enabling Schedule-based Autoscale.
     *
     * Syntax:
     * ```
     * az hdinsight autoscale list-timezones [--subscription]
     * ```
     */
    az_hdinsight_autoscale.list_timezones = function () {
        return new az_hdinsight_autoscale_list_timezones_command_builder("az hdinsight autoscale list-timezones", 'az_hdinsight_autoscale_list_timezones_command_result');
    };
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
    az_hdinsight_autoscale.show = function (clusterName, resourceGroup) {
        return new az_hdinsight_autoscale_show_command_builder("az hdinsight autoscale show", 'az_hdinsight_autoscale_show_command_result', clusterName, resourceGroup);
    };
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
    az_hdinsight_autoscale.update = function (clusterName, resourceGroup) {
        return new az_hdinsight_autoscale_update_command_builder("az hdinsight autoscale update", 'az_hdinsight_autoscale_update_command_result', clusterName, resourceGroup);
    };
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
    az_hdinsight_autoscale.wait = function (name, resourceGroup) {
        return new az_hdinsight_autoscale_wait_command_builder("az hdinsight autoscale wait", 'az_hdinsight_autoscale_wait_command_result', name, resourceGroup);
    };
    return az_hdinsight_autoscale;
}());
exports.az_hdinsight_autoscale = az_hdinsight_autoscale;
/** Manage HDInsight cluster's virtual hosts. */
var az_hdinsight_host = /** @class */ (function () {
    function az_hdinsight_host() {
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
    az_hdinsight_host.list = function (clusterName, resourceGroup) {
        return new az_hdinsight_host_list_command_builder("az hdinsight host list", 'az_hdinsight_host_list_command_result', clusterName, resourceGroup);
    };
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
    az_hdinsight_host.restart = function (clusterName, hostNames, resourceGroup) {
        return new az_hdinsight_host_restart_command_builder("az hdinsight host restart", 'az_hdinsight_host_restart_command_result', clusterName, hostNames, resourceGroup);
    };
    return az_hdinsight_host;
}());
exports.az_hdinsight_host = az_hdinsight_host;
/** Manage Azure Monitor logs integration on an HDInsight cluster. */
var az_hdinsight_monitor = /** @class */ (function () {
    function az_hdinsight_monitor() {
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
    az_hdinsight_monitor.disable = function (name, resourceGroup) {
        return new az_hdinsight_monitor_disable_command_builder("az hdinsight monitor disable", 'az_hdinsight_monitor_disable_command_result', name, resourceGroup);
    };
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
    az_hdinsight_monitor.enable = function (name, resourceGroup, workspace) {
        return new az_hdinsight_monitor_enable_command_builder("az hdinsight monitor enable", 'az_hdinsight_monitor_enable_command_result', name, resourceGroup, workspace);
    };
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
    az_hdinsight_monitor.show = function (name, resourceGroup) {
        return new az_hdinsight_monitor_show_command_builder("az hdinsight monitor show", 'az_hdinsight_monitor_show_command_result', name, resourceGroup);
    };
    return az_hdinsight_monitor;
}());
exports.az_hdinsight_monitor = az_hdinsight_monitor;
/** Manage HDInsight script actions. */
var az_hdinsight_script_action = /** @class */ (function () {
    function az_hdinsight_script_action() {
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
    az_hdinsight_script_action["delete"] = function (clusterName, name, resourceGroup) {
        return new az_hdinsight_script_action_delete_command_builder("az hdinsight script-action delete", 'az_hdinsight_script_action_delete_command_result', clusterName, name, resourceGroup);
    };
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
    az_hdinsight_script_action.execute = function (clusterName, name, resourceGroup, roles, scriptUri) {
        return new az_hdinsight_script_action_execute_command_builder("az hdinsight script-action execute", 'az_hdinsight_script_action_execute_command_result', clusterName, name, resourceGroup, roles, scriptUri);
    };
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
    az_hdinsight_script_action.list = function (clusterName, resourceGroup) {
        return new az_hdinsight_script_action_list_command_builder("az hdinsight script-action list", 'az_hdinsight_script_action_list_command_result', clusterName, resourceGroup);
    };
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
    az_hdinsight_script_action.list_execution_history = function (clusterName, resourceGroup) {
        return new az_hdinsight_script_action_list_execution_history_command_builder("az hdinsight script-action list-execution-history", 'az_hdinsight_script_action_list_execution_history_command_result', clusterName, resourceGroup);
    };
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
    az_hdinsight_script_action.promote = function (clusterName, executionId, resourceGroup) {
        return new az_hdinsight_script_action_promote_command_builder("az hdinsight script-action promote", 'az_hdinsight_script_action_promote_command_result', clusterName, executionId, resourceGroup);
    };
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
    az_hdinsight_script_action.show_execution_details = function (clusterName, executionId, resourceGroup) {
        return new az_hdinsight_script_action_show_execution_details_command_builder("az hdinsight script-action show-execution-details", 'az_hdinsight_script_action_show_execution_details_command_result', clusterName, executionId, resourceGroup);
    };
    return az_hdinsight_script_action;
}());
exports.az_hdinsight_script_action = az_hdinsight_script_action;
/** Manage HDInsight resources. */
var az_hdinsight = /** @class */ (function () {
    function az_hdinsight() {
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
    az_hdinsight.create = function (name, resourceGroup, type) {
        return new az_hdinsight_create_command_builder("az hdinsight create", 'az_hdinsight_create_command_result', name, resourceGroup, type);
    };
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
    az_hdinsight["delete"] = function (name, resourceGroup) {
        return new az_hdinsight_delete_command_builder("az hdinsight delete", 'az_hdinsight_delete_command_result', name, resourceGroup);
    };
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
    az_hdinsight.list = function () {
        return new az_hdinsight_list_command_builder("az hdinsight list", 'az_hdinsight_list_command_result');
    };
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
    az_hdinsight.list_usage = function (location) {
        return new az_hdinsight_list_usage_command_builder("az hdinsight list-usage", 'az_hdinsight_list_usage_command_result', location);
    };
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
    az_hdinsight.resize = function (name, resourceGroup, workernodeCount) {
        return new az_hdinsight_resize_command_builder("az hdinsight resize", 'az_hdinsight_resize_command_result', name, resourceGroup, workernodeCount);
    };
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
    az_hdinsight.rotate_disk_encryption_key = function (encryptionKeyName, encryptionKeyVersion, encryptionVaultUri, name, resourceGroup) {
        return new az_hdinsight_rotate_disk_encryption_key_command_builder("az hdinsight rotate-disk-encryption-key", 'az_hdinsight_rotate_disk_encryption_key_command_result', encryptionKeyName, encryptionKeyVersion, encryptionVaultUri, name, resourceGroup);
    };
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
    az_hdinsight.show = function (name, resourceGroup) {
        return new az_hdinsight_show_command_builder("az hdinsight show", 'az_hdinsight_show_command_result', name, resourceGroup);
    };
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
    az_hdinsight.update = function (name, resourceGroup) {
        return new az_hdinsight_update_command_builder("az hdinsight update", 'az_hdinsight_update_command_result', name, resourceGroup);
    };
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
    az_hdinsight.wait = function (name, resourceGroup) {
        return new az_hdinsight_wait_command_builder("az hdinsight wait", 'az_hdinsight_wait_command_result', name, resourceGroup);
    };
    return az_hdinsight;
}());
exports.az_hdinsight = az_hdinsight;
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
var az_hdinsight_application_create_command_builder = /** @class */ (function (_super) {
    __extends(az_hdinsight_application_create_command_builder, _super);
    function az_hdinsight_application_create_command_builder(commandPath, resultDataTypeName, clusterName, name, resourceGroup, scriptActionName, scriptUri) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.clusterName(clusterName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.scriptActionName(scriptActionName);
        _this.scriptUri(scriptUri);
        return _this;
    }
    /** The name of the cluster. */
    az_hdinsight_application_create_command_builder.prototype.clusterName = function (value) {
        this.setFlag("--cluster-name", value);
        return this;
    };
    /** The constant value for the application name. */
    az_hdinsight_application_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_hdinsight_application_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the script action. */
    az_hdinsight_application_create_command_builder.prototype.scriptActionName = function (value) {
        this.setFlag("--script-action-name", value);
        return this;
    };
    /** The URI to the script. */
    az_hdinsight_application_create_command_builder.prototype.scriptUri = function (value) {
        this.setFlag("--script-uri", value);
        return this;
    };
    /** The access mode for the application. */
    az_hdinsight_application_create_command_builder.prototype.accessMode = function (value) {
        this.setFlag("--access-mode", value);
        return this;
    };
    /** The destination port to connect to. */
    az_hdinsight_application_create_command_builder.prototype.destinationPort = function (value) {
        this.setFlag("--destination-port", value);
        return this;
    };
    /** Indicates whether to disable gateway authentication. Default is to enable gateway authentication. Default: false. */
    az_hdinsight_application_create_command_builder.prototype.disableGatewayAuth = function (value) {
        this.setFlag("--disable-gateway-auth", value.toString());
        return this;
    };
    /** The size of the node. See also: <a href="https://docs.microsoft.com/azure/hdinsight/hdinsight-hadoop-provision-linux-clusters#configure-cluster-size">https://docs.microsoft.com/azure/hdinsight/hdinsight-hadoop-provision-linux-clusters#configure-cluster-size</a>. */
    az_hdinsight_application_create_command_builder.prototype.edgenodeSize = function (value) {
        this.setFlag("--edgenode-size", value);
        return this;
    };
    /** The marketplace identifier. */
    az_hdinsight_application_create_command_builder.prototype.marketplaceId = function (value) {
        this.setFlag("--marketplace-id", value);
        return this;
    };
    /** Permit timeout error during argument validation phase. If omitted, validation timeout error will be permitted. */
    az_hdinsight_application_create_command_builder.prototype.noValidationTimeout = function (value) {
        this.setFlag("--no-validation-timeout", value);
        return this;
    };
    /** The parameters for the script. */
    az_hdinsight_application_create_command_builder.prototype.scriptParameters = function (value) {
        this.setFlag("--script-parameters", value);
        return this;
    };
    /** SSH password for the cluster nodes. */
    az_hdinsight_application_create_command_builder.prototype.sshPassword = function (value) {
        this.setFlag("--ssh-password", value);
        return this;
    };
    /** SSH public key for the cluster nodes. */
    az_hdinsight_application_create_command_builder.prototype.sshPublicKey = function (value) {
        this.setFlag("--ssh-public-key", value);
        return this;
    };
    /** SSH username for the cluster nodes. */
    az_hdinsight_application_create_command_builder.prototype.sshUser = function (value) {
        this.setFlag("--ssh-user", value);
        return this;
    };
    /** The subdomain suffix of the application. */
    az_hdinsight_application_create_command_builder.prototype.subDomainSuffix = function (value) {
        this.setFlag("--sub-domain-suffix", value);
        return this;
    };
    /** The name or ID of subnet. If name is supplied, `--vnet-name` must be supplied. */
    az_hdinsight_application_create_command_builder.prototype.subnet = function (value) {
        this.setFlag("--subnet", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_hdinsight_application_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_hdinsight_application_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    /** The application type. */
    az_hdinsight_application_create_command_builder.prototype.type = function (value) {
        this.setFlag("--type", value);
        return this;
    };
    /** The name of a virtual network. */
    az_hdinsight_application_create_command_builder.prototype.vnetName = function (value) {
        this.setFlag("--vnet-name", value);
        return this;
    };
    return az_hdinsight_application_create_command_builder;
}(base_1.CommandBuilder));
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
var az_hdinsight_application_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_hdinsight_application_delete_command_builder, _super);
    function az_hdinsight_application_delete_command_builder(commandPath, resultDataTypeName, clusterName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.clusterName(clusterName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the cluster. */
    az_hdinsight_application_delete_command_builder.prototype.clusterName = function (value) {
        this.setFlag("--cluster-name", value);
        return this;
    };
    /** The constant value for the application name. */
    az_hdinsight_application_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_hdinsight_application_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_hdinsight_application_delete_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_hdinsight_application_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_hdinsight_application_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_hdinsight_application_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_hdinsight_application_list_command_builder = /** @class */ (function (_super) {
    __extends(az_hdinsight_application_list_command_builder, _super);
    function az_hdinsight_application_list_command_builder(commandPath, resultDataTypeName, clusterName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.clusterName(clusterName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the cluster. */
    az_hdinsight_application_list_command_builder.prototype.clusterName = function (value) {
        this.setFlag("--cluster-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_hdinsight_application_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_hdinsight_application_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_hdinsight_application_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_hdinsight_application_list_command_builder;
}(base_1.CommandBuilder));
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
var az_hdinsight_application_show_command_builder = /** @class */ (function (_super) {
    __extends(az_hdinsight_application_show_command_builder, _super);
    function az_hdinsight_application_show_command_builder(commandPath, resultDataTypeName, clusterName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.clusterName(clusterName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the cluster. */
    az_hdinsight_application_show_command_builder.prototype.clusterName = function (value) {
        this.setFlag("--cluster-name", value);
        return this;
    };
    /** The constant value for the application name. */
    az_hdinsight_application_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_hdinsight_application_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_hdinsight_application_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_hdinsight_application_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_hdinsight_application_show_command_builder;
}(base_1.CommandBuilder));
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
var az_hdinsight_application_wait_command_builder = /** @class */ (function (_super) {
    __extends(az_hdinsight_application_wait_command_builder, _super);
    function az_hdinsight_application_wait_command_builder(commandPath, resultDataTypeName, clusterName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.clusterName(clusterName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the cluster. */
    az_hdinsight_application_wait_command_builder.prototype.clusterName = function (value) {
        this.setFlag("--cluster-name", value);
        return this;
    };
    /** The constant value for the application name. */
    az_hdinsight_application_wait_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_hdinsight_application_wait_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    az_hdinsight_application_wait_command_builder.prototype.created = function (value) {
        this.setFlag("--created", value);
        return this;
    };
    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    az_hdinsight_application_wait_command_builder.prototype.custom = function (value) {
        this.setFlag("--custom", value);
        return this;
    };
    /** Wait until deleted. */
    az_hdinsight_application_wait_command_builder.prototype.deleted = function (value) {
        this.setFlag("--deleted", value);
        return this;
    };
    /** Wait until the resource exists. */
    az_hdinsight_application_wait_command_builder.prototype.exists = function (value) {
        this.setFlag("--exists", value);
        return this;
    };
    /** Polling interval in seconds. */
    az_hdinsight_application_wait_command_builder.prototype.interval = function (value) {
        this.setFlag("--interval", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_hdinsight_application_wait_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Maximum wait in seconds. */
    az_hdinsight_application_wait_command_builder.prototype.timeout = function (value) {
        this.setFlag("--timeout", value);
        return this;
    };
    /** Wait until updated with provisioningState at 'Succeeded'. */
    az_hdinsight_application_wait_command_builder.prototype.updated = function (value) {
        this.setFlag("--updated", value);
        return this;
    };
    return az_hdinsight_application_wait_command_builder;
}(base_1.CommandBuilder));
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
var az_hdinsight_autoscale_condition_create_command_builder = /** @class */ (function (_super) {
    __extends(az_hdinsight_autoscale_condition_create_command_builder, _super);
    function az_hdinsight_autoscale_condition_create_command_builder(commandPath, resultDataTypeName, clusterName, days, resourceGroup, time, workernodeCount) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.clusterName(clusterName);
        _this.days(days);
        _this.resourceGroup(resourceGroup);
        _this.time(time);
        _this.workernodeCount(workernodeCount);
        return _this;
    }
    /** The name of the cluster. */
    az_hdinsight_autoscale_condition_create_command_builder.prototype.clusterName = function (value) {
        this.setFlag("--cluster-name", value);
        return this;
    };
    /** A space-delimited list of schedule day. */
    az_hdinsight_autoscale_condition_create_command_builder.prototype.days = function (value) {
        this.setFlag("--days", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_hdinsight_autoscale_condition_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The 24-hour time in the form xx:xx in days. */
    az_hdinsight_autoscale_condition_create_command_builder.prototype.time = function (value) {
        this.setFlag("--time", value);
        return this;
    };
    /** The schedule workernode count. */
    az_hdinsight_autoscale_condition_create_command_builder.prototype.workernodeCount = function (value) {
        this.setFlag("--workernode-count", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_hdinsight_autoscale_condition_create_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_hdinsight_autoscale_condition_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_hdinsight_autoscale_condition_create_command_builder;
}(base_1.CommandBuilder));
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
var az_hdinsight_autoscale_condition_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_hdinsight_autoscale_condition_delete_command_builder, _super);
    function az_hdinsight_autoscale_condition_delete_command_builder(commandPath, resultDataTypeName, clusterName, index, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.clusterName(clusterName);
        _this.index(index);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the cluster. */
    az_hdinsight_autoscale_condition_delete_command_builder.prototype.clusterName = function (value) {
        this.setFlag("--cluster-name", value);
        return this;
    };
    /** The Space-separated list of condition indices which starts with 0 to delete. */
    az_hdinsight_autoscale_condition_delete_command_builder.prototype.index = function (value) {
        this.setFlag("--index", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_hdinsight_autoscale_condition_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_hdinsight_autoscale_condition_delete_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_hdinsight_autoscale_condition_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_hdinsight_autoscale_condition_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_hdinsight_autoscale_condition_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_hdinsight_autoscale_condition_list_command_builder = /** @class */ (function (_super) {
    __extends(az_hdinsight_autoscale_condition_list_command_builder, _super);
    function az_hdinsight_autoscale_condition_list_command_builder(commandPath, resultDataTypeName, clusterName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.clusterName(clusterName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the cluster. */
    az_hdinsight_autoscale_condition_list_command_builder.prototype.clusterName = function (value) {
        this.setFlag("--cluster-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_hdinsight_autoscale_condition_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_hdinsight_autoscale_condition_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_hdinsight_autoscale_condition_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_hdinsight_autoscale_condition_list_command_builder;
}(base_1.CommandBuilder));
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
var az_hdinsight_autoscale_condition_update_command_builder = /** @class */ (function (_super) {
    __extends(az_hdinsight_autoscale_condition_update_command_builder, _super);
    function az_hdinsight_autoscale_condition_update_command_builder(commandPath, resultDataTypeName, clusterName, index, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.clusterName(clusterName);
        _this.index(index);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the cluster. */
    az_hdinsight_autoscale_condition_update_command_builder.prototype.clusterName = function (value) {
        this.setFlag("--cluster-name", value);
        return this;
    };
    /** The schedule condition index which starts with 0. */
    az_hdinsight_autoscale_condition_update_command_builder.prototype.index = function (value) {
        this.setFlag("--index", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_hdinsight_autoscale_condition_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** A space-delimited list of schedule day. */
    az_hdinsight_autoscale_condition_update_command_builder.prototype.days = function (value) {
        this.setFlag("--days", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_hdinsight_autoscale_condition_update_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_hdinsight_autoscale_condition_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The 24-hour time in the form xx:xx in days. */
    az_hdinsight_autoscale_condition_update_command_builder.prototype.time = function (value) {
        this.setFlag("--time", value);
        return this;
    };
    /** The schedule workernode count. */
    az_hdinsight_autoscale_condition_update_command_builder.prototype.workernodeCount = function (value) {
        this.setFlag("--workernode-count", value);
        return this;
    };
    return az_hdinsight_autoscale_condition_update_command_builder;
}(base_1.CommandBuilder));
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
var az_hdinsight_autoscale_condition_wait_command_builder = /** @class */ (function (_super) {
    __extends(az_hdinsight_autoscale_condition_wait_command_builder, _super);
    function az_hdinsight_autoscale_condition_wait_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the cluster. */
    az_hdinsight_autoscale_condition_wait_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_hdinsight_autoscale_condition_wait_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    az_hdinsight_autoscale_condition_wait_command_builder.prototype.created = function (value) {
        this.setFlag("--created", value);
        return this;
    };
    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    az_hdinsight_autoscale_condition_wait_command_builder.prototype.custom = function (value) {
        this.setFlag("--custom", value);
        return this;
    };
    /** Wait until deleted. */
    az_hdinsight_autoscale_condition_wait_command_builder.prototype.deleted = function (value) {
        this.setFlag("--deleted", value);
        return this;
    };
    /** Wait until the resource exists. */
    az_hdinsight_autoscale_condition_wait_command_builder.prototype.exists = function (value) {
        this.setFlag("--exists", value);
        return this;
    };
    /** Polling interval in seconds. */
    az_hdinsight_autoscale_condition_wait_command_builder.prototype.interval = function (value) {
        this.setFlag("--interval", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_hdinsight_autoscale_condition_wait_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Maximum wait in seconds. */
    az_hdinsight_autoscale_condition_wait_command_builder.prototype.timeout = function (value) {
        this.setFlag("--timeout", value);
        return this;
    };
    /** Wait until updated with provisioningState at 'Succeeded'. */
    az_hdinsight_autoscale_condition_wait_command_builder.prototype.updated = function (value) {
        this.setFlag("--updated", value);
        return this;
    };
    return az_hdinsight_autoscale_condition_wait_command_builder;
}(base_1.CommandBuilder));
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
var az_hdinsight_autoscale_create_command_builder = /** @class */ (function (_super) {
    __extends(az_hdinsight_autoscale_create_command_builder, _super);
    function az_hdinsight_autoscale_create_command_builder(commandPath, resultDataTypeName, clusterName, resourceGroup, type) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.clusterName(clusterName);
        _this.resourceGroup(resourceGroup);
        _this.type(type);
        return _this;
    }
    /** The name of the cluster. */
    az_hdinsight_autoscale_create_command_builder.prototype.clusterName = function (value) {
        this.setFlag("--cluster-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_hdinsight_autoscale_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The autoscale type. */
    az_hdinsight_autoscale_create_command_builder.prototype.type = function (value) {
        this.setFlag("--type", value);
        return this;
    };
    /** A space-delimited list of schedule day. */
    az_hdinsight_autoscale_create_command_builder.prototype.days = function (value) {
        this.setFlag("--days", value);
        return this;
    };
    /** The max workernode count for Load-based atuoscale. */
    az_hdinsight_autoscale_create_command_builder.prototype.maxWorkernodeCount = function (value) {
        this.setFlag("--max-workernode-count", value);
        return this;
    };
    /** The minimal workernode count for Load-based atuoscale. */
    az_hdinsight_autoscale_create_command_builder.prototype.minWorkernodeCount = function (value) {
        this.setFlag("--min-workernode-count", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_hdinsight_autoscale_create_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_hdinsight_autoscale_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The 24-hour time in the form xx:xx in days. */
    az_hdinsight_autoscale_create_command_builder.prototype.time = function (value) {
        this.setFlag("--time", value);
        return this;
    };
    /** The timezone for schedule autoscale type. Values from `az hdinsight autoscale list-timezones`. */
    az_hdinsight_autoscale_create_command_builder.prototype.timezone = function (value) {
        this.setFlag("--timezone", value);
        return this;
    };
    /** The schedule workernode count. */
    az_hdinsight_autoscale_create_command_builder.prototype.workernodeCount = function (value) {
        this.setFlag("--workernode-count", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_hdinsight_autoscale_create_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_hdinsight_autoscale_create_command_builder;
}(base_1.CommandBuilder));
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
var az_hdinsight_autoscale_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_hdinsight_autoscale_delete_command_builder, _super);
    function az_hdinsight_autoscale_delete_command_builder(commandPath, resultDataTypeName, clusterName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.clusterName(clusterName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the cluster. */
    az_hdinsight_autoscale_delete_command_builder.prototype.clusterName = function (value) {
        this.setFlag("--cluster-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_hdinsight_autoscale_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_hdinsight_autoscale_delete_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_hdinsight_autoscale_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_hdinsight_autoscale_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_hdinsight_autoscale_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List the available timezone name when enabling Schedule-based Autoscale.
 *
 * Syntax:
 * ```
 * az hdinsight autoscale list-timezones [--subscription]
 * ```
 */
var az_hdinsight_autoscale_list_timezones_command_builder = /** @class */ (function (_super) {
    __extends(az_hdinsight_autoscale_list_timezones_command_builder, _super);
    function az_hdinsight_autoscale_list_timezones_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_hdinsight_autoscale_list_timezones_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_hdinsight_autoscale_list_timezones_command_builder;
}(base_1.CommandBuilder));
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
var az_hdinsight_autoscale_show_command_builder = /** @class */ (function (_super) {
    __extends(az_hdinsight_autoscale_show_command_builder, _super);
    function az_hdinsight_autoscale_show_command_builder(commandPath, resultDataTypeName, clusterName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.clusterName(clusterName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the cluster. */
    az_hdinsight_autoscale_show_command_builder.prototype.clusterName = function (value) {
        this.setFlag("--cluster-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_hdinsight_autoscale_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_hdinsight_autoscale_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_hdinsight_autoscale_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_hdinsight_autoscale_show_command_builder;
}(base_1.CommandBuilder));
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
var az_hdinsight_autoscale_update_command_builder = /** @class */ (function (_super) {
    __extends(az_hdinsight_autoscale_update_command_builder, _super);
    function az_hdinsight_autoscale_update_command_builder(commandPath, resultDataTypeName, clusterName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.clusterName(clusterName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the cluster. */
    az_hdinsight_autoscale_update_command_builder.prototype.clusterName = function (value) {
        this.setFlag("--cluster-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_hdinsight_autoscale_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The max workernode count for Load-based atuoscale. */
    az_hdinsight_autoscale_update_command_builder.prototype.maxWorkernodeCount = function (value) {
        this.setFlag("--max-workernode-count", value);
        return this;
    };
    /** The minimal workernode count for Load-based atuoscale. */
    az_hdinsight_autoscale_update_command_builder.prototype.minWorkernodeCount = function (value) {
        this.setFlag("--min-workernode-count", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_hdinsight_autoscale_update_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_hdinsight_autoscale_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The timezone for schedule autoscale type. Values from `az hdinsight autoscale list-timezones`. */
    az_hdinsight_autoscale_update_command_builder.prototype.timezone = function (value) {
        this.setFlag("--timezone", value);
        return this;
    };
    return az_hdinsight_autoscale_update_command_builder;
}(base_1.CommandBuilder));
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
var az_hdinsight_autoscale_wait_command_builder = /** @class */ (function (_super) {
    __extends(az_hdinsight_autoscale_wait_command_builder, _super);
    function az_hdinsight_autoscale_wait_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the cluster. */
    az_hdinsight_autoscale_wait_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_hdinsight_autoscale_wait_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    az_hdinsight_autoscale_wait_command_builder.prototype.created = function (value) {
        this.setFlag("--created", value);
        return this;
    };
    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    az_hdinsight_autoscale_wait_command_builder.prototype.custom = function (value) {
        this.setFlag("--custom", value);
        return this;
    };
    /** Wait until deleted. */
    az_hdinsight_autoscale_wait_command_builder.prototype.deleted = function (value) {
        this.setFlag("--deleted", value);
        return this;
    };
    /** Wait until the resource exists. */
    az_hdinsight_autoscale_wait_command_builder.prototype.exists = function (value) {
        this.setFlag("--exists", value);
        return this;
    };
    /** Polling interval in seconds. */
    az_hdinsight_autoscale_wait_command_builder.prototype.interval = function (value) {
        this.setFlag("--interval", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_hdinsight_autoscale_wait_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Maximum wait in seconds. */
    az_hdinsight_autoscale_wait_command_builder.prototype.timeout = function (value) {
        this.setFlag("--timeout", value);
        return this;
    };
    /** Wait until updated with provisioningState at 'Succeeded'. */
    az_hdinsight_autoscale_wait_command_builder.prototype.updated = function (value) {
        this.setFlag("--updated", value);
        return this;
    };
    return az_hdinsight_autoscale_wait_command_builder;
}(base_1.CommandBuilder));
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
var az_hdinsight_host_list_command_builder = /** @class */ (function (_super) {
    __extends(az_hdinsight_host_list_command_builder, _super);
    function az_hdinsight_host_list_command_builder(commandPath, resultDataTypeName, clusterName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.clusterName(clusterName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the cluster. */
    az_hdinsight_host_list_command_builder.prototype.clusterName = function (value) {
        this.setFlag("--cluster-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_hdinsight_host_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_hdinsight_host_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_hdinsight_host_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_hdinsight_host_list_command_builder;
}(base_1.CommandBuilder));
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
var az_hdinsight_host_restart_command_builder = /** @class */ (function (_super) {
    __extends(az_hdinsight_host_restart_command_builder, _super);
    function az_hdinsight_host_restart_command_builder(commandPath, resultDataTypeName, clusterName, hostNames, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.clusterName(clusterName);
        _this.hostNames(hostNames);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the cluster. */
    az_hdinsight_host_restart_command_builder.prototype.clusterName = function (value) {
        this.setFlag("--cluster-name", value);
        return this;
    };
    /** A space-delimited list of host names that need to be restarted. */
    az_hdinsight_host_restart_command_builder.prototype.hostNames = function (value) {
        this.setFlag("--host-names", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_hdinsight_host_restart_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_hdinsight_host_restart_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_hdinsight_host_restart_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_hdinsight_host_restart_command_builder;
}(base_1.CommandBuilder));
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
var az_hdinsight_monitor_disable_command_builder = /** @class */ (function (_super) {
    __extends(az_hdinsight_monitor_disable_command_builder, _super);
    function az_hdinsight_monitor_disable_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the cluster. */
    az_hdinsight_monitor_disable_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_hdinsight_monitor_disable_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_hdinsight_monitor_disable_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_hdinsight_monitor_disable_command_builder;
}(base_1.CommandBuilder));
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
var az_hdinsight_monitor_enable_command_builder = /** @class */ (function (_super) {
    __extends(az_hdinsight_monitor_enable_command_builder, _super);
    function az_hdinsight_monitor_enable_command_builder(commandPath, resultDataTypeName, name, resourceGroup, workspace) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.workspace(workspace);
        return _this;
    }
    /** The name of the cluster. */
    az_hdinsight_monitor_enable_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_hdinsight_monitor_enable_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name, resource ID or workspace ID of Log Analytics workspace. */
    az_hdinsight_monitor_enable_command_builder.prototype.workspace = function (value) {
        this.setFlag("--workspace", value);
        return this;
    };
    /** Permit timeout error during argument validation phase. If omitted, validation timeout error will be permitted. */
    az_hdinsight_monitor_enable_command_builder.prototype.noValidationTimeout = function (value) {
        this.setFlag("--no-validation-timeout", value);
        return this;
    };
    /** The certificate for the Log Analytics workspace. Required when workspace ID is provided. */
    az_hdinsight_monitor_enable_command_builder.prototype.primaryKey = function (value) {
        this.setFlag("--primary-key", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_hdinsight_monitor_enable_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_hdinsight_monitor_enable_command_builder;
}(base_1.CommandBuilder));
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
var az_hdinsight_monitor_show_command_builder = /** @class */ (function (_super) {
    __extends(az_hdinsight_monitor_show_command_builder, _super);
    function az_hdinsight_monitor_show_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the cluster. */
    az_hdinsight_monitor_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_hdinsight_monitor_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_hdinsight_monitor_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_hdinsight_monitor_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_hdinsight_monitor_show_command_builder;
}(base_1.CommandBuilder));
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
var az_hdinsight_script_action_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_hdinsight_script_action_delete_command_builder, _super);
    function az_hdinsight_script_action_delete_command_builder(commandPath, resultDataTypeName, clusterName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.clusterName(clusterName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the cluster. */
    az_hdinsight_script_action_delete_command_builder.prototype.clusterName = function (value) {
        this.setFlag("--cluster-name", value);
        return this;
    };
    /** The name of the script. */
    az_hdinsight_script_action_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_hdinsight_script_action_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_hdinsight_script_action_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_hdinsight_script_action_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_hdinsight_script_action_execute_command_builder = /** @class */ (function (_super) {
    __extends(az_hdinsight_script_action_execute_command_builder, _super);
    function az_hdinsight_script_action_execute_command_builder(commandPath, resultDataTypeName, clusterName, name, resourceGroup, roles, scriptUri) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.clusterName(clusterName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.roles(roles);
        _this.scriptUri(scriptUri);
        return _this;
    }
    /** The name of the cluster. */
    az_hdinsight_script_action_execute_command_builder.prototype.clusterName = function (value) {
        this.setFlag("--cluster-name", value);
        return this;
    };
    /** The name of the script action. */
    az_hdinsight_script_action_execute_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_hdinsight_script_action_execute_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** A space-delimited list of roles (nodes) where the script will be executed. Valid roles are headnode, workernode, zookeepernode, edgenode. */
    az_hdinsight_script_action_execute_command_builder.prototype.roles = function (value) {
        this.setFlag("--roles", value);
        return this;
    };
    /** The URI to the script. */
    az_hdinsight_script_action_execute_command_builder.prototype.scriptUri = function (value) {
        this.setFlag("--script-uri", value);
        return this;
    };
    /** If the scripts needs to be persisted. */
    az_hdinsight_script_action_execute_command_builder.prototype.persistOnSuccess = function (value) {
        this.setFlag("--persist-on-success", value);
        return this;
    };
    /** The parameters for the script. */
    az_hdinsight_script_action_execute_command_builder.prototype.scriptParameters = function (value) {
        this.setFlag("--script-parameters", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_hdinsight_script_action_execute_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_hdinsight_script_action_execute_command_builder;
}(base_1.CommandBuilder));
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
var az_hdinsight_script_action_list_command_builder = /** @class */ (function (_super) {
    __extends(az_hdinsight_script_action_list_command_builder, _super);
    function az_hdinsight_script_action_list_command_builder(commandPath, resultDataTypeName, clusterName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.clusterName(clusterName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the cluster. */
    az_hdinsight_script_action_list_command_builder.prototype.clusterName = function (value) {
        this.setFlag("--cluster-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_hdinsight_script_action_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_hdinsight_script_action_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_hdinsight_script_action_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_hdinsight_script_action_list_command_builder;
}(base_1.CommandBuilder));
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
var az_hdinsight_script_action_list_execution_history_command_builder = /** @class */ (function (_super) {
    __extends(az_hdinsight_script_action_list_execution_history_command_builder, _super);
    function az_hdinsight_script_action_list_execution_history_command_builder(commandPath, resultDataTypeName, clusterName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.clusterName(clusterName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the cluster. */
    az_hdinsight_script_action_list_execution_history_command_builder.prototype.clusterName = function (value) {
        this.setFlag("--cluster-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_hdinsight_script_action_list_execution_history_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_hdinsight_script_action_list_execution_history_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_hdinsight_script_action_list_execution_history_command_builder;
}(base_1.CommandBuilder));
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
var az_hdinsight_script_action_promote_command_builder = /** @class */ (function (_super) {
    __extends(az_hdinsight_script_action_promote_command_builder, _super);
    function az_hdinsight_script_action_promote_command_builder(commandPath, resultDataTypeName, clusterName, executionId, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.clusterName(clusterName);
        _this.executionId(executionId);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the cluster. */
    az_hdinsight_script_action_promote_command_builder.prototype.clusterName = function (value) {
        this.setFlag("--cluster-name", value);
        return this;
    };
    /** The script execution id. */
    az_hdinsight_script_action_promote_command_builder.prototype.executionId = function (value) {
        this.setFlag("--execution-id", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_hdinsight_script_action_promote_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_hdinsight_script_action_promote_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_hdinsight_script_action_promote_command_builder;
}(base_1.CommandBuilder));
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
var az_hdinsight_script_action_show_execution_details_command_builder = /** @class */ (function (_super) {
    __extends(az_hdinsight_script_action_show_execution_details_command_builder, _super);
    function az_hdinsight_script_action_show_execution_details_command_builder(commandPath, resultDataTypeName, clusterName, executionId, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.clusterName(clusterName);
        _this.executionId(executionId);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the cluster. */
    az_hdinsight_script_action_show_execution_details_command_builder.prototype.clusterName = function (value) {
        this.setFlag("--cluster-name", value);
        return this;
    };
    /** The script execution id. */
    az_hdinsight_script_action_show_execution_details_command_builder.prototype.executionId = function (value) {
        this.setFlag("--execution-id", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_hdinsight_script_action_show_execution_details_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_hdinsight_script_action_show_execution_details_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_hdinsight_script_action_show_execution_details_command_builder;
}(base_1.CommandBuilder));
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
var az_hdinsight_create_command_builder = /** @class */ (function (_super) {
    __extends(az_hdinsight_create_command_builder, _super);
    function az_hdinsight_create_command_builder(commandPath, resultDataTypeName, name, resourceGroup, type) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.type(type);
        return _this;
    }
    /** The name of the cluster. */
    az_hdinsight_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_hdinsight_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Type of HDInsight cluster, like: hadoop, interactivehive, hbase, kafka, storm, spark, rserver, mlservices. See also: <a href="https://docs.microsoft.com/azure/hdinsight/hdinsight-hadoop-provision-linux-clusters#cluster-types">https://docs.microsoft.com/azure/hdinsight/hdinsight-hadoop-provision-linux-clusters#cluster-types</a>. */
    az_hdinsight_create_command_builder.prototype.type = function (value) {
        this.setFlag("--type", value);
        return this;
    };
    /** The name or ID of user assigned identity. */
    az_hdinsight_create_command_builder.prototype.assignIdentity = function (value) {
        this.setFlag("--assign-identity", value);
        return this;
    };
    /** The scheduled workernode count. */
    az_hdinsight_create_command_builder.prototype.autoscaleWorkernodeCount = function (value) {
        this.setFlag("--autoscale-workernode-count", value);
        return this;
    };
    /** The max workernode count for Load-based atuoscale. */
    az_hdinsight_create_command_builder.prototype.autoscaleMaxWorkernodeCount = function (value) {
        this.setFlag("--autoscale-max-workernode-count", value);
        return this;
    };
    /** The minimal workernode count for Load-based atuoscale. */
    az_hdinsight_create_command_builder.prototype.autoscaleMinWorkernodeCount = function (value) {
        this.setFlag("--autoscale-min-workernode-count", value);
        return this;
    };
    /** The autoscale type. */
    az_hdinsight_create_command_builder.prototype.autoscaleType = function (value) {
        this.setFlag("--autoscale-type", value);
        return this;
    };
    /** The domain user account that will have admin privileges on the cluster. Required only when create cluster with Enterprise Security Package. */
    az_hdinsight_create_command_builder.prototype.clusterAdminAccount = function (value) {
        this.setFlag("--cluster-admin-account", value);
        return this;
    };
    /** The domain admin password. Required only when create cluster with Enterprise Security Package. */
    az_hdinsight_create_command_builder.prototype.clusterAdminPassword = function (value) {
        this.setFlag("--cluster-admin-password", value);
        return this;
    };
    /** Extra configurations of various components. Configurations may be supplied from a file using the `@{path}` syntax or a JSON string. See also: <a href="https://docs.microsoft.com/azure/hdinsight/hdinsight-hadoop-customize-cluster-bootstrap">https://docs.microsoft.com/azure/hdinsight/hdinsight-hadoop-customize-cluster-bootstrap</a>. */
    az_hdinsight_create_command_builder.prototype.clusterConfigurations = function (value) {
        this.setFlag("--cluster-configurations", value);
        return this;
    };
    /** The tier of the cluster. */
    az_hdinsight_create_command_builder.prototype.clusterTier = function (value) {
        this.setFlag("--cluster-tier", value);
        return this;
    };
    /** A space-delimited list of Distinguished Names for cluster user groups. Required only when create cluster with Enterprise Security Package. */
    az_hdinsight_create_command_builder.prototype.clusterUsersGroupDns = function (value) {
        this.setFlag("--cluster-users-group-dns", value);
        return this;
    };
    /** The versions of various Hadoop components, in space-separated versions in 'component=version' format. Example: Spark=2.0 Hadoop=2.7.3 See also: <a href="https://docs.microsoft.com/azure/hdinsight/hdinsight-component-versioning#hadoop-components-available-with-different-hdinsight-versions">https://docs.microsoft.com/azure/hdinsight/hdinsight-component-versioning#hadoop-components-available-with-different-hdinsight-versions</a>. */
    az_hdinsight_create_command_builder.prototype.componentVersion = function (value) {
        this.setFlag("--component-version", value);
        return this;
    };
    /** A space-delimited list of schedule day. */
    az_hdinsight_create_command_builder.prototype.days = function (value) {
        this.setFlag("--days", value);
        return this;
    };
    /** The name or resource ID of the user's Azure Active Directory Domain Service. Required only when create cluster with Enterprise Security Package. */
    az_hdinsight_create_command_builder.prototype.domain = function (value) {
        this.setFlag("--domain", value);
        return this;
    };
    /** The size of the node. See also: <a href="https://docs.microsoft.com/azure/hdinsight/hdinsight-hadoop-provision-linux-clusters#configure-cluster-size">https://docs.microsoft.com/azure/hdinsight/hdinsight-hadoop-provision-linux-clusters#configure-cluster-size</a>. */
    az_hdinsight_create_command_builder.prototype.edgenodeSize = function (value) {
        this.setFlag("--edgenode-size", value);
        return this;
    };
    /** Algorithm identifier for encryption. */
    az_hdinsight_create_command_builder.prototype.encryptionAlgorithm = function (value) {
        this.setFlag("--encryption-algorithm", value);
        return this;
    };
    /** Indicates whether enable encryption at host or not. */
    az_hdinsight_create_command_builder.prototype.encryptionAtHost = function (value) {
        this.setFlag("--encryption-at-host", value.toString());
        return this;
    };
    /** Indicates whether enable encryption in transit. */
    az_hdinsight_create_command_builder.prototype.encryptionInTransit = function (value) {
        this.setFlag("--encryption-in-transit", value.toString());
        return this;
    };
    /** Key name that is used for enabling disk encryption. */
    az_hdinsight_create_command_builder.prototype.encryptionKeyName = function (value) {
        this.setFlag("--encryption-key-name", value);
        return this;
    };
    /** Key version that is used for enabling disk encryption. */
    az_hdinsight_create_command_builder.prototype.encryptionKeyVersion = function (value) {
        this.setFlag("--encryption-key-version", value);
        return this;
    };
    /** Base key vault URI where the customers key is located eg. <a href="https://myvault.vault.azure.net">https://myvault.vault.azure.net</a>. */
    az_hdinsight_create_command_builder.prototype.encryptionVaultUri = function (value) {
        this.setFlag("--encryption-vault-uri", value);
        return this;
    };
    /** Specify to create cluster with Enterprise Security Package. If omitted, creating cluster with Enterprise Security Package will not not allowed. */
    az_hdinsight_create_command_builder.prototype.esp = function (value) {
        this.setFlag("--esp", value);
        return this;
    };
    /** The size of the node. See also: <a href="https://docs.microsoft.com/azure/hdinsight/hdinsight-hadoop-provision-linux-clusters#configure-cluster-size">https://docs.microsoft.com/azure/hdinsight/hdinsight-hadoop-provision-linux-clusters#configure-cluster-size</a>. */
    az_hdinsight_create_command_builder.prototype.headnodeSize = function (value) {
        this.setFlag("--headnode-size", value);
        return this;
    };
    /** HTTP password for the cluster. Will prompt if not given. */
    az_hdinsight_create_command_builder.prototype.httpPassword = function (value) {
        this.setFlag("--http-password", value);
        return this;
    };
    /** HTTP username for the cluster.  Default: admin. */
    az_hdinsight_create_command_builder.prototype.httpUser = function (value) {
        this.setFlag("--http-user", value);
        return this;
    };
    /** The client AAD security group id for Kafka Rest Proxy. */
    az_hdinsight_create_command_builder.prototype.kafkaClientGroupId = function (value) {
        this.setFlag("--kafka-client-group-id", value);
        return this;
    };
    /** The client AAD security group name for Kafka Rest Proxy. */
    az_hdinsight_create_command_builder.prototype.kafkaClientGroupName = function (value) {
        this.setFlag("--kafka-client-group-name", value);
        return this;
    };
    /** The number of kafka management node in the cluster. */
    az_hdinsight_create_command_builder.prototype.kafkaManagementNodeCount = function (value) {
        this.setFlag("--kafka-management-node-count", value);
        return this;
    };
    /** The size of the node. See also: <a href="https://docs.microsoft.com/azure/hdinsight/hdinsight-hadoop-provision-linux-clusters#configure-cluster-size">https://docs.microsoft.com/azure/hdinsight/hdinsight-hadoop-provision-linux-clusters#configure-cluster-size</a>. */
    az_hdinsight_create_command_builder.prototype.kafkaManagementNodeSize = function (value) {
        this.setFlag("--kafka-management-node-size", value);
        return this;
    };
    /** A space-delimited list of LDAPS protocol URLs to communicate with the Active Directory. Required only when create cluster with Enterprise Security Package. */
    az_hdinsight_create_command_builder.prototype.ldapsUrls = function (value) {
        this.setFlag("--ldaps-urls", value);
        return this;
    };
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_hdinsight_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** The minimal supported TLS version. */
    az_hdinsight_create_command_builder.prototype.minimalTlsVersion = function (value) {
        this.setFlag("--minimal-tls-version", value);
        return this;
    };
    /** Permit timeout error during argument validation phase. If omitted, validation timeout error will be permitted. */
    az_hdinsight_create_command_builder.prototype.noValidationTimeout = function (value) {
        this.setFlag("--no-validation-timeout", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_hdinsight_create_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** The outbound only public network access type. */
    az_hdinsight_create_command_builder.prototype.outboundPublicNetworkAccessType = function (value) {
        this.setFlag("--outbound-public-network-access-type", value);
        return this;
    };
    /** The public network access type. */
    az_hdinsight_create_command_builder.prototype.publicNetworkAccessType = function (value) {
        this.setFlag("--public-network-access-type", value);
        return this;
    };
    /** SSH password for the cluster nodes. If none specified, uses the HTTP password. */
    az_hdinsight_create_command_builder.prototype.sshPassword = function (value) {
        this.setFlag("--ssh-password", value);
        return this;
    };
    /** SSH public key for the cluster nodes. */
    az_hdinsight_create_command_builder.prototype.sshPublicKey = function (value) {
        this.setFlag("--ssh-public-key", value);
        return this;
    };
    /** SSH username for the cluster nodes. */
    az_hdinsight_create_command_builder.prototype.sshUser = function (value) {
        this.setFlag("--ssh-user", value);
        return this;
    };
    /** The name or ID of the storage account. */
    az_hdinsight_create_command_builder.prototype.storageAccount = function (value) {
        this.setFlag("--storage-account", value);
        return this;
    };
    /** The storage account key. A key can be retrieved automatically if the user has access to the storage account. */
    az_hdinsight_create_command_builder.prototype.storageAccountKey = function (value) {
        this.setFlag("--storage-account-key", value);
        return this;
    };
    /** User-assigned managed identity with access to the storage account filesystem. Only required when storage account type is Azure Data Lake Storage Gen2. */
    az_hdinsight_create_command_builder.prototype.storageAccountManagedIdentity = function (value) {
        this.setFlag("--storage-account-managed-identity", value);
        return this;
    };
    /** The storage container the cluster will use. Uses the cluster name if none was specified. (WASB only). */
    az_hdinsight_create_command_builder.prototype.storageContainer = function (value) {
        this.setFlag("--storage-container", value);
        return this;
    };
    /** The storage filesystem the cluster will use. Uses the cluster name if none was specified. (DFS only). */
    az_hdinsight_create_command_builder.prototype.storageFilesystem = function (value) {
        this.setFlag("--storage-filesystem", value);
        return this;
    };
    /** The name or ID of subnet. If name is supplied, `--vnet-name` must be supplied. */
    az_hdinsight_create_command_builder.prototype.subnet = function (value) {
        this.setFlag("--subnet", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_hdinsight_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_hdinsight_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    /** The 24-hour time in the form of xx:xx in days. */
    az_hdinsight_create_command_builder.prototype.time = function (value) {
        this.setFlag("--time", value);
        return this;
    };
    /** The timezone for schedule autoscale type. Values from `az hdinsight autoscale list-timezones`. */
    az_hdinsight_create_command_builder.prototype.timezone = function (value) {
        this.setFlag("--timezone", value);
        return this;
    };
    /** The HDInsight cluster version. See also: <a href="https://docs.microsoft.com/azure/hdinsight/hdinsight-component-versioning#supported-hdinsight-versions">https://docs.microsoft.com/azure/hdinsight/hdinsight-component-versioning#supported-hdinsight-versions</a>. */
    az_hdinsight_create_command_builder.prototype.version = function (value) {
        this.setFlag("--version", value);
        return this;
    };
    /** The name of a virtual network. */
    az_hdinsight_create_command_builder.prototype.vnetName = function (value) {
        this.setFlag("--vnet-name", value);
        return this;
    };
    /** The number of worker nodes in the cluster. */
    az_hdinsight_create_command_builder.prototype.workernodeCount = function (value) {
        this.setFlag("--workernode-count", value);
        return this;
    };
    /** The size of the data disk in GB, e.g. 1023. */
    az_hdinsight_create_command_builder.prototype.workernodeDataDiskSize = function (value) {
        this.setFlag("--workernode-data-disk-size", value);
        return this;
    };
    /** The type of storage account that will be used for the data disks: standard_lrs or premium_lrs. */
    az_hdinsight_create_command_builder.prototype.workernodeDataDiskStorageAccountType = function (value) {
        this.setFlag("--workernode-data-disk-storage-account-type", value);
        return this;
    };
    /** The number of data disks to use per worker node. */
    az_hdinsight_create_command_builder.prototype.workernodeDataDisksPerNode = function (value) {
        this.setFlag("--workernode-data-disks-per-node", value);
        return this;
    };
    /** The size of the node. See also: <a href="https://docs.microsoft.com/azure/hdinsight/hdinsight-hadoop-provision-linux-clusters#configure-cluster-size">https://docs.microsoft.com/azure/hdinsight/hdinsight-hadoop-provision-linux-clusters#configure-cluster-size</a>. */
    az_hdinsight_create_command_builder.prototype.workernodeSize = function (value) {
        this.setFlag("--workernode-size", value);
        return this;
    };
    /** The size of the node. See also: <a href="https://docs.microsoft.com/azure/hdinsight/hdinsight-hadoop-provision-linux-clusters#configure-cluster-size">https://docs.microsoft.com/azure/hdinsight/hdinsight-hadoop-provision-linux-clusters#configure-cluster-size</a>. */
    az_hdinsight_create_command_builder.prototype.zookeepernodeSize = function (value) {
        this.setFlag("--zookeepernode-size", value);
        return this;
    };
    return az_hdinsight_create_command_builder;
}(base_1.CommandBuilder));
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
var az_hdinsight_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_hdinsight_delete_command_builder, _super);
    function az_hdinsight_delete_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the cluster. */
    az_hdinsight_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_hdinsight_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_hdinsight_delete_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_hdinsight_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_hdinsight_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_hdinsight_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_hdinsight_list_command_builder = /** @class */ (function (_super) {
    __extends(az_hdinsight_list_command_builder, _super);
    function az_hdinsight_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_hdinsight_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_hdinsight_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_hdinsight_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_hdinsight_list_command_builder;
}(base_1.CommandBuilder));
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
var az_hdinsight_list_usage_command_builder = /** @class */ (function (_super) {
    __extends(az_hdinsight_list_usage_command_builder, _super);
    function az_hdinsight_list_usage_command_builder(commandPath, resultDataTypeName, location) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.location(location);
        return _this;
    }
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_hdinsight_list_usage_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_hdinsight_list_usage_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_hdinsight_list_usage_command_builder;
}(base_1.CommandBuilder));
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
var az_hdinsight_resize_command_builder = /** @class */ (function (_super) {
    __extends(az_hdinsight_resize_command_builder, _super);
    function az_hdinsight_resize_command_builder(commandPath, resultDataTypeName, name, resourceGroup, workernodeCount) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.workernodeCount(workernodeCount);
        return _this;
    }
    /** The name of the cluster. */
    az_hdinsight_resize_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_hdinsight_resize_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The target worker node instance count for the operation. */
    az_hdinsight_resize_command_builder.prototype.workernodeCount = function (value) {
        this.setFlag("--workernode-count", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_hdinsight_resize_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_hdinsight_resize_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_hdinsight_resize_command_builder;
}(base_1.CommandBuilder));
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
var az_hdinsight_rotate_disk_encryption_key_command_builder = /** @class */ (function (_super) {
    __extends(az_hdinsight_rotate_disk_encryption_key_command_builder, _super);
    function az_hdinsight_rotate_disk_encryption_key_command_builder(commandPath, resultDataTypeName, encryptionKeyName, encryptionKeyVersion, encryptionVaultUri, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.encryptionKeyName(encryptionKeyName);
        _this.encryptionKeyVersion(encryptionKeyVersion);
        _this.encryptionVaultUri(encryptionVaultUri);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Key name that is used for enabling disk encryption. */
    az_hdinsight_rotate_disk_encryption_key_command_builder.prototype.encryptionKeyName = function (value) {
        this.setFlag("--encryption-key-name", value);
        return this;
    };
    /** Key version that is used for enabling disk encryption. */
    az_hdinsight_rotate_disk_encryption_key_command_builder.prototype.encryptionKeyVersion = function (value) {
        this.setFlag("--encryption-key-version", value);
        return this;
    };
    /** Base key vault URI where the customers key is located eg. <a href="https://myvault.vault.azure.net">https://myvault.vault.azure.net</a>. */
    az_hdinsight_rotate_disk_encryption_key_command_builder.prototype.encryptionVaultUri = function (value) {
        this.setFlag("--encryption-vault-uri", value);
        return this;
    };
    /** The name of the cluster. */
    az_hdinsight_rotate_disk_encryption_key_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_hdinsight_rotate_disk_encryption_key_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_hdinsight_rotate_disk_encryption_key_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_hdinsight_rotate_disk_encryption_key_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_hdinsight_rotate_disk_encryption_key_command_builder;
}(base_1.CommandBuilder));
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
var az_hdinsight_show_command_builder = /** @class */ (function (_super) {
    __extends(az_hdinsight_show_command_builder, _super);
    function az_hdinsight_show_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the cluster. */
    az_hdinsight_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_hdinsight_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_hdinsight_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_hdinsight_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_hdinsight_show_command_builder;
}(base_1.CommandBuilder));
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
var az_hdinsight_update_command_builder = /** @class */ (function (_super) {
    __extends(az_hdinsight_update_command_builder, _super);
    function az_hdinsight_update_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the cluster. */
    az_hdinsight_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_hdinsight_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_hdinsight_update_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_hdinsight_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_hdinsight_update_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_hdinsight_update_command_builder;
}(base_1.CommandBuilder));
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
var az_hdinsight_wait_command_builder = /** @class */ (function (_super) {
    __extends(az_hdinsight_wait_command_builder, _super);
    function az_hdinsight_wait_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the cluster. */
    az_hdinsight_wait_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_hdinsight_wait_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    az_hdinsight_wait_command_builder.prototype.created = function (value) {
        this.setFlag("--created", value);
        return this;
    };
    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    az_hdinsight_wait_command_builder.prototype.custom = function (value) {
        this.setFlag("--custom", value);
        return this;
    };
    /** Wait until deleted. */
    az_hdinsight_wait_command_builder.prototype.deleted = function (value) {
        this.setFlag("--deleted", value);
        return this;
    };
    /** Wait until the resource exists. */
    az_hdinsight_wait_command_builder.prototype.exists = function (value) {
        this.setFlag("--exists", value);
        return this;
    };
    /** Polling interval in seconds. */
    az_hdinsight_wait_command_builder.prototype.interval = function (value) {
        this.setFlag("--interval", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_hdinsight_wait_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Maximum wait in seconds. */
    az_hdinsight_wait_command_builder.prototype.timeout = function (value) {
        this.setFlag("--timeout", value);
        return this;
    };
    /** Wait until updated with provisioningState at 'Succeeded'. */
    az_hdinsight_wait_command_builder.prototype.updated = function (value) {
        this.setFlag("--updated", value);
        return this;
    };
    return az_hdinsight_wait_command_builder;
}(base_1.CommandBuilder));
