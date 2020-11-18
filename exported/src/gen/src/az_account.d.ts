import { CommandBuilder } from '../base';
import { az_account_lock_create_command_result } from './models/az_account_lock_create_command_result';
import { az_account_lock_delete_command_result } from './models/az_account_lock_delete_command_result';
import { az_account_lock_list_command_result } from './models/az_account_lock_list_command_result';
import { az_account_lock_show_command_result } from './models/az_account_lock_show_command_result';
import { az_account_lock_update_command_result } from './models/az_account_lock_update_command_result';
import { az_account_management_group_subscription_add_command_result } from './models/az_account_management_group_subscription_add_command_result';
import { az_account_management_group_subscription_remove_command_result } from './models/az_account_management_group_subscription_remove_command_result';
import { az_account_management_group_create_command_result } from './models/az_account_management_group_create_command_result';
import { az_account_management_group_delete_command_result } from './models/az_account_management_group_delete_command_result';
import { az_account_management_group_list_command_result } from './models/az_account_management_group_list_command_result';
import { az_account_management_group_show_command_result } from './models/az_account_management_group_show_command_result';
import { az_account_management_group_update_command_result } from './models/az_account_management_group_update_command_result';
import { az_account_clear_command_result } from './models/az_account_clear_command_result';
import { az_account_get_access_token_command_result } from './models/az_account_get_access_token_command_result';
import { az_account_list_command_result } from './models/az_account_list_command_result';
import { az_account_list_locations_command_result } from './models/az_account_list_locations_command_result';
import { az_account_set_command_result } from './models/az_account_set_command_result';
import { az_account_show_command_result } from './models/az_account_show_command_result';
/** Manage Azure subscription level locks. */
export declare class az_account_lock {
    /**
     * Create a subscription lock.
     *
     * Syntax:
     * ```
     * az account lock create --lock-type {CanNotDelete, ReadOnly}
     *                        --name
     *                        [--notes]
     * ```
     *
     * @param {'CanNotDelete' | 'ReadOnly'} lockType The type of lock restriction.
     * @param {string} name Name of the lock.
     */
    static create(lockType: 'CanNotDelete' | 'ReadOnly', name: string): az_account_lock_create_command_builder;
    /**
     * Delete a subscription lock.
     *
     * Syntax:
     * ```
     * az account lock delete [--ids]
     *                        [--name]
     * ```
     */
    static delete(): az_account_lock_delete_command_builder;
    /**
     * List lock information in the subscription.
     *
     * Syntax:
     * ```
     * az account lock list [--filter-string]
     *                      [--query-examples]
     * ```
     */
    static list(): az_account_lock_list_command_builder;
    /**
     * Show the details of a subscription lock.
     *
     * Syntax:
     * ```
     * az account lock show [--ids]
     *                      [--name]
     *                      [--query-examples]
     * ```
     */
    static show(): az_account_lock_show_command_builder;
    /**
     * Update a subscription lock.
     *
     * Syntax:
     * ```
     * az account lock update [--ids]
     *                        [--lock-type {CanNotDelete, ReadOnly}]
     *                        [--name]
     *                        [--notes]
     * ```
     */
    static update(): az_account_lock_update_command_builder;
}
/** Subscription operations for Management Groups. */
export declare class az_account_management_group_subscription {
    /**
     * Add a subscription to a management group.
     *
     * Syntax:
     * ```
     * az account management-group subscription add --name
     *                                              --subscription
     * ```
     *
     * @param {string} name Name of the management group.
     * @param {string} subscription Subscription Id or Name.
     */
    static add(name: string, subscription: string): az_account_management_group_subscription_add_command_builder;
    /**
     * Remove an existing subscription from a management group.
     *
     * Syntax:
     * ```
     * az account management-group subscription remove --name
     *                                                 --subscription
     * ```
     *
     * @param {string} name Name of the management group.
     * @param {string} subscription Subscription Id or Name.
     */
    static remove(name: string, subscription: string): az_account_management_group_subscription_remove_command_builder;
}
/** Manage Azure Management Groups. */
export declare class az_account_management_group {
    /**
     * Create a new management group.
     *
     * Syntax:
     * ```
     * az account management-group create --name
     *                                    [--display-name]
     *                                    [--parent]
     * ```
     *
     * @param {string} name Name of the management group.
     */
    static create(name: string): az_account_management_group_create_command_builder;
    /**
     * Delete an existing management group.
     *
     * Syntax:
     * ```
     * az account management-group delete --name
     * ```
     *
     * @param {string} name Name of the management group.
     */
    static delete(name: string): az_account_management_group_delete_command_builder;
    /**
     * List all management groups.
     *
     * Syntax:
     * ```
     * az account management-group list [--query-examples]
     * ```
     */
    static list(): az_account_management_group_list_command_builder;
    /**
     * Get a specific management group.
     *
     * Syntax:
     * ```
     * az account management-group show --name
     *                                  [--expand]
     *                                  [--query-examples]
     *                                  [--recurse]
     * ```
     *
     * @param {string} name Name of the management group (the last segment of the resource ID). Do not use display name.
     */
    static show(name: string): az_account_management_group_show_command_builder;
    /**
     * Update an existing management group.
     *
     * Syntax:
     * ```
     * az account management-group update --name
     *                                    [--add]
     *                                    [--display-name]
     *                                    [--force-string]
     *                                    [--parent]
     *                                    [--remove]
     *                                    [--set]
     * ```
     *
     * @param {string} name Name of the management group.
     */
    static update(name: string): az_account_management_group_update_command_builder;
}
/** Manage Azure subscription information. */
export declare class az_account {
    /**
     * Clear all subscriptions from the CLI's local cache.
     *
     * Syntax:
     * ```
     * az account clear
     * ```
     */
    static clear(): az_account_clear_command_builder;
    /**
     * Get a token for utilities to access Azure.
     *
     * Syntax:
     * ```
     * az account get-access-token [--resource]
     *                             [--resource-type {aad-graph, arm, batch, data-lake, media, ms-graph, oss-rdbms}]
     *                             [--subscription]
     *                             [--tenant]
     * ```
     */
    static get_access_token(): az_account_get_access_token_command_builder;
    /**
     * Get a list of subscriptions for the logged in account.
     *
     * Syntax:
     * ```
     * az account list [--all]
     *                 [--query-examples]
     *                 [--refresh]
     * ```
     */
    static list(): az_account_list_command_builder;
    /**
     * List supported regions for the current subscription.
     *
     * Syntax:
     * ```
     * az account list-locations
     * ```
     */
    static list_locations(): az_account_list_locations_command_builder;
    /**
     * Set a subscription to be the current active subscription.
     *
     * Syntax:
     * ```
     * az account set --subscription
     * ```
     *
     * @param {string} subscription Name or ID of subscription.
     */
    static set(subscription: string): az_account_set_command_builder;
    /**
     * Get the details of a subscription.
     *
     * Syntax:
     * ```
     * az account show [--query-examples]
     *                 [--sdk-auth]
     *                 [--subscription]
     * ```
     */
    static show(): az_account_show_command_builder;
}
/**
 * Create a subscription lock.
 *
 * Syntax:
 * ```
 * az account lock create --lock-type {CanNotDelete, ReadOnly}
 *                        --name
 *                        [--notes]
 * ```
 *
 * @param {'CanNotDelete' | 'ReadOnly'} lockType The type of lock restriction.
 * @param {string} name Name of the lock.
 */
declare class az_account_lock_create_command_builder extends CommandBuilder<az_account_lock_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, lockType: 'CanNotDelete' | 'ReadOnly', name: string);
    /** The type of lock restriction. */
    lockType(value: 'CanNotDelete' | 'ReadOnly'): az_account_lock_create_command_builder;
    /** Name of the lock. */
    name(value: string): az_account_lock_create_command_builder;
    /** Notes about this lock. */
    notes(value: string): az_account_lock_create_command_builder;
}
/**
 * Delete a subscription lock.
 *
 * Syntax:
 * ```
 * az account lock delete [--ids]
 *                        [--name]
 * ```
 */
declare class az_account_lock_delete_command_builder extends CommandBuilder<az_account_lock_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). If provided, no other "Resource Id" arguments should be specified. */
    ids(value: string): az_account_lock_delete_command_builder;
    /** Name of the lock. */
    name(value: string): az_account_lock_delete_command_builder;
}
/**
 * List lock information in the subscription.
 *
 * Syntax:
 * ```
 * az account lock list [--filter-string]
 *                      [--query-examples]
 * ```
 */
declare class az_account_lock_list_command_builder extends CommandBuilder<az_account_lock_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** A query filter to use to restrict the results. */
    filterString(value: string): az_account_lock_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_account_lock_list_command_builder;
}
/**
 * Show the details of a subscription lock.
 *
 * Syntax:
 * ```
 * az account lock show [--ids]
 *                      [--name]
 *                      [--query-examples]
 * ```
 */
declare class az_account_lock_show_command_builder extends CommandBuilder<az_account_lock_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). If provided, no other "Resource Id" arguments should be specified. */
    ids(value: string): az_account_lock_show_command_builder;
    /** Name of the lock. */
    name(value: string): az_account_lock_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_account_lock_show_command_builder;
}
/**
 * Update a subscription lock.
 *
 * Syntax:
 * ```
 * az account lock update [--ids]
 *                        [--lock-type {CanNotDelete, ReadOnly}]
 *                        [--name]
 *                        [--notes]
 * ```
 */
declare class az_account_lock_update_command_builder extends CommandBuilder<az_account_lock_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). If provided, no other "Resource Id" arguments should be specified. */
    ids(value: string): az_account_lock_update_command_builder;
    /** The type of lock restriction. */
    lockType(value: 'CanNotDelete' | 'ReadOnly'): az_account_lock_update_command_builder;
    /** Name of the lock. */
    name(value: string): az_account_lock_update_command_builder;
    /** Notes about this lock. */
    notes(value: string): az_account_lock_update_command_builder;
}
/**
 * Add a subscription to a management group.
 *
 * Syntax:
 * ```
 * az account management-group subscription add --name
 *                                              --subscription
 * ```
 *
 * @param {string} name Name of the management group.
 * @param {string} subscription Subscription Id or Name.
 */
declare class az_account_management_group_subscription_add_command_builder extends CommandBuilder<az_account_management_group_subscription_add_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, subscription: string);
    /** Name of the management group. */
    name(value: string): az_account_management_group_subscription_add_command_builder;
    /** Subscription Id or Name. */
    subscription(value: string): az_account_management_group_subscription_add_command_builder;
}
/**
 * Remove an existing subscription from a management group.
 *
 * Syntax:
 * ```
 * az account management-group subscription remove --name
 *                                                 --subscription
 * ```
 *
 * @param {string} name Name of the management group.
 * @param {string} subscription Subscription Id or Name.
 */
declare class az_account_management_group_subscription_remove_command_builder extends CommandBuilder<az_account_management_group_subscription_remove_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, subscription: string);
    /** Name of the management group. */
    name(value: string): az_account_management_group_subscription_remove_command_builder;
    /** Subscription Id or Name. */
    subscription(value: string): az_account_management_group_subscription_remove_command_builder;
}
/**
 * Create a new management group.
 *
 * Syntax:
 * ```
 * az account management-group create --name
 *                                    [--display-name]
 *                                    [--parent]
 * ```
 *
 * @param {string} name Name of the management group.
 */
declare class az_account_management_group_create_command_builder extends CommandBuilder<az_account_management_group_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** Name of the management group. */
    name(value: string): az_account_management_group_create_command_builder;
    /** Sets the display name of the management group. If null, the group name is set as the display name. */
    displayName(value: string): az_account_management_group_create_command_builder;
    /** Sets the parent of the management group. Can be the fully qualified id or the name of the management group. If null, the root tenant group is set as the parent. */
    parent(value: string): az_account_management_group_create_command_builder;
}
/**
 * Delete an existing management group.
 *
 * Syntax:
 * ```
 * az account management-group delete --name
 * ```
 *
 * @param {string} name Name of the management group.
 */
declare class az_account_management_group_delete_command_builder extends CommandBuilder<az_account_management_group_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** Name of the management group. */
    name(value: string): az_account_management_group_delete_command_builder;
}
/**
 * List all management groups.
 *
 * Syntax:
 * ```
 * az account management-group list [--query-examples]
 * ```
 */
declare class az_account_management_group_list_command_builder extends CommandBuilder<az_account_management_group_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_account_management_group_list_command_builder;
}
/**
 * Get a specific management group.
 *
 * Syntax:
 * ```
 * az account management-group show --name
 *                                  [--expand]
 *                                  [--query-examples]
 *                                  [--recurse]
 * ```
 *
 * @param {string} name Name of the management group (the last segment of the resource ID). Do not use display name.
 */
declare class az_account_management_group_show_command_builder extends CommandBuilder<az_account_management_group_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** Name of the management group (the last segment of the resource ID). Do not use display name. */
    name(value: string): az_account_management_group_show_command_builder;
    /** If given, lists the children in the first level of hierarchy. */
    expand(value: string): az_account_management_group_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_account_management_group_show_command_builder;
    /** If given, lists the children in all levels of hierarchy. */
    recurse(value: string): az_account_management_group_show_command_builder;
}
/**
 * Update an existing management group.
 *
 * Syntax:
 * ```
 * az account management-group update --name
 *                                    [--add]
 *                                    [--display-name]
 *                                    [--force-string]
 *                                    [--parent]
 *                                    [--remove]
 *                                    [--set]
 * ```
 *
 * @param {string} name Name of the management group.
 */
declare class az_account_management_group_update_command_builder extends CommandBuilder<az_account_management_group_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** Name of the management group. */
    name(value: string): az_account_management_group_update_command_builder;
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_account_management_group_update_command_builder;
    /** Updates the display name of the management group. If null, no change is made. */
    displayName(value: string): az_account_management_group_update_command_builder;
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_account_management_group_update_command_builder;
    /** Update the parent of the management group. Can be the fully qualified id or the name of the management group. If null, no change is made. */
    parent(value: string): az_account_management_group_update_command_builder;
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_account_management_group_update_command_builder;
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_account_management_group_update_command_builder;
}
/**
 * Clear all subscriptions from the CLI's local cache.
 *
 * Syntax:
 * ```
 * az account clear
 * ```
 */
declare class az_account_clear_command_builder extends CommandBuilder<az_account_clear_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
}
/**
 * Get a token for utilities to access Azure.
 *
 * Syntax:
 * ```
 * az account get-access-token [--resource]
 *                             [--resource-type {aad-graph, arm, batch, data-lake, media, ms-graph, oss-rdbms}]
 *                             [--subscription]
 *                             [--tenant]
 * ```
 */
declare class az_account_get_access_token_command_builder extends CommandBuilder<az_account_get_access_token_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Azure resource endpoints. Default to Azure Resource Manager. */
    resource(value: string): az_account_get_access_token_command_builder;
    /** Type of well-known resource. */
    resourceType(value: 'aad-graph' | 'arm' | 'batch' | 'data-lake' | 'media' | 'ms-graph' | 'oss-rdbms'): az_account_get_access_token_command_builder;
    /** Name or ID of subscription. */
    subscription(value: string): az_account_get_access_token_command_builder;
    /** Tenant ID for which the token is acquired. Only available for user and service principal account, not for MSI or Cloud Shell account. */
    tenant(value: string): az_account_get_access_token_command_builder;
}
/**
 * Get a list of subscriptions for the logged in account.
 *
 * Syntax:
 * ```
 * az account list [--all]
 *                 [--query-examples]
 *                 [--refresh]
 * ```
 */
declare class az_account_list_command_builder extends CommandBuilder<az_account_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** List all subscriptions, rather than just 'Enabled' ones. */
    all(value: string): az_account_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_account_list_command_builder;
    /** Retrieve up-to-date subscriptions from server. */
    refresh(value: string): az_account_list_command_builder;
}
/**
 * List supported regions for the current subscription.
 *
 * Syntax:
 * ```
 * az account list-locations
 * ```
 */
declare class az_account_list_locations_command_builder extends CommandBuilder<az_account_list_locations_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
}
/**
 * Set a subscription to be the current active subscription.
 *
 * Syntax:
 * ```
 * az account set --subscription
 * ```
 *
 * @param {string} subscription Name or ID of subscription.
 */
declare class az_account_set_command_builder extends CommandBuilder<az_account_set_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, subscription: string);
    /** Name or ID of subscription. */
    subscription(value: string): az_account_set_command_builder;
}
/**
 * Get the details of a subscription.
 *
 * Syntax:
 * ```
 * az account show [--query-examples]
 *                 [--sdk-auth]
 *                 [--subscription]
 * ```
 */
declare class az_account_show_command_builder extends CommandBuilder<az_account_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_account_show_command_builder;
    /** Output result to a file compatible with Azure SDK auth. Only applicable when authenticating with a Service Principal. */
    sdkAuth(value: string): az_account_show_command_builder;
    /** Name or ID of subscription. */
    subscription(value: string): az_account_show_command_builder;
}
export {};
