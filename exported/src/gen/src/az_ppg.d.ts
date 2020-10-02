import { CommandBuilder } from '../base';
import { az_ppg_create_command_result } from './models/az_ppg_create_command_result';
import { az_ppg_delete_command_result } from './models/az_ppg_delete_command_result';
import { az_ppg_list_command_result } from './models/az_ppg_list_command_result';
import { az_ppg_show_command_result } from './models/az_ppg_show_command_result';
import { az_ppg_update_command_result } from './models/az_ppg_update_command_result';
/** Manage Proximity Placement Groups. */
export declare class az_ppg {
    /**
     * Create a proximity placement group.
     *
     * Syntax:
     * ```
     * az ppg create --name
     *               --resource-group
     *               [--location]
     *               [--subscription]
     *               [--tags]
     *               [--type]
     * ```
     *
     * @param {string} name The name of the proximity placement group.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static create(name: string, resourceGroup: string): az_ppg_create_command_builder;
    /**
     * Delete a proximity placement group.
     *
     * Syntax:
     * ```
     * az ppg delete --name
     *               --resource-group
     *               [--subscription]
     * ```
     *
     * @param {string} name The name of the proximity placement group.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static delete(name: string, resourceGroup: string): az_ppg_delete_command_builder;
    /**
     * List proximity placement groups.
     *
     * Syntax:
     * ```
     * az ppg list [--query-examples]
     *             [--resource-group]
     *             [--subscription]
     * ```
     */
    static list(): az_ppg_list_command_builder;
    /**
     * Get a proximity placement group.
     *
     * Syntax:
     * ```
     * az ppg show --name
     *             --resource-group
     *             [--include-colocation-status]
     *             [--query-examples]
     *             [--subscription]
     * ```
     *
     * @param {string} name The name of the proximity placement group.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static show(name: string, resourceGroup: string): az_ppg_show_command_builder;
    /**
     * Update a proximity placement group.
     *
     * Syntax:
     * ```
     * az ppg update --name
     *               --resource-group
     *               [--add]
     *               [--force-string]
     *               [--include-colocation-status]
     *               [--remove]
     *               [--set]
     *               [--subscription]
     * ```
     *
     * @param {string} name The name of the proximity placement group.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static update(name: string, resourceGroup: string): az_ppg_update_command_builder;
}
/**
 * Create a proximity placement group.
 *
 * Syntax:
 * ```
 * az ppg create --name
 *               --resource-group
 *               [--location]
 *               [--subscription]
 *               [--tags]
 *               [--type]
 * ```
 *
 * @param {string} name The name of the proximity placement group.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_ppg_create_command_builder extends CommandBuilder<az_ppg_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** The name of the proximity placement group. */
    name(value: string): az_ppg_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ppg_create_command_builder;
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_ppg_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ppg_create_command_builder;
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_ppg_create_command_builder;
    /** The type of the proximity placement group. Allowed values: Standard. */
    type(value: string): az_ppg_create_command_builder;
}
/**
 * Delete a proximity placement group.
 *
 * Syntax:
 * ```
 * az ppg delete --name
 *               --resource-group
 *               [--subscription]
 * ```
 *
 * @param {string} name The name of the proximity placement group.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_ppg_delete_command_builder extends CommandBuilder<az_ppg_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** The name of the proximity placement group. */
    name(value: string): az_ppg_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ppg_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ppg_delete_command_builder;
}
/**
 * List proximity placement groups.
 *
 * Syntax:
 * ```
 * az ppg list [--query-examples]
 *             [--resource-group]
 *             [--subscription]
 * ```
 */
declare class az_ppg_list_command_builder extends CommandBuilder<az_ppg_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_ppg_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ppg_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ppg_list_command_builder;
}
/**
 * Get a proximity placement group.
 *
 * Syntax:
 * ```
 * az ppg show --name
 *             --resource-group
 *             [--include-colocation-status]
 *             [--query-examples]
 *             [--subscription]
 * ```
 *
 * @param {string} name The name of the proximity placement group.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_ppg_show_command_builder extends CommandBuilder<az_ppg_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** The name of the proximity placement group. */
    name(value: string): az_ppg_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ppg_show_command_builder;
    /** Enable fetching the colocation status of all the resources in the proximity placement group. */
    includeColocationStatus(value: string): az_ppg_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_ppg_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ppg_show_command_builder;
}
/**
 * Update a proximity placement group.
 *
 * Syntax:
 * ```
 * az ppg update --name
 *               --resource-group
 *               [--add]
 *               [--force-string]
 *               [--include-colocation-status]
 *               [--remove]
 *               [--set]
 *               [--subscription]
 * ```
 *
 * @param {string} name The name of the proximity placement group.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_ppg_update_command_builder extends CommandBuilder<az_ppg_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** The name of the proximity placement group. */
    name(value: string): az_ppg_update_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ppg_update_command_builder;
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_ppg_update_command_builder;
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_ppg_update_command_builder;
    /** IncludeColocationStatus=true enables fetching the colocation status of all the resources in the proximity placement group. */
    includeColocationStatus(value: string): az_ppg_update_command_builder;
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_ppg_update_command_builder;
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_ppg_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ppg_update_command_builder;
}
export {};
