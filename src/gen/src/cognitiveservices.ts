import { CommandBuilder } from '../base';

/** Manage identity of Cognitive Services accounts. */
export class az_cognitiveservices_account_identity {
    /**
     * Assign an identity of a Cognitive Services account.
     *
     * Syntax:
     * ```
     * az cognitiveservices account identity assign --name
     *                                              --resource-group
     *                                              [--subscription]
     * ```
     *
     * @param {string} name Cognitive service account name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static az_cognitiveservices_account_identity_assign(name: string, resourceGroup: string): az_cognitiveservices_account_identity_assign_command_builder {
        return new az_cognitiveservices_account_identity_assign_command_builder("az cognitiveservices account identity assign", name, resourceGroup);
    }

    /**
     * Remove the identity from a Cognitive Services account.
     *
     * Syntax:
     * ```
     * az cognitiveservices account identity remove --name
     *                                              --resource-group
     *                                              [--subscription]
     * ```
     *
     * @param {string} name Cognitive service account name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static az_cognitiveservices_account_identity_remove(name: string, resourceGroup: string): az_cognitiveservices_account_identity_remove_command_builder {
        return new az_cognitiveservices_account_identity_remove_command_builder("az cognitiveservices account identity remove", name, resourceGroup);
    }

    /**
     * Show the identity of a Cognitive Services account.
     *
     * Syntax:
     * ```
     * az cognitiveservices account identity show --name
     *                                            --resource-group
     *                                            [--query-examples]
     *                                            [--subscription]
     * ```
     *
     * @param {string} name Cognitive service account name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static az_cognitiveservices_account_identity_show(name: string, resourceGroup: string): az_cognitiveservices_account_identity_show_command_builder {
        return new az_cognitiveservices_account_identity_show_command_builder("az cognitiveservices account identity show", name, resourceGroup);
    }
}

/** Manage Azure Cognitive Services accounts. */
export class az_cognitiveservices_account_keys {
    /**
     * Manage Azure Cognitive Services accounts.
     *
     * Syntax:
     * ```
     * az cognitiveservices account keys list --name
     *                                        --resource-group
     *                                        [--query-examples]
     *                                        [--subscription]
     * ```
     *
     * @param {string} name Cognitive service account name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static az_cognitiveservices_account_keys_list(name: string, resourceGroup: string): az_cognitiveservices_account_keys_list_command_builder {
        return new az_cognitiveservices_account_keys_list_command_builder("az cognitiveservices account keys list", name, resourceGroup);
    }

    /**
     * Manage Azure Cognitive Services accounts.
     *
     * Syntax:
     * ```
     * az cognitiveservices account keys regenerate --key-name {key1, key2}
     *                                              --name
     *                                              --resource-group
     *                                              [--subscription]
     * ```
     *
     * @param {'key1' | 'key2'} keyName Key name to generate.
     * @param {string} name Cognitive service account name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static az_cognitiveservices_account_keys_regenerate(keyName: 'key1' | 'key2', name: string, resourceGroup: string): az_cognitiveservices_account_keys_regenerate_command_builder {
        return new az_cognitiveservices_account_keys_regenerate_command_builder("az cognitiveservices account keys regenerate", keyName, name, resourceGroup);
    }
}

/** Manage network rules. */
export class az_cognitiveservices_account_network_rule {
    /**
     * Add a network rule.
     *
     * Syntax:
     * ```
     * az cognitiveservices account network-rule add --name
     *                                               --resource-group
     *                                               [--ip-address]
     *                                               [--subnet]
     *                                               [--subscription]
     *                                               [--vnet-name]
     * ```
     *
     * @param {string} name Cognitive service account name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static az_cognitiveservices_account_network_rule_add(name: string, resourceGroup: string): az_cognitiveservices_account_network_rule_add_command_builder {
        return new az_cognitiveservices_account_network_rule_add_command_builder("az cognitiveservices account network-rule add", name, resourceGroup);
    }

    /**
     * List network rules.
     *
     * Syntax:
     * ```
     * az cognitiveservices account network-rule list --name
     *                                                --resource-group
     *                                                [--query-examples]
     *                                                [--subscription]
     * ```
     *
     * @param {string} name Cognitive service account name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static az_cognitiveservices_account_network_rule_list(name: string, resourceGroup: string): az_cognitiveservices_account_network_rule_list_command_builder {
        return new az_cognitiveservices_account_network_rule_list_command_builder("az cognitiveservices account network-rule list", name, resourceGroup);
    }

    /**
     * Remove a network rule.
     *
     * Syntax:
     * ```
     * az cognitiveservices account network-rule remove --name
     *                                                  --resource-group
     *                                                  [--ip-address]
     *                                                  [--subnet]
     *                                                  [--subscription]
     *                                                  [--vnet-name]
     * ```
     *
     * @param {string} name Cognitive service account name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static az_cognitiveservices_account_network_rule_remove(name: string, resourceGroup: string): az_cognitiveservices_account_network_rule_remove_command_builder {
        return new az_cognitiveservices_account_network_rule_remove_command_builder("az cognitiveservices account network-rule remove", name, resourceGroup);
    }
}

/** Manage Azure Cognitive Services accounts. */
export class az_cognitiveservices_account {
    /**
     * Manage Azure Cognitive Services accounts.
     *
     * Syntax:
     * ```
     * az cognitiveservices account create --kind
     *                                     --location
     *                                     --name
     *                                     --resource-group
     *                                     --sku
     *                                     [--api-properties]
     *                                     [--assign-identity]
     *                                     [--custom-domain]
     *                                     [--encryption]
     *                                     [--storage]
     *                                     [--subscription]
     *                                     [--tags]
     *                                     [--yes]
     * ```
     *
     * @param {string} kind The API name of cognitive services account.
     * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
     * @param {string} name Cognitive service account name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} sku Name of the Sku of cognitive services account.
     */
    static az_cognitiveservices_account_create(kind: string, location: string, name: string, resourceGroup: string, sku: string): az_cognitiveservices_account_create_command_builder {
        return new az_cognitiveservices_account_create_command_builder("az cognitiveservices account create", kind, location, name, resourceGroup, sku);
    }

    /**
     * Manage Azure Cognitive Services accounts.
     *
     * Syntax:
     * ```
     * az cognitiveservices account delete --name
     *                                     --resource-group
     *                                     [--subscription]
     * ```
     *
     * @param {string} name Cognitive service account name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static az_cognitiveservices_account_delete(name: string, resourceGroup: string): az_cognitiveservices_account_delete_command_builder {
        return new az_cognitiveservices_account_delete_command_builder("az cognitiveservices account delete", name, resourceGroup);
    }

    /**
     * Manage Azure Cognitive Services accounts.
     *
     * Syntax:
     * ```
     * az cognitiveservices account list [--query-examples]
     *                                   [--resource-group]
     *                                   [--subscription]
     * ```
     */
    static az_cognitiveservices_account_list(): az_cognitiveservices_account_list_command_builder {
        return new az_cognitiveservices_account_list_command_builder("az cognitiveservices account list");
    }

    /**
     * List all valid kinds for Azure Cognitive Services account.
     *
     * Syntax:
     * ```
     * az cognitiveservices account list-kinds [--subscription]
     * ```
     */
    static az_cognitiveservices_account_list_kinds(): az_cognitiveservices_account_list_kinds_command_builder {
        return new az_cognitiveservices_account_list_kinds_command_builder("az cognitiveservices account list-kinds");
    }

    /**
     * Manage Azure Cognitive Services accounts.
     *
     * Syntax:
     * ```
     * az cognitiveservices account list-skus [--kind]
     *                                        [--location]
     *                                        [--name]
     *                                        [--resource-group]
     *                                        [--subscription]
     * ```
     */
    static az_cognitiveservices_account_list_skus(): az_cognitiveservices_account_list_skus_command_builder {
        return new az_cognitiveservices_account_list_skus_command_builder("az cognitiveservices account list-skus");
    }

    /**
     * List usages for Azure Cognitive Services account.
     *
     * Syntax:
     * ```
     * az cognitiveservices account list-usage --name
     *                                         --resource-group
     *                                         [--subscription]
     * ```
     *
     * @param {string} name Cognitive service account name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static az_cognitiveservices_account_list_usage(name: string, resourceGroup: string): az_cognitiveservices_account_list_usage_command_builder {
        return new az_cognitiveservices_account_list_usage_command_builder("az cognitiveservices account list-usage", name, resourceGroup);
    }

    /**
     * Manage Azure Cognitive Services accounts.
     *
     * Syntax:
     * ```
     * az cognitiveservices account show --name
     *                                   --resource-group
     *                                   [--query-examples]
     *                                   [--subscription]
     * ```
     *
     * @param {string} name Cognitive service account name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static az_cognitiveservices_account_show(name: string, resourceGroup: string): az_cognitiveservices_account_show_command_builder {
        return new az_cognitiveservices_account_show_command_builder("az cognitiveservices account show", name, resourceGroup);
    }

    /**
     * Manage Azure Cognitive Services accounts.
     *
     * Syntax:
     * ```
     * az cognitiveservices account update --name
     *                                     --resource-group
     *                                     [--api-properties]
     *                                     [--custom-domain]
     *                                     [--encryption]
     *                                     [--sku]
     *                                     [--storage]
     *                                     [--subscription]
     *                                     [--tags]
     * ```
     *
     * @param {string} name Cognitive service account name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static az_cognitiveservices_account_update(name: string, resourceGroup: string): az_cognitiveservices_account_update_command_builder {
        return new az_cognitiveservices_account_update_command_builder("az cognitiveservices account update", name, resourceGroup);
    }
}

/** Manage Azure Cognitive Services accounts. */
export class az_cognitiveservices {
    /**
     * Manage Azure Cognitive Services accounts.
     *
     * Syntax:
     * ```
     * az cognitiveservices list [--query-examples]
     *                           [--resource-group]
     *                           [--subscription]
     * ```
     */
    static az_cognitiveservices_list(): az_cognitiveservices_list_command_builder {
        return new az_cognitiveservices_list_command_builder("az cognitiveservices list");
    }
}

/**
 * Assign an identity of a Cognitive Services account.
 *
 * Syntax:
 * ```
 * az cognitiveservices account identity assign --name
 *                                              --resource-group
 *                                              [--subscription]
 * ```
 *
 * @param {string} name Cognitive service account name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_cognitiveservices_account_identity_assign_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Cognitive service account name. */
    name(value: string): az_cognitiveservices_account_identity_assign_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cognitiveservices_account_identity_assign_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cognitiveservices_account_identity_assign_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Remove the identity from a Cognitive Services account.
 *
 * Syntax:
 * ```
 * az cognitiveservices account identity remove --name
 *                                              --resource-group
 *                                              [--subscription]
 * ```
 *
 * @param {string} name Cognitive service account name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_cognitiveservices_account_identity_remove_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Cognitive service account name. */
    name(value: string): az_cognitiveservices_account_identity_remove_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cognitiveservices_account_identity_remove_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cognitiveservices_account_identity_remove_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Show the identity of a Cognitive Services account.
 *
 * Syntax:
 * ```
 * az cognitiveservices account identity show --name
 *                                            --resource-group
 *                                            [--query-examples]
 *                                            [--subscription]
 * ```
 *
 * @param {string} name Cognitive service account name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_cognitiveservices_account_identity_show_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Cognitive service account name. */
    name(value: string): az_cognitiveservices_account_identity_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cognitiveservices_account_identity_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_cognitiveservices_account_identity_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cognitiveservices_account_identity_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Manage Azure Cognitive Services accounts.
 *
 * Syntax:
 * ```
 * az cognitiveservices account keys list --name
 *                                        --resource-group
 *                                        [--query-examples]
 *                                        [--subscription]
 * ```
 *
 * @param {string} name Cognitive service account name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_cognitiveservices_account_keys_list_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Cognitive service account name. */
    name(value: string): az_cognitiveservices_account_keys_list_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cognitiveservices_account_keys_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_cognitiveservices_account_keys_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cognitiveservices_account_keys_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Manage Azure Cognitive Services accounts.
 *
 * Syntax:
 * ```
 * az cognitiveservices account keys regenerate --key-name {key1, key2}
 *                                              --name
 *                                              --resource-group
 *                                              [--subscription]
 * ```
 *
 * @param {'key1' | 'key2'} keyName Key name to generate.
 * @param {string} name Cognitive service account name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_cognitiveservices_account_keys_regenerate_command_builder extends CommandBuilder {
    constructor(commandPath: string, keyName: 'key1' | 'key2', name: string, resourceGroup: string) {
        super(commandParent);
        this.keyName(keyName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Key name to generate. */
    keyName(value: 'key1' | 'key2'): az_cognitiveservices_account_keys_regenerate_command_builder {
        this.setFlag("--key-name", value);
        return this;
    }

    /** Cognitive service account name. */
    name(value: string): az_cognitiveservices_account_keys_regenerate_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cognitiveservices_account_keys_regenerate_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cognitiveservices_account_keys_regenerate_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Add a network rule.
 *
 * Syntax:
 * ```
 * az cognitiveservices account network-rule add --name
 *                                               --resource-group
 *                                               [--ip-address]
 *                                               [--subnet]
 *                                               [--subscription]
 *                                               [--vnet-name]
 * ```
 *
 * @param {string} name Cognitive service account name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_cognitiveservices_account_network_rule_add_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Cognitive service account name. */
    name(value: string): az_cognitiveservices_account_network_rule_add_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cognitiveservices_account_network_rule_add_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** IPv4 address or CIDR range. */
    ipAddress(value: string): az_cognitiveservices_account_network_rule_add_command_builder {
        this.setFlag("--ip-address", value);
        return this;
    }

    /** Name or ID of subnet. If name is supplied, `--vnet-name` must be supplied. */
    subnet(value: string): az_cognitiveservices_account_network_rule_add_command_builder {
        this.setFlag("--subnet", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cognitiveservices_account_network_rule_add_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Name of a virtual network. */
    vnetName(value: string): az_cognitiveservices_account_network_rule_add_command_builder {
        this.setFlag("--vnet-name", value);
        return this;
    }
}

/**
 * List network rules.
 *
 * Syntax:
 * ```
 * az cognitiveservices account network-rule list --name
 *                                                --resource-group
 *                                                [--query-examples]
 *                                                [--subscription]
 * ```
 *
 * @param {string} name Cognitive service account name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_cognitiveservices_account_network_rule_list_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Cognitive service account name. */
    name(value: string): az_cognitiveservices_account_network_rule_list_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cognitiveservices_account_network_rule_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_cognitiveservices_account_network_rule_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cognitiveservices_account_network_rule_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Remove a network rule.
 *
 * Syntax:
 * ```
 * az cognitiveservices account network-rule remove --name
 *                                                  --resource-group
 *                                                  [--ip-address]
 *                                                  [--subnet]
 *                                                  [--subscription]
 *                                                  [--vnet-name]
 * ```
 *
 * @param {string} name Cognitive service account name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_cognitiveservices_account_network_rule_remove_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Cognitive service account name. */
    name(value: string): az_cognitiveservices_account_network_rule_remove_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cognitiveservices_account_network_rule_remove_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** IPv4 address or CIDR range. */
    ipAddress(value: string): az_cognitiveservices_account_network_rule_remove_command_builder {
        this.setFlag("--ip-address", value);
        return this;
    }

    /** Name or ID of subnet. If name is supplied, `--vnet-name` must be supplied. */
    subnet(value: string): az_cognitiveservices_account_network_rule_remove_command_builder {
        this.setFlag("--subnet", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cognitiveservices_account_network_rule_remove_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Name of a virtual network. */
    vnetName(value: string): az_cognitiveservices_account_network_rule_remove_command_builder {
        this.setFlag("--vnet-name", value);
        return this;
    }
}

/**
 * Manage Azure Cognitive Services accounts.
 *
 * Syntax:
 * ```
 * az cognitiveservices account create --kind
 *                                     --location
 *                                     --name
 *                                     --resource-group
 *                                     --sku
 *                                     [--api-properties]
 *                                     [--assign-identity]
 *                                     [--custom-domain]
 *                                     [--encryption]
 *                                     [--storage]
 *                                     [--subscription]
 *                                     [--tags]
 *                                     [--yes]
 * ```
 *
 * @param {string} kind The API name of cognitive services account.
 * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
 * @param {string} name Cognitive service account name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} sku Name of the Sku of cognitive services account.
 */
class az_cognitiveservices_account_create_command_builder extends CommandBuilder {
    constructor(commandPath: string, kind: string, location: string, name: string, resourceGroup: string, sku: string) {
        super(commandParent);
        this.kind(kind)
        this.location(location)
        this.name(name)
        this.resourceGroup(resourceGroup)
        this.sku(sku)
    }

    /** The API name of cognitive services account. */
    kind(value: string): az_cognitiveservices_account_create_command_builder {
        this.setFlag("--kind", value);
        return this;
    }

    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_cognitiveservices_account_create_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** Cognitive service account name. */
    name(value: string): az_cognitiveservices_account_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cognitiveservices_account_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name of the Sku of cognitive services account. */
    sku(value: string): az_cognitiveservices_account_create_command_builder {
        this.setFlag("--sku", value);
        return this;
    }

    /** Api properties in JSON format or a=b c=d format. Some cognitive services (i.e. QnA Maker) require extra api properties to create the account. */
    apiProperties(value: string): az_cognitiveservices_account_create_command_builder {
        this.setFlag("--api-properties", value);
        return this;
    }

    /** Generate and assign an Azure Active Directory Identity for this account. */
    assignIdentity(value: string): az_cognitiveservices_account_create_command_builder {
        this.setFlag("--assign-identity", value);
        return this;
    }

    /** User domain assigned to the account. Name is the CNAME source. */
    customDomain(value: string): az_cognitiveservices_account_create_command_builder {
        this.setFlag("--custom-domain", value);
        return this;
    }

    /** The encryption properties for this resource, in JSON format. */
    encryption(value: string): az_cognitiveservices_account_create_command_builder {
        this.setFlag("--encryption", value);
        return this;
    }

    /** The storage accounts for this resource, in JSON array format. */
    storage(value: string): az_cognitiveservices_account_create_command_builder {
        this.setFlag("--storage", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cognitiveservices_account_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_cognitiveservices_account_create_command_builder {
        this.setFlag("--tags", value);
        return this;
    }

    /** Do not prompt for terms confirmation. */
    yes(value: string): az_cognitiveservices_account_create_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
}

/**
 * Manage Azure Cognitive Services accounts.
 *
 * Syntax:
 * ```
 * az cognitiveservices account delete --name
 *                                     --resource-group
 *                                     [--subscription]
 * ```
 *
 * @param {string} name Cognitive service account name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_cognitiveservices_account_delete_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Cognitive service account name. */
    name(value: string): az_cognitiveservices_account_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cognitiveservices_account_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cognitiveservices_account_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Manage Azure Cognitive Services accounts.
 *
 * Syntax:
 * ```
 * az cognitiveservices account list [--query-examples]
 *                                   [--resource-group]
 *                                   [--subscription]
 * ```
 */
class az_cognitiveservices_account_list_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandParent);
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_cognitiveservices_account_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cognitiveservices_account_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cognitiveservices_account_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List all valid kinds for Azure Cognitive Services account.
 *
 * Syntax:
 * ```
 * az cognitiveservices account list-kinds [--subscription]
 * ```
 */
class az_cognitiveservices_account_list_kinds_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandParent);
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cognitiveservices_account_list_kinds_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Manage Azure Cognitive Services accounts.
 *
 * Syntax:
 * ```
 * az cognitiveservices account list-skus [--kind]
 *                                        [--location]
 *                                        [--name]
 *                                        [--resource-group]
 *                                        [--subscription]
 * ```
 */
class az_cognitiveservices_account_list_skus_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandParent);
    }

    /** The API name of cognitive services account. */
    kind(value: string): az_cognitiveservices_account_list_skus_command_builder {
        this.setFlag("--kind", value);
        return this;
    }

    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_cognitiveservices_account_list_skus_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** Cognitive service account name. */
    name(value: string): az_cognitiveservices_account_list_skus_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cognitiveservices_account_list_skus_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cognitiveservices_account_list_skus_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List usages for Azure Cognitive Services account.
 *
 * Syntax:
 * ```
 * az cognitiveservices account list-usage --name
 *                                         --resource-group
 *                                         [--subscription]
 * ```
 *
 * @param {string} name Cognitive service account name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_cognitiveservices_account_list_usage_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Cognitive service account name. */
    name(value: string): az_cognitiveservices_account_list_usage_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cognitiveservices_account_list_usage_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cognitiveservices_account_list_usage_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Manage Azure Cognitive Services accounts.
 *
 * Syntax:
 * ```
 * az cognitiveservices account show --name
 *                                   --resource-group
 *                                   [--query-examples]
 *                                   [--subscription]
 * ```
 *
 * @param {string} name Cognitive service account name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_cognitiveservices_account_show_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Cognitive service account name. */
    name(value: string): az_cognitiveservices_account_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cognitiveservices_account_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_cognitiveservices_account_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cognitiveservices_account_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Manage Azure Cognitive Services accounts.
 *
 * Syntax:
 * ```
 * az cognitiveservices account update --name
 *                                     --resource-group
 *                                     [--api-properties]
 *                                     [--custom-domain]
 *                                     [--encryption]
 *                                     [--sku]
 *                                     [--storage]
 *                                     [--subscription]
 *                                     [--tags]
 * ```
 *
 * @param {string} name Cognitive service account name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
class az_cognitiveservices_account_update_command_builder extends CommandBuilder {
    constructor(commandPath: string, name: string, resourceGroup: string) {
        super(commandParent);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Cognitive service account name. */
    name(value: string): az_cognitiveservices_account_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cognitiveservices_account_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Api properties in JSON format or a=b c=d format. Some cognitive services (i.e. QnA Maker) require extra api properties to create the account. */
    apiProperties(value: string): az_cognitiveservices_account_update_command_builder {
        this.setFlag("--api-properties", value);
        return this;
    }

    /** User domain assigned to the account. Name is the CNAME source. */
    customDomain(value: string): az_cognitiveservices_account_update_command_builder {
        this.setFlag("--custom-domain", value);
        return this;
    }

    /** The encryption properties for this resource, in JSON format. */
    encryption(value: string): az_cognitiveservices_account_update_command_builder {
        this.setFlag("--encryption", value);
        return this;
    }

    /** Name of the Sku of cognitive services account. */
    sku(value: string): az_cognitiveservices_account_update_command_builder {
        this.setFlag("--sku", value);
        return this;
    }

    /** The storage accounts for this resource, in JSON array format. */
    storage(value: string): az_cognitiveservices_account_update_command_builder {
        this.setFlag("--storage", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cognitiveservices_account_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_cognitiveservices_account_update_command_builder {
        this.setFlag("--tags", value);
        return this;
    }
}

/**
 * Manage Azure Cognitive Services accounts.
 *
 * Syntax:
 * ```
 * az cognitiveservices list [--query-examples]
 *                           [--resource-group]
 *                           [--subscription]
 * ```
 */
class az_cognitiveservices_list_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandParent);
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_cognitiveservices_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cognitiveservices_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cognitiveservices_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}
