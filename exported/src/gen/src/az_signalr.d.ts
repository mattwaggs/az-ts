import { CommandBuilder } from '../base';
import { az_signalr_cors_add_command_result } from './models/az_signalr_cors_add_command_result';
import { az_signalr_cors_list_command_result } from './models/az_signalr_cors_list_command_result';
import { az_signalr_cors_remove_command_result } from './models/az_signalr_cors_remove_command_result';
import { az_signalr_key_list_command_result } from './models/az_signalr_key_list_command_result';
import { az_signalr_key_renew_command_result } from './models/az_signalr_key_renew_command_result';
import { az_signalr_network_rule_list_command_result } from './models/az_signalr_network_rule_list_command_result';
import { az_signalr_network_rule_update_command_result } from './models/az_signalr_network_rule_update_command_result';
import { az_signalr_upstream_clear_command_result } from './models/az_signalr_upstream_clear_command_result';
import { az_signalr_upstream_list_command_result } from './models/az_signalr_upstream_list_command_result';
import { az_signalr_upstream_update_command_result } from './models/az_signalr_upstream_update_command_result';
import { az_signalr_create_command_result } from './models/az_signalr_create_command_result';
import { az_signalr_delete_command_result } from './models/az_signalr_delete_command_result';
import { az_signalr_list_command_result } from './models/az_signalr_list_command_result';
import { az_signalr_restart_command_result } from './models/az_signalr_restart_command_result';
import { az_signalr_show_command_result } from './models/az_signalr_show_command_result';
import { az_signalr_update_command_result } from './models/az_signalr_update_command_result';
/** Manage CORS for Azure SignalR Service. */
export declare class az_signalr_cors {
    /**
     * Add allowed origins to a SignalR Service.
     *
     * Syntax:
     * ```
     * az signalr cors add --allowed-origins
     *                     --name
     *                     --resource-group
     *                     [--subscription]
     * ```
     *
     * @param {string} allowedOrigins Space separated origins that should be allowed to make cross-origin calls (for example: <a href="http://example.com:12345">http://example.com:12345</a>). To allow all, use "\*".
     * @param {string} name Name of signalr service.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static add(allowedOrigins: string, name: string, resourceGroup: string): az_signalr_cors_add_command_builder;
    /**
     * List allowed origins of a SignalR Service.
     *
     * Syntax:
     * ```
     * az signalr cors list --name
     *                      --resource-group
     *                      [--query-examples]
     *                      [--subscription]
     * ```
     *
     * @param {string} name Name of signalr service.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static list(name: string, resourceGroup: string): az_signalr_cors_list_command_builder;
    /**
     * Remove allowed origins from a SignalR Service.
     *
     * Syntax:
     * ```
     * az signalr cors remove --allowed-origins
     *                        --name
     *                        --resource-group
     *                        [--subscription]
     * ```
     *
     * @param {string} allowedOrigins Space separated origins that should be allowed to make cross-origin calls (for example: <a href="http://example.com:12345">http://example.com:12345</a>). To allow all, use "\*".
     * @param {string} name Name of signalr service.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static remove(allowedOrigins: string, name: string, resourceGroup: string): az_signalr_cors_remove_command_builder;
}
/** Manage keys for Azure SignalR Service. */
export declare class az_signalr_key {
    /**
     * List the access keys for a SignalR Service.
     *
     * Syntax:
     * ```
     * az signalr key list --name
     *                     --resource-group
     *                     [--query-examples]
     *                     [--subscription]
     * ```
     *
     * @param {string} name Name of signalr service.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static list(name: string, resourceGroup: string): az_signalr_key_list_command_builder;
    /**
     * Regenerate the access key for a SignalR Service.
     *
     * Syntax:
     * ```
     * az signalr key renew --key-type {primary, secondary}
     *                      --name
     *                      --resource-group
     *                      [--subscription]
     * ```
     *
     * @param {'primary' | 'secondary'} keyType The name of access key to regenerate.
     * @param {string} name Name of signalr service.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static renew(keyType: 'primary' | 'secondary', name: string, resourceGroup: string): az_signalr_key_renew_command_builder;
}
/** Manage network rules. */
export declare class az_signalr_network_rule {
    /**
     * Get the Network access control of SignalR Service.
     *
     * Syntax:
     * ```
     * az signalr network-rule list --name
     *                              --resource-group
     *                              [--query-examples]
     *                              [--subscription]
     * ```
     *
     * @param {string} name Name of signalr service.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static list(name: string, resourceGroup: string): az_signalr_network_rule_list_command_builder;
    /**
     * Update the Network access control of SignalR Service.
     *
     * Syntax:
     * ```
     * az signalr network-rule update --name
     *                                --resource-group
     *                                [--allow]
     *                                [--connection-name]
     *                                [--deny]
     *                                [--public-network {false, true}]
     *                                [--subscription]
     * ```
     *
     * @param {string} name Name of signalr service.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static update(name: string, resourceGroup: string): az_signalr_network_rule_update_command_builder;
}
/** Manage upstream settings. */
export declare class az_signalr_upstream {
    /**
     * List upstream settings of an existing SignalR Service.
     *
     * Syntax:
     * ```
     * az signalr upstream clear --name
     *                           --resource-group
     *                           [--subscription]
     * ```
     *
     * @param {string} name Name of signalr service.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static clear(name: string, resourceGroup: string): az_signalr_upstream_clear_command_builder;
    /**
     * List upstream settings of an existing SignalR Service.
     *
     * Syntax:
     * ```
     * az signalr upstream list --name
     *                          --resource-group
     *                          [--query-examples]
     *                          [--subscription]
     * ```
     *
     * @param {string} name Name of signalr service.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static list(name: string, resourceGroup: string): az_signalr_upstream_list_command_builder;
    /**
     * Update order sensitive upstream settings for an existing SignalR Service.
     *
     * Syntax:
     * ```
     * az signalr upstream update --name
     *                            --resource-group
     *                            --template
     *                            [--subscription]
     * ```
     *
     * @param {string} name Name of signalr service.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} template Template item for upstream settings. Use key=value pattern to set properties. Supported keys are "url-template", "hub-pattern", "event-pattern", "category-pattern".
     */
    static update(name: string, resourceGroup: string, template: string): az_signalr_upstream_update_command_builder;
}
/** Manage Azure SignalR Service. */
export declare class az_signalr {
    /**
     * Creates a SignalR Service.
     *
     * Syntax:
     * ```
     * az signalr create --name
     *                   --resource-group
     *                   --sku
     *                   [--allowed-origins]
     *                   [--default-action {Allow, Deny}]
     *                   [--location]
     *                   [--service-mode {Classic, Default, Serverless}]
     *                   [--subscription]
     *                   [--tags]
     *                   [--unit-count]
     * ```
     *
     * @param {string} name Name of signalr service.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} sku The sku name of the signalr service. E.g. Standard_S1.
     */
    static create(name: string, resourceGroup: string, sku: string): az_signalr_create_command_builder;
    /**
     * Deletes a SignalR Service.
     *
     * Syntax:
     * ```
     * az signalr delete --name
     *                   --resource-group
     *                   [--subscription]
     * ```
     *
     * @param {string} name Name of signalr service.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static delete(name: string, resourceGroup: string): az_signalr_delete_command_builder;
    /**
     * Lists all the SignalR Service under the current subscription.
     *
     * Syntax:
     * ```
     * az signalr list [--query-examples]
     *                 [--resource-group]
     *                 [--subscription]
     * ```
     */
    static list(): az_signalr_list_command_builder;
    /**
     * Restart an existing SignalR Service.
     *
     * Syntax:
     * ```
     * az signalr restart --name
     *                    --resource-group
     *                    [--subscription]
     * ```
     *
     * @param {string} name Name of signalr service.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static restart(name: string, resourceGroup: string): az_signalr_restart_command_builder;
    /**
     * Get the details of a SignalR Service.
     *
     * Syntax:
     * ```
     * az signalr show --name
     *                 --resource-group
     *                 [--query-examples]
     *                 [--subscription]
     * ```
     *
     * @param {string} name Name of signalr service.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static show(name: string, resourceGroup: string): az_signalr_show_command_builder;
    /**
     * Update an existing SignalR Service.
     *
     * Syntax:
     * ```
     * az signalr update --name
     *                   --resource-group
     *                   [--add]
     *                   [--allowed-origins]
     *                   [--default-action {Allow, Deny}]
     *                   [--force-string]
     *                   [--remove]
     *                   [--service-mode {Classic, Default, Serverless}]
     *                   [--set]
     *                   [--sku]
     *                   [--subscription]
     *                   [--tags]
     *                   [--unit-count]
     * ```
     *
     * @param {string} name Name of signalr service.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static update(name: string, resourceGroup: string): az_signalr_update_command_builder;
}
/**
 * Add allowed origins to a SignalR Service.
 *
 * Syntax:
 * ```
 * az signalr cors add --allowed-origins
 *                     --name
 *                     --resource-group
 *                     [--subscription]
 * ```
 *
 * @param {string} allowedOrigins Space separated origins that should be allowed to make cross-origin calls (for example: <a href="http://example.com:12345">http://example.com:12345</a>). To allow all, use "\*".
 * @param {string} name Name of signalr service.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_signalr_cors_add_command_builder extends CommandBuilder<az_signalr_cors_add_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, allowedOrigins: string, name: string, resourceGroup: string);
    /** Space separated origins that should be allowed to make cross-origin calls (for example: <a href="http://example.com:12345">http://example.com:12345</a>). To allow all, use "\*". */
    allowedOrigins(value: string): az_signalr_cors_add_command_builder;
    /** Name of signalr service. */
    name(value: string): az_signalr_cors_add_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_signalr_cors_add_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_signalr_cors_add_command_builder;
}
/**
 * List allowed origins of a SignalR Service.
 *
 * Syntax:
 * ```
 * az signalr cors list --name
 *                      --resource-group
 *                      [--query-examples]
 *                      [--subscription]
 * ```
 *
 * @param {string} name Name of signalr service.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_signalr_cors_list_command_builder extends CommandBuilder<az_signalr_cors_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** Name of signalr service. */
    name(value: string): az_signalr_cors_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_signalr_cors_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_signalr_cors_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_signalr_cors_list_command_builder;
}
/**
 * Remove allowed origins from a SignalR Service.
 *
 * Syntax:
 * ```
 * az signalr cors remove --allowed-origins
 *                        --name
 *                        --resource-group
 *                        [--subscription]
 * ```
 *
 * @param {string} allowedOrigins Space separated origins that should be allowed to make cross-origin calls (for example: <a href="http://example.com:12345">http://example.com:12345</a>). To allow all, use "\*".
 * @param {string} name Name of signalr service.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_signalr_cors_remove_command_builder extends CommandBuilder<az_signalr_cors_remove_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, allowedOrigins: string, name: string, resourceGroup: string);
    /** Space separated origins that should be allowed to make cross-origin calls (for example: <a href="http://example.com:12345">http://example.com:12345</a>). To allow all, use "\*". */
    allowedOrigins(value: string): az_signalr_cors_remove_command_builder;
    /** Name of signalr service. */
    name(value: string): az_signalr_cors_remove_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_signalr_cors_remove_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_signalr_cors_remove_command_builder;
}
/**
 * List the access keys for a SignalR Service.
 *
 * Syntax:
 * ```
 * az signalr key list --name
 *                     --resource-group
 *                     [--query-examples]
 *                     [--subscription]
 * ```
 *
 * @param {string} name Name of signalr service.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_signalr_key_list_command_builder extends CommandBuilder<az_signalr_key_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** Name of signalr service. */
    name(value: string): az_signalr_key_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_signalr_key_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_signalr_key_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_signalr_key_list_command_builder;
}
/**
 * Regenerate the access key for a SignalR Service.
 *
 * Syntax:
 * ```
 * az signalr key renew --key-type {primary, secondary}
 *                      --name
 *                      --resource-group
 *                      [--subscription]
 * ```
 *
 * @param {'primary' | 'secondary'} keyType The name of access key to regenerate.
 * @param {string} name Name of signalr service.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_signalr_key_renew_command_builder extends CommandBuilder<az_signalr_key_renew_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, keyType: 'primary' | 'secondary', name: string, resourceGroup: string);
    /** The name of access key to regenerate. */
    keyType(value: 'primary' | 'secondary'): az_signalr_key_renew_command_builder;
    /** Name of signalr service. */
    name(value: string): az_signalr_key_renew_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_signalr_key_renew_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_signalr_key_renew_command_builder;
}
/**
 * Get the Network access control of SignalR Service.
 *
 * Syntax:
 * ```
 * az signalr network-rule list --name
 *                              --resource-group
 *                              [--query-examples]
 *                              [--subscription]
 * ```
 *
 * @param {string} name Name of signalr service.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_signalr_network_rule_list_command_builder extends CommandBuilder<az_signalr_network_rule_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** Name of signalr service. */
    name(value: string): az_signalr_network_rule_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_signalr_network_rule_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_signalr_network_rule_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_signalr_network_rule_list_command_builder;
}
/**
 * Update the Network access control of SignalR Service.
 *
 * Syntax:
 * ```
 * az signalr network-rule update --name
 *                                --resource-group
 *                                [--allow]
 *                                [--connection-name]
 *                                [--deny]
 *                                [--public-network {false, true}]
 *                                [--subscription]
 * ```
 *
 * @param {string} name Name of signalr service.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_signalr_network_rule_update_command_builder extends CommandBuilder<az_signalr_network_rule_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** Name of signalr service. */
    name(value: string): az_signalr_network_rule_update_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_signalr_network_rule_update_command_builder;
    /** The allowed virtual network rule. Space-separeted list of scope to assign. Allowed values: ClientConnection, ServerConnection, RESTAPI. */
    allow(value: string): az_signalr_network_rule_update_command_builder;
    /** Space-separeted list of private endpoint connection name. */
    connectionName(value: string): az_signalr_network_rule_update_command_builder;
    /** The denied virtual network rule. Space-separeted list of scope to assign. Allowed values: ClientConnection, ServerConnection, RESTAPI. */
    deny(value: string): az_signalr_network_rule_update_command_builder;
    /** Set rules for public network. */
    publicNetwork(value: boolean): az_signalr_network_rule_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_signalr_network_rule_update_command_builder;
}
/**
 * List upstream settings of an existing SignalR Service.
 *
 * Syntax:
 * ```
 * az signalr upstream clear --name
 *                           --resource-group
 *                           [--subscription]
 * ```
 *
 * @param {string} name Name of signalr service.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_signalr_upstream_clear_command_builder extends CommandBuilder<az_signalr_upstream_clear_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** Name of signalr service. */
    name(value: string): az_signalr_upstream_clear_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_signalr_upstream_clear_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_signalr_upstream_clear_command_builder;
}
/**
 * List upstream settings of an existing SignalR Service.
 *
 * Syntax:
 * ```
 * az signalr upstream list --name
 *                          --resource-group
 *                          [--query-examples]
 *                          [--subscription]
 * ```
 *
 * @param {string} name Name of signalr service.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_signalr_upstream_list_command_builder extends CommandBuilder<az_signalr_upstream_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** Name of signalr service. */
    name(value: string): az_signalr_upstream_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_signalr_upstream_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_signalr_upstream_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_signalr_upstream_list_command_builder;
}
/**
 * Update order sensitive upstream settings for an existing SignalR Service.
 *
 * Syntax:
 * ```
 * az signalr upstream update --name
 *                            --resource-group
 *                            --template
 *                            [--subscription]
 * ```
 *
 * @param {string} name Name of signalr service.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} template Template item for upstream settings. Use key=value pattern to set properties. Supported keys are "url-template", "hub-pattern", "event-pattern", "category-pattern".
 */
declare class az_signalr_upstream_update_command_builder extends CommandBuilder<az_signalr_upstream_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string, template: string);
    /** Name of signalr service. */
    name(value: string): az_signalr_upstream_update_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_signalr_upstream_update_command_builder;
    /** Template item for upstream settings. Use key=value pattern to set properties. Supported keys are "url-template", "hub-pattern", "event-pattern", "category-pattern". */
    template(value: string): az_signalr_upstream_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_signalr_upstream_update_command_builder;
}
/**
 * Creates a SignalR Service.
 *
 * Syntax:
 * ```
 * az signalr create --name
 *                   --resource-group
 *                   --sku
 *                   [--allowed-origins]
 *                   [--default-action {Allow, Deny}]
 *                   [--location]
 *                   [--service-mode {Classic, Default, Serverless}]
 *                   [--subscription]
 *                   [--tags]
 *                   [--unit-count]
 * ```
 *
 * @param {string} name Name of signalr service.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} sku The sku name of the signalr service. E.g. Standard_S1.
 */
declare class az_signalr_create_command_builder extends CommandBuilder<az_signalr_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string, sku: string);
    /** Name of signalr service. */
    name(value: string): az_signalr_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_signalr_create_command_builder;
    /** The sku name of the signalr service. E.g. Standard_S1. */
    sku(value: string): az_signalr_create_command_builder;
    /** Space separated origins that should be allowed to make cross-origin calls (for example: <a href="http://example.com:12345">http://example.com:12345</a>). To allow all, use "\*". */
    allowedOrigins(value: string): az_signalr_create_command_builder;
    /** Default action to apply when no rule matches. */
    defaultAction(value: 'Allow' | 'Deny'): az_signalr_create_command_builder;
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_signalr_create_command_builder;
    /** The service mode which signalr service will be working on. */
    serviceMode(value: 'Classic' | 'Default' | 'Serverless'): az_signalr_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_signalr_create_command_builder;
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_signalr_create_command_builder;
    /** The number of signalr service unit count. */
    unitCount(value: string): az_signalr_create_command_builder;
}
/**
 * Deletes a SignalR Service.
 *
 * Syntax:
 * ```
 * az signalr delete --name
 *                   --resource-group
 *                   [--subscription]
 * ```
 *
 * @param {string} name Name of signalr service.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_signalr_delete_command_builder extends CommandBuilder<az_signalr_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** Name of signalr service. */
    name(value: string): az_signalr_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_signalr_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_signalr_delete_command_builder;
}
/**
 * Lists all the SignalR Service under the current subscription.
 *
 * Syntax:
 * ```
 * az signalr list [--query-examples]
 *                 [--resource-group]
 *                 [--subscription]
 * ```
 */
declare class az_signalr_list_command_builder extends CommandBuilder<az_signalr_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_signalr_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_signalr_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_signalr_list_command_builder;
}
/**
 * Restart an existing SignalR Service.
 *
 * Syntax:
 * ```
 * az signalr restart --name
 *                    --resource-group
 *                    [--subscription]
 * ```
 *
 * @param {string} name Name of signalr service.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_signalr_restart_command_builder extends CommandBuilder<az_signalr_restart_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** Name of signalr service. */
    name(value: string): az_signalr_restart_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_signalr_restart_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_signalr_restart_command_builder;
}
/**
 * Get the details of a SignalR Service.
 *
 * Syntax:
 * ```
 * az signalr show --name
 *                 --resource-group
 *                 [--query-examples]
 *                 [--subscription]
 * ```
 *
 * @param {string} name Name of signalr service.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_signalr_show_command_builder extends CommandBuilder<az_signalr_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** Name of signalr service. */
    name(value: string): az_signalr_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_signalr_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_signalr_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_signalr_show_command_builder;
}
/**
 * Update an existing SignalR Service.
 *
 * Syntax:
 * ```
 * az signalr update --name
 *                   --resource-group
 *                   [--add]
 *                   [--allowed-origins]
 *                   [--default-action {Allow, Deny}]
 *                   [--force-string]
 *                   [--remove]
 *                   [--service-mode {Classic, Default, Serverless}]
 *                   [--set]
 *                   [--sku]
 *                   [--subscription]
 *                   [--tags]
 *                   [--unit-count]
 * ```
 *
 * @param {string} name Name of signalr service.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_signalr_update_command_builder extends CommandBuilder<az_signalr_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** Name of signalr service. */
    name(value: string): az_signalr_update_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_signalr_update_command_builder;
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_signalr_update_command_builder;
    /** Space separated origins that should be allowed to make cross-origin calls (for example: <a href="http://example.com:12345">http://example.com:12345</a>). To allow all, use "\*". */
    allowedOrigins(value: string): az_signalr_update_command_builder;
    /** Default action to apply when no rule matches. */
    defaultAction(value: 'Allow' | 'Deny'): az_signalr_update_command_builder;
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_signalr_update_command_builder;
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_signalr_update_command_builder;
    /** The service mode which signalr service will be working on. */
    serviceMode(value: 'Classic' | 'Default' | 'Serverless'): az_signalr_update_command_builder;
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_signalr_update_command_builder;
    /** The sku name of the signalr service. E.g. Standard_S1. */
    sku(value: string): az_signalr_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_signalr_update_command_builder;
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_signalr_update_command_builder;
    /** The number of signalr service unit count. */
    unitCount(value: string): az_signalr_update_command_builder;
}
export {};
