import { CommandBuilder } from '../base';
import { az_identity_create_command_result } from './models/az_identity_create_command_result'
import { az_identity_delete_command_result } from './models/az_identity_delete_command_result'
import { az_identity_list_command_result } from './models/az_identity_list_command_result'
import { az_identity_list_operations_command_result } from './models/az_identity_list_operations_command_result'
import { az_identity_show_command_result } from './models/az_identity_show_command_result'

/** Managed Service Identities. */
export class az_identity {
    /**
     * Create or update an identity in the specified subscription and resource group.
     *
     * Syntax:
     * ```
     * az identity create --name
     *                    --resource-group
     *                    [--location]
     *                    [--subscription]
     *                    [--tags]
     * ```
     *
     * @param {string} name The name of the identity resource.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static create(name: string, resourceGroup: string): az_identity_create_command_builder {
        return new az_identity_create_command_builder("az identity create", name, resourceGroup);
    }

    /**
     * Deletes the identity.
     *
     * Syntax:
     * ```
     * az identity delete [--ids]
     *                    [--name]
     *                    [--resource-group]
     *                    [--subscription]
     * ```
     */
    static delete(): az_identity_delete_command_builder {
        return new az_identity_delete_command_builder("az identity delete");
    }

    /**
     * List Managed Service Identities.
     *
     * Syntax:
     * ```
     * az identity list [--query-examples]
     *                  [--resource-group]
     *                  [--subscription]
     * ```
     */
    static list(): az_identity_list_command_builder {
        return new az_identity_list_command_builder("az identity list");
    }

    /**
     * Lists available operations for the Managed Identity provider.
     *
     * Syntax:
     * ```
     * az identity list-operations [--subscription]
     * ```
     */
    static list_operations(): az_identity_list_operations_command_builder {
        return new az_identity_list_operations_command_builder("az identity list-operations");
    }

    /**
     * Gets the identity.
     *
     * Syntax:
     * ```
     * az identity show [--ids]
     *                  [--name]
     *                  [--query-examples]
     *                  [--resource-group]
     *                  [--subscription]
     * ```
     */
    static show(): az_identity_show_command_builder {
        return new az_identity_show_command_builder("az identity show");
    }
}

/**
 * Create or update an identity in the specified subscription and resource group.
 *
 * Syntax:
 * ```
 * az identity create --name
 *                    --resource-group
 *                    [--location]
 *                    [--subscription]
 *                    [--tags]
 * ```
 *
 * @param {string} name The name of the identity resource.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_identity_create_command_builder extends CommandBuilder<az_identity_create_command_result> {
    constructor(commandPath: string, name: string, resourceGroup: string) {
        super(commandPath);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the identity resource. */
    name(value: string): az_identity_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_identity_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_identity_create_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_identity_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_identity_create_command_builder {
        this.setFlag("--tags", value);
        return this;
    }
}

/**
 * Deletes the identity.
 *
 * Syntax:
 * ```
 * az identity delete [--ids]
 *                    [--name]
 *                    [--resource-group]
 *                    [--subscription]
 * ```
 */
class az_identity_delete_command_builder extends CommandBuilder<az_identity_delete_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_identity_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the identity resource. */
    name(value: string): az_identity_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_identity_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_identity_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List Managed Service Identities.
 *
 * Syntax:
 * ```
 * az identity list [--query-examples]
 *                  [--resource-group]
 *                  [--subscription]
 * ```
 */
class az_identity_list_command_builder extends CommandBuilder<az_identity_list_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_identity_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_identity_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_identity_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Lists available operations for the Managed Identity provider.
 *
 * Syntax:
 * ```
 * az identity list-operations [--subscription]
 * ```
 */
class az_identity_list_operations_command_builder extends CommandBuilder<az_identity_list_operations_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_identity_list_operations_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Gets the identity.
 *
 * Syntax:
 * ```
 * az identity show [--ids]
 *                  [--name]
 *                  [--query-examples]
 *                  [--resource-group]
 *                  [--subscription]
 * ```
 */
class az_identity_show_command_builder extends CommandBuilder<az_identity_show_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_identity_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the identity resource. */
    name(value: string): az_identity_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_identity_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_identity_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_identity_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}
