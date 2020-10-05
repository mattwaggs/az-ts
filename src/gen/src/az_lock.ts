import { CommandBuilder } from '../base';
import { az_lock_create_command_result } from './models/az_lock_create_command_result'
import { az_lock_delete_command_result } from './models/az_lock_delete_command_result'
import { az_lock_list_command_result } from './models/az_lock_list_command_result'
import { az_lock_show_command_result } from './models/az_lock_show_command_result'
import { az_lock_update_command_result } from './models/az_lock_update_command_result'

/** Manage Azure locks. */
export class az_lock {
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
    static create(lockType: 'CanNotDelete' | 'ReadOnly', name: string): az_lock_create_command_builder {
        return new az_lock_create_command_builder("az lock create", 'az_lock_create_command_result', lockType, name);
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
    static delete(): az_lock_delete_command_builder {
        return new az_lock_delete_command_builder("az lock delete", 'az_lock_delete_command_result');
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
    static list(): az_lock_list_command_builder {
        return new az_lock_list_command_builder("az lock list", 'az_lock_list_command_result');
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
    static show(): az_lock_show_command_builder {
        return new az_lock_show_command_builder("az lock show", 'az_lock_show_command_result');
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
    static update(): az_lock_update_command_builder {
        return new az_lock_update_command_builder("az lock update", 'az_lock_update_command_result');
    }
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
class az_lock_create_command_builder extends CommandBuilder<az_lock_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, lockType: 'CanNotDelete' | 'ReadOnly', name: string) {
        super(commandPath, resultDataTypeName);
        this.lockType(lockType)
        this.name(name)
    }

    /** The type of lock restriction. */
    lockType(value: 'CanNotDelete' | 'ReadOnly'): az_lock_create_command_builder {
        this.setFlag("--lock-type", value);
        return this;
    }

    /** Name of the lock. */
    name(value: string): az_lock_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Provider namespace (Ex: 'Microsoft.Provider'). */
    namespace(value: string): az_lock_create_command_builder {
        this.setFlag("--namespace", value);
        return this;
    }

    /** Notes about this lock. */
    notes(value: string): az_lock_create_command_builder {
        this.setFlag("--notes", value);
        return this;
    }

    /** The parent path (Ex: 'resA/myA/resB/myB'). */
    parent(value: string): az_lock_create_command_builder {
        this.setFlag("--parent", value);
        return this;
    }

    /** Name or ID of the resource being locked. If an ID is given, other resource arguments should not be given. */
    resourceName(value: string): az_lock_create_command_builder {
        this.setFlag("--resource-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_lock_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The resource type (Ex: 'resC'). Can also accept namespace/type format (Ex: 'Microsoft.Provider/resC'). */
    resourceType(value: string): az_lock_create_command_builder {
        this.setFlag("--resource-type", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_lock_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_lock_delete_command_builder extends CommandBuilder<az_lock_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** One or more resource IDs (space-delimited). If provided, no other "Resource Id" arguments should be specified. */
    ids(value: string): az_lock_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the lock. */
    name(value: string): az_lock_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Provider namespace (Ex: 'Microsoft.Provider'). */
    namespace(value: string): az_lock_delete_command_builder {
        this.setFlag("--namespace", value);
        return this;
    }

    /** The parent path (Ex: 'resA/myA/resB/myB'). */
    parent(value: string): az_lock_delete_command_builder {
        this.setFlag("--parent", value);
        return this;
    }

    /** Name or ID of the resource being locked. If an ID is given, other resource arguments should not be given. */
    resourceName(value: string): az_lock_delete_command_builder {
        this.setFlag("--resource-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_lock_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The resource type (Ex: 'resC'). Can also accept namespace/type format (Ex: 'Microsoft.Provider/resC'). */
    resourceType(value: string): az_lock_delete_command_builder {
        this.setFlag("--resource-type", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_lock_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_lock_list_command_builder extends CommandBuilder<az_lock_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** A query filter to use to restrict the results. */
    filterString(value: string): az_lock_list_command_builder {
        this.setFlag("--filter-string", value);
        return this;
    }

    /** Provider namespace (Ex: 'Microsoft.Provider'). */
    namespace(value: string): az_lock_list_command_builder {
        this.setFlag("--namespace", value);
        return this;
    }

    /** The parent path (Ex: 'resA/myA/resB/myB'). */
    parent(value: string): az_lock_list_command_builder {
        this.setFlag("--parent", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_lock_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of the resource being locked. If an ID is given, other resource arguments should not be given. */
    resourceName(value: string): az_lock_list_command_builder {
        this.setFlag("--resource-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_lock_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The resource type (Ex: 'resC'). Can also accept namespace/type format (Ex: 'Microsoft.Provider/resC'). */
    resourceType(value: string): az_lock_list_command_builder {
        this.setFlag("--resource-type", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_lock_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_lock_show_command_builder extends CommandBuilder<az_lock_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** One or more resource IDs (space-delimited). If provided, no other "Resource Id" arguments should be specified. */
    ids(value: string): az_lock_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the lock. */
    name(value: string): az_lock_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Provider namespace (Ex: 'Microsoft.Provider'). */
    namespace(value: string): az_lock_show_command_builder {
        this.setFlag("--namespace", value);
        return this;
    }

    /** The parent path (Ex: 'resA/myA/resB/myB'). */
    parent(value: string): az_lock_show_command_builder {
        this.setFlag("--parent", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_lock_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of the resource being locked. If an ID is given, other resource arguments should not be given. */
    resourceName(value: string): az_lock_show_command_builder {
        this.setFlag("--resource-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_lock_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The resource type (Ex: 'resC'). Can also accept namespace/type format (Ex: 'Microsoft.Provider/resC'). */
    resourceType(value: string): az_lock_show_command_builder {
        this.setFlag("--resource-type", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_lock_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_lock_update_command_builder extends CommandBuilder<az_lock_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** One or more resource IDs (space-delimited). If provided, no other "Resource Id" arguments should be specified. */
    ids(value: string): az_lock_update_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The type of lock restriction. */
    lockType(value: 'CanNotDelete' | 'ReadOnly'): az_lock_update_command_builder {
        this.setFlag("--lock-type", value);
        return this;
    }

    /** Name of the lock. */
    name(value: string): az_lock_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Provider namespace (Ex: 'Microsoft.Provider'). */
    namespace(value: string): az_lock_update_command_builder {
        this.setFlag("--namespace", value);
        return this;
    }

    /** Notes about this lock. */
    notes(value: string): az_lock_update_command_builder {
        this.setFlag("--notes", value);
        return this;
    }

    /** The parent path (Ex: 'resA/myA/resB/myB'). */
    parent(value: string): az_lock_update_command_builder {
        this.setFlag("--parent", value);
        return this;
    }

    /** Name or ID of the resource being locked. If an ID is given, other resource arguments should not be given. */
    resourceName(value: string): az_lock_update_command_builder {
        this.setFlag("--resource-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_lock_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The resource type (Ex: 'resC'). Can also accept namespace/type format (Ex: 'Microsoft.Provider/resC'). */
    resourceType(value: string): az_lock_update_command_builder {
        this.setFlag("--resource-type", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_lock_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}
