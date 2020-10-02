"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.az_appconfig = exports.az_appconfig_revision = exports.az_appconfig_kv = exports.az_appconfig_identity = exports.az_appconfig_feature = exports.az_appconfig_feature_filter = exports.az_appconfig_credential = void 0;
var base_1 = require("../base");
/** Manage credentials for App Configurations. */
var az_appconfig_credential = /** @class */ (function () {
    function az_appconfig_credential() {
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
    az_appconfig_credential.list = function (name) {
        return new az_appconfig_credential_list_command_builder("az appconfig credential list", 'az_appconfig_credential_list_command_result', name);
    };
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
    az_appconfig_credential.regenerate = function (id, name) {
        return new az_appconfig_credential_regenerate_command_builder("az appconfig credential regenerate", 'az_appconfig_credential_regenerate_command_result', id, name);
    };
    return az_appconfig_credential;
}());
exports.az_appconfig_credential = az_appconfig_credential;
/** Manage filters associated with feature flags stored in an App Configuration. */
var az_appconfig_feature_filter = /** @class */ (function () {
    function az_appconfig_feature_filter() {
    }
    /**
     * Add a filter to a feature flag.
     *
     * Syntax:
     * ```
     * az appconfig feature filter add --feature
     *                                 --filter-name
     *                                 [--connection-string]
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
    az_appconfig_feature_filter.add = function (feature, filterName) {
        return new az_appconfig_feature_filter_add_command_builder("az appconfig feature filter add", 'az_appconfig_feature_filter_add_command_result', feature, filterName);
    };
    /**
     * Delete a filter from a feature flag.
     *
     * Syntax:
     * ```
     * az appconfig feature filter delete --feature
     *                                    [--all]
     *                                    [--connection-string]
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
    az_appconfig_feature_filter["delete"] = function (feature) {
        return new az_appconfig_feature_filter_delete_command_builder("az appconfig feature filter delete", 'az_appconfig_feature_filter_delete_command_result', feature);
    };
    /**
     * List all filters for a feature flag.
     *
     * Syntax:
     * ```
     * az appconfig feature filter list --feature
     *                                  [--all]
     *                                  [--connection-string]
     *                                  [--label]
     *                                  [--name]
     *                                  [--query-examples]
     *                                  [--subscription]
     *                                  [--top]
     * ```
     *
     * @param {string} feature Name of the feature whose filters you want to be displayed.
     */
    az_appconfig_feature_filter.list = function (feature) {
        return new az_appconfig_feature_filter_list_command_builder("az appconfig feature filter list", 'az_appconfig_feature_filter_list_command_result', feature);
    };
    /**
     * Show filters of a feature flag.
     *
     * Syntax:
     * ```
     * az appconfig feature filter show --feature
     *                                  --filter-name
     *                                  [--connection-string]
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
    az_appconfig_feature_filter.show = function (feature, filterName) {
        return new az_appconfig_feature_filter_show_command_builder("az appconfig feature filter show", 'az_appconfig_feature_filter_show_command_result', feature, filterName);
    };
    return az_appconfig_feature_filter;
}());
exports.az_appconfig_feature_filter = az_appconfig_feature_filter;
/** Manage feature flags stored in an App Configuration. */
var az_appconfig_feature = /** @class */ (function () {
    function az_appconfig_feature() {
    }
    /**
     * Delete feature flag.
     *
     * Syntax:
     * ```
     * az appconfig feature delete --feature
     *                             [--connection-string]
     *                             [--label]
     *                             [--name]
     *                             [--subscription]
     *                             [--yes]
     * ```
     *
     * @param {string} feature Key of the feature to be deleted. Support star sign as filters, for instance \* means all key and abc\* means keys with abc as prefix. Comma separated keys are not supported. Please provide escaped string if your feature name contains comma.
     */
    az_appconfig_feature["delete"] = function (feature) {
        return new az_appconfig_feature_delete_command_builder("az appconfig feature delete", 'az_appconfig_feature_delete_command_result', feature);
    };
    /**
     * Disable a feature flag to turn it OFF for use.
     *
     * Syntax:
     * ```
     * az appconfig feature disable --feature
     *                              [--connection-string]
     *                              [--label]
     *                              [--name]
     *                              [--subscription]
     *                              [--yes]
     * ```
     *
     * @param {string} feature Key of the feature to be disabled.
     */
    az_appconfig_feature.disable = function (feature) {
        return new az_appconfig_feature_disable_command_builder("az appconfig feature disable", 'az_appconfig_feature_disable_command_result', feature);
    };
    /**
     * Enable a feature flag to turn it ON for use.
     *
     * Syntax:
     * ```
     * az appconfig feature enable --feature
     *                             [--connection-string]
     *                             [--label]
     *                             [--name]
     *                             [--subscription]
     *                             [--yes]
     * ```
     *
     * @param {string} feature Key of the feature to be enabled.
     */
    az_appconfig_feature.enable = function (feature) {
        return new az_appconfig_feature_enable_command_builder("az appconfig feature enable", 'az_appconfig_feature_enable_command_result', feature);
    };
    /**
     * List feature flags.
     *
     * Syntax:
     * ```
     * az appconfig feature list [--all]
     *                           [--connection-string]
     *                           [--feature]
     *                           [--fields {conditions, description, key, label, last_modified, locked, state}]
     *                           [--label]
     *                           [--name]
     *                           [--query-examples]
     *                           [--subscription]
     *                           [--top]
     * ```
     */
    az_appconfig_feature.list = function () {
        return new az_appconfig_feature_list_command_builder("az appconfig feature list", 'az_appconfig_feature_list_command_result');
    };
    /**
     * Lock a feature flag to prohibit write operations.
     *
     * Syntax:
     * ```
     * az appconfig feature lock --feature
     *                           [--connection-string]
     *                           [--label]
     *                           [--name]
     *                           [--subscription]
     *                           [--yes]
     * ```
     *
     * @param {string} feature Key of the feature to be locked.
     */
    az_appconfig_feature.lock = function (feature) {
        return new az_appconfig_feature_lock_command_builder("az appconfig feature lock", 'az_appconfig_feature_lock_command_result', feature);
    };
    /**
     * Set a feature flag.
     *
     * Syntax:
     * ```
     * az appconfig feature set --feature
     *                          [--connection-string]
     *                          [--description]
     *                          [--label]
     *                          [--name]
     *                          [--subscription]
     *                          [--yes]
     * ```
     *
     * @param {string} feature Name of the feature flag to be set. Only alphanumeric characters, '.', '-' and '_' are allowed.
     */
    az_appconfig_feature.set = function (feature) {
        return new az_appconfig_feature_set_command_builder("az appconfig feature set", 'az_appconfig_feature_set_command_result', feature);
    };
    /**
     * Show all attributes of a feature flag.
     *
     * Syntax:
     * ```
     * az appconfig feature show --feature
     *                           [--connection-string]
     *                           [--fields {conditions, description, key, label, last_modified, locked, state}]
     *                           [--label]
     *                           [--name]
     *                           [--query-examples]
     *                           [--subscription]
     * ```
     *
     * @param {string} feature Name of the feature flag to be retrieved.
     */
    az_appconfig_feature.show = function (feature) {
        return new az_appconfig_feature_show_command_builder("az appconfig feature show", 'az_appconfig_feature_show_command_result', feature);
    };
    /**
     * Unlock a feature to gain write operations.
     *
     * Syntax:
     * ```
     * az appconfig feature unlock --feature
     *                             [--connection-string]
     *                             [--label]
     *                             [--name]
     *                             [--subscription]
     *                             [--yes]
     * ```
     *
     * @param {string} feature Key of the feature to be unlocked.
     */
    az_appconfig_feature.unlock = function (feature) {
        return new az_appconfig_feature_unlock_command_builder("az appconfig feature unlock", 'az_appconfig_feature_unlock_command_result', feature);
    };
    return az_appconfig_feature;
}());
exports.az_appconfig_feature = az_appconfig_feature;
/** Managed identities for App Configurations. */
var az_appconfig_identity = /** @class */ (function () {
    function az_appconfig_identity() {
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
    az_appconfig_identity.assign = function (name) {
        return new az_appconfig_identity_assign_command_builder("az appconfig identity assign", 'az_appconfig_identity_assign_command_result', name);
    };
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
    az_appconfig_identity.remove = function (name) {
        return new az_appconfig_identity_remove_command_builder("az appconfig identity remove", 'az_appconfig_identity_remove_command_result', name);
    };
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
    az_appconfig_identity.show = function (name) {
        return new az_appconfig_identity_show_command_builder("az appconfig identity show", 'az_appconfig_identity_show_command_result', name);
    };
    return az_appconfig_identity;
}());
exports.az_appconfig_identity = az_appconfig_identity;
/** Manage key-values stored in an App Configuration. */
var az_appconfig_kv = /** @class */ (function () {
    function az_appconfig_kv() {
    }
    /**
     * Delete key-values.
     *
     * Syntax:
     * ```
     * az appconfig kv delete --key
     *                        [--connection-string]
     *                        [--label]
     *                        [--name]
     *                        [--subscription]
     *                        [--yes]
     * ```
     *
     * @param {string} key Support star sign as filters, for instance \* means all key and abc\* means keys with abc as prefix.
     */
    az_appconfig_kv["delete"] = function (key) {
        return new az_appconfig_kv_delete_command_builder("az appconfig kv delete", 'az_appconfig_kv_delete_command_result', key);
    };
    /**
     * Export configurations to another place from your App Configuration.
     *
     * Syntax:
     * ```
     * az appconfig kv export --destination {appconfig, appservice, file}
     *                        [--appservice-account]
     *                        [--connection-string]
     *                        [--dest-connection-string]
     *                        [--dest-label]
     *                        [--dest-name]
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
    az_appconfig_kv["export"] = function (destination) {
        return new az_appconfig_kv_export_command_builder("az appconfig kv export", 'az_appconfig_kv_export_command_result', destination);
    };
    /**
     * Import configurations into your App Configuration from another place.
     *
     * Syntax:
     * ```
     * az appconfig kv import --source {appconfig, appservice, file}
     *                        [--appservice-account]
     *                        [--connection-string]
     *                        [--content-type]
     *                        [--depth]
     *                        [--format {json, properties, yaml}]
     *                        [--label]
     *                        [--name]
     *                        [--path]
     *                        [--prefix]
     *                        [--preserve-labels {false, true}]
     *                        [--separator]
     *                        [--skip-features {false, true}]
     *                        [--src-connection-string]
     *                        [--src-key]
     *                        [--src-label]
     *                        [--src-name]
     *                        [--subscription]
     *                        [--yes]
     * ```
     *
     * @param {'appconfig' | 'appservice' | 'file'} source The source of importing. Note that importing feature flags from appservice is not supported.
     */
    az_appconfig_kv["import"] = function (source) {
        return new az_appconfig_kv_import_command_builder("az appconfig kv import", 'az_appconfig_kv_import_command_result', source);
    };
    /**
     * List key-values.
     *
     * Syntax:
     * ```
     * az appconfig kv list [--all]
     *                      [--connection-string]
     *                      [--datetime]
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
    az_appconfig_kv.list = function () {
        return new az_appconfig_kv_list_command_builder("az appconfig kv list", 'az_appconfig_kv_list_command_result');
    };
    /**
     * Lock a key-value to prohibit write operations.
     *
     * Syntax:
     * ```
     * az appconfig kv lock --key
     *                      [--connection-string]
     *                      [--label]
     *                      [--name]
     *                      [--subscription]
     *                      [--yes]
     * ```
     *
     * @param {string} key Key to be locked.
     */
    az_appconfig_kv.lock = function (key) {
        return new az_appconfig_kv_lock_command_builder("az appconfig kv lock", 'az_appconfig_kv_lock_command_result', key);
    };
    /**
     * Restore key-values.
     *
     * Syntax:
     * ```
     * az appconfig kv restore --datetime
     *                         [--connection-string]
     *                         [--key]
     *                         [--label]
     *                         [--name]
     *                         [--subscription]
     *                         [--yes]
     * ```
     *
     * @param {string} datetime Format: "YYYY-MM-DDThh:mm:ssZ". If no time zone specified, use UTC by default.
     */
    az_appconfig_kv.restore = function (datetime) {
        return new az_appconfig_kv_restore_command_builder("az appconfig kv restore", 'az_appconfig_kv_restore_command_result', datetime);
    };
    /**
     * Set a key-value.
     *
     * Syntax:
     * ```
     * az appconfig kv set --key
     *                     [--connection-string]
     *                     [--content-type]
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
    az_appconfig_kv.set = function (key) {
        return new az_appconfig_kv_set_command_builder("az appconfig kv set", 'az_appconfig_kv_set_command_result', key);
    };
    /**
     * Set a keyvault reference.
     *
     * Syntax:
     * ```
     * az appconfig kv set-keyvault --key
     *                              --secret-identifier
     *                              [--connection-string]
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
    az_appconfig_kv.set_keyvault = function (key, secretIdentifier) {
        return new az_appconfig_kv_set_keyvault_command_builder("az appconfig kv set-keyvault", 'az_appconfig_kv_set_keyvault_command_result', key, secretIdentifier);
    };
    /**
     * Show all attributes of a key-value.
     *
     * Syntax:
     * ```
     * az appconfig kv show --key
     *                      [--connection-string]
     *                      [--datetime]
     *                      [--label]
     *                      [--name]
     *                      [--query-examples]
     *                      [--subscription]
     * ```
     *
     * @param {string} key Key to be showed.
     */
    az_appconfig_kv.show = function (key) {
        return new az_appconfig_kv_show_command_builder("az appconfig kv show", 'az_appconfig_kv_show_command_result', key);
    };
    /**
     * Unlock a key-value to gain write operations.
     *
     * Syntax:
     * ```
     * az appconfig kv unlock --key
     *                        [--connection-string]
     *                        [--label]
     *                        [--name]
     *                        [--subscription]
     *                        [--yes]
     * ```
     *
     * @param {string} key Key to be unlocked.
     */
    az_appconfig_kv.unlock = function (key) {
        return new az_appconfig_kv_unlock_command_builder("az appconfig kv unlock", 'az_appconfig_kv_unlock_command_result', key);
    };
    return az_appconfig_kv;
}());
exports.az_appconfig_kv = az_appconfig_kv;
/** Manage revisions for key-values stored in an App Configuration. */
var az_appconfig_revision = /** @class */ (function () {
    function az_appconfig_revision() {
    }
    /**
     * Lists revision history of key-values.
     *
     * Syntax:
     * ```
     * az appconfig revision list [--all]
     *                            [--connection-string]
     *                            [--datetime]
     *                            [--fields {content_type, etag, key, label, last_modified, locked, tags, value}]
     *                            [--key]
     *                            [--label]
     *                            [--name]
     *                            [--query-examples]
     *                            [--subscription]
     *                            [--top]
     * ```
     */
    az_appconfig_revision.list = function () {
        return new az_appconfig_revision_list_command_builder("az appconfig revision list", 'az_appconfig_revision_list_command_result');
    };
    return az_appconfig_revision;
}());
exports.az_appconfig_revision = az_appconfig_revision;
/** Manage App Configurations. */
var az_appconfig = /** @class */ (function () {
    function az_appconfig() {
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
    az_appconfig.create = function (location, name, resourceGroup) {
        return new az_appconfig_create_command_builder("az appconfig create", 'az_appconfig_create_command_result', location, name, resourceGroup);
    };
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
    az_appconfig["delete"] = function (name) {
        return new az_appconfig_delete_command_builder("az appconfig delete", 'az_appconfig_delete_command_result', name);
    };
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
    az_appconfig.list = function () {
        return new az_appconfig_list_command_builder("az appconfig list", 'az_appconfig_list_command_result');
    };
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
    az_appconfig.show = function (name) {
        return new az_appconfig_show_command_builder("az appconfig show", 'az_appconfig_show_command_result', name);
    };
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
    az_appconfig.update = function (name) {
        return new az_appconfig_update_command_builder("az appconfig update", 'az_appconfig_update_command_result', name);
    };
    return az_appconfig;
}());
exports.az_appconfig = az_appconfig;
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
var az_appconfig_credential_list_command_builder = /** @class */ (function (_super) {
    __extends(az_appconfig_credential_list_command_builder, _super);
    function az_appconfig_credential_list_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** Name of the App Configuration. You can configure the default name using `az configure --defaults app_configuration_store=<name>`. */
    az_appconfig_credential_list_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_appconfig_credential_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_appconfig_credential_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_appconfig_credential_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_appconfig_credential_list_command_builder;
}(base_1.CommandBuilder));
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
var az_appconfig_credential_regenerate_command_builder = /** @class */ (function (_super) {
    __extends(az_appconfig_credential_regenerate_command_builder, _super);
    function az_appconfig_credential_regenerate_command_builder(commandPath, resultDataTypeName, id, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.id(id);
        _this.name(name);
        return _this;
    }
    /** Id of the key to be regenerated. Can be found using az appconfig credential list command. */
    az_appconfig_credential_regenerate_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Name of the App Configuration. You can configure the default name using `az configure --defaults app_configuration_store=<name>`. */
    az_appconfig_credential_regenerate_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_appconfig_credential_regenerate_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_appconfig_credential_regenerate_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_appconfig_credential_regenerate_command_builder;
}(base_1.CommandBuilder));
/**
 * Add a filter to a feature flag.
 *
 * Syntax:
 * ```
 * az appconfig feature filter add --feature
 *                                 --filter-name
 *                                 [--connection-string]
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
var az_appconfig_feature_filter_add_command_builder = /** @class */ (function (_super) {
    __extends(az_appconfig_feature_filter_add_command_builder, _super);
    function az_appconfig_feature_filter_add_command_builder(commandPath, resultDataTypeName, feature, filterName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.feature(feature);
        _this.filterName(filterName);
        return _this;
    }
    /** Name of the feature to which you want to add the filter. */
    az_appconfig_feature_filter_add_command_builder.prototype.feature = function (value) {
        this.setFlag("--feature", value);
        return this;
    };
    /** Name of the filter to be added. */
    az_appconfig_feature_filter_add_command_builder.prototype.filterName = function (value) {
        this.setFlag("--filter-name", value);
        return this;
    };
    /** Combination of access key and endpoint of App Configuration. Can be found using 'az appconfig credential list'. Users can preset it using `az configure --defaults appconfig_connection_string=<connection_string>` or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING. */
    az_appconfig_feature_filter_add_command_builder.prototype.connectionString = function (value) {
        this.setFlag("--connection-string", value);
        return this;
    };
    /** Space-separated filter parameters in 'name[=value]' format. */
    az_appconfig_feature_filter_add_command_builder.prototype.filterParameters = function (value) {
        this.setFlag("--filter-parameters", value);
        return this;
    };
    /** Zero-based index in the list of filters where you want to insert the new filter. If no index is specified or index is invalid, filter will be added to the end of the list. */
    az_appconfig_feature_filter_add_command_builder.prototype.index = function (value) {
        this.setFlag("--index", value);
        return this;
    };
    /** If no label specified, add to the feature flag with null label by default. */
    az_appconfig_feature_filter_add_command_builder.prototype.label = function (value) {
        this.setFlag("--label", value);
        return this;
    };
    /** Name of the App Configuration. You can configure the default name using `az configure --defaults app_configuration_store=<name>`. */
    az_appconfig_feature_filter_add_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_appconfig_feature_filter_add_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_appconfig_feature_filter_add_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_appconfig_feature_filter_add_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a filter from a feature flag.
 *
 * Syntax:
 * ```
 * az appconfig feature filter delete --feature
 *                                    [--all]
 *                                    [--connection-string]
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
var az_appconfig_feature_filter_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_appconfig_feature_filter_delete_command_builder, _super);
    function az_appconfig_feature_filter_delete_command_builder(commandPath, resultDataTypeName, feature) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.feature(feature);
        return _this;
    }
    /** Name of the feature from which you want to delete the filter. */
    az_appconfig_feature_filter_delete_command_builder.prototype.feature = function (value) {
        this.setFlag("--feature", value);
        return this;
    };
    /** Delete all filters associated with a feature flag. */
    az_appconfig_feature_filter_delete_command_builder.prototype.all = function (value) {
        this.setFlag("--all", value);
        return this;
    };
    /** Combination of access key and endpoint of App Configuration. Can be found using 'az appconfig credential list'. Users can preset it using `az configure --defaults appconfig_connection_string=<connection_string>` or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING. */
    az_appconfig_feature_filter_delete_command_builder.prototype.connectionString = function (value) {
        this.setFlag("--connection-string", value);
        return this;
    };
    /** Name of the filter to be deleted. */
    az_appconfig_feature_filter_delete_command_builder.prototype.filterName = function (value) {
        this.setFlag("--filter-name", value);
        return this;
    };
    /** Zero-based index of the filter to be deleted in case there are multiple instances with same filter name. */
    az_appconfig_feature_filter_delete_command_builder.prototype.index = function (value) {
        this.setFlag("--index", value);
        return this;
    };
    /** If no label specified, delete from the feature flag with null label by default. */
    az_appconfig_feature_filter_delete_command_builder.prototype.label = function (value) {
        this.setFlag("--label", value);
        return this;
    };
    /** Name of the App Configuration. You can configure the default name using `az configure --defaults app_configuration_store=<name>`. */
    az_appconfig_feature_filter_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_appconfig_feature_filter_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_appconfig_feature_filter_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_appconfig_feature_filter_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List all filters for a feature flag.
 *
 * Syntax:
 * ```
 * az appconfig feature filter list --feature
 *                                  [--all]
 *                                  [--connection-string]
 *                                  [--label]
 *                                  [--name]
 *                                  [--query-examples]
 *                                  [--subscription]
 *                                  [--top]
 * ```
 *
 * @param {string} feature Name of the feature whose filters you want to be displayed.
 */
var az_appconfig_feature_filter_list_command_builder = /** @class */ (function (_super) {
    __extends(az_appconfig_feature_filter_list_command_builder, _super);
    function az_appconfig_feature_filter_list_command_builder(commandPath, resultDataTypeName, feature) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.feature(feature);
        return _this;
    }
    /** Name of the feature whose filters you want to be displayed. */
    az_appconfig_feature_filter_list_command_builder.prototype.feature = function (value) {
        this.setFlag("--feature", value);
        return this;
    };
    /** List all filters associated with a feature flag. */
    az_appconfig_feature_filter_list_command_builder.prototype.all = function (value) {
        this.setFlag("--all", value);
        return this;
    };
    /** Combination of access key and endpoint of App Configuration. Can be found using 'az appconfig credential list'. Users can preset it using `az configure --defaults appconfig_connection_string=<connection_string>` or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING. */
    az_appconfig_feature_filter_list_command_builder.prototype.connectionString = function (value) {
        this.setFlag("--connection-string", value);
        return this;
    };
    /** If no label specified, display filters from the feature flag with null label by default. */
    az_appconfig_feature_filter_list_command_builder.prototype.label = function (value) {
        this.setFlag("--label", value);
        return this;
    };
    /** Name of the App Configuration. You can configure the default name using `az configure --defaults app_configuration_store=<name>`. */
    az_appconfig_feature_filter_list_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_appconfig_feature_filter_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_appconfig_feature_filter_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Maximum number of items to return. Must be a positive integer. Default to 100. */
    az_appconfig_feature_filter_list_command_builder.prototype.top = function (value) {
        this.setFlag("--top", value);
        return this;
    };
    return az_appconfig_feature_filter_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Show filters of a feature flag.
 *
 * Syntax:
 * ```
 * az appconfig feature filter show --feature
 *                                  --filter-name
 *                                  [--connection-string]
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
var az_appconfig_feature_filter_show_command_builder = /** @class */ (function (_super) {
    __extends(az_appconfig_feature_filter_show_command_builder, _super);
    function az_appconfig_feature_filter_show_command_builder(commandPath, resultDataTypeName, feature, filterName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.feature(feature);
        _this.filterName(filterName);
        return _this;
    }
    /** Name of the feature which contains the filter. */
    az_appconfig_feature_filter_show_command_builder.prototype.feature = function (value) {
        this.setFlag("--feature", value);
        return this;
    };
    /** Name of the filter to be displayed. */
    az_appconfig_feature_filter_show_command_builder.prototype.filterName = function (value) {
        this.setFlag("--filter-name", value);
        return this;
    };
    /** Combination of access key and endpoint of App Configuration. Can be found using 'az appconfig credential list'. Users can preset it using `az configure --defaults appconfig_connection_string=<connection_string>` or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING. */
    az_appconfig_feature_filter_show_command_builder.prototype.connectionString = function (value) {
        this.setFlag("--connection-string", value);
        return this;
    };
    /** Zero-based index of the filter to be displayed in case there are multiple instances with same filter name. */
    az_appconfig_feature_filter_show_command_builder.prototype.index = function (value) {
        this.setFlag("--index", value);
        return this;
    };
    /** If no label specified, show the feature flag with null label by default. */
    az_appconfig_feature_filter_show_command_builder.prototype.label = function (value) {
        this.setFlag("--label", value);
        return this;
    };
    /** Name of the App Configuration. You can configure the default name using `az configure --defaults app_configuration_store=<name>`. */
    az_appconfig_feature_filter_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_appconfig_feature_filter_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_appconfig_feature_filter_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_appconfig_feature_filter_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete feature flag.
 *
 * Syntax:
 * ```
 * az appconfig feature delete --feature
 *                             [--connection-string]
 *                             [--label]
 *                             [--name]
 *                             [--subscription]
 *                             [--yes]
 * ```
 *
 * @param {string} feature Key of the feature to be deleted. Support star sign as filters, for instance \* means all key and abc\* means keys with abc as prefix. Comma separated keys are not supported. Please provide escaped string if your feature name contains comma.
 */
var az_appconfig_feature_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_appconfig_feature_delete_command_builder, _super);
    function az_appconfig_feature_delete_command_builder(commandPath, resultDataTypeName, feature) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.feature(feature);
        return _this;
    }
    /** Key of the feature to be deleted. Support star sign as filters, for instance \* means all key and abc\* means keys with abc as prefix. Comma separated keys are not supported. Please provide escaped string if your feature name contains comma. */
    az_appconfig_feature_delete_command_builder.prototype.feature = function (value) {
        this.setFlag("--feature", value);
        return this;
    };
    /** Combination of access key and endpoint of App Configuration. Can be found using 'az appconfig credential list'. Users can preset it using `az configure --defaults appconfig_connection_string=<connection_string>` or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING. */
    az_appconfig_feature_delete_command_builder.prototype.connectionString = function (value) {
        this.setFlag("--connection-string", value);
        return this;
    };
    /** If no label specified, delete the feature flag with null label by default. Support star sign as filters, for instance \* means all labels and abc\* means labels with abc as prefix. */
    az_appconfig_feature_delete_command_builder.prototype.label = function (value) {
        this.setFlag("--label", value);
        return this;
    };
    /** Name of the App Configuration. You can configure the default name using `az configure --defaults app_configuration_store=<name>`. */
    az_appconfig_feature_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_appconfig_feature_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_appconfig_feature_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_appconfig_feature_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * Disable a feature flag to turn it OFF for use.
 *
 * Syntax:
 * ```
 * az appconfig feature disable --feature
 *                              [--connection-string]
 *                              [--label]
 *                              [--name]
 *                              [--subscription]
 *                              [--yes]
 * ```
 *
 * @param {string} feature Key of the feature to be disabled.
 */
var az_appconfig_feature_disable_command_builder = /** @class */ (function (_super) {
    __extends(az_appconfig_feature_disable_command_builder, _super);
    function az_appconfig_feature_disable_command_builder(commandPath, resultDataTypeName, feature) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.feature(feature);
        return _this;
    }
    /** Key of the feature to be disabled. */
    az_appconfig_feature_disable_command_builder.prototype.feature = function (value) {
        this.setFlag("--feature", value);
        return this;
    };
    /** Combination of access key and endpoint of App Configuration. Can be found using 'az appconfig credential list'. Users can preset it using `az configure --defaults appconfig_connection_string=<connection_string>` or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING. */
    az_appconfig_feature_disable_command_builder.prototype.connectionString = function (value) {
        this.setFlag("--connection-string", value);
        return this;
    };
    /** If no label specified, disable the feature flag with null label by default. */
    az_appconfig_feature_disable_command_builder.prototype.label = function (value) {
        this.setFlag("--label", value);
        return this;
    };
    /** Name of the App Configuration. You can configure the default name using `az configure --defaults app_configuration_store=<name>`. */
    az_appconfig_feature_disable_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_appconfig_feature_disable_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_appconfig_feature_disable_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_appconfig_feature_disable_command_builder;
}(base_1.CommandBuilder));
/**
 * Enable a feature flag to turn it ON for use.
 *
 * Syntax:
 * ```
 * az appconfig feature enable --feature
 *                             [--connection-string]
 *                             [--label]
 *                             [--name]
 *                             [--subscription]
 *                             [--yes]
 * ```
 *
 * @param {string} feature Key of the feature to be enabled.
 */
var az_appconfig_feature_enable_command_builder = /** @class */ (function (_super) {
    __extends(az_appconfig_feature_enable_command_builder, _super);
    function az_appconfig_feature_enable_command_builder(commandPath, resultDataTypeName, feature) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.feature(feature);
        return _this;
    }
    /** Key of the feature to be enabled. */
    az_appconfig_feature_enable_command_builder.prototype.feature = function (value) {
        this.setFlag("--feature", value);
        return this;
    };
    /** Combination of access key and endpoint of App Configuration. Can be found using 'az appconfig credential list'. Users can preset it using `az configure --defaults appconfig_connection_string=<connection_string>` or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING. */
    az_appconfig_feature_enable_command_builder.prototype.connectionString = function (value) {
        this.setFlag("--connection-string", value);
        return this;
    };
    /** If no label specified, enable the feature flag with null label by default. */
    az_appconfig_feature_enable_command_builder.prototype.label = function (value) {
        this.setFlag("--label", value);
        return this;
    };
    /** Name of the App Configuration. You can configure the default name using `az configure --defaults app_configuration_store=<name>`. */
    az_appconfig_feature_enable_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_appconfig_feature_enable_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_appconfig_feature_enable_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_appconfig_feature_enable_command_builder;
}(base_1.CommandBuilder));
/**
 * List feature flags.
 *
 * Syntax:
 * ```
 * az appconfig feature list [--all]
 *                           [--connection-string]
 *                           [--feature]
 *                           [--fields {conditions, description, key, label, last_modified, locked, state}]
 *                           [--label]
 *                           [--name]
 *                           [--query-examples]
 *                           [--subscription]
 *                           [--top]
 * ```
 */
var az_appconfig_feature_list_command_builder = /** @class */ (function (_super) {
    __extends(az_appconfig_feature_list_command_builder, _super);
    function az_appconfig_feature_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** List all feature flags. */
    az_appconfig_feature_list_command_builder.prototype.all = function (value) {
        this.setFlag("--all", value);
        return this;
    };
    /** Combination of access key and endpoint of App Configuration. Can be found using 'az appconfig credential list'. Users can preset it using `az configure --defaults appconfig_connection_string=<connection_string>` or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING. */
    az_appconfig_feature_list_command_builder.prototype.connectionString = function (value) {
        this.setFlag("--connection-string", value);
        return this;
    };
    /** Key of the feature to be listed. Support star sign as filters, for instance \* means all key and abc\* means keys with abc as prefix. Comma separated keys are not supported. Please provide escaped string if your feature name contains comma. */
    az_appconfig_feature_list_command_builder.prototype.feature = function (value) {
        this.setFlag("--feature", value);
        return this;
    };
    /** Customize output fields for Feature Flags. */
    az_appconfig_feature_list_command_builder.prototype.fields = function (value) {
        this.setFlag("--fields", value);
        return this;
    };
    /** If no label specified, list all labels. Support star sign as filters, for instance \* means all labels and abc\* means labels with abc as prefix. Use '0' for null label. */
    az_appconfig_feature_list_command_builder.prototype.label = function (value) {
        this.setFlag("--label", value);
        return this;
    };
    /** Name of the App Configuration. You can configure the default name using `az configure --defaults app_configuration_store=<name>`. */
    az_appconfig_feature_list_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_appconfig_feature_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_appconfig_feature_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Maximum number of items to return. Must be a positive integer. Default to 100. */
    az_appconfig_feature_list_command_builder.prototype.top = function (value) {
        this.setFlag("--top", value);
        return this;
    };
    return az_appconfig_feature_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Lock a feature flag to prohibit write operations.
 *
 * Syntax:
 * ```
 * az appconfig feature lock --feature
 *                           [--connection-string]
 *                           [--label]
 *                           [--name]
 *                           [--subscription]
 *                           [--yes]
 * ```
 *
 * @param {string} feature Key of the feature to be locked.
 */
var az_appconfig_feature_lock_command_builder = /** @class */ (function (_super) {
    __extends(az_appconfig_feature_lock_command_builder, _super);
    function az_appconfig_feature_lock_command_builder(commandPath, resultDataTypeName, feature) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.feature(feature);
        return _this;
    }
    /** Key of the feature to be locked. */
    az_appconfig_feature_lock_command_builder.prototype.feature = function (value) {
        this.setFlag("--feature", value);
        return this;
    };
    /** Combination of access key and endpoint of App Configuration. Can be found using 'az appconfig credential list'. Users can preset it using `az configure --defaults appconfig_connection_string=<connection_string>` or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING. */
    az_appconfig_feature_lock_command_builder.prototype.connectionString = function (value) {
        this.setFlag("--connection-string", value);
        return this;
    };
    /** If no label specified, lock the feature flag with null label by default. */
    az_appconfig_feature_lock_command_builder.prototype.label = function (value) {
        this.setFlag("--label", value);
        return this;
    };
    /** Name of the App Configuration. You can configure the default name using `az configure --defaults app_configuration_store=<name>`. */
    az_appconfig_feature_lock_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_appconfig_feature_lock_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_appconfig_feature_lock_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_appconfig_feature_lock_command_builder;
}(base_1.CommandBuilder));
/**
 * Set a feature flag.
 *
 * Syntax:
 * ```
 * az appconfig feature set --feature
 *                          [--connection-string]
 *                          [--description]
 *                          [--label]
 *                          [--name]
 *                          [--subscription]
 *                          [--yes]
 * ```
 *
 * @param {string} feature Name of the feature flag to be set. Only alphanumeric characters, '.', '-' and '_' are allowed.
 */
var az_appconfig_feature_set_command_builder = /** @class */ (function (_super) {
    __extends(az_appconfig_feature_set_command_builder, _super);
    function az_appconfig_feature_set_command_builder(commandPath, resultDataTypeName, feature) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.feature(feature);
        return _this;
    }
    /** Name of the feature flag to be set. Only alphanumeric characters, '.', '-' and '_' are allowed. */
    az_appconfig_feature_set_command_builder.prototype.feature = function (value) {
        this.setFlag("--feature", value);
        return this;
    };
    /** Combination of access key and endpoint of App Configuration. Can be found using 'az appconfig credential list'. Users can preset it using `az configure --defaults appconfig_connection_string=<connection_string>` or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING. */
    az_appconfig_feature_set_command_builder.prototype.connectionString = function (value) {
        this.setFlag("--connection-string", value);
        return this;
    };
    /** Description of the feature flag to be set. */
    az_appconfig_feature_set_command_builder.prototype.description = function (value) {
        this.setFlag("--description", value);
        return this;
    };
    /** If no label specified, set the feature flag with null label by default. */
    az_appconfig_feature_set_command_builder.prototype.label = function (value) {
        this.setFlag("--label", value);
        return this;
    };
    /** Name of the App Configuration. You can configure the default name using `az configure --defaults app_configuration_store=<name>`. */
    az_appconfig_feature_set_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_appconfig_feature_set_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_appconfig_feature_set_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_appconfig_feature_set_command_builder;
}(base_1.CommandBuilder));
/**
 * Show all attributes of a feature flag.
 *
 * Syntax:
 * ```
 * az appconfig feature show --feature
 *                           [--connection-string]
 *                           [--fields {conditions, description, key, label, last_modified, locked, state}]
 *                           [--label]
 *                           [--name]
 *                           [--query-examples]
 *                           [--subscription]
 * ```
 *
 * @param {string} feature Name of the feature flag to be retrieved.
 */
var az_appconfig_feature_show_command_builder = /** @class */ (function (_super) {
    __extends(az_appconfig_feature_show_command_builder, _super);
    function az_appconfig_feature_show_command_builder(commandPath, resultDataTypeName, feature) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.feature(feature);
        return _this;
    }
    /** Name of the feature flag to be retrieved. */
    az_appconfig_feature_show_command_builder.prototype.feature = function (value) {
        this.setFlag("--feature", value);
        return this;
    };
    /** Combination of access key and endpoint of App Configuration. Can be found using 'az appconfig credential list'. Users can preset it using `az configure --defaults appconfig_connection_string=<connection_string>` or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING. */
    az_appconfig_feature_show_command_builder.prototype.connectionString = function (value) {
        this.setFlag("--connection-string", value);
        return this;
    };
    /** Customize output fields for Feature Flags. */
    az_appconfig_feature_show_command_builder.prototype.fields = function (value) {
        this.setFlag("--fields", value);
        return this;
    };
    /** If no label specified, show entry with null label. Filtering is not supported. */
    az_appconfig_feature_show_command_builder.prototype.label = function (value) {
        this.setFlag("--label", value);
        return this;
    };
    /** Name of the App Configuration. You can configure the default name using `az configure --defaults app_configuration_store=<name>`. */
    az_appconfig_feature_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_appconfig_feature_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_appconfig_feature_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_appconfig_feature_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Unlock a feature to gain write operations.
 *
 * Syntax:
 * ```
 * az appconfig feature unlock --feature
 *                             [--connection-string]
 *                             [--label]
 *                             [--name]
 *                             [--subscription]
 *                             [--yes]
 * ```
 *
 * @param {string} feature Key of the feature to be unlocked.
 */
var az_appconfig_feature_unlock_command_builder = /** @class */ (function (_super) {
    __extends(az_appconfig_feature_unlock_command_builder, _super);
    function az_appconfig_feature_unlock_command_builder(commandPath, resultDataTypeName, feature) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.feature(feature);
        return _this;
    }
    /** Key of the feature to be unlocked. */
    az_appconfig_feature_unlock_command_builder.prototype.feature = function (value) {
        this.setFlag("--feature", value);
        return this;
    };
    /** Combination of access key and endpoint of App Configuration. Can be found using 'az appconfig credential list'. Users can preset it using `az configure --defaults appconfig_connection_string=<connection_string>` or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING. */
    az_appconfig_feature_unlock_command_builder.prototype.connectionString = function (value) {
        this.setFlag("--connection-string", value);
        return this;
    };
    /** If no label specified, unlock the feature flag with null label by default. */
    az_appconfig_feature_unlock_command_builder.prototype.label = function (value) {
        this.setFlag("--label", value);
        return this;
    };
    /** Name of the App Configuration. You can configure the default name using `az configure --defaults app_configuration_store=<name>`. */
    az_appconfig_feature_unlock_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_appconfig_feature_unlock_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_appconfig_feature_unlock_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_appconfig_feature_unlock_command_builder;
}(base_1.CommandBuilder));
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
var az_appconfig_identity_assign_command_builder = /** @class */ (function (_super) {
    __extends(az_appconfig_identity_assign_command_builder, _super);
    function az_appconfig_identity_assign_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** Name of the App Configuration. You can configure the default name using `az configure --defaults app_configuration_store=<name>`. */
    az_appconfig_identity_assign_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Accept system or user assigned identities separated by spaces. Use '[system]' to refer system assigned identity or a resource id to refer user assigned identity. Use system assigned identity if not specified. */
    az_appconfig_identity_assign_command_builder.prototype.identities = function (value) {
        this.setFlag("--identities", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_appconfig_identity_assign_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_appconfig_identity_assign_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_appconfig_identity_assign_command_builder;
}(base_1.CommandBuilder));
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
var az_appconfig_identity_remove_command_builder = /** @class */ (function (_super) {
    __extends(az_appconfig_identity_remove_command_builder, _super);
    function az_appconfig_identity_remove_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** Name of the App Configuration. You can configure the default name using `az configure --defaults app_configuration_store=<name>`. */
    az_appconfig_identity_remove_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Accept system or user assigned identities separated by spaces. Use '[system]' to refer system assigned identity, '[all]' for all identities or a resource id to refer user assigned identity. Remove system assigned identity if not specified. */
    az_appconfig_identity_remove_command_builder.prototype.identities = function (value) {
        this.setFlag("--identities", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_appconfig_identity_remove_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_appconfig_identity_remove_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_appconfig_identity_remove_command_builder;
}(base_1.CommandBuilder));
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
var az_appconfig_identity_show_command_builder = /** @class */ (function (_super) {
    __extends(az_appconfig_identity_show_command_builder, _super);
    function az_appconfig_identity_show_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** Name of the App Configuration. You can configure the default name using `az configure --defaults app_configuration_store=<name>`. */
    az_appconfig_identity_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_appconfig_identity_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_appconfig_identity_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_appconfig_identity_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_appconfig_identity_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete key-values.
 *
 * Syntax:
 * ```
 * az appconfig kv delete --key
 *                        [--connection-string]
 *                        [--label]
 *                        [--name]
 *                        [--subscription]
 *                        [--yes]
 * ```
 *
 * @param {string} key Support star sign as filters, for instance \* means all key and abc\* means keys with abc as prefix.
 */
var az_appconfig_kv_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_appconfig_kv_delete_command_builder, _super);
    function az_appconfig_kv_delete_command_builder(commandPath, resultDataTypeName, key) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.key(key);
        return _this;
    }
    /** Support star sign as filters, for instance \* means all key and abc\* means keys with abc as prefix. */
    az_appconfig_kv_delete_command_builder.prototype.key = function (value) {
        this.setFlag("--key", value);
        return this;
    };
    /** Combination of access key and endpoint of App Configuration. Can be found using 'az appconfig credential list'. Users can preset it using `az configure --defaults appconfig_connection_string=<connection_string>` or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING. */
    az_appconfig_kv_delete_command_builder.prototype.connectionString = function (value) {
        this.setFlag("--connection-string", value);
        return this;
    };
    /** If no label specified, delete entry with null label. Support star sign as filters, for instance \* means all label and abc\* means labels with abc as prefix. */
    az_appconfig_kv_delete_command_builder.prototype.label = function (value) {
        this.setFlag("--label", value);
        return this;
    };
    /** Name of the App Configuration. You can configure the default name using `az configure --defaults app_configuration_store=<name>`. */
    az_appconfig_kv_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_appconfig_kv_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_appconfig_kv_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_appconfig_kv_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * Export configurations to another place from your App Configuration.
 *
 * Syntax:
 * ```
 * az appconfig kv export --destination {appconfig, appservice, file}
 *                        [--appservice-account]
 *                        [--connection-string]
 *                        [--dest-connection-string]
 *                        [--dest-label]
 *                        [--dest-name]
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
var az_appconfig_kv_export_command_builder = /** @class */ (function (_super) {
    __extends(az_appconfig_kv_export_command_builder, _super);
    function az_appconfig_kv_export_command_builder(commandPath, resultDataTypeName, destination) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.destination(destination);
        return _this;
    }
    /** The destination of exporting. Note that exporting feature flags to appservice is not supported. */
    az_appconfig_kv_export_command_builder.prototype.destination = function (value) {
        this.setFlag("--destination", value);
        return this;
    };
    /** ARM ID for AppService OR the name of the AppService, assuming it is in the same subscription and resource group as the App Configuration. Required for AppService arguments. */
    az_appconfig_kv_export_command_builder.prototype.appserviceAccount = function (value) {
        this.setFlag("--appservice-account", value);
        return this;
    };
    /** Combination of access key and endpoint of App Configuration. Can be found using 'az appconfig credential list'. Users can preset it using `az configure --defaults appconfig_connection_string=<connection_string>` or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING. */
    az_appconfig_kv_export_command_builder.prototype.connectionString = function (value) {
        this.setFlag("--connection-string", value);
        return this;
    };
    /** Combination of access key and endpoint of the destination store. */
    az_appconfig_kv_export_command_builder.prototype.destConnectionString = function (value) {
        this.setFlag("--dest-connection-string", value);
        return this;
    };
    /** Exported KVs will be labeled with this destination label. If neither --dest-label nor --preserve-labels is specified, will assign null label. */
    az_appconfig_kv_export_command_builder.prototype.destLabel = function (value) {
        this.setFlag("--dest-label", value);
        return this;
    };
    /** The name of the destination App Configuration. */
    az_appconfig_kv_export_command_builder.prototype.destName = function (value) {
        this.setFlag("--dest-name", value);
        return this;
    };
    /** File format exporting to. Required for file arguments. Currently, feature flags are not supported in properties format. */
    az_appconfig_kv_export_command_builder.prototype.format = function (value) {
        this.setFlag("--format", value);
        return this;
    };
    /** If no key specified, return all keys by default. Support star sign as filters, for instance abc\* means keys with abc as prefix. Key filtering not applicable for feature flags. By default, all feature flags with specified label will be exported. */
    az_appconfig_kv_export_command_builder.prototype.key = function (value) {
        this.setFlag("--key", value);
        return this;
    };
    /** Only keys and feature flags with this label will be exported. If no label specified, export keys and feature flags with null label by default. Only when export destination is appconfig, we support star sign as filters, for instance \* means all labels and abc\* means labels with abc as prefix. Label filters are not supported when exporting to file or appservice. */
    az_appconfig_kv_export_command_builder.prototype.label = function (value) {
        this.setFlag("--label", value);
        return this;
    };
    /** Name of the App Configuration. You can configure the default name using `az configure --defaults app_configuration_store=<name>`. */
    az_appconfig_kv_export_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Naming convention to be used for "Feature Management" section of file. Example: pascal = FeatureManagement, camel = featureManagement, underscore = feature_management, hyphen = feature-management. */
    az_appconfig_kv_export_command_builder.prototype.namingConvention = function (value) {
        this.setFlag("--naming-convention", value);
        return this;
    };
    /** Local configuration file path. Required for file arguments. */
    az_appconfig_kv_export_command_builder.prototype.path = function (value) {
        this.setFlag("--path", value);
        return this;
    };
    /** Prefix to be trimmed from keys. Prefix will be ignored for feature flags. */
    az_appconfig_kv_export_command_builder.prototype.prefix = function (value) {
        this.setFlag("--prefix", value);
        return this;
    };
    /** Flag to preserve labels from source AppConfig. This argument should NOT be specified along with --dest-label. */
    az_appconfig_kv_export_command_builder.prototype.preserveLabels = function (value) {
        this.setFlag("--preserve-labels", value.toString());
        return this;
    };
    /** Resolve the content of key vault reference. */
    az_appconfig_kv_export_command_builder.prototype.resolveKeyvault = function (value) {
        this.setFlag("--resolve-keyvault", value.toString());
        return this;
    };
    /** Delimiter for flattening the key-value pairs to json or yaml file. Required for exporting hierarchical structure. Separator will be ignored for property files and feature flags. Supported values: '.', ',', ';', '-', '_', '__', '/', ':'. */
    az_appconfig_kv_export_command_builder.prototype.separator = function (value) {
        this.setFlag("--separator", value);
        return this;
    };
    /** Export items excluding all feature flags. By default, all features with the specified label will be exported to file or appconfig. Not applicable for appservice. */
    az_appconfig_kv_export_command_builder.prototype.skipFeatures = function (value) {
        this.setFlag("--skip-features", value.toString());
        return this;
    };
    /** Export items excluding all key vault references. By default, all key vault references with the specified label will be exported. */
    az_appconfig_kv_export_command_builder.prototype.skipKeyvault = function (value) {
        this.setFlag("--skip-keyvault", value.toString());
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_appconfig_kv_export_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for preview. */
    az_appconfig_kv_export_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_appconfig_kv_export_command_builder;
}(base_1.CommandBuilder));
/**
 * Import configurations into your App Configuration from another place.
 *
 * Syntax:
 * ```
 * az appconfig kv import --source {appconfig, appservice, file}
 *                        [--appservice-account]
 *                        [--connection-string]
 *                        [--content-type]
 *                        [--depth]
 *                        [--format {json, properties, yaml}]
 *                        [--label]
 *                        [--name]
 *                        [--path]
 *                        [--prefix]
 *                        [--preserve-labels {false, true}]
 *                        [--separator]
 *                        [--skip-features {false, true}]
 *                        [--src-connection-string]
 *                        [--src-key]
 *                        [--src-label]
 *                        [--src-name]
 *                        [--subscription]
 *                        [--yes]
 * ```
 *
 * @param {'appconfig' | 'appservice' | 'file'} source The source of importing. Note that importing feature flags from appservice is not supported.
 */
var az_appconfig_kv_import_command_builder = /** @class */ (function (_super) {
    __extends(az_appconfig_kv_import_command_builder, _super);
    function az_appconfig_kv_import_command_builder(commandPath, resultDataTypeName, source) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.source(source);
        return _this;
    }
    /** The source of importing. Note that importing feature flags from appservice is not supported. */
    az_appconfig_kv_import_command_builder.prototype.source = function (value) {
        this.setFlag("--source", value);
        return this;
    };
    /** ARM ID for AppService OR the name of the AppService, assuming it is in the same subscription and resource group as the App Configuration. Required for AppService arguments. */
    az_appconfig_kv_import_command_builder.prototype.appserviceAccount = function (value) {
        this.setFlag("--appservice-account", value);
        return this;
    };
    /** Combination of access key and endpoint of App Configuration. Can be found using 'az appconfig credential list'. Users can preset it using `az configure --defaults appconfig_connection_string=<connection_string>` or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING. */
    az_appconfig_kv_import_command_builder.prototype.connectionString = function (value) {
        this.setFlag("--connection-string", value);
        return this;
    };
    /** Content type of all imported items. */
    az_appconfig_kv_import_command_builder.prototype.contentType = function (value) {
        this.setFlag("--content-type", value);
        return this;
    };
    /** Depth for flattening the json or yaml file to key-value pairs. Flatten to the deepest level by default if --separator is provided. Not applicable for property files or feature flags. */
    az_appconfig_kv_import_command_builder.prototype.depth = function (value) {
        this.setFlag("--depth", value);
        return this;
    };
    /** Imported file format. Required for file arguments. Currently, feature flags are not supported in properties format. */
    az_appconfig_kv_import_command_builder.prototype.format = function (value) {
        this.setFlag("--format", value);
        return this;
    };
    /** Imported KVs and feature flags will be assigned with this label. If no label specified, will assign null label. */
    az_appconfig_kv_import_command_builder.prototype.label = function (value) {
        this.setFlag("--label", value);
        return this;
    };
    /** Name of the App Configuration. You can configure the default name using `az configure --defaults app_configuration_store=<name>`. */
    az_appconfig_kv_import_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Local configuration file path. Required for file arguments. */
    az_appconfig_kv_import_command_builder.prototype.path = function (value) {
        this.setFlag("--path", value);
        return this;
    };
    /** This prefix will be appended to the front of imported keys. Prefix will be ignored for feature flags. */
    az_appconfig_kv_import_command_builder.prototype.prefix = function (value) {
        this.setFlag("--prefix", value);
        return this;
    };
    /** Flag to preserve labels from source AppConfig. This argument should NOT be specified along with --label. */
    az_appconfig_kv_import_command_builder.prototype.preserveLabels = function (value) {
        this.setFlag("--preserve-labels", value.toString());
        return this;
    };
    /** Delimiter for flattening the json or yaml file to key-value pairs. Separator will be ignored for property files and feature flags. Supported values: '.', ',', ';', '-', '_', '__', '/', ':'. */
    az_appconfig_kv_import_command_builder.prototype.separator = function (value) {
        this.setFlag("--separator", value);
        return this;
    };
    /** Import only key values and exclude all feature flags. By default, all feature flags will be imported from file or appconfig. Not applicable for appservice. */
    az_appconfig_kv_import_command_builder.prototype.skipFeatures = function (value) {
        this.setFlag("--skip-features", value.toString());
        return this;
    };
    /** Combination of access key and endpoint of the source store. */
    az_appconfig_kv_import_command_builder.prototype.srcConnectionString = function (value) {
        this.setFlag("--src-connection-string", value);
        return this;
    };
    /** If no key specified, import all keys by default. Support star sign as filters, for instance abc\* means keys with abc as prefix. Key filtering not applicable for feature flags. By default, all feature flags with specified label will be imported. */
    az_appconfig_kv_import_command_builder.prototype.srcKey = function (value) {
        this.setFlag("--src-key", value);
        return this;
    };
    /** Only keys with this label in source AppConfig will be imported. If no value specified, import keys with null label by default. Support star sign as filters, for instance \* means all labels, abc\* means labels with abc as prefix. */
    az_appconfig_kv_import_command_builder.prototype.srcLabel = function (value) {
        this.setFlag("--src-label", value);
        return this;
    };
    /** The name of the source App Configuration. */
    az_appconfig_kv_import_command_builder.prototype.srcName = function (value) {
        this.setFlag("--src-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_appconfig_kv_import_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for preview. */
    az_appconfig_kv_import_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_appconfig_kv_import_command_builder;
}(base_1.CommandBuilder));
/**
 * List key-values.
 *
 * Syntax:
 * ```
 * az appconfig kv list [--all]
 *                      [--connection-string]
 *                      [--datetime]
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
var az_appconfig_kv_list_command_builder = /** @class */ (function (_super) {
    __extends(az_appconfig_kv_list_command_builder, _super);
    function az_appconfig_kv_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** List all items. */
    az_appconfig_kv_list_command_builder.prototype.all = function (value) {
        this.setFlag("--all", value);
        return this;
    };
    /** Combination of access key and endpoint of App Configuration. Can be found using 'az appconfig credential list'. Users can preset it using `az configure --defaults appconfig_connection_string=<connection_string>` or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING. */
    az_appconfig_kv_list_command_builder.prototype.connectionString = function (value) {
        this.setFlag("--connection-string", value);
        return this;
    };
    /** Format: "YYYY-MM-DDThh:mm:ssZ". If no time zone specified, use UTC by default. */
    az_appconfig_kv_list_command_builder.prototype.datetime = function (value) {
        this.setFlag("--datetime", value);
        return this;
    };
    /** Space-separated customized output fields. */
    az_appconfig_kv_list_command_builder.prototype.fields = function (value) {
        this.setFlag("--fields", value);
        return this;
    };
    /** If no key specified, return all keys by default. Support star sign as filters, for instance abc\* means keys with abc as prefix. */
    az_appconfig_kv_list_command_builder.prototype.key = function (value) {
        this.setFlag("--key", value);
        return this;
    };
    /** If no label specified, list all labels. Support star sign as filters, for instance abc\* means labels with abc as prefix. Use '0' for null label. */
    az_appconfig_kv_list_command_builder.prototype.label = function (value) {
        this.setFlag("--label", value);
        return this;
    };
    /** Name of the App Configuration. You can configure the default name using `az configure --defaults app_configuration_store=<name>`. */
    az_appconfig_kv_list_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_appconfig_kv_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Resolve the content of key vault reference. This argument should NOT be specified along with --fields. Instead use --query for customized query. */
    az_appconfig_kv_list_command_builder.prototype.resolveKeyvault = function (value) {
        this.setFlag("--resolve-keyvault", value.toString());
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_appconfig_kv_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Maximum number of items to return. Must be a positive integer. Default to 100. */
    az_appconfig_kv_list_command_builder.prototype.top = function (value) {
        this.setFlag("--top", value);
        return this;
    };
    return az_appconfig_kv_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Lock a key-value to prohibit write operations.
 *
 * Syntax:
 * ```
 * az appconfig kv lock --key
 *                      [--connection-string]
 *                      [--label]
 *                      [--name]
 *                      [--subscription]
 *                      [--yes]
 * ```
 *
 * @param {string} key Key to be locked.
 */
var az_appconfig_kv_lock_command_builder = /** @class */ (function (_super) {
    __extends(az_appconfig_kv_lock_command_builder, _super);
    function az_appconfig_kv_lock_command_builder(commandPath, resultDataTypeName, key) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.key(key);
        return _this;
    }
    /** Key to be locked. */
    az_appconfig_kv_lock_command_builder.prototype.key = function (value) {
        this.setFlag("--key", value);
        return this;
    };
    /** Combination of access key and endpoint of App Configuration. Can be found using 'az appconfig credential list'. Users can preset it using `az configure --defaults appconfig_connection_string=<connection_string>` or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING. */
    az_appconfig_kv_lock_command_builder.prototype.connectionString = function (value) {
        this.setFlag("--connection-string", value);
        return this;
    };
    /** If no label specified, lock entry with null label. Filtering is not supported. */
    az_appconfig_kv_lock_command_builder.prototype.label = function (value) {
        this.setFlag("--label", value);
        return this;
    };
    /** Name of the App Configuration. You can configure the default name using `az configure --defaults app_configuration_store=<name>`. */
    az_appconfig_kv_lock_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_appconfig_kv_lock_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_appconfig_kv_lock_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_appconfig_kv_lock_command_builder;
}(base_1.CommandBuilder));
/**
 * Restore key-values.
 *
 * Syntax:
 * ```
 * az appconfig kv restore --datetime
 *                         [--connection-string]
 *                         [--key]
 *                         [--label]
 *                         [--name]
 *                         [--subscription]
 *                         [--yes]
 * ```
 *
 * @param {string} datetime Format: "YYYY-MM-DDThh:mm:ssZ". If no time zone specified, use UTC by default.
 */
var az_appconfig_kv_restore_command_builder = /** @class */ (function (_super) {
    __extends(az_appconfig_kv_restore_command_builder, _super);
    function az_appconfig_kv_restore_command_builder(commandPath, resultDataTypeName, datetime) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.datetime(datetime);
        return _this;
    }
    /** Format: "YYYY-MM-DDThh:mm:ssZ". If no time zone specified, use UTC by default. */
    az_appconfig_kv_restore_command_builder.prototype.datetime = function (value) {
        this.setFlag("--datetime", value);
        return this;
    };
    /** Combination of access key and endpoint of App Configuration. Can be found using 'az appconfig credential list'. Users can preset it using `az configure --defaults appconfig_connection_string=<connection_string>` or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING. */
    az_appconfig_kv_restore_command_builder.prototype.connectionString = function (value) {
        this.setFlag("--connection-string", value);
        return this;
    };
    /** If no key specified, restore all keys by default. Support star sign as filters, for instance abc\* means keys with abc as prefix. */
    az_appconfig_kv_restore_command_builder.prototype.key = function (value) {
        this.setFlag("--key", value);
        return this;
    };
    /** If no label specified, restore all key-value pairs with all labels. Support star sign as filters, for instance abc\* means labels with abc as prefix. Use '0' for null label. */
    az_appconfig_kv_restore_command_builder.prototype.label = function (value) {
        this.setFlag("--label", value);
        return this;
    };
    /** Name of the App Configuration. You can configure the default name using `az configure --defaults app_configuration_store=<name>`. */
    az_appconfig_kv_restore_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_appconfig_kv_restore_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_appconfig_kv_restore_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_appconfig_kv_restore_command_builder;
}(base_1.CommandBuilder));
/**
 * Set a key-value.
 *
 * Syntax:
 * ```
 * az appconfig kv set --key
 *                     [--connection-string]
 *                     [--content-type]
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
var az_appconfig_kv_set_command_builder = /** @class */ (function (_super) {
    __extends(az_appconfig_kv_set_command_builder, _super);
    function az_appconfig_kv_set_command_builder(commandPath, resultDataTypeName, key) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.key(key);
        return _this;
    }
    /** Key to be set. Key cannot be a '.' or '..', or contain the '%' character. */
    az_appconfig_kv_set_command_builder.prototype.key = function (value) {
        this.setFlag("--key", value);
        return this;
    };
    /** Combination of access key and endpoint of App Configuration. Can be found using 'az appconfig credential list'. Users can preset it using `az configure --defaults appconfig_connection_string=<connection_string>` or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING. */
    az_appconfig_kv_set_command_builder.prototype.connectionString = function (value) {
        this.setFlag("--connection-string", value);
        return this;
    };
    /** Content type of the keyvalue to be set. */
    az_appconfig_kv_set_command_builder.prototype.contentType = function (value) {
        this.setFlag("--content-type", value);
        return this;
    };
    /** If no label specified, set the key with null label by default. */
    az_appconfig_kv_set_command_builder.prototype.label = function (value) {
        this.setFlag("--label", value);
        return this;
    };
    /** Name of the App Configuration. You can configure the default name using `az configure --defaults app_configuration_store=<name>`. */
    az_appconfig_kv_set_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_appconfig_kv_set_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_appconfig_kv_set_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    /** Value of the keyvalue to be set. */
    az_appconfig_kv_set_command_builder.prototype.value = function (value) {
        this.setFlag("--value", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_appconfig_kv_set_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_appconfig_kv_set_command_builder;
}(base_1.CommandBuilder));
/**
 * Set a keyvault reference.
 *
 * Syntax:
 * ```
 * az appconfig kv set-keyvault --key
 *                              --secret-identifier
 *                              [--connection-string]
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
var az_appconfig_kv_set_keyvault_command_builder = /** @class */ (function (_super) {
    __extends(az_appconfig_kv_set_keyvault_command_builder, _super);
    function az_appconfig_kv_set_keyvault_command_builder(commandPath, resultDataTypeName, key, secretIdentifier) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.key(key);
        _this.secretIdentifier(secretIdentifier);
        return _this;
    }
    /** Key to be set. Key cannot be a '.' or '..', or contain the '%' character. */
    az_appconfig_kv_set_keyvault_command_builder.prototype.key = function (value) {
        this.setFlag("--key", value);
        return this;
    };
    /** ID of the Key Vault object. Can be found using 'az keyvault {collection} show' command, where collection is key, secret or certificate. To set reference to the latest version of your secret, remove version information from secret identifier. */
    az_appconfig_kv_set_keyvault_command_builder.prototype.secretIdentifier = function (value) {
        this.setFlag("--secret-identifier", value);
        return this;
    };
    /** Combination of access key and endpoint of App Configuration. Can be found using 'az appconfig credential list'. Users can preset it using `az configure --defaults appconfig_connection_string=<connection_string>` or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING. */
    az_appconfig_kv_set_keyvault_command_builder.prototype.connectionString = function (value) {
        this.setFlag("--connection-string", value);
        return this;
    };
    /** If no label specified, set the key with null label by default. */
    az_appconfig_kv_set_keyvault_command_builder.prototype.label = function (value) {
        this.setFlag("--label", value);
        return this;
    };
    /** Name of the App Configuration. You can configure the default name using `az configure --defaults app_configuration_store=<name>`. */
    az_appconfig_kv_set_keyvault_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_appconfig_kv_set_keyvault_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_appconfig_kv_set_keyvault_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_appconfig_kv_set_keyvault_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_appconfig_kv_set_keyvault_command_builder;
}(base_1.CommandBuilder));
/**
 * Show all attributes of a key-value.
 *
 * Syntax:
 * ```
 * az appconfig kv show --key
 *                      [--connection-string]
 *                      [--datetime]
 *                      [--label]
 *                      [--name]
 *                      [--query-examples]
 *                      [--subscription]
 * ```
 *
 * @param {string} key Key to be showed.
 */
var az_appconfig_kv_show_command_builder = /** @class */ (function (_super) {
    __extends(az_appconfig_kv_show_command_builder, _super);
    function az_appconfig_kv_show_command_builder(commandPath, resultDataTypeName, key) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.key(key);
        return _this;
    }
    /** Key to be showed. */
    az_appconfig_kv_show_command_builder.prototype.key = function (value) {
        this.setFlag("--key", value);
        return this;
    };
    /** Combination of access key and endpoint of App Configuration. Can be found using 'az appconfig credential list'. Users can preset it using `az configure --defaults appconfig_connection_string=<connection_string>` or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING. */
    az_appconfig_kv_show_command_builder.prototype.connectionString = function (value) {
        this.setFlag("--connection-string", value);
        return this;
    };
    /** Format: "YYYY-MM-DDThh:mm:ssZ". If no time zone specified, use UTC by default. */
    az_appconfig_kv_show_command_builder.prototype.datetime = function (value) {
        this.setFlag("--datetime", value);
        return this;
    };
    /** If no label specified, show entry with null label. Filtering is not supported. */
    az_appconfig_kv_show_command_builder.prototype.label = function (value) {
        this.setFlag("--label", value);
        return this;
    };
    /** Name of the App Configuration. You can configure the default name using `az configure --defaults app_configuration_store=<name>`. */
    az_appconfig_kv_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_appconfig_kv_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_appconfig_kv_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_appconfig_kv_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Unlock a key-value to gain write operations.
 *
 * Syntax:
 * ```
 * az appconfig kv unlock --key
 *                        [--connection-string]
 *                        [--label]
 *                        [--name]
 *                        [--subscription]
 *                        [--yes]
 * ```
 *
 * @param {string} key Key to be unlocked.
 */
var az_appconfig_kv_unlock_command_builder = /** @class */ (function (_super) {
    __extends(az_appconfig_kv_unlock_command_builder, _super);
    function az_appconfig_kv_unlock_command_builder(commandPath, resultDataTypeName, key) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.key(key);
        return _this;
    }
    /** Key to be unlocked. */
    az_appconfig_kv_unlock_command_builder.prototype.key = function (value) {
        this.setFlag("--key", value);
        return this;
    };
    /** Combination of access key and endpoint of App Configuration. Can be found using 'az appconfig credential list'. Users can preset it using `az configure --defaults appconfig_connection_string=<connection_string>` or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING. */
    az_appconfig_kv_unlock_command_builder.prototype.connectionString = function (value) {
        this.setFlag("--connection-string", value);
        return this;
    };
    /** If no label specified, unlock entry with null label. Filtering is not supported. */
    az_appconfig_kv_unlock_command_builder.prototype.label = function (value) {
        this.setFlag("--label", value);
        return this;
    };
    /** Name of the App Configuration. You can configure the default name using `az configure --defaults app_configuration_store=<name>`. */
    az_appconfig_kv_unlock_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_appconfig_kv_unlock_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_appconfig_kv_unlock_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_appconfig_kv_unlock_command_builder;
}(base_1.CommandBuilder));
/**
 * Lists revision history of key-values.
 *
 * Syntax:
 * ```
 * az appconfig revision list [--all]
 *                            [--connection-string]
 *                            [--datetime]
 *                            [--fields {content_type, etag, key, label, last_modified, locked, tags, value}]
 *                            [--key]
 *                            [--label]
 *                            [--name]
 *                            [--query-examples]
 *                            [--subscription]
 *                            [--top]
 * ```
 */
var az_appconfig_revision_list_command_builder = /** @class */ (function (_super) {
    __extends(az_appconfig_revision_list_command_builder, _super);
    function az_appconfig_revision_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** List all items. */
    az_appconfig_revision_list_command_builder.prototype.all = function (value) {
        this.setFlag("--all", value);
        return this;
    };
    /** Combination of access key and endpoint of App Configuration. Can be found using 'az appconfig credential list'. Users can preset it using `az configure --defaults appconfig_connection_string=<connection_string>` or environment variable with the name AZURE_APPCONFIG_CONNECTION_STRING. */
    az_appconfig_revision_list_command_builder.prototype.connectionString = function (value) {
        this.setFlag("--connection-string", value);
        return this;
    };
    /** Format: "YYYY-MM-DDThh:mm:ssZ". If no time zone specified, use UTC by default. */
    az_appconfig_revision_list_command_builder.prototype.datetime = function (value) {
        this.setFlag("--datetime", value);
        return this;
    };
    /** Space-separated customized output fields. */
    az_appconfig_revision_list_command_builder.prototype.fields = function (value) {
        this.setFlag("--fields", value);
        return this;
    };
    /** If no key specified, return all keys by default. Support star sign as filters, for instance abc\* means keys with abc as prefix. */
    az_appconfig_revision_list_command_builder.prototype.key = function (value) {
        this.setFlag("--key", value);
        return this;
    };
    /** If no label specified, list all labels. Support star sign as filters, for instance abc\* means labels with abc as prefix. Use '0' for null label. */
    az_appconfig_revision_list_command_builder.prototype.label = function (value) {
        this.setFlag("--label", value);
        return this;
    };
    /** Name of the App Configuration. You can configure the default name using `az configure --defaults app_configuration_store=<name>`. */
    az_appconfig_revision_list_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_appconfig_revision_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_appconfig_revision_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Maximum number of items to return. Must be a positive integer. Default to 100. */
    az_appconfig_revision_list_command_builder.prototype.top = function (value) {
        this.setFlag("--top", value);
        return this;
    };
    return az_appconfig_revision_list_command_builder;
}(base_1.CommandBuilder));
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
var az_appconfig_create_command_builder = /** @class */ (function (_super) {
    __extends(az_appconfig_create_command_builder, _super);
    function az_appconfig_create_command_builder(commandPath, resultDataTypeName, location, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.location(location);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_appconfig_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Name of the App Configuration. You can configure the default name using `az configure --defaults app_configuration_store=<name>`. */
    az_appconfig_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_appconfig_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Accept system or user assigned identities separated by spaces. Use '[system]' to refer system assigned identity or a resource id to refer user assigned identity. Use system assigned identity if not specified. */
    az_appconfig_create_command_builder.prototype.assignIdentity = function (value) {
        this.setFlag("--assign-identity", value);
        return this;
    };
    /** When true, requests coming from public networks have permission to access this store while private endpoint is enabled. When false, only requests made through Private Links can reach this store. */
    az_appconfig_create_command_builder.prototype.enablePublicNetwork = function (value) {
        this.setFlag("--enable-public-network", value.toString());
        return this;
    };
    /** The sku of App Configuration. */
    az_appconfig_create_command_builder.prototype.sku = function (value) {
        this.setFlag("--sku", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_appconfig_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_appconfig_create_command_builder;
}(base_1.CommandBuilder));
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
var az_appconfig_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_appconfig_delete_command_builder, _super);
    function az_appconfig_delete_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** Name of the App Configuration. You can configure the default name using `az configure --defaults app_configuration_store=<name>`. */
    az_appconfig_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_appconfig_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_appconfig_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_appconfig_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_appconfig_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_appconfig_list_command_builder = /** @class */ (function (_super) {
    __extends(az_appconfig_list_command_builder, _super);
    function az_appconfig_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_appconfig_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_appconfig_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_appconfig_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_appconfig_list_command_builder;
}(base_1.CommandBuilder));
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
var az_appconfig_show_command_builder = /** @class */ (function (_super) {
    __extends(az_appconfig_show_command_builder, _super);
    function az_appconfig_show_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** Name of the App Configuration. You can configure the default name using `az configure --defaults app_configuration_store=<name>`. */
    az_appconfig_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_appconfig_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_appconfig_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_appconfig_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_appconfig_show_command_builder;
}(base_1.CommandBuilder));
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
var az_appconfig_update_command_builder = /** @class */ (function (_super) {
    __extends(az_appconfig_update_command_builder, _super);
    function az_appconfig_update_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** Name of the App Configuration. You can configure the default name using `az configure --defaults app_configuration_store=<name>`. */
    az_appconfig_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** When true, requests coming from public networks have permission to access this store while private endpoint is enabled. When false, only requests made through Private Links can reach this store. */
    az_appconfig_update_command_builder.prototype.enablePublicNetwork = function (value) {
        this.setFlag("--enable-public-network", value.toString());
        return this;
    };
    /** The name of the KeyVault key. */
    az_appconfig_update_command_builder.prototype.encryptionKeyName = function (value) {
        this.setFlag("--encryption-key-name", value);
        return this;
    };
    /** The URI of the KeyVault. */
    az_appconfig_update_command_builder.prototype.encryptionKeyVault = function (value) {
        this.setFlag("--encryption-key-vault", value);
        return this;
    };
    /** The version of the KeyVault key. Use the latest version by default. */
    az_appconfig_update_command_builder.prototype.encryptionKeyVersion = function (value) {
        this.setFlag("--encryption-key-version", value);
        return this;
    };
    /** Client ID of the managed identity with wrap and unwrap access to encryption key. Use system assigned identity by default. */
    az_appconfig_update_command_builder.prototype.identityClientId = function (value) {
        this.setFlag("--identity-client-id", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_appconfig_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The sku of App Configuration. */
    az_appconfig_update_command_builder.prototype.sku = function (value) {
        this.setFlag("--sku", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_appconfig_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_appconfig_update_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_appconfig_update_command_builder;
}(base_1.CommandBuilder));
