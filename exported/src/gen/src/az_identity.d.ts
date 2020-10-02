import { CommandBuilder } from '../base';
import { az_identity_create_command_result } from './models/az_identity_create_command_result';
import { az_identity_delete_command_result } from './models/az_identity_delete_command_result';
import { az_identity_list_command_result } from './models/az_identity_list_command_result';
import { az_identity_list_operations_command_result } from './models/az_identity_list_operations_command_result';
import { az_identity_show_command_result } from './models/az_identity_show_command_result';
/** Managed Service Identities. */
export declare class az_identity {
    /**
     * Create or update an identity in the specified subscription and resource group.
     *
     * Syntax:
     * ```
     * az identity create --name
     *                    --resource-group
     *                    [--location]
     *                    [--subscription]
     *                    [--tags]
     * ```
     *
     * @param {string} name The name of the identity resource.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static create(name: string, resourceGroup: string): az_identity_create_command_builder;
    /**
     * Deletes the identity.
     *
     * Syntax:
     * ```
     * az identity delete [--ids]
     *                    [--name]
     *                    [--resource-group]
     *                    [--subscription]
     * ```
     */
    static delete(): az_identity_delete_command_builder;
    /**
     * List Managed Service Identities.
     *
     * Syntax:
     * ```
     * az identity list [--query-examples]
     *                  [--resource-group]
     *                  [--subscription]
     * ```
     */
    static list(): az_identity_list_command_builder;
    /**
     * Lists available operations for the Managed Identity provider.
     *
     * Syntax:
     * ```
     * az identity list-operations [--subscription]
     * ```
     */
    static list_operations(): az_identity_list_operations_command_builder;
    /**
     * Gets the identity.
     *
     * Syntax:
     * ```
     * az identity show [--ids]
     *                  [--name]
     *                  [--query-examples]
     *                  [--resource-group]
     *                  [--subscription]
     * ```
     */
    static show(): az_identity_show_command_builder;
}
/**
 * Create or update an identity in the specified subscription and resource group.
 *
 * Syntax:
 * ```
 * az identity create --name
 *                    --resource-group
 *                    [--location]
 *                    [--subscription]
 *                    [--tags]
 * ```
 *
 * @param {string} name The name of the identity resource.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_identity_create_command_builder extends CommandBuilder<az_identity_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** The name of the identity resource. */
    name(value: string): az_identity_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_identity_create_command_builder;
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_identity_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_identity_create_command_builder;
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_identity_create_command_builder;
}
/**
 * Deletes the identity.
 *
 * Syntax:
 * ```
 * az identity delete [--ids]
 *                    [--name]
 *                    [--resource-group]
 *                    [--subscription]
 * ```
 */
declare class az_identity_delete_command_builder extends CommandBuilder<az_identity_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_identity_delete_command_builder;
    /** The name of the identity resource. */
    name(value: string): az_identity_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_identity_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_identity_delete_command_builder;
}
/**
 * List Managed Service Identities.
 *
 * Syntax:
 * ```
 * az identity list [--query-examples]
 *                  [--resource-group]
 *                  [--subscription]
 * ```
 */
declare class az_identity_list_command_builder extends CommandBuilder<az_identity_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_identity_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_identity_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_identity_list_command_builder;
}
/**
 * Lists available operations for the Managed Identity provider.
 *
 * Syntax:
 * ```
 * az identity list-operations [--subscription]
 * ```
 */
declare class az_identity_list_operations_command_builder extends CommandBuilder<az_identity_list_operations_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_identity_list_operations_command_builder;
}
/**
 * Gets the identity.
 *
 * Syntax:
 * ```
 * az identity show [--ids]
 *                  [--name]
 *                  [--query-examples]
 *                  [--resource-group]
 *                  [--subscription]
 * ```
 */
declare class az_identity_show_command_builder extends CommandBuilder<az_identity_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_identity_show_command_builder;
    /** The name of the identity resource. */
    name(value: string): az_identity_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_identity_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_identity_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_identity_show_command_builder;
}
export {};
