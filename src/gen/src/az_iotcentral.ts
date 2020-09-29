import { CommandBuilder } from '../base';

/** Manage IoT Central applications. */
export class az_iotcentral_app {
    /**
     * Create an IoT Central application.
     *
     * Syntax:
     * ```
     * az iotcentral app create --name
     *                          --resource-group
     *                          --subdomain
     *                          [--display-name]
     *                          [--location]
     *                          [--sku {F1, S1, ST0, ST1, ST2}]
     *                          [--subscription]
     *                          [--template]
     * ```
     *
     * @param {string} name IoT Central application name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} subdomain Subdomain for the IoT Central URL. Each application must have a unique subdomain.
     */
    static create(name: string, resourceGroup: string, subdomain: string): az_iotcentral_app_create_command_builder {
        return new az_iotcentral_app_create_command_builder("az iotcentral app create", name, resourceGroup, subdomain);
    }

    /**
     * Delete an IoT Central application.
     *
     * Syntax:
     * ```
     * az iotcentral app delete --name
     *                          --resource-group
     *                          [--subscription]
     * ```
     *
     * @param {string} name IoT Central application name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static delete(name: string, resourceGroup: string): az_iotcentral_app_delete_command_builder {
        return new az_iotcentral_app_delete_command_builder("az iotcentral app delete", name, resourceGroup);
    }

    /**
     * List IoT Central applications.
     *
     * Syntax:
     * ```
     * az iotcentral app list [--query-examples]
     *                        [--resource-group]
     *                        [--subscription]
     * ```
     */
    static list(): az_iotcentral_app_list_command_builder {
        return new az_iotcentral_app_list_command_builder("az iotcentral app list");
    }

    /**
     * Get the details of an IoT Central application.
     *
     * Syntax:
     * ```
     * az iotcentral app show --name
     *                        [--query-examples]
     *                        [--resource-group]
     *                        [--subscription]
     * ```
     *
     * @param {string} name IoT Central application name.
     */
    static show(name: string): az_iotcentral_app_show_command_builder {
        return new az_iotcentral_app_show_command_builder("az iotcentral app show", name);
    }

    /**
     * Update metadata for an IoT Central application.
     *
     * Syntax:
     * ```
     * az iotcentral app update --name
     *                          --resource-group
     *                          [--add]
     *                          [--force-string]
     *                          [--remove]
     *                          [--set]
     *                          [--subscription]
     * ```
     *
     * @param {string} name IoT Central application name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static update(name: string, resourceGroup: string): az_iotcentral_app_update_command_builder {
        return new az_iotcentral_app_update_command_builder("az iotcentral app update", name, resourceGroup);
    }
}

/** Manage IoT Central assets. */
export class az_iotcentral {
}

/**
 * Create an IoT Central application.
 *
 * Syntax:
 * ```
 * az iotcentral app create --name
 *                          --resource-group
 *                          --subdomain
 *                          [--display-name]
 *                          [--location]
 *                          [--sku {F1, S1, ST0, ST1, ST2}]
 *                          [--subscription]
 *                          [--template]
 * ```
 *
 * @param {string} name IoT Central application name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} subdomain Subdomain for the IoT Central URL. Each application must have a unique subdomain.
 */
class az_iotcentral_app_create_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string, resourceGroup: string, subdomain: string) {
        super(commandPath);
        this.name(name)
        this.resourceGroup(resourceGroup)
        this.subdomain(subdomain)
    }

    /** IoT Central application name. */
    name(value: string): az_iotcentral_app_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_iotcentral_app_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Subdomain for the IoT Central URL. Each application must have a unique subdomain. */
    subdomain(value: string): az_iotcentral_app_create_command_builder {
        this.setFlag("--subdomain", value);
        return this;
    }

    /** Custom display name for the IoT Central application. Default is resource name. */
    displayName(value: string): az_iotcentral_app_create_command_builder {
        this.setFlag("--display-name", value);
        return this;
    }

    /** Location of your IoT Central application. Default is the location of target resource group. */
    location(value: string): az_iotcentral_app_create_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** Pricing tier for IoT Central applications. Default value is ST2. */
    sku(value: 'F1' | 'S1' | 'ST0' | 'ST1' | 'ST2'): az_iotcentral_app_create_command_builder {
        this.setFlag("--sku", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_iotcentral_app_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** IoT Central application template name. Default is a custom application. */
    template(value: string): az_iotcentral_app_create_command_builder {
        this.setFlag("--template", value);
        return this;
    }
}

/**
 * Delete an IoT Central application.
 *
 * Syntax:
 * ```
 * az iotcentral app delete --name
 *                          --resource-group
 *                          [--subscription]
 * ```
 *
 * @param {string} name IoT Central application name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_iotcentral_app_delete_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string, resourceGroup: string) {
        super(commandPath);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** IoT Central application name. */
    name(value: string): az_iotcentral_app_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_iotcentral_app_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_iotcentral_app_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List IoT Central applications.
 *
 * Syntax:
 * ```
 * az iotcentral app list [--query-examples]
 *                        [--resource-group]
 *                        [--subscription]
 * ```
 */
class az_iotcentral_app_list_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_iotcentral_app_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_iotcentral_app_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_iotcentral_app_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Get the details of an IoT Central application.
 *
 * Syntax:
 * ```
 * az iotcentral app show --name
 *                        [--query-examples]
 *                        [--resource-group]
 *                        [--subscription]
 * ```
 *
 * @param {string} name IoT Central application name.
 */
class az_iotcentral_app_show_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string) {
        super(commandPath);
        this.name(name)
    }

    /** IoT Central application name. */
    name(value: string): az_iotcentral_app_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_iotcentral_app_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_iotcentral_app_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_iotcentral_app_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Update metadata for an IoT Central application.
 *
 * Syntax:
 * ```
 * az iotcentral app update --name
 *                          --resource-group
 *                          [--add]
 *                          [--force-string]
 *                          [--remove]
 *                          [--set]
 *                          [--subscription]
 * ```
 *
 * @param {string} name IoT Central application name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_iotcentral_app_update_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string, resourceGroup: string) {
        super(commandPath);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** IoT Central application name. */
    name(value: string): az_iotcentral_app_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_iotcentral_app_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_iotcentral_app_update_command_builder {
        this.setFlag("--add", value);
        return this;
    }

    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_iotcentral_app_update_command_builder {
        this.setFlag("--force-string", value);
        return this;
    }

    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_iotcentral_app_update_command_builder {
        this.setFlag("--remove", value);
        return this;
    }

    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_iotcentral_app_update_command_builder {
        this.setFlag("--set", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_iotcentral_app_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}
