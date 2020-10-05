import { CommandBuilder } from '../base';
import { az_relay_hyco_authorization_rule_keys_list_command_result } from './models/az_relay_hyco_authorization_rule_keys_list_command_result';
import { az_relay_hyco_authorization_rule_keys_renew_command_result } from './models/az_relay_hyco_authorization_rule_keys_renew_command_result';
import { az_relay_hyco_authorization_rule_create_command_result } from './models/az_relay_hyco_authorization_rule_create_command_result';
import { az_relay_hyco_authorization_rule_delete_command_result } from './models/az_relay_hyco_authorization_rule_delete_command_result';
import { az_relay_hyco_authorization_rule_list_command_result } from './models/az_relay_hyco_authorization_rule_list_command_result';
import { az_relay_hyco_authorization_rule_show_command_result } from './models/az_relay_hyco_authorization_rule_show_command_result';
import { az_relay_hyco_authorization_rule_update_command_result } from './models/az_relay_hyco_authorization_rule_update_command_result';
import { az_relay_hyco_create_command_result } from './models/az_relay_hyco_create_command_result';
import { az_relay_hyco_delete_command_result } from './models/az_relay_hyco_delete_command_result';
import { az_relay_hyco_list_command_result } from './models/az_relay_hyco_list_command_result';
import { az_relay_hyco_show_command_result } from './models/az_relay_hyco_show_command_result';
import { az_relay_hyco_update_command_result } from './models/az_relay_hyco_update_command_result';
import { az_relay_namespace_authorization_rule_keys_list_command_result } from './models/az_relay_namespace_authorization_rule_keys_list_command_result';
import { az_relay_namespace_authorization_rule_keys_renew_command_result } from './models/az_relay_namespace_authorization_rule_keys_renew_command_result';
import { az_relay_namespace_authorization_rule_create_command_result } from './models/az_relay_namespace_authorization_rule_create_command_result';
import { az_relay_namespace_authorization_rule_delete_command_result } from './models/az_relay_namespace_authorization_rule_delete_command_result';
import { az_relay_namespace_authorization_rule_list_command_result } from './models/az_relay_namespace_authorization_rule_list_command_result';
import { az_relay_namespace_authorization_rule_show_command_result } from './models/az_relay_namespace_authorization_rule_show_command_result';
import { az_relay_namespace_authorization_rule_update_command_result } from './models/az_relay_namespace_authorization_rule_update_command_result';
import { az_relay_namespace_create_command_result } from './models/az_relay_namespace_create_command_result';
import { az_relay_namespace_delete_command_result } from './models/az_relay_namespace_delete_command_result';
import { az_relay_namespace_exists_command_result } from './models/az_relay_namespace_exists_command_result';
import { az_relay_namespace_list_command_result } from './models/az_relay_namespace_list_command_result';
import { az_relay_namespace_show_command_result } from './models/az_relay_namespace_show_command_result';
import { az_relay_namespace_update_command_result } from './models/az_relay_namespace_update_command_result';
import { az_relay_wcfrelay_authorization_rule_keys_list_command_result } from './models/az_relay_wcfrelay_authorization_rule_keys_list_command_result';
import { az_relay_wcfrelay_authorization_rule_keys_renew_command_result } from './models/az_relay_wcfrelay_authorization_rule_keys_renew_command_result';
import { az_relay_wcfrelay_authorization_rule_create_command_result } from './models/az_relay_wcfrelay_authorization_rule_create_command_result';
import { az_relay_wcfrelay_authorization_rule_delete_command_result } from './models/az_relay_wcfrelay_authorization_rule_delete_command_result';
import { az_relay_wcfrelay_authorization_rule_list_command_result } from './models/az_relay_wcfrelay_authorization_rule_list_command_result';
import { az_relay_wcfrelay_authorization_rule_show_command_result } from './models/az_relay_wcfrelay_authorization_rule_show_command_result';
import { az_relay_wcfrelay_authorization_rule_update_command_result } from './models/az_relay_wcfrelay_authorization_rule_update_command_result';
import { az_relay_wcfrelay_create_command_result } from './models/az_relay_wcfrelay_create_command_result';
import { az_relay_wcfrelay_delete_command_result } from './models/az_relay_wcfrelay_delete_command_result';
import { az_relay_wcfrelay_list_command_result } from './models/az_relay_wcfrelay_list_command_result';
import { az_relay_wcfrelay_show_command_result } from './models/az_relay_wcfrelay_show_command_result';
import { az_relay_wcfrelay_update_command_result } from './models/az_relay_wcfrelay_update_command_result';
/** Manage Azure Authorization Rule keys for Relay Service Hybrid Connection. */
export declare class az_relay_hyco_authorization_rule_keys {
    /**
     * List the keys and connection strings of Authorization Rule for Relay Service Hybrid Connection.
     *
     * Syntax:
     * ```
     * az relay hyco authorization-rule keys list --hybrid-connection-name
     *                                            --name
     *                                            --namespace-name
     *                                            --resource-group
     *                                            [--query-examples]
     *                                            [--subscription]
     * ```
     *
     * @param {string} hybridConnectionName Name of Hybrid Connection.
     * @param {string} name Name of Hybrid Connection Authorization Rule.
     * @param {string} namespaceName Name of Namespace.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static list(hybridConnectionName: string, name: string, namespaceName: string, resourceGroup: string): az_relay_hyco_authorization_rule_keys_list_command_builder;
    /**
     * Regenerate keys of Authorization Rule for Relay Service Hybrid Connection.
     *
     * Syntax:
     * ```
     * az relay hyco authorization-rule keys renew --key {PrimaryKey, SecondaryKey}
     *                                             [--hybrid-connection-name]
     *                                             [--ids]
     *                                             [--key-value]
     *                                             [--name]
     *                                             [--namespace-name]
     *                                             [--resource-group]
     *                                             [--subscription]
     * ```
     *
     * @param {'PrimaryKey' | 'SecondaryKey'} key Specifies Primary or Secondary key needs to be reset.
     */
    static renew(key: 'PrimaryKey' | 'SecondaryKey'): az_relay_hyco_authorization_rule_keys_renew_command_builder;
}
/** Manage Azure Relay Service Hybrid Connection Authorization Rule. */
export declare class az_relay_hyco_authorization_rule {
    /**
     * Create Authorization Rule for given Relay Service Hybrid Connection.
     *
     * Syntax:
     * ```
     * az relay hyco authorization-rule create --hybrid-connection-name
     *                                         --name
     *                                         --namespace-name
     *                                         --resource-group
     *                                         [--rights {Listen, Manage, Send}]
     *                                         [--subscription]
     * ```
     *
     * @param {string} hybridConnectionName Name of Hybrid Connection.
     * @param {string} name Name of Hybrid Connection Authorization Rule.
     * @param {string} namespaceName Name of Namespace.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static create(hybridConnectionName: string, name: string, namespaceName: string, resourceGroup: string): az_relay_hyco_authorization_rule_create_command_builder;
    /**
     * Deletes the Authorization Rule of the given Relay Service Hybrid Connection.
     *
     * Syntax:
     * ```
     * az relay hyco authorization-rule delete [--hybrid-connection-name]
     *                                         [--ids]
     *                                         [--name]
     *                                         [--namespace-name]
     *                                         [--resource-group]
     *                                         [--subscription]
     * ```
     */
    static delete(): az_relay_hyco_authorization_rule_delete_command_builder;
    /**
     * Shows list of Authorization Rule by Relay Service Hybrid Connection.
     *
     * Syntax:
     * ```
     * az relay hyco authorization-rule list --hybrid-connection-name
     *                                       --namespace-name
     *                                       --resource-group
     *                                       [--query-examples]
     *                                       [--subscription]
     * ```
     *
     * @param {string} hybridConnectionName Name of Hybrid Connection.
     * @param {string} namespaceName Name of Namespace.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static list(hybridConnectionName: string, namespaceName: string, resourceGroup: string): az_relay_hyco_authorization_rule_list_command_builder;
    /**
     * Shows the details of Authorization Rule for given Relay Service Hybrid Connection.
     *
     * Syntax:
     * ```
     * az relay hyco authorization-rule show [--hybrid-connection-name]
     *                                       [--ids]
     *                                       [--name]
     *                                       [--namespace-name]
     *                                       [--query-examples]
     *                                       [--resource-group]
     *                                       [--subscription]
     * ```
     */
    static show(): az_relay_hyco_authorization_rule_show_command_builder;
    /**
     * Create Authorization Rule for given Relay Service Hybrid Connection.
     *
     * Syntax:
     * ```
     * az relay hyco authorization-rule update --rights {Listen, Manage, Send}
     *                                         [--add]
     *                                         [--force-string]
     *                                         [--hybrid-connection-name]
     *                                         [--ids]
     *                                         [--name]
     *                                         [--namespace-name]
     *                                         [--remove]
     *                                         [--resource-group]
     *                                         [--set]
     *                                         [--subscription]
     * ```
     *
     * @param {'Listen' | 'Manage' | 'Send'} rights Space-separated list of Authorization rule rights.
     */
    static update(rights: 'Listen' | 'Manage' | 'Send'): az_relay_hyco_authorization_rule_update_command_builder;
}
/** Manage Azure Relay Service Hybrid Connection and Authorization Rule. */
export declare class az_relay_hyco {
    /**
     * Create the Relay Service Hybrid Connection.
     *
     * Syntax:
     * ```
     * az relay hyco create --name
     *                      --namespace-name
     *                      --resource-group
     *                      [--requires-client-authorization {false, true}]
     *                      [--subscription]
     *                      [--user-metadata]
     * ```
     *
     * @param {string} name Name of Hybrid Connection.
     * @param {string} namespaceName Name of Namespace.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static create(name: string, namespaceName: string, resourceGroup: string): az_relay_hyco_create_command_builder;
    /**
     * Deletes the Relay Service Hybrid Connection.
     *
     * Syntax:
     * ```
     * az relay hyco delete [--ids]
     *                      [--name]
     *                      [--namespace-name]
     *                      [--resource-group]
     *                      [--subscription]
     * ```
     */
    static delete(): az_relay_hyco_delete_command_builder;
    /**
     * List the Hybrid Connection by Relay Service Namepsace.
     *
     * Syntax:
     * ```
     * az relay hyco list --namespace-name
     *                    --resource-group
     *                    [--query-examples]
     *                    [--subscription]
     * ```
     *
     * @param {string} namespaceName Name of Namespace.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static list(namespaceName: string, resourceGroup: string): az_relay_hyco_list_command_builder;
    /**
     * Shows the Relay Service Hybrid Connection Details.
     *
     * Syntax:
     * ```
     * az relay hyco show [--ids]
     *                    [--name]
     *                    [--namespace-name]
     *                    [--query-examples]
     *                    [--resource-group]
     *                    [--subscription]
     * ```
     */
    static show(): az_relay_hyco_show_command_builder;
    /**
     * Updates the Relay Service Hybrid Connection.
     *
     * Syntax:
     * ```
     * az relay hyco update [--add]
     *                      [--force-string]
     *                      [--ids]
     *                      [--name]
     *                      [--namespace-name]
     *                      [--remove]
     *                      [--requires-client-authorization {false, true}]
     *                      [--resource-group]
     *                      [--set]
     *                      [--status {Active, Disabled, ReceiveDisabled, SendDisabled}]
     *                      [--subscription]
     *                      [--user-metadata]
     * ```
     */
    static update(): az_relay_hyco_update_command_builder;
}
/** Manage Azure Authorization Rule connection strings for Namespace. */
export declare class az_relay_namespace_authorization_rule_keys {
    /**
     * List the keys and connection strings of Authorization Rule for Relay Service Namespace.
     *
     * Syntax:
     * ```
     * az relay namespace authorization-rule keys list --name
     *                                                 --namespace-name
     *                                                 --resource-group
     *                                                 [--query-examples]
     *                                                 [--subscription]
     * ```
     *
     * @param {string} name Name of Namespace Authorization Rule.
     * @param {string} namespaceName Name of Namespace.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static list(name: string, namespaceName: string, resourceGroup: string): az_relay_namespace_authorization_rule_keys_list_command_builder;
    /**
     * Regenerate keys of Authorization Rule for the Relay Service Namespace.
     *
     * Syntax:
     * ```
     * az relay namespace authorization-rule keys renew --key {PrimaryKey, SecondaryKey}
     *                                                  [--ids]
     *                                                  [--key-value]
     *                                                  [--name]
     *                                                  [--namespace-name]
     *                                                  [--resource-group]
     *                                                  [--subscription]
     * ```
     *
     * @param {'PrimaryKey' | 'SecondaryKey'} key Specifies Primary or Secondary key needs to be reset.
     */
    static renew(key: 'PrimaryKey' | 'SecondaryKey'): az_relay_namespace_authorization_rule_keys_renew_command_builder;
}
/** Manage Azure Relay Service Namespace Authorization Rule. */
export declare class az_relay_namespace_authorization_rule {
    /**
     * Create Authorization Rule for the given Relay Service Namespace.
     *
     * Syntax:
     * ```
     * az relay namespace authorization-rule create --name
     *                                              --namespace-name
     *                                              --resource-group
     *                                              [--rights {Listen, Manage, Send}]
     *                                              [--subscription]
     * ```
     *
     * @param {string} name Name of Namespace Authorization Rule.
     * @param {string} namespaceName Name of Namespace.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static create(name: string, namespaceName: string, resourceGroup: string): az_relay_namespace_authorization_rule_create_command_builder;
    /**
     * Deletes the Authorization Rule of the Relay Service Namespace.
     *
     * Syntax:
     * ```
     * az relay namespace authorization-rule delete [--ids]
     *                                              [--name]
     *                                              [--namespace-name]
     *                                              [--resource-group]
     *                                              [--subscription]
     * ```
     */
    static delete(): az_relay_namespace_authorization_rule_delete_command_builder;
    /**
     * Shows the list of Authorization Rule by Relay Service Namespace.
     *
     * Syntax:
     * ```
     * az relay namespace authorization-rule list --namespace-name
     *                                            --resource-group
     *                                            [--query-examples]
     *                                            [--subscription]
     * ```
     *
     * @param {string} namespaceName Name of the Namespace.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static list(namespaceName: string, resourceGroup: string): az_relay_namespace_authorization_rule_list_command_builder;
    /**
     * Shows the details of Relay Service Namespace Authorization Rule.
     *
     * Syntax:
     * ```
     * az relay namespace authorization-rule show [--ids]
     *                                            [--name]
     *                                            [--namespace-name]
     *                                            [--query-examples]
     *                                            [--resource-group]
     *                                            [--subscription]
     * ```
     */
    static show(): az_relay_namespace_authorization_rule_show_command_builder;
    /**
     * Updates Authorization Rule for the given Relay Service Namespace.
     *
     * Syntax:
     * ```
     * az relay namespace authorization-rule update --rights {Listen, Manage, Send}
     *                                              [--add]
     *                                              [--force-string]
     *                                              [--ids]
     *                                              [--name]
     *                                              [--namespace-name]
     *                                              [--remove]
     *                                              [--resource-group]
     *                                              [--set]
     *                                              [--subscription]
     * ```
     *
     * @param {'Listen' | 'Manage' | 'Send'} rights Space-separated list of Authorization rule rights.
     */
    static update(rights: 'Listen' | 'Manage' | 'Send'): az_relay_namespace_authorization_rule_update_command_builder;
}
/** Manage Azure Relay Service Namespace. */
export declare class az_relay_namespace {
    /**
     * Create a Relay Service Namespace.
     *
     * Syntax:
     * ```
     * az relay namespace create --name
     *                           --resource-group
     *                           [--location]
     *                           [--subscription]
     *                           [--tags]
     * ```
     *
     * @param {string} name Name of Namespace.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static create(name: string, resourceGroup: string): az_relay_namespace_create_command_builder;
    /**
     * Deletes the Relay Service Namespace.
     *
     * Syntax:
     * ```
     * az relay namespace delete [--ids]
     *                           [--name]
     *                           [--resource-group]
     *                           [--subscription]
     * ```
     */
    static delete(): az_relay_namespace_delete_command_builder;
    /**
     * Check for the availability of the given name for the Namespace.
     *
     * Syntax:
     * ```
     * az relay namespace exists --name
     *                           [--subscription]
     * ```
     *
     * @param {string} name Namespace name. Name can contain only letters, numbers, and hyphens. The namespace must start with a letter, and it must end with a letter or number.
     */
    static exists(name: string): az_relay_namespace_exists_command_builder;
    /**
     * List the Relay Service Namespaces.
     *
     * Syntax:
     * ```
     * az relay namespace list [--query-examples]
     *                         [--resource-group]
     *                         [--subscription]
     * ```
     */
    static list(): az_relay_namespace_list_command_builder;
    /**
     * Shows the Relay Service Namespace details.
     *
     * Syntax:
     * ```
     * az relay namespace show [--ids]
     *                         [--name]
     *                         [--query-examples]
     *                         [--resource-group]
     *                         [--subscription]
     * ```
     */
    static show(): az_relay_namespace_show_command_builder;
    /**
     * Updates a Relay Service Namespace.
     *
     * Syntax:
     * ```
     * az relay namespace update [--add]
     *                           [--force-string]
     *                           [--ids]
     *                           [--name]
     *                           [--remove]
     *                           [--resource-group]
     *                           [--set]
     *                           [--subscription]
     *                           [--tags]
     * ```
     */
    static update(): az_relay_namespace_update_command_builder;
}
/** Manage Azure Authorization Rule keys for Relay Service WCF Relay. */
export declare class az_relay_wcfrelay_authorization_rule_keys {
    /**
     * List the keys and connection strings of Authorization Rule for the given Relay Service WCF Relay.
     *
     * Syntax:
     * ```
     * az relay wcfrelay authorization-rule keys list --name
     *                                                --namespace-name
     *                                                --relay-name
     *                                                --resource-group
     *                                                [--query-examples]
     *                                                [--subscription]
     * ```
     *
     * @param {string} name Name of WCF Relay Authorization Rule.
     * @param {string} namespaceName Name of Namespace.
     * @param {string} relayName Name of WCF Relay.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static list(name: string, namespaceName: string, relayName: string, resourceGroup: string): az_relay_wcfrelay_authorization_rule_keys_list_command_builder;
    /**
     * Regenerate keys of Authorization Rule for Relay Service WCF Relay.
     *
     * Syntax:
     * ```
     * az relay wcfrelay authorization-rule keys renew --key {PrimaryKey, SecondaryKey}
     *                                                 [--ids]
     *                                                 [--key-value]
     *                                                 [--name]
     *                                                 [--namespace-name]
     *                                                 [--relay-name]
     *                                                 [--resource-group]
     *                                                 [--subscription]
     * ```
     *
     * @param {'PrimaryKey' | 'SecondaryKey'} key Specifies Primary or Secondary key needs to be reset.
     */
    static renew(key: 'PrimaryKey' | 'SecondaryKey'): az_relay_wcfrelay_authorization_rule_keys_renew_command_builder;
}
/** Manage Azure Relay Service WCF Relay Authorization Rule. */
export declare class az_relay_wcfrelay_authorization_rule {
    /**
     * Create Authorization Rule for the given Relay Service WCF Relay.
     *
     * Syntax:
     * ```
     * az relay wcfrelay authorization-rule create --name
     *                                             --namespace-name
     *                                             --relay-name
     *                                             --resource-group
     *                                             [--rights {Listen, Manage, Send}]
     *                                             [--subscription]
     * ```
     *
     * @param {string} name Name of WCF Relay Authorization Rule.
     * @param {string} namespaceName Name of Namespace.
     * @param {string} relayName Name of WCF Relay.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static create(name: string, namespaceName: string, relayName: string, resourceGroup: string): az_relay_wcfrelay_authorization_rule_create_command_builder;
    /**
     * Delete the Authorization Rule of Relay Service WCF Relay.
     *
     * Syntax:
     * ```
     * az relay wcfrelay authorization-rule delete [--ids]
     *                                             [--name]
     *                                             [--namespace-name]
     *                                             [--relay-name]
     *                                             [--resource-group]
     *                                             [--subscription]
     * ```
     */
    static delete(): az_relay_wcfrelay_authorization_rule_delete_command_builder;
    /**
     * List of Authorization Rule by Relay Service WCF Relay.
     *
     * Syntax:
     * ```
     * az relay wcfrelay authorization-rule list --namespace-name
     *                                           --relay-name
     *                                           --resource-group
     *                                           [--query-examples]
     *                                           [--subscription]
     * ```
     *
     * @param {string} namespaceName Name of Namespace.
     * @param {string} relayName Name of WCF Relay.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static list(namespaceName: string, relayName: string, resourceGroup: string): az_relay_wcfrelay_authorization_rule_list_command_builder;
    /**
     * Show properties of Authorization Rule for the given Relay Service WCF Relay.
     *
     * Syntax:
     * ```
     * az relay wcfrelay authorization-rule show [--ids]
     *                                           [--name]
     *                                           [--namespace-name]
     *                                           [--query-examples]
     *                                           [--relay-name]
     *                                           [--resource-group]
     *                                           [--subscription]
     * ```
     */
    static show(): az_relay_wcfrelay_authorization_rule_show_command_builder;
    /**
     * Update Authorization Rule for the given Relay Service WCF Relay.
     *
     * Syntax:
     * ```
     * az relay wcfrelay authorization-rule update --rights {Listen, Manage, Send}
     *                                             [--add]
     *                                             [--force-string]
     *                                             [--ids]
     *                                             [--name]
     *                                             [--namespace-name]
     *                                             [--relay-name]
     *                                             [--remove]
     *                                             [--resource-group]
     *                                             [--set]
     *                                             [--subscription]
     * ```
     *
     * @param {'Listen' | 'Manage' | 'Send'} rights Space-separated list of Authorization rule rights.
     */
    static update(rights: 'Listen' | 'Manage' | 'Send'): az_relay_wcfrelay_authorization_rule_update_command_builder;
}
/** Manage Azure Relay Service WCF Relay and Authorization Rule. */
export declare class az_relay_wcfrelay {
    /**
     * Create the Relay Service WCF Relay.
     *
     * Syntax:
     * ```
     * az relay wcfrelay create --name
     *                          --namespace-name
     *                          --relay-type {Http, NetTcp}
     *                          --resource-group
     *                          [--requires-client-authorization {false, true}]
     *                          [--requires-transport-security {false, true}]
     *                          [--subscription]
     *                          [--user-metadata]
     * ```
     *
     * @param {string} name Name of WCF Relay.
     * @param {string} namespaceName Name of Namespace.
     * @param {'Http' | 'NetTcp'} relayType Relay type.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static create(name: string, namespaceName: string, relayType: 'Http' | 'NetTcp', resourceGroup: string): az_relay_wcfrelay_create_command_builder;
    /**
     * Deletes the Relay Service WCF Relay.
     *
     * Syntax:
     * ```
     * az relay wcfrelay delete [--ids]
     *                          [--name]
     *                          [--namespace-name]
     *                          [--resource-group]
     *                          [--subscription]
     * ```
     */
    static delete(): az_relay_wcfrelay_delete_command_builder;
    /**
     * List the WCF Relay by Relay Service Namepsace.
     *
     * Syntax:
     * ```
     * az relay wcfrelay list --namespace-name
     *                        --resource-group
     *                        [--query-examples]
     *                        [--subscription]
     * ```
     *
     * @param {string} namespaceName Name of Namespace.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static list(namespaceName: string, resourceGroup: string): az_relay_wcfrelay_list_command_builder;
    /**
     * Shows the Relay Service WCF Relay Details.
     *
     * Syntax:
     * ```
     * az relay wcfrelay show [--ids]
     *                        [--name]
     *                        [--namespace-name]
     *                        [--query-examples]
     *                        [--resource-group]
     *                        [--subscription]
     * ```
     */
    static show(): az_relay_wcfrelay_show_command_builder;
    /**
     * Updates existing Relay Service WCF Relay.
     *
     * Syntax:
     * ```
     * az relay wcfrelay update [--add]
     *                          [--force-string]
     *                          [--ids]
     *                          [--name]
     *                          [--namespace-name]
     *                          [--relay-type {Http, NetTcp}]
     *                          [--remove]
     *                          [--resource-group]
     *                          [--set]
     *                          [--status {Active, Disabled, ReceiveDisabled, SendDisabled}]
     *                          [--subscription]
     *                          [--user-metadata]
     * ```
     */
    static update(): az_relay_wcfrelay_update_command_builder;
}
/** Manage Azure Relay Service namespaces, WCF relays, hybrid connections, and rules. */
export declare class az_relay {
}
/**
 * List the keys and connection strings of Authorization Rule for Relay Service Hybrid Connection.
 *
 * Syntax:
 * ```
 * az relay hyco authorization-rule keys list --hybrid-connection-name
 *                                            --name
 *                                            --namespace-name
 *                                            --resource-group
 *                                            [--query-examples]
 *                                            [--subscription]
 * ```
 *
 * @param {string} hybridConnectionName Name of Hybrid Connection.
 * @param {string} name Name of Hybrid Connection Authorization Rule.
 * @param {string} namespaceName Name of Namespace.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_relay_hyco_authorization_rule_keys_list_command_builder extends CommandBuilder<az_relay_hyco_authorization_rule_keys_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, hybridConnectionName: string, name: string, namespaceName: string, resourceGroup: string);
    /** Name of Hybrid Connection. */
    hybridConnectionName(value: string): az_relay_hyco_authorization_rule_keys_list_command_builder;
    /** Name of Hybrid Connection Authorization Rule. */
    name(value: string): az_relay_hyco_authorization_rule_keys_list_command_builder;
    /** Name of Namespace. */
    namespaceName(value: string): az_relay_hyco_authorization_rule_keys_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_relay_hyco_authorization_rule_keys_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_relay_hyco_authorization_rule_keys_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_relay_hyco_authorization_rule_keys_list_command_builder;
}
/**
 * Regenerate keys of Authorization Rule for Relay Service Hybrid Connection.
 *
 * Syntax:
 * ```
 * az relay hyco authorization-rule keys renew --key {PrimaryKey, SecondaryKey}
 *                                             [--hybrid-connection-name]
 *                                             [--ids]
 *                                             [--key-value]
 *                                             [--name]
 *                                             [--namespace-name]
 *                                             [--resource-group]
 *                                             [--subscription]
 * ```
 *
 * @param {'PrimaryKey' | 'SecondaryKey'} key Specifies Primary or Secondary key needs to be reset.
 */
declare class az_relay_hyco_authorization_rule_keys_renew_command_builder extends CommandBuilder<az_relay_hyco_authorization_rule_keys_renew_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, key: 'PrimaryKey' | 'SecondaryKey');
    /** Specifies Primary or Secondary key needs to be reset. */
    key(value: 'PrimaryKey' | 'SecondaryKey'): az_relay_hyco_authorization_rule_keys_renew_command_builder;
    /** Name of Hybrid Connection. */
    hybridConnectionName(value: string): az_relay_hyco_authorization_rule_keys_renew_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_relay_hyco_authorization_rule_keys_renew_command_builder;
    /** Optional, if the key value provided, is set for KeyType or autogenerated Key value set for keyType. */
    keyValue(value: string): az_relay_hyco_authorization_rule_keys_renew_command_builder;
    /** Name of Hybrid Connection Authorization Rule. */
    name(value: string): az_relay_hyco_authorization_rule_keys_renew_command_builder;
    /** Name of Namespace. */
    namespaceName(value: string): az_relay_hyco_authorization_rule_keys_renew_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_relay_hyco_authorization_rule_keys_renew_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_relay_hyco_authorization_rule_keys_renew_command_builder;
}
/**
 * Create Authorization Rule for given Relay Service Hybrid Connection.
 *
 * Syntax:
 * ```
 * az relay hyco authorization-rule create --hybrid-connection-name
 *                                         --name
 *                                         --namespace-name
 *                                         --resource-group
 *                                         [--rights {Listen, Manage, Send}]
 *                                         [--subscription]
 * ```
 *
 * @param {string} hybridConnectionName Name of Hybrid Connection.
 * @param {string} name Name of Hybrid Connection Authorization Rule.
 * @param {string} namespaceName Name of Namespace.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_relay_hyco_authorization_rule_create_command_builder extends CommandBuilder<az_relay_hyco_authorization_rule_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, hybridConnectionName: string, name: string, namespaceName: string, resourceGroup: string);
    /** Name of Hybrid Connection. */
    hybridConnectionName(value: string): az_relay_hyco_authorization_rule_create_command_builder;
    /** Name of Hybrid Connection Authorization Rule. */
    name(value: string): az_relay_hyco_authorization_rule_create_command_builder;
    /** Name of Namespace. */
    namespaceName(value: string): az_relay_hyco_authorization_rule_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_relay_hyco_authorization_rule_create_command_builder;
    /** Space-separated list of Authorization rule rights. */
    rights(value: 'Listen' | 'Manage' | 'Send'): az_relay_hyco_authorization_rule_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_relay_hyco_authorization_rule_create_command_builder;
}
/**
 * Deletes the Authorization Rule of the given Relay Service Hybrid Connection.
 *
 * Syntax:
 * ```
 * az relay hyco authorization-rule delete [--hybrid-connection-name]
 *                                         [--ids]
 *                                         [--name]
 *                                         [--namespace-name]
 *                                         [--resource-group]
 *                                         [--subscription]
 * ```
 */
declare class az_relay_hyco_authorization_rule_delete_command_builder extends CommandBuilder<az_relay_hyco_authorization_rule_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Name of Hybrid Connection. */
    hybridConnectionName(value: string): az_relay_hyco_authorization_rule_delete_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_relay_hyco_authorization_rule_delete_command_builder;
    /** Name of Hybrid Connection Authorization Rule. */
    name(value: string): az_relay_hyco_authorization_rule_delete_command_builder;
    /** Name of Namespace. */
    namespaceName(value: string): az_relay_hyco_authorization_rule_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_relay_hyco_authorization_rule_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_relay_hyco_authorization_rule_delete_command_builder;
}
/**
 * Shows list of Authorization Rule by Relay Service Hybrid Connection.
 *
 * Syntax:
 * ```
 * az relay hyco authorization-rule list --hybrid-connection-name
 *                                       --namespace-name
 *                                       --resource-group
 *                                       [--query-examples]
 *                                       [--subscription]
 * ```
 *
 * @param {string} hybridConnectionName Name of Hybrid Connection.
 * @param {string} namespaceName Name of Namespace.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_relay_hyco_authorization_rule_list_command_builder extends CommandBuilder<az_relay_hyco_authorization_rule_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, hybridConnectionName: string, namespaceName: string, resourceGroup: string);
    /** Name of Hybrid Connection. */
    hybridConnectionName(value: string): az_relay_hyco_authorization_rule_list_command_builder;
    /** Name of Namespace. */
    namespaceName(value: string): az_relay_hyco_authorization_rule_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_relay_hyco_authorization_rule_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_relay_hyco_authorization_rule_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_relay_hyco_authorization_rule_list_command_builder;
}
/**
 * Shows the details of Authorization Rule for given Relay Service Hybrid Connection.
 *
 * Syntax:
 * ```
 * az relay hyco authorization-rule show [--hybrid-connection-name]
 *                                       [--ids]
 *                                       [--name]
 *                                       [--namespace-name]
 *                                       [--query-examples]
 *                                       [--resource-group]
 *                                       [--subscription]
 * ```
 */
declare class az_relay_hyco_authorization_rule_show_command_builder extends CommandBuilder<az_relay_hyco_authorization_rule_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Name of Hybrid Connection. */
    hybridConnectionName(value: string): az_relay_hyco_authorization_rule_show_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_relay_hyco_authorization_rule_show_command_builder;
    /** Name of Hybrid Connection Authorization Rule. */
    name(value: string): az_relay_hyco_authorization_rule_show_command_builder;
    /** Name of Namespace. */
    namespaceName(value: string): az_relay_hyco_authorization_rule_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_relay_hyco_authorization_rule_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_relay_hyco_authorization_rule_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_relay_hyco_authorization_rule_show_command_builder;
}
/**
 * Create Authorization Rule for given Relay Service Hybrid Connection.
 *
 * Syntax:
 * ```
 * az relay hyco authorization-rule update --rights {Listen, Manage, Send}
 *                                         [--add]
 *                                         [--force-string]
 *                                         [--hybrid-connection-name]
 *                                         [--ids]
 *                                         [--name]
 *                                         [--namespace-name]
 *                                         [--remove]
 *                                         [--resource-group]
 *                                         [--set]
 *                                         [--subscription]
 * ```
 *
 * @param {'Listen' | 'Manage' | 'Send'} rights Space-separated list of Authorization rule rights.
 */
declare class az_relay_hyco_authorization_rule_update_command_builder extends CommandBuilder<az_relay_hyco_authorization_rule_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, rights: 'Listen' | 'Manage' | 'Send');
    /** Space-separated list of Authorization rule rights. */
    rights(value: 'Listen' | 'Manage' | 'Send'): az_relay_hyco_authorization_rule_update_command_builder;
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_relay_hyco_authorization_rule_update_command_builder;
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_relay_hyco_authorization_rule_update_command_builder;
    /** Name of Hybrid Connection. */
    hybridConnectionName(value: string): az_relay_hyco_authorization_rule_update_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_relay_hyco_authorization_rule_update_command_builder;
    /** Name of Hybrid Connection Authorization Rule. */
    name(value: string): az_relay_hyco_authorization_rule_update_command_builder;
    /** Name of Namespace. */
    namespaceName(value: string): az_relay_hyco_authorization_rule_update_command_builder;
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_relay_hyco_authorization_rule_update_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_relay_hyco_authorization_rule_update_command_builder;
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_relay_hyco_authorization_rule_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_relay_hyco_authorization_rule_update_command_builder;
}
/**
 * Create the Relay Service Hybrid Connection.
 *
 * Syntax:
 * ```
 * az relay hyco create --name
 *                      --namespace-name
 *                      --resource-group
 *                      [--requires-client-authorization {false, true}]
 *                      [--subscription]
 *                      [--user-metadata]
 * ```
 *
 * @param {string} name Name of Hybrid Connection.
 * @param {string} namespaceName Name of Namespace.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_relay_hyco_create_command_builder extends CommandBuilder<az_relay_hyco_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, namespaceName: string, resourceGroup: string);
    /** Name of Hybrid Connection. */
    name(value: string): az_relay_hyco_create_command_builder;
    /** Name of Namespace. */
    namespaceName(value: string): az_relay_hyco_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_relay_hyco_create_command_builder;
    /** Indicates whether client authorization is required. */
    requiresClientAuthorization(value: boolean): az_relay_hyco_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_relay_hyco_create_command_builder;
    /** Endpoint metadata. */
    userMetadata(value: string): az_relay_hyco_create_command_builder;
}
/**
 * Deletes the Relay Service Hybrid Connection.
 *
 * Syntax:
 * ```
 * az relay hyco delete [--ids]
 *                      [--name]
 *                      [--namespace-name]
 *                      [--resource-group]
 *                      [--subscription]
 * ```
 */
declare class az_relay_hyco_delete_command_builder extends CommandBuilder<az_relay_hyco_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_relay_hyco_delete_command_builder;
    /** Name of Hybrid Connection. */
    name(value: string): az_relay_hyco_delete_command_builder;
    /** Name of Namespace. */
    namespaceName(value: string): az_relay_hyco_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_relay_hyco_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_relay_hyco_delete_command_builder;
}
/**
 * List the Hybrid Connection by Relay Service Namepsace.
 *
 * Syntax:
 * ```
 * az relay hyco list --namespace-name
 *                    --resource-group
 *                    [--query-examples]
 *                    [--subscription]
 * ```
 *
 * @param {string} namespaceName Name of Namespace.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_relay_hyco_list_command_builder extends CommandBuilder<az_relay_hyco_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, namespaceName: string, resourceGroup: string);
    /** Name of Namespace. */
    namespaceName(value: string): az_relay_hyco_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_relay_hyco_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_relay_hyco_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_relay_hyco_list_command_builder;
}
/**
 * Shows the Relay Service Hybrid Connection Details.
 *
 * Syntax:
 * ```
 * az relay hyco show [--ids]
 *                    [--name]
 *                    [--namespace-name]
 *                    [--query-examples]
 *                    [--resource-group]
 *                    [--subscription]
 * ```
 */
declare class az_relay_hyco_show_command_builder extends CommandBuilder<az_relay_hyco_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_relay_hyco_show_command_builder;
    /** Name of Hybrid Connection. */
    name(value: string): az_relay_hyco_show_command_builder;
    /** Name of Namespace. */
    namespaceName(value: string): az_relay_hyco_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_relay_hyco_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_relay_hyco_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_relay_hyco_show_command_builder;
}
/**
 * Updates the Relay Service Hybrid Connection.
 *
 * Syntax:
 * ```
 * az relay hyco update [--add]
 *                      [--force-string]
 *                      [--ids]
 *                      [--name]
 *                      [--namespace-name]
 *                      [--remove]
 *                      [--requires-client-authorization {false, true}]
 *                      [--resource-group]
 *                      [--set]
 *                      [--status {Active, Disabled, ReceiveDisabled, SendDisabled}]
 *                      [--subscription]
 *                      [--user-metadata]
 * ```
 */
declare class az_relay_hyco_update_command_builder extends CommandBuilder<az_relay_hyco_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_relay_hyco_update_command_builder;
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_relay_hyco_update_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_relay_hyco_update_command_builder;
    /** Name of Hybrid Connection. */
    name(value: string): az_relay_hyco_update_command_builder;
    /** Name of Namespace. */
    namespaceName(value: string): az_relay_hyco_update_command_builder;
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_relay_hyco_update_command_builder;
    /** Indicates whether client authorization is required. */
    requiresClientAuthorization(value: boolean): az_relay_hyco_update_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_relay_hyco_update_command_builder;
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_relay_hyco_update_command_builder;
    /** Enumerates the possible values for the status of a messaging entity. */
    status(value: 'Active' | 'Disabled' | 'ReceiveDisabled' | 'SendDisabled'): az_relay_hyco_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_relay_hyco_update_command_builder;
    /** Endpoint metadata. */
    userMetadata(value: string): az_relay_hyco_update_command_builder;
}
/**
 * List the keys and connection strings of Authorization Rule for Relay Service Namespace.
 *
 * Syntax:
 * ```
 * az relay namespace authorization-rule keys list --name
 *                                                 --namespace-name
 *                                                 --resource-group
 *                                                 [--query-examples]
 *                                                 [--subscription]
 * ```
 *
 * @param {string} name Name of Namespace Authorization Rule.
 * @param {string} namespaceName Name of Namespace.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_relay_namespace_authorization_rule_keys_list_command_builder extends CommandBuilder<az_relay_namespace_authorization_rule_keys_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, namespaceName: string, resourceGroup: string);
    /** Name of Namespace Authorization Rule. */
    name(value: string): az_relay_namespace_authorization_rule_keys_list_command_builder;
    /** Name of Namespace. */
    namespaceName(value: string): az_relay_namespace_authorization_rule_keys_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_relay_namespace_authorization_rule_keys_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_relay_namespace_authorization_rule_keys_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_relay_namespace_authorization_rule_keys_list_command_builder;
}
/**
 * Regenerate keys of Authorization Rule for the Relay Service Namespace.
 *
 * Syntax:
 * ```
 * az relay namespace authorization-rule keys renew --key {PrimaryKey, SecondaryKey}
 *                                                  [--ids]
 *                                                  [--key-value]
 *                                                  [--name]
 *                                                  [--namespace-name]
 *                                                  [--resource-group]
 *                                                  [--subscription]
 * ```
 *
 * @param {'PrimaryKey' | 'SecondaryKey'} key Specifies Primary or Secondary key needs to be reset.
 */
declare class az_relay_namespace_authorization_rule_keys_renew_command_builder extends CommandBuilder<az_relay_namespace_authorization_rule_keys_renew_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, key: 'PrimaryKey' | 'SecondaryKey');
    /** Specifies Primary or Secondary key needs to be reset. */
    key(value: 'PrimaryKey' | 'SecondaryKey'): az_relay_namespace_authorization_rule_keys_renew_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_relay_namespace_authorization_rule_keys_renew_command_builder;
    /** Optional, if the key value provided, is set for KeyType or autogenerated Key value set for keyType. */
    keyValue(value: string): az_relay_namespace_authorization_rule_keys_renew_command_builder;
    /** Name of Namespace Authorization Rule. */
    name(value: string): az_relay_namespace_authorization_rule_keys_renew_command_builder;
    /** Name of Namespace. */
    namespaceName(value: string): az_relay_namespace_authorization_rule_keys_renew_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_relay_namespace_authorization_rule_keys_renew_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_relay_namespace_authorization_rule_keys_renew_command_builder;
}
/**
 * Create Authorization Rule for the given Relay Service Namespace.
 *
 * Syntax:
 * ```
 * az relay namespace authorization-rule create --name
 *                                              --namespace-name
 *                                              --resource-group
 *                                              [--rights {Listen, Manage, Send}]
 *                                              [--subscription]
 * ```
 *
 * @param {string} name Name of Namespace Authorization Rule.
 * @param {string} namespaceName Name of Namespace.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_relay_namespace_authorization_rule_create_command_builder extends CommandBuilder<az_relay_namespace_authorization_rule_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, namespaceName: string, resourceGroup: string);
    /** Name of Namespace Authorization Rule. */
    name(value: string): az_relay_namespace_authorization_rule_create_command_builder;
    /** Name of Namespace. */
    namespaceName(value: string): az_relay_namespace_authorization_rule_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_relay_namespace_authorization_rule_create_command_builder;
    /** Space-separated list of Authorization rule rights. */
    rights(value: 'Listen' | 'Manage' | 'Send'): az_relay_namespace_authorization_rule_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_relay_namespace_authorization_rule_create_command_builder;
}
/**
 * Deletes the Authorization Rule of the Relay Service Namespace.
 *
 * Syntax:
 * ```
 * az relay namespace authorization-rule delete [--ids]
 *                                              [--name]
 *                                              [--namespace-name]
 *                                              [--resource-group]
 *                                              [--subscription]
 * ```
 */
declare class az_relay_namespace_authorization_rule_delete_command_builder extends CommandBuilder<az_relay_namespace_authorization_rule_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_relay_namespace_authorization_rule_delete_command_builder;
    /** Name of Namespace Authorization Rule. */
    name(value: string): az_relay_namespace_authorization_rule_delete_command_builder;
    /** Name of Namespace. */
    namespaceName(value: string): az_relay_namespace_authorization_rule_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_relay_namespace_authorization_rule_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_relay_namespace_authorization_rule_delete_command_builder;
}
/**
 * Shows the list of Authorization Rule by Relay Service Namespace.
 *
 * Syntax:
 * ```
 * az relay namespace authorization-rule list --namespace-name
 *                                            --resource-group
 *                                            [--query-examples]
 *                                            [--subscription]
 * ```
 *
 * @param {string} namespaceName Name of the Namespace.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_relay_namespace_authorization_rule_list_command_builder extends CommandBuilder<az_relay_namespace_authorization_rule_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, namespaceName: string, resourceGroup: string);
    /** Name of the Namespace. */
    namespaceName(value: string): az_relay_namespace_authorization_rule_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_relay_namespace_authorization_rule_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_relay_namespace_authorization_rule_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_relay_namespace_authorization_rule_list_command_builder;
}
/**
 * Shows the details of Relay Service Namespace Authorization Rule.
 *
 * Syntax:
 * ```
 * az relay namespace authorization-rule show [--ids]
 *                                            [--name]
 *                                            [--namespace-name]
 *                                            [--query-examples]
 *                                            [--resource-group]
 *                                            [--subscription]
 * ```
 */
declare class az_relay_namespace_authorization_rule_show_command_builder extends CommandBuilder<az_relay_namespace_authorization_rule_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_relay_namespace_authorization_rule_show_command_builder;
    /** Name of Namespace Authorization Rule. */
    name(value: string): az_relay_namespace_authorization_rule_show_command_builder;
    /** Name of Namespace. */
    namespaceName(value: string): az_relay_namespace_authorization_rule_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_relay_namespace_authorization_rule_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_relay_namespace_authorization_rule_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_relay_namespace_authorization_rule_show_command_builder;
}
/**
 * Updates Authorization Rule for the given Relay Service Namespace.
 *
 * Syntax:
 * ```
 * az relay namespace authorization-rule update --rights {Listen, Manage, Send}
 *                                              [--add]
 *                                              [--force-string]
 *                                              [--ids]
 *                                              [--name]
 *                                              [--namespace-name]
 *                                              [--remove]
 *                                              [--resource-group]
 *                                              [--set]
 *                                              [--subscription]
 * ```
 *
 * @param {'Listen' | 'Manage' | 'Send'} rights Space-separated list of Authorization rule rights.
 */
declare class az_relay_namespace_authorization_rule_update_command_builder extends CommandBuilder<az_relay_namespace_authorization_rule_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, rights: 'Listen' | 'Manage' | 'Send');
    /** Space-separated list of Authorization rule rights. */
    rights(value: 'Listen' | 'Manage' | 'Send'): az_relay_namespace_authorization_rule_update_command_builder;
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_relay_namespace_authorization_rule_update_command_builder;
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_relay_namespace_authorization_rule_update_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_relay_namespace_authorization_rule_update_command_builder;
    /** Name of Namespace Authorization Rule. */
    name(value: string): az_relay_namespace_authorization_rule_update_command_builder;
    /** Name of Namespace. */
    namespaceName(value: string): az_relay_namespace_authorization_rule_update_command_builder;
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_relay_namespace_authorization_rule_update_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_relay_namespace_authorization_rule_update_command_builder;
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_relay_namespace_authorization_rule_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_relay_namespace_authorization_rule_update_command_builder;
}
/**
 * Create a Relay Service Namespace.
 *
 * Syntax:
 * ```
 * az relay namespace create --name
 *                           --resource-group
 *                           [--location]
 *                           [--subscription]
 *                           [--tags]
 * ```
 *
 * @param {string} name Name of Namespace.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_relay_namespace_create_command_builder extends CommandBuilder<az_relay_namespace_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** Name of Namespace. */
    name(value: string): az_relay_namespace_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_relay_namespace_create_command_builder;
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_relay_namespace_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_relay_namespace_create_command_builder;
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_relay_namespace_create_command_builder;
}
/**
 * Deletes the Relay Service Namespace.
 *
 * Syntax:
 * ```
 * az relay namespace delete [--ids]
 *                           [--name]
 *                           [--resource-group]
 *                           [--subscription]
 * ```
 */
declare class az_relay_namespace_delete_command_builder extends CommandBuilder<az_relay_namespace_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_relay_namespace_delete_command_builder;
    /** Name of Namespace. */
    name(value: string): az_relay_namespace_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_relay_namespace_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_relay_namespace_delete_command_builder;
}
/**
 * Check for the availability of the given name for the Namespace.
 *
 * Syntax:
 * ```
 * az relay namespace exists --name
 *                           [--subscription]
 * ```
 *
 * @param {string} name Namespace name. Name can contain only letters, numbers, and hyphens. The namespace must start with a letter, and it must end with a letter or number.
 */
declare class az_relay_namespace_exists_command_builder extends CommandBuilder<az_relay_namespace_exists_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** Namespace name. Name can contain only letters, numbers, and hyphens. The namespace must start with a letter, and it must end with a letter or number. */
    name(value: string): az_relay_namespace_exists_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_relay_namespace_exists_command_builder;
}
/**
 * List the Relay Service Namespaces.
 *
 * Syntax:
 * ```
 * az relay namespace list [--query-examples]
 *                         [--resource-group]
 *                         [--subscription]
 * ```
 */
declare class az_relay_namespace_list_command_builder extends CommandBuilder<az_relay_namespace_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_relay_namespace_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_relay_namespace_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_relay_namespace_list_command_builder;
}
/**
 * Shows the Relay Service Namespace details.
 *
 * Syntax:
 * ```
 * az relay namespace show [--ids]
 *                         [--name]
 *                         [--query-examples]
 *                         [--resource-group]
 *                         [--subscription]
 * ```
 */
declare class az_relay_namespace_show_command_builder extends CommandBuilder<az_relay_namespace_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_relay_namespace_show_command_builder;
    /** Name of Namespace. */
    name(value: string): az_relay_namespace_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_relay_namespace_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_relay_namespace_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_relay_namespace_show_command_builder;
}
/**
 * Updates a Relay Service Namespace.
 *
 * Syntax:
 * ```
 * az relay namespace update [--add]
 *                           [--force-string]
 *                           [--ids]
 *                           [--name]
 *                           [--remove]
 *                           [--resource-group]
 *                           [--set]
 *                           [--subscription]
 *                           [--tags]
 * ```
 */
declare class az_relay_namespace_update_command_builder extends CommandBuilder<az_relay_namespace_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_relay_namespace_update_command_builder;
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_relay_namespace_update_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_relay_namespace_update_command_builder;
    /** Name of Namespace. */
    name(value: string): az_relay_namespace_update_command_builder;
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_relay_namespace_update_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_relay_namespace_update_command_builder;
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_relay_namespace_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_relay_namespace_update_command_builder;
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_relay_namespace_update_command_builder;
}
/**
 * List the keys and connection strings of Authorization Rule for the given Relay Service WCF Relay.
 *
 * Syntax:
 * ```
 * az relay wcfrelay authorization-rule keys list --name
 *                                                --namespace-name
 *                                                --relay-name
 *                                                --resource-group
 *                                                [--query-examples]
 *                                                [--subscription]
 * ```
 *
 * @param {string} name Name of WCF Relay Authorization Rule.
 * @param {string} namespaceName Name of Namespace.
 * @param {string} relayName Name of WCF Relay.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_relay_wcfrelay_authorization_rule_keys_list_command_builder extends CommandBuilder<az_relay_wcfrelay_authorization_rule_keys_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, namespaceName: string, relayName: string, resourceGroup: string);
    /** Name of WCF Relay Authorization Rule. */
    name(value: string): az_relay_wcfrelay_authorization_rule_keys_list_command_builder;
    /** Name of Namespace. */
    namespaceName(value: string): az_relay_wcfrelay_authorization_rule_keys_list_command_builder;
    /** Name of WCF Relay. */
    relayName(value: string): az_relay_wcfrelay_authorization_rule_keys_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_relay_wcfrelay_authorization_rule_keys_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_relay_wcfrelay_authorization_rule_keys_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_relay_wcfrelay_authorization_rule_keys_list_command_builder;
}
/**
 * Regenerate keys of Authorization Rule for Relay Service WCF Relay.
 *
 * Syntax:
 * ```
 * az relay wcfrelay authorization-rule keys renew --key {PrimaryKey, SecondaryKey}
 *                                                 [--ids]
 *                                                 [--key-value]
 *                                                 [--name]
 *                                                 [--namespace-name]
 *                                                 [--relay-name]
 *                                                 [--resource-group]
 *                                                 [--subscription]
 * ```
 *
 * @param {'PrimaryKey' | 'SecondaryKey'} key Specifies Primary or Secondary key needs to be reset.
 */
declare class az_relay_wcfrelay_authorization_rule_keys_renew_command_builder extends CommandBuilder<az_relay_wcfrelay_authorization_rule_keys_renew_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, key: 'PrimaryKey' | 'SecondaryKey');
    /** Specifies Primary or Secondary key needs to be reset. */
    key(value: 'PrimaryKey' | 'SecondaryKey'): az_relay_wcfrelay_authorization_rule_keys_renew_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_relay_wcfrelay_authorization_rule_keys_renew_command_builder;
    /** Optional, if the key value provided, is set for KeyType or autogenerated Key value set for keyType. */
    keyValue(value: string): az_relay_wcfrelay_authorization_rule_keys_renew_command_builder;
    /** Name of WCF Relay Authorization Rule. */
    name(value: string): az_relay_wcfrelay_authorization_rule_keys_renew_command_builder;
    /** Name of Namespace. */
    namespaceName(value: string): az_relay_wcfrelay_authorization_rule_keys_renew_command_builder;
    /** Name of WCF Relay. */
    relayName(value: string): az_relay_wcfrelay_authorization_rule_keys_renew_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_relay_wcfrelay_authorization_rule_keys_renew_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_relay_wcfrelay_authorization_rule_keys_renew_command_builder;
}
/**
 * Create Authorization Rule for the given Relay Service WCF Relay.
 *
 * Syntax:
 * ```
 * az relay wcfrelay authorization-rule create --name
 *                                             --namespace-name
 *                                             --relay-name
 *                                             --resource-group
 *                                             [--rights {Listen, Manage, Send}]
 *                                             [--subscription]
 * ```
 *
 * @param {string} name Name of WCF Relay Authorization Rule.
 * @param {string} namespaceName Name of Namespace.
 * @param {string} relayName Name of WCF Relay.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_relay_wcfrelay_authorization_rule_create_command_builder extends CommandBuilder<az_relay_wcfrelay_authorization_rule_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, namespaceName: string, relayName: string, resourceGroup: string);
    /** Name of WCF Relay Authorization Rule. */
    name(value: string): az_relay_wcfrelay_authorization_rule_create_command_builder;
    /** Name of Namespace. */
    namespaceName(value: string): az_relay_wcfrelay_authorization_rule_create_command_builder;
    /** Name of WCF Relay. */
    relayName(value: string): az_relay_wcfrelay_authorization_rule_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_relay_wcfrelay_authorization_rule_create_command_builder;
    /** Space-separated list of Authorization rule rights. */
    rights(value: 'Listen' | 'Manage' | 'Send'): az_relay_wcfrelay_authorization_rule_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_relay_wcfrelay_authorization_rule_create_command_builder;
}
/**
 * Delete the Authorization Rule of Relay Service WCF Relay.
 *
 * Syntax:
 * ```
 * az relay wcfrelay authorization-rule delete [--ids]
 *                                             [--name]
 *                                             [--namespace-name]
 *                                             [--relay-name]
 *                                             [--resource-group]
 *                                             [--subscription]
 * ```
 */
declare class az_relay_wcfrelay_authorization_rule_delete_command_builder extends CommandBuilder<az_relay_wcfrelay_authorization_rule_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_relay_wcfrelay_authorization_rule_delete_command_builder;
    /** Name of WCF Relay Authorization Rule. */
    name(value: string): az_relay_wcfrelay_authorization_rule_delete_command_builder;
    /** Name of Namespace. */
    namespaceName(value: string): az_relay_wcfrelay_authorization_rule_delete_command_builder;
    /** Name of WCF Relay. */
    relayName(value: string): az_relay_wcfrelay_authorization_rule_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_relay_wcfrelay_authorization_rule_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_relay_wcfrelay_authorization_rule_delete_command_builder;
}
/**
 * List of Authorization Rule by Relay Service WCF Relay.
 *
 * Syntax:
 * ```
 * az relay wcfrelay authorization-rule list --namespace-name
 *                                           --relay-name
 *                                           --resource-group
 *                                           [--query-examples]
 *                                           [--subscription]
 * ```
 *
 * @param {string} namespaceName Name of Namespace.
 * @param {string} relayName Name of WCF Relay.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_relay_wcfrelay_authorization_rule_list_command_builder extends CommandBuilder<az_relay_wcfrelay_authorization_rule_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, namespaceName: string, relayName: string, resourceGroup: string);
    /** Name of Namespace. */
    namespaceName(value: string): az_relay_wcfrelay_authorization_rule_list_command_builder;
    /** Name of WCF Relay. */
    relayName(value: string): az_relay_wcfrelay_authorization_rule_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_relay_wcfrelay_authorization_rule_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_relay_wcfrelay_authorization_rule_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_relay_wcfrelay_authorization_rule_list_command_builder;
}
/**
 * Show properties of Authorization Rule for the given Relay Service WCF Relay.
 *
 * Syntax:
 * ```
 * az relay wcfrelay authorization-rule show [--ids]
 *                                           [--name]
 *                                           [--namespace-name]
 *                                           [--query-examples]
 *                                           [--relay-name]
 *                                           [--resource-group]
 *                                           [--subscription]
 * ```
 */
declare class az_relay_wcfrelay_authorization_rule_show_command_builder extends CommandBuilder<az_relay_wcfrelay_authorization_rule_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_relay_wcfrelay_authorization_rule_show_command_builder;
    /** Name of WCF Relay Authorization Rule. */
    name(value: string): az_relay_wcfrelay_authorization_rule_show_command_builder;
    /** Name of Namespace. */
    namespaceName(value: string): az_relay_wcfrelay_authorization_rule_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_relay_wcfrelay_authorization_rule_show_command_builder;
    /** Name of WCF Relay. */
    relayName(value: string): az_relay_wcfrelay_authorization_rule_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_relay_wcfrelay_authorization_rule_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_relay_wcfrelay_authorization_rule_show_command_builder;
}
/**
 * Update Authorization Rule for the given Relay Service WCF Relay.
 *
 * Syntax:
 * ```
 * az relay wcfrelay authorization-rule update --rights {Listen, Manage, Send}
 *                                             [--add]
 *                                             [--force-string]
 *                                             [--ids]
 *                                             [--name]
 *                                             [--namespace-name]
 *                                             [--relay-name]
 *                                             [--remove]
 *                                             [--resource-group]
 *                                             [--set]
 *                                             [--subscription]
 * ```
 *
 * @param {'Listen' | 'Manage' | 'Send'} rights Space-separated list of Authorization rule rights.
 */
declare class az_relay_wcfrelay_authorization_rule_update_command_builder extends CommandBuilder<az_relay_wcfrelay_authorization_rule_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, rights: 'Listen' | 'Manage' | 'Send');
    /** Space-separated list of Authorization rule rights. */
    rights(value: 'Listen' | 'Manage' | 'Send'): az_relay_wcfrelay_authorization_rule_update_command_builder;
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_relay_wcfrelay_authorization_rule_update_command_builder;
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_relay_wcfrelay_authorization_rule_update_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_relay_wcfrelay_authorization_rule_update_command_builder;
    /** Name of WCF Relay Authorization Rule. */
    name(value: string): az_relay_wcfrelay_authorization_rule_update_command_builder;
    /** Name of Namespace. */
    namespaceName(value: string): az_relay_wcfrelay_authorization_rule_update_command_builder;
    /** Name of WCF Relay. */
    relayName(value: string): az_relay_wcfrelay_authorization_rule_update_command_builder;
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_relay_wcfrelay_authorization_rule_update_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_relay_wcfrelay_authorization_rule_update_command_builder;
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_relay_wcfrelay_authorization_rule_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_relay_wcfrelay_authorization_rule_update_command_builder;
}
/**
 * Create the Relay Service WCF Relay.
 *
 * Syntax:
 * ```
 * az relay wcfrelay create --name
 *                          --namespace-name
 *                          --relay-type {Http, NetTcp}
 *                          --resource-group
 *                          [--requires-client-authorization {false, true}]
 *                          [--requires-transport-security {false, true}]
 *                          [--subscription]
 *                          [--user-metadata]
 * ```
 *
 * @param {string} name Name of WCF Relay.
 * @param {string} namespaceName Name of Namespace.
 * @param {'Http' | 'NetTcp'} relayType Relay type.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_relay_wcfrelay_create_command_builder extends CommandBuilder<az_relay_wcfrelay_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, namespaceName: string, relayType: 'Http' | 'NetTcp', resourceGroup: string);
    /** Name of WCF Relay. */
    name(value: string): az_relay_wcfrelay_create_command_builder;
    /** Name of Namespace. */
    namespaceName(value: string): az_relay_wcfrelay_create_command_builder;
    /** Relay type. */
    relayType(value: 'Http' | 'NetTcp'): az_relay_wcfrelay_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_relay_wcfrelay_create_command_builder;
    /** Indicates whether client authorization is required. */
    requiresClientAuthorization(value: boolean): az_relay_wcfrelay_create_command_builder;
    /** Indicates whether transport security is required. */
    requiresTransportSecurity(value: boolean): az_relay_wcfrelay_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_relay_wcfrelay_create_command_builder;
    /** Endpoint metadata. */
    userMetadata(value: string): az_relay_wcfrelay_create_command_builder;
}
/**
 * Deletes the Relay Service WCF Relay.
 *
 * Syntax:
 * ```
 * az relay wcfrelay delete [--ids]
 *                          [--name]
 *                          [--namespace-name]
 *                          [--resource-group]
 *                          [--subscription]
 * ```
 */
declare class az_relay_wcfrelay_delete_command_builder extends CommandBuilder<az_relay_wcfrelay_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_relay_wcfrelay_delete_command_builder;
    /** Name of WCF Relay. */
    name(value: string): az_relay_wcfrelay_delete_command_builder;
    /** Name of Namespace. */
    namespaceName(value: string): az_relay_wcfrelay_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_relay_wcfrelay_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_relay_wcfrelay_delete_command_builder;
}
/**
 * List the WCF Relay by Relay Service Namepsace.
 *
 * Syntax:
 * ```
 * az relay wcfrelay list --namespace-name
 *                        --resource-group
 *                        [--query-examples]
 *                        [--subscription]
 * ```
 *
 * @param {string} namespaceName Name of Namespace.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_relay_wcfrelay_list_command_builder extends CommandBuilder<az_relay_wcfrelay_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, namespaceName: string, resourceGroup: string);
    /** Name of Namespace. */
    namespaceName(value: string): az_relay_wcfrelay_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_relay_wcfrelay_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_relay_wcfrelay_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_relay_wcfrelay_list_command_builder;
}
/**
 * Shows the Relay Service WCF Relay Details.
 *
 * Syntax:
 * ```
 * az relay wcfrelay show [--ids]
 *                        [--name]
 *                        [--namespace-name]
 *                        [--query-examples]
 *                        [--resource-group]
 *                        [--subscription]
 * ```
 */
declare class az_relay_wcfrelay_show_command_builder extends CommandBuilder<az_relay_wcfrelay_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_relay_wcfrelay_show_command_builder;
    /** Name of WCF Relay. */
    name(value: string): az_relay_wcfrelay_show_command_builder;
    /** Name of Namespace. */
    namespaceName(value: string): az_relay_wcfrelay_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_relay_wcfrelay_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_relay_wcfrelay_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_relay_wcfrelay_show_command_builder;
}
/**
 * Updates existing Relay Service WCF Relay.
 *
 * Syntax:
 * ```
 * az relay wcfrelay update [--add]
 *                          [--force-string]
 *                          [--ids]
 *                          [--name]
 *                          [--namespace-name]
 *                          [--relay-type {Http, NetTcp}]
 *                          [--remove]
 *                          [--resource-group]
 *                          [--set]
 *                          [--status {Active, Disabled, ReceiveDisabled, SendDisabled}]
 *                          [--subscription]
 *                          [--user-metadata]
 * ```
 */
declare class az_relay_wcfrelay_update_command_builder extends CommandBuilder<az_relay_wcfrelay_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_relay_wcfrelay_update_command_builder;
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_relay_wcfrelay_update_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_relay_wcfrelay_update_command_builder;
    /** Name of WCF Relay. */
    name(value: string): az_relay_wcfrelay_update_command_builder;
    /** Name of Namespace. */
    namespaceName(value: string): az_relay_wcfrelay_update_command_builder;
    /** Relay type. */
    relayType(value: 'Http' | 'NetTcp'): az_relay_wcfrelay_update_command_builder;
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_relay_wcfrelay_update_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_relay_wcfrelay_update_command_builder;
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_relay_wcfrelay_update_command_builder;
    /** Enumerates the possible values for the status of a messaging entity. */
    status(value: 'Active' | 'Disabled' | 'ReceiveDisabled' | 'SendDisabled'): az_relay_wcfrelay_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_relay_wcfrelay_update_command_builder;
    /** Endpoint metadata. */
    userMetadata(value: string): az_relay_wcfrelay_update_command_builder;
}
export {};
