import { CommandBuilder, ICommandParent } from '../base';

/** Manage links between resources. */
export class az_resource_link implements ICommandParent<any> {
    commandPath = "az resource link";

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
    az_resource_link_create(link: string, target: string): az_resource_link_create_command_builder {
        return new az_resource_link_create_command_builder(this, link, target);
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
    az_resource_link_delete(link: string): az_resource_link_delete_command_builder {
        return new az_resource_link_delete_command_builder(this, link);
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
    az_resource_link_list(): az_resource_link_list_command_builder {
        return new az_resource_link_list_command_builder(this);
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
    az_resource_link_show(link: string): az_resource_link_show_command_builder {
        return new az_resource_link_show_command_builder(this, link);
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
    az_resource_link_update(link: string): az_resource_link_update_command_builder {
        return new az_resource_link_update_command_builder(this, link);
    }
}

/** Manage Azure resource level locks. */
export class az_resource_lock implements ICommandParent<any> {
    commandPath = "az resource lock";

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
    az_resource_lock_create(lockType: 'CanNotDelete' | 'ReadOnly', name: string): az_resource_lock_create_command_builder {
        return new az_resource_lock_create_command_builder(this, lockType, name);
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
    az_resource_lock_delete(): az_resource_lock_delete_command_builder {
        return new az_resource_lock_delete_command_builder(this);
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
    az_resource_lock_list(): az_resource_lock_list_command_builder {
        return new az_resource_lock_list_command_builder(this);
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
    az_resource_lock_show(): az_resource_lock_show_command_builder {
        return new az_resource_lock_show_command_builder(this);
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
    az_resource_lock_update(): az_resource_lock_update_command_builder {
        return new az_resource_lock_update_command_builder(this);
    }
}

/** Manage Azure resources. */
export class az_resource implements ICommandParent<any> {
    commandPath = "az resource";

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
    az_resource_create(properties: string): az_resource_create_command_builder {
        return new az_resource_create_command_builder(this, properties);
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
    az_resource_delete(): az_resource_delete_command_builder {
        return new az_resource_delete_command_builder(this);
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
    az_resource_invoke_action(action: string): az_resource_invoke_action_command_builder {
        return new az_resource_invoke_action_command_builder(this, action);
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
    az_resource_list(): az_resource_list_command_builder {
        return new az_resource_list_command_builder(this);
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
    az_resource_move(destinationGroup: string, ids: string): az_resource_move_command_builder {
        return new az_resource_move_command_builder(this, destinationGroup, ids);
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
    az_resource_show(): az_resource_show_command_builder {
        return new az_resource_show_command_builder(this);
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
    az_resource_tag(tags: string): az_resource_tag_command_builder {
        return new az_resource_tag_command_builder(this, tags);
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
    az_resource_update(): az_resource_update_command_builder {
        return new az_resource_update_command_builder(this);
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
    az_resource_wait(): az_resource_wait_command_builder {
        return new az_resource_wait_command_builder(this);
    }
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
class az_resource_link_create_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, link: string, target: string) {
        super(commandParent);
        this.link(link)
        this.target(target)
    }

    /** Fully-qualified resource ID of the resource link. */
    link(value: string): az_resource_link_create_command_builder {
        this.setFlag("--link", value);
        return this;
    }

    /** Fully-qualified resource ID of the resource link target. */
    target(value: string): az_resource_link_create_command_builder {
        this.setFlag("--target", value);
        return this;
    }

    /** Notes for the link. */
    notes(value: string): az_resource_link_create_command_builder {
        this.setFlag("--notes", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_resource_link_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_resource_link_delete_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, link: string) {
        super(commandParent);
        this.link(link)
    }

    /** Fully-qualified resource ID of the resource link. */
    link(value: string): az_resource_link_delete_command_builder {
        this.setFlag("--link", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_resource_link_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_resource_link_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Filter string for limiting results. */
    filter(value: string): az_resource_link_list_command_builder {
        this.setFlag("--filter", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_resource_link_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Fully-qualified scope for retrieving links. */
    scope(value: string): az_resource_link_list_command_builder {
        this.setFlag("--scope", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_resource_link_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_resource_link_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, link: string) {
        super(commandParent);
        this.link(link)
    }

    /** Fully-qualified resource ID of the resource link. */
    link(value: string): az_resource_link_show_command_builder {
        this.setFlag("--link", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_resource_link_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_resource_link_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_resource_link_update_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, link: string) {
        super(commandParent);
        this.link(link)
    }

    /** Fully-qualified resource ID of the resource link. */
    link(value: string): az_resource_link_update_command_builder {
        this.setFlag("--link", value);
        return this;
    }

    /** Notes for the link. */
    notes(value: string): az_resource_link_update_command_builder {
        this.setFlag("--notes", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_resource_link_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Fully-qualified resource ID of the resource link target. */
    target(value: string): az_resource_link_update_command_builder {
        this.setFlag("--target", value);
        return this;
    }
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
class az_resource_lock_create_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, lockType: 'CanNotDelete' | 'ReadOnly', name: string) {
        super(commandParent);
        this.lockType(lockType)
        this.name(name)
    }

    /** The type of lock restriction. */
    lockType(value: 'CanNotDelete' | 'ReadOnly'): az_resource_lock_create_command_builder {
        this.setFlag("--lock-type", value);
        return this;
    }

    /** Name of the lock. */
    name(value: string): az_resource_lock_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Provider namespace (Ex: 'Microsoft.Provider'). */
    namespace(value: string): az_resource_lock_create_command_builder {
        this.setFlag("--namespace", value);
        return this;
    }

    /** Notes about this lock. */
    notes(value: string): az_resource_lock_create_command_builder {
        this.setFlag("--notes", value);
        return this;
    }

    /** The parent path (Ex: 'resA/myA/resB/myB'). */
    parent(value: string): az_resource_lock_create_command_builder {
        this.setFlag("--parent", value);
        return this;
    }

    /** If an ID is given, other resource arguments should not be given. */
    resourceName(value: string): az_resource_lock_create_command_builder {
        this.setFlag("--resource-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_resource_lock_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The resource type (Ex: 'resC'). Can also accept namespace/type format (Ex: 'Microsoft.Provider/resC'). */
    resourceType(value: string): az_resource_lock_create_command_builder {
        this.setFlag("--resource-type", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_resource_lock_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_resource_lock_delete_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** One or more resource IDs (space-delimited). If provided, no other "Resource Id" arguments should be specified. */
    ids(value: string): az_resource_lock_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the lock. */
    name(value: string): az_resource_lock_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Provider namespace (Ex: 'Microsoft.Provider'). */
    namespace(value: string): az_resource_lock_delete_command_builder {
        this.setFlag("--namespace", value);
        return this;
    }

    /** The parent path (Ex: 'resA/myA/resB/myB'). */
    parent(value: string): az_resource_lock_delete_command_builder {
        this.setFlag("--parent", value);
        return this;
    }

    /** If an ID is given, other resource arguments should not be given. */
    resourceName(value: string): az_resource_lock_delete_command_builder {
        this.setFlag("--resource-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_resource_lock_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The resource type (Ex: 'resC'). Can also accept namespace/type format (Ex: 'Microsoft.Provider/resC'). */
    resourceType(value: string): az_resource_lock_delete_command_builder {
        this.setFlag("--resource-type", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_resource_lock_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_resource_lock_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** A query filter to use to restrict the results. */
    filterString(value: string): az_resource_lock_list_command_builder {
        this.setFlag("--filter-string", value);
        return this;
    }

    /** Provider namespace (Ex: 'Microsoft.Provider'). */
    namespace(value: string): az_resource_lock_list_command_builder {
        this.setFlag("--namespace", value);
        return this;
    }

    /** The parent path (Ex: 'resA/myA/resB/myB'). */
    parent(value: string): az_resource_lock_list_command_builder {
        this.setFlag("--parent", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_resource_lock_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** If an ID is given, other resource arguments should not be given. */
    resourceName(value: string): az_resource_lock_list_command_builder {
        this.setFlag("--resource-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_resource_lock_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The resource type (Ex: 'resC'). Can also accept namespace/type format (Ex: 'Microsoft.Provider/resC'). */
    resourceType(value: string): az_resource_lock_list_command_builder {
        this.setFlag("--resource-type", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_resource_lock_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_resource_lock_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** One or more resource IDs (space-delimited). If provided, no other "Resource Id" arguments should be specified. */
    ids(value: string): az_resource_lock_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the lock. */
    name(value: string): az_resource_lock_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Provider namespace (Ex: 'Microsoft.Provider'). */
    namespace(value: string): az_resource_lock_show_command_builder {
        this.setFlag("--namespace", value);
        return this;
    }

    /** The parent path (Ex: 'resA/myA/resB/myB'). */
    parent(value: string): az_resource_lock_show_command_builder {
        this.setFlag("--parent", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_resource_lock_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** If an ID is given, other resource arguments should not be given. */
    resourceName(value: string): az_resource_lock_show_command_builder {
        this.setFlag("--resource-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_resource_lock_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The resource type (Ex: 'resC'). Can also accept namespace/type format (Ex: 'Microsoft.Provider/resC'). */
    resourceType(value: string): az_resource_lock_show_command_builder {
        this.setFlag("--resource-type", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_resource_lock_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_resource_lock_update_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** One or more resource IDs (space-delimited). If provided, no other "Resource Id" arguments should be specified. */
    ids(value: string): az_resource_lock_update_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The type of lock restriction. */
    lockType(value: 'CanNotDelete' | 'ReadOnly'): az_resource_lock_update_command_builder {
        this.setFlag("--lock-type", value);
        return this;
    }

    /** Name of the lock. */
    name(value: string): az_resource_lock_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Provider namespace (Ex: 'Microsoft.Provider'). */
    namespace(value: string): az_resource_lock_update_command_builder {
        this.setFlag("--namespace", value);
        return this;
    }

    /** Notes about this lock. */
    notes(value: string): az_resource_lock_update_command_builder {
        this.setFlag("--notes", value);
        return this;
    }

    /** The parent path (Ex: 'resA/myA/resB/myB'). */
    parent(value: string): az_resource_lock_update_command_builder {
        this.setFlag("--parent", value);
        return this;
    }

    /** If an ID is given, other resource arguments should not be given. */
    resourceName(value: string): az_resource_lock_update_command_builder {
        this.setFlag("--resource-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_resource_lock_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The resource type (Ex: 'resC'). Can also accept namespace/type format (Ex: 'Microsoft.Provider/resC'). */
    resourceType(value: string): az_resource_lock_update_command_builder {
        this.setFlag("--resource-type", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_resource_lock_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_resource_create_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, properties: string) {
        super(commandParent);
        this.properties(properties)
    }

    /** A JSON-formatted string containing resource properties. */
    properties(value: string): az_resource_create_command_builder {
        this.setFlag("--properties", value);
        return this;
    }

    /** The api version of the resource (omit for the latest stable version). */
    apiVersion(value: string): az_resource_create_command_builder {
        this.setFlag("--api-version", value);
        return this;
    }

    /** Resource ID. */
    id(value: string): az_resource_create_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** Indicate that the properties object includes other options such as location, tags, sku, and/or plan. */
    isFullObject(value: string): az_resource_create_command_builder {
        this.setFlag("--is-full-object", value);
        return this;
    }

    /** Indicate that the latest api-version will be used regardless of whether it is preview version (like 2020-01-01-preview) or not. For example, if the supported api-version of resource provider is 2020-01-01-preview and 2019-01-01: when passing in this parameter it will take the latest version 2020-01-01-preview, otherwise it will take the latest stable version 2019-01-01 without passing in this parameter. */
    latestIncludePreview(value: string): az_resource_create_command_builder {
        this.setFlag("--latest-include-preview", value);
        return this;
    }

    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_resource_create_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** The resource name. (Ex: myC). */
    name(value: string): az_resource_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Provider namespace (Ex: 'Microsoft.Provider'). */
    namespace(value: string): az_resource_create_command_builder {
        this.setFlag("--namespace", value);
        return this;
    }

    /** The parent path (Ex: 'resA/myA/resB/myB'). */
    parent(value: string): az_resource_create_command_builder {
        this.setFlag("--parent", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_resource_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The resource type (Ex: 'resC'). Can also accept namespace/type format (Ex: 'Microsoft.Provider/resC'). */
    resourceType(value: string): az_resource_create_command_builder {
        this.setFlag("--resource-type", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_resource_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_resource_delete_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** The api version of the resource (omit for the latest stable version). */
    apiVersion(value: string): az_resource_delete_command_builder {
        this.setFlag("--api-version", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). If provided, no other "Resource Id" arguments should be specified. */
    ids(value: string): az_resource_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Indicate that the latest api-version will be used regardless of whether it is preview version (like 2020-01-01-preview) or not. For example, if the supported api-version of resource provider is 2020-01-01-preview and 2019-01-01: when passing in this parameter it will take the latest version 2020-01-01-preview, otherwise it will take the latest stable version 2019-01-01 without passing in this parameter. */
    latestIncludePreview(value: string): az_resource_delete_command_builder {
        this.setFlag("--latest-include-preview", value);
        return this;
    }

    /** The resource name. (Ex: myC). */
    name(value: string): az_resource_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Provider namespace (Ex: 'Microsoft.Provider'). */
    namespace(value: string): az_resource_delete_command_builder {
        this.setFlag("--namespace", value);
        return this;
    }

    /** The parent path (Ex: 'resA/myA/resB/myB'). */
    parent(value: string): az_resource_delete_command_builder {
        this.setFlag("--parent", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_resource_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The resource type (Ex: 'resC'). Can also accept namespace/type format (Ex: 'Microsoft.Provider/resC'). */
    resourceType(value: string): az_resource_delete_command_builder {
        this.setFlag("--resource-type", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_resource_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_resource_invoke_action_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, action: string) {
        super(commandParent);
        this.action(action)
    }

    /** The action that will be invoked on the specified resource. */
    action(value: string): az_resource_invoke_action_command_builder {
        this.setFlag("--action", value);
        return this;
    }

    /** The api version of the resource (omit for the latest stable version). */
    apiVersion(value: string): az_resource_invoke_action_command_builder {
        this.setFlag("--api-version", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). If provided, no other "Resource Id" arguments should be specified. */
    ids(value: string): az_resource_invoke_action_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Indicate that the latest api-version will be used regardless of whether it is preview version (like 2020-01-01-preview) or not. For example, if the supported api-version of resource provider is 2020-01-01-preview and 2019-01-01: when passing in this parameter it will take the latest version 2020-01-01-preview, otherwise it will take the latest stable version 2019-01-01 without passing in this parameter. */
    latestIncludePreview(value: string): az_resource_invoke_action_command_builder {
        this.setFlag("--latest-include-preview", value);
        return this;
    }

    /** The resource name. (Ex: myC). */
    name(value: string): az_resource_invoke_action_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Provider namespace (Ex: 'Microsoft.Provider'). */
    namespace(value: string): az_resource_invoke_action_command_builder {
        this.setFlag("--namespace", value);
        return this;
    }

    /** The parent path (Ex: 'resA/myA/resB/myB'). */
    parent(value: string): az_resource_invoke_action_command_builder {
        this.setFlag("--parent", value);
        return this;
    }

    /** JSON encoded parameter arguments for the action that will be passed along in the post request body. Use @{file} to load from a file. */
    requestBody(value: string): az_resource_invoke_action_command_builder {
        this.setFlag("--request-body", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_resource_invoke_action_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The resource type (Ex: 'resC'). Can also accept namespace/type format (Ex: 'Microsoft.Provider/resC'). */
    resourceType(value: string): az_resource_invoke_action_command_builder {
        this.setFlag("--resource-type", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_resource_invoke_action_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_resource_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_resource_list_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** The resource name. (Ex: myC). */
    name(value: string): az_resource_list_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Provider namespace (Ex: 'Microsoft.Provider'). */
    namespace(value: string): az_resource_list_command_builder {
        this.setFlag("--namespace", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_resource_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_resource_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The resource type (Ex: 'resC'). Can also accept namespace/type format (Ex: 'Microsoft.Provider/resC'). */
    resourceType(value: string): az_resource_list_command_builder {
        this.setFlag("--resource-type", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_resource_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** A single tag in 'key[=value]' format. Use "" to clear existing tags. */
    tag(value: string): az_resource_list_command_builder {
        this.setFlag("--tag", value);
        return this;
    }
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
class az_resource_move_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, destinationGroup: string, ids: string) {
        super(commandParent);
        this.destinationGroup(destinationGroup)
        this.ids(ids)
    }

    /** The destination resource group name. */
    destinationGroup(value: string): az_resource_move_command_builder {
        this.setFlag("--destination-group", value);
        return this;
    }

    /** The space-separated resource ids to be moved. */
    ids(value: string): az_resource_move_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The destination subscription identifier. */
    destinationSubscriptionId(value: string): az_resource_move_command_builder {
        this.setFlag("--destination-subscription-id", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_resource_move_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_resource_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** The api version of the resource (omit for the latest stable version). */
    apiVersion(value: string): az_resource_show_command_builder {
        this.setFlag("--api-version", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). If provided, no other "Resource Id" arguments should be specified. */
    ids(value: string): az_resource_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Use if the default command output doesn't capture all of the property data. */
    includeResponseBody(value: boolean): az_resource_show_command_builder {
        this.setFlag("--include-response-body", value.toString());
        return this;
    }

    /** Indicate that the latest api-version will be used regardless of whether it is preview version (like 2020-01-01-preview) or not. For example, if the supported api-version of resource provider is 2020-01-01-preview and 2019-01-01: when passing in this parameter it will take the latest version 2020-01-01-preview, otherwise it will take the latest stable version 2019-01-01 without passing in this parameter. */
    latestIncludePreview(value: string): az_resource_show_command_builder {
        this.setFlag("--latest-include-preview", value);
        return this;
    }

    /** The resource name. (Ex: myC). */
    name(value: string): az_resource_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Provider namespace (Ex: 'Microsoft.Provider'). */
    namespace(value: string): az_resource_show_command_builder {
        this.setFlag("--namespace", value);
        return this;
    }

    /** The parent path (Ex: 'resA/myA/resB/myB'). */
    parent(value: string): az_resource_show_command_builder {
        this.setFlag("--parent", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_resource_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_resource_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The resource type (Ex: 'resC'). Can also accept namespace/type format (Ex: 'Microsoft.Provider/resC'). */
    resourceType(value: string): az_resource_show_command_builder {
        this.setFlag("--resource-type", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_resource_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_resource_tag_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, tags: string) {
        super(commandParent);
        this.tags(tags)
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_resource_tag_command_builder {
        this.setFlag("--tags", value);
        return this;
    }

    /** The api version of the resource (omit for the latest stable version). */
    apiVersion(value: string): az_resource_tag_command_builder {
        this.setFlag("--api-version", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). If provided, no other "Resource Id" arguments should be specified. */
    ids(value: string): az_resource_tag_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The option to add tags incrementally without deleting the original tags. If the key of new tag and original tag are duplicated, the original value will be overwritten. */
    isIncremental(value: string): az_resource_tag_command_builder {
        this.setFlag("--is-incremental", value);
        return this;
    }

    /** Indicate that the latest api-version will be used regardless of whether it is preview version (like 2020-01-01-preview) or not. For example, if the supported api-version of resource provider is 2020-01-01-preview and 2019-01-01: when passing in this parameter it will take the latest version 2020-01-01-preview, otherwise it will take the latest stable version 2019-01-01 without passing in this parameter. */
    latestIncludePreview(value: string): az_resource_tag_command_builder {
        this.setFlag("--latest-include-preview", value);
        return this;
    }

    /** The resource name. (Ex: myC). */
    name(value: string): az_resource_tag_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Provider namespace (Ex: 'Microsoft.Provider'). */
    namespace(value: string): az_resource_tag_command_builder {
        this.setFlag("--namespace", value);
        return this;
    }

    /** The parent path (Ex: 'resA/myA/resB/myB'). */
    parent(value: string): az_resource_tag_command_builder {
        this.setFlag("--parent", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_resource_tag_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The resource type (Ex: 'resC'). Can also accept namespace/type format (Ex: 'Microsoft.Provider/resC'). */
    resourceType(value: string): az_resource_tag_command_builder {
        this.setFlag("--resource-type", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_resource_tag_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_resource_update_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_resource_update_command_builder {
        this.setFlag("--add", value);
        return this;
    }

    /** The api version of the resource (omit for the latest stable version). */
    apiVersion(value: string): az_resource_update_command_builder {
        this.setFlag("--api-version", value);
        return this;
    }

    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_resource_update_command_builder {
        this.setFlag("--force-string", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). If provided, no other "Resource Id" arguments should be specified. */
    ids(value: string): az_resource_update_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Use if the default command output doesn't capture all of the property data. */
    includeResponseBody(value: boolean): az_resource_update_command_builder {
        this.setFlag("--include-response-body", value.toString());
        return this;
    }

    /** Indicate that the latest api-version will be used regardless of whether it is preview version (like 2020-01-01-preview) or not. For example, if the supported api-version of resource provider is 2020-01-01-preview and 2019-01-01: when passing in this parameter it will take the latest version 2020-01-01-preview, otherwise it will take the latest stable version 2019-01-01 without passing in this parameter. */
    latestIncludePreview(value: string): az_resource_update_command_builder {
        this.setFlag("--latest-include-preview", value);
        return this;
    }

    /** The resource name. (Ex: myC). */
    name(value: string): az_resource_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Provider namespace (Ex: 'Microsoft.Provider'). */
    namespace(value: string): az_resource_update_command_builder {
        this.setFlag("--namespace", value);
        return this;
    }

    /** The parent path (Ex: 'resA/myA/resB/myB'). */
    parent(value: string): az_resource_update_command_builder {
        this.setFlag("--parent", value);
        return this;
    }

    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_resource_update_command_builder {
        this.setFlag("--remove", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_resource_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The resource type (Ex: 'resC'). Can also accept namespace/type format (Ex: 'Microsoft.Provider/resC'). */
    resourceType(value: string): az_resource_update_command_builder {
        this.setFlag("--resource-type", value);
        return this;
    }

    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_resource_update_command_builder {
        this.setFlag("--set", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_resource_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_resource_wait_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** The api version of the resource (omit for the latest stable version). */
    apiVersion(value: string): az_resource_wait_command_builder {
        this.setFlag("--api-version", value);
        return this;
    }

    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    created(value: string): az_resource_wait_command_builder {
        this.setFlag("--created", value);
        return this;
    }

    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    custom(value: string): az_resource_wait_command_builder {
        this.setFlag("--custom", value);
        return this;
    }

    /** Wait until deleted. */
    deleted(value: string): az_resource_wait_command_builder {
        this.setFlag("--deleted", value);
        return this;
    }

    /** Wait until the resource exists. */
    exists(value: string): az_resource_wait_command_builder {
        this.setFlag("--exists", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). If provided, no other "Resource Id" arguments should be specified. */
    ids(value: string): az_resource_wait_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Use if the default command output doesn't capture all of the property data. */
    includeResponseBody(value: boolean): az_resource_wait_command_builder {
        this.setFlag("--include-response-body", value.toString());
        return this;
    }

    /** Polling interval in seconds. */
    interval(value: string): az_resource_wait_command_builder {
        this.setFlag("--interval", value);
        return this;
    }

    /** The resource name. (Ex: myC). */
    name(value: string): az_resource_wait_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Provider namespace (Ex: 'Microsoft.Provider'). */
    namespace(value: string): az_resource_wait_command_builder {
        this.setFlag("--namespace", value);
        return this;
    }

    /** The parent path (Ex: 'resA/myA/resB/myB'). */
    parent(value: string): az_resource_wait_command_builder {
        this.setFlag("--parent", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_resource_wait_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The resource type (Ex: 'resC'). Can also accept namespace/type format (Ex: 'Microsoft.Provider/resC'). */
    resourceType(value: string): az_resource_wait_command_builder {
        this.setFlag("--resource-type", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_resource_wait_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Maximum wait in seconds. */
    timeout(value: string): az_resource_wait_command_builder {
        this.setFlag("--timeout", value);
        return this;
    }

    /** Wait until updated with provisioningState at 'Succeeded'. */
    updated(value: string): az_resource_wait_command_builder {
        this.setFlag("--updated", value);
        return this;
    }
}