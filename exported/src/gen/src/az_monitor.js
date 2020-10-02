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
/** Manage action groups. */
var az_monitor_action_group = /** @class */ (function () {
    function az_monitor_action_group() {
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
    az_monitor_action_group.create = function (name, resourceGroup) {
        return new az_monitor_action_group_create_command_builder("az monitor action-group create", 'az_monitor_action_group_create_command_result', name, resourceGroup);
    };
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
    az_monitor_action_group["delete"] = function () {
        return new az_monitor_action_group_delete_command_builder("az monitor action-group delete", 'az_monitor_action_group_delete_command_result');
    };
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
    az_monitor_action_group.enable_receiver = function (name) {
        return new az_monitor_action_group_enable_receiver_command_builder("az monitor action-group enable-receiver", 'az_monitor_action_group_enable_receiver_command_result', name);
    };
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
    az_monitor_action_group.list = function () {
        return new az_monitor_action_group_list_command_builder("az monitor action-group list", 'az_monitor_action_group_list_command_result');
    };
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
    az_monitor_action_group.show = function () {
        return new az_monitor_action_group_show_command_builder("az monitor action-group show", 'az_monitor_action_group_show_command_result');
    };
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
    az_monitor_action_group.update = function () {
        return new az_monitor_action_group_update_command_builder("az monitor action-group update", 'az_monitor_action_group_update_command_result');
    };
    return az_monitor_action_group;
}());
exports.az_monitor_action_group = az_monitor_action_group;
/** Manage action groups for activity log alerts. */
var az_monitor_activity_log_alert_action_group = /** @class */ (function () {
    function az_monitor_activity_log_alert_action_group() {
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
    az_monitor_activity_log_alert_action_group.add = function (actionGroup) {
        return new az_monitor_activity_log_alert_action_group_add_command_builder("az monitor activity-log alert action-group add", 'az_monitor_activity_log_alert_action_group_add_command_result', actionGroup);
    };
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
    az_monitor_activity_log_alert_action_group.remove = function (actionGroup) {
        return new az_monitor_activity_log_alert_action_group_remove_command_builder("az monitor activity-log alert action-group remove", 'az_monitor_activity_log_alert_action_group_remove_command_result', actionGroup);
    };
    return az_monitor_activity_log_alert_action_group;
}());
exports.az_monitor_activity_log_alert_action_group = az_monitor_activity_log_alert_action_group;
/** Manage scopes for activity log alerts. */
var az_monitor_activity_log_alert_scope = /** @class */ (function () {
    function az_monitor_activity_log_alert_scope() {
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
    az_monitor_activity_log_alert_scope.add = function (scope) {
        return new az_monitor_activity_log_alert_scope_add_command_builder("az monitor activity-log alert scope add", 'az_monitor_activity_log_alert_scope_add_command_result', scope);
    };
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
    az_monitor_activity_log_alert_scope.remove = function (scope) {
        return new az_monitor_activity_log_alert_scope_remove_command_builder("az monitor activity-log alert scope remove", 'az_monitor_activity_log_alert_scope_remove_command_result', scope);
    };
    return az_monitor_activity_log_alert_scope;
}());
exports.az_monitor_activity_log_alert_scope = az_monitor_activity_log_alert_scope;
/** Manage activity log alerts. */
var az_monitor_activity_log_alert = /** @class */ (function () {
    function az_monitor_activity_log_alert() {
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
    az_monitor_activity_log_alert.create = function (name, resourceGroup) {
        return new az_monitor_activity_log_alert_create_command_builder("az monitor activity-log alert create", 'az_monitor_activity_log_alert_create_command_result', name, resourceGroup);
    };
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
    az_monitor_activity_log_alert["delete"] = function () {
        return new az_monitor_activity_log_alert_delete_command_builder("az monitor activity-log alert delete", 'az_monitor_activity_log_alert_delete_command_result');
    };
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
    az_monitor_activity_log_alert.list = function () {
        return new az_monitor_activity_log_alert_list_command_builder("az monitor activity-log alert list", 'az_monitor_activity_log_alert_list_command_result');
    };
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
    az_monitor_activity_log_alert.show = function () {
        return new az_monitor_activity_log_alert_show_command_builder("az monitor activity-log alert show", 'az_monitor_activity_log_alert_show_command_result');
    };
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
    az_monitor_activity_log_alert.update = function () {
        return new az_monitor_activity_log_alert_update_command_builder("az monitor activity-log alert update", 'az_monitor_activity_log_alert_update_command_result');
    };
    return az_monitor_activity_log_alert;
}());
exports.az_monitor_activity_log_alert = az_monitor_activity_log_alert;
/** Manage activity logs. */
var az_monitor_activity_log = /** @class */ (function () {
    function az_monitor_activity_log() {
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
    az_monitor_activity_log.list = function () {
        return new az_monitor_activity_log_list_command_builder("az monitor activity-log list", 'az_monitor_activity_log_list_command_result');
    };
    /**
     * List the event categories of activity logs.
     *
     * Syntax:
     * ```
     * az monitor activity-log list-categories [--subscription]
     * ```
     */
    az_monitor_activity_log.list_categories = function () {
        return new az_monitor_activity_log_list_categories_command_builder("az monitor activity-log list-categories", 'az_monitor_activity_log_list_categories_command_result');
    };
    return az_monitor_activity_log;
}());
exports.az_monitor_activity_log = az_monitor_activity_log;
/** Manage classic metric-based alert rules. */
var az_monitor_alert = /** @class */ (function () {
    function az_monitor_alert() {
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
    az_monitor_alert.create = function (condition, name, target) {
        return new az_monitor_alert_create_command_builder("az monitor alert create", 'az_monitor_alert_create_command_result', condition, name, target);
    };
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
    az_monitor_alert["delete"] = function () {
        return new az_monitor_alert_delete_command_builder("az monitor alert delete", 'az_monitor_alert_delete_command_result');
    };
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
    az_monitor_alert.list = function (resourceGroup) {
        return new az_monitor_alert_list_command_builder("az monitor alert list", 'az_monitor_alert_list_command_result', resourceGroup);
    };
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
    az_monitor_alert.list_incidents = function (resourceGroup, ruleName) {
        return new az_monitor_alert_list_incidents_command_builder("az monitor alert list-incidents", 'az_monitor_alert_list_incidents_command_result', resourceGroup, ruleName);
    };
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
    az_monitor_alert.show = function () {
        return new az_monitor_alert_show_command_builder("az monitor alert show", 'az_monitor_alert_show_command_result');
    };
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
    az_monitor_alert.show_incident = function () {
        return new az_monitor_alert_show_incident_command_builder("az monitor alert show-incident", 'az_monitor_alert_show_incident_command_result');
    };
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
    az_monitor_alert.update = function () {
        return new az_monitor_alert_update_command_builder("az monitor alert update", 'az_monitor_alert_update_command_result');
    };
    return az_monitor_alert;
}());
exports.az_monitor_alert = az_monitor_alert;
/** Manage autoscaling profiles. */
var az_monitor_autoscale_profile = /** @class */ (function () {
    function az_monitor_autoscale_profile() {
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
    az_monitor_autoscale_profile.create = function (autoscaleName, count, name, resourceGroup, timezone) {
        return new az_monitor_autoscale_profile_create_command_builder("az monitor autoscale profile create", 'az_monitor_autoscale_profile_create_command_result', autoscaleName, count, name, resourceGroup, timezone);
    };
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
    az_monitor_autoscale_profile["delete"] = function (autoscaleName, name, resourceGroup) {
        return new az_monitor_autoscale_profile_delete_command_builder("az monitor autoscale profile delete", 'az_monitor_autoscale_profile_delete_command_result', autoscaleName, name, resourceGroup);
    };
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
    az_monitor_autoscale_profile.list = function (autoscaleName, resourceGroup) {
        return new az_monitor_autoscale_profile_list_command_builder("az monitor autoscale profile list", 'az_monitor_autoscale_profile_list_command_result', autoscaleName, resourceGroup);
    };
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
    az_monitor_autoscale_profile.list_timezones = function () {
        return new az_monitor_autoscale_profile_list_timezones_command_builder("az monitor autoscale profile list-timezones", 'az_monitor_autoscale_profile_list_timezones_command_result');
    };
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
    az_monitor_autoscale_profile.show = function (autoscaleName, name, resourceGroup) {
        return new az_monitor_autoscale_profile_show_command_builder("az monitor autoscale profile show", 'az_monitor_autoscale_profile_show_command_result', autoscaleName, name, resourceGroup);
    };
    return az_monitor_autoscale_profile;
}());
exports.az_monitor_autoscale_profile = az_monitor_autoscale_profile;
/** Manage autoscale scaling rules. */
var az_monitor_autoscale_rule = /** @class */ (function () {
    function az_monitor_autoscale_rule() {
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
    az_monitor_autoscale_rule.copy = function (autoscaleName, destSchedule, index, resourceGroup) {
        return new az_monitor_autoscale_rule_copy_command_builder("az monitor autoscale rule copy", 'az_monitor_autoscale_rule_copy_command_result', autoscaleName, destSchedule, index, resourceGroup);
    };
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
    az_monitor_autoscale_rule.create = function (autoscaleName, condition, scale) {
        return new az_monitor_autoscale_rule_create_command_builder("az monitor autoscale rule create", 'az_monitor_autoscale_rule_create_command_result', autoscaleName, condition, scale);
    };
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
    az_monitor_autoscale_rule["delete"] = function (autoscaleName, index, resourceGroup) {
        return new az_monitor_autoscale_rule_delete_command_builder("az monitor autoscale rule delete", 'az_monitor_autoscale_rule_delete_command_result', autoscaleName, index, resourceGroup);
    };
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
    az_monitor_autoscale_rule.list = function (autoscaleName, resourceGroup) {
        return new az_monitor_autoscale_rule_list_command_builder("az monitor autoscale rule list", 'az_monitor_autoscale_rule_list_command_result', autoscaleName, resourceGroup);
    };
    return az_monitor_autoscale_rule;
}());
exports.az_monitor_autoscale_rule = az_monitor_autoscale_rule;
/** Manage autoscale settings. */
var az_monitor_autoscale_settings = /** @class */ (function () {
    function az_monitor_autoscale_settings() {
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
    az_monitor_autoscale_settings.create = function (name, parameters, resourceGroup) {
        return new az_monitor_autoscale_settings_create_command_builder("az monitor autoscale-settings create", 'az_monitor_autoscale_settings_create_command_result', name, parameters, resourceGroup);
    };
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
    az_monitor_autoscale_settings["delete"] = function () {
        return new az_monitor_autoscale_settings_delete_command_builder("az monitor autoscale-settings delete", 'az_monitor_autoscale_settings_delete_command_result');
    };
    /**
     * Scaffold fully formed autoscale-settings' parameters as json template.
     *
     * Syntax:
     * ```
     * az monitor autoscale-settings get-parameters-template [--subscription]
     * ```
     */
    az_monitor_autoscale_settings.get_parameters_template = function () {
        return new az_monitor_autoscale_settings_get_parameters_template_command_builder("az monitor autoscale-settings get-parameters-template", 'az_monitor_autoscale_settings_get_parameters_template_command_result');
    };
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
    az_monitor_autoscale_settings.list = function (resourceGroup) {
        return new az_monitor_autoscale_settings_list_command_builder("az monitor autoscale-settings list", 'az_monitor_autoscale_settings_list_command_result', resourceGroup);
    };
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
    az_monitor_autoscale_settings.show = function () {
        return new az_monitor_autoscale_settings_show_command_builder("az monitor autoscale-settings show", 'az_monitor_autoscale_settings_show_command_result');
    };
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
    az_monitor_autoscale_settings.update = function (name, resourceGroup) {
        return new az_monitor_autoscale_settings_update_command_builder("az monitor autoscale-settings update", 'az_monitor_autoscale_settings_update_command_result', name, resourceGroup);
    };
    return az_monitor_autoscale_settings;
}());
exports.az_monitor_autoscale_settings = az_monitor_autoscale_settings;
/** Manage autoscale settings. */
var az_monitor_autoscale = /** @class */ (function () {
    function az_monitor_autoscale() {
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
    az_monitor_autoscale.create = function (count, resource) {
        return new az_monitor_autoscale_create_command_builder("az monitor autoscale create", 'az_monitor_autoscale_create_command_result', count, resource);
    };
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
    az_monitor_autoscale["delete"] = function () {
        return new az_monitor_autoscale_delete_command_builder("az monitor autoscale delete", 'az_monitor_autoscale_delete_command_result');
    };
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
    az_monitor_autoscale.list = function (resourceGroup) {
        return new az_monitor_autoscale_list_command_builder("az monitor autoscale list", 'az_monitor_autoscale_list_command_result', resourceGroup);
    };
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
    az_monitor_autoscale.show = function () {
        return new az_monitor_autoscale_show_command_builder("az monitor autoscale show", 'az_monitor_autoscale_show_command_result');
    };
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
    az_monitor_autoscale.update = function () {
        return new az_monitor_autoscale_update_command_builder("az monitor autoscale update", 'az_monitor_autoscale_update_command_result');
    };
    return az_monitor_autoscale;
}());
exports.az_monitor_autoscale = az_monitor_autoscale;
/** Retrieve service diagnostic settings categories. */
var az_monitor_diagnostic_settings_categories = /** @class */ (function () {
    function az_monitor_diagnostic_settings_categories() {
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
    az_monitor_diagnostic_settings_categories.list = function (resource) {
        return new az_monitor_diagnostic_settings_categories_list_command_builder("az monitor diagnostic-settings categories list", 'az_monitor_diagnostic_settings_categories_list_command_result', resource);
    };
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
    az_monitor_diagnostic_settings_categories.show = function (name, resource) {
        return new az_monitor_diagnostic_settings_categories_show_command_builder("az monitor diagnostic-settings categories show", 'az_monitor_diagnostic_settings_categories_show_command_result', name, resource);
    };
    return az_monitor_diagnostic_settings_categories;
}());
exports.az_monitor_diagnostic_settings_categories = az_monitor_diagnostic_settings_categories;
/** Manage diagnostic settings for subscription. */
var az_monitor_diagnostic_settings_subscription = /** @class */ (function () {
    function az_monitor_diagnostic_settings_subscription() {
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
    az_monitor_diagnostic_settings_subscription.create = function (location, logs, name) {
        return new az_monitor_diagnostic_settings_subscription_create_command_builder("az monitor diagnostic-settings subscription create", 'az_monitor_diagnostic_settings_subscription_create_command_result', location, logs, name);
    };
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
    az_monitor_diagnostic_settings_subscription["delete"] = function (name) {
        return new az_monitor_diagnostic_settings_subscription_delete_command_builder("az monitor diagnostic-settings subscription delete", 'az_monitor_diagnostic_settings_subscription_delete_command_result', name);
    };
    /**
     * Gets the active subscription diagnostic settings list for the specified subscriptionId.
     *
     * Syntax:
     * ```
     * az monitor diagnostic-settings subscription list [--query-examples]
     *                                                  [--subscription]
     * ```
     */
    az_monitor_diagnostic_settings_subscription.list = function () {
        return new az_monitor_diagnostic_settings_subscription_list_command_builder("az monitor diagnostic-settings subscription list", 'az_monitor_diagnostic_settings_subscription_list_command_result');
    };
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
    az_monitor_diagnostic_settings_subscription.show = function (name) {
        return new az_monitor_diagnostic_settings_subscription_show_command_builder("az monitor diagnostic-settings subscription show", 'az_monitor_diagnostic_settings_subscription_show_command_result', name);
    };
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
    az_monitor_diagnostic_settings_subscription.update = function (name) {
        return new az_monitor_diagnostic_settings_subscription_update_command_builder("az monitor diagnostic-settings subscription update", 'az_monitor_diagnostic_settings_subscription_update_command_result', name);
    };
    return az_monitor_diagnostic_settings_subscription;
}());
exports.az_monitor_diagnostic_settings_subscription = az_monitor_diagnostic_settings_subscription;
/** Manage service diagnostic settings. */
var az_monitor_diagnostic_settings = /** @class */ (function () {
    function az_monitor_diagnostic_settings() {
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
    az_monitor_diagnostic_settings.create = function (name, resource) {
        return new az_monitor_diagnostic_settings_create_command_builder("az monitor diagnostic-settings create", 'az_monitor_diagnostic_settings_create_command_result', name, resource);
    };
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
    az_monitor_diagnostic_settings["delete"] = function (name, resource) {
        return new az_monitor_diagnostic_settings_delete_command_builder("az monitor diagnostic-settings delete", 'az_monitor_diagnostic_settings_delete_command_result', name, resource);
    };
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
    az_monitor_diagnostic_settings.list = function (resource) {
        return new az_monitor_diagnostic_settings_list_command_builder("az monitor diagnostic-settings list", 'az_monitor_diagnostic_settings_list_command_result', resource);
    };
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
    az_monitor_diagnostic_settings.show = function (name, resource) {
        return new az_monitor_diagnostic_settings_show_command_builder("az monitor diagnostic-settings show", 'az_monitor_diagnostic_settings_show_command_result', name, resource);
    };
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
    az_monitor_diagnostic_settings.update = function (name, resource) {
        return new az_monitor_diagnostic_settings_update_command_builder("az monitor diagnostic-settings update", 'az_monitor_diagnostic_settings_update_command_result', name, resource);
    };
    return az_monitor_diagnostic_settings;
}());
exports.az_monitor_diagnostic_settings = az_monitor_diagnostic_settings;
/** Manage Azure log analytics cluster. */
var az_monitor_log_analytics_cluster = /** @class */ (function () {
    function az_monitor_log_analytics_cluster() {
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
    az_monitor_log_analytics_cluster.create = function (name, resourceGroup, skuCapacity) {
        return new az_monitor_log_analytics_cluster_create_command_builder("az monitor log-analytics cluster create", 'az_monitor_log_analytics_cluster_create_command_result', name, resourceGroup, skuCapacity);
    };
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
    az_monitor_log_analytics_cluster["delete"] = function (name, resourceGroup) {
        return new az_monitor_log_analytics_cluster_delete_command_builder("az monitor log-analytics cluster delete", 'az_monitor_log_analytics_cluster_delete_command_result', name, resourceGroup);
    };
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
    az_monitor_log_analytics_cluster.list = function () {
        return new az_monitor_log_analytics_cluster_list_command_builder("az monitor log-analytics cluster list", 'az_monitor_log_analytics_cluster_list_command_result');
    };
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
    az_monitor_log_analytics_cluster.show = function (name, resourceGroup) {
        return new az_monitor_log_analytics_cluster_show_command_builder("az monitor log-analytics cluster show", 'az_monitor_log_analytics_cluster_show_command_result', name, resourceGroup);
    };
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
    az_monitor_log_analytics_cluster.update = function (name, resourceGroup) {
        return new az_monitor_log_analytics_cluster_update_command_builder("az monitor log-analytics cluster update", 'az_monitor_log_analytics_cluster_update_command_result', name, resourceGroup);
    };
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
    az_monitor_log_analytics_cluster.wait = function (name, resourceGroup) {
        return new az_monitor_log_analytics_cluster_wait_command_builder("az monitor log-analytics cluster wait", 'az_monitor_log_analytics_cluster_wait_command_result', name, resourceGroup);
    };
    return az_monitor_log_analytics_cluster;
}());
exports.az_monitor_log_analytics_cluster = az_monitor_log_analytics_cluster;
/** Manage data export ruls for log analytics workspace. */
var az_monitor_log_analytics_workspace_data_export = /** @class */ (function () {
    function az_monitor_log_analytics_workspace_data_export() {
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
    az_monitor_log_analytics_workspace_data_export.create = function (destination, name, resourceGroup, workspaceName) {
        return new az_monitor_log_analytics_workspace_data_export_create_command_builder("az monitor log-analytics workspace data-export create", 'az_monitor_log_analytics_workspace_data_export_create_command_result', destination, name, resourceGroup, workspaceName);
    };
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
    az_monitor_log_analytics_workspace_data_export["delete"] = function (name, resourceGroup, workspaceName) {
        return new az_monitor_log_analytics_workspace_data_export_delete_command_builder("az monitor log-analytics workspace data-export delete", 'az_monitor_log_analytics_workspace_data_export_delete_command_result', name, resourceGroup, workspaceName);
    };
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
    az_monitor_log_analytics_workspace_data_export.list = function (resourceGroup, workspaceName) {
        return new az_monitor_log_analytics_workspace_data_export_list_command_builder("az monitor log-analytics workspace data-export list", 'az_monitor_log_analytics_workspace_data_export_list_command_result', resourceGroup, workspaceName);
    };
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
    az_monitor_log_analytics_workspace_data_export.show = function (name, resourceGroup, workspaceName) {
        return new az_monitor_log_analytics_workspace_data_export_show_command_builder("az monitor log-analytics workspace data-export show", 'az_monitor_log_analytics_workspace_data_export_show_command_result', name, resourceGroup, workspaceName);
    };
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
    az_monitor_log_analytics_workspace_data_export.update = function (name, resourceGroup, workspaceName) {
        return new az_monitor_log_analytics_workspace_data_export_update_command_builder("az monitor log-analytics workspace data-export update", 'az_monitor_log_analytics_workspace_data_export_update_command_result', name, resourceGroup, workspaceName);
    };
    return az_monitor_log_analytics_workspace_data_export;
}());
exports.az_monitor_log_analytics_workspace_data_export = az_monitor_log_analytics_workspace_data_export;
/** Manage linked service for log analytics workspace. */
var az_monitor_log_analytics_workspace_linked_service = /** @class */ (function () {
    function az_monitor_log_analytics_workspace_linked_service() {
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
    az_monitor_log_analytics_workspace_linked_service.create = function (name, resourceGroup, workspaceName) {
        return new az_monitor_log_analytics_workspace_linked_service_create_command_builder("az monitor log-analytics workspace linked-service create", 'az_monitor_log_analytics_workspace_linked_service_create_command_result', name, resourceGroup, workspaceName);
    };
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
    az_monitor_log_analytics_workspace_linked_service["delete"] = function (name, resourceGroup, workspaceName) {
        return new az_monitor_log_analytics_workspace_linked_service_delete_command_builder("az monitor log-analytics workspace linked-service delete", 'az_monitor_log_analytics_workspace_linked_service_delete_command_result', name, resourceGroup, workspaceName);
    };
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
    az_monitor_log_analytics_workspace_linked_service.list = function (resourceGroup, workspaceName) {
        return new az_monitor_log_analytics_workspace_linked_service_list_command_builder("az monitor log-analytics workspace linked-service list", 'az_monitor_log_analytics_workspace_linked_service_list_command_result', resourceGroup, workspaceName);
    };
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
    az_monitor_log_analytics_workspace_linked_service.show = function (name, resourceGroup, workspaceName) {
        return new az_monitor_log_analytics_workspace_linked_service_show_command_builder("az monitor log-analytics workspace linked-service show", 'az_monitor_log_analytics_workspace_linked_service_show_command_result', name, resourceGroup, workspaceName);
    };
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
    az_monitor_log_analytics_workspace_linked_service.update = function (name, resourceGroup, workspaceName) {
        return new az_monitor_log_analytics_workspace_linked_service_update_command_builder("az monitor log-analytics workspace linked-service update", 'az_monitor_log_analytics_workspace_linked_service_update_command_result', name, resourceGroup, workspaceName);
    };
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
    az_monitor_log_analytics_workspace_linked_service.wait = function (name, resourceGroup, workspaceName) {
        return new az_monitor_log_analytics_workspace_linked_service_wait_command_builder("az monitor log-analytics workspace linked-service wait", 'az_monitor_log_analytics_workspace_linked_service_wait_command_result', name, resourceGroup, workspaceName);
    };
    return az_monitor_log_analytics_workspace_linked_service;
}());
exports.az_monitor_log_analytics_workspace_linked_service = az_monitor_log_analytics_workspace_linked_service;
/** Manage linked storage account for log analytics workspace. */
var az_monitor_log_analytics_workspace_linked_storage = /** @class */ (function () {
    function az_monitor_log_analytics_workspace_linked_storage() {
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
    az_monitor_log_analytics_workspace_linked_storage.add = function (resourceGroup, storageAccounts, type, workspaceName) {
        return new az_monitor_log_analytics_workspace_linked_storage_add_command_builder("az monitor log-analytics workspace linked-storage add", 'az_monitor_log_analytics_workspace_linked_storage_add_command_result', resourceGroup, storageAccounts, type, workspaceName);
    };
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
    az_monitor_log_analytics_workspace_linked_storage.create = function (resourceGroup, type, workspaceName) {
        return new az_monitor_log_analytics_workspace_linked_storage_create_command_builder("az monitor log-analytics workspace linked-storage create", 'az_monitor_log_analytics_workspace_linked_storage_create_command_result', resourceGroup, type, workspaceName);
    };
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
    az_monitor_log_analytics_workspace_linked_storage["delete"] = function (resourceGroup, type, workspaceName) {
        return new az_monitor_log_analytics_workspace_linked_storage_delete_command_builder("az monitor log-analytics workspace linked-storage delete", 'az_monitor_log_analytics_workspace_linked_storage_delete_command_result', resourceGroup, type, workspaceName);
    };
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
    az_monitor_log_analytics_workspace_linked_storage.list = function (resourceGroup, workspaceName) {
        return new az_monitor_log_analytics_workspace_linked_storage_list_command_builder("az monitor log-analytics workspace linked-storage list", 'az_monitor_log_analytics_workspace_linked_storage_list_command_result', resourceGroup, workspaceName);
    };
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
    az_monitor_log_analytics_workspace_linked_storage.remove = function (resourceGroup, storageAccounts, type, workspaceName) {
        return new az_monitor_log_analytics_workspace_linked_storage_remove_command_builder("az monitor log-analytics workspace linked-storage remove", 'az_monitor_log_analytics_workspace_linked_storage_remove_command_result', resourceGroup, storageAccounts, type, workspaceName);
    };
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
    az_monitor_log_analytics_workspace_linked_storage.show = function (resourceGroup, type, workspaceName) {
        return new az_monitor_log_analytics_workspace_linked_storage_show_command_builder("az monitor log-analytics workspace linked-storage show", 'az_monitor_log_analytics_workspace_linked_storage_show_command_result', resourceGroup, type, workspaceName);
    };
    return az_monitor_log_analytics_workspace_linked_storage;
}());
exports.az_monitor_log_analytics_workspace_linked_storage = az_monitor_log_analytics_workspace_linked_storage;
/** Manage intelligent packs for log analytics workspace. */
var az_monitor_log_analytics_workspace_pack = /** @class */ (function () {
    function az_monitor_log_analytics_workspace_pack() {
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
    az_monitor_log_analytics_workspace_pack.disable = function (name, resourceGroup, workspaceName) {
        return new az_monitor_log_analytics_workspace_pack_disable_command_builder("az monitor log-analytics workspace pack disable", 'az_monitor_log_analytics_workspace_pack_disable_command_result', name, resourceGroup, workspaceName);
    };
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
    az_monitor_log_analytics_workspace_pack.enable = function (name, resourceGroup, workspaceName) {
        return new az_monitor_log_analytics_workspace_pack_enable_command_builder("az monitor log-analytics workspace pack enable", 'az_monitor_log_analytics_workspace_pack_enable_command_result', name, resourceGroup, workspaceName);
    };
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
    az_monitor_log_analytics_workspace_pack.list = function (resourceGroup, workspaceName) {
        return new az_monitor_log_analytics_workspace_pack_list_command_builder("az monitor log-analytics workspace pack list", 'az_monitor_log_analytics_workspace_pack_list_command_result', resourceGroup, workspaceName);
    };
    return az_monitor_log_analytics_workspace_pack;
}());
exports.az_monitor_log_analytics_workspace_pack = az_monitor_log_analytics_workspace_pack;
/** Manage saved search for log analytics workspace. */
var az_monitor_log_analytics_workspace_saved_search = /** @class */ (function () {
    function az_monitor_log_analytics_workspace_saved_search() {
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
    az_monitor_log_analytics_workspace_saved_search.create = function (category, displayName, name, resourceGroup, savedQuery, workspaceName) {
        return new az_monitor_log_analytics_workspace_saved_search_create_command_builder("az monitor log-analytics workspace saved-search create", 'az_monitor_log_analytics_workspace_saved_search_create_command_result', category, displayName, name, resourceGroup, savedQuery, workspaceName);
    };
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
    az_monitor_log_analytics_workspace_saved_search["delete"] = function (name, resourceGroup, workspaceName) {
        return new az_monitor_log_analytics_workspace_saved_search_delete_command_builder("az monitor log-analytics workspace saved-search delete", 'az_monitor_log_analytics_workspace_saved_search_delete_command_result', name, resourceGroup, workspaceName);
    };
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
    az_monitor_log_analytics_workspace_saved_search.list = function (resourceGroup, workspaceName) {
        return new az_monitor_log_analytics_workspace_saved_search_list_command_builder("az monitor log-analytics workspace saved-search list", 'az_monitor_log_analytics_workspace_saved_search_list_command_result', resourceGroup, workspaceName);
    };
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
    az_monitor_log_analytics_workspace_saved_search.show = function (name, resourceGroup, workspaceName) {
        return new az_monitor_log_analytics_workspace_saved_search_show_command_builder("az monitor log-analytics workspace saved-search show", 'az_monitor_log_analytics_workspace_saved_search_show_command_result', name, resourceGroup, workspaceName);
    };
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
    az_monitor_log_analytics_workspace_saved_search.update = function (name, resourceGroup, workspaceName) {
        return new az_monitor_log_analytics_workspace_saved_search_update_command_builder("az monitor log-analytics workspace saved-search update", 'az_monitor_log_analytics_workspace_saved_search_update_command_result', name, resourceGroup, workspaceName);
    };
    return az_monitor_log_analytics_workspace_saved_search;
}());
exports.az_monitor_log_analytics_workspace_saved_search = az_monitor_log_analytics_workspace_saved_search;
/** Manage tables for log analytics workspace. */
var az_monitor_log_analytics_workspace_table = /** @class */ (function () {
    function az_monitor_log_analytics_workspace_table() {
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
    az_monitor_log_analytics_workspace_table.list = function (resourceGroup, workspaceName) {
        return new az_monitor_log_analytics_workspace_table_list_command_builder("az monitor log-analytics workspace table list", 'az_monitor_log_analytics_workspace_table_list_command_result', resourceGroup, workspaceName);
    };
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
    az_monitor_log_analytics_workspace_table.show = function (name, resourceGroup, workspaceName) {
        return new az_monitor_log_analytics_workspace_table_show_command_builder("az monitor log-analytics workspace table show", 'az_monitor_log_analytics_workspace_table_show_command_result', name, resourceGroup, workspaceName);
    };
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
    az_monitor_log_analytics_workspace_table.update = function (name, resourceGroup, retentionTime, workspaceName) {
        return new az_monitor_log_analytics_workspace_table_update_command_builder("az monitor log-analytics workspace table update", 'az_monitor_log_analytics_workspace_table_update_command_result', name, resourceGroup, retentionTime, workspaceName);
    };
    return az_monitor_log_analytics_workspace_table;
}());
exports.az_monitor_log_analytics_workspace_table = az_monitor_log_analytics_workspace_table;
/** Manage Azure log analytics workspace. */
var az_monitor_log_analytics_workspace = /** @class */ (function () {
    function az_monitor_log_analytics_workspace() {
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
    az_monitor_log_analytics_workspace.create = function (resourceGroup, workspaceName) {
        return new az_monitor_log_analytics_workspace_create_command_builder("az monitor log-analytics workspace create", 'az_monitor_log_analytics_workspace_create_command_result', resourceGroup, workspaceName);
    };
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
    az_monitor_log_analytics_workspace["delete"] = function (resourceGroup, workspaceName) {
        return new az_monitor_log_analytics_workspace_delete_command_builder("az monitor log-analytics workspace delete", 'az_monitor_log_analytics_workspace_delete_command_result', resourceGroup, workspaceName);
    };
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
    az_monitor_log_analytics_workspace.get_schema = function (resourceGroup, workspaceName) {
        return new az_monitor_log_analytics_workspace_get_schema_command_builder("az monitor log-analytics workspace get-schema", 'az_monitor_log_analytics_workspace_get_schema_command_result', resourceGroup, workspaceName);
    };
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
    az_monitor_log_analytics_workspace.get_shared_keys = function (resourceGroup, workspaceName) {
        return new az_monitor_log_analytics_workspace_get_shared_keys_command_builder("az monitor log-analytics workspace get-shared-keys", 'az_monitor_log_analytics_workspace_get_shared_keys_command_result', resourceGroup, workspaceName);
    };
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
    az_monitor_log_analytics_workspace.list = function () {
        return new az_monitor_log_analytics_workspace_list_command_builder("az monitor log-analytics workspace list", 'az_monitor_log_analytics_workspace_list_command_result');
    };
    /**
     * Get a list of deleted workspaces that can be recovered in a subscription or a resource group.
     *
     * Syntax:
     * ```
     * az monitor log-analytics workspace list-deleted-workspaces [--resource-group]
     *                                                            [--subscription]
     * ```
     */
    az_monitor_log_analytics_workspace.list_deleted_workspaces = function () {
        return new az_monitor_log_analytics_workspace_list_deleted_workspaces_command_builder("az monitor log-analytics workspace list-deleted-workspaces", 'az_monitor_log_analytics_workspace_list_deleted_workspaces_command_result');
    };
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
    az_monitor_log_analytics_workspace.list_management_groups = function (resourceGroup, workspaceName) {
        return new az_monitor_log_analytics_workspace_list_management_groups_command_builder("az monitor log-analytics workspace list-management-groups", 'az_monitor_log_analytics_workspace_list_management_groups_command_result', resourceGroup, workspaceName);
    };
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
    az_monitor_log_analytics_workspace.list_usages = function (resourceGroup, workspaceName) {
        return new az_monitor_log_analytics_workspace_list_usages_command_builder("az monitor log-analytics workspace list-usages", 'az_monitor_log_analytics_workspace_list_usages_command_result', resourceGroup, workspaceName);
    };
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
    az_monitor_log_analytics_workspace.recover = function (workspaceName) {
        return new az_monitor_log_analytics_workspace_recover_command_builder("az monitor log-analytics workspace recover", 'az_monitor_log_analytics_workspace_recover_command_result', workspaceName);
    };
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
    az_monitor_log_analytics_workspace.show = function (resourceGroup, workspaceName) {
        return new az_monitor_log_analytics_workspace_show_command_builder("az monitor log-analytics workspace show", 'az_monitor_log_analytics_workspace_show_command_result', resourceGroup, workspaceName);
    };
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
    az_monitor_log_analytics_workspace.update = function (resourceGroup, workspaceName) {
        return new az_monitor_log_analytics_workspace_update_command_builder("az monitor log-analytics workspace update", 'az_monitor_log_analytics_workspace_update_command_result', resourceGroup, workspaceName);
    };
    return az_monitor_log_analytics_workspace;
}());
exports.az_monitor_log_analytics_workspace = az_monitor_log_analytics_workspace;
/** Manage Azure log analytics. */
var az_monitor_log_analytics = /** @class */ (function () {
    function az_monitor_log_analytics() {
    }
    return az_monitor_log_analytics;
}());
exports.az_monitor_log_analytics = az_monitor_log_analytics;
/** Manage log profiles. */
var az_monitor_log_profiles = /** @class */ (function () {
    function az_monitor_log_profiles() {
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
    az_monitor_log_profiles.create = function (categories, days, enabled, location, locations, name) {
        return new az_monitor_log_profiles_create_command_builder("az monitor log-profiles create", 'az_monitor_log_profiles_create_command_result', categories, days, enabled, location, locations, name);
    };
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
    az_monitor_log_profiles["delete"] = function (name) {
        return new az_monitor_log_profiles_delete_command_builder("az monitor log-profiles delete", 'az_monitor_log_profiles_delete_command_result', name);
    };
    /**
     * List the log profiles.
     *
     * Syntax:
     * ```
     * az monitor log-profiles list [--query-examples]
     *                              [--subscription]
     * ```
     */
    az_monitor_log_profiles.list = function () {
        return new az_monitor_log_profiles_list_command_builder("az monitor log-profiles list", 'az_monitor_log_profiles_list_command_result');
    };
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
    az_monitor_log_profiles.show = function (name) {
        return new az_monitor_log_profiles_show_command_builder("az monitor log-profiles show", 'az_monitor_log_profiles_show_command_result', name);
    };
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
    az_monitor_log_profiles.update = function (name) {
        return new az_monitor_log_profiles_update_command_builder("az monitor log-profiles update", 'az_monitor_log_profiles_update_command_result', name);
    };
    return az_monitor_log_profiles;
}());
exports.az_monitor_log_profiles = az_monitor_log_profiles;
/** Manage near-realtime metric alert rules. */
var az_monitor_metrics_alert = /** @class */ (function () {
    function az_monitor_metrics_alert() {
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
    az_monitor_metrics_alert.create = function (condition, name, resourceGroup, scopes) {
        return new az_monitor_metrics_alert_create_command_builder("az monitor metrics alert create", 'az_monitor_metrics_alert_create_command_result', condition, name, resourceGroup, scopes);
    };
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
    az_monitor_metrics_alert["delete"] = function () {
        return new az_monitor_metrics_alert_delete_command_builder("az monitor metrics alert delete", 'az_monitor_metrics_alert_delete_command_result');
    };
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
    az_monitor_metrics_alert.list = function () {
        return new az_monitor_metrics_alert_list_command_builder("az monitor metrics alert list", 'az_monitor_metrics_alert_list_command_result');
    };
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
    az_monitor_metrics_alert.show = function () {
        return new az_monitor_metrics_alert_show_command_builder("az monitor metrics alert show", 'az_monitor_metrics_alert_show_command_result');
    };
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
    az_monitor_metrics_alert.update = function () {
        return new az_monitor_metrics_alert_update_command_builder("az monitor metrics alert update", 'az_monitor_metrics_alert_update_command_result');
    };
    return az_monitor_metrics_alert;
}());
exports.az_monitor_metrics_alert = az_monitor_metrics_alert;
/** View Azure resource metrics. */
var az_monitor_metrics = /** @class */ (function () {
    function az_monitor_metrics() {
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
    az_monitor_metrics.list = function (resource) {
        return new az_monitor_metrics_list_command_builder("az monitor metrics list", 'az_monitor_metrics_list_command_result', resource);
    };
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
    az_monitor_metrics.list_definitions = function (resource) {
        return new az_monitor_metrics_list_definitions_command_builder("az monitor metrics list-definitions", 'az_monitor_metrics_list_definitions_command_result', resource);
    };
    return az_monitor_metrics;
}());
exports.az_monitor_metrics = az_monitor_metrics;
/** Manage private endpoint connection of a private link scope resource. */
var az_monitor_private_link_scope_private_endpoint_connection = /** @class */ (function () {
    function az_monitor_private_link_scope_private_endpoint_connection() {
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
    az_monitor_private_link_scope_private_endpoint_connection.approve = function () {
        return new az_monitor_private_link_scope_private_endpoint_connection_approve_command_builder("az monitor private-link-scope private-endpoint-connection approve", 'az_monitor_private_link_scope_private_endpoint_connection_approve_command_result');
    };
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
    az_monitor_private_link_scope_private_endpoint_connection["delete"] = function () {
        return new az_monitor_private_link_scope_private_endpoint_connection_delete_command_builder("az monitor private-link-scope private-endpoint-connection delete", 'az_monitor_private_link_scope_private_endpoint_connection_delete_command_result');
    };
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
    az_monitor_private_link_scope_private_endpoint_connection.list = function (resourceGroup, scopeName) {
        return new az_monitor_private_link_scope_private_endpoint_connection_list_command_builder("az monitor private-link-scope private-endpoint-connection list", 'az_monitor_private_link_scope_private_endpoint_connection_list_command_result', resourceGroup, scopeName);
    };
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
    az_monitor_private_link_scope_private_endpoint_connection.reject = function () {
        return new az_monitor_private_link_scope_private_endpoint_connection_reject_command_builder("az monitor private-link-scope private-endpoint-connection reject", 'az_monitor_private_link_scope_private_endpoint_connection_reject_command_result');
    };
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
    az_monitor_private_link_scope_private_endpoint_connection.show = function () {
        return new az_monitor_private_link_scope_private_endpoint_connection_show_command_builder("az monitor private-link-scope private-endpoint-connection show", 'az_monitor_private_link_scope_private_endpoint_connection_show_command_result');
    };
    return az_monitor_private_link_scope_private_endpoint_connection;
}());
exports.az_monitor_private_link_scope_private_endpoint_connection = az_monitor_private_link_scope_private_endpoint_connection;
/** Manage private link resource of a private link scope resource. */
var az_monitor_private_link_scope_private_link_resource = /** @class */ (function () {
    function az_monitor_private_link_scope_private_link_resource() {
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
    az_monitor_private_link_scope_private_link_resource.list = function (resourceGroup, scopeName) {
        return new az_monitor_private_link_scope_private_link_resource_list_command_builder("az monitor private-link-scope private-link-resource list", 'az_monitor_private_link_scope_private_link_resource_list_command_result', resourceGroup, scopeName);
    };
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
    az_monitor_private_link_scope_private_link_resource.show = function (name, resourceGroup, scopeName) {
        return new az_monitor_private_link_scope_private_link_resource_show_command_builder("az monitor private-link-scope private-link-resource show", 'az_monitor_private_link_scope_private_link_resource_show_command_result', name, resourceGroup, scopeName);
    };
    return az_monitor_private_link_scope_private_link_resource;
}());
exports.az_monitor_private_link_scope_private_link_resource = az_monitor_private_link_scope_private_link_resource;
/** Manage scoped resource of a private link scope resource. */
var az_monitor_private_link_scope_scoped_resource = /** @class */ (function () {
    function az_monitor_private_link_scope_scoped_resource() {
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
    az_monitor_private_link_scope_scoped_resource.create = function (linkedResource, name, resourceGroup, scopeName) {
        return new az_monitor_private_link_scope_scoped_resource_create_command_builder("az monitor private-link-scope scoped-resource create", 'az_monitor_private_link_scope_scoped_resource_create_command_result', linkedResource, name, resourceGroup, scopeName);
    };
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
    az_monitor_private_link_scope_scoped_resource["delete"] = function (name, resourceGroup, scopeName) {
        return new az_monitor_private_link_scope_scoped_resource_delete_command_builder("az monitor private-link-scope scoped-resource delete", 'az_monitor_private_link_scope_scoped_resource_delete_command_result', name, resourceGroup, scopeName);
    };
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
    az_monitor_private_link_scope_scoped_resource.list = function (resourceGroup, scopeName) {
        return new az_monitor_private_link_scope_scoped_resource_list_command_builder("az monitor private-link-scope scoped-resource list", 'az_monitor_private_link_scope_scoped_resource_list_command_result', resourceGroup, scopeName);
    };
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
    az_monitor_private_link_scope_scoped_resource.show = function (name, resourceGroup, scopeName) {
        return new az_monitor_private_link_scope_scoped_resource_show_command_builder("az monitor private-link-scope scoped-resource show", 'az_monitor_private_link_scope_scoped_resource_show_command_result', name, resourceGroup, scopeName);
    };
    return az_monitor_private_link_scope_scoped_resource;
}());
exports.az_monitor_private_link_scope_scoped_resource = az_monitor_private_link_scope_scoped_resource;
/** Manage monitor private link scope resource. */
var az_monitor_private_link_scope = /** @class */ (function () {
    function az_monitor_private_link_scope() {
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
    az_monitor_private_link_scope.create = function (name, resourceGroup) {
        return new az_monitor_private_link_scope_create_command_builder("az monitor private-link-scope create", 'az_monitor_private_link_scope_create_command_result', name, resourceGroup);
    };
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
    az_monitor_private_link_scope["delete"] = function (name, resourceGroup) {
        return new az_monitor_private_link_scope_delete_command_builder("az monitor private-link-scope delete", 'az_monitor_private_link_scope_delete_command_result', name, resourceGroup);
    };
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
    az_monitor_private_link_scope.list = function () {
        return new az_monitor_private_link_scope_list_command_builder("az monitor private-link-scope list", 'az_monitor_private_link_scope_list_command_result');
    };
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
    az_monitor_private_link_scope.show = function (name, resourceGroup) {
        return new az_monitor_private_link_scope_show_command_builder("az monitor private-link-scope show", 'az_monitor_private_link_scope_show_command_result', name, resourceGroup);
    };
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
    az_monitor_private_link_scope.update = function (name, resourceGroup, tags) {
        return new az_monitor_private_link_scope_update_command_builder("az monitor private-link-scope update", 'az_monitor_private_link_scope_update_command_result', name, resourceGroup, tags);
    };
    return az_monitor_private_link_scope;
}());
exports.az_monitor_private_link_scope = az_monitor_private_link_scope;
/** Manage the Azure Monitor Service. */
var az_monitor = /** @class */ (function () {
    function az_monitor() {
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
    az_monitor.clone = function (sourceResource, targetResource) {
        return new az_monitor_clone_command_builder("az monitor clone", 'az_monitor_clone_command_result', sourceResource, targetResource);
    };
    return az_monitor;
}());
exports.az_monitor = az_monitor;
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
var az_monitor_action_group_create_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_action_group_create_command_builder, _super);
    function az_monitor_action_group_create_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the action group. */
    az_monitor_action_group_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_action_group_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Add receivers to the action group during the creation. */
    az_monitor_action_group_create_command_builder.prototype.action = function (value) {
        this.setFlag("--action", value);
        return this;
    };
    /** The short name of the action group. */
    az_monitor_action_group_create_command_builder.prototype.shortName = function (value) {
        this.setFlag("--short-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_action_group_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_monitor_action_group_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_monitor_action_group_create_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_action_group_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_action_group_delete_command_builder, _super);
    function az_monitor_action_group_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_monitor_action_group_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the action group. */
    az_monitor_action_group_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_action_group_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_action_group_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_monitor_action_group_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_action_group_enable_receiver_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_action_group_enable_receiver_command_builder, _super);
    function az_monitor_action_group_enable_receiver_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** The name of the receiver to resubscribe. */
    az_monitor_action_group_enable_receiver_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The name of the action group. */
    az_monitor_action_group_enable_receiver_command_builder.prototype.actionGroup = function (value) {
        this.setFlag("--action-group", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_monitor_action_group_enable_receiver_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_action_group_enable_receiver_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_action_group_enable_receiver_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_monitor_action_group_enable_receiver_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_action_group_list_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_action_group_list_command_builder, _super);
    function az_monitor_action_group_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_monitor_action_group_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of the resource group under which the action groups are being listed. If it is omitted, all the action groups under the current subscription are listed. */
    az_monitor_action_group_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_action_group_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_monitor_action_group_list_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_action_group_show_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_action_group_show_command_builder, _super);
    function az_monitor_action_group_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_monitor_action_group_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the action group. */
    az_monitor_action_group_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_monitor_action_group_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_action_group_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_action_group_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_monitor_action_group_show_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_action_group_update_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_action_group_update_command_builder, _super);
    function az_monitor_action_group_update_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_monitor_action_group_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** Add receivers to the action group. */
    az_monitor_action_group_update_command_builder.prototype.addAction = function (value) {
        this.setFlag("--add-action", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_monitor_action_group_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_monitor_action_group_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the action group. */
    az_monitor_action_group_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_monitor_action_group_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Remove receivers from the action group. Accept space-separated list of receiver names. */
    az_monitor_action_group_update_command_builder.prototype.removeAction = function (value) {
        this.setFlag("--remove-action", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_action_group_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_monitor_action_group_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Update the group short name of the action group. */
    az_monitor_action_group_update_command_builder.prototype.shortName = function (value) {
        this.setFlag("--short-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_action_group_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_monitor_action_group_update_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_monitor_action_group_update_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_activity_log_alert_action_group_add_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_activity_log_alert_action_group_add_command_builder, _super);
    function az_monitor_activity_log_alert_action_group_add_command_builder(commandPath, resultDataTypeName, actionGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.actionGroup(actionGroup);
        return _this;
    }
    /** The names or the resource ids of the action groups to be added. */
    az_monitor_activity_log_alert_action_group_add_command_builder.prototype.actionGroup = function (value) {
        this.setFlag("--action-group", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_monitor_activity_log_alert_action_group_add_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the activity log alerts. */
    az_monitor_activity_log_alert_action_group_add_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Remove all the existing action groups before add new conditions. */
    az_monitor_activity_log_alert_action_group_add_command_builder.prototype.reset = function (value) {
        this.setFlag("--reset", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_activity_log_alert_action_group_add_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Fails the command if an action group to be added will change existing webhook properties. */
    az_monitor_activity_log_alert_action_group_add_command_builder.prototype.strict = function (value) {
        this.setFlag("--strict", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_activity_log_alert_action_group_add_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated webhook properties in 'key[=value]' format. These properties will be associated with the action groups added in this command. */
    az_monitor_activity_log_alert_action_group_add_command_builder.prototype.webhookProperties = function (value) {
        this.setFlag("--webhook-properties", value);
        return this;
    };
    return az_monitor_activity_log_alert_action_group_add_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_activity_log_alert_action_group_remove_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_activity_log_alert_action_group_remove_command_builder, _super);
    function az_monitor_activity_log_alert_action_group_remove_command_builder(commandPath, resultDataTypeName, actionGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.actionGroup(actionGroup);
        return _this;
    }
    /** The names or the resource ids of the action groups to be added. */
    az_monitor_activity_log_alert_action_group_remove_command_builder.prototype.actionGroup = function (value) {
        this.setFlag("--action-group", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_monitor_activity_log_alert_action_group_remove_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the activity log alerts. */
    az_monitor_activity_log_alert_action_group_remove_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_activity_log_alert_action_group_remove_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_activity_log_alert_action_group_remove_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_monitor_activity_log_alert_action_group_remove_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_activity_log_alert_scope_add_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_activity_log_alert_scope_add_command_builder, _super);
    function az_monitor_activity_log_alert_scope_add_command_builder(commandPath, resultDataTypeName, scope) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.scope(scope);
        return _this;
    }
    /** List of scopes to add. Each scope could be a resource ID, a resource group ID or a subscription ID. */
    az_monitor_activity_log_alert_scope_add_command_builder.prototype.scope = function (value) {
        this.setFlag("--scope", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_monitor_activity_log_alert_scope_add_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the activity log alerts. */
    az_monitor_activity_log_alert_scope_add_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Remove all the existing scopes before add new scopes. */
    az_monitor_activity_log_alert_scope_add_command_builder.prototype.reset = function (value) {
        this.setFlag("--reset", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_activity_log_alert_scope_add_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_activity_log_alert_scope_add_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_monitor_activity_log_alert_scope_add_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_activity_log_alert_scope_remove_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_activity_log_alert_scope_remove_command_builder, _super);
    function az_monitor_activity_log_alert_scope_remove_command_builder(commandPath, resultDataTypeName, scope) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.scope(scope);
        return _this;
    }
    /** The scopes to remove. */
    az_monitor_activity_log_alert_scope_remove_command_builder.prototype.scope = function (value) {
        this.setFlag("--scope", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_monitor_activity_log_alert_scope_remove_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the activity log alerts. */
    az_monitor_activity_log_alert_scope_remove_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_activity_log_alert_scope_remove_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_activity_log_alert_scope_remove_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_monitor_activity_log_alert_scope_remove_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_activity_log_alert_create_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_activity_log_alert_create_command_builder, _super);
    function az_monitor_activity_log_alert_create_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the activity log alerts. */
    az_monitor_activity_log_alert_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_activity_log_alert_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Add an action group. Accepts space-separated action group identifiers. The identifier can be the action group's name or its resource ID. */
    az_monitor_activity_log_alert_create_command_builder.prototype.actionGroup = function (value) {
        this.setFlag("--action-group", value);
        return this;
    };
    /** The condition that will cause the alert to activate. The format is FIELD=VALUE[ and FIELD=VALUE...]. */
    az_monitor_activity_log_alert_create_command_builder.prototype.condition = function (value) {
        this.setFlag("--condition", value);
        return this;
    };
    /** A description of this activity log alert. */
    az_monitor_activity_log_alert_create_command_builder.prototype.description = function (value) {
        this.setFlag("--description", value);
        return this;
    };
    /** Disable the activity log alert after it is created. */
    az_monitor_activity_log_alert_create_command_builder.prototype.disable = function (value) {
        this.setFlag("--disable", value);
        return this;
    };
    /** A list of strings that will be used as prefixes. */
    az_monitor_activity_log_alert_create_command_builder.prototype.scope = function (value) {
        this.setFlag("--scope", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_activity_log_alert_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_monitor_activity_log_alert_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    /** Space-separated webhook properties in 'key[=value]' format. These properties are associated with the action groups added in this command. */
    az_monitor_activity_log_alert_create_command_builder.prototype.webhookProperties = function (value) {
        this.setFlag("--webhook-properties", value);
        return this;
    };
    return az_monitor_activity_log_alert_create_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_activity_log_alert_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_activity_log_alert_delete_command_builder, _super);
    function az_monitor_activity_log_alert_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_monitor_activity_log_alert_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the activity log alert. */
    az_monitor_activity_log_alert_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_activity_log_alert_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_activity_log_alert_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_monitor_activity_log_alert_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_activity_log_alert_list_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_activity_log_alert_list_command_builder, _super);
    function az_monitor_activity_log_alert_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_monitor_activity_log_alert_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of the resource group under which the activity log alerts are being listed. If it is omitted, all the activity log alerts under the current subscription are listed. */
    az_monitor_activity_log_alert_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_activity_log_alert_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_monitor_activity_log_alert_list_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_activity_log_alert_show_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_activity_log_alert_show_command_builder, _super);
    function az_monitor_activity_log_alert_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_monitor_activity_log_alert_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the activity log alert. */
    az_monitor_activity_log_alert_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_monitor_activity_log_alert_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_activity_log_alert_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_activity_log_alert_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_monitor_activity_log_alert_show_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_activity_log_alert_update_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_activity_log_alert_update_command_builder, _super);
    function az_monitor_activity_log_alert_update_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_monitor_activity_log_alert_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** The conditional expression that will cause the alert to activate. The format is FIELD=VALUE[ and FIELD=VALUE...]. */
    az_monitor_activity_log_alert_update_command_builder.prototype.condition = function (value) {
        this.setFlag("--condition", value);
        return this;
    };
    /** A description of this activity log alert. */
    az_monitor_activity_log_alert_update_command_builder.prototype.description = function (value) {
        this.setFlag("--description", value);
        return this;
    };
    /** */
    az_monitor_activity_log_alert_update_command_builder.prototype.enabled = function (value) {
        this.setFlag("--enabled", value.toString());
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_monitor_activity_log_alert_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_monitor_activity_log_alert_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the activity log alert. */
    az_monitor_activity_log_alert_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_monitor_activity_log_alert_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_activity_log_alert_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_monitor_activity_log_alert_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_activity_log_alert_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_monitor_activity_log_alert_update_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_monitor_activity_log_alert_update_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_activity_log_list_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_activity_log_list_command_builder, _super);
    function az_monitor_activity_log_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Caller to query for, such as an e-mail address or service principal ID. */
    az_monitor_activity_log_list_command_builder.prototype.caller = function (value) {
        this.setFlag("--caller", value);
        return this;
    };
    /** Correlation ID to query. */
    az_monitor_activity_log_list_command_builder.prototype.correlationId = function (value) {
        this.setFlag("--correlation-id", value);
        return this;
    };
    /** End time of the query. Defaults to the current time. Format: date (yyyy-mm-dd) time (hh:mm:ss.xxxxx) timezone (+/-hh:mm). */
    az_monitor_activity_log_list_command_builder.prototype.endTime = function (value) {
        this.setFlag("--end-time", value);
        return this;
    };
    /** OData filters. Will ignore other filter arguments. */
    az_monitor_activity_log_list_command_builder.prototype.filters = function (value) {
        this.setFlag("--filters", value);
        return this;
    };
    /** Maximum number of records to return. */
    az_monitor_activity_log_list_command_builder.prototype.maxEvents = function (value) {
        this.setFlag("--max-events", value);
        return this;
    };
    /** Resource provider namespace. */
    az_monitor_activity_log_list_command_builder.prototype.namespace = function (value) {
        this.setFlag("--namespace", value);
        return this;
    };
    /** Time offset of the query range, in ##d##h format. */
    az_monitor_activity_log_list_command_builder.prototype.offset = function (value) {
        this.setFlag("--offset", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_monitor_activity_log_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_activity_log_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** ARM ID of a resource. */
    az_monitor_activity_log_list_command_builder.prototype.resourceId = function (value) {
        this.setFlag("--resource-id", value);
        return this;
    };
    /** Space-separated list of properties to return. */
    az_monitor_activity_log_list_command_builder.prototype.select = function (value) {
        this.setFlag("--select", value);
        return this;
    };
    /** Start time of the query. Format: date (yyyy-mm-dd) time (hh:mm:ss.xxxxx) timezone (+/-hh:mm). */
    az_monitor_activity_log_list_command_builder.prototype.startTime = function (value) {
        this.setFlag("--start-time", value);
        return this;
    };
    /** Status to query for (ex: Failed). */
    az_monitor_activity_log_list_command_builder.prototype.status = function (value) {
        this.setFlag("--status", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_activity_log_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_monitor_activity_log_list_command_builder;
}(base_1.CommandBuilder));
/**
 * List the event categories of activity logs.
 *
 * Syntax:
 * ```
 * az monitor activity-log list-categories [--subscription]
 * ```
 */
var az_monitor_activity_log_list_categories_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_activity_log_list_categories_command_builder, _super);
    function az_monitor_activity_log_list_categories_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_activity_log_list_categories_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_monitor_activity_log_list_categories_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_alert_create_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_alert_create_command_builder, _super);
    function az_monitor_alert_create_command_builder(commandPath, resultDataTypeName, condition, name, target) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.condition(condition);
        _this.name(name);
        _this.target(target);
        return _this;
    }
    /** The condition which triggers the rule. */
    az_monitor_alert_create_command_builder.prototype.condition = function (value) {
        this.setFlag("--condition", value);
        return this;
    };
    /** Name of the alert rule. */
    az_monitor_alert_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name or ID of the target resource. */
    az_monitor_alert_create_command_builder.prototype.target = function (value) {
        this.setFlag("--target", value);
        return this;
    };
    /** Add an action to fire when the alert is triggered. */
    az_monitor_alert_create_command_builder.prototype.action = function (value) {
        this.setFlag("--action", value);
        return this;
    };
    /** Free-text description of the rule. Defaults to the condition expression. */
    az_monitor_alert_create_command_builder.prototype.description = function (value) {
        this.setFlag("--description", value);
        return this;
    };
    /** Create the rule in a disabled state. */
    az_monitor_alert_create_command_builder.prototype.disabled = function (value) {
        this.setFlag("--disabled", value.toString());
        return this;
    };
    /** Email the service owners if an alert is triggered. */
    az_monitor_alert_create_command_builder.prototype.emailServiceOwners = function (value) {
        this.setFlag("--email-service-owners", value.toString());
        return this;
    };
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_monitor_alert_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_alert_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_alert_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_monitor_alert_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    /** Target resource provider namespace. */
    az_monitor_alert_create_command_builder.prototype.targetNamespace = function (value) {
        this.setFlag("--target-namespace", value);
        return this;
    };
    /** Target resource parent path, if applicable. */
    az_monitor_alert_create_command_builder.prototype.targetParent = function (value) {
        this.setFlag("--target-parent", value);
        return this;
    };
    /** Target resource type. Can also accept namespace/type format (Ex: 'Microsoft.Compute/virtualMachines'). */
    az_monitor_alert_create_command_builder.prototype.targetType = function (value) {
        this.setFlag("--target-type", value);
        return this;
    };
    return az_monitor_alert_create_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_alert_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_alert_delete_command_builder, _super);
    function az_monitor_alert_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_monitor_alert_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the alert rule. */
    az_monitor_alert_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_alert_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_alert_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_monitor_alert_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_alert_list_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_alert_list_command_builder, _super);
    function az_monitor_alert_list_command_builder(commandPath, resultDataTypeName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_alert_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_monitor_alert_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_alert_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_monitor_alert_list_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_alert_list_incidents_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_alert_list_incidents_command_builder, _super);
    function az_monitor_alert_list_incidents_command_builder(commandPath, resultDataTypeName, resourceGroup, ruleName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        _this.ruleName(ruleName);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_alert_list_incidents_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the alert rule. */
    az_monitor_alert_list_incidents_command_builder.prototype.ruleName = function (value) {
        this.setFlag("--rule-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_alert_list_incidents_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_monitor_alert_list_incidents_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_alert_show_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_alert_show_command_builder, _super);
    function az_monitor_alert_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_monitor_alert_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the alert rule. */
    az_monitor_alert_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_monitor_alert_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_alert_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_alert_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_monitor_alert_show_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_alert_show_incident_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_alert_show_incident_command_builder, _super);
    function az_monitor_alert_show_incident_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_monitor_alert_show_incident_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the incident to retrieve. */
    az_monitor_alert_show_incident_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_alert_show_incident_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the alert rule. */
    az_monitor_alert_show_incident_command_builder.prototype.ruleName = function (value) {
        this.setFlag("--rule-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_alert_show_incident_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_monitor_alert_show_incident_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_alert_update_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_alert_update_command_builder, _super);
    function az_monitor_alert_update_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_monitor_alert_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** Add an action to fire when the alert is triggered. */
    az_monitor_alert_update_command_builder.prototype.addAction = function (value) {
        this.setFlag("--add-action", value);
        return this;
    };
    /** Type of aggregation to apply based on --period. */
    az_monitor_alert_update_command_builder.prototype.aggregation = function (value) {
        this.setFlag("--aggregation", value);
        return this;
    };
    /** The condition which triggers the rule. */
    az_monitor_alert_update_command_builder.prototype.condition = function (value) {
        this.setFlag("--condition", value);
        return this;
    };
    /** Description of the rule. */
    az_monitor_alert_update_command_builder.prototype.description = function (value) {
        this.setFlag("--description", value);
        return this;
    };
    /** Email the service owners if an alert is triggered. */
    az_monitor_alert_update_command_builder.prototype.emailServiceOwners = function (value) {
        this.setFlag("--email-service-owners", value.toString());
        return this;
    };
    /** */
    az_monitor_alert_update_command_builder.prototype.enabled = function (value) {
        this.setFlag("--enabled", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_monitor_alert_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_monitor_alert_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the metric to base the rule on. */
    az_monitor_alert_update_command_builder.prototype.metric = function (value) {
        this.setFlag("--metric", value);
        return this;
    };
    /** Name of the alert rule. */
    az_monitor_alert_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** How to compare the metric against the threshold. */
    az_monitor_alert_update_command_builder.prototype.operator = function (value) {
        this.setFlag("--operator", value);
        return this;
    };
    /** Time span over which to apply --aggregation, in nDnHnMnS shorthand or full ISO8601 format. */
    az_monitor_alert_update_command_builder.prototype.period = function (value) {
        this.setFlag("--period", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_monitor_alert_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Remove one or more actions. */
    az_monitor_alert_update_command_builder.prototype.removeAction = function (value) {
        this.setFlag("--remove-action", value);
        return this;
    };
    /** Name or ID of the target resource. */
    az_monitor_alert_update_command_builder.prototype.resource = function (value) {
        this.setFlag("--resource", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_alert_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Target resource provider namespace. */
    az_monitor_alert_update_command_builder.prototype.resourceNamespace = function (value) {
        this.setFlag("--resource-namespace", value);
        return this;
    };
    /** Target resource parent path, if applicable. */
    az_monitor_alert_update_command_builder.prototype.resourceParent = function (value) {
        this.setFlag("--resource-parent", value);
        return this;
    };
    /** Target resource type. Can also accept namespace/type format (Ex: 'Microsoft.Compute/virtualMachines'). */
    az_monitor_alert_update_command_builder.prototype.resourceType = function (value) {
        this.setFlag("--resource-type", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_monitor_alert_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_alert_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_monitor_alert_update_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    /** Numeric threshold at which to trigger the alert. */
    az_monitor_alert_update_command_builder.prototype.threshold = function (value) {
        this.setFlag("--threshold", value);
        return this;
    };
    return az_monitor_alert_update_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_autoscale_profile_create_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_autoscale_profile_create_command_builder, _super);
    function az_monitor_autoscale_profile_create_command_builder(commandPath, resultDataTypeName, autoscaleName, count, name, resourceGroup, timezone) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.autoscaleName(autoscaleName);
        _this.count(count);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.timezone(timezone);
        return _this;
    }
    /** Name of the autoscale settings. */
    az_monitor_autoscale_profile_create_command_builder.prototype.autoscaleName = function (value) {
        this.setFlag("--autoscale-name", value);
        return this;
    };
    /** The numer of instances to use. If used with --min/max-count, the default number of instances to use. */
    az_monitor_autoscale_profile_create_command_builder.prototype.count = function (value) {
        this.setFlag("--count", value);
        return this;
    };
    /** Name of the autoscale profile. */
    az_monitor_autoscale_profile_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_autoscale_profile_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Timezone name. */
    az_monitor_autoscale_profile_create_command_builder.prototype.timezone = function (value) {
        this.setFlag("--timezone", value);
        return this;
    };
    /** Name of an existing schedule from which to copy the scaling rules for the new schedule. */
    az_monitor_autoscale_profile_create_command_builder.prototype.copyRules = function (value) {
        this.setFlag("--copy-rules", value);
        return this;
    };
    /** When the autoscale profile ends. Format depends on the type of profile. */
    az_monitor_autoscale_profile_create_command_builder.prototype.end = function (value) {
        this.setFlag("--end", value);
        return this;
    };
    /** The maximum number of instances. */
    az_monitor_autoscale_profile_create_command_builder.prototype.maxCount = function (value) {
        this.setFlag("--max-count", value);
        return this;
    };
    /** The minimum number of instances. */
    az_monitor_autoscale_profile_create_command_builder.prototype.minCount = function (value) {
        this.setFlag("--min-count", value);
        return this;
    };
    /** When the profile recurs. If omitted, a fixed (non-recurring) profile is created. */
    az_monitor_autoscale_profile_create_command_builder.prototype.recurrence = function (value) {
        this.setFlag("--recurrence", value);
        return this;
    };
    /** When the autoscale profile begins. Format depends on the type of profile. */
    az_monitor_autoscale_profile_create_command_builder.prototype.start = function (value) {
        this.setFlag("--start", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_autoscale_profile_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_monitor_autoscale_profile_create_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_autoscale_profile_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_autoscale_profile_delete_command_builder, _super);
    function az_monitor_autoscale_profile_delete_command_builder(commandPath, resultDataTypeName, autoscaleName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.autoscaleName(autoscaleName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the autoscale settings. */
    az_monitor_autoscale_profile_delete_command_builder.prototype.autoscaleName = function (value) {
        this.setFlag("--autoscale-name", value);
        return this;
    };
    /** Name of the autoscale profile. */
    az_monitor_autoscale_profile_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_autoscale_profile_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_autoscale_profile_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_monitor_autoscale_profile_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_autoscale_profile_list_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_autoscale_profile_list_command_builder, _super);
    function az_monitor_autoscale_profile_list_command_builder(commandPath, resultDataTypeName, autoscaleName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.autoscaleName(autoscaleName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the autoscale settings. */
    az_monitor_autoscale_profile_list_command_builder.prototype.autoscaleName = function (value) {
        this.setFlag("--autoscale-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_autoscale_profile_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_monitor_autoscale_profile_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_autoscale_profile_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_monitor_autoscale_profile_list_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_autoscale_profile_list_timezones_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_autoscale_profile_list_timezones_command_builder, _super);
    function az_monitor_autoscale_profile_list_timezones_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Filter results based on UTC hour offset. */
    az_monitor_autoscale_profile_list_timezones_command_builder.prototype.offset = function (value) {
        this.setFlag("--offset", value);
        return this;
    };
    /** Query text to find. */
    az_monitor_autoscale_profile_list_timezones_command_builder.prototype.searchQuery = function (value) {
        this.setFlag("--search-query", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_autoscale_profile_list_timezones_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_monitor_autoscale_profile_list_timezones_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_autoscale_profile_show_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_autoscale_profile_show_command_builder, _super);
    function az_monitor_autoscale_profile_show_command_builder(commandPath, resultDataTypeName, autoscaleName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.autoscaleName(autoscaleName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the autoscale settings. */
    az_monitor_autoscale_profile_show_command_builder.prototype.autoscaleName = function (value) {
        this.setFlag("--autoscale-name", value);
        return this;
    };
    /** Name of the autoscale profile. */
    az_monitor_autoscale_profile_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_autoscale_profile_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_monitor_autoscale_profile_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_autoscale_profile_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_monitor_autoscale_profile_show_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_autoscale_rule_copy_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_autoscale_rule_copy_command_builder, _super);
    function az_monitor_autoscale_rule_copy_command_builder(commandPath, resultDataTypeName, autoscaleName, destSchedule, index, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.autoscaleName(autoscaleName);
        _this.destSchedule(destSchedule);
        _this.index(index);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the autoscale settings. */
    az_monitor_autoscale_rule_copy_command_builder.prototype.autoscaleName = function (value) {
        this.setFlag("--autoscale-name", value);
        return this;
    };
    /** Name of the profile to copy rules to. */
    az_monitor_autoscale_rule_copy_command_builder.prototype.destSchedule = function (value) {
        this.setFlag("--dest-schedule", value);
        return this;
    };
    /** Space-separated list of rule indices to copy, or '\*' to copy all rules. */
    az_monitor_autoscale_rule_copy_command_builder.prototype.index = function (value) {
        this.setFlag("--index", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_autoscale_rule_copy_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the profile to copy rules from. */
    az_monitor_autoscale_rule_copy_command_builder.prototype.sourceSchedule = function (value) {
        this.setFlag("--source-schedule", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_autoscale_rule_copy_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_monitor_autoscale_rule_copy_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_autoscale_rule_create_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_autoscale_rule_create_command_builder, _super);
    function az_monitor_autoscale_rule_create_command_builder(commandPath, resultDataTypeName, autoscaleName, condition, scale) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.autoscaleName(autoscaleName);
        _this.condition(condition);
        _this.scale(scale);
        return _this;
    }
    /** Name of the autoscale settings. */
    az_monitor_autoscale_rule_create_command_builder.prototype.autoscaleName = function (value) {
        this.setFlag("--autoscale-name", value);
        return this;
    };
    /** The condition which triggers the scaling action. */
    az_monitor_autoscale_rule_create_command_builder.prototype.condition = function (value) {
        this.setFlag("--condition", value);
        return this;
    };
    /** The direction and amount to scale. */
    az_monitor_autoscale_rule_create_command_builder.prototype.scale = function (value) {
        this.setFlag("--scale", value);
        return this;
    };
    /** The number of minutes that must elapse before another scaling event can occur. */
    az_monitor_autoscale_rule_create_command_builder.prototype.cooldown = function (value) {
        this.setFlag("--cooldown", value);
        return this;
    };
    /** Name of the autoscale profile. */
    az_monitor_autoscale_rule_create_command_builder.prototype.profileName = function (value) {
        this.setFlag("--profile-name", value);
        return this;
    };
    /** Name or ID of the target resource. */
    az_monitor_autoscale_rule_create_command_builder.prototype.resource = function (value) {
        this.setFlag("--resource", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_autoscale_rule_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Target resource provider namespace. */
    az_monitor_autoscale_rule_create_command_builder.prototype.resourceNamespace = function (value) {
        this.setFlag("--resource-namespace", value);
        return this;
    };
    /** Target resource parent path, if applicable. */
    az_monitor_autoscale_rule_create_command_builder.prototype.resourceParent = function (value) {
        this.setFlag("--resource-parent", value);
        return this;
    };
    /** Target resource type. Can also accept namespace/type format (Ex: 'Microsoft.Compute/virtualMachines'). */
    az_monitor_autoscale_rule_create_command_builder.prototype.resourceType = function (value) {
        this.setFlag("--resource-type", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_autoscale_rule_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The way metrics are polled across instances. */
    az_monitor_autoscale_rule_create_command_builder.prototype.timegrain = function (value) {
        this.setFlag("--timegrain", value);
        return this;
    };
    return az_monitor_autoscale_rule_create_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_autoscale_rule_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_autoscale_rule_delete_command_builder, _super);
    function az_monitor_autoscale_rule_delete_command_builder(commandPath, resultDataTypeName, autoscaleName, index, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.autoscaleName(autoscaleName);
        _this.index(index);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the autoscale settings. */
    az_monitor_autoscale_rule_delete_command_builder.prototype.autoscaleName = function (value) {
        this.setFlag("--autoscale-name", value);
        return this;
    };
    /** Space-separated list of rule indices to remove, or '\*' to clear all rules. */
    az_monitor_autoscale_rule_delete_command_builder.prototype.index = function (value) {
        this.setFlag("--index", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_autoscale_rule_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the autoscale profile. */
    az_monitor_autoscale_rule_delete_command_builder.prototype.profileName = function (value) {
        this.setFlag("--profile-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_autoscale_rule_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_monitor_autoscale_rule_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_autoscale_rule_list_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_autoscale_rule_list_command_builder, _super);
    function az_monitor_autoscale_rule_list_command_builder(commandPath, resultDataTypeName, autoscaleName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.autoscaleName(autoscaleName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the autoscale settings. */
    az_monitor_autoscale_rule_list_command_builder.prototype.autoscaleName = function (value) {
        this.setFlag("--autoscale-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_autoscale_rule_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the autoscale profile. */
    az_monitor_autoscale_rule_list_command_builder.prototype.profileName = function (value) {
        this.setFlag("--profile-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_monitor_autoscale_rule_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_autoscale_rule_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_monitor_autoscale_rule_list_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_autoscale_settings_create_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_autoscale_settings_create_command_builder, _super);
    function az_monitor_autoscale_settings_create_command_builder(commandPath, resultDataTypeName, name, parameters, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.parameters(parameters);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The autoscale setting name. */
    az_monitor_autoscale_settings_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** JSON encoded parameters configuration. Use @{file} to load from a file. Use az autoscale-settings get-parameters-template to export json template. */
    az_monitor_autoscale_settings_create_command_builder.prototype.parameters = function (value) {
        this.setFlag("--parameters", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_autoscale_settings_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_autoscale_settings_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_monitor_autoscale_settings_create_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_autoscale_settings_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_autoscale_settings_delete_command_builder, _super);
    function az_monitor_autoscale_settings_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_monitor_autoscale_settings_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The autoscale setting name. */
    az_monitor_autoscale_settings_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_autoscale_settings_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_autoscale_settings_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_monitor_autoscale_settings_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * Scaffold fully formed autoscale-settings' parameters as json template.
 *
 * Syntax:
 * ```
 * az monitor autoscale-settings get-parameters-template [--subscription]
 * ```
 */
var az_monitor_autoscale_settings_get_parameters_template_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_autoscale_settings_get_parameters_template_command_builder, _super);
    function az_monitor_autoscale_settings_get_parameters_template_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_autoscale_settings_get_parameters_template_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_monitor_autoscale_settings_get_parameters_template_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_autoscale_settings_list_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_autoscale_settings_list_command_builder, _super);
    function az_monitor_autoscale_settings_list_command_builder(commandPath, resultDataTypeName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_autoscale_settings_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_monitor_autoscale_settings_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_autoscale_settings_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_monitor_autoscale_settings_list_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_autoscale_settings_show_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_autoscale_settings_show_command_builder, _super);
    function az_monitor_autoscale_settings_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_monitor_autoscale_settings_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The autoscale setting name. */
    az_monitor_autoscale_settings_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_monitor_autoscale_settings_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_autoscale_settings_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_autoscale_settings_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_monitor_autoscale_settings_show_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_autoscale_settings_update_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_autoscale_settings_update_command_builder, _super);
    function az_monitor_autoscale_settings_update_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The autoscale setting name. */
    az_monitor_autoscale_settings_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_autoscale_settings_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_monitor_autoscale_settings_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_monitor_autoscale_settings_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_monitor_autoscale_settings_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_monitor_autoscale_settings_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_autoscale_settings_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_monitor_autoscale_settings_update_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_autoscale_create_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_autoscale_create_command_builder, _super);
    function az_monitor_autoscale_create_command_builder(commandPath, resultDataTypeName, count, resource) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.count(count);
        _this.resource(resource);
        return _this;
    }
    /** The numer of instances to use. If used with --min/max-count, the default number of instances to use. */
    az_monitor_autoscale_create_command_builder.prototype.count = function (value) {
        this.setFlag("--count", value);
        return this;
    };
    /** Name or ID of the target resource. */
    az_monitor_autoscale_create_command_builder.prototype.resource = function (value) {
        this.setFlag("--resource", value);
        return this;
    };
    /** Add an action to fire when a scaling event occurs. */
    az_monitor_autoscale_create_command_builder.prototype.action = function (value) {
        this.setFlag("--action", value);
        return this;
    };
    /** Create the autoscale settings in a disabled state. */
    az_monitor_autoscale_create_command_builder.prototype.disabled = function (value) {
        this.setFlag("--disabled", value.toString());
        return this;
    };
    /** Send email to subscription administrator on scaling. */
    az_monitor_autoscale_create_command_builder.prototype.emailAdministrator = function (value) {
        this.setFlag("--email-administrator", value.toString());
        return this;
    };
    /** Send email to subscription co-administrators on scaling. */
    az_monitor_autoscale_create_command_builder.prototype.emailCoadministrators = function (value) {
        this.setFlag("--email-coadministrators", value.toString());
        return this;
    };
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_monitor_autoscale_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** The maximum number of instances. */
    az_monitor_autoscale_create_command_builder.prototype.maxCount = function (value) {
        this.setFlag("--max-count", value);
        return this;
    };
    /** The minimum number of instances. */
    az_monitor_autoscale_create_command_builder.prototype.minCount = function (value) {
        this.setFlag("--min-count", value);
        return this;
    };
    /** Name of the autoscale settings. */
    az_monitor_autoscale_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_autoscale_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Target resource provider namespace. */
    az_monitor_autoscale_create_command_builder.prototype.resourceNamespace = function (value) {
        this.setFlag("--resource-namespace", value);
        return this;
    };
    /** Target resource parent path, if applicable. */
    az_monitor_autoscale_create_command_builder.prototype.resourceParent = function (value) {
        this.setFlag("--resource-parent", value);
        return this;
    };
    /** Target resource type. Can also accept namespace/type format (Ex: 'Microsoft.Compute/virtualMachines'). */
    az_monitor_autoscale_create_command_builder.prototype.resourceType = function (value) {
        this.setFlag("--resource-type", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_autoscale_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_monitor_autoscale_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_monitor_autoscale_create_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_autoscale_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_autoscale_delete_command_builder, _super);
    function az_monitor_autoscale_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_monitor_autoscale_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the autoscale settings. */
    az_monitor_autoscale_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_autoscale_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_autoscale_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_monitor_autoscale_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_autoscale_list_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_autoscale_list_command_builder, _super);
    function az_monitor_autoscale_list_command_builder(commandPath, resultDataTypeName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_autoscale_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_monitor_autoscale_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_autoscale_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_monitor_autoscale_list_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_autoscale_show_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_autoscale_show_command_builder, _super);
    function az_monitor_autoscale_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_monitor_autoscale_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the autoscale settings. */
    az_monitor_autoscale_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_monitor_autoscale_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_autoscale_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_autoscale_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_monitor_autoscale_show_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_autoscale_update_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_autoscale_update_command_builder, _super);
    function az_monitor_autoscale_update_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_monitor_autoscale_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** Add an action to fire when a scaling event occurs. */
    az_monitor_autoscale_update_command_builder.prototype.addAction = function (value) {
        this.setFlag("--add-action", value);
        return this;
    };
    /** The numer of instances to use. If used with --min/max-count, the default number of instances to use. */
    az_monitor_autoscale_update_command_builder.prototype.count = function (value) {
        this.setFlag("--count", value);
        return this;
    };
    /** Send email to subscription administrator on scaling. */
    az_monitor_autoscale_update_command_builder.prototype.emailAdministrator = function (value) {
        this.setFlag("--email-administrator", value.toString());
        return this;
    };
    /** Send email to subscription co-administrators on scaling. */
    az_monitor_autoscale_update_command_builder.prototype.emailCoadministrators = function (value) {
        this.setFlag("--email-coadministrators", value.toString());
        return this;
    };
    /** Autoscale settings enabled status. */
    az_monitor_autoscale_update_command_builder.prototype.enabled = function (value) {
        this.setFlag("--enabled", value.toString());
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_monitor_autoscale_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_monitor_autoscale_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The maximum number of instances. */
    az_monitor_autoscale_update_command_builder.prototype.maxCount = function (value) {
        this.setFlag("--max-count", value);
        return this;
    };
    /** The minimum number of instances. */
    az_monitor_autoscale_update_command_builder.prototype.minCount = function (value) {
        this.setFlag("--min-count", value);
        return this;
    };
    /** Name of the autoscale settings. */
    az_monitor_autoscale_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_monitor_autoscale_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Remove one or more actions. */
    az_monitor_autoscale_update_command_builder.prototype.removeAction = function (value) {
        this.setFlag("--remove-action", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_autoscale_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_monitor_autoscale_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_autoscale_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_monitor_autoscale_update_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_monitor_autoscale_update_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_diagnostic_settings_categories_list_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_diagnostic_settings_categories_list_command_builder, _super);
    function az_monitor_diagnostic_settings_categories_list_command_builder(commandPath, resultDataTypeName, resource) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resource(resource);
        return _this;
    }
    /** Name or ID of the target resource. */
    az_monitor_diagnostic_settings_categories_list_command_builder.prototype.resource = function (value) {
        this.setFlag("--resource", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_monitor_diagnostic_settings_categories_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_diagnostic_settings_categories_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Target resource provider namespace. */
    az_monitor_diagnostic_settings_categories_list_command_builder.prototype.resourceNamespace = function (value) {
        this.setFlag("--resource-namespace", value);
        return this;
    };
    /** Target resource parent path, if applicable. */
    az_monitor_diagnostic_settings_categories_list_command_builder.prototype.resourceParent = function (value) {
        this.setFlag("--resource-parent", value);
        return this;
    };
    /** Target resource type. Can also accept namespace/type format (Ex: 'Microsoft.Compute/virtualMachines'). */
    az_monitor_diagnostic_settings_categories_list_command_builder.prototype.resourceType = function (value) {
        this.setFlag("--resource-type", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_diagnostic_settings_categories_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_monitor_diagnostic_settings_categories_list_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_diagnostic_settings_categories_show_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_diagnostic_settings_categories_show_command_builder, _super);
    function az_monitor_diagnostic_settings_categories_show_command_builder(commandPath, resultDataTypeName, name, resource) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resource(resource);
        return _this;
    }
    /** The name of the diagnostic setting. */
    az_monitor_diagnostic_settings_categories_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name or ID of the target resource. */
    az_monitor_diagnostic_settings_categories_show_command_builder.prototype.resource = function (value) {
        this.setFlag("--resource", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_monitor_diagnostic_settings_categories_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_diagnostic_settings_categories_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Target resource provider namespace. */
    az_monitor_diagnostic_settings_categories_show_command_builder.prototype.resourceNamespace = function (value) {
        this.setFlag("--resource-namespace", value);
        return this;
    };
    /** Target resource parent path, if applicable. */
    az_monitor_diagnostic_settings_categories_show_command_builder.prototype.resourceParent = function (value) {
        this.setFlag("--resource-parent", value);
        return this;
    };
    /** Target resource type. Can also accept namespace/type format (Ex: 'Microsoft.Compute/virtualMachines'). */
    az_monitor_diagnostic_settings_categories_show_command_builder.prototype.resourceType = function (value) {
        this.setFlag("--resource-type", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_diagnostic_settings_categories_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_monitor_diagnostic_settings_categories_show_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_diagnostic_settings_subscription_create_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_diagnostic_settings_subscription_create_command_builder, _super);
    function az_monitor_diagnostic_settings_subscription_create_command_builder(commandPath, resultDataTypeName, location, logs, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.location(location);
        _this.logs(logs);
        _this.name(name);
        return _this;
    }
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_monitor_diagnostic_settings_subscription_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** JSON encoded list of logs settings. Use '@{file}' to load from a file. */
    az_monitor_diagnostic_settings_subscription_create_command_builder.prototype.logs = function (value) {
        this.setFlag("--logs", value);
        return this;
    };
    /** The name of the diagnostic setting. */
    az_monitor_diagnostic_settings_subscription_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The resource Id for the event hub authorization rule. */
    az_monitor_diagnostic_settings_subscription_create_command_builder.prototype.eventHubAuthRule = function (value) {
        this.setFlag("--event-hub-auth-rule", value);
        return this;
    };
    /** The name of the event hub. If none is specified, the default event hub will be selected. */
    az_monitor_diagnostic_settings_subscription_create_command_builder.prototype.eventHubName = function (value) {
        this.setFlag("--event-hub-name", value);
        return this;
    };
    /** The service bus rule ID of the service bus namespace in which you would like to have Event Hubs created for streaming the Activity Log. The rule ID is of the format '{service bus resource ID}/authorizationrules/{key name}'. */
    az_monitor_diagnostic_settings_subscription_create_command_builder.prototype.serviceBusRule = function (value) {
        this.setFlag("--service-bus-rule", value);
        return this;
    };
    /** The resource id of the storage account to which you would like to send the Activity Log. */
    az_monitor_diagnostic_settings_subscription_create_command_builder.prototype.storageAccount = function (value) {
        this.setFlag("--storage-account", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_diagnostic_settings_subscription_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The resource id of the log analytics workspace. */
    az_monitor_diagnostic_settings_subscription_create_command_builder.prototype.workspace = function (value) {
        this.setFlag("--workspace", value);
        return this;
    };
    return az_monitor_diagnostic_settings_subscription_create_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_diagnostic_settings_subscription_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_diagnostic_settings_subscription_delete_command_builder, _super);
    function az_monitor_diagnostic_settings_subscription_delete_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** The name of the diagnostic setting. */
    az_monitor_diagnostic_settings_subscription_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_diagnostic_settings_subscription_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_monitor_diagnostic_settings_subscription_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_monitor_diagnostic_settings_subscription_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * Gets the active subscription diagnostic settings list for the specified subscriptionId.
 *
 * Syntax:
 * ```
 * az monitor diagnostic-settings subscription list [--query-examples]
 *                                                  [--subscription]
 * ```
 */
var az_monitor_diagnostic_settings_subscription_list_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_diagnostic_settings_subscription_list_command_builder, _super);
    function az_monitor_diagnostic_settings_subscription_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_monitor_diagnostic_settings_subscription_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_diagnostic_settings_subscription_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_monitor_diagnostic_settings_subscription_list_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_diagnostic_settings_subscription_show_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_diagnostic_settings_subscription_show_command_builder, _super);
    function az_monitor_diagnostic_settings_subscription_show_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** The name of the diagnostic setting. */
    az_monitor_diagnostic_settings_subscription_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_monitor_diagnostic_settings_subscription_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_diagnostic_settings_subscription_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_monitor_diagnostic_settings_subscription_show_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_diagnostic_settings_subscription_update_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_diagnostic_settings_subscription_update_command_builder, _super);
    function az_monitor_diagnostic_settings_subscription_update_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** The name of the diagnostic setting. */
    az_monitor_diagnostic_settings_subscription_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_monitor_diagnostic_settings_subscription_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** The resource Id for the event hub authorization rule. */
    az_monitor_diagnostic_settings_subscription_update_command_builder.prototype.eventHubAuthRule = function (value) {
        this.setFlag("--event-hub-auth-rule", value);
        return this;
    };
    /** The name of the event hub. If none is specified, the default event hub will be selected. */
    az_monitor_diagnostic_settings_subscription_update_command_builder.prototype.eventHubName = function (value) {
        this.setFlag("--event-hub-name", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_monitor_diagnostic_settings_subscription_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** JSON encoded list of logs settings. Use '@{file}' to load from a file. */
    az_monitor_diagnostic_settings_subscription_update_command_builder.prototype.logs = function (value) {
        this.setFlag("--logs", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_monitor_diagnostic_settings_subscription_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** The service bus rule ID of the service bus namespace in which you would like to have Event Hubs created for streaming the Activity Log. The rule ID is of the format '{service bus resource ID}/authorizationrules/{key name}'. */
    az_monitor_diagnostic_settings_subscription_update_command_builder.prototype.serviceBusRule = function (value) {
        this.setFlag("--service-bus-rule", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_monitor_diagnostic_settings_subscription_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** The resource id of the storage account to which you would like to send the Activity Log. */
    az_monitor_diagnostic_settings_subscription_update_command_builder.prototype.storageAccount = function (value) {
        this.setFlag("--storage-account", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_diagnostic_settings_subscription_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The resource id of the log analytics workspace. */
    az_monitor_diagnostic_settings_subscription_update_command_builder.prototype.workspace = function (value) {
        this.setFlag("--workspace", value);
        return this;
    };
    return az_monitor_diagnostic_settings_subscription_update_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_diagnostic_settings_create_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_diagnostic_settings_create_command_builder, _super);
    function az_monitor_diagnostic_settings_create_command_builder(commandPath, resultDataTypeName, name, resource) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resource(resource);
        return _this;
    }
    /** The name of the diagnostic settings. */
    az_monitor_diagnostic_settings_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name or ID of the target resource. */
    az_monitor_diagnostic_settings_create_command_builder.prototype.resource = function (value) {
        this.setFlag("--resource", value);
        return this;
    };
    /** Name or ID an event hub. If none is specified, the default event hub will be selected. */
    az_monitor_diagnostic_settings_create_command_builder.prototype.eventHub = function (value) {
        this.setFlag("--event-hub", value);
        return this;
    };
    /** Name or ID of the event hub authorization rule. */
    az_monitor_diagnostic_settings_create_command_builder.prototype.eventHubRule = function (value) {
        this.setFlag("--event-hub-rule", value);
        return this;
    };
    /** Indicate that the export to LA must be done to a resource specific table, a.k.a. dedicated or fixed schema table, as opposed to the default dynamic schema table called AzureDiagnostics. This argument is effective only when the argument --workspace is also given. */
    az_monitor_diagnostic_settings_create_command_builder.prototype.exportToResourceSpecific = function (value) {
        this.setFlag("--export-to-resource-specific", value.toString());
        return this;
    };
    /** JSON encoded list of logs settings. Use '@{file}' to load from a file. */
    az_monitor_diagnostic_settings_create_command_builder.prototype.logs = function (value) {
        this.setFlag("--logs", value);
        return this;
    };
    /** JSON encoded list of metric settings. Use '@{file}' to load from a file. */
    az_monitor_diagnostic_settings_create_command_builder.prototype.metrics = function (value) {
        this.setFlag("--metrics", value);
        return this;
    };
    /** Name of the resource group for the Log Analytics and Storage Account when the name of the service instead of a full resource ID is given. */
    az_monitor_diagnostic_settings_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Target resource provider namespace. */
    az_monitor_diagnostic_settings_create_command_builder.prototype.resourceNamespace = function (value) {
        this.setFlag("--resource-namespace", value);
        return this;
    };
    /** Target resource parent path, if applicable. */
    az_monitor_diagnostic_settings_create_command_builder.prototype.resourceParent = function (value) {
        this.setFlag("--resource-parent", value);
        return this;
    };
    /** Target resource type. Can also accept namespace/type format (Ex: 'Microsoft.Compute/virtualMachines'). */
    az_monitor_diagnostic_settings_create_command_builder.prototype.resourceType = function (value) {
        this.setFlag("--resource-type", value);
        return this;
    };
    /** Name or ID of the storage account to send diagnostic logs to. */
    az_monitor_diagnostic_settings_create_command_builder.prototype.storageAccount = function (value) {
        this.setFlag("--storage-account", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_diagnostic_settings_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Name or ID of the Log Analytics workspace to send diagnostic logs to. */
    az_monitor_diagnostic_settings_create_command_builder.prototype.workspace = function (value) {
        this.setFlag("--workspace", value);
        return this;
    };
    return az_monitor_diagnostic_settings_create_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_diagnostic_settings_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_diagnostic_settings_delete_command_builder, _super);
    function az_monitor_diagnostic_settings_delete_command_builder(commandPath, resultDataTypeName, name, resource) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resource(resource);
        return _this;
    }
    /** The name of the diagnostic setting. */
    az_monitor_diagnostic_settings_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name or ID of the target resource. */
    az_monitor_diagnostic_settings_delete_command_builder.prototype.resource = function (value) {
        this.setFlag("--resource", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_diagnostic_settings_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Target resource provider namespace. */
    az_monitor_diagnostic_settings_delete_command_builder.prototype.resourceNamespace = function (value) {
        this.setFlag("--resource-namespace", value);
        return this;
    };
    /** Target resource parent path, if applicable. */
    az_monitor_diagnostic_settings_delete_command_builder.prototype.resourceParent = function (value) {
        this.setFlag("--resource-parent", value);
        return this;
    };
    /** Target resource type. Can also accept namespace/type format (Ex: 'Microsoft.Compute/virtualMachines'). */
    az_monitor_diagnostic_settings_delete_command_builder.prototype.resourceType = function (value) {
        this.setFlag("--resource-type", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_diagnostic_settings_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_monitor_diagnostic_settings_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_diagnostic_settings_list_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_diagnostic_settings_list_command_builder, _super);
    function az_monitor_diagnostic_settings_list_command_builder(commandPath, resultDataTypeName, resource) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resource(resource);
        return _this;
    }
    /** Name or ID of the target resource. */
    az_monitor_diagnostic_settings_list_command_builder.prototype.resource = function (value) {
        this.setFlag("--resource", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_monitor_diagnostic_settings_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_diagnostic_settings_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Target resource provider namespace. */
    az_monitor_diagnostic_settings_list_command_builder.prototype.resourceNamespace = function (value) {
        this.setFlag("--resource-namespace", value);
        return this;
    };
    /** Target resource parent path, if applicable. */
    az_monitor_diagnostic_settings_list_command_builder.prototype.resourceParent = function (value) {
        this.setFlag("--resource-parent", value);
        return this;
    };
    /** Target resource type. Can also accept namespace/type format (Ex: 'Microsoft.Compute/virtualMachines'). */
    az_monitor_diagnostic_settings_list_command_builder.prototype.resourceType = function (value) {
        this.setFlag("--resource-type", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_diagnostic_settings_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_monitor_diagnostic_settings_list_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_diagnostic_settings_show_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_diagnostic_settings_show_command_builder, _super);
    function az_monitor_diagnostic_settings_show_command_builder(commandPath, resultDataTypeName, name, resource) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resource(resource);
        return _this;
    }
    /** The name of the diagnostic setting. */
    az_monitor_diagnostic_settings_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name or ID of the target resource. */
    az_monitor_diagnostic_settings_show_command_builder.prototype.resource = function (value) {
        this.setFlag("--resource", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_monitor_diagnostic_settings_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_diagnostic_settings_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Target resource provider namespace. */
    az_monitor_diagnostic_settings_show_command_builder.prototype.resourceNamespace = function (value) {
        this.setFlag("--resource-namespace", value);
        return this;
    };
    /** Target resource parent path, if applicable. */
    az_monitor_diagnostic_settings_show_command_builder.prototype.resourceParent = function (value) {
        this.setFlag("--resource-parent", value);
        return this;
    };
    /** Target resource type. Can also accept namespace/type format (Ex: 'Microsoft.Compute/virtualMachines'). */
    az_monitor_diagnostic_settings_show_command_builder.prototype.resourceType = function (value) {
        this.setFlag("--resource-type", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_diagnostic_settings_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_monitor_diagnostic_settings_show_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_diagnostic_settings_update_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_diagnostic_settings_update_command_builder, _super);
    function az_monitor_diagnostic_settings_update_command_builder(commandPath, resultDataTypeName, name, resource) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resource(resource);
        return _this;
    }
    /** The name of the diagnostic setting. */
    az_monitor_diagnostic_settings_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name or ID of the target resource. */
    az_monitor_diagnostic_settings_update_command_builder.prototype.resource = function (value) {
        this.setFlag("--resource", value);
        return this;
    };
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_monitor_diagnostic_settings_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_monitor_diagnostic_settings_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_monitor_diagnostic_settings_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_diagnostic_settings_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Target resource provider namespace. */
    az_monitor_diagnostic_settings_update_command_builder.prototype.resourceNamespace = function (value) {
        this.setFlag("--resource-namespace", value);
        return this;
    };
    /** Target resource parent path, if applicable. */
    az_monitor_diagnostic_settings_update_command_builder.prototype.resourceParent = function (value) {
        this.setFlag("--resource-parent", value);
        return this;
    };
    /** Target resource type. Can also accept namespace/type format (Ex: 'Microsoft.Compute/virtualMachines'). */
    az_monitor_diagnostic_settings_update_command_builder.prototype.resourceType = function (value) {
        this.setFlag("--resource-type", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_monitor_diagnostic_settings_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_diagnostic_settings_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_monitor_diagnostic_settings_update_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_log_analytics_cluster_create_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_log_analytics_cluster_create_command_builder, _super);
    function az_monitor_log_analytics_cluster_create_command_builder(commandPath, resultDataTypeName, name, resourceGroup, skuCapacity) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.skuCapacity(skuCapacity);
        return _this;
    }
    /** The name of the Log Analytics cluster. */
    az_monitor_log_analytics_cluster_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_log_analytics_cluster_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The capacity of the SKU. It must be in the range of 1000-2000 per day and must be in multiples of 100. If you want to increase the limit, please contact LAIngestionRate@microsoft.com. It can be decreased only after 31 days. */
    az_monitor_log_analytics_cluster_create_command_builder.prototype.skuCapacity = function (value) {
        this.setFlag("--sku-capacity", value);
        return this;
    };
    /** The identity type. Supported values: SystemAssigned. */
    az_monitor_log_analytics_cluster_create_command_builder.prototype.identityType = function (value) {
        this.setFlag("--identity-type", value);
        return this;
    };
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_monitor_log_analytics_cluster_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_monitor_log_analytics_cluster_create_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** The name of the SKU. Currently only support 'CapacityReservation'. */
    az_monitor_log_analytics_cluster_create_command_builder.prototype.skuName = function (value) {
        this.setFlag("--sku-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_log_analytics_cluster_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_monitor_log_analytics_cluster_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_monitor_log_analytics_cluster_create_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_log_analytics_cluster_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_log_analytics_cluster_delete_command_builder, _super);
    function az_monitor_log_analytics_cluster_delete_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the Log Analytics cluster. */
    az_monitor_log_analytics_cluster_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_log_analytics_cluster_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_monitor_log_analytics_cluster_delete_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_log_analytics_cluster_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_monitor_log_analytics_cluster_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_monitor_log_analytics_cluster_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_log_analytics_cluster_list_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_log_analytics_cluster_list_command_builder, _super);
    function az_monitor_log_analytics_cluster_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_monitor_log_analytics_cluster_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_log_analytics_cluster_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_log_analytics_cluster_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_monitor_log_analytics_cluster_list_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_log_analytics_cluster_show_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_log_analytics_cluster_show_command_builder, _super);
    function az_monitor_log_analytics_cluster_show_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the Log Analytics cluster. */
    az_monitor_log_analytics_cluster_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_log_analytics_cluster_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_monitor_log_analytics_cluster_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_log_analytics_cluster_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_monitor_log_analytics_cluster_show_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_log_analytics_cluster_update_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_log_analytics_cluster_update_command_builder, _super);
    function az_monitor_log_analytics_cluster_update_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the Log Analytics cluster. */
    az_monitor_log_analytics_cluster_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_log_analytics_cluster_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the key associated with the Log Analytics cluster. */
    az_monitor_log_analytics_cluster_update_command_builder.prototype.keyName = function (value) {
        this.setFlag("--key-name", value);
        return this;
    };
    /** The Key Vault uri which holds the key associated with the Log Analytics cluster. */
    az_monitor_log_analytics_cluster_update_command_builder.prototype.keyVaultUri = function (value) {
        this.setFlag("--key-vault-uri", value);
        return this;
    };
    /** The version of the key associated with the Log Analytics cluster. */
    az_monitor_log_analytics_cluster_update_command_builder.prototype.keyVersion = function (value) {
        this.setFlag("--key-version", value);
        return this;
    };
    /** The capacity of the SKU. It must be in the range of 1000-2000 per day and must be in multiples of 100. If you want to increase the limit, please contact LAIngestionRate@microsoft.com. It can be decreased only after 31 days. */
    az_monitor_log_analytics_cluster_update_command_builder.prototype.skuCapacity = function (value) {
        this.setFlag("--sku-capacity", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_log_analytics_cluster_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_monitor_log_analytics_cluster_update_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_monitor_log_analytics_cluster_update_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_log_analytics_cluster_wait_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_log_analytics_cluster_wait_command_builder, _super);
    function az_monitor_log_analytics_cluster_wait_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the Log Analytics cluster. */
    az_monitor_log_analytics_cluster_wait_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_log_analytics_cluster_wait_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    az_monitor_log_analytics_cluster_wait_command_builder.prototype.created = function (value) {
        this.setFlag("--created", value);
        return this;
    };
    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    az_monitor_log_analytics_cluster_wait_command_builder.prototype.custom = function (value) {
        this.setFlag("--custom", value);
        return this;
    };
    /** Wait until deleted. */
    az_monitor_log_analytics_cluster_wait_command_builder.prototype.deleted = function (value) {
        this.setFlag("--deleted", value);
        return this;
    };
    /** Wait until the resource exists. */
    az_monitor_log_analytics_cluster_wait_command_builder.prototype.exists = function (value) {
        this.setFlag("--exists", value);
        return this;
    };
    /** Polling interval in seconds. */
    az_monitor_log_analytics_cluster_wait_command_builder.prototype.interval = function (value) {
        this.setFlag("--interval", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_log_analytics_cluster_wait_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Maximum wait in seconds. */
    az_monitor_log_analytics_cluster_wait_command_builder.prototype.timeout = function (value) {
        this.setFlag("--timeout", value);
        return this;
    };
    /** Wait until updated with provisioningState at 'Succeeded'. */
    az_monitor_log_analytics_cluster_wait_command_builder.prototype.updated = function (value) {
        this.setFlag("--updated", value);
        return this;
    };
    return az_monitor_log_analytics_cluster_wait_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_log_analytics_workspace_data_export_create_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_log_analytics_workspace_data_export_create_command_builder, _super);
    function az_monitor_log_analytics_workspace_data_export_create_command_builder(commandPath, resultDataTypeName, destination, name, resourceGroup, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.destination(destination);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** The destination resource ID. It should be a storage account, an event hub namespace or an event hub. If event hub namespace is provided, event hub would be created for each table automatically. */
    az_monitor_log_analytics_workspace_data_export_create_command_builder.prototype.destination = function (value) {
        this.setFlag("--destination", value);
        return this;
    };
    /** Name of the data export rule. */
    az_monitor_log_analytics_workspace_data_export_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_log_analytics_workspace_data_export_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Log Analytics Workspace. */
    az_monitor_log_analytics_workspace_data_export_create_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** All workspace's tables are exported when this is enabled. */
    az_monitor_log_analytics_workspace_data_export_create_command_builder.prototype.exportAllTables = function (value) {
        this.setFlag("--export-all-tables", value.toString());
        return this;
    };
    /** Enable this data export rule. */
    az_monitor_log_analytics_workspace_data_export_create_command_builder.prototype.enable = function (value) {
        this.setFlag("--enable", value.toString());
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_log_analytics_workspace_data_export_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** An array of tables to export. if --export-all-tables is true, this argument should not be provided. */
    az_monitor_log_analytics_workspace_data_export_create_command_builder.prototype.tables = function (value) {
        this.setFlag("--tables", value);
        return this;
    };
    return az_monitor_log_analytics_workspace_data_export_create_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_log_analytics_workspace_data_export_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_log_analytics_workspace_data_export_delete_command_builder, _super);
    function az_monitor_log_analytics_workspace_data_export_delete_command_builder(commandPath, resultDataTypeName, name, resourceGroup, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** Name of the data export rule. */
    az_monitor_log_analytics_workspace_data_export_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_log_analytics_workspace_data_export_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Log Analytics Workspace. */
    az_monitor_log_analytics_workspace_data_export_delete_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_log_analytics_workspace_data_export_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_monitor_log_analytics_workspace_data_export_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_monitor_log_analytics_workspace_data_export_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_log_analytics_workspace_data_export_list_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_log_analytics_workspace_data_export_list_command_builder, _super);
    function az_monitor_log_analytics_workspace_data_export_list_command_builder(commandPath, resultDataTypeName, resourceGroup, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_log_analytics_workspace_data_export_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Log Analytics Workspace. */
    az_monitor_log_analytics_workspace_data_export_list_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_monitor_log_analytics_workspace_data_export_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_log_analytics_workspace_data_export_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_monitor_log_analytics_workspace_data_export_list_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_log_analytics_workspace_data_export_show_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_log_analytics_workspace_data_export_show_command_builder, _super);
    function az_monitor_log_analytics_workspace_data_export_show_command_builder(commandPath, resultDataTypeName, name, resourceGroup, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** Name of the data export rule. */
    az_monitor_log_analytics_workspace_data_export_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_log_analytics_workspace_data_export_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Log Analytics Workspace. */
    az_monitor_log_analytics_workspace_data_export_show_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_monitor_log_analytics_workspace_data_export_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_log_analytics_workspace_data_export_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_monitor_log_analytics_workspace_data_export_show_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_log_analytics_workspace_data_export_update_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_log_analytics_workspace_data_export_update_command_builder, _super);
    function az_monitor_log_analytics_workspace_data_export_update_command_builder(commandPath, resultDataTypeName, name, resourceGroup, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** Name of the data export rule. */
    az_monitor_log_analytics_workspace_data_export_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_log_analytics_workspace_data_export_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Log Analytics Workspace. */
    az_monitor_log_analytics_workspace_data_export_update_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_monitor_log_analytics_workspace_data_export_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** All workspace's tables are exported when this is enabled. */
    az_monitor_log_analytics_workspace_data_export_update_command_builder.prototype.exportAllTables = function (value) {
        this.setFlag("--export-all-tables", value.toString());
        return this;
    };
    /** The destination resource ID. It should be a storage account, an event hub namespace or an event hub. If event hub namespace is provided, event hub would be created for each table automatically. */
    az_monitor_log_analytics_workspace_data_export_update_command_builder.prototype.destination = function (value) {
        this.setFlag("--destination", value);
        return this;
    };
    /** Enable this data export rule. */
    az_monitor_log_analytics_workspace_data_export_update_command_builder.prototype.enable = function (value) {
        this.setFlag("--enable", value.toString());
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_monitor_log_analytics_workspace_data_export_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_monitor_log_analytics_workspace_data_export_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_monitor_log_analytics_workspace_data_export_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_log_analytics_workspace_data_export_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** An array of tables to export. if --export-all-tables is true, this argument should not be provided. */
    az_monitor_log_analytics_workspace_data_export_update_command_builder.prototype.tables = function (value) {
        this.setFlag("--tables", value);
        return this;
    };
    return az_monitor_log_analytics_workspace_data_export_update_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_log_analytics_workspace_linked_service_create_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_log_analytics_workspace_linked_service_create_command_builder, _super);
    function az_monitor_log_analytics_workspace_linked_service_create_command_builder(commandPath, resultDataTypeName, name, resourceGroup, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** Name of the linkedServices resource. Supported values: cluster, automation. */
    az_monitor_log_analytics_workspace_linked_service_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_log_analytics_workspace_linked_service_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Log Analytics Workspace. */
    az_monitor_log_analytics_workspace_linked_service_create_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_monitor_log_analytics_workspace_linked_service_create_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** The resource id of the resource that will be linked to the workspace. This should be used for linking resources which require read access. */
    az_monitor_log_analytics_workspace_linked_service_create_command_builder.prototype.resourceId = function (value) {
        this.setFlag("--resource-id", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_log_analytics_workspace_linked_service_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The resource id of the resource that will be linked to the workspace. This should be used for linking resources which require write access. */
    az_monitor_log_analytics_workspace_linked_service_create_command_builder.prototype.writeAccessResourceId = function (value) {
        this.setFlag("--write-access-resource-id", value);
        return this;
    };
    return az_monitor_log_analytics_workspace_linked_service_create_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_log_analytics_workspace_linked_service_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_log_analytics_workspace_linked_service_delete_command_builder, _super);
    function az_monitor_log_analytics_workspace_linked_service_delete_command_builder(commandPath, resultDataTypeName, name, resourceGroup, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** Name of the linkedServices resource. Supported values: cluster, automation. */
    az_monitor_log_analytics_workspace_linked_service_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_log_analytics_workspace_linked_service_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Log Analytics Workspace. */
    az_monitor_log_analytics_workspace_linked_service_delete_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_monitor_log_analytics_workspace_linked_service_delete_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_log_analytics_workspace_linked_service_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_monitor_log_analytics_workspace_linked_service_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_monitor_log_analytics_workspace_linked_service_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_log_analytics_workspace_linked_service_list_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_log_analytics_workspace_linked_service_list_command_builder, _super);
    function az_monitor_log_analytics_workspace_linked_service_list_command_builder(commandPath, resultDataTypeName, resourceGroup, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_log_analytics_workspace_linked_service_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Log Analytics Workspace. */
    az_monitor_log_analytics_workspace_linked_service_list_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_monitor_log_analytics_workspace_linked_service_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_log_analytics_workspace_linked_service_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_monitor_log_analytics_workspace_linked_service_list_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_log_analytics_workspace_linked_service_show_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_log_analytics_workspace_linked_service_show_command_builder, _super);
    function az_monitor_log_analytics_workspace_linked_service_show_command_builder(commandPath, resultDataTypeName, name, resourceGroup, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** Name of the linkedServices resource. Supported values: cluster, automation. */
    az_monitor_log_analytics_workspace_linked_service_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_log_analytics_workspace_linked_service_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Log Analytics Workspace. */
    az_monitor_log_analytics_workspace_linked_service_show_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_monitor_log_analytics_workspace_linked_service_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_log_analytics_workspace_linked_service_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_monitor_log_analytics_workspace_linked_service_show_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_log_analytics_workspace_linked_service_update_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_log_analytics_workspace_linked_service_update_command_builder, _super);
    function az_monitor_log_analytics_workspace_linked_service_update_command_builder(commandPath, resultDataTypeName, name, resourceGroup, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** Name of the linkedServices resource. Supported values: cluster, automation. */
    az_monitor_log_analytics_workspace_linked_service_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_log_analytics_workspace_linked_service_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Log Analytics Workspace. */
    az_monitor_log_analytics_workspace_linked_service_update_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_monitor_log_analytics_workspace_linked_service_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_monitor_log_analytics_workspace_linked_service_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_monitor_log_analytics_workspace_linked_service_update_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_monitor_log_analytics_workspace_linked_service_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** The resource id of the resource that will be linked to the workspace. This should be used for linking resources which require read access. */
    az_monitor_log_analytics_workspace_linked_service_update_command_builder.prototype.resourceId = function (value) {
        this.setFlag("--resource-id", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_monitor_log_analytics_workspace_linked_service_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_log_analytics_workspace_linked_service_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The resource id of the resource that will be linked to the workspace. This should be used for linking resources which require write access. */
    az_monitor_log_analytics_workspace_linked_service_update_command_builder.prototype.writeAccessResourceId = function (value) {
        this.setFlag("--write-access-resource-id", value);
        return this;
    };
    return az_monitor_log_analytics_workspace_linked_service_update_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_log_analytics_workspace_linked_service_wait_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_log_analytics_workspace_linked_service_wait_command_builder, _super);
    function az_monitor_log_analytics_workspace_linked_service_wait_command_builder(commandPath, resultDataTypeName, name, resourceGroup, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** Name of the linkedServices resource. Supported values: cluster, automation. */
    az_monitor_log_analytics_workspace_linked_service_wait_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_log_analytics_workspace_linked_service_wait_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Log Analytics Workspace. */
    az_monitor_log_analytics_workspace_linked_service_wait_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    az_monitor_log_analytics_workspace_linked_service_wait_command_builder.prototype.created = function (value) {
        this.setFlag("--created", value);
        return this;
    };
    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    az_monitor_log_analytics_workspace_linked_service_wait_command_builder.prototype.custom = function (value) {
        this.setFlag("--custom", value);
        return this;
    };
    /** Wait until deleted. */
    az_monitor_log_analytics_workspace_linked_service_wait_command_builder.prototype.deleted = function (value) {
        this.setFlag("--deleted", value);
        return this;
    };
    /** Wait until the resource exists. */
    az_monitor_log_analytics_workspace_linked_service_wait_command_builder.prototype.exists = function (value) {
        this.setFlag("--exists", value);
        return this;
    };
    /** Polling interval in seconds. */
    az_monitor_log_analytics_workspace_linked_service_wait_command_builder.prototype.interval = function (value) {
        this.setFlag("--interval", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_log_analytics_workspace_linked_service_wait_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Maximum wait in seconds. */
    az_monitor_log_analytics_workspace_linked_service_wait_command_builder.prototype.timeout = function (value) {
        this.setFlag("--timeout", value);
        return this;
    };
    /** Wait until updated with provisioningState at 'Succeeded'. */
    az_monitor_log_analytics_workspace_linked_service_wait_command_builder.prototype.updated = function (value) {
        this.setFlag("--updated", value);
        return this;
    };
    return az_monitor_log_analytics_workspace_linked_service_wait_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_log_analytics_workspace_linked_storage_add_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_log_analytics_workspace_linked_storage_add_command_builder, _super);
    function az_monitor_log_analytics_workspace_linked_storage_add_command_builder(commandPath, resultDataTypeName, resourceGroup, storageAccounts, type, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        _this.storageAccounts(storageAccounts);
        _this.type(type);
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_log_analytics_workspace_linked_storage_add_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** List of Name or ID of Azure Storage Account. */
    az_monitor_log_analytics_workspace_linked_storage_add_command_builder.prototype.storageAccounts = function (value) {
        this.setFlag("--storage-accounts", value);
        return this;
    };
    /** Data source type for the linked storage account. */
    az_monitor_log_analytics_workspace_linked_storage_add_command_builder.prototype.type = function (value) {
        this.setFlag("--type", value);
        return this;
    };
    /** Name of the Log Analytics Workspace. */
    az_monitor_log_analytics_workspace_linked_storage_add_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_log_analytics_workspace_linked_storage_add_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_monitor_log_analytics_workspace_linked_storage_add_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_log_analytics_workspace_linked_storage_create_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_log_analytics_workspace_linked_storage_create_command_builder, _super);
    function az_monitor_log_analytics_workspace_linked_storage_create_command_builder(commandPath, resultDataTypeName, resourceGroup, type, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        _this.type(type);
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_log_analytics_workspace_linked_storage_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Data source type for the linked storage account. */
    az_monitor_log_analytics_workspace_linked_storage_create_command_builder.prototype.type = function (value) {
        this.setFlag("--type", value);
        return this;
    };
    /** Name of the Log Analytics Workspace. */
    az_monitor_log_analytics_workspace_linked_storage_create_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** List of Name or ID of Azure Storage Account. */
    az_monitor_log_analytics_workspace_linked_storage_create_command_builder.prototype.storageAccounts = function (value) {
        this.setFlag("--storage-accounts", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_log_analytics_workspace_linked_storage_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_monitor_log_analytics_workspace_linked_storage_create_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_log_analytics_workspace_linked_storage_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_log_analytics_workspace_linked_storage_delete_command_builder, _super);
    function az_monitor_log_analytics_workspace_linked_storage_delete_command_builder(commandPath, resultDataTypeName, resourceGroup, type, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        _this.type(type);
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_log_analytics_workspace_linked_storage_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Data source type for the linked storage account. */
    az_monitor_log_analytics_workspace_linked_storage_delete_command_builder.prototype.type = function (value) {
        this.setFlag("--type", value);
        return this;
    };
    /** Name of the Log Analytics Workspace. */
    az_monitor_log_analytics_workspace_linked_storage_delete_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_log_analytics_workspace_linked_storage_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_monitor_log_analytics_workspace_linked_storage_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_monitor_log_analytics_workspace_linked_storage_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_log_analytics_workspace_linked_storage_list_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_log_analytics_workspace_linked_storage_list_command_builder, _super);
    function az_monitor_log_analytics_workspace_linked_storage_list_command_builder(commandPath, resultDataTypeName, resourceGroup, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_log_analytics_workspace_linked_storage_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Log Analytics Workspace. */
    az_monitor_log_analytics_workspace_linked_storage_list_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_monitor_log_analytics_workspace_linked_storage_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_log_analytics_workspace_linked_storage_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_monitor_log_analytics_workspace_linked_storage_list_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_log_analytics_workspace_linked_storage_remove_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_log_analytics_workspace_linked_storage_remove_command_builder, _super);
    function az_monitor_log_analytics_workspace_linked_storage_remove_command_builder(commandPath, resultDataTypeName, resourceGroup, storageAccounts, type, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        _this.storageAccounts(storageAccounts);
        _this.type(type);
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_log_analytics_workspace_linked_storage_remove_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** List of Name or ID of Azure Storage Account. */
    az_monitor_log_analytics_workspace_linked_storage_remove_command_builder.prototype.storageAccounts = function (value) {
        this.setFlag("--storage-accounts", value);
        return this;
    };
    /** Data source type for the linked storage account. */
    az_monitor_log_analytics_workspace_linked_storage_remove_command_builder.prototype.type = function (value) {
        this.setFlag("--type", value);
        return this;
    };
    /** Name of the Log Analytics Workspace. */
    az_monitor_log_analytics_workspace_linked_storage_remove_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_log_analytics_workspace_linked_storage_remove_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_monitor_log_analytics_workspace_linked_storage_remove_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_log_analytics_workspace_linked_storage_show_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_log_analytics_workspace_linked_storage_show_command_builder, _super);
    function az_monitor_log_analytics_workspace_linked_storage_show_command_builder(commandPath, resultDataTypeName, resourceGroup, type, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        _this.type(type);
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_log_analytics_workspace_linked_storage_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Data source type for the linked storage account. */
    az_monitor_log_analytics_workspace_linked_storage_show_command_builder.prototype.type = function (value) {
        this.setFlag("--type", value);
        return this;
    };
    /** Name of the Log Analytics Workspace. */
    az_monitor_log_analytics_workspace_linked_storage_show_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_monitor_log_analytics_workspace_linked_storage_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_log_analytics_workspace_linked_storage_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_monitor_log_analytics_workspace_linked_storage_show_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_log_analytics_workspace_pack_disable_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_log_analytics_workspace_pack_disable_command_builder, _super);
    function az_monitor_log_analytics_workspace_pack_disable_command_builder(commandPath, resultDataTypeName, name, resourceGroup, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** The name of the intelligence pack to be disabled. */
    az_monitor_log_analytics_workspace_pack_disable_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_log_analytics_workspace_pack_disable_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Log Analytics Workspace. */
    az_monitor_log_analytics_workspace_pack_disable_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_log_analytics_workspace_pack_disable_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_monitor_log_analytics_workspace_pack_disable_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_log_analytics_workspace_pack_enable_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_log_analytics_workspace_pack_enable_command_builder, _super);
    function az_monitor_log_analytics_workspace_pack_enable_command_builder(commandPath, resultDataTypeName, name, resourceGroup, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** The name of the intelligence pack to be enabled. */
    az_monitor_log_analytics_workspace_pack_enable_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_log_analytics_workspace_pack_enable_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Log Analytics Workspace. */
    az_monitor_log_analytics_workspace_pack_enable_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_log_analytics_workspace_pack_enable_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_monitor_log_analytics_workspace_pack_enable_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_log_analytics_workspace_pack_list_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_log_analytics_workspace_pack_list_command_builder, _super);
    function az_monitor_log_analytics_workspace_pack_list_command_builder(commandPath, resultDataTypeName, resourceGroup, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_log_analytics_workspace_pack_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Log Analytics Workspace. */
    az_monitor_log_analytics_workspace_pack_list_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_monitor_log_analytics_workspace_pack_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_log_analytics_workspace_pack_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_monitor_log_analytics_workspace_pack_list_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_log_analytics_workspace_saved_search_create_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_log_analytics_workspace_saved_search_create_command_builder, _super);
    function az_monitor_log_analytics_workspace_saved_search_create_command_builder(commandPath, resultDataTypeName, category, displayName, name, resourceGroup, savedQuery, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.category(category);
        _this.displayName(displayName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.savedQuery(savedQuery);
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** The category of the saved search. This helps the user to find a saved search faster. */
    az_monitor_log_analytics_workspace_saved_search_create_command_builder.prototype.category = function (value) {
        this.setFlag("--category", value);
        return this;
    };
    /** Display name of the saved search. */
    az_monitor_log_analytics_workspace_saved_search_create_command_builder.prototype.displayName = function (value) {
        this.setFlag("--display-name", value);
        return this;
    };
    /** Name of the saved search and it's unique in a given workspace. */
    az_monitor_log_analytics_workspace_saved_search_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_log_analytics_workspace_saved_search_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The query expression for the saved search. */
    az_monitor_log_analytics_workspace_saved_search_create_command_builder.prototype.savedQuery = function (value) {
        this.setFlag("--saved-query", value);
        return this;
    };
    /** Name of the Log Analytics Workspace. */
    az_monitor_log_analytics_workspace_saved_search_create_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** Function Aliases are short names given to Saved Searches so they can be easily referenced in query. They are required for Computer Groups. */
    az_monitor_log_analytics_workspace_saved_search_create_command_builder.prototype.funcAlias = function (value) {
        this.setFlag("--func-alias", value);
        return this;
    };
    /** The optional function parameters if query serves as a function. Value should be in the following format: 'param-name1:type1 = default_value1, param-name2:type2 = default_value2'. For more examples and proper syntax please refer to https://docs.microsoft.com/en-us/azure/kusto/query/functions/user-defined-functions. */
    az_monitor_log_analytics_workspace_saved_search_create_command_builder.prototype.funcParam = function (value) {
        this.setFlag("--func-param", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_log_analytics_workspace_saved_search_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_monitor_log_analytics_workspace_saved_search_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_monitor_log_analytics_workspace_saved_search_create_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_log_analytics_workspace_saved_search_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_log_analytics_workspace_saved_search_delete_command_builder, _super);
    function az_monitor_log_analytics_workspace_saved_search_delete_command_builder(commandPath, resultDataTypeName, name, resourceGroup, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** Name of the saved search and it's unique in a given workspace. */
    az_monitor_log_analytics_workspace_saved_search_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_log_analytics_workspace_saved_search_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Log Analytics Workspace. */
    az_monitor_log_analytics_workspace_saved_search_delete_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_log_analytics_workspace_saved_search_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_monitor_log_analytics_workspace_saved_search_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_monitor_log_analytics_workspace_saved_search_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_log_analytics_workspace_saved_search_list_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_log_analytics_workspace_saved_search_list_command_builder, _super);
    function az_monitor_log_analytics_workspace_saved_search_list_command_builder(commandPath, resultDataTypeName, resourceGroup, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_log_analytics_workspace_saved_search_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Log Analytics Workspace. */
    az_monitor_log_analytics_workspace_saved_search_list_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_monitor_log_analytics_workspace_saved_search_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_log_analytics_workspace_saved_search_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_monitor_log_analytics_workspace_saved_search_list_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_log_analytics_workspace_saved_search_show_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_log_analytics_workspace_saved_search_show_command_builder, _super);
    function az_monitor_log_analytics_workspace_saved_search_show_command_builder(commandPath, resultDataTypeName, name, resourceGroup, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** Name of the saved search and it's unique in a given workspace. */
    az_monitor_log_analytics_workspace_saved_search_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_log_analytics_workspace_saved_search_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Log Analytics Workspace. */
    az_monitor_log_analytics_workspace_saved_search_show_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_monitor_log_analytics_workspace_saved_search_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_log_analytics_workspace_saved_search_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_monitor_log_analytics_workspace_saved_search_show_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_log_analytics_workspace_saved_search_update_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_log_analytics_workspace_saved_search_update_command_builder, _super);
    function az_monitor_log_analytics_workspace_saved_search_update_command_builder(commandPath, resultDataTypeName, name, resourceGroup, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** Name of the saved search and it's unique in a given workspace. */
    az_monitor_log_analytics_workspace_saved_search_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_log_analytics_workspace_saved_search_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Log Analytics Workspace. */
    az_monitor_log_analytics_workspace_saved_search_update_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_monitor_log_analytics_workspace_saved_search_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** The category of the saved search. This helps the user to find a saved search faster. */
    az_monitor_log_analytics_workspace_saved_search_update_command_builder.prototype.category = function (value) {
        this.setFlag("--category", value);
        return this;
    };
    /** Display name of the saved search. */
    az_monitor_log_analytics_workspace_saved_search_update_command_builder.prototype.displayName = function (value) {
        this.setFlag("--display-name", value);
        return this;
    };
    /** Function Aliases are short names given to Saved Searches so they can be easily referenced in query. They are required for Computer Groups. */
    az_monitor_log_analytics_workspace_saved_search_update_command_builder.prototype.funcAlias = function (value) {
        this.setFlag("--func-alias", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_monitor_log_analytics_workspace_saved_search_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** The optional function parameters if query serves as a function. Value should be in the following format: 'param-name1:type1 = default_value1, param-name2:type2 = default_value2'. For more examples and proper syntax please refer to https://docs.microsoft.com/en-us/azure/kusto/query/functions/user-defined-functions. */
    az_monitor_log_analytics_workspace_saved_search_update_command_builder.prototype.funcParam = function (value) {
        this.setFlag("--func-param", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_monitor_log_analytics_workspace_saved_search_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** The query expression for the saved search. */
    az_monitor_log_analytics_workspace_saved_search_update_command_builder.prototype.savedQuery = function (value) {
        this.setFlag("--saved-query", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_monitor_log_analytics_workspace_saved_search_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_log_analytics_workspace_saved_search_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_monitor_log_analytics_workspace_saved_search_update_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_monitor_log_analytics_workspace_saved_search_update_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_log_analytics_workspace_table_list_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_log_analytics_workspace_table_list_command_builder, _super);
    function az_monitor_log_analytics_workspace_table_list_command_builder(commandPath, resultDataTypeName, resourceGroup, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_log_analytics_workspace_table_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Log Analytics Workspace. */
    az_monitor_log_analytics_workspace_table_list_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_monitor_log_analytics_workspace_table_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_log_analytics_workspace_table_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_monitor_log_analytics_workspace_table_list_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_log_analytics_workspace_table_show_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_log_analytics_workspace_table_show_command_builder, _super);
    function az_monitor_log_analytics_workspace_table_show_command_builder(commandPath, resultDataTypeName, name, resourceGroup, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** Name of the table. */
    az_monitor_log_analytics_workspace_table_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_log_analytics_workspace_table_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Log Analytics Workspace. */
    az_monitor_log_analytics_workspace_table_show_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_monitor_log_analytics_workspace_table_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_log_analytics_workspace_table_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_monitor_log_analytics_workspace_table_show_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_log_analytics_workspace_table_update_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_log_analytics_workspace_table_update_command_builder, _super);
    function az_monitor_log_analytics_workspace_table_update_command_builder(commandPath, resultDataTypeName, name, resourceGroup, retentionTime, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.retentionTime(retentionTime);
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** Name of the table. */
    az_monitor_log_analytics_workspace_table_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_log_analytics_workspace_table_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The data table data retention in days, between 30 and 730. Setting this property to null will default to the workspace retention. */
    az_monitor_log_analytics_workspace_table_update_command_builder.prototype.retentionTime = function (value) {
        this.setFlag("--retention-time", value);
        return this;
    };
    /** Name of the Log Analytics Workspace. */
    az_monitor_log_analytics_workspace_table_update_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_log_analytics_workspace_table_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_monitor_log_analytics_workspace_table_update_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_log_analytics_workspace_create_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_log_analytics_workspace_create_command_builder, _super);
    function az_monitor_log_analytics_workspace_create_command_builder(commandPath, resultDataTypeName, resourceGroup, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_log_analytics_workspace_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Log Analytics Workspace. */
    az_monitor_log_analytics_workspace_create_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** The capacity reservation level for this workspace, when CapacityReservation sku is selected. The maximum value is 1000 and must be in multiples of 100. If you want to increase the limit, please contact LAIngestionRate@microsoft.com. */
    az_monitor_log_analytics_workspace_create_command_builder.prototype.capacityReservationLevel = function (value) {
        this.setFlag("--capacity-reservation-level", value);
        return this;
    };
    /** The public network access type to access workspace ingestion. */
    az_monitor_log_analytics_workspace_create_command_builder.prototype.ingestionAccess = function (value) {
        this.setFlag("--ingestion-access", value);
        return this;
    };
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_monitor_log_analytics_workspace_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_monitor_log_analytics_workspace_create_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** The public network access type to access workspace query. */
    az_monitor_log_analytics_workspace_create_command_builder.prototype.queryAccess = function (value) {
        this.setFlag("--query-access", value);
        return this;
    };
    /** The workspace daily quota for ingestion in gigabytes. The minimum value is 0.023 and default is -1 which means unlimited. */
    az_monitor_log_analytics_workspace_create_command_builder.prototype.quota = function (value) {
        this.setFlag("--quota", value);
        return this;
    };
    /** The workspace data retention in days. */
    az_monitor_log_analytics_workspace_create_command_builder.prototype.retentionTime = function (value) {
        this.setFlag("--retention-time", value);
        return this;
    };
    /** The supported value: PerGB2018, CapacityReservation. */
    az_monitor_log_analytics_workspace_create_command_builder.prototype.sku = function (value) {
        this.setFlag("--sku", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_log_analytics_workspace_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_monitor_log_analytics_workspace_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_monitor_log_analytics_workspace_create_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_log_analytics_workspace_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_log_analytics_workspace_delete_command_builder, _super);
    function az_monitor_log_analytics_workspace_delete_command_builder(commandPath, resultDataTypeName, resourceGroup, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_log_analytics_workspace_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Log Analytics Workspace. */
    az_monitor_log_analytics_workspace_delete_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** Deletes the workspace without the recovery option. A workspace that was deleted with this flag cannot be recovered. */
    az_monitor_log_analytics_workspace_delete_command_builder.prototype.force = function (value) {
        this.setFlag("--force", value.toString());
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_log_analytics_workspace_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_monitor_log_analytics_workspace_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_monitor_log_analytics_workspace_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_log_analytics_workspace_get_schema_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_log_analytics_workspace_get_schema_command_builder, _super);
    function az_monitor_log_analytics_workspace_get_schema_command_builder(commandPath, resultDataTypeName, resourceGroup, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_log_analytics_workspace_get_schema_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Log Analytics Workspace. */
    az_monitor_log_analytics_workspace_get_schema_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_log_analytics_workspace_get_schema_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_monitor_log_analytics_workspace_get_schema_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_log_analytics_workspace_get_shared_keys_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_log_analytics_workspace_get_shared_keys_command_builder, _super);
    function az_monitor_log_analytics_workspace_get_shared_keys_command_builder(commandPath, resultDataTypeName, resourceGroup, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_log_analytics_workspace_get_shared_keys_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Log Analytics Workspace. */
    az_monitor_log_analytics_workspace_get_shared_keys_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_log_analytics_workspace_get_shared_keys_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_monitor_log_analytics_workspace_get_shared_keys_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_log_analytics_workspace_list_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_log_analytics_workspace_list_command_builder, _super);
    function az_monitor_log_analytics_workspace_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_monitor_log_analytics_workspace_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_log_analytics_workspace_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_log_analytics_workspace_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_monitor_log_analytics_workspace_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Get a list of deleted workspaces that can be recovered in a subscription or a resource group.
 *
 * Syntax:
 * ```
 * az monitor log-analytics workspace list-deleted-workspaces [--resource-group]
 *                                                            [--subscription]
 * ```
 */
var az_monitor_log_analytics_workspace_list_deleted_workspaces_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_log_analytics_workspace_list_deleted_workspaces_command_builder, _super);
    function az_monitor_log_analytics_workspace_list_deleted_workspaces_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_log_analytics_workspace_list_deleted_workspaces_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_log_analytics_workspace_list_deleted_workspaces_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_monitor_log_analytics_workspace_list_deleted_workspaces_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_log_analytics_workspace_list_management_groups_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_log_analytics_workspace_list_management_groups_command_builder, _super);
    function az_monitor_log_analytics_workspace_list_management_groups_command_builder(commandPath, resultDataTypeName, resourceGroup, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_log_analytics_workspace_list_management_groups_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Log Analytics Workspace. */
    az_monitor_log_analytics_workspace_list_management_groups_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_log_analytics_workspace_list_management_groups_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_monitor_log_analytics_workspace_list_management_groups_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_log_analytics_workspace_list_usages_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_log_analytics_workspace_list_usages_command_builder, _super);
    function az_monitor_log_analytics_workspace_list_usages_command_builder(commandPath, resultDataTypeName, resourceGroup, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_log_analytics_workspace_list_usages_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Log Analytics Workspace. */
    az_monitor_log_analytics_workspace_list_usages_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_log_analytics_workspace_list_usages_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_monitor_log_analytics_workspace_list_usages_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_log_analytics_workspace_recover_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_log_analytics_workspace_recover_command_builder, _super);
    function az_monitor_log_analytics_workspace_recover_command_builder(commandPath, resultDataTypeName, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** Name of the Log Analytics Workspace. */
    az_monitor_log_analytics_workspace_recover_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_monitor_log_analytics_workspace_recover_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_log_analytics_workspace_recover_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_log_analytics_workspace_recover_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_monitor_log_analytics_workspace_recover_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_log_analytics_workspace_show_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_log_analytics_workspace_show_command_builder, _super);
    function az_monitor_log_analytics_workspace_show_command_builder(commandPath, resultDataTypeName, resourceGroup, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_log_analytics_workspace_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Log Analytics Workspace. */
    az_monitor_log_analytics_workspace_show_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_monitor_log_analytics_workspace_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_log_analytics_workspace_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_monitor_log_analytics_workspace_show_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_log_analytics_workspace_update_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_log_analytics_workspace_update_command_builder, _super);
    function az_monitor_log_analytics_workspace_update_command_builder(commandPath, resultDataTypeName, resourceGroup, workspaceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        _this.workspaceName(workspaceName);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_log_analytics_workspace_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Log Analytics Workspace. */
    az_monitor_log_analytics_workspace_update_command_builder.prototype.workspaceName = function (value) {
        this.setFlag("--workspace-name", value);
        return this;
    };
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_monitor_log_analytics_workspace_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** The capacity reservation level for this workspace, when CapacityReservation sku is selected. The maximum value is 1000 and must be in multiples of 100. If you want to increase the limit, please contact LAIngestionRate@microsoft.com. */
    az_monitor_log_analytics_workspace_update_command_builder.prototype.capacityReservationLevel = function (value) {
        this.setFlag("--capacity-reservation-level", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_monitor_log_analytics_workspace_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** The public network access type to access workspace ingestion. */
    az_monitor_log_analytics_workspace_update_command_builder.prototype.ingestionAccess = function (value) {
        this.setFlag("--ingestion-access", value);
        return this;
    };
    /** The public network access type to access workspace query. */
    az_monitor_log_analytics_workspace_update_command_builder.prototype.queryAccess = function (value) {
        this.setFlag("--query-access", value);
        return this;
    };
    /** The workspace daily quota for ingestion in gigabytes. The minimum value is 0.023 and default is -1 which means unlimited. */
    az_monitor_log_analytics_workspace_update_command_builder.prototype.quota = function (value) {
        this.setFlag("--quota", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_monitor_log_analytics_workspace_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** The workspace data retention in days. */
    az_monitor_log_analytics_workspace_update_command_builder.prototype.retentionTime = function (value) {
        this.setFlag("--retention-time", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_monitor_log_analytics_workspace_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_log_analytics_workspace_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_monitor_log_analytics_workspace_update_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_monitor_log_analytics_workspace_update_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_log_profiles_create_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_log_profiles_create_command_builder, _super);
    function az_monitor_log_profiles_create_command_builder(commandPath, resultDataTypeName, categories, days, enabled, location, locations, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.categories(categories);
        _this.days(days);
        _this.enabled(enabled);
        _this.location(location);
        _this.locations(locations);
        _this.name(name);
        return _this;
    }
    /** Space-separated categories of the logs. These categories are created as is convenient to the user. Some values are Write, Delete, and/or Action. */
    az_monitor_log_profiles_create_command_builder.prototype.categories = function (value) {
        this.setFlag("--categories", value);
        return this;
    };
    /** The number of days for the retention in days. A value of 0 will retain the events indefinitely. */
    az_monitor_log_profiles_create_command_builder.prototype.days = function (value) {
        this.setFlag("--days", value);
        return this;
    };
    /** Whether the retention policy is enabled. */
    az_monitor_log_profiles_create_command_builder.prototype.enabled = function (value) {
        this.setFlag("--enabled", value.toString());
        return this;
    };
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_monitor_log_profiles_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Space-separated list of regions for which Activity Log events should be stored. */
    az_monitor_log_profiles_create_command_builder.prototype.locations = function (value) {
        this.setFlag("--locations", value);
        return this;
    };
    /** The name of the log profile. */
    az_monitor_log_profiles_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The service bus rule ID of the service bus namespace in which you would like to have Event Hubs created for streaming the Activity Log. The rule ID is of the format '{service bus resource ID}/authorizationrules/{key name}'. */
    az_monitor_log_profiles_create_command_builder.prototype.serviceBusRuleId = function (value) {
        this.setFlag("--service-bus-rule-id", value);
        return this;
    };
    /** The resource id of the storage account to which you would like to send the Activity Log. */
    az_monitor_log_profiles_create_command_builder.prototype.storageAccountId = function (value) {
        this.setFlag("--storage-account-id", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_log_profiles_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_monitor_log_profiles_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_monitor_log_profiles_create_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_log_profiles_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_log_profiles_delete_command_builder, _super);
    function az_monitor_log_profiles_delete_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** The name of the log profile. */
    az_monitor_log_profiles_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_log_profiles_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_monitor_log_profiles_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List the log profiles.
 *
 * Syntax:
 * ```
 * az monitor log-profiles list [--query-examples]
 *                              [--subscription]
 * ```
 */
var az_monitor_log_profiles_list_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_log_profiles_list_command_builder, _super);
    function az_monitor_log_profiles_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_monitor_log_profiles_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_log_profiles_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_monitor_log_profiles_list_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_log_profiles_show_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_log_profiles_show_command_builder, _super);
    function az_monitor_log_profiles_show_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** The name of the log profile. */
    az_monitor_log_profiles_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_monitor_log_profiles_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_log_profiles_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_monitor_log_profiles_show_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_log_profiles_update_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_log_profiles_update_command_builder, _super);
    function az_monitor_log_profiles_update_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** The name of the log profile. */
    az_monitor_log_profiles_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_monitor_log_profiles_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_monitor_log_profiles_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_monitor_log_profiles_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_monitor_log_profiles_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_log_profiles_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_monitor_log_profiles_update_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_metrics_alert_create_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_metrics_alert_create_command_builder, _super);
    function az_monitor_metrics_alert_create_command_builder(commandPath, resultDataTypeName, condition, name, resourceGroup, scopes) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.condition(condition);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.scopes(scopes);
        return _this;
    }
    /** The condition which triggers the rule. */
    az_monitor_metrics_alert_create_command_builder.prototype.condition = function (value) {
        this.setFlag("--condition", value);
        return this;
    };
    /** Name of the alert rule. */
    az_monitor_metrics_alert_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_metrics_alert_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Space-separated list of scopes the rule applies to. The resources specified in this parameter must be of the same type and exist in the same location. */
    az_monitor_metrics_alert_create_command_builder.prototype.scopes = function (value) {
        this.setFlag("--scopes", value);
        return this;
    };
    /** Add an action group and optional webhook properties to fire when the alert is triggered. */
    az_monitor_metrics_alert_create_command_builder.prototype.action = function (value) {
        this.setFlag("--action", value);
        return this;
    };
    /** Automatically resolve the alert. */
    az_monitor_metrics_alert_create_command_builder.prototype.autoMitigate = function (value) {
        this.setFlag("--auto-mitigate", value.toString());
        return this;
    };
    /** Free-text description of the rule. */
    az_monitor_metrics_alert_create_command_builder.prototype.description = function (value) {
        this.setFlag("--description", value);
        return this;
    };
    /** Create the rule in a disabled state. */
    az_monitor_metrics_alert_create_command_builder.prototype.disabled = function (value) {
        this.setFlag("--disabled", value.toString());
        return this;
    };
    /** Frequency with which to evaluate the rule in "##h##m##s" format. */
    az_monitor_metrics_alert_create_command_builder.prototype.evaluationFrequency = function (value) {
        this.setFlag("--evaluation-frequency", value);
        return this;
    };
    /** The region of the target resource(s) in scopes. This must be provided when scopes is resource group or subscription. */
    az_monitor_metrics_alert_create_command_builder.prototype.targetResourceRegion = function (value) {
        this.setFlag("--target-resource-region", value);
        return this;
    };
    /** Severity of the alert from 0 (critical) to 4 (verbose). */
    az_monitor_metrics_alert_create_command_builder.prototype.severity = function (value) {
        this.setFlag("--severity", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_metrics_alert_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_monitor_metrics_alert_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    /** The resource type of the target resource(s) in scopes. This must be provided when scopes is resource group or subscription. */
    az_monitor_metrics_alert_create_command_builder.prototype.targetResourceType = function (value) {
        this.setFlag("--target-resource-type", value);
        return this;
    };
    /** Time over which to aggregate metrics in "##h##m##s" format. */
    az_monitor_metrics_alert_create_command_builder.prototype.windowSize = function (value) {
        this.setFlag("--window-size", value);
        return this;
    };
    return az_monitor_metrics_alert_create_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_metrics_alert_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_metrics_alert_delete_command_builder, _super);
    function az_monitor_metrics_alert_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_monitor_metrics_alert_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the alert rule. */
    az_monitor_metrics_alert_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_metrics_alert_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_metrics_alert_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_monitor_metrics_alert_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_metrics_alert_list_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_metrics_alert_list_command_builder, _super);
    function az_monitor_metrics_alert_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_monitor_metrics_alert_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_metrics_alert_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_metrics_alert_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_monitor_metrics_alert_list_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_metrics_alert_show_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_metrics_alert_show_command_builder, _super);
    function az_monitor_metrics_alert_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_monitor_metrics_alert_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the alert rule. */
    az_monitor_metrics_alert_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_monitor_metrics_alert_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_metrics_alert_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_metrics_alert_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_monitor_metrics_alert_show_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_metrics_alert_update_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_metrics_alert_update_command_builder, _super);
    function az_monitor_metrics_alert_update_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_monitor_metrics_alert_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** Add an action group and optional webhook properties to fire when the alert is triggered. */
    az_monitor_metrics_alert_update_command_builder.prototype.addAction = function (value) {
        this.setFlag("--add-action", value);
        return this;
    };
    /** Add a condition which triggers the rule. */
    az_monitor_metrics_alert_update_command_builder.prototype.addCondition = function (value) {
        this.setFlag("--add-condition", value);
        return this;
    };
    /** Automatically resolve the alert. */
    az_monitor_metrics_alert_update_command_builder.prototype.autoMitigate = function (value) {
        this.setFlag("--auto-mitigate", value.toString());
        return this;
    };
    /** Free-text description of the rule. */
    az_monitor_metrics_alert_update_command_builder.prototype.description = function (value) {
        this.setFlag("--description", value);
        return this;
    };
    /** Whether the metric alert rule is enabled. */
    az_monitor_metrics_alert_update_command_builder.prototype.enabled = function (value) {
        this.setFlag("--enabled", value.toString());
        return this;
    };
    /** Frequency with which to evaluate the rule in "##h##m##s" format. */
    az_monitor_metrics_alert_update_command_builder.prototype.evaluationFrequency = function (value) {
        this.setFlag("--evaluation-frequency", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_monitor_metrics_alert_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_monitor_metrics_alert_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the alert rule. */
    az_monitor_metrics_alert_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_monitor_metrics_alert_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Space-separated list of action group names to remove. */
    az_monitor_metrics_alert_update_command_builder.prototype.removeActions = function (value) {
        this.setFlag("--remove-actions", value);
        return this;
    };
    /** Space-separated list of condition names to remove. */
    az_monitor_metrics_alert_update_command_builder.prototype.removeConditions = function (value) {
        this.setFlag("--remove-conditions", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_metrics_alert_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Space-separated list of scopes the rule applies to. The resources specified in this parameter must be of the same type and exist in the same location. */
    az_monitor_metrics_alert_update_command_builder.prototype.scopes = function (value) {
        this.setFlag("--scopes", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_monitor_metrics_alert_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Severity of the alert from 0 (critical) to 4 (verbose). */
    az_monitor_metrics_alert_update_command_builder.prototype.severity = function (value) {
        this.setFlag("--severity", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_metrics_alert_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_monitor_metrics_alert_update_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    /** Time over which to aggregate metrics in "##h##m##s" format. */
    az_monitor_metrics_alert_update_command_builder.prototype.windowSize = function (value) {
        this.setFlag("--window-size", value);
        return this;
    };
    return az_monitor_metrics_alert_update_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_metrics_list_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_metrics_list_command_builder, _super);
    function az_monitor_metrics_list_command_builder(commandPath, resultDataTypeName, resource) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resource(resource);
        return _this;
    }
    /** Name or ID of the target resource. */
    az_monitor_metrics_list_command_builder.prototype.resource = function (value) {
        this.setFlag("--resource", value);
        return this;
    };
    /** The list of aggregation types (space-separated) to retrieve. */
    az_monitor_metrics_list_command_builder.prototype.aggregation = function (value) {
        this.setFlag("--aggregation", value);
        return this;
    };
    /** The list of dimensions (space-separated) the metrics are queried into. */
    az_monitor_metrics_list_command_builder.prototype.dimension = function (value) {
        this.setFlag("--dimension", value);
        return this;
    };
    /** End time of the query. Defaults to the current time. Format: date (yyyy-mm-dd) time (hh:mm:ss.xxxxx) timezone (+/-hh:mm). */
    az_monitor_metrics_list_command_builder.prototype.endTime = function (value) {
        this.setFlag("--end-time", value);
        return this;
    };
    /** A string used to reduce the set of metric data returned. eg. "BlobType eq '\*'". */
    az_monitor_metrics_list_command_builder.prototype.filter = function (value) {
        this.setFlag("--filter", value);
        return this;
    };
    /** The interval over which to aggregate metrics, in ##h##m format. */
    az_monitor_metrics_list_command_builder.prototype.interval = function (value) {
        this.setFlag("--interval", value);
        return this;
    };
    /** Returns the metadata values instead of metric data. */
    az_monitor_metrics_list_command_builder.prototype.metadata = function (value) {
        this.setFlag("--metadata", value);
        return this;
    };
    /** Space-separated list of metric names to retrieve. */
    az_monitor_metrics_list_command_builder.prototype.metrics = function (value) {
        this.setFlag("--metrics", value);
        return this;
    };
    /** Namespace to query metric definitions for. */
    az_monitor_metrics_list_command_builder.prototype.namespace = function (value) {
        this.setFlag("--namespace", value);
        return this;
    };
    /** Time offset of the query range, in ##d##h format. */
    az_monitor_metrics_list_command_builder.prototype.offset = function (value) {
        this.setFlag("--offset", value);
        return this;
    };
    /** Aggregation to use for sorting results and the direction of the sort. Only one order can be specificed. Examples: sum asc. */
    az_monitor_metrics_list_command_builder.prototype.orderby = function (value) {
        this.setFlag("--orderby", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_monitor_metrics_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_metrics_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Target resource provider namespace. */
    az_monitor_metrics_list_command_builder.prototype.resourceNamespace = function (value) {
        this.setFlag("--resource-namespace", value);
        return this;
    };
    /** Target resource parent path, if applicable. */
    az_monitor_metrics_list_command_builder.prototype.resourceParent = function (value) {
        this.setFlag("--resource-parent", value);
        return this;
    };
    /** Target resource type. Can also accept namespace/type format (Ex: 'Microsoft.Compute/virtualMachines'). */
    az_monitor_metrics_list_command_builder.prototype.resourceType = function (value) {
        this.setFlag("--resource-type", value);
        return this;
    };
    /** Start time of the query. Format: date (yyyy-mm-dd) time (hh:mm:ss.xxxxx) timezone (+/-hh:mm). */
    az_monitor_metrics_list_command_builder.prototype.startTime = function (value) {
        this.setFlag("--start-time", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_metrics_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Max number of records to retrieve. Valid only if --filter used. */
    az_monitor_metrics_list_command_builder.prototype.top = function (value) {
        this.setFlag("--top", value);
        return this;
    };
    return az_monitor_metrics_list_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_metrics_list_definitions_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_metrics_list_definitions_command_builder, _super);
    function az_monitor_metrics_list_definitions_command_builder(commandPath, resultDataTypeName, resource) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resource(resource);
        return _this;
    }
    /** Name or ID of the target resource. */
    az_monitor_metrics_list_definitions_command_builder.prototype.resource = function (value) {
        this.setFlag("--resource", value);
        return this;
    };
    /** Namespace to query metric definitions for. */
    az_monitor_metrics_list_definitions_command_builder.prototype.namespace = function (value) {
        this.setFlag("--namespace", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_metrics_list_definitions_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Target resource provider namespace. */
    az_monitor_metrics_list_definitions_command_builder.prototype.resourceNamespace = function (value) {
        this.setFlag("--resource-namespace", value);
        return this;
    };
    /** Target resource parent path, if applicable. */
    az_monitor_metrics_list_definitions_command_builder.prototype.resourceParent = function (value) {
        this.setFlag("--resource-parent", value);
        return this;
    };
    /** Target resource type. Can also accept namespace/type format (Ex: 'Microsoft.Compute/virtualMachines'). */
    az_monitor_metrics_list_definitions_command_builder.prototype.resourceType = function (value) {
        this.setFlag("--resource-type", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_metrics_list_definitions_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_monitor_metrics_list_definitions_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_private_link_scope_private_endpoint_connection_approve_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_private_link_scope_private_endpoint_connection_approve_command_builder, _super);
    function az_monitor_private_link_scope_private_endpoint_connection_approve_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Comments for approve operation. */
    az_monitor_private_link_scope_private_endpoint_connection_approve_command_builder.prototype.description = function (value) {
        this.setFlag("--description", value);
        return this;
    };
    /** The ID of the private endpoint connection associated with the private link scope. You can get it using `az monitor private-link-scope show`. */
    az_monitor_private_link_scope_private_endpoint_connection_approve_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Name of the private endpoint connection. */
    az_monitor_private_link_scope_private_endpoint_connection_approve_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The resource group name of specified private link scope. */
    az_monitor_private_link_scope_private_endpoint_connection_approve_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Azure Monitor Private Link Scope. */
    az_monitor_private_link_scope_private_endpoint_connection_approve_command_builder.prototype.scopeName = function (value) {
        this.setFlag("--scope-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_private_link_scope_private_endpoint_connection_approve_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_monitor_private_link_scope_private_endpoint_connection_approve_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_private_link_scope_private_endpoint_connection_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_private_link_scope_private_endpoint_connection_delete_command_builder, _super);
    function az_monitor_private_link_scope_private_endpoint_connection_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The ID of the private endpoint connection associated with the private link scope. You can get it using `az monitor private-link-scope show`. */
    az_monitor_private_link_scope_private_endpoint_connection_delete_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** The name of the private endpoint connection associated with the private link scope. */
    az_monitor_private_link_scope_private_endpoint_connection_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The resource group name of specified private link scope. */
    az_monitor_private_link_scope_private_endpoint_connection_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Azure Monitor Private Link Scope. */
    az_monitor_private_link_scope_private_endpoint_connection_delete_command_builder.prototype.scopeName = function (value) {
        this.setFlag("--scope-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_private_link_scope_private_endpoint_connection_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_monitor_private_link_scope_private_endpoint_connection_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_monitor_private_link_scope_private_endpoint_connection_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_private_link_scope_private_endpoint_connection_list_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_private_link_scope_private_endpoint_connection_list_command_builder, _super);
    function az_monitor_private_link_scope_private_endpoint_connection_list_command_builder(commandPath, resultDataTypeName, resourceGroup, scopeName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        _this.scopeName(scopeName);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_private_link_scope_private_endpoint_connection_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Azure Monitor Private Link Scope. */
    az_monitor_private_link_scope_private_endpoint_connection_list_command_builder.prototype.scopeName = function (value) {
        this.setFlag("--scope-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_monitor_private_link_scope_private_endpoint_connection_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_private_link_scope_private_endpoint_connection_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_monitor_private_link_scope_private_endpoint_connection_list_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_private_link_scope_private_endpoint_connection_reject_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_private_link_scope_private_endpoint_connection_reject_command_builder, _super);
    function az_monitor_private_link_scope_private_endpoint_connection_reject_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Comments for reject operation. */
    az_monitor_private_link_scope_private_endpoint_connection_reject_command_builder.prototype.description = function (value) {
        this.setFlag("--description", value);
        return this;
    };
    /** The ID of the private endpoint connection associated with the private link scope. You can get it using `az monitor private-link-scope show`. */
    az_monitor_private_link_scope_private_endpoint_connection_reject_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Name of the private endpoint connection. */
    az_monitor_private_link_scope_private_endpoint_connection_reject_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The resource group name of specified private link scope. */
    az_monitor_private_link_scope_private_endpoint_connection_reject_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Azure Monitor Private Link Scope. */
    az_monitor_private_link_scope_private_endpoint_connection_reject_command_builder.prototype.scopeName = function (value) {
        this.setFlag("--scope-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_private_link_scope_private_endpoint_connection_reject_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_monitor_private_link_scope_private_endpoint_connection_reject_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_private_link_scope_private_endpoint_connection_show_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_private_link_scope_private_endpoint_connection_show_command_builder, _super);
    function az_monitor_private_link_scope_private_endpoint_connection_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The ID of the private endpoint connection associated with the private link scope. You can get it using `az monitor private-link-scope show`. */
    az_monitor_private_link_scope_private_endpoint_connection_show_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Name of the private endpoint connection. */
    az_monitor_private_link_scope_private_endpoint_connection_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_monitor_private_link_scope_private_endpoint_connection_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** The resource group name of specified private link scope. */
    az_monitor_private_link_scope_private_endpoint_connection_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Azure Monitor Private Link Scope. */
    az_monitor_private_link_scope_private_endpoint_connection_show_command_builder.prototype.scopeName = function (value) {
        this.setFlag("--scope-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_private_link_scope_private_endpoint_connection_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_monitor_private_link_scope_private_endpoint_connection_show_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_private_link_scope_private_link_resource_list_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_private_link_scope_private_link_resource_list_command_builder, _super);
    function az_monitor_private_link_scope_private_link_resource_list_command_builder(commandPath, resultDataTypeName, resourceGroup, scopeName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        _this.scopeName(scopeName);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_private_link_scope_private_link_resource_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Azure Monitor Private Link Scope. */
    az_monitor_private_link_scope_private_link_resource_list_command_builder.prototype.scopeName = function (value) {
        this.setFlag("--scope-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_monitor_private_link_scope_private_link_resource_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_private_link_scope_private_link_resource_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_monitor_private_link_scope_private_link_resource_list_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_private_link_scope_private_link_resource_show_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_private_link_scope_private_link_resource_show_command_builder, _super);
    function az_monitor_private_link_scope_private_link_resource_show_command_builder(commandPath, resultDataTypeName, name, resourceGroup, scopeName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.scopeName(scopeName);
        return _this;
    }
    /** Name of the private link resource. */
    az_monitor_private_link_scope_private_link_resource_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_private_link_scope_private_link_resource_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Azure Monitor Private Link Scope. */
    az_monitor_private_link_scope_private_link_resource_show_command_builder.prototype.scopeName = function (value) {
        this.setFlag("--scope-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_monitor_private_link_scope_private_link_resource_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_private_link_scope_private_link_resource_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_monitor_private_link_scope_private_link_resource_show_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_private_link_scope_scoped_resource_create_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_private_link_scope_scoped_resource_create_command_builder, _super);
    function az_monitor_private_link_scope_scoped_resource_create_command_builder(commandPath, resultDataTypeName, linkedResource, name, resourceGroup, scopeName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.linkedResource(linkedResource);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.scopeName(scopeName);
        return _this;
    }
    /** ARM resource ID of the linked resource. It should be one of log analytics workspace or application insights component. */
    az_monitor_private_link_scope_scoped_resource_create_command_builder.prototype.linkedResource = function (value) {
        this.setFlag("--linked-resource", value);
        return this;
    };
    /** Name of the assigned resource. */
    az_monitor_private_link_scope_scoped_resource_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_private_link_scope_scoped_resource_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Azure Monitor Private Link Scope. */
    az_monitor_private_link_scope_scoped_resource_create_command_builder.prototype.scopeName = function (value) {
        this.setFlag("--scope-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_private_link_scope_scoped_resource_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_monitor_private_link_scope_scoped_resource_create_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_private_link_scope_scoped_resource_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_private_link_scope_scoped_resource_delete_command_builder, _super);
    function az_monitor_private_link_scope_scoped_resource_delete_command_builder(commandPath, resultDataTypeName, name, resourceGroup, scopeName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.scopeName(scopeName);
        return _this;
    }
    /** Name of the assigned resource. */
    az_monitor_private_link_scope_scoped_resource_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_private_link_scope_scoped_resource_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Azure Monitor Private Link Scope. */
    az_monitor_private_link_scope_scoped_resource_delete_command_builder.prototype.scopeName = function (value) {
        this.setFlag("--scope-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_private_link_scope_scoped_resource_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_monitor_private_link_scope_scoped_resource_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_monitor_private_link_scope_scoped_resource_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_private_link_scope_scoped_resource_list_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_private_link_scope_scoped_resource_list_command_builder, _super);
    function az_monitor_private_link_scope_scoped_resource_list_command_builder(commandPath, resultDataTypeName, resourceGroup, scopeName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        _this.scopeName(scopeName);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_private_link_scope_scoped_resource_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Azure Monitor Private Link Scope. */
    az_monitor_private_link_scope_scoped_resource_list_command_builder.prototype.scopeName = function (value) {
        this.setFlag("--scope-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_monitor_private_link_scope_scoped_resource_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_private_link_scope_scoped_resource_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_monitor_private_link_scope_scoped_resource_list_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_private_link_scope_scoped_resource_show_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_private_link_scope_scoped_resource_show_command_builder, _super);
    function az_monitor_private_link_scope_scoped_resource_show_command_builder(commandPath, resultDataTypeName, name, resourceGroup, scopeName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.scopeName(scopeName);
        return _this;
    }
    /** Name of the assigned resource. */
    az_monitor_private_link_scope_scoped_resource_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_private_link_scope_scoped_resource_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Azure Monitor Private Link Scope. */
    az_monitor_private_link_scope_scoped_resource_show_command_builder.prototype.scopeName = function (value) {
        this.setFlag("--scope-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_monitor_private_link_scope_scoped_resource_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_private_link_scope_scoped_resource_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_monitor_private_link_scope_scoped_resource_show_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_private_link_scope_create_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_private_link_scope_create_command_builder, _super);
    function az_monitor_private_link_scope_create_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the Azure Monitor Private Link Scope. */
    az_monitor_private_link_scope_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_private_link_scope_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_private_link_scope_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_monitor_private_link_scope_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_monitor_private_link_scope_create_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_private_link_scope_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_private_link_scope_delete_command_builder, _super);
    function az_monitor_private_link_scope_delete_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the Azure Monitor Private Link Scope. */
    az_monitor_private_link_scope_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_private_link_scope_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_private_link_scope_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_monitor_private_link_scope_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_monitor_private_link_scope_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_private_link_scope_list_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_private_link_scope_list_command_builder, _super);
    function az_monitor_private_link_scope_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_monitor_private_link_scope_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_private_link_scope_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_private_link_scope_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_monitor_private_link_scope_list_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_private_link_scope_show_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_private_link_scope_show_command_builder, _super);
    function az_monitor_private_link_scope_show_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the Azure Monitor Private Link Scope. */
    az_monitor_private_link_scope_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_private_link_scope_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_monitor_private_link_scope_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_private_link_scope_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_monitor_private_link_scope_show_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_private_link_scope_update_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_private_link_scope_update_command_builder, _super);
    function az_monitor_private_link_scope_update_command_builder(commandPath, resultDataTypeName, name, resourceGroup, tags) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.tags(tags);
        return _this;
    }
    /** Name of the Azure Monitor Private Link Scope. */
    az_monitor_private_link_scope_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_monitor_private_link_scope_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_monitor_private_link_scope_update_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_private_link_scope_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_monitor_private_link_scope_update_command_builder;
}(base_1.CommandBuilder));
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
var az_monitor_clone_command_builder = /** @class */ (function (_super) {
    __extends(az_monitor_clone_command_builder, _super);
    function az_monitor_clone_command_builder(commandPath, resultDataTypeName, sourceResource, targetResource) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.sourceResource(sourceResource);
        _this.targetResource(targetResource);
        return _this;
    }
    /** Resource ID of the source resource. */
    az_monitor_clone_command_builder.prototype.sourceResource = function (value) {
        this.setFlag("--source-resource", value);
        return this;
    };
    /** Resource ID of the target resource. */
    az_monitor_clone_command_builder.prototype.targetResource = function (value) {
        this.setFlag("--target-resource", value);
        return this;
    };
    /** If this argument is applied, all monitor settings would be cloned instead of expanding its scope. */
    az_monitor_clone_command_builder.prototype.alwaysClone = function (value) {
        this.setFlag("--always-clone", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_monitor_clone_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** List of types of monitor settings which would be cloned. */
    az_monitor_clone_command_builder.prototype.types = function (value) {
        this.setFlag("--types", value);
        return this;
    };
    return az_monitor_clone_command_builder;
}(base_1.CommandBuilder));
