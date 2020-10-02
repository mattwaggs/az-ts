import { CommandBuilder } from '../base';
import { az_resource_link_create_command_result } from './models/az_resource_link_create_command_result';
import { az_resource_link_delete_command_result } from './models/az_resource_link_delete_command_result';
import { az_resource_link_list_command_result } from './models/az_resource_link_list_command_result';
import { az_resource_link_show_command_result } from './models/az_resource_link_show_command_result';
import { az_resource_link_update_command_result } from './models/az_resource_link_update_command_result';
import { az_resource_lock_create_command_result } from './models/az_resource_lock_create_command_result';
import { az_resource_lock_delete_command_result } from './models/az_resource_lock_delete_command_result';
import { az_resource_lock_list_command_result } from './models/az_resource_lock_list_command_result';
import { az_resource_lock_show_command_result } from './models/az_resource_lock_show_command_result';
import { az_resource_lock_update_command_result } from './models/az_resource_lock_update_command_result';
import { az_resource_create_command_result } from './models/az_resource_create_command_result';
import { az_resource_delete_command_result } from './models/az_resource_delete_command_result';
import { az_resource_invoke_action_command_result } from './models/az_resource_invoke_action_command_result';
import { az_resource_list_command_result } from './models/az_resource_list_command_result';
import { az_resource_move_command_result } from './models/az_resource_move_command_result';
import { az_resource_show_command_result } from './models/az_resource_show_command_result';
import { az_resource_tag_command_result } from './models/az_resource_tag_command_result';
import { az_resource_update_command_result } from './models/az_resource_update_command_result';
import { az_resource_wait_command_result } from './models/az_resource_wait_command_result';
/** Manage links between resources. */
export declare class az_resource_link {
    /**
     * Create a new link between resources.
     *
     * Syntax:
     * ```
     * az resource link create --link
     *                         --target
     *                         [--notes]
     *                         [--subscription]
     * ```
     *
     * @param {string} link Fully-qualified resource ID of the resource link.
     * @param {string} target Fully-qualified resource ID of the resource link target.
     */
    static create(link: string, target: string): az_resource_link_create_command_builder;
    /**
     * Delete a link between resources.
     *
     * Syntax:
     * ```
     * az resource link delete --link
     *                         [--subscription]
     * ```
     *
     * @param {string} link Fully-qualified resource ID of the resource link.
     */
    static delete(link: string): az_resource_link_delete_command_builder;
    /**
     * List resource links.
     *
     * Syntax:
     * ```
     * az resource link list [--filter]
     *                       [--query-examples]
     *                       [--scope]
     *                       [--subscription]
     * ```
     */
    static list(): az_resource_link_list_command_builder;
    /**
     * Gets a resource link with the specified ID.
     *
     * Syntax:
     * ```
     * az resource link show --link
     *                       [--query-examples]
     *                       [--subscription]
     * ```
     *
     * @param {string} link Fully-qualified resource ID of the resource link.
     */
    static show(link: string): az_resource_link_show_command_builder;
    /**
     * Update link between resources.
     *
     * Syntax:
     * ```
     * az resource link update --link
     *                         [--notes]
     *                         [--subscription]
     *                         [--target]
     * ```
     *
     * @param {string} link Fully-qualified resource ID of the resource link.
     */
    static update(link: string): az_resource_link_update_command_builder;
}
/** Manage Azure resource level locks. */
export declare class az_resource_lock {
    /**
     * Create a resource-level lock.
     *
     * Syntax:
     * ```
     * az resource lock create --lock-type {CanNotDelete, ReadOnly}
     *                         --name
     *                         [--namespace]
     *                         [--notes]
     *                         [--parent]
     *                         [--resource]
     *                         [--resource-group]
     *                         [--resource-type]
     *                         [--subscription]
     * ```
     *
     * @param {'CanNotDelete' | 'ReadOnly'} lockType The type of lock restriction.
     * @param {string} name Name of the lock.
     */
    static create(lockType: 'CanNotDelete' | 'ReadOnly', name: string): az_resource_lock_create_command_builder;
    /**
     * Delete a resource-level lock.
     *
     * Syntax:
     * ```
     * az resource lock delete [--ids]
     *                         [--name]
     *                         [--namespace]
     *                         [--parent]
     *                         [--resource]
     *                         [--resource-group]
     *                         [--resource-type]
     *                         [--subscription]
     * ```
     */
    static delete(): az_resource_lock_delete_command_builder;
    /**
     * List lock information in the resource-level.
     *
     * Syntax:
     * ```
     * az resource lock list [--filter-string]
     *                       [--namespace]
     *                       [--parent]
     *                       [--query-examples]
     *                       [--resource]
     *                       [--resource-group]
     *                       [--resource-type]
     *                       [--subscription]
     * ```
     */
    static list(): az_resource_lock_list_command_builder;
    /**
     * Show the details of a resource-level lock.
     *
     * Syntax:
     * ```
     * az resource lock show [--ids]
     *                       [--name]
     *                       [--namespace]
     *                       [--parent]
     *                       [--query-examples]
     *                       [--resource]
     *                       [--resource-group]
     *                       [--resource-type]
     *                       [--subscription]
     * ```
     */
    static show(): az_resource_lock_show_command_builder;
    /**
     * Update a resource-level lock.
     *
     * Syntax:
     * ```
     * az resource lock update [--ids]
     *                         [--lock-type {CanNotDelete, ReadOnly}]
     *                         [--name]
     *                         [--namespace]
     *                         [--notes]
     *                         [--parent]
     *                         [--resource]
     *                         [--resource-group]
     *                         [--resource-type]
     *                         [--subscription]
     * ```
     */
    static update(): az_resource_lock_update_command_builder;
}
/** Manage Azure resources. */
export declare class az_resource {
    /**
     * Create a resource.
     *
     * Syntax:
     * ```
     * az resource create --properties
     *                    [--api-version]
     *                    [--id]
     *                    [--is-full-object]
     *                    [--latest-include-preview]
     *                    [--location]
     *                    [--name]
     *                    [--namespace]
     *                    [--parent]
     *                    [--resource-group]
     *                    [--resource-type]
     *                    [--subscription]
     * ```
     *
     * @param {string} properties A JSON-formatted string containing resource properties.
     */
    static create(properties: string): az_resource_create_command_builder;
    /**
     * Delete a resource.
     *
     * Syntax:
     * ```
     * az resource delete [--api-version]
     *                    [--ids]
     *                    [--latest-include-preview]
     *                    [--name]
     *                    [--namespace]
     *                    [--parent]
     *                    [--resource-group]
     *                    [--resource-type]
     *                    [--subscription]
     * ```
     */
    static delete(): az_resource_delete_command_builder;
    /**
     * Invoke an action on the resource.
     *
     * Syntax:
     * ```
     * az resource invoke-action --action
     *                           [--api-version]
     *                           [--ids]
     *                           [--latest-include-preview]
     *                           [--name]
     *                           [--namespace]
     *                           [--parent]
     *                           [--request-body]
     *                           [--resource-group]
     *                           [--resource-type]
     *                           [--subscription]
     * ```
     *
     * @param {string} action The action that will be invoked on the specified resource.
     */
    static invoke_action(action: string): az_resource_invoke_action_command_builder;
    /**
     * List resources.
     *
     * Syntax:
     * ```
     * az resource list [--location]
     *                  [--name]
     *                  [--namespace]
     *                  [--query-examples]
     *                  [--resource-group]
     *                  [--resource-type]
     *                  [--subscription]
     *                  [--tag]
     * ```
     */
    static list(): az_resource_list_command_builder;
    /**
     * Moves resources from one resource group to another(can be under different subscription).
     *
     * Syntax:
     * ```
     * az resource move --destination-group
     *                  --ids
     *                  [--destination-subscription-id]
     *                  [--subscription]
     * ```
     *
     * @param {string} destinationGroup The destination resource group name.
     * @param {string} ids The space-separated resource ids to be moved.
     */
    static move(destinationGroup: string, ids: string): az_resource_move_command_builder;
    /**
     * Get the details of a resource.
     *
     * Syntax:
     * ```
     * az resource show [--api-version]
     *                  [--ids]
     *                  [--include-response-body {false, true}]
     *                  [--latest-include-preview]
     *                  [--name]
     *                  [--namespace]
     *                  [--parent]
     *                  [--query-examples]
     *                  [--resource-group]
     *                  [--resource-type]
     *                  [--subscription]
     * ```
     */
    static show(): az_resource_show_command_builder;
    /**
     * Tag a resource.
     *
     * Syntax:
     * ```
     * az resource tag --tags
     *                 [--api-version]
     *                 [--ids]
     *                 [--is-incremental]
     *                 [--latest-include-preview]
     *                 [--name]
     *                 [--namespace]
     *                 [--parent]
     *                 [--resource-group]
     *                 [--resource-type]
     *                 [--subscription]
     * ```
     *
     * @param {string} tags Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags.
     */
    static tag(tags: string): az_resource_tag_command_builder;
    /**
     * Update a resource.
     *
     * Syntax:
     * ```
     * az resource update [--add]
     *                    [--api-version]
     *                    [--force-string]
     *                    [--ids]
     *                    [--include-response-body {false, true}]
     *                    [--latest-include-preview]
     *                    [--name]
     *                    [--namespace]
     *                    [--parent]
     *                    [--remove]
     *                    [--resource-group]
     *                    [--resource-type]
     *                    [--set]
     *                    [--subscription]
     * ```
     */
    static update(): az_resource_update_command_builder;
    /**
     * Place the CLI in a waiting state until a condition of a resources is met.
     *
     * Syntax:
     * ```
     * az resource wait [--api-version]
     *                  [--created]
     *                  [--custom]
     *                  [--deleted]
     *                  [--exists]
     *                  [--ids]
     *                  [--include-response-body {false, true}]
     *                  [--interval]
     *                  [--name]
     *                  [--namespace]
     *                  [--parent]
     *                  [--resource-group]
     *                  [--resource-type]
     *                  [--subscription]
     *                  [--timeout]
     *                  [--updated]
     * ```
     */
    static wait(): az_resource_wait_command_builder;
}
/**
 * Create a new link between resources.
 *
 * Syntax:
 * ```
 * az resource link create --link
 *                         --target
 *                         [--notes]
 *                         [--subscription]
 * ```
 *
 * @param {string} link Fully-qualified resource ID of the resource link.
 * @param {string} target Fully-qualified resource ID of the resource link target.
 */
declare class az_resource_link_create_command_builder extends CommandBuilder<az_resource_link_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, link: string, target: string);
    /** Fully-qualified resource ID of the resource link. */
    link(value: string): az_resource_link_create_command_builder;
    /** Fully-qualified resource ID of the resource link target. */
    target(value: string): az_resource_link_create_command_builder;
    /** Notes for the link. */
    notes(value: string): az_resource_link_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_resource_link_create_command_builder;
}
/**
 * Delete a link between resources.
 *
 * Syntax:
 * ```
 * az resource link delete --link
 *                         [--subscription]
 * ```
 *
 * @param {string} link Fully-qualified resource ID of the resource link.
 */
declare class az_resource_link_delete_command_builder extends CommandBuilder<az_resource_link_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, link: string);
    /** Fully-qualified resource ID of the resource link. */
    link(value: string): az_resource_link_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_resource_link_delete_command_builder;
}
/**
 * List resource links.
 *
 * Syntax:
 * ```
 * az resource link list [--filter]
 *                       [--query-examples]
 *                       [--scope]
 *                       [--subscription]
 * ```
 */
declare class az_resource_link_list_command_builder extends CommandBuilder<az_resource_link_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Filter string for limiting results. */
    filter(value: string): az_resource_link_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_resource_link_list_command_builder;
    /** Fully-qualified scope for retrieving links. */
    scope(value: string): az_resource_link_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_resource_link_list_command_builder;
}
/**
 * Gets a resource link with the specified ID.
 *
 * Syntax:
 * ```
 * az resource link show --link
 *                       [--query-examples]
 *                       [--subscription]
 * ```
 *
 * @param {string} link Fully-qualified resource ID of the resource link.
 */
declare class az_resource_link_show_command_builder extends CommandBuilder<az_resource_link_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, link: string);
    /** Fully-qualified resource ID of the resource link. */
    link(value: string): az_resource_link_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_resource_link_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_resource_link_show_command_builder;
}
/**
 * Update link between resources.
 *
 * Syntax:
 * ```
 * az resource link update --link
 *                         [--notes]
 *                         [--subscription]
 *                         [--target]
 * ```
 *
 * @param {string} link Fully-qualified resource ID of the resource link.
 */
declare class az_resource_link_update_command_builder extends CommandBuilder<az_resource_link_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, link: string);
    /** Fully-qualified resource ID of the resource link. */
    link(value: string): az_resource_link_update_command_builder;
    /** Notes for the link. */
    notes(value: string): az_resource_link_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_resource_link_update_command_builder;
    /** Fully-qualified resource ID of the resource link target. */
    target(value: string): az_resource_link_update_command_builder;
}
/**
 * Create a resource-level lock.
 *
 * Syntax:
 * ```
 * az resource lock create --lock-type {CanNotDelete, ReadOnly}
 *                         --name
 *                         [--namespace]
 *                         [--notes]
 *                         [--parent]
 *                         [--resource]
 *                         [--resource-group]
 *                         [--resource-type]
 *                         [--subscription]
 * ```
 *
 * @param {'CanNotDelete' | 'ReadOnly'} lockType The type of lock restriction.
 * @param {string} name Name of the lock.
 */
declare class az_resource_lock_create_command_builder extends CommandBuilder<az_resource_lock_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, lockType: 'CanNotDelete' | 'ReadOnly', name: string);
    /** The type of lock restriction. */
    lockType(value: 'CanNotDelete' | 'ReadOnly'): az_resource_lock_create_command_builder;
    /** Name of the lock. */
    name(value: string): az_resource_lock_create_command_builder;
    /** Provider namespace (Ex: 'Microsoft.Provider'). */
    namespace(value: string): az_resource_lock_create_command_builder;
    /** Notes about this lock. */
    notes(value: string): az_resource_lock_create_command_builder;
    /** The parent path (Ex: 'resA/myA/resB/myB'). */
    parent(value: string): az_resource_lock_create_command_builder;
    /** If an ID is given, other resource arguments should not be given. */
    resourceName(value: string): az_resource_lock_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_resource_lock_create_command_builder;
    /** The resource type (Ex: 'resC'). Can also accept namespace/type format (Ex: 'Microsoft.Provider/resC'). */
    resourceType(value: string): az_resource_lock_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_resource_lock_create_command_builder;
}
/**
 * Delete a resource-level lock.
 *
 * Syntax:
 * ```
 * az resource lock delete [--ids]
 *                         [--name]
 *                         [--namespace]
 *                         [--parent]
 *                         [--resource]
 *                         [--resource-group]
 *                         [--resource-type]
 *                         [--subscription]
 * ```
 */
declare class az_resource_lock_delete_command_builder extends CommandBuilder<az_resource_lock_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). If provided, no other "Resource Id" arguments should be specified. */
    ids(value: string): az_resource_lock_delete_command_builder;
    /** Name of the lock. */
    name(value: string): az_resource_lock_delete_command_builder;
    /** Provider namespace (Ex: 'Microsoft.Provider'). */
    namespace(value: string): az_resource_lock_delete_command_builder;
    /** The parent path (Ex: 'resA/myA/resB/myB'). */
    parent(value: string): az_resource_lock_delete_command_builder;
    /** If an ID is given, other resource arguments should not be given. */
    resourceName(value: string): az_resource_lock_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_resource_lock_delete_command_builder;
    /** The resource type (Ex: 'resC'). Can also accept namespace/type format (Ex: 'Microsoft.Provider/resC'). */
    resourceType(value: string): az_resource_lock_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_resource_lock_delete_command_builder;
}
/**
 * List lock information in the resource-level.
 *
 * Syntax:
 * ```
 * az resource lock list [--filter-string]
 *                       [--namespace]
 *                       [--parent]
 *                       [--query-examples]
 *                       [--resource]
 *                       [--resource-group]
 *                       [--resource-type]
 *                       [--subscription]
 * ```
 */
declare class az_resource_lock_list_command_builder extends CommandBuilder<az_resource_lock_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** A query filter to use to restrict the results. */
    filterString(value: string): az_resource_lock_list_command_builder;
    /** Provider namespace (Ex: 'Microsoft.Provider'). */
    namespace(value: string): az_resource_lock_list_command_builder;
    /** The parent path (Ex: 'resA/myA/resB/myB'). */
    parent(value: string): az_resource_lock_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_resource_lock_list_command_builder;
    /** If an ID is given, other resource arguments should not be given. */
    resourceName(value: string): az_resource_lock_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_resource_lock_list_command_builder;
    /** The resource type (Ex: 'resC'). Can also accept namespace/type format (Ex: 'Microsoft.Provider/resC'). */
    resourceType(value: string): az_resource_lock_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_resource_lock_list_command_builder;
}
/**
 * Show the details of a resource-level lock.
 *
 * Syntax:
 * ```
 * az resource lock show [--ids]
 *                       [--name]
 *                       [--namespace]
 *                       [--parent]
 *                       [--query-examples]
 *                       [--resource]
 *                       [--resource-group]
 *                       [--resource-type]
 *                       [--subscription]
 * ```
 */
declare class az_resource_lock_show_command_builder extends CommandBuilder<az_resource_lock_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). If provided, no other "Resource Id" arguments should be specified. */
    ids(value: string): az_resource_lock_show_command_builder;
    /** Name of the lock. */
    name(value: string): az_resource_lock_show_command_builder;
    /** Provider namespace (Ex: 'Microsoft.Provider'). */
    namespace(value: string): az_resource_lock_show_command_builder;
    /** The parent path (Ex: 'resA/myA/resB/myB'). */
    parent(value: string): az_resource_lock_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_resource_lock_show_command_builder;
    /** If an ID is given, other resource arguments should not be given. */
    resourceName(value: string): az_resource_lock_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_resource_lock_show_command_builder;
    /** The resource type (Ex: 'resC'). Can also accept namespace/type format (Ex: 'Microsoft.Provider/resC'). */
    resourceType(value: string): az_resource_lock_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_resource_lock_show_command_builder;
}
/**
 * Update a resource-level lock.
 *
 * Syntax:
 * ```
 * az resource lock update [--ids]
 *                         [--lock-type {CanNotDelete, ReadOnly}]
 *                         [--name]
 *                         [--namespace]
 *                         [--notes]
 *                         [--parent]
 *                         [--resource]
 *                         [--resource-group]
 *                         [--resource-type]
 *                         [--subscription]
 * ```
 */
declare class az_resource_lock_update_command_builder extends CommandBuilder<az_resource_lock_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). If provided, no other "Resource Id" arguments should be specified. */
    ids(value: string): az_resource_lock_update_command_builder;
    /** The type of lock restriction. */
    lockType(value: 'CanNotDelete' | 'ReadOnly'): az_resource_lock_update_command_builder;
    /** Name of the lock. */
    name(value: string): az_resource_lock_update_command_builder;
    /** Provider namespace (Ex: 'Microsoft.Provider'). */
    namespace(value: string): az_resource_lock_update_command_builder;
    /** Notes about this lock. */
    notes(value: string): az_resource_lock_update_command_builder;
    /** The parent path (Ex: 'resA/myA/resB/myB'). */
    parent(value: string): az_resource_lock_update_command_builder;
    /** If an ID is given, other resource arguments should not be given. */
    resourceName(value: string): az_resource_lock_update_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_resource_lock_update_command_builder;
    /** The resource type (Ex: 'resC'). Can also accept namespace/type format (Ex: 'Microsoft.Provider/resC'). */
    resourceType(value: string): az_resource_lock_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_resource_lock_update_command_builder;
}
/**
 * Create a resource.
 *
 * Syntax:
 * ```
 * az resource create --properties
 *                    [--api-version]
 *                    [--id]
 *                    [--is-full-object]
 *                    [--latest-include-preview]
 *                    [--location]
 *                    [--name]
 *                    [--namespace]
 *                    [--parent]
 *                    [--resource-group]
 *                    [--resource-type]
 *                    [--subscription]
 * ```
 *
 * @param {string} properties A JSON-formatted string containing resource properties.
 */
declare class az_resource_create_command_builder extends CommandBuilder<az_resource_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, properties: string);
    /** A JSON-formatted string containing resource properties. */
    properties(value: string): az_resource_create_command_builder;
    /** The api version of the resource (omit for the latest stable version). */
    apiVersion(value: string): az_resource_create_command_builder;
    /** Resource ID. */
    id(value: string): az_resource_create_command_builder;
    /** Indicate that the properties object includes other options such as location, tags, sku, and/or plan. */
    isFullObject(value: string): az_resource_create_command_builder;
    /** Indicate that the latest api-version will be used regardless of whether it is preview version (like 2020-01-01-preview) or not. For example, if the supported api-version of resource provider is 2020-01-01-preview and 2019-01-01: when passing in this parameter it will take the latest version 2020-01-01-preview, otherwise it will take the latest stable version 2019-01-01 without passing in this parameter. */
    latestIncludePreview(value: string): az_resource_create_command_builder;
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_resource_create_command_builder;
    /** The resource name. (Ex: myC). */
    name(value: string): az_resource_create_command_builder;
    /** Provider namespace (Ex: 'Microsoft.Provider'). */
    namespace(value: string): az_resource_create_command_builder;
    /** The parent path (Ex: 'resA/myA/resB/myB'). */
    parent(value: string): az_resource_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_resource_create_command_builder;
    /** The resource type (Ex: 'resC'). Can also accept namespace/type format (Ex: 'Microsoft.Provider/resC'). */
    resourceType(value: string): az_resource_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_resource_create_command_builder;
}
/**
 * Delete a resource.
 *
 * Syntax:
 * ```
 * az resource delete [--api-version]
 *                    [--ids]
 *                    [--latest-include-preview]
 *                    [--name]
 *                    [--namespace]
 *                    [--parent]
 *                    [--resource-group]
 *                    [--resource-type]
 *                    [--subscription]
 * ```
 */
declare class az_resource_delete_command_builder extends CommandBuilder<az_resource_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** The api version of the resource (omit for the latest stable version). */
    apiVersion(value: string): az_resource_delete_command_builder;
    /** One or more resource IDs (space-delimited). If provided, no other "Resource Id" arguments should be specified. */
    ids(value: string): az_resource_delete_command_builder;
    /** Indicate that the latest api-version will be used regardless of whether it is preview version (like 2020-01-01-preview) or not. For example, if the supported api-version of resource provider is 2020-01-01-preview and 2019-01-01: when passing in this parameter it will take the latest version 2020-01-01-preview, otherwise it will take the latest stable version 2019-01-01 without passing in this parameter. */
    latestIncludePreview(value: string): az_resource_delete_command_builder;
    /** The resource name. (Ex: myC). */
    name(value: string): az_resource_delete_command_builder;
    /** Provider namespace (Ex: 'Microsoft.Provider'). */
    namespace(value: string): az_resource_delete_command_builder;
    /** The parent path (Ex: 'resA/myA/resB/myB'). */
    parent(value: string): az_resource_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_resource_delete_command_builder;
    /** The resource type (Ex: 'resC'). Can also accept namespace/type format (Ex: 'Microsoft.Provider/resC'). */
    resourceType(value: string): az_resource_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_resource_delete_command_builder;
}
/**
 * Invoke an action on the resource.
 *
 * Syntax:
 * ```
 * az resource invoke-action --action
 *                           [--api-version]
 *                           [--ids]
 *                           [--latest-include-preview]
 *                           [--name]
 *                           [--namespace]
 *                           [--parent]
 *                           [--request-body]
 *                           [--resource-group]
 *                           [--resource-type]
 *                           [--subscription]
 * ```
 *
 * @param {string} action The action that will be invoked on the specified resource.
 */
declare class az_resource_invoke_action_command_builder extends CommandBuilder<az_resource_invoke_action_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, action: string);
    /** The action that will be invoked on the specified resource. */
    action(value: string): az_resource_invoke_action_command_builder;
    /** The api version of the resource (omit for the latest stable version). */
    apiVersion(value: string): az_resource_invoke_action_command_builder;
    /** One or more resource IDs (space-delimited). If provided, no other "Resource Id" arguments should be specified. */
    ids(value: string): az_resource_invoke_action_command_builder;
    /** Indicate that the latest api-version will be used regardless of whether it is preview version (like 2020-01-01-preview) or not. For example, if the supported api-version of resource provider is 2020-01-01-preview and 2019-01-01: when passing in this parameter it will take the latest version 2020-01-01-preview, otherwise it will take the latest stable version 2019-01-01 without passing in this parameter. */
    latestIncludePreview(value: string): az_resource_invoke_action_command_builder;
    /** The resource name. (Ex: myC). */
    name(value: string): az_resource_invoke_action_command_builder;
    /** Provider namespace (Ex: 'Microsoft.Provider'). */
    namespace(value: string): az_resource_invoke_action_command_builder;
    /** The parent path (Ex: 'resA/myA/resB/myB'). */
    parent(value: string): az_resource_invoke_action_command_builder;
    /** JSON encoded parameter arguments for the action that will be passed along in the post request body. Use @{file} to load from a file. */
    requestBody(value: string): az_resource_invoke_action_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_resource_invoke_action_command_builder;
    /** The resource type (Ex: 'resC'). Can also accept namespace/type format (Ex: 'Microsoft.Provider/resC'). */
    resourceType(value: string): az_resource_invoke_action_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_resource_invoke_action_command_builder;
}
/**
 * List resources.
 *
 * Syntax:
 * ```
 * az resource list [--location]
 *                  [--name]
 *                  [--namespace]
 *                  [--query-examples]
 *                  [--resource-group]
 *                  [--resource-type]
 *                  [--subscription]
 *                  [--tag]
 * ```
 */
declare class az_resource_list_command_builder extends CommandBuilder<az_resource_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_resource_list_command_builder;
    /** The resource name. (Ex: myC). */
    name(value: string): az_resource_list_command_builder;
    /** Provider namespace (Ex: 'Microsoft.Provider'). */
    namespace(value: string): az_resource_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_resource_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_resource_list_command_builder;
    /** The resource type (Ex: 'resC'). Can also accept namespace/type format (Ex: 'Microsoft.Provider/resC'). */
    resourceType(value: string): az_resource_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_resource_list_command_builder;
    /** A single tag in 'key[=value]' format. Use "" to clear existing tags. */
    tag(value: string): az_resource_list_command_builder;
}
/**
 * Moves resources from one resource group to another(can be under different subscription).
 *
 * Syntax:
 * ```
 * az resource move --destination-group
 *                  --ids
 *                  [--destination-subscription-id]
 *                  [--subscription]
 * ```
 *
 * @param {string} destinationGroup The destination resource group name.
 * @param {string} ids The space-separated resource ids to be moved.
 */
declare class az_resource_move_command_builder extends CommandBuilder<az_resource_move_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, destinationGroup: string, ids: string);
    /** The destination resource group name. */
    destinationGroup(value: string): az_resource_move_command_builder;
    /** The space-separated resource ids to be moved. */
    ids(value: string): az_resource_move_command_builder;
    /** The destination subscription identifier. */
    destinationSubscriptionId(value: string): az_resource_move_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_resource_move_command_builder;
}
/**
 * Get the details of a resource.
 *
 * Syntax:
 * ```
 * az resource show [--api-version]
 *                  [--ids]
 *                  [--include-response-body {false, true}]
 *                  [--latest-include-preview]
 *                  [--name]
 *                  [--namespace]
 *                  [--parent]
 *                  [--query-examples]
 *                  [--resource-group]
 *                  [--resource-type]
 *                  [--subscription]
 * ```
 */
declare class az_resource_show_command_builder extends CommandBuilder<az_resource_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** The api version of the resource (omit for the latest stable version). */
    apiVersion(value: string): az_resource_show_command_builder;
    /** One or more resource IDs (space-delimited). If provided, no other "Resource Id" arguments should be specified. */
    ids(value: string): az_resource_show_command_builder;
    /** Use if the default command output doesn't capture all of the property data. */
    includeResponseBody(value: boolean): az_resource_show_command_builder;
    /** Indicate that the latest api-version will be used regardless of whether it is preview version (like 2020-01-01-preview) or not. For example, if the supported api-version of resource provider is 2020-01-01-preview and 2019-01-01: when passing in this parameter it will take the latest version 2020-01-01-preview, otherwise it will take the latest stable version 2019-01-01 without passing in this parameter. */
    latestIncludePreview(value: string): az_resource_show_command_builder;
    /** The resource name. (Ex: myC). */
    name(value: string): az_resource_show_command_builder;
    /** Provider namespace (Ex: 'Microsoft.Provider'). */
    namespace(value: string): az_resource_show_command_builder;
    /** The parent path (Ex: 'resA/myA/resB/myB'). */
    parent(value: string): az_resource_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_resource_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_resource_show_command_builder;
    /** The resource type (Ex: 'resC'). Can also accept namespace/type format (Ex: 'Microsoft.Provider/resC'). */
    resourceType(value: string): az_resource_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_resource_show_command_builder;
}
/**
 * Tag a resource.
 *
 * Syntax:
 * ```
 * az resource tag --tags
 *                 [--api-version]
 *                 [--ids]
 *                 [--is-incremental]
 *                 [--latest-include-preview]
 *                 [--name]
 *                 [--namespace]
 *                 [--parent]
 *                 [--resource-group]
 *                 [--resource-type]
 *                 [--subscription]
 * ```
 *
 * @param {string} tags Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags.
 */
declare class az_resource_tag_command_builder extends CommandBuilder<az_resource_tag_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, tags: string);
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_resource_tag_command_builder;
    /** The api version of the resource (omit for the latest stable version). */
    apiVersion(value: string): az_resource_tag_command_builder;
    /** One or more resource IDs (space-delimited). If provided, no other "Resource Id" arguments should be specified. */
    ids(value: string): az_resource_tag_command_builder;
    /** The option to add tags incrementally without deleting the original tags. If the key of new tag and original tag are duplicated, the original value will be overwritten. */
    isIncremental(value: string): az_resource_tag_command_builder;
    /** Indicate that the latest api-version will be used regardless of whether it is preview version (like 2020-01-01-preview) or not. For example, if the supported api-version of resource provider is 2020-01-01-preview and 2019-01-01: when passing in this parameter it will take the latest version 2020-01-01-preview, otherwise it will take the latest stable version 2019-01-01 without passing in this parameter. */
    latestIncludePreview(value: string): az_resource_tag_command_builder;
    /** The resource name. (Ex: myC). */
    name(value: string): az_resource_tag_command_builder;
    /** Provider namespace (Ex: 'Microsoft.Provider'). */
    namespace(value: string): az_resource_tag_command_builder;
    /** The parent path (Ex: 'resA/myA/resB/myB'). */
    parent(value: string): az_resource_tag_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_resource_tag_command_builder;
    /** The resource type (Ex: 'resC'). Can also accept namespace/type format (Ex: 'Microsoft.Provider/resC'). */
    resourceType(value: string): az_resource_tag_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_resource_tag_command_builder;
}
/**
 * Update a resource.
 *
 * Syntax:
 * ```
 * az resource update [--add]
 *                    [--api-version]
 *                    [--force-string]
 *                    [--ids]
 *                    [--include-response-body {false, true}]
 *                    [--latest-include-preview]
 *                    [--name]
 *                    [--namespace]
 *                    [--parent]
 *                    [--remove]
 *                    [--resource-group]
 *                    [--resource-type]
 *                    [--set]
 *                    [--subscription]
 * ```
 */
declare class az_resource_update_command_builder extends CommandBuilder<az_resource_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_resource_update_command_builder;
    /** The api version of the resource (omit for the latest stable version). */
    apiVersion(value: string): az_resource_update_command_builder;
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_resource_update_command_builder;
    /** One or more resource IDs (space-delimited). If provided, no other "Resource Id" arguments should be specified. */
    ids(value: string): az_resource_update_command_builder;
    /** Use if the default command output doesn't capture all of the property data. */
    includeResponseBody(value: boolean): az_resource_update_command_builder;
    /** Indicate that the latest api-version will be used regardless of whether it is preview version (like 2020-01-01-preview) or not. For example, if the supported api-version of resource provider is 2020-01-01-preview and 2019-01-01: when passing in this parameter it will take the latest version 2020-01-01-preview, otherwise it will take the latest stable version 2019-01-01 without passing in this parameter. */
    latestIncludePreview(value: string): az_resource_update_command_builder;
    /** The resource name. (Ex: myC). */
    name(value: string): az_resource_update_command_builder;
    /** Provider namespace (Ex: 'Microsoft.Provider'). */
    namespace(value: string): az_resource_update_command_builder;
    /** The parent path (Ex: 'resA/myA/resB/myB'). */
    parent(value: string): az_resource_update_command_builder;
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_resource_update_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_resource_update_command_builder;
    /** The resource type (Ex: 'resC'). Can also accept namespace/type format (Ex: 'Microsoft.Provider/resC'). */
    resourceType(value: string): az_resource_update_command_builder;
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_resource_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_resource_update_command_builder;
}
/**
 * Place the CLI in a waiting state until a condition of a resources is met.
 *
 * Syntax:
 * ```
 * az resource wait [--api-version]
 *                  [--created]
 *                  [--custom]
 *                  [--deleted]
 *                  [--exists]
 *                  [--ids]
 *                  [--include-response-body {false, true}]
 *                  [--interval]
 *                  [--name]
 *                  [--namespace]
 *                  [--parent]
 *                  [--resource-group]
 *                  [--resource-type]
 *                  [--subscription]
 *                  [--timeout]
 *                  [--updated]
 * ```
 */
declare class az_resource_wait_command_builder extends CommandBuilder<az_resource_wait_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** The api version of the resource (omit for the latest stable version). */
    apiVersion(value: string): az_resource_wait_command_builder;
    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    created(value: string): az_resource_wait_command_builder;
    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    custom(value: string): az_resource_wait_command_builder;
    /** Wait until deleted. */
    deleted(value: string): az_resource_wait_command_builder;
    /** Wait until the resource exists. */
    exists(value: string): az_resource_wait_command_builder;
    /** One or more resource IDs (space-delimited). If provided, no other "Resource Id" arguments should be specified. */
    ids(value: string): az_resource_wait_command_builder;
    /** Use if the default command output doesn't capture all of the property data. */
    includeResponseBody(value: boolean): az_resource_wait_command_builder;
    /** Polling interval in seconds. */
    interval(value: string): az_resource_wait_command_builder;
    /** The resource name. (Ex: myC). */
    name(value: string): az_resource_wait_command_builder;
    /** Provider namespace (Ex: 'Microsoft.Provider'). */
    namespace(value: string): az_resource_wait_command_builder;
    /** The parent path (Ex: 'resA/myA/resB/myB'). */
    parent(value: string): az_resource_wait_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_resource_wait_command_builder;
    /** The resource type (Ex: 'resC'). Can also accept namespace/type format (Ex: 'Microsoft.Provider/resC'). */
    resourceType(value: string): az_resource_wait_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_resource_wait_command_builder;
    /** Maximum wait in seconds. */
    timeout(value: string): az_resource_wait_command_builder;
    /** Wait until updated with provisioningState at 'Succeeded'. */
    updated(value: string): az_resource_wait_command_builder;
}
export {};
