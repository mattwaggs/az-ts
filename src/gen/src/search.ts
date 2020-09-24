import { CommandBuilder, ICommandParent } from '../base';

/** Manage Azure Search admin keys. */
export class az_search_admin_key implements ICommandParent<any> {
    commandPath = "az search admin-key";

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
    az_search_admin_key_renew(keyKind: string, resourceGroup: string, serviceName: string): az_search_admin_key_renew_command_builder {
        return new az_search_admin_key_renew_command_builder(this, keyKind, resourceGroup, serviceName);
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
    az_search_admin_key_show(resourceGroup: string, serviceName: string): az_search_admin_key_show_command_builder {
        return new az_search_admin_key_show_command_builder(this, resourceGroup, serviceName);
    }
}

/** Manage Azure Search query keys. */
export class az_search_query_key implements ICommandParent<any> {
    commandPath = "az search query-key";

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
    az_search_query_key_create(name: string, resourceGroup: string, serviceName: string): az_search_query_key_create_command_builder {
        return new az_search_query_key_create_command_builder(this, name, resourceGroup, serviceName);
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
    az_search_query_key_delete(keyValue: string, resourceGroup: string, serviceName: string): az_search_query_key_delete_command_builder {
        return new az_search_query_key_delete_command_builder(this, keyValue, resourceGroup, serviceName);
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
    az_search_query_key_list(resourceGroup: string, serviceName: string): az_search_query_key_list_command_builder {
        return new az_search_query_key_list_command_builder(this, resourceGroup, serviceName);
    }
}

/** Manage Azure Search services. */
export class az_search_service implements ICommandParent<any> {
    commandPath = "az search service";

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
    az_search_service_create(name: string, resourceGroup: string, sku: string): az_search_service_create_command_builder {
        return new az_search_service_create_command_builder(this, name, resourceGroup, sku);
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
    az_search_service_delete(name: string, resourceGroup: string): az_search_service_delete_command_builder {
        return new az_search_service_delete_command_builder(this, name, resourceGroup);
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
    az_search_service_list(resourceGroup: string): az_search_service_list_command_builder {
        return new az_search_service_list_command_builder(this, resourceGroup);
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
    az_search_service_show(name: string, resourceGroup: string): az_search_service_show_command_builder {
        return new az_search_service_show_command_builder(this, name, resourceGroup);
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
    az_search_service_update(name: string, resourceGroup: string): az_search_service_update_command_builder {
        return new az_search_service_update_command_builder(this, name, resourceGroup);
    }
}

/** Manage Azure Search services, admin keys and query keys. */
export class az_search {
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
class az_search_admin_key_renew_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, keyKind: string, resourceGroup: string, serviceName: string) {
        super(commandParent);
        this.keyKind(keyKind)
        this.resourceGroup(resourceGroup)
        this.serviceName(serviceName)
    }

    /** The type (primary or secondary) of the admin key. */
    keyKind(value: string): az_search_admin_key_renew_command_builder {
        this.setFlag("--key-kind", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_search_admin_key_renew_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the search service. */
    serviceName(value: string): az_search_admin_key_renew_command_builder {
        this.setFlag("--service-name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_search_admin_key_renew_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_search_admin_key_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, resourceGroup: string, serviceName: string) {
        super(commandParent);
        this.resourceGroup(resourceGroup)
        this.serviceName(serviceName)
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_search_admin_key_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the search service. */
    serviceName(value: string): az_search_admin_key_show_command_builder {
        this.setFlag("--service-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_search_admin_key_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_search_admin_key_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_search_query_key_create_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, name: string, resourceGroup: string, serviceName: string) {
        super(commandParent);
        this.name(name)
        this.resourceGroup(resourceGroup)
        this.serviceName(serviceName)
    }

    /** The name of the query key. */
    name(value: string): az_search_query_key_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_search_query_key_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the search service. */
    serviceName(value: string): az_search_query_key_create_command_builder {
        this.setFlag("--service-name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_search_query_key_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_search_query_key_delete_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, keyValue: string, resourceGroup: string, serviceName: string) {
        super(commandParent);
        this.keyValue(keyValue)
        this.resourceGroup(resourceGroup)
        this.serviceName(serviceName)
    }

    /** The value of the query key. */
    keyValue(value: string): az_search_query_key_delete_command_builder {
        this.setFlag("--key-value", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_search_query_key_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the search service. */
    serviceName(value: string): az_search_query_key_delete_command_builder {
        this.setFlag("--service-name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_search_query_key_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_search_query_key_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, resourceGroup: string, serviceName: string) {
        super(commandParent);
        this.resourceGroup(resourceGroup)
        this.serviceName(serviceName)
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_search_query_key_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the search service. */
    serviceName(value: string): az_search_query_key_list_command_builder {
        this.setFlag("--service-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_search_query_key_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_search_query_key_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_search_service_create_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, name: string, resourceGroup: string, sku: string) {
        super(commandParent);
        this.name(name)
        this.resourceGroup(resourceGroup)
        this.sku(sku)
    }

    /** The name of the search service. */
    name(value: string): az_search_service_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_search_service_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The SKU of the search service, which determines price tier and capacity limits. */
    sku(value: string): az_search_service_create_command_builder {
        this.setFlag("--sku", value);
        return this;
    }

    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_search_service_create_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** Number of partitions in the search service. */
    partitionCount(value: string): az_search_service_create_command_builder {
        this.setFlag("--partition-count", value);
        return this;
    }

    /** Number of replicas in the search service. */
    replicaCount(value: string): az_search_service_create_command_builder {
        this.setFlag("--replica-count", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_search_service_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_search_service_delete_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, name: string, resourceGroup: string) {
        super(commandParent);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the search service. */
    name(value: string): az_search_service_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_search_service_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_search_service_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_search_service_delete_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
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
class az_search_service_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, resourceGroup: string) {
        super(commandParent);
        this.resourceGroup(resourceGroup)
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_search_service_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_search_service_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_search_service_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_search_service_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, name: string, resourceGroup: string) {
        super(commandParent);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the search service. */
    name(value: string): az_search_service_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_search_service_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_search_service_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_search_service_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_search_service_update_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, name: string, resourceGroup: string) {
        super(commandParent);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the search service. */
    name(value: string): az_search_service_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_search_service_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_search_service_update_command_builder {
        this.setFlag("--add", value);
        return this;
    }

    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_search_service_update_command_builder {
        this.setFlag("--force-string", value);
        return this;
    }

    /** Number of partitions in the search service. */
    partitionCount(value: string): az_search_service_update_command_builder {
        this.setFlag("--partition-count", value);
        return this;
    }

    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_search_service_update_command_builder {
        this.setFlag("--remove", value);
        return this;
    }

    /** Number of replicas in the search service. */
    replicaCount(value: string): az_search_service_update_command_builder {
        this.setFlag("--replica-count", value);
        return this;
    }

    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_search_service_update_command_builder {
        this.setFlag("--set", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_search_service_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}
