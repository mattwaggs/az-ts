"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var base_1 = require("../base");
/** Manage media reserved units for an Azure Media Services account. */
var az_ams_account_mru = /** @class */ (function () {
    function az_ams_account_mru() {
    }
    /**
     * Set the type and number of media reserved units for an Azure Media Services account.
     *
     * Syntax:
     * ```
     * az ams account mru set [--count]
     *                        [--ids]
     *                        [--name]
     *                        [--resource-group]
     *                        [--subscription]
     *                        [--type]
     * ```
     */
    az_ams_account_mru.set = function () {
        return new az_ams_account_mru_set_command_builder("az ams account mru set", 'az_ams_account_mru_set_command_result');
    };
    /**
     * Show the details of media reserved units for an Azure Media Services account.
     *
     * Syntax:
     * ```
     * az ams account mru show [--ids]
     *                         [--name]
     *                         [--query-examples]
     *                         [--resource-group]
     *                         [--subscription]
     * ```
     */
    az_ams_account_mru.show = function () {
        return new az_ams_account_mru_show_command_builder("az ams account mru show", 'az_ams_account_mru_show_command_result');
    };
    return az_ams_account_mru;
}());
exports.az_ams_account_mru = az_ams_account_mru;
/** Manage service principal and role based access for an Azure Media Services account. */
var az_ams_account_sp = /** @class */ (function () {
    function az_ams_account_sp() {
    }
    /**
     * Create or update a service principal and configure its access to an Azure Media Services account.
     *
     * Syntax:
     * ```
     * az ams account sp create --account-name
     *                          --resource-group
     *                          [--name]
     *                          [--new-sp-name]
     *                          [--password]
     *                          [--role]
     *                          [--subscription]
     *                          [--xml]
     *                          [--years]
     * ```
     *
     * @param {string} accountName The name of the Azure Media Services account.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_ams_account_sp.create = function (accountName, resourceGroup) {
        return new az_ams_account_sp_create_command_builder("az ams account sp create", 'az_ams_account_sp_create_command_result', accountName, resourceGroup);
    };
    /**
     * Generate a new client secret for a service principal configured for an Azure Media Services account.
     *
     * Syntax:
     * ```
     * az ams account sp reset-credentials [--account-name]
     *                                     [--ids]
     *                                     [--name]
     *                                     [--password]
     *                                     [--resource-group]
     *                                     [--role]
     *                                     [--subscription]
     *                                     [--xml]
     *                                     [--years]
     * ```
     */
    az_ams_account_sp.reset_credentials = function () {
        return new az_ams_account_sp_reset_credentials_command_builder("az ams account sp reset-credentials", 'az_ams_account_sp_reset_credentials_command_result');
    };
    return az_ams_account_sp;
}());
exports.az_ams_account_sp = az_ams_account_sp;
/** Manage storage for an Azure Media Services account. */
var az_ams_account_storage = /** @class */ (function () {
    function az_ams_account_storage() {
    }
    /**
     * Attach a secondary storage to an Azure Media Services account.
     *
     * Syntax:
     * ```
     * az ams account storage add [--account-name]
     *                            [--ids]
     *                            [--name]
     *                            [--resource-group]
     *                            [--subscription]
     * ```
     */
    az_ams_account_storage.add = function () {
        return new az_ams_account_storage_add_command_builder("az ams account storage add", 'az_ams_account_storage_add_command_result');
    };
    /**
     * Detach a secondary storage from an Azure Media Services account.
     *
     * Syntax:
     * ```
     * az ams account storage remove [--account-name]
     *                               [--ids]
     *                               [--name]
     *                               [--resource-group]
     *                               [--subscription]
     * ```
     */
    az_ams_account_storage.remove = function () {
        return new az_ams_account_storage_remove_command_builder("az ams account storage remove", 'az_ams_account_storage_remove_command_result');
    };
    /**
     * Synchronize storage account keys for a storage account associated with an Azure Media Services account.
     *
     * Syntax:
     * ```
     * az ams account storage sync-storage-keys --id
     *                                          [--account-name]
     *                                          [--ids]
     *                                          [--resource-group]
     *                                          [--subscription]
     * ```
     *
     * @param {string} id The ID of the storage account resource.
     */
    az_ams_account_storage.sync_storage_keys = function (id) {
        return new az_ams_account_storage_sync_storage_keys_command_builder("az ams account storage sync-storage-keys", 'az_ams_account_storage_sync_storage_keys_command_result', id);
    };
    return az_ams_account_storage;
}());
exports.az_ams_account_storage = az_ams_account_storage;
/** Manage account filters for an Azure Media Services account. */
var az_ams_account_filter = /** @class */ (function () {
    function az_ams_account_filter() {
    }
    /**
     * Create an account filter.
     *
     * Syntax:
     * ```
     * az ams account-filter create --account-name
     *                              --name
     *                              --resource-group
     *                              [--bitrate]
     *                              [--end-timestamp]
     *                              [--first-quality]
     *                              [--force-end-timestamp {false, true}]
     *                              [--live-backoff-duration]
     *                              [--presentation-window-duration]
     *                              [--start-timestamp]
     *                              [--subscription]
     *                              [--timescale]
     *                              [--tracks]
     * ```
     *
     * @param {string} accountName The name of the Azure Media Services account.
     * @param {string} name The name of the account filter.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_ams_account_filter.create = function (accountName, name, resourceGroup) {
        return new az_ams_account_filter_create_command_builder("az ams account-filter create", 'az_ams_account_filter_create_command_result', accountName, name, resourceGroup);
    };
    /**
     * Delete an account filter.
     *
     * Syntax:
     * ```
     * az ams account-filter delete [--account-name]
     *                              [--ids]
     *                              [--name]
     *                              [--resource-group]
     *                              [--subscription]
     * ```
     */
    az_ams_account_filter["delete"] = function () {
        return new az_ams_account_filter_delete_command_builder("az ams account-filter delete", 'az_ams_account_filter_delete_command_result');
    };
    /**
     * List all the account filters of an Azure Media Services account.
     *
     * Syntax:
     * ```
     * az ams account-filter list --account-name
     *                            --resource-group
     *                            [--query-examples]
     *                            [--subscription]
     * ```
     *
     * @param {string} accountName The name of the Azure Media Services account.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_ams_account_filter.list = function (accountName, resourceGroup) {
        return new az_ams_account_filter_list_command_builder("az ams account-filter list", 'az_ams_account_filter_list_command_result', accountName, resourceGroup);
    };
    /**
     * Show the details of an account filter.
     *
     * Syntax:
     * ```
     * az ams account-filter show [--account-name]
     *                            [--ids]
     *                            [--name]
     *                            [--query-examples]
     *                            [--resource-group]
     *                            [--subscription]
     * ```
     */
    az_ams_account_filter.show = function () {
        return new az_ams_account_filter_show_command_builder("az ams account-filter show", 'az_ams_account_filter_show_command_result');
    };
    /**
     * Update the details of an account filter.
     *
     * Syntax:
     * ```
     * az ams account-filter update [--account-name]
     *                              [--add]
     *                              [--bitrate]
     *                              [--end-timestamp]
     *                              [--first-quality]
     *                              [--force-end-timestamp {false, true}]
     *                              [--force-string]
     *                              [--ids]
     *                              [--live-backoff-duration]
     *                              [--name]
     *                              [--presentation-window-duration]
     *                              [--remove]
     *                              [--resource-group]
     *                              [--set]
     *                              [--start-timestamp]
     *                              [--subscription]
     *                              [--timescale]
     *                              [--tracks]
     * ```
     */
    az_ams_account_filter.update = function () {
        return new az_ams_account_filter_update_command_builder("az ams account-filter update", 'az_ams_account_filter_update_command_result');
    };
    return az_ams_account_filter;
}());
exports.az_ams_account_filter = az_ams_account_filter;
/** Manage Azure Media Services accounts. */
var az_ams_account = /** @class */ (function () {
    function az_ams_account() {
    }
    /**
     * Checks whether the Media Service resource name is available.
     *
     * Syntax:
     * ```
     * az ams account check-name --location
     *                           --name
     *                           [--subscription]
     * ```
     *
     * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
     * @param {string} name The name of the Azure Media Services account.
     */
    az_ams_account.check_name = function (location, name) {
        return new az_ams_account_check_name_command_builder("az ams account check-name", 'az_ams_account_check_name_command_result', location, name);
    };
    /**
     * Create an Azure Media Services account.
     *
     * Syntax:
     * ```
     * az ams account create --name
     *                       --resource-group
     *                       --storage-account
     *                       [--location]
     *                       [--subscription]
     *                       [--tags]
     * ```
     *
     * @param {string} name The name of the Azure Media Services account.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} storageAccount The name or resource ID of the primary storage account to attach to the Azure Media Services account. The storage account MUST be in the same Azure subscription as the Media Services account. It is strongly recommended that the storage account be in the same resource group as the Media Services account. Blob only accounts are not allowed as primary.
     */
    az_ams_account.create = function (name, resourceGroup, storageAccount) {
        return new az_ams_account_create_command_builder("az ams account create", 'az_ams_account_create_command_result', name, resourceGroup, storageAccount);
    };
    /**
     * Delete an Azure Media Services account.
     *
     * Syntax:
     * ```
     * az ams account delete [--ids]
     *                       [--name]
     *                       [--resource-group]
     *                       [--subscription]
     * ```
     */
    az_ams_account["delete"] = function () {
        return new az_ams_account_delete_command_builder("az ams account delete", 'az_ams_account_delete_command_result');
    };
    /**
     * List Azure Media Services accounts for the entire subscription.
     *
     * Syntax:
     * ```
     * az ams account list [--query-examples]
     *                     [--resource-group]
     *                     [--subscription]
     * ```
     */
    az_ams_account.list = function () {
        return new az_ams_account_list_command_builder("az ams account list", 'az_ams_account_list_command_result');
    };
    /**
     * Show the details of an Azure Media Services account.
     *
     * Syntax:
     * ```
     * az ams account show [--ids]
     *                     [--name]
     *                     [--query-examples]
     *                     [--resource-group]
     *                     [--subscription]
     * ```
     */
    az_ams_account.show = function () {
        return new az_ams_account_show_command_builder("az ams account show", 'az_ams_account_show_command_result');
    };
    /**
     * Update the details of an Azure Media Services account.
     *
     * Syntax:
     * ```
     * az ams account update [--add]
     *                       [--force-string]
     *                       [--ids]
     *                       [--name]
     *                       [--remove]
     *                       [--resource-group]
     *                       [--set]
     *                       [--subscription]
     *                       [--tags]
     * ```
     */
    az_ams_account.update = function () {
        return new az_ams_account_update_command_builder("az ams account update", 'az_ams_account_update_command_result');
    };
    return az_ams_account;
}());
exports.az_ams_account = az_ams_account;
/** Manage asset filters for an Azure Media Services account. */
var az_ams_asset_filter = /** @class */ (function () {
    function az_ams_asset_filter() {
    }
    /**
     * Create an asset filter.
     *
     * Syntax:
     * ```
     * az ams asset-filter create --account-name
     *                            --asset-name
     *                            --name
     *                            --resource-group
     *                            [--bitrate]
     *                            [--end-timestamp]
     *                            [--first-quality]
     *                            [--force-end-timestamp {false, true}]
     *                            [--live-backoff-duration]
     *                            [--presentation-window-duration]
     *                            [--start-timestamp]
     *                            [--subscription]
     *                            [--timescale]
     *                            [--tracks]
     * ```
     *
     * @param {string} accountName The name of the Azure Media Services account.
     * @param {string} assetName The name of the asset.
     * @param {string} name The name of the asset filter.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_ams_asset_filter.create = function (accountName, assetName, name, resourceGroup) {
        return new az_ams_asset_filter_create_command_builder("az ams asset-filter create", 'az_ams_asset_filter_create_command_result', accountName, assetName, name, resourceGroup);
    };
    /**
     * Delete an asset filter.
     *
     * Syntax:
     * ```
     * az ams asset-filter delete [--account-name]
     *                            [--asset-name]
     *                            [--ids]
     *                            [--name]
     *                            [--resource-group]
     *                            [--subscription]
     * ```
     */
    az_ams_asset_filter["delete"] = function () {
        return new az_ams_asset_filter_delete_command_builder("az ams asset-filter delete", 'az_ams_asset_filter_delete_command_result');
    };
    /**
     * List all the asset filters of an Azure Media Services account.
     *
     * Syntax:
     * ```
     * az ams asset-filter list --account-name
     *                          --asset-name
     *                          --resource-group
     *                          [--query-examples]
     *                          [--subscription]
     * ```
     *
     * @param {string} accountName The name of the Azure Media Services account.
     * @param {string} assetName The name of the asset.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_ams_asset_filter.list = function (accountName, assetName, resourceGroup) {
        return new az_ams_asset_filter_list_command_builder("az ams asset-filter list", 'az_ams_asset_filter_list_command_result', accountName, assetName, resourceGroup);
    };
    /**
     * Show the details of an asset filter.
     *
     * Syntax:
     * ```
     * az ams asset-filter show [--account-name]
     *                          [--asset-name]
     *                          [--ids]
     *                          [--name]
     *                          [--query-examples]
     *                          [--resource-group]
     *                          [--subscription]
     * ```
     */
    az_ams_asset_filter.show = function () {
        return new az_ams_asset_filter_show_command_builder("az ams asset-filter show", 'az_ams_asset_filter_show_command_result');
    };
    /**
     * Update the details of an asset filter.
     *
     * Syntax:
     * ```
     * az ams asset-filter update [--account-name]
     *                            [--add]
     *                            [--asset-name]
     *                            [--bitrate]
     *                            [--end-timestamp]
     *                            [--first-quality]
     *                            [--force-end-timestamp {false, true}]
     *                            [--force-string]
     *                            [--ids]
     *                            [--live-backoff-duration]
     *                            [--name]
     *                            [--presentation-window-duration]
     *                            [--remove]
     *                            [--resource-group]
     *                            [--set]
     *                            [--start-timestamp]
     *                            [--subscription]
     *                            [--timescale]
     *                            [--tracks]
     * ```
     */
    az_ams_asset_filter.update = function () {
        return new az_ams_asset_filter_update_command_builder("az ams asset-filter update", 'az_ams_asset_filter_update_command_result');
    };
    return az_ams_asset_filter;
}());
exports.az_ams_asset_filter = az_ams_asset_filter;
/** Manage assets for an Azure Media Services account. */
var az_ams_asset = /** @class */ (function () {
    function az_ams_asset() {
    }
    /**
     * Create an asset.
     *
     * Syntax:
     * ```
     * az ams asset create --account-name
     *                     --name
     *                     --resource-group
     *                     [--alternate-id]
     *                     [--container]
     *                     [--description]
     *                     [--storage-account]
     *                     [--subscription]
     * ```
     *
     * @param {string} accountName The name of the Azure Media Services account.
     * @param {string} name The name of the asset.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_ams_asset.create = function (accountName, name, resourceGroup) {
        return new az_ams_asset_create_command_builder("az ams asset create", 'az_ams_asset_create_command_result', accountName, name, resourceGroup);
    };
    /**
     * Delete an asset.
     *
     * Syntax:
     * ```
     * az ams asset delete [--account-name]
     *                     [--ids]
     *                     [--name]
     *                     [--resource-group]
     *                     [--subscription]
     * ```
     */
    az_ams_asset["delete"] = function () {
        return new az_ams_asset_delete_command_builder("az ams asset delete", 'az_ams_asset_delete_command_result');
    };
    /**
     * Get the asset storage encryption keys used to decrypt content created by version 2 of the Media Services API.
     *
     * Syntax:
     * ```
     * az ams asset get-encryption-key [--account-name]
     *                                 [--ids]
     *                                 [--name]
     *                                 [--resource-group]
     *                                 [--subscription]
     * ```
     */
    az_ams_asset.get_encryption_key = function () {
        return new az_ams_asset_get_encryption_key_command_builder("az ams asset get-encryption-key", 'az_ams_asset_get_encryption_key_command_result');
    };
    /**
     * Lists storage container URLs with shared access signatures (SAS) for uploading and downloading Asset content. The signatures are derived from the storage account keys.
     *
     * Syntax:
     * ```
     * az ams asset get-sas-urls [--account-name]
     *                           [--expiry]
     *                           [--ids]
     *                           [--name]
     *                           [--permissions {Read, ReadWrite, ReadWriteDelete}]
     *                           [--resource-group]
     *                           [--subscription]
     * ```
     */
    az_ams_asset.get_sas_urls = function () {
        return new az_ams_asset_get_sas_urls_command_builder("az ams asset get-sas-urls", 'az_ams_asset_get_sas_urls_command_result');
    };
    /**
     * List all the assets of an Azure Media Services account.
     *
     * Syntax:
     * ```
     * az ams asset list --account-name
     *                   --resource-group
     *                   [--filter]
     *                   [--orderby]
     *                   [--query-examples]
     *                   [--subscription]
     *                   [--top]
     * ```
     *
     * @param {string} accountName The name of the Azure Media Services account.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_ams_asset.list = function (accountName, resourceGroup) {
        return new az_ams_asset_list_command_builder("az ams asset list", 'az_ams_asset_list_command_result', accountName, resourceGroup);
    };
    /**
     * List streaming locators which are associated with this asset.
     *
     * Syntax:
     * ```
     * az ams asset list-streaming-locators [--account-name]
     *                                      [--ids]
     *                                      [--name]
     *                                      [--resource-group]
     *                                      [--subscription]
     * ```
     */
    az_ams_asset.list_streaming_locators = function () {
        return new az_ams_asset_list_streaming_locators_command_builder("az ams asset list-streaming-locators", 'az_ams_asset_list_streaming_locators_command_result');
    };
    /**
     * Show the details of an asset.
     *
     * Syntax:
     * ```
     * az ams asset show [--account-name]
     *                   [--ids]
     *                   [--name]
     *                   [--query-examples]
     *                   [--resource-group]
     *                   [--subscription]
     * ```
     */
    az_ams_asset.show = function () {
        return new az_ams_asset_show_command_builder("az ams asset show", 'az_ams_asset_show_command_result');
    };
    /**
     * Update the details of an asset.
     *
     * Syntax:
     * ```
     * az ams asset update [--account-name]
     *                     [--add]
     *                     [--alternate-id]
     *                     [--description]
     *                     [--force-string]
     *                     [--ids]
     *                     [--name]
     *                     [--remove]
     *                     [--resource-group]
     *                     [--set]
     *                     [--subscription]
     * ```
     */
    az_ams_asset.update = function () {
        return new az_ams_asset_update_command_builder("az ams asset update", 'az_ams_asset_update_command_result');
    };
    return az_ams_asset;
}());
exports.az_ams_asset = az_ams_asset;
/** Manage options for an existing content key policy. */
var az_ams_content_key_policy_option = /** @class */ (function () {
    function az_ams_content_key_policy_option() {
    }
    /**
     * Add a new option to an existing content key policy.
     *
     * Syntax:
     * ```
     * az ams content-key-policy option add --policy-option-name
     *                                      [--account-name]
     *                                      [--alt-rsa-token-keys]
     *                                      [--alt-symmetric-token-keys]
     *                                      [--alt-x509-token-keys]
     *                                      [--ask]
     *                                      [--audience]
     *                                      [--clear-key-configuration]
     *                                      [--fair-play-pfx]
     *                                      [--fair-play-pfx-password]
     *                                      [--fp-playback-duration-seconds]
     *                                      [--fp-storage-duration-seconds]
     *                                      [--ids]
     *                                      [--issuer]
     *                                      [--name]
     *                                      [--open-id-connect-discovery-document]
     *                                      [--open-restriction]
     *                                      [--play-ready-template]
     *                                      [--rental-and-lease-key-type]
     *                                      [--rental-duration]
     *                                      [--resource-group]
     *                                      [--subscription]
     *                                      [--token-claims]
     *                                      [--token-key]
     *                                      [--token-key-type]
     *                                      [--token-type]
     *                                      [--widevine-template]
     * ```
     *
     * @param {string} policyOptionName The content key policy option name.
     */
    az_ams_content_key_policy_option.add = function (policyOptionName) {
        return new az_ams_content_key_policy_option_add_command_builder("az ams content-key-policy option add", 'az_ams_content_key_policy_option_add_command_result', policyOptionName);
    };
    /**
     * Remove an option from an existing content key policy.
     *
     * Syntax:
     * ```
     * az ams content-key-policy option remove --policy-option-id
     *                                         [--account-name]
     *                                         [--ids]
     *                                         [--name]
     *                                         [--resource-group]
     *                                         [--subscription]
     * ```
     *
     * @param {string} policyOptionId The content key policy option identifier. This value can be obtained from "policyOptionId" property by running a show operation on a content key policy resource.
     */
    az_ams_content_key_policy_option.remove = function (policyOptionId) {
        return new az_ams_content_key_policy_option_remove_command_builder("az ams content-key-policy option remove", 'az_ams_content_key_policy_option_remove_command_result', policyOptionId);
    };
    /**
     * Update an option from an existing content key policy.
     *
     * Syntax:
     * ```
     * az ams content-key-policy option update --policy-option-id
     *                                         [--account-name]
     *                                         [--add-alt-token-key]
     *                                         [--add-alt-token-key-type]
     *                                         [--ask]
     *                                         [--audience]
     *                                         [--fair-play-pfx]
     *                                         [--fair-play-pfx-password]
     *                                         [--fp-playback-duration-seconds]
     *                                         [--fp-storage-duration-seconds]
     *                                         [--ids]
     *                                         [--issuer]
     *                                         [--name]
     *                                         [--open-id-connect-discovery-document]
     *                                         [--play-ready-template]
     *                                         [--policy-option-name]
     *                                         [--rental-and-lease-key-type]
     *                                         [--rental-duration]
     *                                         [--resource-group]
     *                                         [--subscription]
     *                                         [--token-claims]
     *                                         [--token-key]
     *                                         [--token-key-type]
     *                                         [--token-type]
     *                                         [--widevine-template]
     * ```
     *
     * @param {string} policyOptionId The content key policy option identifier. This value can be obtained from "policyOptionId" property by running a show operation on a content key policy resource.
     */
    az_ams_content_key_policy_option.update = function (policyOptionId) {
        return new az_ams_content_key_policy_option_update_command_builder("az ams content-key-policy option update", 'az_ams_content_key_policy_option_update_command_result', policyOptionId);
    };
    return az_ams_content_key_policy_option;
}());
exports.az_ams_content_key_policy_option = az_ams_content_key_policy_option;
/** Manage content key policies for an Azure Media Services account. */
var az_ams_content_key_policy = /** @class */ (function () {
    function az_ams_content_key_policy() {
    }
    /**
     * Create a new content key policy.
     *
     * Syntax:
     * ```
     * az ams content-key-policy create --account-name
     *                                  --name
     *                                  --policy-option-name
     *                                  --resource-group
     *                                  [--alt-rsa-token-keys]
     *                                  [--alt-symmetric-token-keys]
     *                                  [--alt-x509-token-keys]
     *                                  [--ask]
     *                                  [--audience]
     *                                  [--clear-key-configuration]
     *                                  [--description]
     *                                  [--fair-play-pfx]
     *                                  [--fair-play-pfx-password]
     *                                  [--fp-playback-duration-seconds]
     *                                  [--fp-storage-duration-seconds]
     *                                  [--issuer]
     *                                  [--open-id-connect-discovery-document]
     *                                  [--open-restriction]
     *                                  [--play-ready-template]
     *                                  [--rental-and-lease-key-type]
     *                                  [--rental-duration]
     *                                  [--subscription]
     *                                  [--token-claims]
     *                                  [--token-key]
     *                                  [--token-key-type]
     *                                  [--token-type]
     *                                  [--widevine-template]
     * ```
     *
     * @param {string} accountName The name of the Azure Media Services account.
     * @param {string} name The content key policy name.
     * @param {string} policyOptionName The content key policy option name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_ams_content_key_policy.create = function (accountName, name, policyOptionName, resourceGroup) {
        return new az_ams_content_key_policy_create_command_builder("az ams content-key-policy create", 'az_ams_content_key_policy_create_command_result', accountName, name, policyOptionName, resourceGroup);
    };
    /**
     * Delete a content key policy.
     *
     * Syntax:
     * ```
     * az ams content-key-policy delete [--account-name]
     *                                  [--ids]
     *                                  [--name]
     *                                  [--resource-group]
     *                                  [--subscription]
     * ```
     */
    az_ams_content_key_policy["delete"] = function () {
        return new az_ams_content_key_policy_delete_command_builder("az ams content-key-policy delete", 'az_ams_content_key_policy_delete_command_result');
    };
    /**
     * List all the content key policies within an Azure Media Services account.
     *
     * Syntax:
     * ```
     * az ams content-key-policy list --account-name
     *                                --resource-group
     *                                [--filter]
     *                                [--orderby]
     *                                [--query-examples]
     *                                [--subscription]
     *                                [--top]
     * ```
     *
     * @param {string} accountName The name of the Azure Media Services account.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_ams_content_key_policy.list = function (accountName, resourceGroup) {
        return new az_ams_content_key_policy_list_command_builder("az ams content-key-policy list", 'az_ams_content_key_policy_list_command_result', accountName, resourceGroup);
    };
    /**
     * Show an existing content key policy.
     *
     * Syntax:
     * ```
     * az ams content-key-policy show [--account-name]
     *                                [--ids]
     *                                [--name]
     *                                [--query-examples]
     *                                [--resource-group]
     *                                [--subscription]
     *                                [--with-secrets]
     * ```
     */
    az_ams_content_key_policy.show = function () {
        return new az_ams_content_key_policy_show_command_builder("az ams content-key-policy show", 'az_ams_content_key_policy_show_command_result');
    };
    /**
     * Update an existing content key policy.
     *
     * Syntax:
     * ```
     * az ams content-key-policy update [--account-name]
     *                                  [--add]
     *                                  [--description]
     *                                  [--force-string]
     *                                  [--ids]
     *                                  [--name]
     *                                  [--remove]
     *                                  [--resource-group]
     *                                  [--set]
     *                                  [--subscription]
     * ```
     */
    az_ams_content_key_policy.update = function () {
        return new az_ams_content_key_policy_update_command_builder("az ams content-key-policy update", 'az_ams_content_key_policy_update_command_result');
    };
    return az_ams_content_key_policy;
}());
exports.az_ams_content_key_policy = az_ams_content_key_policy;
/** Manage jobs for a transform. */
var az_ams_job = /** @class */ (function () {
    function az_ams_job() {
    }
    /**
     * Cancel a job.
     *
     * Syntax:
     * ```
     * az ams job cancel [--account-name]
     *                   [--delete]
     *                   [--ids]
     *                   [--name]
     *                   [--resource-group]
     *                   [--subscription]
     *                   [--transform-name]
     * ```
     */
    az_ams_job.cancel = function () {
        return new az_ams_job_cancel_command_builder("az ams job cancel", 'az_ams_job_cancel_command_result');
    };
    /**
     * Delete a job.
     *
     * Syntax:
     * ```
     * az ams job delete [--account-name]
     *                   [--ids]
     *                   [--name]
     *                   [--resource-group]
     *                   [--subscription]
     *                   [--transform-name]
     * ```
     */
    az_ams_job["delete"] = function () {
        return new az_ams_job_delete_command_builder("az ams job delete", 'az_ams_job_delete_command_result');
    };
    /**
     * List all the jobs of a transform within an Azure Media Services account.
     *
     * Syntax:
     * ```
     * az ams job list --account-name
     *                 --resource-group
     *                 --transform-name
     *                 [--filter]
     *                 [--orderby]
     *                 [--query-examples]
     *                 [--subscription]
     * ```
     *
     * @param {string} accountName The name of the Azure Media Services account.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} transformName The name of the transform.
     */
    az_ams_job.list = function (accountName, resourceGroup, transformName) {
        return new az_ams_job_list_command_builder("az ams job list", 'az_ams_job_list_command_result', accountName, resourceGroup, transformName);
    };
    /**
     * Show the details of a job.
     *
     * Syntax:
     * ```
     * az ams job show [--account-name]
     *                 [--ids]
     *                 [--name]
     *                 [--query-examples]
     *                 [--resource-group]
     *                 [--subscription]
     *                 [--transform-name]
     * ```
     */
    az_ams_job.show = function () {
        return new az_ams_job_show_command_builder("az ams job show", 'az_ams_job_show_command_result');
    };
    /**
     * Start a job.
     *
     * Syntax:
     * ```
     * az ams job start --output-assets
     *                  [--account-name]
     *                  [--base-uri]
     *                  [--correlation-data]
     *                  [--description]
     *                  [--files]
     *                  [--ids]
     *                  [--input-asset-name]
     *                  [--label]
     *                  [--name]
     *                  [--priority {High, Low, Normal}]
     *                  [--resource-group]
     *                  [--subscription]
     *                  [--transform-name]
     * ```
     *
     * @param {string} outputAssets Space-separated assets in 'assetName=label' format. An asset without label can be sent like this: 'assetName='.
     */
    az_ams_job.start = function (outputAssets) {
        return new az_ams_job_start_command_builder("az ams job start", 'az_ams_job_start_command_result', outputAssets);
    };
    /**
     * Update an existing job.
     *
     * Syntax:
     * ```
     * az ams job update [--account-name]
     *                   [--add]
     *                   [--description]
     *                   [--force-string]
     *                   [--ids]
     *                   [--name]
     *                   [--priority {High, Low, Normal}]
     *                   [--remove]
     *                   [--resource-group]
     *                   [--set]
     *                   [--subscription]
     *                   [--transform-name]
     * ```
     */
    az_ams_job.update = function () {
        return new az_ams_job_update_command_builder("az ams job update", 'az_ams_job_update_command_result');
    };
    return az_ams_job;
}());
exports.az_ams_job = az_ams_job;
/** Manage live events for an Azure Media Service account. */
var az_ams_live_event = /** @class */ (function () {
    function az_ams_live_event() {
    }
    /**
     * Create a live event.
     *
     * Syntax:
     * ```
     * az ams live-event create --account-name
     *                          --ips
     *                          --name
     *                          --resource-group
     *                          --streaming-protocol {FragmentedMP4, RTMP}
     *                          [--access-token]
     *                          [--alternative-media-id]
     *                          [--auto-start]
     *                          [--client-access-policy]
     *                          [--cross-domain-policy]
     *                          [--description]
     *                          [--encoding-type]
     *                          [--key-frame-interval-duration]
     *                          [--no-wait]
     *                          [--preset-name]
     *                          [--preview-ips]
     *                          [--preview-locator]
     *                          [--stream-options {Default, LowLatency}]
     *                          [--streaming-policy-name]
     *                          [--subscription]
     *                          [--tags]
     *                          [--vanity-url {false, true}]
     * ```
     *
     * @param {string} accountName The name of the Azure Media Services account.
     * @param {string} ips Space-separated IP addresses for access control. Allowed IP addresses can be specified as either a single IP address (e.g. "10.0.0.1") or as an IP range using an IP address and a CIDR subnet mask (e.g. "10.0.0.1/22"). Use "" to clear existing list. Use "AllowAll" to allow all IP addresses. Allowing all IPs is not recommended for production environments.
     * @param {string} name The name of the live event.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {'FragmentedMP4' | 'RTMP'} streamingProtocol The streaming protocol for the live event. This value is specified at creation time and cannot be updated.
     */
    az_ams_live_event.create = function (accountName, ips, name, resourceGroup, streamingProtocol) {
        return new az_ams_live_event_create_command_builder("az ams live-event create", 'az_ams_live_event_create_command_result', accountName, ips, name, resourceGroup, streamingProtocol);
    };
    /**
     * Delete a live event.
     *
     * Syntax:
     * ```
     * az ams live-event delete [--account-name]
     *                          [--ids]
     *                          [--name]
     *                          [--resource-group]
     *                          [--subscription]
     * ```
     */
    az_ams_live_event["delete"] = function () {
        return new az_ams_live_event_delete_command_builder("az ams live-event delete", 'az_ams_live_event_delete_command_result');
    };
    /**
     * List all the live events of an Azure Media Services account.
     *
     * Syntax:
     * ```
     * az ams live-event list --account-name
     *                        --resource-group
     *                        [--query-examples]
     *                        [--subscription]
     * ```
     *
     * @param {string} accountName The name of the Azure Media Services account.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_ams_live_event.list = function (accountName, resourceGroup) {
        return new az_ams_live_event_list_command_builder("az ams live-event list", 'az_ams_live_event_list_command_result', accountName, resourceGroup);
    };
    /**
     * Reset a live event.
     *
     * Syntax:
     * ```
     * az ams live-event reset [--account-name]
     *                         [--ids]
     *                         [--name]
     *                         [--no-wait]
     *                         [--resource-group]
     *                         [--subscription]
     * ```
     */
    az_ams_live_event.reset = function () {
        return new az_ams_live_event_reset_command_builder("az ams live-event reset", 'az_ams_live_event_reset_command_result');
    };
    /**
     * Show the details of a live event.
     *
     * Syntax:
     * ```
     * az ams live-event show [--account-name]
     *                        [--ids]
     *                        [--name]
     *                        [--query-examples]
     *                        [--resource-group]
     *                        [--subscription]
     * ```
     */
    az_ams_live_event.show = function () {
        return new az_ams_live_event_show_command_builder("az ams live-event show", 'az_ams_live_event_show_command_result');
    };
    /**
     * Start a live event.
     *
     * Syntax:
     * ```
     * az ams live-event start [--account-name]
     *                         [--ids]
     *                         [--name]
     *                         [--no-wait]
     *                         [--resource-group]
     *                         [--subscription]
     * ```
     */
    az_ams_live_event.start = function () {
        return new az_ams_live_event_start_command_builder("az ams live-event start", 'az_ams_live_event_start_command_result');
    };
    /**
     * Stop a live event.
     *
     * Syntax:
     * ```
     * az ams live-event stop [--account-name]
     *                        [--ids]
     *                        [--name]
     *                        [--no-wait]
     *                        [--remove-outputs-on-stop]
     *                        [--resource-group]
     *                        [--subscription]
     * ```
     */
    az_ams_live_event.stop = function () {
        return new az_ams_live_event_stop_command_builder("az ams live-event stop", 'az_ams_live_event_stop_command_result');
    };
    /**
     * Update the details of a live event.
     *
     * Syntax:
     * ```
     * az ams live-event update [--account-name]
     *                          [--add]
     *                          [--client-access-policy]
     *                          [--cross-domain-policy]
     *                          [--description]
     *                          [--force-string]
     *                          [--ids]
     *                          [--ips]
     *                          [--key-frame-interval-duration]
     *                          [--name]
     *                          [--preview-ips]
     *                          [--remove]
     *                          [--resource-group]
     *                          [--set]
     *                          [--subscription]
     *                          [--tags]
     * ```
     */
    az_ams_live_event.update = function () {
        return new az_ams_live_event_update_command_builder("az ams live-event update", 'az_ams_live_event_update_command_result');
    };
    /**
     * Place the CLI in a waiting state until a condition of the live event is met.
     *
     * Syntax:
     * ```
     * az ams live-event wait [--account-name]
     *                        [--created]
     *                        [--custom]
     *                        [--deleted]
     *                        [--exists]
     *                        [--ids]
     *                        [--interval]
     *                        [--name]
     *                        [--resource-group]
     *                        [--subscription]
     *                        [--timeout]
     *                        [--updated]
     * ```
     */
    az_ams_live_event.wait = function () {
        return new az_ams_live_event_wait_command_builder("az ams live-event wait", 'az_ams_live_event_wait_command_result');
    };
    return az_ams_live_event;
}());
exports.az_ams_live_event = az_ams_live_event;
/** Manage live outputs for an Azure Media Service account. */
var az_ams_live_output = /** @class */ (function () {
    function az_ams_live_output() {
    }
    /**
     * Create a live output.
     *
     * Syntax:
     * ```
     * az ams live-output create --account-name
     *                           --archive-window-length
     *                           --asset-name
     *                           --live-event-name
     *                           --name
     *                           --resource-group
     *                           [--description]
     *                           [--fragments-per-ts-segment]
     *                           [--manifest-name]
     *                           [--output-snap-time]
     *                           [--subscription]
     * ```
     *
     * @param {string} accountName The name of the Azure Media Services account.
     * @param {string} archiveWindowLength ISO 8601 timespan duration of the archive window length. This is the duration that customer want to retain the recorded content. Minimum window is 5 minutes (PT5M or 00:05:00). Maximum window is 25 hours (PT25H or 25:00:00). For example, to retain the output for 10 minutes, use PT10M or 00:10:00.
     * @param {string} assetName The name of the asset.
     * @param {string} liveEventName The name of the live event.
     * @param {string} name The name of the live output.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_ams_live_output.create = function (accountName, archiveWindowLength, assetName, liveEventName, name, resourceGroup) {
        return new az_ams_live_output_create_command_builder("az ams live-output create", 'az_ams_live_output_create_command_result', accountName, archiveWindowLength, assetName, liveEventName, name, resourceGroup);
    };
    /**
     * Delete a live output.
     *
     * Syntax:
     * ```
     * az ams live-output delete [--account-name]
     *                           [--ids]
     *                           [--live-event-name]
     *                           [--name]
     *                           [--resource-group]
     *                           [--subscription]
     * ```
     */
    az_ams_live_output["delete"] = function () {
        return new az_ams_live_output_delete_command_builder("az ams live-output delete", 'az_ams_live_output_delete_command_result');
    };
    /**
     * List all the live outputs in a live event.
     *
     * Syntax:
     * ```
     * az ams live-output list --account-name
     *                         --live-event-name
     *                         --resource-group
     *                         [--query-examples]
     *                         [--subscription]
     * ```
     *
     * @param {string} accountName The name of the Azure Media Services account.
     * @param {string} liveEventName The name of the live event.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_ams_live_output.list = function (accountName, liveEventName, resourceGroup) {
        return new az_ams_live_output_list_command_builder("az ams live-output list", 'az_ams_live_output_list_command_result', accountName, liveEventName, resourceGroup);
    };
    /**
     * Show the details of a live output.
     *
     * Syntax:
     * ```
     * az ams live-output show [--account-name]
     *                         [--ids]
     *                         [--live-event-name]
     *                         [--name]
     *                         [--query-examples]
     *                         [--resource-group]
     *                         [--subscription]
     * ```
     */
    az_ams_live_output.show = function () {
        return new az_ams_live_output_show_command_builder("az ams live-output show", 'az_ams_live_output_show_command_result');
    };
    return az_ams_live_output;
}());
exports.az_ams_live_output = az_ams_live_output;
/** Manage AkamaiAccessControl objects to be used on streaming endpoints. */
var az_ams_streaming_endpoint_akamai = /** @class */ (function () {
    function az_ams_streaming_endpoint_akamai() {
    }
    /**
     * Add an AkamaiAccessControl to an existing streaming endpoint.
     *
     * Syntax:
     * ```
     * az ams streaming-endpoint akamai add [--account-name]
     *                                      [--base64-key]
     *                                      [--expiration]
     *                                      [--identifier]
     *                                      [--ids]
     *                                      [--name]
     *                                      [--resource-group]
     *                                      [--subscription]
     * ```
     */
    az_ams_streaming_endpoint_akamai.add = function () {
        return new az_ams_streaming_endpoint_akamai_add_command_builder("az ams streaming-endpoint akamai add", 'az_ams_streaming_endpoint_akamai_add_command_result');
    };
    /**
     * Remove an AkamaiAccessControl from an existing streaming endpoint.
     *
     * Syntax:
     * ```
     * az ams streaming-endpoint akamai remove --identifier
     *                                         [--account-name]
     *                                         [--ids]
     *                                         [--name]
     *                                         [--resource-group]
     *                                         [--subscription]
     * ```
     *
     * @param {string} identifier The identifier for the authentication key. This is the nonce provided by Akamai.
     */
    az_ams_streaming_endpoint_akamai.remove = function (identifier) {
        return new az_ams_streaming_endpoint_akamai_remove_command_builder("az ams streaming-endpoint akamai remove", 'az_ams_streaming_endpoint_akamai_remove_command_result', identifier);
    };
    return az_ams_streaming_endpoint_akamai;
}());
exports.az_ams_streaming_endpoint_akamai = az_ams_streaming_endpoint_akamai;
/** Manage streaming endpoints for an Azure Media Service account. */
var az_ams_streaming_endpoint = /** @class */ (function () {
    function az_ams_streaming_endpoint() {
    }
    /**
     * Create a streaming endpoint.
     *
     * Syntax:
     * ```
     * az ams streaming-endpoint create --account-name
     *                                  --name
     *                                  --resource-group
     *                                  --scale-units
     *                                  [--auto-start]
     *                                  [--availability-set-name]
     *                                  [--cdn-profile]
     *                                  [--cdn-provider]
     *                                  [--client-access-policy]
     *                                  [--cross-domain-policy]
     *                                  [--custom-host-names]
     *                                  [--description]
     *                                  [--ips]
     *                                  [--max-cache-age]
     *                                  [--no-wait]
     *                                  [--subscription]
     *                                  [--tags]
     * ```
     *
     * @param {string} accountName The name of the Azure Media Services account.
     * @param {string} name The name of the streaming endpoint.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} scaleUnits The number of scale units for Premium StreamingEndpoints. For Standard StreamingEndpoints, set this value to 0. Use the Scale operation to adjust this value for Premium StreamingEndpoints.
     */
    az_ams_streaming_endpoint.create = function (accountName, name, resourceGroup, scaleUnits) {
        return new az_ams_streaming_endpoint_create_command_builder("az ams streaming-endpoint create", 'az_ams_streaming_endpoint_create_command_result', accountName, name, resourceGroup, scaleUnits);
    };
    /**
     * Delete a streaming endpoint.
     *
     * Syntax:
     * ```
     * az ams streaming-endpoint delete [--account-name]
     *                                  [--ids]
     *                                  [--name]
     *                                  [--resource-group]
     *                                  [--subscription]
     * ```
     */
    az_ams_streaming_endpoint["delete"] = function () {
        return new az_ams_streaming_endpoint_delete_command_builder("az ams streaming-endpoint delete", 'az_ams_streaming_endpoint_delete_command_result');
    };
    /**
     * List all the streaming endpoints within an Azure Media Services account.
     *
     * Syntax:
     * ```
     * az ams streaming-endpoint list --account-name
     *                                --resource-group
     *                                [--query-examples]
     *                                [--subscription]
     * ```
     *
     * @param {string} accountName The name of the Azure Media Services account.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_ams_streaming_endpoint.list = function (accountName, resourceGroup) {
        return new az_ams_streaming_endpoint_list_command_builder("az ams streaming-endpoint list", 'az_ams_streaming_endpoint_list_command_result', accountName, resourceGroup);
    };
    /**
     * Set the scale of a streaming endpoint.
     *
     * Syntax:
     * ```
     * az ams streaming-endpoint scale [--account-name]
     *                                 [--ids]
     *                                 [--name]
     *                                 [--resource-group]
     *                                 [--scale-units]
     *                                 [--subscription]
     * ```
     */
    az_ams_streaming_endpoint.scale = function () {
        return new az_ams_streaming_endpoint_scale_command_builder("az ams streaming-endpoint scale", 'az_ams_streaming_endpoint_scale_command_result');
    };
    /**
     * Show the details of a streaming endpoint.
     *
     * Syntax:
     * ```
     * az ams streaming-endpoint show [--account-name]
     *                                [--ids]
     *                                [--name]
     *                                [--query-examples]
     *                                [--resource-group]
     *                                [--subscription]
     * ```
     */
    az_ams_streaming_endpoint.show = function () {
        return new az_ams_streaming_endpoint_show_command_builder("az ams streaming-endpoint show", 'az_ams_streaming_endpoint_show_command_result');
    };
    /**
     * Start a streaming endpoint.
     *
     * Syntax:
     * ```
     * az ams streaming-endpoint start [--account-name]
     *                                 [--ids]
     *                                 [--name]
     *                                 [--no-wait]
     *                                 [--resource-group]
     *                                 [--subscription]
     * ```
     */
    az_ams_streaming_endpoint.start = function () {
        return new az_ams_streaming_endpoint_start_command_builder("az ams streaming-endpoint start", 'az_ams_streaming_endpoint_start_command_result');
    };
    /**
     * Stop a streaming endpoint.
     *
     * Syntax:
     * ```
     * az ams streaming-endpoint stop [--account-name]
     *                                [--ids]
     *                                [--name]
     *                                [--no-wait]
     *                                [--resource-group]
     *                                [--subscription]
     * ```
     */
    az_ams_streaming_endpoint.stop = function () {
        return new az_ams_streaming_endpoint_stop_command_builder("az ams streaming-endpoint stop", 'az_ams_streaming_endpoint_stop_command_result');
    };
    /**
     * Update the details of a streaming endpoint.
     *
     * Syntax:
     * ```
     * az ams streaming-endpoint update [--account-name]
     *                                  [--add]
     *                                  [--cdn-profile]
     *                                  [--cdn-provider]
     *                                  [--client-access-policy]
     *                                  [--cross-domain-policy]
     *                                  [--custom-host-names]
     *                                  [--description]
     *                                  [--disable-cdn]
     *                                  [--force-string]
     *                                  [--ids]
     *                                  [--ips]
     *                                  [--max-cache-age]
     *                                  [--name]
     *                                  [--no-wait]
     *                                  [--remove]
     *                                  [--resource-group]
     *                                  [--set]
     *                                  [--subscription]
     *                                  [--tags]
     * ```
     */
    az_ams_streaming_endpoint.update = function () {
        return new az_ams_streaming_endpoint_update_command_builder("az ams streaming-endpoint update", 'az_ams_streaming_endpoint_update_command_result');
    };
    /**
     * Place the CLI in a waiting state until a condition of the streaming endpoint is met.
     *
     * Syntax:
     * ```
     * az ams streaming-endpoint wait [--account-name]
     *                                [--created]
     *                                [--custom]
     *                                [--deleted]
     *                                [--exists]
     *                                [--ids]
     *                                [--interval]
     *                                [--name]
     *                                [--resource-group]
     *                                [--subscription]
     *                                [--timeout]
     *                                [--updated]
     * ```
     */
    az_ams_streaming_endpoint.wait = function () {
        return new az_ams_streaming_endpoint_wait_command_builder("az ams streaming-endpoint wait", 'az_ams_streaming_endpoint_wait_command_result');
    };
    return az_ams_streaming_endpoint;
}());
exports.az_ams_streaming_endpoint = az_ams_streaming_endpoint;
/** Manage streaming locators for an Azure Media Services account. */
var az_ams_streaming_locator = /** @class */ (function () {
    function az_ams_streaming_locator() {
    }
    /**
     * Create a streaming locator.
     *
     * Syntax:
     * ```
     * az ams streaming-locator create --account-name
     *                                 --asset-name
     *                                 --name
     *                                 --resource-group
     *                                 --streaming-policy-name
     *                                 [--alternative-media-id]
     *                                 [--content-key-policy-name]
     *                                 [--content-keys]
     *                                 [--end-time]
     *                                 [--filters]
     *                                 [--start-time]
     *                                 [--streaming-locator-id]
     *                                 [--subscription]
     * ```
     *
     * @param {string} accountName The name of the Azure Media Services account.
     * @param {string} assetName The name of the asset used by the streaming locator.
     * @param {string} name The name of the streaming locator.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} streamingPolicyName The name of the streaming policy used by the streaming locator. You can either create one with `az ams streaming policy create` or use any of the predefined policies: Predefined_DownloadOnly, Predefined_ClearStreamingOnly, Predefined_DownloadAndClearStreaming, Predefined_ClearKey, Predefined_MultiDrmCencStreaming, Predefined_MultiDrmStreaming.
     */
    az_ams_streaming_locator.create = function (accountName, assetName, name, resourceGroup, streamingPolicyName) {
        return new az_ams_streaming_locator_create_command_builder("az ams streaming-locator create", 'az_ams_streaming_locator_create_command_result', accountName, assetName, name, resourceGroup, streamingPolicyName);
    };
    /**
     * Delete a Streaming Locator.
     *
     * Syntax:
     * ```
     * az ams streaming-locator delete [--account-name]
     *                                 [--ids]
     *                                 [--name]
     *                                 [--resource-group]
     *                                 [--subscription]
     * ```
     */
    az_ams_streaming_locator["delete"] = function () {
        return new az_ams_streaming_locator_delete_command_builder("az ams streaming-locator delete", 'az_ams_streaming_locator_delete_command_result');
    };
    /**
     * List paths supported by a streaming locator.
     *
     * Syntax:
     * ```
     * az ams streaming-locator get-paths [--account-name]
     *                                    [--ids]
     *                                    [--name]
     *                                    [--resource-group]
     *                                    [--subscription]
     * ```
     */
    az_ams_streaming_locator.get_paths = function () {
        return new az_ams_streaming_locator_get_paths_command_builder("az ams streaming-locator get-paths", 'az_ams_streaming_locator_get_paths_command_result');
    };
    /**
     * List all the streaming locators within an Azure Media Services account.
     *
     * Syntax:
     * ```
     * az ams streaming-locator list --account-name
     *                               --resource-group
     *                               [--filter]
     *                               [--orderby]
     *                               [--query-examples]
     *                               [--subscription]
     *                               [--top]
     * ```
     *
     * @param {string} accountName The name of the Azure Media Services account.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_ams_streaming_locator.list = function (accountName, resourceGroup) {
        return new az_ams_streaming_locator_list_command_builder("az ams streaming-locator list", 'az_ams_streaming_locator_list_command_result', accountName, resourceGroup);
    };
    /**
     * List content keys used by a streaming locator.
     *
     * Syntax:
     * ```
     * az ams streaming-locator list-content-keys [--account-name]
     *                                            [--ids]
     *                                            [--name]
     *                                            [--resource-group]
     *                                            [--subscription]
     * ```
     */
    az_ams_streaming_locator.list_content_keys = function () {
        return new az_ams_streaming_locator_list_content_keys_command_builder("az ams streaming-locator list-content-keys", 'az_ams_streaming_locator_list_content_keys_command_result');
    };
    /**
     * Show the details of a streaming locator.
     *
     * Syntax:
     * ```
     * az ams streaming-locator show [--account-name]
     *                               [--ids]
     *                               [--name]
     *                               [--query-examples]
     *                               [--resource-group]
     *                               [--subscription]
     * ```
     */
    az_ams_streaming_locator.show = function () {
        return new az_ams_streaming_locator_show_command_builder("az ams streaming-locator show", 'az_ams_streaming_locator_show_command_result');
    };
    return az_ams_streaming_locator;
}());
exports.az_ams_streaming_locator = az_ams_streaming_locator;
/** Manage streaming policies for an Azure Media Services account. */
var az_ams_streaming_policy = /** @class */ (function () {
    function az_ams_streaming_policy() {
    }
    /**
     * Create a streaming policy.
     *
     * Syntax:
     * ```
     * az ams streaming-policy create --account-name
     *                                --name
     *                                --resource-group
     *                                [--cbcs-clear-tracks]
     *                                [--cbcs-default-key-label]
     *                                [--cbcs-default-key-policy-name]
     *                                [--cbcs-fair-play-allow-persistent-license {false, true}]
     *                                [--cbcs-fair-play-template]
     *                                [--cbcs-key-to-track-mappings]
     *                                [--cbcs-play-ready-attributes]
     *                                [--cbcs-play-ready-template]
     *                                [--cbcs-protocols]
     *                                [--cbcs-widevine-template]
     *                                [--cenc-clear-tracks]
     *                                [--cenc-default-key-label]
     *                                [--cenc-default-key-policy-name]
     *                                [--cenc-disable-play-ready {false, true}]
     *                                [--cenc-disable-widevine {false, true}]
     *                                [--cenc-key-to-track-mappings]
     *                                [--cenc-play-ready-attributes]
     *                                [--cenc-play-ready-template]
     *                                [--cenc-protocols]
     *                                [--cenc-widevine-template]
     *                                [--default-content-key-policy-name]
     *                                [--envelope-clear-tracks]
     *                                [--envelope-default-key-label]
     *                                [--envelope-default-key-policy-name]
     *                                [--envelope-key-to-track-mappings]
     *                                [--envelope-protocols]
     *                                [--envelope-template]
     *                                [--no-encryption-protocols]
     *                                [--subscription]
     * ```
     *
     * @param {string} accountName The name of the Azure Media Services account.
     * @param {string} name The name of the streaming policy.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_ams_streaming_policy.create = function (accountName, name, resourceGroup) {
        return new az_ams_streaming_policy_create_command_builder("az ams streaming-policy create", 'az_ams_streaming_policy_create_command_result', accountName, name, resourceGroup);
    };
    /**
     * Delete a Streaming Policy.
     *
     * Syntax:
     * ```
     * az ams streaming-policy delete [--account-name]
     *                                [--ids]
     *                                [--name]
     *                                [--resource-group]
     *                                [--subscription]
     * ```
     */
    az_ams_streaming_policy["delete"] = function () {
        return new az_ams_streaming_policy_delete_command_builder("az ams streaming-policy delete", 'az_ams_streaming_policy_delete_command_result');
    };
    /**
     * List all the streaming policies within an Azure Media Services account.
     *
     * Syntax:
     * ```
     * az ams streaming-policy list --account-name
     *                              --resource-group
     *                              [--filter]
     *                              [--orderby]
     *                              [--query-examples]
     *                              [--subscription]
     *                              [--top]
     * ```
     *
     * @param {string} accountName The name of the Azure Media Services account.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_ams_streaming_policy.list = function (accountName, resourceGroup) {
        return new az_ams_streaming_policy_list_command_builder("az ams streaming-policy list", 'az_ams_streaming_policy_list_command_result', accountName, resourceGroup);
    };
    /**
     * Show the details of a streaming policy.
     *
     * Syntax:
     * ```
     * az ams streaming-policy show [--account-name]
     *                              [--ids]
     *                              [--name]
     *                              [--query-examples]
     *                              [--resource-group]
     *                              [--subscription]
     * ```
     */
    az_ams_streaming_policy.show = function () {
        return new az_ams_streaming_policy_show_command_builder("az ams streaming-policy show", 'az_ams_streaming_policy_show_command_result');
    };
    return az_ams_streaming_policy;
}());
exports.az_ams_streaming_policy = az_ams_streaming_policy;
/** Manage transform outputs for an Azure Media Services account. */
var az_ams_transform_output = /** @class */ (function () {
    function az_ams_transform_output() {
    }
    /**
     * Add an output to an existing transform.
     *
     * Syntax:
     * ```
     * az ams transform output add --preset
     *                             [--account-name]
     *                             [--audio-language]
     *                             [--ids]
     *                             [--insights-to-extract {AllInsights, AudioInsightsOnly, VideoInsightsOnly}]
     *                             [--name]
     *                             [--on-error {ContinueJob, StopProcessingJob}]
     *                             [--relative-priority {High, Low, Normal}]
     *                             [--resolution]
     *                             [--resource-group]
     *                             [--subscription]
     * ```
     *
     * @param {string} preset Preset that describes the operations that will be used to modify, transcode, or extract insights from the source file to generate the transform output. Allowed values: H264SingleBitrateSD, H264SingleBitrate720p, H264SingleBitrate1080p, AdaptiveStreaming, AACGoodQualityAudio, ContentAwareEncodingExperimental, ContentAwareEncoding, H264MultipleBitrate1080p, H264MultipleBitrate720p, H264MultipleBitrateSD, AudioAnalyzer, VideoAnalyzer, FaceDetector. In addition to the allowed values, you can also pass a path to a custom Standard Encoder preset JSON file. See <a href="https://docs.microsoft.com/rest/api/media/transforms/createorupdate#standardencoderpreset">https://docs.microsoft.com/rest/api/media/transforms/createorupdate#standardencoderpreset</a> for further details on the settings to use to build a custom preset.
     */
    az_ams_transform_output.add = function (preset) {
        return new az_ams_transform_output_add_command_builder("az ams transform output add", 'az_ams_transform_output_add_command_result', preset);
    };
    /**
     * Remove an output from an existing transform.
     *
     * Syntax:
     * ```
     * az ams transform output remove --output-index
     *                                [--account-name]
     *                                [--ids]
     *                                [--name]
     *                                [--resource-group]
     *                                [--subscription]
     * ```
     *
     * @param {string} outputIndex The element index of the output to remove.
     */
    az_ams_transform_output.remove = function (outputIndex) {
        return new az_ams_transform_output_remove_command_builder("az ams transform output remove", 'az_ams_transform_output_remove_command_result', outputIndex);
    };
    return az_ams_transform_output;
}());
exports.az_ams_transform_output = az_ams_transform_output;
/** Manage transforms for an Azure Media Services account. */
var az_ams_transform = /** @class */ (function () {
    function az_ams_transform() {
    }
    /**
     * Create a transform.
     *
     * Syntax:
     * ```
     * az ams transform create --account-name
     *                         --name
     *                         --preset
     *                         --resource-group
     *                         [--audio-language]
     *                         [--description]
     *                         [--insights-to-extract {AllInsights, AudioInsightsOnly, VideoInsightsOnly}]
     *                         [--on-error {ContinueJob, StopProcessingJob}]
     *                         [--relative-priority {High, Low, Normal}]
     *                         [--resolution]
     *                         [--subscription]
     * ```
     *
     * @param {string} accountName The name of the Azure Media Services account.
     * @param {string} name The name of the transform.
     * @param {string} preset Preset that describes the operations that will be used to modify, transcode, or extract insights from the source file to generate the transform output. Allowed values: H264SingleBitrateSD, H264SingleBitrate720p, H264SingleBitrate1080p, AdaptiveStreaming, AACGoodQualityAudio, ContentAwareEncodingExperimental, ContentAwareEncoding, H264MultipleBitrate1080p, H264MultipleBitrate720p, H264MultipleBitrateSD, AudioAnalyzer, VideoAnalyzer, FaceDetector. In addition to the allowed values, you can also pass a path to a custom Standard Encoder preset JSON file. See <a href="https://docs.microsoft.com/rest/api/media/transforms/createorupdate#standardencoderpreset">https://docs.microsoft.com/rest/api/media/transforms/createorupdate#standardencoderpreset</a> for further details on the settings to use to build a custom preset.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_ams_transform.create = function (accountName, name, preset, resourceGroup) {
        return new az_ams_transform_create_command_builder("az ams transform create", 'az_ams_transform_create_command_result', accountName, name, preset, resourceGroup);
    };
    /**
     * Delete a transform.
     *
     * Syntax:
     * ```
     * az ams transform delete [--account-name]
     *                         [--ids]
     *                         [--name]
     *                         [--resource-group]
     *                         [--subscription]
     * ```
     */
    az_ams_transform["delete"] = function () {
        return new az_ams_transform_delete_command_builder("az ams transform delete", 'az_ams_transform_delete_command_result');
    };
    /**
     * List all the transforms of an Azure Media Services account.
     *
     * Syntax:
     * ```
     * az ams transform list --account-name
     *                       --resource-group
     *                       [--filter]
     *                       [--orderby]
     *                       [--query-examples]
     *                       [--subscription]
     * ```
     *
     * @param {string} accountName The name of the Azure Media Services account.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_ams_transform.list = function (accountName, resourceGroup) {
        return new az_ams_transform_list_command_builder("az ams transform list", 'az_ams_transform_list_command_result', accountName, resourceGroup);
    };
    /**
     * Show the details of a transform.
     *
     * Syntax:
     * ```
     * az ams transform show [--account-name]
     *                       [--ids]
     *                       [--name]
     *                       [--query-examples]
     *                       [--resource-group]
     *                       [--subscription]
     * ```
     */
    az_ams_transform.show = function () {
        return new az_ams_transform_show_command_builder("az ams transform show", 'az_ams_transform_show_command_result');
    };
    /**
     * Update the details of a transform.
     *
     * Syntax:
     * ```
     * az ams transform update [--account-name]
     *                         [--add]
     *                         [--description]
     *                         [--force-string]
     *                         [--ids]
     *                         [--name]
     *                         [--remove]
     *                         [--resource-group]
     *                         [--set]
     *                         [--subscription]
     * ```
     */
    az_ams_transform.update = function () {
        return new az_ams_transform_update_command_builder("az ams transform update", 'az_ams_transform_update_command_result');
    };
    return az_ams_transform;
}());
exports.az_ams_transform = az_ams_transform;
/** Manage Azure Media Services resources. */
var az_ams = /** @class */ (function () {
    function az_ams() {
    }
    return az_ams;
}());
exports.az_ams = az_ams;
/**
 * Set the type and number of media reserved units for an Azure Media Services account.
 *
 * Syntax:
 * ```
 * az ams account mru set [--count]
 *                        [--ids]
 *                        [--name]
 *                        [--resource-group]
 *                        [--subscription]
 *                        [--type]
 * ```
 */
var az_ams_account_mru_set_command_builder = /** @class */ (function (_super) {
    __extends(az_ams_account_mru_set_command_builder, _super);
    function az_ams_account_mru_set_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The number of the encoding reserved units that you want to be provisioned for this account for concurrent tasks (one unit equals one task). */
    az_ams_account_mru_set_command_builder.prototype.count = function (value) {
        this.setFlag("--count", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_ams_account_mru_set_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the Azure Media Services account. */
    az_ams_account_mru_set_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_ams_account_mru_set_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_ams_account_mru_set_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Speed of reserved processing units. The cost of media encoding depends on the pricing tier you choose. See <a href="https://azure.microsoft.com/pricing/details/media-services/">https://azure.microsoft.com/pricing/details/media-services/</a> for further details. Allowed values: S1, S2, S3. */
    az_ams_account_mru_set_command_builder.prototype.type = function (value) {
        this.setFlag("--type", value);
        return this;
    };
    return az_ams_account_mru_set_command_builder;
}(base_1.CommandBuilder));
/**
 * Show the details of media reserved units for an Azure Media Services account.
 *
 * Syntax:
 * ```
 * az ams account mru show [--ids]
 *                         [--name]
 *                         [--query-examples]
 *                         [--resource-group]
 *                         [--subscription]
 * ```
 */
var az_ams_account_mru_show_command_builder = /** @class */ (function (_super) {
    __extends(az_ams_account_mru_show_command_builder, _super);
    function az_ams_account_mru_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_ams_account_mru_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the Azure Media Services account. */
    az_ams_account_mru_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_ams_account_mru_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_ams_account_mru_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_ams_account_mru_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_ams_account_mru_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Create or update a service principal and configure its access to an Azure Media Services account.
 *
 * Syntax:
 * ```
 * az ams account sp create --account-name
 *                          --resource-group
 *                          [--name]
 *                          [--new-sp-name]
 *                          [--password]
 *                          [--role]
 *                          [--subscription]
 *                          [--xml]
 *                          [--years]
 * ```
 *
 * @param {string} accountName The name of the Azure Media Services account.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_ams_account_sp_create_command_builder = /** @class */ (function (_super) {
    __extends(az_ams_account_sp_create_command_builder, _super);
    function az_ams_account_sp_create_command_builder(commandPath, resultDataTypeName, accountName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the Azure Media Services account. */
    az_ams_account_sp_create_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_ams_account_sp_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The app name or app URI to associate the RBAC with. If not present, a default name like '{amsaccountname}-access-sp' will be generated. */
    az_ams_account_sp_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The new app name or app URI to update the RBAC with. */
    az_ams_account_sp_create_command_builder.prototype.newSpName = function (value) {
        this.setFlag("--new-sp-name", value);
        return this;
    };
    /** The password used to log in. Also known as 'Client Secret'. If not present, a random secret will be generated. */
    az_ams_account_sp_create_command_builder.prototype.password = function (value) {
        this.setFlag("--password", value);
        return this;
    };
    /** The role of the service principal. */
    az_ams_account_sp_create_command_builder.prototype.role = function (value) {
        this.setFlag("--role", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_ams_account_sp_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Enables xml output format. */
    az_ams_account_sp_create_command_builder.prototype.xml = function (value) {
        this.setFlag("--xml", value);
        return this;
    };
    /** Number of years for which the secret will be valid. Default: 1 year. */
    az_ams_account_sp_create_command_builder.prototype.years = function (value) {
        this.setFlag("--years", value);
        return this;
    };
    return az_ams_account_sp_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Generate a new client secret for a service principal configured for an Azure Media Services account.
 *
 * Syntax:
 * ```
 * az ams account sp reset-credentials [--account-name]
 *                                     [--ids]
 *                                     [--name]
 *                                     [--password]
 *                                     [--resource-group]
 *                                     [--role]
 *                                     [--subscription]
 *                                     [--xml]
 *                                     [--years]
 * ```
 */
var az_ams_account_sp_reset_credentials_command_builder = /** @class */ (function (_super) {
    __extends(az_ams_account_sp_reset_credentials_command_builder, _super);
    function az_ams_account_sp_reset_credentials_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The name of the Azure Media Services account. */
    az_ams_account_sp_reset_credentials_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_ams_account_sp_reset_credentials_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The app name or app URI to associate the RBAC with. If not present, a default name like '{amsaccountname}-access-sp' will be generated. */
    az_ams_account_sp_reset_credentials_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The password used to log in. Also known as 'Client Secret'. If not present, a random secret will be generated. */
    az_ams_account_sp_reset_credentials_command_builder.prototype.password = function (value) {
        this.setFlag("--password", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_ams_account_sp_reset_credentials_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The role of the service principal. */
    az_ams_account_sp_reset_credentials_command_builder.prototype.role = function (value) {
        this.setFlag("--role", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_ams_account_sp_reset_credentials_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Enables xml output format. */
    az_ams_account_sp_reset_credentials_command_builder.prototype.xml = function (value) {
        this.setFlag("--xml", value);
        return this;
    };
    /** Number of years for which the secret will be valid. Default: 1 year. */
    az_ams_account_sp_reset_credentials_command_builder.prototype.years = function (value) {
        this.setFlag("--years", value);
        return this;
    };
    return az_ams_account_sp_reset_credentials_command_builder;
}(base_1.CommandBuilder));
/**
 * Attach a secondary storage to an Azure Media Services account.
 *
 * Syntax:
 * ```
 * az ams account storage add [--account-name]
 *                            [--ids]
 *                            [--name]
 *                            [--resource-group]
 *                            [--subscription]
 * ```
 */
var az_ams_account_storage_add_command_builder = /** @class */ (function (_super) {
    __extends(az_ams_account_storage_add_command_builder, _super);
    function az_ams_account_storage_add_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The name of the Azure Media Services account. */
    az_ams_account_storage_add_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_ams_account_storage_add_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name or resource ID of the secondary storage account to detach from the Azure Media Services account. */
    az_ams_account_storage_add_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_ams_account_storage_add_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_ams_account_storage_add_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_ams_account_storage_add_command_builder;
}(base_1.CommandBuilder));
/**
 * Detach a secondary storage from an Azure Media Services account.
 *
 * Syntax:
 * ```
 * az ams account storage remove [--account-name]
 *                               [--ids]
 *                               [--name]
 *                               [--resource-group]
 *                               [--subscription]
 * ```
 */
var az_ams_account_storage_remove_command_builder = /** @class */ (function (_super) {
    __extends(az_ams_account_storage_remove_command_builder, _super);
    function az_ams_account_storage_remove_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The name of the Azure Media Services account. */
    az_ams_account_storage_remove_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_ams_account_storage_remove_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name or resource ID of the secondary storage account to detach from the Azure Media Services account. */
    az_ams_account_storage_remove_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_ams_account_storage_remove_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_ams_account_storage_remove_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_ams_account_storage_remove_command_builder;
}(base_1.CommandBuilder));
/**
 * Synchronize storage account keys for a storage account associated with an Azure Media Services account.
 *
 * Syntax:
 * ```
 * az ams account storage sync-storage-keys --id
 *                                          [--account-name]
 *                                          [--ids]
 *                                          [--resource-group]
 *                                          [--subscription]
 * ```
 *
 * @param {string} id The ID of the storage account resource.
 */
var az_ams_account_storage_sync_storage_keys_command_builder = /** @class */ (function (_super) {
    __extends(az_ams_account_storage_sync_storage_keys_command_builder, _super);
    function az_ams_account_storage_sync_storage_keys_command_builder(commandPath, resultDataTypeName, id) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.id(id);
        return _this;
    }
    /** The ID of the storage account resource. */
    az_ams_account_storage_sync_storage_keys_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** The name of the Azure Media Services account. */
    az_ams_account_storage_sync_storage_keys_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_ams_account_storage_sync_storage_keys_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_ams_account_storage_sync_storage_keys_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_ams_account_storage_sync_storage_keys_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_ams_account_storage_sync_storage_keys_command_builder;
}(base_1.CommandBuilder));
/**
 * Create an account filter.
 *
 * Syntax:
 * ```
 * az ams account-filter create --account-name
 *                              --name
 *                              --resource-group
 *                              [--bitrate]
 *                              [--end-timestamp]
 *                              [--first-quality]
 *                              [--force-end-timestamp {false, true}]
 *                              [--live-backoff-duration]
 *                              [--presentation-window-duration]
 *                              [--start-timestamp]
 *                              [--subscription]
 *                              [--timescale]
 *                              [--tracks]
 * ```
 *
 * @param {string} accountName The name of the Azure Media Services account.
 * @param {string} name The name of the account filter.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_ams_account_filter_create_command_builder = /** @class */ (function (_super) {
    __extends(az_ams_account_filter_create_command_builder, _super);
    function az_ams_account_filter_create_command_builder(commandPath, resultDataTypeName, accountName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the Azure Media Services account. */
    az_ams_account_filter_create_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** The name of the account filter. */
    az_ams_account_filter_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_ams_account_filter_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The first quality bitrate. */
    az_ams_account_filter_create_command_builder.prototype.bitrate = function (value) {
        this.setFlag("--bitrate", value);
        return this;
    };
    /** Applies to Video on Demand (VoD). For the Live Streaming presentation, it is silently ignored and applied when the presentation ends and the stream becomes VoD. This is a long value that represents an absolute end point of the presentation, rounded to the closest next GOP start. The unit is the timescale, so an endTimestamp of 1800000000 would be for 3 minutes. Use startTimestamp and endTimestamp to trim the fragments that will be in the playlist (manifest). For example, startTimestamp=40000000 and endTimestamp=100000000 using the default timescale will generate a playlist that contains fragments from between 4 seconds and 10 seconds of the VoD presentation. If a fragment straddles the boundary, the entire fragment will be included in the manifest. */
    az_ams_account_filter_create_command_builder.prototype.endTimestamp = function (value) {
        this.setFlag("--end-timestamp", value);
        return this;
    };
    /** The first quality (lowest) bitrate to include in the manifest. */
    az_ams_account_filter_create_command_builder.prototype.firstQuality = function (value) {
        this.setFlag("--first-quality", value);
        return this;
    };
    /** Applies to Live Streaming only. Indicates whether the endTimestamp property must be present. If true, endTimestamp must be specified or a bad request code is returned. Allowed values: false, true. */
    az_ams_account_filter_create_command_builder.prototype.forceEndTimestamp = function (value) {
        this.setFlag("--force-end-timestamp", value.toString());
        return this;
    };
    /** Applies to Live Streaming only. This value defines the latest live position that a client can seek to. Using this property, you can delay live playback position and create a server-side buffer for players. The unit for this property is timescale (see below). The maximum live back off duration is 300 seconds (3000000000). For example, a value of 2000000000 means that the latest available content is 20 seconds delayed from the real live edge. */
    az_ams_account_filter_create_command_builder.prototype.liveBackoffDuration = function (value) {
        this.setFlag("--live-backoff-duration", value);
        return this;
    };
    /** Applies to Live Streaming only. Use presentationWindowDuration to apply a sliding window of fragments to include in a playlist. The unit for this property is timescale (see below). For example, set presentationWindowDuration=1200000000 to apply a two-minute sliding window. Media within 2 minutes of the live edge will be included in the playlist. If a fragment straddles the boundary, the entire fragment will be included in the playlist. The minimum presentation window duration is 60 seconds. */
    az_ams_account_filter_create_command_builder.prototype.presentationWindowDuration = function (value) {
        this.setFlag("--presentation-window-duration", value);
        return this;
    };
    /** Applies to Video on Demand (VoD) or Live Streaming. This is a long value that represents an absolute start point of the stream. The value gets rounded to the closest next GOP start. The unit is the timescale, so a startTimestamp of 150000000 would be for 15 seconds. Use startTimestamp and endTimestampp to trim the fragments that will be in the playlist (manifest). For example, startTimestamp=40000000 and endTimestamp=100000000 using the default timescale will generate a playlist that contains fragments from between 4 seconds and 10 seconds of the VoD presentation. If a fragment straddles the boundary, the entire fragment will be included in the manifest. */
    az_ams_account_filter_create_command_builder.prototype.startTimestamp = function (value) {
        this.setFlag("--start-timestamp", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_ams_account_filter_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Applies to all timestamps and durations in a Presentation Time Range, specified as the number of increments in one second. Default is 10000000 - ten million increments in one second, where each increment would be 100 nanoseconds long. For example, if you want to set a startTimestamp at 30 seconds, you would use a value of 300000000 when using the default timescale. */
    az_ams_account_filter_create_command_builder.prototype.timescale = function (value) {
        this.setFlag("--timescale", value);
        return this;
    };
    /** The JSON representing the track selections. Use @{file} to load from a file. For further information about the JSON structure please refer to swagger documentation on <a href="https://docs.microsoft.com/rest/api/media/accountfilters/createorupdate#filtertrackselection">https://docs.microsoft.com/rest/api/media/accountfilters/createorupdate#filtertrackselection</a>. */
    az_ams_account_filter_create_command_builder.prototype.tracks = function (value) {
        this.setFlag("--tracks", value);
        return this;
    };
    return az_ams_account_filter_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete an account filter.
 *
 * Syntax:
 * ```
 * az ams account-filter delete [--account-name]
 *                              [--ids]
 *                              [--name]
 *                              [--resource-group]
 *                              [--subscription]
 * ```
 */
var az_ams_account_filter_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_ams_account_filter_delete_command_builder, _super);
    function az_ams_account_filter_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The name of the Azure Media Services account. */
    az_ams_account_filter_delete_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_ams_account_filter_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the account filter. */
    az_ams_account_filter_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_ams_account_filter_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_ams_account_filter_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_ams_account_filter_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List all the account filters of an Azure Media Services account.
 *
 * Syntax:
 * ```
 * az ams account-filter list --account-name
 *                            --resource-group
 *                            [--query-examples]
 *                            [--subscription]
 * ```
 *
 * @param {string} accountName The name of the Azure Media Services account.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_ams_account_filter_list_command_builder = /** @class */ (function (_super) {
    __extends(az_ams_account_filter_list_command_builder, _super);
    function az_ams_account_filter_list_command_builder(commandPath, resultDataTypeName, accountName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the Azure Media Services account. */
    az_ams_account_filter_list_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_ams_account_filter_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_ams_account_filter_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_ams_account_filter_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_ams_account_filter_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Show the details of an account filter.
 *
 * Syntax:
 * ```
 * az ams account-filter show [--account-name]
 *                            [--ids]
 *                            [--name]
 *                            [--query-examples]
 *                            [--resource-group]
 *                            [--subscription]
 * ```
 */
var az_ams_account_filter_show_command_builder = /** @class */ (function (_super) {
    __extends(az_ams_account_filter_show_command_builder, _super);
    function az_ams_account_filter_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The name of the Azure Media Services account. */
    az_ams_account_filter_show_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_ams_account_filter_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the account filter. */
    az_ams_account_filter_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_ams_account_filter_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_ams_account_filter_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_ams_account_filter_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_ams_account_filter_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update the details of an account filter.
 *
 * Syntax:
 * ```
 * az ams account-filter update [--account-name]
 *                              [--add]
 *                              [--bitrate]
 *                              [--end-timestamp]
 *                              [--first-quality]
 *                              [--force-end-timestamp {false, true}]
 *                              [--force-string]
 *                              [--ids]
 *                              [--live-backoff-duration]
 *                              [--name]
 *                              [--presentation-window-duration]
 *                              [--remove]
 *                              [--resource-group]
 *                              [--set]
 *                              [--start-timestamp]
 *                              [--subscription]
 *                              [--timescale]
 *                              [--tracks]
 * ```
 */
var az_ams_account_filter_update_command_builder = /** @class */ (function (_super) {
    __extends(az_ams_account_filter_update_command_builder, _super);
    function az_ams_account_filter_update_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The name of the Azure Media Services account. */
    az_ams_account_filter_update_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_ams_account_filter_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** The first quality bitrate. */
    az_ams_account_filter_update_command_builder.prototype.bitrate = function (value) {
        this.setFlag("--bitrate", value);
        return this;
    };
    /** Applies to Video on Demand (VoD). For the Live Streaming presentation, it is silently ignored and applied when the presentation ends and the stream becomes VoD. This is a long value that represents an absolute end point of the presentation, rounded to the closest next GOP start. The unit is the timescale, so an endTimestamp of 1800000000 would be for 3 minutes. Use startTimestamp and endTimestamp to trim the fragments that will be in the playlist (manifest). For example, startTimestamp=40000000 and endTimestamp=100000000 using the default timescale will generate a playlist that contains fragments from between 4 seconds and 10 seconds of the VoD presentation. If a fragment straddles the boundary, the entire fragment will be included in the manifest. */
    az_ams_account_filter_update_command_builder.prototype.endTimestamp = function (value) {
        this.setFlag("--end-timestamp", value);
        return this;
    };
    /** The first quality (lowest) bitrate to include in the manifest. */
    az_ams_account_filter_update_command_builder.prototype.firstQuality = function (value) {
        this.setFlag("--first-quality", value);
        return this;
    };
    /** Applies to Live Streaming only. Indicates whether the endTimestamp property must be present. If true, endTimestamp must be specified or a bad request code is returned. Allowed values: false, true. */
    az_ams_account_filter_update_command_builder.prototype.forceEndTimestamp = function (value) {
        this.setFlag("--force-end-timestamp", value.toString());
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_ams_account_filter_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_ams_account_filter_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Applies to Live Streaming only. This value defines the latest live position that a client can seek to. Using this property, you can delay live playback position and create a server-side buffer for players. The unit for this property is timescale (see below). The maximum live back off duration is 300 seconds (3000000000). For example, a value of 2000000000 means that the latest available content is 20 seconds delayed from the real live edge. */
    az_ams_account_filter_update_command_builder.prototype.liveBackoffDuration = function (value) {
        this.setFlag("--live-backoff-duration", value);
        return this;
    };
    /** The name of the account filter. */
    az_ams_account_filter_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Applies to Live Streaming only. Use presentationWindowDuration to apply a sliding window of fragments to include in a playlist. The unit for this property is timescale (see below). For example, set presentationWindowDuration=1200000000 to apply a two-minute sliding window. Media within 2 minutes of the live edge will be included in the playlist. If a fragment straddles the boundary, the entire fragment will be included in the playlist. The minimum presentation window duration is 60 seconds. */
    az_ams_account_filter_update_command_builder.prototype.presentationWindowDuration = function (value) {
        this.setFlag("--presentation-window-duration", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_ams_account_filter_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_ams_account_filter_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_ams_account_filter_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Applies to Video on Demand (VoD) or Live Streaming. This is a long value that represents an absolute start point of the stream. The value gets rounded to the closest next GOP start. The unit is the timescale, so a startTimestamp of 150000000 would be for 15 seconds. Use startTimestamp and endTimestampp to trim the fragments that will be in the playlist (manifest). For example, startTimestamp=40000000 and endTimestamp=100000000 using the default timescale will generate a playlist that contains fragments from between 4 seconds and 10 seconds of the VoD presentation. If a fragment straddles the boundary, the entire fragment will be included in the manifest. */
    az_ams_account_filter_update_command_builder.prototype.startTimestamp = function (value) {
        this.setFlag("--start-timestamp", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_ams_account_filter_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Applies to all timestamps and durations in a Presentation Time Range, specified as the number of increments in one second. Default is 10000000 - ten million increments in one second, where each increment would be 100 nanoseconds long. For example, if you want to set a startTimestamp at 30 seconds, you would use a value of 300000000 when using the default timescale. */
    az_ams_account_filter_update_command_builder.prototype.timescale = function (value) {
        this.setFlag("--timescale", value);
        return this;
    };
    /** The JSON representing the track selections. Use @{file} to load from a file. For further information about the JSON structure please refer to swagger documentation on <a href="https://docs.microsoft.com/rest/api/media/accountfilters/createorupdate#filtertrackselection">https://docs.microsoft.com/rest/api/media/accountfilters/createorupdate#filtertrackselection</a>. */
    az_ams_account_filter_update_command_builder.prototype.tracks = function (value) {
        this.setFlag("--tracks", value);
        return this;
    };
    return az_ams_account_filter_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Checks whether the Media Service resource name is available.
 *
 * Syntax:
 * ```
 * az ams account check-name --location
 *                           --name
 *                           [--subscription]
 * ```
 *
 * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
 * @param {string} name The name of the Azure Media Services account.
 */
var az_ams_account_check_name_command_builder = /** @class */ (function (_super) {
    __extends(az_ams_account_check_name_command_builder, _super);
    function az_ams_account_check_name_command_builder(commandPath, resultDataTypeName, location, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.location(location);
        _this.name(name);
        return _this;
    }
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_ams_account_check_name_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** The name of the Azure Media Services account. */
    az_ams_account_check_name_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_ams_account_check_name_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_ams_account_check_name_command_builder;
}(base_1.CommandBuilder));
/**
 * Create an Azure Media Services account.
 *
 * Syntax:
 * ```
 * az ams account create --name
 *                       --resource-group
 *                       --storage-account
 *                       [--location]
 *                       [--subscription]
 *                       [--tags]
 * ```
 *
 * @param {string} name The name of the Azure Media Services account.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} storageAccount The name or resource ID of the primary storage account to attach to the Azure Media Services account. The storage account MUST be in the same Azure subscription as the Media Services account. It is strongly recommended that the storage account be in the same resource group as the Media Services account. Blob only accounts are not allowed as primary.
 */
var az_ams_account_create_command_builder = /** @class */ (function (_super) {
    __extends(az_ams_account_create_command_builder, _super);
    function az_ams_account_create_command_builder(commandPath, resultDataTypeName, name, resourceGroup, storageAccount) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.storageAccount(storageAccount);
        return _this;
    }
    /** The name of the Azure Media Services account. */
    az_ams_account_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_ams_account_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name or resource ID of the primary storage account to attach to the Azure Media Services account. The storage account MUST be in the same Azure subscription as the Media Services account. It is strongly recommended that the storage account be in the same resource group as the Media Services account. Blob only accounts are not allowed as primary. */
    az_ams_account_create_command_builder.prototype.storageAccount = function (value) {
        this.setFlag("--storage-account", value);
        return this;
    };
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_ams_account_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_ams_account_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_ams_account_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_ams_account_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete an Azure Media Services account.
 *
 * Syntax:
 * ```
 * az ams account delete [--ids]
 *                       [--name]
 *                       [--resource-group]
 *                       [--subscription]
 * ```
 */
var az_ams_account_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_ams_account_delete_command_builder, _super);
    function az_ams_account_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_ams_account_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the Azure Media Services account. */
    az_ams_account_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_ams_account_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_ams_account_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_ams_account_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List Azure Media Services accounts for the entire subscription.
 *
 * Syntax:
 * ```
 * az ams account list [--query-examples]
 *                     [--resource-group]
 *                     [--subscription]
 * ```
 */
var az_ams_account_list_command_builder = /** @class */ (function (_super) {
    __extends(az_ams_account_list_command_builder, _super);
    function az_ams_account_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_ams_account_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_ams_account_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_ams_account_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_ams_account_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Show the details of an Azure Media Services account.
 *
 * Syntax:
 * ```
 * az ams account show [--ids]
 *                     [--name]
 *                     [--query-examples]
 *                     [--resource-group]
 *                     [--subscription]
 * ```
 */
var az_ams_account_show_command_builder = /** @class */ (function (_super) {
    __extends(az_ams_account_show_command_builder, _super);
    function az_ams_account_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_ams_account_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the Azure Media Services account. */
    az_ams_account_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_ams_account_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_ams_account_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_ams_account_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_ams_account_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update the details of an Azure Media Services account.
 *
 * Syntax:
 * ```
 * az ams account update [--add]
 *                       [--force-string]
 *                       [--ids]
 *                       [--name]
 *                       [--remove]
 *                       [--resource-group]
 *                       [--set]
 *                       [--subscription]
 *                       [--tags]
 * ```
 */
var az_ams_account_update_command_builder = /** @class */ (function (_super) {
    __extends(az_ams_account_update_command_builder, _super);
    function az_ams_account_update_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_ams_account_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_ams_account_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_ams_account_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the Azure Media Services account. */
    az_ams_account_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_ams_account_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_ams_account_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_ams_account_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_ams_account_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_ams_account_update_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_ams_account_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Create an asset filter.
 *
 * Syntax:
 * ```
 * az ams asset-filter create --account-name
 *                            --asset-name
 *                            --name
 *                            --resource-group
 *                            [--bitrate]
 *                            [--end-timestamp]
 *                            [--first-quality]
 *                            [--force-end-timestamp {false, true}]
 *                            [--live-backoff-duration]
 *                            [--presentation-window-duration]
 *                            [--start-timestamp]
 *                            [--subscription]
 *                            [--timescale]
 *                            [--tracks]
 * ```
 *
 * @param {string} accountName The name of the Azure Media Services account.
 * @param {string} assetName The name of the asset.
 * @param {string} name The name of the asset filter.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_ams_asset_filter_create_command_builder = /** @class */ (function (_super) {
    __extends(az_ams_asset_filter_create_command_builder, _super);
    function az_ams_asset_filter_create_command_builder(commandPath, resultDataTypeName, accountName, assetName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.assetName(assetName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the Azure Media Services account. */
    az_ams_asset_filter_create_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** The name of the asset. */
    az_ams_asset_filter_create_command_builder.prototype.assetName = function (value) {
        this.setFlag("--asset-name", value);
        return this;
    };
    /** The name of the asset filter. */
    az_ams_asset_filter_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_ams_asset_filter_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The first quality bitrate. */
    az_ams_asset_filter_create_command_builder.prototype.bitrate = function (value) {
        this.setFlag("--bitrate", value);
        return this;
    };
    /** Applies to Video on Demand (VoD).For the Live Streaming presentation, it is silently ignored and applied when the presentation ends and the stream becomes VoD.This is a long value that represents an absolute end point of the presentation, rounded to the closest next GOP start. The unit is the timescale, so an endTimestamp of 1800000000 would be for 3 minutes.Use startTimestamp and endTimestamp to trim the fragments that will be in the playlist (manifest).For example, startTimestamp=40000000 and endTimestamp=100000000 using the default timescale will generate a playlist that contains fragments from between 4 seconds and 10 seconds of the VoD presentation. If a fragment straddles the boundary, the entire fragment will be included in the manifest. */
    az_ams_asset_filter_create_command_builder.prototype.endTimestamp = function (value) {
        this.setFlag("--end-timestamp", value);
        return this;
    };
    /** The first quality (lowest) bitrate to include in the manifest. */
    az_ams_asset_filter_create_command_builder.prototype.firstQuality = function (value) {
        this.setFlag("--first-quality", value);
        return this;
    };
    /** Applies to Live Streaming only. Indicates whether the endTimestamp property must be present. If true, endTimestamp must be specified or a bad request code is returned. Allowed values: false, true. */
    az_ams_asset_filter_create_command_builder.prototype.forceEndTimestamp = function (value) {
        this.setFlag("--force-end-timestamp", value.toString());
        return this;
    };
    /** Applies to Live Streaming only. This value defines the latest live position that a client can seek to. Using this property, you can delay live playback position and create a server-side buffer for players. The unit for this property is timescale (see below). The maximum live back off duration is 300 seconds (3000000000). For example, a value of 2000000000 means that the latest available content is 20 seconds delayed from the real live edge. */
    az_ams_asset_filter_create_command_builder.prototype.liveBackoffDuration = function (value) {
        this.setFlag("--live-backoff-duration", value);
        return this;
    };
    /** Applies to Live Streaming only.Use presentationWindowDuration to apply a sliding window of fragments to include in a playlist.The unit for this property is timescale (see below).For example, set presentationWindowDuration=1200000000 to apply a two-minute sliding window. Media within 2 minutes of the live edge will be included in the playlist. If a fragment straddles the boundary, the entire fragment will be included in the playlist. The minimum presentation window duration is 60 seconds. */
    az_ams_asset_filter_create_command_builder.prototype.presentationWindowDuration = function (value) {
        this.setFlag("--presentation-window-duration", value);
        return this;
    };
    /** Applies to Video on Demand (VoD) or Live Streaming. This is a long value that represents an absolute start point of the stream. The value gets rounded to the closest next GOP start. The unit is the timescale, so a startTimestamp of 150000000 would be for 15 seconds. Use startTimestamp and endTimestampp to trim the fragments that will be in the playlist (manifest). For example, startTimestamp=40000000 and endTimestamp=100000000 using the default timescale will generate a playlist that contains fragments from between 4 seconds and 10 seconds of the VoD presentation. If a fragment straddles the boundary, the entire fragment will be included in the manifest. */
    az_ams_asset_filter_create_command_builder.prototype.startTimestamp = function (value) {
        this.setFlag("--start-timestamp", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_ams_asset_filter_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Applies to all timestamps and durations in a Presentation Time Range, specified as the number of increments in one second.Default is 10000000 - ten million increments in one second, where each increment would be 100 nanoseconds long. For example, if you want to set a startTimestamp at 30 seconds, you would use a value of 300000000 when using the default timescale. */
    az_ams_asset_filter_create_command_builder.prototype.timescale = function (value) {
        this.setFlag("--timescale", value);
        return this;
    };
    /** The JSON representing the track selections. Use @{file} to load from a file. For further information about the JSON structure please refer to swagger documentation on <a href="https://docs.microsoft.com/rest/api/media/assetfilters/createorupdate#filtertrackselection">https://docs.microsoft.com/rest/api/media/assetfilters/createorupdate#filtertrackselection</a>. */
    az_ams_asset_filter_create_command_builder.prototype.tracks = function (value) {
        this.setFlag("--tracks", value);
        return this;
    };
    return az_ams_asset_filter_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete an asset filter.
 *
 * Syntax:
 * ```
 * az ams asset-filter delete [--account-name]
 *                            [--asset-name]
 *                            [--ids]
 *                            [--name]
 *                            [--resource-group]
 *                            [--subscription]
 * ```
 */
var az_ams_asset_filter_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_ams_asset_filter_delete_command_builder, _super);
    function az_ams_asset_filter_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The name of the Azure Media Services account. */
    az_ams_asset_filter_delete_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** The name of the asset. */
    az_ams_asset_filter_delete_command_builder.prototype.assetName = function (value) {
        this.setFlag("--asset-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_ams_asset_filter_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the asset filter. */
    az_ams_asset_filter_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_ams_asset_filter_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_ams_asset_filter_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_ams_asset_filter_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List all the asset filters of an Azure Media Services account.
 *
 * Syntax:
 * ```
 * az ams asset-filter list --account-name
 *                          --asset-name
 *                          --resource-group
 *                          [--query-examples]
 *                          [--subscription]
 * ```
 *
 * @param {string} accountName The name of the Azure Media Services account.
 * @param {string} assetName The name of the asset.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_ams_asset_filter_list_command_builder = /** @class */ (function (_super) {
    __extends(az_ams_asset_filter_list_command_builder, _super);
    function az_ams_asset_filter_list_command_builder(commandPath, resultDataTypeName, accountName, assetName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.assetName(assetName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the Azure Media Services account. */
    az_ams_asset_filter_list_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** The name of the asset. */
    az_ams_asset_filter_list_command_builder.prototype.assetName = function (value) {
        this.setFlag("--asset-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_ams_asset_filter_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_ams_asset_filter_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_ams_asset_filter_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_ams_asset_filter_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Show the details of an asset filter.
 *
 * Syntax:
 * ```
 * az ams asset-filter show [--account-name]
 *                          [--asset-name]
 *                          [--ids]
 *                          [--name]
 *                          [--query-examples]
 *                          [--resource-group]
 *                          [--subscription]
 * ```
 */
var az_ams_asset_filter_show_command_builder = /** @class */ (function (_super) {
    __extends(az_ams_asset_filter_show_command_builder, _super);
    function az_ams_asset_filter_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The name of the Azure Media Services account. */
    az_ams_asset_filter_show_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** The name of the asset. */
    az_ams_asset_filter_show_command_builder.prototype.assetName = function (value) {
        this.setFlag("--asset-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_ams_asset_filter_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the asset filter. */
    az_ams_asset_filter_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_ams_asset_filter_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_ams_asset_filter_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_ams_asset_filter_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_ams_asset_filter_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update the details of an asset filter.
 *
 * Syntax:
 * ```
 * az ams asset-filter update [--account-name]
 *                            [--add]
 *                            [--asset-name]
 *                            [--bitrate]
 *                            [--end-timestamp]
 *                            [--first-quality]
 *                            [--force-end-timestamp {false, true}]
 *                            [--force-string]
 *                            [--ids]
 *                            [--live-backoff-duration]
 *                            [--name]
 *                            [--presentation-window-duration]
 *                            [--remove]
 *                            [--resource-group]
 *                            [--set]
 *                            [--start-timestamp]
 *                            [--subscription]
 *                            [--timescale]
 *                            [--tracks]
 * ```
 */
var az_ams_asset_filter_update_command_builder = /** @class */ (function (_super) {
    __extends(az_ams_asset_filter_update_command_builder, _super);
    function az_ams_asset_filter_update_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The name of the Azure Media Services account. */
    az_ams_asset_filter_update_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_ams_asset_filter_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** The name of the asset. */
    az_ams_asset_filter_update_command_builder.prototype.assetName = function (value) {
        this.setFlag("--asset-name", value);
        return this;
    };
    /** The first quality bitrate. */
    az_ams_asset_filter_update_command_builder.prototype.bitrate = function (value) {
        this.setFlag("--bitrate", value);
        return this;
    };
    /** Applies to Video on Demand (VoD).For the Live Streaming presentation, it is silently ignored and applied when the presentation ends and the stream becomes VoD.This is a long value that represents an absolute end point of the presentation, rounded to the closest next GOP start. The unit is the timescale, so an endTimestamp of 1800000000 would be for 3 minutes.Use startTimestamp and endTimestamp to trim the fragments that will be in the playlist (manifest).For example, startTimestamp=40000000 and endTimestamp=100000000 using the default timescale will generate a playlist that contains fragments from between 4 seconds and 10 seconds of the VoD presentation. If a fragment straddles the boundary, the entire fragment will be included in the manifest. */
    az_ams_asset_filter_update_command_builder.prototype.endTimestamp = function (value) {
        this.setFlag("--end-timestamp", value);
        return this;
    };
    /** The first quality (lowest) bitrate to include in the manifest. */
    az_ams_asset_filter_update_command_builder.prototype.firstQuality = function (value) {
        this.setFlag("--first-quality", value);
        return this;
    };
    /** Applies to Live Streaming only. Indicates whether the endTimestamp property must be present. If true, endTimestamp must be specified or a bad request code is returned. Allowed values: false, true. */
    az_ams_asset_filter_update_command_builder.prototype.forceEndTimestamp = function (value) {
        this.setFlag("--force-end-timestamp", value.toString());
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_ams_asset_filter_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_ams_asset_filter_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Applies to Live Streaming only. This value defines the latest live position that a client can seek to. Using this property, you can delay live playback position and create a server-side buffer for players. The unit for this property is timescale (see below). The maximum live back off duration is 300 seconds (3000000000). For example, a value of 2000000000 means that the latest available content is 20 seconds delayed from the real live edge. */
    az_ams_asset_filter_update_command_builder.prototype.liveBackoffDuration = function (value) {
        this.setFlag("--live-backoff-duration", value);
        return this;
    };
    /** The name of the asset filter. */
    az_ams_asset_filter_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Applies to Live Streaming only.Use presentationWindowDuration to apply a sliding window of fragments to include in a playlist.The unit for this property is timescale (see below).For example, set presentationWindowDuration=1200000000 to apply a two-minute sliding window. Media within 2 minutes of the live edge will be included in the playlist. If a fragment straddles the boundary, the entire fragment will be included in the playlist. The minimum presentation window duration is 60 seconds. */
    az_ams_asset_filter_update_command_builder.prototype.presentationWindowDuration = function (value) {
        this.setFlag("--presentation-window-duration", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_ams_asset_filter_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_ams_asset_filter_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_ams_asset_filter_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Applies to Video on Demand (VoD) or Live Streaming. This is a long value that represents an absolute start point of the stream. The value gets rounded to the closest next GOP start. The unit is the timescale, so a startTimestamp of 150000000 would be for 15 seconds. Use startTimestamp and endTimestampp to trim the fragments that will be in the playlist (manifest). For example, startTimestamp=40000000 and endTimestamp=100000000 using the default timescale will generate a playlist that contains fragments from between 4 seconds and 10 seconds of the VoD presentation. If a fragment straddles the boundary, the entire fragment will be included in the manifest. */
    az_ams_asset_filter_update_command_builder.prototype.startTimestamp = function (value) {
        this.setFlag("--start-timestamp", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_ams_asset_filter_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Applies to all timestamps and durations in a Presentation Time Range, specified as the number of increments in one second.Default is 10000000 - ten million increments in one second, where each increment would be 100 nanoseconds long. For example, if you want to set a startTimestamp at 30 seconds, you would use a value of 300000000 when using the default timescale. */
    az_ams_asset_filter_update_command_builder.prototype.timescale = function (value) {
        this.setFlag("--timescale", value);
        return this;
    };
    /** The JSON representing the track selections. Use @{file} to load from a file. For further information about the JSON structure please refer to swagger documentation on <a href="https://docs.microsoft.com/rest/api/media/assetfilters/createorupdate#filtertrackselection">https://docs.microsoft.com/rest/api/media/assetfilters/createorupdate#filtertrackselection</a>. */
    az_ams_asset_filter_update_command_builder.prototype.tracks = function (value) {
        this.setFlag("--tracks", value);
        return this;
    };
    return az_ams_asset_filter_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Create an asset.
 *
 * Syntax:
 * ```
 * az ams asset create --account-name
 *                     --name
 *                     --resource-group
 *                     [--alternate-id]
 *                     [--container]
 *                     [--description]
 *                     [--storage-account]
 *                     [--subscription]
 * ```
 *
 * @param {string} accountName The name of the Azure Media Services account.
 * @param {string} name The name of the asset.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_ams_asset_create_command_builder = /** @class */ (function (_super) {
    __extends(az_ams_asset_create_command_builder, _super);
    function az_ams_asset_create_command_builder(commandPath, resultDataTypeName, accountName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the Azure Media Services account. */
    az_ams_asset_create_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** The name of the asset. */
    az_ams_asset_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_ams_asset_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The alternate id of the asset. */
    az_ams_asset_create_command_builder.prototype.alternateId = function (value) {
        this.setFlag("--alternate-id", value);
        return this;
    };
    /** The name of the asset blob container. */
    az_ams_asset_create_command_builder.prototype.container = function (value) {
        this.setFlag("--container", value);
        return this;
    };
    /** The asset description. */
    az_ams_asset_create_command_builder.prototype.description = function (value) {
        this.setFlag("--description", value);
        return this;
    };
    /** The name of the storage account. */
    az_ams_asset_create_command_builder.prototype.storageAccount = function (value) {
        this.setFlag("--storage-account", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_ams_asset_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_ams_asset_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete an asset.
 *
 * Syntax:
 * ```
 * az ams asset delete [--account-name]
 *                     [--ids]
 *                     [--name]
 *                     [--resource-group]
 *                     [--subscription]
 * ```
 */
var az_ams_asset_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_ams_asset_delete_command_builder, _super);
    function az_ams_asset_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The name of the Azure Media Services account. */
    az_ams_asset_delete_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_ams_asset_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the asset. */
    az_ams_asset_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_ams_asset_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_ams_asset_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_ams_asset_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * Get the asset storage encryption keys used to decrypt content created by version 2 of the Media Services API.
 *
 * Syntax:
 * ```
 * az ams asset get-encryption-key [--account-name]
 *                                 [--ids]
 *                                 [--name]
 *                                 [--resource-group]
 *                                 [--subscription]
 * ```
 */
var az_ams_asset_get_encryption_key_command_builder = /** @class */ (function (_super) {
    __extends(az_ams_asset_get_encryption_key_command_builder, _super);
    function az_ams_asset_get_encryption_key_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The name of the Azure Media Services account. */
    az_ams_asset_get_encryption_key_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_ams_asset_get_encryption_key_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the asset. */
    az_ams_asset_get_encryption_key_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_ams_asset_get_encryption_key_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_ams_asset_get_encryption_key_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_ams_asset_get_encryption_key_command_builder;
}(base_1.CommandBuilder));
/**
 * Lists storage container URLs with shared access signatures (SAS) for uploading and downloading Asset content. The signatures are derived from the storage account keys.
 *
 * Syntax:
 * ```
 * az ams asset get-sas-urls [--account-name]
 *                           [--expiry]
 *                           [--ids]
 *                           [--name]
 *                           [--permissions {Read, ReadWrite, ReadWriteDelete}]
 *                           [--resource-group]
 *                           [--subscription]
 * ```
 */
var az_ams_asset_get_sas_urls_command_builder = /** @class */ (function (_super) {
    __extends(az_ams_asset_get_sas_urls_command_builder, _super);
    function az_ams_asset_get_sas_urls_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The name of the Azure Media Services account. */
    az_ams_asset_get_sas_urls_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Specifies the UTC datetime (Y-m-d'T'H:M:S'Z') at which the SAS becomes invalid. This must be less than 24 hours from the current time. */
    az_ams_asset_get_sas_urls_command_builder.prototype.expiry = function (value) {
        this.setFlag("--expiry", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_ams_asset_get_sas_urls_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the asset. */
    az_ams_asset_get_sas_urls_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The permissions to set on the SAS URL. */
    az_ams_asset_get_sas_urls_command_builder.prototype.permissions = function (value) {
        this.setFlag("--permissions", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_ams_asset_get_sas_urls_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_ams_asset_get_sas_urls_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_ams_asset_get_sas_urls_command_builder;
}(base_1.CommandBuilder));
/**
 * List all the assets of an Azure Media Services account.
 *
 * Syntax:
 * ```
 * az ams asset list --account-name
 *                   --resource-group
 *                   [--filter]
 *                   [--orderby]
 *                   [--query-examples]
 *                   [--subscription]
 *                   [--top]
 * ```
 *
 * @param {string} accountName The name of the Azure Media Services account.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_ams_asset_list_command_builder = /** @class */ (function (_super) {
    __extends(az_ams_asset_list_command_builder, _super);
    function az_ams_asset_list_command_builder(commandPath, resultDataTypeName, accountName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the Azure Media Services account. */
    az_ams_asset_list_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_ams_asset_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Restricts the set of items returned. */
    az_ams_asset_list_command_builder.prototype.filter = function (value) {
        this.setFlag("--filter", value);
        return this;
    };
    /** Specifies the key by which the result collection should be ordered. */
    az_ams_asset_list_command_builder.prototype.orderby = function (value) {
        this.setFlag("--orderby", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_ams_asset_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_ams_asset_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Specifies a non-negative integer n that limits the number of items returned from a collection. The service returns the number of available items up to but not greater than the specified value n. */
    az_ams_asset_list_command_builder.prototype.top = function (value) {
        this.setFlag("--top", value);
        return this;
    };
    return az_ams_asset_list_command_builder;
}(base_1.CommandBuilder));
/**
 * List streaming locators which are associated with this asset.
 *
 * Syntax:
 * ```
 * az ams asset list-streaming-locators [--account-name]
 *                                      [--ids]
 *                                      [--name]
 *                                      [--resource-group]
 *                                      [--subscription]
 * ```
 */
var az_ams_asset_list_streaming_locators_command_builder = /** @class */ (function (_super) {
    __extends(az_ams_asset_list_streaming_locators_command_builder, _super);
    function az_ams_asset_list_streaming_locators_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The name of the Azure Media Services account. */
    az_ams_asset_list_streaming_locators_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_ams_asset_list_streaming_locators_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the asset. */
    az_ams_asset_list_streaming_locators_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_ams_asset_list_streaming_locators_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_ams_asset_list_streaming_locators_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_ams_asset_list_streaming_locators_command_builder;
}(base_1.CommandBuilder));
/**
 * Show the details of an asset.
 *
 * Syntax:
 * ```
 * az ams asset show [--account-name]
 *                   [--ids]
 *                   [--name]
 *                   [--query-examples]
 *                   [--resource-group]
 *                   [--subscription]
 * ```
 */
var az_ams_asset_show_command_builder = /** @class */ (function (_super) {
    __extends(az_ams_asset_show_command_builder, _super);
    function az_ams_asset_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The name of the Azure Media Services account. */
    az_ams_asset_show_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_ams_asset_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the asset. */
    az_ams_asset_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_ams_asset_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_ams_asset_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_ams_asset_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_ams_asset_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update the details of an asset.
 *
 * Syntax:
 * ```
 * az ams asset update [--account-name]
 *                     [--add]
 *                     [--alternate-id]
 *                     [--description]
 *                     [--force-string]
 *                     [--ids]
 *                     [--name]
 *                     [--remove]
 *                     [--resource-group]
 *                     [--set]
 *                     [--subscription]
 * ```
 */
var az_ams_asset_update_command_builder = /** @class */ (function (_super) {
    __extends(az_ams_asset_update_command_builder, _super);
    function az_ams_asset_update_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The name of the Azure Media Services account. */
    az_ams_asset_update_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_ams_asset_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** The alternate id of the asset. */
    az_ams_asset_update_command_builder.prototype.alternateId = function (value) {
        this.setFlag("--alternate-id", value);
        return this;
    };
    /** The asset description. */
    az_ams_asset_update_command_builder.prototype.description = function (value) {
        this.setFlag("--description", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_ams_asset_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_ams_asset_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the asset. */
    az_ams_asset_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_ams_asset_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_ams_asset_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_ams_asset_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_ams_asset_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_ams_asset_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Add a new option to an existing content key policy.
 *
 * Syntax:
 * ```
 * az ams content-key-policy option add --policy-option-name
 *                                      [--account-name]
 *                                      [--alt-rsa-token-keys]
 *                                      [--alt-symmetric-token-keys]
 *                                      [--alt-x509-token-keys]
 *                                      [--ask]
 *                                      [--audience]
 *                                      [--clear-key-configuration]
 *                                      [--fair-play-pfx]
 *                                      [--fair-play-pfx-password]
 *                                      [--fp-playback-duration-seconds]
 *                                      [--fp-storage-duration-seconds]
 *                                      [--ids]
 *                                      [--issuer]
 *                                      [--name]
 *                                      [--open-id-connect-discovery-document]
 *                                      [--open-restriction]
 *                                      [--play-ready-template]
 *                                      [--rental-and-lease-key-type]
 *                                      [--rental-duration]
 *                                      [--resource-group]
 *                                      [--subscription]
 *                                      [--token-claims]
 *                                      [--token-key]
 *                                      [--token-key-type]
 *                                      [--token-type]
 *                                      [--widevine-template]
 * ```
 *
 * @param {string} policyOptionName The content key policy option name.
 */
var az_ams_content_key_policy_option_add_command_builder = /** @class */ (function (_super) {
    __extends(az_ams_content_key_policy_option_add_command_builder, _super);
    function az_ams_content_key_policy_option_add_command_builder(commandPath, resultDataTypeName, policyOptionName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.policyOptionName(policyOptionName);
        return _this;
    }
    /** The content key policy option name. */
    az_ams_content_key_policy_option_add_command_builder.prototype.policyOptionName = function (value) {
        this.setFlag("--policy-option-name", value);
        return this;
    };
    /** The name of the Azure Media Services account. */
    az_ams_content_key_policy_option_add_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Space-separated list of alternate rsa token keys. */
    az_ams_content_key_policy_option_add_command_builder.prototype.altRsaTokenKeys = function (value) {
        this.setFlag("--alt-rsa-token-keys", value);
        return this;
    };
    /** Space-separated list of alternate symmetric token keys. */
    az_ams_content_key_policy_option_add_command_builder.prototype.altSymmetricTokenKeys = function (value) {
        this.setFlag("--alt-symmetric-token-keys", value);
        return this;
    };
    /** Space-separated list of alternate x509 certificate token keys. */
    az_ams_content_key_policy_option_add_command_builder.prototype.altX509TokenKeys = function (value) {
        this.setFlag("--alt-x509-token-keys", value);
        return this;
    };
    /** The key that must be used as FairPlay Application Secret Key, which is a 32 character hex string. */
    az_ams_content_key_policy_option_add_command_builder.prototype.ask = function (value) {
        this.setFlag("--ask", value);
        return this;
    };
    /** The audience for the token. */
    az_ams_content_key_policy_option_add_command_builder.prototype.audience = function (value) {
        this.setFlag("--audience", value);
        return this;
    };
    /** Use Clear Key configuration, a.k.a AES encryption. It's intended for non-DRM keys. */
    az_ams_content_key_policy_option_add_command_builder.prototype.clearKeyConfiguration = function (value) {
        this.setFlag("--clear-key-configuration", value);
        return this;
    };
    /** The filepath to a FairPlay certificate file in PKCS 12 (pfx) format (including private key). */
    az_ams_content_key_policy_option_add_command_builder.prototype.fairPlayPfx = function (value) {
        this.setFlag("--fair-play-pfx", value);
        return this;
    };
    /** The password encrypting FairPlay certificate in PKCS 12 (pfx) format. */
    az_ams_content_key_policy_option_add_command_builder.prototype.fairPlayPfxPassword = function (value) {
        this.setFlag("--fair-play-pfx-password", value);
        return this;
    };
    /** Playback duration. */
    az_ams_content_key_policy_option_add_command_builder.prototype.fpPlaybackDurationSeconds = function (value) {
        this.setFlag("--fp-playback-duration-seconds", value);
        return this;
    };
    /** Storage duration. */
    az_ams_content_key_policy_option_add_command_builder.prototype.fpStorageDurationSeconds = function (value) {
        this.setFlag("--fp-storage-duration-seconds", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_ams_content_key_policy_option_add_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The token issuer. */
    az_ams_content_key_policy_option_add_command_builder.prototype.issuer = function (value) {
        this.setFlag("--issuer", value);
        return this;
    };
    /** The content key policy name. */
    az_ams_content_key_policy_option_add_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The OpenID connect discovery document. */
    az_ams_content_key_policy_option_add_command_builder.prototype.openIdConnectDiscoveryDocument = function (value) {
        this.setFlag("--open-id-connect-discovery-document", value);
        return this;
    };
    /** Use open restriction. License or key will be delivered on every request. Not recommended for production environments. */
    az_ams_content_key_policy_option_add_command_builder.prototype.openRestriction = function (value) {
        this.setFlag("--open-restriction", value);
        return this;
    };
    /** JSON PlayReady license template. Use @{file} to load from a file. */
    az_ams_content_key_policy_option_add_command_builder.prototype.playReadyTemplate = function (value) {
        this.setFlag("--play-ready-template", value);
        return this;
    };
    /** The rental and lease key type. Available values: Undefined, DualExpiry, PersistentUnlimited, PersistentLimited. */
    az_ams_content_key_policy_option_add_command_builder.prototype.rentalAndLeaseKeyType = function (value) {
        this.setFlag("--rental-and-lease-key-type", value);
        return this;
    };
    /** The rental duration. Must be greater than or equal to 0. */
    az_ams_content_key_policy_option_add_command_builder.prototype.rentalDuration = function (value) {
        this.setFlag("--rental-duration", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_ams_content_key_policy_option_add_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_ams_content_key_policy_option_add_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated required token claims in '[key=value]' format. */
    az_ams_content_key_policy_option_add_command_builder.prototype.tokenClaims = function (value) {
        this.setFlag("--token-claims", value);
        return this;
    };
    /** Either a string (for symmetric key) or a filepath to a certificate (x509) or public key (rsa). Must be used in conjunction with --token-key-type. */
    az_ams_content_key_policy_option_add_command_builder.prototype.tokenKey = function (value) {
        this.setFlag("--token-key", value);
        return this;
    };
    /** The type of the token key to be used for the primary verification key. Allowed values: Symmetric, RSA, X509. */
    az_ams_content_key_policy_option_add_command_builder.prototype.tokenKeyType = function (value) {
        this.setFlag("--token-key-type", value);
        return this;
    };
    /** The type of token. Allowed values: Jwt, Swt. */
    az_ams_content_key_policy_option_add_command_builder.prototype.tokenType = function (value) {
        this.setFlag("--token-type", value);
        return this;
    };
    /** JSON Widevine license template. Use @{file} to load from a file. */
    az_ams_content_key_policy_option_add_command_builder.prototype.widevineTemplate = function (value) {
        this.setFlag("--widevine-template", value);
        return this;
    };
    return az_ams_content_key_policy_option_add_command_builder;
}(base_1.CommandBuilder));
/**
 * Remove an option from an existing content key policy.
 *
 * Syntax:
 * ```
 * az ams content-key-policy option remove --policy-option-id
 *                                         [--account-name]
 *                                         [--ids]
 *                                         [--name]
 *                                         [--resource-group]
 *                                         [--subscription]
 * ```
 *
 * @param {string} policyOptionId The content key policy option identifier. This value can be obtained from "policyOptionId" property by running a show operation on a content key policy resource.
 */
var az_ams_content_key_policy_option_remove_command_builder = /** @class */ (function (_super) {
    __extends(az_ams_content_key_policy_option_remove_command_builder, _super);
    function az_ams_content_key_policy_option_remove_command_builder(commandPath, resultDataTypeName, policyOptionId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.policyOptionId(policyOptionId);
        return _this;
    }
    /** The content key policy option identifier. This value can be obtained from "policyOptionId" property by running a show operation on a content key policy resource. */
    az_ams_content_key_policy_option_remove_command_builder.prototype.policyOptionId = function (value) {
        this.setFlag("--policy-option-id", value);
        return this;
    };
    /** The name of the Azure Media Services account. */
    az_ams_content_key_policy_option_remove_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_ams_content_key_policy_option_remove_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The content key policy name. */
    az_ams_content_key_policy_option_remove_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_ams_content_key_policy_option_remove_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_ams_content_key_policy_option_remove_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_ams_content_key_policy_option_remove_command_builder;
}(base_1.CommandBuilder));
/**
 * Update an option from an existing content key policy.
 *
 * Syntax:
 * ```
 * az ams content-key-policy option update --policy-option-id
 *                                         [--account-name]
 *                                         [--add-alt-token-key]
 *                                         [--add-alt-token-key-type]
 *                                         [--ask]
 *                                         [--audience]
 *                                         [--fair-play-pfx]
 *                                         [--fair-play-pfx-password]
 *                                         [--fp-playback-duration-seconds]
 *                                         [--fp-storage-duration-seconds]
 *                                         [--ids]
 *                                         [--issuer]
 *                                         [--name]
 *                                         [--open-id-connect-discovery-document]
 *                                         [--play-ready-template]
 *                                         [--policy-option-name]
 *                                         [--rental-and-lease-key-type]
 *                                         [--rental-duration]
 *                                         [--resource-group]
 *                                         [--subscription]
 *                                         [--token-claims]
 *                                         [--token-key]
 *                                         [--token-key-type]
 *                                         [--token-type]
 *                                         [--widevine-template]
 * ```
 *
 * @param {string} policyOptionId The content key policy option identifier. This value can be obtained from "policyOptionId" property by running a show operation on a content key policy resource.
 */
var az_ams_content_key_policy_option_update_command_builder = /** @class */ (function (_super) {
    __extends(az_ams_content_key_policy_option_update_command_builder, _super);
    function az_ams_content_key_policy_option_update_command_builder(commandPath, resultDataTypeName, policyOptionId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.policyOptionId(policyOptionId);
        return _this;
    }
    /** The content key policy option identifier. This value can be obtained from "policyOptionId" property by running a show operation on a content key policy resource. */
    az_ams_content_key_policy_option_update_command_builder.prototype.policyOptionId = function (value) {
        this.setFlag("--policy-option-id", value);
        return this;
    };
    /** The name of the Azure Media Services account. */
    az_ams_content_key_policy_option_update_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Creates an alternate token key with either a string (for symmetric key) or a filepath to a certificate (x509) or public key (rsa). Must be used in conjunction with --add-alt-token-key-type. */
    az_ams_content_key_policy_option_update_command_builder.prototype.addAltTokenKey = function (value) {
        this.setFlag("--add-alt-token-key", value);
        return this;
    };
    /** The type of the token key to be used for the alternate verification key. Allowed values: Symmetric, RSA, X509. */
    az_ams_content_key_policy_option_update_command_builder.prototype.addAltTokenKeyType = function (value) {
        this.setFlag("--add-alt-token-key-type", value);
        return this;
    };
    /** The key that must be used as FairPlay Application Secret Key, which is a 32 character hex string. */
    az_ams_content_key_policy_option_update_command_builder.prototype.ask = function (value) {
        this.setFlag("--ask", value);
        return this;
    };
    /** The audience for the token. */
    az_ams_content_key_policy_option_update_command_builder.prototype.audience = function (value) {
        this.setFlag("--audience", value);
        return this;
    };
    /** The filepath to a FairPlay certificate file in PKCS 12 (pfx) format (including private key). */
    az_ams_content_key_policy_option_update_command_builder.prototype.fairPlayPfx = function (value) {
        this.setFlag("--fair-play-pfx", value);
        return this;
    };
    /** The password encrypting FairPlay certificate in PKCS 12 (pfx) format. */
    az_ams_content_key_policy_option_update_command_builder.prototype.fairPlayPfxPassword = function (value) {
        this.setFlag("--fair-play-pfx-password", value);
        return this;
    };
    /** Playback duration. */
    az_ams_content_key_policy_option_update_command_builder.prototype.fpPlaybackDurationSeconds = function (value) {
        this.setFlag("--fp-playback-duration-seconds", value);
        return this;
    };
    /** Storage duration. */
    az_ams_content_key_policy_option_update_command_builder.prototype.fpStorageDurationSeconds = function (value) {
        this.setFlag("--fp-storage-duration-seconds", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_ams_content_key_policy_option_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The token issuer. */
    az_ams_content_key_policy_option_update_command_builder.prototype.issuer = function (value) {
        this.setFlag("--issuer", value);
        return this;
    };
    /** The content key policy name. */
    az_ams_content_key_policy_option_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The OpenID connect discovery document. */
    az_ams_content_key_policy_option_update_command_builder.prototype.openIdConnectDiscoveryDocument = function (value) {
        this.setFlag("--open-id-connect-discovery-document", value);
        return this;
    };
    /** JSON PlayReady license template. Use @{file} to load from a file. */
    az_ams_content_key_policy_option_update_command_builder.prototype.playReadyTemplate = function (value) {
        this.setFlag("--play-ready-template", value);
        return this;
    };
    /** The content key policy option name. */
    az_ams_content_key_policy_option_update_command_builder.prototype.policyOptionName = function (value) {
        this.setFlag("--policy-option-name", value);
        return this;
    };
    /** The rental and lease key type. Available values: Undefined, DualExpiry, PersistentUnlimited, PersistentLimited. */
    az_ams_content_key_policy_option_update_command_builder.prototype.rentalAndLeaseKeyType = function (value) {
        this.setFlag("--rental-and-lease-key-type", value);
        return this;
    };
    /** The rental duration. Must be greater than or equal to 0. */
    az_ams_content_key_policy_option_update_command_builder.prototype.rentalDuration = function (value) {
        this.setFlag("--rental-duration", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_ams_content_key_policy_option_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_ams_content_key_policy_option_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated required token claims in '[key=value]' format. */
    az_ams_content_key_policy_option_update_command_builder.prototype.tokenClaims = function (value) {
        this.setFlag("--token-claims", value);
        return this;
    };
    /** Either a string (for symmetric key) or a filepath to a certificate (x509) or public key (rsa). Must be used in conjunction with --token-key-type. */
    az_ams_content_key_policy_option_update_command_builder.prototype.tokenKey = function (value) {
        this.setFlag("--token-key", value);
        return this;
    };
    /** The type of the token key to be used for the primary verification key. Allowed values: Symmetric, RSA, X509. */
    az_ams_content_key_policy_option_update_command_builder.prototype.tokenKeyType = function (value) {
        this.setFlag("--token-key-type", value);
        return this;
    };
    /** The type of token. Allowed values: Jwt, Swt. */
    az_ams_content_key_policy_option_update_command_builder.prototype.tokenType = function (value) {
        this.setFlag("--token-type", value);
        return this;
    };
    /** JSON Widevine license template. Use @{file} to load from a file. */
    az_ams_content_key_policy_option_update_command_builder.prototype.widevineTemplate = function (value) {
        this.setFlag("--widevine-template", value);
        return this;
    };
    return az_ams_content_key_policy_option_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a new content key policy.
 *
 * Syntax:
 * ```
 * az ams content-key-policy create --account-name
 *                                  --name
 *                                  --policy-option-name
 *                                  --resource-group
 *                                  [--alt-rsa-token-keys]
 *                                  [--alt-symmetric-token-keys]
 *                                  [--alt-x509-token-keys]
 *                                  [--ask]
 *                                  [--audience]
 *                                  [--clear-key-configuration]
 *                                  [--description]
 *                                  [--fair-play-pfx]
 *                                  [--fair-play-pfx-password]
 *                                  [--fp-playback-duration-seconds]
 *                                  [--fp-storage-duration-seconds]
 *                                  [--issuer]
 *                                  [--open-id-connect-discovery-document]
 *                                  [--open-restriction]
 *                                  [--play-ready-template]
 *                                  [--rental-and-lease-key-type]
 *                                  [--rental-duration]
 *                                  [--subscription]
 *                                  [--token-claims]
 *                                  [--token-key]
 *                                  [--token-key-type]
 *                                  [--token-type]
 *                                  [--widevine-template]
 * ```
 *
 * @param {string} accountName The name of the Azure Media Services account.
 * @param {string} name The content key policy name.
 * @param {string} policyOptionName The content key policy option name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_ams_content_key_policy_create_command_builder = /** @class */ (function (_super) {
    __extends(az_ams_content_key_policy_create_command_builder, _super);
    function az_ams_content_key_policy_create_command_builder(commandPath, resultDataTypeName, accountName, name, policyOptionName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.name(name);
        _this.policyOptionName(policyOptionName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the Azure Media Services account. */
    az_ams_content_key_policy_create_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** The content key policy name. */
    az_ams_content_key_policy_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The content key policy option name. */
    az_ams_content_key_policy_create_command_builder.prototype.policyOptionName = function (value) {
        this.setFlag("--policy-option-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_ams_content_key_policy_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Space-separated list of alternate rsa token keys. */
    az_ams_content_key_policy_create_command_builder.prototype.altRsaTokenKeys = function (value) {
        this.setFlag("--alt-rsa-token-keys", value);
        return this;
    };
    /** Space-separated list of alternate symmetric token keys. */
    az_ams_content_key_policy_create_command_builder.prototype.altSymmetricTokenKeys = function (value) {
        this.setFlag("--alt-symmetric-token-keys", value);
        return this;
    };
    /** Space-separated list of alternate x509 certificate token keys. */
    az_ams_content_key_policy_create_command_builder.prototype.altX509TokenKeys = function (value) {
        this.setFlag("--alt-x509-token-keys", value);
        return this;
    };
    /** The key that must be used as FairPlay Application Secret Key, which is a 32 character hex string. */
    az_ams_content_key_policy_create_command_builder.prototype.ask = function (value) {
        this.setFlag("--ask", value);
        return this;
    };
    /** The audience for the token. */
    az_ams_content_key_policy_create_command_builder.prototype.audience = function (value) {
        this.setFlag("--audience", value);
        return this;
    };
    /** Use Clear Key configuration, a.k.a AES encryption. It's intended for non-DRM keys. */
    az_ams_content_key_policy_create_command_builder.prototype.clearKeyConfiguration = function (value) {
        this.setFlag("--clear-key-configuration", value);
        return this;
    };
    /** The content key policy description. */
    az_ams_content_key_policy_create_command_builder.prototype.description = function (value) {
        this.setFlag("--description", value);
        return this;
    };
    /** The filepath to a FairPlay certificate file in PKCS 12 (pfx) format (including private key). */
    az_ams_content_key_policy_create_command_builder.prototype.fairPlayPfx = function (value) {
        this.setFlag("--fair-play-pfx", value);
        return this;
    };
    /** The password encrypting FairPlay certificate in PKCS 12 (pfx) format. */
    az_ams_content_key_policy_create_command_builder.prototype.fairPlayPfxPassword = function (value) {
        this.setFlag("--fair-play-pfx-password", value);
        return this;
    };
    /** Playback duration. */
    az_ams_content_key_policy_create_command_builder.prototype.fpPlaybackDurationSeconds = function (value) {
        this.setFlag("--fp-playback-duration-seconds", value);
        return this;
    };
    /** Storage duration. */
    az_ams_content_key_policy_create_command_builder.prototype.fpStorageDurationSeconds = function (value) {
        this.setFlag("--fp-storage-duration-seconds", value);
        return this;
    };
    /** The token issuer. */
    az_ams_content_key_policy_create_command_builder.prototype.issuer = function (value) {
        this.setFlag("--issuer", value);
        return this;
    };
    /** The OpenID connect discovery document. */
    az_ams_content_key_policy_create_command_builder.prototype.openIdConnectDiscoveryDocument = function (value) {
        this.setFlag("--open-id-connect-discovery-document", value);
        return this;
    };
    /** Use open restriction. License or key will be delivered on every request. Not recommended for production environments. */
    az_ams_content_key_policy_create_command_builder.prototype.openRestriction = function (value) {
        this.setFlag("--open-restriction", value);
        return this;
    };
    /** JSON PlayReady license template. Use @{file} to load from a file. */
    az_ams_content_key_policy_create_command_builder.prototype.playReadyTemplate = function (value) {
        this.setFlag("--play-ready-template", value);
        return this;
    };
    /** The rental and lease key type. Available values: Undefined, DualExpiry, PersistentUnlimited, PersistentLimited. */
    az_ams_content_key_policy_create_command_builder.prototype.rentalAndLeaseKeyType = function (value) {
        this.setFlag("--rental-and-lease-key-type", value);
        return this;
    };
    /** The rental duration. Must be greater than or equal to 0. */
    az_ams_content_key_policy_create_command_builder.prototype.rentalDuration = function (value) {
        this.setFlag("--rental-duration", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_ams_content_key_policy_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated required token claims in '[key=value]' format. */
    az_ams_content_key_policy_create_command_builder.prototype.tokenClaims = function (value) {
        this.setFlag("--token-claims", value);
        return this;
    };
    /** Either a string (for symmetric key) or a filepath to a certificate (x509) or public key (rsa). Must be used in conjunction with --token-key-type. */
    az_ams_content_key_policy_create_command_builder.prototype.tokenKey = function (value) {
        this.setFlag("--token-key", value);
        return this;
    };
    /** The type of the token key to be used for the primary verification key. Allowed values: Symmetric, RSA, X509. */
    az_ams_content_key_policy_create_command_builder.prototype.tokenKeyType = function (value) {
        this.setFlag("--token-key-type", value);
        return this;
    };
    /** The type of token. Allowed values: Jwt, Swt. */
    az_ams_content_key_policy_create_command_builder.prototype.tokenType = function (value) {
        this.setFlag("--token-type", value);
        return this;
    };
    /** JSON Widevine license template. Use @{file} to load from a file. */
    az_ams_content_key_policy_create_command_builder.prototype.widevineTemplate = function (value) {
        this.setFlag("--widevine-template", value);
        return this;
    };
    return az_ams_content_key_policy_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a content key policy.
 *
 * Syntax:
 * ```
 * az ams content-key-policy delete [--account-name]
 *                                  [--ids]
 *                                  [--name]
 *                                  [--resource-group]
 *                                  [--subscription]
 * ```
 */
var az_ams_content_key_policy_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_ams_content_key_policy_delete_command_builder, _super);
    function az_ams_content_key_policy_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The name of the Azure Media Services account. */
    az_ams_content_key_policy_delete_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_ams_content_key_policy_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The content key policy name. */
    az_ams_content_key_policy_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_ams_content_key_policy_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_ams_content_key_policy_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_ams_content_key_policy_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List all the content key policies within an Azure Media Services account.
 *
 * Syntax:
 * ```
 * az ams content-key-policy list --account-name
 *                                --resource-group
 *                                [--filter]
 *                                [--orderby]
 *                                [--query-examples]
 *                                [--subscription]
 *                                [--top]
 * ```
 *
 * @param {string} accountName The name of the Azure Media Services account.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_ams_content_key_policy_list_command_builder = /** @class */ (function (_super) {
    __extends(az_ams_content_key_policy_list_command_builder, _super);
    function az_ams_content_key_policy_list_command_builder(commandPath, resultDataTypeName, accountName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the Azure Media Services account. */
    az_ams_content_key_policy_list_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_ams_content_key_policy_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Restricts the set of items returned. */
    az_ams_content_key_policy_list_command_builder.prototype.filter = function (value) {
        this.setFlag("--filter", value);
        return this;
    };
    /** Specifies the key by which the result collection should be ordered. */
    az_ams_content_key_policy_list_command_builder.prototype.orderby = function (value) {
        this.setFlag("--orderby", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_ams_content_key_policy_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_ams_content_key_policy_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Specifies a non-negative integer n that limits the number of items returned from a collection. The service returns the number of available items up to but not greater than the specified value n. */
    az_ams_content_key_policy_list_command_builder.prototype.top = function (value) {
        this.setFlag("--top", value);
        return this;
    };
    return az_ams_content_key_policy_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Show an existing content key policy.
 *
 * Syntax:
 * ```
 * az ams content-key-policy show [--account-name]
 *                                [--ids]
 *                                [--name]
 *                                [--query-examples]
 *                                [--resource-group]
 *                                [--subscription]
 *                                [--with-secrets]
 * ```
 */
var az_ams_content_key_policy_show_command_builder = /** @class */ (function (_super) {
    __extends(az_ams_content_key_policy_show_command_builder, _super);
    function az_ams_content_key_policy_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The name of the Azure Media Services account. */
    az_ams_content_key_policy_show_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_ams_content_key_policy_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The content key policy name. */
    az_ams_content_key_policy_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_ams_content_key_policy_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_ams_content_key_policy_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_ams_content_key_policy_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Include secret values of the content key policy. */
    az_ams_content_key_policy_show_command_builder.prototype.withSecrets = function (value) {
        this.setFlag("--with-secrets", value);
        return this;
    };
    return az_ams_content_key_policy_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update an existing content key policy.
 *
 * Syntax:
 * ```
 * az ams content-key-policy update [--account-name]
 *                                  [--add]
 *                                  [--description]
 *                                  [--force-string]
 *                                  [--ids]
 *                                  [--name]
 *                                  [--remove]
 *                                  [--resource-group]
 *                                  [--set]
 *                                  [--subscription]
 * ```
 */
var az_ams_content_key_policy_update_command_builder = /** @class */ (function (_super) {
    __extends(az_ams_content_key_policy_update_command_builder, _super);
    function az_ams_content_key_policy_update_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The name of the Azure Media Services account. */
    az_ams_content_key_policy_update_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_ams_content_key_policy_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** The content key policy description. */
    az_ams_content_key_policy_update_command_builder.prototype.description = function (value) {
        this.setFlag("--description", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_ams_content_key_policy_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_ams_content_key_policy_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The content key policy name. */
    az_ams_content_key_policy_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_ams_content_key_policy_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_ams_content_key_policy_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_ams_content_key_policy_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_ams_content_key_policy_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_ams_content_key_policy_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Cancel a job.
 *
 * Syntax:
 * ```
 * az ams job cancel [--account-name]
 *                   [--delete]
 *                   [--ids]
 *                   [--name]
 *                   [--resource-group]
 *                   [--subscription]
 *                   [--transform-name]
 * ```
 */
var az_ams_job_cancel_command_builder = /** @class */ (function (_super) {
    __extends(az_ams_job_cancel_command_builder, _super);
    function az_ams_job_cancel_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The name of the Azure Media Services account. */
    az_ams_job_cancel_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Delete the job being cancelled. */
    az_ams_job_cancel_command_builder.prototype["delete"] = function (value) {
        this.setFlag("--delete", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_ams_job_cancel_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the job. */
    az_ams_job_cancel_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_ams_job_cancel_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_ams_job_cancel_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The name of the transform. */
    az_ams_job_cancel_command_builder.prototype.transformName = function (value) {
        this.setFlag("--transform-name", value);
        return this;
    };
    return az_ams_job_cancel_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a job.
 *
 * Syntax:
 * ```
 * az ams job delete [--account-name]
 *                   [--ids]
 *                   [--name]
 *                   [--resource-group]
 *                   [--subscription]
 *                   [--transform-name]
 * ```
 */
var az_ams_job_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_ams_job_delete_command_builder, _super);
    function az_ams_job_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The name of the Azure Media Services account. */
    az_ams_job_delete_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_ams_job_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the job. */
    az_ams_job_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_ams_job_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_ams_job_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The name of the transform. */
    az_ams_job_delete_command_builder.prototype.transformName = function (value) {
        this.setFlag("--transform-name", value);
        return this;
    };
    return az_ams_job_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List all the jobs of a transform within an Azure Media Services account.
 *
 * Syntax:
 * ```
 * az ams job list --account-name
 *                 --resource-group
 *                 --transform-name
 *                 [--filter]
 *                 [--orderby]
 *                 [--query-examples]
 *                 [--subscription]
 * ```
 *
 * @param {string} accountName The name of the Azure Media Services account.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} transformName The name of the transform.
 */
var az_ams_job_list_command_builder = /** @class */ (function (_super) {
    __extends(az_ams_job_list_command_builder, _super);
    function az_ams_job_list_command_builder(commandPath, resultDataTypeName, accountName, resourceGroup, transformName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.resourceGroup(resourceGroup);
        _this.transformName(transformName);
        return _this;
    }
    /** The name of the Azure Media Services account. */
    az_ams_job_list_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_ams_job_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the transform. */
    az_ams_job_list_command_builder.prototype.transformName = function (value) {
        this.setFlag("--transform-name", value);
        return this;
    };
    /** Restricts the set of items returned. */
    az_ams_job_list_command_builder.prototype.filter = function (value) {
        this.setFlag("--filter", value);
        return this;
    };
    /** Specifies the key by which the result collection should be ordered. */
    az_ams_job_list_command_builder.prototype.orderby = function (value) {
        this.setFlag("--orderby", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_ams_job_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_ams_job_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_ams_job_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Show the details of a job.
 *
 * Syntax:
 * ```
 * az ams job show [--account-name]
 *                 [--ids]
 *                 [--name]
 *                 [--query-examples]
 *                 [--resource-group]
 *                 [--subscription]
 *                 [--transform-name]
 * ```
 */
var az_ams_job_show_command_builder = /** @class */ (function (_super) {
    __extends(az_ams_job_show_command_builder, _super);
    function az_ams_job_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The name of the Azure Media Services account. */
    az_ams_job_show_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_ams_job_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the job. */
    az_ams_job_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_ams_job_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_ams_job_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_ams_job_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The name of the transform. */
    az_ams_job_show_command_builder.prototype.transformName = function (value) {
        this.setFlag("--transform-name", value);
        return this;
    };
    return az_ams_job_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Start a job.
 *
 * Syntax:
 * ```
 * az ams job start --output-assets
 *                  [--account-name]
 *                  [--base-uri]
 *                  [--correlation-data]
 *                  [--description]
 *                  [--files]
 *                  [--ids]
 *                  [--input-asset-name]
 *                  [--label]
 *                  [--name]
 *                  [--priority {High, Low, Normal}]
 *                  [--resource-group]
 *                  [--subscription]
 *                  [--transform-name]
 * ```
 *
 * @param {string} outputAssets Space-separated assets in 'assetName=label' format. An asset without label can be sent like this: 'assetName='.
 */
var az_ams_job_start_command_builder = /** @class */ (function (_super) {
    __extends(az_ams_job_start_command_builder, _super);
    function az_ams_job_start_command_builder(commandPath, resultDataTypeName, outputAssets) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.outputAssets(outputAssets);
        return _this;
    }
    /** Space-separated assets in 'assetName=label' format. An asset without label can be sent like this: 'assetName='. */
    az_ams_job_start_command_builder.prototype.outputAssets = function (value) {
        this.setFlag("--output-assets", value);
        return this;
    };
    /** The name of the Azure Media Services account. */
    az_ams_job_start_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Base uri for http job input. It will be concatenated with provided file names. If no base uri is given, then the provided file list is assumed to be fully qualified uris. */
    az_ams_job_start_command_builder.prototype.baseUri = function (value) {
        this.setFlag("--base-uri", value);
        return this;
    };
    /** Space-separated correlation data in 'key[=value]' format. This customer provided data will be returned in Job and JobOutput state events. */
    az_ams_job_start_command_builder.prototype.correlationData = function (value) {
        this.setFlag("--correlation-data", value);
        return this;
    };
    /** The job description. */
    az_ams_job_start_command_builder.prototype.description = function (value) {
        this.setFlag("--description", value);
        return this;
    };
    /** Space-separated list of files. It can be used to tell the service to only use the files specified from the input asset. */
    az_ams_job_start_command_builder.prototype.files = function (value) {
        this.setFlag("--files", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_ams_job_start_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the input asset. */
    az_ams_job_start_command_builder.prototype.inputAssetName = function (value) {
        this.setFlag("--input-asset-name", value);
        return this;
    };
    /** A label that is assigned to a Job Input that is used to satisfy a reference used in the Transform. For example, a Transform can be authored to take an image file with the label 'xyz' and apply it as an overlay onto the input video before it is encoded. When submitting a Job, exactly one of the JobInputs should be the image file, and it should have the label 'xyz'. */
    az_ams_job_start_command_builder.prototype.label = function (value) {
        this.setFlag("--label", value);
        return this;
    };
    /** The name of the job. */
    az_ams_job_start_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The priority with which the job should be processed. */
    az_ams_job_start_command_builder.prototype.priority = function (value) {
        this.setFlag("--priority", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_ams_job_start_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_ams_job_start_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The name of the transform. */
    az_ams_job_start_command_builder.prototype.transformName = function (value) {
        this.setFlag("--transform-name", value);
        return this;
    };
    return az_ams_job_start_command_builder;
}(base_1.CommandBuilder));
/**
 * Update an existing job.
 *
 * Syntax:
 * ```
 * az ams job update [--account-name]
 *                   [--add]
 *                   [--description]
 *                   [--force-string]
 *                   [--ids]
 *                   [--name]
 *                   [--priority {High, Low, Normal}]
 *                   [--remove]
 *                   [--resource-group]
 *                   [--set]
 *                   [--subscription]
 *                   [--transform-name]
 * ```
 */
var az_ams_job_update_command_builder = /** @class */ (function (_super) {
    __extends(az_ams_job_update_command_builder, _super);
    function az_ams_job_update_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The name of the Azure Media Services account. */
    az_ams_job_update_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_ams_job_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** The job description. */
    az_ams_job_update_command_builder.prototype.description = function (value) {
        this.setFlag("--description", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_ams_job_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_ams_job_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the job. */
    az_ams_job_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The priority with which the job should be processed. */
    az_ams_job_update_command_builder.prototype.priority = function (value) {
        this.setFlag("--priority", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_ams_job_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_ams_job_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_ams_job_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_ams_job_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The name of the transform. */
    az_ams_job_update_command_builder.prototype.transformName = function (value) {
        this.setFlag("--transform-name", value);
        return this;
    };
    return az_ams_job_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a live event.
 *
 * Syntax:
 * ```
 * az ams live-event create --account-name
 *                          --ips
 *                          --name
 *                          --resource-group
 *                          --streaming-protocol {FragmentedMP4, RTMP}
 *                          [--access-token]
 *                          [--alternative-media-id]
 *                          [--auto-start]
 *                          [--client-access-policy]
 *                          [--cross-domain-policy]
 *                          [--description]
 *                          [--encoding-type]
 *                          [--key-frame-interval-duration]
 *                          [--no-wait]
 *                          [--preset-name]
 *                          [--preview-ips]
 *                          [--preview-locator]
 *                          [--stream-options {Default, LowLatency}]
 *                          [--streaming-policy-name]
 *                          [--subscription]
 *                          [--tags]
 *                          [--vanity-url {false, true}]
 * ```
 *
 * @param {string} accountName The name of the Azure Media Services account.
 * @param {string} ips Space-separated IP addresses for access control. Allowed IP addresses can be specified as either a single IP address (e.g. "10.0.0.1") or as an IP range using an IP address and a CIDR subnet mask (e.g. "10.0.0.1/22"). Use "" to clear existing list. Use "AllowAll" to allow all IP addresses. Allowing all IPs is not recommended for production environments.
 * @param {string} name The name of the live event.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {'FragmentedMP4' | 'RTMP'} streamingProtocol The streaming protocol for the live event. This value is specified at creation time and cannot be updated.
 */
var az_ams_live_event_create_command_builder = /** @class */ (function (_super) {
    __extends(az_ams_live_event_create_command_builder, _super);
    function az_ams_live_event_create_command_builder(commandPath, resultDataTypeName, accountName, ips, name, resourceGroup, streamingProtocol) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.ips(ips);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.streamingProtocol(streamingProtocol);
        return _this;
    }
    /** The name of the Azure Media Services account. */
    az_ams_live_event_create_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Space-separated IP addresses for access control. Allowed IP addresses can be specified as either a single IP address (e.g. "10.0.0.1") or as an IP range using an IP address and a CIDR subnet mask (e.g. "10.0.0.1/22"). Use "" to clear existing list. Use "AllowAll" to allow all IP addresses. Allowing all IPs is not recommended for production environments. */
    az_ams_live_event_create_command_builder.prototype.ips = function (value) {
        this.setFlag("--ips", value);
        return this;
    };
    /** The name of the live event. */
    az_ams_live_event_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_ams_live_event_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The streaming protocol for the live event. This value is specified at creation time and cannot be updated. */
    az_ams_live_event_create_command_builder.prototype.streamingProtocol = function (value) {
        this.setFlag("--streaming-protocol", value);
        return this;
    };
    /** A unique identifier for a stream. This can be specified at creation time but cannot be updated. If omitted, the service will generate a unique value. */
    az_ams_live_event_create_command_builder.prototype.accessToken = function (value) {
        this.setFlag("--access-token", value);
        return this;
    };
    /** An Alternative Media Identifier associated with the StreamingLocator created for the preview. This value is specified at creation time and cannot be updated. The identifier can be used in the CustomLicenseAcquisitionUrlTemplate or the CustomKeyAcquisitionUrlTemplate of the StreamingPolicy specified in the StreamingPolicyName field. */
    az_ams_live_event_create_command_builder.prototype.alternativeMediaId = function (value) {
        this.setFlag("--alternative-media-id", value);
        return this;
    };
    /** The flag indicates if the resource should be automatically started on creation. */
    az_ams_live_event_create_command_builder.prototype.autoStart = function (value) {
        this.setFlag("--auto-start", value);
        return this;
    };
    /** Filepath to the clientaccesspolicy.xml used by Microsoft Silverlight and Adobe Flash. Use @{file} to load from a file. */
    az_ams_live_event_create_command_builder.prototype.clientAccessPolicy = function (value) {
        this.setFlag("--client-access-policy", value);
        return this;
    };
    /** Filepath to the crossdomain.xml used by Microsoft Silverlight and Adobe Flash. Use @{file} to load from a file. */
    az_ams_live_event_create_command_builder.prototype.crossDomainPolicy = function (value) {
        this.setFlag("--cross-domain-policy", value);
        return this;
    };
    /** The live event description. */
    az_ams_live_event_create_command_builder.prototype.description = function (value) {
        this.setFlag("--description", value);
        return this;
    };
    /** The encoding type for live event. This value is specified at creation time and cannot be updated. Allowed values: Basic, None, Standard. */
    az_ams_live_event_create_command_builder.prototype.encodingType = function (value) {
        this.setFlag("--encoding-type", value);
        return this;
    };
    /** ISO 8601 timespan duration of the key frame interval duration in seconds. The value should be an interger in the range of 1 (PT1S or 00:00:01) to 30 (PT30S or 00:00:30) seconds. */
    az_ams_live_event_create_command_builder.prototype.keyFrameIntervalDuration = function (value) {
        this.setFlag("--key-frame-interval-duration", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_ams_live_event_create_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** The encoding preset name. This value is specified at creation time and cannot be updated. */
    az_ams_live_event_create_command_builder.prototype.presetName = function (value) {
        this.setFlag("--preset-name", value);
        return this;
    };
    /** Space-separated IP addresses for access control. Allowed IP addresses can be specified as either a single IP address (e.g. "10.0.0.1") or as an IP range using an IP address and a CIDR subnet mask (e.g. "10.0.0.1/22"). Use "" to clear existing list. Use "AllowAll" to allow all IP addresses. Allowing all IPs is not recommended for production environments. */
    az_ams_live_event_create_command_builder.prototype.previewIps = function (value) {
        this.setFlag("--preview-ips", value);
        return this;
    };
    /** The identifier of the preview locator in Guid format. Specifying this at creation time allows the caller to know the preview locator url before the event is created. If omitted, the service will generate a random identifier. This value cannot be updated once the live event is created. */
    az_ams_live_event_create_command_builder.prototype.previewLocator = function (value) {
        this.setFlag("--preview-locator", value);
        return this;
    };
    /** The options to use for the LiveEvent. This value is specified at creation time and cannot be updated. */
    az_ams_live_event_create_command_builder.prototype.streamOptions = function (value) {
        this.setFlag("--stream-options", value);
        return this;
    };
    /** The name of streaming policy used for the live event preview. This can be specified at creation time but cannot be updated. */
    az_ams_live_event_create_command_builder.prototype.streamingPolicyName = function (value) {
        this.setFlag("--streaming-policy-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_ams_live_event_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_ams_live_event_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    /** Specifies whether to use a vanity url with the Live Event. This value is specified at creation time and cannot be updated. */
    az_ams_live_event_create_command_builder.prototype.vanityUrl = function (value) {
        this.setFlag("--vanity-url", value.toString());
        return this;
    };
    return az_ams_live_event_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a live event.
 *
 * Syntax:
 * ```
 * az ams live-event delete [--account-name]
 *                          [--ids]
 *                          [--name]
 *                          [--resource-group]
 *                          [--subscription]
 * ```
 */
var az_ams_live_event_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_ams_live_event_delete_command_builder, _super);
    function az_ams_live_event_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The name of the Azure Media Services account. */
    az_ams_live_event_delete_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_ams_live_event_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the live event. */
    az_ams_live_event_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_ams_live_event_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_ams_live_event_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_ams_live_event_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List all the live events of an Azure Media Services account.
 *
 * Syntax:
 * ```
 * az ams live-event list --account-name
 *                        --resource-group
 *                        [--query-examples]
 *                        [--subscription]
 * ```
 *
 * @param {string} accountName The name of the Azure Media Services account.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_ams_live_event_list_command_builder = /** @class */ (function (_super) {
    __extends(az_ams_live_event_list_command_builder, _super);
    function az_ams_live_event_list_command_builder(commandPath, resultDataTypeName, accountName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the Azure Media Services account. */
    az_ams_live_event_list_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_ams_live_event_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_ams_live_event_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_ams_live_event_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_ams_live_event_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Reset a live event.
 *
 * Syntax:
 * ```
 * az ams live-event reset [--account-name]
 *                         [--ids]
 *                         [--name]
 *                         [--no-wait]
 *                         [--resource-group]
 *                         [--subscription]
 * ```
 */
var az_ams_live_event_reset_command_builder = /** @class */ (function (_super) {
    __extends(az_ams_live_event_reset_command_builder, _super);
    function az_ams_live_event_reset_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The name of the Azure Media Services account. */
    az_ams_live_event_reset_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_ams_live_event_reset_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the live event. */
    az_ams_live_event_reset_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_ams_live_event_reset_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_ams_live_event_reset_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_ams_live_event_reset_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_ams_live_event_reset_command_builder;
}(base_1.CommandBuilder));
/**
 * Show the details of a live event.
 *
 * Syntax:
 * ```
 * az ams live-event show [--account-name]
 *                        [--ids]
 *                        [--name]
 *                        [--query-examples]
 *                        [--resource-group]
 *                        [--subscription]
 * ```
 */
var az_ams_live_event_show_command_builder = /** @class */ (function (_super) {
    __extends(az_ams_live_event_show_command_builder, _super);
    function az_ams_live_event_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The name of the Azure Media Services account. */
    az_ams_live_event_show_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_ams_live_event_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the live event. */
    az_ams_live_event_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_ams_live_event_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_ams_live_event_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_ams_live_event_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_ams_live_event_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Start a live event.
 *
 * Syntax:
 * ```
 * az ams live-event start [--account-name]
 *                         [--ids]
 *                         [--name]
 *                         [--no-wait]
 *                         [--resource-group]
 *                         [--subscription]
 * ```
 */
var az_ams_live_event_start_command_builder = /** @class */ (function (_super) {
    __extends(az_ams_live_event_start_command_builder, _super);
    function az_ams_live_event_start_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The name of the Azure Media Services account. */
    az_ams_live_event_start_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_ams_live_event_start_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the live event. */
    az_ams_live_event_start_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_ams_live_event_start_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_ams_live_event_start_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_ams_live_event_start_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_ams_live_event_start_command_builder;
}(base_1.CommandBuilder));
/**
 * Stop a live event.
 *
 * Syntax:
 * ```
 * az ams live-event stop [--account-name]
 *                        [--ids]
 *                        [--name]
 *                        [--no-wait]
 *                        [--remove-outputs-on-stop]
 *                        [--resource-group]
 *                        [--subscription]
 * ```
 */
var az_ams_live_event_stop_command_builder = /** @class */ (function (_super) {
    __extends(az_ams_live_event_stop_command_builder, _super);
    function az_ams_live_event_stop_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The name of the Azure Media Services account. */
    az_ams_live_event_stop_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_ams_live_event_stop_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the live event. */
    az_ams_live_event_stop_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_ams_live_event_stop_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Remove live outputs on stop. */
    az_ams_live_event_stop_command_builder.prototype.removeOutputsOnStop = function (value) {
        this.setFlag("--remove-outputs-on-stop", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_ams_live_event_stop_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_ams_live_event_stop_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_ams_live_event_stop_command_builder;
}(base_1.CommandBuilder));
/**
 * Update the details of a live event.
 *
 * Syntax:
 * ```
 * az ams live-event update [--account-name]
 *                          [--add]
 *                          [--client-access-policy]
 *                          [--cross-domain-policy]
 *                          [--description]
 *                          [--force-string]
 *                          [--ids]
 *                          [--ips]
 *                          [--key-frame-interval-duration]
 *                          [--name]
 *                          [--preview-ips]
 *                          [--remove]
 *                          [--resource-group]
 *                          [--set]
 *                          [--subscription]
 *                          [--tags]
 * ```
 */
var az_ams_live_event_update_command_builder = /** @class */ (function (_super) {
    __extends(az_ams_live_event_update_command_builder, _super);
    function az_ams_live_event_update_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The name of the Azure Media Services account. */
    az_ams_live_event_update_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_ams_live_event_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** Filepath to the clientaccesspolicy.xml used by Microsoft Silverlight and Adobe Flash. Use @{file} to load from a file. */
    az_ams_live_event_update_command_builder.prototype.clientAccessPolicy = function (value) {
        this.setFlag("--client-access-policy", value);
        return this;
    };
    /** Filepath to the crossdomain.xml used by Microsoft Silverlight and Adobe Flash. Use @{file} to load from a file. */
    az_ams_live_event_update_command_builder.prototype.crossDomainPolicy = function (value) {
        this.setFlag("--cross-domain-policy", value);
        return this;
    };
    /** The live event description. */
    az_ams_live_event_update_command_builder.prototype.description = function (value) {
        this.setFlag("--description", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_ams_live_event_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_ams_live_event_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Space-separated IP addresses for access control. Allowed IP addresses can be specified as either a single IP address (e.g. "10.0.0.1") or as an IP range using an IP address and a CIDR subnet mask (e.g. "10.0.0.1/22"). Use "" to clear existing list. Use "AllowAll" to allow all IP addresses. Allowing all IPs is not recommended for production environments. */
    az_ams_live_event_update_command_builder.prototype.ips = function (value) {
        this.setFlag("--ips", value);
        return this;
    };
    /** ISO 8601 timespan duration of the key frame interval duration in seconds. The value should be an interger in the range of 1 (PT1S or 00:00:01) to 30 (PT30S or 00:00:30) seconds. */
    az_ams_live_event_update_command_builder.prototype.keyFrameIntervalDuration = function (value) {
        this.setFlag("--key-frame-interval-duration", value);
        return this;
    };
    /** The name of the live event. */
    az_ams_live_event_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Space-separated IP addresses for access control. Allowed IP addresses can be specified as either a single IP address (e.g. "10.0.0.1") or as an IP range using an IP address and a CIDR subnet mask (e.g. "10.0.0.1/22"). Use "" to clear existing list. Use "AllowAll" to allow all IP addresses. Allowing all IPs is not recommended for production environments. */
    az_ams_live_event_update_command_builder.prototype.previewIps = function (value) {
        this.setFlag("--preview-ips", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_ams_live_event_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_ams_live_event_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_ams_live_event_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_ams_live_event_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_ams_live_event_update_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_ams_live_event_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Place the CLI in a waiting state until a condition of the live event is met.
 *
 * Syntax:
 * ```
 * az ams live-event wait [--account-name]
 *                        [--created]
 *                        [--custom]
 *                        [--deleted]
 *                        [--exists]
 *                        [--ids]
 *                        [--interval]
 *                        [--name]
 *                        [--resource-group]
 *                        [--subscription]
 *                        [--timeout]
 *                        [--updated]
 * ```
 */
var az_ams_live_event_wait_command_builder = /** @class */ (function (_super) {
    __extends(az_ams_live_event_wait_command_builder, _super);
    function az_ams_live_event_wait_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The name of the Azure Media Services account. */
    az_ams_live_event_wait_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    az_ams_live_event_wait_command_builder.prototype.created = function (value) {
        this.setFlag("--created", value);
        return this;
    };
    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    az_ams_live_event_wait_command_builder.prototype.custom = function (value) {
        this.setFlag("--custom", value);
        return this;
    };
    /** Wait until deleted. */
    az_ams_live_event_wait_command_builder.prototype.deleted = function (value) {
        this.setFlag("--deleted", value);
        return this;
    };
    /** Wait until the resource exists. */
    az_ams_live_event_wait_command_builder.prototype.exists = function (value) {
        this.setFlag("--exists", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_ams_live_event_wait_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Polling interval in seconds. */
    az_ams_live_event_wait_command_builder.prototype.interval = function (value) {
        this.setFlag("--interval", value);
        return this;
    };
    /** The name of the live event. */
    az_ams_live_event_wait_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_ams_live_event_wait_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_ams_live_event_wait_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Maximum wait in seconds. */
    az_ams_live_event_wait_command_builder.prototype.timeout = function (value) {
        this.setFlag("--timeout", value);
        return this;
    };
    /** Wait until updated with provisioningState at 'Succeeded'. */
    az_ams_live_event_wait_command_builder.prototype.updated = function (value) {
        this.setFlag("--updated", value);
        return this;
    };
    return az_ams_live_event_wait_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a live output.
 *
 * Syntax:
 * ```
 * az ams live-output create --account-name
 *                           --archive-window-length
 *                           --asset-name
 *                           --live-event-name
 *                           --name
 *                           --resource-group
 *                           [--description]
 *                           [--fragments-per-ts-segment]
 *                           [--manifest-name]
 *                           [--output-snap-time]
 *                           [--subscription]
 * ```
 *
 * @param {string} accountName The name of the Azure Media Services account.
 * @param {string} archiveWindowLength ISO 8601 timespan duration of the archive window length. This is the duration that customer want to retain the recorded content. Minimum window is 5 minutes (PT5M or 00:05:00). Maximum window is 25 hours (PT25H or 25:00:00). For example, to retain the output for 10 minutes, use PT10M or 00:10:00.
 * @param {string} assetName The name of the asset.
 * @param {string} liveEventName The name of the live event.
 * @param {string} name The name of the live output.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_ams_live_output_create_command_builder = /** @class */ (function (_super) {
    __extends(az_ams_live_output_create_command_builder, _super);
    function az_ams_live_output_create_command_builder(commandPath, resultDataTypeName, accountName, archiveWindowLength, assetName, liveEventName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.archiveWindowLength(archiveWindowLength);
        _this.assetName(assetName);
        _this.liveEventName(liveEventName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the Azure Media Services account. */
    az_ams_live_output_create_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** ISO 8601 timespan duration of the archive window length. This is the duration that customer want to retain the recorded content. Minimum window is 5 minutes (PT5M or 00:05:00). Maximum window is 25 hours (PT25H or 25:00:00). For example, to retain the output for 10 minutes, use PT10M or 00:10:00. */
    az_ams_live_output_create_command_builder.prototype.archiveWindowLength = function (value) {
        this.setFlag("--archive-window-length", value);
        return this;
    };
    /** The name of the asset. */
    az_ams_live_output_create_command_builder.prototype.assetName = function (value) {
        this.setFlag("--asset-name", value);
        return this;
    };
    /** The name of the live event. */
    az_ams_live_output_create_command_builder.prototype.liveEventName = function (value) {
        this.setFlag("--live-event-name", value);
        return this;
    };
    /** The name of the live output. */
    az_ams_live_output_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_ams_live_output_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The live output description. */
    az_ams_live_output_create_command_builder.prototype.description = function (value) {
        this.setFlag("--description", value);
        return this;
    };
    /** The number of fragments per HLS segment. */
    az_ams_live_output_create_command_builder.prototype.fragmentsPerTsSegment = function (value) {
        this.setFlag("--fragments-per-ts-segment", value);
        return this;
    };
    /** The manifest file name. If not provided, the service will generate one automatically. */
    az_ams_live_output_create_command_builder.prototype.manifestName = function (value) {
        this.setFlag("--manifest-name", value);
        return this;
    };
    /** The output snapshot time. */
    az_ams_live_output_create_command_builder.prototype.outputSnapTime = function (value) {
        this.setFlag("--output-snap-time", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_ams_live_output_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_ams_live_output_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a live output.
 *
 * Syntax:
 * ```
 * az ams live-output delete [--account-name]
 *                           [--ids]
 *                           [--live-event-name]
 *                           [--name]
 *                           [--resource-group]
 *                           [--subscription]
 * ```
 */
var az_ams_live_output_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_ams_live_output_delete_command_builder, _super);
    function az_ams_live_output_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The name of the Azure Media Services account. */
    az_ams_live_output_delete_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_ams_live_output_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the live event. */
    az_ams_live_output_delete_command_builder.prototype.liveEventName = function (value) {
        this.setFlag("--live-event-name", value);
        return this;
    };
    /** The name of the live output. */
    az_ams_live_output_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_ams_live_output_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_ams_live_output_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_ams_live_output_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List all the live outputs in a live event.
 *
 * Syntax:
 * ```
 * az ams live-output list --account-name
 *                         --live-event-name
 *                         --resource-group
 *                         [--query-examples]
 *                         [--subscription]
 * ```
 *
 * @param {string} accountName The name of the Azure Media Services account.
 * @param {string} liveEventName The name of the live event.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_ams_live_output_list_command_builder = /** @class */ (function (_super) {
    __extends(az_ams_live_output_list_command_builder, _super);
    function az_ams_live_output_list_command_builder(commandPath, resultDataTypeName, accountName, liveEventName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.liveEventName(liveEventName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the Azure Media Services account. */
    az_ams_live_output_list_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** The name of the live event. */
    az_ams_live_output_list_command_builder.prototype.liveEventName = function (value) {
        this.setFlag("--live-event-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_ams_live_output_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_ams_live_output_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_ams_live_output_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_ams_live_output_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Show the details of a live output.
 *
 * Syntax:
 * ```
 * az ams live-output show [--account-name]
 *                         [--ids]
 *                         [--live-event-name]
 *                         [--name]
 *                         [--query-examples]
 *                         [--resource-group]
 *                         [--subscription]
 * ```
 */
var az_ams_live_output_show_command_builder = /** @class */ (function (_super) {
    __extends(az_ams_live_output_show_command_builder, _super);
    function az_ams_live_output_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The name of the Azure Media Services account. */
    az_ams_live_output_show_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_ams_live_output_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the live event. */
    az_ams_live_output_show_command_builder.prototype.liveEventName = function (value) {
        this.setFlag("--live-event-name", value);
        return this;
    };
    /** The name of the live output. */
    az_ams_live_output_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_ams_live_output_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_ams_live_output_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_ams_live_output_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_ams_live_output_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Add an AkamaiAccessControl to an existing streaming endpoint.
 *
 * Syntax:
 * ```
 * az ams streaming-endpoint akamai add [--account-name]
 *                                      [--base64-key]
 *                                      [--expiration]
 *                                      [--identifier]
 *                                      [--ids]
 *                                      [--name]
 *                                      [--resource-group]
 *                                      [--subscription]
 * ```
 */
var az_ams_streaming_endpoint_akamai_add_command_builder = /** @class */ (function (_super) {
    __extends(az_ams_streaming_endpoint_akamai_add_command_builder, _super);
    function az_ams_streaming_endpoint_akamai_add_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The name of the Azure Media Services account. */
    az_ams_streaming_endpoint_akamai_add_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Base64-encoded authentication key that will be used by the CDN. The authentication key provided by Akamai is an ASCII encoded string, and must be converted to bytes and then base64 encoded. */
    az_ams_streaming_endpoint_akamai_add_command_builder.prototype.base64Key = function (value) {
        this.setFlag("--base64-key", value);
        return this;
    };
    /** The ISO 8601 DateTime value that specifies when the Akamai authentication expires. */
    az_ams_streaming_endpoint_akamai_add_command_builder.prototype.expiration = function (value) {
        this.setFlag("--expiration", value);
        return this;
    };
    /** The identifier for the authentication key. This is the nonce provided by Akamai. */
    az_ams_streaming_endpoint_akamai_add_command_builder.prototype.identifier = function (value) {
        this.setFlag("--identifier", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_ams_streaming_endpoint_akamai_add_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the streaming endpoint. */
    az_ams_streaming_endpoint_akamai_add_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_ams_streaming_endpoint_akamai_add_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_ams_streaming_endpoint_akamai_add_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_ams_streaming_endpoint_akamai_add_command_builder;
}(base_1.CommandBuilder));
/**
 * Remove an AkamaiAccessControl from an existing streaming endpoint.
 *
 * Syntax:
 * ```
 * az ams streaming-endpoint akamai remove --identifier
 *                                         [--account-name]
 *                                         [--ids]
 *                                         [--name]
 *                                         [--resource-group]
 *                                         [--subscription]
 * ```
 *
 * @param {string} identifier The identifier for the authentication key. This is the nonce provided by Akamai.
 */
var az_ams_streaming_endpoint_akamai_remove_command_builder = /** @class */ (function (_super) {
    __extends(az_ams_streaming_endpoint_akamai_remove_command_builder, _super);
    function az_ams_streaming_endpoint_akamai_remove_command_builder(commandPath, resultDataTypeName, identifier) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.identifier(identifier);
        return _this;
    }
    /** The identifier for the authentication key. This is the nonce provided by Akamai. */
    az_ams_streaming_endpoint_akamai_remove_command_builder.prototype.identifier = function (value) {
        this.setFlag("--identifier", value);
        return this;
    };
    /** The name of the Azure Media Services account. */
    az_ams_streaming_endpoint_akamai_remove_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_ams_streaming_endpoint_akamai_remove_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the streaming endpoint. */
    az_ams_streaming_endpoint_akamai_remove_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_ams_streaming_endpoint_akamai_remove_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_ams_streaming_endpoint_akamai_remove_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_ams_streaming_endpoint_akamai_remove_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a streaming endpoint.
 *
 * Syntax:
 * ```
 * az ams streaming-endpoint create --account-name
 *                                  --name
 *                                  --resource-group
 *                                  --scale-units
 *                                  [--auto-start]
 *                                  [--availability-set-name]
 *                                  [--cdn-profile]
 *                                  [--cdn-provider]
 *                                  [--client-access-policy]
 *                                  [--cross-domain-policy]
 *                                  [--custom-host-names]
 *                                  [--description]
 *                                  [--ips]
 *                                  [--max-cache-age]
 *                                  [--no-wait]
 *                                  [--subscription]
 *                                  [--tags]
 * ```
 *
 * @param {string} accountName The name of the Azure Media Services account.
 * @param {string} name The name of the streaming endpoint.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} scaleUnits The number of scale units for Premium StreamingEndpoints. For Standard StreamingEndpoints, set this value to 0. Use the Scale operation to adjust this value for Premium StreamingEndpoints.
 */
var az_ams_streaming_endpoint_create_command_builder = /** @class */ (function (_super) {
    __extends(az_ams_streaming_endpoint_create_command_builder, _super);
    function az_ams_streaming_endpoint_create_command_builder(commandPath, resultDataTypeName, accountName, name, resourceGroup, scaleUnits) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.scaleUnits(scaleUnits);
        return _this;
    }
    /** The name of the Azure Media Services account. */
    az_ams_streaming_endpoint_create_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** The name of the streaming endpoint. */
    az_ams_streaming_endpoint_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_ams_streaming_endpoint_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The number of scale units for Premium StreamingEndpoints. For Standard StreamingEndpoints, set this value to 0. Use the Scale operation to adjust this value for Premium StreamingEndpoints. */
    az_ams_streaming_endpoint_create_command_builder.prototype.scaleUnits = function (value) {
        this.setFlag("--scale-units", value);
        return this;
    };
    /** The flag indicates if the resource should be automatically started on creation. */
    az_ams_streaming_endpoint_create_command_builder.prototype.autoStart = function (value) {
        this.setFlag("--auto-start", value);
        return this;
    };
    /** The name of the AvailabilitySet used with this StreamingEndpoint for high availability streaming. This value can only be set at creation time. */
    az_ams_streaming_endpoint_create_command_builder.prototype.availabilitySetName = function (value) {
        this.setFlag("--availability-set-name", value);
        return this;
    };
    /** The CDN profile name. */
    az_ams_streaming_endpoint_create_command_builder.prototype.cdnProfile = function (value) {
        this.setFlag("--cdn-profile", value);
        return this;
    };
    /** The CDN provider name. Allowed values: StandardVerizon, PremiumVerizon, StandardAkamai. */
    az_ams_streaming_endpoint_create_command_builder.prototype.cdnProvider = function (value) {
        this.setFlag("--cdn-provider", value);
        return this;
    };
    /** The XML representing the clientaccesspolicy data used by Microsoft Silverlight and Adobe Flash. Use @{file} to load from a file. For further information about the XML structure please refer to documentation on <a href="https://docs.microsoft.com/rest/api/media/operations/crosssiteaccesspolicies">https://docs.microsoft.com/rest/api/media/operations/crosssiteaccesspolicies</a>. */
    az_ams_streaming_endpoint_create_command_builder.prototype.clientAccessPolicy = function (value) {
        this.setFlag("--client-access-policy", value);
        return this;
    };
    /** The XML representing the crossdomain data used by Silverlight. Use @{file} to load from a file. For further information about the XML structure please refer to documentation on <a href="https://docs.microsoft.com/rest/api/media/operations/crosssiteaccesspolicies">https://docs.microsoft.com/rest/api/media/operations/crosssiteaccesspolicies</a>. */
    az_ams_streaming_endpoint_create_command_builder.prototype.crossDomainPolicy = function (value) {
        this.setFlag("--cross-domain-policy", value);
        return this;
    };
    /** Space-separated list of custom host names for the streaming endpoint. Use "" to clear existing list. */
    az_ams_streaming_endpoint_create_command_builder.prototype.customHostNames = function (value) {
        this.setFlag("--custom-host-names", value);
        return this;
    };
    /** The streaming endpoint description. */
    az_ams_streaming_endpoint_create_command_builder.prototype.description = function (value) {
        this.setFlag("--description", value);
        return this;
    };
    /** Space-separated IP addresses for access control. Allowed IP addresses can be specified as either a single IP address (e.g. "10.0.0.1") or as an IP range using an IP address and a CIDR subnet mask (e.g. "10.0.0.1/22"). Use "" to clear existing list. If no IP addresses are specified any IP address will be allowed. */
    az_ams_streaming_endpoint_create_command_builder.prototype.ips = function (value) {
        this.setFlag("--ips", value);
        return this;
    };
    /** Max cache age. */
    az_ams_streaming_endpoint_create_command_builder.prototype.maxCacheAge = function (value) {
        this.setFlag("--max-cache-age", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_ams_streaming_endpoint_create_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_ams_streaming_endpoint_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_ams_streaming_endpoint_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_ams_streaming_endpoint_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a streaming endpoint.
 *
 * Syntax:
 * ```
 * az ams streaming-endpoint delete [--account-name]
 *                                  [--ids]
 *                                  [--name]
 *                                  [--resource-group]
 *                                  [--subscription]
 * ```
 */
var az_ams_streaming_endpoint_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_ams_streaming_endpoint_delete_command_builder, _super);
    function az_ams_streaming_endpoint_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The name of the Azure Media Services account. */
    az_ams_streaming_endpoint_delete_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_ams_streaming_endpoint_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the streaming endpoint. */
    az_ams_streaming_endpoint_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_ams_streaming_endpoint_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_ams_streaming_endpoint_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_ams_streaming_endpoint_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List all the streaming endpoints within an Azure Media Services account.
 *
 * Syntax:
 * ```
 * az ams streaming-endpoint list --account-name
 *                                --resource-group
 *                                [--query-examples]
 *                                [--subscription]
 * ```
 *
 * @param {string} accountName The name of the Azure Media Services account.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_ams_streaming_endpoint_list_command_builder = /** @class */ (function (_super) {
    __extends(az_ams_streaming_endpoint_list_command_builder, _super);
    function az_ams_streaming_endpoint_list_command_builder(commandPath, resultDataTypeName, accountName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the Azure Media Services account. */
    az_ams_streaming_endpoint_list_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_ams_streaming_endpoint_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_ams_streaming_endpoint_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_ams_streaming_endpoint_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_ams_streaming_endpoint_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Set the scale of a streaming endpoint.
 *
 * Syntax:
 * ```
 * az ams streaming-endpoint scale [--account-name]
 *                                 [--ids]
 *                                 [--name]
 *                                 [--resource-group]
 *                                 [--scale-units]
 *                                 [--subscription]
 * ```
 */
var az_ams_streaming_endpoint_scale_command_builder = /** @class */ (function (_super) {
    __extends(az_ams_streaming_endpoint_scale_command_builder, _super);
    function az_ams_streaming_endpoint_scale_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The name of the Azure Media Services account. */
    az_ams_streaming_endpoint_scale_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_ams_streaming_endpoint_scale_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the streaming endpoint. */
    az_ams_streaming_endpoint_scale_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_ams_streaming_endpoint_scale_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The number of scale units for Premium StreamingEndpoints. */
    az_ams_streaming_endpoint_scale_command_builder.prototype.scaleUnits = function (value) {
        this.setFlag("--scale-units", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_ams_streaming_endpoint_scale_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_ams_streaming_endpoint_scale_command_builder;
}(base_1.CommandBuilder));
/**
 * Show the details of a streaming endpoint.
 *
 * Syntax:
 * ```
 * az ams streaming-endpoint show [--account-name]
 *                                [--ids]
 *                                [--name]
 *                                [--query-examples]
 *                                [--resource-group]
 *                                [--subscription]
 * ```
 */
var az_ams_streaming_endpoint_show_command_builder = /** @class */ (function (_super) {
    __extends(az_ams_streaming_endpoint_show_command_builder, _super);
    function az_ams_streaming_endpoint_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The name of the Azure Media Services account. */
    az_ams_streaming_endpoint_show_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_ams_streaming_endpoint_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the streaming endpoint. */
    az_ams_streaming_endpoint_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_ams_streaming_endpoint_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_ams_streaming_endpoint_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_ams_streaming_endpoint_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_ams_streaming_endpoint_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Start a streaming endpoint.
 *
 * Syntax:
 * ```
 * az ams streaming-endpoint start [--account-name]
 *                                 [--ids]
 *                                 [--name]
 *                                 [--no-wait]
 *                                 [--resource-group]
 *                                 [--subscription]
 * ```
 */
var az_ams_streaming_endpoint_start_command_builder = /** @class */ (function (_super) {
    __extends(az_ams_streaming_endpoint_start_command_builder, _super);
    function az_ams_streaming_endpoint_start_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The name of the Azure Media Services account. */
    az_ams_streaming_endpoint_start_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_ams_streaming_endpoint_start_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the streaming endpoint. */
    az_ams_streaming_endpoint_start_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_ams_streaming_endpoint_start_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_ams_streaming_endpoint_start_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_ams_streaming_endpoint_start_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_ams_streaming_endpoint_start_command_builder;
}(base_1.CommandBuilder));
/**
 * Stop a streaming endpoint.
 *
 * Syntax:
 * ```
 * az ams streaming-endpoint stop [--account-name]
 *                                [--ids]
 *                                [--name]
 *                                [--no-wait]
 *                                [--resource-group]
 *                                [--subscription]
 * ```
 */
var az_ams_streaming_endpoint_stop_command_builder = /** @class */ (function (_super) {
    __extends(az_ams_streaming_endpoint_stop_command_builder, _super);
    function az_ams_streaming_endpoint_stop_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The name of the Azure Media Services account. */
    az_ams_streaming_endpoint_stop_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_ams_streaming_endpoint_stop_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the streaming endpoint. */
    az_ams_streaming_endpoint_stop_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_ams_streaming_endpoint_stop_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_ams_streaming_endpoint_stop_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_ams_streaming_endpoint_stop_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_ams_streaming_endpoint_stop_command_builder;
}(base_1.CommandBuilder));
/**
 * Update the details of a streaming endpoint.
 *
 * Syntax:
 * ```
 * az ams streaming-endpoint update [--account-name]
 *                                  [--add]
 *                                  [--cdn-profile]
 *                                  [--cdn-provider]
 *                                  [--client-access-policy]
 *                                  [--cross-domain-policy]
 *                                  [--custom-host-names]
 *                                  [--description]
 *                                  [--disable-cdn]
 *                                  [--force-string]
 *                                  [--ids]
 *                                  [--ips]
 *                                  [--max-cache-age]
 *                                  [--name]
 *                                  [--no-wait]
 *                                  [--remove]
 *                                  [--resource-group]
 *                                  [--set]
 *                                  [--subscription]
 *                                  [--tags]
 * ```
 */
var az_ams_streaming_endpoint_update_command_builder = /** @class */ (function (_super) {
    __extends(az_ams_streaming_endpoint_update_command_builder, _super);
    function az_ams_streaming_endpoint_update_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The name of the Azure Media Services account. */
    az_ams_streaming_endpoint_update_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_ams_streaming_endpoint_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** The CDN profile name. */
    az_ams_streaming_endpoint_update_command_builder.prototype.cdnProfile = function (value) {
        this.setFlag("--cdn-profile", value);
        return this;
    };
    /** The CDN provider name. Allowed values: StandardVerizon, PremiumVerizon, StandardAkamai. */
    az_ams_streaming_endpoint_update_command_builder.prototype.cdnProvider = function (value) {
        this.setFlag("--cdn-provider", value);
        return this;
    };
    /** The XML representing the clientaccesspolicy data used by Microsoft Silverlight and Adobe Flash. Use @{file} to load from a file. For further information about the XML structure please refer to documentation on <a href="https://docs.microsoft.com/rest/api/media/operations/crosssiteaccesspolicies">https://docs.microsoft.com/rest/api/media/operations/crosssiteaccesspolicies</a>. */
    az_ams_streaming_endpoint_update_command_builder.prototype.clientAccessPolicy = function (value) {
        this.setFlag("--client-access-policy", value);
        return this;
    };
    /** The XML representing the crossdomain data used by Silverlight. Use @{file} to load from a file. For further information about the XML structure please refer to documentation on <a href="https://docs.microsoft.com/rest/api/media/operations/crosssiteaccesspolicies">https://docs.microsoft.com/rest/api/media/operations/crosssiteaccesspolicies</a>. */
    az_ams_streaming_endpoint_update_command_builder.prototype.crossDomainPolicy = function (value) {
        this.setFlag("--cross-domain-policy", value);
        return this;
    };
    /** Space-separated list of custom host names for the streaming endpoint. Use "" to clear existing list. */
    az_ams_streaming_endpoint_update_command_builder.prototype.customHostNames = function (value) {
        this.setFlag("--custom-host-names", value);
        return this;
    };
    /** The streaming endpoint description. */
    az_ams_streaming_endpoint_update_command_builder.prototype.description = function (value) {
        this.setFlag("--description", value);
        return this;
    };
    /** Use this flag to disable CDN for the streaming endpoint. */
    az_ams_streaming_endpoint_update_command_builder.prototype.disableCdn = function (value) {
        this.setFlag("--disable-cdn", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_ams_streaming_endpoint_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_ams_streaming_endpoint_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Space-separated IP addresses for access control. Allowed IP addresses can be specified as either a single IP address (e.g. "10.0.0.1") or as an IP range using an IP address and a CIDR subnet mask (e.g. "10.0.0.1/22"). Use "" to clear existing list. If no IP addresses are specified any IP address will be allowed. */
    az_ams_streaming_endpoint_update_command_builder.prototype.ips = function (value) {
        this.setFlag("--ips", value);
        return this;
    };
    /** Max cache age. */
    az_ams_streaming_endpoint_update_command_builder.prototype.maxCacheAge = function (value) {
        this.setFlag("--max-cache-age", value);
        return this;
    };
    /** The name of the streaming endpoint. */
    az_ams_streaming_endpoint_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_ams_streaming_endpoint_update_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_ams_streaming_endpoint_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_ams_streaming_endpoint_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_ams_streaming_endpoint_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_ams_streaming_endpoint_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_ams_streaming_endpoint_update_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_ams_streaming_endpoint_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Place the CLI in a waiting state until a condition of the streaming endpoint is met.
 *
 * Syntax:
 * ```
 * az ams streaming-endpoint wait [--account-name]
 *                                [--created]
 *                                [--custom]
 *                                [--deleted]
 *                                [--exists]
 *                                [--ids]
 *                                [--interval]
 *                                [--name]
 *                                [--resource-group]
 *                                [--subscription]
 *                                [--timeout]
 *                                [--updated]
 * ```
 */
var az_ams_streaming_endpoint_wait_command_builder = /** @class */ (function (_super) {
    __extends(az_ams_streaming_endpoint_wait_command_builder, _super);
    function az_ams_streaming_endpoint_wait_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The name of the Azure Media Services account. */
    az_ams_streaming_endpoint_wait_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    az_ams_streaming_endpoint_wait_command_builder.prototype.created = function (value) {
        this.setFlag("--created", value);
        return this;
    };
    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    az_ams_streaming_endpoint_wait_command_builder.prototype.custom = function (value) {
        this.setFlag("--custom", value);
        return this;
    };
    /** Wait until deleted. */
    az_ams_streaming_endpoint_wait_command_builder.prototype.deleted = function (value) {
        this.setFlag("--deleted", value);
        return this;
    };
    /** Wait until the resource exists. */
    az_ams_streaming_endpoint_wait_command_builder.prototype.exists = function (value) {
        this.setFlag("--exists", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_ams_streaming_endpoint_wait_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Polling interval in seconds. */
    az_ams_streaming_endpoint_wait_command_builder.prototype.interval = function (value) {
        this.setFlag("--interval", value);
        return this;
    };
    /** The name of the streaming endpoint. */
    az_ams_streaming_endpoint_wait_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_ams_streaming_endpoint_wait_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_ams_streaming_endpoint_wait_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Maximum wait in seconds. */
    az_ams_streaming_endpoint_wait_command_builder.prototype.timeout = function (value) {
        this.setFlag("--timeout", value);
        return this;
    };
    /** Wait until updated with provisioningState at 'Succeeded'. */
    az_ams_streaming_endpoint_wait_command_builder.prototype.updated = function (value) {
        this.setFlag("--updated", value);
        return this;
    };
    return az_ams_streaming_endpoint_wait_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a streaming locator.
 *
 * Syntax:
 * ```
 * az ams streaming-locator create --account-name
 *                                 --asset-name
 *                                 --name
 *                                 --resource-group
 *                                 --streaming-policy-name
 *                                 [--alternative-media-id]
 *                                 [--content-key-policy-name]
 *                                 [--content-keys]
 *                                 [--end-time]
 *                                 [--filters]
 *                                 [--start-time]
 *                                 [--streaming-locator-id]
 *                                 [--subscription]
 * ```
 *
 * @param {string} accountName The name of the Azure Media Services account.
 * @param {string} assetName The name of the asset used by the streaming locator.
 * @param {string} name The name of the streaming locator.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} streamingPolicyName The name of the streaming policy used by the streaming locator. You can either create one with `az ams streaming policy create` or use any of the predefined policies: Predefined_DownloadOnly, Predefined_ClearStreamingOnly, Predefined_DownloadAndClearStreaming, Predefined_ClearKey, Predefined_MultiDrmCencStreaming, Predefined_MultiDrmStreaming.
 */
var az_ams_streaming_locator_create_command_builder = /** @class */ (function (_super) {
    __extends(az_ams_streaming_locator_create_command_builder, _super);
    function az_ams_streaming_locator_create_command_builder(commandPath, resultDataTypeName, accountName, assetName, name, resourceGroup, streamingPolicyName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.assetName(assetName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.streamingPolicyName(streamingPolicyName);
        return _this;
    }
    /** The name of the Azure Media Services account. */
    az_ams_streaming_locator_create_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** The name of the asset used by the streaming locator. */
    az_ams_streaming_locator_create_command_builder.prototype.assetName = function (value) {
        this.setFlag("--asset-name", value);
        return this;
    };
    /** The name of the streaming locator. */
    az_ams_streaming_locator_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_ams_streaming_locator_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the streaming policy used by the streaming locator. You can either create one with `az ams streaming policy create` or use any of the predefined policies: Predefined_DownloadOnly, Predefined_ClearStreamingOnly, Predefined_DownloadAndClearStreaming, Predefined_ClearKey, Predefined_MultiDrmCencStreaming, Predefined_MultiDrmStreaming. */
    az_ams_streaming_locator_create_command_builder.prototype.streamingPolicyName = function (value) {
        this.setFlag("--streaming-policy-name", value);
        return this;
    };
    /** An alternative media identifier associated with the streaming locator. */
    az_ams_streaming_locator_create_command_builder.prototype.alternativeMediaId = function (value) {
        this.setFlag("--alternative-media-id", value);
        return this;
    };
    /** The default content key policy name used by the streaming locator. */
    az_ams_streaming_locator_create_command_builder.prototype.contentKeyPolicyName = function (value) {
        this.setFlag("--content-key-policy-name", value);
        return this;
    };
    /** JSON string with the content keys to be used by the streaming locator. Use @{file} to load from a file. For further information about the JSON structure please refer to swagger documentation on <a href="https://docs.microsoft.com/rest/api/media/streaminglocators/create#streaminglocatorcontentkey">https://docs.microsoft.com/rest/api/media/streaminglocators/create#streaminglocatorcontentkey</a>. */
    az_ams_streaming_locator_create_command_builder.prototype.contentKeys = function (value) {
        this.setFlag("--content-keys", value);
        return this;
    };
    /** The ISO 8601 DateTime end time (Y-m-d'T'H:M:S'Z') of the streaming locator. */
    az_ams_streaming_locator_create_command_builder.prototype.endTime = function (value) {
        this.setFlag("--end-time", value);
        return this;
    };
    /** A space-separated list of asset filter names and/or account filter names. */
    az_ams_streaming_locator_create_command_builder.prototype.filters = function (value) {
        this.setFlag("--filters", value);
        return this;
    };
    /** The ISO 8601 DateTime start time (Y-m-d'T'H:M:S'Z') of the streaming locator. */
    az_ams_streaming_locator_create_command_builder.prototype.startTime = function (value) {
        this.setFlag("--start-time", value);
        return this;
    };
    /** The identifier of the streaming locator. */
    az_ams_streaming_locator_create_command_builder.prototype.streamingLocatorId = function (value) {
        this.setFlag("--streaming-locator-id", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_ams_streaming_locator_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_ams_streaming_locator_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a Streaming Locator.
 *
 * Syntax:
 * ```
 * az ams streaming-locator delete [--account-name]
 *                                 [--ids]
 *                                 [--name]
 *                                 [--resource-group]
 *                                 [--subscription]
 * ```
 */
var az_ams_streaming_locator_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_ams_streaming_locator_delete_command_builder, _super);
    function az_ams_streaming_locator_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The name of the Azure Media Services account. */
    az_ams_streaming_locator_delete_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_ams_streaming_locator_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the streaming locator. */
    az_ams_streaming_locator_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_ams_streaming_locator_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_ams_streaming_locator_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_ams_streaming_locator_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List paths supported by a streaming locator.
 *
 * Syntax:
 * ```
 * az ams streaming-locator get-paths [--account-name]
 *                                    [--ids]
 *                                    [--name]
 *                                    [--resource-group]
 *                                    [--subscription]
 * ```
 */
var az_ams_streaming_locator_get_paths_command_builder = /** @class */ (function (_super) {
    __extends(az_ams_streaming_locator_get_paths_command_builder, _super);
    function az_ams_streaming_locator_get_paths_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The name of the Azure Media Services account. */
    az_ams_streaming_locator_get_paths_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_ams_streaming_locator_get_paths_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the streaming locator. */
    az_ams_streaming_locator_get_paths_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_ams_streaming_locator_get_paths_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_ams_streaming_locator_get_paths_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_ams_streaming_locator_get_paths_command_builder;
}(base_1.CommandBuilder));
/**
 * List all the streaming locators within an Azure Media Services account.
 *
 * Syntax:
 * ```
 * az ams streaming-locator list --account-name
 *                               --resource-group
 *                               [--filter]
 *                               [--orderby]
 *                               [--query-examples]
 *                               [--subscription]
 *                               [--top]
 * ```
 *
 * @param {string} accountName The name of the Azure Media Services account.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_ams_streaming_locator_list_command_builder = /** @class */ (function (_super) {
    __extends(az_ams_streaming_locator_list_command_builder, _super);
    function az_ams_streaming_locator_list_command_builder(commandPath, resultDataTypeName, accountName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the Azure Media Services account. */
    az_ams_streaming_locator_list_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_ams_streaming_locator_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Restricts the set of items returned. */
    az_ams_streaming_locator_list_command_builder.prototype.filter = function (value) {
        this.setFlag("--filter", value);
        return this;
    };
    /** Specifies the key by which the result collection should be ordered. */
    az_ams_streaming_locator_list_command_builder.prototype.orderby = function (value) {
        this.setFlag("--orderby", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_ams_streaming_locator_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_ams_streaming_locator_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Specifies a non-negative integer n that limits the number of items returned from a collection. The service returns the number of available items up to but not greater than the specified value n. */
    az_ams_streaming_locator_list_command_builder.prototype.top = function (value) {
        this.setFlag("--top", value);
        return this;
    };
    return az_ams_streaming_locator_list_command_builder;
}(base_1.CommandBuilder));
/**
 * List content keys used by a streaming locator.
 *
 * Syntax:
 * ```
 * az ams streaming-locator list-content-keys [--account-name]
 *                                            [--ids]
 *                                            [--name]
 *                                            [--resource-group]
 *                                            [--subscription]
 * ```
 */
var az_ams_streaming_locator_list_content_keys_command_builder = /** @class */ (function (_super) {
    __extends(az_ams_streaming_locator_list_content_keys_command_builder, _super);
    function az_ams_streaming_locator_list_content_keys_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The name of the Azure Media Services account. */
    az_ams_streaming_locator_list_content_keys_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_ams_streaming_locator_list_content_keys_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the streaming locator. */
    az_ams_streaming_locator_list_content_keys_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_ams_streaming_locator_list_content_keys_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_ams_streaming_locator_list_content_keys_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_ams_streaming_locator_list_content_keys_command_builder;
}(base_1.CommandBuilder));
/**
 * Show the details of a streaming locator.
 *
 * Syntax:
 * ```
 * az ams streaming-locator show [--account-name]
 *                               [--ids]
 *                               [--name]
 *                               [--query-examples]
 *                               [--resource-group]
 *                               [--subscription]
 * ```
 */
var az_ams_streaming_locator_show_command_builder = /** @class */ (function (_super) {
    __extends(az_ams_streaming_locator_show_command_builder, _super);
    function az_ams_streaming_locator_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The name of the Azure Media Services account. */
    az_ams_streaming_locator_show_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_ams_streaming_locator_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the streaming locator. */
    az_ams_streaming_locator_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_ams_streaming_locator_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_ams_streaming_locator_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_ams_streaming_locator_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_ams_streaming_locator_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a streaming policy.
 *
 * Syntax:
 * ```
 * az ams streaming-policy create --account-name
 *                                --name
 *                                --resource-group
 *                                [--cbcs-clear-tracks]
 *                                [--cbcs-default-key-label]
 *                                [--cbcs-default-key-policy-name]
 *                                [--cbcs-fair-play-allow-persistent-license {false, true}]
 *                                [--cbcs-fair-play-template]
 *                                [--cbcs-key-to-track-mappings]
 *                                [--cbcs-play-ready-attributes]
 *                                [--cbcs-play-ready-template]
 *                                [--cbcs-protocols]
 *                                [--cbcs-widevine-template]
 *                                [--cenc-clear-tracks]
 *                                [--cenc-default-key-label]
 *                                [--cenc-default-key-policy-name]
 *                                [--cenc-disable-play-ready {false, true}]
 *                                [--cenc-disable-widevine {false, true}]
 *                                [--cenc-key-to-track-mappings]
 *                                [--cenc-play-ready-attributes]
 *                                [--cenc-play-ready-template]
 *                                [--cenc-protocols]
 *                                [--cenc-widevine-template]
 *                                [--default-content-key-policy-name]
 *                                [--envelope-clear-tracks]
 *                                [--envelope-default-key-label]
 *                                [--envelope-default-key-policy-name]
 *                                [--envelope-key-to-track-mappings]
 *                                [--envelope-protocols]
 *                                [--envelope-template]
 *                                [--no-encryption-protocols]
 *                                [--subscription]
 * ```
 *
 * @param {string} accountName The name of the Azure Media Services account.
 * @param {string} name The name of the streaming policy.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_ams_streaming_policy_create_command_builder = /** @class */ (function (_super) {
    __extends(az_ams_streaming_policy_create_command_builder, _super);
    function az_ams_streaming_policy_create_command_builder(commandPath, resultDataTypeName, accountName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the Azure Media Services account. */
    az_ams_streaming_policy_create_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** The name of the streaming policy. */
    az_ams_streaming_policy_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_ams_streaming_policy_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The JSON representing which tracks should not be encrypted. Use @{file} to load from a file. For further information about the JSON structure please refer to swagger documentation on <a href="https://docs.microsoft.com/rest/api/media/streamingpolicies/create#trackselection">https://docs.microsoft.com/rest/api/media/streamingpolicies/create#trackselection</a>. */
    az_ams_streaming_policy_create_command_builder.prototype.cbcsClearTracks = function (value) {
        this.setFlag("--cbcs-clear-tracks", value);
        return this;
    };
    /** Label to specify Default Content Key for an encryption scheme. */
    az_ams_streaming_policy_create_command_builder.prototype.cbcsDefaultKeyLabel = function (value) {
        this.setFlag("--cbcs-default-key-label", value);
        return this;
    };
    /** Policy used by Default Content Key. */
    az_ams_streaming_policy_create_command_builder.prototype.cbcsDefaultKeyPolicyName = function (value) {
        this.setFlag("--cbcs-default-key-policy-name", value);
        return this;
    };
    /** Allows the license to be persistent or not. */
    az_ams_streaming_policy_create_command_builder.prototype.cbcsFairPlayAllowPersistentLicense = function (value) {
        this.setFlag("--cbcs-fair-play-allow-persistent-license", value.toString());
        return this;
    };
    /** The custom license acquisition URL template for a customer service to deliver keys to end users. Not needed when using Azure Media Services for issuing keys. */
    az_ams_streaming_policy_create_command_builder.prototype.cbcsFairPlayTemplate = function (value) {
        this.setFlag("--cbcs-fair-play-template", value);
        return this;
    };
    /** The JSON representing a list of StreamingPolicyContentKey. Use @{file} to load from a file. For further information about the JSON structure please refer to swagger documentation on <a href="https://docs.microsoft.com/rest/api/media/streamingpolicies/create#streamingpolicycontentkey">https://docs.microsoft.com/rest/api/media/streamingpolicies/create#streamingpolicycontentkey</a>. */
    az_ams_streaming_policy_create_command_builder.prototype.cbcsKeyToTrackMappings = function (value) {
        this.setFlag("--cbcs-key-to-track-mappings", value);
        return this;
    };
    /** Custom attributes for PlayReady. */
    az_ams_streaming_policy_create_command_builder.prototype.cbcsPlayReadyAttributes = function (value) {
        this.setFlag("--cbcs-play-ready-attributes", value);
        return this;
    };
    /** The custom license acquisition URL template for a customer service to deliver keys to end users. Not needed when using Azure Media Services for issuing keys. */
    az_ams_streaming_policy_create_command_builder.prototype.cbcsPlayReadyTemplate = function (value) {
        this.setFlag("--cbcs-play-ready-template", value);
        return this;
    };
    /** Space-separated list of enabled protocols for Common Encryption CBCS. Allowed values: Download, Dash, HLS, SmoothStreaming. */
    az_ams_streaming_policy_create_command_builder.prototype.cbcsProtocols = function (value) {
        this.setFlag("--cbcs-protocols", value);
        return this;
    };
    /** The custom license acquisition URL template for a customer service to deliver keys to end users. Not needed when using Azure Media Services for issuing keys. */
    az_ams_streaming_policy_create_command_builder.prototype.cbcsWidevineTemplate = function (value) {
        this.setFlag("--cbcs-widevine-template", value);
        return this;
    };
    /** The JSON representing which tracks should not be encrypted. Use @{file} to load from a file. For further information about the JSON structure please refer to swagger documentation on <a href="https://docs.microsoft.com/rest/api/media/streamingpolicies/create#trackselection">https://docs.microsoft.com/rest/api/media/streamingpolicies/create#trackselection</a>. */
    az_ams_streaming_policy_create_command_builder.prototype.cencClearTracks = function (value) {
        this.setFlag("--cenc-clear-tracks", value);
        return this;
    };
    /** Label to specify Default Content Key for an encryption scheme. */
    az_ams_streaming_policy_create_command_builder.prototype.cencDefaultKeyLabel = function (value) {
        this.setFlag("--cenc-default-key-label", value);
        return this;
    };
    /** Policy used by Default Content Key. */
    az_ams_streaming_policy_create_command_builder.prototype.cencDefaultKeyPolicyName = function (value) {
        this.setFlag("--cenc-default-key-policy-name", value);
        return this;
    };
    /** If specified, no PlayReady cenc DRM will be configured. If --cenc-disable-play-ready is set, --cenc-disable-widevine cannot also be set. */
    az_ams_streaming_policy_create_command_builder.prototype.cencDisablePlayReady = function (value) {
        this.setFlag("--cenc-disable-play-ready", value.toString());
        return this;
    };
    /** If specified, no Widevine cenc DRM will be configured. If --cenc-disable-widevine is set, --cenc-disable-play-ready cannot also be set. */
    az_ams_streaming_policy_create_command_builder.prototype.cencDisableWidevine = function (value) {
        this.setFlag("--cenc-disable-widevine", value.toString());
        return this;
    };
    /** The JSON representing a list of StreamingPolicyContentKey. Use @{file} to load from a file. For further information about the JSON structure please refer to swagger documentation on <a href="https://docs.microsoft.com/rest/api/media/streamingpolicies/create#streamingpolicycontentkey">https://docs.microsoft.com/rest/api/media/streamingpolicies/create#streamingpolicycontentkey</a>. */
    az_ams_streaming_policy_create_command_builder.prototype.cencKeyToTrackMappings = function (value) {
        this.setFlag("--cenc-key-to-track-mappings", value);
        return this;
    };
    /** Custom attributes for PlayReady. */
    az_ams_streaming_policy_create_command_builder.prototype.cencPlayReadyAttributes = function (value) {
        this.setFlag("--cenc-play-ready-attributes", value);
        return this;
    };
    /** The custom license acquisition URL template for a customer service to deliver keys to end users. Not needed when using Azure Media Services for issuing keys. */
    az_ams_streaming_policy_create_command_builder.prototype.cencPlayReadyTemplate = function (value) {
        this.setFlag("--cenc-play-ready-template", value);
        return this;
    };
    /** Space-separated list of enabled protocols for Common Encryption CENC. Allowed values: Download, Dash, HLS, SmoothStreaming. */
    az_ams_streaming_policy_create_command_builder.prototype.cencProtocols = function (value) {
        this.setFlag("--cenc-protocols", value);
        return this;
    };
    /** The custom license acquisition URL template for a customer service to deliver keys to end users. Not needed when using Azure Media Services for issuing keys. */
    az_ams_streaming_policy_create_command_builder.prototype.cencWidevineTemplate = function (value) {
        this.setFlag("--cenc-widevine-template", value);
        return this;
    };
    /** Default Content Key used by current streaming policy. */
    az_ams_streaming_policy_create_command_builder.prototype.defaultContentKeyPolicyName = function (value) {
        this.setFlag("--default-content-key-policy-name", value);
        return this;
    };
    /** The JSON representing which tracks should not be encrypted. Use @{file} to load from a file. For further information about the JSON structure please refer to swagger documentation on <a href="https://docs.microsoft.com/rest/api/media/streamingpolicies/create#trackselection">https://docs.microsoft.com/rest/api/media/streamingpolicies/create#trackselection</a>. */
    az_ams_streaming_policy_create_command_builder.prototype.envelopeClearTracks = function (value) {
        this.setFlag("--envelope-clear-tracks", value);
        return this;
    };
    /** Label used to specify Content Key when creating a streaming locator. */
    az_ams_streaming_policy_create_command_builder.prototype.envelopeDefaultKeyLabel = function (value) {
        this.setFlag("--envelope-default-key-label", value);
        return this;
    };
    /** Policy used by Default Key. */
    az_ams_streaming_policy_create_command_builder.prototype.envelopeDefaultKeyPolicyName = function (value) {
        this.setFlag("--envelope-default-key-policy-name", value);
        return this;
    };
    /** The JSON representing a list of StreamingPolicyContentKey. Use @{file} to load from a file. For further information about the JSON structure please refer to swagger documentation on <a href="https://docs.microsoft.com/rest/api/media/streamingpolicies/create#streamingpolicycontentkey">https://docs.microsoft.com/rest/api/media/streamingpolicies/create#streamingpolicycontentkey</a>. */
    az_ams_streaming_policy_create_command_builder.prototype.envelopeKeyToTrackMappings = function (value) {
        this.setFlag("--envelope-key-to-track-mappings", value);
        return this;
    };
    /** Space-separated list of enabled protocols for Envelope Encryption. Allowed values: Download, Dash, HLS, SmoothStreaming. */
    az_ams_streaming_policy_create_command_builder.prototype.envelopeProtocols = function (value) {
        this.setFlag("--envelope-protocols", value);
        return this;
    };
    /** The KeyAcquistionUrlTemplate is used to point to user specified service to delivery content keys. */
    az_ams_streaming_policy_create_command_builder.prototype.envelopeTemplate = function (value) {
        this.setFlag("--envelope-template", value);
        return this;
    };
    /** Space-separated list of enabled protocols for NoEncryption. Allowed values: Download, Dash, HLS, SmoothStreaming. */
    az_ams_streaming_policy_create_command_builder.prototype.noEncryptionProtocols = function (value) {
        this.setFlag("--no-encryption-protocols", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_ams_streaming_policy_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_ams_streaming_policy_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a Streaming Policy.
 *
 * Syntax:
 * ```
 * az ams streaming-policy delete [--account-name]
 *                                [--ids]
 *                                [--name]
 *                                [--resource-group]
 *                                [--subscription]
 * ```
 */
var az_ams_streaming_policy_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_ams_streaming_policy_delete_command_builder, _super);
    function az_ams_streaming_policy_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The name of the Azure Media Services account. */
    az_ams_streaming_policy_delete_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_ams_streaming_policy_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the streaming policy. */
    az_ams_streaming_policy_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_ams_streaming_policy_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_ams_streaming_policy_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_ams_streaming_policy_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List all the streaming policies within an Azure Media Services account.
 *
 * Syntax:
 * ```
 * az ams streaming-policy list --account-name
 *                              --resource-group
 *                              [--filter]
 *                              [--orderby]
 *                              [--query-examples]
 *                              [--subscription]
 *                              [--top]
 * ```
 *
 * @param {string} accountName The name of the Azure Media Services account.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_ams_streaming_policy_list_command_builder = /** @class */ (function (_super) {
    __extends(az_ams_streaming_policy_list_command_builder, _super);
    function az_ams_streaming_policy_list_command_builder(commandPath, resultDataTypeName, accountName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the Azure Media Services account. */
    az_ams_streaming_policy_list_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_ams_streaming_policy_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Restricts the set of items returned. */
    az_ams_streaming_policy_list_command_builder.prototype.filter = function (value) {
        this.setFlag("--filter", value);
        return this;
    };
    /** Specifies the key by which the result collection should be ordered. */
    az_ams_streaming_policy_list_command_builder.prototype.orderby = function (value) {
        this.setFlag("--orderby", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_ams_streaming_policy_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_ams_streaming_policy_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Specifies a non-negative integer n that limits the number of items returned from a collection. The service returns the number of available items up to but not greater than the specified value n. */
    az_ams_streaming_policy_list_command_builder.prototype.top = function (value) {
        this.setFlag("--top", value);
        return this;
    };
    return az_ams_streaming_policy_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Show the details of a streaming policy.
 *
 * Syntax:
 * ```
 * az ams streaming-policy show [--account-name]
 *                              [--ids]
 *                              [--name]
 *                              [--query-examples]
 *                              [--resource-group]
 *                              [--subscription]
 * ```
 */
var az_ams_streaming_policy_show_command_builder = /** @class */ (function (_super) {
    __extends(az_ams_streaming_policy_show_command_builder, _super);
    function az_ams_streaming_policy_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The name of the Azure Media Services account. */
    az_ams_streaming_policy_show_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_ams_streaming_policy_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the streaming policy. */
    az_ams_streaming_policy_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_ams_streaming_policy_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_ams_streaming_policy_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_ams_streaming_policy_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_ams_streaming_policy_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Add an output to an existing transform.
 *
 * Syntax:
 * ```
 * az ams transform output add --preset
 *                             [--account-name]
 *                             [--audio-language]
 *                             [--ids]
 *                             [--insights-to-extract {AllInsights, AudioInsightsOnly, VideoInsightsOnly}]
 *                             [--name]
 *                             [--on-error {ContinueJob, StopProcessingJob}]
 *                             [--relative-priority {High, Low, Normal}]
 *                             [--resolution]
 *                             [--resource-group]
 *                             [--subscription]
 * ```
 *
 * @param {string} preset Preset that describes the operations that will be used to modify, transcode, or extract insights from the source file to generate the transform output. Allowed values: H264SingleBitrateSD, H264SingleBitrate720p, H264SingleBitrate1080p, AdaptiveStreaming, AACGoodQualityAudio, ContentAwareEncodingExperimental, ContentAwareEncoding, H264MultipleBitrate1080p, H264MultipleBitrate720p, H264MultipleBitrateSD, AudioAnalyzer, VideoAnalyzer, FaceDetector. In addition to the allowed values, you can also pass a path to a custom Standard Encoder preset JSON file. See <a href="https://docs.microsoft.com/rest/api/media/transforms/createorupdate#standardencoderpreset">https://docs.microsoft.com/rest/api/media/transforms/createorupdate#standardencoderpreset</a> for further details on the settings to use to build a custom preset.
 */
var az_ams_transform_output_add_command_builder = /** @class */ (function (_super) {
    __extends(az_ams_transform_output_add_command_builder, _super);
    function az_ams_transform_output_add_command_builder(commandPath, resultDataTypeName, preset) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.preset(preset);
        return _this;
    }
    /** Preset that describes the operations that will be used to modify, transcode, or extract insights from the source file to generate the transform output. Allowed values: H264SingleBitrateSD, H264SingleBitrate720p, H264SingleBitrate1080p, AdaptiveStreaming, AACGoodQualityAudio, ContentAwareEncodingExperimental, ContentAwareEncoding, H264MultipleBitrate1080p, H264MultipleBitrate720p, H264MultipleBitrateSD, AudioAnalyzer, VideoAnalyzer, FaceDetector. In addition to the allowed values, you can also pass a path to a custom Standard Encoder preset JSON file. See <a href="https://docs.microsoft.com/rest/api/media/transforms/createorupdate#standardencoderpreset">https://docs.microsoft.com/rest/api/media/transforms/createorupdate#standardencoderpreset</a> for further details on the settings to use to build a custom preset. */
    az_ams_transform_output_add_command_builder.prototype.preset = function (value) {
        this.setFlag("--preset", value);
        return this;
    };
    /** The name of the Azure Media Services account. */
    az_ams_transform_output_add_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** The language for the audio payload in the input using the BCP-47 format of "language tag-region" (e.g: en-US). If not specified, automatic language detection would be employed. This feature currently supports English, Chinese, French, German, Italian, Japanese, Spanish, Russian, and Portuguese. The automatic detection works best with audio recordings with clearly discernable speech. If automatic detection fails to find the language, transcription would fallback to English. Allowed values: en-US, en-GB, es-ES, es-MX, fr-FR, it-IT, ja-JP, pt-BR, zh-CN, de-DE, ar-EG, ru-RU, hi-IN. */
    az_ams_transform_output_add_command_builder.prototype.audioLanguage = function (value) {
        this.setFlag("--audio-language", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_ams_transform_output_add_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The type of insights to be extracted. If not set then the type will be selected based on the content type. If the content is audio only then only audio insights will be extracted and if it is video only video insights will be extracted. */
    az_ams_transform_output_add_command_builder.prototype.insightsToExtract = function (value) {
        this.setFlag("--insights-to-extract", value);
        return this;
    };
    /** The name of the transform. */
    az_ams_transform_output_add_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** A Transform can define more than one output. This property defines what the service should do when one output fails - either continue to produce other outputs, or, stop the other outputs. The overall Job state will not reflect failures of outputs that are specified with 'ContinueJob'. The default is 'StopProcessingJob'. */
    az_ams_transform_output_add_command_builder.prototype.onError = function (value) {
        this.setFlag("--on-error", value);
        return this;
    };
    /** Sets the relative priority of the transform outputs within a transform. This sets the priority that the service uses for processing TransformOutputs. The default priority is Normal. */
    az_ams_transform_output_add_command_builder.prototype.relativePriority = function (value) {
        this.setFlag("--relative-priority", value);
        return this;
    };
    /** Specifies the maximum resolution at which your video is analyzed. The default behavior is "SourceResolution," which will keep the input video at its original resolution when analyzed. Using StandardDefinition will resize input videos to standard definition while preserving the appropriate aspect ratio. It will only resize if the video is of higher resolution. For example, a 1920x1080 input would be scaled to 640x360 before processing. Switching to "StandardDefinition" will reduce the time it takes to process high resolution video. It may also reduce the cost of using this component (see <a href="https://azure.microsoft.com/en-us/pricing/details/media-services/#analytics">https://azure.microsoft.com/en-us/pricing/details/media-services/#analytics</a> for details). However, faces that end up being too small in the resized video may not be detected. Allowed values: StandardDefinition, SourceResolution. */
    az_ams_transform_output_add_command_builder.prototype.resolution = function (value) {
        this.setFlag("--resolution", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_ams_transform_output_add_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_ams_transform_output_add_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_ams_transform_output_add_command_builder;
}(base_1.CommandBuilder));
/**
 * Remove an output from an existing transform.
 *
 * Syntax:
 * ```
 * az ams transform output remove --output-index
 *                                [--account-name]
 *                                [--ids]
 *                                [--name]
 *                                [--resource-group]
 *                                [--subscription]
 * ```
 *
 * @param {string} outputIndex The element index of the output to remove.
 */
var az_ams_transform_output_remove_command_builder = /** @class */ (function (_super) {
    __extends(az_ams_transform_output_remove_command_builder, _super);
    function az_ams_transform_output_remove_command_builder(commandPath, resultDataTypeName, outputIndex) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.outputIndex(outputIndex);
        return _this;
    }
    /** The element index of the output to remove. */
    az_ams_transform_output_remove_command_builder.prototype.outputIndex = function (value) {
        this.setFlag("--output-index", value);
        return this;
    };
    /** The name of the Azure Media Services account. */
    az_ams_transform_output_remove_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_ams_transform_output_remove_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the transform. */
    az_ams_transform_output_remove_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_ams_transform_output_remove_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_ams_transform_output_remove_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_ams_transform_output_remove_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a transform.
 *
 * Syntax:
 * ```
 * az ams transform create --account-name
 *                         --name
 *                         --preset
 *                         --resource-group
 *                         [--audio-language]
 *                         [--description]
 *                         [--insights-to-extract {AllInsights, AudioInsightsOnly, VideoInsightsOnly}]
 *                         [--on-error {ContinueJob, StopProcessingJob}]
 *                         [--relative-priority {High, Low, Normal}]
 *                         [--resolution]
 *                         [--subscription]
 * ```
 *
 * @param {string} accountName The name of the Azure Media Services account.
 * @param {string} name The name of the transform.
 * @param {string} preset Preset that describes the operations that will be used to modify, transcode, or extract insights from the source file to generate the transform output. Allowed values: H264SingleBitrateSD, H264SingleBitrate720p, H264SingleBitrate1080p, AdaptiveStreaming, AACGoodQualityAudio, ContentAwareEncodingExperimental, ContentAwareEncoding, H264MultipleBitrate1080p, H264MultipleBitrate720p, H264MultipleBitrateSD, AudioAnalyzer, VideoAnalyzer, FaceDetector. In addition to the allowed values, you can also pass a path to a custom Standard Encoder preset JSON file. See <a href="https://docs.microsoft.com/rest/api/media/transforms/createorupdate#standardencoderpreset">https://docs.microsoft.com/rest/api/media/transforms/createorupdate#standardencoderpreset</a> for further details on the settings to use to build a custom preset.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_ams_transform_create_command_builder = /** @class */ (function (_super) {
    __extends(az_ams_transform_create_command_builder, _super);
    function az_ams_transform_create_command_builder(commandPath, resultDataTypeName, accountName, name, preset, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.name(name);
        _this.preset(preset);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the Azure Media Services account. */
    az_ams_transform_create_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** The name of the transform. */
    az_ams_transform_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Preset that describes the operations that will be used to modify, transcode, or extract insights from the source file to generate the transform output. Allowed values: H264SingleBitrateSD, H264SingleBitrate720p, H264SingleBitrate1080p, AdaptiveStreaming, AACGoodQualityAudio, ContentAwareEncodingExperimental, ContentAwareEncoding, H264MultipleBitrate1080p, H264MultipleBitrate720p, H264MultipleBitrateSD, AudioAnalyzer, VideoAnalyzer, FaceDetector. In addition to the allowed values, you can also pass a path to a custom Standard Encoder preset JSON file. See <a href="https://docs.microsoft.com/rest/api/media/transforms/createorupdate#standardencoderpreset">https://docs.microsoft.com/rest/api/media/transforms/createorupdate#standardencoderpreset</a> for further details on the settings to use to build a custom preset. */
    az_ams_transform_create_command_builder.prototype.preset = function (value) {
        this.setFlag("--preset", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_ams_transform_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The language for the audio payload in the input using the BCP-47 format of "language tag-region" (e.g: en-US). If not specified, automatic language detection would be employed. This feature currently supports English, Chinese, French, German, Italian, Japanese, Spanish, Russian, and Portuguese. The automatic detection works best with audio recordings with clearly discernable speech. If automatic detection fails to find the language, transcription would fallback to English. Allowed values: en-US, en-GB, es-ES, es-MX, fr-FR, it-IT, ja-JP, pt-BR, zh-CN, de-DE, ar-EG, ru-RU, hi-IN. */
    az_ams_transform_create_command_builder.prototype.audioLanguage = function (value) {
        this.setFlag("--audio-language", value);
        return this;
    };
    /** The description of the transform. */
    az_ams_transform_create_command_builder.prototype.description = function (value) {
        this.setFlag("--description", value);
        return this;
    };
    /** The type of insights to be extracted. If not set then the type will be selected based on the content type. If the content is audio only then only audio insights will be extracted and if it is video only video insights will be extracted. */
    az_ams_transform_create_command_builder.prototype.insightsToExtract = function (value) {
        this.setFlag("--insights-to-extract", value);
        return this;
    };
    /** A Transform can define more than one output. This property defines what the service should do when one output fails - either continue to produce other outputs, or, stop the other outputs. The overall Job state will not reflect failures of outputs that are specified with 'ContinueJob'. The default is 'StopProcessingJob'. */
    az_ams_transform_create_command_builder.prototype.onError = function (value) {
        this.setFlag("--on-error", value);
        return this;
    };
    /** Sets the relative priority of the transform outputs within a transform. This sets the priority that the service uses for processing TransformOutputs. The default priority is Normal. */
    az_ams_transform_create_command_builder.prototype.relativePriority = function (value) {
        this.setFlag("--relative-priority", value);
        return this;
    };
    /** Specifies the maximum resolution at which your video is analyzed. The default behavior is "SourceResolution," which will keep the input video at its original resolution when analyzed. Using StandardDefinition will resize input videos to standard definition while preserving the appropriate aspect ratio. It will only resize if the video is of higher resolution. For example, a 1920x1080 input would be scaled to 640x360 before processing. Switching to "StandardDefinition" will reduce the time it takes to process high resolution video. It may also reduce the cost of using this component (see <a href="https://azure.microsoft.com/en-us/pricing/details/media-services/#analytics">https://azure.microsoft.com/en-us/pricing/details/media-services/#analytics</a> for details). However, faces that end up being too small in the resized video may not be detected. Allowed values: StandardDefinition, SourceResolution. */
    az_ams_transform_create_command_builder.prototype.resolution = function (value) {
        this.setFlag("--resolution", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_ams_transform_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_ams_transform_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a transform.
 *
 * Syntax:
 * ```
 * az ams transform delete [--account-name]
 *                         [--ids]
 *                         [--name]
 *                         [--resource-group]
 *                         [--subscription]
 * ```
 */
var az_ams_transform_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_ams_transform_delete_command_builder, _super);
    function az_ams_transform_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The name of the Azure Media Services account. */
    az_ams_transform_delete_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_ams_transform_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the transform. */
    az_ams_transform_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_ams_transform_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_ams_transform_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_ams_transform_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List all the transforms of an Azure Media Services account.
 *
 * Syntax:
 * ```
 * az ams transform list --account-name
 *                       --resource-group
 *                       [--filter]
 *                       [--orderby]
 *                       [--query-examples]
 *                       [--subscription]
 * ```
 *
 * @param {string} accountName The name of the Azure Media Services account.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_ams_transform_list_command_builder = /** @class */ (function (_super) {
    __extends(az_ams_transform_list_command_builder, _super);
    function az_ams_transform_list_command_builder(commandPath, resultDataTypeName, accountName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the Azure Media Services account. */
    az_ams_transform_list_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_ams_transform_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Restricts the set of items returned. */
    az_ams_transform_list_command_builder.prototype.filter = function (value) {
        this.setFlag("--filter", value);
        return this;
    };
    /** Specifies the key by which the result collection should be ordered. */
    az_ams_transform_list_command_builder.prototype.orderby = function (value) {
        this.setFlag("--orderby", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_ams_transform_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_ams_transform_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_ams_transform_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Show the details of a transform.
 *
 * Syntax:
 * ```
 * az ams transform show [--account-name]
 *                       [--ids]
 *                       [--name]
 *                       [--query-examples]
 *                       [--resource-group]
 *                       [--subscription]
 * ```
 */
var az_ams_transform_show_command_builder = /** @class */ (function (_super) {
    __extends(az_ams_transform_show_command_builder, _super);
    function az_ams_transform_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The name of the Azure Media Services account. */
    az_ams_transform_show_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_ams_transform_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the transform. */
    az_ams_transform_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_ams_transform_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_ams_transform_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_ams_transform_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_ams_transform_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update the details of a transform.
 *
 * Syntax:
 * ```
 * az ams transform update [--account-name]
 *                         [--add]
 *                         [--description]
 *                         [--force-string]
 *                         [--ids]
 *                         [--name]
 *                         [--remove]
 *                         [--resource-group]
 *                         [--set]
 *                         [--subscription]
 * ```
 */
var az_ams_transform_update_command_builder = /** @class */ (function (_super) {
    __extends(az_ams_transform_update_command_builder, _super);
    function az_ams_transform_update_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The name of the Azure Media Services account. */
    az_ams_transform_update_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_ams_transform_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** The description of the transform. */
    az_ams_transform_update_command_builder.prototype.description = function (value) {
        this.setFlag("--description", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_ams_transform_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_ams_transform_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the transform. */
    az_ams_transform_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_ams_transform_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_ams_transform_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_ams_transform_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_ams_transform_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_ams_transform_update_command_builder;
}(base_1.CommandBuilder));
