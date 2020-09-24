import { CommandBuilder, ICommandParent } from '../base';

/** Commands to manage CLI objects cached using the `--defer` argument. */
export class az_cache implements ICommandParent<any> {
    commandPath = "az cache";

    /**
     * Delete an object from the cache.
     *
     * Syntax:
     * ```
     * az cache delete --name
     *                 --resource-group
     *                 --resource-type
     *                 [--subscription]
     * ```
     *
     * @param {string} name The resource name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} resourceType The resource type.
     */
    az_cache_delete(name: string, resourceGroup: string, resourceType: string): az_cache_delete_command_builder {
        return new az_cache_delete_command_builder(this, name, resourceGroup, resourceType);
    }

    /**
     * List the contents of the object cache.
     *
     * Syntax:
     * ```
     * az cache list [--query-examples]
     *               [--subscription]
     * ```
     */
    az_cache_list(): az_cache_list_command_builder {
        return new az_cache_list_command_builder(this);
    }

    /**
     * Clear the entire CLI object cache.
     *
     * Syntax:
     * ```
     * az cache purge [--subscription]
     * ```
     */
    az_cache_purge(): az_cache_purge_command_builder {
        return new az_cache_purge_command_builder(this);
    }

    /**
     * Show the contents of a specific object in the cache.
     *
     * Syntax:
     * ```
     * az cache show --name
     *               --resource-group
     *               --resource-type
     *               [--query-examples]
     *               [--subscription]
     * ```
     *
     * @param {string} name The resource name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} resourceType The resource type.
     */
    az_cache_show(name: string, resourceGroup: string, resourceType: string): az_cache_show_command_builder {
        return new az_cache_show_command_builder(this, name, resourceGroup, resourceType);
    }
}

/**
 * Delete an object from the cache.
 *
 * Syntax:
 * ```
 * az cache delete --name
 *                 --resource-group
 *                 --resource-type
 *                 [--subscription]
 * ```
 *
 * @param {string} name The resource name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} resourceType The resource type.
 */
class az_cache_delete_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, name: string, resourceGroup: string, resourceType: string) {
        super(commandParent);
        this.name(name)
        this.resourceGroup(resourceGroup)
        this.resourceType(resourceType)
    }

    /** The resource name. */
    name(value: string): az_cache_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cache_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The resource type. */
    resourceType(value: string): az_cache_delete_command_builder {
        this.setFlag("--resource-type", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cache_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List the contents of the object cache.
 *
 * Syntax:
 * ```
 * az cache list [--query-examples]
 *               [--subscription]
 * ```
 */
class az_cache_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_cache_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cache_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Clear the entire CLI object cache.
 *
 * Syntax:
 * ```
 * az cache purge [--subscription]
 * ```
 */
class az_cache_purge_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cache_purge_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Show the contents of a specific object in the cache.
 *
 * Syntax:
 * ```
 * az cache show --name
 *               --resource-group
 *               --resource-type
 *               [--query-examples]
 *               [--subscription]
 * ```
 *
 * @param {string} name The resource name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} resourceType The resource type.
 */
class az_cache_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, name: string, resourceGroup: string, resourceType: string) {
        super(commandParent);
        this.name(name)
        this.resourceGroup(resourceGroup)
        this.resourceType(resourceType)
    }

    /** The resource name. */
    name(value: string): az_cache_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cache_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The resource type. */
    resourceType(value: string): az_cache_show_command_builder {
        this.setFlag("--resource-type", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_cache_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cache_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}
