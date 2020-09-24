import { CommandBuilder, ICommandParent } from '../base';

/** Manage Azure subscription level locks. */
export class az_account_lock implements ICommandParent<any> {
    commandPath = "az account lock";

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
    az_account_lock_create(lockType: 'CanNotDelete' | 'ReadOnly', name: string): az_account_lock_create_command_builder {
        return new az_account_lock_create_command_builder(this, lockType, name);
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
    az_account_lock_delete(): az_account_lock_delete_command_builder {
        return new az_account_lock_delete_command_builder(this);
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
    az_account_lock_list(): az_account_lock_list_command_builder {
        return new az_account_lock_list_command_builder(this);
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
    az_account_lock_show(): az_account_lock_show_command_builder {
        return new az_account_lock_show_command_builder(this);
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
    az_account_lock_update(): az_account_lock_update_command_builder {
        return new az_account_lock_update_command_builder(this);
    }
}

/** Subscription operations for Management Groups. */
export class az_account_management_group_subscription implements ICommandParent<any> {
    commandPath = "az account management-group subscription";

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
    az_account_management_group_subscription_add(name: string, subscription: string): az_account_management_group_subscription_add_command_builder {
        return new az_account_management_group_subscription_add_command_builder(this, name, subscription);
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
    az_account_management_group_subscription_remove(name: string, subscription: string): az_account_management_group_subscription_remove_command_builder {
        return new az_account_management_group_subscription_remove_command_builder(this, name, subscription);
    }
}

/** Manage Azure Management Groups. */
export class az_account_management_group implements ICommandParent<any> {
    commandPath = "az account management-group";

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
    az_account_management_group_create(name: string): az_account_management_group_create_command_builder {
        return new az_account_management_group_create_command_builder(this, name);
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
    az_account_management_group_delete(name: string): az_account_management_group_delete_command_builder {
        return new az_account_management_group_delete_command_builder(this, name);
    }

    /**
     * List all management groups.
     *
     * Syntax:
     * ```
     * az account management-group list [--query-examples]
     * ```
     */
    az_account_management_group_list(): az_account_management_group_list_command_builder {
        return new az_account_management_group_list_command_builder(this);
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
     * @param {string} name Name of the management group.
     */
    az_account_management_group_show(name: string): az_account_management_group_show_command_builder {
        return new az_account_management_group_show_command_builder(this, name);
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
    az_account_management_group_update(name: string): az_account_management_group_update_command_builder {
        return new az_account_management_group_update_command_builder(this, name);
    }
}

/** Manage Azure subscription information. */
export class az_account implements ICommandParent<any> {
    commandPath = "az account";

    /**
     * Clear all subscriptions from the CLI's local cache.
     *
     * Syntax:
     * ```
     * az account clear
     * ```
     */
    az_account_clear(): az_account_clear_command_builder {
        return new az_account_clear_command_builder(this);
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
    az_account_get_access_token(): az_account_get_access_token_command_builder {
        return new az_account_get_access_token_command_builder(this);
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
    az_account_list(): az_account_list_command_builder {
        return new az_account_list_command_builder(this);
    }

    /**
     * List supported regions for the current subscription.
     *
     * Syntax:
     * ```
     * az account list-locations
     * ```
     */
    az_account_list_locations(): az_account_list_locations_command_builder {
        return new az_account_list_locations_command_builder(this);
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
    az_account_set(subscription: string): az_account_set_command_builder {
        return new az_account_set_command_builder(this, subscription);
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
    az_account_show(): az_account_show_command_builder {
        return new az_account_show_command_builder(this);
    }
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
class az_account_lock_create_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, lockType: 'CanNotDelete' | 'ReadOnly', name: string) {
        super(commandParent);
        this.lockType(lockType)
        this.name(name)
    }

    /** The type of lock restriction. */
    lockType(value: 'CanNotDelete' | 'ReadOnly'): az_account_lock_create_command_builder {
        this.setFlag("--lock-type", value);
        return this;
    }

    /** Name of the lock. */
    name(value: string): az_account_lock_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Notes about this lock. */
    notes(value: string): az_account_lock_create_command_builder {
        this.setFlag("--notes", value);
        return this;
    }
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
class az_account_lock_delete_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** One or more resource IDs (space-delimited). If provided, no other "Resource Id" arguments should be specified. */
    ids(value: string): az_account_lock_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the lock. */
    name(value: string): az_account_lock_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }
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
class az_account_lock_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** A query filter to use to restrict the results. */
    filterString(value: string): az_account_lock_list_command_builder {
        this.setFlag("--filter-string", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_account_lock_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }
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
class az_account_lock_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** One or more resource IDs (space-delimited). If provided, no other "Resource Id" arguments should be specified. */
    ids(value: string): az_account_lock_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the lock. */
    name(value: string): az_account_lock_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_account_lock_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }
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
class az_account_lock_update_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** One or more resource IDs (space-delimited). If provided, no other "Resource Id" arguments should be specified. */
    ids(value: string): az_account_lock_update_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The type of lock restriction. */
    lockType(value: 'CanNotDelete' | 'ReadOnly'): az_account_lock_update_command_builder {
        this.setFlag("--lock-type", value);
        return this;
    }

    /** Name of the lock. */
    name(value: string): az_account_lock_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Notes about this lock. */
    notes(value: string): az_account_lock_update_command_builder {
        this.setFlag("--notes", value);
        return this;
    }
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
class az_account_management_group_subscription_add_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, name: string, subscription: string) {
        super(commandParent);
        this.name(name)
        this.subscription(subscription)
    }

    /** Name of the management group. */
    name(value: string): az_account_management_group_subscription_add_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Subscription Id or Name. */
    subscription(value: string): az_account_management_group_subscription_add_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_account_management_group_subscription_remove_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, name: string, subscription: string) {
        super(commandParent);
        this.name(name)
        this.subscription(subscription)
    }

    /** Name of the management group. */
    name(value: string): az_account_management_group_subscription_remove_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Subscription Id or Name. */
    subscription(value: string): az_account_management_group_subscription_remove_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_account_management_group_create_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, name: string) {
        super(commandParent);
        this.name(name)
    }

    /** Name of the management group. */
    name(value: string): az_account_management_group_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Sets the display name of the management group. If null, the group name is set as the display name. */
    displayName(value: string): az_account_management_group_create_command_builder {
        this.setFlag("--display-name", value);
        return this;
    }

    /** Sets the parent of the management group. Can be the fully qualified id or the name of the management group. If null, the root tenant group is set as the parent. */
    parent(value: string): az_account_management_group_create_command_builder {
        this.setFlag("--parent", value);
        return this;
    }
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
class az_account_management_group_delete_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, name: string) {
        super(commandParent);
        this.name(name)
    }

    /** Name of the management group. */
    name(value: string): az_account_management_group_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }
}

/**
 * List all management groups.
 *
 * Syntax:
 * ```
 * az account management-group list [--query-examples]
 * ```
 */
class az_account_management_group_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_account_management_group_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }
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
 * @param {string} name Name of the management group.
 */
class az_account_management_group_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, name: string) {
        super(commandParent);
        this.name(name)
    }

    /** Name of the management group. */
    name(value: string): az_account_management_group_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** If given, lists the children in the first level of hierarchy. */
    expand(value: string): az_account_management_group_show_command_builder {
        this.setFlag("--expand", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_account_management_group_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** If given, lists the children in all levels of hierarchy. */
    recurse(value: string): az_account_management_group_show_command_builder {
        this.setFlag("--recurse", value);
        return this;
    }
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
class az_account_management_group_update_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, name: string) {
        super(commandParent);
        this.name(name)
    }

    /** Name of the management group. */
    name(value: string): az_account_management_group_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_account_management_group_update_command_builder {
        this.setFlag("--add", value);
        return this;
    }

    /** Updates the display name of the management group. If null, no change is made. */
    displayName(value: string): az_account_management_group_update_command_builder {
        this.setFlag("--display-name", value);
        return this;
    }

    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_account_management_group_update_command_builder {
        this.setFlag("--force-string", value);
        return this;
    }

    /** Update the parent of the management group. Can be the fully qualified id or the name of the management group. If null, no change is made. */
    parent(value: string): az_account_management_group_update_command_builder {
        this.setFlag("--parent", value);
        return this;
    }

    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_account_management_group_update_command_builder {
        this.setFlag("--remove", value);
        return this;
    }

    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_account_management_group_update_command_builder {
        this.setFlag("--set", value);
        return this;
    }
}

/**
 * Clear all subscriptions from the CLI's local cache.
 *
 * Syntax:
 * ```
 * az account clear
 * ```
 */
class az_account_clear_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }
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
class az_account_get_access_token_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Azure resource endpoints. Default to Azure Resource Manager. */
    resource(value: string): az_account_get_access_token_command_builder {
        this.setFlag("--resource", value);
        return this;
    }

    /** Type of well-known resource. */
    resourceType(value: 'aad-graph' | 'arm' | 'batch' | 'data-lake' | 'media' | 'ms-graph' | 'oss-rdbms'): az_account_get_access_token_command_builder {
        this.setFlag("--resource-type", value);
        return this;
    }

    /** Name or ID of subscription. */
    subscription(value: string): az_account_get_access_token_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Tenant ID for which the token is acquired. Only available for user and service principal account, not for MSI or Cloud Shell account. */
    tenant(value: string): az_account_get_access_token_command_builder {
        this.setFlag("--tenant", value);
        return this;
    }
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
class az_account_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** List all subscriptions, rather than just 'Enabled' ones. */
    all(value: string): az_account_list_command_builder {
        this.setFlag("--all", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_account_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Retrieve up-to-date subscriptions from server. */
    refresh(value: string): az_account_list_command_builder {
        this.setFlag("--refresh", value);
        return this;
    }
}

/**
 * List supported regions for the current subscription.
 *
 * Syntax:
 * ```
 * az account list-locations
 * ```
 */
class az_account_list_locations_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }
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
class az_account_set_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, subscription: string) {
        super(commandParent);
        this.subscription(subscription)
    }

    /** Name or ID of subscription. */
    subscription(value: string): az_account_set_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_account_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_account_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Output result to a file compatible with Azure SDK auth. Only applicable when authenticating with a Service Principal. */
    sdkAuth(value: string): az_account_show_command_builder {
        this.setFlag("--sdk-auth", value);
        return this;
    }

    /** Name or ID of subscription. */
    subscription(value: string): az_account_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}
