import { CommandBuilder } from '../base';
import { az_cache_delete_command_result } from './models/az_cache_delete_command_result';
import { az_cache_list_command_result } from './models/az_cache_list_command_result';
import { az_cache_purge_command_result } from './models/az_cache_purge_command_result';
import { az_cache_show_command_result } from './models/az_cache_show_command_result';
/** Commands to manage CLI objects cached using the `--defer` argument. */
export declare class az_cache {
    /**
     * Delete an object from the cache.
     *
     * Syntax:
     * ```
     * az cache delete --name
     *                 --resource-group
     *                 --resource-type
     *                 [--subscription]
     * ```
     *
     * @param {string} name The resource name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} resourceType The resource type.
     */
    static delete(name: string, resourceGroup: string, resourceType: string): az_cache_delete_command_builder;
    /**
     * List the contents of the object cache.
     *
     * Syntax:
     * ```
     * az cache list [--query-examples]
     *               [--subscription]
     * ```
     */
    static list(): az_cache_list_command_builder;
    /**
     * Clear the entire CLI object cache.
     *
     * Syntax:
     * ```
     * az cache purge [--subscription]
     * ```
     */
    static purge(): az_cache_purge_command_builder;
    /**
     * Show the contents of a specific object in the cache.
     *
     * Syntax:
     * ```
     * az cache show --name
     *               --resource-group
     *               --resource-type
     *               [--query-examples]
     *               [--subscription]
     * ```
     *
     * @param {string} name The resource name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} resourceType The resource type.
     */
    static show(name: string, resourceGroup: string, resourceType: string): az_cache_show_command_builder;
}
/**
 * Delete an object from the cache.
 *
 * Syntax:
 * ```
 * az cache delete --name
 *                 --resource-group
 *                 --resource-type
 *                 [--subscription]
 * ```
 *
 * @param {string} name The resource name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} resourceType The resource type.
 */
declare class az_cache_delete_command_builder extends CommandBuilder<az_cache_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string, resourceType: string);
    /** The resource name. */
    name(value: string): az_cache_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cache_delete_command_builder;
    /** The resource type. */
    resourceType(value: string): az_cache_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cache_delete_command_builder;
}
/**
 * List the contents of the object cache.
 *
 * Syntax:
 * ```
 * az cache list [--query-examples]
 *               [--subscription]
 * ```
 */
declare class az_cache_list_command_builder extends CommandBuilder<az_cache_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_cache_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cache_list_command_builder;
}
/**
 * Clear the entire CLI object cache.
 *
 * Syntax:
 * ```
 * az cache purge [--subscription]
 * ```
 */
declare class az_cache_purge_command_builder extends CommandBuilder<az_cache_purge_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cache_purge_command_builder;
}
/**
 * Show the contents of a specific object in the cache.
 *
 * Syntax:
 * ```
 * az cache show --name
 *               --resource-group
 *               --resource-type
 *               [--query-examples]
 *               [--subscription]
 * ```
 *
 * @param {string} name The resource name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} resourceType The resource type.
 */
declare class az_cache_show_command_builder extends CommandBuilder<az_cache_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string, resourceType: string);
    /** The resource name. */
    name(value: string): az_cache_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cache_show_command_builder;
    /** The resource type. */
    resourceType(value: string): az_cache_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_cache_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cache_show_command_builder;
}
export {};
