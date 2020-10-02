import { CommandBuilder } from '../base';
import { az_monitor_action_group_create_command_result } from './models/az_monitor_action_group_create_command_result';
import { az_monitor_action_group_delete_command_result } from './models/az_monitor_action_group_delete_command_result';
import { az_monitor_action_group_enable_receiver_command_result } from './models/az_monitor_action_group_enable_receiver_command_result';
import { az_monitor_action_group_list_command_result } from './models/az_monitor_action_group_list_command_result';
import { az_monitor_action_group_show_command_result } from './models/az_monitor_action_group_show_command_result';
import { az_monitor_action_group_update_command_result } from './models/az_monitor_action_group_update_command_result';
import { az_monitor_activity_log_alert_action_group_add_command_result } from './models/az_monitor_activity_log_alert_action_group_add_command_result';
import { az_monitor_activity_log_alert_action_group_remove_command_result } from './models/az_monitor_activity_log_alert_action_group_remove_command_result';
import { az_monitor_activity_log_alert_scope_add_command_result } from './models/az_monitor_activity_log_alert_scope_add_command_result';
import { az_monitor_activity_log_alert_scope_remove_command_result } from './models/az_monitor_activity_log_alert_scope_remove_command_result';
import { az_monitor_activity_log_alert_create_command_result } from './models/az_monitor_activity_log_alert_create_command_result';
import { az_monitor_activity_log_alert_delete_command_result } from './models/az_monitor_activity_log_alert_delete_command_result';
import { az_monitor_activity_log_alert_list_command_result } from './models/az_monitor_activity_log_alert_list_command_result';
import { az_monitor_activity_log_alert_show_command_result } from './models/az_monitor_activity_log_alert_show_command_result';
import { az_monitor_activity_log_alert_update_command_result } from './models/az_monitor_activity_log_alert_update_command_result';
import { az_monitor_activity_log_list_command_result } from './models/az_monitor_activity_log_list_command_result';
import { az_monitor_activity_log_list_categories_command_result } from './models/az_monitor_activity_log_list_categories_command_result';
import { az_monitor_alert_create_command_result } from './models/az_monitor_alert_create_command_result';
import { az_monitor_alert_delete_command_result } from './models/az_monitor_alert_delete_command_result';
import { az_monitor_alert_list_command_result } from './models/az_monitor_alert_list_command_result';
import { az_monitor_alert_list_incidents_command_result } from './models/az_monitor_alert_list_incidents_command_result';
import { az_monitor_alert_show_command_result } from './models/az_monitor_alert_show_command_result';
import { az_monitor_alert_show_incident_command_result } from './models/az_monitor_alert_show_incident_command_result';
import { az_monitor_alert_update_command_result } from './models/az_monitor_alert_update_command_result';
import { az_monitor_autoscale_profile_create_command_result } from './models/az_monitor_autoscale_profile_create_command_result';
import { az_monitor_autoscale_profile_delete_command_result } from './models/az_monitor_autoscale_profile_delete_command_result';
import { az_monitor_autoscale_profile_list_command_result } from './models/az_monitor_autoscale_profile_list_command_result';
import { az_monitor_autoscale_profile_list_timezones_command_result } from './models/az_monitor_autoscale_profile_list_timezones_command_result';
import { az_monitor_autoscale_profile_show_command_result } from './models/az_monitor_autoscale_profile_show_command_result';
import { az_monitor_autoscale_rule_copy_command_result } from './models/az_monitor_autoscale_rule_copy_command_result';
import { az_monitor_autoscale_rule_create_command_result } from './models/az_monitor_autoscale_rule_create_command_result';
import { az_monitor_autoscale_rule_delete_command_result } from './models/az_monitor_autoscale_rule_delete_command_result';
import { az_monitor_autoscale_rule_list_command_result } from './models/az_monitor_autoscale_rule_list_command_result';
import { az_monitor_autoscale_settings_create_command_result } from './models/az_monitor_autoscale_settings_create_command_result';
import { az_monitor_autoscale_settings_delete_command_result } from './models/az_monitor_autoscale_settings_delete_command_result';
import { az_monitor_autoscale_settings_get_parameters_template_command_result } from './models/az_monitor_autoscale_settings_get_parameters_template_command_result';
import { az_monitor_autoscale_settings_list_command_result } from './models/az_monitor_autoscale_settings_list_command_result';
import { az_monitor_autoscale_settings_show_command_result } from './models/az_monitor_autoscale_settings_show_command_result';
import { az_monitor_autoscale_settings_update_command_result } from './models/az_monitor_autoscale_settings_update_command_result';
import { az_monitor_autoscale_create_command_result } from './models/az_monitor_autoscale_create_command_result';
import { az_monitor_autoscale_delete_command_result } from './models/az_monitor_autoscale_delete_command_result';
import { az_monitor_autoscale_list_command_result } from './models/az_monitor_autoscale_list_command_result';
import { az_monitor_autoscale_show_command_result } from './models/az_monitor_autoscale_show_command_result';
import { az_monitor_autoscale_update_command_result } from './models/az_monitor_autoscale_update_command_result';
import { az_monitor_diagnostic_settings_categories_list_command_result } from './models/az_monitor_diagnostic_settings_categories_list_command_result';
import { az_monitor_diagnostic_settings_categories_show_command_result } from './models/az_monitor_diagnostic_settings_categories_show_command_result';
import { az_monitor_diagnostic_settings_subscription_create_command_result } from './models/az_monitor_diagnostic_settings_subscription_create_command_result';
import { az_monitor_diagnostic_settings_subscription_delete_command_result } from './models/az_monitor_diagnostic_settings_subscription_delete_command_result';
import { az_monitor_diagnostic_settings_subscription_list_command_result } from './models/az_monitor_diagnostic_settings_subscription_list_command_result';
import { az_monitor_diagnostic_settings_subscription_show_command_result } from './models/az_monitor_diagnostic_settings_subscription_show_command_result';
import { az_monitor_diagnostic_settings_subscription_update_command_result } from './models/az_monitor_diagnostic_settings_subscription_update_command_result';
import { az_monitor_diagnostic_settings_create_command_result } from './models/az_monitor_diagnostic_settings_create_command_result';
import { az_monitor_diagnostic_settings_delete_command_result } from './models/az_monitor_diagnostic_settings_delete_command_result';
import { az_monitor_diagnostic_settings_list_command_result } from './models/az_monitor_diagnostic_settings_list_command_result';
import { az_monitor_diagnostic_settings_show_command_result } from './models/az_monitor_diagnostic_settings_show_command_result';
import { az_monitor_diagnostic_settings_update_command_result } from './models/az_monitor_diagnostic_settings_update_command_result';
import { az_monitor_log_analytics_cluster_create_command_result } from './models/az_monitor_log_analytics_cluster_create_command_result';
import { az_monitor_log_analytics_cluster_delete_command_result } from './models/az_monitor_log_analytics_cluster_delete_command_result';
import { az_monitor_log_analytics_cluster_list_command_result } from './models/az_monitor_log_analytics_cluster_list_command_result';
import { az_monitor_log_analytics_cluster_show_command_result } from './models/az_monitor_log_analytics_cluster_show_command_result';
import { az_monitor_log_analytics_cluster_update_command_result } from './models/az_monitor_log_analytics_cluster_update_command_result';
import { az_monitor_log_analytics_cluster_wait_command_result } from './models/az_monitor_log_analytics_cluster_wait_command_result';
import { az_monitor_log_analytics_workspace_data_export_create_command_result } from './models/az_monitor_log_analytics_workspace_data_export_create_command_result';
import { az_monitor_log_analytics_workspace_data_export_delete_command_result } from './models/az_monitor_log_analytics_workspace_data_export_delete_command_result';
import { az_monitor_log_analytics_workspace_data_export_list_command_result } from './models/az_monitor_log_analytics_workspace_data_export_list_command_result';
import { az_monitor_log_analytics_workspace_data_export_show_command_result } from './models/az_monitor_log_analytics_workspace_data_export_show_command_result';
import { az_monitor_log_analytics_workspace_data_export_update_command_result } from './models/az_monitor_log_analytics_workspace_data_export_update_command_result';
import { az_monitor_log_analytics_workspace_linked_service_create_command_result } from './models/az_monitor_log_analytics_workspace_linked_service_create_command_result';
import { az_monitor_log_analytics_workspace_linked_service_delete_command_result } from './models/az_monitor_log_analytics_workspace_linked_service_delete_command_result';
import { az_monitor_log_analytics_workspace_linked_service_list_command_result } from './models/az_monitor_log_analytics_workspace_linked_service_list_command_result';
import { az_monitor_log_analytics_workspace_linked_service_show_command_result } from './models/az_monitor_log_analytics_workspace_linked_service_show_command_result';
import { az_monitor_log_analytics_workspace_linked_service_update_command_result } from './models/az_monitor_log_analytics_workspace_linked_service_update_command_result';
import { az_monitor_log_analytics_workspace_linked_service_wait_command_result } from './models/az_monitor_log_analytics_workspace_linked_service_wait_command_result';
import { az_monitor_log_analytics_workspace_linked_storage_add_command_result } from './models/az_monitor_log_analytics_workspace_linked_storage_add_command_result';
import { az_monitor_log_analytics_workspace_linked_storage_create_command_result } from './models/az_monitor_log_analytics_workspace_linked_storage_create_command_result';
import { az_monitor_log_analytics_workspace_linked_storage_delete_command_result } from './models/az_monitor_log_analytics_workspace_linked_storage_delete_command_result';
import { az_monitor_log_analytics_workspace_linked_storage_list_command_result } from './models/az_monitor_log_analytics_workspace_linked_storage_list_command_result';
import { az_monitor_log_analytics_workspace_linked_storage_remove_command_result } from './models/az_monitor_log_analytics_workspace_linked_storage_remove_command_result';
import { az_monitor_log_analytics_workspace_linked_storage_show_command_result } from './models/az_monitor_log_analytics_workspace_linked_storage_show_command_result';
import { az_monitor_log_analytics_workspace_pack_disable_command_result } from './models/az_monitor_log_analytics_workspace_pack_disable_command_result';
import { az_monitor_log_analytics_workspace_pack_enable_command_result } from './models/az_monitor_log_analytics_workspace_pack_enable_command_result';
import { az_monitor_log_analytics_workspace_pack_list_command_result } from './models/az_monitor_log_analytics_workspace_pack_list_command_result';
import { az_monitor_log_analytics_workspace_saved_search_create_command_result } from './models/az_monitor_log_analytics_workspace_saved_search_create_command_result';
import { az_monitor_log_analytics_workspace_saved_search_delete_command_result } from './models/az_monitor_log_analytics_workspace_saved_search_delete_command_result';
import { az_monitor_log_analytics_workspace_saved_search_list_command_result } from './models/az_monitor_log_analytics_workspace_saved_search_list_command_result';
import { az_monitor_log_analytics_workspace_saved_search_show_command_result } from './models/az_monitor_log_analytics_workspace_saved_search_show_command_result';
import { az_monitor_log_analytics_workspace_saved_search_update_command_result } from './models/az_monitor_log_analytics_workspace_saved_search_update_command_result';
import { az_monitor_log_analytics_workspace_table_list_command_result } from './models/az_monitor_log_analytics_workspace_table_list_command_result';
import { az_monitor_log_analytics_workspace_table_show_command_result } from './models/az_monitor_log_analytics_workspace_table_show_command_result';
import { az_monitor_log_analytics_workspace_table_update_command_result } from './models/az_monitor_log_analytics_workspace_table_update_command_result';
import { az_monitor_log_analytics_workspace_create_command_result } from './models/az_monitor_log_analytics_workspace_create_command_result';
import { az_monitor_log_analytics_workspace_delete_command_result } from './models/az_monitor_log_analytics_workspace_delete_command_result';
import { az_monitor_log_analytics_workspace_get_schema_command_result } from './models/az_monitor_log_analytics_workspace_get_schema_command_result';
import { az_monitor_log_analytics_workspace_get_shared_keys_command_result } from './models/az_monitor_log_analytics_workspace_get_shared_keys_command_result';
import { az_monitor_log_analytics_workspace_list_command_result } from './models/az_monitor_log_analytics_workspace_list_command_result';
import { az_monitor_log_analytics_workspace_list_deleted_workspaces_command_result } from './models/az_monitor_log_analytics_workspace_list_deleted_workspaces_command_result';
import { az_monitor_log_analytics_workspace_list_management_groups_command_result } from './models/az_monitor_log_analytics_workspace_list_management_groups_command_result';
import { az_monitor_log_analytics_workspace_list_usages_command_result } from './models/az_monitor_log_analytics_workspace_list_usages_command_result';
import { az_monitor_log_analytics_workspace_recover_command_result } from './models/az_monitor_log_analytics_workspace_recover_command_result';
import { az_monitor_log_analytics_workspace_show_command_result } from './models/az_monitor_log_analytics_workspace_show_command_result';
import { az_monitor_log_analytics_workspace_update_command_result } from './models/az_monitor_log_analytics_workspace_update_command_result';
import { az_monitor_log_profiles_create_command_result } from './models/az_monitor_log_profiles_create_command_result';
import { az_monitor_log_profiles_delete_command_result } from './models/az_monitor_log_profiles_delete_command_result';
import { az_monitor_log_profiles_list_command_result } from './models/az_monitor_log_profiles_list_command_result';
import { az_monitor_log_profiles_show_command_result } from './models/az_monitor_log_profiles_show_command_result';
import { az_monitor_log_profiles_update_command_result } from './models/az_monitor_log_profiles_update_command_result';
import { az_monitor_metrics_alert_create_command_result } from './models/az_monitor_metrics_alert_create_command_result';
import { az_monitor_metrics_alert_delete_command_result } from './models/az_monitor_metrics_alert_delete_command_result';
import { az_monitor_metrics_alert_list_command_result } from './models/az_monitor_metrics_alert_list_command_result';
import { az_monitor_metrics_alert_show_command_result } from './models/az_monitor_metrics_alert_show_command_result';
import { az_monitor_metrics_alert_update_command_result } from './models/az_monitor_metrics_alert_update_command_result';
import { az_monitor_metrics_list_command_result } from './models/az_monitor_metrics_list_command_result';
import { az_monitor_metrics_list_definitions_command_result } from './models/az_monitor_metrics_list_definitions_command_result';
import { az_monitor_private_link_scope_private_endpoint_connection_approve_command_result } from './models/az_monitor_private_link_scope_private_endpoint_connection_approve_command_result';
import { az_monitor_private_link_scope_private_endpoint_connection_delete_command_result } from './models/az_monitor_private_link_scope_private_endpoint_connection_delete_command_result';
import { az_monitor_private_link_scope_private_endpoint_connection_list_command_result } from './models/az_monitor_private_link_scope_private_endpoint_connection_list_command_result';
import { az_monitor_private_link_scope_private_endpoint_connection_reject_command_result } from './models/az_monitor_private_link_scope_private_endpoint_connection_reject_command_result';
import { az_monitor_private_link_scope_private_endpoint_connection_show_command_result } from './models/az_monitor_private_link_scope_private_endpoint_connection_show_command_result';
import { az_monitor_private_link_scope_private_link_resource_list_command_result } from './models/az_monitor_private_link_scope_private_link_resource_list_command_result';
import { az_monitor_private_link_scope_private_link_resource_show_command_result } from './models/az_monitor_private_link_scope_private_link_resource_show_command_result';
import { az_monitor_private_link_scope_scoped_resource_create_command_result } from './models/az_monitor_private_link_scope_scoped_resource_create_command_result';
import { az_monitor_private_link_scope_scoped_resource_delete_command_result } from './models/az_monitor_private_link_scope_scoped_resource_delete_command_result';
import { az_monitor_private_link_scope_scoped_resource_list_command_result } from './models/az_monitor_private_link_scope_scoped_resource_list_command_result';
import { az_monitor_private_link_scope_scoped_resource_show_command_result } from './models/az_monitor_private_link_scope_scoped_resource_show_command_result';
import { az_monitor_private_link_scope_create_command_result } from './models/az_monitor_private_link_scope_create_command_result';
import { az_monitor_private_link_scope_delete_command_result } from './models/az_monitor_private_link_scope_delete_command_result';
import { az_monitor_private_link_scope_list_command_result } from './models/az_monitor_private_link_scope_list_command_result';
import { az_monitor_private_link_scope_show_command_result } from './models/az_monitor_private_link_scope_show_command_result';
import { az_monitor_private_link_scope_update_command_result } from './models/az_monitor_private_link_scope_update_command_result';
import { az_monitor_clone_command_result } from './models/az_monitor_clone_command_result';
/** Manage action groups. */
export declare class az_monitor_action_group {
    /**
     * Create a new action group.
     *
     * Syntax:
     * ```
     * az monitor action-group create --name
     *                                --resource-group
     *                                [--action]
     *                                [--short-name]
     *                                [--subscription]
     *                                [--tags]
     * ```
     *
     * @param {string} name The name of the action group.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static create(name: string, resourceGroup: string): az_monitor_action_group_create_command_builder;
    /**
     * Delete an action group.
     *
     * Syntax:
     * ```
     * az monitor action-group delete [--ids]
     *                                [--name]
     *                                [--resource-group]
     *                                [--subscription]
     * ```
     */
    static delete(): az_monitor_action_group_delete_command_builder;
    /**
     * Enable a receiver in an action group.
     *
     * Syntax:
     * ```
     * az monitor action-group enable-receiver --name
     *                                         [--action-group]
     *                                         [--ids]
     *                                         [--resource-group]
     *                                         [--subscription]
     * ```
     *
     * @param {string} name The name of the receiver to resubscribe.
     */
    static enable_receiver(name: string): az_monitor_action_group_enable_receiver_command_builder;
    /**
     * List action groups under a resource group or the current subscription.
     *
     * Syntax:
     * ```
     * az monitor action-group list [--query-examples]
     *                              [--resource-group]
     *                              [--subscription]
     * ```
     */
    static list(): az_monitor_action_group_list_command_builder;
    /**
     * Show the details of an action group.
     *
     * Syntax:
     * ```
     * az monitor action-group show [--ids]
     *                              [--name]
     *                              [--query-examples]
     *                              [--resource-group]
     *                              [--subscription]
     * ```
     */
    static show(): az_monitor_action_group_show_command_builder;
    /**
     * Update an action group.
     *
     * Syntax:
     * ```
     * az monitor action-group update [--add]
     *                                [--add-action]
     *                                [--force-string]
     *                                [--ids]
     *                                [--name]
     *                                [--remove]
     *                                [--remove-action]
     *                                [--resource-group]
     *                                [--set]
     *                                [--short-name]
     *                                [--subscription]
     *                                [--tags]
     * ```
     */
    static update(): az_monitor_action_group_update_command_builder;
}
/** Manage action groups for activity log alerts. */
export declare class az_monitor_activity_log_alert_action_group {
    /**
     * Add action groups to this activity log alert. It can also be used to overwrite existing webhook properties of particular action groups.
     *
     * Syntax:
     * ```
     * az monitor activity-log alert action-group add --action-group
     *                                                [--ids]
     *                                                [--name]
     *                                                [--reset]
     *                                                [--resource-group]
     *                                                [--strict]
     *                                                [--subscription]
     *                                                [--webhook-properties]
     * ```
     *
     * @param {string} actionGroup The names or the resource ids of the action groups to be added.
     */
    static add(actionGroup: string): az_monitor_activity_log_alert_action_group_add_command_builder;
    /**
     * Remove action groups from this activity log alert.
     *
     * Syntax:
     * ```
     * az monitor activity-log alert action-group remove --action-group
     *                                                   [--ids]
     *                                                   [--name]
     *                                                   [--resource-group]
     *                                                   [--subscription]
     * ```
     *
     * @param {string} actionGroup The names or the resource ids of the action groups to be added.
     */
    static remove(actionGroup: string): az_monitor_activity_log_alert_action_group_remove_command_builder;
}
/** Manage scopes for activity log alerts. */
export declare class az_monitor_activity_log_alert_scope {
    /**
     * Add scopes to this activity log alert.
     *
     * Syntax:
     * ```
     * az monitor activity-log alert scope add --scope
     *                                         [--ids]
     *                                         [--name]
     *                                         [--reset]
     *                                         [--resource-group]
     *                                         [--subscription]
     * ```
     *
     * @param {string} scope List of scopes to add. Each scope could be a resource ID, a resource group ID or a subscription ID.
     */
    static add(scope: string): az_monitor_activity_log_alert_scope_add_command_builder;
    /**
     * Removes scopes from this activity log alert.
     *
     * Syntax:
     * ```
     * az monitor activity-log alert scope remove --scope
     *                                            [--ids]
     *                                            [--name]
     *                                            [--resource-group]
     *                                            [--subscription]
     * ```
     *
     * @param {string} scope The scopes to remove.
     */
    static remove(scope: string): az_monitor_activity_log_alert_scope_remove_command_builder;
}
/** Manage activity log alerts. */
export declare class az_monitor_activity_log_alert {
    /**
     * Create a default activity log alert.
     *
     * Syntax:
     * ```
     * az monitor activity-log alert create --name
     *                                      --resource-group
     *                                      [--action-group]
     *                                      [--condition]
     *                                      [--description]
     *                                      [--disable]
     *                                      [--scope]
     *                                      [--subscription]
     *                                      [--tags]
     *                                      [--webhook-properties]
     * ```
     *
     * @param {string} name Name of the activity log alerts.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static create(name: string, resourceGroup: string): az_monitor_activity_log_alert_create_command_builder;
    /**
     * Delete an activity log alert.
     *
     * Syntax:
     * ```
     * az monitor activity-log alert delete [--ids]
     *                                      [--name]
     *                                      [--resource-group]
     *                                      [--subscription]
     * ```
     */
    static delete(): az_monitor_activity_log_alert_delete_command_builder;
    /**
     * List activity log alerts under a resource group or the current subscription.
     *
     * Syntax:
     * ```
     * az monitor activity-log alert list [--query-examples]
     *                                    [--resource-group]
     *                                    [--subscription]
     * ```
     */
    static list(): az_monitor_activity_log_alert_list_command_builder;
    /**
     * Get an activity log alert.
     *
     * Syntax:
     * ```
     * az monitor activity-log alert show [--ids]
     *                                    [--name]
     *                                    [--query-examples]
     *                                    [--resource-group]
     *                                    [--subscription]
     * ```
     */
    static show(): az_monitor_activity_log_alert_show_command_builder;
    /**
     * Update the details of this activity log alert.
     *
     * Syntax:
     * ```
     * az monitor activity-log alert update [--add]
     *                                      [--condition]
     *                                      [--description]
     *                                      [--enabled {false, true}]
     *                                      [--force-string]
     *                                      [--ids]
     *                                      [--name]
     *                                      [--remove]
     *                                      [--resource-group]
     *                                      [--set]
     *                                      [--subscription]
     *                                      [--tags]
     * ```
     */
    static update(): az_monitor_activity_log_alert_update_command_builder;
}
/** Manage activity logs. */
export declare class az_monitor_activity_log {
    /**
     * List and query activity log events.
     *
     * Syntax:
     * ```
     * az monitor activity-log list [--caller]
     *                              [--correlation-id]
     *                              [--end-time]
     *                              [--filters]
     *                              [--max-events]
     *                              [--namespace]
     *                              [--offset]
     *                              [--query-examples]
     *                              [--resource-group]
     *                              [--resource-id]
     *                              [--select {authorization, caller, category, claims, correlationId, description, eventDataId, eventName, eventTimestamp, httpRequest, id, level, operationId, operationName, properties, resourceGroupName, resourceId, resourceProviderName, resourceType, status, subStatus, submissionTimestamp, subscriptionId, tenantId}]
     *                              [--start-time]
     *                              [--status]
     *                              [--subscription]
     * ```
     */
    static list(): az_monitor_activity_log_list_command_builder;
    /**
     * List the event categories of activity logs.
     *
     * Syntax:
     * ```
     * az monitor activity-log list-categories [--subscription]
     * ```
     */
    static list_categories(): az_monitor_activity_log_list_categories_command_builder;
}
/** Manage classic metric-based alert rules. */
export declare class az_monitor_alert {
    /**
     * Create a classic metric-based alert rule.
     *
     * Syntax:
     * ```
     * az monitor alert create --condition
     *                         --name
     *                         --target
     *                         [--action]
     *                         [--description]
     *                         [--disabled {false, true}]
     *                         [--email-service-owners {false, true}]
     *                         [--location]
     *                         [--resource-group]
     *                         [--subscription]
     *                         [--tags]
     *                         [--target-namespace]
     *                         [--target-parent]
     *                         [--target-type]
     * ```
     *
     * @param {string} condition The condition which triggers the rule.
     * @param {string} name Name of the alert rule.
     * @param {string} target Name or ID of the target resource.
     */
    static create(condition: string, name: string, target: string): az_monitor_alert_create_command_builder;
    /**
     * Delete an alert rule.
     *
     * Syntax:
     * ```
     * az monitor alert delete [--ids]
     *                         [--name]
     *                         [--resource-group]
     *                         [--subscription]
     * ```
     */
    static delete(): az_monitor_alert_delete_command_builder;
    /**
     * List alert rules in a resource group.
     *
     * Syntax:
     * ```
     * az monitor alert list --resource-group
     *                       [--query-examples]
     *                       [--subscription]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static list(resourceGroup: string): az_monitor_alert_list_command_builder;
    /**
     * List all incidents for an alert rule.
     *
     * Syntax:
     * ```
     * az monitor alert list-incidents --resource-group
     *                                 --rule-name
     *                                 [--subscription]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} ruleName Name of the alert rule.
     */
    static list_incidents(resourceGroup: string, ruleName: string): az_monitor_alert_list_incidents_command_builder;
    /**
     * Show an alert rule.
     *
     * Syntax:
     * ```
     * az monitor alert show [--ids]
     *                       [--name]
     *                       [--query-examples]
     *                       [--resource-group]
     *                       [--subscription]
     * ```
     */
    static show(): az_monitor_alert_show_command_builder;
    /**
     * Get the details of an alert rule incident.
     *
     * Syntax:
     * ```
     * az monitor alert show-incident [--ids]
     *                                [--name]
     *                                [--resource-group]
     *                                [--rule-name]
     *                                [--subscription]
     * ```
     */
    static show_incident(): az_monitor_alert_show_incident_command_builder;
    /**
     * Update a classic metric-based alert rule.
     *
     * Syntax:
     * ```
     * az monitor alert update [--add]
     *                         [--add-action]
     *                         [--aggregation {avg, last, max, min, total}]
     *                         [--condition]
     *                         [--description]
     *                         [--email-service-owners {false, true}]
     *                         [--enabled]
     *                         [--force-string]
     *                         [--ids]
     *                         [--metric]
     *                         [--name]
     *                         [--operator {<, <=, >, >=}]
     *                         [--period]
     *                         [--remove]
     *                         [--remove-action]
     *                         [--resource]
     *                         [--resource-group]
     *                         [--resource-namespace]
     *                         [--resource-parent]
     *                         [--resource-type]
     *                         [--set]
     *                         [--subscription]
     *                         [--tags]
     *                         [--threshold]
     * ```
     */
    static update(): az_monitor_alert_update_command_builder;
}
/** Manage autoscaling profiles. */
export declare class az_monitor_autoscale_profile {
    /**
     * Create a fixed or recurring autoscale profile.
     *
     * Syntax:
     * ```
     * az monitor autoscale profile create --autoscale-name
     *                                     --count
     *                                     --name
     *                                     --resource-group
     *                                     --timezone
     *                                     [--copy-rules]
     *                                     [--end]
     *                                     [--max-count]
     *                                     [--min-count]
     *                                     [--recurrence]
     *                                     [--start]
     *                                     [--subscription]
     * ```
     *
     * @param {string} autoscaleName Name of the autoscale settings.
     * @param {string} count The numer of instances to use. If used with --min/max-count, the default number of instances to use.
     * @param {string} name Name of the autoscale profile.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} timezone Timezone name.
     */
    static create(autoscaleName: string, count: string, name: string, resourceGroup: string, timezone: string): az_monitor_autoscale_profile_create_command_builder;
    /**
     * Delete an autoscale profile.
     *
     * Syntax:
     * ```
     * az monitor autoscale profile delete --autoscale-name
     *                                     --name
     *                                     --resource-group
     *                                     [--subscription]
     * ```
     *
     * @param {string} autoscaleName Name of the autoscale settings.
     * @param {string} name Name of the autoscale profile.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static delete(autoscaleName: string, name: string, resourceGroup: string): az_monitor_autoscale_profile_delete_command_builder;
    /**
     * List autoscale profiles.
     *
     * Syntax:
     * ```
     * az monitor autoscale profile list --autoscale-name
     *                                   --resource-group
     *                                   [--query-examples]
     *                                   [--subscription]
     * ```
     *
     * @param {string} autoscaleName Name of the autoscale settings.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static list(autoscaleName: string, resourceGroup: string): az_monitor_autoscale_profile_list_command_builder;
    /**
     * Look up time zone information.
     *
     * Syntax:
     * ```
     * az monitor autoscale profile list-timezones [--offset]
     *                                             [--search-query]
     *                                             [--subscription]
     * ```
     */
    static list_timezones(): az_monitor_autoscale_profile_list_timezones_command_builder;
    /**
     * Show details of an autoscale profile.
     *
     * Syntax:
     * ```
     * az monitor autoscale profile show --autoscale-name
     *                                   --name
     *                                   --resource-group
     *                                   [--query-examples]
     *                                   [--subscription]
     * ```
     *
     * @param {string} autoscaleName Name of the autoscale settings.
     * @param {string} name Name of the autoscale profile.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static show(autoscaleName: string, name: string, resourceGroup: string): az_monitor_autoscale_profile_show_command_builder;
}
/** Manage autoscale scaling rules. */
export declare class az_monitor_autoscale_rule {
    /**
     * Copy autoscale rules from one profile to another.
     *
     * Syntax:
     * ```
     * az monitor autoscale rule copy --autoscale-name
     *                                --dest-schedule
     *                                --index
     *                                --resource-group
     *                                [--source-schedule]
     *                                [--subscription]
     * ```
     *
     * @param {string} autoscaleName Name of the autoscale settings.
     * @param {string} destSchedule Name of the profile to copy rules to.
     * @param {string} index Space-separated list of rule indices to copy, or '\*' to copy all rules.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static copy(autoscaleName: string, destSchedule: string, index: string, resourceGroup: string): az_monitor_autoscale_rule_copy_command_builder;
    /**
     * Add a new autoscale rule.
     *
     * Syntax:
     * ```
     * az monitor autoscale rule create --autoscale-name
     *                                  --condition
     *                                  --scale
     *                                  [--cooldown]
     *                                  [--profile-name]
     *                                  [--resource]
     *                                  [--resource-group]
     *                                  [--resource-namespace]
     *                                  [--resource-parent]
     *                                  [--resource-type]
     *                                  [--subscription]
     *                                  [--timegrain]
     * ```
     *
     * @param {string} autoscaleName Name of the autoscale settings.
     * @param {string} condition The condition which triggers the scaling action.
     * @param {string} scale The direction and amount to scale.
     */
    static create(autoscaleName: string, condition: string, scale: string): az_monitor_autoscale_rule_create_command_builder;
    /**
     * Remove autoscale rules from a profile.
     *
     * Syntax:
     * ```
     * az monitor autoscale rule delete --autoscale-name
     *                                  --index
     *                                  --resource-group
     *                                  [--profile-name]
     *                                  [--subscription]
     * ```
     *
     * @param {string} autoscaleName Name of the autoscale settings.
     * @param {string} index Space-separated list of rule indices to remove, or '\*' to clear all rules.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static delete(autoscaleName: string, index: string, resourceGroup: string): az_monitor_autoscale_rule_delete_command_builder;
    /**
     * List autoscale rules for a profile.
     *
     * Syntax:
     * ```
     * az monitor autoscale rule list --autoscale-name
     *                                --resource-group
     *                                [--profile-name]
     *                                [--query-examples]
     *                                [--subscription]
     * ```
     *
     * @param {string} autoscaleName Name of the autoscale settings.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static list(autoscaleName: string, resourceGroup: string): az_monitor_autoscale_rule_list_command_builder;
}
/** Manage autoscale settings. */
export declare class az_monitor_autoscale_settings {
    /**
     * Creates or updates an autoscale setting.
     *
     * Syntax:
     * ```
     * az monitor autoscale-settings create --name
     *                                      --parameters
     *                                      --resource-group
     *                                      [--subscription]
     * ```
     *
     * @param {string} name The autoscale setting name.
     * @param {string} parameters JSON encoded parameters configuration. Use @{file} to load from a file. Use az autoscale-settings get-parameters-template to export json template.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static create(name: string, parameters: string, resourceGroup: string): az_monitor_autoscale_settings_create_command_builder;
    /**
     * Deletes and autoscale setting.
     *
     * Syntax:
     * ```
     * az monitor autoscale-settings delete [--ids]
     *                                      [--name]
     *                                      [--resource-group]
     *                                      [--subscription]
     * ```
     */
    static delete(): az_monitor_autoscale_settings_delete_command_builder;
    /**
     * Scaffold fully formed autoscale-settings' parameters as json template.
     *
     * Syntax:
     * ```
     * az monitor autoscale-settings get-parameters-template [--subscription]
     * ```
     */
    static get_parameters_template(): az_monitor_autoscale_settings_get_parameters_template_command_builder;
    /**
     * Lists the autoscale settings for a resource group.
     *
     * Syntax:
     * ```
     * az monitor autoscale-settings list --resource-group
     *                                    [--query-examples]
     *                                    [--subscription]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static list(resourceGroup: string): az_monitor_autoscale_settings_list_command_builder;
    /**
     * Gets an autoscale setting.
     *
     * Syntax:
     * ```
     * az monitor autoscale-settings show [--ids]
     *                                    [--name]
     *                                    [--query-examples]
     *                                    [--resource-group]
     *                                    [--subscription]
     * ```
     */
    static show(): az_monitor_autoscale_settings_show_command_builder;
    /**
     * Updates an autoscale setting.
     *
     * Syntax:
     * ```
     * az monitor autoscale-settings update --name
     *                                      --resource-group
     *                                      [--add]
     *                                      [--force-string]
     *                                      [--remove]
     *                                      [--set]
     *                                      [--subscription]
     * ```
     *
     * @param {string} name The autoscale setting name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static update(name: string, resourceGroup: string): az_monitor_autoscale_settings_update_command_builder;
}
/** Manage autoscale settings. */
export declare class az_monitor_autoscale {
    /**
     * Create new autoscale settings.
     *
     * Syntax:
     * ```
     * az monitor autoscale create --count
     *                             --resource
     *                             [--action]
     *                             [--disabled {false, true}]
     *                             [--email-administrator {false, true}]
     *                             [--email-coadministrators {false, true}]
     *                             [--location]
     *                             [--max-count]
     *                             [--min-count]
     *                             [--name]
     *                             [--resource-group]
     *                             [--resource-namespace]
     *                             [--resource-parent]
     *                             [--resource-type]
     *                             [--subscription]
     *                             [--tags]
     * ```
     *
     * @param {string} count The numer of instances to use. If used with --min/max-count, the default number of instances to use.
     * @param {string} resource Name or ID of the target resource.
     */
    static create(count: string, resource: string): az_monitor_autoscale_create_command_builder;
    /**
     * Deletes and autoscale setting.
     *
     * Syntax:
     * ```
     * az monitor autoscale delete [--ids]
     *                             [--name]
     *                             [--resource-group]
     *                             [--subscription]
     * ```
     */
    static delete(): az_monitor_autoscale_delete_command_builder;
    /**
     * Lists the autoscale settings for a resource group.
     *
     * Syntax:
     * ```
     * az monitor autoscale list --resource-group
     *                           [--query-examples]
     *                           [--subscription]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static list(resourceGroup: string): az_monitor_autoscale_list_command_builder;
    /**
     * Show autoscale setting details.
     *
     * Syntax:
     * ```
     * az monitor autoscale show [--ids]
     *                           [--name]
     *                           [--query-examples]
     *                           [--resource-group]
     *                           [--subscription]
     * ```
     */
    static show(): az_monitor_autoscale_show_command_builder;
    /**
     * Update autoscale settings.
     *
     * Syntax:
     * ```
     * az monitor autoscale update [--add]
     *                             [--add-action]
     *                             [--count]
     *                             [--email-administrator {false, true}]
     *                             [--email-coadministrators {false, true}]
     *                             [--enabled {false, true}]
     *                             [--force-string]
     *                             [--ids]
     *                             [--max-count]
     *                             [--min-count]
     *                             [--name]
     *                             [--remove]
     *                             [--remove-action]
     *                             [--resource-group]
     *                             [--set]
     *                             [--subscription]
     *                             [--tags]
     * ```
     */
    static update(): az_monitor_autoscale_update_command_builder;
}
/** Retrieve service diagnostic settings categories. */
export declare class az_monitor_diagnostic_settings_categories {
    /**
     * List the diagnostic settings categories for the specified resource.
     *
     * Syntax:
     * ```
     * az monitor diagnostic-settings categories list --resource
     *                                                [--query-examples]
     *                                                [--resource-group]
     *                                                [--resource-namespace]
     *                                                [--resource-parent]
     *                                                [--resource-type]
     *                                                [--subscription]
     * ```
     *
     * @param {string} resource Name or ID of the target resource.
     */
    static list(resource: string): az_monitor_diagnostic_settings_categories_list_command_builder;
    /**
     * Gets the diagnostic settings category for the specified resource.
     *
     * Syntax:
     * ```
     * az monitor diagnostic-settings categories show --name
     *                                                --resource
     *                                                [--query-examples]
     *                                                [--resource-group]
     *                                                [--resource-namespace]
     *                                                [--resource-parent]
     *                                                [--resource-type]
     *                                                [--subscription]
     * ```
     *
     * @param {string} name The name of the diagnostic setting.
     * @param {string} resource Name or ID of the target resource.
     */
    static show(name: string, resource: string): az_monitor_diagnostic_settings_categories_show_command_builder;
}
/** Manage diagnostic settings for subscription. */
export declare class az_monitor_diagnostic_settings_subscription {
    /**
     * Create diagnostic settings for a subscription.
     *
     * Syntax:
     * ```
     * az monitor diagnostic-settings subscription create --location
     *                                                    --logs
     *                                                    --name
     *                                                    [--event-hub-auth-rule]
     *                                                    [--event-hub-name]
     *                                                    [--service-bus-rule]
     *                                                    [--storage-account]
     *                                                    [--subscription]
     *                                                    [--workspace]
     * ```
     *
     * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
     * @param {string} logs JSON encoded list of logs settings. Use '@{file}' to load from a file.
     * @param {string} name The name of the diagnostic setting.
     */
    static create(location: string, logs: string, name: string): az_monitor_diagnostic_settings_subscription_create_command_builder;
    /**
     * Deletes existing subscription diagnostic settings for the specified resource.
     *
     * Syntax:
     * ```
     * az monitor diagnostic-settings subscription delete --name
     *                                                    [--subscription]
     *                                                    [--yes]
     * ```
     *
     * @param {string} name The name of the diagnostic setting.
     */
    static delete(name: string): az_monitor_diagnostic_settings_subscription_delete_command_builder;
    /**
     * Gets the active subscription diagnostic settings list for the specified subscriptionId.
     *
     * Syntax:
     * ```
     * az monitor diagnostic-settings subscription list [--query-examples]
     *                                                  [--subscription]
     * ```
     */
    static list(): az_monitor_diagnostic_settings_subscription_list_command_builder;
    /**
     * Gets the active subscription diagnostic settings for the specified resource.
     *
     * Syntax:
     * ```
     * az monitor diagnostic-settings subscription show --name
     *                                                  [--query-examples]
     *                                                  [--subscription]
     * ```
     *
     * @param {string} name The name of the diagnostic setting.
     */
    static show(name: string): az_monitor_diagnostic_settings_subscription_show_command_builder;
    /**
     * Update diagnostic settings for a subscription.
     *
     * Syntax:
     * ```
     * az monitor diagnostic-settings subscription update --name
     *                                                    [--add]
     *                                                    [--event-hub-auth-rule]
     *                                                    [--event-hub-name]
     *                                                    [--force-string]
     *                                                    [--logs]
     *                                                    [--remove]
     *                                                    [--service-bus-rule]
     *                                                    [--set]
     *                                                    [--storage-account]
     *                                                    [--subscription]
     *                                                    [--workspace]
     * ```
     *
     * @param {string} name The name of the diagnostic setting.
     */
    static update(name: string): az_monitor_diagnostic_settings_subscription_update_command_builder;
}
/** Manage service diagnostic settings. */
export declare class az_monitor_diagnostic_settings {
    /**
     * Create diagnostic settings for the specified resource.
     *
     * Syntax:
     * ```
     * az monitor diagnostic-settings create --name
     *                                       --resource
     *                                       [--event-hub]
     *                                       [--event-hub-rule]
     *                                       [--export-to-resource-specific {false, true}]
     *                                       [--logs]
     *                                       [--metrics]
     *                                       [--resource-group]
     *                                       [--resource-namespace]
     *                                       [--resource-parent]
     *                                       [--resource-type]
     *                                       [--storage-account]
     *                                       [--subscription]
     *                                       [--workspace]
     * ```
     *
     * @param {string} name The name of the diagnostic settings.
     * @param {string} resource Name or ID of the target resource.
     */
    static create(name: string, resource: string): az_monitor_diagnostic_settings_create_command_builder;
    /**
     * Deletes existing diagnostic settings for the specified resource.
     *
     * Syntax:
     * ```
     * az monitor diagnostic-settings delete --name
     *                                       --resource
     *                                       [--resource-group]
     *                                       [--resource-namespace]
     *                                       [--resource-parent]
     *                                       [--resource-type]
     *                                       [--subscription]
     * ```
     *
     * @param {string} name The name of the diagnostic setting.
     * @param {string} resource Name or ID of the target resource.
     */
    static delete(name: string, resource: string): az_monitor_diagnostic_settings_delete_command_builder;
    /**
     * Gets the active diagnostic settings list for the specified resource.
     *
     * Syntax:
     * ```
     * az monitor diagnostic-settings list --resource
     *                                     [--query-examples]
     *                                     [--resource-group]
     *                                     [--resource-namespace]
     *                                     [--resource-parent]
     *                                     [--resource-type]
     *                                     [--subscription]
     * ```
     *
     * @param {string} resource Name or ID of the target resource.
     */
    static list(resource: string): az_monitor_diagnostic_settings_list_command_builder;
    /**
     * Gets the active diagnostic settings for the specified resource.
     *
     * Syntax:
     * ```
     * az monitor diagnostic-settings show --name
     *                                     --resource
     *                                     [--query-examples]
     *                                     [--resource-group]
     *                                     [--resource-namespace]
     *                                     [--resource-parent]
     *                                     [--resource-type]
     *                                     [--subscription]
     * ```
     *
     * @param {string} name The name of the diagnostic setting.
     * @param {string} resource Name or ID of the target resource.
     */
    static show(name: string, resource: string): az_monitor_diagnostic_settings_show_command_builder;
    /**
     * Update diagnostic settings.
     *
     * Syntax:
     * ```
     * az monitor diagnostic-settings update --name
     *                                       --resource
     *                                       [--add]
     *                                       [--force-string]
     *                                       [--remove]
     *                                       [--resource-group]
     *                                       [--resource-namespace]
     *                                       [--resource-parent]
     *                                       [--resource-type]
     *                                       [--set]
     *                                       [--subscription]
     * ```
     *
     * @param {string} name The name of the diagnostic setting.
     * @param {string} resource Name or ID of the target resource.
     */
    static update(name: string, resource: string): az_monitor_diagnostic_settings_update_command_builder;
}
/** Manage Azure log analytics cluster. */
export declare class az_monitor_log_analytics_cluster {
    /**
     * Create a cluster instance.
     *
     * Syntax:
     * ```
     * az monitor log-analytics cluster create --name
     *                                         --resource-group
     *                                         --sku-capacity
     *                                         [--identity-type]
     *                                         [--location]
     *                                         [--no-wait]
     *                                         [--sku-name]
     *                                         [--subscription]
     *                                         [--tags]
     * ```
     *
     * @param {string} name The name of the Log Analytics cluster.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} skuCapacity The capacity of the SKU. It must be in the range of 1000-2000 per day and must be in multiples of 100. If you want to increase the limit, please contact LAIngestionRate@microsoft.com. It can be decreased only after 31 days.
     */
    static create(name: string, resourceGroup: string, skuCapacity: string): az_monitor_log_analytics_cluster_create_command_builder;
    /**
     * Delete a cluster instance.
     *
     * Syntax:
     * ```
     * az monitor log-analytics cluster delete --name
     *                                         --resource-group
     *                                         [--no-wait]
     *                                         [--subscription]
     *                                         [--yes]
     * ```
     *
     * @param {string} name The name of the Log Analytics cluster.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static delete(name: string, resourceGroup: string): az_monitor_log_analytics_cluster_delete_command_builder;
    /**
     * Gets all cluster instances in a resource group or in current subscription.
     *
     * Syntax:
     * ```
     * az monitor log-analytics cluster list [--query-examples]
     *                                       [--resource-group]
     *                                       [--subscription]
     * ```
     */
    static list(): az_monitor_log_analytics_cluster_list_command_builder;
    /**
     * Show the properties of a cluster instance.
     *
     * Syntax:
     * ```
     * az monitor log-analytics cluster show --name
     *                                       --resource-group
     *                                       [--query-examples]
     *                                       [--subscription]
     * ```
     *
     * @param {string} name The name of the Log Analytics cluster.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static show(name: string, resourceGroup: string): az_monitor_log_analytics_cluster_show_command_builder;
    /**
     * Update a cluster instance.
     *
     * Syntax:
     * ```
     * az monitor log-analytics cluster update --name
     *                                         --resource-group
     *                                         [--key-name]
     *                                         [--key-vault-uri]
     *                                         [--key-version]
     *                                         [--sku-capacity]
     *                                         [--subscription]
     *                                         [--tags]
     * ```
     *
     * @param {string} name The name of the Log Analytics cluster.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static update(name: string, resourceGroup: string): az_monitor_log_analytics_cluster_update_command_builder;
    /**
     * Place the CLI in a waiting state until a condition of the cluster is met.
     *
     * Syntax:
     * ```
     * az monitor log-analytics cluster wait --name
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
     * @param {string} name The name of the Log Analytics cluster.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static wait(name: string, resourceGroup: string): az_monitor_log_analytics_cluster_wait_command_builder;
}
/** Manage data export ruls for log analytics workspace. */
export declare class az_monitor_log_analytics_workspace_data_export {
    /**
     * Create a data export rule for a given workspace.
     *
     * Syntax:
     * ```
     * az monitor log-analytics workspace data-export create --destination
     *                                                       --name
     *                                                       --resource-group
     *                                                       --workspace-name
     *                                                       [--all {false, true}]
     *                                                       [--enable {false, true}]
     *                                                       [--subscription]
     *                                                       [--tables]
     * ```
     *
     * @param {string} destination The destination resource ID. It should be a storage account, an event hub namespace or an event hub. If event hub namespace is provided, event hub would be created for each table automatically.
     * @param {string} name Name of the data export rule.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} workspaceName Name of the Log Analytics Workspace.
     */
    static create(destination: string, name: string, resourceGroup: string, workspaceName: string): az_monitor_log_analytics_workspace_data_export_create_command_builder;
    /**
     * Delete a data export rule for a given workspace.
     *
     * Syntax:
     * ```
     * az monitor log-analytics workspace data-export delete --name
     *                                                       --resource-group
     *                                                       --workspace-name
     *                                                       [--subscription]
     *                                                       [--yes]
     * ```
     *
     * @param {string} name Name of the data export rule.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} workspaceName Name of the Log Analytics Workspace.
     */
    static delete(name: string, resourceGroup: string, workspaceName: string): az_monitor_log_analytics_workspace_data_export_delete_command_builder;
    /**
     * List all data export ruleses for a given workspace.
     *
     * Syntax:
     * ```
     * az monitor log-analytics workspace data-export list --resource-group
     *                                                     --workspace-name
     *                                                     [--query-examples]
     *                                                     [--subscription]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} workspaceName Name of the Log Analytics Workspace.
     */
    static list(resourceGroup: string, workspaceName: string): az_monitor_log_analytics_workspace_data_export_list_command_builder;
    /**
     * Show a data export rule for a given workspace.
     *
     * Syntax:
     * ```
     * az monitor log-analytics workspace data-export show --name
     *                                                     --resource-group
     *                                                     --workspace-name
     *                                                     [--query-examples]
     *                                                     [--subscription]
     * ```
     *
     * @param {string} name Name of the data export rule.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} workspaceName Name of the Log Analytics Workspace.
     */
    static show(name: string, resourceGroup: string, workspaceName: string): az_monitor_log_analytics_workspace_data_export_show_command_builder;
    /**
     * Update a data export rule for a given workspace.
     *
     * Syntax:
     * ```
     * az monitor log-analytics workspace data-export update --name
     *                                                       --resource-group
     *                                                       --workspace-name
     *                                                       [--add]
     *                                                       [--all {false, true}]
     *                                                       [--destination]
     *                                                       [--enable {false, true}]
     *                                                       [--force-string]
     *                                                       [--remove]
     *                                                       [--set]
     *                                                       [--subscription]
     *                                                       [--tables]
     * ```
     *
     * @param {string} name Name of the data export rule.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} workspaceName Name of the Log Analytics Workspace.
     */
    static update(name: string, resourceGroup: string, workspaceName: string): az_monitor_log_analytics_workspace_data_export_update_command_builder;
}
/** Manage linked service for log analytics workspace. */
export declare class az_monitor_log_analytics_workspace_linked_service {
    /**
     * Create a linked service.
     *
     * Syntax:
     * ```
     * az monitor log-analytics workspace linked-service create --name
     *                                                          --resource-group
     *                                                          --workspace-name
     *                                                          [--no-wait]
     *                                                          [--resource-id]
     *                                                          [--subscription]
     *                                                          [--write-access-resource-id]
     * ```
     *
     * @param {string} name Name of the linkedServices resource. Supported values: cluster, automation.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} workspaceName Name of the Log Analytics Workspace.
     */
    static create(name: string, resourceGroup: string, workspaceName: string): az_monitor_log_analytics_workspace_linked_service_create_command_builder;
    /**
     * Delete a linked service.
     *
     * Syntax:
     * ```
     * az monitor log-analytics workspace linked-service delete --name
     *                                                          --resource-group
     *                                                          --workspace-name
     *                                                          [--no-wait]
     *                                                          [--subscription]
     *                                                          [--yes]
     * ```
     *
     * @param {string} name Name of the linkedServices resource. Supported values: cluster, automation.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} workspaceName Name of the Log Analytics Workspace.
     */
    static delete(name: string, resourceGroup: string, workspaceName: string): az_monitor_log_analytics_workspace_linked_service_delete_command_builder;
    /**
     * Gets all the linked services in a workspace.
     *
     * Syntax:
     * ```
     * az monitor log-analytics workspace linked-service list --resource-group
     *                                                        --workspace-name
     *                                                        [--query-examples]
     *                                                        [--subscription]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} workspaceName Name of the Log Analytics Workspace.
     */
    static list(resourceGroup: string, workspaceName: string): az_monitor_log_analytics_workspace_linked_service_list_command_builder;
    /**
     * Show the properties of a linked service.
     *
     * Syntax:
     * ```
     * az monitor log-analytics workspace linked-service show --name
     *                                                        --resource-group
     *                                                        --workspace-name
     *                                                        [--query-examples]
     *                                                        [--subscription]
     * ```
     *
     * @param {string} name Name of the linkedServices resource. Supported values: cluster, automation.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} workspaceName Name of the Log Analytics Workspace.
     */
    static show(name: string, resourceGroup: string, workspaceName: string): az_monitor_log_analytics_workspace_linked_service_show_command_builder;
    /**
     * Update a linked service.
     *
     * Syntax:
     * ```
     * az monitor log-analytics workspace linked-service update --name
     *                                                          --resource-group
     *                                                          --workspace-name
     *                                                          [--add]
     *                                                          [--force-string]
     *                                                          [--no-wait]
     *                                                          [--remove]
     *                                                          [--resource-id]
     *                                                          [--set]
     *                                                          [--subscription]
     *                                                          [--write-access-resource-id]
     * ```
     *
     * @param {string} name Name of the linkedServices resource. Supported values: cluster, automation.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} workspaceName Name of the Log Analytics Workspace.
     */
    static update(name: string, resourceGroup: string, workspaceName: string): az_monitor_log_analytics_workspace_linked_service_update_command_builder;
    /**
     * Place the CLI in a waiting state until a condition of the linked service is met.
     *
     * Syntax:
     * ```
     * az monitor log-analytics workspace linked-service wait --name
     *                                                        --resource-group
     *                                                        --workspace-name
     *                                                        [--created]
     *                                                        [--custom]
     *                                                        [--deleted]
     *                                                        [--exists]
     *                                                        [--interval]
     *                                                        [--subscription]
     *                                                        [--timeout]
     *                                                        [--updated]
     * ```
     *
     * @param {string} name Name of the linkedServices resource. Supported values: cluster, automation.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} workspaceName Name of the Log Analytics Workspace.
     */
    static wait(name: string, resourceGroup: string, workspaceName: string): az_monitor_log_analytics_workspace_linked_service_wait_command_builder;
}
/** Manage linked storage account for log analytics workspace. */
export declare class az_monitor_log_analytics_workspace_linked_storage {
    /**
     * Add some linked storage accounts with specific data source type for log analytics workspace.
     *
     * Syntax:
     * ```
     * az monitor log-analytics workspace linked-storage add --resource-group
     *                                                       --storage-accounts
     *                                                       --type {AzureWatson, CustomLogs}
     *                                                       --workspace-name
     *                                                       [--subscription]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} storageAccounts List of Name or ID of Azure Storage Account.
     * @param {'AzureWatson' | 'CustomLogs'} type Data source type for the linked storage account.
     * @param {string} workspaceName Name of the Log Analytics Workspace.
     */
    static add(resourceGroup: string, storageAccounts: string, type: 'AzureWatson' | 'CustomLogs', workspaceName: string): az_monitor_log_analytics_workspace_linked_storage_add_command_builder;
    /**
     * Create some linked storage accounts for log analytics workspace.
     *
     * Syntax:
     * ```
     * az monitor log-analytics workspace linked-storage create --resource-group
     *                                                          --type {AzureWatson, CustomLogs}
     *                                                          --workspace-name
     *                                                          [--storage-accounts]
     *                                                          [--subscription]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {'AzureWatson' | 'CustomLogs'} type Data source type for the linked storage account.
     * @param {string} workspaceName Name of the Log Analytics Workspace.
     */
    static create(resourceGroup: string, type: 'AzureWatson' | 'CustomLogs', workspaceName: string): az_monitor_log_analytics_workspace_linked_storage_create_command_builder;
    /**
     * Delete all linked storage accounts with specific data source type for log analytics workspace.
     *
     * Syntax:
     * ```
     * az monitor log-analytics workspace linked-storage delete --resource-group
     *                                                          --type {AzureWatson, CustomLogs}
     *                                                          --workspace-name
     *                                                          [--subscription]
     *                                                          [--yes]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {'AzureWatson' | 'CustomLogs'} type Data source type for the linked storage account.
     * @param {string} workspaceName Name of the Log Analytics Workspace.
     */
    static delete(resourceGroup: string, type: 'AzureWatson' | 'CustomLogs', workspaceName: string): az_monitor_log_analytics_workspace_linked_storage_delete_command_builder;
    /**
     * List all linked storage accounts for a log analytics workspace.
     *
     * Syntax:
     * ```
     * az monitor log-analytics workspace linked-storage list --resource-group
     *                                                        --workspace-name
     *                                                        [--query-examples]
     *                                                        [--subscription]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} workspaceName Name of the Log Analytics Workspace.
     */
    static list(resourceGroup: string, workspaceName: string): az_monitor_log_analytics_workspace_linked_storage_list_command_builder;
    /**
     * Remove some linked storage accounts with specific data source type for log analytics workspace.
     *
     * Syntax:
     * ```
     * az monitor log-analytics workspace linked-storage remove --resource-group
     *                                                          --storage-accounts
     *                                                          --type {AzureWatson, CustomLogs}
     *                                                          --workspace-name
     *                                                          [--subscription]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} storageAccounts List of Name or ID of Azure Storage Account.
     * @param {'AzureWatson' | 'CustomLogs'} type Data source type for the linked storage account.
     * @param {string} workspaceName Name of the Log Analytics Workspace.
     */
    static remove(resourceGroup: string, storageAccounts: string, type: 'AzureWatson' | 'CustomLogs', workspaceName: string): az_monitor_log_analytics_workspace_linked_storage_remove_command_builder;
    /**
     * List all linked storage accounts with specific data source type for a log analytics workspace.
     *
     * Syntax:
     * ```
     * az monitor log-analytics workspace linked-storage show --resource-group
     *                                                        --type {AzureWatson, CustomLogs}
     *                                                        --workspace-name
     *                                                        [--query-examples]
     *                                                        [--subscription]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {'AzureWatson' | 'CustomLogs'} type Data source type for the linked storage account.
     * @param {string} workspaceName Name of the Log Analytics Workspace.
     */
    static show(resourceGroup: string, type: 'AzureWatson' | 'CustomLogs', workspaceName: string): az_monitor_log_analytics_workspace_linked_storage_show_command_builder;
}
/** Manage intelligent packs for log analytics workspace. */
export declare class az_monitor_log_analytics_workspace_pack {
    /**
     * Disable an intelligence pack for a given workspace.
     *
     * Syntax:
     * ```
     * az monitor log-analytics workspace pack disable --name
     *                                                 --resource-group
     *                                                 --workspace-name
     *                                                 [--subscription]
     * ```
     *
     * @param {string} name The name of the intelligence pack to be disabled.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} workspaceName Name of the Log Analytics Workspace.
     */
    static disable(name: string, resourceGroup: string, workspaceName: string): az_monitor_log_analytics_workspace_pack_disable_command_builder;
    /**
     * Enable an intelligence pack for a given workspace.
     *
     * Syntax:
     * ```
     * az monitor log-analytics workspace pack enable --name
     *                                                --resource-group
     *                                                --workspace-name
     *                                                [--subscription]
     * ```
     *
     * @param {string} name The name of the intelligence pack to be enabled.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} workspaceName Name of the Log Analytics Workspace.
     */
    static enable(name: string, resourceGroup: string, workspaceName: string): az_monitor_log_analytics_workspace_pack_enable_command_builder;
    /**
     * List all the intelligence packs possible and whether they are enabled or disabled for a given workspace.
     *
     * Syntax:
     * ```
     * az monitor log-analytics workspace pack list --resource-group
     *                                              --workspace-name
     *                                              [--query-examples]
     *                                              [--subscription]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} workspaceName Name of the Log Analytics Workspace.
     */
    static list(resourceGroup: string, workspaceName: string): az_monitor_log_analytics_workspace_pack_list_command_builder;
}
/** Manage saved search for log analytics workspace. */
export declare class az_monitor_log_analytics_workspace_saved_search {
    /**
     * Create a saved search for a given workspace.
     *
     * Syntax:
     * ```
     * az monitor log-analytics workspace saved-search create --category
     *                                                        --display-name
     *                                                        --name
     *                                                        --resource-group
     *                                                        --saved-query
     *                                                        --workspace-name
     *                                                        [--fa]
     *                                                        [--fp]
     *                                                        [--subscription]
     *                                                        [--tags]
     * ```
     *
     * @param {string} category The category of the saved search. This helps the user to find a saved search faster.
     * @param {string} displayName Display name of the saved search.
     * @param {string} name Name of the saved search and it's unique in a given workspace.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} savedQuery The query expression for the saved search.
     * @param {string} workspaceName Name of the Log Analytics Workspace.
     */
    static create(category: string, displayName: string, name: string, resourceGroup: string, savedQuery: string, workspaceName: string): az_monitor_log_analytics_workspace_saved_search_create_command_builder;
    /**
     * Delete a saved search for a given workspace.
     *
     * Syntax:
     * ```
     * az monitor log-analytics workspace saved-search delete --name
     *                                                        --resource-group
     *                                                        --workspace-name
     *                                                        [--subscription]
     *                                                        [--yes]
     * ```
     *
     * @param {string} name Name of the saved search and it's unique in a given workspace.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} workspaceName Name of the Log Analytics Workspace.
     */
    static delete(name: string, resourceGroup: string, workspaceName: string): az_monitor_log_analytics_workspace_saved_search_delete_command_builder;
    /**
     * List all saved searches for a given workspace.
     *
     * Syntax:
     * ```
     * az monitor log-analytics workspace saved-search list --resource-group
     *                                                      --workspace-name
     *                                                      [--query-examples]
     *                                                      [--subscription]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} workspaceName Name of the Log Analytics Workspace.
     */
    static list(resourceGroup: string, workspaceName: string): az_monitor_log_analytics_workspace_saved_search_list_command_builder;
    /**
     * Show a saved search for a given workspace.
     *
     * Syntax:
     * ```
     * az monitor log-analytics workspace saved-search show --name
     *                                                      --resource-group
     *                                                      --workspace-name
     *                                                      [--query-examples]
     *                                                      [--subscription]
     * ```
     *
     * @param {string} name Name of the saved search and it's unique in a given workspace.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} workspaceName Name of the Log Analytics Workspace.
     */
    static show(name: string, resourceGroup: string, workspaceName: string): az_monitor_log_analytics_workspace_saved_search_show_command_builder;
    /**
     * Update a saved search for a given workspace.
     *
     * Syntax:
     * ```
     * az monitor log-analytics workspace saved-search update --name
     *                                                        --resource-group
     *                                                        --workspace-name
     *                                                        [--add]
     *                                                        [--category]
     *                                                        [--display-name]
     *                                                        [--fa]
     *                                                        [--force-string]
     *                                                        [--fp]
     *                                                        [--remove]
     *                                                        [--saved-query]
     *                                                        [--set]
     *                                                        [--subscription]
     *                                                        [--tags]
     * ```
     *
     * @param {string} name Name of the saved search and it's unique in a given workspace.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} workspaceName Name of the Log Analytics Workspace.
     */
    static update(name: string, resourceGroup: string, workspaceName: string): az_monitor_log_analytics_workspace_saved_search_update_command_builder;
}
/** Manage tables for log analytics workspace. */
export declare class az_monitor_log_analytics_workspace_table {
    /**
     * List all the tables for the given Log Analytics workspace.
     *
     * Syntax:
     * ```
     * az monitor log-analytics workspace table list --resource-group
     *                                               --workspace-name
     *                                               [--query-examples]
     *                                               [--subscription]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} workspaceName Name of the Log Analytics Workspace.
     */
    static list(resourceGroup: string, workspaceName: string): az_monitor_log_analytics_workspace_table_list_command_builder;
    /**
     * Get a Log Analytics workspace table.
     *
     * Syntax:
     * ```
     * az monitor log-analytics workspace table show --name
     *                                               --resource-group
     *                                               --workspace-name
     *                                               [--query-examples]
     *                                               [--subscription]
     * ```
     *
     * @param {string} name Name of the table.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} workspaceName Name of the Log Analytics Workspace.
     */
    static show(name: string, resourceGroup: string, workspaceName: string): az_monitor_log_analytics_workspace_table_show_command_builder;
    /**
     * Update the properties of a Log Analytics workspace table, currently only support updating retention time.
     *
     * Syntax:
     * ```
     * az monitor log-analytics workspace table update --name
     *                                                 --resource-group
     *                                                 --retention-time
     *                                                 --workspace-name
     *                                                 [--subscription]
     * ```
     *
     * @param {string} name Name of the table.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} retentionTime The data table data retention in days, between 30 and 730. Setting this property to null will default to the workspace retention.
     * @param {string} workspaceName Name of the Log Analytics Workspace.
     */
    static update(name: string, resourceGroup: string, retentionTime: string, workspaceName: string): az_monitor_log_analytics_workspace_table_update_command_builder;
}
/** Manage Azure log analytics workspace. */
export declare class az_monitor_log_analytics_workspace {
    /**
     * Create a workspace instance.
     *
     * Syntax:
     * ```
     * az monitor log-analytics workspace create --resource-group
     *                                           --workspace-name
     *                                           [--capacity-reservation-level]
     *                                           [--ingestion-access {Disabled, Enabled}]
     *                                           [--location]
     *                                           [--no-wait]
     *                                           [--query-access {Disabled, Enabled}]
     *                                           [--quota]
     *                                           [--retention-time]
     *                                           [--sku]
     *                                           [--subscription]
     *                                           [--tags]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} workspaceName Name of the Log Analytics Workspace.
     */
    static create(resourceGroup: string, workspaceName: string): az_monitor_log_analytics_workspace_create_command_builder;
    /**
     * Delete a workspace instance.
     *
     * Syntax:
     * ```
     * az monitor log-analytics workspace delete --resource-group
     *                                           --workspace-name
     *                                           [--force {false, true}]
     *                                           [--subscription]
     *                                           [--yes]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} workspaceName Name of the Log Analytics Workspace.
     */
    static delete(resourceGroup: string, workspaceName: string): az_monitor_log_analytics_workspace_delete_command_builder;
    /**
     * Get the schema for a given workspace.
     *
     * Syntax:
     * ```
     * az monitor log-analytics workspace get-schema --resource-group
     *                                               --workspace-name
     *                                               [--subscription]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} workspaceName Name of the Log Analytics Workspace.
     */
    static get_schema(resourceGroup: string, workspaceName: string): az_monitor_log_analytics_workspace_get_schema_command_builder;
    /**
     * Get the shared keys for a workspace.
     *
     * Syntax:
     * ```
     * az monitor log-analytics workspace get-shared-keys --resource-group
     *                                                    --workspace-name
     *                                                    [--subscription]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} workspaceName Name of the Log Analytics Workspace.
     */
    static get_shared_keys(resourceGroup: string, workspaceName: string): az_monitor_log_analytics_workspace_get_shared_keys_command_builder;
    /**
     * Get a list of workspaces under a resource group or a subscription.
     *
     * Syntax:
     * ```
     * az monitor log-analytics workspace list [--query-examples]
     *                                         [--resource-group]
     *                                         [--subscription]
     * ```
     */
    static list(): az_monitor_log_analytics_workspace_list_command_builder;
    /**
     * Get a list of deleted workspaces that can be recovered in a subscription or a resource group.
     *
     * Syntax:
     * ```
     * az monitor log-analytics workspace list-deleted-workspaces [--resource-group]
     *                                                            [--subscription]
     * ```
     */
    static list_deleted_workspaces(): az_monitor_log_analytics_workspace_list_deleted_workspaces_command_builder;
    /**
     * Get a list of management groups connected to a workspace.
     *
     * Syntax:
     * ```
     * az monitor log-analytics workspace list-management-groups --resource-group
     *                                                           --workspace-name
     *                                                           [--subscription]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} workspaceName Name of the Log Analytics Workspace.
     */
    static list_management_groups(resourceGroup: string, workspaceName: string): az_monitor_log_analytics_workspace_list_management_groups_command_builder;
    /**
     * Get a list of usage metrics for a workspace.
     *
     * Syntax:
     * ```
     * az monitor log-analytics workspace list-usages --resource-group
     *                                                --workspace-name
     *                                                [--subscription]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} workspaceName Name of the Log Analytics Workspace.
     */
    static list_usages(resourceGroup: string, workspaceName: string): az_monitor_log_analytics_workspace_list_usages_command_builder;
    /**
     * Recover a workspace in a soft-delete state within 14 days.
     *
     * Syntax:
     * ```
     * az monitor log-analytics workspace recover --workspace-name
     *                                            [--no-wait]
     *                                            [--resource-group]
     *                                            [--subscription]
     * ```
     *
     * @param {string} workspaceName Name of the Log Analytics Workspace.
     */
    static recover(workspaceName: string): az_monitor_log_analytics_workspace_recover_command_builder;
    /**
     * Show a workspace instance.
     *
     * Syntax:
     * ```
     * az monitor log-analytics workspace show --resource-group
     *                                         --workspace-name
     *                                         [--query-examples]
     *                                         [--subscription]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} workspaceName Name of the Log Analytics Workspace.
     */
    static show(resourceGroup: string, workspaceName: string): az_monitor_log_analytics_workspace_show_command_builder;
    /**
     * Update a workspace instance.
     *
     * Syntax:
     * ```
     * az monitor log-analytics workspace update --resource-group
     *                                           --workspace-name
     *                                           [--add]
     *                                           [--capacity-reservation-level]
     *                                           [--force-string]
     *                                           [--ingestion-access {Disabled, Enabled}]
     *                                           [--query-access {Disabled, Enabled}]
     *                                           [--quota]
     *                                           [--remove]
     *                                           [--retention-time]
     *                                           [--set]
     *                                           [--subscription]
     *                                           [--tags]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} workspaceName Name of the Log Analytics Workspace.
     */
    static update(resourceGroup: string, workspaceName: string): az_monitor_log_analytics_workspace_update_command_builder;
}
/** Manage Azure log analytics. */
export declare class az_monitor_log_analytics {
}
/** Manage log profiles. */
export declare class az_monitor_log_profiles {
    /**
     * Create a log profile.
     *
     * Syntax:
     * ```
     * az monitor log-profiles create --categories
     *                                --days
     *                                --enabled {false, true}
     *                                --location
     *                                --locations
     *                                --name
     *                                [--service-bus-rule-id]
     *                                [--storage-account-id]
     *                                [--subscription]
     *                                [--tags]
     * ```
     *
     * @param {string} categories Space-separated categories of the logs. These categories are created as is convenient to the user. Some values are Write, Delete, and/or Action.
     * @param {string} days The number of days for the retention in days. A value of 0 will retain the events indefinitely.
     * @param {boolean} enabled Whether the retention policy is enabled.
     * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
     * @param {string} locations Space-separated list of regions for which Activity Log events should be stored.
     * @param {string} name The name of the log profile.
     */
    static create(categories: string, days: string, enabled: boolean, location: string, locations: string, name: string): az_monitor_log_profiles_create_command_builder;
    /**
     * Deletes the log profile.
     *
     * Syntax:
     * ```
     * az monitor log-profiles delete --name
     *                                [--subscription]
     * ```
     *
     * @param {string} name The name of the log profile.
     */
    static delete(name: string): az_monitor_log_profiles_delete_command_builder;
    /**
     * List the log profiles.
     *
     * Syntax:
     * ```
     * az monitor log-profiles list [--query-examples]
     *                              [--subscription]
     * ```
     */
    static list(): az_monitor_log_profiles_list_command_builder;
    /**
     * Gets the log profile.
     *
     * Syntax:
     * ```
     * az monitor log-profiles show --name
     *                              [--query-examples]
     *                              [--subscription]
     * ```
     *
     * @param {string} name The name of the log profile.
     */
    static show(name: string): az_monitor_log_profiles_show_command_builder;
    /**
     * Update a log profile.
     *
     * Syntax:
     * ```
     * az monitor log-profiles update --name
     *                                [--add]
     *                                [--force-string]
     *                                [--remove]
     *                                [--set]
     *                                [--subscription]
     * ```
     *
     * @param {string} name The name of the log profile.
     */
    static update(name: string): az_monitor_log_profiles_update_command_builder;
}
/** Manage near-realtime metric alert rules. */
export declare class az_monitor_metrics_alert {
    /**
     * Create a metric-based alert rule.
     *
     * Syntax:
     * ```
     * az monitor metrics alert create --condition
     *                                 --name
     *                                 --resource-group
     *                                 --scopes
     *                                 [--action]
     *                                 [--auto-mitigate {false, true}]
     *                                 [--description]
     *                                 [--disabled {false, true}]
     *                                 [--evaluation-frequency]
     *                                 [--region]
     *                                 [--severity]
     *                                 [--subscription]
     *                                 [--tags]
     *                                 [--target-resource-type]
     *                                 [--window-size]
     * ```
     *
     * @param {string} condition The condition which triggers the rule.
     * @param {string} name Name of the alert rule.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} scopes Space-separated list of scopes the rule applies to. The resources specified in this parameter must be of the same type and exist in the same location.
     */
    static create(condition: string, name: string, resourceGroup: string, scopes: string): az_monitor_metrics_alert_create_command_builder;
    /**
     * Delete a metrics-based alert rule.
     *
     * Syntax:
     * ```
     * az monitor metrics alert delete [--ids]
     *                                 [--name]
     *                                 [--resource-group]
     *                                 [--subscription]
     * ```
     */
    static delete(): az_monitor_metrics_alert_delete_command_builder;
    /**
     * List metric-based alert rules.
     *
     * Syntax:
     * ```
     * az monitor metrics alert list [--query-examples]
     *                               [--resource-group]
     *                               [--subscription]
     * ```
     */
    static list(): az_monitor_metrics_alert_list_command_builder;
    /**
     * Show a metrics-based alert rule.
     *
     * Syntax:
     * ```
     * az monitor metrics alert show [--ids]
     *                               [--name]
     *                               [--query-examples]
     *                               [--resource-group]
     *                               [--subscription]
     * ```
     */
    static show(): az_monitor_metrics_alert_show_command_builder;
    /**
     * Update a metric-based alert rule.
     *
     * Syntax:
     * ```
     * az monitor metrics alert update [--add]
     *                                 [--add-action]
     *                                 [--add-condition]
     *                                 [--auto-mitigate {false, true}]
     *                                 [--description]
     *                                 [--enabled {false, true}]
     *                                 [--evaluation-frequency]
     *                                 [--force-string]
     *                                 [--ids]
     *                                 [--name]
     *                                 [--remove]
     *                                 [--remove-actions]
     *                                 [--remove-conditions]
     *                                 [--resource-group]
     *                                 [--scopes]
     *                                 [--set]
     *                                 [--severity]
     *                                 [--subscription]
     *                                 [--tags]
     *                                 [--window-size]
     * ```
     */
    static update(): az_monitor_metrics_alert_update_command_builder;
}
/** View Azure resource metrics. */
export declare class az_monitor_metrics {
    /**
     * List the metric values for a resource.
     *
     * Syntax:
     * ```
     * az monitor metrics list --resource
     *                         [--aggregation {Average, Count, Maximum, Minimum, Total}]
     *                         [--dimension]
     *                         [--end-time]
     *                         [--filter]
     *                         [--interval]
     *                         [--metadata]
     *                         [--metrics]
     *                         [--namespace]
     *                         [--offset]
     *                         [--orderby]
     *                         [--query-examples]
     *                         [--resource-group]
     *                         [--resource-namespace]
     *                         [--resource-parent]
     *                         [--resource-type]
     *                         [--start-time]
     *                         [--subscription]
     *                         [--top]
     * ```
     *
     * @param {string} resource Name or ID of the target resource.
     */
    static list(resource: string): az_monitor_metrics_list_command_builder;
    /**
     * Lists the metric definitions for the resource.
     *
     * Syntax:
     * ```
     * az monitor metrics list-definitions --resource
     *                                     [--namespace]
     *                                     [--resource-group]
     *                                     [--resource-namespace]
     *                                     [--resource-parent]
     *                                     [--resource-type]
     *                                     [--subscription]
     * ```
     *
     * @param {string} resource Name or ID of the target resource.
     */
    static list_definitions(resource: string): az_monitor_metrics_list_definitions_command_builder;
}
/** Manage private endpoint connection of a private link scope resource. */
export declare class az_monitor_private_link_scope_private_endpoint_connection {
    /**
     * Approve a private endpoint connection of a private link scope resource.
     *
     * Syntax:
     * ```
     * az monitor private-link-scope private-endpoint-connection approve [--description]
     *                                                                   [--id]
     *                                                                   [--name]
     *                                                                   [--resource-group]
     *                                                                   [--scope-name]
     *                                                                   [--subscription]
     * ```
     */
    static approve(): az_monitor_private_link_scope_private_endpoint_connection_approve_command_builder;
    /**
     * Delete a private endpoint connection of a private link scope resource.
     *
     * Syntax:
     * ```
     * az monitor private-link-scope private-endpoint-connection delete [--id]
     *                                                                  [--name]
     *                                                                  [--resource-group]
     *                                                                  [--scope-name]
     *                                                                  [--subscription]
     *                                                                  [--yes]
     * ```
     */
    static delete(): az_monitor_private_link_scope_private_endpoint_connection_delete_command_builder;
    /**
     * List all private endpoint connections of a private link scope resource.
     *
     * Syntax:
     * ```
     * az monitor private-link-scope private-endpoint-connection list --resource-group
     *                                                                --scope-name
     *                                                                [--query-examples]
     *                                                                [--subscription]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} scopeName Name of the Azure Monitor Private Link Scope.
     */
    static list(resourceGroup: string, scopeName: string): az_monitor_private_link_scope_private_endpoint_connection_list_command_builder;
    /**
     * Reject a private endpoint connection of a private link scope resource.
     *
     * Syntax:
     * ```
     * az monitor private-link-scope private-endpoint-connection reject [--description]
     *                                                                  [--id]
     *                                                                  [--name]
     *                                                                  [--resource-group]
     *                                                                  [--scope-name]
     *                                                                  [--subscription]
     * ```
     */
    static reject(): az_monitor_private_link_scope_private_endpoint_connection_reject_command_builder;
    /**
     * Show a private endpoint connection of a private link scope resource.
     *
     * Syntax:
     * ```
     * az monitor private-link-scope private-endpoint-connection show [--id]
     *                                                                [--name]
     *                                                                [--query-examples]
     *                                                                [--resource-group]
     *                                                                [--scope-name]
     *                                                                [--subscription]
     * ```
     */
    static show(): az_monitor_private_link_scope_private_endpoint_connection_show_command_builder;
}
/** Manage private link resource of a private link scope resource. */
export declare class az_monitor_private_link_scope_private_link_resource {
    /**
     * List all private link resources of a private link scope resource.
     *
     * Syntax:
     * ```
     * az monitor private-link-scope private-link-resource list --resource-group
     *                                                          --scope-name
     *                                                          [--query-examples]
     *                                                          [--subscription]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} scopeName Name of the Azure Monitor Private Link Scope.
     */
    static list(resourceGroup: string, scopeName: string): az_monitor_private_link_scope_private_link_resource_list_command_builder;
    /**
     * Show a private link resource of a private link scope resource.
     *
     * Syntax:
     * ```
     * az monitor private-link-scope private-link-resource show --name
     *                                                          --resource-group
     *                                                          --scope-name
     *                                                          [--query-examples]
     *                                                          [--subscription]
     * ```
     *
     * @param {string} name Name of the private link resource.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} scopeName Name of the Azure Monitor Private Link Scope.
     */
    static show(name: string, resourceGroup: string, scopeName: string): az_monitor_private_link_scope_private_link_resource_show_command_builder;
}
/** Manage scoped resource of a private link scope resource. */
export declare class az_monitor_private_link_scope_scoped_resource {
    /**
     * Create a scoped resource for a private link scope resource.
     *
     * Syntax:
     * ```
     * az monitor private-link-scope scoped-resource create --linked-resource
     *                                                      --name
     *                                                      --resource-group
     *                                                      --scope-name
     *                                                      [--subscription]
     * ```
     *
     * @param {string} linkedResource ARM resource ID of the linked resource. It should be one of log analytics workspace or application insights component.
     * @param {string} name Name of the assigned resource.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} scopeName Name of the Azure Monitor Private Link Scope.
     */
    static create(linkedResource: string, name: string, resourceGroup: string, scopeName: string): az_monitor_private_link_scope_scoped_resource_create_command_builder;
    /**
     * Delete a scoped resource of a private link scope resource.
     *
     * Syntax:
     * ```
     * az monitor private-link-scope scoped-resource delete --name
     *                                                      --resource-group
     *                                                      --scope-name
     *                                                      [--subscription]
     *                                                      [--yes]
     * ```
     *
     * @param {string} name Name of the assigned resource.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} scopeName Name of the Azure Monitor Private Link Scope.
     */
    static delete(name: string, resourceGroup: string, scopeName: string): az_monitor_private_link_scope_scoped_resource_delete_command_builder;
    /**
     * List all scoped resource of a private link scope resource.
     *
     * Syntax:
     * ```
     * az monitor private-link-scope scoped-resource list --resource-group
     *                                                    --scope-name
     *                                                    [--query-examples]
     *                                                    [--subscription]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} scopeName Name of the Azure Monitor Private Link Scope.
     */
    static list(resourceGroup: string, scopeName: string): az_monitor_private_link_scope_scoped_resource_list_command_builder;
    /**
     * Show a scoped resource of a private link scope resource.
     *
     * Syntax:
     * ```
     * az monitor private-link-scope scoped-resource show --name
     *                                                    --resource-group
     *                                                    --scope-name
     *                                                    [--query-examples]
     *                                                    [--subscription]
     * ```
     *
     * @param {string} name Name of the assigned resource.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} scopeName Name of the Azure Monitor Private Link Scope.
     */
    static show(name: string, resourceGroup: string, scopeName: string): az_monitor_private_link_scope_scoped_resource_show_command_builder;
}
/** Manage monitor private link scope resource. */
export declare class az_monitor_private_link_scope {
    /**
     * Create a private link scope resource.
     *
     * Syntax:
     * ```
     * az monitor private-link-scope create --name
     *                                      --resource-group
     *                                      [--subscription]
     *                                      [--tags]
     * ```
     *
     * @param {string} name Name of the Azure Monitor Private Link Scope.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static create(name: string, resourceGroup: string): az_monitor_private_link_scope_create_command_builder;
    /**
     * Delete a monitor private link scope resource.
     *
     * Syntax:
     * ```
     * az monitor private-link-scope delete --name
     *                                      --resource-group
     *                                      [--subscription]
     *                                      [--yes]
     * ```
     *
     * @param {string} name Name of the Azure Monitor Private Link Scope.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static delete(name: string, resourceGroup: string): az_monitor_private_link_scope_delete_command_builder;
    /**
     * List all monitor private link scope resource.
     *
     * Syntax:
     * ```
     * az monitor private-link-scope list [--query-examples]
     *                                    [--resource-group]
     *                                    [--subscription]
     * ```
     */
    static list(): az_monitor_private_link_scope_list_command_builder;
    /**
     * Show a monitor private link scope resource.
     *
     * Syntax:
     * ```
     * az monitor private-link-scope show --name
     *                                    --resource-group
     *                                    [--query-examples]
     *                                    [--subscription]
     * ```
     *
     * @param {string} name Name of the Azure Monitor Private Link Scope.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static show(name: string, resourceGroup: string): az_monitor_private_link_scope_show_command_builder;
    /**
     * Update a monitor private link scope resource.
     *
     * Syntax:
     * ```
     * az monitor private-link-scope update --name
     *                                      --resource-group
     *                                      --tags
     *                                      [--subscription]
     * ```
     *
     * @param {string} name Name of the Azure Monitor Private Link Scope.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} tags Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags.
     */
    static update(name: string, resourceGroup: string, tags: string): az_monitor_private_link_scope_update_command_builder;
}
/** Manage the Azure Monitor Service. */
export declare class az_monitor {
    /**
     * Clone metrics alert rules from one resource to another resource.
     *
     * Syntax:
     * ```
     * az monitor clone --source-resource
     *                  --target-resource
     *                  [--always-clone]
     *                  [--subscription]
     *                  [--types {metricsAlert}]
     * ```
     *
     * @param {string} sourceResource Resource ID of the source resource.
     * @param {string} targetResource Resource ID of the target resource.
     */
    static clone(sourceResource: string, targetResource: string): az_monitor_clone_command_builder;
}
/**
 * Create a new action group.
 *
 * Syntax:
 * ```
 * az monitor action-group create --name
 *                                --resource-group
 *                                [--action]
 *                                [--short-name]
 *                                [--subscription]
 *                                [--tags]
 * ```
 *
 * @param {string} name The name of the action group.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_monitor_action_group_create_command_builder extends CommandBuilder<az_monitor_action_group_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** The name of the action group. */
    name(value: string): az_monitor_action_group_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_action_group_create_command_builder;
    /** Add receivers to the action group during the creation. */
    action(value: string): az_monitor_action_group_create_command_builder;
    /** The short name of the action group. */
    shortName(value: string): az_monitor_action_group_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_action_group_create_command_builder;
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_monitor_action_group_create_command_builder;
}
/**
 * Delete an action group.
 *
 * Syntax:
 * ```
 * az monitor action-group delete [--ids]
 *                                [--name]
 *                                [--resource-group]
 *                                [--subscription]
 * ```
 */
declare class az_monitor_action_group_delete_command_builder extends CommandBuilder<az_monitor_action_group_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_monitor_action_group_delete_command_builder;
    /** The name of the action group. */
    name(value: string): az_monitor_action_group_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_action_group_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_action_group_delete_command_builder;
}
/**
 * Enable a receiver in an action group.
 *
 * Syntax:
 * ```
 * az monitor action-group enable-receiver --name
 *                                         [--action-group]
 *                                         [--ids]
 *                                         [--resource-group]
 *                                         [--subscription]
 * ```
 *
 * @param {string} name The name of the receiver to resubscribe.
 */
declare class az_monitor_action_group_enable_receiver_command_builder extends CommandBuilder<az_monitor_action_group_enable_receiver_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** The name of the receiver to resubscribe. */
    name(value: string): az_monitor_action_group_enable_receiver_command_builder;
    /** The name of the action group. */
    actionGroup(value: string): az_monitor_action_group_enable_receiver_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_monitor_action_group_enable_receiver_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_action_group_enable_receiver_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_action_group_enable_receiver_command_builder;
}
/**
 * List action groups under a resource group or the current subscription.
 *
 * Syntax:
 * ```
 * az monitor action-group list [--query-examples]
 *                              [--resource-group]
 *                              [--subscription]
 * ```
 */
declare class az_monitor_action_group_list_command_builder extends CommandBuilder<az_monitor_action_group_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_monitor_action_group_list_command_builder;
    /** Name of the resource group under which the action groups are being listed. If it is omitted, all the action groups under the current subscription are listed. */
    resourceGroup(value: string): az_monitor_action_group_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_action_group_list_command_builder;
}
/**
 * Show the details of an action group.
 *
 * Syntax:
 * ```
 * az monitor action-group show [--ids]
 *                              [--name]
 *                              [--query-examples]
 *                              [--resource-group]
 *                              [--subscription]
 * ```
 */
declare class az_monitor_action_group_show_command_builder extends CommandBuilder<az_monitor_action_group_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_monitor_action_group_show_command_builder;
    /** The name of the action group. */
    name(value: string): az_monitor_action_group_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_monitor_action_group_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_action_group_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_action_group_show_command_builder;
}
/**
 * Update an action group.
 *
 * Syntax:
 * ```
 * az monitor action-group update [--add]
 *                                [--add-action]
 *                                [--force-string]
 *                                [--ids]
 *                                [--name]
 *                                [--remove]
 *                                [--remove-action]
 *                                [--resource-group]
 *                                [--set]
 *                                [--short-name]
 *                                [--subscription]
 *                                [--tags]
 * ```
 */
declare class az_monitor_action_group_update_command_builder extends CommandBuilder<az_monitor_action_group_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_monitor_action_group_update_command_builder;
    /** Add receivers to the action group. */
    addAction(value: string): az_monitor_action_group_update_command_builder;
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_monitor_action_group_update_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_monitor_action_group_update_command_builder;
    /** The name of the action group. */
    name(value: string): az_monitor_action_group_update_command_builder;
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_monitor_action_group_update_command_builder;
    /** Remove receivers from the action group. Accept space-separated list of receiver names. */
    removeAction(value: string): az_monitor_action_group_update_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_action_group_update_command_builder;
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_monitor_action_group_update_command_builder;
    /** Update the group short name of the action group. */
    shortName(value: string): az_monitor_action_group_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_action_group_update_command_builder;
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_monitor_action_group_update_command_builder;
}
/**
 * Add action groups to this activity log alert. It can also be used to overwrite existing webhook properties of particular action groups.
 *
 * Syntax:
 * ```
 * az monitor activity-log alert action-group add --action-group
 *                                                [--ids]
 *                                                [--name]
 *                                                [--reset]
 *                                                [--resource-group]
 *                                                [--strict]
 *                                                [--subscription]
 *                                                [--webhook-properties]
 * ```
 *
 * @param {string} actionGroup The names or the resource ids of the action groups to be added.
 */
declare class az_monitor_activity_log_alert_action_group_add_command_builder extends CommandBuilder<az_monitor_activity_log_alert_action_group_add_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, actionGroup: string);
    /** The names or the resource ids of the action groups to be added. */
    actionGroup(value: string): az_monitor_activity_log_alert_action_group_add_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_monitor_activity_log_alert_action_group_add_command_builder;
    /** Name of the activity log alerts. */
    name(value: string): az_monitor_activity_log_alert_action_group_add_command_builder;
    /** Remove all the existing action groups before add new conditions. */
    reset(value: string): az_monitor_activity_log_alert_action_group_add_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_activity_log_alert_action_group_add_command_builder;
    /** Fails the command if an action group to be added will change existing webhook properties. */
    strict(value: string): az_monitor_activity_log_alert_action_group_add_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_activity_log_alert_action_group_add_command_builder;
    /** Space-separated webhook properties in 'key[=value]' format. These properties will be associated with the action groups added in this command. */
    webhookProperties(value: string): az_monitor_activity_log_alert_action_group_add_command_builder;
}
/**
 * Remove action groups from this activity log alert.
 *
 * Syntax:
 * ```
 * az monitor activity-log alert action-group remove --action-group
 *                                                   [--ids]
 *                                                   [--name]
 *                                                   [--resource-group]
 *                                                   [--subscription]
 * ```
 *
 * @param {string} actionGroup The names or the resource ids of the action groups to be added.
 */
declare class az_monitor_activity_log_alert_action_group_remove_command_builder extends CommandBuilder<az_monitor_activity_log_alert_action_group_remove_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, actionGroup: string);
    /** The names or the resource ids of the action groups to be added. */
    actionGroup(value: string): az_monitor_activity_log_alert_action_group_remove_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_monitor_activity_log_alert_action_group_remove_command_builder;
    /** Name of the activity log alerts. */
    name(value: string): az_monitor_activity_log_alert_action_group_remove_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_activity_log_alert_action_group_remove_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_activity_log_alert_action_group_remove_command_builder;
}
/**
 * Add scopes to this activity log alert.
 *
 * Syntax:
 * ```
 * az monitor activity-log alert scope add --scope
 *                                         [--ids]
 *                                         [--name]
 *                                         [--reset]
 *                                         [--resource-group]
 *                                         [--subscription]
 * ```
 *
 * @param {string} scope List of scopes to add. Each scope could be a resource ID, a resource group ID or a subscription ID.
 */
declare class az_monitor_activity_log_alert_scope_add_command_builder extends CommandBuilder<az_monitor_activity_log_alert_scope_add_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, scope: string);
    /** List of scopes to add. Each scope could be a resource ID, a resource group ID or a subscription ID. */
    scope(value: string): az_monitor_activity_log_alert_scope_add_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_monitor_activity_log_alert_scope_add_command_builder;
    /** Name of the activity log alerts. */
    name(value: string): az_monitor_activity_log_alert_scope_add_command_builder;
    /** Remove all the existing scopes before add new scopes. */
    reset(value: string): az_monitor_activity_log_alert_scope_add_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_activity_log_alert_scope_add_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_activity_log_alert_scope_add_command_builder;
}
/**
 * Removes scopes from this activity log alert.
 *
 * Syntax:
 * ```
 * az monitor activity-log alert scope remove --scope
 *                                            [--ids]
 *                                            [--name]
 *                                            [--resource-group]
 *                                            [--subscription]
 * ```
 *
 * @param {string} scope The scopes to remove.
 */
declare class az_monitor_activity_log_alert_scope_remove_command_builder extends CommandBuilder<az_monitor_activity_log_alert_scope_remove_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, scope: string);
    /** The scopes to remove. */
    scope(value: string): az_monitor_activity_log_alert_scope_remove_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_monitor_activity_log_alert_scope_remove_command_builder;
    /** Name of the activity log alerts. */
    name(value: string): az_monitor_activity_log_alert_scope_remove_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_activity_log_alert_scope_remove_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_activity_log_alert_scope_remove_command_builder;
}
/**
 * Create a default activity log alert.
 *
 * Syntax:
 * ```
 * az monitor activity-log alert create --name
 *                                      --resource-group
 *                                      [--action-group]
 *                                      [--condition]
 *                                      [--description]
 *                                      [--disable]
 *                                      [--scope]
 *                                      [--subscription]
 *                                      [--tags]
 *                                      [--webhook-properties]
 * ```
 *
 * @param {string} name Name of the activity log alerts.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_monitor_activity_log_alert_create_command_builder extends CommandBuilder<az_monitor_activity_log_alert_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** Name of the activity log alerts. */
    name(value: string): az_monitor_activity_log_alert_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_activity_log_alert_create_command_builder;
    /** Add an action group. Accepts space-separated action group identifiers. The identifier can be the action group's name or its resource ID. */
    actionGroup(value: string): az_monitor_activity_log_alert_create_command_builder;
    /** The condition that will cause the alert to activate. The format is FIELD=VALUE[ and FIELD=VALUE...]. */
    condition(value: string): az_monitor_activity_log_alert_create_command_builder;
    /** A description of this activity log alert. */
    description(value: string): az_monitor_activity_log_alert_create_command_builder;
    /** Disable the activity log alert after it is created. */
    disable(value: string): az_monitor_activity_log_alert_create_command_builder;
    /** A list of strings that will be used as prefixes. */
    scope(value: string): az_monitor_activity_log_alert_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_activity_log_alert_create_command_builder;
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_monitor_activity_log_alert_create_command_builder;
    /** Space-separated webhook properties in 'key[=value]' format. These properties are associated with the action groups added in this command. */
    webhookProperties(value: string): az_monitor_activity_log_alert_create_command_builder;
}
/**
 * Delete an activity log alert.
 *
 * Syntax:
 * ```
 * az monitor activity-log alert delete [--ids]
 *                                      [--name]
 *                                      [--resource-group]
 *                                      [--subscription]
 * ```
 */
declare class az_monitor_activity_log_alert_delete_command_builder extends CommandBuilder<az_monitor_activity_log_alert_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_monitor_activity_log_alert_delete_command_builder;
    /** The name of the activity log alert. */
    name(value: string): az_monitor_activity_log_alert_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_activity_log_alert_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_activity_log_alert_delete_command_builder;
}
/**
 * List activity log alerts under a resource group or the current subscription.
 *
 * Syntax:
 * ```
 * az monitor activity-log alert list [--query-examples]
 *                                    [--resource-group]
 *                                    [--subscription]
 * ```
 */
declare class az_monitor_activity_log_alert_list_command_builder extends CommandBuilder<az_monitor_activity_log_alert_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_monitor_activity_log_alert_list_command_builder;
    /** Name of the resource group under which the activity log alerts are being listed. If it is omitted, all the activity log alerts under the current subscription are listed. */
    resourceGroup(value: string): az_monitor_activity_log_alert_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_activity_log_alert_list_command_builder;
}
/**
 * Get an activity log alert.
 *
 * Syntax:
 * ```
 * az monitor activity-log alert show [--ids]
 *                                    [--name]
 *                                    [--query-examples]
 *                                    [--resource-group]
 *                                    [--subscription]
 * ```
 */
declare class az_monitor_activity_log_alert_show_command_builder extends CommandBuilder<az_monitor_activity_log_alert_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_monitor_activity_log_alert_show_command_builder;
    /** The name of the activity log alert. */
    name(value: string): az_monitor_activity_log_alert_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_monitor_activity_log_alert_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_activity_log_alert_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_activity_log_alert_show_command_builder;
}
/**
 * Update the details of this activity log alert.
 *
 * Syntax:
 * ```
 * az monitor activity-log alert update [--add]
 *                                      [--condition]
 *                                      [--description]
 *                                      [--enabled {false, true}]
 *                                      [--force-string]
 *                                      [--ids]
 *                                      [--name]
 *                                      [--remove]
 *                                      [--resource-group]
 *                                      [--set]
 *                                      [--subscription]
 *                                      [--tags]
 * ```
 */
declare class az_monitor_activity_log_alert_update_command_builder extends CommandBuilder<az_monitor_activity_log_alert_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_monitor_activity_log_alert_update_command_builder;
    /** The conditional expression that will cause the alert to activate. The format is FIELD=VALUE[ and FIELD=VALUE...]. */
    condition(value: string): az_monitor_activity_log_alert_update_command_builder;
    /** A description of this activity log alert. */
    description(value: string): az_monitor_activity_log_alert_update_command_builder;
    /** */
    enabled(value: boolean): az_monitor_activity_log_alert_update_command_builder;
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_monitor_activity_log_alert_update_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_monitor_activity_log_alert_update_command_builder;
    /** The name of the activity log alert. */
    name(value: string): az_monitor_activity_log_alert_update_command_builder;
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_monitor_activity_log_alert_update_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_activity_log_alert_update_command_builder;
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_monitor_activity_log_alert_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_activity_log_alert_update_command_builder;
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_monitor_activity_log_alert_update_command_builder;
}
/**
 * List and query activity log events.
 *
 * Syntax:
 * ```
 * az monitor activity-log list [--caller]
 *                              [--correlation-id]
 *                              [--end-time]
 *                              [--filters]
 *                              [--max-events]
 *                              [--namespace]
 *                              [--offset]
 *                              [--query-examples]
 *                              [--resource-group]
 *                              [--resource-id]
 *                              [--select {authorization, caller, category, claims, correlationId, description, eventDataId, eventName, eventTimestamp, httpRequest, id, level, operationId, operationName, properties, resourceGroupName, resourceId, resourceProviderName, resourceType, status, subStatus, submissionTimestamp, subscriptionId, tenantId}]
 *                              [--start-time]
 *                              [--status]
 *                              [--subscription]
 * ```
 */
declare class az_monitor_activity_log_list_command_builder extends CommandBuilder<az_monitor_activity_log_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Caller to query for, such as an e-mail address or service principal ID. */
    caller(value: string): az_monitor_activity_log_list_command_builder;
    /** Correlation ID to query. */
    correlationId(value: string): az_monitor_activity_log_list_command_builder;
    /** End time of the query. Defaults to the current time. Format: date (yyyy-mm-dd) time (hh:mm:ss.xxxxx) timezone (+/-hh:mm). */
    endTime(value: string): az_monitor_activity_log_list_command_builder;
    /** OData filters. Will ignore other filter arguments. */
    filters(value: string): az_monitor_activity_log_list_command_builder;
    /** Maximum number of records to return. */
    maxEvents(value: string): az_monitor_activity_log_list_command_builder;
    /** Resource provider namespace. */
    namespace(value: string): az_monitor_activity_log_list_command_builder;
    /** Time offset of the query range, in ##d##h format. */
    offset(value: string): az_monitor_activity_log_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_monitor_activity_log_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_activity_log_list_command_builder;
    /** ARM ID of a resource. */
    resourceId(value: string): az_monitor_activity_log_list_command_builder;
    /** Space-separated list of properties to return. */
    select(value: 'authorization' | 'caller' | 'category' | 'claims' | 'correlationId' | 'description' | 'eventDataId' | 'eventName' | 'eventTimestamp' | 'httpRequest' | 'id' | 'level' | 'operationId' | 'operationName' | 'properties' | 'resourceGroupName' | 'resourceId' | 'resourceProviderName' | 'resourceType' | 'status' | 'subStatus' | 'submissionTimestamp' | 'subscriptionId' | 'tenantId'): az_monitor_activity_log_list_command_builder;
    /** Start time of the query. Format: date (yyyy-mm-dd) time (hh:mm:ss.xxxxx) timezone (+/-hh:mm). */
    startTime(value: string): az_monitor_activity_log_list_command_builder;
    /** Status to query for (ex: Failed). */
    status(value: string): az_monitor_activity_log_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_activity_log_list_command_builder;
}
/**
 * List the event categories of activity logs.
 *
 * Syntax:
 * ```
 * az monitor activity-log list-categories [--subscription]
 * ```
 */
declare class az_monitor_activity_log_list_categories_command_builder extends CommandBuilder<az_monitor_activity_log_list_categories_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_activity_log_list_categories_command_builder;
}
/**
 * Create a classic metric-based alert rule.
 *
 * Syntax:
 * ```
 * az monitor alert create --condition
 *                         --name
 *                         --target
 *                         [--action]
 *                         [--description]
 *                         [--disabled {false, true}]
 *                         [--email-service-owners {false, true}]
 *                         [--location]
 *                         [--resource-group]
 *                         [--subscription]
 *                         [--tags]
 *                         [--target-namespace]
 *                         [--target-parent]
 *                         [--target-type]
 * ```
 *
 * @param {string} condition The condition which triggers the rule.
 * @param {string} name Name of the alert rule.
 * @param {string} target Name or ID of the target resource.
 */
declare class az_monitor_alert_create_command_builder extends CommandBuilder<az_monitor_alert_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, condition: string, name: string, target: string);
    /** The condition which triggers the rule. */
    condition(value: string): az_monitor_alert_create_command_builder;
    /** Name of the alert rule. */
    name(value: string): az_monitor_alert_create_command_builder;
    /** Name or ID of the target resource. */
    target(value: string): az_monitor_alert_create_command_builder;
    /** Add an action to fire when the alert is triggered. */
    action(value: string): az_monitor_alert_create_command_builder;
    /** Free-text description of the rule. Defaults to the condition expression. */
    description(value: string): az_monitor_alert_create_command_builder;
    /** Create the rule in a disabled state. */
    disabled(value: boolean): az_monitor_alert_create_command_builder;
    /** Email the service owners if an alert is triggered. */
    emailServiceOwners(value: boolean): az_monitor_alert_create_command_builder;
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_monitor_alert_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_alert_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_alert_create_command_builder;
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_monitor_alert_create_command_builder;
    /** Target resource provider namespace. */
    targetNamespace(value: string): az_monitor_alert_create_command_builder;
    /** Target resource parent path, if applicable. */
    targetParent(value: string): az_monitor_alert_create_command_builder;
    /** Target resource type. Can also accept namespace/type format (Ex: 'Microsoft.Compute/virtualMachines'). */
    targetType(value: string): az_monitor_alert_create_command_builder;
}
/**
 * Delete an alert rule.
 *
 * Syntax:
 * ```
 * az monitor alert delete [--ids]
 *                         [--name]
 *                         [--resource-group]
 *                         [--subscription]
 * ```
 */
declare class az_monitor_alert_delete_command_builder extends CommandBuilder<az_monitor_alert_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_monitor_alert_delete_command_builder;
    /** Name of the alert rule. */
    name(value: string): az_monitor_alert_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_alert_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_alert_delete_command_builder;
}
/**
 * List alert rules in a resource group.
 *
 * Syntax:
 * ```
 * az monitor alert list --resource-group
 *                       [--query-examples]
 *                       [--subscription]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_monitor_alert_list_command_builder extends CommandBuilder<az_monitor_alert_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, resourceGroup: string);
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_alert_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_monitor_alert_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_alert_list_command_builder;
}
/**
 * List all incidents for an alert rule.
 *
 * Syntax:
 * ```
 * az monitor alert list-incidents --resource-group
 *                                 --rule-name
 *                                 [--subscription]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} ruleName Name of the alert rule.
 */
declare class az_monitor_alert_list_incidents_command_builder extends CommandBuilder<az_monitor_alert_list_incidents_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, resourceGroup: string, ruleName: string);
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_alert_list_incidents_command_builder;
    /** Name of the alert rule. */
    ruleName(value: string): az_monitor_alert_list_incidents_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_alert_list_incidents_command_builder;
}
/**
 * Show an alert rule.
 *
 * Syntax:
 * ```
 * az monitor alert show [--ids]
 *                       [--name]
 *                       [--query-examples]
 *                       [--resource-group]
 *                       [--subscription]
 * ```
 */
declare class az_monitor_alert_show_command_builder extends CommandBuilder<az_monitor_alert_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_monitor_alert_show_command_builder;
    /** Name of the alert rule. */
    name(value: string): az_monitor_alert_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_monitor_alert_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_alert_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_alert_show_command_builder;
}
/**
 * Get the details of an alert rule incident.
 *
 * Syntax:
 * ```
 * az monitor alert show-incident [--ids]
 *                                [--name]
 *                                [--resource-group]
 *                                [--rule-name]
 *                                [--subscription]
 * ```
 */
declare class az_monitor_alert_show_incident_command_builder extends CommandBuilder<az_monitor_alert_show_incident_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_monitor_alert_show_incident_command_builder;
    /** The name of the incident to retrieve. */
    name(value: string): az_monitor_alert_show_incident_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_alert_show_incident_command_builder;
    /** Name of the alert rule. */
    ruleName(value: string): az_monitor_alert_show_incident_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_alert_show_incident_command_builder;
}
/**
 * Update a classic metric-based alert rule.
 *
 * Syntax:
 * ```
 * az monitor alert update [--add]
 *                         [--add-action]
 *                         [--aggregation {avg, last, max, min, total}]
 *                         [--condition]
 *                         [--description]
 *                         [--email-service-owners {false, true}]
 *                         [--enabled]
 *                         [--force-string]
 *                         [--ids]
 *                         [--metric]
 *                         [--name]
 *                         [--operator {<, <=, >, >=}]
 *                         [--period]
 *                         [--remove]
 *                         [--remove-action]
 *                         [--resource]
 *                         [--resource-group]
 *                         [--resource-namespace]
 *                         [--resource-parent]
 *                         [--resource-type]
 *                         [--set]
 *                         [--subscription]
 *                         [--tags]
 *                         [--threshold]
 * ```
 */
declare class az_monitor_alert_update_command_builder extends CommandBuilder<az_monitor_alert_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_monitor_alert_update_command_builder;
    /** Add an action to fire when the alert is triggered. */
    addAction(value: string): az_monitor_alert_update_command_builder;
    /** Type of aggregation to apply based on --period. */
    aggregation(value: 'avg' | 'last' | 'max' | 'min' | 'total'): az_monitor_alert_update_command_builder;
    /** The condition which triggers the rule. */
    condition(value: string): az_monitor_alert_update_command_builder;
    /** Description of the rule. */
    description(value: string): az_monitor_alert_update_command_builder;
    /** Email the service owners if an alert is triggered. */
    emailServiceOwners(value: boolean): az_monitor_alert_update_command_builder;
    /** */
    enabled(value: string): az_monitor_alert_update_command_builder;
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_monitor_alert_update_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_monitor_alert_update_command_builder;
    /** Name of the metric to base the rule on. */
    metric(value: string): az_monitor_alert_update_command_builder;
    /** Name of the alert rule. */
    name(value: string): az_monitor_alert_update_command_builder;
    /** How to compare the metric against the threshold. */
    operator(value: '<' | '<=' | '>' | '>='): az_monitor_alert_update_command_builder;
    /** Time span over which to apply --aggregation, in nDnHnMnS shorthand or full ISO8601 format. */
    period(value: string): az_monitor_alert_update_command_builder;
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_monitor_alert_update_command_builder;
    /** Remove one or more actions. */
    removeAction(value: string): az_monitor_alert_update_command_builder;
    /** Name or ID of the target resource. */
    resource(value: string): az_monitor_alert_update_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_alert_update_command_builder;
    /** Target resource provider namespace. */
    resourceNamespace(value: string): az_monitor_alert_update_command_builder;
    /** Target resource parent path, if applicable. */
    resourceParent(value: string): az_monitor_alert_update_command_builder;
    /** Target resource type. Can also accept namespace/type format (Ex: 'Microsoft.Compute/virtualMachines'). */
    resourceType(value: string): az_monitor_alert_update_command_builder;
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_monitor_alert_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_alert_update_command_builder;
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_monitor_alert_update_command_builder;
    /** Numeric threshold at which to trigger the alert. */
    threshold(value: string): az_monitor_alert_update_command_builder;
}
/**
 * Create a fixed or recurring autoscale profile.
 *
 * Syntax:
 * ```
 * az monitor autoscale profile create --autoscale-name
 *                                     --count
 *                                     --name
 *                                     --resource-group
 *                                     --timezone
 *                                     [--copy-rules]
 *                                     [--end]
 *                                     [--max-count]
 *                                     [--min-count]
 *                                     [--recurrence]
 *                                     [--start]
 *                                     [--subscription]
 * ```
 *
 * @param {string} autoscaleName Name of the autoscale settings.
 * @param {string} count The numer of instances to use. If used with --min/max-count, the default number of instances to use.
 * @param {string} name Name of the autoscale profile.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} timezone Timezone name.
 */
declare class az_monitor_autoscale_profile_create_command_builder extends CommandBuilder<az_monitor_autoscale_profile_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, autoscaleName: string, count: string, name: string, resourceGroup: string, timezone: string);
    /** Name of the autoscale settings. */
    autoscaleName(value: string): az_monitor_autoscale_profile_create_command_builder;
    /** The numer of instances to use. If used with --min/max-count, the default number of instances to use. */
    count(value: string): az_monitor_autoscale_profile_create_command_builder;
    /** Name of the autoscale profile. */
    name(value: string): az_monitor_autoscale_profile_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_autoscale_profile_create_command_builder;
    /** Timezone name. */
    timezone(value: string): az_monitor_autoscale_profile_create_command_builder;
    /** Name of an existing schedule from which to copy the scaling rules for the new schedule. */
    copyRules(value: string): az_monitor_autoscale_profile_create_command_builder;
    /** When the autoscale profile ends. Format depends on the type of profile. */
    end(value: string): az_monitor_autoscale_profile_create_command_builder;
    /** The maximum number of instances. */
    maxCount(value: string): az_monitor_autoscale_profile_create_command_builder;
    /** The minimum number of instances. */
    minCount(value: string): az_monitor_autoscale_profile_create_command_builder;
    /** When the profile recurs. If omitted, a fixed (non-recurring) profile is created. */
    recurrence(value: string): az_monitor_autoscale_profile_create_command_builder;
    /** When the autoscale profile begins. Format depends on the type of profile. */
    start(value: string): az_monitor_autoscale_profile_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_autoscale_profile_create_command_builder;
}
/**
 * Delete an autoscale profile.
 *
 * Syntax:
 * ```
 * az monitor autoscale profile delete --autoscale-name
 *                                     --name
 *                                     --resource-group
 *                                     [--subscription]
 * ```
 *
 * @param {string} autoscaleName Name of the autoscale settings.
 * @param {string} name Name of the autoscale profile.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_monitor_autoscale_profile_delete_command_builder extends CommandBuilder<az_monitor_autoscale_profile_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, autoscaleName: string, name: string, resourceGroup: string);
    /** Name of the autoscale settings. */
    autoscaleName(value: string): az_monitor_autoscale_profile_delete_command_builder;
    /** Name of the autoscale profile. */
    name(value: string): az_monitor_autoscale_profile_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_autoscale_profile_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_autoscale_profile_delete_command_builder;
}
/**
 * List autoscale profiles.
 *
 * Syntax:
 * ```
 * az monitor autoscale profile list --autoscale-name
 *                                   --resource-group
 *                                   [--query-examples]
 *                                   [--subscription]
 * ```
 *
 * @param {string} autoscaleName Name of the autoscale settings.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_monitor_autoscale_profile_list_command_builder extends CommandBuilder<az_monitor_autoscale_profile_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, autoscaleName: string, resourceGroup: string);
    /** Name of the autoscale settings. */
    autoscaleName(value: string): az_monitor_autoscale_profile_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_autoscale_profile_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_monitor_autoscale_profile_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_autoscale_profile_list_command_builder;
}
/**
 * Look up time zone information.
 *
 * Syntax:
 * ```
 * az monitor autoscale profile list-timezones [--offset]
 *                                             [--search-query]
 *                                             [--subscription]
 * ```
 */
declare class az_monitor_autoscale_profile_list_timezones_command_builder extends CommandBuilder<az_monitor_autoscale_profile_list_timezones_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Filter results based on UTC hour offset. */
    offset(value: string): az_monitor_autoscale_profile_list_timezones_command_builder;
    /** Query text to find. */
    searchQuery(value: string): az_monitor_autoscale_profile_list_timezones_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_autoscale_profile_list_timezones_command_builder;
}
/**
 * Show details of an autoscale profile.
 *
 * Syntax:
 * ```
 * az monitor autoscale profile show --autoscale-name
 *                                   --name
 *                                   --resource-group
 *                                   [--query-examples]
 *                                   [--subscription]
 * ```
 *
 * @param {string} autoscaleName Name of the autoscale settings.
 * @param {string} name Name of the autoscale profile.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_monitor_autoscale_profile_show_command_builder extends CommandBuilder<az_monitor_autoscale_profile_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, autoscaleName: string, name: string, resourceGroup: string);
    /** Name of the autoscale settings. */
    autoscaleName(value: string): az_monitor_autoscale_profile_show_command_builder;
    /** Name of the autoscale profile. */
    name(value: string): az_monitor_autoscale_profile_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_autoscale_profile_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_monitor_autoscale_profile_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_autoscale_profile_show_command_builder;
}
/**
 * Copy autoscale rules from one profile to another.
 *
 * Syntax:
 * ```
 * az monitor autoscale rule copy --autoscale-name
 *                                --dest-schedule
 *                                --index
 *                                --resource-group
 *                                [--source-schedule]
 *                                [--subscription]
 * ```
 *
 * @param {string} autoscaleName Name of the autoscale settings.
 * @param {string} destSchedule Name of the profile to copy rules to.
 * @param {string} index Space-separated list of rule indices to copy, or '\*' to copy all rules.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_monitor_autoscale_rule_copy_command_builder extends CommandBuilder<az_monitor_autoscale_rule_copy_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, autoscaleName: string, destSchedule: string, index: string, resourceGroup: string);
    /** Name of the autoscale settings. */
    autoscaleName(value: string): az_monitor_autoscale_rule_copy_command_builder;
    /** Name of the profile to copy rules to. */
    destSchedule(value: string): az_monitor_autoscale_rule_copy_command_builder;
    /** Space-separated list of rule indices to copy, or '\*' to copy all rules. */
    index(value: string): az_monitor_autoscale_rule_copy_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_autoscale_rule_copy_command_builder;
    /** Name of the profile to copy rules from. */
    sourceSchedule(value: string): az_monitor_autoscale_rule_copy_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_autoscale_rule_copy_command_builder;
}
/**
 * Add a new autoscale rule.
 *
 * Syntax:
 * ```
 * az monitor autoscale rule create --autoscale-name
 *                                  --condition
 *                                  --scale
 *                                  [--cooldown]
 *                                  [--profile-name]
 *                                  [--resource]
 *                                  [--resource-group]
 *                                  [--resource-namespace]
 *                                  [--resource-parent]
 *                                  [--resource-type]
 *                                  [--subscription]
 *                                  [--timegrain]
 * ```
 *
 * @param {string} autoscaleName Name of the autoscale settings.
 * @param {string} condition The condition which triggers the scaling action.
 * @param {string} scale The direction and amount to scale.
 */
declare class az_monitor_autoscale_rule_create_command_builder extends CommandBuilder<az_monitor_autoscale_rule_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, autoscaleName: string, condition: string, scale: string);
    /** Name of the autoscale settings. */
    autoscaleName(value: string): az_monitor_autoscale_rule_create_command_builder;
    /** The condition which triggers the scaling action. */
    condition(value: string): az_monitor_autoscale_rule_create_command_builder;
    /** The direction and amount to scale. */
    scale(value: string): az_monitor_autoscale_rule_create_command_builder;
    /** The number of minutes that must elapse before another scaling event can occur. */
    cooldown(value: string): az_monitor_autoscale_rule_create_command_builder;
    /** Name of the autoscale profile. */
    profileName(value: string): az_monitor_autoscale_rule_create_command_builder;
    /** Name or ID of the target resource. */
    resource(value: string): az_monitor_autoscale_rule_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_autoscale_rule_create_command_builder;
    /** Target resource provider namespace. */
    resourceNamespace(value: string): az_monitor_autoscale_rule_create_command_builder;
    /** Target resource parent path, if applicable. */
    resourceParent(value: string): az_monitor_autoscale_rule_create_command_builder;
    /** Target resource type. Can also accept namespace/type format (Ex: 'Microsoft.Compute/virtualMachines'). */
    resourceType(value: string): az_monitor_autoscale_rule_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_autoscale_rule_create_command_builder;
    /** The way metrics are polled across instances. */
    timegrain(value: string): az_monitor_autoscale_rule_create_command_builder;
}
/**
 * Remove autoscale rules from a profile.
 *
 * Syntax:
 * ```
 * az monitor autoscale rule delete --autoscale-name
 *                                  --index
 *                                  --resource-group
 *                                  [--profile-name]
 *                                  [--subscription]
 * ```
 *
 * @param {string} autoscaleName Name of the autoscale settings.
 * @param {string} index Space-separated list of rule indices to remove, or '\*' to clear all rules.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_monitor_autoscale_rule_delete_command_builder extends CommandBuilder<az_monitor_autoscale_rule_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, autoscaleName: string, index: string, resourceGroup: string);
    /** Name of the autoscale settings. */
    autoscaleName(value: string): az_monitor_autoscale_rule_delete_command_builder;
    /** Space-separated list of rule indices to remove, or '\*' to clear all rules. */
    index(value: string): az_monitor_autoscale_rule_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_autoscale_rule_delete_command_builder;
    /** Name of the autoscale profile. */
    profileName(value: string): az_monitor_autoscale_rule_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_autoscale_rule_delete_command_builder;
}
/**
 * List autoscale rules for a profile.
 *
 * Syntax:
 * ```
 * az monitor autoscale rule list --autoscale-name
 *                                --resource-group
 *                                [--profile-name]
 *                                [--query-examples]
 *                                [--subscription]
 * ```
 *
 * @param {string} autoscaleName Name of the autoscale settings.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_monitor_autoscale_rule_list_command_builder extends CommandBuilder<az_monitor_autoscale_rule_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, autoscaleName: string, resourceGroup: string);
    /** Name of the autoscale settings. */
    autoscaleName(value: string): az_monitor_autoscale_rule_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_autoscale_rule_list_command_builder;
    /** Name of the autoscale profile. */
    profileName(value: string): az_monitor_autoscale_rule_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_monitor_autoscale_rule_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_autoscale_rule_list_command_builder;
}
/**
 * Creates or updates an autoscale setting.
 *
 * Syntax:
 * ```
 * az monitor autoscale-settings create --name
 *                                      --parameters
 *                                      --resource-group
 *                                      [--subscription]
 * ```
 *
 * @param {string} name The autoscale setting name.
 * @param {string} parameters JSON encoded parameters configuration. Use @{file} to load from a file. Use az autoscale-settings get-parameters-template to export json template.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_monitor_autoscale_settings_create_command_builder extends CommandBuilder<az_monitor_autoscale_settings_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, parameters: string, resourceGroup: string);
    /** The autoscale setting name. */
    name(value: string): az_monitor_autoscale_settings_create_command_builder;
    /** JSON encoded parameters configuration. Use @{file} to load from a file. Use az autoscale-settings get-parameters-template to export json template. */
    parameters(value: string): az_monitor_autoscale_settings_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_autoscale_settings_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_autoscale_settings_create_command_builder;
}
/**
 * Deletes and autoscale setting.
 *
 * Syntax:
 * ```
 * az monitor autoscale-settings delete [--ids]
 *                                      [--name]
 *                                      [--resource-group]
 *                                      [--subscription]
 * ```
 */
declare class az_monitor_autoscale_settings_delete_command_builder extends CommandBuilder<az_monitor_autoscale_settings_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_monitor_autoscale_settings_delete_command_builder;
    /** The autoscale setting name. */
    name(value: string): az_monitor_autoscale_settings_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_autoscale_settings_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_autoscale_settings_delete_command_builder;
}
/**
 * Scaffold fully formed autoscale-settings' parameters as json template.
 *
 * Syntax:
 * ```
 * az monitor autoscale-settings get-parameters-template [--subscription]
 * ```
 */
declare class az_monitor_autoscale_settings_get_parameters_template_command_builder extends CommandBuilder<az_monitor_autoscale_settings_get_parameters_template_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_autoscale_settings_get_parameters_template_command_builder;
}
/**
 * Lists the autoscale settings for a resource group.
 *
 * Syntax:
 * ```
 * az monitor autoscale-settings list --resource-group
 *                                    [--query-examples]
 *                                    [--subscription]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_monitor_autoscale_settings_list_command_builder extends CommandBuilder<az_monitor_autoscale_settings_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, resourceGroup: string);
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_autoscale_settings_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_monitor_autoscale_settings_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_autoscale_settings_list_command_builder;
}
/**
 * Gets an autoscale setting.
 *
 * Syntax:
 * ```
 * az monitor autoscale-settings show [--ids]
 *                                    [--name]
 *                                    [--query-examples]
 *                                    [--resource-group]
 *                                    [--subscription]
 * ```
 */
declare class az_monitor_autoscale_settings_show_command_builder extends CommandBuilder<az_monitor_autoscale_settings_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_monitor_autoscale_settings_show_command_builder;
    /** The autoscale setting name. */
    name(value: string): az_monitor_autoscale_settings_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_monitor_autoscale_settings_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_autoscale_settings_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_autoscale_settings_show_command_builder;
}
/**
 * Updates an autoscale setting.
 *
 * Syntax:
 * ```
 * az monitor autoscale-settings update --name
 *                                      --resource-group
 *                                      [--add]
 *                                      [--force-string]
 *                                      [--remove]
 *                                      [--set]
 *                                      [--subscription]
 * ```
 *
 * @param {string} name The autoscale setting name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_monitor_autoscale_settings_update_command_builder extends CommandBuilder<az_monitor_autoscale_settings_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** The autoscale setting name. */
    name(value: string): az_monitor_autoscale_settings_update_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_autoscale_settings_update_command_builder;
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_monitor_autoscale_settings_update_command_builder;
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_monitor_autoscale_settings_update_command_builder;
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_monitor_autoscale_settings_update_command_builder;
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_monitor_autoscale_settings_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_autoscale_settings_update_command_builder;
}
/**
 * Create new autoscale settings.
 *
 * Syntax:
 * ```
 * az monitor autoscale create --count
 *                             --resource
 *                             [--action]
 *                             [--disabled {false, true}]
 *                             [--email-administrator {false, true}]
 *                             [--email-coadministrators {false, true}]
 *                             [--location]
 *                             [--max-count]
 *                             [--min-count]
 *                             [--name]
 *                             [--resource-group]
 *                             [--resource-namespace]
 *                             [--resource-parent]
 *                             [--resource-type]
 *                             [--subscription]
 *                             [--tags]
 * ```
 *
 * @param {string} count The numer of instances to use. If used with --min/max-count, the default number of instances to use.
 * @param {string} resource Name or ID of the target resource.
 */
declare class az_monitor_autoscale_create_command_builder extends CommandBuilder<az_monitor_autoscale_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, count: string, resource: string);
    /** The numer of instances to use. If used with --min/max-count, the default number of instances to use. */
    count(value: string): az_monitor_autoscale_create_command_builder;
    /** Name or ID of the target resource. */
    resource(value: string): az_monitor_autoscale_create_command_builder;
    /** Add an action to fire when a scaling event occurs. */
    action(value: string): az_monitor_autoscale_create_command_builder;
    /** Create the autoscale settings in a disabled state. */
    disabled(value: boolean): az_monitor_autoscale_create_command_builder;
    /** Send email to subscription administrator on scaling. */
    emailAdministrator(value: boolean): az_monitor_autoscale_create_command_builder;
    /** Send email to subscription co-administrators on scaling. */
    emailCoadministrators(value: boolean): az_monitor_autoscale_create_command_builder;
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_monitor_autoscale_create_command_builder;
    /** The maximum number of instances. */
    maxCount(value: string): az_monitor_autoscale_create_command_builder;
    /** The minimum number of instances. */
    minCount(value: string): az_monitor_autoscale_create_command_builder;
    /** Name of the autoscale settings. */
    name(value: string): az_monitor_autoscale_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_autoscale_create_command_builder;
    /** Target resource provider namespace. */
    resourceNamespace(value: string): az_monitor_autoscale_create_command_builder;
    /** Target resource parent path, if applicable. */
    resourceParent(value: string): az_monitor_autoscale_create_command_builder;
    /** Target resource type. Can also accept namespace/type format (Ex: 'Microsoft.Compute/virtualMachines'). */
    resourceType(value: string): az_monitor_autoscale_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_autoscale_create_command_builder;
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_monitor_autoscale_create_command_builder;
}
/**
 * Deletes and autoscale setting.
 *
 * Syntax:
 * ```
 * az monitor autoscale delete [--ids]
 *                             [--name]
 *                             [--resource-group]
 *                             [--subscription]
 * ```
 */
declare class az_monitor_autoscale_delete_command_builder extends CommandBuilder<az_monitor_autoscale_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_monitor_autoscale_delete_command_builder;
    /** Name of the autoscale settings. */
    name(value: string): az_monitor_autoscale_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_autoscale_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_autoscale_delete_command_builder;
}
/**
 * Lists the autoscale settings for a resource group.
 *
 * Syntax:
 * ```
 * az monitor autoscale list --resource-group
 *                           [--query-examples]
 *                           [--subscription]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_monitor_autoscale_list_command_builder extends CommandBuilder<az_monitor_autoscale_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, resourceGroup: string);
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_autoscale_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_monitor_autoscale_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_autoscale_list_command_builder;
}
/**
 * Show autoscale setting details.
 *
 * Syntax:
 * ```
 * az monitor autoscale show [--ids]
 *                           [--name]
 *                           [--query-examples]
 *                           [--resource-group]
 *                           [--subscription]
 * ```
 */
declare class az_monitor_autoscale_show_command_builder extends CommandBuilder<az_monitor_autoscale_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_monitor_autoscale_show_command_builder;
    /** Name of the autoscale settings. */
    name(value: string): az_monitor_autoscale_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_monitor_autoscale_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_autoscale_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_autoscale_show_command_builder;
}
/**
 * Update autoscale settings.
 *
 * Syntax:
 * ```
 * az monitor autoscale update [--add]
 *                             [--add-action]
 *                             [--count]
 *                             [--email-administrator {false, true}]
 *                             [--email-coadministrators {false, true}]
 *                             [--enabled {false, true}]
 *                             [--force-string]
 *                             [--ids]
 *                             [--max-count]
 *                             [--min-count]
 *                             [--name]
 *                             [--remove]
 *                             [--remove-action]
 *                             [--resource-group]
 *                             [--set]
 *                             [--subscription]
 *                             [--tags]
 * ```
 */
declare class az_monitor_autoscale_update_command_builder extends CommandBuilder<az_monitor_autoscale_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_monitor_autoscale_update_command_builder;
    /** Add an action to fire when a scaling event occurs. */
    addAction(value: string): az_monitor_autoscale_update_command_builder;
    /** The numer of instances to use. If used with --min/max-count, the default number of instances to use. */
    count(value: string): az_monitor_autoscale_update_command_builder;
    /** Send email to subscription administrator on scaling. */
    emailAdministrator(value: boolean): az_monitor_autoscale_update_command_builder;
    /** Send email to subscription co-administrators on scaling. */
    emailCoadministrators(value: boolean): az_monitor_autoscale_update_command_builder;
    /** Autoscale settings enabled status. */
    enabled(value: boolean): az_monitor_autoscale_update_command_builder;
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_monitor_autoscale_update_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_monitor_autoscale_update_command_builder;
    /** The maximum number of instances. */
    maxCount(value: string): az_monitor_autoscale_update_command_builder;
    /** The minimum number of instances. */
    minCount(value: string): az_monitor_autoscale_update_command_builder;
    /** Name of the autoscale settings. */
    name(value: string): az_monitor_autoscale_update_command_builder;
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_monitor_autoscale_update_command_builder;
    /** Remove one or more actions. */
    removeAction(value: string): az_monitor_autoscale_update_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_autoscale_update_command_builder;
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_monitor_autoscale_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_autoscale_update_command_builder;
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_monitor_autoscale_update_command_builder;
}
/**
 * List the diagnostic settings categories for the specified resource.
 *
 * Syntax:
 * ```
 * az monitor diagnostic-settings categories list --resource
 *                                                [--query-examples]
 *                                                [--resource-group]
 *                                                [--resource-namespace]
 *                                                [--resource-parent]
 *                                                [--resource-type]
 *                                                [--subscription]
 * ```
 *
 * @param {string} resource Name or ID of the target resource.
 */
declare class az_monitor_diagnostic_settings_categories_list_command_builder extends CommandBuilder<az_monitor_diagnostic_settings_categories_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, resource: string);
    /** Name or ID of the target resource. */
    resource(value: string): az_monitor_diagnostic_settings_categories_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_monitor_diagnostic_settings_categories_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_diagnostic_settings_categories_list_command_builder;
    /** Target resource provider namespace. */
    resourceNamespace(value: string): az_monitor_diagnostic_settings_categories_list_command_builder;
    /** Target resource parent path, if applicable. */
    resourceParent(value: string): az_monitor_diagnostic_settings_categories_list_command_builder;
    /** Target resource type. Can also accept namespace/type format (Ex: 'Microsoft.Compute/virtualMachines'). */
    resourceType(value: string): az_monitor_diagnostic_settings_categories_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_diagnostic_settings_categories_list_command_builder;
}
/**
 * Gets the diagnostic settings category for the specified resource.
 *
 * Syntax:
 * ```
 * az monitor diagnostic-settings categories show --name
 *                                                --resource
 *                                                [--query-examples]
 *                                                [--resource-group]
 *                                                [--resource-namespace]
 *                                                [--resource-parent]
 *                                                [--resource-type]
 *                                                [--subscription]
 * ```
 *
 * @param {string} name The name of the diagnostic setting.
 * @param {string} resource Name or ID of the target resource.
 */
declare class az_monitor_diagnostic_settings_categories_show_command_builder extends CommandBuilder<az_monitor_diagnostic_settings_categories_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resource: string);
    /** The name of the diagnostic setting. */
    name(value: string): az_monitor_diagnostic_settings_categories_show_command_builder;
    /** Name or ID of the target resource. */
    resource(value: string): az_monitor_diagnostic_settings_categories_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_monitor_diagnostic_settings_categories_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_diagnostic_settings_categories_show_command_builder;
    /** Target resource provider namespace. */
    resourceNamespace(value: string): az_monitor_diagnostic_settings_categories_show_command_builder;
    /** Target resource parent path, if applicable. */
    resourceParent(value: string): az_monitor_diagnostic_settings_categories_show_command_builder;
    /** Target resource type. Can also accept namespace/type format (Ex: 'Microsoft.Compute/virtualMachines'). */
    resourceType(value: string): az_monitor_diagnostic_settings_categories_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_diagnostic_settings_categories_show_command_builder;
}
/**
 * Create diagnostic settings for a subscription.
 *
 * Syntax:
 * ```
 * az monitor diagnostic-settings subscription create --location
 *                                                    --logs
 *                                                    --name
 *                                                    [--event-hub-auth-rule]
 *                                                    [--event-hub-name]
 *                                                    [--service-bus-rule]
 *                                                    [--storage-account]
 *                                                    [--subscription]
 *                                                    [--workspace]
 * ```
 *
 * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
 * @param {string} logs JSON encoded list of logs settings. Use '@{file}' to load from a file.
 * @param {string} name The name of the diagnostic setting.
 */
declare class az_monitor_diagnostic_settings_subscription_create_command_builder extends CommandBuilder<az_monitor_diagnostic_settings_subscription_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, location: string, logs: string, name: string);
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_monitor_diagnostic_settings_subscription_create_command_builder;
    /** JSON encoded list of logs settings. Use '@{file}' to load from a file. */
    logs(value: string): az_monitor_diagnostic_settings_subscription_create_command_builder;
    /** The name of the diagnostic setting. */
    name(value: string): az_monitor_diagnostic_settings_subscription_create_command_builder;
    /** The resource Id for the event hub authorization rule. */
    eventHubAuthRule(value: string): az_monitor_diagnostic_settings_subscription_create_command_builder;
    /** The name of the event hub. If none is specified, the default event hub will be selected. */
    eventHubName(value: string): az_monitor_diagnostic_settings_subscription_create_command_builder;
    /** The service bus rule ID of the service bus namespace in which you would like to have Event Hubs created for streaming the Activity Log. The rule ID is of the format '{service bus resource ID}/authorizationrules/{key name}'. */
    serviceBusRule(value: string): az_monitor_diagnostic_settings_subscription_create_command_builder;
    /** The resource id of the storage account to which you would like to send the Activity Log. */
    storageAccount(value: string): az_monitor_diagnostic_settings_subscription_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_diagnostic_settings_subscription_create_command_builder;
    /** The resource id of the log analytics workspace. */
    workspace(value: string): az_monitor_diagnostic_settings_subscription_create_command_builder;
}
/**
 * Deletes existing subscription diagnostic settings for the specified resource.
 *
 * Syntax:
 * ```
 * az monitor diagnostic-settings subscription delete --name
 *                                                    [--subscription]
 *                                                    [--yes]
 * ```
 *
 * @param {string} name The name of the diagnostic setting.
 */
declare class az_monitor_diagnostic_settings_subscription_delete_command_builder extends CommandBuilder<az_monitor_diagnostic_settings_subscription_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** The name of the diagnostic setting. */
    name(value: string): az_monitor_diagnostic_settings_subscription_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_diagnostic_settings_subscription_delete_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_monitor_diagnostic_settings_subscription_delete_command_builder;
}
/**
 * Gets the active subscription diagnostic settings list for the specified subscriptionId.
 *
 * Syntax:
 * ```
 * az monitor diagnostic-settings subscription list [--query-examples]
 *                                                  [--subscription]
 * ```
 */
declare class az_monitor_diagnostic_settings_subscription_list_command_builder extends CommandBuilder<az_monitor_diagnostic_settings_subscription_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_monitor_diagnostic_settings_subscription_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_diagnostic_settings_subscription_list_command_builder;
}
/**
 * Gets the active subscription diagnostic settings for the specified resource.
 *
 * Syntax:
 * ```
 * az monitor diagnostic-settings subscription show --name
 *                                                  [--query-examples]
 *                                                  [--subscription]
 * ```
 *
 * @param {string} name The name of the diagnostic setting.
 */
declare class az_monitor_diagnostic_settings_subscription_show_command_builder extends CommandBuilder<az_monitor_diagnostic_settings_subscription_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** The name of the diagnostic setting. */
    name(value: string): az_monitor_diagnostic_settings_subscription_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_monitor_diagnostic_settings_subscription_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_diagnostic_settings_subscription_show_command_builder;
}
/**
 * Update diagnostic settings for a subscription.
 *
 * Syntax:
 * ```
 * az monitor diagnostic-settings subscription update --name
 *                                                    [--add]
 *                                                    [--event-hub-auth-rule]
 *                                                    [--event-hub-name]
 *                                                    [--force-string]
 *                                                    [--logs]
 *                                                    [--remove]
 *                                                    [--service-bus-rule]
 *                                                    [--set]
 *                                                    [--storage-account]
 *                                                    [--subscription]
 *                                                    [--workspace]
 * ```
 *
 * @param {string} name The name of the diagnostic setting.
 */
declare class az_monitor_diagnostic_settings_subscription_update_command_builder extends CommandBuilder<az_monitor_diagnostic_settings_subscription_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** The name of the diagnostic setting. */
    name(value: string): az_monitor_diagnostic_settings_subscription_update_command_builder;
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_monitor_diagnostic_settings_subscription_update_command_builder;
    /** The resource Id for the event hub authorization rule. */
    eventHubAuthRule(value: string): az_monitor_diagnostic_settings_subscription_update_command_builder;
    /** The name of the event hub. If none is specified, the default event hub will be selected. */
    eventHubName(value: string): az_monitor_diagnostic_settings_subscription_update_command_builder;
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_monitor_diagnostic_settings_subscription_update_command_builder;
    /** JSON encoded list of logs settings. Use '@{file}' to load from a file. */
    logs(value: string): az_monitor_diagnostic_settings_subscription_update_command_builder;
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_monitor_diagnostic_settings_subscription_update_command_builder;
    /** The service bus rule ID of the service bus namespace in which you would like to have Event Hubs created for streaming the Activity Log. The rule ID is of the format '{service bus resource ID}/authorizationrules/{key name}'. */
    serviceBusRule(value: string): az_monitor_diagnostic_settings_subscription_update_command_builder;
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_monitor_diagnostic_settings_subscription_update_command_builder;
    /** The resource id of the storage account to which you would like to send the Activity Log. */
    storageAccount(value: string): az_monitor_diagnostic_settings_subscription_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_diagnostic_settings_subscription_update_command_builder;
    /** The resource id of the log analytics workspace. */
    workspace(value: string): az_monitor_diagnostic_settings_subscription_update_command_builder;
}
/**
 * Create diagnostic settings for the specified resource.
 *
 * Syntax:
 * ```
 * az monitor diagnostic-settings create --name
 *                                       --resource
 *                                       [--event-hub]
 *                                       [--event-hub-rule]
 *                                       [--export-to-resource-specific {false, true}]
 *                                       [--logs]
 *                                       [--metrics]
 *                                       [--resource-group]
 *                                       [--resource-namespace]
 *                                       [--resource-parent]
 *                                       [--resource-type]
 *                                       [--storage-account]
 *                                       [--subscription]
 *                                       [--workspace]
 * ```
 *
 * @param {string} name The name of the diagnostic settings.
 * @param {string} resource Name or ID of the target resource.
 */
declare class az_monitor_diagnostic_settings_create_command_builder extends CommandBuilder<az_monitor_diagnostic_settings_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resource: string);
    /** The name of the diagnostic settings. */
    name(value: string): az_monitor_diagnostic_settings_create_command_builder;
    /** Name or ID of the target resource. */
    resource(value: string): az_monitor_diagnostic_settings_create_command_builder;
    /** Name or ID an event hub. If none is specified, the default event hub will be selected. */
    eventHub(value: string): az_monitor_diagnostic_settings_create_command_builder;
    /** Name or ID of the event hub authorization rule. */
    eventHubRule(value: string): az_monitor_diagnostic_settings_create_command_builder;
    /** Indicate that the export to LA must be done to a resource specific table, a.k.a. dedicated or fixed schema table, as opposed to the default dynamic schema table called AzureDiagnostics. This argument is effective only when the argument --workspace is also given. */
    exportToResourceSpecific(value: boolean): az_monitor_diagnostic_settings_create_command_builder;
    /** JSON encoded list of logs settings. Use '@{file}' to load from a file. */
    logs(value: string): az_monitor_diagnostic_settings_create_command_builder;
    /** JSON encoded list of metric settings. Use '@{file}' to load from a file. */
    metrics(value: string): az_monitor_diagnostic_settings_create_command_builder;
    /** Name of the resource group for the Log Analytics and Storage Account when the name of the service instead of a full resource ID is given. */
    resourceGroup(value: string): az_monitor_diagnostic_settings_create_command_builder;
    /** Target resource provider namespace. */
    resourceNamespace(value: string): az_monitor_diagnostic_settings_create_command_builder;
    /** Target resource parent path, if applicable. */
    resourceParent(value: string): az_monitor_diagnostic_settings_create_command_builder;
    /** Target resource type. Can also accept namespace/type format (Ex: 'Microsoft.Compute/virtualMachines'). */
    resourceType(value: string): az_monitor_diagnostic_settings_create_command_builder;
    /** Name or ID of the storage account to send diagnostic logs to. */
    storageAccount(value: string): az_monitor_diagnostic_settings_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_diagnostic_settings_create_command_builder;
    /** Name or ID of the Log Analytics workspace to send diagnostic logs to. */
    workspace(value: string): az_monitor_diagnostic_settings_create_command_builder;
}
/**
 * Deletes existing diagnostic settings for the specified resource.
 *
 * Syntax:
 * ```
 * az monitor diagnostic-settings delete --name
 *                                       --resource
 *                                       [--resource-group]
 *                                       [--resource-namespace]
 *                                       [--resource-parent]
 *                                       [--resource-type]
 *                                       [--subscription]
 * ```
 *
 * @param {string} name The name of the diagnostic setting.
 * @param {string} resource Name or ID of the target resource.
 */
declare class az_monitor_diagnostic_settings_delete_command_builder extends CommandBuilder<az_monitor_diagnostic_settings_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resource: string);
    /** The name of the diagnostic setting. */
    name(value: string): az_monitor_diagnostic_settings_delete_command_builder;
    /** Name or ID of the target resource. */
    resource(value: string): az_monitor_diagnostic_settings_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_diagnostic_settings_delete_command_builder;
    /** Target resource provider namespace. */
    resourceNamespace(value: string): az_monitor_diagnostic_settings_delete_command_builder;
    /** Target resource parent path, if applicable. */
    resourceParent(value: string): az_monitor_diagnostic_settings_delete_command_builder;
    /** Target resource type. Can also accept namespace/type format (Ex: 'Microsoft.Compute/virtualMachines'). */
    resourceType(value: string): az_monitor_diagnostic_settings_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_diagnostic_settings_delete_command_builder;
}
/**
 * Gets the active diagnostic settings list for the specified resource.
 *
 * Syntax:
 * ```
 * az monitor diagnostic-settings list --resource
 *                                     [--query-examples]
 *                                     [--resource-group]
 *                                     [--resource-namespace]
 *                                     [--resource-parent]
 *                                     [--resource-type]
 *                                     [--subscription]
 * ```
 *
 * @param {string} resource Name or ID of the target resource.
 */
declare class az_monitor_diagnostic_settings_list_command_builder extends CommandBuilder<az_monitor_diagnostic_settings_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, resource: string);
    /** Name or ID of the target resource. */
    resource(value: string): az_monitor_diagnostic_settings_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_monitor_diagnostic_settings_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_diagnostic_settings_list_command_builder;
    /** Target resource provider namespace. */
    resourceNamespace(value: string): az_monitor_diagnostic_settings_list_command_builder;
    /** Target resource parent path, if applicable. */
    resourceParent(value: string): az_monitor_diagnostic_settings_list_command_builder;
    /** Target resource type. Can also accept namespace/type format (Ex: 'Microsoft.Compute/virtualMachines'). */
    resourceType(value: string): az_monitor_diagnostic_settings_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_diagnostic_settings_list_command_builder;
}
/**
 * Gets the active diagnostic settings for the specified resource.
 *
 * Syntax:
 * ```
 * az monitor diagnostic-settings show --name
 *                                     --resource
 *                                     [--query-examples]
 *                                     [--resource-group]
 *                                     [--resource-namespace]
 *                                     [--resource-parent]
 *                                     [--resource-type]
 *                                     [--subscription]
 * ```
 *
 * @param {string} name The name of the diagnostic setting.
 * @param {string} resource Name or ID of the target resource.
 */
declare class az_monitor_diagnostic_settings_show_command_builder extends CommandBuilder<az_monitor_diagnostic_settings_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resource: string);
    /** The name of the diagnostic setting. */
    name(value: string): az_monitor_diagnostic_settings_show_command_builder;
    /** Name or ID of the target resource. */
    resource(value: string): az_monitor_diagnostic_settings_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_monitor_diagnostic_settings_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_diagnostic_settings_show_command_builder;
    /** Target resource provider namespace. */
    resourceNamespace(value: string): az_monitor_diagnostic_settings_show_command_builder;
    /** Target resource parent path, if applicable. */
    resourceParent(value: string): az_monitor_diagnostic_settings_show_command_builder;
    /** Target resource type. Can also accept namespace/type format (Ex: 'Microsoft.Compute/virtualMachines'). */
    resourceType(value: string): az_monitor_diagnostic_settings_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_diagnostic_settings_show_command_builder;
}
/**
 * Update diagnostic settings.
 *
 * Syntax:
 * ```
 * az monitor diagnostic-settings update --name
 *                                       --resource
 *                                       [--add]
 *                                       [--force-string]
 *                                       [--remove]
 *                                       [--resource-group]
 *                                       [--resource-namespace]
 *                                       [--resource-parent]
 *                                       [--resource-type]
 *                                       [--set]
 *                                       [--subscription]
 * ```
 *
 * @param {string} name The name of the diagnostic setting.
 * @param {string} resource Name or ID of the target resource.
 */
declare class az_monitor_diagnostic_settings_update_command_builder extends CommandBuilder<az_monitor_diagnostic_settings_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resource: string);
    /** The name of the diagnostic setting. */
    name(value: string): az_monitor_diagnostic_settings_update_command_builder;
    /** Name or ID of the target resource. */
    resource(value: string): az_monitor_diagnostic_settings_update_command_builder;
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_monitor_diagnostic_settings_update_command_builder;
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_monitor_diagnostic_settings_update_command_builder;
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_monitor_diagnostic_settings_update_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_diagnostic_settings_update_command_builder;
    /** Target resource provider namespace. */
    resourceNamespace(value: string): az_monitor_diagnostic_settings_update_command_builder;
    /** Target resource parent path, if applicable. */
    resourceParent(value: string): az_monitor_diagnostic_settings_update_command_builder;
    /** Target resource type. Can also accept namespace/type format (Ex: 'Microsoft.Compute/virtualMachines'). */
    resourceType(value: string): az_monitor_diagnostic_settings_update_command_builder;
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_monitor_diagnostic_settings_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_diagnostic_settings_update_command_builder;
}
/**
 * Create a cluster instance.
 *
 * Syntax:
 * ```
 * az monitor log-analytics cluster create --name
 *                                         --resource-group
 *                                         --sku-capacity
 *                                         [--identity-type]
 *                                         [--location]
 *                                         [--no-wait]
 *                                         [--sku-name]
 *                                         [--subscription]
 *                                         [--tags]
 * ```
 *
 * @param {string} name The name of the Log Analytics cluster.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} skuCapacity The capacity of the SKU. It must be in the range of 1000-2000 per day and must be in multiples of 100. If you want to increase the limit, please contact LAIngestionRate@microsoft.com. It can be decreased only after 31 days.
 */
declare class az_monitor_log_analytics_cluster_create_command_builder extends CommandBuilder<az_monitor_log_analytics_cluster_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string, skuCapacity: string);
    /** The name of the Log Analytics cluster. */
    name(value: string): az_monitor_log_analytics_cluster_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_log_analytics_cluster_create_command_builder;
    /** The capacity of the SKU. It must be in the range of 1000-2000 per day and must be in multiples of 100. If you want to increase the limit, please contact LAIngestionRate@microsoft.com. It can be decreased only after 31 days. */
    skuCapacity(value: string): az_monitor_log_analytics_cluster_create_command_builder;
    /** The identity type. Supported values: SystemAssigned. */
    identityType(value: string): az_monitor_log_analytics_cluster_create_command_builder;
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_monitor_log_analytics_cluster_create_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_monitor_log_analytics_cluster_create_command_builder;
    /** The name of the SKU. Currently only support 'CapacityReservation'. */
    skuName(value: string): az_monitor_log_analytics_cluster_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_log_analytics_cluster_create_command_builder;
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_monitor_log_analytics_cluster_create_command_builder;
}
/**
 * Delete a cluster instance.
 *
 * Syntax:
 * ```
 * az monitor log-analytics cluster delete --name
 *                                         --resource-group
 *                                         [--no-wait]
 *                                         [--subscription]
 *                                         [--yes]
 * ```
 *
 * @param {string} name The name of the Log Analytics cluster.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_monitor_log_analytics_cluster_delete_command_builder extends CommandBuilder<az_monitor_log_analytics_cluster_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** The name of the Log Analytics cluster. */
    name(value: string): az_monitor_log_analytics_cluster_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_log_analytics_cluster_delete_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_monitor_log_analytics_cluster_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_log_analytics_cluster_delete_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_monitor_log_analytics_cluster_delete_command_builder;
}
/**
 * Gets all cluster instances in a resource group or in current subscription.
 *
 * Syntax:
 * ```
 * az monitor log-analytics cluster list [--query-examples]
 *                                       [--resource-group]
 *                                       [--subscription]
 * ```
 */
declare class az_monitor_log_analytics_cluster_list_command_builder extends CommandBuilder<az_monitor_log_analytics_cluster_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_monitor_log_analytics_cluster_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_log_analytics_cluster_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_log_analytics_cluster_list_command_builder;
}
/**
 * Show the properties of a cluster instance.
 *
 * Syntax:
 * ```
 * az monitor log-analytics cluster show --name
 *                                       --resource-group
 *                                       [--query-examples]
 *                                       [--subscription]
 * ```
 *
 * @param {string} name The name of the Log Analytics cluster.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_monitor_log_analytics_cluster_show_command_builder extends CommandBuilder<az_monitor_log_analytics_cluster_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** The name of the Log Analytics cluster. */
    name(value: string): az_monitor_log_analytics_cluster_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_log_analytics_cluster_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_monitor_log_analytics_cluster_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_log_analytics_cluster_show_command_builder;
}
/**
 * Update a cluster instance.
 *
 * Syntax:
 * ```
 * az monitor log-analytics cluster update --name
 *                                         --resource-group
 *                                         [--key-name]
 *                                         [--key-vault-uri]
 *                                         [--key-version]
 *                                         [--sku-capacity]
 *                                         [--subscription]
 *                                         [--tags]
 * ```
 *
 * @param {string} name The name of the Log Analytics cluster.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_monitor_log_analytics_cluster_update_command_builder extends CommandBuilder<az_monitor_log_analytics_cluster_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** The name of the Log Analytics cluster. */
    name(value: string): az_monitor_log_analytics_cluster_update_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_log_analytics_cluster_update_command_builder;
    /** The name of the key associated with the Log Analytics cluster. */
    keyName(value: string): az_monitor_log_analytics_cluster_update_command_builder;
    /** The Key Vault uri which holds the key associated with the Log Analytics cluster. */
    keyVaultUri(value: string): az_monitor_log_analytics_cluster_update_command_builder;
    /** The version of the key associated with the Log Analytics cluster. */
    keyVersion(value: string): az_monitor_log_analytics_cluster_update_command_builder;
    /** The capacity of the SKU. It must be in the range of 1000-2000 per day and must be in multiples of 100. If you want to increase the limit, please contact LAIngestionRate@microsoft.com. It can be decreased only after 31 days. */
    skuCapacity(value: string): az_monitor_log_analytics_cluster_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_log_analytics_cluster_update_command_builder;
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_monitor_log_analytics_cluster_update_command_builder;
}
/**
 * Place the CLI in a waiting state until a condition of the cluster is met.
 *
 * Syntax:
 * ```
 * az monitor log-analytics cluster wait --name
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
 * @param {string} name The name of the Log Analytics cluster.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_monitor_log_analytics_cluster_wait_command_builder extends CommandBuilder<az_monitor_log_analytics_cluster_wait_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** The name of the Log Analytics cluster. */
    name(value: string): az_monitor_log_analytics_cluster_wait_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_log_analytics_cluster_wait_command_builder;
    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    created(value: string): az_monitor_log_analytics_cluster_wait_command_builder;
    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    custom(value: string): az_monitor_log_analytics_cluster_wait_command_builder;
    /** Wait until deleted. */
    deleted(value: string): az_monitor_log_analytics_cluster_wait_command_builder;
    /** Wait until the resource exists. */
    exists(value: string): az_monitor_log_analytics_cluster_wait_command_builder;
    /** Polling interval in seconds. */
    interval(value: string): az_monitor_log_analytics_cluster_wait_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_log_analytics_cluster_wait_command_builder;
    /** Maximum wait in seconds. */
    timeout(value: string): az_monitor_log_analytics_cluster_wait_command_builder;
    /** Wait until updated with provisioningState at 'Succeeded'. */
    updated(value: string): az_monitor_log_analytics_cluster_wait_command_builder;
}
/**
 * Create a data export rule for a given workspace.
 *
 * Syntax:
 * ```
 * az monitor log-analytics workspace data-export create --destination
 *                                                       --name
 *                                                       --resource-group
 *                                                       --workspace-name
 *                                                       [--all {false, true}]
 *                                                       [--enable {false, true}]
 *                                                       [--subscription]
 *                                                       [--tables]
 * ```
 *
 * @param {string} destination The destination resource ID. It should be a storage account, an event hub namespace or an event hub. If event hub namespace is provided, event hub would be created for each table automatically.
 * @param {string} name Name of the data export rule.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} workspaceName Name of the Log Analytics Workspace.
 */
declare class az_monitor_log_analytics_workspace_data_export_create_command_builder extends CommandBuilder<az_monitor_log_analytics_workspace_data_export_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, destination: string, name: string, resourceGroup: string, workspaceName: string);
    /** The destination resource ID. It should be a storage account, an event hub namespace or an event hub. If event hub namespace is provided, event hub would be created for each table automatically. */
    destination(value: string): az_monitor_log_analytics_workspace_data_export_create_command_builder;
    /** Name of the data export rule. */
    name(value: string): az_monitor_log_analytics_workspace_data_export_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_log_analytics_workspace_data_export_create_command_builder;
    /** Name of the Log Analytics Workspace. */
    workspaceName(value: string): az_monitor_log_analytics_workspace_data_export_create_command_builder;
    /** All workspace's tables are exported when this is enabled. */
    exportAllTables(value: boolean): az_monitor_log_analytics_workspace_data_export_create_command_builder;
    /** Enable this data export rule. */
    enable(value: boolean): az_monitor_log_analytics_workspace_data_export_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_log_analytics_workspace_data_export_create_command_builder;
    /** An array of tables to export. if --export-all-tables is true, this argument should not be provided. */
    tables(value: string): az_monitor_log_analytics_workspace_data_export_create_command_builder;
}
/**
 * Delete a data export rule for a given workspace.
 *
 * Syntax:
 * ```
 * az monitor log-analytics workspace data-export delete --name
 *                                                       --resource-group
 *                                                       --workspace-name
 *                                                       [--subscription]
 *                                                       [--yes]
 * ```
 *
 * @param {string} name Name of the data export rule.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} workspaceName Name of the Log Analytics Workspace.
 */
declare class az_monitor_log_analytics_workspace_data_export_delete_command_builder extends CommandBuilder<az_monitor_log_analytics_workspace_data_export_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string, workspaceName: string);
    /** Name of the data export rule. */
    name(value: string): az_monitor_log_analytics_workspace_data_export_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_log_analytics_workspace_data_export_delete_command_builder;
    /** Name of the Log Analytics Workspace. */
    workspaceName(value: string): az_monitor_log_analytics_workspace_data_export_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_log_analytics_workspace_data_export_delete_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_monitor_log_analytics_workspace_data_export_delete_command_builder;
}
/**
 * List all data export ruleses for a given workspace.
 *
 * Syntax:
 * ```
 * az monitor log-analytics workspace data-export list --resource-group
 *                                                     --workspace-name
 *                                                     [--query-examples]
 *                                                     [--subscription]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} workspaceName Name of the Log Analytics Workspace.
 */
declare class az_monitor_log_analytics_workspace_data_export_list_command_builder extends CommandBuilder<az_monitor_log_analytics_workspace_data_export_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, resourceGroup: string, workspaceName: string);
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_log_analytics_workspace_data_export_list_command_builder;
    /** Name of the Log Analytics Workspace. */
    workspaceName(value: string): az_monitor_log_analytics_workspace_data_export_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_monitor_log_analytics_workspace_data_export_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_log_analytics_workspace_data_export_list_command_builder;
}
/**
 * Show a data export rule for a given workspace.
 *
 * Syntax:
 * ```
 * az monitor log-analytics workspace data-export show --name
 *                                                     --resource-group
 *                                                     --workspace-name
 *                                                     [--query-examples]
 *                                                     [--subscription]
 * ```
 *
 * @param {string} name Name of the data export rule.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} workspaceName Name of the Log Analytics Workspace.
 */
declare class az_monitor_log_analytics_workspace_data_export_show_command_builder extends CommandBuilder<az_monitor_log_analytics_workspace_data_export_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string, workspaceName: string);
    /** Name of the data export rule. */
    name(value: string): az_monitor_log_analytics_workspace_data_export_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_log_analytics_workspace_data_export_show_command_builder;
    /** Name of the Log Analytics Workspace. */
    workspaceName(value: string): az_monitor_log_analytics_workspace_data_export_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_monitor_log_analytics_workspace_data_export_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_log_analytics_workspace_data_export_show_command_builder;
}
/**
 * Update a data export rule for a given workspace.
 *
 * Syntax:
 * ```
 * az monitor log-analytics workspace data-export update --name
 *                                                       --resource-group
 *                                                       --workspace-name
 *                                                       [--add]
 *                                                       [--all {false, true}]
 *                                                       [--destination]
 *                                                       [--enable {false, true}]
 *                                                       [--force-string]
 *                                                       [--remove]
 *                                                       [--set]
 *                                                       [--subscription]
 *                                                       [--tables]
 * ```
 *
 * @param {string} name Name of the data export rule.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} workspaceName Name of the Log Analytics Workspace.
 */
declare class az_monitor_log_analytics_workspace_data_export_update_command_builder extends CommandBuilder<az_monitor_log_analytics_workspace_data_export_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string, workspaceName: string);
    /** Name of the data export rule. */
    name(value: string): az_monitor_log_analytics_workspace_data_export_update_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_log_analytics_workspace_data_export_update_command_builder;
    /** Name of the Log Analytics Workspace. */
    workspaceName(value: string): az_monitor_log_analytics_workspace_data_export_update_command_builder;
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_monitor_log_analytics_workspace_data_export_update_command_builder;
    /** All workspace's tables are exported when this is enabled. */
    exportAllTables(value: boolean): az_monitor_log_analytics_workspace_data_export_update_command_builder;
    /** The destination resource ID. It should be a storage account, an event hub namespace or an event hub. If event hub namespace is provided, event hub would be created for each table automatically. */
    destination(value: string): az_monitor_log_analytics_workspace_data_export_update_command_builder;
    /** Enable this data export rule. */
    enable(value: boolean): az_monitor_log_analytics_workspace_data_export_update_command_builder;
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_monitor_log_analytics_workspace_data_export_update_command_builder;
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_monitor_log_analytics_workspace_data_export_update_command_builder;
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_monitor_log_analytics_workspace_data_export_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_log_analytics_workspace_data_export_update_command_builder;
    /** An array of tables to export. if --export-all-tables is true, this argument should not be provided. */
    tables(value: string): az_monitor_log_analytics_workspace_data_export_update_command_builder;
}
/**
 * Create a linked service.
 *
 * Syntax:
 * ```
 * az monitor log-analytics workspace linked-service create --name
 *                                                          --resource-group
 *                                                          --workspace-name
 *                                                          [--no-wait]
 *                                                          [--resource-id]
 *                                                          [--subscription]
 *                                                          [--write-access-resource-id]
 * ```
 *
 * @param {string} name Name of the linkedServices resource. Supported values: cluster, automation.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} workspaceName Name of the Log Analytics Workspace.
 */
declare class az_monitor_log_analytics_workspace_linked_service_create_command_builder extends CommandBuilder<az_monitor_log_analytics_workspace_linked_service_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string, workspaceName: string);
    /** Name of the linkedServices resource. Supported values: cluster, automation. */
    name(value: string): az_monitor_log_analytics_workspace_linked_service_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_log_analytics_workspace_linked_service_create_command_builder;
    /** Name of the Log Analytics Workspace. */
    workspaceName(value: string): az_monitor_log_analytics_workspace_linked_service_create_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_monitor_log_analytics_workspace_linked_service_create_command_builder;
    /** The resource id of the resource that will be linked to the workspace. This should be used for linking resources which require read access. */
    resourceId(value: string): az_monitor_log_analytics_workspace_linked_service_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_log_analytics_workspace_linked_service_create_command_builder;
    /** The resource id of the resource that will be linked to the workspace. This should be used for linking resources which require write access. */
    writeAccessResourceId(value: string): az_monitor_log_analytics_workspace_linked_service_create_command_builder;
}
/**
 * Delete a linked service.
 *
 * Syntax:
 * ```
 * az monitor log-analytics workspace linked-service delete --name
 *                                                          --resource-group
 *                                                          --workspace-name
 *                                                          [--no-wait]
 *                                                          [--subscription]
 *                                                          [--yes]
 * ```
 *
 * @param {string} name Name of the linkedServices resource. Supported values: cluster, automation.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} workspaceName Name of the Log Analytics Workspace.
 */
declare class az_monitor_log_analytics_workspace_linked_service_delete_command_builder extends CommandBuilder<az_monitor_log_analytics_workspace_linked_service_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string, workspaceName: string);
    /** Name of the linkedServices resource. Supported values: cluster, automation. */
    name(value: string): az_monitor_log_analytics_workspace_linked_service_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_log_analytics_workspace_linked_service_delete_command_builder;
    /** Name of the Log Analytics Workspace. */
    workspaceName(value: string): az_monitor_log_analytics_workspace_linked_service_delete_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_monitor_log_analytics_workspace_linked_service_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_log_analytics_workspace_linked_service_delete_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_monitor_log_analytics_workspace_linked_service_delete_command_builder;
}
/**
 * Gets all the linked services in a workspace.
 *
 * Syntax:
 * ```
 * az monitor log-analytics workspace linked-service list --resource-group
 *                                                        --workspace-name
 *                                                        [--query-examples]
 *                                                        [--subscription]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} workspaceName Name of the Log Analytics Workspace.
 */
declare class az_monitor_log_analytics_workspace_linked_service_list_command_builder extends CommandBuilder<az_monitor_log_analytics_workspace_linked_service_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, resourceGroup: string, workspaceName: string);
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_log_analytics_workspace_linked_service_list_command_builder;
    /** Name of the Log Analytics Workspace. */
    workspaceName(value: string): az_monitor_log_analytics_workspace_linked_service_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_monitor_log_analytics_workspace_linked_service_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_log_analytics_workspace_linked_service_list_command_builder;
}
/**
 * Show the properties of a linked service.
 *
 * Syntax:
 * ```
 * az monitor log-analytics workspace linked-service show --name
 *                                                        --resource-group
 *                                                        --workspace-name
 *                                                        [--query-examples]
 *                                                        [--subscription]
 * ```
 *
 * @param {string} name Name of the linkedServices resource. Supported values: cluster, automation.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} workspaceName Name of the Log Analytics Workspace.
 */
declare class az_monitor_log_analytics_workspace_linked_service_show_command_builder extends CommandBuilder<az_monitor_log_analytics_workspace_linked_service_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string, workspaceName: string);
    /** Name of the linkedServices resource. Supported values: cluster, automation. */
    name(value: string): az_monitor_log_analytics_workspace_linked_service_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_log_analytics_workspace_linked_service_show_command_builder;
    /** Name of the Log Analytics Workspace. */
    workspaceName(value: string): az_monitor_log_analytics_workspace_linked_service_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_monitor_log_analytics_workspace_linked_service_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_log_analytics_workspace_linked_service_show_command_builder;
}
/**
 * Update a linked service.
 *
 * Syntax:
 * ```
 * az monitor log-analytics workspace linked-service update --name
 *                                                          --resource-group
 *                                                          --workspace-name
 *                                                          [--add]
 *                                                          [--force-string]
 *                                                          [--no-wait]
 *                                                          [--remove]
 *                                                          [--resource-id]
 *                                                          [--set]
 *                                                          [--subscription]
 *                                                          [--write-access-resource-id]
 * ```
 *
 * @param {string} name Name of the linkedServices resource. Supported values: cluster, automation.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} workspaceName Name of the Log Analytics Workspace.
 */
declare class az_monitor_log_analytics_workspace_linked_service_update_command_builder extends CommandBuilder<az_monitor_log_analytics_workspace_linked_service_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string, workspaceName: string);
    /** Name of the linkedServices resource. Supported values: cluster, automation. */
    name(value: string): az_monitor_log_analytics_workspace_linked_service_update_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_log_analytics_workspace_linked_service_update_command_builder;
    /** Name of the Log Analytics Workspace. */
    workspaceName(value: string): az_monitor_log_analytics_workspace_linked_service_update_command_builder;
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_monitor_log_analytics_workspace_linked_service_update_command_builder;
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_monitor_log_analytics_workspace_linked_service_update_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_monitor_log_analytics_workspace_linked_service_update_command_builder;
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_monitor_log_analytics_workspace_linked_service_update_command_builder;
    /** The resource id of the resource that will be linked to the workspace. This should be used for linking resources which require read access. */
    resourceId(value: string): az_monitor_log_analytics_workspace_linked_service_update_command_builder;
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_monitor_log_analytics_workspace_linked_service_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_log_analytics_workspace_linked_service_update_command_builder;
    /** The resource id of the resource that will be linked to the workspace. This should be used for linking resources which require write access. */
    writeAccessResourceId(value: string): az_monitor_log_analytics_workspace_linked_service_update_command_builder;
}
/**
 * Place the CLI in a waiting state until a condition of the linked service is met.
 *
 * Syntax:
 * ```
 * az monitor log-analytics workspace linked-service wait --name
 *                                                        --resource-group
 *                                                        --workspace-name
 *                                                        [--created]
 *                                                        [--custom]
 *                                                        [--deleted]
 *                                                        [--exists]
 *                                                        [--interval]
 *                                                        [--subscription]
 *                                                        [--timeout]
 *                                                        [--updated]
 * ```
 *
 * @param {string} name Name of the linkedServices resource. Supported values: cluster, automation.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} workspaceName Name of the Log Analytics Workspace.
 */
declare class az_monitor_log_analytics_workspace_linked_service_wait_command_builder extends CommandBuilder<az_monitor_log_analytics_workspace_linked_service_wait_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string, workspaceName: string);
    /** Name of the linkedServices resource. Supported values: cluster, automation. */
    name(value: string): az_monitor_log_analytics_workspace_linked_service_wait_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_log_analytics_workspace_linked_service_wait_command_builder;
    /** Name of the Log Analytics Workspace. */
    workspaceName(value: string): az_monitor_log_analytics_workspace_linked_service_wait_command_builder;
    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    created(value: string): az_monitor_log_analytics_workspace_linked_service_wait_command_builder;
    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    custom(value: string): az_monitor_log_analytics_workspace_linked_service_wait_command_builder;
    /** Wait until deleted. */
    deleted(value: string): az_monitor_log_analytics_workspace_linked_service_wait_command_builder;
    /** Wait until the resource exists. */
    exists(value: string): az_monitor_log_analytics_workspace_linked_service_wait_command_builder;
    /** Polling interval in seconds. */
    interval(value: string): az_monitor_log_analytics_workspace_linked_service_wait_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_log_analytics_workspace_linked_service_wait_command_builder;
    /** Maximum wait in seconds. */
    timeout(value: string): az_monitor_log_analytics_workspace_linked_service_wait_command_builder;
    /** Wait until updated with provisioningState at 'Succeeded'. */
    updated(value: string): az_monitor_log_analytics_workspace_linked_service_wait_command_builder;
}
/**
 * Add some linked storage accounts with specific data source type for log analytics workspace.
 *
 * Syntax:
 * ```
 * az monitor log-analytics workspace linked-storage add --resource-group
 *                                                       --storage-accounts
 *                                                       --type {AzureWatson, CustomLogs}
 *                                                       --workspace-name
 *                                                       [--subscription]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} storageAccounts List of Name or ID of Azure Storage Account.
 * @param {'AzureWatson' | 'CustomLogs'} type Data source type for the linked storage account.
 * @param {string} workspaceName Name of the Log Analytics Workspace.
 */
declare class az_monitor_log_analytics_workspace_linked_storage_add_command_builder extends CommandBuilder<az_monitor_log_analytics_workspace_linked_storage_add_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, resourceGroup: string, storageAccounts: string, type: 'AzureWatson' | 'CustomLogs', workspaceName: string);
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_log_analytics_workspace_linked_storage_add_command_builder;
    /** List of Name or ID of Azure Storage Account. */
    storageAccounts(value: string): az_monitor_log_analytics_workspace_linked_storage_add_command_builder;
    /** Data source type for the linked storage account. */
    type(value: 'AzureWatson' | 'CustomLogs'): az_monitor_log_analytics_workspace_linked_storage_add_command_builder;
    /** Name of the Log Analytics Workspace. */
    workspaceName(value: string): az_monitor_log_analytics_workspace_linked_storage_add_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_log_analytics_workspace_linked_storage_add_command_builder;
}
/**
 * Create some linked storage accounts for log analytics workspace.
 *
 * Syntax:
 * ```
 * az monitor log-analytics workspace linked-storage create --resource-group
 *                                                          --type {AzureWatson, CustomLogs}
 *                                                          --workspace-name
 *                                                          [--storage-accounts]
 *                                                          [--subscription]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {'AzureWatson' | 'CustomLogs'} type Data source type for the linked storage account.
 * @param {string} workspaceName Name of the Log Analytics Workspace.
 */
declare class az_monitor_log_analytics_workspace_linked_storage_create_command_builder extends CommandBuilder<az_monitor_log_analytics_workspace_linked_storage_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, resourceGroup: string, type: 'AzureWatson' | 'CustomLogs', workspaceName: string);
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_log_analytics_workspace_linked_storage_create_command_builder;
    /** Data source type for the linked storage account. */
    type(value: 'AzureWatson' | 'CustomLogs'): az_monitor_log_analytics_workspace_linked_storage_create_command_builder;
    /** Name of the Log Analytics Workspace. */
    workspaceName(value: string): az_monitor_log_analytics_workspace_linked_storage_create_command_builder;
    /** List of Name or ID of Azure Storage Account. */
    storageAccounts(value: string): az_monitor_log_analytics_workspace_linked_storage_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_log_analytics_workspace_linked_storage_create_command_builder;
}
/**
 * Delete all linked storage accounts with specific data source type for log analytics workspace.
 *
 * Syntax:
 * ```
 * az monitor log-analytics workspace linked-storage delete --resource-group
 *                                                          --type {AzureWatson, CustomLogs}
 *                                                          --workspace-name
 *                                                          [--subscription]
 *                                                          [--yes]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {'AzureWatson' | 'CustomLogs'} type Data source type for the linked storage account.
 * @param {string} workspaceName Name of the Log Analytics Workspace.
 */
declare class az_monitor_log_analytics_workspace_linked_storage_delete_command_builder extends CommandBuilder<az_monitor_log_analytics_workspace_linked_storage_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, resourceGroup: string, type: 'AzureWatson' | 'CustomLogs', workspaceName: string);
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_log_analytics_workspace_linked_storage_delete_command_builder;
    /** Data source type for the linked storage account. */
    type(value: 'AzureWatson' | 'CustomLogs'): az_monitor_log_analytics_workspace_linked_storage_delete_command_builder;
    /** Name of the Log Analytics Workspace. */
    workspaceName(value: string): az_monitor_log_analytics_workspace_linked_storage_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_log_analytics_workspace_linked_storage_delete_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_monitor_log_analytics_workspace_linked_storage_delete_command_builder;
}
/**
 * List all linked storage accounts for a log analytics workspace.
 *
 * Syntax:
 * ```
 * az monitor log-analytics workspace linked-storage list --resource-group
 *                                                        --workspace-name
 *                                                        [--query-examples]
 *                                                        [--subscription]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} workspaceName Name of the Log Analytics Workspace.
 */
declare class az_monitor_log_analytics_workspace_linked_storage_list_command_builder extends CommandBuilder<az_monitor_log_analytics_workspace_linked_storage_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, resourceGroup: string, workspaceName: string);
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_log_analytics_workspace_linked_storage_list_command_builder;
    /** Name of the Log Analytics Workspace. */
    workspaceName(value: string): az_monitor_log_analytics_workspace_linked_storage_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_monitor_log_analytics_workspace_linked_storage_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_log_analytics_workspace_linked_storage_list_command_builder;
}
/**
 * Remove some linked storage accounts with specific data source type for log analytics workspace.
 *
 * Syntax:
 * ```
 * az monitor log-analytics workspace linked-storage remove --resource-group
 *                                                          --storage-accounts
 *                                                          --type {AzureWatson, CustomLogs}
 *                                                          --workspace-name
 *                                                          [--subscription]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} storageAccounts List of Name or ID of Azure Storage Account.
 * @param {'AzureWatson' | 'CustomLogs'} type Data source type for the linked storage account.
 * @param {string} workspaceName Name of the Log Analytics Workspace.
 */
declare class az_monitor_log_analytics_workspace_linked_storage_remove_command_builder extends CommandBuilder<az_monitor_log_analytics_workspace_linked_storage_remove_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, resourceGroup: string, storageAccounts: string, type: 'AzureWatson' | 'CustomLogs', workspaceName: string);
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_log_analytics_workspace_linked_storage_remove_command_builder;
    /** List of Name or ID of Azure Storage Account. */
    storageAccounts(value: string): az_monitor_log_analytics_workspace_linked_storage_remove_command_builder;
    /** Data source type for the linked storage account. */
    type(value: 'AzureWatson' | 'CustomLogs'): az_monitor_log_analytics_workspace_linked_storage_remove_command_builder;
    /** Name of the Log Analytics Workspace. */
    workspaceName(value: string): az_monitor_log_analytics_workspace_linked_storage_remove_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_log_analytics_workspace_linked_storage_remove_command_builder;
}
/**
 * List all linked storage accounts with specific data source type for a log analytics workspace.
 *
 * Syntax:
 * ```
 * az monitor log-analytics workspace linked-storage show --resource-group
 *                                                        --type {AzureWatson, CustomLogs}
 *                                                        --workspace-name
 *                                                        [--query-examples]
 *                                                        [--subscription]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {'AzureWatson' | 'CustomLogs'} type Data source type for the linked storage account.
 * @param {string} workspaceName Name of the Log Analytics Workspace.
 */
declare class az_monitor_log_analytics_workspace_linked_storage_show_command_builder extends CommandBuilder<az_monitor_log_analytics_workspace_linked_storage_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, resourceGroup: string, type: 'AzureWatson' | 'CustomLogs', workspaceName: string);
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_log_analytics_workspace_linked_storage_show_command_builder;
    /** Data source type for the linked storage account. */
    type(value: 'AzureWatson' | 'CustomLogs'): az_monitor_log_analytics_workspace_linked_storage_show_command_builder;
    /** Name of the Log Analytics Workspace. */
    workspaceName(value: string): az_monitor_log_analytics_workspace_linked_storage_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_monitor_log_analytics_workspace_linked_storage_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_log_analytics_workspace_linked_storage_show_command_builder;
}
/**
 * Disable an intelligence pack for a given workspace.
 *
 * Syntax:
 * ```
 * az monitor log-analytics workspace pack disable --name
 *                                                 --resource-group
 *                                                 --workspace-name
 *                                                 [--subscription]
 * ```
 *
 * @param {string} name The name of the intelligence pack to be disabled.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} workspaceName Name of the Log Analytics Workspace.
 */
declare class az_monitor_log_analytics_workspace_pack_disable_command_builder extends CommandBuilder<az_monitor_log_analytics_workspace_pack_disable_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string, workspaceName: string);
    /** The name of the intelligence pack to be disabled. */
    name(value: string): az_monitor_log_analytics_workspace_pack_disable_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_log_analytics_workspace_pack_disable_command_builder;
    /** Name of the Log Analytics Workspace. */
    workspaceName(value: string): az_monitor_log_analytics_workspace_pack_disable_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_log_analytics_workspace_pack_disable_command_builder;
}
/**
 * Enable an intelligence pack for a given workspace.
 *
 * Syntax:
 * ```
 * az monitor log-analytics workspace pack enable --name
 *                                                --resource-group
 *                                                --workspace-name
 *                                                [--subscription]
 * ```
 *
 * @param {string} name The name of the intelligence pack to be enabled.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} workspaceName Name of the Log Analytics Workspace.
 */
declare class az_monitor_log_analytics_workspace_pack_enable_command_builder extends CommandBuilder<az_monitor_log_analytics_workspace_pack_enable_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string, workspaceName: string);
    /** The name of the intelligence pack to be enabled. */
    name(value: string): az_monitor_log_analytics_workspace_pack_enable_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_log_analytics_workspace_pack_enable_command_builder;
    /** Name of the Log Analytics Workspace. */
    workspaceName(value: string): az_monitor_log_analytics_workspace_pack_enable_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_log_analytics_workspace_pack_enable_command_builder;
}
/**
 * List all the intelligence packs possible and whether they are enabled or disabled for a given workspace.
 *
 * Syntax:
 * ```
 * az monitor log-analytics workspace pack list --resource-group
 *                                              --workspace-name
 *                                              [--query-examples]
 *                                              [--subscription]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} workspaceName Name of the Log Analytics Workspace.
 */
declare class az_monitor_log_analytics_workspace_pack_list_command_builder extends CommandBuilder<az_monitor_log_analytics_workspace_pack_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, resourceGroup: string, workspaceName: string);
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_log_analytics_workspace_pack_list_command_builder;
    /** Name of the Log Analytics Workspace. */
    workspaceName(value: string): az_monitor_log_analytics_workspace_pack_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_monitor_log_analytics_workspace_pack_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_log_analytics_workspace_pack_list_command_builder;
}
/**
 * Create a saved search for a given workspace.
 *
 * Syntax:
 * ```
 * az monitor log-analytics workspace saved-search create --category
 *                                                        --display-name
 *                                                        --name
 *                                                        --resource-group
 *                                                        --saved-query
 *                                                        --workspace-name
 *                                                        [--fa]
 *                                                        [--fp]
 *                                                        [--subscription]
 *                                                        [--tags]
 * ```
 *
 * @param {string} category The category of the saved search. This helps the user to find a saved search faster.
 * @param {string} displayName Display name of the saved search.
 * @param {string} name Name of the saved search and it's unique in a given workspace.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} savedQuery The query expression for the saved search.
 * @param {string} workspaceName Name of the Log Analytics Workspace.
 */
declare class az_monitor_log_analytics_workspace_saved_search_create_command_builder extends CommandBuilder<az_monitor_log_analytics_workspace_saved_search_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, category: string, displayName: string, name: string, resourceGroup: string, savedQuery: string, workspaceName: string);
    /** The category of the saved search. This helps the user to find a saved search faster. */
    category(value: string): az_monitor_log_analytics_workspace_saved_search_create_command_builder;
    /** Display name of the saved search. */
    displayName(value: string): az_monitor_log_analytics_workspace_saved_search_create_command_builder;
    /** Name of the saved search and it's unique in a given workspace. */
    name(value: string): az_monitor_log_analytics_workspace_saved_search_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_log_analytics_workspace_saved_search_create_command_builder;
    /** The query expression for the saved search. */
    savedQuery(value: string): az_monitor_log_analytics_workspace_saved_search_create_command_builder;
    /** Name of the Log Analytics Workspace. */
    workspaceName(value: string): az_monitor_log_analytics_workspace_saved_search_create_command_builder;
    /** Function Aliases are short names given to Saved Searches so they can be easily referenced in query. They are required for Computer Groups. */
    funcAlias(value: string): az_monitor_log_analytics_workspace_saved_search_create_command_builder;
    /** The optional function parameters if query serves as a function. Value should be in the following format: 'param-name1:type1 = default_value1, param-name2:type2 = default_value2'. For more examples and proper syntax please refer to https://docs.microsoft.com/en-us/azure/kusto/query/functions/user-defined-functions. */
    funcParam(value: string): az_monitor_log_analytics_workspace_saved_search_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_log_analytics_workspace_saved_search_create_command_builder;
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_monitor_log_analytics_workspace_saved_search_create_command_builder;
}
/**
 * Delete a saved search for a given workspace.
 *
 * Syntax:
 * ```
 * az monitor log-analytics workspace saved-search delete --name
 *                                                        --resource-group
 *                                                        --workspace-name
 *                                                        [--subscription]
 *                                                        [--yes]
 * ```
 *
 * @param {string} name Name of the saved search and it's unique in a given workspace.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} workspaceName Name of the Log Analytics Workspace.
 */
declare class az_monitor_log_analytics_workspace_saved_search_delete_command_builder extends CommandBuilder<az_monitor_log_analytics_workspace_saved_search_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string, workspaceName: string);
    /** Name of the saved search and it's unique in a given workspace. */
    name(value: string): az_monitor_log_analytics_workspace_saved_search_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_log_analytics_workspace_saved_search_delete_command_builder;
    /** Name of the Log Analytics Workspace. */
    workspaceName(value: string): az_monitor_log_analytics_workspace_saved_search_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_log_analytics_workspace_saved_search_delete_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_monitor_log_analytics_workspace_saved_search_delete_command_builder;
}
/**
 * List all saved searches for a given workspace.
 *
 * Syntax:
 * ```
 * az monitor log-analytics workspace saved-search list --resource-group
 *                                                      --workspace-name
 *                                                      [--query-examples]
 *                                                      [--subscription]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} workspaceName Name of the Log Analytics Workspace.
 */
declare class az_monitor_log_analytics_workspace_saved_search_list_command_builder extends CommandBuilder<az_monitor_log_analytics_workspace_saved_search_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, resourceGroup: string, workspaceName: string);
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_log_analytics_workspace_saved_search_list_command_builder;
    /** Name of the Log Analytics Workspace. */
    workspaceName(value: string): az_monitor_log_analytics_workspace_saved_search_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_monitor_log_analytics_workspace_saved_search_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_log_analytics_workspace_saved_search_list_command_builder;
}
/**
 * Show a saved search for a given workspace.
 *
 * Syntax:
 * ```
 * az monitor log-analytics workspace saved-search show --name
 *                                                      --resource-group
 *                                                      --workspace-name
 *                                                      [--query-examples]
 *                                                      [--subscription]
 * ```
 *
 * @param {string} name Name of the saved search and it's unique in a given workspace.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} workspaceName Name of the Log Analytics Workspace.
 */
declare class az_monitor_log_analytics_workspace_saved_search_show_command_builder extends CommandBuilder<az_monitor_log_analytics_workspace_saved_search_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string, workspaceName: string);
    /** Name of the saved search and it's unique in a given workspace. */
    name(value: string): az_monitor_log_analytics_workspace_saved_search_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_log_analytics_workspace_saved_search_show_command_builder;
    /** Name of the Log Analytics Workspace. */
    workspaceName(value: string): az_monitor_log_analytics_workspace_saved_search_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_monitor_log_analytics_workspace_saved_search_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_log_analytics_workspace_saved_search_show_command_builder;
}
/**
 * Update a saved search for a given workspace.
 *
 * Syntax:
 * ```
 * az monitor log-analytics workspace saved-search update --name
 *                                                        --resource-group
 *                                                        --workspace-name
 *                                                        [--add]
 *                                                        [--category]
 *                                                        [--display-name]
 *                                                        [--fa]
 *                                                        [--force-string]
 *                                                        [--fp]
 *                                                        [--remove]
 *                                                        [--saved-query]
 *                                                        [--set]
 *                                                        [--subscription]
 *                                                        [--tags]
 * ```
 *
 * @param {string} name Name of the saved search and it's unique in a given workspace.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} workspaceName Name of the Log Analytics Workspace.
 */
declare class az_monitor_log_analytics_workspace_saved_search_update_command_builder extends CommandBuilder<az_monitor_log_analytics_workspace_saved_search_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string, workspaceName: string);
    /** Name of the saved search and it's unique in a given workspace. */
    name(value: string): az_monitor_log_analytics_workspace_saved_search_update_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_log_analytics_workspace_saved_search_update_command_builder;
    /** Name of the Log Analytics Workspace. */
    workspaceName(value: string): az_monitor_log_analytics_workspace_saved_search_update_command_builder;
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_monitor_log_analytics_workspace_saved_search_update_command_builder;
    /** The category of the saved search. This helps the user to find a saved search faster. */
    category(value: string): az_monitor_log_analytics_workspace_saved_search_update_command_builder;
    /** Display name of the saved search. */
    displayName(value: string): az_monitor_log_analytics_workspace_saved_search_update_command_builder;
    /** Function Aliases are short names given to Saved Searches so they can be easily referenced in query. They are required for Computer Groups. */
    funcAlias(value: string): az_monitor_log_analytics_workspace_saved_search_update_command_builder;
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_monitor_log_analytics_workspace_saved_search_update_command_builder;
    /** The optional function parameters if query serves as a function. Value should be in the following format: 'param-name1:type1 = default_value1, param-name2:type2 = default_value2'. For more examples and proper syntax please refer to https://docs.microsoft.com/en-us/azure/kusto/query/functions/user-defined-functions. */
    funcParam(value: string): az_monitor_log_analytics_workspace_saved_search_update_command_builder;
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_monitor_log_analytics_workspace_saved_search_update_command_builder;
    /** The query expression for the saved search. */
    savedQuery(value: string): az_monitor_log_analytics_workspace_saved_search_update_command_builder;
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_monitor_log_analytics_workspace_saved_search_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_log_analytics_workspace_saved_search_update_command_builder;
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_monitor_log_analytics_workspace_saved_search_update_command_builder;
}
/**
 * List all the tables for the given Log Analytics workspace.
 *
 * Syntax:
 * ```
 * az monitor log-analytics workspace table list --resource-group
 *                                               --workspace-name
 *                                               [--query-examples]
 *                                               [--subscription]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} workspaceName Name of the Log Analytics Workspace.
 */
declare class az_monitor_log_analytics_workspace_table_list_command_builder extends CommandBuilder<az_monitor_log_analytics_workspace_table_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, resourceGroup: string, workspaceName: string);
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_log_analytics_workspace_table_list_command_builder;
    /** Name of the Log Analytics Workspace. */
    workspaceName(value: string): az_monitor_log_analytics_workspace_table_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_monitor_log_analytics_workspace_table_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_log_analytics_workspace_table_list_command_builder;
}
/**
 * Get a Log Analytics workspace table.
 *
 * Syntax:
 * ```
 * az monitor log-analytics workspace table show --name
 *                                               --resource-group
 *                                               --workspace-name
 *                                               [--query-examples]
 *                                               [--subscription]
 * ```
 *
 * @param {string} name Name of the table.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} workspaceName Name of the Log Analytics Workspace.
 */
declare class az_monitor_log_analytics_workspace_table_show_command_builder extends CommandBuilder<az_monitor_log_analytics_workspace_table_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string, workspaceName: string);
    /** Name of the table. */
    name(value: string): az_monitor_log_analytics_workspace_table_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_log_analytics_workspace_table_show_command_builder;
    /** Name of the Log Analytics Workspace. */
    workspaceName(value: string): az_monitor_log_analytics_workspace_table_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_monitor_log_analytics_workspace_table_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_log_analytics_workspace_table_show_command_builder;
}
/**
 * Update the properties of a Log Analytics workspace table, currently only support updating retention time.
 *
 * Syntax:
 * ```
 * az monitor log-analytics workspace table update --name
 *                                                 --resource-group
 *                                                 --retention-time
 *                                                 --workspace-name
 *                                                 [--subscription]
 * ```
 *
 * @param {string} name Name of the table.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} retentionTime The data table data retention in days, between 30 and 730. Setting this property to null will default to the workspace retention.
 * @param {string} workspaceName Name of the Log Analytics Workspace.
 */
declare class az_monitor_log_analytics_workspace_table_update_command_builder extends CommandBuilder<az_monitor_log_analytics_workspace_table_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string, retentionTime: string, workspaceName: string);
    /** Name of the table. */
    name(value: string): az_monitor_log_analytics_workspace_table_update_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_log_analytics_workspace_table_update_command_builder;
    /** The data table data retention in days, between 30 and 730. Setting this property to null will default to the workspace retention. */
    retentionTime(value: string): az_monitor_log_analytics_workspace_table_update_command_builder;
    /** Name of the Log Analytics Workspace. */
    workspaceName(value: string): az_monitor_log_analytics_workspace_table_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_log_analytics_workspace_table_update_command_builder;
}
/**
 * Create a workspace instance.
 *
 * Syntax:
 * ```
 * az monitor log-analytics workspace create --resource-group
 *                                           --workspace-name
 *                                           [--capacity-reservation-level]
 *                                           [--ingestion-access {Disabled, Enabled}]
 *                                           [--location]
 *                                           [--no-wait]
 *                                           [--query-access {Disabled, Enabled}]
 *                                           [--quota]
 *                                           [--retention-time]
 *                                           [--sku]
 *                                           [--subscription]
 *                                           [--tags]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} workspaceName Name of the Log Analytics Workspace.
 */
declare class az_monitor_log_analytics_workspace_create_command_builder extends CommandBuilder<az_monitor_log_analytics_workspace_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, resourceGroup: string, workspaceName: string);
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_log_analytics_workspace_create_command_builder;
    /** Name of the Log Analytics Workspace. */
    workspaceName(value: string): az_monitor_log_analytics_workspace_create_command_builder;
    /** The capacity reservation level for this workspace, when CapacityReservation sku is selected. The maximum value is 1000 and must be in multiples of 100. If you want to increase the limit, please contact LAIngestionRate@microsoft.com. */
    capacityReservationLevel(value: string): az_monitor_log_analytics_workspace_create_command_builder;
    /** The public network access type to access workspace ingestion. */
    ingestionAccess(value: 'Disabled' | 'Enabled'): az_monitor_log_analytics_workspace_create_command_builder;
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_monitor_log_analytics_workspace_create_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_monitor_log_analytics_workspace_create_command_builder;
    /** The public network access type to access workspace query. */
    queryAccess(value: 'Disabled' | 'Enabled'): az_monitor_log_analytics_workspace_create_command_builder;
    /** The workspace daily quota for ingestion in gigabytes. The minimum value is 0.023 and default is -1 which means unlimited. */
    quota(value: string): az_monitor_log_analytics_workspace_create_command_builder;
    /** The workspace data retention in days. */
    retentionTime(value: string): az_monitor_log_analytics_workspace_create_command_builder;
    /** The supported value: PerGB2018, CapacityReservation. */
    sku(value: string): az_monitor_log_analytics_workspace_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_log_analytics_workspace_create_command_builder;
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_monitor_log_analytics_workspace_create_command_builder;
}
/**
 * Delete a workspace instance.
 *
 * Syntax:
 * ```
 * az monitor log-analytics workspace delete --resource-group
 *                                           --workspace-name
 *                                           [--force {false, true}]
 *                                           [--subscription]
 *                                           [--yes]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} workspaceName Name of the Log Analytics Workspace.
 */
declare class az_monitor_log_analytics_workspace_delete_command_builder extends CommandBuilder<az_monitor_log_analytics_workspace_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, resourceGroup: string, workspaceName: string);
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_log_analytics_workspace_delete_command_builder;
    /** Name of the Log Analytics Workspace. */
    workspaceName(value: string): az_monitor_log_analytics_workspace_delete_command_builder;
    /** Deletes the workspace without the recovery option. A workspace that was deleted with this flag cannot be recovered. */
    force(value: boolean): az_monitor_log_analytics_workspace_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_log_analytics_workspace_delete_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_monitor_log_analytics_workspace_delete_command_builder;
}
/**
 * Get the schema for a given workspace.
 *
 * Syntax:
 * ```
 * az monitor log-analytics workspace get-schema --resource-group
 *                                               --workspace-name
 *                                               [--subscription]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} workspaceName Name of the Log Analytics Workspace.
 */
declare class az_monitor_log_analytics_workspace_get_schema_command_builder extends CommandBuilder<az_monitor_log_analytics_workspace_get_schema_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, resourceGroup: string, workspaceName: string);
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_log_analytics_workspace_get_schema_command_builder;
    /** Name of the Log Analytics Workspace. */
    workspaceName(value: string): az_monitor_log_analytics_workspace_get_schema_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_log_analytics_workspace_get_schema_command_builder;
}
/**
 * Get the shared keys for a workspace.
 *
 * Syntax:
 * ```
 * az monitor log-analytics workspace get-shared-keys --resource-group
 *                                                    --workspace-name
 *                                                    [--subscription]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} workspaceName Name of the Log Analytics Workspace.
 */
declare class az_monitor_log_analytics_workspace_get_shared_keys_command_builder extends CommandBuilder<az_monitor_log_analytics_workspace_get_shared_keys_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, resourceGroup: string, workspaceName: string);
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_log_analytics_workspace_get_shared_keys_command_builder;
    /** Name of the Log Analytics Workspace. */
    workspaceName(value: string): az_monitor_log_analytics_workspace_get_shared_keys_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_log_analytics_workspace_get_shared_keys_command_builder;
}
/**
 * Get a list of workspaces under a resource group or a subscription.
 *
 * Syntax:
 * ```
 * az monitor log-analytics workspace list [--query-examples]
 *                                         [--resource-group]
 *                                         [--subscription]
 * ```
 */
declare class az_monitor_log_analytics_workspace_list_command_builder extends CommandBuilder<az_monitor_log_analytics_workspace_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_monitor_log_analytics_workspace_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_log_analytics_workspace_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_log_analytics_workspace_list_command_builder;
}
/**
 * Get a list of deleted workspaces that can be recovered in a subscription or a resource group.
 *
 * Syntax:
 * ```
 * az monitor log-analytics workspace list-deleted-workspaces [--resource-group]
 *                                                            [--subscription]
 * ```
 */
declare class az_monitor_log_analytics_workspace_list_deleted_workspaces_command_builder extends CommandBuilder<az_monitor_log_analytics_workspace_list_deleted_workspaces_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_log_analytics_workspace_list_deleted_workspaces_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_log_analytics_workspace_list_deleted_workspaces_command_builder;
}
/**
 * Get a list of management groups connected to a workspace.
 *
 * Syntax:
 * ```
 * az monitor log-analytics workspace list-management-groups --resource-group
 *                                                           --workspace-name
 *                                                           [--subscription]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} workspaceName Name of the Log Analytics Workspace.
 */
declare class az_monitor_log_analytics_workspace_list_management_groups_command_builder extends CommandBuilder<az_monitor_log_analytics_workspace_list_management_groups_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, resourceGroup: string, workspaceName: string);
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_log_analytics_workspace_list_management_groups_command_builder;
    /** Name of the Log Analytics Workspace. */
    workspaceName(value: string): az_monitor_log_analytics_workspace_list_management_groups_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_log_analytics_workspace_list_management_groups_command_builder;
}
/**
 * Get a list of usage metrics for a workspace.
 *
 * Syntax:
 * ```
 * az monitor log-analytics workspace list-usages --resource-group
 *                                                --workspace-name
 *                                                [--subscription]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} workspaceName Name of the Log Analytics Workspace.
 */
declare class az_monitor_log_analytics_workspace_list_usages_command_builder extends CommandBuilder<az_monitor_log_analytics_workspace_list_usages_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, resourceGroup: string, workspaceName: string);
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_log_analytics_workspace_list_usages_command_builder;
    /** Name of the Log Analytics Workspace. */
    workspaceName(value: string): az_monitor_log_analytics_workspace_list_usages_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_log_analytics_workspace_list_usages_command_builder;
}
/**
 * Recover a workspace in a soft-delete state within 14 days.
 *
 * Syntax:
 * ```
 * az monitor log-analytics workspace recover --workspace-name
 *                                            [--no-wait]
 *                                            [--resource-group]
 *                                            [--subscription]
 * ```
 *
 * @param {string} workspaceName Name of the Log Analytics Workspace.
 */
declare class az_monitor_log_analytics_workspace_recover_command_builder extends CommandBuilder<az_monitor_log_analytics_workspace_recover_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, workspaceName: string);
    /** Name of the Log Analytics Workspace. */
    workspaceName(value: string): az_monitor_log_analytics_workspace_recover_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_monitor_log_analytics_workspace_recover_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_log_analytics_workspace_recover_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_log_analytics_workspace_recover_command_builder;
}
/**
 * Show a workspace instance.
 *
 * Syntax:
 * ```
 * az monitor log-analytics workspace show --resource-group
 *                                         --workspace-name
 *                                         [--query-examples]
 *                                         [--subscription]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} workspaceName Name of the Log Analytics Workspace.
 */
declare class az_monitor_log_analytics_workspace_show_command_builder extends CommandBuilder<az_monitor_log_analytics_workspace_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, resourceGroup: string, workspaceName: string);
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_log_analytics_workspace_show_command_builder;
    /** Name of the Log Analytics Workspace. */
    workspaceName(value: string): az_monitor_log_analytics_workspace_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_monitor_log_analytics_workspace_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_log_analytics_workspace_show_command_builder;
}
/**
 * Update a workspace instance.
 *
 * Syntax:
 * ```
 * az monitor log-analytics workspace update --resource-group
 *                                           --workspace-name
 *                                           [--add]
 *                                           [--capacity-reservation-level]
 *                                           [--force-string]
 *                                           [--ingestion-access {Disabled, Enabled}]
 *                                           [--query-access {Disabled, Enabled}]
 *                                           [--quota]
 *                                           [--remove]
 *                                           [--retention-time]
 *                                           [--set]
 *                                           [--subscription]
 *                                           [--tags]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} workspaceName Name of the Log Analytics Workspace.
 */
declare class az_monitor_log_analytics_workspace_update_command_builder extends CommandBuilder<az_monitor_log_analytics_workspace_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, resourceGroup: string, workspaceName: string);
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_log_analytics_workspace_update_command_builder;
    /** Name of the Log Analytics Workspace. */
    workspaceName(value: string): az_monitor_log_analytics_workspace_update_command_builder;
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_monitor_log_analytics_workspace_update_command_builder;
    /** The capacity reservation level for this workspace, when CapacityReservation sku is selected. The maximum value is 1000 and must be in multiples of 100. If you want to increase the limit, please contact LAIngestionRate@microsoft.com. */
    capacityReservationLevel(value: string): az_monitor_log_analytics_workspace_update_command_builder;
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_monitor_log_analytics_workspace_update_command_builder;
    /** The public network access type to access workspace ingestion. */
    ingestionAccess(value: 'Disabled' | 'Enabled'): az_monitor_log_analytics_workspace_update_command_builder;
    /** The public network access type to access workspace query. */
    queryAccess(value: 'Disabled' | 'Enabled'): az_monitor_log_analytics_workspace_update_command_builder;
    /** The workspace daily quota for ingestion in gigabytes. The minimum value is 0.023 and default is -1 which means unlimited. */
    quota(value: string): az_monitor_log_analytics_workspace_update_command_builder;
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_monitor_log_analytics_workspace_update_command_builder;
    /** The workspace data retention in days. */
    retentionTime(value: string): az_monitor_log_analytics_workspace_update_command_builder;
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_monitor_log_analytics_workspace_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_log_analytics_workspace_update_command_builder;
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_monitor_log_analytics_workspace_update_command_builder;
}
/**
 * Create a log profile.
 *
 * Syntax:
 * ```
 * az monitor log-profiles create --categories
 *                                --days
 *                                --enabled {false, true}
 *                                --location
 *                                --locations
 *                                --name
 *                                [--service-bus-rule-id]
 *                                [--storage-account-id]
 *                                [--subscription]
 *                                [--tags]
 * ```
 *
 * @param {string} categories Space-separated categories of the logs. These categories are created as is convenient to the user. Some values are Write, Delete, and/or Action.
 * @param {string} days The number of days for the retention in days. A value of 0 will retain the events indefinitely.
 * @param {boolean} enabled Whether the retention policy is enabled.
 * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
 * @param {string} locations Space-separated list of regions for which Activity Log events should be stored.
 * @param {string} name The name of the log profile.
 */
declare class az_monitor_log_profiles_create_command_builder extends CommandBuilder<az_monitor_log_profiles_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, categories: string, days: string, enabled: boolean, location: string, locations: string, name: string);
    /** Space-separated categories of the logs. These categories are created as is convenient to the user. Some values are Write, Delete, and/or Action. */
    categories(value: string): az_monitor_log_profiles_create_command_builder;
    /** The number of days for the retention in days. A value of 0 will retain the events indefinitely. */
    days(value: string): az_monitor_log_profiles_create_command_builder;
    /** Whether the retention policy is enabled. */
    enabled(value: boolean): az_monitor_log_profiles_create_command_builder;
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_monitor_log_profiles_create_command_builder;
    /** Space-separated list of regions for which Activity Log events should be stored. */
    locations(value: string): az_monitor_log_profiles_create_command_builder;
    /** The name of the log profile. */
    name(value: string): az_monitor_log_profiles_create_command_builder;
    /** The service bus rule ID of the service bus namespace in which you would like to have Event Hubs created for streaming the Activity Log. The rule ID is of the format '{service bus resource ID}/authorizationrules/{key name}'. */
    serviceBusRuleId(value: string): az_monitor_log_profiles_create_command_builder;
    /** The resource id of the storage account to which you would like to send the Activity Log. */
    storageAccountId(value: string): az_monitor_log_profiles_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_log_profiles_create_command_builder;
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_monitor_log_profiles_create_command_builder;
}
/**
 * Deletes the log profile.
 *
 * Syntax:
 * ```
 * az monitor log-profiles delete --name
 *                                [--subscription]
 * ```
 *
 * @param {string} name The name of the log profile.
 */
declare class az_monitor_log_profiles_delete_command_builder extends CommandBuilder<az_monitor_log_profiles_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** The name of the log profile. */
    name(value: string): az_monitor_log_profiles_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_log_profiles_delete_command_builder;
}
/**
 * List the log profiles.
 *
 * Syntax:
 * ```
 * az monitor log-profiles list [--query-examples]
 *                              [--subscription]
 * ```
 */
declare class az_monitor_log_profiles_list_command_builder extends CommandBuilder<az_monitor_log_profiles_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_monitor_log_profiles_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_log_profiles_list_command_builder;
}
/**
 * Gets the log profile.
 *
 * Syntax:
 * ```
 * az monitor log-profiles show --name
 *                              [--query-examples]
 *                              [--subscription]
 * ```
 *
 * @param {string} name The name of the log profile.
 */
declare class az_monitor_log_profiles_show_command_builder extends CommandBuilder<az_monitor_log_profiles_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** The name of the log profile. */
    name(value: string): az_monitor_log_profiles_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_monitor_log_profiles_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_log_profiles_show_command_builder;
}
/**
 * Update a log profile.
 *
 * Syntax:
 * ```
 * az monitor log-profiles update --name
 *                                [--add]
 *                                [--force-string]
 *                                [--remove]
 *                                [--set]
 *                                [--subscription]
 * ```
 *
 * @param {string} name The name of the log profile.
 */
declare class az_monitor_log_profiles_update_command_builder extends CommandBuilder<az_monitor_log_profiles_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** The name of the log profile. */
    name(value: string): az_monitor_log_profiles_update_command_builder;
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_monitor_log_profiles_update_command_builder;
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_monitor_log_profiles_update_command_builder;
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_monitor_log_profiles_update_command_builder;
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_monitor_log_profiles_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_log_profiles_update_command_builder;
}
/**
 * Create a metric-based alert rule.
 *
 * Syntax:
 * ```
 * az monitor metrics alert create --condition
 *                                 --name
 *                                 --resource-group
 *                                 --scopes
 *                                 [--action]
 *                                 [--auto-mitigate {false, true}]
 *                                 [--description]
 *                                 [--disabled {false, true}]
 *                                 [--evaluation-frequency]
 *                                 [--region]
 *                                 [--severity]
 *                                 [--subscription]
 *                                 [--tags]
 *                                 [--target-resource-type]
 *                                 [--window-size]
 * ```
 *
 * @param {string} condition The condition which triggers the rule.
 * @param {string} name Name of the alert rule.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} scopes Space-separated list of scopes the rule applies to. The resources specified in this parameter must be of the same type and exist in the same location.
 */
declare class az_monitor_metrics_alert_create_command_builder extends CommandBuilder<az_monitor_metrics_alert_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, condition: string, name: string, resourceGroup: string, scopes: string);
    /** The condition which triggers the rule. */
    condition(value: string): az_monitor_metrics_alert_create_command_builder;
    /** Name of the alert rule. */
    name(value: string): az_monitor_metrics_alert_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_metrics_alert_create_command_builder;
    /** Space-separated list of scopes the rule applies to. The resources specified in this parameter must be of the same type and exist in the same location. */
    scopes(value: string): az_monitor_metrics_alert_create_command_builder;
    /** Add an action group and optional webhook properties to fire when the alert is triggered. */
    action(value: string): az_monitor_metrics_alert_create_command_builder;
    /** Automatically resolve the alert. */
    autoMitigate(value: boolean): az_monitor_metrics_alert_create_command_builder;
    /** Free-text description of the rule. */
    description(value: string): az_monitor_metrics_alert_create_command_builder;
    /** Create the rule in a disabled state. */
    disabled(value: boolean): az_monitor_metrics_alert_create_command_builder;
    /** Frequency with which to evaluate the rule in "##h##m##s" format. */
    evaluationFrequency(value: string): az_monitor_metrics_alert_create_command_builder;
    /** The region of the target resource(s) in scopes. This must be provided when scopes is resource group or subscription. */
    targetResourceRegion(value: string): az_monitor_metrics_alert_create_command_builder;
    /** Severity of the alert from 0 (critical) to 4 (verbose). */
    severity(value: string): az_monitor_metrics_alert_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_metrics_alert_create_command_builder;
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_monitor_metrics_alert_create_command_builder;
    /** The resource type of the target resource(s) in scopes. This must be provided when scopes is resource group or subscription. */
    targetResourceType(value: string): az_monitor_metrics_alert_create_command_builder;
    /** Time over which to aggregate metrics in "##h##m##s" format. */
    windowSize(value: string): az_monitor_metrics_alert_create_command_builder;
}
/**
 * Delete a metrics-based alert rule.
 *
 * Syntax:
 * ```
 * az monitor metrics alert delete [--ids]
 *                                 [--name]
 *                                 [--resource-group]
 *                                 [--subscription]
 * ```
 */
declare class az_monitor_metrics_alert_delete_command_builder extends CommandBuilder<az_monitor_metrics_alert_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_monitor_metrics_alert_delete_command_builder;
    /** Name of the alert rule. */
    name(value: string): az_monitor_metrics_alert_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_metrics_alert_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_metrics_alert_delete_command_builder;
}
/**
 * List metric-based alert rules.
 *
 * Syntax:
 * ```
 * az monitor metrics alert list [--query-examples]
 *                               [--resource-group]
 *                               [--subscription]
 * ```
 */
declare class az_monitor_metrics_alert_list_command_builder extends CommandBuilder<az_monitor_metrics_alert_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_monitor_metrics_alert_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_metrics_alert_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_metrics_alert_list_command_builder;
}
/**
 * Show a metrics-based alert rule.
 *
 * Syntax:
 * ```
 * az monitor metrics alert show [--ids]
 *                               [--name]
 *                               [--query-examples]
 *                               [--resource-group]
 *                               [--subscription]
 * ```
 */
declare class az_monitor_metrics_alert_show_command_builder extends CommandBuilder<az_monitor_metrics_alert_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_monitor_metrics_alert_show_command_builder;
    /** Name of the alert rule. */
    name(value: string): az_monitor_metrics_alert_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_monitor_metrics_alert_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_metrics_alert_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_metrics_alert_show_command_builder;
}
/**
 * Update a metric-based alert rule.
 *
 * Syntax:
 * ```
 * az monitor metrics alert update [--add]
 *                                 [--add-action]
 *                                 [--add-condition]
 *                                 [--auto-mitigate {false, true}]
 *                                 [--description]
 *                                 [--enabled {false, true}]
 *                                 [--evaluation-frequency]
 *                                 [--force-string]
 *                                 [--ids]
 *                                 [--name]
 *                                 [--remove]
 *                                 [--remove-actions]
 *                                 [--remove-conditions]
 *                                 [--resource-group]
 *                                 [--scopes]
 *                                 [--set]
 *                                 [--severity]
 *                                 [--subscription]
 *                                 [--tags]
 *                                 [--window-size]
 * ```
 */
declare class az_monitor_metrics_alert_update_command_builder extends CommandBuilder<az_monitor_metrics_alert_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_monitor_metrics_alert_update_command_builder;
    /** Add an action group and optional webhook properties to fire when the alert is triggered. */
    addAction(value: string): az_monitor_metrics_alert_update_command_builder;
    /** Add a condition which triggers the rule. */
    addCondition(value: string): az_monitor_metrics_alert_update_command_builder;
    /** Automatically resolve the alert. */
    autoMitigate(value: boolean): az_monitor_metrics_alert_update_command_builder;
    /** Free-text description of the rule. */
    description(value: string): az_monitor_metrics_alert_update_command_builder;
    /** Whether the metric alert rule is enabled. */
    enabled(value: boolean): az_monitor_metrics_alert_update_command_builder;
    /** Frequency with which to evaluate the rule in "##h##m##s" format. */
    evaluationFrequency(value: string): az_monitor_metrics_alert_update_command_builder;
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_monitor_metrics_alert_update_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_monitor_metrics_alert_update_command_builder;
    /** Name of the alert rule. */
    name(value: string): az_monitor_metrics_alert_update_command_builder;
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_monitor_metrics_alert_update_command_builder;
    /** Space-separated list of action group names to remove. */
    removeActions(value: string): az_monitor_metrics_alert_update_command_builder;
    /** Space-separated list of condition names to remove. */
    removeConditions(value: string): az_monitor_metrics_alert_update_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_metrics_alert_update_command_builder;
    /** Space-separated list of scopes the rule applies to. The resources specified in this parameter must be of the same type and exist in the same location. */
    scopes(value: string): az_monitor_metrics_alert_update_command_builder;
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_monitor_metrics_alert_update_command_builder;
    /** Severity of the alert from 0 (critical) to 4 (verbose). */
    severity(value: string): az_monitor_metrics_alert_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_metrics_alert_update_command_builder;
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_monitor_metrics_alert_update_command_builder;
    /** Time over which to aggregate metrics in "##h##m##s" format. */
    windowSize(value: string): az_monitor_metrics_alert_update_command_builder;
}
/**
 * List the metric values for a resource.
 *
 * Syntax:
 * ```
 * az monitor metrics list --resource
 *                         [--aggregation {Average, Count, Maximum, Minimum, Total}]
 *                         [--dimension]
 *                         [--end-time]
 *                         [--filter]
 *                         [--interval]
 *                         [--metadata]
 *                         [--metrics]
 *                         [--namespace]
 *                         [--offset]
 *                         [--orderby]
 *                         [--query-examples]
 *                         [--resource-group]
 *                         [--resource-namespace]
 *                         [--resource-parent]
 *                         [--resource-type]
 *                         [--start-time]
 *                         [--subscription]
 *                         [--top]
 * ```
 *
 * @param {string} resource Name or ID of the target resource.
 */
declare class az_monitor_metrics_list_command_builder extends CommandBuilder<az_monitor_metrics_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, resource: string);
    /** Name or ID of the target resource. */
    resource(value: string): az_monitor_metrics_list_command_builder;
    /** The list of aggregation types (space-separated) to retrieve. */
    aggregation(value: 'Average' | 'Count' | 'Maximum' | 'Minimum' | 'Total'): az_monitor_metrics_list_command_builder;
    /** The list of dimensions (space-separated) the metrics are queried into. */
    dimension(value: string): az_monitor_metrics_list_command_builder;
    /** End time of the query. Defaults to the current time. Format: date (yyyy-mm-dd) time (hh:mm:ss.xxxxx) timezone (+/-hh:mm). */
    endTime(value: string): az_monitor_metrics_list_command_builder;
    /** A string used to reduce the set of metric data returned. eg. "BlobType eq '\*'". */
    filter(value: string): az_monitor_metrics_list_command_builder;
    /** The interval over which to aggregate metrics, in ##h##m format. */
    interval(value: string): az_monitor_metrics_list_command_builder;
    /** Returns the metadata values instead of metric data. */
    metadata(value: string): az_monitor_metrics_list_command_builder;
    /** Space-separated list of metric names to retrieve. */
    metrics(value: string): az_monitor_metrics_list_command_builder;
    /** Namespace to query metric definitions for. */
    namespace(value: string): az_monitor_metrics_list_command_builder;
    /** Time offset of the query range, in ##d##h format. */
    offset(value: string): az_monitor_metrics_list_command_builder;
    /** Aggregation to use for sorting results and the direction of the sort. Only one order can be specificed. Examples: sum asc. */
    orderby(value: string): az_monitor_metrics_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_monitor_metrics_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_metrics_list_command_builder;
    /** Target resource provider namespace. */
    resourceNamespace(value: string): az_monitor_metrics_list_command_builder;
    /** Target resource parent path, if applicable. */
    resourceParent(value: string): az_monitor_metrics_list_command_builder;
    /** Target resource type. Can also accept namespace/type format (Ex: 'Microsoft.Compute/virtualMachines'). */
    resourceType(value: string): az_monitor_metrics_list_command_builder;
    /** Start time of the query. Format: date (yyyy-mm-dd) time (hh:mm:ss.xxxxx) timezone (+/-hh:mm). */
    startTime(value: string): az_monitor_metrics_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_metrics_list_command_builder;
    /** Max number of records to retrieve. Valid only if --filter used. */
    top(value: string): az_monitor_metrics_list_command_builder;
}
/**
 * Lists the metric definitions for the resource.
 *
 * Syntax:
 * ```
 * az monitor metrics list-definitions --resource
 *                                     [--namespace]
 *                                     [--resource-group]
 *                                     [--resource-namespace]
 *                                     [--resource-parent]
 *                                     [--resource-type]
 *                                     [--subscription]
 * ```
 *
 * @param {string} resource Name or ID of the target resource.
 */
declare class az_monitor_metrics_list_definitions_command_builder extends CommandBuilder<az_monitor_metrics_list_definitions_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, resource: string);
    /** Name or ID of the target resource. */
    resource(value: string): az_monitor_metrics_list_definitions_command_builder;
    /** Namespace to query metric definitions for. */
    namespace(value: string): az_monitor_metrics_list_definitions_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_metrics_list_definitions_command_builder;
    /** Target resource provider namespace. */
    resourceNamespace(value: string): az_monitor_metrics_list_definitions_command_builder;
    /** Target resource parent path, if applicable. */
    resourceParent(value: string): az_monitor_metrics_list_definitions_command_builder;
    /** Target resource type. Can also accept namespace/type format (Ex: 'Microsoft.Compute/virtualMachines'). */
    resourceType(value: string): az_monitor_metrics_list_definitions_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_metrics_list_definitions_command_builder;
}
/**
 * Approve a private endpoint connection of a private link scope resource.
 *
 * Syntax:
 * ```
 * az monitor private-link-scope private-endpoint-connection approve [--description]
 *                                                                   [--id]
 *                                                                   [--name]
 *                                                                   [--resource-group]
 *                                                                   [--scope-name]
 *                                                                   [--subscription]
 * ```
 */
declare class az_monitor_private_link_scope_private_endpoint_connection_approve_command_builder extends CommandBuilder<az_monitor_private_link_scope_private_endpoint_connection_approve_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Comments for approve operation. */
    description(value: string): az_monitor_private_link_scope_private_endpoint_connection_approve_command_builder;
    /** The ID of the private endpoint connection associated with the private link scope. You can get it using `az monitor private-link-scope show`. */
    id(value: string): az_monitor_private_link_scope_private_endpoint_connection_approve_command_builder;
    /** Name of the private endpoint connection. */
    name(value: string): az_monitor_private_link_scope_private_endpoint_connection_approve_command_builder;
    /** The resource group name of specified private link scope. */
    resourceGroup(value: string): az_monitor_private_link_scope_private_endpoint_connection_approve_command_builder;
    /** Name of the Azure Monitor Private Link Scope. */
    scopeName(value: string): az_monitor_private_link_scope_private_endpoint_connection_approve_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_private_link_scope_private_endpoint_connection_approve_command_builder;
}
/**
 * Delete a private endpoint connection of a private link scope resource.
 *
 * Syntax:
 * ```
 * az monitor private-link-scope private-endpoint-connection delete [--id]
 *                                                                  [--name]
 *                                                                  [--resource-group]
 *                                                                  [--scope-name]
 *                                                                  [--subscription]
 *                                                                  [--yes]
 * ```
 */
declare class az_monitor_private_link_scope_private_endpoint_connection_delete_command_builder extends CommandBuilder<az_monitor_private_link_scope_private_endpoint_connection_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** The ID of the private endpoint connection associated with the private link scope. You can get it using `az monitor private-link-scope show`. */
    id(value: string): az_monitor_private_link_scope_private_endpoint_connection_delete_command_builder;
    /** The name of the private endpoint connection associated with the private link scope. */
    name(value: string): az_monitor_private_link_scope_private_endpoint_connection_delete_command_builder;
    /** The resource group name of specified private link scope. */
    resourceGroup(value: string): az_monitor_private_link_scope_private_endpoint_connection_delete_command_builder;
    /** Name of the Azure Monitor Private Link Scope. */
    scopeName(value: string): az_monitor_private_link_scope_private_endpoint_connection_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_private_link_scope_private_endpoint_connection_delete_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_monitor_private_link_scope_private_endpoint_connection_delete_command_builder;
}
/**
 * List all private endpoint connections of a private link scope resource.
 *
 * Syntax:
 * ```
 * az monitor private-link-scope private-endpoint-connection list --resource-group
 *                                                                --scope-name
 *                                                                [--query-examples]
 *                                                                [--subscription]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} scopeName Name of the Azure Monitor Private Link Scope.
 */
declare class az_monitor_private_link_scope_private_endpoint_connection_list_command_builder extends CommandBuilder<az_monitor_private_link_scope_private_endpoint_connection_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, resourceGroup: string, scopeName: string);
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_private_link_scope_private_endpoint_connection_list_command_builder;
    /** Name of the Azure Monitor Private Link Scope. */
    scopeName(value: string): az_monitor_private_link_scope_private_endpoint_connection_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_monitor_private_link_scope_private_endpoint_connection_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_private_link_scope_private_endpoint_connection_list_command_builder;
}
/**
 * Reject a private endpoint connection of a private link scope resource.
 *
 * Syntax:
 * ```
 * az monitor private-link-scope private-endpoint-connection reject [--description]
 *                                                                  [--id]
 *                                                                  [--name]
 *                                                                  [--resource-group]
 *                                                                  [--scope-name]
 *                                                                  [--subscription]
 * ```
 */
declare class az_monitor_private_link_scope_private_endpoint_connection_reject_command_builder extends CommandBuilder<az_monitor_private_link_scope_private_endpoint_connection_reject_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Comments for reject operation. */
    description(value: string): az_monitor_private_link_scope_private_endpoint_connection_reject_command_builder;
    /** The ID of the private endpoint connection associated with the private link scope. You can get it using `az monitor private-link-scope show`. */
    id(value: string): az_monitor_private_link_scope_private_endpoint_connection_reject_command_builder;
    /** Name of the private endpoint connection. */
    name(value: string): az_monitor_private_link_scope_private_endpoint_connection_reject_command_builder;
    /** The resource group name of specified private link scope. */
    resourceGroup(value: string): az_monitor_private_link_scope_private_endpoint_connection_reject_command_builder;
    /** Name of the Azure Monitor Private Link Scope. */
    scopeName(value: string): az_monitor_private_link_scope_private_endpoint_connection_reject_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_private_link_scope_private_endpoint_connection_reject_command_builder;
}
/**
 * Show a private endpoint connection of a private link scope resource.
 *
 * Syntax:
 * ```
 * az monitor private-link-scope private-endpoint-connection show [--id]
 *                                                                [--name]
 *                                                                [--query-examples]
 *                                                                [--resource-group]
 *                                                                [--scope-name]
 *                                                                [--subscription]
 * ```
 */
declare class az_monitor_private_link_scope_private_endpoint_connection_show_command_builder extends CommandBuilder<az_monitor_private_link_scope_private_endpoint_connection_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** The ID of the private endpoint connection associated with the private link scope. You can get it using `az monitor private-link-scope show`. */
    id(value: string): az_monitor_private_link_scope_private_endpoint_connection_show_command_builder;
    /** Name of the private endpoint connection. */
    name(value: string): az_monitor_private_link_scope_private_endpoint_connection_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_monitor_private_link_scope_private_endpoint_connection_show_command_builder;
    /** The resource group name of specified private link scope. */
    resourceGroup(value: string): az_monitor_private_link_scope_private_endpoint_connection_show_command_builder;
    /** Name of the Azure Monitor Private Link Scope. */
    scopeName(value: string): az_monitor_private_link_scope_private_endpoint_connection_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_private_link_scope_private_endpoint_connection_show_command_builder;
}
/**
 * List all private link resources of a private link scope resource.
 *
 * Syntax:
 * ```
 * az monitor private-link-scope private-link-resource list --resource-group
 *                                                          --scope-name
 *                                                          [--query-examples]
 *                                                          [--subscription]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} scopeName Name of the Azure Monitor Private Link Scope.
 */
declare class az_monitor_private_link_scope_private_link_resource_list_command_builder extends CommandBuilder<az_monitor_private_link_scope_private_link_resource_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, resourceGroup: string, scopeName: string);
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_private_link_scope_private_link_resource_list_command_builder;
    /** Name of the Azure Monitor Private Link Scope. */
    scopeName(value: string): az_monitor_private_link_scope_private_link_resource_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_monitor_private_link_scope_private_link_resource_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_private_link_scope_private_link_resource_list_command_builder;
}
/**
 * Show a private link resource of a private link scope resource.
 *
 * Syntax:
 * ```
 * az monitor private-link-scope private-link-resource show --name
 *                                                          --resource-group
 *                                                          --scope-name
 *                                                          [--query-examples]
 *                                                          [--subscription]
 * ```
 *
 * @param {string} name Name of the private link resource.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} scopeName Name of the Azure Monitor Private Link Scope.
 */
declare class az_monitor_private_link_scope_private_link_resource_show_command_builder extends CommandBuilder<az_monitor_private_link_scope_private_link_resource_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string, scopeName: string);
    /** Name of the private link resource. */
    name(value: string): az_monitor_private_link_scope_private_link_resource_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_private_link_scope_private_link_resource_show_command_builder;
    /** Name of the Azure Monitor Private Link Scope. */
    scopeName(value: string): az_monitor_private_link_scope_private_link_resource_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_monitor_private_link_scope_private_link_resource_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_private_link_scope_private_link_resource_show_command_builder;
}
/**
 * Create a scoped resource for a private link scope resource.
 *
 * Syntax:
 * ```
 * az monitor private-link-scope scoped-resource create --linked-resource
 *                                                      --name
 *                                                      --resource-group
 *                                                      --scope-name
 *                                                      [--subscription]
 * ```
 *
 * @param {string} linkedResource ARM resource ID of the linked resource. It should be one of log analytics workspace or application insights component.
 * @param {string} name Name of the assigned resource.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} scopeName Name of the Azure Monitor Private Link Scope.
 */
declare class az_monitor_private_link_scope_scoped_resource_create_command_builder extends CommandBuilder<az_monitor_private_link_scope_scoped_resource_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, linkedResource: string, name: string, resourceGroup: string, scopeName: string);
    /** ARM resource ID of the linked resource. It should be one of log analytics workspace or application insights component. */
    linkedResource(value: string): az_monitor_private_link_scope_scoped_resource_create_command_builder;
    /** Name of the assigned resource. */
    name(value: string): az_monitor_private_link_scope_scoped_resource_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_private_link_scope_scoped_resource_create_command_builder;
    /** Name of the Azure Monitor Private Link Scope. */
    scopeName(value: string): az_monitor_private_link_scope_scoped_resource_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_private_link_scope_scoped_resource_create_command_builder;
}
/**
 * Delete a scoped resource of a private link scope resource.
 *
 * Syntax:
 * ```
 * az monitor private-link-scope scoped-resource delete --name
 *                                                      --resource-group
 *                                                      --scope-name
 *                                                      [--subscription]
 *                                                      [--yes]
 * ```
 *
 * @param {string} name Name of the assigned resource.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} scopeName Name of the Azure Monitor Private Link Scope.
 */
declare class az_monitor_private_link_scope_scoped_resource_delete_command_builder extends CommandBuilder<az_monitor_private_link_scope_scoped_resource_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string, scopeName: string);
    /** Name of the assigned resource. */
    name(value: string): az_monitor_private_link_scope_scoped_resource_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_private_link_scope_scoped_resource_delete_command_builder;
    /** Name of the Azure Monitor Private Link Scope. */
    scopeName(value: string): az_monitor_private_link_scope_scoped_resource_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_private_link_scope_scoped_resource_delete_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_monitor_private_link_scope_scoped_resource_delete_command_builder;
}
/**
 * List all scoped resource of a private link scope resource.
 *
 * Syntax:
 * ```
 * az monitor private-link-scope scoped-resource list --resource-group
 *                                                    --scope-name
 *                                                    [--query-examples]
 *                                                    [--subscription]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} scopeName Name of the Azure Monitor Private Link Scope.
 */
declare class az_monitor_private_link_scope_scoped_resource_list_command_builder extends CommandBuilder<az_monitor_private_link_scope_scoped_resource_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, resourceGroup: string, scopeName: string);
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_private_link_scope_scoped_resource_list_command_builder;
    /** Name of the Azure Monitor Private Link Scope. */
    scopeName(value: string): az_monitor_private_link_scope_scoped_resource_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_monitor_private_link_scope_scoped_resource_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_private_link_scope_scoped_resource_list_command_builder;
}
/**
 * Show a scoped resource of a private link scope resource.
 *
 * Syntax:
 * ```
 * az monitor private-link-scope scoped-resource show --name
 *                                                    --resource-group
 *                                                    --scope-name
 *                                                    [--query-examples]
 *                                                    [--subscription]
 * ```
 *
 * @param {string} name Name of the assigned resource.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} scopeName Name of the Azure Monitor Private Link Scope.
 */
declare class az_monitor_private_link_scope_scoped_resource_show_command_builder extends CommandBuilder<az_monitor_private_link_scope_scoped_resource_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string, scopeName: string);
    /** Name of the assigned resource. */
    name(value: string): az_monitor_private_link_scope_scoped_resource_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_private_link_scope_scoped_resource_show_command_builder;
    /** Name of the Azure Monitor Private Link Scope. */
    scopeName(value: string): az_monitor_private_link_scope_scoped_resource_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_monitor_private_link_scope_scoped_resource_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_private_link_scope_scoped_resource_show_command_builder;
}
/**
 * Create a private link scope resource.
 *
 * Syntax:
 * ```
 * az monitor private-link-scope create --name
 *                                      --resource-group
 *                                      [--subscription]
 *                                      [--tags]
 * ```
 *
 * @param {string} name Name of the Azure Monitor Private Link Scope.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_monitor_private_link_scope_create_command_builder extends CommandBuilder<az_monitor_private_link_scope_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** Name of the Azure Monitor Private Link Scope. */
    name(value: string): az_monitor_private_link_scope_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_private_link_scope_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_private_link_scope_create_command_builder;
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_monitor_private_link_scope_create_command_builder;
}
/**
 * Delete a monitor private link scope resource.
 *
 * Syntax:
 * ```
 * az monitor private-link-scope delete --name
 *                                      --resource-group
 *                                      [--subscription]
 *                                      [--yes]
 * ```
 *
 * @param {string} name Name of the Azure Monitor Private Link Scope.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_monitor_private_link_scope_delete_command_builder extends CommandBuilder<az_monitor_private_link_scope_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** Name of the Azure Monitor Private Link Scope. */
    name(value: string): az_monitor_private_link_scope_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_private_link_scope_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_private_link_scope_delete_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_monitor_private_link_scope_delete_command_builder;
}
/**
 * List all monitor private link scope resource.
 *
 * Syntax:
 * ```
 * az monitor private-link-scope list [--query-examples]
 *                                    [--resource-group]
 *                                    [--subscription]
 * ```
 */
declare class az_monitor_private_link_scope_list_command_builder extends CommandBuilder<az_monitor_private_link_scope_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_monitor_private_link_scope_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_private_link_scope_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_private_link_scope_list_command_builder;
}
/**
 * Show a monitor private link scope resource.
 *
 * Syntax:
 * ```
 * az monitor private-link-scope show --name
 *                                    --resource-group
 *                                    [--query-examples]
 *                                    [--subscription]
 * ```
 *
 * @param {string} name Name of the Azure Monitor Private Link Scope.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_monitor_private_link_scope_show_command_builder extends CommandBuilder<az_monitor_private_link_scope_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** Name of the Azure Monitor Private Link Scope. */
    name(value: string): az_monitor_private_link_scope_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_private_link_scope_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_monitor_private_link_scope_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_private_link_scope_show_command_builder;
}
/**
 * Update a monitor private link scope resource.
 *
 * Syntax:
 * ```
 * az monitor private-link-scope update --name
 *                                      --resource-group
 *                                      --tags
 *                                      [--subscription]
 * ```
 *
 * @param {string} name Name of the Azure Monitor Private Link Scope.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} tags Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags.
 */
declare class az_monitor_private_link_scope_update_command_builder extends CommandBuilder<az_monitor_private_link_scope_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string, tags: string);
    /** Name of the Azure Monitor Private Link Scope. */
    name(value: string): az_monitor_private_link_scope_update_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_monitor_private_link_scope_update_command_builder;
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_monitor_private_link_scope_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_private_link_scope_update_command_builder;
}
/**
 * Clone metrics alert rules from one resource to another resource.
 *
 * Syntax:
 * ```
 * az monitor clone --source-resource
 *                  --target-resource
 *                  [--always-clone]
 *                  [--subscription]
 *                  [--types {metricsAlert}]
 * ```
 *
 * @param {string} sourceResource Resource ID of the source resource.
 * @param {string} targetResource Resource ID of the target resource.
 */
declare class az_monitor_clone_command_builder extends CommandBuilder<az_monitor_clone_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, sourceResource: string, targetResource: string);
    /** Resource ID of the source resource. */
    sourceResource(value: string): az_monitor_clone_command_builder;
    /** Resource ID of the target resource. */
    targetResource(value: string): az_monitor_clone_command_builder;
    /** If this argument is applied, all monitor settings would be cloned instead of expanding its scope. */
    alwaysClone(value: string): az_monitor_clone_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_monitor_clone_command_builder;
    /** List of types of monitor settings which would be cloned. */
    types(value: 'metricsAlert'): az_monitor_clone_command_builder;
}
export {};
