import { CommandBuilder } from '../base';
import { az_search_admin_key_renew_command_result } from './models/az_search_admin_key_renew_command_result';
import { az_search_admin_key_show_command_result } from './models/az_search_admin_key_show_command_result';
import { az_search_query_key_create_command_result } from './models/az_search_query_key_create_command_result';
import { az_search_query_key_delete_command_result } from './models/az_search_query_key_delete_command_result';
import { az_search_query_key_list_command_result } from './models/az_search_query_key_list_command_result';
import { az_search_service_create_command_result } from './models/az_search_service_create_command_result';
import { az_search_service_delete_command_result } from './models/az_search_service_delete_command_result';
import { az_search_service_list_command_result } from './models/az_search_service_list_command_result';
import { az_search_service_show_command_result } from './models/az_search_service_show_command_result';
import { az_search_service_update_command_result } from './models/az_search_service_update_command_result';
/** Manage Azure Search admin keys. */
export declare class az_search_admin_key {
    /**
     * Regenerates either the primary or secondary admin API key.
     *
     * Syntax:
     * ```
     * az search admin-key renew --key-kind
     *                           --resource-group
     *                           --service-name
     *                           [--subscription]
     * ```
     *
     * @param {string} keyKind The type (primary or secondary) of the admin key.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serviceName The name of the search service.
     */
    static renew(keyKind: string, resourceGroup: string, serviceName: string): az_search_admin_key_renew_command_builder;
    /**
     * Gets the primary and secondary admin API keys for the specified Azure Search service.
     *
     * Syntax:
     * ```
     * az search admin-key show --resource-group
     *                          --service-name
     *                          [--query-examples]
     *                          [--subscription]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serviceName The name of the search service.
     */
    static show(resourceGroup: string, serviceName: string): az_search_admin_key_show_command_builder;
}
/** Manage Azure Search query keys. */
export declare class az_search_query_key {
    /**
     * Generates a new query key for the specified Search service.
     *
     * Syntax:
     * ```
     * az search query-key create --name
     *                            --resource-group
     *                            --service-name
     *                            [--subscription]
     * ```
     *
     * @param {string} name The name of the query key.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serviceName The name of the search service.
     */
    static create(name: string, resourceGroup: string, serviceName: string): az_search_query_key_create_command_builder;
    /**
     * Deletes the specified query key.
     *
     * Syntax:
     * ```
     * az search query-key delete --key-value
     *                            --resource-group
     *                            --service-name
     *                            [--subscription]
     * ```
     *
     * @param {string} keyValue The value of the query key.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serviceName The name of the search service.
     */
    static delete(keyValue: string, resourceGroup: string, serviceName: string): az_search_query_key_delete_command_builder;
    /**
     * Returns the list of query API keys for the given Azure Search service.
     *
     * Syntax:
     * ```
     * az search query-key list --resource-group
     *                          --service-name
     *                          [--query-examples]
     *                          [--subscription]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serviceName The name of the search service.
     */
    static list(resourceGroup: string, serviceName: string): az_search_query_key_list_command_builder;
}
/** Manage Azure Search services. */
export declare class az_search_service {
    /**
     * Creates a Search service in the given resource group.
     *
     * Syntax:
     * ```
     * az search service create --name
     *                          --resource-group
     *                          --sku
     *                          [--location]
     *                          [--partition-count]
     *                          [--replica-count]
     *                          [--subscription]
     * ```
     *
     * @param {string} name The name of the search service.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} sku The SKU of the search service, which determines price tier and capacity limits.
     */
    static create(name: string, resourceGroup: string, sku: string): az_search_service_create_command_builder;
    /**
     * Deletes a Search service in the given resource group, along with its associated resources.
     *
     * Syntax:
     * ```
     * az search service delete --name
     *                          --resource-group
     *                          [--subscription]
     *                          [--yes]
     * ```
     *
     * @param {string} name The name of the search service.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static delete(name: string, resourceGroup: string): az_search_service_delete_command_builder;
    /**
     * Gets a list of all Search services in the given resource group.
     *
     * Syntax:
     * ```
     * az search service list --resource-group
     *                        [--query-examples]
     *                        [--subscription]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static list(resourceGroup: string): az_search_service_list_command_builder;
    /**
     * Gets the Search service with the given name in the given resource group.
     *
     * Syntax:
     * ```
     * az search service show --name
     *                        --resource-group
     *                        [--query-examples]
     *                        [--subscription]
     * ```
     *
     * @param {string} name The name of the search service.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static show(name: string, resourceGroup: string): az_search_service_show_command_builder;
    /**
     * Update partition and replica of the given search service.
     *
     * Syntax:
     * ```
     * az search service update --name
     *                          --resource-group
     *                          [--add]
     *                          [--force-string]
     *                          [--partition-count]
     *                          [--remove]
     *                          [--replica-count]
     *                          [--set]
     *                          [--subscription]
     * ```
     *
     * @param {string} name The name of the search service.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static update(name: string, resourceGroup: string): az_search_service_update_command_builder;
}
/** Manage Azure Search services, admin keys and query keys. */
export declare class az_search {
}
/**
 * Regenerates either the primary or secondary admin API key.
 *
 * Syntax:
 * ```
 * az search admin-key renew --key-kind
 *                           --resource-group
 *                           --service-name
 *                           [--subscription]
 * ```
 *
 * @param {string} keyKind The type (primary or secondary) of the admin key.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serviceName The name of the search service.
 */
declare class az_search_admin_key_renew_command_builder extends CommandBuilder<az_search_admin_key_renew_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, keyKind: string, resourceGroup: string, serviceName: string);
    /** The type (primary or secondary) of the admin key. */
    keyKind(value: string): az_search_admin_key_renew_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_search_admin_key_renew_command_builder;
    /** The name of the search service. */
    serviceName(value: string): az_search_admin_key_renew_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_search_admin_key_renew_command_builder;
}
/**
 * Gets the primary and secondary admin API keys for the specified Azure Search service.
 *
 * Syntax:
 * ```
 * az search admin-key show --resource-group
 *                          --service-name
 *                          [--query-examples]
 *                          [--subscription]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serviceName The name of the search service.
 */
declare class az_search_admin_key_show_command_builder extends CommandBuilder<az_search_admin_key_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, resourceGroup: string, serviceName: string);
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_search_admin_key_show_command_builder;
    /** The name of the search service. */
    serviceName(value: string): az_search_admin_key_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_search_admin_key_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_search_admin_key_show_command_builder;
}
/**
 * Generates a new query key for the specified Search service.
 *
 * Syntax:
 * ```
 * az search query-key create --name
 *                            --resource-group
 *                            --service-name
 *                            [--subscription]
 * ```
 *
 * @param {string} name The name of the query key.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serviceName The name of the search service.
 */
declare class az_search_query_key_create_command_builder extends CommandBuilder<az_search_query_key_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string, serviceName: string);
    /** The name of the query key. */
    name(value: string): az_search_query_key_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_search_query_key_create_command_builder;
    /** The name of the search service. */
    serviceName(value: string): az_search_query_key_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_search_query_key_create_command_builder;
}
/**
 * Deletes the specified query key.
 *
 * Syntax:
 * ```
 * az search query-key delete --key-value
 *                            --resource-group
 *                            --service-name
 *                            [--subscription]
 * ```
 *
 * @param {string} keyValue The value of the query key.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serviceName The name of the search service.
 */
declare class az_search_query_key_delete_command_builder extends CommandBuilder<az_search_query_key_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, keyValue: string, resourceGroup: string, serviceName: string);
    /** The value of the query key. */
    keyValue(value: string): az_search_query_key_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_search_query_key_delete_command_builder;
    /** The name of the search service. */
    serviceName(value: string): az_search_query_key_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_search_query_key_delete_command_builder;
}
/**
 * Returns the list of query API keys for the given Azure Search service.
 *
 * Syntax:
 * ```
 * az search query-key list --resource-group
 *                          --service-name
 *                          [--query-examples]
 *                          [--subscription]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serviceName The name of the search service.
 */
declare class az_search_query_key_list_command_builder extends CommandBuilder<az_search_query_key_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, resourceGroup: string, serviceName: string);
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_search_query_key_list_command_builder;
    /** The name of the search service. */
    serviceName(value: string): az_search_query_key_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_search_query_key_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_search_query_key_list_command_builder;
}
/**
 * Creates a Search service in the given resource group.
 *
 * Syntax:
 * ```
 * az search service create --name
 *                          --resource-group
 *                          --sku
 *                          [--location]
 *                          [--partition-count]
 *                          [--replica-count]
 *                          [--subscription]
 * ```
 *
 * @param {string} name The name of the search service.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} sku The SKU of the search service, which determines price tier and capacity limits.
 */
declare class az_search_service_create_command_builder extends CommandBuilder<az_search_service_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string, sku: string);
    /** The name of the search service. */
    name(value: string): az_search_service_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_search_service_create_command_builder;
    /** The SKU of the search service, which determines price tier and capacity limits. */
    sku(value: string): az_search_service_create_command_builder;
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_search_service_create_command_builder;
    /** Number of partitions in the search service. */
    partitionCount(value: string): az_search_service_create_command_builder;
    /** Number of replicas in the search service. */
    replicaCount(value: string): az_search_service_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_search_service_create_command_builder;
}
/**
 * Deletes a Search service in the given resource group, along with its associated resources.
 *
 * Syntax:
 * ```
 * az search service delete --name
 *                          --resource-group
 *                          [--subscription]
 *                          [--yes]
 * ```
 *
 * @param {string} name The name of the search service.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_search_service_delete_command_builder extends CommandBuilder<az_search_service_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** The name of the search service. */
    name(value: string): az_search_service_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_search_service_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_search_service_delete_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_search_service_delete_command_builder;
}
/**
 * Gets a list of all Search services in the given resource group.
 *
 * Syntax:
 * ```
 * az search service list --resource-group
 *                        [--query-examples]
 *                        [--subscription]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_search_service_list_command_builder extends CommandBuilder<az_search_service_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, resourceGroup: string);
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_search_service_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_search_service_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_search_service_list_command_builder;
}
/**
 * Gets the Search service with the given name in the given resource group.
 *
 * Syntax:
 * ```
 * az search service show --name
 *                        --resource-group
 *                        [--query-examples]
 *                        [--subscription]
 * ```
 *
 * @param {string} name The name of the search service.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_search_service_show_command_builder extends CommandBuilder<az_search_service_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** The name of the search service. */
    name(value: string): az_search_service_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_search_service_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_search_service_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_search_service_show_command_builder;
}
/**
 * Update partition and replica of the given search service.
 *
 * Syntax:
 * ```
 * az search service update --name
 *                          --resource-group
 *                          [--add]
 *                          [--force-string]
 *                          [--partition-count]
 *                          [--remove]
 *                          [--replica-count]
 *                          [--set]
 *                          [--subscription]
 * ```
 *
 * @param {string} name The name of the search service.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_search_service_update_command_builder extends CommandBuilder<az_search_service_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** The name of the search service. */
    name(value: string): az_search_service_update_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_search_service_update_command_builder;
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_search_service_update_command_builder;
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_search_service_update_command_builder;
    /** Number of partitions in the search service. */
    partitionCount(value: string): az_search_service_update_command_builder;
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_search_service_update_command_builder;
    /** Number of replicas in the search service. */
    replicaCount(value: string): az_search_service_update_command_builder;
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_search_service_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_search_service_update_command_builder;
}
export {};
