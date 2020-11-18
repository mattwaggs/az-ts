import { CommandBuilder } from '../base';
import { az_appconfig_credential_list_command_result } from './models/az_appconfig_credential_list_command_result';
import { az_appconfig_credential_regenerate_command_result } from './models/az_appconfig_credential_regenerate_command_result';
import { az_appconfig_feature_filter_add_command_result } from './models/az_appconfig_feature_filter_add_command_result';
import { az_appconfig_feature_filter_delete_command_result } from './models/az_appconfig_feature_filter_delete_command_result';
import { az_appconfig_feature_filter_list_command_result } from './models/az_appconfig_feature_filter_list_command_result';
import { az_appconfig_feature_filter_show_command_result } from './models/az_appconfig_feature_filter_show_command_result';
import { az_appconfig_feature_delete_command_result } from './models/az_appconfig_feature_delete_command_result';
import { az_appconfig_feature_disable_command_result } from './models/az_appconfig_feature_disable_command_result';
import { az_appconfig_feature_enable_command_result } from './models/az_appconfig_feature_enable_command_result';
import { az_appconfig_feature_list_command_result } from './models/az_appconfig_feature_list_command_result';
import { az_appconfig_feature_lock_command_result } from './models/az_appconfig_feature_lock_command_result';
import { az_appconfig_feature_set_command_result } from './models/az_appconfig_feature_set_command_result';
import { az_appconfig_feature_show_command_result } from './models/az_appconfig_feature_show_command_result';
import { az_appconfig_feature_unlock_command_result } from './models/az_appconfig_feature_unlock_command_result';
import { az_appconfig_identity_assign_command_result } from './models/az_appconfig_identity_assign_command_result';
import { az_appconfig_identity_remove_command_result } from './models/az_appconfig_identity_remove_command_result';
import { az_appconfig_identity_show_command_result } from './models/az_appconfig_identity_show_command_result';
import { az_appconfig_kv_delete_command_result } from './models/az_appconfig_kv_delete_command_result';
import { az_appconfig_kv_export_command_result } from './models/az_appconfig_kv_export_command_result';
import { az_appconfig_kv_import_command_result } from './models/az_appconfig_kv_import_command_result';
import { az_appconfig_kv_list_command_result } from './models/az_appconfig_kv_list_command_result';
import { az_appconfig_kv_lock_command_result } from './models/az_appconfig_kv_lock_command_result';
import { az_appconfig_kv_restore_command_result } from './models/az_appconfig_kv_restore_command_result';
import { az_appconfig_kv_set_command_result } from './models/az_appconfig_kv_set_command_result';
import { az_appconfig_kv_set_keyvault_command_result } from './models/az_appconfig_kv_set_keyvault_command_result';
import { az_appconfig_kv_show_command_result } from './models/az_appconfig_kv_show_command_result';
import { az_appconfig_kv_unlock_command_result } from './models/az_appconfig_kv_unlock_command_result';
import { az_appconfig_revision_list_command_result } from './models/az_appconfig_revision_list_command_result';
import { az_appconfig_create_command_result } from './models/az_appconfig_create_command_result';
import { az_appconfig_delete_command_result } from './models/az_appconfig_delete_command_result';
import { az_appconfig_list_command_result } from './models/az_appconfig_list_command_result';
import { az_appconfig_show_command_result } from './models/az_appconfig_show_command_result';
import { az_appconfig_update_command_result } from './models/az_appconfig_update_command_result';
/** Manage credentials for App Configurations. */
export declare class az_appconfig_credential {
    /**
     * List access keys of an App Configuration.
     *
     * Syntax:
     * ```
     * az appconfig credential list --name
     *                              [--query-examples]
     *                              [--resource-group]
     *                              [--subscription]
     * ```
     *
     * @param {string} name Name of the App Configuration. You can configure the default name using `az configure --defaults app_configuration_store=<name>`.
     */
    static list(name: string): az_appconfig_credential_list_command_builder;
    /**
     * Regenerate an access key for an App Configuration.
     *
     * Syntax:
     * ```
     * az appconfig credential regenerate --id
     *                                    --name
     *                                    [--resource-group]
     *                                    [--subscription]
     * ```
     *
     * @param {string} id Id of the key to be regenerated. Can be found using az appconfig credential list command.
     * @param {string} name Name of the App Configuration. You can configure the default name using `az configure --defaults app_configuration_store=<name>`.
     */
    static regenerate(id: string, name: string): az_appconfig_credential_regenerate_command_builder;
}
/** Manage filters associated with feature flags stored in an App Configuration. */
export declare class az_appconfig_feature_filter {
    /**
     * Add a filter to a feature flag.
     *
     * Syntax:
     * ```
     * az appconfig feature filter add --feature
     *                                 --filter-name
     *                                 [--auth-mode {key, login}]
     *                                 [--connection-string]
     *                                 [--endpoint]
     *                                 [--filter-parameters]
     *                                 [--index]
     *                                 [--label]
     *                                 [--name]
     *                                 [--subscription]
     *                                 [--yes]
     * ```
     *
     * @param {string} feature Name of the feature to which you want to add the filter.
     * @param {string} filterName Name of the filter to be added.
     */
    static add(feature: string, filterName: string): az_appconfig_feature_filter_add_command_builder;
    /**
     * Delete a filter from a feature flag.
     *
     * Syntax:
     * ```
     * az appconfig feature filter delete --feature
     *                                    [--all]
     *                                    [--auth-mode {key, login}]
     *                                    [--connection-string]
     *                                    [--endpoint]
     *                                    [--filter-name]
     *                                    [--index]
     *                                    [--label]
     *                                    [--name]
     *                                    [--subscription]
     *                                    [--yes]
     * ```
     *
     * @param {string} feature Name of the feature from which you want to delete the filter.
     */
    static delete(feature: string): az_appconfig_feature_filter_delete_command_builder;
    /**
     * List all filters for a feature flag.
     *
     * Syntax:
     * ```
     * az appconfig feature filter list --feature
     *                                  [--all]
     *                                  [--auth-mode {key, login}]
     *                                  [--connection-string]
     *                                  [--endpoint]
     *                                  [--label]
     *                                  [--name]
     *                                  [--query-examples]
     *                                  [--subscription]
     *                                  [--top]
     * ```
     *
     * @param {string} feature Name of the feature whose filters you want to be displayed.
     */
    static list(feature: string): az_appconfig_feature_filter_list_command_builder;
    /**
     * Show filters of a feature flag.
     *
     * Syntax:
     * ```
     * az appconfig feature filter show --feature
     *                                  --filter-name
     *                                  [--auth-mode {key, login}]
     *                                  [--connection-string]
     *                                  [--endpoint]
     *                                  [--index]
     *                                  [--label]
     *                                  [--name]
     *                                  [--query-examples]
     *                                  [--subscription]
     * ```
     *
     * @param {string} feature Name of the feature which contains the filter.
     * @param {string} filterName Name of the filter to be displayed.
     */
    static show(feature: string, filterName: string): az_appconfig_feature_filter_show_command_builder;
}
/** Manage feature flags stored in an App Configuration. */
export declare class az_appconfig_feature {
    /**
     * Delete feature flag.
     *
     * Syntax:
     * ```
     * az appconfig feature delete --feature
     *                             [--auth-mode {key, login}]
     *                             [--connection-string]
     *                             [--endpoint]
     *                             [--label]
     *                             [--name]
     *                             [--subscription]
     *                             [--yes]
     * ```
     *
     * @param {string} feature Key of the feature to be deleted. Support star sign as filters, for instance \* means all key and abc\* means keys with abc as prefix. Comma separated keys are not supported. Please provide escaped string if your feature name contains comma.
     */
    static delete(feature: string): az_appconfig_feature_delete_command_builder;
    /**
     * Disable a feature flag to turn it OFF for use.
     *
     * Syntax:
     * ```
     * az appconfig feature disable --feature
     *                              [--auth-mode {key, login}]
     *                              [--connection-string]
     *                              [--endpoint]
     *                              [--label]
     *                              [--name]
     *                              [--subscription]
     *                              [--yes]
     * ```
     *
     * @param {string} feature Key of the feature to be disabled.
     */
    static disable(feature: string): az_appconfig_feature_disable_command_builder;
    /**
     * Enable a feature flag to turn it ON for use.
     *
     * Syntax:
     * ```
     * az appconfig feature enable --feature
     *                             [--auth-mode {key, login}]
     *                             [--connection-string]
     *                             [--endpoint]
     *                             [--label]
     *                             [--name]
     *                             [--subscription]
     *                             [--yes]
     * ```
     *
     * @param {string} feature Key of the feature to be enabled.
     */
    static enable(feature: string): az_appconfig_feature_enable_command_builder;
    /**
     * List feature flags.
     *
     * Syntax:
     * ```
     * az appconfig feature list [--all]
     *                           [--auth-mode {key, login}]
     *                           [--connection-string]
     *                           [--endpoint]
     *                           [--feature]
     *                           [--fields {conditions, description, key, label, last_modified, locked, state}]
     *                           [--label]
     *                           [--name]
     *                           [--query-examples]
     *                           [--subscription]
     *                           [--top]
     * ```
     */
    static list(): az_appconfig_feature_list_command_builder;
    /**
     * Lock a feature flag to prohibit write operations.
     *
     * Syntax:
     * ```
     * az appconfig feature lock --feature
     *                           [--auth-mode {key, login}]
     *                           [--connection-string]
     *                           [--endpoint]
     *                           [--label]
     *                           [--name]
     *                           [--subscription]
     *                           [--yes]
     * ```
     *
     * @param {string} feature Key of the feature to be locked.
     */
    static lock(feature: string): az_appconfig_feature_lock_command_builder;
    /**
     * Set a feature flag.
     *
     * Syntax:
     * ```
     * az appconfig feature set --feature
     *                          [--auth-mode {key, login}]
     *                          [--connection-string]
     *                          [--description]
     *                          [--endpoint]
     *                          [--label]
     *                          [--name]
     *                          [--subscription]
     *                          [--yes]
     * ```
     *
     * @param {string} feature Name of the feature flag to be set. Only alphanumeric characters, '.', '-' and '_' are allowed.
     */
    static set(feature: string): az_appconfig_feature_set_command_builder;
    /**
     * Show all attributes of a feature flag.
     *
     * Syntax:
     * ```
     * az appconfig feature show --feature
     *                           [--auth-mode {key, login}]
     *                           [--connection-string]
     *                           [--endpoint]
     *                           [--fields {conditions, description, key, label, last_modified, locked, state}]
     *                           [--label]
     *                           [--name]
     *                           [--query-examples]
     *                           [--subscription]
     * ```
     *
     * @param {string} feature Name of the feature flag to be retrieved.
     */
    static show(feature: string): az_appconfig_feature_show_command_builder;
    /**
     * Unlock a feature to gain write operations.
     *
     * Syntax:
     * ```
     * az appconfig feature unlock --feature
     *                             [--auth-mode {key, login}]
     *                             [--connection-string]
     *                             [--endpoint]
     *                             [--label]
     *                             [--name]
     *                             [--subscription]
     *                             [--yes]
     * ```
     *
     * @param {string} feature Key of the feature to be unlocked.
     */
    static unlock(feature: string): az_appconfig_feature_unlock_command_builder;
}
/** Managed identities for App Configurations. */
export declare class az_appconfig_identity {
    /**
     * Update managed identities for an App Configuration.
     *
     * Syntax:
     * ```
     * az appconfig identity assign --name
     *                              [--identities]
     *                              [--resource-group]
     *                              [--subscription]
     * ```
     *
     * @param {string} name Name of the App Configuration. You can configure the default name using `az configure --defaults app_configuration_store=<name>`.
     */
    static assign(name: string): az_appconfig_identity_assign_command_builder;
    /**
     * Remove managed identities for an App Configuration.
     *
     * Syntax:
     * ```
     * az appconfig identity remove --name
     *                              [--identities]
     *                              [--resource-group]
     *                              [--subscription]
     * ```
     *
     * @param {string} name Name of the App Configuration. You can configure the default name using `az configure --defaults app_configuration_store=<name>`.
     */
    static remove(name: string): az_appconfig_identity_remove_command_builder;
    /**
     * Display managed identities for an App Configuration.
     *
     * Syntax:
     * ```
     * az appconfig identity show --name
     *                            [--query-examples]
     *                            [--resource-group]
     *                            [--subscription]
     * ```
     *
     * @param {string} name Name of the App Configuration. You can configure the default name using `az configure --defaults app_configuration_store=<name>`.
     */
    static show(name: string): az_appconfig_identity_show_command_builder;
}
/** Manage key-values stored in an App Configuration. */
export declare class az_appconfig_kv {
    /**
     * Delete key-values.
     *
     * Syntax:
     * ```
     * az appconfig kv delete --key
     *                        [--auth-mode {key, login}]
     *                        [--connection-string]
     *                        [--endpoint]
     *                        [--label]
     *                        [--name]
     *                        [--subscription]
     *                        [--yes]
     * ```
     *
     * @param {string} key Support star sign as filters, for instance \* means all key and abc\* means keys with abc as prefix.
     */
    static delete(key: string): az_appconfig_kv_delete_command_builder;
    /**
     * Export configurations to another place from your App Configuration.
     *
     * Syntax:
     * ```
     * az appconfig kv export --destination {appconfig, appservice, file}
     *                        [--appservice-account]
     *                        [--auth-mode {key, login}]
     *                        [--connection-string]
     *                        [--dest-auth-mode {key, login}]
     *                        [--dest-connection-string]
     *                        [--dest-endpoint]
     *                        [--dest-label]
     *                        [--dest-name]
     *                        [--endpoint]
     *                        [--format {json, properties, yaml}]
     *                        [--key]
     *                        [--label]
     *                        [--name]
     *                        [--naming-convention {camel, hyphen, pascal, underscore}]
     *                        [--path]
     *                        [--prefix]
     *                        [--preserve-labels {false, true}]
     *                        [--resolve-keyvault {false, true}]
     *                        [--separator]
     *                        [--skip-features {false, true}]
     *                        [--skip-keyvault {false, true}]
     *                        [--subscription]
     *                        [--yes]
     * ```
     *
     * @param {'appconfig' | 'appservice' | 'file'} destination The destination of exporting. Note that exporting feature flags to appservice is not supported.
     */
    static export(destination: 'appconfig' | 'appservice' | 'file'): az_appconfig_kv_export_command_builder;
    /**
     * Import configurations into your App Configuration from another place.
     *
     * Syntax:
     * ```
     * az appconfig kv import --source {appconfig, appservice, file}
     *                        [--appservice-account]
     *                        [--auth-mode {key, login}]
     *                        [--connection-string]
     *                        [--content-type]
     *                        [--depth]
     *                        [--endpoint]
     *                        [--format {json, properties, yaml}]
     *                        [--label]
     *                        [--name]
     *                        [--path]
     *                        [--prefix]
     *                        [--preserve-labels {false, true}]
     *                        [--separator]
     *                        [--skip-features {false, true}]
     *                        [--src-auth-mode {key, login}]
     *                        [--src-connection-string]
     *                        [--src-endpoint]
     *                        [--src-key]
     *                        [--src-label]
     *                        [--src-name]
     *                        [--subscription]
     *                        [--yes]
     * ```
     *
     * @param {'appconfig' | 'appservice' | 'file'} source The source of importing. Note that importing feature flags from appservice is not supported.
     */
    static import(source: 'appconfig' | 'appservice' | 'file'): az_appconfig_kv_import_command_builder;
    /**
     * List key-values.
     *
     * Syntax:
     * ```
     * az appconfig kv list [--all]
     *                      [--auth-mode {key, login}]
     *                      [--connection-string]
     *                      [--datetime]
     *                      [--endpoint]
     *                      [--fields {content_type, etag, key, label, last_modified, locked, tags, value}]
     *                      [--key]
     *                      [--label]
     *                      [--name]
     *                      [--query-examples]
     *                      [--resolve-keyvault {false, true}]
     *                      [--subscription]
     *                      [--top]
     * ```
     */
    static list(): az_appconfig_kv_list_command_builder;
    /**
     * Lock a key-value to prohibit write operations.
     *
     * Syntax:
     * ```
     * az appconfig kv lock --key
     *                      [--auth-mode {key, login}]
     *                      [--connection-string]
     *                      [--endpoint]
     *                      [--label]
     *                      [--name]
     *                      [--subscription]
     *                      [--yes]
     * ```
     *
     * @param {string} key Key to be locked.
     */
    static lock(key: string): az_appconfig_kv_lock_command_builder;
    /**
     * Restore key-values.
     *
     * Syntax:
     * ```
     * az appconfig kv restore --datetime
     *                         [--auth-mode {key, login}]
     *                         [--connection-string]
     *                         [--endpoint]
     *                         [--key]
     *                         [--label]
     *                         [--name]
     *                         [--subscription]
     *                         [--yes]
     * ```
     *
     * @param {string} datetime Format: "YYYY-MM-DDThh:mm:ssZ". If no time zone specified, use UTC by default.
     */
    static restore(datetime: string): az_appconfig_kv_restore_command_builder;
    /**
     * Set a key-value.
     *
     * Syntax:
     * ```
     * az appconfig kv set --key
     *                     [--auth-mode {key, login}]
     *                     [--connection-string]
     *                     [--content-type]
     *                     [--endpoint]
     *                     [--label]
     *                     [--name]
     *                     [--subscription]
     *                     [--tags]
     *                     [--value]
     *                     [--yes]
     * ```
     *
     * @param {string} key Key to be set. Key cannot be a '.' or '..', or contain the '%' character.
     */
    static set(key: string): az_appconfig_kv_set_command_builder;
    /**
     * Set a keyvault reference.
     *
     * Syntax:
     * ```
     * az appconfig kv set-keyvault --key
     *                              --secret-identifier
     *                              [--auth-mode {key, login}]
     *                              [--connection-string]
     *                              [--endpoint]
     *                              [--label]
     *                              [--name]
     *                              [--subscription]
     *                              [--tags]
     *                              [--yes]
     * ```
     *
     * @param {string} key Key to be set. Key cannot be a '.' or '..', or contain the '%' character.
     * @param {string} secretIdentifier ID of the Key Vault object. Can be found using 'az keyvault {collection} show' command, where collection is key, secret or certificate. To set reference to the latest version of your secret, remove version information from secret identifier.
     */
    static set_keyvault(key: string, secretIdentifier: string): az_appconfig_kv_set_keyvault_command_builder;
    /**
     * Show all attributes of a key-value.
     *
     * Syntax:
     * ```
     * az appconfig kv show --key
     *                      [--auth-mode {key, login}]
     *                      [--connection-string]
     *                      [--datetime]
     *                      [--endpoint]
     *                      [--label]
     *                      [--name]
     *                      [--query-examples]
     *                      [--subscription]
     * ```
     *
     * @param {string} key Key to be showed.
     */
    static show(key: string): az_appconfig_kv_show_command_builder;
    /**
     * Unlock a key-value to gain write operations.
     *
     * Syntax:
     * ```
     * az appconfig kv unlock --key
     *                        [--auth-mode {key, login}]
     *                        [--connection-string]
     *                        [--endpoint]
     *                        [--label]
     *                        [--name]
     *                        [--subscription]
     *                        [--yes]
     * ```
     *
     * @param {string} key Key to be unlocked.
     */
    static unlock(key: string): az_appconfig_kv_unlock_command_builder;
}
/** Manage revisions for key-values stored in an App Configuration. */
export declare class az_appconfig_revision {
    /**
     * Lists revision history of key-values.
     *
     * Syntax:
     * ```
     * az appconfig revision list [--all]
     *                            [--auth-mode {key, login}]
     *                            [--connection-string]
     *                            [--datetime]
     *                            [--endpoint]
     *                            [--fields {content_type, etag, key, label, last_modified, locked, tags, value}]
     *                            [--key]
     *                            [--label]
     *                            [--name]
     *                            [--query-examples]
     *                            [--subscription]
     *                            [--top]
     * ```
     */
    static list(): az_appconfig_revision_list_command_builder;
}
/** Manage App Configurations. */
export declare class az_appconfig {
    /**
     * Create an App Configuration.
     *
     * Syntax:
     * ```
     * az appconfig create --location
     *                     --name
     *                     --resource-group
     *                     [--assign-identity]
     *                     [--enable-public-network {false, true}]
     *                     [--sku {Free, Standard}]
     *                     [--subscription]
     * ```
     *
     * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
     * @param {string} name Name of the App Configuration. You can configure the default name using `az configure --defaults app_configuration_store=<name>`.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static create(location: string, name: string, resourceGroup: string): az_appconfig_create_command_builder;
    /**
     * Delete an App Configuration.
     *
     * Syntax:
     * ```
     * az appconfig delete --name
     *                     [--resource-group]
     *                     [--subscription]
     *                     [--yes]
     * ```
     *
     * @param {string} name Name of the App Configuration. You can configure the default name using `az configure --defaults app_configuration_store=<name>`.
     */
    static delete(name: string): az_appconfig_delete_command_builder;
    /**
     * Lists all App Configurations under the current subscription.
     *
     * Syntax:
     * ```
     * az appconfig list [--query-examples]
     *                   [--resource-group]
     *                   [--subscription]
     * ```
     */
    static list(): az_appconfig_list_command_builder;
    /**
     * Show properties of an App Configuration.
     *
     * Syntax:
     * ```
     * az appconfig show --name
     *                   [--query-examples]
     *                   [--resource-group]
     *                   [--subscription]
     * ```
     *
     * @param {string} name Name of the App Configuration. You can configure the default name using `az configure --defaults app_configuration_store=<name>`.
     */
    static show(name: string): az_appconfig_show_command_builder;
    /**
     * Update an App Configuration.
     *
     * Syntax:
     * ```
     * az appconfig update --name
     *                     [--enable-public-network {false, true}]
     *                     [--encryption-key-name]
     *                     [--encryption-key-vault]
     *                     [--encryption-key-version]
     *                     [--identity-client-id]
     *                     [--resource-group]
     *                     [--sku {Free, Standard}]
     *                     [--subscription]
     *                     [--tags]
     * ```
     *
     * @param {string} name Name of the App Configuration. You can configure the default name using `az configure --defaults app_configuration_store=<name>`.
     */
    static update(name: string): az_appconfig_update_command_builder;
}
/**
 * List access keys of an App Configuration.
 *
 * Syntax:
 * ```
 * az appconfig credential list --name
 *                              [--query-examples]
 *                              [--resource-group]
 *                              [--subscription]
 * ```
 *
 * @param {string} name Name of the App Configuration. You can configure the default name using `az configure --defaults app_configuration_store=<name>`.
 */
declare class az_appconfig_credential_list_command_builder extends CommandBuilder<az_appconfig_credential_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** Name of the App Configuration. You can configure the default name using `az configure --defaults app_configuration_store=<name>`. */
    name(value: string): az_appconfig_credential_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_appconfig_credential_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_appconfig_credential_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_appconfig_credential_list_command_builder;
}
/**
 * Regenerate an access key for an App Configuration.
 *
 * Syntax:
 * ```
 * az appconfig credential regenerate --id
 *                                    --name
 *                                    [--resource-group]
 *                                    [--subscription]
 * ```
 *
 * @param {string} id Id of the key to be regenerated. Can be found using az appconfig credential list command.
 * @param {string} name Name of the App Configuration. You can configure the default name using `az configure --defaults app_configuration_store=<name>`.
 */
declare class az_appconfig_credential_regenerate_command_builder extends CommandBuilder<az_appconfig_credential_regenerate_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, id: string, name: string);
    /** Id of the key to be regenerated. Can be found using az appconfig credential list command. */
    id(value: string): az_appconfig_credential_regenerate_command_builder;
    /** Name of the App Configuration. You can configure the default name using `az configure --defaults app_configuration_store=<name>`. */
    name(value: string): az_appconfig_credential_regenerate_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_appconfig_credential_regenerate_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_appconfig_credential_regenerate_command_builder;
}
/**
 * Add a filter to a feature flag.
 *
 * Syntax:
 * ```
 * az appconfig feature filter add --feature
 *                                 --filter-name
 *                                 [--auth-mode {key, login}]
 *                                 [--connection-string]
 *                                 [--endpoint]
 *                                 [--filter-parameters]
 *                                 [--index]
 *                                 [--label]
 *                                 [--name]
 *                                 [--subscription]
 *                                 [--yes]
 * ```
 *
 * @param {string} feature Name of the feature to which you want to add the filter.
 * @param {string} filterName Name of the filter to be added.
 */
declare class az_appconfig_feature_filter_add_command_builder extends CommandBuilder<az_appconfig_feature_filter_add_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, feature: string, filterName: string);
    /** Name of the feature to which you want to add the filter. */
    feature(value: string): az_appconfig_feature_filter_add_command_builder;
    /** Name of the filter to be added. */
    filterName(value: string): az_appconfig_feature_filter_add_command_builder;
    /** This parameter can be used for indicating how a data operation is to be authorized. If the auth mode is "key", provide connection string or store name and your account access keys will be retrieved for authorization. If the auth mode is "login", provide the store endpoint or store name and your "az login" credentials will be used for authorization. You can configure the default auth mode using `az configure --defaults appconfig_auth_mode=<auth_mode>`. For more information, see <a href="https://docs.microsoft.com/en-us/azure/azure-app-configuration/concept-enable-rbac">https://docs.microsoft.com/en-us/azure/azure-app-configuration/concept-enable-rbac</a>. */
    authMode(value: 'key' | 'login'): az_appconfig_feature_filter_add_command_builder;
    /** Combination of access key and endpoint of App Configuration. Can be found using 'az appconfig credential list'. Users can preset it using `az configure --defaults appconfig_connection_string=<connection_string>` or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING. */
    connectionString(value: string): az_appconfig_feature_filter_add_command_builder;
    /** If auth mode is "login", provide endpoint URL of the App Configuration. The endpoint can be retrieved using "az appconfig show" command. You can configure the default endpoint using `az configure --defaults appconfig_endpoint=<endpoint>`. */
    endpoint(value: string): az_appconfig_feature_filter_add_command_builder;
    /** Space-separated filter parameters in 'name[=value]' format. */
    filterParameters(value: string): az_appconfig_feature_filter_add_command_builder;
    /** Zero-based index in the list of filters where you want to insert the new filter. If no index is specified or index is invalid, filter will be added to the end of the list. */
    index(value: string): az_appconfig_feature_filter_add_command_builder;
    /** If no label specified, add to the feature flag with null label by default. */
    label(value: string): az_appconfig_feature_filter_add_command_builder;
    /** Name of the App Configuration. You can configure the default name using `az configure --defaults app_configuration_store=<name>`. */
    name(value: string): az_appconfig_feature_filter_add_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_appconfig_feature_filter_add_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_appconfig_feature_filter_add_command_builder;
}
/**
 * Delete a filter from a feature flag.
 *
 * Syntax:
 * ```
 * az appconfig feature filter delete --feature
 *                                    [--all]
 *                                    [--auth-mode {key, login}]
 *                                    [--connection-string]
 *                                    [--endpoint]
 *                                    [--filter-name]
 *                                    [--index]
 *                                    [--label]
 *                                    [--name]
 *                                    [--subscription]
 *                                    [--yes]
 * ```
 *
 * @param {string} feature Name of the feature from which you want to delete the filter.
 */
declare class az_appconfig_feature_filter_delete_command_builder extends CommandBuilder<az_appconfig_feature_filter_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, feature: string);
    /** Name of the feature from which you want to delete the filter. */
    feature(value: string): az_appconfig_feature_filter_delete_command_builder;
    /** Delete all filters associated with a feature flag. */
    all(value: string): az_appconfig_feature_filter_delete_command_builder;
    /** This parameter can be used for indicating how a data operation is to be authorized. If the auth mode is "key", provide connection string or store name and your account access keys will be retrieved for authorization. If the auth mode is "login", provide the store endpoint or store name and your "az login" credentials will be used for authorization. You can configure the default auth mode using `az configure --defaults appconfig_auth_mode=<auth_mode>`. For more information, see <a href="https://docs.microsoft.com/en-us/azure/azure-app-configuration/concept-enable-rbac">https://docs.microsoft.com/en-us/azure/azure-app-configuration/concept-enable-rbac</a>. */
    authMode(value: 'key' | 'login'): az_appconfig_feature_filter_delete_command_builder;
    /** Combination of access key and endpoint of App Configuration. Can be found using 'az appconfig credential list'. Users can preset it using `az configure --defaults appconfig_connection_string=<connection_string>` or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING. */
    connectionString(value: string): az_appconfig_feature_filter_delete_command_builder;
    /** If auth mode is "login", provide endpoint URL of the App Configuration. The endpoint can be retrieved using "az appconfig show" command. You can configure the default endpoint using `az configure --defaults appconfig_endpoint=<endpoint>`. */
    endpoint(value: string): az_appconfig_feature_filter_delete_command_builder;
    /** Name of the filter to be deleted. */
    filterName(value: string): az_appconfig_feature_filter_delete_command_builder;
    /** Zero-based index of the filter to be deleted in case there are multiple instances with same filter name. */
    index(value: string): az_appconfig_feature_filter_delete_command_builder;
    /** If no label specified, delete from the feature flag with null label by default. */
    label(value: string): az_appconfig_feature_filter_delete_command_builder;
    /** Name of the App Configuration. You can configure the default name using `az configure --defaults app_configuration_store=<name>`. */
    name(value: string): az_appconfig_feature_filter_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_appconfig_feature_filter_delete_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_appconfig_feature_filter_delete_command_builder;
}
/**
 * List all filters for a feature flag.
 *
 * Syntax:
 * ```
 * az appconfig feature filter list --feature
 *                                  [--all]
 *                                  [--auth-mode {key, login}]
 *                                  [--connection-string]
 *                                  [--endpoint]
 *                                  [--label]
 *                                  [--name]
 *                                  [--query-examples]
 *                                  [--subscription]
 *                                  [--top]
 * ```
 *
 * @param {string} feature Name of the feature whose filters you want to be displayed.
 */
declare class az_appconfig_feature_filter_list_command_builder extends CommandBuilder<az_appconfig_feature_filter_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, feature: string);
    /** Name of the feature whose filters you want to be displayed. */
    feature(value: string): az_appconfig_feature_filter_list_command_builder;
    /** List all filters associated with a feature flag. */
    all(value: string): az_appconfig_feature_filter_list_command_builder;
    /** This parameter can be used for indicating how a data operation is to be authorized. If the auth mode is "key", provide connection string or store name and your account access keys will be retrieved for authorization. If the auth mode is "login", provide the store endpoint or store name and your "az login" credentials will be used for authorization. You can configure the default auth mode using `az configure --defaults appconfig_auth_mode=<auth_mode>`. For more information, see <a href="https://docs.microsoft.com/en-us/azure/azure-app-configuration/concept-enable-rbac">https://docs.microsoft.com/en-us/azure/azure-app-configuration/concept-enable-rbac</a>. */
    authMode(value: 'key' | 'login'): az_appconfig_feature_filter_list_command_builder;
    /** Combination of access key and endpoint of App Configuration. Can be found using 'az appconfig credential list'. Users can preset it using `az configure --defaults appconfig_connection_string=<connection_string>` or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING. */
    connectionString(value: string): az_appconfig_feature_filter_list_command_builder;
    /** If auth mode is "login", provide endpoint URL of the App Configuration. The endpoint can be retrieved using "az appconfig show" command. You can configure the default endpoint using `az configure --defaults appconfig_endpoint=<endpoint>`. */
    endpoint(value: string): az_appconfig_feature_filter_list_command_builder;
    /** If no label specified, display filters from the feature flag with null label by default. */
    label(value: string): az_appconfig_feature_filter_list_command_builder;
    /** Name of the App Configuration. You can configure the default name using `az configure --defaults app_configuration_store=<name>`. */
    name(value: string): az_appconfig_feature_filter_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_appconfig_feature_filter_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_appconfig_feature_filter_list_command_builder;
    /** Maximum number of items to return. Must be a positive integer. Default to 100. */
    top(value: string): az_appconfig_feature_filter_list_command_builder;
}
/**
 * Show filters of a feature flag.
 *
 * Syntax:
 * ```
 * az appconfig feature filter show --feature
 *                                  --filter-name
 *                                  [--auth-mode {key, login}]
 *                                  [--connection-string]
 *                                  [--endpoint]
 *                                  [--index]
 *                                  [--label]
 *                                  [--name]
 *                                  [--query-examples]
 *                                  [--subscription]
 * ```
 *
 * @param {string} feature Name of the feature which contains the filter.
 * @param {string} filterName Name of the filter to be displayed.
 */
declare class az_appconfig_feature_filter_show_command_builder extends CommandBuilder<az_appconfig_feature_filter_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, feature: string, filterName: string);
    /** Name of the feature which contains the filter. */
    feature(value: string): az_appconfig_feature_filter_show_command_builder;
    /** Name of the filter to be displayed. */
    filterName(value: string): az_appconfig_feature_filter_show_command_builder;
    /** This parameter can be used for indicating how a data operation is to be authorized. If the auth mode is "key", provide connection string or store name and your account access keys will be retrieved for authorization. If the auth mode is "login", provide the store endpoint or store name and your "az login" credentials will be used for authorization. You can configure the default auth mode using `az configure --defaults appconfig_auth_mode=<auth_mode>`. For more information, see <a href="https://docs.microsoft.com/en-us/azure/azure-app-configuration/concept-enable-rbac">https://docs.microsoft.com/en-us/azure/azure-app-configuration/concept-enable-rbac</a>. */
    authMode(value: 'key' | 'login'): az_appconfig_feature_filter_show_command_builder;
    /** Combination of access key and endpoint of App Configuration. Can be found using 'az appconfig credential list'. Users can preset it using `az configure --defaults appconfig_connection_string=<connection_string>` or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING. */
    connectionString(value: string): az_appconfig_feature_filter_show_command_builder;
    /** If auth mode is "login", provide endpoint URL of the App Configuration. The endpoint can be retrieved using "az appconfig show" command. You can configure the default endpoint using `az configure --defaults appconfig_endpoint=<endpoint>`. */
    endpoint(value: string): az_appconfig_feature_filter_show_command_builder;
    /** Zero-based index of the filter to be displayed in case there are multiple instances with same filter name. */
    index(value: string): az_appconfig_feature_filter_show_command_builder;
    /** If no label specified, show the feature flag with null label by default. */
    label(value: string): az_appconfig_feature_filter_show_command_builder;
    /** Name of the App Configuration. You can configure the default name using `az configure --defaults app_configuration_store=<name>`. */
    name(value: string): az_appconfig_feature_filter_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_appconfig_feature_filter_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_appconfig_feature_filter_show_command_builder;
}
/**
 * Delete feature flag.
 *
 * Syntax:
 * ```
 * az appconfig feature delete --feature
 *                             [--auth-mode {key, login}]
 *                             [--connection-string]
 *                             [--endpoint]
 *                             [--label]
 *                             [--name]
 *                             [--subscription]
 *                             [--yes]
 * ```
 *
 * @param {string} feature Key of the feature to be deleted. Support star sign as filters, for instance \* means all key and abc\* means keys with abc as prefix. Comma separated keys are not supported. Please provide escaped string if your feature name contains comma.
 */
declare class az_appconfig_feature_delete_command_builder extends CommandBuilder<az_appconfig_feature_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, feature: string);
    /** Key of the feature to be deleted. Support star sign as filters, for instance \* means all key and abc\* means keys with abc as prefix. Comma separated keys are not supported. Please provide escaped string if your feature name contains comma. */
    feature(value: string): az_appconfig_feature_delete_command_builder;
    /** This parameter can be used for indicating how a data operation is to be authorized. If the auth mode is "key", provide connection string or store name and your account access keys will be retrieved for authorization. If the auth mode is "login", provide the store endpoint or store name and your "az login" credentials will be used for authorization. You can configure the default auth mode using `az configure --defaults appconfig_auth_mode=<auth_mode>`. For more information, see <a href="https://docs.microsoft.com/en-us/azure/azure-app-configuration/concept-enable-rbac">https://docs.microsoft.com/en-us/azure/azure-app-configuration/concept-enable-rbac</a>. */
    authMode(value: 'key' | 'login'): az_appconfig_feature_delete_command_builder;
    /** Combination of access key and endpoint of App Configuration. Can be found using 'az appconfig credential list'. Users can preset it using `az configure --defaults appconfig_connection_string=<connection_string>` or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING. */
    connectionString(value: string): az_appconfig_feature_delete_command_builder;
    /** If auth mode is "login", provide endpoint URL of the App Configuration. The endpoint can be retrieved using "az appconfig show" command. You can configure the default endpoint using `az configure --defaults appconfig_endpoint=<endpoint>`. */
    endpoint(value: string): az_appconfig_feature_delete_command_builder;
    /** If no label specified, delete the feature flag with null label by default. Support star sign as filters, for instance \* means all labels and abc\* means labels with abc as prefix. */
    label(value: string): az_appconfig_feature_delete_command_builder;
    /** Name of the App Configuration. You can configure the default name using `az configure --defaults app_configuration_store=<name>`. */
    name(value: string): az_appconfig_feature_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_appconfig_feature_delete_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_appconfig_feature_delete_command_builder;
}
/**
 * Disable a feature flag to turn it OFF for use.
 *
 * Syntax:
 * ```
 * az appconfig feature disable --feature
 *                              [--auth-mode {key, login}]
 *                              [--connection-string]
 *                              [--endpoint]
 *                              [--label]
 *                              [--name]
 *                              [--subscription]
 *                              [--yes]
 * ```
 *
 * @param {string} feature Key of the feature to be disabled.
 */
declare class az_appconfig_feature_disable_command_builder extends CommandBuilder<az_appconfig_feature_disable_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, feature: string);
    /** Key of the feature to be disabled. */
    feature(value: string): az_appconfig_feature_disable_command_builder;
    /** This parameter can be used for indicating how a data operation is to be authorized. If the auth mode is "key", provide connection string or store name and your account access keys will be retrieved for authorization. If the auth mode is "login", provide the store endpoint or store name and your "az login" credentials will be used for authorization. You can configure the default auth mode using `az configure --defaults appconfig_auth_mode=<auth_mode>`. For more information, see <a href="https://docs.microsoft.com/en-us/azure/azure-app-configuration/concept-enable-rbac">https://docs.microsoft.com/en-us/azure/azure-app-configuration/concept-enable-rbac</a>. */
    authMode(value: 'key' | 'login'): az_appconfig_feature_disable_command_builder;
    /** Combination of access key and endpoint of App Configuration. Can be found using 'az appconfig credential list'. Users can preset it using `az configure --defaults appconfig_connection_string=<connection_string>` or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING. */
    connectionString(value: string): az_appconfig_feature_disable_command_builder;
    /** If auth mode is "login", provide endpoint URL of the App Configuration. The endpoint can be retrieved using "az appconfig show" command. You can configure the default endpoint using `az configure --defaults appconfig_endpoint=<endpoint>`. */
    endpoint(value: string): az_appconfig_feature_disable_command_builder;
    /** If no label specified, disable the feature flag with null label by default. */
    label(value: string): az_appconfig_feature_disable_command_builder;
    /** Name of the App Configuration. You can configure the default name using `az configure --defaults app_configuration_store=<name>`. */
    name(value: string): az_appconfig_feature_disable_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_appconfig_feature_disable_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_appconfig_feature_disable_command_builder;
}
/**
 * Enable a feature flag to turn it ON for use.
 *
 * Syntax:
 * ```
 * az appconfig feature enable --feature
 *                             [--auth-mode {key, login}]
 *                             [--connection-string]
 *                             [--endpoint]
 *                             [--label]
 *                             [--name]
 *                             [--subscription]
 *                             [--yes]
 * ```
 *
 * @param {string} feature Key of the feature to be enabled.
 */
declare class az_appconfig_feature_enable_command_builder extends CommandBuilder<az_appconfig_feature_enable_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, feature: string);
    /** Key of the feature to be enabled. */
    feature(value: string): az_appconfig_feature_enable_command_builder;
    /** This parameter can be used for indicating how a data operation is to be authorized. If the auth mode is "key", provide connection string or store name and your account access keys will be retrieved for authorization. If the auth mode is "login", provide the store endpoint or store name and your "az login" credentials will be used for authorization. You can configure the default auth mode using `az configure --defaults appconfig_auth_mode=<auth_mode>`. For more information, see <a href="https://docs.microsoft.com/en-us/azure/azure-app-configuration/concept-enable-rbac">https://docs.microsoft.com/en-us/azure/azure-app-configuration/concept-enable-rbac</a>. */
    authMode(value: 'key' | 'login'): az_appconfig_feature_enable_command_builder;
    /** Combination of access key and endpoint of App Configuration. Can be found using 'az appconfig credential list'. Users can preset it using `az configure --defaults appconfig_connection_string=<connection_string>` or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING. */
    connectionString(value: string): az_appconfig_feature_enable_command_builder;
    /** If auth mode is "login", provide endpoint URL of the App Configuration. The endpoint can be retrieved using "az appconfig show" command. You can configure the default endpoint using `az configure --defaults appconfig_endpoint=<endpoint>`. */
    endpoint(value: string): az_appconfig_feature_enable_command_builder;
    /** If no label specified, enable the feature flag with null label by default. */
    label(value: string): az_appconfig_feature_enable_command_builder;
    /** Name of the App Configuration. You can configure the default name using `az configure --defaults app_configuration_store=<name>`. */
    name(value: string): az_appconfig_feature_enable_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_appconfig_feature_enable_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_appconfig_feature_enable_command_builder;
}
/**
 * List feature flags.
 *
 * Syntax:
 * ```
 * az appconfig feature list [--all]
 *                           [--auth-mode {key, login}]
 *                           [--connection-string]
 *                           [--endpoint]
 *                           [--feature]
 *                           [--fields {conditions, description, key, label, last_modified, locked, state}]
 *                           [--label]
 *                           [--name]
 *                           [--query-examples]
 *                           [--subscription]
 *                           [--top]
 * ```
 */
declare class az_appconfig_feature_list_command_builder extends CommandBuilder<az_appconfig_feature_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** List all feature flags. */
    all(value: string): az_appconfig_feature_list_command_builder;
    /** This parameter can be used for indicating how a data operation is to be authorized. If the auth mode is "key", provide connection string or store name and your account access keys will be retrieved for authorization. If the auth mode is "login", provide the store endpoint or store name and your "az login" credentials will be used for authorization. You can configure the default auth mode using `az configure --defaults appconfig_auth_mode=<auth_mode>`. For more information, see <a href="https://docs.microsoft.com/en-us/azure/azure-app-configuration/concept-enable-rbac">https://docs.microsoft.com/en-us/azure/azure-app-configuration/concept-enable-rbac</a>. */
    authMode(value: 'key' | 'login'): az_appconfig_feature_list_command_builder;
    /** Combination of access key and endpoint of App Configuration. Can be found using 'az appconfig credential list'. Users can preset it using `az configure --defaults appconfig_connection_string=<connection_string>` or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING. */
    connectionString(value: string): az_appconfig_feature_list_command_builder;
    /** If auth mode is "login", provide endpoint URL of the App Configuration. The endpoint can be retrieved using "az appconfig show" command. You can configure the default endpoint using `az configure --defaults appconfig_endpoint=<endpoint>`. */
    endpoint(value: string): az_appconfig_feature_list_command_builder;
    /** Key of the feature to be listed. Support star sign as filters, for instance \* means all key and abc\* means keys with abc as prefix. Comma separated keys are not supported. Please provide escaped string if your feature name contains comma. */
    feature(value: string): az_appconfig_feature_list_command_builder;
    /** Customize output fields for Feature Flags. */
    fields(value: 'conditions' | 'description' | 'key' | 'label' | 'last_modified' | 'locked' | 'state'): az_appconfig_feature_list_command_builder;
    /** If no label specified, list all labels. Support star sign as filters, for instance \* means all labels and abc\* means labels with abc as prefix. Use '0' for null label. */
    label(value: string): az_appconfig_feature_list_command_builder;
    /** Name of the App Configuration. You can configure the default name using `az configure --defaults app_configuration_store=<name>`. */
    name(value: string): az_appconfig_feature_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_appconfig_feature_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_appconfig_feature_list_command_builder;
    /** Maximum number of items to return. Must be a positive integer. Default to 100. */
    top(value: string): az_appconfig_feature_list_command_builder;
}
/**
 * Lock a feature flag to prohibit write operations.
 *
 * Syntax:
 * ```
 * az appconfig feature lock --feature
 *                           [--auth-mode {key, login}]
 *                           [--connection-string]
 *                           [--endpoint]
 *                           [--label]
 *                           [--name]
 *                           [--subscription]
 *                           [--yes]
 * ```
 *
 * @param {string} feature Key of the feature to be locked.
 */
declare class az_appconfig_feature_lock_command_builder extends CommandBuilder<az_appconfig_feature_lock_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, feature: string);
    /** Key of the feature to be locked. */
    feature(value: string): az_appconfig_feature_lock_command_builder;
    /** This parameter can be used for indicating how a data operation is to be authorized. If the auth mode is "key", provide connection string or store name and your account access keys will be retrieved for authorization. If the auth mode is "login", provide the store endpoint or store name and your "az login" credentials will be used for authorization. You can configure the default auth mode using `az configure --defaults appconfig_auth_mode=<auth_mode>`. For more information, see <a href="https://docs.microsoft.com/en-us/azure/azure-app-configuration/concept-enable-rbac">https://docs.microsoft.com/en-us/azure/azure-app-configuration/concept-enable-rbac</a>. */
    authMode(value: 'key' | 'login'): az_appconfig_feature_lock_command_builder;
    /** Combination of access key and endpoint of App Configuration. Can be found using 'az appconfig credential list'. Users can preset it using `az configure --defaults appconfig_connection_string=<connection_string>` or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING. */
    connectionString(value: string): az_appconfig_feature_lock_command_builder;
    /** If auth mode is "login", provide endpoint URL of the App Configuration. The endpoint can be retrieved using "az appconfig show" command. You can configure the default endpoint using `az configure --defaults appconfig_endpoint=<endpoint>`. */
    endpoint(value: string): az_appconfig_feature_lock_command_builder;
    /** If no label specified, lock the feature flag with null label by default. */
    label(value: string): az_appconfig_feature_lock_command_builder;
    /** Name of the App Configuration. You can configure the default name using `az configure --defaults app_configuration_store=<name>`. */
    name(value: string): az_appconfig_feature_lock_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_appconfig_feature_lock_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_appconfig_feature_lock_command_builder;
}
/**
 * Set a feature flag.
 *
 * Syntax:
 * ```
 * az appconfig feature set --feature
 *                          [--auth-mode {key, login}]
 *                          [--connection-string]
 *                          [--description]
 *                          [--endpoint]
 *                          [--label]
 *                          [--name]
 *                          [--subscription]
 *                          [--yes]
 * ```
 *
 * @param {string} feature Name of the feature flag to be set. Only alphanumeric characters, '.', '-' and '_' are allowed.
 */
declare class az_appconfig_feature_set_command_builder extends CommandBuilder<az_appconfig_feature_set_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, feature: string);
    /** Name of the feature flag to be set. Only alphanumeric characters, '.', '-' and '_' are allowed. */
    feature(value: string): az_appconfig_feature_set_command_builder;
    /** This parameter can be used for indicating how a data operation is to be authorized. If the auth mode is "key", provide connection string or store name and your account access keys will be retrieved for authorization. If the auth mode is "login", provide the store endpoint or store name and your "az login" credentials will be used for authorization. You can configure the default auth mode using `az configure --defaults appconfig_auth_mode=<auth_mode>`. For more information, see <a href="https://docs.microsoft.com/en-us/azure/azure-app-configuration/concept-enable-rbac">https://docs.microsoft.com/en-us/azure/azure-app-configuration/concept-enable-rbac</a>. */
    authMode(value: 'key' | 'login'): az_appconfig_feature_set_command_builder;
    /** Combination of access key and endpoint of App Configuration. Can be found using 'az appconfig credential list'. Users can preset it using `az configure --defaults appconfig_connection_string=<connection_string>` or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING. */
    connectionString(value: string): az_appconfig_feature_set_command_builder;
    /** Description of the feature flag to be set. */
    description(value: string): az_appconfig_feature_set_command_builder;
    /** If auth mode is "login", provide endpoint URL of the App Configuration. The endpoint can be retrieved using "az appconfig show" command. You can configure the default endpoint using `az configure --defaults appconfig_endpoint=<endpoint>`. */
    endpoint(value: string): az_appconfig_feature_set_command_builder;
    /** If no label specified, set the feature flag with null label by default. */
    label(value: string): az_appconfig_feature_set_command_builder;
    /** Name of the App Configuration. You can configure the default name using `az configure --defaults app_configuration_store=<name>`. */
    name(value: string): az_appconfig_feature_set_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_appconfig_feature_set_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_appconfig_feature_set_command_builder;
}
/**
 * Show all attributes of a feature flag.
 *
 * Syntax:
 * ```
 * az appconfig feature show --feature
 *                           [--auth-mode {key, login}]
 *                           [--connection-string]
 *                           [--endpoint]
 *                           [--fields {conditions, description, key, label, last_modified, locked, state}]
 *                           [--label]
 *                           [--name]
 *                           [--query-examples]
 *                           [--subscription]
 * ```
 *
 * @param {string} feature Name of the feature flag to be retrieved.
 */
declare class az_appconfig_feature_show_command_builder extends CommandBuilder<az_appconfig_feature_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, feature: string);
    /** Name of the feature flag to be retrieved. */
    feature(value: string): az_appconfig_feature_show_command_builder;
    /** This parameter can be used for indicating how a data operation is to be authorized. If the auth mode is "key", provide connection string or store name and your account access keys will be retrieved for authorization. If the auth mode is "login", provide the store endpoint or store name and your "az login" credentials will be used for authorization. You can configure the default auth mode using `az configure --defaults appconfig_auth_mode=<auth_mode>`. For more information, see <a href="https://docs.microsoft.com/en-us/azure/azure-app-configuration/concept-enable-rbac">https://docs.microsoft.com/en-us/azure/azure-app-configuration/concept-enable-rbac</a>. */
    authMode(value: 'key' | 'login'): az_appconfig_feature_show_command_builder;
    /** Combination of access key and endpoint of App Configuration. Can be found using 'az appconfig credential list'. Users can preset it using `az configure --defaults appconfig_connection_string=<connection_string>` or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING. */
    connectionString(value: string): az_appconfig_feature_show_command_builder;
    /** If auth mode is "login", provide endpoint URL of the App Configuration. The endpoint can be retrieved using "az appconfig show" command. You can configure the default endpoint using `az configure --defaults appconfig_endpoint=<endpoint>`. */
    endpoint(value: string): az_appconfig_feature_show_command_builder;
    /** Customize output fields for Feature Flags. */
    fields(value: 'conditions' | 'description' | 'key' | 'label' | 'last_modified' | 'locked' | 'state'): az_appconfig_feature_show_command_builder;
    /** If no label specified, show entry with null label. Filtering is not supported. */
    label(value: string): az_appconfig_feature_show_command_builder;
    /** Name of the App Configuration. You can configure the default name using `az configure --defaults app_configuration_store=<name>`. */
    name(value: string): az_appconfig_feature_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_appconfig_feature_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_appconfig_feature_show_command_builder;
}
/**
 * Unlock a feature to gain write operations.
 *
 * Syntax:
 * ```
 * az appconfig feature unlock --feature
 *                             [--auth-mode {key, login}]
 *                             [--connection-string]
 *                             [--endpoint]
 *                             [--label]
 *                             [--name]
 *                             [--subscription]
 *                             [--yes]
 * ```
 *
 * @param {string} feature Key of the feature to be unlocked.
 */
declare class az_appconfig_feature_unlock_command_builder extends CommandBuilder<az_appconfig_feature_unlock_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, feature: string);
    /** Key of the feature to be unlocked. */
    feature(value: string): az_appconfig_feature_unlock_command_builder;
    /** This parameter can be used for indicating how a data operation is to be authorized. If the auth mode is "key", provide connection string or store name and your account access keys will be retrieved for authorization. If the auth mode is "login", provide the store endpoint or store name and your "az login" credentials will be used for authorization. You can configure the default auth mode using `az configure --defaults appconfig_auth_mode=<auth_mode>`. For more information, see <a href="https://docs.microsoft.com/en-us/azure/azure-app-configuration/concept-enable-rbac">https://docs.microsoft.com/en-us/azure/azure-app-configuration/concept-enable-rbac</a>. */
    authMode(value: 'key' | 'login'): az_appconfig_feature_unlock_command_builder;
    /** Combination of access key and endpoint of App Configuration. Can be found using 'az appconfig credential list'. Users can preset it using `az configure --defaults appconfig_connection_string=<connection_string>` or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING. */
    connectionString(value: string): az_appconfig_feature_unlock_command_builder;
    /** If auth mode is "login", provide endpoint URL of the App Configuration. The endpoint can be retrieved using "az appconfig show" command. You can configure the default endpoint using `az configure --defaults appconfig_endpoint=<endpoint>`. */
    endpoint(value: string): az_appconfig_feature_unlock_command_builder;
    /** If no label specified, unlock the feature flag with null label by default. */
    label(value: string): az_appconfig_feature_unlock_command_builder;
    /** Name of the App Configuration. You can configure the default name using `az configure --defaults app_configuration_store=<name>`. */
    name(value: string): az_appconfig_feature_unlock_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_appconfig_feature_unlock_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_appconfig_feature_unlock_command_builder;
}
/**
 * Update managed identities for an App Configuration.
 *
 * Syntax:
 * ```
 * az appconfig identity assign --name
 *                              [--identities]
 *                              [--resource-group]
 *                              [--subscription]
 * ```
 *
 * @param {string} name Name of the App Configuration. You can configure the default name using `az configure --defaults app_configuration_store=<name>`.
 */
declare class az_appconfig_identity_assign_command_builder extends CommandBuilder<az_appconfig_identity_assign_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** Name of the App Configuration. You can configure the default name using `az configure --defaults app_configuration_store=<name>`. */
    name(value: string): az_appconfig_identity_assign_command_builder;
    /** Accept system or user assigned identities separated by spaces. Use '[system]' to refer system assigned identity or a resource id to refer user assigned identity. Use system assigned identity if not specified. */
    identities(value: string): az_appconfig_identity_assign_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_appconfig_identity_assign_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_appconfig_identity_assign_command_builder;
}
/**
 * Remove managed identities for an App Configuration.
 *
 * Syntax:
 * ```
 * az appconfig identity remove --name
 *                              [--identities]
 *                              [--resource-group]
 *                              [--subscription]
 * ```
 *
 * @param {string} name Name of the App Configuration. You can configure the default name using `az configure --defaults app_configuration_store=<name>`.
 */
declare class az_appconfig_identity_remove_command_builder extends CommandBuilder<az_appconfig_identity_remove_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** Name of the App Configuration. You can configure the default name using `az configure --defaults app_configuration_store=<name>`. */
    name(value: string): az_appconfig_identity_remove_command_builder;
    /** Accept system or user assigned identities separated by spaces. Use '[system]' to refer system assigned identity, '[all]' for all identities or a resource id to refer user assigned identity. Remove system assigned identity if not specified. */
    identities(value: string): az_appconfig_identity_remove_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_appconfig_identity_remove_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_appconfig_identity_remove_command_builder;
}
/**
 * Display managed identities for an App Configuration.
 *
 * Syntax:
 * ```
 * az appconfig identity show --name
 *                            [--query-examples]
 *                            [--resource-group]
 *                            [--subscription]
 * ```
 *
 * @param {string} name Name of the App Configuration. You can configure the default name using `az configure --defaults app_configuration_store=<name>`.
 */
declare class az_appconfig_identity_show_command_builder extends CommandBuilder<az_appconfig_identity_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** Name of the App Configuration. You can configure the default name using `az configure --defaults app_configuration_store=<name>`. */
    name(value: string): az_appconfig_identity_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_appconfig_identity_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_appconfig_identity_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_appconfig_identity_show_command_builder;
}
/**
 * Delete key-values.
 *
 * Syntax:
 * ```
 * az appconfig kv delete --key
 *                        [--auth-mode {key, login}]
 *                        [--connection-string]
 *                        [--endpoint]
 *                        [--label]
 *                        [--name]
 *                        [--subscription]
 *                        [--yes]
 * ```
 *
 * @param {string} key Support star sign as filters, for instance \* means all key and abc\* means keys with abc as prefix.
 */
declare class az_appconfig_kv_delete_command_builder extends CommandBuilder<az_appconfig_kv_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, key: string);
    /** Support star sign as filters, for instance \* means all key and abc\* means keys with abc as prefix. */
    key(value: string): az_appconfig_kv_delete_command_builder;
    /** This parameter can be used for indicating how a data operation is to be authorized. If the auth mode is "key", provide connection string or store name and your account access keys will be retrieved for authorization. If the auth mode is "login", provide the store endpoint or store name and your "az login" credentials will be used for authorization. You can configure the default auth mode using `az configure --defaults appconfig_auth_mode=<auth_mode>`. For more information, see <a href="https://docs.microsoft.com/en-us/azure/azure-app-configuration/concept-enable-rbac">https://docs.microsoft.com/en-us/azure/azure-app-configuration/concept-enable-rbac</a>. */
    authMode(value: 'key' | 'login'): az_appconfig_kv_delete_command_builder;
    /** Combination of access key and endpoint of App Configuration. Can be found using 'az appconfig credential list'. Users can preset it using `az configure --defaults appconfig_connection_string=<connection_string>` or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING. */
    connectionString(value: string): az_appconfig_kv_delete_command_builder;
    /** If auth mode is "login", provide endpoint URL of the App Configuration. The endpoint can be retrieved using "az appconfig show" command. You can configure the default endpoint using `az configure --defaults appconfig_endpoint=<endpoint>`. */
    endpoint(value: string): az_appconfig_kv_delete_command_builder;
    /** If no label specified, delete entry with null label. Support star sign as filters, for instance \* means all label and abc\* means labels with abc as prefix. */
    label(value: string): az_appconfig_kv_delete_command_builder;
    /** Name of the App Configuration. You can configure the default name using `az configure --defaults app_configuration_store=<name>`. */
    name(value: string): az_appconfig_kv_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_appconfig_kv_delete_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_appconfig_kv_delete_command_builder;
}
/**
 * Export configurations to another place from your App Configuration.
 *
 * Syntax:
 * ```
 * az appconfig kv export --destination {appconfig, appservice, file}
 *                        [--appservice-account]
 *                        [--auth-mode {key, login}]
 *                        [--connection-string]
 *                        [--dest-auth-mode {key, login}]
 *                        [--dest-connection-string]
 *                        [--dest-endpoint]
 *                        [--dest-label]
 *                        [--dest-name]
 *                        [--endpoint]
 *                        [--format {json, properties, yaml}]
 *                        [--key]
 *                        [--label]
 *                        [--name]
 *                        [--naming-convention {camel, hyphen, pascal, underscore}]
 *                        [--path]
 *                        [--prefix]
 *                        [--preserve-labels {false, true}]
 *                        [--resolve-keyvault {false, true}]
 *                        [--separator]
 *                        [--skip-features {false, true}]
 *                        [--skip-keyvault {false, true}]
 *                        [--subscription]
 *                        [--yes]
 * ```
 *
 * @param {'appconfig' | 'appservice' | 'file'} destination The destination of exporting. Note that exporting feature flags to appservice is not supported.
 */
declare class az_appconfig_kv_export_command_builder extends CommandBuilder<az_appconfig_kv_export_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, destination: 'appconfig' | 'appservice' | 'file');
    /** The destination of exporting. Note that exporting feature flags to appservice is not supported. */
    destination(value: 'appconfig' | 'appservice' | 'file'): az_appconfig_kv_export_command_builder;
    /** ARM ID for AppService OR the name of the AppService, assuming it is in the same subscription and resource group as the App Configuration. Required for AppService arguments. */
    appserviceAccount(value: string): az_appconfig_kv_export_command_builder;
    /** This parameter can be used for indicating how a data operation is to be authorized. If the auth mode is "key", provide connection string or store name and your account access keys will be retrieved for authorization. If the auth mode is "login", provide the store endpoint or store name and your "az login" credentials will be used for authorization. You can configure the default auth mode using `az configure --defaults appconfig_auth_mode=<auth_mode>`. For more information, see <a href="https://docs.microsoft.com/en-us/azure/azure-app-configuration/concept-enable-rbac">https://docs.microsoft.com/en-us/azure/azure-app-configuration/concept-enable-rbac</a>. */
    authMode(value: 'key' | 'login'): az_appconfig_kv_export_command_builder;
    /** Combination of access key and endpoint of App Configuration. Can be found using 'az appconfig credential list'. Users can preset it using `az configure --defaults appconfig_connection_string=<connection_string>` or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING. */
    connectionString(value: string): az_appconfig_kv_export_command_builder;
    /** Auth mode for connecting to destination App Configuration. For details, refer to "--auth-mode" argument. */
    destAuthMode(value: 'key' | 'login'): az_appconfig_kv_export_command_builder;
    /** Combination of access key and endpoint of the destination store. */
    destConnectionString(value: string): az_appconfig_kv_export_command_builder;
    /** If --dest-auth-mode is "login", provide endpoint URL of the destination App Configuration. */
    destEndpoint(value: string): az_appconfig_kv_export_command_builder;
    /** Exported KVs will be labeled with this destination label. If neither --dest-label nor --preserve-labels is specified, will assign null label. */
    destLabel(value: string): az_appconfig_kv_export_command_builder;
    /** The name of the destination App Configuration. */
    destName(value: string): az_appconfig_kv_export_command_builder;
    /** If auth mode is "login", provide endpoint URL of the App Configuration. The endpoint can be retrieved using "az appconfig show" command. You can configure the default endpoint using `az configure --defaults appconfig_endpoint=<endpoint>`. */
    endpoint(value: string): az_appconfig_kv_export_command_builder;
    /** File format exporting to. Required for file arguments. Currently, feature flags are not supported in properties format. */
    format(value: 'json' | 'properties' | 'yaml'): az_appconfig_kv_export_command_builder;
    /** If no key specified, return all keys by default. Support star sign as filters, for instance abc\* means keys with abc as prefix. Key filtering not applicable for feature flags. By default, all feature flags with specified label will be exported. */
    key(value: string): az_appconfig_kv_export_command_builder;
    /** Only keys and feature flags with this label will be exported. If no label specified, export keys and feature flags with null label by default. Only when export destination is appconfig, we support star sign as filters, for instance \* means all labels and abc\* means labels with abc as prefix. Label filters are not supported when exporting to file or appservice. */
    label(value: string): az_appconfig_kv_export_command_builder;
    /** Name of the App Configuration. You can configure the default name using `az configure --defaults app_configuration_store=<name>`. */
    name(value: string): az_appconfig_kv_export_command_builder;
    /** Naming convention to be used for "Feature Management" section of file. Example: pascal = FeatureManagement, camel = featureManagement, underscore = feature_management, hyphen = feature-management. */
    namingConvention(value: 'camel' | 'hyphen' | 'pascal' | 'underscore'): az_appconfig_kv_export_command_builder;
    /** Local configuration file path. Required for file arguments. */
    path(value: string): az_appconfig_kv_export_command_builder;
    /** Prefix to be trimmed from keys. Prefix will be ignored for feature flags. */
    prefix(value: string): az_appconfig_kv_export_command_builder;
    /** Flag to preserve labels from source AppConfig. This argument should NOT be specified along with --dest-label. */
    preserveLabels(value: boolean): az_appconfig_kv_export_command_builder;
    /** Resolve the content of key vault reference. */
    resolveKeyvault(value: boolean): az_appconfig_kv_export_command_builder;
    /** Delimiter for flattening the key-value pairs to json or yaml file. Required for exporting hierarchical structure. Separator will be ignored for property files and feature flags. Supported values: '.', ',', ';', '-', '_', '__', '/', ':'. */
    separator(value: string): az_appconfig_kv_export_command_builder;
    /** Export items excluding all feature flags. By default, all features with the specified label will be exported to file or appconfig. Not applicable for appservice. */
    skipFeatures(value: boolean): az_appconfig_kv_export_command_builder;
    /** Export items excluding all key vault references. By default, all key vault references with the specified label will be exported. */
    skipKeyvault(value: boolean): az_appconfig_kv_export_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_appconfig_kv_export_command_builder;
    /** Do not prompt for preview. */
    yes(value: string): az_appconfig_kv_export_command_builder;
}
/**
 * Import configurations into your App Configuration from another place.
 *
 * Syntax:
 * ```
 * az appconfig kv import --source {appconfig, appservice, file}
 *                        [--appservice-account]
 *                        [--auth-mode {key, login}]
 *                        [--connection-string]
 *                        [--content-type]
 *                        [--depth]
 *                        [--endpoint]
 *                        [--format {json, properties, yaml}]
 *                        [--label]
 *                        [--name]
 *                        [--path]
 *                        [--prefix]
 *                        [--preserve-labels {false, true}]
 *                        [--separator]
 *                        [--skip-features {false, true}]
 *                        [--src-auth-mode {key, login}]
 *                        [--src-connection-string]
 *                        [--src-endpoint]
 *                        [--src-key]
 *                        [--src-label]
 *                        [--src-name]
 *                        [--subscription]
 *                        [--yes]
 * ```
 *
 * @param {'appconfig' | 'appservice' | 'file'} source The source of importing. Note that importing feature flags from appservice is not supported.
 */
declare class az_appconfig_kv_import_command_builder extends CommandBuilder<az_appconfig_kv_import_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, source: 'appconfig' | 'appservice' | 'file');
    /** The source of importing. Note that importing feature flags from appservice is not supported. */
    source(value: 'appconfig' | 'appservice' | 'file'): az_appconfig_kv_import_command_builder;
    /** ARM ID for AppService OR the name of the AppService, assuming it is in the same subscription and resource group as the App Configuration. Required for AppService arguments. */
    appserviceAccount(value: string): az_appconfig_kv_import_command_builder;
    /** This parameter can be used for indicating how a data operation is to be authorized. If the auth mode is "key", provide connection string or store name and your account access keys will be retrieved for authorization. If the auth mode is "login", provide the store endpoint or store name and your "az login" credentials will be used for authorization. You can configure the default auth mode using `az configure --defaults appconfig_auth_mode=<auth_mode>`. For more information, see <a href="https://docs.microsoft.com/en-us/azure/azure-app-configuration/concept-enable-rbac">https://docs.microsoft.com/en-us/azure/azure-app-configuration/concept-enable-rbac</a>. */
    authMode(value: 'key' | 'login'): az_appconfig_kv_import_command_builder;
    /** Combination of access key and endpoint of App Configuration. Can be found using 'az appconfig credential list'. Users can preset it using `az configure --defaults appconfig_connection_string=<connection_string>` or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING. */
    connectionString(value: string): az_appconfig_kv_import_command_builder;
    /** Content type of all imported items. */
    contentType(value: string): az_appconfig_kv_import_command_builder;
    /** Depth for flattening the json or yaml file to key-value pairs. Flatten to the deepest level by default if --separator is provided. Not applicable for property files or feature flags. */
    depth(value: string): az_appconfig_kv_import_command_builder;
    /** If auth mode is "login", provide endpoint URL of the App Configuration. The endpoint can be retrieved using "az appconfig show" command. You can configure the default endpoint using `az configure --defaults appconfig_endpoint=<endpoint>`. */
    endpoint(value: string): az_appconfig_kv_import_command_builder;
    /** Imported file format. Required for file arguments. Currently, feature flags are not supported in properties format. */
    format(value: 'json' | 'properties' | 'yaml'): az_appconfig_kv_import_command_builder;
    /** Imported KVs and feature flags will be assigned with this label. If no label specified, will assign null label. */
    label(value: string): az_appconfig_kv_import_command_builder;
    /** Name of the App Configuration. You can configure the default name using `az configure --defaults app_configuration_store=<name>`. */
    name(value: string): az_appconfig_kv_import_command_builder;
    /** Local configuration file path. Required for file arguments. */
    path(value: string): az_appconfig_kv_import_command_builder;
    /** This prefix will be appended to the front of imported keys. Prefix will be ignored for feature flags. */
    prefix(value: string): az_appconfig_kv_import_command_builder;
    /** Flag to preserve labels from source AppConfig. This argument should NOT be specified along with --label. */
    preserveLabels(value: boolean): az_appconfig_kv_import_command_builder;
    /** Delimiter for flattening the json or yaml file to key-value pairs. Separator will be ignored for property files and feature flags. Supported values: '.', ',', ';', '-', '_', '__', '/', ':'. */
    separator(value: string): az_appconfig_kv_import_command_builder;
    /** Import only key values and exclude all feature flags. By default, all feature flags will be imported from file or appconfig. Not applicable for appservice. */
    skipFeatures(value: boolean): az_appconfig_kv_import_command_builder;
    /** Auth mode for connecting to source App Configuration. For details, refer to "--auth-mode" argument. */
    srcAuthMode(value: 'key' | 'login'): az_appconfig_kv_import_command_builder;
    /** Combination of access key and endpoint of the source store. */
    srcConnectionString(value: string): az_appconfig_kv_import_command_builder;
    /** If --src-auth-mode is "login", provide endpoint URL of the source App Configuration. */
    srcEndpoint(value: string): az_appconfig_kv_import_command_builder;
    /** If no key specified, import all keys by default. Support star sign as filters, for instance abc\* means keys with abc as prefix. Key filtering not applicable for feature flags. By default, all feature flags with specified label will be imported. */
    srcKey(value: string): az_appconfig_kv_import_command_builder;
    /** Only keys with this label in source AppConfig will be imported. If no value specified, import keys with null label by default. Support star sign as filters, for instance \* means all labels, abc\* means labels with abc as prefix. */
    srcLabel(value: string): az_appconfig_kv_import_command_builder;
    /** The name of the source App Configuration. */
    srcName(value: string): az_appconfig_kv_import_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_appconfig_kv_import_command_builder;
    /** Do not prompt for preview. */
    yes(value: string): az_appconfig_kv_import_command_builder;
}
/**
 * List key-values.
 *
 * Syntax:
 * ```
 * az appconfig kv list [--all]
 *                      [--auth-mode {key, login}]
 *                      [--connection-string]
 *                      [--datetime]
 *                      [--endpoint]
 *                      [--fields {content_type, etag, key, label, last_modified, locked, tags, value}]
 *                      [--key]
 *                      [--label]
 *                      [--name]
 *                      [--query-examples]
 *                      [--resolve-keyvault {false, true}]
 *                      [--subscription]
 *                      [--top]
 * ```
 */
declare class az_appconfig_kv_list_command_builder extends CommandBuilder<az_appconfig_kv_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** List all items. */
    all(value: string): az_appconfig_kv_list_command_builder;
    /** This parameter can be used for indicating how a data operation is to be authorized. If the auth mode is "key", provide connection string or store name and your account access keys will be retrieved for authorization. If the auth mode is "login", provide the store endpoint or store name and your "az login" credentials will be used for authorization. You can configure the default auth mode using `az configure --defaults appconfig_auth_mode=<auth_mode>`. For more information, see <a href="https://docs.microsoft.com/en-us/azure/azure-app-configuration/concept-enable-rbac">https://docs.microsoft.com/en-us/azure/azure-app-configuration/concept-enable-rbac</a>. */
    authMode(value: 'key' | 'login'): az_appconfig_kv_list_command_builder;
    /** Combination of access key and endpoint of App Configuration. Can be found using 'az appconfig credential list'. Users can preset it using `az configure --defaults appconfig_connection_string=<connection_string>` or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING. */
    connectionString(value: string): az_appconfig_kv_list_command_builder;
    /** Format: "YYYY-MM-DDThh:mm:ssZ". If no time zone specified, use UTC by default. */
    datetime(value: string): az_appconfig_kv_list_command_builder;
    /** If auth mode is "login", provide endpoint URL of the App Configuration. The endpoint can be retrieved using "az appconfig show" command. You can configure the default endpoint using `az configure --defaults appconfig_endpoint=<endpoint>`. */
    endpoint(value: string): az_appconfig_kv_list_command_builder;
    /** Space-separated customized output fields. */
    fields(value: 'content_type' | 'etag' | 'key' | 'label' | 'last_modified' | 'locked' | 'tags' | 'value'): az_appconfig_kv_list_command_builder;
    /** If no key specified, return all keys by default. Support star sign as filters, for instance abc\* means keys with abc as prefix. */
    key(value: string): az_appconfig_kv_list_command_builder;
    /** If no label specified, list all labels. Support star sign as filters, for instance abc\* means labels with abc as prefix. Use '0' for null label. */
    label(value: string): az_appconfig_kv_list_command_builder;
    /** Name of the App Configuration. You can configure the default name using `az configure --defaults app_configuration_store=<name>`. */
    name(value: string): az_appconfig_kv_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_appconfig_kv_list_command_builder;
    /** Resolve the content of key vault reference. This argument should NOT be specified along with --fields. Instead use --query for customized query. */
    resolveKeyvault(value: boolean): az_appconfig_kv_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_appconfig_kv_list_command_builder;
    /** Maximum number of items to return. Must be a positive integer. Default to 100. */
    top(value: string): az_appconfig_kv_list_command_builder;
}
/**
 * Lock a key-value to prohibit write operations.
 *
 * Syntax:
 * ```
 * az appconfig kv lock --key
 *                      [--auth-mode {key, login}]
 *                      [--connection-string]
 *                      [--endpoint]
 *                      [--label]
 *                      [--name]
 *                      [--subscription]
 *                      [--yes]
 * ```
 *
 * @param {string} key Key to be locked.
 */
declare class az_appconfig_kv_lock_command_builder extends CommandBuilder<az_appconfig_kv_lock_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, key: string);
    /** Key to be locked. */
    key(value: string): az_appconfig_kv_lock_command_builder;
    /** This parameter can be used for indicating how a data operation is to be authorized. If the auth mode is "key", provide connection string or store name and your account access keys will be retrieved for authorization. If the auth mode is "login", provide the store endpoint or store name and your "az login" credentials will be used for authorization. You can configure the default auth mode using `az configure --defaults appconfig_auth_mode=<auth_mode>`. For more information, see <a href="https://docs.microsoft.com/en-us/azure/azure-app-configuration/concept-enable-rbac">https://docs.microsoft.com/en-us/azure/azure-app-configuration/concept-enable-rbac</a>. */
    authMode(value: 'key' | 'login'): az_appconfig_kv_lock_command_builder;
    /** Combination of access key and endpoint of App Configuration. Can be found using 'az appconfig credential list'. Users can preset it using `az configure --defaults appconfig_connection_string=<connection_string>` or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING. */
    connectionString(value: string): az_appconfig_kv_lock_command_builder;
    /** If auth mode is "login", provide endpoint URL of the App Configuration. The endpoint can be retrieved using "az appconfig show" command. You can configure the default endpoint using `az configure --defaults appconfig_endpoint=<endpoint>`. */
    endpoint(value: string): az_appconfig_kv_lock_command_builder;
    /** If no label specified, lock entry with null label. Filtering is not supported. */
    label(value: string): az_appconfig_kv_lock_command_builder;
    /** Name of the App Configuration. You can configure the default name using `az configure --defaults app_configuration_store=<name>`. */
    name(value: string): az_appconfig_kv_lock_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_appconfig_kv_lock_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_appconfig_kv_lock_command_builder;
}
/**
 * Restore key-values.
 *
 * Syntax:
 * ```
 * az appconfig kv restore --datetime
 *                         [--auth-mode {key, login}]
 *                         [--connection-string]
 *                         [--endpoint]
 *                         [--key]
 *                         [--label]
 *                         [--name]
 *                         [--subscription]
 *                         [--yes]
 * ```
 *
 * @param {string} datetime Format: "YYYY-MM-DDThh:mm:ssZ". If no time zone specified, use UTC by default.
 */
declare class az_appconfig_kv_restore_command_builder extends CommandBuilder<az_appconfig_kv_restore_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, datetime: string);
    /** Format: "YYYY-MM-DDThh:mm:ssZ". If no time zone specified, use UTC by default. */
    datetime(value: string): az_appconfig_kv_restore_command_builder;
    /** This parameter can be used for indicating how a data operation is to be authorized. If the auth mode is "key", provide connection string or store name and your account access keys will be retrieved for authorization. If the auth mode is "login", provide the store endpoint or store name and your "az login" credentials will be used for authorization. You can configure the default auth mode using `az configure --defaults appconfig_auth_mode=<auth_mode>`. For more information, see <a href="https://docs.microsoft.com/en-us/azure/azure-app-configuration/concept-enable-rbac">https://docs.microsoft.com/en-us/azure/azure-app-configuration/concept-enable-rbac</a>. */
    authMode(value: 'key' | 'login'): az_appconfig_kv_restore_command_builder;
    /** Combination of access key and endpoint of App Configuration. Can be found using 'az appconfig credential list'. Users can preset it using `az configure --defaults appconfig_connection_string=<connection_string>` or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING. */
    connectionString(value: string): az_appconfig_kv_restore_command_builder;
    /** If auth mode is "login", provide endpoint URL of the App Configuration. The endpoint can be retrieved using "az appconfig show" command. You can configure the default endpoint using `az configure --defaults appconfig_endpoint=<endpoint>`. */
    endpoint(value: string): az_appconfig_kv_restore_command_builder;
    /** If no key specified, restore all keys by default. Support star sign as filters, for instance abc\* means keys with abc as prefix. */
    key(value: string): az_appconfig_kv_restore_command_builder;
    /** If no label specified, restore all key-value pairs with all labels. Support star sign as filters, for instance abc\* means labels with abc as prefix. Use '0' for null label. */
    label(value: string): az_appconfig_kv_restore_command_builder;
    /** Name of the App Configuration. You can configure the default name using `az configure --defaults app_configuration_store=<name>`. */
    name(value: string): az_appconfig_kv_restore_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_appconfig_kv_restore_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_appconfig_kv_restore_command_builder;
}
/**
 * Set a key-value.
 *
 * Syntax:
 * ```
 * az appconfig kv set --key
 *                     [--auth-mode {key, login}]
 *                     [--connection-string]
 *                     [--content-type]
 *                     [--endpoint]
 *                     [--label]
 *                     [--name]
 *                     [--subscription]
 *                     [--tags]
 *                     [--value]
 *                     [--yes]
 * ```
 *
 * @param {string} key Key to be set. Key cannot be a '.' or '..', or contain the '%' character.
 */
declare class az_appconfig_kv_set_command_builder extends CommandBuilder<az_appconfig_kv_set_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, key: string);
    /** Key to be set. Key cannot be a '.' or '..', or contain the '%' character. */
    key(value: string): az_appconfig_kv_set_command_builder;
    /** This parameter can be used for indicating how a data operation is to be authorized. If the auth mode is "key", provide connection string or store name and your account access keys will be retrieved for authorization. If the auth mode is "login", provide the store endpoint or store name and your "az login" credentials will be used for authorization. You can configure the default auth mode using `az configure --defaults appconfig_auth_mode=<auth_mode>`. For more information, see <a href="https://docs.microsoft.com/en-us/azure/azure-app-configuration/concept-enable-rbac">https://docs.microsoft.com/en-us/azure/azure-app-configuration/concept-enable-rbac</a>. */
    authMode(value: 'key' | 'login'): az_appconfig_kv_set_command_builder;
    /** Combination of access key and endpoint of App Configuration. Can be found using 'az appconfig credential list'. Users can preset it using `az configure --defaults appconfig_connection_string=<connection_string>` or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING. */
    connectionString(value: string): az_appconfig_kv_set_command_builder;
    /** Content type of the keyvalue to be set. */
    contentType(value: string): az_appconfig_kv_set_command_builder;
    /** If auth mode is "login", provide endpoint URL of the App Configuration. The endpoint can be retrieved using "az appconfig show" command. You can configure the default endpoint using `az configure --defaults appconfig_endpoint=<endpoint>`. */
    endpoint(value: string): az_appconfig_kv_set_command_builder;
    /** If no label specified, set the key with null label by default. */
    label(value: string): az_appconfig_kv_set_command_builder;
    /** Name of the App Configuration. You can configure the default name using `az configure --defaults app_configuration_store=<name>`. */
    name(value: string): az_appconfig_kv_set_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_appconfig_kv_set_command_builder;
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_appconfig_kv_set_command_builder;
    /** Value of the keyvalue to be set. */
    value(value: string): az_appconfig_kv_set_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_appconfig_kv_set_command_builder;
}
/**
 * Set a keyvault reference.
 *
 * Syntax:
 * ```
 * az appconfig kv set-keyvault --key
 *                              --secret-identifier
 *                              [--auth-mode {key, login}]
 *                              [--connection-string]
 *                              [--endpoint]
 *                              [--label]
 *                              [--name]
 *                              [--subscription]
 *                              [--tags]
 *                              [--yes]
 * ```
 *
 * @param {string} key Key to be set. Key cannot be a '.' or '..', or contain the '%' character.
 * @param {string} secretIdentifier ID of the Key Vault object. Can be found using 'az keyvault {collection} show' command, where collection is key, secret or certificate. To set reference to the latest version of your secret, remove version information from secret identifier.
 */
declare class az_appconfig_kv_set_keyvault_command_builder extends CommandBuilder<az_appconfig_kv_set_keyvault_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, key: string, secretIdentifier: string);
    /** Key to be set. Key cannot be a '.' or '..', or contain the '%' character. */
    key(value: string): az_appconfig_kv_set_keyvault_command_builder;
    /** ID of the Key Vault object. Can be found using 'az keyvault {collection} show' command, where collection is key, secret or certificate. To set reference to the latest version of your secret, remove version information from secret identifier. */
    secretIdentifier(value: string): az_appconfig_kv_set_keyvault_command_builder;
    /** This parameter can be used for indicating how a data operation is to be authorized. If the auth mode is "key", provide connection string or store name and your account access keys will be retrieved for authorization. If the auth mode is "login", provide the store endpoint or store name and your "az login" credentials will be used for authorization. You can configure the default auth mode using `az configure --defaults appconfig_auth_mode=<auth_mode>`. For more information, see <a href="https://docs.microsoft.com/en-us/azure/azure-app-configuration/concept-enable-rbac">https://docs.microsoft.com/en-us/azure/azure-app-configuration/concept-enable-rbac</a>. */
    authMode(value: 'key' | 'login'): az_appconfig_kv_set_keyvault_command_builder;
    /** Combination of access key and endpoint of App Configuration. Can be found using 'az appconfig credential list'. Users can preset it using `az configure --defaults appconfig_connection_string=<connection_string>` or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING. */
    connectionString(value: string): az_appconfig_kv_set_keyvault_command_builder;
    /** If auth mode is "login", provide endpoint URL of the App Configuration. The endpoint can be retrieved using "az appconfig show" command. You can configure the default endpoint using `az configure --defaults appconfig_endpoint=<endpoint>`. */
    endpoint(value: string): az_appconfig_kv_set_keyvault_command_builder;
    /** If no label specified, set the key with null label by default. */
    label(value: string): az_appconfig_kv_set_keyvault_command_builder;
    /** Name of the App Configuration. You can configure the default name using `az configure --defaults app_configuration_store=<name>`. */
    name(value: string): az_appconfig_kv_set_keyvault_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_appconfig_kv_set_keyvault_command_builder;
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_appconfig_kv_set_keyvault_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_appconfig_kv_set_keyvault_command_builder;
}
/**
 * Show all attributes of a key-value.
 *
 * Syntax:
 * ```
 * az appconfig kv show --key
 *                      [--auth-mode {key, login}]
 *                      [--connection-string]
 *                      [--datetime]
 *                      [--endpoint]
 *                      [--label]
 *                      [--name]
 *                      [--query-examples]
 *                      [--subscription]
 * ```
 *
 * @param {string} key Key to be showed.
 */
declare class az_appconfig_kv_show_command_builder extends CommandBuilder<az_appconfig_kv_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, key: string);
    /** Key to be showed. */
    key(value: string): az_appconfig_kv_show_command_builder;
    /** This parameter can be used for indicating how a data operation is to be authorized. If the auth mode is "key", provide connection string or store name and your account access keys will be retrieved for authorization. If the auth mode is "login", provide the store endpoint or store name and your "az login" credentials will be used for authorization. You can configure the default auth mode using `az configure --defaults appconfig_auth_mode=<auth_mode>`. For more information, see <a href="https://docs.microsoft.com/en-us/azure/azure-app-configuration/concept-enable-rbac">https://docs.microsoft.com/en-us/azure/azure-app-configuration/concept-enable-rbac</a>. */
    authMode(value: 'key' | 'login'): az_appconfig_kv_show_command_builder;
    /** Combination of access key and endpoint of App Configuration. Can be found using 'az appconfig credential list'. Users can preset it using `az configure --defaults appconfig_connection_string=<connection_string>` or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING. */
    connectionString(value: string): az_appconfig_kv_show_command_builder;
    /** Format: "YYYY-MM-DDThh:mm:ssZ". If no time zone specified, use UTC by default. */
    datetime(value: string): az_appconfig_kv_show_command_builder;
    /** If auth mode is "login", provide endpoint URL of the App Configuration. The endpoint can be retrieved using "az appconfig show" command. You can configure the default endpoint using `az configure --defaults appconfig_endpoint=<endpoint>`. */
    endpoint(value: string): az_appconfig_kv_show_command_builder;
    /** If no label specified, show entry with null label. Filtering is not supported. */
    label(value: string): az_appconfig_kv_show_command_builder;
    /** Name of the App Configuration. You can configure the default name using `az configure --defaults app_configuration_store=<name>`. */
    name(value: string): az_appconfig_kv_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_appconfig_kv_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_appconfig_kv_show_command_builder;
}
/**
 * Unlock a key-value to gain write operations.
 *
 * Syntax:
 * ```
 * az appconfig kv unlock --key
 *                        [--auth-mode {key, login}]
 *                        [--connection-string]
 *                        [--endpoint]
 *                        [--label]
 *                        [--name]
 *                        [--subscription]
 *                        [--yes]
 * ```
 *
 * @param {string} key Key to be unlocked.
 */
declare class az_appconfig_kv_unlock_command_builder extends CommandBuilder<az_appconfig_kv_unlock_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, key: string);
    /** Key to be unlocked. */
    key(value: string): az_appconfig_kv_unlock_command_builder;
    /** This parameter can be used for indicating how a data operation is to be authorized. If the auth mode is "key", provide connection string or store name and your account access keys will be retrieved for authorization. If the auth mode is "login", provide the store endpoint or store name and your "az login" credentials will be used for authorization. You can configure the default auth mode using `az configure --defaults appconfig_auth_mode=<auth_mode>`. For more information, see <a href="https://docs.microsoft.com/en-us/azure/azure-app-configuration/concept-enable-rbac">https://docs.microsoft.com/en-us/azure/azure-app-configuration/concept-enable-rbac</a>. */
    authMode(value: 'key' | 'login'): az_appconfig_kv_unlock_command_builder;
    /** Combination of access key and endpoint of App Configuration. Can be found using 'az appconfig credential list'. Users can preset it using `az configure --defaults appconfig_connection_string=<connection_string>` or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING. */
    connectionString(value: string): az_appconfig_kv_unlock_command_builder;
    /** If auth mode is "login", provide endpoint URL of the App Configuration. The endpoint can be retrieved using "az appconfig show" command. You can configure the default endpoint using `az configure --defaults appconfig_endpoint=<endpoint>`. */
    endpoint(value: string): az_appconfig_kv_unlock_command_builder;
    /** If no label specified, unlock entry with null label. Filtering is not supported. */
    label(value: string): az_appconfig_kv_unlock_command_builder;
    /** Name of the App Configuration. You can configure the default name using `az configure --defaults app_configuration_store=<name>`. */
    name(value: string): az_appconfig_kv_unlock_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_appconfig_kv_unlock_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_appconfig_kv_unlock_command_builder;
}
/**
 * Lists revision history of key-values.
 *
 * Syntax:
 * ```
 * az appconfig revision list [--all]
 *                            [--auth-mode {key, login}]
 *                            [--connection-string]
 *                            [--datetime]
 *                            [--endpoint]
 *                            [--fields {content_type, etag, key, label, last_modified, locked, tags, value}]
 *                            [--key]
 *                            [--label]
 *                            [--name]
 *                            [--query-examples]
 *                            [--subscription]
 *                            [--top]
 * ```
 */
declare class az_appconfig_revision_list_command_builder extends CommandBuilder<az_appconfig_revision_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** List all items. */
    all(value: string): az_appconfig_revision_list_command_builder;
    /** This parameter can be used for indicating how a data operation is to be authorized. If the auth mode is "key", provide connection string or store name and your account access keys will be retrieved for authorization. If the auth mode is "login", provide the store endpoint or store name and your "az login" credentials will be used for authorization. You can configure the default auth mode using `az configure --defaults appconfig_auth_mode=<auth_mode>`. For more information, see <a href="https://docs.microsoft.com/en-us/azure/azure-app-configuration/concept-enable-rbac">https://docs.microsoft.com/en-us/azure/azure-app-configuration/concept-enable-rbac</a>. */
    authMode(value: 'key' | 'login'): az_appconfig_revision_list_command_builder;
    /** Combination of access key and endpoint of App Configuration. Can be found using 'az appconfig credential list'. Users can preset it using `az configure --defaults appconfig_connection_string=<connection_string>` or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING. */
    connectionString(value: string): az_appconfig_revision_list_command_builder;
    /** Format: "YYYY-MM-DDThh:mm:ssZ". If no time zone specified, use UTC by default. */
    datetime(value: string): az_appconfig_revision_list_command_builder;
    /** If auth mode is "login", provide endpoint URL of the App Configuration. The endpoint can be retrieved using "az appconfig show" command. You can configure the default endpoint using `az configure --defaults appconfig_endpoint=<endpoint>`. */
    endpoint(value: string): az_appconfig_revision_list_command_builder;
    /** Space-separated customized output fields. */
    fields(value: 'content_type' | 'etag' | 'key' | 'label' | 'last_modified' | 'locked' | 'tags' | 'value'): az_appconfig_revision_list_command_builder;
    /** If no key specified, return all keys by default. Support star sign as filters, for instance abc\* means keys with abc as prefix. */
    key(value: string): az_appconfig_revision_list_command_builder;
    /** If no label specified, list all labels. Support star sign as filters, for instance abc\* means labels with abc as prefix. Use '0' for null label. */
    label(value: string): az_appconfig_revision_list_command_builder;
    /** Name of the App Configuration. You can configure the default name using `az configure --defaults app_configuration_store=<name>`. */
    name(value: string): az_appconfig_revision_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_appconfig_revision_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_appconfig_revision_list_command_builder;
    /** Maximum number of items to return. Must be a positive integer. Default to 100. */
    top(value: string): az_appconfig_revision_list_command_builder;
}
/**
 * Create an App Configuration.
 *
 * Syntax:
 * ```
 * az appconfig create --location
 *                     --name
 *                     --resource-group
 *                     [--assign-identity]
 *                     [--enable-public-network {false, true}]
 *                     [--sku {Free, Standard}]
 *                     [--subscription]
 * ```
 *
 * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
 * @param {string} name Name of the App Configuration. You can configure the default name using `az configure --defaults app_configuration_store=<name>`.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_appconfig_create_command_builder extends CommandBuilder<az_appconfig_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, location: string, name: string, resourceGroup: string);
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_appconfig_create_command_builder;
    /** Name of the App Configuration. You can configure the default name using `az configure --defaults app_configuration_store=<name>`. */
    name(value: string): az_appconfig_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_appconfig_create_command_builder;
    /** Accept system or user assigned identities separated by spaces. Use '[system]' to refer system assigned identity or a resource id to refer user assigned identity. Use system assigned identity if not specified. */
    assignIdentity(value: string): az_appconfig_create_command_builder;
    /** When true, requests coming from public networks have permission to access this store while private endpoint is enabled. When false, only requests made through Private Links can reach this store. */
    enablePublicNetwork(value: boolean): az_appconfig_create_command_builder;
    /** The sku of App Configuration. */
    sku(value: 'Free' | 'Standard'): az_appconfig_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_appconfig_create_command_builder;
}
/**
 * Delete an App Configuration.
 *
 * Syntax:
 * ```
 * az appconfig delete --name
 *                     [--resource-group]
 *                     [--subscription]
 *                     [--yes]
 * ```
 *
 * @param {string} name Name of the App Configuration. You can configure the default name using `az configure --defaults app_configuration_store=<name>`.
 */
declare class az_appconfig_delete_command_builder extends CommandBuilder<az_appconfig_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** Name of the App Configuration. You can configure the default name using `az configure --defaults app_configuration_store=<name>`. */
    name(value: string): az_appconfig_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_appconfig_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_appconfig_delete_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_appconfig_delete_command_builder;
}
/**
 * Lists all App Configurations under the current subscription.
 *
 * Syntax:
 * ```
 * az appconfig list [--query-examples]
 *                   [--resource-group]
 *                   [--subscription]
 * ```
 */
declare class az_appconfig_list_command_builder extends CommandBuilder<az_appconfig_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_appconfig_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_appconfig_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_appconfig_list_command_builder;
}
/**
 * Show properties of an App Configuration.
 *
 * Syntax:
 * ```
 * az appconfig show --name
 *                   [--query-examples]
 *                   [--resource-group]
 *                   [--subscription]
 * ```
 *
 * @param {string} name Name of the App Configuration. You can configure the default name using `az configure --defaults app_configuration_store=<name>`.
 */
declare class az_appconfig_show_command_builder extends CommandBuilder<az_appconfig_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** Name of the App Configuration. You can configure the default name using `az configure --defaults app_configuration_store=<name>`. */
    name(value: string): az_appconfig_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_appconfig_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_appconfig_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_appconfig_show_command_builder;
}
/**
 * Update an App Configuration.
 *
 * Syntax:
 * ```
 * az appconfig update --name
 *                     [--enable-public-network {false, true}]
 *                     [--encryption-key-name]
 *                     [--encryption-key-vault]
 *                     [--encryption-key-version]
 *                     [--identity-client-id]
 *                     [--resource-group]
 *                     [--sku {Free, Standard}]
 *                     [--subscription]
 *                     [--tags]
 * ```
 *
 * @param {string} name Name of the App Configuration. You can configure the default name using `az configure --defaults app_configuration_store=<name>`.
 */
declare class az_appconfig_update_command_builder extends CommandBuilder<az_appconfig_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** Name of the App Configuration. You can configure the default name using `az configure --defaults app_configuration_store=<name>`. */
    name(value: string): az_appconfig_update_command_builder;
    /** When true, requests coming from public networks have permission to access this store while private endpoint is enabled. When false, only requests made through Private Links can reach this store. */
    enablePublicNetwork(value: boolean): az_appconfig_update_command_builder;
    /** The name of the KeyVault key. */
    encryptionKeyName(value: string): az_appconfig_update_command_builder;
    /** The URI of the KeyVault. */
    encryptionKeyVault(value: string): az_appconfig_update_command_builder;
    /** The version of the KeyVault key. Use the latest version by default. */
    encryptionKeyVersion(value: string): az_appconfig_update_command_builder;
    /** Client ID of the managed identity with wrap and unwrap access to encryption key. Use system assigned identity by default. */
    identityClientId(value: string): az_appconfig_update_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_appconfig_update_command_builder;
    /** The sku of App Configuration. */
    sku(value: 'Free' | 'Standard'): az_appconfig_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_appconfig_update_command_builder;
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_appconfig_update_command_builder;
}
export {};
