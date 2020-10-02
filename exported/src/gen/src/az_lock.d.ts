import { CommandBuilder } from '../base';
import { az_lock_create_command_result } from './models/az_lock_create_command_result';
import { az_lock_delete_command_result } from './models/az_lock_delete_command_result';
import { az_lock_list_command_result } from './models/az_lock_list_command_result';
import { az_lock_show_command_result } from './models/az_lock_show_command_result';
import { az_lock_update_command_result } from './models/az_lock_update_command_result';
/** Manage Azure locks. */
export declare class az_lock {
    /**
     * Create a lock.
     *
     * Syntax:
     * ```
     * az lock create --lock-type {CanNotDelete, ReadOnly}
     *                --name
     *                [--namespace]
     *                [--notes]
     *                [--parent]
     *                [--resource]
     *                [--resource-group]
     *                [--resource-type]
     *                [--subscription]
     * ```
     *
     * @param {'CanNotDelete' | 'ReadOnly'} lockType The type of lock restriction.
     * @param {string} name Name of the lock.
     */
    static create(lockType: 'CanNotDelete' | 'ReadOnly', name: string): az_lock_create_command_builder;
    /**
     * Delete a lock.
     *
     * Syntax:
     * ```
     * az lock delete [--ids]
     *                [--name]
     *                [--namespace]
     *                [--parent]
     *                [--resource]
     *                [--resource-group]
     *                [--resource-type]
     *                [--subscription]
     * ```
     */
    static delete(): az_lock_delete_command_builder;
    /**
     * List lock information.
     *
     * Syntax:
     * ```
     * az lock list [--filter-string]
     *              [--namespace]
     *              [--parent]
     *              [--query-examples]
     *              [--resource]
     *              [--resource-group]
     *              [--resource-type]
     *              [--subscription]
     * ```
     */
    static list(): az_lock_list_command_builder;
    /**
     * Show the properties of a lock.
     *
     * Syntax:
     * ```
     * az lock show [--ids]
     *              [--name]
     *              [--namespace]
     *              [--parent]
     *              [--query-examples]
     *              [--resource]
     *              [--resource-group]
     *              [--resource-type]
     *              [--subscription]
     * ```
     */
    static show(): az_lock_show_command_builder;
    /**
     * Update a lock.
     *
     * Syntax:
     * ```
     * az lock update [--ids]
     *                [--lock-type {CanNotDelete, ReadOnly}]
     *                [--name]
     *                [--namespace]
     *                [--notes]
     *                [--parent]
     *                [--resource]
     *                [--resource-group]
     *                [--resource-type]
     *                [--subscription]
     * ```
     */
    static update(): az_lock_update_command_builder;
}
/**
 * Create a lock.
 *
 * Syntax:
 * ```
 * az lock create --lock-type {CanNotDelete, ReadOnly}
 *                --name
 *                [--namespace]
 *                [--notes]
 *                [--parent]
 *                [--resource]
 *                [--resource-group]
 *                [--resource-type]
 *                [--subscription]
 * ```
 *
 * @param {'CanNotDelete' | 'ReadOnly'} lockType The type of lock restriction.
 * @param {string} name Name of the lock.
 */
declare class az_lock_create_command_builder extends CommandBuilder<az_lock_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, lockType: 'CanNotDelete' | 'ReadOnly', name: string);
    /** The type of lock restriction. */
    lockType(value: 'CanNotDelete' | 'ReadOnly'): az_lock_create_command_builder;
    /** Name of the lock. */
    name(value: string): az_lock_create_command_builder;
    /** Provider namespace (Ex: 'Microsoft.Provider'). */
    namespace(value: string): az_lock_create_command_builder;
    /** Notes about this lock. */
    notes(value: string): az_lock_create_command_builder;
    /** The parent path (Ex: 'resA/myA/resB/myB'). */
    parent(value: string): az_lock_create_command_builder;
    /** Name or ID of the resource being locked. If an ID is given, other resource arguments should not be given. */
    resourceName(value: string): az_lock_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_lock_create_command_builder;
    /** The resource type (Ex: 'resC'). Can also accept namespace/type format (Ex: 'Microsoft.Provider/resC'). */
    resourceType(value: string): az_lock_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_lock_create_command_builder;
}
/**
 * Delete a lock.
 *
 * Syntax:
 * ```
 * az lock delete [--ids]
 *                [--name]
 *                [--namespace]
 *                [--parent]
 *                [--resource]
 *                [--resource-group]
 *                [--resource-type]
 *                [--subscription]
 * ```
 */
declare class az_lock_delete_command_builder extends CommandBuilder<az_lock_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). If provided, no other "Resource Id" arguments should be specified. */
    ids(value: string): az_lock_delete_command_builder;
    /** Name of the lock. */
    name(value: string): az_lock_delete_command_builder;
    /** Provider namespace (Ex: 'Microsoft.Provider'). */
    namespace(value: string): az_lock_delete_command_builder;
    /** The parent path (Ex: 'resA/myA/resB/myB'). */
    parent(value: string): az_lock_delete_command_builder;
    /** Name or ID of the resource being locked. If an ID is given, other resource arguments should not be given. */
    resourceName(value: string): az_lock_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_lock_delete_command_builder;
    /** The resource type (Ex: 'resC'). Can also accept namespace/type format (Ex: 'Microsoft.Provider/resC'). */
    resourceType(value: string): az_lock_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_lock_delete_command_builder;
}
/**
 * List lock information.
 *
 * Syntax:
 * ```
 * az lock list [--filter-string]
 *              [--namespace]
 *              [--parent]
 *              [--query-examples]
 *              [--resource]
 *              [--resource-group]
 *              [--resource-type]
 *              [--subscription]
 * ```
 */
declare class az_lock_list_command_builder extends CommandBuilder<az_lock_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** A query filter to use to restrict the results. */
    filterString(value: string): az_lock_list_command_builder;
    /** Provider namespace (Ex: 'Microsoft.Provider'). */
    namespace(value: string): az_lock_list_command_builder;
    /** The parent path (Ex: 'resA/myA/resB/myB'). */
    parent(value: string): az_lock_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_lock_list_command_builder;
    /** Name or ID of the resource being locked. If an ID is given, other resource arguments should not be given. */
    resourceName(value: string): az_lock_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_lock_list_command_builder;
    /** The resource type (Ex: 'resC'). Can also accept namespace/type format (Ex: 'Microsoft.Provider/resC'). */
    resourceType(value: string): az_lock_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_lock_list_command_builder;
}
/**
 * Show the properties of a lock.
 *
 * Syntax:
 * ```
 * az lock show [--ids]
 *              [--name]
 *              [--namespace]
 *              [--parent]
 *              [--query-examples]
 *              [--resource]
 *              [--resource-group]
 *              [--resource-type]
 *              [--subscription]
 * ```
 */
declare class az_lock_show_command_builder extends CommandBuilder<az_lock_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). If provided, no other "Resource Id" arguments should be specified. */
    ids(value: string): az_lock_show_command_builder;
    /** Name of the lock. */
    name(value: string): az_lock_show_command_builder;
    /** Provider namespace (Ex: 'Microsoft.Provider'). */
    namespace(value: string): az_lock_show_command_builder;
    /** The parent path (Ex: 'resA/myA/resB/myB'). */
    parent(value: string): az_lock_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_lock_show_command_builder;
    /** Name or ID of the resource being locked. If an ID is given, other resource arguments should not be given. */
    resourceName(value: string): az_lock_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_lock_show_command_builder;
    /** The resource type (Ex: 'resC'). Can also accept namespace/type format (Ex: 'Microsoft.Provider/resC'). */
    resourceType(value: string): az_lock_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_lock_show_command_builder;
}
/**
 * Update a lock.
 *
 * Syntax:
 * ```
 * az lock update [--ids]
 *                [--lock-type {CanNotDelete, ReadOnly}]
 *                [--name]
 *                [--namespace]
 *                [--notes]
 *                [--parent]
 *                [--resource]
 *                [--resource-group]
 *                [--resource-type]
 *                [--subscription]
 * ```
 */
declare class az_lock_update_command_builder extends CommandBuilder<az_lock_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). If provided, no other "Resource Id" arguments should be specified. */
    ids(value: string): az_lock_update_command_builder;
    /** The type of lock restriction. */
    lockType(value: 'CanNotDelete' | 'ReadOnly'): az_lock_update_command_builder;
    /** Name of the lock. */
    name(value: string): az_lock_update_command_builder;
    /** Provider namespace (Ex: 'Microsoft.Provider'). */
    namespace(value: string): az_lock_update_command_builder;
    /** Notes about this lock. */
    notes(value: string): az_lock_update_command_builder;
    /** The parent path (Ex: 'resA/myA/resB/myB'). */
    parent(value: string): az_lock_update_command_builder;
    /** Name or ID of the resource being locked. If an ID is given, other resource arguments should not be given. */
    resourceName(value: string): az_lock_update_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_lock_update_command_builder;
    /** The resource type (Ex: 'resC'). Can also accept namespace/type format (Ex: 'Microsoft.Provider/resC'). */
    resourceType(value: string): az_lock_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_lock_update_command_builder;
}
export {};
