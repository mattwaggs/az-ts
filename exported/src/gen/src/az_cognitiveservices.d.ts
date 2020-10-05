import { CommandBuilder } from '../base';
import { az_cognitiveservices_account_identity_assign_command_result } from './models/az_cognitiveservices_account_identity_assign_command_result';
import { az_cognitiveservices_account_identity_remove_command_result } from './models/az_cognitiveservices_account_identity_remove_command_result';
import { az_cognitiveservices_account_identity_show_command_result } from './models/az_cognitiveservices_account_identity_show_command_result';
import { az_cognitiveservices_account_keys_list_command_result } from './models/az_cognitiveservices_account_keys_list_command_result';
import { az_cognitiveservices_account_keys_regenerate_command_result } from './models/az_cognitiveservices_account_keys_regenerate_command_result';
import { az_cognitiveservices_account_network_rule_add_command_result } from './models/az_cognitiveservices_account_network_rule_add_command_result';
import { az_cognitiveservices_account_network_rule_list_command_result } from './models/az_cognitiveservices_account_network_rule_list_command_result';
import { az_cognitiveservices_account_network_rule_remove_command_result } from './models/az_cognitiveservices_account_network_rule_remove_command_result';
import { az_cognitiveservices_account_create_command_result } from './models/az_cognitiveservices_account_create_command_result';
import { az_cognitiveservices_account_delete_command_result } from './models/az_cognitiveservices_account_delete_command_result';
import { az_cognitiveservices_account_list_command_result } from './models/az_cognitiveservices_account_list_command_result';
import { az_cognitiveservices_account_list_kinds_command_result } from './models/az_cognitiveservices_account_list_kinds_command_result';
import { az_cognitiveservices_account_list_skus_command_result } from './models/az_cognitiveservices_account_list_skus_command_result';
import { az_cognitiveservices_account_list_usage_command_result } from './models/az_cognitiveservices_account_list_usage_command_result';
import { az_cognitiveservices_account_show_command_result } from './models/az_cognitiveservices_account_show_command_result';
import { az_cognitiveservices_account_update_command_result } from './models/az_cognitiveservices_account_update_command_result';
import { az_cognitiveservices_list_command_result } from './models/az_cognitiveservices_list_command_result';
/** Manage identity of Cognitive Services accounts. */
export declare class az_cognitiveservices_account_identity {
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
    static assign(name: string, resourceGroup: string): az_cognitiveservices_account_identity_assign_command_builder;
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
    static remove(name: string, resourceGroup: string): az_cognitiveservices_account_identity_remove_command_builder;
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
    static show(name: string, resourceGroup: string): az_cognitiveservices_account_identity_show_command_builder;
}
/** Manage Azure Cognitive Services accounts. */
export declare class az_cognitiveservices_account_keys {
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
    static list(name: string, resourceGroup: string): az_cognitiveservices_account_keys_list_command_builder;
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
    static regenerate(keyName: 'key1' | 'key2', name: string, resourceGroup: string): az_cognitiveservices_account_keys_regenerate_command_builder;
}
/** Manage network rules. */
export declare class az_cognitiveservices_account_network_rule {
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
    static add(name: string, resourceGroup: string): az_cognitiveservices_account_network_rule_add_command_builder;
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
    static list(name: string, resourceGroup: string): az_cognitiveservices_account_network_rule_list_command_builder;
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
    static remove(name: string, resourceGroup: string): az_cognitiveservices_account_network_rule_remove_command_builder;
}
/** Manage Azure Cognitive Services accounts. */
export declare class az_cognitiveservices_account {
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
    static create(kind: string, location: string, name: string, resourceGroup: string, sku: string): az_cognitiveservices_account_create_command_builder;
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
    static delete(name: string, resourceGroup: string): az_cognitiveservices_account_delete_command_builder;
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
    static list(): az_cognitiveservices_account_list_command_builder;
    /**
     * List all valid kinds for Azure Cognitive Services account.
     *
     * Syntax:
     * ```
     * az cognitiveservices account list-kinds [--subscription]
     * ```
     */
    static list_kinds(): az_cognitiveservices_account_list_kinds_command_builder;
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
    static list_skus(): az_cognitiveservices_account_list_skus_command_builder;
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
    static list_usage(name: string, resourceGroup: string): az_cognitiveservices_account_list_usage_command_builder;
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
    static show(name: string, resourceGroup: string): az_cognitiveservices_account_show_command_builder;
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
    static update(name: string, resourceGroup: string): az_cognitiveservices_account_update_command_builder;
}
/** Manage Azure Cognitive Services accounts. */
export declare class az_cognitiveservices {
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
    static list(): az_cognitiveservices_list_command_builder;
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
declare class az_cognitiveservices_account_identity_assign_command_builder extends CommandBuilder<az_cognitiveservices_account_identity_assign_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** Cognitive service account name. */
    name(value: string): az_cognitiveservices_account_identity_assign_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cognitiveservices_account_identity_assign_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cognitiveservices_account_identity_assign_command_builder;
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
declare class az_cognitiveservices_account_identity_remove_command_builder extends CommandBuilder<az_cognitiveservices_account_identity_remove_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** Cognitive service account name. */
    name(value: string): az_cognitiveservices_account_identity_remove_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cognitiveservices_account_identity_remove_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cognitiveservices_account_identity_remove_command_builder;
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
declare class az_cognitiveservices_account_identity_show_command_builder extends CommandBuilder<az_cognitiveservices_account_identity_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** Cognitive service account name. */
    name(value: string): az_cognitiveservices_account_identity_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cognitiveservices_account_identity_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_cognitiveservices_account_identity_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cognitiveservices_account_identity_show_command_builder;
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
declare class az_cognitiveservices_account_keys_list_command_builder extends CommandBuilder<az_cognitiveservices_account_keys_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** Cognitive service account name. */
    name(value: string): az_cognitiveservices_account_keys_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cognitiveservices_account_keys_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_cognitiveservices_account_keys_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cognitiveservices_account_keys_list_command_builder;
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
declare class az_cognitiveservices_account_keys_regenerate_command_builder extends CommandBuilder<az_cognitiveservices_account_keys_regenerate_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, keyName: 'key1' | 'key2', name: string, resourceGroup: string);
    /** Key name to generate. */
    keyName(value: 'key1' | 'key2'): az_cognitiveservices_account_keys_regenerate_command_builder;
    /** Cognitive service account name. */
    name(value: string): az_cognitiveservices_account_keys_regenerate_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cognitiveservices_account_keys_regenerate_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cognitiveservices_account_keys_regenerate_command_builder;
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
declare class az_cognitiveservices_account_network_rule_add_command_builder extends CommandBuilder<az_cognitiveservices_account_network_rule_add_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** Cognitive service account name. */
    name(value: string): az_cognitiveservices_account_network_rule_add_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cognitiveservices_account_network_rule_add_command_builder;
    /** IPv4 address or CIDR range. */
    ipAddress(value: string): az_cognitiveservices_account_network_rule_add_command_builder;
    /** Name or ID of subnet. If name is supplied, `--vnet-name` must be supplied. */
    subnet(value: string): az_cognitiveservices_account_network_rule_add_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cognitiveservices_account_network_rule_add_command_builder;
    /** Name of a virtual network. */
    vnetName(value: string): az_cognitiveservices_account_network_rule_add_command_builder;
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
declare class az_cognitiveservices_account_network_rule_list_command_builder extends CommandBuilder<az_cognitiveservices_account_network_rule_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** Cognitive service account name. */
    name(value: string): az_cognitiveservices_account_network_rule_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cognitiveservices_account_network_rule_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_cognitiveservices_account_network_rule_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cognitiveservices_account_network_rule_list_command_builder;
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
declare class az_cognitiveservices_account_network_rule_remove_command_builder extends CommandBuilder<az_cognitiveservices_account_network_rule_remove_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** Cognitive service account name. */
    name(value: string): az_cognitiveservices_account_network_rule_remove_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cognitiveservices_account_network_rule_remove_command_builder;
    /** IPv4 address or CIDR range. */
    ipAddress(value: string): az_cognitiveservices_account_network_rule_remove_command_builder;
    /** Name or ID of subnet. If name is supplied, `--vnet-name` must be supplied. */
    subnet(value: string): az_cognitiveservices_account_network_rule_remove_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cognitiveservices_account_network_rule_remove_command_builder;
    /** Name of a virtual network. */
    vnetName(value: string): az_cognitiveservices_account_network_rule_remove_command_builder;
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
declare class az_cognitiveservices_account_create_command_builder extends CommandBuilder<az_cognitiveservices_account_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, kind: string, location: string, name: string, resourceGroup: string, sku: string);
    /** The API name of cognitive services account. */
    kind(value: string): az_cognitiveservices_account_create_command_builder;
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_cognitiveservices_account_create_command_builder;
    /** Cognitive service account name. */
    name(value: string): az_cognitiveservices_account_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cognitiveservices_account_create_command_builder;
    /** Name of the Sku of cognitive services account. */
    sku(value: string): az_cognitiveservices_account_create_command_builder;
    /** Api properties in JSON format or a=b c=d format. Some cognitive services (i.e. QnA Maker) require extra api properties to create the account. */
    apiProperties(value: string): az_cognitiveservices_account_create_command_builder;
    /** Generate and assign an Azure Active Directory Identity for this account. */
    assignIdentity(value: string): az_cognitiveservices_account_create_command_builder;
    /** User domain assigned to the account. Name is the CNAME source. */
    customDomain(value: string): az_cognitiveservices_account_create_command_builder;
    /** The encryption properties for this resource, in JSON format. */
    encryption(value: string): az_cognitiveservices_account_create_command_builder;
    /** The storage accounts for this resource, in JSON array format. */
    storage(value: string): az_cognitiveservices_account_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cognitiveservices_account_create_command_builder;
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_cognitiveservices_account_create_command_builder;
    /** Do not prompt for terms confirmation. */
    yes(value: string): az_cognitiveservices_account_create_command_builder;
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
declare class az_cognitiveservices_account_delete_command_builder extends CommandBuilder<az_cognitiveservices_account_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** Cognitive service account name. */
    name(value: string): az_cognitiveservices_account_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cognitiveservices_account_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cognitiveservices_account_delete_command_builder;
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
declare class az_cognitiveservices_account_list_command_builder extends CommandBuilder<az_cognitiveservices_account_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_cognitiveservices_account_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cognitiveservices_account_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cognitiveservices_account_list_command_builder;
}
/**
 * List all valid kinds for Azure Cognitive Services account.
 *
 * Syntax:
 * ```
 * az cognitiveservices account list-kinds [--subscription]
 * ```
 */
declare class az_cognitiveservices_account_list_kinds_command_builder extends CommandBuilder<az_cognitiveservices_account_list_kinds_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cognitiveservices_account_list_kinds_command_builder;
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
declare class az_cognitiveservices_account_list_skus_command_builder extends CommandBuilder<az_cognitiveservices_account_list_skus_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** The API name of cognitive services account. */
    kind(value: string): az_cognitiveservices_account_list_skus_command_builder;
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_cognitiveservices_account_list_skus_command_builder;
    /** Cognitive service account name. */
    name(value: string): az_cognitiveservices_account_list_skus_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cognitiveservices_account_list_skus_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cognitiveservices_account_list_skus_command_builder;
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
declare class az_cognitiveservices_account_list_usage_command_builder extends CommandBuilder<az_cognitiveservices_account_list_usage_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** Cognitive service account name. */
    name(value: string): az_cognitiveservices_account_list_usage_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cognitiveservices_account_list_usage_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cognitiveservices_account_list_usage_command_builder;
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
declare class az_cognitiveservices_account_show_command_builder extends CommandBuilder<az_cognitiveservices_account_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** Cognitive service account name. */
    name(value: string): az_cognitiveservices_account_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cognitiveservices_account_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_cognitiveservices_account_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cognitiveservices_account_show_command_builder;
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
declare class az_cognitiveservices_account_update_command_builder extends CommandBuilder<az_cognitiveservices_account_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** Cognitive service account name. */
    name(value: string): az_cognitiveservices_account_update_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cognitiveservices_account_update_command_builder;
    /** Api properties in JSON format or a=b c=d format. Some cognitive services (i.e. QnA Maker) require extra api properties to create the account. */
    apiProperties(value: string): az_cognitiveservices_account_update_command_builder;
    /** User domain assigned to the account. Name is the CNAME source. */
    customDomain(value: string): az_cognitiveservices_account_update_command_builder;
    /** The encryption properties for this resource, in JSON format. */
    encryption(value: string): az_cognitiveservices_account_update_command_builder;
    /** Name of the Sku of cognitive services account. */
    sku(value: string): az_cognitiveservices_account_update_command_builder;
    /** The storage accounts for this resource, in JSON array format. */
    storage(value: string): az_cognitiveservices_account_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cognitiveservices_account_update_command_builder;
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_cognitiveservices_account_update_command_builder;
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
declare class az_cognitiveservices_list_command_builder extends CommandBuilder<az_cognitiveservices_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_cognitiveservices_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_cognitiveservices_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_cognitiveservices_list_command_builder;
}
export {};
