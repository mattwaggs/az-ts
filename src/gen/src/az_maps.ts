import { CommandBuilder } from '../base';
import { az_maps_account_keys_list_command_result } from './models/az_maps_account_keys_list_command_result'
import { az_maps_account_keys_renew_command_result } from './models/az_maps_account_keys_renew_command_result'
import { az_maps_account_create_command_result } from './models/az_maps_account_create_command_result'
import { az_maps_account_delete_command_result } from './models/az_maps_account_delete_command_result'
import { az_maps_account_list_command_result } from './models/az_maps_account_list_command_result'
import { az_maps_account_show_command_result } from './models/az_maps_account_show_command_result'
import { az_maps_account_update_command_result } from './models/az_maps_account_update_command_result'

/** Manage Azure Maps account keys. */
export class az_maps_account_keys {
    /**
     * List the keys to use with the Maps APIs.
     *
     * Syntax:
     * ```
     * az maps account keys list --name
     *                           --resource-group
     *                           [--query-examples]
     *                           [--subscription]
     * ```
     *
     * @param {string} name The name of the maps account.
     * @param {string} resourceGroup Resource group name.
     */
    static list(name: string, resourceGroup: string): az_maps_account_keys_list_command_builder {
        return new az_maps_account_keys_list_command_builder("az maps account keys list", name, resourceGroup);
    }

    /**
     * Renew either the primary or secondary key for use with the Maps APIs.
     *
     * Syntax:
     * ```
     * az maps account keys renew --key {primary, secondary}
     *                            --name
     *                            --resource-group
     *                            [--subscription]
     * ```
     *
     * @param {'primary' | 'secondary'} key Whether the operation refers to the primary or secondary key.
     * @param {string} name The name of the maps account.
     * @param {string} resourceGroup Resource group name.
     */
    static renew(key: 'primary' | 'secondary', name: string, resourceGroup: string): az_maps_account_keys_renew_command_builder {
        return new az_maps_account_keys_renew_command_builder("az maps account keys renew", key, name, resourceGroup);
    }
}

/** Manage Azure Maps accounts. */
export class az_maps_account {
    /**
     * Create a maps account.
     *
     * Syntax:
     * ```
     * az maps account create --name
     *                        --resource-group
     *                        [--accept-tos]
     *                        [--sku {S0, S1}]
     *                        [--subscription]
     *                        [--tags]
     * ```
     *
     * @param {string} name The name of the maps account.
     * @param {string} resourceGroup Resource group name.
     */
    static create(name: string, resourceGroup: string): az_maps_account_create_command_builder {
        return new az_maps_account_create_command_builder("az maps account create", name, resourceGroup);
    }

    /**
     * Delete a maps account.
     *
     * Syntax:
     * ```
     * az maps account delete [--ids]
     *                        [--name]
     *                        [--resource-group]
     *                        [--subscription]
     * ```
     */
    static delete(): az_maps_account_delete_command_builder {
        return new az_maps_account_delete_command_builder("az maps account delete");
    }

    /**
     * Show all maps accounts in a subscription or in a resource group.
     *
     * Syntax:
     * ```
     * az maps account list [--query-examples]
     *                      [--resource-group]
     *                      [--subscription]
     * ```
     */
    static list(): az_maps_account_list_command_builder {
        return new az_maps_account_list_command_builder("az maps account list");
    }

    /**
     * Show the details of a maps account.
     *
     * Syntax:
     * ```
     * az maps account show [--ids]
     *                      [--name]
     *                      [--query-examples]
     *                      [--resource-group]
     *                      [--subscription]
     * ```
     */
    static show(): az_maps_account_show_command_builder {
        return new az_maps_account_show_command_builder("az maps account show");
    }

    /**
     * Update the properties of a maps account.
     *
     * Syntax:
     * ```
     * az maps account update [--add]
     *                        [--force-string]
     *                        [--ids]
     *                        [--name]
     *                        [--remove]
     *                        [--resource-group]
     *                        [--set]
     *                        [--sku {S0, S1}]
     *                        [--subscription]
     *                        [--tags]
     * ```
     */
    static update(): az_maps_account_update_command_builder {
        return new az_maps_account_update_command_builder("az maps account update");
    }
}

/** Manage Azure Maps. */
export class az_maps {
}

/**
 * List the keys to use with the Maps APIs.
 *
 * Syntax:
 * ```
 * az maps account keys list --name
 *                           --resource-group
 *                           [--query-examples]
 *                           [--subscription]
 * ```
 *
 * @param {string} name The name of the maps account.
 * @param {string} resourceGroup Resource group name.
 */
class az_maps_account_keys_list_command_builder extends CommandBuilder<az_maps_account_keys_list_command_result> {
    constructor(commandPath: string, name: string, resourceGroup: string) {
        super(commandPath);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the maps account. */
    name(value: string): az_maps_account_keys_list_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Resource group name. */
    resourceGroup(value: string): az_maps_account_keys_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_maps_account_keys_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_maps_account_keys_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Renew either the primary or secondary key for use with the Maps APIs.
 *
 * Syntax:
 * ```
 * az maps account keys renew --key {primary, secondary}
 *                            --name
 *                            --resource-group
 *                            [--subscription]
 * ```
 *
 * @param {'primary' | 'secondary'} key Whether the operation refers to the primary or secondary key.
 * @param {string} name The name of the maps account.
 * @param {string} resourceGroup Resource group name.
 */
class az_maps_account_keys_renew_command_builder extends CommandBuilder<az_maps_account_keys_renew_command_result> {
    constructor(commandPath: string, key: 'primary' | 'secondary', name: string, resourceGroup: string) {
        super(commandPath);
        this.key(key)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Whether the operation refers to the primary or secondary key. */
    key(value: 'primary' | 'secondary'): az_maps_account_keys_renew_command_builder {
        this.setFlag("--key", value);
        return this;
    }

    /** The name of the maps account. */
    name(value: string): az_maps_account_keys_renew_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Resource group name. */
    resourceGroup(value: string): az_maps_account_keys_renew_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_maps_account_keys_renew_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Create a maps account.
 *
 * Syntax:
 * ```
 * az maps account create --name
 *                        --resource-group
 *                        [--accept-tos]
 *                        [--sku {S0, S1}]
 *                        [--subscription]
 *                        [--tags]
 * ```
 *
 * @param {string} name The name of the maps account.
 * @param {string} resourceGroup Resource group name.
 */
class az_maps_account_create_command_builder extends CommandBuilder<az_maps_account_create_command_result> {
    constructor(commandPath: string, name: string, resourceGroup: string) {
        super(commandPath);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the maps account. */
    name(value: string): az_maps_account_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Resource group name. */
    resourceGroup(value: string): az_maps_account_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Accept the Terms of Service, and do not prompt for confirmation. */
    acceptTos(value: string): az_maps_account_create_command_builder {
        this.setFlag("--accept-tos", value);
        return this;
    }

    /** The name of the SKU. */
    sku(value: 'S0' | 'S1'): az_maps_account_create_command_builder {
        this.setFlag("--sku", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_maps_account_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_maps_account_create_command_builder {
        this.setFlag("--tags", value);
        return this;
    }
}

/**
 * Delete a maps account.
 *
 * Syntax:
 * ```
 * az maps account delete [--ids]
 *                        [--name]
 *                        [--resource-group]
 *                        [--subscription]
 * ```
 */
class az_maps_account_delete_command_builder extends CommandBuilder<az_maps_account_delete_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_maps_account_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the maps account. */
    name(value: string): az_maps_account_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Resource group name. */
    resourceGroup(value: string): az_maps_account_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_maps_account_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Show all maps accounts in a subscription or in a resource group.
 *
 * Syntax:
 * ```
 * az maps account list [--query-examples]
 *                      [--resource-group]
 *                      [--subscription]
 * ```
 */
class az_maps_account_list_command_builder extends CommandBuilder<az_maps_account_list_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_maps_account_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Resource group name. */
    resourceGroup(value: string): az_maps_account_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_maps_account_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Show the details of a maps account.
 *
 * Syntax:
 * ```
 * az maps account show [--ids]
 *                      [--name]
 *                      [--query-examples]
 *                      [--resource-group]
 *                      [--subscription]
 * ```
 */
class az_maps_account_show_command_builder extends CommandBuilder<az_maps_account_show_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_maps_account_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the maps account. */
    name(value: string): az_maps_account_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_maps_account_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Resource group name. */
    resourceGroup(value: string): az_maps_account_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_maps_account_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Update the properties of a maps account.
 *
 * Syntax:
 * ```
 * az maps account update [--add]
 *                        [--force-string]
 *                        [--ids]
 *                        [--name]
 *                        [--remove]
 *                        [--resource-group]
 *                        [--set]
 *                        [--sku {S0, S1}]
 *                        [--subscription]
 *                        [--tags]
 * ```
 */
class az_maps_account_update_command_builder extends CommandBuilder<az_maps_account_update_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_maps_account_update_command_builder {
        this.setFlag("--add", value);
        return this;
    }

    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_maps_account_update_command_builder {
        this.setFlag("--force-string", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_maps_account_update_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the maps account. */
    name(value: string): az_maps_account_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_maps_account_update_command_builder {
        this.setFlag("--remove", value);
        return this;
    }

    /** Resource group name. */
    resourceGroup(value: string): az_maps_account_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_maps_account_update_command_builder {
        this.setFlag("--set", value);
        return this;
    }

    /** The name of the SKU. */
    sku(value: 'S0' | 'S1'): az_maps_account_update_command_builder {
        this.setFlag("--sku", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_maps_account_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_maps_account_update_command_builder {
        this.setFlag("--tags", value);
        return this;
    }
}
