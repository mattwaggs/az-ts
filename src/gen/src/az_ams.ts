import { CommandBuilder } from '../base';
import { az_ams_account_mru_set_command_result } from './models/az_ams_account_mru_set_command_result'
import { az_ams_account_mru_show_command_result } from './models/az_ams_account_mru_show_command_result'
import { az_ams_account_sp_create_command_result } from './models/az_ams_account_sp_create_command_result'
import { az_ams_account_sp_reset_credentials_command_result } from './models/az_ams_account_sp_reset_credentials_command_result'
import { az_ams_account_storage_add_command_result } from './models/az_ams_account_storage_add_command_result'
import { az_ams_account_storage_remove_command_result } from './models/az_ams_account_storage_remove_command_result'
import { az_ams_account_storage_sync_storage_keys_command_result } from './models/az_ams_account_storage_sync_storage_keys_command_result'
import { az_ams_account_filter_create_command_result } from './models/az_ams_account_filter_create_command_result'
import { az_ams_account_filter_delete_command_result } from './models/az_ams_account_filter_delete_command_result'
import { az_ams_account_filter_list_command_result } from './models/az_ams_account_filter_list_command_result'
import { az_ams_account_filter_show_command_result } from './models/az_ams_account_filter_show_command_result'
import { az_ams_account_filter_update_command_result } from './models/az_ams_account_filter_update_command_result'
import { az_ams_account_check_name_command_result } from './models/az_ams_account_check_name_command_result'
import { az_ams_account_create_command_result } from './models/az_ams_account_create_command_result'
import { az_ams_account_delete_command_result } from './models/az_ams_account_delete_command_result'
import { az_ams_account_list_command_result } from './models/az_ams_account_list_command_result'
import { az_ams_account_show_command_result } from './models/az_ams_account_show_command_result'
import { az_ams_account_update_command_result } from './models/az_ams_account_update_command_result'
import { az_ams_asset_filter_create_command_result } from './models/az_ams_asset_filter_create_command_result'
import { az_ams_asset_filter_delete_command_result } from './models/az_ams_asset_filter_delete_command_result'
import { az_ams_asset_filter_list_command_result } from './models/az_ams_asset_filter_list_command_result'
import { az_ams_asset_filter_show_command_result } from './models/az_ams_asset_filter_show_command_result'
import { az_ams_asset_filter_update_command_result } from './models/az_ams_asset_filter_update_command_result'
import { az_ams_asset_create_command_result } from './models/az_ams_asset_create_command_result'
import { az_ams_asset_delete_command_result } from './models/az_ams_asset_delete_command_result'
import { az_ams_asset_get_encryption_key_command_result } from './models/az_ams_asset_get_encryption_key_command_result'
import { az_ams_asset_get_sas_urls_command_result } from './models/az_ams_asset_get_sas_urls_command_result'
import { az_ams_asset_list_command_result } from './models/az_ams_asset_list_command_result'
import { az_ams_asset_list_streaming_locators_command_result } from './models/az_ams_asset_list_streaming_locators_command_result'
import { az_ams_asset_show_command_result } from './models/az_ams_asset_show_command_result'
import { az_ams_asset_update_command_result } from './models/az_ams_asset_update_command_result'
import { az_ams_content_key_policy_option_add_command_result } from './models/az_ams_content_key_policy_option_add_command_result'
import { az_ams_content_key_policy_option_remove_command_result } from './models/az_ams_content_key_policy_option_remove_command_result'
import { az_ams_content_key_policy_option_update_command_result } from './models/az_ams_content_key_policy_option_update_command_result'
import { az_ams_content_key_policy_create_command_result } from './models/az_ams_content_key_policy_create_command_result'
import { az_ams_content_key_policy_delete_command_result } from './models/az_ams_content_key_policy_delete_command_result'
import { az_ams_content_key_policy_list_command_result } from './models/az_ams_content_key_policy_list_command_result'
import { az_ams_content_key_policy_show_command_result } from './models/az_ams_content_key_policy_show_command_result'
import { az_ams_content_key_policy_update_command_result } from './models/az_ams_content_key_policy_update_command_result'
import { az_ams_job_cancel_command_result } from './models/az_ams_job_cancel_command_result'
import { az_ams_job_delete_command_result } from './models/az_ams_job_delete_command_result'
import { az_ams_job_list_command_result } from './models/az_ams_job_list_command_result'
import { az_ams_job_show_command_result } from './models/az_ams_job_show_command_result'
import { az_ams_job_start_command_result } from './models/az_ams_job_start_command_result'
import { az_ams_job_update_command_result } from './models/az_ams_job_update_command_result'
import { az_ams_live_event_create_command_result } from './models/az_ams_live_event_create_command_result'
import { az_ams_live_event_delete_command_result } from './models/az_ams_live_event_delete_command_result'
import { az_ams_live_event_list_command_result } from './models/az_ams_live_event_list_command_result'
import { az_ams_live_event_reset_command_result } from './models/az_ams_live_event_reset_command_result'
import { az_ams_live_event_show_command_result } from './models/az_ams_live_event_show_command_result'
import { az_ams_live_event_start_command_result } from './models/az_ams_live_event_start_command_result'
import { az_ams_live_event_stop_command_result } from './models/az_ams_live_event_stop_command_result'
import { az_ams_live_event_update_command_result } from './models/az_ams_live_event_update_command_result'
import { az_ams_live_event_wait_command_result } from './models/az_ams_live_event_wait_command_result'
import { az_ams_live_output_create_command_result } from './models/az_ams_live_output_create_command_result'
import { az_ams_live_output_delete_command_result } from './models/az_ams_live_output_delete_command_result'
import { az_ams_live_output_list_command_result } from './models/az_ams_live_output_list_command_result'
import { az_ams_live_output_show_command_result } from './models/az_ams_live_output_show_command_result'
import { az_ams_streaming_endpoint_akamai_add_command_result } from './models/az_ams_streaming_endpoint_akamai_add_command_result'
import { az_ams_streaming_endpoint_akamai_remove_command_result } from './models/az_ams_streaming_endpoint_akamai_remove_command_result'
import { az_ams_streaming_endpoint_create_command_result } from './models/az_ams_streaming_endpoint_create_command_result'
import { az_ams_streaming_endpoint_delete_command_result } from './models/az_ams_streaming_endpoint_delete_command_result'
import { az_ams_streaming_endpoint_list_command_result } from './models/az_ams_streaming_endpoint_list_command_result'
import { az_ams_streaming_endpoint_scale_command_result } from './models/az_ams_streaming_endpoint_scale_command_result'
import { az_ams_streaming_endpoint_show_command_result } from './models/az_ams_streaming_endpoint_show_command_result'
import { az_ams_streaming_endpoint_start_command_result } from './models/az_ams_streaming_endpoint_start_command_result'
import { az_ams_streaming_endpoint_stop_command_result } from './models/az_ams_streaming_endpoint_stop_command_result'
import { az_ams_streaming_endpoint_update_command_result } from './models/az_ams_streaming_endpoint_update_command_result'
import { az_ams_streaming_endpoint_wait_command_result } from './models/az_ams_streaming_endpoint_wait_command_result'
import { az_ams_streaming_locator_create_command_result } from './models/az_ams_streaming_locator_create_command_result'
import { az_ams_streaming_locator_delete_command_result } from './models/az_ams_streaming_locator_delete_command_result'
import { az_ams_streaming_locator_get_paths_command_result } from './models/az_ams_streaming_locator_get_paths_command_result'
import { az_ams_streaming_locator_list_command_result } from './models/az_ams_streaming_locator_list_command_result'
import { az_ams_streaming_locator_list_content_keys_command_result } from './models/az_ams_streaming_locator_list_content_keys_command_result'
import { az_ams_streaming_locator_show_command_result } from './models/az_ams_streaming_locator_show_command_result'
import { az_ams_streaming_policy_create_command_result } from './models/az_ams_streaming_policy_create_command_result'
import { az_ams_streaming_policy_delete_command_result } from './models/az_ams_streaming_policy_delete_command_result'
import { az_ams_streaming_policy_list_command_result } from './models/az_ams_streaming_policy_list_command_result'
import { az_ams_streaming_policy_show_command_result } from './models/az_ams_streaming_policy_show_command_result'
import { az_ams_transform_output_add_command_result } from './models/az_ams_transform_output_add_command_result'
import { az_ams_transform_output_remove_command_result } from './models/az_ams_transform_output_remove_command_result'
import { az_ams_transform_create_command_result } from './models/az_ams_transform_create_command_result'
import { az_ams_transform_delete_command_result } from './models/az_ams_transform_delete_command_result'
import { az_ams_transform_list_command_result } from './models/az_ams_transform_list_command_result'
import { az_ams_transform_show_command_result } from './models/az_ams_transform_show_command_result'
import { az_ams_transform_update_command_result } from './models/az_ams_transform_update_command_result'

/** Manage media reserved units for an Azure Media Services account. */
export class az_ams_account_mru {
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
    static set(): az_ams_account_mru_set_command_builder {
        return new az_ams_account_mru_set_command_builder("az ams account mru set", 'az_ams_account_mru_set_command_result');
    }

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
    static show(): az_ams_account_mru_show_command_builder {
        return new az_ams_account_mru_show_command_builder("az ams account mru show", 'az_ams_account_mru_show_command_result');
    }
}

/** Manage service principal and role based access for an Azure Media Services account. */
export class az_ams_account_sp {
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
    static create(accountName: string, resourceGroup: string): az_ams_account_sp_create_command_builder {
        return new az_ams_account_sp_create_command_builder("az ams account sp create", 'az_ams_account_sp_create_command_result', accountName, resourceGroup);
    }

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
    static reset_credentials(): az_ams_account_sp_reset_credentials_command_builder {
        return new az_ams_account_sp_reset_credentials_command_builder("az ams account sp reset-credentials", 'az_ams_account_sp_reset_credentials_command_result');
    }
}

/** Manage storage for an Azure Media Services account. */
export class az_ams_account_storage {
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
    static add(): az_ams_account_storage_add_command_builder {
        return new az_ams_account_storage_add_command_builder("az ams account storage add", 'az_ams_account_storage_add_command_result');
    }

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
    static remove(): az_ams_account_storage_remove_command_builder {
        return new az_ams_account_storage_remove_command_builder("az ams account storage remove", 'az_ams_account_storage_remove_command_result');
    }

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
    static sync_storage_keys(id: string): az_ams_account_storage_sync_storage_keys_command_builder {
        return new az_ams_account_storage_sync_storage_keys_command_builder("az ams account storage sync-storage-keys", 'az_ams_account_storage_sync_storage_keys_command_result', id);
    }
}

/** Manage account filters for an Azure Media Services account. */
export class az_ams_account_filter {
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
    static create(accountName: string, name: string, resourceGroup: string): az_ams_account_filter_create_command_builder {
        return new az_ams_account_filter_create_command_builder("az ams account-filter create", 'az_ams_account_filter_create_command_result', accountName, name, resourceGroup);
    }

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
    static delete(): az_ams_account_filter_delete_command_builder {
        return new az_ams_account_filter_delete_command_builder("az ams account-filter delete", 'az_ams_account_filter_delete_command_result');
    }

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
    static list(accountName: string, resourceGroup: string): az_ams_account_filter_list_command_builder {
        return new az_ams_account_filter_list_command_builder("az ams account-filter list", 'az_ams_account_filter_list_command_result', accountName, resourceGroup);
    }

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
    static show(): az_ams_account_filter_show_command_builder {
        return new az_ams_account_filter_show_command_builder("az ams account-filter show", 'az_ams_account_filter_show_command_result');
    }

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
    static update(): az_ams_account_filter_update_command_builder {
        return new az_ams_account_filter_update_command_builder("az ams account-filter update", 'az_ams_account_filter_update_command_result');
    }
}

/** Manage Azure Media Services accounts. */
export class az_ams_account {
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
    static check_name(location: string, name: string): az_ams_account_check_name_command_builder {
        return new az_ams_account_check_name_command_builder("az ams account check-name", 'az_ams_account_check_name_command_result', location, name);
    }

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
    static create(name: string, resourceGroup: string, storageAccount: string): az_ams_account_create_command_builder {
        return new az_ams_account_create_command_builder("az ams account create", 'az_ams_account_create_command_result', name, resourceGroup, storageAccount);
    }

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
    static delete(): az_ams_account_delete_command_builder {
        return new az_ams_account_delete_command_builder("az ams account delete", 'az_ams_account_delete_command_result');
    }

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
    static list(): az_ams_account_list_command_builder {
        return new az_ams_account_list_command_builder("az ams account list", 'az_ams_account_list_command_result');
    }

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
    static show(): az_ams_account_show_command_builder {
        return new az_ams_account_show_command_builder("az ams account show", 'az_ams_account_show_command_result');
    }

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
    static update(): az_ams_account_update_command_builder {
        return new az_ams_account_update_command_builder("az ams account update", 'az_ams_account_update_command_result');
    }
}

/** Manage asset filters for an Azure Media Services account. */
export class az_ams_asset_filter {
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
    static create(accountName: string, assetName: string, name: string, resourceGroup: string): az_ams_asset_filter_create_command_builder {
        return new az_ams_asset_filter_create_command_builder("az ams asset-filter create", 'az_ams_asset_filter_create_command_result', accountName, assetName, name, resourceGroup);
    }

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
    static delete(): az_ams_asset_filter_delete_command_builder {
        return new az_ams_asset_filter_delete_command_builder("az ams asset-filter delete", 'az_ams_asset_filter_delete_command_result');
    }

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
    static list(accountName: string, assetName: string, resourceGroup: string): az_ams_asset_filter_list_command_builder {
        return new az_ams_asset_filter_list_command_builder("az ams asset-filter list", 'az_ams_asset_filter_list_command_result', accountName, assetName, resourceGroup);
    }

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
    static show(): az_ams_asset_filter_show_command_builder {
        return new az_ams_asset_filter_show_command_builder("az ams asset-filter show", 'az_ams_asset_filter_show_command_result');
    }

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
    static update(): az_ams_asset_filter_update_command_builder {
        return new az_ams_asset_filter_update_command_builder("az ams asset-filter update", 'az_ams_asset_filter_update_command_result');
    }
}

/** Manage assets for an Azure Media Services account. */
export class az_ams_asset {
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
    static create(accountName: string, name: string, resourceGroup: string): az_ams_asset_create_command_builder {
        return new az_ams_asset_create_command_builder("az ams asset create", 'az_ams_asset_create_command_result', accountName, name, resourceGroup);
    }

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
    static delete(): az_ams_asset_delete_command_builder {
        return new az_ams_asset_delete_command_builder("az ams asset delete", 'az_ams_asset_delete_command_result');
    }

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
    static get_encryption_key(): az_ams_asset_get_encryption_key_command_builder {
        return new az_ams_asset_get_encryption_key_command_builder("az ams asset get-encryption-key", 'az_ams_asset_get_encryption_key_command_result');
    }

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
    static get_sas_urls(): az_ams_asset_get_sas_urls_command_builder {
        return new az_ams_asset_get_sas_urls_command_builder("az ams asset get-sas-urls", 'az_ams_asset_get_sas_urls_command_result');
    }

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
    static list(accountName: string, resourceGroup: string): az_ams_asset_list_command_builder {
        return new az_ams_asset_list_command_builder("az ams asset list", 'az_ams_asset_list_command_result', accountName, resourceGroup);
    }

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
    static list_streaming_locators(): az_ams_asset_list_streaming_locators_command_builder {
        return new az_ams_asset_list_streaming_locators_command_builder("az ams asset list-streaming-locators", 'az_ams_asset_list_streaming_locators_command_result');
    }

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
    static show(): az_ams_asset_show_command_builder {
        return new az_ams_asset_show_command_builder("az ams asset show", 'az_ams_asset_show_command_result');
    }

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
    static update(): az_ams_asset_update_command_builder {
        return new az_ams_asset_update_command_builder("az ams asset update", 'az_ams_asset_update_command_result');
    }
}

/** Manage options for an existing content key policy. */
export class az_ams_content_key_policy_option {
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
    static add(policyOptionName: string): az_ams_content_key_policy_option_add_command_builder {
        return new az_ams_content_key_policy_option_add_command_builder("az ams content-key-policy option add", 'az_ams_content_key_policy_option_add_command_result', policyOptionName);
    }

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
    static remove(policyOptionId: string): az_ams_content_key_policy_option_remove_command_builder {
        return new az_ams_content_key_policy_option_remove_command_builder("az ams content-key-policy option remove", 'az_ams_content_key_policy_option_remove_command_result', policyOptionId);
    }

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
    static update(policyOptionId: string): az_ams_content_key_policy_option_update_command_builder {
        return new az_ams_content_key_policy_option_update_command_builder("az ams content-key-policy option update", 'az_ams_content_key_policy_option_update_command_result', policyOptionId);
    }
}

/** Manage content key policies for an Azure Media Services account. */
export class az_ams_content_key_policy {
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
    static create(accountName: string, name: string, policyOptionName: string, resourceGroup: string): az_ams_content_key_policy_create_command_builder {
        return new az_ams_content_key_policy_create_command_builder("az ams content-key-policy create", 'az_ams_content_key_policy_create_command_result', accountName, name, policyOptionName, resourceGroup);
    }

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
    static delete(): az_ams_content_key_policy_delete_command_builder {
        return new az_ams_content_key_policy_delete_command_builder("az ams content-key-policy delete", 'az_ams_content_key_policy_delete_command_result');
    }

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
    static list(accountName: string, resourceGroup: string): az_ams_content_key_policy_list_command_builder {
        return new az_ams_content_key_policy_list_command_builder("az ams content-key-policy list", 'az_ams_content_key_policy_list_command_result', accountName, resourceGroup);
    }

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
    static show(): az_ams_content_key_policy_show_command_builder {
        return new az_ams_content_key_policy_show_command_builder("az ams content-key-policy show", 'az_ams_content_key_policy_show_command_result');
    }

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
    static update(): az_ams_content_key_policy_update_command_builder {
        return new az_ams_content_key_policy_update_command_builder("az ams content-key-policy update", 'az_ams_content_key_policy_update_command_result');
    }
}

/** Manage jobs for a transform. */
export class az_ams_job {
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
    static cancel(): az_ams_job_cancel_command_builder {
        return new az_ams_job_cancel_command_builder("az ams job cancel", 'az_ams_job_cancel_command_result');
    }

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
    static delete(): az_ams_job_delete_command_builder {
        return new az_ams_job_delete_command_builder("az ams job delete", 'az_ams_job_delete_command_result');
    }

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
    static list(accountName: string, resourceGroup: string, transformName: string): az_ams_job_list_command_builder {
        return new az_ams_job_list_command_builder("az ams job list", 'az_ams_job_list_command_result', accountName, resourceGroup, transformName);
    }

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
    static show(): az_ams_job_show_command_builder {
        return new az_ams_job_show_command_builder("az ams job show", 'az_ams_job_show_command_result');
    }

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
    static start(outputAssets: string): az_ams_job_start_command_builder {
        return new az_ams_job_start_command_builder("az ams job start", 'az_ams_job_start_command_result', outputAssets);
    }

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
    static update(): az_ams_job_update_command_builder {
        return new az_ams_job_update_command_builder("az ams job update", 'az_ams_job_update_command_result');
    }
}

/** Manage live events for an Azure Media Service account. */
export class az_ams_live_event {
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
    static create(accountName: string, ips: string, name: string, resourceGroup: string, streamingProtocol: 'FragmentedMP4' | 'RTMP'): az_ams_live_event_create_command_builder {
        return new az_ams_live_event_create_command_builder("az ams live-event create", 'az_ams_live_event_create_command_result', accountName, ips, name, resourceGroup, streamingProtocol);
    }

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
    static delete(): az_ams_live_event_delete_command_builder {
        return new az_ams_live_event_delete_command_builder("az ams live-event delete", 'az_ams_live_event_delete_command_result');
    }

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
    static list(accountName: string, resourceGroup: string): az_ams_live_event_list_command_builder {
        return new az_ams_live_event_list_command_builder("az ams live-event list", 'az_ams_live_event_list_command_result', accountName, resourceGroup);
    }

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
    static reset(): az_ams_live_event_reset_command_builder {
        return new az_ams_live_event_reset_command_builder("az ams live-event reset", 'az_ams_live_event_reset_command_result');
    }

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
    static show(): az_ams_live_event_show_command_builder {
        return new az_ams_live_event_show_command_builder("az ams live-event show", 'az_ams_live_event_show_command_result');
    }

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
    static start(): az_ams_live_event_start_command_builder {
        return new az_ams_live_event_start_command_builder("az ams live-event start", 'az_ams_live_event_start_command_result');
    }

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
    static stop(): az_ams_live_event_stop_command_builder {
        return new az_ams_live_event_stop_command_builder("az ams live-event stop", 'az_ams_live_event_stop_command_result');
    }

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
    static update(): az_ams_live_event_update_command_builder {
        return new az_ams_live_event_update_command_builder("az ams live-event update", 'az_ams_live_event_update_command_result');
    }

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
    static wait(): az_ams_live_event_wait_command_builder {
        return new az_ams_live_event_wait_command_builder("az ams live-event wait", 'az_ams_live_event_wait_command_result');
    }
}

/** Manage live outputs for an Azure Media Service account. */
export class az_ams_live_output {
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
    static create(accountName: string, archiveWindowLength: string, assetName: string, liveEventName: string, name: string, resourceGroup: string): az_ams_live_output_create_command_builder {
        return new az_ams_live_output_create_command_builder("az ams live-output create", 'az_ams_live_output_create_command_result', accountName, archiveWindowLength, assetName, liveEventName, name, resourceGroup);
    }

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
    static delete(): az_ams_live_output_delete_command_builder {
        return new az_ams_live_output_delete_command_builder("az ams live-output delete", 'az_ams_live_output_delete_command_result');
    }

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
    static list(accountName: string, liveEventName: string, resourceGroup: string): az_ams_live_output_list_command_builder {
        return new az_ams_live_output_list_command_builder("az ams live-output list", 'az_ams_live_output_list_command_result', accountName, liveEventName, resourceGroup);
    }

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
    static show(): az_ams_live_output_show_command_builder {
        return new az_ams_live_output_show_command_builder("az ams live-output show", 'az_ams_live_output_show_command_result');
    }
}

/** Manage AkamaiAccessControl objects to be used on streaming endpoints. */
export class az_ams_streaming_endpoint_akamai {
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
    static add(): az_ams_streaming_endpoint_akamai_add_command_builder {
        return new az_ams_streaming_endpoint_akamai_add_command_builder("az ams streaming-endpoint akamai add", 'az_ams_streaming_endpoint_akamai_add_command_result');
    }

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
    static remove(identifier: string): az_ams_streaming_endpoint_akamai_remove_command_builder {
        return new az_ams_streaming_endpoint_akamai_remove_command_builder("az ams streaming-endpoint akamai remove", 'az_ams_streaming_endpoint_akamai_remove_command_result', identifier);
    }
}

/** Manage streaming endpoints for an Azure Media Service account. */
export class az_ams_streaming_endpoint {
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
    static create(accountName: string, name: string, resourceGroup: string, scaleUnits: string): az_ams_streaming_endpoint_create_command_builder {
        return new az_ams_streaming_endpoint_create_command_builder("az ams streaming-endpoint create", 'az_ams_streaming_endpoint_create_command_result', accountName, name, resourceGroup, scaleUnits);
    }

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
    static delete(): az_ams_streaming_endpoint_delete_command_builder {
        return new az_ams_streaming_endpoint_delete_command_builder("az ams streaming-endpoint delete", 'az_ams_streaming_endpoint_delete_command_result');
    }

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
    static list(accountName: string, resourceGroup: string): az_ams_streaming_endpoint_list_command_builder {
        return new az_ams_streaming_endpoint_list_command_builder("az ams streaming-endpoint list", 'az_ams_streaming_endpoint_list_command_result', accountName, resourceGroup);
    }

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
    static scale(): az_ams_streaming_endpoint_scale_command_builder {
        return new az_ams_streaming_endpoint_scale_command_builder("az ams streaming-endpoint scale", 'az_ams_streaming_endpoint_scale_command_result');
    }

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
    static show(): az_ams_streaming_endpoint_show_command_builder {
        return new az_ams_streaming_endpoint_show_command_builder("az ams streaming-endpoint show", 'az_ams_streaming_endpoint_show_command_result');
    }

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
    static start(): az_ams_streaming_endpoint_start_command_builder {
        return new az_ams_streaming_endpoint_start_command_builder("az ams streaming-endpoint start", 'az_ams_streaming_endpoint_start_command_result');
    }

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
    static stop(): az_ams_streaming_endpoint_stop_command_builder {
        return new az_ams_streaming_endpoint_stop_command_builder("az ams streaming-endpoint stop", 'az_ams_streaming_endpoint_stop_command_result');
    }

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
    static update(): az_ams_streaming_endpoint_update_command_builder {
        return new az_ams_streaming_endpoint_update_command_builder("az ams streaming-endpoint update", 'az_ams_streaming_endpoint_update_command_result');
    }

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
    static wait(): az_ams_streaming_endpoint_wait_command_builder {
        return new az_ams_streaming_endpoint_wait_command_builder("az ams streaming-endpoint wait", 'az_ams_streaming_endpoint_wait_command_result');
    }
}

/** Manage streaming locators for an Azure Media Services account. */
export class az_ams_streaming_locator {
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
    static create(accountName: string, assetName: string, name: string, resourceGroup: string, streamingPolicyName: string): az_ams_streaming_locator_create_command_builder {
        return new az_ams_streaming_locator_create_command_builder("az ams streaming-locator create", 'az_ams_streaming_locator_create_command_result', accountName, assetName, name, resourceGroup, streamingPolicyName);
    }

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
    static delete(): az_ams_streaming_locator_delete_command_builder {
        return new az_ams_streaming_locator_delete_command_builder("az ams streaming-locator delete", 'az_ams_streaming_locator_delete_command_result');
    }

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
    static get_paths(): az_ams_streaming_locator_get_paths_command_builder {
        return new az_ams_streaming_locator_get_paths_command_builder("az ams streaming-locator get-paths", 'az_ams_streaming_locator_get_paths_command_result');
    }

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
    static list(accountName: string, resourceGroup: string): az_ams_streaming_locator_list_command_builder {
        return new az_ams_streaming_locator_list_command_builder("az ams streaming-locator list", 'az_ams_streaming_locator_list_command_result', accountName, resourceGroup);
    }

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
    static list_content_keys(): az_ams_streaming_locator_list_content_keys_command_builder {
        return new az_ams_streaming_locator_list_content_keys_command_builder("az ams streaming-locator list-content-keys", 'az_ams_streaming_locator_list_content_keys_command_result');
    }

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
    static show(): az_ams_streaming_locator_show_command_builder {
        return new az_ams_streaming_locator_show_command_builder("az ams streaming-locator show", 'az_ams_streaming_locator_show_command_result');
    }
}

/** Manage streaming policies for an Azure Media Services account. */
export class az_ams_streaming_policy {
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
    static create(accountName: string, name: string, resourceGroup: string): az_ams_streaming_policy_create_command_builder {
        return new az_ams_streaming_policy_create_command_builder("az ams streaming-policy create", 'az_ams_streaming_policy_create_command_result', accountName, name, resourceGroup);
    }

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
    static delete(): az_ams_streaming_policy_delete_command_builder {
        return new az_ams_streaming_policy_delete_command_builder("az ams streaming-policy delete", 'az_ams_streaming_policy_delete_command_result');
    }

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
    static list(accountName: string, resourceGroup: string): az_ams_streaming_policy_list_command_builder {
        return new az_ams_streaming_policy_list_command_builder("az ams streaming-policy list", 'az_ams_streaming_policy_list_command_result', accountName, resourceGroup);
    }

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
    static show(): az_ams_streaming_policy_show_command_builder {
        return new az_ams_streaming_policy_show_command_builder("az ams streaming-policy show", 'az_ams_streaming_policy_show_command_result');
    }
}

/** Manage transform outputs for an Azure Media Services account. */
export class az_ams_transform_output {
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
    static add(preset: string): az_ams_transform_output_add_command_builder {
        return new az_ams_transform_output_add_command_builder("az ams transform output add", 'az_ams_transform_output_add_command_result', preset);
    }

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
    static remove(outputIndex: string): az_ams_transform_output_remove_command_builder {
        return new az_ams_transform_output_remove_command_builder("az ams transform output remove", 'az_ams_transform_output_remove_command_result', outputIndex);
    }
}

/** Manage transforms for an Azure Media Services account. */
export class az_ams_transform {
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
    static create(accountName: string, name: string, preset: string, resourceGroup: string): az_ams_transform_create_command_builder {
        return new az_ams_transform_create_command_builder("az ams transform create", 'az_ams_transform_create_command_result', accountName, name, preset, resourceGroup);
    }

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
    static delete(): az_ams_transform_delete_command_builder {
        return new az_ams_transform_delete_command_builder("az ams transform delete", 'az_ams_transform_delete_command_result');
    }

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
    static list(accountName: string, resourceGroup: string): az_ams_transform_list_command_builder {
        return new az_ams_transform_list_command_builder("az ams transform list", 'az_ams_transform_list_command_result', accountName, resourceGroup);
    }

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
    static show(): az_ams_transform_show_command_builder {
        return new az_ams_transform_show_command_builder("az ams transform show", 'az_ams_transform_show_command_result');
    }

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
    static update(): az_ams_transform_update_command_builder {
        return new az_ams_transform_update_command_builder("az ams transform update", 'az_ams_transform_update_command_result');
    }
}

/** Manage Azure Media Services resources. */
export class az_ams {
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
class az_ams_account_mru_set_command_builder extends CommandBuilder<az_ams_account_mru_set_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** The number of the encoding reserved units that you want to be provisioned for this account for concurrent tasks (one unit equals one task). */
    count(value: string): az_ams_account_mru_set_command_builder {
        this.setFlag("--count", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_ams_account_mru_set_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the Azure Media Services account. */
    name(value: string): az_ams_account_mru_set_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ams_account_mru_set_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ams_account_mru_set_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Speed of reserved processing units. The cost of media encoding depends on the pricing tier you choose. See <a href="https://azure.microsoft.com/pricing/details/media-services/">https://azure.microsoft.com/pricing/details/media-services/</a> for further details. Allowed values: S1, S2, S3. */
    type(value: string): az_ams_account_mru_set_command_builder {
        this.setFlag("--type", value);
        return this;
    }
}

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
class az_ams_account_mru_show_command_builder extends CommandBuilder<az_ams_account_mru_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_ams_account_mru_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the Azure Media Services account. */
    name(value: string): az_ams_account_mru_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_ams_account_mru_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ams_account_mru_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ams_account_mru_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_ams_account_sp_create_command_builder extends CommandBuilder<az_ams_account_sp_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.accountName(accountName)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the Azure Media Services account. */
    accountName(value: string): az_ams_account_sp_create_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ams_account_sp_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The app name or app URI to associate the RBAC with. If not present, a default name like '{amsaccountname}-access-sp' will be generated. */
    name(value: string): az_ams_account_sp_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** The new app name or app URI to update the RBAC with. */
    newSpName(value: string): az_ams_account_sp_create_command_builder {
        this.setFlag("--new-sp-name", value);
        return this;
    }

    /** The password used to log in. Also known as 'Client Secret'. If not present, a random secret will be generated. */
    password(value: string): az_ams_account_sp_create_command_builder {
        this.setFlag("--password", value);
        return this;
    }

    /** The role of the service principal. */
    role(value: string): az_ams_account_sp_create_command_builder {
        this.setFlag("--role", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ams_account_sp_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Enables xml output format. */
    xml(value: string): az_ams_account_sp_create_command_builder {
        this.setFlag("--xml", value);
        return this;
    }

    /** Number of years for which the secret will be valid. Default: 1 year. */
    years(value: string): az_ams_account_sp_create_command_builder {
        this.setFlag("--years", value);
        return this;
    }
}

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
class az_ams_account_sp_reset_credentials_command_builder extends CommandBuilder<az_ams_account_sp_reset_credentials_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** The name of the Azure Media Services account. */
    accountName(value: string): az_ams_account_sp_reset_credentials_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_ams_account_sp_reset_credentials_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The app name or app URI to associate the RBAC with. If not present, a default name like '{amsaccountname}-access-sp' will be generated. */
    name(value: string): az_ams_account_sp_reset_credentials_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** The password used to log in. Also known as 'Client Secret'. If not present, a random secret will be generated. */
    password(value: string): az_ams_account_sp_reset_credentials_command_builder {
        this.setFlag("--password", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ams_account_sp_reset_credentials_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The role of the service principal. */
    role(value: string): az_ams_account_sp_reset_credentials_command_builder {
        this.setFlag("--role", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ams_account_sp_reset_credentials_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Enables xml output format. */
    xml(value: string): az_ams_account_sp_reset_credentials_command_builder {
        this.setFlag("--xml", value);
        return this;
    }

    /** Number of years for which the secret will be valid. Default: 1 year. */
    years(value: string): az_ams_account_sp_reset_credentials_command_builder {
        this.setFlag("--years", value);
        return this;
    }
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
class az_ams_account_storage_add_command_builder extends CommandBuilder<az_ams_account_storage_add_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** The name of the Azure Media Services account. */
    accountName(value: string): az_ams_account_storage_add_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_ams_account_storage_add_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name or resource ID of the secondary storage account to detach from the Azure Media Services account. */
    name(value: string): az_ams_account_storage_add_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ams_account_storage_add_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ams_account_storage_add_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_ams_account_storage_remove_command_builder extends CommandBuilder<az_ams_account_storage_remove_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** The name of the Azure Media Services account. */
    accountName(value: string): az_ams_account_storage_remove_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_ams_account_storage_remove_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name or resource ID of the secondary storage account to detach from the Azure Media Services account. */
    name(value: string): az_ams_account_storage_remove_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ams_account_storage_remove_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ams_account_storage_remove_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_ams_account_storage_sync_storage_keys_command_builder extends CommandBuilder<az_ams_account_storage_sync_storage_keys_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, id: string) {
        super(commandPath, resultDataTypeName);
        this.id(id)
    }

    /** The ID of the storage account resource. */
    id(value: string): az_ams_account_storage_sync_storage_keys_command_builder {
        this.setFlag("--id", value);
        return this;
    }

    /** The name of the Azure Media Services account. */
    accountName(value: string): az_ams_account_storage_sync_storage_keys_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_ams_account_storage_sync_storage_keys_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ams_account_storage_sync_storage_keys_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ams_account_storage_sync_storage_keys_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_ams_account_filter_create_command_builder extends CommandBuilder<az_ams_account_filter_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string, name: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.accountName(accountName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the Azure Media Services account. */
    accountName(value: string): az_ams_account_filter_create_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** The name of the account filter. */
    name(value: string): az_ams_account_filter_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ams_account_filter_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The first quality bitrate. */
    bitrate(value: string): az_ams_account_filter_create_command_builder {
        this.setFlag("--bitrate", value);
        return this;
    }

    /** Applies to Video on Demand (VoD). For the Live Streaming presentation, it is silently ignored and applied when the presentation ends and the stream becomes VoD. This is a long value that represents an absolute end point of the presentation, rounded to the closest next GOP start. The unit is the timescale, so an endTimestamp of 1800000000 would be for 3 minutes. Use startTimestamp and endTimestamp to trim the fragments that will be in the playlist (manifest). For example, startTimestamp=40000000 and endTimestamp=100000000 using the default timescale will generate a playlist that contains fragments from between 4 seconds and 10 seconds of the VoD presentation. If a fragment straddles the boundary, the entire fragment will be included in the manifest. */
    endTimestamp(value: string): az_ams_account_filter_create_command_builder {
        this.setFlag("--end-timestamp", value);
        return this;
    }

    /** The first quality (lowest) bitrate to include in the manifest. */
    firstQuality(value: string): az_ams_account_filter_create_command_builder {
        this.setFlag("--first-quality", value);
        return this;
    }

    /** Applies to Live Streaming only. Indicates whether the endTimestamp property must be present. If true, endTimestamp must be specified or a bad request code is returned. Allowed values: false, true. */
    forceEndTimestamp(value: boolean): az_ams_account_filter_create_command_builder {
        this.setFlag("--force-end-timestamp", value.toString());
        return this;
    }

    /** Applies to Live Streaming only. This value defines the latest live position that a client can seek to. Using this property, you can delay live playback position and create a server-side buffer for players. The unit for this property is timescale (see below). The maximum live back off duration is 300 seconds (3000000000). For example, a value of 2000000000 means that the latest available content is 20 seconds delayed from the real live edge. */
    liveBackoffDuration(value: string): az_ams_account_filter_create_command_builder {
        this.setFlag("--live-backoff-duration", value);
        return this;
    }

    /** Applies to Live Streaming only. Use presentationWindowDuration to apply a sliding window of fragments to include in a playlist. The unit for this property is timescale (see below). For example, set presentationWindowDuration=1200000000 to apply a two-minute sliding window. Media within 2 minutes of the live edge will be included in the playlist. If a fragment straddles the boundary, the entire fragment will be included in the playlist. The minimum presentation window duration is 60 seconds. */
    presentationWindowDuration(value: string): az_ams_account_filter_create_command_builder {
        this.setFlag("--presentation-window-duration", value);
        return this;
    }

    /** Applies to Video on Demand (VoD) or Live Streaming. This is a long value that represents an absolute start point of the stream. The value gets rounded to the closest next GOP start. The unit is the timescale, so a startTimestamp of 150000000 would be for 15 seconds. Use startTimestamp and endTimestampp to trim the fragments that will be in the playlist (manifest). For example, startTimestamp=40000000 and endTimestamp=100000000 using the default timescale will generate a playlist that contains fragments from between 4 seconds and 10 seconds of the VoD presentation. If a fragment straddles the boundary, the entire fragment will be included in the manifest. */
    startTimestamp(value: string): az_ams_account_filter_create_command_builder {
        this.setFlag("--start-timestamp", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ams_account_filter_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Applies to all timestamps and durations in a Presentation Time Range, specified as the number of increments in one second. Default is 10000000 - ten million increments in one second, where each increment would be 100 nanoseconds long. For example, if you want to set a startTimestamp at 30 seconds, you would use a value of 300000000 when using the default timescale. */
    timescale(value: string): az_ams_account_filter_create_command_builder {
        this.setFlag("--timescale", value);
        return this;
    }

    /** The JSON representing the track selections. Use @{file} to load from a file. For further information about the JSON structure please refer to swagger documentation on <a href="https://docs.microsoft.com/rest/api/media/accountfilters/createorupdate#filtertrackselection">https://docs.microsoft.com/rest/api/media/accountfilters/createorupdate#filtertrackselection</a>. */
    tracks(value: string): az_ams_account_filter_create_command_builder {
        this.setFlag("--tracks", value);
        return this;
    }
}

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
class az_ams_account_filter_delete_command_builder extends CommandBuilder<az_ams_account_filter_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** The name of the Azure Media Services account. */
    accountName(value: string): az_ams_account_filter_delete_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_ams_account_filter_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the account filter. */
    name(value: string): az_ams_account_filter_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ams_account_filter_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ams_account_filter_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_ams_account_filter_list_command_builder extends CommandBuilder<az_ams_account_filter_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.accountName(accountName)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the Azure Media Services account. */
    accountName(value: string): az_ams_account_filter_list_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ams_account_filter_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_ams_account_filter_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ams_account_filter_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_ams_account_filter_show_command_builder extends CommandBuilder<az_ams_account_filter_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** The name of the Azure Media Services account. */
    accountName(value: string): az_ams_account_filter_show_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_ams_account_filter_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the account filter. */
    name(value: string): az_ams_account_filter_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_ams_account_filter_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ams_account_filter_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ams_account_filter_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_ams_account_filter_update_command_builder extends CommandBuilder<az_ams_account_filter_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** The name of the Azure Media Services account. */
    accountName(value: string): az_ams_account_filter_update_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_ams_account_filter_update_command_builder {
        this.setFlag("--add", value);
        return this;
    }

    /** The first quality bitrate. */
    bitrate(value: string): az_ams_account_filter_update_command_builder {
        this.setFlag("--bitrate", value);
        return this;
    }

    /** Applies to Video on Demand (VoD). For the Live Streaming presentation, it is silently ignored and applied when the presentation ends and the stream becomes VoD. This is a long value that represents an absolute end point of the presentation, rounded to the closest next GOP start. The unit is the timescale, so an endTimestamp of 1800000000 would be for 3 minutes. Use startTimestamp and endTimestamp to trim the fragments that will be in the playlist (manifest). For example, startTimestamp=40000000 and endTimestamp=100000000 using the default timescale will generate a playlist that contains fragments from between 4 seconds and 10 seconds of the VoD presentation. If a fragment straddles the boundary, the entire fragment will be included in the manifest. */
    endTimestamp(value: string): az_ams_account_filter_update_command_builder {
        this.setFlag("--end-timestamp", value);
        return this;
    }

    /** The first quality (lowest) bitrate to include in the manifest. */
    firstQuality(value: string): az_ams_account_filter_update_command_builder {
        this.setFlag("--first-quality", value);
        return this;
    }

    /** Applies to Live Streaming only. Indicates whether the endTimestamp property must be present. If true, endTimestamp must be specified or a bad request code is returned. Allowed values: false, true. */
    forceEndTimestamp(value: boolean): az_ams_account_filter_update_command_builder {
        this.setFlag("--force-end-timestamp", value.toString());
        return this;
    }

    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_ams_account_filter_update_command_builder {
        this.setFlag("--force-string", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_ams_account_filter_update_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Applies to Live Streaming only. This value defines the latest live position that a client can seek to. Using this property, you can delay live playback position and create a server-side buffer for players. The unit for this property is timescale (see below). The maximum live back off duration is 300 seconds (3000000000). For example, a value of 2000000000 means that the latest available content is 20 seconds delayed from the real live edge. */
    liveBackoffDuration(value: string): az_ams_account_filter_update_command_builder {
        this.setFlag("--live-backoff-duration", value);
        return this;
    }

    /** The name of the account filter. */
    name(value: string): az_ams_account_filter_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Applies to Live Streaming only. Use presentationWindowDuration to apply a sliding window of fragments to include in a playlist. The unit for this property is timescale (see below). For example, set presentationWindowDuration=1200000000 to apply a two-minute sliding window. Media within 2 minutes of the live edge will be included in the playlist. If a fragment straddles the boundary, the entire fragment will be included in the playlist. The minimum presentation window duration is 60 seconds. */
    presentationWindowDuration(value: string): az_ams_account_filter_update_command_builder {
        this.setFlag("--presentation-window-duration", value);
        return this;
    }

    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_ams_account_filter_update_command_builder {
        this.setFlag("--remove", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ams_account_filter_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_ams_account_filter_update_command_builder {
        this.setFlag("--set", value);
        return this;
    }

    /** Applies to Video on Demand (VoD) or Live Streaming. This is a long value that represents an absolute start point of the stream. The value gets rounded to the closest next GOP start. The unit is the timescale, so a startTimestamp of 150000000 would be for 15 seconds. Use startTimestamp and endTimestampp to trim the fragments that will be in the playlist (manifest). For example, startTimestamp=40000000 and endTimestamp=100000000 using the default timescale will generate a playlist that contains fragments from between 4 seconds and 10 seconds of the VoD presentation. If a fragment straddles the boundary, the entire fragment will be included in the manifest. */
    startTimestamp(value: string): az_ams_account_filter_update_command_builder {
        this.setFlag("--start-timestamp", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ams_account_filter_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Applies to all timestamps and durations in a Presentation Time Range, specified as the number of increments in one second. Default is 10000000 - ten million increments in one second, where each increment would be 100 nanoseconds long. For example, if you want to set a startTimestamp at 30 seconds, you would use a value of 300000000 when using the default timescale. */
    timescale(value: string): az_ams_account_filter_update_command_builder {
        this.setFlag("--timescale", value);
        return this;
    }

    /** The JSON representing the track selections. Use @{file} to load from a file. For further information about the JSON structure please refer to swagger documentation on <a href="https://docs.microsoft.com/rest/api/media/accountfilters/createorupdate#filtertrackselection">https://docs.microsoft.com/rest/api/media/accountfilters/createorupdate#filtertrackselection</a>. */
    tracks(value: string): az_ams_account_filter_update_command_builder {
        this.setFlag("--tracks", value);
        return this;
    }
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
class az_ams_account_check_name_command_builder extends CommandBuilder<az_ams_account_check_name_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, location: string, name: string) {
        super(commandPath, resultDataTypeName);
        this.location(location)
        this.name(name)
    }

    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_ams_account_check_name_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** The name of the Azure Media Services account. */
    name(value: string): az_ams_account_check_name_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ams_account_check_name_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_ams_account_create_command_builder extends CommandBuilder<az_ams_account_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string, storageAccount: string) {
        super(commandPath, resultDataTypeName);
        this.name(name)
        this.resourceGroup(resourceGroup)
        this.storageAccount(storageAccount)
    }

    /** The name of the Azure Media Services account. */
    name(value: string): az_ams_account_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ams_account_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name or resource ID of the primary storage account to attach to the Azure Media Services account. The storage account MUST be in the same Azure subscription as the Media Services account. It is strongly recommended that the storage account be in the same resource group as the Media Services account. Blob only accounts are not allowed as primary. */
    storageAccount(value: string): az_ams_account_create_command_builder {
        this.setFlag("--storage-account", value);
        return this;
    }

    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_ams_account_create_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ams_account_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_ams_account_create_command_builder {
        this.setFlag("--tags", value);
        return this;
    }
}

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
class az_ams_account_delete_command_builder extends CommandBuilder<az_ams_account_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_ams_account_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the Azure Media Services account. */
    name(value: string): az_ams_account_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ams_account_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ams_account_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_ams_account_list_command_builder extends CommandBuilder<az_ams_account_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_ams_account_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ams_account_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ams_account_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_ams_account_show_command_builder extends CommandBuilder<az_ams_account_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_ams_account_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the Azure Media Services account. */
    name(value: string): az_ams_account_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_ams_account_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ams_account_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ams_account_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_ams_account_update_command_builder extends CommandBuilder<az_ams_account_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_ams_account_update_command_builder {
        this.setFlag("--add", value);
        return this;
    }

    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_ams_account_update_command_builder {
        this.setFlag("--force-string", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_ams_account_update_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the Azure Media Services account. */
    name(value: string): az_ams_account_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_ams_account_update_command_builder {
        this.setFlag("--remove", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ams_account_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_ams_account_update_command_builder {
        this.setFlag("--set", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ams_account_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_ams_account_update_command_builder {
        this.setFlag("--tags", value);
        return this;
    }
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
class az_ams_asset_filter_create_command_builder extends CommandBuilder<az_ams_asset_filter_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string, assetName: string, name: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.accountName(accountName)
        this.assetName(assetName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the Azure Media Services account. */
    accountName(value: string): az_ams_asset_filter_create_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** The name of the asset. */
    assetName(value: string): az_ams_asset_filter_create_command_builder {
        this.setFlag("--asset-name", value);
        return this;
    }

    /** The name of the asset filter. */
    name(value: string): az_ams_asset_filter_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ams_asset_filter_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The first quality bitrate. */
    bitrate(value: string): az_ams_asset_filter_create_command_builder {
        this.setFlag("--bitrate", value);
        return this;
    }

    /** Applies to Video on Demand (VoD).For the Live Streaming presentation, it is silently ignored and applied when the presentation ends and the stream becomes VoD.This is a long value that represents an absolute end point of the presentation, rounded to the closest next GOP start. The unit is the timescale, so an endTimestamp of 1800000000 would be for 3 minutes.Use startTimestamp and endTimestamp to trim the fragments that will be in the playlist (manifest).For example, startTimestamp=40000000 and endTimestamp=100000000 using the default timescale will generate a playlist that contains fragments from between 4 seconds and 10 seconds of the VoD presentation. If a fragment straddles the boundary, the entire fragment will be included in the manifest. */
    endTimestamp(value: string): az_ams_asset_filter_create_command_builder {
        this.setFlag("--end-timestamp", value);
        return this;
    }

    /** The first quality (lowest) bitrate to include in the manifest. */
    firstQuality(value: string): az_ams_asset_filter_create_command_builder {
        this.setFlag("--first-quality", value);
        return this;
    }

    /** Applies to Live Streaming only. Indicates whether the endTimestamp property must be present. If true, endTimestamp must be specified or a bad request code is returned. Allowed values: false, true. */
    forceEndTimestamp(value: boolean): az_ams_asset_filter_create_command_builder {
        this.setFlag("--force-end-timestamp", value.toString());
        return this;
    }

    /** Applies to Live Streaming only. This value defines the latest live position that a client can seek to. Using this property, you can delay live playback position and create a server-side buffer for players. The unit for this property is timescale (see below). The maximum live back off duration is 300 seconds (3000000000). For example, a value of 2000000000 means that the latest available content is 20 seconds delayed from the real live edge. */
    liveBackoffDuration(value: string): az_ams_asset_filter_create_command_builder {
        this.setFlag("--live-backoff-duration", value);
        return this;
    }

    /** Applies to Live Streaming only.Use presentationWindowDuration to apply a sliding window of fragments to include in a playlist.The unit for this property is timescale (see below).For example, set presentationWindowDuration=1200000000 to apply a two-minute sliding window. Media within 2 minutes of the live edge will be included in the playlist. If a fragment straddles the boundary, the entire fragment will be included in the playlist. The minimum presentation window duration is 60 seconds. */
    presentationWindowDuration(value: string): az_ams_asset_filter_create_command_builder {
        this.setFlag("--presentation-window-duration", value);
        return this;
    }

    /** Applies to Video on Demand (VoD) or Live Streaming. This is a long value that represents an absolute start point of the stream. The value gets rounded to the closest next GOP start. The unit is the timescale, so a startTimestamp of 150000000 would be for 15 seconds. Use startTimestamp and endTimestampp to trim the fragments that will be in the playlist (manifest). For example, startTimestamp=40000000 and endTimestamp=100000000 using the default timescale will generate a playlist that contains fragments from between 4 seconds and 10 seconds of the VoD presentation. If a fragment straddles the boundary, the entire fragment will be included in the manifest. */
    startTimestamp(value: string): az_ams_asset_filter_create_command_builder {
        this.setFlag("--start-timestamp", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ams_asset_filter_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Applies to all timestamps and durations in a Presentation Time Range, specified as the number of increments in one second.Default is 10000000 - ten million increments in one second, where each increment would be 100 nanoseconds long. For example, if you want to set a startTimestamp at 30 seconds, you would use a value of 300000000 when using the default timescale. */
    timescale(value: string): az_ams_asset_filter_create_command_builder {
        this.setFlag("--timescale", value);
        return this;
    }

    /** The JSON representing the track selections. Use @{file} to load from a file. For further information about the JSON structure please refer to swagger documentation on <a href="https://docs.microsoft.com/rest/api/media/assetfilters/createorupdate#filtertrackselection">https://docs.microsoft.com/rest/api/media/assetfilters/createorupdate#filtertrackselection</a>. */
    tracks(value: string): az_ams_asset_filter_create_command_builder {
        this.setFlag("--tracks", value);
        return this;
    }
}

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
class az_ams_asset_filter_delete_command_builder extends CommandBuilder<az_ams_asset_filter_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** The name of the Azure Media Services account. */
    accountName(value: string): az_ams_asset_filter_delete_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** The name of the asset. */
    assetName(value: string): az_ams_asset_filter_delete_command_builder {
        this.setFlag("--asset-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_ams_asset_filter_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the asset filter. */
    name(value: string): az_ams_asset_filter_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ams_asset_filter_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ams_asset_filter_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_ams_asset_filter_list_command_builder extends CommandBuilder<az_ams_asset_filter_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string, assetName: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.accountName(accountName)
        this.assetName(assetName)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the Azure Media Services account. */
    accountName(value: string): az_ams_asset_filter_list_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** The name of the asset. */
    assetName(value: string): az_ams_asset_filter_list_command_builder {
        this.setFlag("--asset-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ams_asset_filter_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_ams_asset_filter_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ams_asset_filter_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_ams_asset_filter_show_command_builder extends CommandBuilder<az_ams_asset_filter_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** The name of the Azure Media Services account. */
    accountName(value: string): az_ams_asset_filter_show_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** The name of the asset. */
    assetName(value: string): az_ams_asset_filter_show_command_builder {
        this.setFlag("--asset-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_ams_asset_filter_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the asset filter. */
    name(value: string): az_ams_asset_filter_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_ams_asset_filter_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ams_asset_filter_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ams_asset_filter_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_ams_asset_filter_update_command_builder extends CommandBuilder<az_ams_asset_filter_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** The name of the Azure Media Services account. */
    accountName(value: string): az_ams_asset_filter_update_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_ams_asset_filter_update_command_builder {
        this.setFlag("--add", value);
        return this;
    }

    /** The name of the asset. */
    assetName(value: string): az_ams_asset_filter_update_command_builder {
        this.setFlag("--asset-name", value);
        return this;
    }

    /** The first quality bitrate. */
    bitrate(value: string): az_ams_asset_filter_update_command_builder {
        this.setFlag("--bitrate", value);
        return this;
    }

    /** Applies to Video on Demand (VoD).For the Live Streaming presentation, it is silently ignored and applied when the presentation ends and the stream becomes VoD.This is a long value that represents an absolute end point of the presentation, rounded to the closest next GOP start. The unit is the timescale, so an endTimestamp of 1800000000 would be for 3 minutes.Use startTimestamp and endTimestamp to trim the fragments that will be in the playlist (manifest).For example, startTimestamp=40000000 and endTimestamp=100000000 using the default timescale will generate a playlist that contains fragments from between 4 seconds and 10 seconds of the VoD presentation. If a fragment straddles the boundary, the entire fragment will be included in the manifest. */
    endTimestamp(value: string): az_ams_asset_filter_update_command_builder {
        this.setFlag("--end-timestamp", value);
        return this;
    }

    /** The first quality (lowest) bitrate to include in the manifest. */
    firstQuality(value: string): az_ams_asset_filter_update_command_builder {
        this.setFlag("--first-quality", value);
        return this;
    }

    /** Applies to Live Streaming only. Indicates whether the endTimestamp property must be present. If true, endTimestamp must be specified or a bad request code is returned. Allowed values: false, true. */
    forceEndTimestamp(value: boolean): az_ams_asset_filter_update_command_builder {
        this.setFlag("--force-end-timestamp", value.toString());
        return this;
    }

    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_ams_asset_filter_update_command_builder {
        this.setFlag("--force-string", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_ams_asset_filter_update_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Applies to Live Streaming only. This value defines the latest live position that a client can seek to. Using this property, you can delay live playback position and create a server-side buffer for players. The unit for this property is timescale (see below). The maximum live back off duration is 300 seconds (3000000000). For example, a value of 2000000000 means that the latest available content is 20 seconds delayed from the real live edge. */
    liveBackoffDuration(value: string): az_ams_asset_filter_update_command_builder {
        this.setFlag("--live-backoff-duration", value);
        return this;
    }

    /** The name of the asset filter. */
    name(value: string): az_ams_asset_filter_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Applies to Live Streaming only.Use presentationWindowDuration to apply a sliding window of fragments to include in a playlist.The unit for this property is timescale (see below).For example, set presentationWindowDuration=1200000000 to apply a two-minute sliding window. Media within 2 minutes of the live edge will be included in the playlist. If a fragment straddles the boundary, the entire fragment will be included in the playlist. The minimum presentation window duration is 60 seconds. */
    presentationWindowDuration(value: string): az_ams_asset_filter_update_command_builder {
        this.setFlag("--presentation-window-duration", value);
        return this;
    }

    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_ams_asset_filter_update_command_builder {
        this.setFlag("--remove", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ams_asset_filter_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_ams_asset_filter_update_command_builder {
        this.setFlag("--set", value);
        return this;
    }

    /** Applies to Video on Demand (VoD) or Live Streaming. This is a long value that represents an absolute start point of the stream. The value gets rounded to the closest next GOP start. The unit is the timescale, so a startTimestamp of 150000000 would be for 15 seconds. Use startTimestamp and endTimestampp to trim the fragments that will be in the playlist (manifest). For example, startTimestamp=40000000 and endTimestamp=100000000 using the default timescale will generate a playlist that contains fragments from between 4 seconds and 10 seconds of the VoD presentation. If a fragment straddles the boundary, the entire fragment will be included in the manifest. */
    startTimestamp(value: string): az_ams_asset_filter_update_command_builder {
        this.setFlag("--start-timestamp", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ams_asset_filter_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Applies to all timestamps and durations in a Presentation Time Range, specified as the number of increments in one second.Default is 10000000 - ten million increments in one second, where each increment would be 100 nanoseconds long. For example, if you want to set a startTimestamp at 30 seconds, you would use a value of 300000000 when using the default timescale. */
    timescale(value: string): az_ams_asset_filter_update_command_builder {
        this.setFlag("--timescale", value);
        return this;
    }

    /** The JSON representing the track selections. Use @{file} to load from a file. For further information about the JSON structure please refer to swagger documentation on <a href="https://docs.microsoft.com/rest/api/media/assetfilters/createorupdate#filtertrackselection">https://docs.microsoft.com/rest/api/media/assetfilters/createorupdate#filtertrackselection</a>. */
    tracks(value: string): az_ams_asset_filter_update_command_builder {
        this.setFlag("--tracks", value);
        return this;
    }
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
class az_ams_asset_create_command_builder extends CommandBuilder<az_ams_asset_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string, name: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.accountName(accountName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the Azure Media Services account. */
    accountName(value: string): az_ams_asset_create_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** The name of the asset. */
    name(value: string): az_ams_asset_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ams_asset_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The alternate id of the asset. */
    alternateId(value: string): az_ams_asset_create_command_builder {
        this.setFlag("--alternate-id", value);
        return this;
    }

    /** The name of the asset blob container. */
    container(value: string): az_ams_asset_create_command_builder {
        this.setFlag("--container", value);
        return this;
    }

    /** The asset description. */
    description(value: string): az_ams_asset_create_command_builder {
        this.setFlag("--description", value);
        return this;
    }

    /** The name of the storage account. */
    storageAccount(value: string): az_ams_asset_create_command_builder {
        this.setFlag("--storage-account", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ams_asset_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_ams_asset_delete_command_builder extends CommandBuilder<az_ams_asset_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** The name of the Azure Media Services account. */
    accountName(value: string): az_ams_asset_delete_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_ams_asset_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the asset. */
    name(value: string): az_ams_asset_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ams_asset_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ams_asset_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_ams_asset_get_encryption_key_command_builder extends CommandBuilder<az_ams_asset_get_encryption_key_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** The name of the Azure Media Services account. */
    accountName(value: string): az_ams_asset_get_encryption_key_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_ams_asset_get_encryption_key_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the asset. */
    name(value: string): az_ams_asset_get_encryption_key_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ams_asset_get_encryption_key_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ams_asset_get_encryption_key_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_ams_asset_get_sas_urls_command_builder extends CommandBuilder<az_ams_asset_get_sas_urls_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** The name of the Azure Media Services account. */
    accountName(value: string): az_ams_asset_get_sas_urls_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Specifies the UTC datetime (Y-m-d'T'H:M:S'Z') at which the SAS becomes invalid. This must be less than 24 hours from the current time. */
    expiry(value: string): az_ams_asset_get_sas_urls_command_builder {
        this.setFlag("--expiry", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_ams_asset_get_sas_urls_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the asset. */
    name(value: string): az_ams_asset_get_sas_urls_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** The permissions to set on the SAS URL. */
    permissions(value: 'Read' | 'ReadWrite' | 'ReadWriteDelete'): az_ams_asset_get_sas_urls_command_builder {
        this.setFlag("--permissions", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ams_asset_get_sas_urls_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ams_asset_get_sas_urls_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_ams_asset_list_command_builder extends CommandBuilder<az_ams_asset_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.accountName(accountName)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the Azure Media Services account. */
    accountName(value: string): az_ams_asset_list_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ams_asset_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Restricts the set of items returned. */
    filter(value: string): az_ams_asset_list_command_builder {
        this.setFlag("--filter", value);
        return this;
    }

    /** Specifies the key by which the result collection should be ordered. */
    orderby(value: string): az_ams_asset_list_command_builder {
        this.setFlag("--orderby", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_ams_asset_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ams_asset_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Specifies a non-negative integer n that limits the number of items returned from a collection. The service returns the number of available items up to but not greater than the specified value n. */
    top(value: string): az_ams_asset_list_command_builder {
        this.setFlag("--top", value);
        return this;
    }
}

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
class az_ams_asset_list_streaming_locators_command_builder extends CommandBuilder<az_ams_asset_list_streaming_locators_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** The name of the Azure Media Services account. */
    accountName(value: string): az_ams_asset_list_streaming_locators_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_ams_asset_list_streaming_locators_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the asset. */
    name(value: string): az_ams_asset_list_streaming_locators_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ams_asset_list_streaming_locators_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ams_asset_list_streaming_locators_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_ams_asset_show_command_builder extends CommandBuilder<az_ams_asset_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** The name of the Azure Media Services account. */
    accountName(value: string): az_ams_asset_show_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_ams_asset_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the asset. */
    name(value: string): az_ams_asset_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_ams_asset_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ams_asset_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ams_asset_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_ams_asset_update_command_builder extends CommandBuilder<az_ams_asset_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** The name of the Azure Media Services account. */
    accountName(value: string): az_ams_asset_update_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_ams_asset_update_command_builder {
        this.setFlag("--add", value);
        return this;
    }

    /** The alternate id of the asset. */
    alternateId(value: string): az_ams_asset_update_command_builder {
        this.setFlag("--alternate-id", value);
        return this;
    }

    /** The asset description. */
    description(value: string): az_ams_asset_update_command_builder {
        this.setFlag("--description", value);
        return this;
    }

    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_ams_asset_update_command_builder {
        this.setFlag("--force-string", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_ams_asset_update_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the asset. */
    name(value: string): az_ams_asset_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_ams_asset_update_command_builder {
        this.setFlag("--remove", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ams_asset_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_ams_asset_update_command_builder {
        this.setFlag("--set", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ams_asset_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_ams_content_key_policy_option_add_command_builder extends CommandBuilder<az_ams_content_key_policy_option_add_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, policyOptionName: string) {
        super(commandPath, resultDataTypeName);
        this.policyOptionName(policyOptionName)
    }

    /** The content key policy option name. */
    policyOptionName(value: string): az_ams_content_key_policy_option_add_command_builder {
        this.setFlag("--policy-option-name", value);
        return this;
    }

    /** The name of the Azure Media Services account. */
    accountName(value: string): az_ams_content_key_policy_option_add_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Space-separated list of alternate rsa token keys. */
    altRsaTokenKeys(value: string): az_ams_content_key_policy_option_add_command_builder {
        this.setFlag("--alt-rsa-token-keys", value);
        return this;
    }

    /** Space-separated list of alternate symmetric token keys. */
    altSymmetricTokenKeys(value: string): az_ams_content_key_policy_option_add_command_builder {
        this.setFlag("--alt-symmetric-token-keys", value);
        return this;
    }

    /** Space-separated list of alternate x509 certificate token keys. */
    altX509TokenKeys(value: string): az_ams_content_key_policy_option_add_command_builder {
        this.setFlag("--alt-x509-token-keys", value);
        return this;
    }

    /** The key that must be used as FairPlay Application Secret Key, which is a 32 character hex string. */
    ask(value: string): az_ams_content_key_policy_option_add_command_builder {
        this.setFlag("--ask", value);
        return this;
    }

    /** The audience for the token. */
    audience(value: string): az_ams_content_key_policy_option_add_command_builder {
        this.setFlag("--audience", value);
        return this;
    }

    /** Use Clear Key configuration, a.k.a AES encryption. It's intended for non-DRM keys. */
    clearKeyConfiguration(value: string): az_ams_content_key_policy_option_add_command_builder {
        this.setFlag("--clear-key-configuration", value);
        return this;
    }

    /** The filepath to a FairPlay certificate file in PKCS 12 (pfx) format (including private key). */
    fairPlayPfx(value: string): az_ams_content_key_policy_option_add_command_builder {
        this.setFlag("--fair-play-pfx", value);
        return this;
    }

    /** The password encrypting FairPlay certificate in PKCS 12 (pfx) format. */
    fairPlayPfxPassword(value: string): az_ams_content_key_policy_option_add_command_builder {
        this.setFlag("--fair-play-pfx-password", value);
        return this;
    }

    /** Playback duration. */
    fpPlaybackDurationSeconds(value: string): az_ams_content_key_policy_option_add_command_builder {
        this.setFlag("--fp-playback-duration-seconds", value);
        return this;
    }

    /** Storage duration. */
    fpStorageDurationSeconds(value: string): az_ams_content_key_policy_option_add_command_builder {
        this.setFlag("--fp-storage-duration-seconds", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_ams_content_key_policy_option_add_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The token issuer. */
    issuer(value: string): az_ams_content_key_policy_option_add_command_builder {
        this.setFlag("--issuer", value);
        return this;
    }

    /** The content key policy name. */
    name(value: string): az_ams_content_key_policy_option_add_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** The OpenID connect discovery document. */
    openIdConnectDiscoveryDocument(value: string): az_ams_content_key_policy_option_add_command_builder {
        this.setFlag("--open-id-connect-discovery-document", value);
        return this;
    }

    /** Use open restriction. License or key will be delivered on every request. Not recommended for production environments. */
    openRestriction(value: string): az_ams_content_key_policy_option_add_command_builder {
        this.setFlag("--open-restriction", value);
        return this;
    }

    /** JSON PlayReady license template. Use @{file} to load from a file. */
    playReadyTemplate(value: string): az_ams_content_key_policy_option_add_command_builder {
        this.setFlag("--play-ready-template", value);
        return this;
    }

    /** The rental and lease key type. Available values: Undefined, DualExpiry, PersistentUnlimited, PersistentLimited. */
    rentalAndLeaseKeyType(value: string): az_ams_content_key_policy_option_add_command_builder {
        this.setFlag("--rental-and-lease-key-type", value);
        return this;
    }

    /** The rental duration. Must be greater than or equal to 0. */
    rentalDuration(value: string): az_ams_content_key_policy_option_add_command_builder {
        this.setFlag("--rental-duration", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ams_content_key_policy_option_add_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ams_content_key_policy_option_add_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated required token claims in '[key=value]' format. */
    tokenClaims(value: string): az_ams_content_key_policy_option_add_command_builder {
        this.setFlag("--token-claims", value);
        return this;
    }

    /** Either a string (for symmetric key) or a filepath to a certificate (x509) or public key (rsa). Must be used in conjunction with --token-key-type. */
    tokenKey(value: string): az_ams_content_key_policy_option_add_command_builder {
        this.setFlag("--token-key", value);
        return this;
    }

    /** The type of the token key to be used for the primary verification key. Allowed values: Symmetric, RSA, X509. */
    tokenKeyType(value: string): az_ams_content_key_policy_option_add_command_builder {
        this.setFlag("--token-key-type", value);
        return this;
    }

    /** The type of token. Allowed values: Jwt, Swt. */
    tokenType(value: string): az_ams_content_key_policy_option_add_command_builder {
        this.setFlag("--token-type", value);
        return this;
    }

    /** JSON Widevine license template. Use @{file} to load from a file. */
    widevineTemplate(value: string): az_ams_content_key_policy_option_add_command_builder {
        this.setFlag("--widevine-template", value);
        return this;
    }
}

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
class az_ams_content_key_policy_option_remove_command_builder extends CommandBuilder<az_ams_content_key_policy_option_remove_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, policyOptionId: string) {
        super(commandPath, resultDataTypeName);
        this.policyOptionId(policyOptionId)
    }

    /** The content key policy option identifier. This value can be obtained from "policyOptionId" property by running a show operation on a content key policy resource. */
    policyOptionId(value: string): az_ams_content_key_policy_option_remove_command_builder {
        this.setFlag("--policy-option-id", value);
        return this;
    }

    /** The name of the Azure Media Services account. */
    accountName(value: string): az_ams_content_key_policy_option_remove_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_ams_content_key_policy_option_remove_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The content key policy name. */
    name(value: string): az_ams_content_key_policy_option_remove_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ams_content_key_policy_option_remove_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ams_content_key_policy_option_remove_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_ams_content_key_policy_option_update_command_builder extends CommandBuilder<az_ams_content_key_policy_option_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, policyOptionId: string) {
        super(commandPath, resultDataTypeName);
        this.policyOptionId(policyOptionId)
    }

    /** The content key policy option identifier. This value can be obtained from "policyOptionId" property by running a show operation on a content key policy resource. */
    policyOptionId(value: string): az_ams_content_key_policy_option_update_command_builder {
        this.setFlag("--policy-option-id", value);
        return this;
    }

    /** The name of the Azure Media Services account. */
    accountName(value: string): az_ams_content_key_policy_option_update_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Creates an alternate token key with either a string (for symmetric key) or a filepath to a certificate (x509) or public key (rsa). Must be used in conjunction with --add-alt-token-key-type. */
    addAltTokenKey(value: string): az_ams_content_key_policy_option_update_command_builder {
        this.setFlag("--add-alt-token-key", value);
        return this;
    }

    /** The type of the token key to be used for the alternate verification key. Allowed values: Symmetric, RSA, X509. */
    addAltTokenKeyType(value: string): az_ams_content_key_policy_option_update_command_builder {
        this.setFlag("--add-alt-token-key-type", value);
        return this;
    }

    /** The key that must be used as FairPlay Application Secret Key, which is a 32 character hex string. */
    ask(value: string): az_ams_content_key_policy_option_update_command_builder {
        this.setFlag("--ask", value);
        return this;
    }

    /** The audience for the token. */
    audience(value: string): az_ams_content_key_policy_option_update_command_builder {
        this.setFlag("--audience", value);
        return this;
    }

    /** The filepath to a FairPlay certificate file in PKCS 12 (pfx) format (including private key). */
    fairPlayPfx(value: string): az_ams_content_key_policy_option_update_command_builder {
        this.setFlag("--fair-play-pfx", value);
        return this;
    }

    /** The password encrypting FairPlay certificate in PKCS 12 (pfx) format. */
    fairPlayPfxPassword(value: string): az_ams_content_key_policy_option_update_command_builder {
        this.setFlag("--fair-play-pfx-password", value);
        return this;
    }

    /** Playback duration. */
    fpPlaybackDurationSeconds(value: string): az_ams_content_key_policy_option_update_command_builder {
        this.setFlag("--fp-playback-duration-seconds", value);
        return this;
    }

    /** Storage duration. */
    fpStorageDurationSeconds(value: string): az_ams_content_key_policy_option_update_command_builder {
        this.setFlag("--fp-storage-duration-seconds", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_ams_content_key_policy_option_update_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The token issuer. */
    issuer(value: string): az_ams_content_key_policy_option_update_command_builder {
        this.setFlag("--issuer", value);
        return this;
    }

    /** The content key policy name. */
    name(value: string): az_ams_content_key_policy_option_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** The OpenID connect discovery document. */
    openIdConnectDiscoveryDocument(value: string): az_ams_content_key_policy_option_update_command_builder {
        this.setFlag("--open-id-connect-discovery-document", value);
        return this;
    }

    /** JSON PlayReady license template. Use @{file} to load from a file. */
    playReadyTemplate(value: string): az_ams_content_key_policy_option_update_command_builder {
        this.setFlag("--play-ready-template", value);
        return this;
    }

    /** The content key policy option name. */
    policyOptionName(value: string): az_ams_content_key_policy_option_update_command_builder {
        this.setFlag("--policy-option-name", value);
        return this;
    }

    /** The rental and lease key type. Available values: Undefined, DualExpiry, PersistentUnlimited, PersistentLimited. */
    rentalAndLeaseKeyType(value: string): az_ams_content_key_policy_option_update_command_builder {
        this.setFlag("--rental-and-lease-key-type", value);
        return this;
    }

    /** The rental duration. Must be greater than or equal to 0. */
    rentalDuration(value: string): az_ams_content_key_policy_option_update_command_builder {
        this.setFlag("--rental-duration", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ams_content_key_policy_option_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ams_content_key_policy_option_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated required token claims in '[key=value]' format. */
    tokenClaims(value: string): az_ams_content_key_policy_option_update_command_builder {
        this.setFlag("--token-claims", value);
        return this;
    }

    /** Either a string (for symmetric key) or a filepath to a certificate (x509) or public key (rsa). Must be used in conjunction with --token-key-type. */
    tokenKey(value: string): az_ams_content_key_policy_option_update_command_builder {
        this.setFlag("--token-key", value);
        return this;
    }

    /** The type of the token key to be used for the primary verification key. Allowed values: Symmetric, RSA, X509. */
    tokenKeyType(value: string): az_ams_content_key_policy_option_update_command_builder {
        this.setFlag("--token-key-type", value);
        return this;
    }

    /** The type of token. Allowed values: Jwt, Swt. */
    tokenType(value: string): az_ams_content_key_policy_option_update_command_builder {
        this.setFlag("--token-type", value);
        return this;
    }

    /** JSON Widevine license template. Use @{file} to load from a file. */
    widevineTemplate(value: string): az_ams_content_key_policy_option_update_command_builder {
        this.setFlag("--widevine-template", value);
        return this;
    }
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
class az_ams_content_key_policy_create_command_builder extends CommandBuilder<az_ams_content_key_policy_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string, name: string, policyOptionName: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.accountName(accountName)
        this.name(name)
        this.policyOptionName(policyOptionName)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the Azure Media Services account. */
    accountName(value: string): az_ams_content_key_policy_create_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** The content key policy name. */
    name(value: string): az_ams_content_key_policy_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** The content key policy option name. */
    policyOptionName(value: string): az_ams_content_key_policy_create_command_builder {
        this.setFlag("--policy-option-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ams_content_key_policy_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Space-separated list of alternate rsa token keys. */
    altRsaTokenKeys(value: string): az_ams_content_key_policy_create_command_builder {
        this.setFlag("--alt-rsa-token-keys", value);
        return this;
    }

    /** Space-separated list of alternate symmetric token keys. */
    altSymmetricTokenKeys(value: string): az_ams_content_key_policy_create_command_builder {
        this.setFlag("--alt-symmetric-token-keys", value);
        return this;
    }

    /** Space-separated list of alternate x509 certificate token keys. */
    altX509TokenKeys(value: string): az_ams_content_key_policy_create_command_builder {
        this.setFlag("--alt-x509-token-keys", value);
        return this;
    }

    /** The key that must be used as FairPlay Application Secret Key, which is a 32 character hex string. */
    ask(value: string): az_ams_content_key_policy_create_command_builder {
        this.setFlag("--ask", value);
        return this;
    }

    /** The audience for the token. */
    audience(value: string): az_ams_content_key_policy_create_command_builder {
        this.setFlag("--audience", value);
        return this;
    }

    /** Use Clear Key configuration, a.k.a AES encryption. It's intended for non-DRM keys. */
    clearKeyConfiguration(value: string): az_ams_content_key_policy_create_command_builder {
        this.setFlag("--clear-key-configuration", value);
        return this;
    }

    /** The content key policy description. */
    description(value: string): az_ams_content_key_policy_create_command_builder {
        this.setFlag("--description", value);
        return this;
    }

    /** The filepath to a FairPlay certificate file in PKCS 12 (pfx) format (including private key). */
    fairPlayPfx(value: string): az_ams_content_key_policy_create_command_builder {
        this.setFlag("--fair-play-pfx", value);
        return this;
    }

    /** The password encrypting FairPlay certificate in PKCS 12 (pfx) format. */
    fairPlayPfxPassword(value: string): az_ams_content_key_policy_create_command_builder {
        this.setFlag("--fair-play-pfx-password", value);
        return this;
    }

    /** Playback duration. */
    fpPlaybackDurationSeconds(value: string): az_ams_content_key_policy_create_command_builder {
        this.setFlag("--fp-playback-duration-seconds", value);
        return this;
    }

    /** Storage duration. */
    fpStorageDurationSeconds(value: string): az_ams_content_key_policy_create_command_builder {
        this.setFlag("--fp-storage-duration-seconds", value);
        return this;
    }

    /** The token issuer. */
    issuer(value: string): az_ams_content_key_policy_create_command_builder {
        this.setFlag("--issuer", value);
        return this;
    }

    /** The OpenID connect discovery document. */
    openIdConnectDiscoveryDocument(value: string): az_ams_content_key_policy_create_command_builder {
        this.setFlag("--open-id-connect-discovery-document", value);
        return this;
    }

    /** Use open restriction. License or key will be delivered on every request. Not recommended for production environments. */
    openRestriction(value: string): az_ams_content_key_policy_create_command_builder {
        this.setFlag("--open-restriction", value);
        return this;
    }

    /** JSON PlayReady license template. Use @{file} to load from a file. */
    playReadyTemplate(value: string): az_ams_content_key_policy_create_command_builder {
        this.setFlag("--play-ready-template", value);
        return this;
    }

    /** The rental and lease key type. Available values: Undefined, DualExpiry, PersistentUnlimited, PersistentLimited. */
    rentalAndLeaseKeyType(value: string): az_ams_content_key_policy_create_command_builder {
        this.setFlag("--rental-and-lease-key-type", value);
        return this;
    }

    /** The rental duration. Must be greater than or equal to 0. */
    rentalDuration(value: string): az_ams_content_key_policy_create_command_builder {
        this.setFlag("--rental-duration", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ams_content_key_policy_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated required token claims in '[key=value]' format. */
    tokenClaims(value: string): az_ams_content_key_policy_create_command_builder {
        this.setFlag("--token-claims", value);
        return this;
    }

    /** Either a string (for symmetric key) or a filepath to a certificate (x509) or public key (rsa). Must be used in conjunction with --token-key-type. */
    tokenKey(value: string): az_ams_content_key_policy_create_command_builder {
        this.setFlag("--token-key", value);
        return this;
    }

    /** The type of the token key to be used for the primary verification key. Allowed values: Symmetric, RSA, X509. */
    tokenKeyType(value: string): az_ams_content_key_policy_create_command_builder {
        this.setFlag("--token-key-type", value);
        return this;
    }

    /** The type of token. Allowed values: Jwt, Swt. */
    tokenType(value: string): az_ams_content_key_policy_create_command_builder {
        this.setFlag("--token-type", value);
        return this;
    }

    /** JSON Widevine license template. Use @{file} to load from a file. */
    widevineTemplate(value: string): az_ams_content_key_policy_create_command_builder {
        this.setFlag("--widevine-template", value);
        return this;
    }
}

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
class az_ams_content_key_policy_delete_command_builder extends CommandBuilder<az_ams_content_key_policy_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** The name of the Azure Media Services account. */
    accountName(value: string): az_ams_content_key_policy_delete_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_ams_content_key_policy_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The content key policy name. */
    name(value: string): az_ams_content_key_policy_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ams_content_key_policy_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ams_content_key_policy_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_ams_content_key_policy_list_command_builder extends CommandBuilder<az_ams_content_key_policy_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.accountName(accountName)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the Azure Media Services account. */
    accountName(value: string): az_ams_content_key_policy_list_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ams_content_key_policy_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Restricts the set of items returned. */
    filter(value: string): az_ams_content_key_policy_list_command_builder {
        this.setFlag("--filter", value);
        return this;
    }

    /** Specifies the key by which the result collection should be ordered. */
    orderby(value: string): az_ams_content_key_policy_list_command_builder {
        this.setFlag("--orderby", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_ams_content_key_policy_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ams_content_key_policy_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Specifies a non-negative integer n that limits the number of items returned from a collection. The service returns the number of available items up to but not greater than the specified value n. */
    top(value: string): az_ams_content_key_policy_list_command_builder {
        this.setFlag("--top", value);
        return this;
    }
}

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
class az_ams_content_key_policy_show_command_builder extends CommandBuilder<az_ams_content_key_policy_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** The name of the Azure Media Services account. */
    accountName(value: string): az_ams_content_key_policy_show_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_ams_content_key_policy_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The content key policy name. */
    name(value: string): az_ams_content_key_policy_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_ams_content_key_policy_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ams_content_key_policy_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ams_content_key_policy_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Include secret values of the content key policy. */
    withSecrets(value: string): az_ams_content_key_policy_show_command_builder {
        this.setFlag("--with-secrets", value);
        return this;
    }
}

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
class az_ams_content_key_policy_update_command_builder extends CommandBuilder<az_ams_content_key_policy_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** The name of the Azure Media Services account. */
    accountName(value: string): az_ams_content_key_policy_update_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_ams_content_key_policy_update_command_builder {
        this.setFlag("--add", value);
        return this;
    }

    /** The content key policy description. */
    description(value: string): az_ams_content_key_policy_update_command_builder {
        this.setFlag("--description", value);
        return this;
    }

    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_ams_content_key_policy_update_command_builder {
        this.setFlag("--force-string", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_ams_content_key_policy_update_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The content key policy name. */
    name(value: string): az_ams_content_key_policy_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_ams_content_key_policy_update_command_builder {
        this.setFlag("--remove", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ams_content_key_policy_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_ams_content_key_policy_update_command_builder {
        this.setFlag("--set", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ams_content_key_policy_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_ams_job_cancel_command_builder extends CommandBuilder<az_ams_job_cancel_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** The name of the Azure Media Services account. */
    accountName(value: string): az_ams_job_cancel_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Delete the job being cancelled. */
    delete(value: string): az_ams_job_cancel_command_builder {
        this.setFlag("--delete", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_ams_job_cancel_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the job. */
    name(value: string): az_ams_job_cancel_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ams_job_cancel_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ams_job_cancel_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** The name of the transform. */
    transformName(value: string): az_ams_job_cancel_command_builder {
        this.setFlag("--transform-name", value);
        return this;
    }
}

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
class az_ams_job_delete_command_builder extends CommandBuilder<az_ams_job_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** The name of the Azure Media Services account. */
    accountName(value: string): az_ams_job_delete_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_ams_job_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the job. */
    name(value: string): az_ams_job_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ams_job_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ams_job_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** The name of the transform. */
    transformName(value: string): az_ams_job_delete_command_builder {
        this.setFlag("--transform-name", value);
        return this;
    }
}

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
class az_ams_job_list_command_builder extends CommandBuilder<az_ams_job_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string, resourceGroup: string, transformName: string) {
        super(commandPath, resultDataTypeName);
        this.accountName(accountName)
        this.resourceGroup(resourceGroup)
        this.transformName(transformName)
    }

    /** The name of the Azure Media Services account. */
    accountName(value: string): az_ams_job_list_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ams_job_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the transform. */
    transformName(value: string): az_ams_job_list_command_builder {
        this.setFlag("--transform-name", value);
        return this;
    }

    /** Restricts the set of items returned. */
    filter(value: string): az_ams_job_list_command_builder {
        this.setFlag("--filter", value);
        return this;
    }

    /** Specifies the key by which the result collection should be ordered. */
    orderby(value: string): az_ams_job_list_command_builder {
        this.setFlag("--orderby", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_ams_job_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ams_job_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_ams_job_show_command_builder extends CommandBuilder<az_ams_job_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** The name of the Azure Media Services account. */
    accountName(value: string): az_ams_job_show_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_ams_job_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the job. */
    name(value: string): az_ams_job_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_ams_job_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ams_job_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ams_job_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** The name of the transform. */
    transformName(value: string): az_ams_job_show_command_builder {
        this.setFlag("--transform-name", value);
        return this;
    }
}

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
class az_ams_job_start_command_builder extends CommandBuilder<az_ams_job_start_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, outputAssets: string) {
        super(commandPath, resultDataTypeName);
        this.outputAssets(outputAssets)
    }

    /** Space-separated assets in 'assetName=label' format. An asset without label can be sent like this: 'assetName='. */
    outputAssets(value: string): az_ams_job_start_command_builder {
        this.setFlag("--output-assets", value);
        return this;
    }

    /** The name of the Azure Media Services account. */
    accountName(value: string): az_ams_job_start_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Base uri for http job input. It will be concatenated with provided file names. If no base uri is given, then the provided file list is assumed to be fully qualified uris. */
    baseUri(value: string): az_ams_job_start_command_builder {
        this.setFlag("--base-uri", value);
        return this;
    }

    /** Space-separated correlation data in 'key[=value]' format. This customer provided data will be returned in Job and JobOutput state events. */
    correlationData(value: string): az_ams_job_start_command_builder {
        this.setFlag("--correlation-data", value);
        return this;
    }

    /** The job description. */
    description(value: string): az_ams_job_start_command_builder {
        this.setFlag("--description", value);
        return this;
    }

    /** Space-separated list of files. It can be used to tell the service to only use the files specified from the input asset. */
    files(value: string): az_ams_job_start_command_builder {
        this.setFlag("--files", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_ams_job_start_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the input asset. */
    inputAssetName(value: string): az_ams_job_start_command_builder {
        this.setFlag("--input-asset-name", value);
        return this;
    }

    /** A label that is assigned to a Job Input that is used to satisfy a reference used in the Transform. For example, a Transform can be authored to take an image file with the label 'xyz' and apply it as an overlay onto the input video before it is encoded. When submitting a Job, exactly one of the JobInputs should be the image file, and it should have the label 'xyz'. */
    label(value: string): az_ams_job_start_command_builder {
        this.setFlag("--label", value);
        return this;
    }

    /** The name of the job. */
    name(value: string): az_ams_job_start_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** The priority with which the job should be processed. */
    priority(value: 'High' | 'Low' | 'Normal'): az_ams_job_start_command_builder {
        this.setFlag("--priority", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ams_job_start_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ams_job_start_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** The name of the transform. */
    transformName(value: string): az_ams_job_start_command_builder {
        this.setFlag("--transform-name", value);
        return this;
    }
}

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
class az_ams_job_update_command_builder extends CommandBuilder<az_ams_job_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** The name of the Azure Media Services account. */
    accountName(value: string): az_ams_job_update_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_ams_job_update_command_builder {
        this.setFlag("--add", value);
        return this;
    }

    /** The job description. */
    description(value: string): az_ams_job_update_command_builder {
        this.setFlag("--description", value);
        return this;
    }

    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_ams_job_update_command_builder {
        this.setFlag("--force-string", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_ams_job_update_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the job. */
    name(value: string): az_ams_job_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** The priority with which the job should be processed. */
    priority(value: 'High' | 'Low' | 'Normal'): az_ams_job_update_command_builder {
        this.setFlag("--priority", value);
        return this;
    }

    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_ams_job_update_command_builder {
        this.setFlag("--remove", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ams_job_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_ams_job_update_command_builder {
        this.setFlag("--set", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ams_job_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** The name of the transform. */
    transformName(value: string): az_ams_job_update_command_builder {
        this.setFlag("--transform-name", value);
        return this;
    }
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
class az_ams_live_event_create_command_builder extends CommandBuilder<az_ams_live_event_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string, ips: string, name: string, resourceGroup: string, streamingProtocol: 'FragmentedMP4' | 'RTMP') {
        super(commandPath, resultDataTypeName);
        this.accountName(accountName)
        this.ips(ips)
        this.name(name)
        this.resourceGroup(resourceGroup)
        this.streamingProtocol(streamingProtocol)
    }

    /** The name of the Azure Media Services account. */
    accountName(value: string): az_ams_live_event_create_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Space-separated IP addresses for access control. Allowed IP addresses can be specified as either a single IP address (e.g. "10.0.0.1") or as an IP range using an IP address and a CIDR subnet mask (e.g. "10.0.0.1/22"). Use "" to clear existing list. Use "AllowAll" to allow all IP addresses. Allowing all IPs is not recommended for production environments. */
    ips(value: string): az_ams_live_event_create_command_builder {
        this.setFlag("--ips", value);
        return this;
    }

    /** The name of the live event. */
    name(value: string): az_ams_live_event_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ams_live_event_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The streaming protocol for the live event. This value is specified at creation time and cannot be updated. */
    streamingProtocol(value: 'FragmentedMP4' | 'RTMP'): az_ams_live_event_create_command_builder {
        this.setFlag("--streaming-protocol", value);
        return this;
    }

    /** A unique identifier for a stream. This can be specified at creation time but cannot be updated. If omitted, the service will generate a unique value. */
    accessToken(value: string): az_ams_live_event_create_command_builder {
        this.setFlag("--access-token", value);
        return this;
    }

    /** An Alternative Media Identifier associated with the StreamingLocator created for the preview. This value is specified at creation time and cannot be updated. The identifier can be used in the CustomLicenseAcquisitionUrlTemplate or the CustomKeyAcquisitionUrlTemplate of the StreamingPolicy specified in the StreamingPolicyName field. */
    alternativeMediaId(value: string): az_ams_live_event_create_command_builder {
        this.setFlag("--alternative-media-id", value);
        return this;
    }

    /** The flag indicates if the resource should be automatically started on creation. */
    autoStart(value: string): az_ams_live_event_create_command_builder {
        this.setFlag("--auto-start", value);
        return this;
    }

    /** Filepath to the clientaccesspolicy.xml used by Microsoft Silverlight and Adobe Flash. Use @{file} to load from a file. */
    clientAccessPolicy(value: string): az_ams_live_event_create_command_builder {
        this.setFlag("--client-access-policy", value);
        return this;
    }

    /** Filepath to the crossdomain.xml used by Microsoft Silverlight and Adobe Flash. Use @{file} to load from a file. */
    crossDomainPolicy(value: string): az_ams_live_event_create_command_builder {
        this.setFlag("--cross-domain-policy", value);
        return this;
    }

    /** The live event description. */
    description(value: string): az_ams_live_event_create_command_builder {
        this.setFlag("--description", value);
        return this;
    }

    /** The encoding type for live event. This value is specified at creation time and cannot be updated. Allowed values: Basic, None, Standard. */
    encodingType(value: string): az_ams_live_event_create_command_builder {
        this.setFlag("--encoding-type", value);
        return this;
    }

    /** ISO 8601 timespan duration of the key frame interval duration in seconds. The value should be an interger in the range of 1 (PT1S or 00:00:01) to 30 (PT30S or 00:00:30) seconds. */
    keyFrameIntervalDuration(value: string): az_ams_live_event_create_command_builder {
        this.setFlag("--key-frame-interval-duration", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_ams_live_event_create_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** The encoding preset name. This value is specified at creation time and cannot be updated. */
    presetName(value: string): az_ams_live_event_create_command_builder {
        this.setFlag("--preset-name", value);
        return this;
    }

    /** Space-separated IP addresses for access control. Allowed IP addresses can be specified as either a single IP address (e.g. "10.0.0.1") or as an IP range using an IP address and a CIDR subnet mask (e.g. "10.0.0.1/22"). Use "" to clear existing list. Use "AllowAll" to allow all IP addresses. Allowing all IPs is not recommended for production environments. */
    previewIps(value: string): az_ams_live_event_create_command_builder {
        this.setFlag("--preview-ips", value);
        return this;
    }

    /** The identifier of the preview locator in Guid format. Specifying this at creation time allows the caller to know the preview locator url before the event is created. If omitted, the service will generate a random identifier. This value cannot be updated once the live event is created. */
    previewLocator(value: string): az_ams_live_event_create_command_builder {
        this.setFlag("--preview-locator", value);
        return this;
    }

    /** The options to use for the LiveEvent. This value is specified at creation time and cannot be updated. */
    streamOptions(value: 'Default' | 'LowLatency'): az_ams_live_event_create_command_builder {
        this.setFlag("--stream-options", value);
        return this;
    }

    /** The name of streaming policy used for the live event preview. This can be specified at creation time but cannot be updated. */
    streamingPolicyName(value: string): az_ams_live_event_create_command_builder {
        this.setFlag("--streaming-policy-name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ams_live_event_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_ams_live_event_create_command_builder {
        this.setFlag("--tags", value);
        return this;
    }

    /** Specifies whether to use a vanity url with the Live Event. This value is specified at creation time and cannot be updated. */
    vanityUrl(value: boolean): az_ams_live_event_create_command_builder {
        this.setFlag("--vanity-url", value.toString());
        return this;
    }
}

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
class az_ams_live_event_delete_command_builder extends CommandBuilder<az_ams_live_event_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** The name of the Azure Media Services account. */
    accountName(value: string): az_ams_live_event_delete_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_ams_live_event_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the live event. */
    name(value: string): az_ams_live_event_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ams_live_event_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ams_live_event_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_ams_live_event_list_command_builder extends CommandBuilder<az_ams_live_event_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.accountName(accountName)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the Azure Media Services account. */
    accountName(value: string): az_ams_live_event_list_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ams_live_event_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_ams_live_event_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ams_live_event_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_ams_live_event_reset_command_builder extends CommandBuilder<az_ams_live_event_reset_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** The name of the Azure Media Services account. */
    accountName(value: string): az_ams_live_event_reset_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_ams_live_event_reset_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the live event. */
    name(value: string): az_ams_live_event_reset_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_ams_live_event_reset_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ams_live_event_reset_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ams_live_event_reset_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_ams_live_event_show_command_builder extends CommandBuilder<az_ams_live_event_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** The name of the Azure Media Services account. */
    accountName(value: string): az_ams_live_event_show_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_ams_live_event_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the live event. */
    name(value: string): az_ams_live_event_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_ams_live_event_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ams_live_event_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ams_live_event_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_ams_live_event_start_command_builder extends CommandBuilder<az_ams_live_event_start_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** The name of the Azure Media Services account. */
    accountName(value: string): az_ams_live_event_start_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_ams_live_event_start_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the live event. */
    name(value: string): az_ams_live_event_start_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_ams_live_event_start_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ams_live_event_start_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ams_live_event_start_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_ams_live_event_stop_command_builder extends CommandBuilder<az_ams_live_event_stop_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** The name of the Azure Media Services account. */
    accountName(value: string): az_ams_live_event_stop_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_ams_live_event_stop_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the live event. */
    name(value: string): az_ams_live_event_stop_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_ams_live_event_stop_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Remove live outputs on stop. */
    removeOutputsOnStop(value: string): az_ams_live_event_stop_command_builder {
        this.setFlag("--remove-outputs-on-stop", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ams_live_event_stop_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ams_live_event_stop_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_ams_live_event_update_command_builder extends CommandBuilder<az_ams_live_event_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** The name of the Azure Media Services account. */
    accountName(value: string): az_ams_live_event_update_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_ams_live_event_update_command_builder {
        this.setFlag("--add", value);
        return this;
    }

    /** Filepath to the clientaccesspolicy.xml used by Microsoft Silverlight and Adobe Flash. Use @{file} to load from a file. */
    clientAccessPolicy(value: string): az_ams_live_event_update_command_builder {
        this.setFlag("--client-access-policy", value);
        return this;
    }

    /** Filepath to the crossdomain.xml used by Microsoft Silverlight and Adobe Flash. Use @{file} to load from a file. */
    crossDomainPolicy(value: string): az_ams_live_event_update_command_builder {
        this.setFlag("--cross-domain-policy", value);
        return this;
    }

    /** The live event description. */
    description(value: string): az_ams_live_event_update_command_builder {
        this.setFlag("--description", value);
        return this;
    }

    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_ams_live_event_update_command_builder {
        this.setFlag("--force-string", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_ams_live_event_update_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Space-separated IP addresses for access control. Allowed IP addresses can be specified as either a single IP address (e.g. "10.0.0.1") or as an IP range using an IP address and a CIDR subnet mask (e.g. "10.0.0.1/22"). Use "" to clear existing list. Use "AllowAll" to allow all IP addresses. Allowing all IPs is not recommended for production environments. */
    ips(value: string): az_ams_live_event_update_command_builder {
        this.setFlag("--ips", value);
        return this;
    }

    /** ISO 8601 timespan duration of the key frame interval duration in seconds. The value should be an interger in the range of 1 (PT1S or 00:00:01) to 30 (PT30S or 00:00:30) seconds. */
    keyFrameIntervalDuration(value: string): az_ams_live_event_update_command_builder {
        this.setFlag("--key-frame-interval-duration", value);
        return this;
    }

    /** The name of the live event. */
    name(value: string): az_ams_live_event_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Space-separated IP addresses for access control. Allowed IP addresses can be specified as either a single IP address (e.g. "10.0.0.1") or as an IP range using an IP address and a CIDR subnet mask (e.g. "10.0.0.1/22"). Use "" to clear existing list. Use "AllowAll" to allow all IP addresses. Allowing all IPs is not recommended for production environments. */
    previewIps(value: string): az_ams_live_event_update_command_builder {
        this.setFlag("--preview-ips", value);
        return this;
    }

    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_ams_live_event_update_command_builder {
        this.setFlag("--remove", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ams_live_event_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_ams_live_event_update_command_builder {
        this.setFlag("--set", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ams_live_event_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_ams_live_event_update_command_builder {
        this.setFlag("--tags", value);
        return this;
    }
}

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
class az_ams_live_event_wait_command_builder extends CommandBuilder<az_ams_live_event_wait_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** The name of the Azure Media Services account. */
    accountName(value: string): az_ams_live_event_wait_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    created(value: string): az_ams_live_event_wait_command_builder {
        this.setFlag("--created", value);
        return this;
    }

    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    custom(value: string): az_ams_live_event_wait_command_builder {
        this.setFlag("--custom", value);
        return this;
    }

    /** Wait until deleted. */
    deleted(value: string): az_ams_live_event_wait_command_builder {
        this.setFlag("--deleted", value);
        return this;
    }

    /** Wait until the resource exists. */
    exists(value: string): az_ams_live_event_wait_command_builder {
        this.setFlag("--exists", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_ams_live_event_wait_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Polling interval in seconds. */
    interval(value: string): az_ams_live_event_wait_command_builder {
        this.setFlag("--interval", value);
        return this;
    }

    /** The name of the live event. */
    name(value: string): az_ams_live_event_wait_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ams_live_event_wait_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ams_live_event_wait_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Maximum wait in seconds. */
    timeout(value: string): az_ams_live_event_wait_command_builder {
        this.setFlag("--timeout", value);
        return this;
    }

    /** Wait until updated with provisioningState at 'Succeeded'. */
    updated(value: string): az_ams_live_event_wait_command_builder {
        this.setFlag("--updated", value);
        return this;
    }
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
class az_ams_live_output_create_command_builder extends CommandBuilder<az_ams_live_output_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string, archiveWindowLength: string, assetName: string, liveEventName: string, name: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.accountName(accountName)
        this.archiveWindowLength(archiveWindowLength)
        this.assetName(assetName)
        this.liveEventName(liveEventName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the Azure Media Services account. */
    accountName(value: string): az_ams_live_output_create_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** ISO 8601 timespan duration of the archive window length. This is the duration that customer want to retain the recorded content. Minimum window is 5 minutes (PT5M or 00:05:00). Maximum window is 25 hours (PT25H or 25:00:00). For example, to retain the output for 10 minutes, use PT10M or 00:10:00. */
    archiveWindowLength(value: string): az_ams_live_output_create_command_builder {
        this.setFlag("--archive-window-length", value);
        return this;
    }

    /** The name of the asset. */
    assetName(value: string): az_ams_live_output_create_command_builder {
        this.setFlag("--asset-name", value);
        return this;
    }

    /** The name of the live event. */
    liveEventName(value: string): az_ams_live_output_create_command_builder {
        this.setFlag("--live-event-name", value);
        return this;
    }

    /** The name of the live output. */
    name(value: string): az_ams_live_output_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ams_live_output_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The live output description. */
    description(value: string): az_ams_live_output_create_command_builder {
        this.setFlag("--description", value);
        return this;
    }

    /** The number of fragments per HLS segment. */
    fragmentsPerTsSegment(value: string): az_ams_live_output_create_command_builder {
        this.setFlag("--fragments-per-ts-segment", value);
        return this;
    }

    /** The manifest file name. If not provided, the service will generate one automatically. */
    manifestName(value: string): az_ams_live_output_create_command_builder {
        this.setFlag("--manifest-name", value);
        return this;
    }

    /** The output snapshot time. */
    outputSnapTime(value: string): az_ams_live_output_create_command_builder {
        this.setFlag("--output-snap-time", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ams_live_output_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_ams_live_output_delete_command_builder extends CommandBuilder<az_ams_live_output_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** The name of the Azure Media Services account. */
    accountName(value: string): az_ams_live_output_delete_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_ams_live_output_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the live event. */
    liveEventName(value: string): az_ams_live_output_delete_command_builder {
        this.setFlag("--live-event-name", value);
        return this;
    }

    /** The name of the live output. */
    name(value: string): az_ams_live_output_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ams_live_output_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ams_live_output_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_ams_live_output_list_command_builder extends CommandBuilder<az_ams_live_output_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string, liveEventName: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.accountName(accountName)
        this.liveEventName(liveEventName)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the Azure Media Services account. */
    accountName(value: string): az_ams_live_output_list_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** The name of the live event. */
    liveEventName(value: string): az_ams_live_output_list_command_builder {
        this.setFlag("--live-event-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ams_live_output_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_ams_live_output_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ams_live_output_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_ams_live_output_show_command_builder extends CommandBuilder<az_ams_live_output_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** The name of the Azure Media Services account. */
    accountName(value: string): az_ams_live_output_show_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_ams_live_output_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the live event. */
    liveEventName(value: string): az_ams_live_output_show_command_builder {
        this.setFlag("--live-event-name", value);
        return this;
    }

    /** The name of the live output. */
    name(value: string): az_ams_live_output_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_ams_live_output_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ams_live_output_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ams_live_output_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_ams_streaming_endpoint_akamai_add_command_builder extends CommandBuilder<az_ams_streaming_endpoint_akamai_add_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** The name of the Azure Media Services account. */
    accountName(value: string): az_ams_streaming_endpoint_akamai_add_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Base64-encoded authentication key that will be used by the CDN. The authentication key provided by Akamai is an ASCII encoded string, and must be converted to bytes and then base64 encoded. */
    base64Key(value: string): az_ams_streaming_endpoint_akamai_add_command_builder {
        this.setFlag("--base64-key", value);
        return this;
    }

    /** The ISO 8601 DateTime value that specifies when the Akamai authentication expires. */
    expiration(value: string): az_ams_streaming_endpoint_akamai_add_command_builder {
        this.setFlag("--expiration", value);
        return this;
    }

    /** The identifier for the authentication key. This is the nonce provided by Akamai. */
    identifier(value: string): az_ams_streaming_endpoint_akamai_add_command_builder {
        this.setFlag("--identifier", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_ams_streaming_endpoint_akamai_add_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the streaming endpoint. */
    name(value: string): az_ams_streaming_endpoint_akamai_add_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ams_streaming_endpoint_akamai_add_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ams_streaming_endpoint_akamai_add_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_ams_streaming_endpoint_akamai_remove_command_builder extends CommandBuilder<az_ams_streaming_endpoint_akamai_remove_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, identifier: string) {
        super(commandPath, resultDataTypeName);
        this.identifier(identifier)
    }

    /** The identifier for the authentication key. This is the nonce provided by Akamai. */
    identifier(value: string): az_ams_streaming_endpoint_akamai_remove_command_builder {
        this.setFlag("--identifier", value);
        return this;
    }

    /** The name of the Azure Media Services account. */
    accountName(value: string): az_ams_streaming_endpoint_akamai_remove_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_ams_streaming_endpoint_akamai_remove_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the streaming endpoint. */
    name(value: string): az_ams_streaming_endpoint_akamai_remove_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ams_streaming_endpoint_akamai_remove_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ams_streaming_endpoint_akamai_remove_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_ams_streaming_endpoint_create_command_builder extends CommandBuilder<az_ams_streaming_endpoint_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string, name: string, resourceGroup: string, scaleUnits: string) {
        super(commandPath, resultDataTypeName);
        this.accountName(accountName)
        this.name(name)
        this.resourceGroup(resourceGroup)
        this.scaleUnits(scaleUnits)
    }

    /** The name of the Azure Media Services account. */
    accountName(value: string): az_ams_streaming_endpoint_create_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** The name of the streaming endpoint. */
    name(value: string): az_ams_streaming_endpoint_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ams_streaming_endpoint_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The number of scale units for Premium StreamingEndpoints. For Standard StreamingEndpoints, set this value to 0. Use the Scale operation to adjust this value for Premium StreamingEndpoints. */
    scaleUnits(value: string): az_ams_streaming_endpoint_create_command_builder {
        this.setFlag("--scale-units", value);
        return this;
    }

    /** The flag indicates if the resource should be automatically started on creation. */
    autoStart(value: string): az_ams_streaming_endpoint_create_command_builder {
        this.setFlag("--auto-start", value);
        return this;
    }

    /** The name of the AvailabilitySet used with this StreamingEndpoint for high availability streaming. This value can only be set at creation time. */
    availabilitySetName(value: string): az_ams_streaming_endpoint_create_command_builder {
        this.setFlag("--availability-set-name", value);
        return this;
    }

    /** The CDN profile name. */
    cdnProfile(value: string): az_ams_streaming_endpoint_create_command_builder {
        this.setFlag("--cdn-profile", value);
        return this;
    }

    /** The CDN provider name. Allowed values: StandardVerizon, PremiumVerizon, StandardAkamai. */
    cdnProvider(value: string): az_ams_streaming_endpoint_create_command_builder {
        this.setFlag("--cdn-provider", value);
        return this;
    }

    /** The XML representing the clientaccesspolicy data used by Microsoft Silverlight and Adobe Flash. Use @{file} to load from a file. For further information about the XML structure please refer to documentation on <a href="https://docs.microsoft.com/rest/api/media/operations/crosssiteaccesspolicies">https://docs.microsoft.com/rest/api/media/operations/crosssiteaccesspolicies</a>. */
    clientAccessPolicy(value: string): az_ams_streaming_endpoint_create_command_builder {
        this.setFlag("--client-access-policy", value);
        return this;
    }

    /** The XML representing the crossdomain data used by Silverlight. Use @{file} to load from a file. For further information about the XML structure please refer to documentation on <a href="https://docs.microsoft.com/rest/api/media/operations/crosssiteaccesspolicies">https://docs.microsoft.com/rest/api/media/operations/crosssiteaccesspolicies</a>. */
    crossDomainPolicy(value: string): az_ams_streaming_endpoint_create_command_builder {
        this.setFlag("--cross-domain-policy", value);
        return this;
    }

    /** Space-separated list of custom host names for the streaming endpoint. Use "" to clear existing list. */
    customHostNames(value: string): az_ams_streaming_endpoint_create_command_builder {
        this.setFlag("--custom-host-names", value);
        return this;
    }

    /** The streaming endpoint description. */
    description(value: string): az_ams_streaming_endpoint_create_command_builder {
        this.setFlag("--description", value);
        return this;
    }

    /** Space-separated IP addresses for access control. Allowed IP addresses can be specified as either a single IP address (e.g. "10.0.0.1") or as an IP range using an IP address and a CIDR subnet mask (e.g. "10.0.0.1/22"). Use "" to clear existing list. If no IP addresses are specified any IP address will be allowed. */
    ips(value: string): az_ams_streaming_endpoint_create_command_builder {
        this.setFlag("--ips", value);
        return this;
    }

    /** Max cache age. */
    maxCacheAge(value: string): az_ams_streaming_endpoint_create_command_builder {
        this.setFlag("--max-cache-age", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_ams_streaming_endpoint_create_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ams_streaming_endpoint_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_ams_streaming_endpoint_create_command_builder {
        this.setFlag("--tags", value);
        return this;
    }
}

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
class az_ams_streaming_endpoint_delete_command_builder extends CommandBuilder<az_ams_streaming_endpoint_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** The name of the Azure Media Services account. */
    accountName(value: string): az_ams_streaming_endpoint_delete_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_ams_streaming_endpoint_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the streaming endpoint. */
    name(value: string): az_ams_streaming_endpoint_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ams_streaming_endpoint_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ams_streaming_endpoint_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_ams_streaming_endpoint_list_command_builder extends CommandBuilder<az_ams_streaming_endpoint_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.accountName(accountName)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the Azure Media Services account. */
    accountName(value: string): az_ams_streaming_endpoint_list_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ams_streaming_endpoint_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_ams_streaming_endpoint_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ams_streaming_endpoint_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_ams_streaming_endpoint_scale_command_builder extends CommandBuilder<az_ams_streaming_endpoint_scale_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** The name of the Azure Media Services account. */
    accountName(value: string): az_ams_streaming_endpoint_scale_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_ams_streaming_endpoint_scale_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the streaming endpoint. */
    name(value: string): az_ams_streaming_endpoint_scale_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ams_streaming_endpoint_scale_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The number of scale units for Premium StreamingEndpoints. */
    scaleUnits(value: string): az_ams_streaming_endpoint_scale_command_builder {
        this.setFlag("--scale-units", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ams_streaming_endpoint_scale_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_ams_streaming_endpoint_show_command_builder extends CommandBuilder<az_ams_streaming_endpoint_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** The name of the Azure Media Services account. */
    accountName(value: string): az_ams_streaming_endpoint_show_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_ams_streaming_endpoint_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the streaming endpoint. */
    name(value: string): az_ams_streaming_endpoint_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_ams_streaming_endpoint_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ams_streaming_endpoint_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ams_streaming_endpoint_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_ams_streaming_endpoint_start_command_builder extends CommandBuilder<az_ams_streaming_endpoint_start_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** The name of the Azure Media Services account. */
    accountName(value: string): az_ams_streaming_endpoint_start_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_ams_streaming_endpoint_start_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the streaming endpoint. */
    name(value: string): az_ams_streaming_endpoint_start_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_ams_streaming_endpoint_start_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ams_streaming_endpoint_start_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ams_streaming_endpoint_start_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_ams_streaming_endpoint_stop_command_builder extends CommandBuilder<az_ams_streaming_endpoint_stop_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** The name of the Azure Media Services account. */
    accountName(value: string): az_ams_streaming_endpoint_stop_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_ams_streaming_endpoint_stop_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the streaming endpoint. */
    name(value: string): az_ams_streaming_endpoint_stop_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_ams_streaming_endpoint_stop_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ams_streaming_endpoint_stop_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ams_streaming_endpoint_stop_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_ams_streaming_endpoint_update_command_builder extends CommandBuilder<az_ams_streaming_endpoint_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** The name of the Azure Media Services account. */
    accountName(value: string): az_ams_streaming_endpoint_update_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_ams_streaming_endpoint_update_command_builder {
        this.setFlag("--add", value);
        return this;
    }

    /** The CDN profile name. */
    cdnProfile(value: string): az_ams_streaming_endpoint_update_command_builder {
        this.setFlag("--cdn-profile", value);
        return this;
    }

    /** The CDN provider name. Allowed values: StandardVerizon, PremiumVerizon, StandardAkamai. */
    cdnProvider(value: string): az_ams_streaming_endpoint_update_command_builder {
        this.setFlag("--cdn-provider", value);
        return this;
    }

    /** The XML representing the clientaccesspolicy data used by Microsoft Silverlight and Adobe Flash. Use @{file} to load from a file. For further information about the XML structure please refer to documentation on <a href="https://docs.microsoft.com/rest/api/media/operations/crosssiteaccesspolicies">https://docs.microsoft.com/rest/api/media/operations/crosssiteaccesspolicies</a>. */
    clientAccessPolicy(value: string): az_ams_streaming_endpoint_update_command_builder {
        this.setFlag("--client-access-policy", value);
        return this;
    }

    /** The XML representing the crossdomain data used by Silverlight. Use @{file} to load from a file. For further information about the XML structure please refer to documentation on <a href="https://docs.microsoft.com/rest/api/media/operations/crosssiteaccesspolicies">https://docs.microsoft.com/rest/api/media/operations/crosssiteaccesspolicies</a>. */
    crossDomainPolicy(value: string): az_ams_streaming_endpoint_update_command_builder {
        this.setFlag("--cross-domain-policy", value);
        return this;
    }

    /** Space-separated list of custom host names for the streaming endpoint. Use "" to clear existing list. */
    customHostNames(value: string): az_ams_streaming_endpoint_update_command_builder {
        this.setFlag("--custom-host-names", value);
        return this;
    }

    /** The streaming endpoint description. */
    description(value: string): az_ams_streaming_endpoint_update_command_builder {
        this.setFlag("--description", value);
        return this;
    }

    /** Use this flag to disable CDN for the streaming endpoint. */
    disableCdn(value: string): az_ams_streaming_endpoint_update_command_builder {
        this.setFlag("--disable-cdn", value);
        return this;
    }

    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_ams_streaming_endpoint_update_command_builder {
        this.setFlag("--force-string", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_ams_streaming_endpoint_update_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Space-separated IP addresses for access control. Allowed IP addresses can be specified as either a single IP address (e.g. "10.0.0.1") or as an IP range using an IP address and a CIDR subnet mask (e.g. "10.0.0.1/22"). Use "" to clear existing list. If no IP addresses are specified any IP address will be allowed. */
    ips(value: string): az_ams_streaming_endpoint_update_command_builder {
        this.setFlag("--ips", value);
        return this;
    }

    /** Max cache age. */
    maxCacheAge(value: string): az_ams_streaming_endpoint_update_command_builder {
        this.setFlag("--max-cache-age", value);
        return this;
    }

    /** The name of the streaming endpoint. */
    name(value: string): az_ams_streaming_endpoint_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_ams_streaming_endpoint_update_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_ams_streaming_endpoint_update_command_builder {
        this.setFlag("--remove", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ams_streaming_endpoint_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_ams_streaming_endpoint_update_command_builder {
        this.setFlag("--set", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ams_streaming_endpoint_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_ams_streaming_endpoint_update_command_builder {
        this.setFlag("--tags", value);
        return this;
    }
}

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
class az_ams_streaming_endpoint_wait_command_builder extends CommandBuilder<az_ams_streaming_endpoint_wait_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** The name of the Azure Media Services account. */
    accountName(value: string): az_ams_streaming_endpoint_wait_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    created(value: string): az_ams_streaming_endpoint_wait_command_builder {
        this.setFlag("--created", value);
        return this;
    }

    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    custom(value: string): az_ams_streaming_endpoint_wait_command_builder {
        this.setFlag("--custom", value);
        return this;
    }

    /** Wait until deleted. */
    deleted(value: string): az_ams_streaming_endpoint_wait_command_builder {
        this.setFlag("--deleted", value);
        return this;
    }

    /** Wait until the resource exists. */
    exists(value: string): az_ams_streaming_endpoint_wait_command_builder {
        this.setFlag("--exists", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_ams_streaming_endpoint_wait_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Polling interval in seconds. */
    interval(value: string): az_ams_streaming_endpoint_wait_command_builder {
        this.setFlag("--interval", value);
        return this;
    }

    /** The name of the streaming endpoint. */
    name(value: string): az_ams_streaming_endpoint_wait_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ams_streaming_endpoint_wait_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ams_streaming_endpoint_wait_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Maximum wait in seconds. */
    timeout(value: string): az_ams_streaming_endpoint_wait_command_builder {
        this.setFlag("--timeout", value);
        return this;
    }

    /** Wait until updated with provisioningState at 'Succeeded'. */
    updated(value: string): az_ams_streaming_endpoint_wait_command_builder {
        this.setFlag("--updated", value);
        return this;
    }
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
class az_ams_streaming_locator_create_command_builder extends CommandBuilder<az_ams_streaming_locator_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string, assetName: string, name: string, resourceGroup: string, streamingPolicyName: string) {
        super(commandPath, resultDataTypeName);
        this.accountName(accountName)
        this.assetName(assetName)
        this.name(name)
        this.resourceGroup(resourceGroup)
        this.streamingPolicyName(streamingPolicyName)
    }

    /** The name of the Azure Media Services account. */
    accountName(value: string): az_ams_streaming_locator_create_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** The name of the asset used by the streaming locator. */
    assetName(value: string): az_ams_streaming_locator_create_command_builder {
        this.setFlag("--asset-name", value);
        return this;
    }

    /** The name of the streaming locator. */
    name(value: string): az_ams_streaming_locator_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ams_streaming_locator_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the streaming policy used by the streaming locator. You can either create one with `az ams streaming policy create` or use any of the predefined policies: Predefined_DownloadOnly, Predefined_ClearStreamingOnly, Predefined_DownloadAndClearStreaming, Predefined_ClearKey, Predefined_MultiDrmCencStreaming, Predefined_MultiDrmStreaming. */
    streamingPolicyName(value: string): az_ams_streaming_locator_create_command_builder {
        this.setFlag("--streaming-policy-name", value);
        return this;
    }

    /** An alternative media identifier associated with the streaming locator. */
    alternativeMediaId(value: string): az_ams_streaming_locator_create_command_builder {
        this.setFlag("--alternative-media-id", value);
        return this;
    }

    /** The default content key policy name used by the streaming locator. */
    contentKeyPolicyName(value: string): az_ams_streaming_locator_create_command_builder {
        this.setFlag("--content-key-policy-name", value);
        return this;
    }

    /** JSON string with the content keys to be used by the streaming locator. Use @{file} to load from a file. For further information about the JSON structure please refer to swagger documentation on <a href="https://docs.microsoft.com/rest/api/media/streaminglocators/create#streaminglocatorcontentkey">https://docs.microsoft.com/rest/api/media/streaminglocators/create#streaminglocatorcontentkey</a>. */
    contentKeys(value: string): az_ams_streaming_locator_create_command_builder {
        this.setFlag("--content-keys", value);
        return this;
    }

    /** The ISO 8601 DateTime end time (Y-m-d'T'H:M:S'Z') of the streaming locator. */
    endTime(value: string): az_ams_streaming_locator_create_command_builder {
        this.setFlag("--end-time", value);
        return this;
    }

    /** A space-separated list of asset filter names and/or account filter names. */
    filters(value: string): az_ams_streaming_locator_create_command_builder {
        this.setFlag("--filters", value);
        return this;
    }

    /** The ISO 8601 DateTime start time (Y-m-d'T'H:M:S'Z') of the streaming locator. */
    startTime(value: string): az_ams_streaming_locator_create_command_builder {
        this.setFlag("--start-time", value);
        return this;
    }

    /** The identifier of the streaming locator. */
    streamingLocatorId(value: string): az_ams_streaming_locator_create_command_builder {
        this.setFlag("--streaming-locator-id", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ams_streaming_locator_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_ams_streaming_locator_delete_command_builder extends CommandBuilder<az_ams_streaming_locator_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** The name of the Azure Media Services account. */
    accountName(value: string): az_ams_streaming_locator_delete_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_ams_streaming_locator_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the streaming locator. */
    name(value: string): az_ams_streaming_locator_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ams_streaming_locator_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ams_streaming_locator_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_ams_streaming_locator_get_paths_command_builder extends CommandBuilder<az_ams_streaming_locator_get_paths_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** The name of the Azure Media Services account. */
    accountName(value: string): az_ams_streaming_locator_get_paths_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_ams_streaming_locator_get_paths_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the streaming locator. */
    name(value: string): az_ams_streaming_locator_get_paths_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ams_streaming_locator_get_paths_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ams_streaming_locator_get_paths_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_ams_streaming_locator_list_command_builder extends CommandBuilder<az_ams_streaming_locator_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.accountName(accountName)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the Azure Media Services account. */
    accountName(value: string): az_ams_streaming_locator_list_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ams_streaming_locator_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Restricts the set of items returned. */
    filter(value: string): az_ams_streaming_locator_list_command_builder {
        this.setFlag("--filter", value);
        return this;
    }

    /** Specifies the key by which the result collection should be ordered. */
    orderby(value: string): az_ams_streaming_locator_list_command_builder {
        this.setFlag("--orderby", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_ams_streaming_locator_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ams_streaming_locator_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Specifies a non-negative integer n that limits the number of items returned from a collection. The service returns the number of available items up to but not greater than the specified value n. */
    top(value: string): az_ams_streaming_locator_list_command_builder {
        this.setFlag("--top", value);
        return this;
    }
}

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
class az_ams_streaming_locator_list_content_keys_command_builder extends CommandBuilder<az_ams_streaming_locator_list_content_keys_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** The name of the Azure Media Services account. */
    accountName(value: string): az_ams_streaming_locator_list_content_keys_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_ams_streaming_locator_list_content_keys_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the streaming locator. */
    name(value: string): az_ams_streaming_locator_list_content_keys_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ams_streaming_locator_list_content_keys_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ams_streaming_locator_list_content_keys_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_ams_streaming_locator_show_command_builder extends CommandBuilder<az_ams_streaming_locator_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** The name of the Azure Media Services account. */
    accountName(value: string): az_ams_streaming_locator_show_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_ams_streaming_locator_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the streaming locator. */
    name(value: string): az_ams_streaming_locator_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_ams_streaming_locator_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ams_streaming_locator_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ams_streaming_locator_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_ams_streaming_policy_create_command_builder extends CommandBuilder<az_ams_streaming_policy_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string, name: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.accountName(accountName)
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the Azure Media Services account. */
    accountName(value: string): az_ams_streaming_policy_create_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** The name of the streaming policy. */
    name(value: string): az_ams_streaming_policy_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ams_streaming_policy_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The JSON representing which tracks should not be encrypted. Use @{file} to load from a file. For further information about the JSON structure please refer to swagger documentation on <a href="https://docs.microsoft.com/rest/api/media/streamingpolicies/create#trackselection">https://docs.microsoft.com/rest/api/media/streamingpolicies/create#trackselection</a>. */
    cbcsClearTracks(value: string): az_ams_streaming_policy_create_command_builder {
        this.setFlag("--cbcs-clear-tracks", value);
        return this;
    }

    /** Label to specify Default Content Key for an encryption scheme. */
    cbcsDefaultKeyLabel(value: string): az_ams_streaming_policy_create_command_builder {
        this.setFlag("--cbcs-default-key-label", value);
        return this;
    }

    /** Policy used by Default Content Key. */
    cbcsDefaultKeyPolicyName(value: string): az_ams_streaming_policy_create_command_builder {
        this.setFlag("--cbcs-default-key-policy-name", value);
        return this;
    }

    /** Allows the license to be persistent or not. */
    cbcsFairPlayAllowPersistentLicense(value: boolean): az_ams_streaming_policy_create_command_builder {
        this.setFlag("--cbcs-fair-play-allow-persistent-license", value.toString());
        return this;
    }

    /** The custom license acquisition URL template for a customer service to deliver keys to end users. Not needed when using Azure Media Services for issuing keys. */
    cbcsFairPlayTemplate(value: string): az_ams_streaming_policy_create_command_builder {
        this.setFlag("--cbcs-fair-play-template", value);
        return this;
    }

    /** The JSON representing a list of StreamingPolicyContentKey. Use @{file} to load from a file. For further information about the JSON structure please refer to swagger documentation on <a href="https://docs.microsoft.com/rest/api/media/streamingpolicies/create#streamingpolicycontentkey">https://docs.microsoft.com/rest/api/media/streamingpolicies/create#streamingpolicycontentkey</a>. */
    cbcsKeyToTrackMappings(value: string): az_ams_streaming_policy_create_command_builder {
        this.setFlag("--cbcs-key-to-track-mappings", value);
        return this;
    }

    /** Custom attributes for PlayReady. */
    cbcsPlayReadyAttributes(value: string): az_ams_streaming_policy_create_command_builder {
        this.setFlag("--cbcs-play-ready-attributes", value);
        return this;
    }

    /** The custom license acquisition URL template for a customer service to deliver keys to end users. Not needed when using Azure Media Services for issuing keys. */
    cbcsPlayReadyTemplate(value: string): az_ams_streaming_policy_create_command_builder {
        this.setFlag("--cbcs-play-ready-template", value);
        return this;
    }

    /** Space-separated list of enabled protocols for Common Encryption CBCS. Allowed values: Download, Dash, HLS, SmoothStreaming. */
    cbcsProtocols(value: string): az_ams_streaming_policy_create_command_builder {
        this.setFlag("--cbcs-protocols", value);
        return this;
    }

    /** The custom license acquisition URL template for a customer service to deliver keys to end users. Not needed when using Azure Media Services for issuing keys. */
    cbcsWidevineTemplate(value: string): az_ams_streaming_policy_create_command_builder {
        this.setFlag("--cbcs-widevine-template", value);
        return this;
    }

    /** The JSON representing which tracks should not be encrypted. Use @{file} to load from a file. For further information about the JSON structure please refer to swagger documentation on <a href="https://docs.microsoft.com/rest/api/media/streamingpolicies/create#trackselection">https://docs.microsoft.com/rest/api/media/streamingpolicies/create#trackselection</a>. */
    cencClearTracks(value: string): az_ams_streaming_policy_create_command_builder {
        this.setFlag("--cenc-clear-tracks", value);
        return this;
    }

    /** Label to specify Default Content Key for an encryption scheme. */
    cencDefaultKeyLabel(value: string): az_ams_streaming_policy_create_command_builder {
        this.setFlag("--cenc-default-key-label", value);
        return this;
    }

    /** Policy used by Default Content Key. */
    cencDefaultKeyPolicyName(value: string): az_ams_streaming_policy_create_command_builder {
        this.setFlag("--cenc-default-key-policy-name", value);
        return this;
    }

    /** If specified, no PlayReady cenc DRM will be configured. If --cenc-disable-play-ready is set, --cenc-disable-widevine cannot also be set. */
    cencDisablePlayReady(value: boolean): az_ams_streaming_policy_create_command_builder {
        this.setFlag("--cenc-disable-play-ready", value.toString());
        return this;
    }

    /** If specified, no Widevine cenc DRM will be configured. If --cenc-disable-widevine is set, --cenc-disable-play-ready cannot also be set. */
    cencDisableWidevine(value: boolean): az_ams_streaming_policy_create_command_builder {
        this.setFlag("--cenc-disable-widevine", value.toString());
        return this;
    }

    /** The JSON representing a list of StreamingPolicyContentKey. Use @{file} to load from a file. For further information about the JSON structure please refer to swagger documentation on <a href="https://docs.microsoft.com/rest/api/media/streamingpolicies/create#streamingpolicycontentkey">https://docs.microsoft.com/rest/api/media/streamingpolicies/create#streamingpolicycontentkey</a>. */
    cencKeyToTrackMappings(value: string): az_ams_streaming_policy_create_command_builder {
        this.setFlag("--cenc-key-to-track-mappings", value);
        return this;
    }

    /** Custom attributes for PlayReady. */
    cencPlayReadyAttributes(value: string): az_ams_streaming_policy_create_command_builder {
        this.setFlag("--cenc-play-ready-attributes", value);
        return this;
    }

    /** The custom license acquisition URL template for a customer service to deliver keys to end users. Not needed when using Azure Media Services for issuing keys. */
    cencPlayReadyTemplate(value: string): az_ams_streaming_policy_create_command_builder {
        this.setFlag("--cenc-play-ready-template", value);
        return this;
    }

    /** Space-separated list of enabled protocols for Common Encryption CENC. Allowed values: Download, Dash, HLS, SmoothStreaming. */
    cencProtocols(value: string): az_ams_streaming_policy_create_command_builder {
        this.setFlag("--cenc-protocols", value);
        return this;
    }

    /** The custom license acquisition URL template for a customer service to deliver keys to end users. Not needed when using Azure Media Services for issuing keys. */
    cencWidevineTemplate(value: string): az_ams_streaming_policy_create_command_builder {
        this.setFlag("--cenc-widevine-template", value);
        return this;
    }

    /** Default Content Key used by current streaming policy. */
    defaultContentKeyPolicyName(value: string): az_ams_streaming_policy_create_command_builder {
        this.setFlag("--default-content-key-policy-name", value);
        return this;
    }

    /** The JSON representing which tracks should not be encrypted. Use @{file} to load from a file. For further information about the JSON structure please refer to swagger documentation on <a href="https://docs.microsoft.com/rest/api/media/streamingpolicies/create#trackselection">https://docs.microsoft.com/rest/api/media/streamingpolicies/create#trackselection</a>. */
    envelopeClearTracks(value: string): az_ams_streaming_policy_create_command_builder {
        this.setFlag("--envelope-clear-tracks", value);
        return this;
    }

    /** Label used to specify Content Key when creating a streaming locator. */
    envelopeDefaultKeyLabel(value: string): az_ams_streaming_policy_create_command_builder {
        this.setFlag("--envelope-default-key-label", value);
        return this;
    }

    /** Policy used by Default Key. */
    envelopeDefaultKeyPolicyName(value: string): az_ams_streaming_policy_create_command_builder {
        this.setFlag("--envelope-default-key-policy-name", value);
        return this;
    }

    /** The JSON representing a list of StreamingPolicyContentKey. Use @{file} to load from a file. For further information about the JSON structure please refer to swagger documentation on <a href="https://docs.microsoft.com/rest/api/media/streamingpolicies/create#streamingpolicycontentkey">https://docs.microsoft.com/rest/api/media/streamingpolicies/create#streamingpolicycontentkey</a>. */
    envelopeKeyToTrackMappings(value: string): az_ams_streaming_policy_create_command_builder {
        this.setFlag("--envelope-key-to-track-mappings", value);
        return this;
    }

    /** Space-separated list of enabled protocols for Envelope Encryption. Allowed values: Download, Dash, HLS, SmoothStreaming. */
    envelopeProtocols(value: string): az_ams_streaming_policy_create_command_builder {
        this.setFlag("--envelope-protocols", value);
        return this;
    }

    /** The KeyAcquistionUrlTemplate is used to point to user specified service to delivery content keys. */
    envelopeTemplate(value: string): az_ams_streaming_policy_create_command_builder {
        this.setFlag("--envelope-template", value);
        return this;
    }

    /** Space-separated list of enabled protocols for NoEncryption. Allowed values: Download, Dash, HLS, SmoothStreaming. */
    noEncryptionProtocols(value: string): az_ams_streaming_policy_create_command_builder {
        this.setFlag("--no-encryption-protocols", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ams_streaming_policy_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_ams_streaming_policy_delete_command_builder extends CommandBuilder<az_ams_streaming_policy_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** The name of the Azure Media Services account. */
    accountName(value: string): az_ams_streaming_policy_delete_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_ams_streaming_policy_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the streaming policy. */
    name(value: string): az_ams_streaming_policy_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ams_streaming_policy_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ams_streaming_policy_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_ams_streaming_policy_list_command_builder extends CommandBuilder<az_ams_streaming_policy_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.accountName(accountName)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the Azure Media Services account. */
    accountName(value: string): az_ams_streaming_policy_list_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ams_streaming_policy_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Restricts the set of items returned. */
    filter(value: string): az_ams_streaming_policy_list_command_builder {
        this.setFlag("--filter", value);
        return this;
    }

    /** Specifies the key by which the result collection should be ordered. */
    orderby(value: string): az_ams_streaming_policy_list_command_builder {
        this.setFlag("--orderby", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_ams_streaming_policy_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ams_streaming_policy_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Specifies a non-negative integer n that limits the number of items returned from a collection. The service returns the number of available items up to but not greater than the specified value n. */
    top(value: string): az_ams_streaming_policy_list_command_builder {
        this.setFlag("--top", value);
        return this;
    }
}

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
class az_ams_streaming_policy_show_command_builder extends CommandBuilder<az_ams_streaming_policy_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** The name of the Azure Media Services account. */
    accountName(value: string): az_ams_streaming_policy_show_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_ams_streaming_policy_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the streaming policy. */
    name(value: string): az_ams_streaming_policy_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_ams_streaming_policy_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ams_streaming_policy_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ams_streaming_policy_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_ams_transform_output_add_command_builder extends CommandBuilder<az_ams_transform_output_add_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, preset: string) {
        super(commandPath, resultDataTypeName);
        this.preset(preset)
    }

    /** Preset that describes the operations that will be used to modify, transcode, or extract insights from the source file to generate the transform output. Allowed values: H264SingleBitrateSD, H264SingleBitrate720p, H264SingleBitrate1080p, AdaptiveStreaming, AACGoodQualityAudio, ContentAwareEncodingExperimental, ContentAwareEncoding, H264MultipleBitrate1080p, H264MultipleBitrate720p, H264MultipleBitrateSD, AudioAnalyzer, VideoAnalyzer, FaceDetector. In addition to the allowed values, you can also pass a path to a custom Standard Encoder preset JSON file. See <a href="https://docs.microsoft.com/rest/api/media/transforms/createorupdate#standardencoderpreset">https://docs.microsoft.com/rest/api/media/transforms/createorupdate#standardencoderpreset</a> for further details on the settings to use to build a custom preset. */
    preset(value: string): az_ams_transform_output_add_command_builder {
        this.setFlag("--preset", value);
        return this;
    }

    /** The name of the Azure Media Services account. */
    accountName(value: string): az_ams_transform_output_add_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** The language for the audio payload in the input using the BCP-47 format of "language tag-region" (e.g: en-US). If not specified, automatic language detection would be employed. This feature currently supports English, Chinese, French, German, Italian, Japanese, Spanish, Russian, and Portuguese. The automatic detection works best with audio recordings with clearly discernable speech. If automatic detection fails to find the language, transcription would fallback to English. Allowed values: en-US, en-GB, es-ES, es-MX, fr-FR, it-IT, ja-JP, pt-BR, zh-CN, de-DE, ar-EG, ru-RU, hi-IN. */
    audioLanguage(value: string): az_ams_transform_output_add_command_builder {
        this.setFlag("--audio-language", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_ams_transform_output_add_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The type of insights to be extracted. If not set then the type will be selected based on the content type. If the content is audio only then only audio insights will be extracted and if it is video only video insights will be extracted. */
    insightsToExtract(value: 'AllInsights' | 'AudioInsightsOnly' | 'VideoInsightsOnly'): az_ams_transform_output_add_command_builder {
        this.setFlag("--insights-to-extract", value);
        return this;
    }

    /** The name of the transform. */
    name(value: string): az_ams_transform_output_add_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** A Transform can define more than one output. This property defines what the service should do when one output fails - either continue to produce other outputs, or, stop the other outputs. The overall Job state will not reflect failures of outputs that are specified with 'ContinueJob'. The default is 'StopProcessingJob'. */
    onError(value: 'ContinueJob' | 'StopProcessingJob'): az_ams_transform_output_add_command_builder {
        this.setFlag("--on-error", value);
        return this;
    }

    /** Sets the relative priority of the transform outputs within a transform. This sets the priority that the service uses for processing TransformOutputs. The default priority is Normal. */
    relativePriority(value: 'High' | 'Low' | 'Normal'): az_ams_transform_output_add_command_builder {
        this.setFlag("--relative-priority", value);
        return this;
    }

    /** Specifies the maximum resolution at which your video is analyzed. The default behavior is "SourceResolution," which will keep the input video at its original resolution when analyzed. Using StandardDefinition will resize input videos to standard definition while preserving the appropriate aspect ratio. It will only resize if the video is of higher resolution. For example, a 1920x1080 input would be scaled to 640x360 before processing. Switching to "StandardDefinition" will reduce the time it takes to process high resolution video. It may also reduce the cost of using this component (see <a href="https://azure.microsoft.com/en-us/pricing/details/media-services/#analytics">https://azure.microsoft.com/en-us/pricing/details/media-services/#analytics</a> for details). However, faces that end up being too small in the resized video may not be detected. Allowed values: StandardDefinition, SourceResolution. */
    resolution(value: string): az_ams_transform_output_add_command_builder {
        this.setFlag("--resolution", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ams_transform_output_add_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ams_transform_output_add_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_ams_transform_output_remove_command_builder extends CommandBuilder<az_ams_transform_output_remove_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, outputIndex: string) {
        super(commandPath, resultDataTypeName);
        this.outputIndex(outputIndex)
    }

    /** The element index of the output to remove. */
    outputIndex(value: string): az_ams_transform_output_remove_command_builder {
        this.setFlag("--output-index", value);
        return this;
    }

    /** The name of the Azure Media Services account. */
    accountName(value: string): az_ams_transform_output_remove_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_ams_transform_output_remove_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the transform. */
    name(value: string): az_ams_transform_output_remove_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ams_transform_output_remove_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ams_transform_output_remove_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_ams_transform_create_command_builder extends CommandBuilder<az_ams_transform_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string, name: string, preset: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.accountName(accountName)
        this.name(name)
        this.preset(preset)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the Azure Media Services account. */
    accountName(value: string): az_ams_transform_create_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** The name of the transform. */
    name(value: string): az_ams_transform_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Preset that describes the operations that will be used to modify, transcode, or extract insights from the source file to generate the transform output. Allowed values: H264SingleBitrateSD, H264SingleBitrate720p, H264SingleBitrate1080p, AdaptiveStreaming, AACGoodQualityAudio, ContentAwareEncodingExperimental, ContentAwareEncoding, H264MultipleBitrate1080p, H264MultipleBitrate720p, H264MultipleBitrateSD, AudioAnalyzer, VideoAnalyzer, FaceDetector. In addition to the allowed values, you can also pass a path to a custom Standard Encoder preset JSON file. See <a href="https://docs.microsoft.com/rest/api/media/transforms/createorupdate#standardencoderpreset">https://docs.microsoft.com/rest/api/media/transforms/createorupdate#standardencoderpreset</a> for further details on the settings to use to build a custom preset. */
    preset(value: string): az_ams_transform_create_command_builder {
        this.setFlag("--preset", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ams_transform_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The language for the audio payload in the input using the BCP-47 format of "language tag-region" (e.g: en-US). If not specified, automatic language detection would be employed. This feature currently supports English, Chinese, French, German, Italian, Japanese, Spanish, Russian, and Portuguese. The automatic detection works best with audio recordings with clearly discernable speech. If automatic detection fails to find the language, transcription would fallback to English. Allowed values: en-US, en-GB, es-ES, es-MX, fr-FR, it-IT, ja-JP, pt-BR, zh-CN, de-DE, ar-EG, ru-RU, hi-IN. */
    audioLanguage(value: string): az_ams_transform_create_command_builder {
        this.setFlag("--audio-language", value);
        return this;
    }

    /** The description of the transform. */
    description(value: string): az_ams_transform_create_command_builder {
        this.setFlag("--description", value);
        return this;
    }

    /** The type of insights to be extracted. If not set then the type will be selected based on the content type. If the content is audio only then only audio insights will be extracted and if it is video only video insights will be extracted. */
    insightsToExtract(value: 'AllInsights' | 'AudioInsightsOnly' | 'VideoInsightsOnly'): az_ams_transform_create_command_builder {
        this.setFlag("--insights-to-extract", value);
        return this;
    }

    /** A Transform can define more than one output. This property defines what the service should do when one output fails - either continue to produce other outputs, or, stop the other outputs. The overall Job state will not reflect failures of outputs that are specified with 'ContinueJob'. The default is 'StopProcessingJob'. */
    onError(value: 'ContinueJob' | 'StopProcessingJob'): az_ams_transform_create_command_builder {
        this.setFlag("--on-error", value);
        return this;
    }

    /** Sets the relative priority of the transform outputs within a transform. This sets the priority that the service uses for processing TransformOutputs. The default priority is Normal. */
    relativePriority(value: 'High' | 'Low' | 'Normal'): az_ams_transform_create_command_builder {
        this.setFlag("--relative-priority", value);
        return this;
    }

    /** Specifies the maximum resolution at which your video is analyzed. The default behavior is "SourceResolution," which will keep the input video at its original resolution when analyzed. Using StandardDefinition will resize input videos to standard definition while preserving the appropriate aspect ratio. It will only resize if the video is of higher resolution. For example, a 1920x1080 input would be scaled to 640x360 before processing. Switching to "StandardDefinition" will reduce the time it takes to process high resolution video. It may also reduce the cost of using this component (see <a href="https://azure.microsoft.com/en-us/pricing/details/media-services/#analytics">https://azure.microsoft.com/en-us/pricing/details/media-services/#analytics</a> for details). However, faces that end up being too small in the resized video may not be detected. Allowed values: StandardDefinition, SourceResolution. */
    resolution(value: string): az_ams_transform_create_command_builder {
        this.setFlag("--resolution", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ams_transform_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_ams_transform_delete_command_builder extends CommandBuilder<az_ams_transform_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** The name of the Azure Media Services account. */
    accountName(value: string): az_ams_transform_delete_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_ams_transform_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the transform. */
    name(value: string): az_ams_transform_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ams_transform_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ams_transform_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_ams_transform_list_command_builder extends CommandBuilder<az_ams_transform_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accountName: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.accountName(accountName)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the Azure Media Services account. */
    accountName(value: string): az_ams_transform_list_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ams_transform_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Restricts the set of items returned. */
    filter(value: string): az_ams_transform_list_command_builder {
        this.setFlag("--filter", value);
        return this;
    }

    /** Specifies the key by which the result collection should be ordered. */
    orderby(value: string): az_ams_transform_list_command_builder {
        this.setFlag("--orderby", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_ams_transform_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ams_transform_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_ams_transform_show_command_builder extends CommandBuilder<az_ams_transform_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** The name of the Azure Media Services account. */
    accountName(value: string): az_ams_transform_show_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_ams_transform_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the transform. */
    name(value: string): az_ams_transform_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_ams_transform_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ams_transform_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ams_transform_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_ams_transform_update_command_builder extends CommandBuilder<az_ams_transform_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** The name of the Azure Media Services account. */
    accountName(value: string): az_ams_transform_update_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_ams_transform_update_command_builder {
        this.setFlag("--add", value);
        return this;
    }

    /** The description of the transform. */
    description(value: string): az_ams_transform_update_command_builder {
        this.setFlag("--description", value);
        return this;
    }

    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_ams_transform_update_command_builder {
        this.setFlag("--force-string", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_ams_transform_update_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the transform. */
    name(value: string): az_ams_transform_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_ams_transform_update_command_builder {
        this.setFlag("--remove", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_ams_transform_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_ams_transform_update_command_builder {
        this.setFlag("--set", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_ams_transform_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}
