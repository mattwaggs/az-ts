import { CommandBuilder } from '../base';
import { az_advisor_configuration_list_command_result } from './models/az_advisor_configuration_list_command_result';
import { az_advisor_configuration_show_command_result } from './models/az_advisor_configuration_show_command_result';
import { az_advisor_configuration_update_command_result } from './models/az_advisor_configuration_update_command_result';
import { az_advisor_recommendation_disable_command_result } from './models/az_advisor_recommendation_disable_command_result';
import { az_advisor_recommendation_enable_command_result } from './models/az_advisor_recommendation_enable_command_result';
import { az_advisor_recommendation_list_command_result } from './models/az_advisor_recommendation_list_command_result';
/** Manage Azure Advisor configuration. */
export declare class az_advisor_configuration {
    /**
     * List Azure Advisor configuration for the entire subscription.
     *
     * Syntax:
     * ```
     * az advisor configuration list [--query-examples]
     *                               [--subscription]
     * ```
     */
    static list(): az_advisor_configuration_list_command_builder;
    /**
     * Show Azure Advisor configuration for the given subscription or resource group.
     *
     * Syntax:
     * ```
     * az advisor configuration show [--query-examples]
     *                               [--resource-group]
     *                               [--subscription]
     * ```
     */
    static show(): az_advisor_configuration_show_command_builder;
    /**
     * Update Azure Advisor configuration.
     *
     * Syntax:
     * ```
     * az advisor configuration update [--add]
     *                                 [--exclude]
     *                                 [--force-string]
     *                                 [--include]
     *                                 [--low-cpu-threshold {10, 15, 20, 5}]
     *                                 [--remove]
     *                                 [--resource-group]
     *                                 [--set]
     *                                 [--subscription]
     * ```
     */
    static update(): az_advisor_configuration_update_command_builder;
}
/** Review Azure Advisor recommendations. */
export declare class az_advisor_recommendation {
    /**
     * Disable Azure Advisor recommendations.
     *
     * Syntax:
     * ```
     * az advisor recommendation disable [--days]
     *                                   [--ids]
     *                                   [--name]
     *                                   [--resource-group]
     *                                   [--subscription]
     * ```
     */
    static disable(): az_advisor_recommendation_disable_command_builder;
    /**
     * Enable Azure Advisor recommendations.
     *
     * Syntax:
     * ```
     * az advisor recommendation enable [--ids]
     *                                  [--name]
     *                                  [--resource-group]
     *                                  [--subscription]
     * ```
     */
    static enable(): az_advisor_recommendation_enable_command_builder;
    /**
     * List Azure Advisor recommendations.
     *
     * Syntax:
     * ```
     * az advisor recommendation list [--category {Cost, HighAvailability, Performance, Security}]
     *                                [--ids]
     *                                [--query-examples]
     *                                [--refresh]
     *                                [--resource-group]
     *                                [--subscription]
     * ```
     */
    static list(): az_advisor_recommendation_list_command_builder;
}
/** Manage Azure Advisor. */
export declare class az_advisor {
}
/**
 * List Azure Advisor configuration for the entire subscription.
 *
 * Syntax:
 * ```
 * az advisor configuration list [--query-examples]
 *                               [--subscription]
 * ```
 */
declare class az_advisor_configuration_list_command_builder extends CommandBuilder<az_advisor_configuration_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_advisor_configuration_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_advisor_configuration_list_command_builder;
}
/**
 * Show Azure Advisor configuration for the given subscription or resource group.
 *
 * Syntax:
 * ```
 * az advisor configuration show [--query-examples]
 *                               [--resource-group]
 *                               [--subscription]
 * ```
 */
declare class az_advisor_configuration_show_command_builder extends CommandBuilder<az_advisor_configuration_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_advisor_configuration_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_advisor_configuration_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_advisor_configuration_show_command_builder;
}
/**
 * Update Azure Advisor configuration.
 *
 * Syntax:
 * ```
 * az advisor configuration update [--add]
 *                                 [--exclude]
 *                                 [--force-string]
 *                                 [--include]
 *                                 [--low-cpu-threshold {10, 15, 20, 5}]
 *                                 [--remove]
 *                                 [--resource-group]
 *                                 [--set]
 *                                 [--subscription]
 * ```
 */
declare class az_advisor_configuration_update_command_builder extends CommandBuilder<az_advisor_configuration_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_advisor_configuration_update_command_builder;
    /** Exclude from recommendation generation. */
    exclude(value: string): az_advisor_configuration_update_command_builder;
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_advisor_configuration_update_command_builder;
    /** Include in recommendation generation. */
    include(value: string): az_advisor_configuration_update_command_builder;
    /** Value for low CPU threshold. */
    lowCpuThreshold(value: '10' | '15' | '20' | '5'): az_advisor_configuration_update_command_builder;
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_advisor_configuration_update_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_advisor_configuration_update_command_builder;
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_advisor_configuration_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_advisor_configuration_update_command_builder;
}
/**
 * Disable Azure Advisor recommendations.
 *
 * Syntax:
 * ```
 * az advisor recommendation disable [--days]
 *                                   [--ids]
 *                                   [--name]
 *                                   [--resource-group]
 *                                   [--subscription]
 * ```
 */
declare class az_advisor_recommendation_disable_command_builder extends CommandBuilder<az_advisor_recommendation_disable_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Number of days to disable. If not specified, the recommendation is disabled forever. */
    days(value: string): az_advisor_recommendation_disable_command_builder;
    /** One or more resource IDs (space-delimited). If provided, no other "Resource Id" arguments should be specified. */
    ids(value: string): az_advisor_recommendation_disable_command_builder;
    /** The name of the recommendation as output by the list command. */
    name(value: string): az_advisor_recommendation_disable_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_advisor_recommendation_disable_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_advisor_recommendation_disable_command_builder;
}
/**
 * Enable Azure Advisor recommendations.
 *
 * Syntax:
 * ```
 * az advisor recommendation enable [--ids]
 *                                  [--name]
 *                                  [--resource-group]
 *                                  [--subscription]
 * ```
 */
declare class az_advisor_recommendation_enable_command_builder extends CommandBuilder<az_advisor_recommendation_enable_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). If provided, no other "Resource Id" arguments should be specified. */
    ids(value: string): az_advisor_recommendation_enable_command_builder;
    /** The name of the recommendation as output by the list command. */
    name(value: string): az_advisor_recommendation_enable_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_advisor_recommendation_enable_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_advisor_recommendation_enable_command_builder;
}
/**
 * List Azure Advisor recommendations.
 *
 * Syntax:
 * ```
 * az advisor recommendation list [--category {Cost, HighAvailability, Performance, Security}]
 *                                [--ids]
 *                                [--query-examples]
 *                                [--refresh]
 *                                [--resource-group]
 *                                [--subscription]
 * ```
 */
declare class az_advisor_recommendation_list_command_builder extends CommandBuilder<az_advisor_recommendation_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Name of recommendation category. */
    category(value: 'Cost' | 'HighAvailability' | 'Performance' | 'Security'): az_advisor_recommendation_list_command_builder;
    /** One or more resource IDs (space-delimited). If provided, no other "Resource Id" arguments should be specified. */
    ids(value: string): az_advisor_recommendation_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_advisor_recommendation_list_command_builder;
    /** Generate new recommendations. */
    refresh(value: string): az_advisor_recommendation_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_advisor_recommendation_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_advisor_recommendation_list_command_builder;
}
export {};
