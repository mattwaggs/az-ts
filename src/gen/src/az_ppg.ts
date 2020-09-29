import { CommandBuilder } from '../base';

/** Manage Proximity Placement Groups. */
export class az_ppg {
    /**
     * Create a proximity placement group.
     *
     * Syntax:
     * ```
     * az ppg create --name
     *               --resource-group
     *               [--location]
     *               [--subscription]
     *               [--tags]
     *               [--type]
     * ```
     *
     * @param {string} name The name of the proximity placement group.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static create(name: string, resourceGroup: string): az_ppg_create_command_builder {
        return new az_ppg_create_command_builder("az ppg create", name, resourceGroup);
    }

    /**
     * Delete a proximity placement group.
     *
     * Syntax:
     * ```
     * az ppg delete --name
     *               --resource-group
     *               [--subscription]
     * ```
     *
     * @param {string} name The name of the proximity placement group.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static delete(name: string, resourceGroup: string): az_ppg_delete_command_builder {
        return new az_ppg_delete_command_builder("az ppg delete", name, resourceGroup);
    }

    /**
     * List proximity placement groups.
     *
     * Syntax:
     * ```
     * az ppg list [--query-examples]
     *             [--resource-group]
     *             [--subscription]
     * ```
     */
    static list(): az_ppg_list_command_builder {
        return new az_ppg_list_command_builder("az ppg list");
    }

    /**
     * Get a proximity placement group.
     *
     * Syntax:
     * ```
     * az ppg show --name
     *             --resource-group
     *             [--include-colocation-status]
     *             [--query-examples]
     *             [--subscription]
     * ```
     *
     * @param {string} name The name of the proximity placement group.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static show(name: string, resourceGroup: string): az_ppg_show_command_builder {
        return new az_ppg_show_command_builder("az ppg show", name, resourceGroup);
    }

    /**
     * Update a proximity placement group.
     *
     * Syntax:
     * ```
     * az ppg update --name
     *               --resource-group
     *               [--add]
     *               [--force-string]
     *               [--include-colocation-status]
     *               [--remove]
     *               [--set]
     *               [--subscription]
     * ```
     *
     * @param {string} name The name of the proximity placement group.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static update(name: string, resourceGroup: string): az_ppg_update_command_builder {
        return new az_ppg_update_command_builder("az ppg update", name, resourceGroup);
    }
}

/**
 * Create a proximity placement group.
 *
 * Syntax:
 * ```
 * az ppg create --name
 *               --resource-group
 *               [--location]
 *               [--subscription]
 *               [--tags]
 *               [--type]
 * ```
 *
 * @param {string} name The name of the proximity placement group.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_ppg_create_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string, resourceGroup: string) {
        super(commandPath);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the proximity placement group. */
    name(value: string): az_ppg_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ppg_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_ppg_create_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ppg_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_ppg_create_command_builder {
        this.setFlag("--tags", value);
        return this;
    }

    /** The type of the proximity placement group. Allowed values: Standard. */
    type(value: string): az_ppg_create_command_builder {
        this.setFlag("--type", value);
        return this;
    }
}

/**
 * Delete a proximity placement group.
 *
 * Syntax:
 * ```
 * az ppg delete --name
 *               --resource-group
 *               [--subscription]
 * ```
 *
 * @param {string} name The name of the proximity placement group.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_ppg_delete_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string, resourceGroup: string) {
        super(commandPath);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the proximity placement group. */
    name(value: string): az_ppg_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ppg_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ppg_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List proximity placement groups.
 *
 * Syntax:
 * ```
 * az ppg list [--query-examples]
 *             [--resource-group]
 *             [--subscription]
 * ```
 */
class az_ppg_list_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_ppg_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ppg_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ppg_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Get a proximity placement group.
 *
 * Syntax:
 * ```
 * az ppg show --name
 *             --resource-group
 *             [--include-colocation-status]
 *             [--query-examples]
 *             [--subscription]
 * ```
 *
 * @param {string} name The name of the proximity placement group.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_ppg_show_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string, resourceGroup: string) {
        super(commandPath);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the proximity placement group. */
    name(value: string): az_ppg_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ppg_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Enable fetching the colocation status of all the resources in the proximity placement group. */
    includeColocationStatus(value: string): az_ppg_show_command_builder {
        this.setFlag("--include-colocation-status", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_ppg_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ppg_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Update a proximity placement group.
 *
 * Syntax:
 * ```
 * az ppg update --name
 *               --resource-group
 *               [--add]
 *               [--force-string]
 *               [--include-colocation-status]
 *               [--remove]
 *               [--set]
 *               [--subscription]
 * ```
 *
 * @param {string} name The name of the proximity placement group.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_ppg_update_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string, resourceGroup: string) {
        super(commandPath);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the proximity placement group. */
    name(value: string): az_ppg_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ppg_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_ppg_update_command_builder {
        this.setFlag("--add", value);
        return this;
    }

    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_ppg_update_command_builder {
        this.setFlag("--force-string", value);
        return this;
    }

    /** IncludeColocationStatus=true enables fetching the colocation status of all the resources in the proximity placement group. */
    includeColocationStatus(value: string): az_ppg_update_command_builder {
        this.setFlag("--include-colocation-status", value);
        return this;
    }

    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_ppg_update_command_builder {
        this.setFlag("--remove", value);
        return this;
    }

    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_ppg_update_command_builder {
        this.setFlag("--set", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ppg_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}
