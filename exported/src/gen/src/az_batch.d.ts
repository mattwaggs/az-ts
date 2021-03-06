import { CommandBuilder } from '../base';
import { az_batch_account_autostorage_keys_sync_command_result } from './models/az_batch_account_autostorage_keys_sync_command_result';
import { az_batch_account_keys_list_command_result } from './models/az_batch_account_keys_list_command_result';
import { az_batch_account_keys_renew_command_result } from './models/az_batch_account_keys_renew_command_result';
import { az_batch_account_create_command_result } from './models/az_batch_account_create_command_result';
import { az_batch_account_delete_command_result } from './models/az_batch_account_delete_command_result';
import { az_batch_account_list_command_result } from './models/az_batch_account_list_command_result';
import { az_batch_account_login_command_result } from './models/az_batch_account_login_command_result';
import { az_batch_account_set_command_result } from './models/az_batch_account_set_command_result';
import { az_batch_account_show_command_result } from './models/az_batch_account_show_command_result';
import { az_batch_application_package_activate_command_result } from './models/az_batch_application_package_activate_command_result';
import { az_batch_application_package_create_command_result } from './models/az_batch_application_package_create_command_result';
import { az_batch_application_package_delete_command_result } from './models/az_batch_application_package_delete_command_result';
import { az_batch_application_package_list_command_result } from './models/az_batch_application_package_list_command_result';
import { az_batch_application_package_show_command_result } from './models/az_batch_application_package_show_command_result';
import { az_batch_application_summary_list_command_result } from './models/az_batch_application_summary_list_command_result';
import { az_batch_application_summary_show_command_result } from './models/az_batch_application_summary_show_command_result';
import { az_batch_application_create_command_result } from './models/az_batch_application_create_command_result';
import { az_batch_application_delete_command_result } from './models/az_batch_application_delete_command_result';
import { az_batch_application_list_command_result } from './models/az_batch_application_list_command_result';
import { az_batch_application_set_command_result } from './models/az_batch_application_set_command_result';
import { az_batch_application_show_command_result } from './models/az_batch_application_show_command_result';
import { az_batch_certificate_create_command_result } from './models/az_batch_certificate_create_command_result';
import { az_batch_certificate_delete_command_result } from './models/az_batch_certificate_delete_command_result';
import { az_batch_certificate_list_command_result } from './models/az_batch_certificate_list_command_result';
import { az_batch_certificate_show_command_result } from './models/az_batch_certificate_show_command_result';
import { az_batch_job_all_statistics_show_command_result } from './models/az_batch_job_all_statistics_show_command_result';
import { az_batch_job_prep_release_status_list_command_result } from './models/az_batch_job_prep_release_status_list_command_result';
import { az_batch_job_task_counts_show_command_result } from './models/az_batch_job_task_counts_show_command_result';
import { az_batch_job_schedule_create_command_result } from './models/az_batch_job_schedule_create_command_result';
import { az_batch_job_schedule_delete_command_result } from './models/az_batch_job_schedule_delete_command_result';
import { az_batch_job_schedule_disable_command_result } from './models/az_batch_job_schedule_disable_command_result';
import { az_batch_job_schedule_enable_command_result } from './models/az_batch_job_schedule_enable_command_result';
import { az_batch_job_schedule_list_command_result } from './models/az_batch_job_schedule_list_command_result';
import { az_batch_job_schedule_reset_command_result } from './models/az_batch_job_schedule_reset_command_result';
import { az_batch_job_schedule_set_command_result } from './models/az_batch_job_schedule_set_command_result';
import { az_batch_job_schedule_show_command_result } from './models/az_batch_job_schedule_show_command_result';
import { az_batch_job_schedule_stop_command_result } from './models/az_batch_job_schedule_stop_command_result';
import { az_batch_job_create_command_result } from './models/az_batch_job_create_command_result';
import { az_batch_job_delete_command_result } from './models/az_batch_job_delete_command_result';
import { az_batch_job_disable_command_result } from './models/az_batch_job_disable_command_result';
import { az_batch_job_enable_command_result } from './models/az_batch_job_enable_command_result';
import { az_batch_job_list_command_result } from './models/az_batch_job_list_command_result';
import { az_batch_job_reset_command_result } from './models/az_batch_job_reset_command_result';
import { az_batch_job_set_command_result } from './models/az_batch_job_set_command_result';
import { az_batch_job_show_command_result } from './models/az_batch_job_show_command_result';
import { az_batch_job_stop_command_result } from './models/az_batch_job_stop_command_result';
import { az_batch_location_quotas_show_command_result } from './models/az_batch_location_quotas_show_command_result';
import { az_batch_node_file_delete_command_result } from './models/az_batch_node_file_delete_command_result';
import { az_batch_node_file_download_command_result } from './models/az_batch_node_file_download_command_result';
import { az_batch_node_file_list_command_result } from './models/az_batch_node_file_list_command_result';
import { az_batch_node_file_show_command_result } from './models/az_batch_node_file_show_command_result';
import { az_batch_node_remote_desktop_download_command_result } from './models/az_batch_node_remote_desktop_download_command_result';
import { az_batch_node_remote_login_settings_show_command_result } from './models/az_batch_node_remote_login_settings_show_command_result';
import { az_batch_node_scheduling_disable_command_result } from './models/az_batch_node_scheduling_disable_command_result';
import { az_batch_node_scheduling_enable_command_result } from './models/az_batch_node_scheduling_enable_command_result';
import { az_batch_node_service_logs_upload_command_result } from './models/az_batch_node_service_logs_upload_command_result';
import { az_batch_node_user_create_command_result } from './models/az_batch_node_user_create_command_result';
import { az_batch_node_user_delete_command_result } from './models/az_batch_node_user_delete_command_result';
import { az_batch_node_user_reset_command_result } from './models/az_batch_node_user_reset_command_result';
import { az_batch_node_delete_command_result } from './models/az_batch_node_delete_command_result';
import { az_batch_node_list_command_result } from './models/az_batch_node_list_command_result';
import { az_batch_node_reboot_command_result } from './models/az_batch_node_reboot_command_result';
import { az_batch_node_reimage_command_result } from './models/az_batch_node_reimage_command_result';
import { az_batch_node_show_command_result } from './models/az_batch_node_show_command_result';
import { az_batch_pool_all_statistics_show_command_result } from './models/az_batch_pool_all_statistics_show_command_result';
import { az_batch_pool_autoscale_disable_command_result } from './models/az_batch_pool_autoscale_disable_command_result';
import { az_batch_pool_autoscale_enable_command_result } from './models/az_batch_pool_autoscale_enable_command_result';
import { az_batch_pool_autoscale_evaluate_command_result } from './models/az_batch_pool_autoscale_evaluate_command_result';
import { az_batch_pool_node_counts_list_command_result } from './models/az_batch_pool_node_counts_list_command_result';
import { az_batch_pool_supported_images_list_command_result } from './models/az_batch_pool_supported_images_list_command_result';
import { az_batch_pool_usage_metrics_list_command_result } from './models/az_batch_pool_usage_metrics_list_command_result';
import { az_batch_pool_create_command_result } from './models/az_batch_pool_create_command_result';
import { az_batch_pool_delete_command_result } from './models/az_batch_pool_delete_command_result';
import { az_batch_pool_list_command_result } from './models/az_batch_pool_list_command_result';
import { az_batch_pool_reset_command_result } from './models/az_batch_pool_reset_command_result';
import { az_batch_pool_resize_command_result } from './models/az_batch_pool_resize_command_result';
import { az_batch_pool_set_command_result } from './models/az_batch_pool_set_command_result';
import { az_batch_pool_show_command_result } from './models/az_batch_pool_show_command_result';
import { az_batch_task_file_delete_command_result } from './models/az_batch_task_file_delete_command_result';
import { az_batch_task_file_download_command_result } from './models/az_batch_task_file_download_command_result';
import { az_batch_task_file_list_command_result } from './models/az_batch_task_file_list_command_result';
import { az_batch_task_file_show_command_result } from './models/az_batch_task_file_show_command_result';
import { az_batch_task_subtask_list_command_result } from './models/az_batch_task_subtask_list_command_result';
import { az_batch_task_create_command_result } from './models/az_batch_task_create_command_result';
import { az_batch_task_delete_command_result } from './models/az_batch_task_delete_command_result';
import { az_batch_task_list_command_result } from './models/az_batch_task_list_command_result';
import { az_batch_task_reactivate_command_result } from './models/az_batch_task_reactivate_command_result';
import { az_batch_task_reset_command_result } from './models/az_batch_task_reset_command_result';
import { az_batch_task_show_command_result } from './models/az_batch_task_show_command_result';
import { az_batch_task_stop_command_result } from './models/az_batch_task_stop_command_result';
/** Manage the access keys for the auto storage account configured for a Batch account. */
export declare class az_batch_account_autostorage_keys {
    /**
     * Synchronizes access keys for the auto-storage account configured for the specified Batch account.
     *
     * Syntax:
     * ```
     * az batch account autostorage-keys sync --name
     *                                        --resource-group
     *                                        [--subscription]
     * ```
     *
     * @param {string} name Name of the Batch account.
     * @param {string} resourceGroup Name of the resource group.
     */
    static sync(name: string, resourceGroup: string): az_batch_account_autostorage_keys_sync_command_builder;
}
/** Manage Batch account keys. */
export declare class az_batch_account_keys {
    /**
     * Gets the account keys for the specified Batch account.
     *
     * Syntax:
     * ```
     * az batch account keys list --name
     *                            --resource-group
     *                            [--query-examples]
     *                            [--subscription]
     * ```
     *
     * @param {string} name Name of the Batch account.
     * @param {string} resourceGroup Name of the resource group.
     */
    static list(name: string, resourceGroup: string): az_batch_account_keys_list_command_builder;
    /**
     * Regenerates the specified account key for the Batch account.
     *
     * Syntax:
     * ```
     * az batch account keys renew --key-name {Primary, Secondary}
     *                             --name
     *                             --resource-group
     *                             [--subscription]
     * ```
     *
     * @param {'Primary' | 'Secondary'} keyName The type of account key to regenerate.
     * @param {string} name Name of the Batch account.
     * @param {string} resourceGroup Name of the resource group.
     */
    static renew(keyName: 'Primary' | 'Secondary', name: string, resourceGroup: string): az_batch_account_keys_renew_command_builder;
}
/** Manage Azure Batch accounts. */
export declare class az_batch_account {
    /**
     * Create a Batch account with the specified parameters.
     *
     * Syntax:
     * ```
     * az batch account create --location
     *                         --name
     *                         --resource-group
     *                         [--encryption-key-identifier]
     *                         [--encryption-key-source {Microsoft.Batch, Microsoft.KeyVault}]
     *                         [--identity-type {None, SystemAssigned}]
     *                         [--keyvault]
     *                         [--no-wait]
     *                         [--public-network-access {Disabled, Enabled}]
     *                         [--storage-account]
     *                         [--subscription]
     *                         [--tags]
     * ```
     *
     * @param {string} location The region in which to create the account.
     * @param {string} name Name of the Batch account.
     * @param {string} resourceGroup Name of the resource group.
     */
    static create(location: string, name: string, resourceGroup: string): az_batch_account_create_command_builder;
    /**
     * Deletes the specified Batch account.
     *
     * Syntax:
     * ```
     * az batch account delete --name
     *                         --resource-group
     *                         [--no-wait]
     *                         [--subscription]
     *                         [--yes]
     * ```
     *
     * @param {string} name Name of the Batch account.
     * @param {string} resourceGroup Name of the resource group.
     */
    static delete(name: string, resourceGroup: string): az_batch_account_delete_command_builder;
    /**
     * List the Batch accounts associated with a subscription or resource group.
     *
     * Syntax:
     * ```
     * az batch account list [--query-examples]
     *                       [--resource-group]
     *                       [--subscription]
     * ```
     */
    static list(): az_batch_account_list_command_builder;
    /**
     * Log in to a Batch account through Azure Active Directory or Shared Key authentication.
     *
     * Syntax:
     * ```
     * az batch account login --name
     *                        --resource-group
     *                        [--shared-key-auth]
     *                        [--show]
     *                        [--subscription]
     * ```
     *
     * @param {string} name Name of the Batch account.
     * @param {string} resourceGroup Name of the resource group.
     */
    static login(name: string, resourceGroup: string): az_batch_account_login_command_builder;
    /**
     * Update properties for a Batch account.
     *
     * Syntax:
     * ```
     * az batch account set --name
     *                      --resource-group
     *                      [--encryption-key-identifier]
     *                      [--encryption-key-source]
     *                      [--identity-type {None, SystemAssigned}]
     *                      [--storage-account]
     *                      [--subscription]
     *                      [--tags]
     * ```
     *
     * @param {string} name Name of the Batch account.
     * @param {string} resourceGroup Name of the resource group.
     */
    static set(name: string, resourceGroup: string): az_batch_account_set_command_builder;
    /**
     * Get a specified Batch account or the currently set account.
     *
     * Syntax:
     * ```
     * az batch account show [--name]
     *                       [--query-examples]
     *                       [--resource-group]
     *                       [--subscription]
     * ```
     */
    static show(): az_batch_account_show_command_builder;
}
/** Manage Batch application packages. */
export declare class az_batch_application_package {
    /**
     * Activates a Batch application package.
     *
     * Syntax:
     * ```
     * az batch application package activate --application-name
     *                                       --format
     *                                       --name
     *                                       --resource-group
     *                                       --version-name
     *                                       [--subscription]
     * ```
     *
     * @param {string} applicationName The name of the application. This must be unique within the account.
     * @param {string} format The format of the application package binary file.
     * @param {string} name Name of the Batch account.
     * @param {string} resourceGroup Name of the resource group.
     * @param {string} versionName The version of the application.
     */
    static activate(applicationName: string, format: string, name: string, resourceGroup: string, versionName: string): az_batch_application_package_activate_command_builder;
    /**
     * Create a Batch application package record and activate it.
     *
     * Syntax:
     * ```
     * az batch application package create --application-name
     *                                     --name
     *                                     --package-file
     *                                     --resource-group
     *                                     --version-name
     *                                     [--subscription]
     * ```
     *
     * @param {string} applicationName The name of the application.
     * @param {string} name Name of the Batch account.
     * @param {string} packageFile The path of the application package in zip format.
     * @param {string} resourceGroup Name of the resource group.
     * @param {string} versionName The version name of the application.
     */
    static create(applicationName: string, name: string, packageFile: string, resourceGroup: string, versionName: string): az_batch_application_package_create_command_builder;
    /**
     * Deletes an application package record and its associated binary file.
     *
     * Syntax:
     * ```
     * az batch application package delete --application-name
     *                                     --name
     *                                     --resource-group
     *                                     --version-name
     *                                     [--subscription]
     *                                     [--yes]
     * ```
     *
     * @param {string} applicationName The name of the application. This must be unique within the account.
     * @param {string} name Name of the Batch account.
     * @param {string} resourceGroup Name of the resource group.
     * @param {string} versionName The version of the application.
     */
    static delete(applicationName: string, name: string, resourceGroup: string, versionName: string): az_batch_application_package_delete_command_builder;
    /**
     * Lists all of the application packages in the specified application.
     *
     * Syntax:
     * ```
     * az batch application package list --application-name
     *                                   --name
     *                                   --resource-group
     *                                   [--maxresults]
     *                                   [--query-examples]
     *                                   [--subscription]
     * ```
     *
     * @param {string} applicationName The name of the application. This must be unique within the account.
     * @param {string} name Name of the Batch account.
     * @param {string} resourceGroup Name of the resource group.
     */
    static list(applicationName: string, name: string, resourceGroup: string): az_batch_application_package_list_command_builder;
    /**
     * Gets information about the specified application package.
     *
     * Syntax:
     * ```
     * az batch application package show --application-name
     *                                   --name
     *                                   --resource-group
     *                                   --version-name
     *                                   [--query-examples]
     *                                   [--subscription]
     * ```
     *
     * @param {string} applicationName The name of the application. This must be unique within the account.
     * @param {string} name Name of the Batch account.
     * @param {string} resourceGroup Name of the resource group.
     * @param {string} versionName The version of the application.
     */
    static show(applicationName: string, name: string, resourceGroup: string, versionName: string): az_batch_application_package_show_command_builder;
}
/** View a summary of Batch application packages. */
export declare class az_batch_application_summary {
    /**
     * Lists all of the applications available in the specified account.
     *
     * Syntax:
     * ```
     * az batch application summary list [--account-endpoint]
     *                                   [--account-key]
     *                                   [--account-name]
     *                                   [--query-examples]
     *                                   [--subscription]
     * ```
     */
    static list(): az_batch_application_summary_list_command_builder;
    /**
     * Gets information about the specified application.
     *
     * Syntax:
     * ```
     * az batch application summary show --application-id
     *                                   [--account-endpoint]
     *                                   [--account-key]
     *                                   [--account-name]
     *                                   [--query-examples]
     *                                   [--subscription]
     * ```
     *
     * @param {string} applicationId The ID of the Application.
     */
    static show(applicationId: string): az_batch_application_summary_show_command_builder;
}
/** Manage Batch applications. */
export declare class az_batch_application {
    /**
     * Adds an application to the specified Batch account.
     *
     * Syntax:
     * ```
     * az batch application create --application-name
     *                             --name
     *                             --resource-group
     *                             [--parameters]
     *                             [--subscription]
     * ```
     *
     * @param {string} applicationName The name of the application. This must be unique within the account.
     * @param {string} name Name of the Batch account.
     * @param {string} resourceGroup Name of the resource group.
     */
    static create(applicationName: string, name: string, resourceGroup: string): az_batch_application_create_command_builder;
    /**
     * Deletes an application.
     *
     * Syntax:
     * ```
     * az batch application delete --application-name
     *                             --name
     *                             --resource-group
     *                             [--subscription]
     *                             [--yes]
     * ```
     *
     * @param {string} applicationName The name of the application. This must be unique within the account.
     * @param {string} name Name of the Batch account.
     * @param {string} resourceGroup Name of the resource group.
     */
    static delete(applicationName: string, name: string, resourceGroup: string): az_batch_application_delete_command_builder;
    /**
     * Lists all of the applications in the specified account.
     *
     * Syntax:
     * ```
     * az batch application list --name
     *                           --resource-group
     *                           [--maxresults]
     *                           [--query-examples]
     *                           [--subscription]
     * ```
     *
     * @param {string} name Name of the Batch account.
     * @param {string} resourceGroup Name of the resource group.
     */
    static list(name: string, resourceGroup: string): az_batch_application_list_command_builder;
    /**
     * Update properties for a Batch application.
     *
     * Syntax:
     * ```
     * az batch application set --application-name
     *                          --name
     *                          --resource-group
     *                          [--allow-updates]
     *                          [--default-version]
     *                          [--display-name]
     *                          [--subscription]
     * ```
     *
     * @param {string} applicationName The name of the application.
     * @param {string} name Name of the Batch account.
     * @param {string} resourceGroup Name of the resource group.
     */
    static set(applicationName: string, name: string, resourceGroup: string): az_batch_application_set_command_builder;
    /**
     * Gets information about the specified application.
     *
     * Syntax:
     * ```
     * az batch application show --application-name
     *                           --name
     *                           --resource-group
     *                           [--query-examples]
     *                           [--subscription]
     * ```
     *
     * @param {string} applicationName The name of the application. This must be unique within the account.
     * @param {string} name Name of the Batch account.
     * @param {string} resourceGroup Name of the resource group.
     */
    static show(applicationName: string, name: string, resourceGroup: string): az_batch_application_show_command_builder;
}
/** Manage Batch certificates. */
export declare class az_batch_certificate {
    /**
     * Add a certificate to a Batch account.
     *
     * Syntax:
     * ```
     * az batch certificate create --certificate-file
     *                             --thumbprint
     *                             [--account-endpoint]
     *                             [--account-key]
     *                             [--account-name]
     *                             [--password]
     *                             [--subscription]
     * ```
     *
     * @param {string} certificateFile The certificate file: cer file or pfx file.
     * @param {string} thumbprint The certificate thumbprint.
     */
    static create(certificateFile: string, thumbprint: string): az_batch_certificate_create_command_builder;
    /**
     * Delete a certificate from a Batch account.
     *
     * Syntax:
     * ```
     * az batch certificate delete --thumbprint
     *                             [--abort]
     *                             [--account-endpoint]
     *                             [--account-key]
     *                             [--account-name]
     *                             [--subscription]
     *                             [--yes]
     * ```
     *
     * @param {string} thumbprint The certificate thumbprint.
     */
    static delete(thumbprint: string): az_batch_certificate_delete_command_builder;
    /**
     * Lists all of the Certificates that have been added to the specified Account.
     *
     * Syntax:
     * ```
     * az batch certificate list [--account-endpoint]
     *                           [--account-key]
     *                           [--account-name]
     *                           [--filter]
     *                           [--query-examples]
     *                           [--select]
     *                           [--subscription]
     * ```
     */
    static list(): az_batch_certificate_list_command_builder;
    /**
     * Gets information about the specified Certificate.
     *
     * Syntax:
     * ```
     * az batch certificate show --thumbprint
     *                           [--account-endpoint]
     *                           [--account-key]
     *                           [--account-name]
     *                           [--query-examples]
     *                           [--select]
     *                           [--subscription]
     * ```
     *
     * @param {string} thumbprint The certificate thumbprint.
     */
    static show(thumbprint: string): az_batch_certificate_show_command_builder;
}
/** View statistics of all jobs under a Batch account. */
export declare class az_batch_job_all_statistics {
    /**
     * Get lifetime summary statistics for all of the jobs in a Batch account.
     *
     * Syntax:
     * ```
     * az batch job all-statistics show [--account-endpoint]
     *                                  [--account-key]
     *                                  [--account-name]
     *                                  [--query-examples]
     *                                  [--subscription]
     * ```
     */
    static show(): az_batch_job_all_statistics_show_command_builder;
}
/** View the status of Batch job preparation and release tasks. */
export declare class az_batch_job_prep_release_status {
    /**
     * Lists the execution status of the Job Preparation and Job Release Task for the specified Job across the Compute Nodes where the Job has run.
     *
     * Syntax:
     * ```
     * az batch job prep-release-status list --job-id
     *                                       [--account-endpoint]
     *                                       [--account-key]
     *                                       [--account-name]
     *                                       [--filter]
     *                                       [--query-examples]
     *                                       [--select]
     *                                       [--subscription]
     * ```
     *
     * @param {string} jobId The ID of the Job.
     */
    static list(jobId: string): az_batch_job_prep_release_status_list_command_builder;
}
/** View the number of tasks in a Batch job and their states. */
export declare class az_batch_job_task_counts {
    /**
     * Gets the Task counts for the specified Job.
     *
     * Syntax:
     * ```
     * az batch job task-counts show --job-id
     *                               [--account-endpoint]
     *                               [--account-key]
     *                               [--account-name]
     *                               [--query-examples]
     *                               [--subscription]
     * ```
     *
     * @param {string} jobId The ID of the Job.
     */
    static show(jobId: string): az_batch_job_task_counts_show_command_builder;
}
/** Manage Batch job schedules. */
export declare class az_batch_job_schedule {
    /**
     * Add a Batch job schedule to an account.
     *
     * Syntax:
     * ```
     * az batch job-schedule create [--account-endpoint]
     *                              [--account-key]
     *                              [--account-name]
     *                              [--do-not-run-after]
     *                              [--do-not-run-until]
     *                              [--id]
     *                              [--job-manager-task-command-line]
     *                              [--job-manager-task-id]
     *                              [--job-manager-task-resource-files]
     *                              [--job-max-task-retry-count]
     *                              [--job-max-wall-clock-time]
     *                              [--json-file]
     *                              [--metadata]
     *                              [--on-all-tasks-complete {noaction, terminatejob}]
     *                              [--pool-id]
     *                              [--priority]
     *                              [--recurrence-interval]
     *                              [--start-window]
     *                              [--subscription]
     *                              [--uses-task-dependencies]
     * ```
     */
    static create(): az_batch_job_schedule_create_command_builder;
    /**
     * Deletes a Job Schedule from the specified Account.
     *
     * Syntax:
     * ```
     * az batch job-schedule delete --job-schedule-id
     *                              [--account-endpoint]
     *                              [--account-key]
     *                              [--account-name]
     *                              [--if-match]
     *                              [--if-modified-since]
     *                              [--if-none-match]
     *                              [--if-unmodified-since]
     *                              [--subscription]
     *                              [--yes]
     * ```
     *
     * @param {string} jobScheduleId The ID of the Job Schedule to delete.
     */
    static delete(jobScheduleId: string): az_batch_job_schedule_delete_command_builder;
    /**
     * Disables a Job Schedule.
     *
     * Syntax:
     * ```
     * az batch job-schedule disable --job-schedule-id
     *                               [--account-endpoint]
     *                               [--account-key]
     *                               [--account-name]
     *                               [--if-match]
     *                               [--if-modified-since]
     *                               [--if-none-match]
     *                               [--if-unmodified-since]
     *                               [--subscription]
     * ```
     *
     * @param {string} jobScheduleId The ID of the Job Schedule to disable.
     */
    static disable(jobScheduleId: string): az_batch_job_schedule_disable_command_builder;
    /**
     * Enables a Job Schedule.
     *
     * Syntax:
     * ```
     * az batch job-schedule enable --job-schedule-id
     *                              [--account-endpoint]
     *                              [--account-key]
     *                              [--account-name]
     *                              [--if-match]
     *                              [--if-modified-since]
     *                              [--if-none-match]
     *                              [--if-unmodified-since]
     *                              [--subscription]
     * ```
     *
     * @param {string} jobScheduleId The ID of the Job Schedule to enable.
     */
    static enable(jobScheduleId: string): az_batch_job_schedule_enable_command_builder;
    /**
     * Lists all of the Job Schedules in the specified Account.
     *
     * Syntax:
     * ```
     * az batch job-schedule list [--account-endpoint]
     *                            [--account-key]
     *                            [--account-name]
     *                            [--expand]
     *                            [--filter]
     *                            [--query-examples]
     *                            [--select]
     *                            [--subscription]
     * ```
     */
    static list(): az_batch_job_schedule_list_command_builder;
    /**
     * Reset the properties of a job schedule.  An updated job specification only applies to new jobs.
     *
     * Syntax:
     * ```
     * az batch job-schedule reset --job-schedule-id
     *                             [--account-endpoint]
     *                             [--account-key]
     *                             [--account-name]
     *                             [--do-not-run-after]
     *                             [--do-not-run-until]
     *                             [--if-match]
     *                             [--if-modified-since]
     *                             [--if-none-match]
     *                             [--if-unmodified-since]
     *                             [--job-manager-task-application-package-references]
     *                             [--job-manager-task-command-line]
     *                             [--job-manager-task-environment-settings]
     *                             [--job-manager-task-id]
     *                             [--job-manager-task-resource-files]
     *                             [--job-metadata]
     *                             [--json-file]
     *                             [--metadata]
     *                             [--on-all-tasks-complete {noaction, terminatejob}]
     *                             [--pool-id]
     *                             [--priority]
     *                             [--recurrence-interval]
     *                             [--start-window]
     *                             [--subscription]
     *                             [--uses-task-dependencies]
     * ```
     *
     * @param {string} jobScheduleId The ID of the Job Schedule to update.
     */
    static reset(jobScheduleId: string): az_batch_job_schedule_reset_command_builder;
    /**
     * Update the properties of a job schedule.
     *
     * Syntax:
     * ```
     * az batch job-schedule set --job-schedule-id
     *                           [--account-endpoint]
     *                           [--account-key]
     *                           [--account-name]
     *                           [--do-not-run-after]
     *                           [--do-not-run-until]
     *                           [--if-match]
     *                           [--if-modified-since]
     *                           [--if-none-match]
     *                           [--if-unmodified-since]
     *                           [--job-manager-task-application-package-references]
     *                           [--job-manager-task-command-line]
     *                           [--job-manager-task-environment-settings]
     *                           [--job-manager-task-id]
     *                           [--job-manager-task-resource-files]
     *                           [--job-metadata]
     *                           [--json-file]
     *                           [--metadata]
     *                           [--on-all-tasks-complete {noaction, terminatejob}]
     *                           [--pool-id]
     *                           [--priority]
     *                           [--recurrence-interval]
     *                           [--start-window]
     *                           [--subscription]
     *                           [--uses-task-dependencies]
     * ```
     *
     * @param {string} jobScheduleId The ID of the Job Schedule to update.
     */
    static set(jobScheduleId: string): az_batch_job_schedule_set_command_builder;
    /**
     * Gets information about the specified Job Schedule.
     *
     * Syntax:
     * ```
     * az batch job-schedule show --job-schedule-id
     *                            [--account-endpoint]
     *                            [--account-key]
     *                            [--account-name]
     *                            [--expand]
     *                            [--if-match]
     *                            [--if-modified-since]
     *                            [--if-none-match]
     *                            [--if-unmodified-since]
     *                            [--query-examples]
     *                            [--select]
     *                            [--subscription]
     * ```
     *
     * @param {string} jobScheduleId The ID of the Job Schedule to get.
     */
    static show(jobScheduleId: string): az_batch_job_schedule_show_command_builder;
    /**
     * Terminates a Job Schedule.
     *
     * Syntax:
     * ```
     * az batch job-schedule stop --job-schedule-id
     *                            [--account-endpoint]
     *                            [--account-key]
     *                            [--account-name]
     *                            [--if-match]
     *                            [--if-modified-since]
     *                            [--if-none-match]
     *                            [--if-unmodified-since]
     *                            [--subscription]
     * ```
     *
     * @param {string} jobScheduleId The ID of the Job Schedule to terminates.
     */
    static stop(jobScheduleId: string): az_batch_job_schedule_stop_command_builder;
}
/** Manage Batch jobs. */
export declare class az_batch_job {
    /**
     * Add a job to a Batch account.
     *
     * Syntax:
     * ```
     * az batch job create [--account-endpoint]
     *                     [--account-key]
     *                     [--account-name]
     *                     [--id]
     *                     [--job-manager-task-command-line]
     *                     [--job-manager-task-environment-settings]
     *                     [--job-manager-task-id]
     *                     [--job-manager-task-resource-files]
     *                     [--job-max-task-retry-count]
     *                     [--job-max-wall-clock-time]
     *                     [--json-file]
     *                     [--metadata]
     *                     [--pool-id]
     *                     [--priority]
     *                     [--subscription]
     *                     [--uses-task-dependencies]
     * ```
     */
    static create(): az_batch_job_create_command_builder;
    /**
     * Deletes a Job.
     *
     * Syntax:
     * ```
     * az batch job delete --job-id
     *                     [--account-endpoint]
     *                     [--account-key]
     *                     [--account-name]
     *                     [--if-match]
     *                     [--if-modified-since]
     *                     [--if-none-match]
     *                     [--if-unmodified-since]
     *                     [--subscription]
     *                     [--yes]
     * ```
     *
     * @param {string} jobId The ID of the Job to delete.
     */
    static delete(jobId: string): az_batch_job_delete_command_builder;
    /**
     * Disables the specified Job, preventing new Tasks from running.
     *
     * Syntax:
     * ```
     * az batch job disable --job-id
     *                      [--account-endpoint]
     *                      [--account-key]
     *                      [--account-name]
     *                      [--disable-tasks {requeue, terminate, wait}]
     *                      [--if-match]
     *                      [--if-modified-since]
     *                      [--if-none-match]
     *                      [--if-unmodified-since]
     *                      [--subscription]
     * ```
     *
     * @param {string} jobId The ID of the Job to disable.
     */
    static disable(jobId: string): az_batch_job_disable_command_builder;
    /**
     * Enables the specified Job, allowing new Tasks to run.
     *
     * Syntax:
     * ```
     * az batch job enable --job-id
     *                     [--account-endpoint]
     *                     [--account-key]
     *                     [--account-name]
     *                     [--if-match]
     *                     [--if-modified-since]
     *                     [--if-none-match]
     *                     [--if-unmodified-since]
     *                     [--subscription]
     * ```
     *
     * @param {string} jobId The ID of the Job to enable.
     */
    static enable(jobId: string): az_batch_job_enable_command_builder;
    /**
     * List all of the jobs or job schedule in a Batch account.
     *
     * Syntax:
     * ```
     * az batch job list [--account-endpoint]
     *                   [--account-key]
     *                   [--account-name]
     *                   [--expand]
     *                   [--filter]
     *                   [--job-schedule-id]
     *                   [--query-examples]
     *                   [--select]
     *                   [--subscription]
     * ```
     */
    static list(): az_batch_job_list_command_builder;
    /**
     * Update the properties of a Batch job. Unspecified properties which can be updated are reset to their defaults.
     *
     * Syntax:
     * ```
     * az batch job reset --job-id
     *                    [--account-endpoint]
     *                    [--account-key]
     *                    [--account-name]
     *                    [--if-match]
     *                    [--if-modified-since]
     *                    [--if-none-match]
     *                    [--if-unmodified-since]
     *                    [--job-max-task-retry-count]
     *                    [--job-max-wall-clock-time]
     *                    [--json-file]
     *                    [--metadata]
     *                    [--on-all-tasks-complete {noaction, terminatejob}]
     *                    [--pool-id]
     *                    [--priority]
     *                    [--subscription]
     * ```
     *
     * @param {string} jobId The ID of the Job whose properties you want to update.
     */
    static reset(jobId: string): az_batch_job_reset_command_builder;
    /**
     * Update the properties of a Batch job. Updating a property in a subgroup will reset the unspecified properties of that group.
     *
     * Syntax:
     * ```
     * az batch job set --job-id
     *                  [--account-endpoint]
     *                  [--account-key]
     *                  [--account-name]
     *                  [--if-match]
     *                  [--if-modified-since]
     *                  [--if-none-match]
     *                  [--if-unmodified-since]
     *                  [--job-max-task-retry-count]
     *                  [--job-max-wall-clock-time]
     *                  [--json-file]
     *                  [--metadata]
     *                  [--on-all-tasks-complete {noaction, terminatejob}]
     *                  [--pool-id]
     *                  [--priority]
     *                  [--subscription]
     * ```
     *
     * @param {string} jobId The ID of the Job whose properties you want to update.
     */
    static set(jobId: string): az_batch_job_set_command_builder;
    /**
     * Gets information about the specified Job.
     *
     * Syntax:
     * ```
     * az batch job show --job-id
     *                   [--account-endpoint]
     *                   [--account-key]
     *                   [--account-name]
     *                   [--expand]
     *                   [--if-match]
     *                   [--if-modified-since]
     *                   [--if-none-match]
     *                   [--if-unmodified-since]
     *                   [--query-examples]
     *                   [--select]
     *                   [--subscription]
     * ```
     *
     * @param {string} jobId The ID of the Job.
     */
    static show(jobId: string): az_batch_job_show_command_builder;
    /**
     * Terminates the specified Job, marking it as completed.
     *
     * Syntax:
     * ```
     * az batch job stop --job-id
     *                   [--account-endpoint]
     *                   [--account-key]
     *                   [--account-name]
     *                   [--if-match]
     *                   [--if-modified-since]
     *                   [--if-none-match]
     *                   [--if-unmodified-since]
     *                   [--subscription]
     *                   [--terminate-reason]
     * ```
     *
     * @param {string} jobId The ID of the Job to terminate.
     */
    static stop(jobId: string): az_batch_job_stop_command_builder;
}
/** Manage Batch service quotas at the region level. */
export declare class az_batch_location_quotas {
    /**
     * Gets the Batch service quotas for the specified subscription at the given location.
     *
     * Syntax:
     * ```
     * az batch location quotas show --location
     *                               [--query-examples]
     *                               [--subscription]
     * ```
     *
     * @param {string} location The region from which to display the Batch service quotas.
     */
    static show(location: string): az_batch_location_quotas_show_command_builder;
}
/** Manage Batch service options for a subscription at the region level. */
export declare class az_batch_location {
}
/** Manage Batch compute node files. */
export declare class az_batch_node_file {
    /**
     * Deletes the specified file from the Compute Node.
     *
     * Syntax:
     * ```
     * az batch node file delete --file-path
     *                           --node-id
     *                           --pool-id
     *                           [--account-endpoint]
     *                           [--account-key]
     *                           [--account-name]
     *                           [--recursive]
     *                           [--subscription]
     *                           [--yes]
     * ```
     *
     * @param {string} filePath The path to the file or directory that you want to delete.
     * @param {string} nodeId The ID of the Compute Node from which you want to delete the file.
     * @param {string} poolId The ID of the Pool that contains the Compute Node.
     */
    static delete(filePath: string, nodeId: string, poolId: string): az_batch_node_file_delete_command_builder;
    /**
     * Download the content of the a node file.
     *
     * Syntax:
     * ```
     * az batch node file download --destination
     *                             --file-path
     *                             --node-id
     *                             --pool-id
     *                             [--account-endpoint]
     *                             [--account-key]
     *                             [--account-name]
     *                             [--end-range]
     *                             [--if-modified-since]
     *                             [--if-unmodified-since]
     *                             [--start-range]
     *                             [--subscription]
     * ```
     *
     * @param {string} destination The path to the destination file or directory.
     * @param {string} filePath The path to the Compute Node file that you want to get the content of.
     * @param {string} nodeId The ID of the Compute Node that contains the file.
     * @param {string} poolId The ID of the Pool that contains the Compute Node.
     */
    static download(destination: string, filePath: string, nodeId: string, poolId: string): az_batch_node_file_download_command_builder;
    /**
     * Lists all of the files in Task directories on the specified Compute Node.
     *
     * Syntax:
     * ```
     * az batch node file list --node-id
     *                         --pool-id
     *                         [--account-endpoint]
     *                         [--account-key]
     *                         [--account-name]
     *                         [--filter]
     *                         [--query-examples]
     *                         [--recursive]
     *                         [--subscription]
     * ```
     *
     * @param {string} nodeId The ID of the Compute Node whose files you want to list.
     * @param {string} poolId The ID of the Pool that contains the Compute Node.
     */
    static list(nodeId: string, poolId: string): az_batch_node_file_list_command_builder;
    /**
     * Gets the properties of the specified Compute Node file.
     *
     * Syntax:
     * ```
     * az batch node file show --file-path
     *                         --node-id
     *                         --pool-id
     *                         [--account-endpoint]
     *                         [--account-key]
     *                         [--account-name]
     *                         [--if-modified-since]
     *                         [--if-unmodified-since]
     *                         [--query-examples]
     *                         [--subscription]
     * ```
     *
     * @param {string} filePath The path to the Compute Node file that you want to get the properties of.
     * @param {string} nodeId The ID of the Compute Node that contains the file.
     * @param {string} poolId The ID of the Pool that contains the Compute Node.
     */
    static show(filePath: string, nodeId: string, poolId: string): az_batch_node_file_show_command_builder;
}
/** Retrieve the remote desktop protocol file for a Batch compute node. */
export declare class az_batch_node_remote_desktop {
    /**
     * Gets the Remote Desktop Protocol file for the specified Compute Node.
     *
     * Syntax:
     * ```
     * az batch node remote-desktop download --destination
     *                                       --node-id
     *                                       --pool-id
     *                                       [--account-endpoint]
     *                                       [--account-key]
     *                                       [--account-name]
     *                                       [--subscription]
     * ```
     *
     * @param {string} destination The path to the destination file or directory.
     * @param {string} nodeId The ID of the Compute Node for which you want to get the Remote Desktop Protocol file.
     * @param {string} poolId The ID of the Pool that contains the Compute Node.
     */
    static download(destination: string, nodeId: string, poolId: string): az_batch_node_remote_desktop_download_command_builder;
}
/** Retrieve the remote login settings for a Batch compute node. */
export declare class az_batch_node_remote_login_settings {
    /**
     * Gets the settings required for remote login to a Compute Node.
     *
     * Syntax:
     * ```
     * az batch node remote-login-settings show --node-id
     *                                          --pool-id
     *                                          [--account-endpoint]
     *                                          [--account-key]
     *                                          [--account-name]
     *                                          [--query-examples]
     *                                          [--subscription]
     * ```
     *
     * @param {string} nodeId The ID of the Compute Node for which to obtain the remote login settings.
     * @param {string} poolId The ID of the Pool that contains the Compute Node.
     */
    static show(nodeId: string, poolId: string): az_batch_node_remote_login_settings_show_command_builder;
}
/** Manage task scheduling for a Batch compute node. */
export declare class az_batch_node_scheduling {
    /**
     * Disables Task scheduling on the specified Compute Node.
     *
     * Syntax:
     * ```
     * az batch node scheduling disable --node-id
     *                                  --pool-id
     *                                  [--account-endpoint]
     *                                  [--account-key]
     *                                  [--account-name]
     *                                  [--node-disable-scheduling-option {requeue, taskcompletion, terminate}]
     *                                  [--subscription]
     * ```
     *
     * @param {string} nodeId The ID of the Compute Node on which you want to disable Task scheduling.
     * @param {string} poolId The ID of the Pool that contains the Compute Node.
     */
    static disable(nodeId: string, poolId: string): az_batch_node_scheduling_disable_command_builder;
    /**
     * Enables Task scheduling on the specified Compute Node.
     *
     * Syntax:
     * ```
     * az batch node scheduling enable --node-id
     *                                 --pool-id
     *                                 [--account-endpoint]
     *                                 [--account-key]
     *                                 [--account-name]
     *                                 [--subscription]
     * ```
     *
     * @param {string} nodeId The ID of the Compute Node on which you want to enable Task scheduling.
     * @param {string} poolId The ID of the Pool that contains the Compute Node.
     */
    static enable(nodeId: string, poolId: string): az_batch_node_scheduling_enable_command_builder;
}
/** Manage the service log files of a Batch compute node. */
export declare class az_batch_node_service_logs {
    /**
     * Upload Azure Batch service log files from the specified Compute Node to Azure Blob Storage.
     *
     * Syntax:
     * ```
     * az batch node service-logs upload --node-id
     *                                   --pool-id
     *                                   [--account-endpoint]
     *                                   [--account-key]
     *                                   [--account-name]
     *                                   [--container-url]
     *                                   [--end-time]
     *                                   [--json-file]
     *                                   [--start-time]
     *                                   [--subscription]
     * ```
     *
     * @param {string} nodeId The ID of the Compute Node from which you want to upload the Azure Batch service log files.
     * @param {string} poolId The ID of the Pool that contains the Compute Node.
     */
    static upload(nodeId: string, poolId: string): az_batch_node_service_logs_upload_command_builder;
}
/** Manage the user accounts of a Batch compute node. */
export declare class az_batch_node_user {
    /**
     * Add a user account to a Batch compute node.
     *
     * Syntax:
     * ```
     * az batch node user create --node-id
     *                           --pool-id
     *                           [--account-endpoint]
     *                           [--account-key]
     *                           [--account-name]
     *                           [--expiry-time]
     *                           [--is-admin]
     *                           [--json-file]
     *                           [--name]
     *                           [--password]
     *                           [--ssh-public-key]
     *                           [--subscription]
     * ```
     *
     * @param {string} nodeId The ID of the machine on which you want to create a user Account.
     * @param {string} poolId The ID of the Pool that contains the Compute Node.
     */
    static create(nodeId: string, poolId: string): az_batch_node_user_create_command_builder;
    /**
     * Deletes a user Account from the specified Compute Node.
     *
     * Syntax:
     * ```
     * az batch node user delete --node-id
     *                           --pool-id
     *                           --user-name
     *                           [--account-endpoint]
     *                           [--account-key]
     *                           [--account-name]
     *                           [--subscription]
     *                           [--yes]
     * ```
     *
     * @param {string} nodeId The ID of the machine on which you want to delete a user Account.
     * @param {string} poolId The ID of the Pool that contains the Compute Node.
     * @param {string} userName The name of the user Account to delete.
     */
    static delete(nodeId: string, poolId: string, userName: string): az_batch_node_user_delete_command_builder;
    /**
     * Update the properties of a user account on a Batch compute node. Unspecified properties which can be updated are reset to their defaults.
     *
     * Syntax:
     * ```
     * az batch node user reset --node-id
     *                          --pool-id
     *                          --user-name
     *                          [--account-endpoint]
     *                          [--account-key]
     *                          [--account-name]
     *                          [--expiry-time]
     *                          [--json-file]
     *                          [--password]
     *                          [--ssh-public-key]
     *                          [--subscription]
     * ```
     *
     * @param {string} nodeId The ID of the machine on which you want to update a user Account.
     * @param {string} poolId The ID of the Pool that contains the Compute Node.
     * @param {string} userName The name of the user Account to update.
     */
    static reset(nodeId: string, poolId: string, userName: string): az_batch_node_user_reset_command_builder;
}
/** Manage Batch compute nodes. */
export declare class az_batch_node {
    /**
     * Removes Compute Nodes from the specified Pool.
     *
     * Syntax:
     * ```
     * az batch node delete --pool-id
     *                      [--account-endpoint]
     *                      [--account-key]
     *                      [--account-name]
     *                      [--if-match]
     *                      [--if-modified-since]
     *                      [--if-none-match]
     *                      [--if-unmodified-since]
     *                      [--json-file]
     *                      [--node-deallocation-option {requeue, retaineddata, taskcompletion, terminate}]
     *                      [--node-list]
     *                      [--resize-timeout]
     *                      [--subscription]
     * ```
     *
     * @param {string} poolId The ID of the Pool from which you want to remove Compute Nodes.
     */
    static delete(poolId: string): az_batch_node_delete_command_builder;
    /**
     * Lists the Compute Nodes in the specified Pool.
     *
     * Syntax:
     * ```
     * az batch node list --pool-id
     *                    [--account-endpoint]
     *                    [--account-key]
     *                    [--account-name]
     *                    [--filter]
     *                    [--query-examples]
     *                    [--select]
     *                    [--subscription]
     * ```
     *
     * @param {string} poolId The ID of the Pool from which you want to list Compute Nodes.
     */
    static list(poolId: string): az_batch_node_list_command_builder;
    /**
     * Restarts the specified Compute Node.
     *
     * Syntax:
     * ```
     * az batch node reboot --node-id
     *                      --pool-id
     *                      [--account-endpoint]
     *                      [--account-key]
     *                      [--account-name]
     *                      [--node-reboot-option {requeue, retaineddata, taskcompletion, terminate}]
     *                      [--subscription]
     * ```
     *
     * @param {string} nodeId The ID of the Compute Node that you want to restart.
     * @param {string} poolId The ID of the Pool that contains the Compute Node.
     */
    static reboot(nodeId: string, poolId: string): az_batch_node_reboot_command_builder;
    /**
     * Reinstalls the operating system on the specified Compute Node.
     *
     * Syntax:
     * ```
     * az batch node reimage --node-id
     *                       --pool-id
     *                       [--account-endpoint]
     *                       [--account-key]
     *                       [--account-name]
     *                       [--node-reimage-option {requeue, retaineddata, taskcompletion, terminate}]
     *                       [--subscription]
     * ```
     *
     * @param {string} nodeId The ID of the Compute Node that you want to restart.
     * @param {string} poolId The ID of the Pool that contains the Compute Node.
     */
    static reimage(nodeId: string, poolId: string): az_batch_node_reimage_command_builder;
    /**
     * Gets information about the specified Compute Node.
     *
     * Syntax:
     * ```
     * az batch node show --node-id
     *                    --pool-id
     *                    [--account-endpoint]
     *                    [--account-key]
     *                    [--account-name]
     *                    [--query-examples]
     *                    [--select]
     *                    [--subscription]
     * ```
     *
     * @param {string} nodeId The ID of the Compute Node that you want to get information about.
     * @param {string} poolId The ID of the Pool that contains the Compute Node.
     */
    static show(nodeId: string, poolId: string): az_batch_node_show_command_builder;
}
/** View statistics of all pools under a Batch account. */
export declare class az_batch_pool_all_statistics {
    /**
     * Get lifetime summary statistics for all of the pools in a Batch account.
     *
     * Syntax:
     * ```
     * az batch pool all-statistics show [--account-endpoint]
     *                                   [--account-key]
     *                                   [--account-name]
     *                                   [--query-examples]
     *                                   [--subscription]
     * ```
     */
    static show(): az_batch_pool_all_statistics_show_command_builder;
}
/** Manage automatic scaling of Batch pools. */
export declare class az_batch_pool_autoscale {
    /**
     * Disables automatic scaling for a Pool.
     *
     * Syntax:
     * ```
     * az batch pool autoscale disable --pool-id
     *                                 [--account-endpoint]
     *                                 [--account-key]
     *                                 [--account-name]
     *                                 [--subscription]
     * ```
     *
     * @param {string} poolId The ID of the Pool on which to disable automatic scaling.
     */
    static disable(poolId: string): az_batch_pool_autoscale_disable_command_builder;
    /**
     * Enables automatic scaling for a Pool.
     *
     * Syntax:
     * ```
     * az batch pool autoscale enable --pool-id
     *                                [--account-endpoint]
     *                                [--account-key]
     *                                [--account-name]
     *                                [--auto-scale-evaluation-interval]
     *                                [--auto-scale-formula]
     *                                [--if-match]
     *                                [--if-modified-since]
     *                                [--if-none-match]
     *                                [--if-unmodified-since]
     *                                [--subscription]
     * ```
     *
     * @param {string} poolId The ID of the Pool on which to enable automatic scaling.
     */
    static enable(poolId: string): az_batch_pool_autoscale_enable_command_builder;
    /**
     * Gets the result of evaluating an automatic scaling formula on the Pool.
     *
     * Syntax:
     * ```
     * az batch pool autoscale evaluate --auto-scale-formula
     *                                  --pool-id
     *                                  [--account-endpoint]
     *                                  [--account-key]
     *                                  [--account-name]
     *                                  [--subscription]
     * ```
     *
     * @param {string} autoScaleFormula The formula for the desired number of Compute Nodes in the Pool. The formula is validated and its results calculated, but it is not applied to the Pool. To apply the formula to the Pool, 'Enable automatic scaling on a Pool'. For more information about specifying this formula, see Automatically scale Compute Nodes in an Azure Batch Pool (<a href="https://azure.microsoft.com/en-us/documentation/articles/batch-automatic-scaling">https://azure.microsoft.com/en-us/documentation/articles/batch-automatic-scaling</a>).
     * @param {string} poolId The ID of the Pool on which to evaluate the automatic scaling formula.
     */
    static evaluate(autoScaleFormula: string, poolId: string): az_batch_pool_autoscale_evaluate_command_builder;
}
/** Get node counts for Batch pools. */
export declare class az_batch_pool_node_counts {
    /**
     * Gets the number of Compute Nodes in each state, grouped by Pool.
     *
     * Syntax:
     * ```
     * az batch pool node-counts list [--account-endpoint]
     *                                [--account-key]
     *                                [--account-name]
     *                                [--filter]
     *                                [--query-examples]
     *                                [--subscription]
     * ```
     */
    static list(): az_batch_pool_node_counts_list_command_builder;
}
/** Query information on VM images supported by Azure Batch service. */
export declare class az_batch_pool_supported_images {
    /**
     * Lists all Virtual Machine Images supported by the Azure Batch service.
     *
     * Syntax:
     * ```
     * az batch pool supported-images list [--account-endpoint]
     *                                     [--account-key]
     *                                     [--account-name]
     *                                     [--filter]
     *                                     [--query-examples]
     *                                     [--subscription]
     * ```
     */
    static list(): az_batch_pool_supported_images_list_command_builder;
}
/** View usage metrics of Batch pools. */
export declare class az_batch_pool_usage_metrics {
    /**
     * Lists the usage metrics, aggregated by Pool across individual time intervals, for the specified Account.
     *
     * Syntax:
     * ```
     * az batch pool usage-metrics list [--account-endpoint]
     *                                  [--account-key]
     *                                  [--account-name]
     *                                  [--end-time]
     *                                  [--filter]
     *                                  [--query-examples]
     *                                  [--start-time]
     *                                  [--subscription]
     * ```
     */
    static list(): az_batch_pool_usage_metrics_list_command_builder;
}
/** Manage Batch pools. */
export declare class az_batch_pool {
    /**
     * Create a Batch pool in an account. When creating a pool, choose arguments from either Cloud Services Configuration or Virtual Machine Configuration.
     *
     * Syntax:
     * ```
     * az batch pool create [--account-endpoint]
     *                      [--account-key]
     *                      [--account-name]
     *                      [--application-licenses]
     *                      [--application-package-references]
     *                      [--auto-scale-formula]
     *                      [--certificate-references]
     *                      [--disk-encryption-targets]
     *                      [--enable-inter-node-communication]
     *                      [--id]
     *                      [--image]
     *                      [--json-file]
     *                      [--max-tasks-per-node]
     *                      [--metadata]
     *                      [--node-agent-sku-id]
     *                      [--os-family {2, 3, 4, 5, 6}]
     *                      [--os-version]
     *                      [--resize-timeout]
     *                      [--start-task-command-line]
     *                      [--start-task-resource-files]
     *                      [--start-task-wait-for-success]
     *                      [--subscription]
     *                      [--target-dedicated-nodes]
     *                      [--target-low-priority-nodes]
     *                      [--targets]
     *                      [--vm-size]
     * ```
     */
    static create(): az_batch_pool_create_command_builder;
    /**
     * Deletes a Pool from the specified Account.
     *
     * Syntax:
     * ```
     * az batch pool delete --pool-id
     *                      [--account-endpoint]
     *                      [--account-key]
     *                      [--account-name]
     *                      [--if-match]
     *                      [--if-modified-since]
     *                      [--if-none-match]
     *                      [--if-unmodified-since]
     *                      [--subscription]
     *                      [--yes]
     * ```
     *
     * @param {string} poolId The ID of the Pool to delete.
     */
    static delete(poolId: string): az_batch_pool_delete_command_builder;
    /**
     * Lists all of the Pools in the specified Account.
     *
     * Syntax:
     * ```
     * az batch pool list [--account-endpoint]
     *                    [--account-key]
     *                    [--account-name]
     *                    [--expand]
     *                    [--filter]
     *                    [--query-examples]
     *                    [--select]
     *                    [--subscription]
     * ```
     */
    static list(): az_batch_pool_list_command_builder;
    /**
     * Update the properties of a Batch pool. Unspecified properties which can be updated are reset to their defaults.
     *
     * Syntax:
     * ```
     * az batch pool reset --pool-id
     *                     [--account-endpoint]
     *                     [--account-key]
     *                     [--account-name]
     *                     [--application-package-references]
     *                     [--certificate-references]
     *                     [--json-file]
     *                     [--metadata]
     *                     [--start-task-command-line]
     *                     [--start-task-environment-settings]
     *                     [--start-task-max-task-retry-count]
     *                     [--start-task-wait-for-success]
     *                     [--subscription]
     * ```
     *
     * @param {string} poolId The ID of the pool to update.
     */
    static reset(poolId: string): az_batch_pool_reset_command_builder;
    /**
     * Resize or stop resizing a Batch pool.
     *
     * Syntax:
     * ```
     * az batch pool resize --pool-id
     *                      [--abort]
     *                      [--account-endpoint]
     *                      [--account-key]
     *                      [--account-name]
     *                      [--if-match]
     *                      [--if-modified-since]
     *                      [--if-none-match]
     *                      [--if-unmodified-since]
     *                      [--node-deallocation-option {requeue, retaineddata, taskcompletion, terminate}]
     *                      [--resize-timeout]
     *                      [--subscription]
     *                      [--target-dedicated-nodes]
     *                      [--target-low-priority-nodes]
     * ```
     *
     * @param {string} poolId The ID of the pool.
     */
    static resize(poolId: string): az_batch_pool_resize_command_builder;
    /**
     * Update the properties of a Batch pool. Updating a property in a subgroup will reset the unspecified properties of that group.
     *
     * Syntax:
     * ```
     * az batch pool set --pool-id
     *                   [--account-endpoint]
     *                   [--account-key]
     *                   [--account-name]
     *                   [--application-package-references]
     *                   [--certificate-references]
     *                   [--if-match]
     *                   [--if-modified-since]
     *                   [--if-none-match]
     *                   [--if-unmodified-since]
     *                   [--json-file]
     *                   [--metadata]
     *                   [--start-task-command-line]
     *                   [--start-task-environment-settings]
     *                   [--start-task-max-task-retry-count]
     *                   [--start-task-resource-files]
     *                   [--start-task-wait-for-success]
     *                   [--subscription]
     * ```
     *
     * @param {string} poolId The ID of the Pool to update.
     */
    static set(poolId: string): az_batch_pool_set_command_builder;
    /**
     * Gets information about the specified Pool.
     *
     * Syntax:
     * ```
     * az batch pool show --pool-id
     *                    [--account-endpoint]
     *                    [--account-key]
     *                    [--account-name]
     *                    [--expand]
     *                    [--if-match]
     *                    [--if-modified-since]
     *                    [--if-none-match]
     *                    [--if-unmodified-since]
     *                    [--query-examples]
     *                    [--select]
     *                    [--subscription]
     * ```
     *
     * @param {string} poolId The ID of the Pool to get.
     */
    static show(poolId: string): az_batch_pool_show_command_builder;
}
/** Manage Batch task files. */
export declare class az_batch_task_file {
    /**
     * Deletes the specified Task file from the Compute Node where the Task ran.
     *
     * Syntax:
     * ```
     * az batch task file delete --file-path
     *                           --job-id
     *                           --task-id
     *                           [--account-endpoint]
     *                           [--account-key]
     *                           [--account-name]
     *                           [--recursive]
     *                           [--subscription]
     *                           [--yes]
     * ```
     *
     * @param {string} filePath The path to the Task file or directory that you want to delete.
     * @param {string} jobId The ID of the Job that contains the Task.
     * @param {string} taskId The ID of the Task whose file you want to delete.
     */
    static delete(filePath: string, jobId: string, taskId: string): az_batch_task_file_delete_command_builder;
    /**
     * Download the content of a Batch task file.
     *
     * Syntax:
     * ```
     * az batch task file download --destination
     *                             --file-path
     *                             --job-id
     *                             --task-id
     *                             [--account-endpoint]
     *                             [--account-key]
     *                             [--account-name]
     *                             [--end-range]
     *                             [--if-modified-since]
     *                             [--if-unmodified-since]
     *                             [--start-range]
     *                             [--subscription]
     * ```
     *
     * @param {string} destination The path to the destination file or directory.
     * @param {string} filePath The path to the Task file that you want to get the content of.
     * @param {string} jobId The ID of the Job that contains the Task.
     * @param {string} taskId The ID of the Task whose file you want to retrieve.
     */
    static download(destination: string, filePath: string, jobId: string, taskId: string): az_batch_task_file_download_command_builder;
    /**
     * Lists the files in a Task's directory on its Compute Node.
     *
     * Syntax:
     * ```
     * az batch task file list --job-id
     *                         --task-id
     *                         [--account-endpoint]
     *                         [--account-key]
     *                         [--account-name]
     *                         [--filter]
     *                         [--query-examples]
     *                         [--recursive]
     *                         [--subscription]
     * ```
     *
     * @param {string} jobId The ID of the Job that contains the Task.
     * @param {string} taskId The ID of the Task whose files you want to list.
     */
    static list(jobId: string, taskId: string): az_batch_task_file_list_command_builder;
    /**
     * Gets the properties of the specified Task file.
     *
     * Syntax:
     * ```
     * az batch task file show --file-path
     *                         --job-id
     *                         --task-id
     *                         [--account-endpoint]
     *                         [--account-key]
     *                         [--account-name]
     *                         [--if-modified-since]
     *                         [--if-unmodified-since]
     *                         [--query-examples]
     *                         [--subscription]
     * ```
     *
     * @param {string} filePath The path to the Task file that you want to get the properties of.
     * @param {string} jobId The ID of the Job that contains the Task.
     * @param {string} taskId The ID of the Task whose file you want to get the properties of.
     */
    static show(filePath: string, jobId: string, taskId: string): az_batch_task_file_show_command_builder;
}
/** Manage subtask information of a Batch task. */
export declare class az_batch_task_subtask {
    /**
     * Lists all of the subtasks that are associated with the specified multi-instance Task.
     *
     * Syntax:
     * ```
     * az batch task subtask list --job-id
     *                            --task-id
     *                            [--account-endpoint]
     *                            [--account-key]
     *                            [--account-name]
     *                            [--query-examples]
     *                            [--select]
     *                            [--subscription]
     * ```
     *
     * @param {string} jobId The ID of the Job.
     * @param {string} taskId The ID of the Task.
     */
    static list(jobId: string, taskId: string): az_batch_task_subtask_list_command_builder;
}
/** Manage Batch tasks. */
export declare class az_batch_task {
    /**
     * Create Batch tasks.
     *
     * Syntax:
     * ```
     * az batch task create --job-id
     *                      [--account-endpoint]
     *                      [--account-key]
     *                      [--account-name]
     *                      [--affinity-id]
     *                      [--application-package-references]
     *                      [--command-line]
     *                      [--environment-settings]
     *                      [--json-file]
     *                      [--max-task-retry-count]
     *                      [--max-wall-clock-time]
     *                      [--resource-files]
     *                      [--retention-time]
     *                      [--subscription]
     *                      [--task-id]
     * ```
     *
     * @param {string} jobId The ID of the job containing the task.
     */
    static create(jobId: string): az_batch_task_create_command_builder;
    /**
     * Deletes a Task from the specified Job.
     *
     * Syntax:
     * ```
     * az batch task delete --job-id
     *                      --task-id
     *                      [--account-endpoint]
     *                      [--account-key]
     *                      [--account-name]
     *                      [--if-match]
     *                      [--if-modified-since]
     *                      [--if-none-match]
     *                      [--if-unmodified-since]
     *                      [--subscription]
     *                      [--yes]
     * ```
     *
     * @param {string} jobId The ID of the Job from which to delete the Task.
     * @param {string} taskId The ID of the Task to delete.
     */
    static delete(jobId: string, taskId: string): az_batch_task_delete_command_builder;
    /**
     * Lists all of the Tasks that are associated with the specified Job.
     *
     * Syntax:
     * ```
     * az batch task list --job-id
     *                    [--account-endpoint]
     *                    [--account-key]
     *                    [--account-name]
     *                    [--expand]
     *                    [--filter]
     *                    [--query-examples]
     *                    [--select]
     *                    [--subscription]
     * ```
     *
     * @param {string} jobId The ID of the Job.
     */
    static list(jobId: string): az_batch_task_list_command_builder;
    /**
     * Reactivates a Task, allowing it to run again even if its retry count has been exhausted.
     *
     * Syntax:
     * ```
     * az batch task reactivate --job-id
     *                          --task-id
     *                          [--account-endpoint]
     *                          [--account-key]
     *                          [--account-name]
     *                          [--if-match]
     *                          [--if-modified-since]
     *                          [--if-none-match]
     *                          [--if-unmodified-since]
     *                          [--subscription]
     * ```
     *
     * @param {string} jobId The ID of the Job containing the Task.
     * @param {string} taskId The ID of the Task to reactivate.
     */
    static reactivate(jobId: string, taskId: string): az_batch_task_reactivate_command_builder;
    /**
     * Reset the properties of a Batch task.
     *
     * Syntax:
     * ```
     * az batch task reset --job-id
     *                     --task-id
     *                     [--account-endpoint]
     *                     [--account-key]
     *                     [--account-name]
     *                     [--if-match]
     *                     [--if-modified-since]
     *                     [--if-none-match]
     *                     [--if-unmodified-since]
     *                     [--json-file]
     *                     [--max-task-retry-count]
     *                     [--max-wall-clock-time]
     *                     [--retention-time]
     *                     [--subscription]
     * ```
     *
     * @param {string} jobId The ID of the Job containing the Task.
     * @param {string} taskId The ID of the Task to update.
     */
    static reset(jobId: string, taskId: string): az_batch_task_reset_command_builder;
    /**
     * Gets information about the specified Task.
     *
     * Syntax:
     * ```
     * az batch task show --job-id
     *                    --task-id
     *                    [--account-endpoint]
     *                    [--account-key]
     *                    [--account-name]
     *                    [--expand]
     *                    [--if-match]
     *                    [--if-modified-since]
     *                    [--if-none-match]
     *                    [--if-unmodified-since]
     *                    [--query-examples]
     *                    [--select]
     *                    [--subscription]
     * ```
     *
     * @param {string} jobId The ID of the Job that contains the Task.
     * @param {string} taskId The ID of the Task to get information about.
     */
    static show(jobId: string, taskId: string): az_batch_task_show_command_builder;
    /**
     * Terminates the specified Task.
     *
     * Syntax:
     * ```
     * az batch task stop --job-id
     *                    --task-id
     *                    [--account-endpoint]
     *                    [--account-key]
     *                    [--account-name]
     *                    [--if-match]
     *                    [--if-modified-since]
     *                    [--if-none-match]
     *                    [--if-unmodified-since]
     *                    [--subscription]
     * ```
     *
     * @param {string} jobId The ID of the Job containing the Task.
     * @param {string} taskId The ID of the Task to terminate.
     */
    static stop(jobId: string, taskId: string): az_batch_task_stop_command_builder;
}
/** Manage Azure Batch. */
export declare class az_batch {
}
/**
 * Synchronizes access keys for the auto-storage account configured for the specified Batch account.
 *
 * Syntax:
 * ```
 * az batch account autostorage-keys sync --name
 *                                        --resource-group
 *                                        [--subscription]
 * ```
 *
 * @param {string} name Name of the Batch account.
 * @param {string} resourceGroup Name of the resource group.
 */
declare class az_batch_account_autostorage_keys_sync_command_builder extends CommandBuilder<az_batch_account_autostorage_keys_sync_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** Name of the Batch account. */
    name(value: string): az_batch_account_autostorage_keys_sync_command_builder;
    /** Name of the resource group. */
    resourceGroup(value: string): az_batch_account_autostorage_keys_sync_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_batch_account_autostorage_keys_sync_command_builder;
}
/**
 * Gets the account keys for the specified Batch account.
 *
 * Syntax:
 * ```
 * az batch account keys list --name
 *                            --resource-group
 *                            [--query-examples]
 *                            [--subscription]
 * ```
 *
 * @param {string} name Name of the Batch account.
 * @param {string} resourceGroup Name of the resource group.
 */
declare class az_batch_account_keys_list_command_builder extends CommandBuilder<az_batch_account_keys_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** Name of the Batch account. */
    name(value: string): az_batch_account_keys_list_command_builder;
    /** Name of the resource group. */
    resourceGroup(value: string): az_batch_account_keys_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_batch_account_keys_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_batch_account_keys_list_command_builder;
}
/**
 * Regenerates the specified account key for the Batch account.
 *
 * Syntax:
 * ```
 * az batch account keys renew --key-name {Primary, Secondary}
 *                             --name
 *                             --resource-group
 *                             [--subscription]
 * ```
 *
 * @param {'Primary' | 'Secondary'} keyName The type of account key to regenerate.
 * @param {string} name Name of the Batch account.
 * @param {string} resourceGroup Name of the resource group.
 */
declare class az_batch_account_keys_renew_command_builder extends CommandBuilder<az_batch_account_keys_renew_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, keyName: 'Primary' | 'Secondary', name: string, resourceGroup: string);
    /** The type of account key to regenerate. */
    keyName(value: 'Primary' | 'Secondary'): az_batch_account_keys_renew_command_builder;
    /** Name of the Batch account. */
    name(value: string): az_batch_account_keys_renew_command_builder;
    /** Name of the resource group. */
    resourceGroup(value: string): az_batch_account_keys_renew_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_batch_account_keys_renew_command_builder;
}
/**
 * Create a Batch account with the specified parameters.
 *
 * Syntax:
 * ```
 * az batch account create --location
 *                         --name
 *                         --resource-group
 *                         [--encryption-key-identifier]
 *                         [--encryption-key-source {Microsoft.Batch, Microsoft.KeyVault}]
 *                         [--identity-type {None, SystemAssigned}]
 *                         [--keyvault]
 *                         [--no-wait]
 *                         [--public-network-access {Disabled, Enabled}]
 *                         [--storage-account]
 *                         [--subscription]
 *                         [--tags]
 * ```
 *
 * @param {string} location The region in which to create the account.
 * @param {string} name Name of the Batch account.
 * @param {string} resourceGroup Name of the resource group.
 */
declare class az_batch_account_create_command_builder extends CommandBuilder<az_batch_account_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, location: string, name: string, resourceGroup: string);
    /** The region in which to create the account. */
    location(value: string): az_batch_account_create_command_builder;
    /** Name of the Batch account. */
    name(value: string): az_batch_account_create_command_builder;
    /** Name of the resource group. */
    resourceGroup(value: string): az_batch_account_create_command_builder;
    /** Part of the encryption configuration for the Batch account. Full path to the versioned secret. Example <a href="https://mykeyvault.vault.azure.net/keys/testkey/6e34a81fef704045975661e297a4c053">https://mykeyvault.vault.azure.net/keys/testkey/6e34a81fef704045975661e297a4c053</a>. */
    encryptionKeyIdentifier(value: string): az_batch_account_create_command_builder;
    /** Part of the encryption configuration for the Batch account. Type of the key source. Can be either Microsoft.Batch or Microsoft.KeyVault. */
    encryptionKeySource(value: 'Microsoft.Batch' | 'Microsoft.KeyVault'): az_batch_account_create_command_builder;
    /** The type of identity used for the Batch account. */
    identityType(value: 'None' | 'SystemAssigned'): az_batch_account_create_command_builder;
    /** The KeyVault name or resource ID to be used for an account with a pool allocation mode of 'User Subscription'. */
    keyvault(value: string): az_batch_account_create_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_batch_account_create_command_builder;
    /** The network access type for accessing Azure Batch account. Values can either be enabled or disabled. */
    publicNetworkAccess(value: 'Disabled' | 'Enabled'): az_batch_account_create_command_builder;
    /** The storage account name or resource ID to be used for auto storage. */
    storageAccount(value: string): az_batch_account_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_batch_account_create_command_builder;
    /** Space-separated tags in 'key[=value]' format. */
    tags(value: string): az_batch_account_create_command_builder;
}
/**
 * Deletes the specified Batch account.
 *
 * Syntax:
 * ```
 * az batch account delete --name
 *                         --resource-group
 *                         [--no-wait]
 *                         [--subscription]
 *                         [--yes]
 * ```
 *
 * @param {string} name Name of the Batch account.
 * @param {string} resourceGroup Name of the resource group.
 */
declare class az_batch_account_delete_command_builder extends CommandBuilder<az_batch_account_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** Name of the Batch account. */
    name(value: string): az_batch_account_delete_command_builder;
    /** Name of the resource group. */
    resourceGroup(value: string): az_batch_account_delete_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_batch_account_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_batch_account_delete_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_batch_account_delete_command_builder;
}
/**
 * List the Batch accounts associated with a subscription or resource group.
 *
 * Syntax:
 * ```
 * az batch account list [--query-examples]
 *                       [--resource-group]
 *                       [--subscription]
 * ```
 */
declare class az_batch_account_list_command_builder extends CommandBuilder<az_batch_account_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_batch_account_list_command_builder;
    /** Name of the resource group. */
    resourceGroup(value: string): az_batch_account_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_batch_account_list_command_builder;
}
/**
 * Log in to a Batch account through Azure Active Directory or Shared Key authentication.
 *
 * Syntax:
 * ```
 * az batch account login --name
 *                        --resource-group
 *                        [--shared-key-auth]
 *                        [--show]
 *                        [--subscription]
 * ```
 *
 * @param {string} name Name of the Batch account.
 * @param {string} resourceGroup Name of the resource group.
 */
declare class az_batch_account_login_command_builder extends CommandBuilder<az_batch_account_login_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** Name of the Batch account. */
    name(value: string): az_batch_account_login_command_builder;
    /** Name of the resource group. */
    resourceGroup(value: string): az_batch_account_login_command_builder;
    /** Using Shared Key authentication, if not specified, it will use Azure Active Directory authentication. */
    sharedKeyAuth(value: string): az_batch_account_login_command_builder;
    /** Display the credential information for the Batch account. */
    show(value: string): az_batch_account_login_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_batch_account_login_command_builder;
}
/**
 * Update properties for a Batch account.
 *
 * Syntax:
 * ```
 * az batch account set --name
 *                      --resource-group
 *                      [--encryption-key-identifier]
 *                      [--encryption-key-source]
 *                      [--identity-type {None, SystemAssigned}]
 *                      [--storage-account]
 *                      [--subscription]
 *                      [--tags]
 * ```
 *
 * @param {string} name Name of the Batch account.
 * @param {string} resourceGroup Name of the resource group.
 */
declare class az_batch_account_set_command_builder extends CommandBuilder<az_batch_account_set_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** Name of the Batch account. */
    name(value: string): az_batch_account_set_command_builder;
    /** Name of the resource group. */
    resourceGroup(value: string): az_batch_account_set_command_builder;
    /** Part of the encryption configuration for the Batch account. Full path to the versioned secret. Example <a href="https://mykeyvault.vault.azure.net/keys/testkey/6e34a81fef704045975661e297a4c053">https://mykeyvault.vault.azure.net/keys/testkey/6e34a81fef704045975661e297a4c053</a>. */
    encryptionKeyIdentifier(value: string): az_batch_account_set_command_builder;
    /** Part of the encryption configuration for the Batch account. Type of the key source. Can be either Microsoft.Batch or Microsoft.KeyVault. */
    encryptionKeySource(value: string): az_batch_account_set_command_builder;
    /** The type of identity used for the Batch account. */
    identityType(value: 'None' | 'SystemAssigned'): az_batch_account_set_command_builder;
    /** The storage account name or resource ID to be used for auto storage. */
    storageAccount(value: string): az_batch_account_set_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_batch_account_set_command_builder;
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_batch_account_set_command_builder;
}
/**
 * Get a specified Batch account or the currently set account.
 *
 * Syntax:
 * ```
 * az batch account show [--name]
 *                       [--query-examples]
 *                       [--resource-group]
 *                       [--subscription]
 * ```
 */
declare class az_batch_account_show_command_builder extends CommandBuilder<az_batch_account_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Name of the batch account to show. If not specified will display currently set account. */
    name(value: string): az_batch_account_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_batch_account_show_command_builder;
    /** Name of the resource group. If not specified will display currently set account. */
    resourceGroup(value: string): az_batch_account_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_batch_account_show_command_builder;
}
/**
 * Activates a Batch application package.
 *
 * Syntax:
 * ```
 * az batch application package activate --application-name
 *                                       --format
 *                                       --name
 *                                       --resource-group
 *                                       --version-name
 *                                       [--subscription]
 * ```
 *
 * @param {string} applicationName The name of the application. This must be unique within the account.
 * @param {string} format The format of the application package binary file.
 * @param {string} name Name of the Batch account.
 * @param {string} resourceGroup Name of the resource group.
 * @param {string} versionName The version of the application.
 */
declare class az_batch_application_package_activate_command_builder extends CommandBuilder<az_batch_application_package_activate_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, applicationName: string, format: string, name: string, resourceGroup: string, versionName: string);
    /** The name of the application. This must be unique within the account. */
    applicationName(value: string): az_batch_application_package_activate_command_builder;
    /** The format of the application package binary file. */
    format(value: string): az_batch_application_package_activate_command_builder;
    /** Name of the Batch account. */
    name(value: string): az_batch_application_package_activate_command_builder;
    /** Name of the resource group. */
    resourceGroup(value: string): az_batch_application_package_activate_command_builder;
    /** The version of the application. */
    versionName(value: string): az_batch_application_package_activate_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_batch_application_package_activate_command_builder;
}
/**
 * Create a Batch application package record and activate it.
 *
 * Syntax:
 * ```
 * az batch application package create --application-name
 *                                     --name
 *                                     --package-file
 *                                     --resource-group
 *                                     --version-name
 *                                     [--subscription]
 * ```
 *
 * @param {string} applicationName The name of the application.
 * @param {string} name Name of the Batch account.
 * @param {string} packageFile The path of the application package in zip format.
 * @param {string} resourceGroup Name of the resource group.
 * @param {string} versionName The version name of the application.
 */
declare class az_batch_application_package_create_command_builder extends CommandBuilder<az_batch_application_package_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, applicationName: string, name: string, packageFile: string, resourceGroup: string, versionName: string);
    /** The name of the application. */
    applicationName(value: string): az_batch_application_package_create_command_builder;
    /** Name of the Batch account. */
    name(value: string): az_batch_application_package_create_command_builder;
    /** The path of the application package in zip format. */
    packageFile(value: string): az_batch_application_package_create_command_builder;
    /** Name of the resource group. */
    resourceGroup(value: string): az_batch_application_package_create_command_builder;
    /** The version name of the application. */
    versionName(value: string): az_batch_application_package_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_batch_application_package_create_command_builder;
}
/**
 * Deletes an application package record and its associated binary file.
 *
 * Syntax:
 * ```
 * az batch application package delete --application-name
 *                                     --name
 *                                     --resource-group
 *                                     --version-name
 *                                     [--subscription]
 *                                     [--yes]
 * ```
 *
 * @param {string} applicationName The name of the application. This must be unique within the account.
 * @param {string} name Name of the Batch account.
 * @param {string} resourceGroup Name of the resource group.
 * @param {string} versionName The version of the application.
 */
declare class az_batch_application_package_delete_command_builder extends CommandBuilder<az_batch_application_package_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, applicationName: string, name: string, resourceGroup: string, versionName: string);
    /** The name of the application. This must be unique within the account. */
    applicationName(value: string): az_batch_application_package_delete_command_builder;
    /** Name of the Batch account. */
    name(value: string): az_batch_application_package_delete_command_builder;
    /** Name of the resource group. */
    resourceGroup(value: string): az_batch_application_package_delete_command_builder;
    /** The version of the application. */
    versionName(value: string): az_batch_application_package_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_batch_application_package_delete_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_batch_application_package_delete_command_builder;
}
/**
 * Lists all of the application packages in the specified application.
 *
 * Syntax:
 * ```
 * az batch application package list --application-name
 *                                   --name
 *                                   --resource-group
 *                                   [--maxresults]
 *                                   [--query-examples]
 *                                   [--subscription]
 * ```
 *
 * @param {string} applicationName The name of the application. This must be unique within the account.
 * @param {string} name Name of the Batch account.
 * @param {string} resourceGroup Name of the resource group.
 */
declare class az_batch_application_package_list_command_builder extends CommandBuilder<az_batch_application_package_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, applicationName: string, name: string, resourceGroup: string);
    /** The name of the application. This must be unique within the account. */
    applicationName(value: string): az_batch_application_package_list_command_builder;
    /** Name of the Batch account. */
    name(value: string): az_batch_application_package_list_command_builder;
    /** Name of the resource group. */
    resourceGroup(value: string): az_batch_application_package_list_command_builder;
    /** The maximum number of items to return in the response. */
    maxresults(value: string): az_batch_application_package_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_batch_application_package_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_batch_application_package_list_command_builder;
}
/**
 * Gets information about the specified application package.
 *
 * Syntax:
 * ```
 * az batch application package show --application-name
 *                                   --name
 *                                   --resource-group
 *                                   --version-name
 *                                   [--query-examples]
 *                                   [--subscription]
 * ```
 *
 * @param {string} applicationName The name of the application. This must be unique within the account.
 * @param {string} name Name of the Batch account.
 * @param {string} resourceGroup Name of the resource group.
 * @param {string} versionName The version of the application.
 */
declare class az_batch_application_package_show_command_builder extends CommandBuilder<az_batch_application_package_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, applicationName: string, name: string, resourceGroup: string, versionName: string);
    /** The name of the application. This must be unique within the account. */
    applicationName(value: string): az_batch_application_package_show_command_builder;
    /** Name of the Batch account. */
    name(value: string): az_batch_application_package_show_command_builder;
    /** Name of the resource group. */
    resourceGroup(value: string): az_batch_application_package_show_command_builder;
    /** The version of the application. */
    versionName(value: string): az_batch_application_package_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_batch_application_package_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_batch_application_package_show_command_builder;
}
/**
 * Lists all of the applications available in the specified account.
 *
 * Syntax:
 * ```
 * az batch application summary list [--account-endpoint]
 *                                   [--account-key]
 *                                   [--account-name]
 *                                   [--query-examples]
 *                                   [--subscription]
 * ```
 */
declare class az_batch_application_summary_list_command_builder extends CommandBuilder<az_batch_application_summary_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    accountEndpoint(value: string): az_batch_application_summary_list_command_builder;
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    accountKey(value: string): az_batch_application_summary_list_command_builder;
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    accountName(value: string): az_batch_application_summary_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_batch_application_summary_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_batch_application_summary_list_command_builder;
}
/**
 * Gets information about the specified application.
 *
 * Syntax:
 * ```
 * az batch application summary show --application-id
 *                                   [--account-endpoint]
 *                                   [--account-key]
 *                                   [--account-name]
 *                                   [--query-examples]
 *                                   [--subscription]
 * ```
 *
 * @param {string} applicationId The ID of the Application.
 */
declare class az_batch_application_summary_show_command_builder extends CommandBuilder<az_batch_application_summary_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, applicationId: string);
    /** The ID of the Application. */
    applicationId(value: string): az_batch_application_summary_show_command_builder;
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    accountEndpoint(value: string): az_batch_application_summary_show_command_builder;
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    accountKey(value: string): az_batch_application_summary_show_command_builder;
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    accountName(value: string): az_batch_application_summary_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_batch_application_summary_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_batch_application_summary_show_command_builder;
}
/**
 * Adds an application to the specified Batch account.
 *
 * Syntax:
 * ```
 * az batch application create --application-name
 *                             --name
 *                             --resource-group
 *                             [--parameters]
 *                             [--subscription]
 * ```
 *
 * @param {string} applicationName The name of the application. This must be unique within the account.
 * @param {string} name Name of the Batch account.
 * @param {string} resourceGroup Name of the resource group.
 */
declare class az_batch_application_create_command_builder extends CommandBuilder<az_batch_application_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, applicationName: string, name: string, resourceGroup: string);
    /** The name of the application. This must be unique within the account. */
    applicationName(value: string): az_batch_application_create_command_builder;
    /** Name of the Batch account. */
    name(value: string): az_batch_application_create_command_builder;
    /** Name of the resource group. */
    resourceGroup(value: string): az_batch_application_create_command_builder;
    /** The parameters for the request. */
    parameters(value: string): az_batch_application_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_batch_application_create_command_builder;
}
/**
 * Deletes an application.
 *
 * Syntax:
 * ```
 * az batch application delete --application-name
 *                             --name
 *                             --resource-group
 *                             [--subscription]
 *                             [--yes]
 * ```
 *
 * @param {string} applicationName The name of the application. This must be unique within the account.
 * @param {string} name Name of the Batch account.
 * @param {string} resourceGroup Name of the resource group.
 */
declare class az_batch_application_delete_command_builder extends CommandBuilder<az_batch_application_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, applicationName: string, name: string, resourceGroup: string);
    /** The name of the application. This must be unique within the account. */
    applicationName(value: string): az_batch_application_delete_command_builder;
    /** Name of the Batch account. */
    name(value: string): az_batch_application_delete_command_builder;
    /** Name of the resource group. */
    resourceGroup(value: string): az_batch_application_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_batch_application_delete_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_batch_application_delete_command_builder;
}
/**
 * Lists all of the applications in the specified account.
 *
 * Syntax:
 * ```
 * az batch application list --name
 *                           --resource-group
 *                           [--maxresults]
 *                           [--query-examples]
 *                           [--subscription]
 * ```
 *
 * @param {string} name Name of the Batch account.
 * @param {string} resourceGroup Name of the resource group.
 */
declare class az_batch_application_list_command_builder extends CommandBuilder<az_batch_application_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** Name of the Batch account. */
    name(value: string): az_batch_application_list_command_builder;
    /** Name of the resource group. */
    resourceGroup(value: string): az_batch_application_list_command_builder;
    /** The maximum number of items to return in the response. */
    maxresults(value: string): az_batch_application_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_batch_application_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_batch_application_list_command_builder;
}
/**
 * Update properties for a Batch application.
 *
 * Syntax:
 * ```
 * az batch application set --application-name
 *                          --name
 *                          --resource-group
 *                          [--allow-updates]
 *                          [--default-version]
 *                          [--display-name]
 *                          [--subscription]
 * ```
 *
 * @param {string} applicationName The name of the application.
 * @param {string} name Name of the Batch account.
 * @param {string} resourceGroup Name of the resource group.
 */
declare class az_batch_application_set_command_builder extends CommandBuilder<az_batch_application_set_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, applicationName: string, name: string, resourceGroup: string);
    /** The name of the application. */
    applicationName(value: string): az_batch_application_set_command_builder;
    /** Name of the Batch account. */
    name(value: string): az_batch_application_set_command_builder;
    /** Name of the resource group. */
    resourceGroup(value: string): az_batch_application_set_command_builder;
    /** Specify to indicate whether packages within the application may be overwritten using the same version string. Specify either 'true' or 'false' to update the property. */
    allowUpdates(value: string): az_batch_application_set_command_builder;
    /** The package to use if a client requests the application but does not specify a version. This property can only be set to the name of an existing package. */
    defaultVersion(value: string): az_batch_application_set_command_builder;
    /** The display name for the application. */
    displayName(value: string): az_batch_application_set_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_batch_application_set_command_builder;
}
/**
 * Gets information about the specified application.
 *
 * Syntax:
 * ```
 * az batch application show --application-name
 *                           --name
 *                           --resource-group
 *                           [--query-examples]
 *                           [--subscription]
 * ```
 *
 * @param {string} applicationName The name of the application. This must be unique within the account.
 * @param {string} name Name of the Batch account.
 * @param {string} resourceGroup Name of the resource group.
 */
declare class az_batch_application_show_command_builder extends CommandBuilder<az_batch_application_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, applicationName: string, name: string, resourceGroup: string);
    /** The name of the application. This must be unique within the account. */
    applicationName(value: string): az_batch_application_show_command_builder;
    /** Name of the Batch account. */
    name(value: string): az_batch_application_show_command_builder;
    /** Name of the resource group. */
    resourceGroup(value: string): az_batch_application_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_batch_application_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_batch_application_show_command_builder;
}
/**
 * Add a certificate to a Batch account.
 *
 * Syntax:
 * ```
 * az batch certificate create --certificate-file
 *                             --thumbprint
 *                             [--account-endpoint]
 *                             [--account-key]
 *                             [--account-name]
 *                             [--password]
 *                             [--subscription]
 * ```
 *
 * @param {string} certificateFile The certificate file: cer file or pfx file.
 * @param {string} thumbprint The certificate thumbprint.
 */
declare class az_batch_certificate_create_command_builder extends CommandBuilder<az_batch_certificate_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, certificateFile: string, thumbprint: string);
    /** The certificate file: cer file or pfx file. */
    certificateFile(value: string): az_batch_certificate_create_command_builder;
    /** The certificate thumbprint. */
    thumbprint(value: string): az_batch_certificate_create_command_builder;
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    accountEndpoint(value: string): az_batch_certificate_create_command_builder;
    /** The Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    accountKey(value: string): az_batch_certificate_create_command_builder;
    /** The Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    accountName(value: string): az_batch_certificate_create_command_builder;
    /** The password to access the certificate's private key. */
    password(value: string): az_batch_certificate_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_batch_certificate_create_command_builder;
}
/**
 * Delete a certificate from a Batch account.
 *
 * Syntax:
 * ```
 * az batch certificate delete --thumbprint
 *                             [--abort]
 *                             [--account-endpoint]
 *                             [--account-key]
 *                             [--account-name]
 *                             [--subscription]
 *                             [--yes]
 * ```
 *
 * @param {string} thumbprint The certificate thumbprint.
 */
declare class az_batch_certificate_delete_command_builder extends CommandBuilder<az_batch_certificate_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, thumbprint: string);
    /** The certificate thumbprint. */
    thumbprint(value: string): az_batch_certificate_delete_command_builder;
    /** Cancel the failed certificate deletion operation. */
    abort(value: string): az_batch_certificate_delete_command_builder;
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    accountEndpoint(value: string): az_batch_certificate_delete_command_builder;
    /** The Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    accountKey(value: string): az_batch_certificate_delete_command_builder;
    /** The Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    accountName(value: string): az_batch_certificate_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_batch_certificate_delete_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_batch_certificate_delete_command_builder;
}
/**
 * Lists all of the Certificates that have been added to the specified Account.
 *
 * Syntax:
 * ```
 * az batch certificate list [--account-endpoint]
 *                           [--account-key]
 *                           [--account-name]
 *                           [--filter]
 *                           [--query-examples]
 *                           [--select]
 *                           [--subscription]
 * ```
 */
declare class az_batch_certificate_list_command_builder extends CommandBuilder<az_batch_certificate_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    accountEndpoint(value: string): az_batch_certificate_list_command_builder;
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    accountKey(value: string): az_batch_certificate_list_command_builder;
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    accountName(value: string): az_batch_certificate_list_command_builder;
    /** An OData $filter clause. For more information on constructing this filter, see <a href="https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-certificates">https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-certificates</a>. */
    filter(value: string): az_batch_certificate_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_batch_certificate_list_command_builder;
    /** An OData $select clause. */
    select(value: string): az_batch_certificate_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_batch_certificate_list_command_builder;
}
/**
 * Gets information about the specified Certificate.
 *
 * Syntax:
 * ```
 * az batch certificate show --thumbprint
 *                           [--account-endpoint]
 *                           [--account-key]
 *                           [--account-name]
 *                           [--query-examples]
 *                           [--select]
 *                           [--subscription]
 * ```
 *
 * @param {string} thumbprint The certificate thumbprint.
 */
declare class az_batch_certificate_show_command_builder extends CommandBuilder<az_batch_certificate_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, thumbprint: string);
    /** The certificate thumbprint. */
    thumbprint(value: string): az_batch_certificate_show_command_builder;
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    accountEndpoint(value: string): az_batch_certificate_show_command_builder;
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    accountKey(value: string): az_batch_certificate_show_command_builder;
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    accountName(value: string): az_batch_certificate_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_batch_certificate_show_command_builder;
    /** An OData $select clause. */
    select(value: string): az_batch_certificate_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_batch_certificate_show_command_builder;
}
/**
 * Get lifetime summary statistics for all of the jobs in a Batch account.
 *
 * Syntax:
 * ```
 * az batch job all-statistics show [--account-endpoint]
 *                                  [--account-key]
 *                                  [--account-name]
 *                                  [--query-examples]
 *                                  [--subscription]
 * ```
 */
declare class az_batch_job_all_statistics_show_command_builder extends CommandBuilder<az_batch_job_all_statistics_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    accountEndpoint(value: string): az_batch_job_all_statistics_show_command_builder;
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    accountKey(value: string): az_batch_job_all_statistics_show_command_builder;
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    accountName(value: string): az_batch_job_all_statistics_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_batch_job_all_statistics_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_batch_job_all_statistics_show_command_builder;
}
/**
 * Lists the execution status of the Job Preparation and Job Release Task for the specified Job across the Compute Nodes where the Job has run.
 *
 * Syntax:
 * ```
 * az batch job prep-release-status list --job-id
 *                                       [--account-endpoint]
 *                                       [--account-key]
 *                                       [--account-name]
 *                                       [--filter]
 *                                       [--query-examples]
 *                                       [--select]
 *                                       [--subscription]
 * ```
 *
 * @param {string} jobId The ID of the Job.
 */
declare class az_batch_job_prep_release_status_list_command_builder extends CommandBuilder<az_batch_job_prep_release_status_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, jobId: string);
    /** The ID of the Job. */
    jobId(value: string): az_batch_job_prep_release_status_list_command_builder;
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    accountEndpoint(value: string): az_batch_job_prep_release_status_list_command_builder;
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    accountKey(value: string): az_batch_job_prep_release_status_list_command_builder;
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    accountName(value: string): az_batch_job_prep_release_status_list_command_builder;
    /** An OData $filter clause. For more information on constructing this filter, see <a href="https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-job-preparation-and-release-status">https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-job-preparation-and-release-status</a>. */
    filter(value: string): az_batch_job_prep_release_status_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_batch_job_prep_release_status_list_command_builder;
    /** An OData $select clause. */
    select(value: string): az_batch_job_prep_release_status_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_batch_job_prep_release_status_list_command_builder;
}
/**
 * Gets the Task counts for the specified Job.
 *
 * Syntax:
 * ```
 * az batch job task-counts show --job-id
 *                               [--account-endpoint]
 *                               [--account-key]
 *                               [--account-name]
 *                               [--query-examples]
 *                               [--subscription]
 * ```
 *
 * @param {string} jobId The ID of the Job.
 */
declare class az_batch_job_task_counts_show_command_builder extends CommandBuilder<az_batch_job_task_counts_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, jobId: string);
    /** The ID of the Job. */
    jobId(value: string): az_batch_job_task_counts_show_command_builder;
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    accountEndpoint(value: string): az_batch_job_task_counts_show_command_builder;
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    accountKey(value: string): az_batch_job_task_counts_show_command_builder;
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    accountName(value: string): az_batch_job_task_counts_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_batch_job_task_counts_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_batch_job_task_counts_show_command_builder;
}
/**
 * Add a Batch job schedule to an account.
 *
 * Syntax:
 * ```
 * az batch job-schedule create [--account-endpoint]
 *                              [--account-key]
 *                              [--account-name]
 *                              [--do-not-run-after]
 *                              [--do-not-run-until]
 *                              [--id]
 *                              [--job-manager-task-command-line]
 *                              [--job-manager-task-id]
 *                              [--job-manager-task-resource-files]
 *                              [--job-max-task-retry-count]
 *                              [--job-max-wall-clock-time]
 *                              [--json-file]
 *                              [--metadata]
 *                              [--on-all-tasks-complete {noaction, terminatejob}]
 *                              [--pool-id]
 *                              [--priority]
 *                              [--recurrence-interval]
 *                              [--start-window]
 *                              [--subscription]
 *                              [--uses-task-dependencies]
 * ```
 */
declare class az_batch_job_schedule_create_command_builder extends CommandBuilder<az_batch_job_schedule_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    accountEndpoint(value: string): az_batch_job_schedule_create_command_builder;
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    accountKey(value: string): az_batch_job_schedule_create_command_builder;
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    accountName(value: string): az_batch_job_schedule_create_command_builder;
    /** A time after which no Job will be created under this Job Schedule. The schedule will move to the completed state as soon as this deadline is past and there is no active Job under this Job Schedule. If you do not specify a doNotRunAfter time, and you are creating a recurring Job Schedule, the Job Schedule will remain active until you explicitly terminate it. Expected format is an ISO-8601 timestamp. */
    doNotRunAfter(value: string): az_batch_job_schedule_create_command_builder;
    /** The earliest time at which any Job may be created under this Job Schedule. If you do not specify a doNotRunUntil time, the schedule becomes ready to create Jobs immediately. Expected format is an ISO-8601 timestamp. */
    doNotRunUntil(value: string): az_batch_job_schedule_create_command_builder;
    /** Required. A string that uniquely identifies the schedule within the Account. The ID can contain any combination of alphanumeric characters including hyphens and underscores, and cannot contain more than 64 characters. The ID is case-preserving and case-insensitive (that is, you may not have two IDs within an Account that differ only by case). */
    id(value: string): az_batch_job_schedule_create_command_builder;
    /** Required. The command line of the Job Manager Task. The command line does not run under a shell, and therefore cannot take advantage of shell features such as environment variable expansion. If you want to take advantage of such features, you should invoke the shell in the command line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux. If the command line refers to file paths, it should use a relative path (relative to the Task working directory), or use the Batch provided environment variable (<a href="https://docs.microsoft.com/en-us/azure/batch/batch-compute-node-environment-variables">https://docs.microsoft.com/en-us/azure/batch/batch-compute-node-environment-variables</a>). */
    jobManagerTaskCommandLine(value: string): az_batch_job_schedule_create_command_builder;
    /** Required. A string that uniquely identifies the Job Manager Task within the Job. The ID can contain any combination of alphanumeric characters including hyphens and underscores and cannot contain more than 64 characters. */
    jobManagerTaskId(value: string): az_batch_job_schedule_create_command_builder;
    /** A list of files that the Batch service will download to the Compute Node before running the command line. Files listed under this element are located in the Task's working directory. There is a maximum size for the list of resource files.  When the max size is exceeded, the request will fail and the response error code will be RequestEntityTooLarge. If this occurs, the collection of ResourceFiles must be reduced in size. This can be achieved using .zip files, Application Packages, or Docker Containers. Space-separated resource references in filename=httpurl format. */
    jobManagerTaskResourceFiles(value: string): az_batch_job_schedule_create_command_builder;
    /** The maximum number of times each Task may be retried. The Batch service retries a Task if its exit code is nonzero. Note that this value specifically controls the number of retries. The Batch service will try each Task once, and may then retry up to this limit. For example, if the maximum retry count is 3, Batch tries a Task up to 4 times (one initial try and 3 retries). If the maximum retry count is 0, the Batch service does not retry Tasks. If the maximum retry count is -1, the Batch service retries Tasks without limit. The default value is 0 (no retries). */
    jobMaxTaskRetryCount(value: string): az_batch_job_schedule_create_command_builder;
    /** The maximum elapsed time that the Job may run, measured from the time the Job is created. If the Job does not complete within the time limit, the Batch service terminates it and any Tasks that are still running. In this case, the termination reason will be MaxWallClockTimeExpiry. If this property is not specified, there is no time limit on how long the Job may run. Expected format is an ISO-8601 duration. */
    jobMaxWallClockTime(value: string): az_batch_job_schedule_create_command_builder;
    /** A file containing the cloud job schedule specification in JSON (formatted to match the respective REST API body). If this parameter is specified, all 'Cloud Job Schedule Arguments' are ignored. */
    jsonFile(value: string): az_batch_job_schedule_create_command_builder;
    /** A list of name-value pairs associated with the schedule as metadata. The Batch service does not assign any meaning to metadata; it is solely for the use of user code. Space-separated values in 'key=value' format. */
    metadata(value: string): az_batch_job_schedule_create_command_builder;
    /** The action the Batch service should take when all Tasks in a Job created under this schedule are in the completed state. Note that if a Job contains no Tasks, then all Tasks are considered complete. This option is therefore most commonly used with a Job Manager task; if you want to use automatic Job termination without a Job Manager, you should initially set onAllTasksComplete to noaction and update the Job properties to set onAllTasksComplete to terminatejob once you have finished adding Tasks. The default is noaction. */
    onAllTasksComplete(value: 'noaction' | 'terminatejob'): az_batch_job_schedule_create_command_builder;
    /** The id of an existing pool. All the tasks of the job will run on the specified pool. */
    poolId(value: string): az_batch_job_schedule_create_command_builder;
    /** The priority of Jobs created under this schedule. Priority values can range from -1000 to 1000, with -1000 being the lowest priority and 1000 being the highest priority. The default value is 0. This priority is used as the default for all Jobs under the Job Schedule. You can update a Job's priority after it has been created using by using the update Job API. */
    priority(value: string): az_batch_job_schedule_create_command_builder;
    /** The time interval between the start times of two successive Jobs under the Job Schedule. A Job Schedule can have at most one active Job under it at any given time. Because a Job Schedule can have at most one active Job under it at any given time, if it is time to create a new Job under a Job Schedule, but the previous Job is still running, the Batch service will not create the new Job until the previous Job finishes. If the previous Job does not finish within the startWindow period of the new recurrenceInterval, then no new Job will be scheduled for that interval. For recurring Jobs, you should normally specify a jobManagerTask in the jobSpecification. If you do not use jobManagerTask, you will need an external process to monitor when Jobs are created, add Tasks to the Jobs and terminate the Jobs ready for the next recurrence. The default is that the schedule does not recur: one Job is created, within the startWindow after the doNotRunUntil time, and the schedule is complete as soon as that Job finishes. The minimum value is 1 minute. If you specify a lower value, the Batch service rejects the schedule with an error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). Expected format is an ISO-8601 duration. */
    recurrenceInterval(value: string): az_batch_job_schedule_create_command_builder;
    /** The time interval, starting from the time at which the schedule indicates a Job should be created, within which a Job must be created. If a Job is not created within the startWindow interval, then the 'opportunity' is lost; no Job will be created until the next recurrence of the schedule. If the schedule is recurring, and the startWindow is longer than the recurrence interval, then this is equivalent to an infinite startWindow, because the Job that is 'due' in one recurrenceInterval is not carried forward into the next recurrence interval. The default is infinite. The minimum value is 1 minute. If you specify a lower value, the Batch service rejects the schedule with an error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). Expected format is an ISO-8601 duration. */
    startWindow(value: string): az_batch_job_schedule_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_batch_job_schedule_create_command_builder;
    /** Whether Tasks in the Job can define dependencies on each other. The default is false. True if flag present. */
    usesTaskDependencies(value: string): az_batch_job_schedule_create_command_builder;
}
/**
 * Deletes a Job Schedule from the specified Account.
 *
 * Syntax:
 * ```
 * az batch job-schedule delete --job-schedule-id
 *                              [--account-endpoint]
 *                              [--account-key]
 *                              [--account-name]
 *                              [--if-match]
 *                              [--if-modified-since]
 *                              [--if-none-match]
 *                              [--if-unmodified-since]
 *                              [--subscription]
 *                              [--yes]
 * ```
 *
 * @param {string} jobScheduleId The ID of the Job Schedule to delete.
 */
declare class az_batch_job_schedule_delete_command_builder extends CommandBuilder<az_batch_job_schedule_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, jobScheduleId: string);
    /** The ID of the Job Schedule to delete. */
    jobScheduleId(value: string): az_batch_job_schedule_delete_command_builder;
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    accountEndpoint(value: string): az_batch_job_schedule_delete_command_builder;
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    accountKey(value: string): az_batch_job_schedule_delete_command_builder;
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    accountName(value: string): az_batch_job_schedule_delete_command_builder;
    /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client. */
    ifMatch(value: string): az_batch_job_schedule_delete_command_builder;
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. */
    ifModifiedSince(value: string): az_batch_job_schedule_delete_command_builder;
    /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client. */
    ifNoneMatch(value: string): az_batch_job_schedule_delete_command_builder;
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. */
    ifUnmodifiedSince(value: string): az_batch_job_schedule_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_batch_job_schedule_delete_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_batch_job_schedule_delete_command_builder;
}
/**
 * Disables a Job Schedule.
 *
 * Syntax:
 * ```
 * az batch job-schedule disable --job-schedule-id
 *                               [--account-endpoint]
 *                               [--account-key]
 *                               [--account-name]
 *                               [--if-match]
 *                               [--if-modified-since]
 *                               [--if-none-match]
 *                               [--if-unmodified-since]
 *                               [--subscription]
 * ```
 *
 * @param {string} jobScheduleId The ID of the Job Schedule to disable.
 */
declare class az_batch_job_schedule_disable_command_builder extends CommandBuilder<az_batch_job_schedule_disable_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, jobScheduleId: string);
    /** The ID of the Job Schedule to disable. */
    jobScheduleId(value: string): az_batch_job_schedule_disable_command_builder;
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    accountEndpoint(value: string): az_batch_job_schedule_disable_command_builder;
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    accountKey(value: string): az_batch_job_schedule_disable_command_builder;
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    accountName(value: string): az_batch_job_schedule_disable_command_builder;
    /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client. */
    ifMatch(value: string): az_batch_job_schedule_disable_command_builder;
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. */
    ifModifiedSince(value: string): az_batch_job_schedule_disable_command_builder;
    /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client. */
    ifNoneMatch(value: string): az_batch_job_schedule_disable_command_builder;
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. */
    ifUnmodifiedSince(value: string): az_batch_job_schedule_disable_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_batch_job_schedule_disable_command_builder;
}
/**
 * Enables a Job Schedule.
 *
 * Syntax:
 * ```
 * az batch job-schedule enable --job-schedule-id
 *                              [--account-endpoint]
 *                              [--account-key]
 *                              [--account-name]
 *                              [--if-match]
 *                              [--if-modified-since]
 *                              [--if-none-match]
 *                              [--if-unmodified-since]
 *                              [--subscription]
 * ```
 *
 * @param {string} jobScheduleId The ID of the Job Schedule to enable.
 */
declare class az_batch_job_schedule_enable_command_builder extends CommandBuilder<az_batch_job_schedule_enable_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, jobScheduleId: string);
    /** The ID of the Job Schedule to enable. */
    jobScheduleId(value: string): az_batch_job_schedule_enable_command_builder;
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    accountEndpoint(value: string): az_batch_job_schedule_enable_command_builder;
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    accountKey(value: string): az_batch_job_schedule_enable_command_builder;
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    accountName(value: string): az_batch_job_schedule_enable_command_builder;
    /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client. */
    ifMatch(value: string): az_batch_job_schedule_enable_command_builder;
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. */
    ifModifiedSince(value: string): az_batch_job_schedule_enable_command_builder;
    /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client. */
    ifNoneMatch(value: string): az_batch_job_schedule_enable_command_builder;
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. */
    ifUnmodifiedSince(value: string): az_batch_job_schedule_enable_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_batch_job_schedule_enable_command_builder;
}
/**
 * Lists all of the Job Schedules in the specified Account.
 *
 * Syntax:
 * ```
 * az batch job-schedule list [--account-endpoint]
 *                            [--account-key]
 *                            [--account-name]
 *                            [--expand]
 *                            [--filter]
 *                            [--query-examples]
 *                            [--select]
 *                            [--subscription]
 * ```
 */
declare class az_batch_job_schedule_list_command_builder extends CommandBuilder<az_batch_job_schedule_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    accountEndpoint(value: string): az_batch_job_schedule_list_command_builder;
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    accountKey(value: string): az_batch_job_schedule_list_command_builder;
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    accountName(value: string): az_batch_job_schedule_list_command_builder;
    /** An OData $expand clause. */
    expand(value: string): az_batch_job_schedule_list_command_builder;
    /** An OData $filter clause. For more information on constructing this filter, see <a href="https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-job-schedules">https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-job-schedules</a>. */
    filter(value: string): az_batch_job_schedule_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_batch_job_schedule_list_command_builder;
    /** An OData $select clause. */
    select(value: string): az_batch_job_schedule_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_batch_job_schedule_list_command_builder;
}
/**
 * Reset the properties of a job schedule.  An updated job specification only applies to new jobs.
 *
 * Syntax:
 * ```
 * az batch job-schedule reset --job-schedule-id
 *                             [--account-endpoint]
 *                             [--account-key]
 *                             [--account-name]
 *                             [--do-not-run-after]
 *                             [--do-not-run-until]
 *                             [--if-match]
 *                             [--if-modified-since]
 *                             [--if-none-match]
 *                             [--if-unmodified-since]
 *                             [--job-manager-task-application-package-references]
 *                             [--job-manager-task-command-line]
 *                             [--job-manager-task-environment-settings]
 *                             [--job-manager-task-id]
 *                             [--job-manager-task-resource-files]
 *                             [--job-metadata]
 *                             [--json-file]
 *                             [--metadata]
 *                             [--on-all-tasks-complete {noaction, terminatejob}]
 *                             [--pool-id]
 *                             [--priority]
 *                             [--recurrence-interval]
 *                             [--start-window]
 *                             [--subscription]
 *                             [--uses-task-dependencies]
 * ```
 *
 * @param {string} jobScheduleId The ID of the Job Schedule to update.
 */
declare class az_batch_job_schedule_reset_command_builder extends CommandBuilder<az_batch_job_schedule_reset_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, jobScheduleId: string);
    /** The ID of the Job Schedule to update. */
    jobScheduleId(value: string): az_batch_job_schedule_reset_command_builder;
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    accountEndpoint(value: string): az_batch_job_schedule_reset_command_builder;
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    accountKey(value: string): az_batch_job_schedule_reset_command_builder;
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    accountName(value: string): az_batch_job_schedule_reset_command_builder;
    /** A time after which no Job will be created under this Job Schedule. The schedule will move to the completed state as soon as this deadline is past and there is no active Job under this Job Schedule. If you do not specify a doNotRunAfter time, and you are creating a recurring Job Schedule, the Job Schedule will remain active until you explicitly terminate it. Expected format is an ISO-8601 timestamp. */
    doNotRunAfter(value: string): az_batch_job_schedule_reset_command_builder;
    /** The earliest time at which any Job may be created under this Job Schedule. If you do not specify a doNotRunUntil time, the schedule becomes ready to create Jobs immediately. Expected format is an ISO-8601 timestamp. */
    doNotRunUntil(value: string): az_batch_job_schedule_reset_command_builder;
    /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client. */
    ifMatch(value: string): az_batch_job_schedule_reset_command_builder;
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. */
    ifModifiedSince(value: string): az_batch_job_schedule_reset_command_builder;
    /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client. */
    ifNoneMatch(value: string): az_batch_job_schedule_reset_command_builder;
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. */
    ifUnmodifiedSince(value: string): az_batch_job_schedule_reset_command_builder;
    /** A list of Application Packages that the Batch service will deploy to the Compute Node before running the command line. Application Packages are downloaded and deployed to a shared directory, not the Task working directory. Therefore, if a referenced Application Package is already on the Compute Node, and is up to date, then it is not re-downloaded; the existing copy on the Compute Node is used. If a referenced Application Package cannot be installed, for example because the package has been deleted or because download failed, the Task fails. Space-separated application IDs with optional version in 'id[#version]' format. */
    jobManagerTaskApplicationPackageReferences(value: string): az_batch_job_schedule_reset_command_builder;
    /** Required. The command line of the Job Manager Task. The command line does not run under a shell, and therefore cannot take advantage of shell features such as environment variable expansion. If you want to take advantage of such features, you should invoke the shell in the command line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux. If the command line refers to file paths, it should use a relative path (relative to the Task working directory), or use the Batch provided environment variable (<a href="https://docs.microsoft.com/en-us/azure/batch/batch-compute-node-environment-variables">https://docs.microsoft.com/en-us/azure/batch/batch-compute-node-environment-variables</a>). */
    jobManagerTaskCommandLine(value: string): az_batch_job_schedule_reset_command_builder;
    /** A list of environment variable settings for the Job Manager Task. Space-separated values in 'key=value' format. */
    jobManagerTaskEnvironmentSettings(value: string): az_batch_job_schedule_reset_command_builder;
    /** Required. A string that uniquely identifies the Job Manager Task within the Job. The ID can contain any combination of alphanumeric characters including hyphens and underscores and cannot contain more than 64 characters. */
    jobManagerTaskId(value: string): az_batch_job_schedule_reset_command_builder;
    /** A list of files that the Batch service will download to the Compute Node before running the command line. Files listed under this element are located in the Task's working directory. There is a maximum size for the list of resource files.  When the max size is exceeded, the request will fail and the response error code will be RequestEntityTooLarge. If this occurs, the collection of ResourceFiles must be reduced in size. This can be achieved using .zip files, Application Packages, or Docker Containers. Space-separated resource references in filename=httpurl format. */
    jobManagerTaskResourceFiles(value: string): az_batch_job_schedule_reset_command_builder;
    /** A list of name-value pairs associated with each Job created under this schedule as metadata. The Batch service does not assign any meaning to metadata; it is solely for the use of user code. Space-separated values in 'key=value' format. */
    jobMetadata(value: string): az_batch_job_schedule_reset_command_builder;
    /** A file containing the job schedule update parameter specification in JSON (formatted to match the respective REST API body). If this parameter is specified, all 'Job Schedule Arguments' are ignored. */
    jsonFile(value: string): az_batch_job_schedule_reset_command_builder;
    /** A list of name-value pairs associated with the Job Schedule as metadata. If you do not specify this element, it takes the default value of an empty list; in effect, any existing metadata is deleted. Space-separated values in 'key=value' format. */
    metadata(value: string): az_batch_job_schedule_reset_command_builder;
    /** The action the Batch service should take when all Tasks in a Job created under this schedule are in the completed state. Note that if a Job contains no Tasks, then all Tasks are considered complete. This option is therefore most commonly used with a Job Manager task; if you want to use automatic Job termination without a Job Manager, you should initially set onAllTasksComplete to noaction and update the Job properties to set onAllTasksComplete to terminatejob once you have finished adding Tasks. The default is noaction. */
    onAllTasksComplete(value: 'noaction' | 'terminatejob'): az_batch_job_schedule_reset_command_builder;
    /** The id of an existing pool. All the tasks of the job will run on the specified pool. */
    poolId(value: string): az_batch_job_schedule_reset_command_builder;
    /** The priority of Jobs created under this schedule. Priority values can range from -1000 to 1000, with -1000 being the lowest priority and 1000 being the highest priority. The default value is 0. This priority is used as the default for all Jobs under the Job Schedule. You can update a Job's priority after it has been created using by using the update Job API. */
    priority(value: string): az_batch_job_schedule_reset_command_builder;
    /** The time interval between the start times of two successive Jobs under the Job Schedule. A Job Schedule can have at most one active Job under it at any given time. Because a Job Schedule can have at most one active Job under it at any given time, if it is time to create a new Job under a Job Schedule, but the previous Job is still running, the Batch service will not create the new Job until the previous Job finishes. If the previous Job does not finish within the startWindow period of the new recurrenceInterval, then no new Job will be scheduled for that interval. For recurring Jobs, you should normally specify a jobManagerTask in the jobSpecification. If you do not use jobManagerTask, you will need an external process to monitor when Jobs are created, add Tasks to the Jobs and terminate the Jobs ready for the next recurrence. The default is that the schedule does not recur: one Job is created, within the startWindow after the doNotRunUntil time, and the schedule is complete as soon as that Job finishes. The minimum value is 1 minute. If you specify a lower value, the Batch service rejects the schedule with an error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). Expected format is an ISO-8601 duration. */
    recurrenceInterval(value: string): az_batch_job_schedule_reset_command_builder;
    /** The time interval, starting from the time at which the schedule indicates a Job should be created, within which a Job must be created. If a Job is not created within the startWindow interval, then the 'opportunity' is lost; no Job will be created until the next recurrence of the schedule. If the schedule is recurring, and the startWindow is longer than the recurrence interval, then this is equivalent to an infinite startWindow, because the Job that is 'due' in one recurrenceInterval is not carried forward into the next recurrence interval. The default is infinite. The minimum value is 1 minute. If you specify a lower value, the Batch service rejects the schedule with an error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). Expected format is an ISO-8601 duration. */
    startWindow(value: string): az_batch_job_schedule_reset_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_batch_job_schedule_reset_command_builder;
    /** Whether Tasks in the Job can define dependencies on each other. The default is false. True if flag present. */
    usesTaskDependencies(value: string): az_batch_job_schedule_reset_command_builder;
}
/**
 * Update the properties of a job schedule.
 *
 * Syntax:
 * ```
 * az batch job-schedule set --job-schedule-id
 *                           [--account-endpoint]
 *                           [--account-key]
 *                           [--account-name]
 *                           [--do-not-run-after]
 *                           [--do-not-run-until]
 *                           [--if-match]
 *                           [--if-modified-since]
 *                           [--if-none-match]
 *                           [--if-unmodified-since]
 *                           [--job-manager-task-application-package-references]
 *                           [--job-manager-task-command-line]
 *                           [--job-manager-task-environment-settings]
 *                           [--job-manager-task-id]
 *                           [--job-manager-task-resource-files]
 *                           [--job-metadata]
 *                           [--json-file]
 *                           [--metadata]
 *                           [--on-all-tasks-complete {noaction, terminatejob}]
 *                           [--pool-id]
 *                           [--priority]
 *                           [--recurrence-interval]
 *                           [--start-window]
 *                           [--subscription]
 *                           [--uses-task-dependencies]
 * ```
 *
 * @param {string} jobScheduleId The ID of the Job Schedule to update.
 */
declare class az_batch_job_schedule_set_command_builder extends CommandBuilder<az_batch_job_schedule_set_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, jobScheduleId: string);
    /** The ID of the Job Schedule to update. */
    jobScheduleId(value: string): az_batch_job_schedule_set_command_builder;
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    accountEndpoint(value: string): az_batch_job_schedule_set_command_builder;
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    accountKey(value: string): az_batch_job_schedule_set_command_builder;
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    accountName(value: string): az_batch_job_schedule_set_command_builder;
    /** A time after which no Job will be created under this Job Schedule. The schedule will move to the completed state as soon as this deadline is past and there is no active Job under this Job Schedule. If you do not specify a doNotRunAfter time, and you are creating a recurring Job Schedule, the Job Schedule will remain active until you explicitly terminate it. Expected format is an ISO-8601 timestamp. */
    doNotRunAfter(value: string): az_batch_job_schedule_set_command_builder;
    /** The earliest time at which any Job may be created under this Job Schedule. If you do not specify a doNotRunUntil time, the schedule becomes ready to create Jobs immediately. Expected format is an ISO-8601 timestamp. */
    doNotRunUntil(value: string): az_batch_job_schedule_set_command_builder;
    /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client. */
    ifMatch(value: string): az_batch_job_schedule_set_command_builder;
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. */
    ifModifiedSince(value: string): az_batch_job_schedule_set_command_builder;
    /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client. */
    ifNoneMatch(value: string): az_batch_job_schedule_set_command_builder;
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. */
    ifUnmodifiedSince(value: string): az_batch_job_schedule_set_command_builder;
    /** A list of Application Packages that the Batch service will deploy to the Compute Node before running the command line. Application Packages are downloaded and deployed to a shared directory, not the Task working directory. Therefore, if a referenced Application Package is already on the Compute Node, and is up to date, then it is not re-downloaded; the existing copy on the Compute Node is used. If a referenced Application Package cannot be installed, for example because the package has been deleted or because download failed, the Task fails. Space-separated application IDs with optional version in 'id[#version]' format. */
    jobManagerTaskApplicationPackageReferences(value: string): az_batch_job_schedule_set_command_builder;
    /** Required. The command line of the Job Manager Task. The command line does not run under a shell, and therefore cannot take advantage of shell features such as environment variable expansion. If you want to take advantage of such features, you should invoke the shell in the command line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux. If the command line refers to file paths, it should use a relative path (relative to the Task working directory), or use the Batch provided environment variable (<a href="https://docs.microsoft.com/en-us/azure/batch/batch-compute-node-environment-variables">https://docs.microsoft.com/en-us/azure/batch/batch-compute-node-environment-variables</a>). */
    jobManagerTaskCommandLine(value: string): az_batch_job_schedule_set_command_builder;
    /** A list of environment variable settings for the Job Manager Task. Space-separated values in 'key=value' format. */
    jobManagerTaskEnvironmentSettings(value: string): az_batch_job_schedule_set_command_builder;
    /** Required. A string that uniquely identifies the Job Manager Task within the Job. The ID can contain any combination of alphanumeric characters including hyphens and underscores and cannot contain more than 64 characters. */
    jobManagerTaskId(value: string): az_batch_job_schedule_set_command_builder;
    /** A list of files that the Batch service will download to the Compute Node before running the command line. Files listed under this element are located in the Task's working directory. There is a maximum size for the list of resource files.  When the max size is exceeded, the request will fail and the response error code will be RequestEntityTooLarge. If this occurs, the collection of ResourceFiles must be reduced in size. This can be achieved using .zip files, Application Packages, or Docker Containers. Space-separated resource references in filename=httpurl format. */
    jobManagerTaskResourceFiles(value: string): az_batch_job_schedule_set_command_builder;
    /** A list of name-value pairs associated with each Job created under this schedule as metadata. The Batch service does not assign any meaning to metadata; it is solely for the use of user code. Space-separated values in 'key=value' format. */
    jobMetadata(value: string): az_batch_job_schedule_set_command_builder;
    /** A file containing the job schedule patch parameter specification in JSON (formatted to match the respective REST API body). If this parameter is specified, all 'Job Schedule Arguments' are ignored. */
    jsonFile(value: string): az_batch_job_schedule_set_command_builder;
    /** A list of name-value pairs associated with the Job Schedule as metadata. If you do not specify this element, existing metadata is left unchanged. Space-separated values in 'key=value' format. */
    metadata(value: string): az_batch_job_schedule_set_command_builder;
    /** The action the Batch service should take when all Tasks in a Job created under this schedule are in the completed state. Note that if a Job contains no Tasks, then all Tasks are considered complete. This option is therefore most commonly used with a Job Manager task; if you want to use automatic Job termination without a Job Manager, you should initially set onAllTasksComplete to noaction and update the Job properties to set onAllTasksComplete to terminatejob once you have finished adding Tasks. The default is noaction. */
    onAllTasksComplete(value: 'noaction' | 'terminatejob'): az_batch_job_schedule_set_command_builder;
    /** The id of an existing pool. All the tasks of the job will run on the specified pool. */
    poolId(value: string): az_batch_job_schedule_set_command_builder;
    /** The priority of Jobs created under this schedule. Priority values can range from -1000 to 1000, with -1000 being the lowest priority and 1000 being the highest priority. The default value is 0. This priority is used as the default for all Jobs under the Job Schedule. You can update a Job's priority after it has been created using by using the update Job API. */
    priority(value: string): az_batch_job_schedule_set_command_builder;
    /** The time interval between the start times of two successive Jobs under the Job Schedule. A Job Schedule can have at most one active Job under it at any given time. Because a Job Schedule can have at most one active Job under it at any given time, if it is time to create a new Job under a Job Schedule, but the previous Job is still running, the Batch service will not create the new Job until the previous Job finishes. If the previous Job does not finish within the startWindow period of the new recurrenceInterval, then no new Job will be scheduled for that interval. For recurring Jobs, you should normally specify a jobManagerTask in the jobSpecification. If you do not use jobManagerTask, you will need an external process to monitor when Jobs are created, add Tasks to the Jobs and terminate the Jobs ready for the next recurrence. The default is that the schedule does not recur: one Job is created, within the startWindow after the doNotRunUntil time, and the schedule is complete as soon as that Job finishes. The minimum value is 1 minute. If you specify a lower value, the Batch service rejects the schedule with an error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). Expected format is an ISO-8601 duration. */
    recurrenceInterval(value: string): az_batch_job_schedule_set_command_builder;
    /** The time interval, starting from the time at which the schedule indicates a Job should be created, within which a Job must be created. If a Job is not created within the startWindow interval, then the 'opportunity' is lost; no Job will be created until the next recurrence of the schedule. If the schedule is recurring, and the startWindow is longer than the recurrence interval, then this is equivalent to an infinite startWindow, because the Job that is 'due' in one recurrenceInterval is not carried forward into the next recurrence interval. The default is infinite. The minimum value is 1 minute. If you specify a lower value, the Batch service rejects the schedule with an error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). Expected format is an ISO-8601 duration. */
    startWindow(value: string): az_batch_job_schedule_set_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_batch_job_schedule_set_command_builder;
    /** Whether Tasks in the Job can define dependencies on each other. The default is false. Specify either 'true' or 'false' to update the property. */
    usesTaskDependencies(value: string): az_batch_job_schedule_set_command_builder;
}
/**
 * Gets information about the specified Job Schedule.
 *
 * Syntax:
 * ```
 * az batch job-schedule show --job-schedule-id
 *                            [--account-endpoint]
 *                            [--account-key]
 *                            [--account-name]
 *                            [--expand]
 *                            [--if-match]
 *                            [--if-modified-since]
 *                            [--if-none-match]
 *                            [--if-unmodified-since]
 *                            [--query-examples]
 *                            [--select]
 *                            [--subscription]
 * ```
 *
 * @param {string} jobScheduleId The ID of the Job Schedule to get.
 */
declare class az_batch_job_schedule_show_command_builder extends CommandBuilder<az_batch_job_schedule_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, jobScheduleId: string);
    /** The ID of the Job Schedule to get. */
    jobScheduleId(value: string): az_batch_job_schedule_show_command_builder;
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    accountEndpoint(value: string): az_batch_job_schedule_show_command_builder;
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    accountKey(value: string): az_batch_job_schedule_show_command_builder;
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    accountName(value: string): az_batch_job_schedule_show_command_builder;
    /** An OData $expand clause. */
    expand(value: string): az_batch_job_schedule_show_command_builder;
    /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client. */
    ifMatch(value: string): az_batch_job_schedule_show_command_builder;
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. */
    ifModifiedSince(value: string): az_batch_job_schedule_show_command_builder;
    /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client. */
    ifNoneMatch(value: string): az_batch_job_schedule_show_command_builder;
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. */
    ifUnmodifiedSince(value: string): az_batch_job_schedule_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_batch_job_schedule_show_command_builder;
    /** An OData $select clause. */
    select(value: string): az_batch_job_schedule_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_batch_job_schedule_show_command_builder;
}
/**
 * Terminates a Job Schedule.
 *
 * Syntax:
 * ```
 * az batch job-schedule stop --job-schedule-id
 *                            [--account-endpoint]
 *                            [--account-key]
 *                            [--account-name]
 *                            [--if-match]
 *                            [--if-modified-since]
 *                            [--if-none-match]
 *                            [--if-unmodified-since]
 *                            [--subscription]
 * ```
 *
 * @param {string} jobScheduleId The ID of the Job Schedule to terminates.
 */
declare class az_batch_job_schedule_stop_command_builder extends CommandBuilder<az_batch_job_schedule_stop_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, jobScheduleId: string);
    /** The ID of the Job Schedule to terminates. */
    jobScheduleId(value: string): az_batch_job_schedule_stop_command_builder;
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    accountEndpoint(value: string): az_batch_job_schedule_stop_command_builder;
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    accountKey(value: string): az_batch_job_schedule_stop_command_builder;
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    accountName(value: string): az_batch_job_schedule_stop_command_builder;
    /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client. */
    ifMatch(value: string): az_batch_job_schedule_stop_command_builder;
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. */
    ifModifiedSince(value: string): az_batch_job_schedule_stop_command_builder;
    /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client. */
    ifNoneMatch(value: string): az_batch_job_schedule_stop_command_builder;
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. */
    ifUnmodifiedSince(value: string): az_batch_job_schedule_stop_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_batch_job_schedule_stop_command_builder;
}
/**
 * Add a job to a Batch account.
 *
 * Syntax:
 * ```
 * az batch job create [--account-endpoint]
 *                     [--account-key]
 *                     [--account-name]
 *                     [--id]
 *                     [--job-manager-task-command-line]
 *                     [--job-manager-task-environment-settings]
 *                     [--job-manager-task-id]
 *                     [--job-manager-task-resource-files]
 *                     [--job-max-task-retry-count]
 *                     [--job-max-wall-clock-time]
 *                     [--json-file]
 *                     [--metadata]
 *                     [--pool-id]
 *                     [--priority]
 *                     [--subscription]
 *                     [--uses-task-dependencies]
 * ```
 */
declare class az_batch_job_create_command_builder extends CommandBuilder<az_batch_job_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    accountEndpoint(value: string): az_batch_job_create_command_builder;
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    accountKey(value: string): az_batch_job_create_command_builder;
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    accountName(value: string): az_batch_job_create_command_builder;
    /** Required. A string that uniquely identifies the Job within the Account. The ID can contain any combination of alphanumeric characters including hyphens and underscores, and cannot contain more than 64 characters. The ID is case-preserving and case-insensitive (that is, you may not have two IDs within an Account that differ only by case). */
    id(value: string): az_batch_job_create_command_builder;
    /** Required. The command line of the Job Manager Task. The command line does not run under a shell, and therefore cannot take advantage of shell features such as environment variable expansion. If you want to take advantage of such features, you should invoke the shell in the command line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux. If the command line refers to file paths, it should use a relative path (relative to the Task working directory), or use the Batch provided environment variable (<a href="https://docs.microsoft.com/en-us/azure/batch/batch-compute-node-environment-variables">https://docs.microsoft.com/en-us/azure/batch/batch-compute-node-environment-variables</a>). */
    jobManagerTaskCommandLine(value: string): az_batch_job_create_command_builder;
    /** A list of environment variable settings for the Job Manager Task. Space-separated values in 'key=value' format. */
    jobManagerTaskEnvironmentSettings(value: string): az_batch_job_create_command_builder;
    /** Required. A string that uniquely identifies the Job Manager Task within the Job. The ID can contain any combination of alphanumeric characters including hyphens and underscores and cannot contain more than 64 characters. */
    jobManagerTaskId(value: string): az_batch_job_create_command_builder;
    /** A list of files that the Batch service will download to the Compute Node before running the command line. Files listed under this element are located in the Task's working directory. There is a maximum size for the list of resource files.  When the max size is exceeded, the request will fail and the response error code will be RequestEntityTooLarge. If this occurs, the collection of ResourceFiles must be reduced in size. This can be achieved using .zip files, Application Packages, or Docker Containers. Space-separated resource references in filename=httpurl format. */
    jobManagerTaskResourceFiles(value: string): az_batch_job_create_command_builder;
    /** The maximum number of times each Task may be retried. The Batch service retries a Task if its exit code is nonzero. Note that this value specifically controls the number of retries. The Batch service will try each Task once, and may then retry up to this limit. For example, if the maximum retry count is 3, Batch tries a Task up to 4 times (one initial try and 3 retries). If the maximum retry count is 0, the Batch service does not retry Tasks. If the maximum retry count is -1, the Batch service retries Tasks without limit. The default value is 0 (no retries). */
    jobMaxTaskRetryCount(value: string): az_batch_job_create_command_builder;
    /** The maximum elapsed time that the Job may run, measured from the time the Job is created. If the Job does not complete within the time limit, the Batch service terminates it and any Tasks that are still running. In this case, the termination reason will be MaxWallClockTimeExpiry. If this property is not specified, there is no time limit on how long the Job may run. Expected format is an ISO-8601 duration. */
    jobMaxWallClockTime(value: string): az_batch_job_create_command_builder;
    /** A file containing the job specification in JSON (formatted to match the respective REST API body). If this parameter is specified, all 'Job Arguments' are ignored. */
    jsonFile(value: string): az_batch_job_create_command_builder;
    /** A list of name-value pairs associated with the Job as metadata. The Batch service does not assign any meaning to metadata; it is solely for the use of user code. Space-separated values in 'key=value' format. */
    metadata(value: string): az_batch_job_create_command_builder;
    /** The id of an existing pool. All the tasks of the job will run on the specified pool. */
    poolId(value: string): az_batch_job_create_command_builder;
    /** The priority of the Job. Priority values can range from -1000 to 1000, with -1000 being the lowest priority and 1000 being the highest priority. The default value is 0. */
    priority(value: string): az_batch_job_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_batch_job_create_command_builder;
    /** Whether Tasks in the Job can define dependencies on each other. The default is false. True if flag present. */
    usesTaskDependencies(value: string): az_batch_job_create_command_builder;
}
/**
 * Deletes a Job.
 *
 * Syntax:
 * ```
 * az batch job delete --job-id
 *                     [--account-endpoint]
 *                     [--account-key]
 *                     [--account-name]
 *                     [--if-match]
 *                     [--if-modified-since]
 *                     [--if-none-match]
 *                     [--if-unmodified-since]
 *                     [--subscription]
 *                     [--yes]
 * ```
 *
 * @param {string} jobId The ID of the Job to delete.
 */
declare class az_batch_job_delete_command_builder extends CommandBuilder<az_batch_job_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, jobId: string);
    /** The ID of the Job to delete. */
    jobId(value: string): az_batch_job_delete_command_builder;
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    accountEndpoint(value: string): az_batch_job_delete_command_builder;
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    accountKey(value: string): az_batch_job_delete_command_builder;
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    accountName(value: string): az_batch_job_delete_command_builder;
    /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client. */
    ifMatch(value: string): az_batch_job_delete_command_builder;
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. */
    ifModifiedSince(value: string): az_batch_job_delete_command_builder;
    /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client. */
    ifNoneMatch(value: string): az_batch_job_delete_command_builder;
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. */
    ifUnmodifiedSince(value: string): az_batch_job_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_batch_job_delete_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_batch_job_delete_command_builder;
}
/**
 * Disables the specified Job, preventing new Tasks from running.
 *
 * Syntax:
 * ```
 * az batch job disable --job-id
 *                      [--account-endpoint]
 *                      [--account-key]
 *                      [--account-name]
 *                      [--disable-tasks {requeue, terminate, wait}]
 *                      [--if-match]
 *                      [--if-modified-since]
 *                      [--if-none-match]
 *                      [--if-unmodified-since]
 *                      [--subscription]
 * ```
 *
 * @param {string} jobId The ID of the Job to disable.
 */
declare class az_batch_job_disable_command_builder extends CommandBuilder<az_batch_job_disable_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, jobId: string);
    /** The ID of the Job to disable. */
    jobId(value: string): az_batch_job_disable_command_builder;
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    accountEndpoint(value: string): az_batch_job_disable_command_builder;
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    accountKey(value: string): az_batch_job_disable_command_builder;
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    accountName(value: string): az_batch_job_disable_command_builder;
    /** What to do with active Tasks associated with the Job. */
    disableTasks(value: 'requeue' | 'terminate' | 'wait'): az_batch_job_disable_command_builder;
    /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client. */
    ifMatch(value: string): az_batch_job_disable_command_builder;
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. */
    ifModifiedSince(value: string): az_batch_job_disable_command_builder;
    /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client. */
    ifNoneMatch(value: string): az_batch_job_disable_command_builder;
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. */
    ifUnmodifiedSince(value: string): az_batch_job_disable_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_batch_job_disable_command_builder;
}
/**
 * Enables the specified Job, allowing new Tasks to run.
 *
 * Syntax:
 * ```
 * az batch job enable --job-id
 *                     [--account-endpoint]
 *                     [--account-key]
 *                     [--account-name]
 *                     [--if-match]
 *                     [--if-modified-since]
 *                     [--if-none-match]
 *                     [--if-unmodified-since]
 *                     [--subscription]
 * ```
 *
 * @param {string} jobId The ID of the Job to enable.
 */
declare class az_batch_job_enable_command_builder extends CommandBuilder<az_batch_job_enable_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, jobId: string);
    /** The ID of the Job to enable. */
    jobId(value: string): az_batch_job_enable_command_builder;
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    accountEndpoint(value: string): az_batch_job_enable_command_builder;
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    accountKey(value: string): az_batch_job_enable_command_builder;
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    accountName(value: string): az_batch_job_enable_command_builder;
    /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client. */
    ifMatch(value: string): az_batch_job_enable_command_builder;
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. */
    ifModifiedSince(value: string): az_batch_job_enable_command_builder;
    /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client. */
    ifNoneMatch(value: string): az_batch_job_enable_command_builder;
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. */
    ifUnmodifiedSince(value: string): az_batch_job_enable_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_batch_job_enable_command_builder;
}
/**
 * List all of the jobs or job schedule in a Batch account.
 *
 * Syntax:
 * ```
 * az batch job list [--account-endpoint]
 *                   [--account-key]
 *                   [--account-name]
 *                   [--expand]
 *                   [--filter]
 *                   [--job-schedule-id]
 *                   [--query-examples]
 *                   [--select]
 *                   [--subscription]
 * ```
 */
declare class az_batch_job_list_command_builder extends CommandBuilder<az_batch_job_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    accountEndpoint(value: string): az_batch_job_list_command_builder;
    /** The Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    accountKey(value: string): az_batch_job_list_command_builder;
    /** The Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    accountName(value: string): az_batch_job_list_command_builder;
    /** An OData $expand clause. */
    expand(value: string): az_batch_job_list_command_builder;
    /** An OData $filter clause. */
    filter(value: string): az_batch_job_list_command_builder;
    /** The ID of the job schedule from which you want to get a list of jobs. If omitted, lists all jobs in the account. */
    jobScheduleId(value: string): az_batch_job_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_batch_job_list_command_builder;
    /** An OData $select clause. */
    select(value: string): az_batch_job_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_batch_job_list_command_builder;
}
/**
 * Update the properties of a Batch job. Unspecified properties which can be updated are reset to their defaults.
 *
 * Syntax:
 * ```
 * az batch job reset --job-id
 *                    [--account-endpoint]
 *                    [--account-key]
 *                    [--account-name]
 *                    [--if-match]
 *                    [--if-modified-since]
 *                    [--if-none-match]
 *                    [--if-unmodified-since]
 *                    [--job-max-task-retry-count]
 *                    [--job-max-wall-clock-time]
 *                    [--json-file]
 *                    [--metadata]
 *                    [--on-all-tasks-complete {noaction, terminatejob}]
 *                    [--pool-id]
 *                    [--priority]
 *                    [--subscription]
 * ```
 *
 * @param {string} jobId The ID of the Job whose properties you want to update.
 */
declare class az_batch_job_reset_command_builder extends CommandBuilder<az_batch_job_reset_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, jobId: string);
    /** The ID of the Job whose properties you want to update. */
    jobId(value: string): az_batch_job_reset_command_builder;
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    accountEndpoint(value: string): az_batch_job_reset_command_builder;
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    accountKey(value: string): az_batch_job_reset_command_builder;
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    accountName(value: string): az_batch_job_reset_command_builder;
    /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client. */
    ifMatch(value: string): az_batch_job_reset_command_builder;
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. */
    ifModifiedSince(value: string): az_batch_job_reset_command_builder;
    /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client. */
    ifNoneMatch(value: string): az_batch_job_reset_command_builder;
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. */
    ifUnmodifiedSince(value: string): az_batch_job_reset_command_builder;
    /** The maximum number of times each Task may be retried. The Batch service retries a Task if its exit code is nonzero. Note that this value specifically controls the number of retries. The Batch service will try each Task once, and may then retry up to this limit. For example, if the maximum retry count is 3, Batch tries a Task up to 4 times (one initial try and 3 retries). If the maximum retry count is 0, the Batch service does not retry Tasks. If the maximum retry count is -1, the Batch service retries Tasks without limit. The default value is 0 (no retries). */
    jobMaxTaskRetryCount(value: string): az_batch_job_reset_command_builder;
    /** The maximum elapsed time that the Job may run, measured from the time the Job is created. If the Job does not complete within the time limit, the Batch service terminates it and any Tasks that are still running. In this case, the termination reason will be MaxWallClockTimeExpiry. If this property is not specified, there is no time limit on how long the Job may run. Expected format is an ISO-8601 duration. */
    jobMaxWallClockTime(value: string): az_batch_job_reset_command_builder;
    /** A file containing the job update parameter specification in JSON (formatted to match the respective REST API body). If this parameter is specified, all 'Job Arguments' are ignored. */
    jsonFile(value: string): az_batch_job_reset_command_builder;
    /** A list of name-value pairs associated with the Job as metadata. If omitted, it takes the default value of an empty list; in effect, any existing metadata is deleted. Space-separated values in 'key=value' format. */
    metadata(value: string): az_batch_job_reset_command_builder;
    /** The action the Batch service should take when all Tasks in the Job are in the completed state. If omitted, the completion behavior is set to noaction. If the current value is terminatejob, this is an error because a Job's completion behavior may not be changed from terminatejob to noaction. You may not change the value from terminatejob to noaction - that is, once you have engaged automatic Job termination, you cannot turn it off again. If you try to do this, the request fails and Batch returns status code 400 (Bad Request) and an 'invalid property value' error response. If you do not specify this element in a PUT request, it is equivalent to passing noaction. This is an error if the current value is terminatejob. */
    onAllTasksComplete(value: 'noaction' | 'terminatejob'): az_batch_job_reset_command_builder;
    /** The id of an existing pool. All the tasks of the job will run on the specified pool. */
    poolId(value: string): az_batch_job_reset_command_builder;
    /** The priority of the Job. Priority values can range from -1000 to 1000, with -1000 being the lowest priority and 1000 being the highest priority. If omitted, it is set to the default value 0. */
    priority(value: string): az_batch_job_reset_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_batch_job_reset_command_builder;
}
/**
 * Update the properties of a Batch job. Updating a property in a subgroup will reset the unspecified properties of that group.
 *
 * Syntax:
 * ```
 * az batch job set --job-id
 *                  [--account-endpoint]
 *                  [--account-key]
 *                  [--account-name]
 *                  [--if-match]
 *                  [--if-modified-since]
 *                  [--if-none-match]
 *                  [--if-unmodified-since]
 *                  [--job-max-task-retry-count]
 *                  [--job-max-wall-clock-time]
 *                  [--json-file]
 *                  [--metadata]
 *                  [--on-all-tasks-complete {noaction, terminatejob}]
 *                  [--pool-id]
 *                  [--priority]
 *                  [--subscription]
 * ```
 *
 * @param {string} jobId The ID of the Job whose properties you want to update.
 */
declare class az_batch_job_set_command_builder extends CommandBuilder<az_batch_job_set_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, jobId: string);
    /** The ID of the Job whose properties you want to update. */
    jobId(value: string): az_batch_job_set_command_builder;
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    accountEndpoint(value: string): az_batch_job_set_command_builder;
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    accountKey(value: string): az_batch_job_set_command_builder;
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    accountName(value: string): az_batch_job_set_command_builder;
    /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client. */
    ifMatch(value: string): az_batch_job_set_command_builder;
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. */
    ifModifiedSince(value: string): az_batch_job_set_command_builder;
    /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client. */
    ifNoneMatch(value: string): az_batch_job_set_command_builder;
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. */
    ifUnmodifiedSince(value: string): az_batch_job_set_command_builder;
    /** The maximum number of times each Task may be retried. The Batch service retries a Task if its exit code is nonzero. Note that this value specifically controls the number of retries. The Batch service will try each Task once, and may then retry up to this limit. For example, if the maximum retry count is 3, Batch tries a Task up to 4 times (one initial try and 3 retries). If the maximum retry count is 0, the Batch service does not retry Tasks. If the maximum retry count is -1, the Batch service retries Tasks without limit. The default value is 0 (no retries). */
    jobMaxTaskRetryCount(value: string): az_batch_job_set_command_builder;
    /** The maximum elapsed time that the Job may run, measured from the time the Job is created. If the Job does not complete within the time limit, the Batch service terminates it and any Tasks that are still running. In this case, the termination reason will be MaxWallClockTimeExpiry. If this property is not specified, there is no time limit on how long the Job may run. Expected format is an ISO-8601 duration. */
    jobMaxWallClockTime(value: string): az_batch_job_set_command_builder;
    /** A file containing the job patch parameter specification in JSON (formatted to match the respective REST API body). If this parameter is specified, all 'Job Arguments' are ignored. */
    jsonFile(value: string): az_batch_job_set_command_builder;
    /** A list of name-value pairs associated with the Job as metadata. If omitted, the existing Job metadata is left unchanged. Space-separated values in 'key=value' format. */
    metadata(value: string): az_batch_job_set_command_builder;
    /** The action the Batch service should take when all Tasks in the Job are in the completed state. If omitted, the completion behavior is left unchanged. You may not change the value from terminatejob to noaction - that is, once you have engaged automatic Job termination, you cannot turn it off again. If you try to do this, the request fails with an 'invalid property value' error response; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). */
    onAllTasksComplete(value: 'noaction' | 'terminatejob'): az_batch_job_set_command_builder;
    /** The id of an existing pool. All the tasks of the job will run on the specified pool. */
    poolId(value: string): az_batch_job_set_command_builder;
    /** The priority of the Job. Priority values can range from -1000 to 1000, with -1000 being the lowest priority and 1000 being the highest priority. If omitted, the priority of the Job is left unchanged. */
    priority(value: string): az_batch_job_set_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_batch_job_set_command_builder;
}
/**
 * Gets information about the specified Job.
 *
 * Syntax:
 * ```
 * az batch job show --job-id
 *                   [--account-endpoint]
 *                   [--account-key]
 *                   [--account-name]
 *                   [--expand]
 *                   [--if-match]
 *                   [--if-modified-since]
 *                   [--if-none-match]
 *                   [--if-unmodified-since]
 *                   [--query-examples]
 *                   [--select]
 *                   [--subscription]
 * ```
 *
 * @param {string} jobId The ID of the Job.
 */
declare class az_batch_job_show_command_builder extends CommandBuilder<az_batch_job_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, jobId: string);
    /** The ID of the Job. */
    jobId(value: string): az_batch_job_show_command_builder;
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    accountEndpoint(value: string): az_batch_job_show_command_builder;
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    accountKey(value: string): az_batch_job_show_command_builder;
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    accountName(value: string): az_batch_job_show_command_builder;
    /** An OData $expand clause. */
    expand(value: string): az_batch_job_show_command_builder;
    /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client. */
    ifMatch(value: string): az_batch_job_show_command_builder;
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. */
    ifModifiedSince(value: string): az_batch_job_show_command_builder;
    /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client. */
    ifNoneMatch(value: string): az_batch_job_show_command_builder;
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. */
    ifUnmodifiedSince(value: string): az_batch_job_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_batch_job_show_command_builder;
    /** An OData $select clause. */
    select(value: string): az_batch_job_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_batch_job_show_command_builder;
}
/**
 * Terminates the specified Job, marking it as completed.
 *
 * Syntax:
 * ```
 * az batch job stop --job-id
 *                   [--account-endpoint]
 *                   [--account-key]
 *                   [--account-name]
 *                   [--if-match]
 *                   [--if-modified-since]
 *                   [--if-none-match]
 *                   [--if-unmodified-since]
 *                   [--subscription]
 *                   [--terminate-reason]
 * ```
 *
 * @param {string} jobId The ID of the Job to terminate.
 */
declare class az_batch_job_stop_command_builder extends CommandBuilder<az_batch_job_stop_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, jobId: string);
    /** The ID of the Job to terminate. */
    jobId(value: string): az_batch_job_stop_command_builder;
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    accountEndpoint(value: string): az_batch_job_stop_command_builder;
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    accountKey(value: string): az_batch_job_stop_command_builder;
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    accountName(value: string): az_batch_job_stop_command_builder;
    /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client. */
    ifMatch(value: string): az_batch_job_stop_command_builder;
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. */
    ifModifiedSince(value: string): az_batch_job_stop_command_builder;
    /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client. */
    ifNoneMatch(value: string): az_batch_job_stop_command_builder;
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. */
    ifUnmodifiedSince(value: string): az_batch_job_stop_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_batch_job_stop_command_builder;
    /** The text you want to appear as the Job's TerminateReason. The default is 'UserTerminate'. */
    terminateReason(value: string): az_batch_job_stop_command_builder;
}
/**
 * Gets the Batch service quotas for the specified subscription at the given location.
 *
 * Syntax:
 * ```
 * az batch location quotas show --location
 *                               [--query-examples]
 *                               [--subscription]
 * ```
 *
 * @param {string} location The region from which to display the Batch service quotas.
 */
declare class az_batch_location_quotas_show_command_builder extends CommandBuilder<az_batch_location_quotas_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, location: string);
    /** The region from which to display the Batch service quotas. */
    location(value: string): az_batch_location_quotas_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_batch_location_quotas_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_batch_location_quotas_show_command_builder;
}
/**
 * Deletes the specified file from the Compute Node.
 *
 * Syntax:
 * ```
 * az batch node file delete --file-path
 *                           --node-id
 *                           --pool-id
 *                           [--account-endpoint]
 *                           [--account-key]
 *                           [--account-name]
 *                           [--recursive]
 *                           [--subscription]
 *                           [--yes]
 * ```
 *
 * @param {string} filePath The path to the file or directory that you want to delete.
 * @param {string} nodeId The ID of the Compute Node from which you want to delete the file.
 * @param {string} poolId The ID of the Pool that contains the Compute Node.
 */
declare class az_batch_node_file_delete_command_builder extends CommandBuilder<az_batch_node_file_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, filePath: string, nodeId: string, poolId: string);
    /** The path to the file or directory that you want to delete. */
    filePath(value: string): az_batch_node_file_delete_command_builder;
    /** The ID of the Compute Node from which you want to delete the file. */
    nodeId(value: string): az_batch_node_file_delete_command_builder;
    /** The ID of the Pool that contains the Compute Node. */
    poolId(value: string): az_batch_node_file_delete_command_builder;
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    accountEndpoint(value: string): az_batch_node_file_delete_command_builder;
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    accountKey(value: string): az_batch_node_file_delete_command_builder;
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    accountName(value: string): az_batch_node_file_delete_command_builder;
    /** Whether to delete children of a directory. If the filePath parameter represents a directory instead of a file, you can set recursive to true to delete the directory and all of the files and subdirectories in it. If recursive is false then the directory must be empty or deletion will fail. */
    recursive(value: string): az_batch_node_file_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_batch_node_file_delete_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_batch_node_file_delete_command_builder;
}
/**
 * Download the content of the a node file.
 *
 * Syntax:
 * ```
 * az batch node file download --destination
 *                             --file-path
 *                             --node-id
 *                             --pool-id
 *                             [--account-endpoint]
 *                             [--account-key]
 *                             [--account-name]
 *                             [--end-range]
 *                             [--if-modified-since]
 *                             [--if-unmodified-since]
 *                             [--start-range]
 *                             [--subscription]
 * ```
 *
 * @param {string} destination The path to the destination file or directory.
 * @param {string} filePath The path to the Compute Node file that you want to get the content of.
 * @param {string} nodeId The ID of the Compute Node that contains the file.
 * @param {string} poolId The ID of the Pool that contains the Compute Node.
 */
declare class az_batch_node_file_download_command_builder extends CommandBuilder<az_batch_node_file_download_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, destination: string, filePath: string, nodeId: string, poolId: string);
    /** The path to the destination file or directory. */
    destination(value: string): az_batch_node_file_download_command_builder;
    /** The path to the Compute Node file that you want to get the content of. */
    filePath(value: string): az_batch_node_file_download_command_builder;
    /** The ID of the Compute Node that contains the file. */
    nodeId(value: string): az_batch_node_file_download_command_builder;
    /** The ID of the Pool that contains the Compute Node. */
    poolId(value: string): az_batch_node_file_download_command_builder;
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    accountEndpoint(value: string): az_batch_node_file_download_command_builder;
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    accountKey(value: string): az_batch_node_file_download_command_builder;
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    accountName(value: string): az_batch_node_file_download_command_builder;
    /** The byte range to be retrieved. If not set the file will be retrieved to the end. */
    endRange(value: string): az_batch_node_file_download_command_builder;
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. */
    ifModifiedSince(value: string): az_batch_node_file_download_command_builder;
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. */
    ifUnmodifiedSince(value: string): az_batch_node_file_download_command_builder;
    /** The byte range to be retrieved. If not set the file will be retrieved from the beginning. */
    startRange(value: string): az_batch_node_file_download_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_batch_node_file_download_command_builder;
}
/**
 * Lists all of the files in Task directories on the specified Compute Node.
 *
 * Syntax:
 * ```
 * az batch node file list --node-id
 *                         --pool-id
 *                         [--account-endpoint]
 *                         [--account-key]
 *                         [--account-name]
 *                         [--filter]
 *                         [--query-examples]
 *                         [--recursive]
 *                         [--subscription]
 * ```
 *
 * @param {string} nodeId The ID of the Compute Node whose files you want to list.
 * @param {string} poolId The ID of the Pool that contains the Compute Node.
 */
declare class az_batch_node_file_list_command_builder extends CommandBuilder<az_batch_node_file_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, nodeId: string, poolId: string);
    /** The ID of the Compute Node whose files you want to list. */
    nodeId(value: string): az_batch_node_file_list_command_builder;
    /** The ID of the Pool that contains the Compute Node. */
    poolId(value: string): az_batch_node_file_list_command_builder;
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    accountEndpoint(value: string): az_batch_node_file_list_command_builder;
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    accountKey(value: string): az_batch_node_file_list_command_builder;
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    accountName(value: string): az_batch_node_file_list_command_builder;
    /** An OData $filter clause. For more information on constructing this filter, see <a href="https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-compute-node-files">https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-compute-node-files</a>. */
    filter(value: string): az_batch_node_file_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_batch_node_file_list_command_builder;
    /** Whether to list children of a directory. */
    recursive(value: string): az_batch_node_file_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_batch_node_file_list_command_builder;
}
/**
 * Gets the properties of the specified Compute Node file.
 *
 * Syntax:
 * ```
 * az batch node file show --file-path
 *                         --node-id
 *                         --pool-id
 *                         [--account-endpoint]
 *                         [--account-key]
 *                         [--account-name]
 *                         [--if-modified-since]
 *                         [--if-unmodified-since]
 *                         [--query-examples]
 *                         [--subscription]
 * ```
 *
 * @param {string} filePath The path to the Compute Node file that you want to get the properties of.
 * @param {string} nodeId The ID of the Compute Node that contains the file.
 * @param {string} poolId The ID of the Pool that contains the Compute Node.
 */
declare class az_batch_node_file_show_command_builder extends CommandBuilder<az_batch_node_file_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, filePath: string, nodeId: string, poolId: string);
    /** The path to the Compute Node file that you want to get the properties of. */
    filePath(value: string): az_batch_node_file_show_command_builder;
    /** The ID of the Compute Node that contains the file. */
    nodeId(value: string): az_batch_node_file_show_command_builder;
    /** The ID of the Pool that contains the Compute Node. */
    poolId(value: string): az_batch_node_file_show_command_builder;
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    accountEndpoint(value: string): az_batch_node_file_show_command_builder;
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    accountKey(value: string): az_batch_node_file_show_command_builder;
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    accountName(value: string): az_batch_node_file_show_command_builder;
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. */
    ifModifiedSince(value: string): az_batch_node_file_show_command_builder;
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. */
    ifUnmodifiedSince(value: string): az_batch_node_file_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_batch_node_file_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_batch_node_file_show_command_builder;
}
/**
 * Gets the Remote Desktop Protocol file for the specified Compute Node.
 *
 * Syntax:
 * ```
 * az batch node remote-desktop download --destination
 *                                       --node-id
 *                                       --pool-id
 *                                       [--account-endpoint]
 *                                       [--account-key]
 *                                       [--account-name]
 *                                       [--subscription]
 * ```
 *
 * @param {string} destination The path to the destination file or directory.
 * @param {string} nodeId The ID of the Compute Node for which you want to get the Remote Desktop Protocol file.
 * @param {string} poolId The ID of the Pool that contains the Compute Node.
 */
declare class az_batch_node_remote_desktop_download_command_builder extends CommandBuilder<az_batch_node_remote_desktop_download_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, destination: string, nodeId: string, poolId: string);
    /** The path to the destination file or directory. */
    destination(value: string): az_batch_node_remote_desktop_download_command_builder;
    /** The ID of the Compute Node for which you want to get the Remote Desktop Protocol file. */
    nodeId(value: string): az_batch_node_remote_desktop_download_command_builder;
    /** The ID of the Pool that contains the Compute Node. */
    poolId(value: string): az_batch_node_remote_desktop_download_command_builder;
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    accountEndpoint(value: string): az_batch_node_remote_desktop_download_command_builder;
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    accountKey(value: string): az_batch_node_remote_desktop_download_command_builder;
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    accountName(value: string): az_batch_node_remote_desktop_download_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_batch_node_remote_desktop_download_command_builder;
}
/**
 * Gets the settings required for remote login to a Compute Node.
 *
 * Syntax:
 * ```
 * az batch node remote-login-settings show --node-id
 *                                          --pool-id
 *                                          [--account-endpoint]
 *                                          [--account-key]
 *                                          [--account-name]
 *                                          [--query-examples]
 *                                          [--subscription]
 * ```
 *
 * @param {string} nodeId The ID of the Compute Node for which to obtain the remote login settings.
 * @param {string} poolId The ID of the Pool that contains the Compute Node.
 */
declare class az_batch_node_remote_login_settings_show_command_builder extends CommandBuilder<az_batch_node_remote_login_settings_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, nodeId: string, poolId: string);
    /** The ID of the Compute Node for which to obtain the remote login settings. */
    nodeId(value: string): az_batch_node_remote_login_settings_show_command_builder;
    /** The ID of the Pool that contains the Compute Node. */
    poolId(value: string): az_batch_node_remote_login_settings_show_command_builder;
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    accountEndpoint(value: string): az_batch_node_remote_login_settings_show_command_builder;
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    accountKey(value: string): az_batch_node_remote_login_settings_show_command_builder;
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    accountName(value: string): az_batch_node_remote_login_settings_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_batch_node_remote_login_settings_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_batch_node_remote_login_settings_show_command_builder;
}
/**
 * Disables Task scheduling on the specified Compute Node.
 *
 * Syntax:
 * ```
 * az batch node scheduling disable --node-id
 *                                  --pool-id
 *                                  [--account-endpoint]
 *                                  [--account-key]
 *                                  [--account-name]
 *                                  [--node-disable-scheduling-option {requeue, taskcompletion, terminate}]
 *                                  [--subscription]
 * ```
 *
 * @param {string} nodeId The ID of the Compute Node on which you want to disable Task scheduling.
 * @param {string} poolId The ID of the Pool that contains the Compute Node.
 */
declare class az_batch_node_scheduling_disable_command_builder extends CommandBuilder<az_batch_node_scheduling_disable_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, nodeId: string, poolId: string);
    /** The ID of the Compute Node on which you want to disable Task scheduling. */
    nodeId(value: string): az_batch_node_scheduling_disable_command_builder;
    /** The ID of the Pool that contains the Compute Node. */
    poolId(value: string): az_batch_node_scheduling_disable_command_builder;
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    accountEndpoint(value: string): az_batch_node_scheduling_disable_command_builder;
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    accountKey(value: string): az_batch_node_scheduling_disable_command_builder;
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    accountName(value: string): az_batch_node_scheduling_disable_command_builder;
    /** What to do with currently running Tasks when disabling Task scheduling on the Compute Node. The default value is requeue. */
    nodeDisableSchedulingOption(value: 'requeue' | 'taskcompletion' | 'terminate'): az_batch_node_scheduling_disable_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_batch_node_scheduling_disable_command_builder;
}
/**
 * Enables Task scheduling on the specified Compute Node.
 *
 * Syntax:
 * ```
 * az batch node scheduling enable --node-id
 *                                 --pool-id
 *                                 [--account-endpoint]
 *                                 [--account-key]
 *                                 [--account-name]
 *                                 [--subscription]
 * ```
 *
 * @param {string} nodeId The ID of the Compute Node on which you want to enable Task scheduling.
 * @param {string} poolId The ID of the Pool that contains the Compute Node.
 */
declare class az_batch_node_scheduling_enable_command_builder extends CommandBuilder<az_batch_node_scheduling_enable_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, nodeId: string, poolId: string);
    /** The ID of the Compute Node on which you want to enable Task scheduling. */
    nodeId(value: string): az_batch_node_scheduling_enable_command_builder;
    /** The ID of the Pool that contains the Compute Node. */
    poolId(value: string): az_batch_node_scheduling_enable_command_builder;
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    accountEndpoint(value: string): az_batch_node_scheduling_enable_command_builder;
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    accountKey(value: string): az_batch_node_scheduling_enable_command_builder;
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    accountName(value: string): az_batch_node_scheduling_enable_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_batch_node_scheduling_enable_command_builder;
}
/**
 * Upload Azure Batch service log files from the specified Compute Node to Azure Blob Storage.
 *
 * Syntax:
 * ```
 * az batch node service-logs upload --node-id
 *                                   --pool-id
 *                                   [--account-endpoint]
 *                                   [--account-key]
 *                                   [--account-name]
 *                                   [--container-url]
 *                                   [--end-time]
 *                                   [--json-file]
 *                                   [--start-time]
 *                                   [--subscription]
 * ```
 *
 * @param {string} nodeId The ID of the Compute Node from which you want to upload the Azure Batch service log files.
 * @param {string} poolId The ID of the Pool that contains the Compute Node.
 */
declare class az_batch_node_service_logs_upload_command_builder extends CommandBuilder<az_batch_node_service_logs_upload_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, nodeId: string, poolId: string);
    /** The ID of the Compute Node from which you want to upload the Azure Batch service log files. */
    nodeId(value: string): az_batch_node_service_logs_upload_command_builder;
    /** The ID of the Pool that contains the Compute Node. */
    poolId(value: string): az_batch_node_service_logs_upload_command_builder;
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    accountEndpoint(value: string): az_batch_node_service_logs_upload_command_builder;
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    accountKey(value: string): az_batch_node_service_logs_upload_command_builder;
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    accountName(value: string): az_batch_node_service_logs_upload_command_builder;
    /** Required. The URL of the container within Azure Blob Storage to which to upload the Batch Service log file(s). The URL must include a Shared Access Signature (SAS) granting write permissions to the container. The SAS duration must allow enough time for the upload to finish. The start time for SAS is optional and recommended to not be specified. */
    containerUrl(value: string): az_batch_node_service_logs_upload_command_builder;
    /** The end of the time range from which to upload Batch Service log file(s). Any log file containing a log message in the time range will be uploaded. This means that the operation might retrieve more logs than have been requested since the entire log file is always uploaded, but the operation should not retrieve fewer logs than have been requested. If omitted, the default is to upload all logs available after the startTime. Expected format is an ISO-8601 timestamp. */
    endTime(value: string): az_batch_node_service_logs_upload_command_builder;
    /** A file containing the upload batch service logs configuration specification in JSON (formatted to match the respective REST API body). If this parameter is specified, all 'Upload Batch Service Logs Configuration Arguments' are ignored. */
    jsonFile(value: string): az_batch_node_service_logs_upload_command_builder;
    /** Required. The start of the time range from which to upload Batch Service log file(s). Any log file containing a log message in the time range will be uploaded. This means that the operation might retrieve more logs than have been requested since the entire log file is always uploaded, but the operation should not retrieve fewer logs than have been requested. Expected format is an ISO-8601 timestamp. */
    startTime(value: string): az_batch_node_service_logs_upload_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_batch_node_service_logs_upload_command_builder;
}
/**
 * Add a user account to a Batch compute node.
 *
 * Syntax:
 * ```
 * az batch node user create --node-id
 *                           --pool-id
 *                           [--account-endpoint]
 *                           [--account-key]
 *                           [--account-name]
 *                           [--expiry-time]
 *                           [--is-admin]
 *                           [--json-file]
 *                           [--name]
 *                           [--password]
 *                           [--ssh-public-key]
 *                           [--subscription]
 * ```
 *
 * @param {string} nodeId The ID of the machine on which you want to create a user Account.
 * @param {string} poolId The ID of the Pool that contains the Compute Node.
 */
declare class az_batch_node_user_create_command_builder extends CommandBuilder<az_batch_node_user_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, nodeId: string, poolId: string);
    /** The ID of the machine on which you want to create a user Account. */
    nodeId(value: string): az_batch_node_user_create_command_builder;
    /** The ID of the Pool that contains the Compute Node. */
    poolId(value: string): az_batch_node_user_create_command_builder;
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    accountEndpoint(value: string): az_batch_node_user_create_command_builder;
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    accountKey(value: string): az_batch_node_user_create_command_builder;
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    accountName(value: string): az_batch_node_user_create_command_builder;
    /** The time at which the Account should expire. If omitted, the default is 1 day from the current time. For Linux Compute Nodes, the expiryTime has a precision up to a day. Expected format is an ISO-8601 timestamp. */
    expiryTime(value: string): az_batch_node_user_create_command_builder;
    /** Whether the Account should be an administrator on the Compute Node. The default value is false. True if flag present. */
    isAdmin(value: string): az_batch_node_user_create_command_builder;
    /** A file containing the user specification in JSON (formatted to match the respective REST API body). If this parameter is specified, all 'User Arguments' are ignored. */
    jsonFile(value: string): az_batch_node_user_create_command_builder;
    /** Required. The user name of the Account. */
    name(value: string): az_batch_node_user_create_command_builder;
    /** The password of the Account. The password is required for Windows Compute Nodes (those created with 'cloudServiceConfiguration', or created with 'virtualMachineConfiguration' using a Windows Image reference). For Linux Compute Nodes, the password can optionally be specified along with the sshPublicKey property. */
    password(value: string): az_batch_node_user_create_command_builder;
    /** The SSH public key that can be used for remote login to the Compute Node. The public key should be compatible with OpenSSH encoding and should be base 64 encoded. This property can be specified only for Linux Compute Nodes. If this is specified for a Windows Compute Node, then the Batch service rejects the request; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). */
    sshPublicKey(value: string): az_batch_node_user_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_batch_node_user_create_command_builder;
}
/**
 * Deletes a user Account from the specified Compute Node.
 *
 * Syntax:
 * ```
 * az batch node user delete --node-id
 *                           --pool-id
 *                           --user-name
 *                           [--account-endpoint]
 *                           [--account-key]
 *                           [--account-name]
 *                           [--subscription]
 *                           [--yes]
 * ```
 *
 * @param {string} nodeId The ID of the machine on which you want to delete a user Account.
 * @param {string} poolId The ID of the Pool that contains the Compute Node.
 * @param {string} userName The name of the user Account to delete.
 */
declare class az_batch_node_user_delete_command_builder extends CommandBuilder<az_batch_node_user_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, nodeId: string, poolId: string, userName: string);
    /** The ID of the machine on which you want to delete a user Account. */
    nodeId(value: string): az_batch_node_user_delete_command_builder;
    /** The ID of the Pool that contains the Compute Node. */
    poolId(value: string): az_batch_node_user_delete_command_builder;
    /** The name of the user Account to delete. */
    userName(value: string): az_batch_node_user_delete_command_builder;
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    accountEndpoint(value: string): az_batch_node_user_delete_command_builder;
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    accountKey(value: string): az_batch_node_user_delete_command_builder;
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    accountName(value: string): az_batch_node_user_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_batch_node_user_delete_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_batch_node_user_delete_command_builder;
}
/**
 * Update the properties of a user account on a Batch compute node. Unspecified properties which can be updated are reset to their defaults.
 *
 * Syntax:
 * ```
 * az batch node user reset --node-id
 *                          --pool-id
 *                          --user-name
 *                          [--account-endpoint]
 *                          [--account-key]
 *                          [--account-name]
 *                          [--expiry-time]
 *                          [--json-file]
 *                          [--password]
 *                          [--ssh-public-key]
 *                          [--subscription]
 * ```
 *
 * @param {string} nodeId The ID of the machine on which you want to update a user Account.
 * @param {string} poolId The ID of the Pool that contains the Compute Node.
 * @param {string} userName The name of the user Account to update.
 */
declare class az_batch_node_user_reset_command_builder extends CommandBuilder<az_batch_node_user_reset_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, nodeId: string, poolId: string, userName: string);
    /** The ID of the machine on which you want to update a user Account. */
    nodeId(value: string): az_batch_node_user_reset_command_builder;
    /** The ID of the Pool that contains the Compute Node. */
    poolId(value: string): az_batch_node_user_reset_command_builder;
    /** The name of the user Account to update. */
    userName(value: string): az_batch_node_user_reset_command_builder;
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    accountEndpoint(value: string): az_batch_node_user_reset_command_builder;
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    accountKey(value: string): az_batch_node_user_reset_command_builder;
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    accountName(value: string): az_batch_node_user_reset_command_builder;
    /** The time at which the Account should expire. If omitted, the default is 1 day from the current time. For Linux Compute Nodes, the expiryTime has a precision up to a day. Expected format is an ISO-8601 timestamp. */
    expiryTime(value: string): az_batch_node_user_reset_command_builder;
    /** A file containing the node update user parameter specification in JSON (formatted to match the respective REST API body). If this parameter is specified, all 'Node Update User Arguments' are ignored. */
    jsonFile(value: string): az_batch_node_user_reset_command_builder;
    /** The password of the Account. The password is required for Windows Compute Nodes (those created with 'cloudServiceConfiguration', or created with 'virtualMachineConfiguration' using a Windows Image reference). For Linux Compute Nodes, the password can optionally be specified along with the sshPublicKey property. If omitted, any existing password is removed. */
    password(value: string): az_batch_node_user_reset_command_builder;
    /** The SSH public key that can be used for remote login to the Compute Node. The public key should be compatible with OpenSSH encoding and should be base 64 encoded. This property can be specified only for Linux Compute Nodes. If this is specified for a Windows Compute Node, then the Batch service rejects the request; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). If omitted, any existing SSH public key is removed. */
    sshPublicKey(value: string): az_batch_node_user_reset_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_batch_node_user_reset_command_builder;
}
/**
 * Removes Compute Nodes from the specified Pool.
 *
 * Syntax:
 * ```
 * az batch node delete --pool-id
 *                      [--account-endpoint]
 *                      [--account-key]
 *                      [--account-name]
 *                      [--if-match]
 *                      [--if-modified-since]
 *                      [--if-none-match]
 *                      [--if-unmodified-since]
 *                      [--json-file]
 *                      [--node-deallocation-option {requeue, retaineddata, taskcompletion, terminate}]
 *                      [--node-list]
 *                      [--resize-timeout]
 *                      [--subscription]
 * ```
 *
 * @param {string} poolId The ID of the Pool from which you want to remove Compute Nodes.
 */
declare class az_batch_node_delete_command_builder extends CommandBuilder<az_batch_node_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, poolId: string);
    /** The ID of the Pool from which you want to remove Compute Nodes. */
    poolId(value: string): az_batch_node_delete_command_builder;
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    accountEndpoint(value: string): az_batch_node_delete_command_builder;
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    accountKey(value: string): az_batch_node_delete_command_builder;
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    accountName(value: string): az_batch_node_delete_command_builder;
    /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client. */
    ifMatch(value: string): az_batch_node_delete_command_builder;
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. */
    ifModifiedSince(value: string): az_batch_node_delete_command_builder;
    /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client. */
    ifNoneMatch(value: string): az_batch_node_delete_command_builder;
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. */
    ifUnmodifiedSince(value: string): az_batch_node_delete_command_builder;
    /** A file containing the node remove parameter specification in JSON (formatted to match the respective REST API body). If this parameter is specified, all 'Node Remove Arguments' are ignored. */
    jsonFile(value: string): az_batch_node_delete_command_builder;
    /** Determines what to do with a Compute Node and its running task(s) after it has been selected for deallocation. The default value is requeue. */
    nodeDeallocationOption(value: 'requeue' | 'retaineddata' | 'taskcompletion' | 'terminate'): az_batch_node_delete_command_builder;
    /** Required. A list containing the IDs of the Compute Nodes to be removed from the specified Pool. Space-separated values. */
    nodeList(value: string): az_batch_node_delete_command_builder;
    /** The timeout for removal of Compute Nodes to the Pool. The default value is 15 minutes. The minimum value is 5 minutes. If you specify a value less than 5 minutes, the Batch service returns an error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). Expected format is an ISO-8601 duration. */
    resizeTimeout(value: string): az_batch_node_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_batch_node_delete_command_builder;
}
/**
 * Lists the Compute Nodes in the specified Pool.
 *
 * Syntax:
 * ```
 * az batch node list --pool-id
 *                    [--account-endpoint]
 *                    [--account-key]
 *                    [--account-name]
 *                    [--filter]
 *                    [--query-examples]
 *                    [--select]
 *                    [--subscription]
 * ```
 *
 * @param {string} poolId The ID of the Pool from which you want to list Compute Nodes.
 */
declare class az_batch_node_list_command_builder extends CommandBuilder<az_batch_node_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, poolId: string);
    /** The ID of the Pool from which you want to list Compute Nodes. */
    poolId(value: string): az_batch_node_list_command_builder;
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    accountEndpoint(value: string): az_batch_node_list_command_builder;
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    accountKey(value: string): az_batch_node_list_command_builder;
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    accountName(value: string): az_batch_node_list_command_builder;
    /** An OData $filter clause. For more information on constructing this filter, see <a href="https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-nodes-in-a-pool">https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-nodes-in-a-pool</a>. */
    filter(value: string): az_batch_node_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_batch_node_list_command_builder;
    /** An OData $select clause. */
    select(value: string): az_batch_node_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_batch_node_list_command_builder;
}
/**
 * Restarts the specified Compute Node.
 *
 * Syntax:
 * ```
 * az batch node reboot --node-id
 *                      --pool-id
 *                      [--account-endpoint]
 *                      [--account-key]
 *                      [--account-name]
 *                      [--node-reboot-option {requeue, retaineddata, taskcompletion, terminate}]
 *                      [--subscription]
 * ```
 *
 * @param {string} nodeId The ID of the Compute Node that you want to restart.
 * @param {string} poolId The ID of the Pool that contains the Compute Node.
 */
declare class az_batch_node_reboot_command_builder extends CommandBuilder<az_batch_node_reboot_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, nodeId: string, poolId: string);
    /** The ID of the Compute Node that you want to restart. */
    nodeId(value: string): az_batch_node_reboot_command_builder;
    /** The ID of the Pool that contains the Compute Node. */
    poolId(value: string): az_batch_node_reboot_command_builder;
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    accountEndpoint(value: string): az_batch_node_reboot_command_builder;
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    accountKey(value: string): az_batch_node_reboot_command_builder;
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    accountName(value: string): az_batch_node_reboot_command_builder;
    /** When to reboot the Compute Node and what to do with currently running Tasks. The default value is requeue. */
    nodeRebootOption(value: 'requeue' | 'retaineddata' | 'taskcompletion' | 'terminate'): az_batch_node_reboot_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_batch_node_reboot_command_builder;
}
/**
 * Reinstalls the operating system on the specified Compute Node.
 *
 * Syntax:
 * ```
 * az batch node reimage --node-id
 *                       --pool-id
 *                       [--account-endpoint]
 *                       [--account-key]
 *                       [--account-name]
 *                       [--node-reimage-option {requeue, retaineddata, taskcompletion, terminate}]
 *                       [--subscription]
 * ```
 *
 * @param {string} nodeId The ID of the Compute Node that you want to restart.
 * @param {string} poolId The ID of the Pool that contains the Compute Node.
 */
declare class az_batch_node_reimage_command_builder extends CommandBuilder<az_batch_node_reimage_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, nodeId: string, poolId: string);
    /** The ID of the Compute Node that you want to restart. */
    nodeId(value: string): az_batch_node_reimage_command_builder;
    /** The ID of the Pool that contains the Compute Node. */
    poolId(value: string): az_batch_node_reimage_command_builder;
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    accountEndpoint(value: string): az_batch_node_reimage_command_builder;
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    accountKey(value: string): az_batch_node_reimage_command_builder;
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    accountName(value: string): az_batch_node_reimage_command_builder;
    /** When to reimage the Compute Node and what to do with currently running Tasks. The default value is requeue. */
    nodeReimageOption(value: 'requeue' | 'retaineddata' | 'taskcompletion' | 'terminate'): az_batch_node_reimage_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_batch_node_reimage_command_builder;
}
/**
 * Gets information about the specified Compute Node.
 *
 * Syntax:
 * ```
 * az batch node show --node-id
 *                    --pool-id
 *                    [--account-endpoint]
 *                    [--account-key]
 *                    [--account-name]
 *                    [--query-examples]
 *                    [--select]
 *                    [--subscription]
 * ```
 *
 * @param {string} nodeId The ID of the Compute Node that you want to get information about.
 * @param {string} poolId The ID of the Pool that contains the Compute Node.
 */
declare class az_batch_node_show_command_builder extends CommandBuilder<az_batch_node_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, nodeId: string, poolId: string);
    /** The ID of the Compute Node that you want to get information about. */
    nodeId(value: string): az_batch_node_show_command_builder;
    /** The ID of the Pool that contains the Compute Node. */
    poolId(value: string): az_batch_node_show_command_builder;
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    accountEndpoint(value: string): az_batch_node_show_command_builder;
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    accountKey(value: string): az_batch_node_show_command_builder;
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    accountName(value: string): az_batch_node_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_batch_node_show_command_builder;
    /** An OData $select clause. */
    select(value: string): az_batch_node_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_batch_node_show_command_builder;
}
/**
 * Get lifetime summary statistics for all of the pools in a Batch account.
 *
 * Syntax:
 * ```
 * az batch pool all-statistics show [--account-endpoint]
 *                                   [--account-key]
 *                                   [--account-name]
 *                                   [--query-examples]
 *                                   [--subscription]
 * ```
 */
declare class az_batch_pool_all_statistics_show_command_builder extends CommandBuilder<az_batch_pool_all_statistics_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    accountEndpoint(value: string): az_batch_pool_all_statistics_show_command_builder;
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    accountKey(value: string): az_batch_pool_all_statistics_show_command_builder;
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    accountName(value: string): az_batch_pool_all_statistics_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_batch_pool_all_statistics_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_batch_pool_all_statistics_show_command_builder;
}
/**
 * Disables automatic scaling for a Pool.
 *
 * Syntax:
 * ```
 * az batch pool autoscale disable --pool-id
 *                                 [--account-endpoint]
 *                                 [--account-key]
 *                                 [--account-name]
 *                                 [--subscription]
 * ```
 *
 * @param {string} poolId The ID of the Pool on which to disable automatic scaling.
 */
declare class az_batch_pool_autoscale_disable_command_builder extends CommandBuilder<az_batch_pool_autoscale_disable_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, poolId: string);
    /** The ID of the Pool on which to disable automatic scaling. */
    poolId(value: string): az_batch_pool_autoscale_disable_command_builder;
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    accountEndpoint(value: string): az_batch_pool_autoscale_disable_command_builder;
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    accountKey(value: string): az_batch_pool_autoscale_disable_command_builder;
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    accountName(value: string): az_batch_pool_autoscale_disable_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_batch_pool_autoscale_disable_command_builder;
}
/**
 * Enables automatic scaling for a Pool.
 *
 * Syntax:
 * ```
 * az batch pool autoscale enable --pool-id
 *                                [--account-endpoint]
 *                                [--account-key]
 *                                [--account-name]
 *                                [--auto-scale-evaluation-interval]
 *                                [--auto-scale-formula]
 *                                [--if-match]
 *                                [--if-modified-since]
 *                                [--if-none-match]
 *                                [--if-unmodified-since]
 *                                [--subscription]
 * ```
 *
 * @param {string} poolId The ID of the Pool on which to enable automatic scaling.
 */
declare class az_batch_pool_autoscale_enable_command_builder extends CommandBuilder<az_batch_pool_autoscale_enable_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, poolId: string);
    /** The ID of the Pool on which to enable automatic scaling. */
    poolId(value: string): az_batch_pool_autoscale_enable_command_builder;
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    accountEndpoint(value: string): az_batch_pool_autoscale_enable_command_builder;
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    accountKey(value: string): az_batch_pool_autoscale_enable_command_builder;
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    accountName(value: string): az_batch_pool_autoscale_enable_command_builder;
    /** The time interval at which to automatically adjust the Pool size according to the autoscale formula. The default value is 15 minutes. The minimum and maximum value are 5 minutes and 168 hours respectively. If you specify a value less than 5 minutes or greater than 168 hours, the Batch service rejects the request with an invalid property value error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). If you specify a new interval, then the existing autoscale evaluation schedule will be stopped and a new autoscale evaluation schedule will be started, with its starting time being the time when this request was issued. */
    autoScaleEvaluationInterval(value: string): az_batch_pool_autoscale_enable_command_builder;
    /** The formula for the desired number of Compute Nodes in the Pool. The formula is checked for validity before it is applied to the Pool. If the formula is not valid, the Batch service rejects the request with detailed error information. For more information about specifying this formula, see Automatically scale Compute Nodes in an Azure Batch Pool (<a href="https://azure.microsoft.com/en-us/documentation/articles/batch-automatic-scaling">https://azure.microsoft.com/en-us/documentation/articles/batch-automatic-scaling</a>). */
    autoScaleFormula(value: string): az_batch_pool_autoscale_enable_command_builder;
    /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client. */
    ifMatch(value: string): az_batch_pool_autoscale_enable_command_builder;
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. */
    ifModifiedSince(value: string): az_batch_pool_autoscale_enable_command_builder;
    /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client. */
    ifNoneMatch(value: string): az_batch_pool_autoscale_enable_command_builder;
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. */
    ifUnmodifiedSince(value: string): az_batch_pool_autoscale_enable_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_batch_pool_autoscale_enable_command_builder;
}
/**
 * Gets the result of evaluating an automatic scaling formula on the Pool.
 *
 * Syntax:
 * ```
 * az batch pool autoscale evaluate --auto-scale-formula
 *                                  --pool-id
 *                                  [--account-endpoint]
 *                                  [--account-key]
 *                                  [--account-name]
 *                                  [--subscription]
 * ```
 *
 * @param {string} autoScaleFormula The formula for the desired number of Compute Nodes in the Pool. The formula is validated and its results calculated, but it is not applied to the Pool. To apply the formula to the Pool, 'Enable automatic scaling on a Pool'. For more information about specifying this formula, see Automatically scale Compute Nodes in an Azure Batch Pool (<a href="https://azure.microsoft.com/en-us/documentation/articles/batch-automatic-scaling">https://azure.microsoft.com/en-us/documentation/articles/batch-automatic-scaling</a>).
 * @param {string} poolId The ID of the Pool on which to evaluate the automatic scaling formula.
 */
declare class az_batch_pool_autoscale_evaluate_command_builder extends CommandBuilder<az_batch_pool_autoscale_evaluate_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, autoScaleFormula: string, poolId: string);
    /** The formula for the desired number of Compute Nodes in the Pool. The formula is validated and its results calculated, but it is not applied to the Pool. To apply the formula to the Pool, 'Enable automatic scaling on a Pool'. For more information about specifying this formula, see Automatically scale Compute Nodes in an Azure Batch Pool (<a href="https://azure.microsoft.com/en-us/documentation/articles/batch-automatic-scaling">https://azure.microsoft.com/en-us/documentation/articles/batch-automatic-scaling</a>). */
    autoScaleFormula(value: string): az_batch_pool_autoscale_evaluate_command_builder;
    /** The ID of the Pool on which to evaluate the automatic scaling formula. */
    poolId(value: string): az_batch_pool_autoscale_evaluate_command_builder;
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    accountEndpoint(value: string): az_batch_pool_autoscale_evaluate_command_builder;
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    accountKey(value: string): az_batch_pool_autoscale_evaluate_command_builder;
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    accountName(value: string): az_batch_pool_autoscale_evaluate_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_batch_pool_autoscale_evaluate_command_builder;
}
/**
 * Gets the number of Compute Nodes in each state, grouped by Pool.
 *
 * Syntax:
 * ```
 * az batch pool node-counts list [--account-endpoint]
 *                                [--account-key]
 *                                [--account-name]
 *                                [--filter]
 *                                [--query-examples]
 *                                [--subscription]
 * ```
 */
declare class az_batch_pool_node_counts_list_command_builder extends CommandBuilder<az_batch_pool_node_counts_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    accountEndpoint(value: string): az_batch_pool_node_counts_list_command_builder;
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    accountKey(value: string): az_batch_pool_node_counts_list_command_builder;
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    accountName(value: string): az_batch_pool_node_counts_list_command_builder;
    /** An OData $filter clause. For more information on constructing this filter, see <a href="https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch">https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch</a>. */
    filter(value: string): az_batch_pool_node_counts_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_batch_pool_node_counts_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_batch_pool_node_counts_list_command_builder;
}
/**
 * Lists all Virtual Machine Images supported by the Azure Batch service.
 *
 * Syntax:
 * ```
 * az batch pool supported-images list [--account-endpoint]
 *                                     [--account-key]
 *                                     [--account-name]
 *                                     [--filter]
 *                                     [--query-examples]
 *                                     [--subscription]
 * ```
 */
declare class az_batch_pool_supported_images_list_command_builder extends CommandBuilder<az_batch_pool_supported_images_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    accountEndpoint(value: string): az_batch_pool_supported_images_list_command_builder;
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    accountKey(value: string): az_batch_pool_supported_images_list_command_builder;
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    accountName(value: string): az_batch_pool_supported_images_list_command_builder;
    /** An OData $filter clause. For more information on constructing this filter, see <a href="https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-support-images">https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-support-images</a>. */
    filter(value: string): az_batch_pool_supported_images_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_batch_pool_supported_images_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_batch_pool_supported_images_list_command_builder;
}
/**
 * Lists the usage metrics, aggregated by Pool across individual time intervals, for the specified Account.
 *
 * Syntax:
 * ```
 * az batch pool usage-metrics list [--account-endpoint]
 *                                  [--account-key]
 *                                  [--account-name]
 *                                  [--end-time]
 *                                  [--filter]
 *                                  [--query-examples]
 *                                  [--start-time]
 *                                  [--subscription]
 * ```
 */
declare class az_batch_pool_usage_metrics_list_command_builder extends CommandBuilder<az_batch_pool_usage_metrics_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    accountEndpoint(value: string): az_batch_pool_usage_metrics_list_command_builder;
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    accountKey(value: string): az_batch_pool_usage_metrics_list_command_builder;
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    accountName(value: string): az_batch_pool_usage_metrics_list_command_builder;
    /** The latest time from which to include metrics. This must be at least two hours before the current time. If not specified this defaults to the end time of the last aggregation interval currently available. */
    endTime(value: string): az_batch_pool_usage_metrics_list_command_builder;
    /** An OData $filter clause. For more information on constructing this filter, see <a href="https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-account-usage-metrics">https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-account-usage-metrics</a>. */
    filter(value: string): az_batch_pool_usage_metrics_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_batch_pool_usage_metrics_list_command_builder;
    /** The earliest time from which to include metrics. This must be at least two and a half hours before the current time. If not specified this defaults to the start time of the last aggregation interval currently available. */
    startTime(value: string): az_batch_pool_usage_metrics_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_batch_pool_usage_metrics_list_command_builder;
}
/**
 * Create a Batch pool in an account. When creating a pool, choose arguments from either Cloud Services Configuration or Virtual Machine Configuration.
 *
 * Syntax:
 * ```
 * az batch pool create [--account-endpoint]
 *                      [--account-key]
 *                      [--account-name]
 *                      [--application-licenses]
 *                      [--application-package-references]
 *                      [--auto-scale-formula]
 *                      [--certificate-references]
 *                      [--disk-encryption-targets]
 *                      [--enable-inter-node-communication]
 *                      [--id]
 *                      [--image]
 *                      [--json-file]
 *                      [--max-tasks-per-node]
 *                      [--metadata]
 *                      [--node-agent-sku-id]
 *                      [--os-family {2, 3, 4, 5, 6}]
 *                      [--os-version]
 *                      [--resize-timeout]
 *                      [--start-task-command-line]
 *                      [--start-task-resource-files]
 *                      [--start-task-wait-for-success]
 *                      [--subscription]
 *                      [--target-dedicated-nodes]
 *                      [--target-low-priority-nodes]
 *                      [--targets]
 *                      [--vm-size]
 * ```
 */
declare class az_batch_pool_create_command_builder extends CommandBuilder<az_batch_pool_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    accountEndpoint(value: string): az_batch_pool_create_command_builder;
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    accountKey(value: string): az_batch_pool_create_command_builder;
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    accountName(value: string): az_batch_pool_create_command_builder;
    /** The list of application licenses the Batch service will make available on each Compute Node in the Pool. The list of application licenses must be a subset of available Batch service application licenses. If a license is requested which is not supported, Pool creation will fail. Space-separated values. */
    applicationLicenses(value: string): az_batch_pool_create_command_builder;
    /** The list of Packages to be installed on each Compute Node in the Pool. Changes to Package references affect all new Nodes joining the Pool, but do not affect Compute Nodes that are already in the Pool until they are rebooted or reimaged. There is a maximum of 10 Package references on any given Pool. Space-separated application IDs with optional version in 'id[#version]' format. */
    applicationPackageReferences(value: string): az_batch_pool_create_command_builder;
    /** A formula for the desired number of compute nodes in the pool. The formula is checked for validity before the pool is created. If the formula is not valid, the Batch service rejects the request with detailed error information. For more information about specifying this formula, see <a href="https://azure.microsoft.com/documentation/articles/batch-automatic-scaling/">https://azure.microsoft.com/documentation/articles/batch-automatic-scaling/</a>. */
    autoScaleFormula(value: string): az_batch_pool_create_command_builder;
    /** The list of Certificates to be installed on each Compute Node in the Pool. For Windows Nodes, the Batch service installs the Certificates to the specified Certificate store and location. For Linux Compute Nodes, the Certificates are stored in a directory inside the Task working directory and an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the Task to query for this location. For Certificates with visibility of 'remoteUser', a 'certs' directory is created in the user's home directory (e.g., /home/{user-name}/certs) and Certificates are placed in that directory. Space-separated certificate thumbprints. */
    certificateReferences(value: string): az_batch_pool_create_command_builder;
    /** A space separated list of DiskEncryptionTargets. current possible values include OsDisk and TemporaryDisk. */
    diskEncryptionTargets(value: string): az_batch_pool_create_command_builder;
    /** Whether the Pool permits direct communication between Compute Nodes. Enabling inter-node communication limits the maximum size of the Pool due to deployment restrictions on the Compute Nodes of the Pool. This may result in the Pool not reaching its desired size. The default value is false. True if flag present. */
    enableInterNodeCommunication(value: string): az_batch_pool_create_command_builder;
    /** Required. A string that uniquely identifies the Pool within the Account. The ID can contain any combination of alphanumeric characters including hyphens and underscores, and cannot contain more than 64 characters. The ID is case-preserving and case-insensitive (that is, you may not have two Pool IDs within an Account that differ only by case). */
    id(value: string): az_batch_pool_create_command_builder;
    /** OS image reference. This can be either 'publisher:offer:sku[:version]' format, or a fully qualified ARM image id of the form '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Compute/images/{imageName}'. If 'publisher:offer:sku[:version]' format, version is optional and if omitted latest will be used. Valid values can be retrieved via 'az batch pool supported-images list'. For example: 'MicrosoftWindowsServer:WindowsServer:2012-R2-Datacenter:latest'. */
    image(value: string): az_batch_pool_create_command_builder;
    /** A file containing the pool specification in JSON (formatted to match the respective REST API body). If this parameter is specified, all 'Pool Arguments' are ignored. */
    jsonFile(value: string): az_batch_pool_create_command_builder;
    /** The maximum number of Tasks that can run concurrently on a single Compute Node in the Pool. The default value is 1. The maximum value is the smaller of 4 times the number of cores of the vmSize of the Pool or 256. */
    maxTasksPerNode(value: string): az_batch_pool_create_command_builder;
    /** A list of name-value pairs associated with the Pool as metadata. The Batch service does not assign any meaning to metadata; it is solely for the use of user code. Space-separated values in 'key=value' format. */
    metadata(value: string): az_batch_pool_create_command_builder;
    /** Required. The SKU of the Batch Compute Node agent to be provisioned on Compute Nodes in the Pool. The Batch Compute Node agent is a program that runs on each Compute Node in the Pool, and provides the command-and-control interface between the Compute Node and the Batch service. There are different implementations of the Compute Node agent, known as SKUs, for different operating systems. You must specify a Compute Node agent SKU which matches the selected Image reference. To get the list of supported Compute Node agent SKUs along with their list of verified Image references, see the 'List supported Compute Node agent SKUs' operation. */
    nodeAgentSkuId(value: string): az_batch_pool_create_command_builder;
    /** Required. The Azure Guest OS family to be installed on the virtual machines in the Pool. Possible values are: 2 - OS Family 2, equivalent to Windows Server 2008 R2 SP1. 3 - OS Family 3, equivalent to Windows Server 2012. 4 - OS Family 4, equivalent to Windows Server 2012 R2. 5 - OS Family 5, equivalent to Windows Server 2016. 6 - OS Family 6, equivalent to Windows Server 2019. For more information, see Azure Guest OS Releases (<a href="https://azure.microsoft.com/documentation/articles/cloud-services-guestos-update-matrix/#releases">https://azure.microsoft.com/documentation/articles/cloud-services-guestos-update-matrix/#releases</a>). */
    osFamily(value: '2' | '3' | '4' | '5' | '6'): az_batch_pool_create_command_builder;
    /** The Azure Guest OS version to be installed on the virtual machines in the Pool. The default value is \* which specifies the latest operating system version for the specified OS family. */
    osVersion(value: string): az_batch_pool_create_command_builder;
    /** The timeout for allocation of Compute Nodes to the Pool. This timeout applies only to manual scaling; it has no effect when enableAutoScale is set to true. The default value is 15 minutes. The minimum value is 5 minutes. If you specify a value less than 5 minutes, the Batch service returns an error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). Expected format is an ISO-8601 duration. */
    resizeTimeout(value: string): az_batch_pool_create_command_builder;
    /** Required. The command line of the StartTask. The command line does not run under a shell, and therefore cannot take advantage of shell features such as environment variable expansion. If you want to take advantage of such features, you should invoke the shell in the command line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux. If the command line refers to file paths, it should use a relative path (relative to the Task working directory), or use the Batch provided environment variable (<a href="https://docs.microsoft.com/en-us/azure/batch/batch-compute-node-environment-variables">https://docs.microsoft.com/en-us/azure/batch/batch-compute-node-environment-variables</a>). */
    startTaskCommandLine(value: string): az_batch_pool_create_command_builder;
    /** A list of files that the Batch service will download to the Compute Node before running the command line.  There is a maximum size for the list of resource files. When the max size is exceeded, the request will fail and the response error code will be RequestEntityTooLarge. If this occurs, the collection of ResourceFiles must be reduced in size. This can be achieved using .zip files, Application Packages, or Docker Containers. Files listed under this element are located in the Task's working directory. Space-separated resource references in filename=httpurl format. */
    startTaskResourceFiles(value: string): az_batch_pool_create_command_builder;
    /** Whether the Batch service should wait for the StartTask to complete successfully (that is, to exit with exit code 0) before scheduling any Tasks on the Compute Node. If true and the StartTask fails on a Node, the Batch service retries the StartTask up to its maximum retry count (maxTaskRetryCount). If the Task has still not completed successfully after all retries, then the Batch service marks the Node unusable, and will not schedule Tasks to it. This condition can be detected via the Compute Node state and failure info details. If false, the Batch service will not wait for the StartTask to complete. In this case, other Tasks can start executing on the Compute Node while the StartTask is still running; and even if the StartTask fails, new Tasks will continue to be scheduled on the Compute Node. The default is true. True if flag present. */
    startTaskWaitForSuccess(value: string): az_batch_pool_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_batch_pool_create_command_builder;
    /** The desired number of dedicated Compute Nodes in the Pool. This property must not be specified if enableAutoScale is set to true. If enableAutoScale is set to false, then you must set either targetDedicatedNodes, targetLowPriorityNodes, or both. */
    targetDedicatedNodes(value: string): az_batch_pool_create_command_builder;
    /** The desired number of low-priority Compute Nodes in the Pool. This property must not be specified if enableAutoScale is set to true. If enableAutoScale is set to false, then you must set either targetDedicatedNodes, targetLowPriorityNodes, or both. */
    targetLowPriorityNodes(value: string): az_batch_pool_create_command_builder;
    /** The list of disk targets Batch Service will encrypt on the compute node. If omitted, no disks on the compute nodes in the pool will be encrypted. On Linux pool, only "TemporaryDisk" is supported; on Windows pool, "OsDisk" and "TemporaryDisk" must be specified. Space seperated target disks to be encrypted. Values can either be OsDisk or TemporaryDisk. */
    targets(value: string): az_batch_pool_create_command_builder;
    /** Required. The size of virtual machines in the Pool. All virtual machines in a Pool are the same size. For information about available sizes of virtual machines for Cloud Services Pools (pools created with cloudServiceConfiguration), see Sizes for Cloud Services (<a href="https://azure.microsoft.com/documentation/articles/cloud-services-sizes-specs/">https://azure.microsoft.com/documentation/articles/cloud-services-sizes-specs/</a>). Batch supports all Cloud Services VM sizes except ExtraSmall, A1V2 and A2V2. For information about available VM sizes for Pools using Images from the Virtual Machines Marketplace (pools created with virtualMachineConfiguration) see Sizes for Virtual Machines (Linux) (<a href="https://azure.microsoft.com/documentation/articles/virtual-machines-linux-sizes/">https://azure.microsoft.com/documentation/articles/virtual-machines-linux-sizes/</a>) or Sizes for Virtual Machines (Windows) (<a href="https://azure.microsoft.com/documentation/articles/virtual-machines-windows-sizes/">https://azure.microsoft.com/documentation/articles/virtual-machines-windows-sizes/</a>). Batch supports all Azure VM sizes except STANDARD_A0 and those with premium storage (STANDARD_GS, STANDARD_DS, and STANDARD_DSV2 series). */
    vmSize(value: string): az_batch_pool_create_command_builder;
}
/**
 * Deletes a Pool from the specified Account.
 *
 * Syntax:
 * ```
 * az batch pool delete --pool-id
 *                      [--account-endpoint]
 *                      [--account-key]
 *                      [--account-name]
 *                      [--if-match]
 *                      [--if-modified-since]
 *                      [--if-none-match]
 *                      [--if-unmodified-since]
 *                      [--subscription]
 *                      [--yes]
 * ```
 *
 * @param {string} poolId The ID of the Pool to delete.
 */
declare class az_batch_pool_delete_command_builder extends CommandBuilder<az_batch_pool_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, poolId: string);
    /** The ID of the Pool to delete. */
    poolId(value: string): az_batch_pool_delete_command_builder;
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    accountEndpoint(value: string): az_batch_pool_delete_command_builder;
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    accountKey(value: string): az_batch_pool_delete_command_builder;
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    accountName(value: string): az_batch_pool_delete_command_builder;
    /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client. */
    ifMatch(value: string): az_batch_pool_delete_command_builder;
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. */
    ifModifiedSince(value: string): az_batch_pool_delete_command_builder;
    /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client. */
    ifNoneMatch(value: string): az_batch_pool_delete_command_builder;
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. */
    ifUnmodifiedSince(value: string): az_batch_pool_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_batch_pool_delete_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_batch_pool_delete_command_builder;
}
/**
 * Lists all of the Pools in the specified Account.
 *
 * Syntax:
 * ```
 * az batch pool list [--account-endpoint]
 *                    [--account-key]
 *                    [--account-name]
 *                    [--expand]
 *                    [--filter]
 *                    [--query-examples]
 *                    [--select]
 *                    [--subscription]
 * ```
 */
declare class az_batch_pool_list_command_builder extends CommandBuilder<az_batch_pool_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    accountEndpoint(value: string): az_batch_pool_list_command_builder;
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    accountKey(value: string): az_batch_pool_list_command_builder;
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    accountName(value: string): az_batch_pool_list_command_builder;
    /** An OData $expand clause. */
    expand(value: string): az_batch_pool_list_command_builder;
    /** An OData $filter clause. For more information on constructing this filter, see <a href="https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-pools">https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-pools</a>. */
    filter(value: string): az_batch_pool_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_batch_pool_list_command_builder;
    /** An OData $select clause. */
    select(value: string): az_batch_pool_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_batch_pool_list_command_builder;
}
/**
 * Update the properties of a Batch pool. Unspecified properties which can be updated are reset to their defaults.
 *
 * Syntax:
 * ```
 * az batch pool reset --pool-id
 *                     [--account-endpoint]
 *                     [--account-key]
 *                     [--account-name]
 *                     [--application-package-references]
 *                     [--certificate-references]
 *                     [--json-file]
 *                     [--metadata]
 *                     [--start-task-command-line]
 *                     [--start-task-environment-settings]
 *                     [--start-task-max-task-retry-count]
 *                     [--start-task-wait-for-success]
 *                     [--subscription]
 * ```
 *
 * @param {string} poolId The ID of the pool to update.
 */
declare class az_batch_pool_reset_command_builder extends CommandBuilder<az_batch_pool_reset_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, poolId: string);
    /** The ID of the pool to update. */
    poolId(value: string): az_batch_pool_reset_command_builder;
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    accountEndpoint(value: string): az_batch_pool_reset_command_builder;
    /** The Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    accountKey(value: string): az_batch_pool_reset_command_builder;
    /** The Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    accountName(value: string): az_batch_pool_reset_command_builder;
    /** Required. The list of Application Packages to be installed on each Compute Node in the Pool. The list replaces any existing Application Package references on the Pool. Changes to Application Package references affect all new Compute Nodes joining the Pool, but do not affect Compute Nodes that are already in the Pool until they are rebooted or reimaged. There is a maximum of 10 Application Package references on any given Pool. If omitted, or if you specify an empty collection, any existing Application Packages references are removed from the Pool. A maximum of 10 references may be specified on a given Pool. */
    applicationPackageReferences(value: string): az_batch_pool_reset_command_builder;
    /** Required. A list of Certificates to be installed on each Compute Node in the Pool. This list replaces any existing Certificate references configured on the Pool. If you specify an empty collection, any existing Certificate references are removed from the Pool. For Windows Nodes, the Batch service installs the Certificates to the specified Certificate store and location. For Linux Compute Nodes, the Certificates are stored in a directory inside the Task working directory and an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the Task to query for this location. For Certificates with visibility of 'remoteUser', a 'certs' directory is created in the user's home directory (e.g., /home/{user-name}/certs) and Certificates are placed in that directory. */
    certificateReferences(value: string): az_batch_pool_reset_command_builder;
    /** The file containing pool update properties parameter specification in JSON(formatted to match REST API request body). If this parameter is specified, all 'Pool Update Properties Parameter Arguments' are ignored. */
    jsonFile(value: string): az_batch_pool_reset_command_builder;
    /** Required. A list of name-value pairs associated with the Pool as metadata. This list replaces any existing metadata configured on the Pool. If omitted, or if you specify an empty collection, any existing metadata is removed from the Pool. */
    metadata(value: string): az_batch_pool_reset_command_builder;
    /** The command line of the start task. The command line does not run under a shell, and therefore cannot take advantage of shell features such as environment variable expansion. If you want to take advantage of such features, you should invoke the shell in the command line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux. */
    startTaskCommandLine(value: string): az_batch_pool_reset_command_builder;
    /** A list of environment variable settings for the start task. Space-separated values in 'key=value' format. */
    startTaskEnvironmentSettings(value: string): az_batch_pool_reset_command_builder;
    /** The maximum number of times the task may be retried. */
    startTaskMaxTaskRetryCount(value: string): az_batch_pool_reset_command_builder;
    /** Whether the Batch service should wait for the start task to complete successfully (that is, to exit with exit code 0) before scheduling any tasks on the compute node. True if flag present, otherwise defaults to False. */
    startTaskWaitForSuccess(value: string): az_batch_pool_reset_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_batch_pool_reset_command_builder;
}
/**
 * Resize or stop resizing a Batch pool.
 *
 * Syntax:
 * ```
 * az batch pool resize --pool-id
 *                      [--abort]
 *                      [--account-endpoint]
 *                      [--account-key]
 *                      [--account-name]
 *                      [--if-match]
 *                      [--if-modified-since]
 *                      [--if-none-match]
 *                      [--if-unmodified-since]
 *                      [--node-deallocation-option {requeue, retaineddata, taskcompletion, terminate}]
 *                      [--resize-timeout]
 *                      [--subscription]
 *                      [--target-dedicated-nodes]
 *                      [--target-low-priority-nodes]
 * ```
 *
 * @param {string} poolId The ID of the pool.
 */
declare class az_batch_pool_resize_command_builder extends CommandBuilder<az_batch_pool_resize_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, poolId: string);
    /** The ID of the pool. */
    poolId(value: string): az_batch_pool_resize_command_builder;
    /** Stop the pool resize operation. */
    abort(value: string): az_batch_pool_resize_command_builder;
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    accountEndpoint(value: string): az_batch_pool_resize_command_builder;
    /** The Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    accountKey(value: string): az_batch_pool_resize_command_builder;
    /** The Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    accountName(value: string): az_batch_pool_resize_command_builder;
    /** The operation will be performed only if the resource's current ETag exactly matches the specified value. */
    ifMatch(value: string): az_batch_pool_resize_command_builder;
    /** The operation will be performed only if the resource has been modified since the specified timestamp. */
    ifModifiedSince(value: string): az_batch_pool_resize_command_builder;
    /** The operation will not be performed only if the resource's current ETag exactly matches the specified value. */
    ifNoneMatch(value: string): az_batch_pool_resize_command_builder;
    /** The operation will not be performed only if the resource has been modified since the specified timestamp. */
    ifUnmodifiedSince(value: string): az_batch_pool_resize_command_builder;
    /** When nodes may be removed from the pool, if the pool size is decreasing. */
    nodeDeallocationOption(value: 'requeue' | 'retaineddata' | 'taskcompletion' | 'terminate'): az_batch_pool_resize_command_builder;
    /** The timeout for allocation of Nodes to the Pool or removal of Compute Nodes from the Pool. The default value is 15 minutes. The minimum value is 5 minutes. If you specify a value less than 5 minutes, the Batch service returns an error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). */
    resizeTimeout(value: string): az_batch_pool_resize_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_batch_pool_resize_command_builder;
    /** The desired number of dedicated Compute Nodes in the Pool. */
    targetDedicatedNodes(value: string): az_batch_pool_resize_command_builder;
    /** The desired number of low-priority Compute Nodes in the Pool. */
    targetLowPriorityNodes(value: string): az_batch_pool_resize_command_builder;
}
/**
 * Update the properties of a Batch pool. Updating a property in a subgroup will reset the unspecified properties of that group.
 *
 * Syntax:
 * ```
 * az batch pool set --pool-id
 *                   [--account-endpoint]
 *                   [--account-key]
 *                   [--account-name]
 *                   [--application-package-references]
 *                   [--certificate-references]
 *                   [--if-match]
 *                   [--if-modified-since]
 *                   [--if-none-match]
 *                   [--if-unmodified-since]
 *                   [--json-file]
 *                   [--metadata]
 *                   [--start-task-command-line]
 *                   [--start-task-environment-settings]
 *                   [--start-task-max-task-retry-count]
 *                   [--start-task-resource-files]
 *                   [--start-task-wait-for-success]
 *                   [--subscription]
 * ```
 *
 * @param {string} poolId The ID of the Pool to update.
 */
declare class az_batch_pool_set_command_builder extends CommandBuilder<az_batch_pool_set_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, poolId: string);
    /** The ID of the Pool to update. */
    poolId(value: string): az_batch_pool_set_command_builder;
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    accountEndpoint(value: string): az_batch_pool_set_command_builder;
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    accountKey(value: string): az_batch_pool_set_command_builder;
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    accountName(value: string): az_batch_pool_set_command_builder;
    /** A list of Packages to be installed on each Compute Node in the Pool. Changes to Package references affect all new Nodes joining the Pool, but do not affect Compute Nodes that are already in the Pool until they are rebooted or reimaged. If this element is present, it replaces any existing Package references. If you specify an empty collection, then all Package references are removed from the Pool. If omitted, any existing Package references are left unchanged. Space-separated application IDs with optional version in 'id[#version]' format. */
    applicationPackageReferences(value: string): az_batch_pool_set_command_builder;
    /** A list of Certificates to be installed on each Compute Node in the Pool. If this element is present, it replaces any existing Certificate references configured on the Pool. If omitted, any existing Certificate references are left unchanged. For Windows Nodes, the Batch service installs the Certificates to the specified Certificate store and location. For Linux Compute Nodes, the Certificates are stored in a directory inside the Task working directory and an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the Task to query for this location. For Certificates with visibility of 'remoteUser', a 'certs' directory is created in the user's home directory (e.g., /home/{user-name}/certs) and Certificates are placed in that directory. Space-separated certificate thumbprints. */
    certificateReferences(value: string): az_batch_pool_set_command_builder;
    /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client. */
    ifMatch(value: string): az_batch_pool_set_command_builder;
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. */
    ifModifiedSince(value: string): az_batch_pool_set_command_builder;
    /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client. */
    ifNoneMatch(value: string): az_batch_pool_set_command_builder;
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. */
    ifUnmodifiedSince(value: string): az_batch_pool_set_command_builder;
    /** A file containing the pool patch parameter specification in JSON (formatted to match the respective REST API body). If this parameter is specified, all 'Pool Arguments' are ignored. */
    jsonFile(value: string): az_batch_pool_set_command_builder;
    /** A list of name-value pairs associated with the Pool as metadata. If this element is present, it replaces any existing metadata configured on the Pool. If you specify an empty collection, any metadata is removed from the Pool. If omitted, any existing metadata is left unchanged. Space-separated values in 'key=value' format. */
    metadata(value: string): az_batch_pool_set_command_builder;
    /** Required. The command line of the StartTask. The command line does not run under a shell, and therefore cannot take advantage of shell features such as environment variable expansion. If you want to take advantage of such features, you should invoke the shell in the command line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux. If the command line refers to file paths, it should use a relative path (relative to the Task working directory), or use the Batch provided environment variable (<a href="https://docs.microsoft.com/en-us/azure/batch/batch-compute-node-environment-variables">https://docs.microsoft.com/en-us/azure/batch/batch-compute-node-environment-variables</a>). */
    startTaskCommandLine(value: string): az_batch_pool_set_command_builder;
    /** A list of environment variable settings for the StartTask. Space-separated values in 'key=value' format. */
    startTaskEnvironmentSettings(value: string): az_batch_pool_set_command_builder;
    /** The maximum number of times the Task may be retried. The Batch service retries a Task if its exit code is nonzero. Note that this value specifically controls the number of retries. The Batch service will try the Task once, and may then retry up to this limit. For example, if the maximum retry count is 3, Batch tries the Task up to 4 times (one initial try and 3 retries). If the maximum retry count is 0, the Batch service does not retry the Task. If the maximum retry count is -1, the Batch service retries the Task without limit. */
    startTaskMaxTaskRetryCount(value: string): az_batch_pool_set_command_builder;
    /** A list of files that the Batch service will download to the Compute Node before running the command line.  There is a maximum size for the list of resource files. When the max size is exceeded, the request will fail and the response error code will be RequestEntityTooLarge. If this occurs, the collection of ResourceFiles must be reduced in size. This can be achieved using .zip files, Application Packages, or Docker Containers. Files listed under this element are located in the Task's working directory. Space-separated resource references in filename=httpurl format. */
    startTaskResourceFiles(value: string): az_batch_pool_set_command_builder;
    /** Whether the Batch service should wait for the StartTask to complete successfully (that is, to exit with exit code 0) before scheduling any Tasks on the Compute Node. If true and the StartTask fails on a Node, the Batch service retries the StartTask up to its maximum retry count (maxTaskRetryCount). If the Task has still not completed successfully after all retries, then the Batch service marks the Node unusable, and will not schedule Tasks to it. This condition can be detected via the Compute Node state and failure info details. If false, the Batch service will not wait for the StartTask to complete. In this case, other Tasks can start executing on the Compute Node while the StartTask is still running; and even if the StartTask fails, new Tasks will continue to be scheduled on the Compute Node. The default is true. Specify either 'true' or 'false' to update the property. */
    startTaskWaitForSuccess(value: string): az_batch_pool_set_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_batch_pool_set_command_builder;
}
/**
 * Gets information about the specified Pool.
 *
 * Syntax:
 * ```
 * az batch pool show --pool-id
 *                    [--account-endpoint]
 *                    [--account-key]
 *                    [--account-name]
 *                    [--expand]
 *                    [--if-match]
 *                    [--if-modified-since]
 *                    [--if-none-match]
 *                    [--if-unmodified-since]
 *                    [--query-examples]
 *                    [--select]
 *                    [--subscription]
 * ```
 *
 * @param {string} poolId The ID of the Pool to get.
 */
declare class az_batch_pool_show_command_builder extends CommandBuilder<az_batch_pool_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, poolId: string);
    /** The ID of the Pool to get. */
    poolId(value: string): az_batch_pool_show_command_builder;
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    accountEndpoint(value: string): az_batch_pool_show_command_builder;
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    accountKey(value: string): az_batch_pool_show_command_builder;
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    accountName(value: string): az_batch_pool_show_command_builder;
    /** An OData $expand clause. */
    expand(value: string): az_batch_pool_show_command_builder;
    /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client. */
    ifMatch(value: string): az_batch_pool_show_command_builder;
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. */
    ifModifiedSince(value: string): az_batch_pool_show_command_builder;
    /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client. */
    ifNoneMatch(value: string): az_batch_pool_show_command_builder;
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. */
    ifUnmodifiedSince(value: string): az_batch_pool_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_batch_pool_show_command_builder;
    /** An OData $select clause. */
    select(value: string): az_batch_pool_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_batch_pool_show_command_builder;
}
/**
 * Deletes the specified Task file from the Compute Node where the Task ran.
 *
 * Syntax:
 * ```
 * az batch task file delete --file-path
 *                           --job-id
 *                           --task-id
 *                           [--account-endpoint]
 *                           [--account-key]
 *                           [--account-name]
 *                           [--recursive]
 *                           [--subscription]
 *                           [--yes]
 * ```
 *
 * @param {string} filePath The path to the Task file or directory that you want to delete.
 * @param {string} jobId The ID of the Job that contains the Task.
 * @param {string} taskId The ID of the Task whose file you want to delete.
 */
declare class az_batch_task_file_delete_command_builder extends CommandBuilder<az_batch_task_file_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, filePath: string, jobId: string, taskId: string);
    /** The path to the Task file or directory that you want to delete. */
    filePath(value: string): az_batch_task_file_delete_command_builder;
    /** The ID of the Job that contains the Task. */
    jobId(value: string): az_batch_task_file_delete_command_builder;
    /** The ID of the Task whose file you want to delete. */
    taskId(value: string): az_batch_task_file_delete_command_builder;
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    accountEndpoint(value: string): az_batch_task_file_delete_command_builder;
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    accountKey(value: string): az_batch_task_file_delete_command_builder;
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    accountName(value: string): az_batch_task_file_delete_command_builder;
    /** Whether to delete children of a directory. If the filePath parameter represents a directory instead of a file, you can set recursive to true to delete the directory and all of the files and subdirectories in it. If recursive is false then the directory must be empty or deletion will fail. */
    recursive(value: string): az_batch_task_file_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_batch_task_file_delete_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_batch_task_file_delete_command_builder;
}
/**
 * Download the content of a Batch task file.
 *
 * Syntax:
 * ```
 * az batch task file download --destination
 *                             --file-path
 *                             --job-id
 *                             --task-id
 *                             [--account-endpoint]
 *                             [--account-key]
 *                             [--account-name]
 *                             [--end-range]
 *                             [--if-modified-since]
 *                             [--if-unmodified-since]
 *                             [--start-range]
 *                             [--subscription]
 * ```
 *
 * @param {string} destination The path to the destination file or directory.
 * @param {string} filePath The path to the Task file that you want to get the content of.
 * @param {string} jobId The ID of the Job that contains the Task.
 * @param {string} taskId The ID of the Task whose file you want to retrieve.
 */
declare class az_batch_task_file_download_command_builder extends CommandBuilder<az_batch_task_file_download_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, destination: string, filePath: string, jobId: string, taskId: string);
    /** The path to the destination file or directory. */
    destination(value: string): az_batch_task_file_download_command_builder;
    /** The path to the Task file that you want to get the content of. */
    filePath(value: string): az_batch_task_file_download_command_builder;
    /** The ID of the Job that contains the Task. */
    jobId(value: string): az_batch_task_file_download_command_builder;
    /** The ID of the Task whose file you want to retrieve. */
    taskId(value: string): az_batch_task_file_download_command_builder;
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    accountEndpoint(value: string): az_batch_task_file_download_command_builder;
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    accountKey(value: string): az_batch_task_file_download_command_builder;
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    accountName(value: string): az_batch_task_file_download_command_builder;
    /** The byte range to be retrieved. If not set the file will be retrieved to the end. */
    endRange(value: string): az_batch_task_file_download_command_builder;
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. */
    ifModifiedSince(value: string): az_batch_task_file_download_command_builder;
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. */
    ifUnmodifiedSince(value: string): az_batch_task_file_download_command_builder;
    /** The byte range to be retrieved. If not set the file will be retrieved from the beginning. */
    startRange(value: string): az_batch_task_file_download_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_batch_task_file_download_command_builder;
}
/**
 * Lists the files in a Task's directory on its Compute Node.
 *
 * Syntax:
 * ```
 * az batch task file list --job-id
 *                         --task-id
 *                         [--account-endpoint]
 *                         [--account-key]
 *                         [--account-name]
 *                         [--filter]
 *                         [--query-examples]
 *                         [--recursive]
 *                         [--subscription]
 * ```
 *
 * @param {string} jobId The ID of the Job that contains the Task.
 * @param {string} taskId The ID of the Task whose files you want to list.
 */
declare class az_batch_task_file_list_command_builder extends CommandBuilder<az_batch_task_file_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, jobId: string, taskId: string);
    /** The ID of the Job that contains the Task. */
    jobId(value: string): az_batch_task_file_list_command_builder;
    /** The ID of the Task whose files you want to list. */
    taskId(value: string): az_batch_task_file_list_command_builder;
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    accountEndpoint(value: string): az_batch_task_file_list_command_builder;
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    accountKey(value: string): az_batch_task_file_list_command_builder;
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    accountName(value: string): az_batch_task_file_list_command_builder;
    /** An OData $filter clause. For more information on constructing this filter, see <a href="https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-task-files">https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-task-files</a>. */
    filter(value: string): az_batch_task_file_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_batch_task_file_list_command_builder;
    /** Whether to list children of the Task directory. This parameter can be used in combination with the filter parameter to list specific type of files. */
    recursive(value: string): az_batch_task_file_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_batch_task_file_list_command_builder;
}
/**
 * Gets the properties of the specified Task file.
 *
 * Syntax:
 * ```
 * az batch task file show --file-path
 *                         --job-id
 *                         --task-id
 *                         [--account-endpoint]
 *                         [--account-key]
 *                         [--account-name]
 *                         [--if-modified-since]
 *                         [--if-unmodified-since]
 *                         [--query-examples]
 *                         [--subscription]
 * ```
 *
 * @param {string} filePath The path to the Task file that you want to get the properties of.
 * @param {string} jobId The ID of the Job that contains the Task.
 * @param {string} taskId The ID of the Task whose file you want to get the properties of.
 */
declare class az_batch_task_file_show_command_builder extends CommandBuilder<az_batch_task_file_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, filePath: string, jobId: string, taskId: string);
    /** The path to the Task file that you want to get the properties of. */
    filePath(value: string): az_batch_task_file_show_command_builder;
    /** The ID of the Job that contains the Task. */
    jobId(value: string): az_batch_task_file_show_command_builder;
    /** The ID of the Task whose file you want to get the properties of. */
    taskId(value: string): az_batch_task_file_show_command_builder;
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    accountEndpoint(value: string): az_batch_task_file_show_command_builder;
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    accountKey(value: string): az_batch_task_file_show_command_builder;
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    accountName(value: string): az_batch_task_file_show_command_builder;
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. */
    ifModifiedSince(value: string): az_batch_task_file_show_command_builder;
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. */
    ifUnmodifiedSince(value: string): az_batch_task_file_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_batch_task_file_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_batch_task_file_show_command_builder;
}
/**
 * Lists all of the subtasks that are associated with the specified multi-instance Task.
 *
 * Syntax:
 * ```
 * az batch task subtask list --job-id
 *                            --task-id
 *                            [--account-endpoint]
 *                            [--account-key]
 *                            [--account-name]
 *                            [--query-examples]
 *                            [--select]
 *                            [--subscription]
 * ```
 *
 * @param {string} jobId The ID of the Job.
 * @param {string} taskId The ID of the Task.
 */
declare class az_batch_task_subtask_list_command_builder extends CommandBuilder<az_batch_task_subtask_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, jobId: string, taskId: string);
    /** The ID of the Job. */
    jobId(value: string): az_batch_task_subtask_list_command_builder;
    /** The ID of the Task. */
    taskId(value: string): az_batch_task_subtask_list_command_builder;
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    accountEndpoint(value: string): az_batch_task_subtask_list_command_builder;
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    accountKey(value: string): az_batch_task_subtask_list_command_builder;
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    accountName(value: string): az_batch_task_subtask_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_batch_task_subtask_list_command_builder;
    /** An OData $select clause. */
    select(value: string): az_batch_task_subtask_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_batch_task_subtask_list_command_builder;
}
/**
 * Create Batch tasks.
 *
 * Syntax:
 * ```
 * az batch task create --job-id
 *                      [--account-endpoint]
 *                      [--account-key]
 *                      [--account-name]
 *                      [--affinity-id]
 *                      [--application-package-references]
 *                      [--command-line]
 *                      [--environment-settings]
 *                      [--json-file]
 *                      [--max-task-retry-count]
 *                      [--max-wall-clock-time]
 *                      [--resource-files]
 *                      [--retention-time]
 *                      [--subscription]
 *                      [--task-id]
 * ```
 *
 * @param {string} jobId The ID of the job containing the task.
 */
declare class az_batch_task_create_command_builder extends CommandBuilder<az_batch_task_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, jobId: string);
    /** The ID of the job containing the task. */
    jobId(value: string): az_batch_task_create_command_builder;
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    accountEndpoint(value: string): az_batch_task_create_command_builder;
    /** The Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    accountKey(value: string): az_batch_task_create_command_builder;
    /** The Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    accountName(value: string): az_batch_task_create_command_builder;
    /** Required. An opaque string representing the location of a Compute Node or a Task that has run previously. You can pass the affinityId of a Node to indicate that this Task needs to run on that Compute Node. Note that this is just a soft affinity. If the target Compute Node is busy or unavailable at the time the Task is scheduled, then the Task will be scheduled elsewhere. */
    affinityId(value: string): az_batch_task_create_command_builder;
    /** The space-separated list of IDs specifying the application packages to be installed. Space-separated application IDs with optional version in 'id[#version]' format. */
    applicationPackageReferences(value: string): az_batch_task_create_command_builder;
    /** The command line of the task. The command line does not run under a shell, and therefore cannot take advantage of shell features such as environment variable expansion. If you want to take advantage of such features, you should invoke the shell in the command line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux. */
    commandLine(value: string): az_batch_task_create_command_builder;
    /** A list of environment variable settings for the task. Space-separated values in 'key=value' format. */
    environmentSettings(value: string): az_batch_task_create_command_builder;
    /** The file containing the task(s) to create in JSON(formatted to match REST API request body). When submitting multiple tasks, accepts either an array of tasks or a TaskAddCollectionParamater. If this parameter is specified, all other parameters are ignored. */
    jsonFile(value: string): az_batch_task_create_command_builder;
    /** The maximum number of times the Task may be retried. The Batch service retries a Task if its exit code is nonzero. Note that this value specifically controls the number of retries for the Task executable due to a nonzero exit code. The Batch service will try the Task once, and may then retry up to this limit. For example, if the maximum retry count is 3, Batch tries the Task up to 4 times (one initial try and 3 retries). If the maximum retry count is 0, the Batch service does not retry the Task after the first attempt. If the maximum retry count is -1, the Batch service retries the Task without limit. */
    maxTaskRetryCount(value: string): az_batch_task_create_command_builder;
    /** The maximum elapsed time that the Task may run, measured from the time the Task starts. If the Task does not complete within the time limit, the Batch service terminates it. If this is not specified, there is no time limit on how long the Task may run. */
    maxWallClockTime(value: string): az_batch_task_create_command_builder;
    /** A list of files that the Batch service will download to the compute node before running the command line. Space-separated resource references in filename=httpurl format, with httpurl being any HTTP url with public access or a SAS url with read access. */
    resourceFiles(value: string): az_batch_task_create_command_builder;
    /** The minimum time to retain the Task directory on the Compute Node where it ran, from the time it completes execution. After this time, the Batch service may delete the Task directory and all its contents. The default is 7 days, i.e. the Task directory will be retained for 7 days unless the Compute Node is removed or the Job is deleted. */
    retentionTime(value: string): az_batch_task_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_batch_task_create_command_builder;
    /** The ID of the task. */
    taskId(value: string): az_batch_task_create_command_builder;
}
/**
 * Deletes a Task from the specified Job.
 *
 * Syntax:
 * ```
 * az batch task delete --job-id
 *                      --task-id
 *                      [--account-endpoint]
 *                      [--account-key]
 *                      [--account-name]
 *                      [--if-match]
 *                      [--if-modified-since]
 *                      [--if-none-match]
 *                      [--if-unmodified-since]
 *                      [--subscription]
 *                      [--yes]
 * ```
 *
 * @param {string} jobId The ID of the Job from which to delete the Task.
 * @param {string} taskId The ID of the Task to delete.
 */
declare class az_batch_task_delete_command_builder extends CommandBuilder<az_batch_task_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, jobId: string, taskId: string);
    /** The ID of the Job from which to delete the Task. */
    jobId(value: string): az_batch_task_delete_command_builder;
    /** The ID of the Task to delete. */
    taskId(value: string): az_batch_task_delete_command_builder;
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    accountEndpoint(value: string): az_batch_task_delete_command_builder;
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    accountKey(value: string): az_batch_task_delete_command_builder;
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    accountName(value: string): az_batch_task_delete_command_builder;
    /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client. */
    ifMatch(value: string): az_batch_task_delete_command_builder;
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. */
    ifModifiedSince(value: string): az_batch_task_delete_command_builder;
    /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client. */
    ifNoneMatch(value: string): az_batch_task_delete_command_builder;
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. */
    ifUnmodifiedSince(value: string): az_batch_task_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_batch_task_delete_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_batch_task_delete_command_builder;
}
/**
 * Lists all of the Tasks that are associated with the specified Job.
 *
 * Syntax:
 * ```
 * az batch task list --job-id
 *                    [--account-endpoint]
 *                    [--account-key]
 *                    [--account-name]
 *                    [--expand]
 *                    [--filter]
 *                    [--query-examples]
 *                    [--select]
 *                    [--subscription]
 * ```
 *
 * @param {string} jobId The ID of the Job.
 */
declare class az_batch_task_list_command_builder extends CommandBuilder<az_batch_task_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, jobId: string);
    /** The ID of the Job. */
    jobId(value: string): az_batch_task_list_command_builder;
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    accountEndpoint(value: string): az_batch_task_list_command_builder;
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    accountKey(value: string): az_batch_task_list_command_builder;
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    accountName(value: string): az_batch_task_list_command_builder;
    /** An OData $expand clause. */
    expand(value: string): az_batch_task_list_command_builder;
    /** An OData $filter clause. For more information on constructing this filter, see <a href="https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-tasks">https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-tasks</a>. */
    filter(value: string): az_batch_task_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_batch_task_list_command_builder;
    /** An OData $select clause. */
    select(value: string): az_batch_task_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_batch_task_list_command_builder;
}
/**
 * Reactivates a Task, allowing it to run again even if its retry count has been exhausted.
 *
 * Syntax:
 * ```
 * az batch task reactivate --job-id
 *                          --task-id
 *                          [--account-endpoint]
 *                          [--account-key]
 *                          [--account-name]
 *                          [--if-match]
 *                          [--if-modified-since]
 *                          [--if-none-match]
 *                          [--if-unmodified-since]
 *                          [--subscription]
 * ```
 *
 * @param {string} jobId The ID of the Job containing the Task.
 * @param {string} taskId The ID of the Task to reactivate.
 */
declare class az_batch_task_reactivate_command_builder extends CommandBuilder<az_batch_task_reactivate_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, jobId: string, taskId: string);
    /** The ID of the Job containing the Task. */
    jobId(value: string): az_batch_task_reactivate_command_builder;
    /** The ID of the Task to reactivate. */
    taskId(value: string): az_batch_task_reactivate_command_builder;
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    accountEndpoint(value: string): az_batch_task_reactivate_command_builder;
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    accountKey(value: string): az_batch_task_reactivate_command_builder;
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    accountName(value: string): az_batch_task_reactivate_command_builder;
    /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client. */
    ifMatch(value: string): az_batch_task_reactivate_command_builder;
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. */
    ifModifiedSince(value: string): az_batch_task_reactivate_command_builder;
    /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client. */
    ifNoneMatch(value: string): az_batch_task_reactivate_command_builder;
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. */
    ifUnmodifiedSince(value: string): az_batch_task_reactivate_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_batch_task_reactivate_command_builder;
}
/**
 * Reset the properties of a Batch task.
 *
 * Syntax:
 * ```
 * az batch task reset --job-id
 *                     --task-id
 *                     [--account-endpoint]
 *                     [--account-key]
 *                     [--account-name]
 *                     [--if-match]
 *                     [--if-modified-since]
 *                     [--if-none-match]
 *                     [--if-unmodified-since]
 *                     [--json-file]
 *                     [--max-task-retry-count]
 *                     [--max-wall-clock-time]
 *                     [--retention-time]
 *                     [--subscription]
 * ```
 *
 * @param {string} jobId The ID of the Job containing the Task.
 * @param {string} taskId The ID of the Task to update.
 */
declare class az_batch_task_reset_command_builder extends CommandBuilder<az_batch_task_reset_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, jobId: string, taskId: string);
    /** The ID of the Job containing the Task. */
    jobId(value: string): az_batch_task_reset_command_builder;
    /** The ID of the Task to update. */
    taskId(value: string): az_batch_task_reset_command_builder;
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    accountEndpoint(value: string): az_batch_task_reset_command_builder;
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    accountKey(value: string): az_batch_task_reset_command_builder;
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    accountName(value: string): az_batch_task_reset_command_builder;
    /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client. */
    ifMatch(value: string): az_batch_task_reset_command_builder;
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. */
    ifModifiedSince(value: string): az_batch_task_reset_command_builder;
    /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client. */
    ifNoneMatch(value: string): az_batch_task_reset_command_builder;
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. */
    ifUnmodifiedSince(value: string): az_batch_task_reset_command_builder;
    /** A file containing the constraints specification in JSON (formatted to match the respective REST API body). If this parameter is specified, all 'Constraints Arguments' are ignored. */
    jsonFile(value: string): az_batch_task_reset_command_builder;
    /** The maximum number of times the Task may be retried. The Batch service retries a Task if its exit code is nonzero. Note that this value specifically controls the number of retries for the Task executable due to a nonzero exit code. The Batch service will try the Task once, and may then retry up to this limit. For example, if the maximum retry count is 3, Batch tries the Task up to 4 times (one initial try and 3 retries). If the maximum retry count is 0, the Batch service does not retry the Task after the first attempt. If the maximum retry count is -1, the Batch service retries the Task without limit. */
    maxTaskRetryCount(value: string): az_batch_task_reset_command_builder;
    /** The maximum elapsed time that the Task may run, measured from the time the Task starts. If the Task does not complete within the time limit, the Batch service terminates it. If this is not specified, there is no time limit on how long the Task may run. Expected format is an ISO-8601 duration. */
    maxWallClockTime(value: string): az_batch_task_reset_command_builder;
    /** The minimum time to retain the Task directory on the Compute Node where it ran, from the time it completes execution. After this time, the Batch service may delete the Task directory and all its contents. The default is 7 days, i.e. the Task directory will be retained for 7 days unless the Compute Node is removed or the Job is deleted. Expected format is an ISO-8601 duration. */
    retentionTime(value: string): az_batch_task_reset_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_batch_task_reset_command_builder;
}
/**
 * Gets information about the specified Task.
 *
 * Syntax:
 * ```
 * az batch task show --job-id
 *                    --task-id
 *                    [--account-endpoint]
 *                    [--account-key]
 *                    [--account-name]
 *                    [--expand]
 *                    [--if-match]
 *                    [--if-modified-since]
 *                    [--if-none-match]
 *                    [--if-unmodified-since]
 *                    [--query-examples]
 *                    [--select]
 *                    [--subscription]
 * ```
 *
 * @param {string} jobId The ID of the Job that contains the Task.
 * @param {string} taskId The ID of the Task to get information about.
 */
declare class az_batch_task_show_command_builder extends CommandBuilder<az_batch_task_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, jobId: string, taskId: string);
    /** The ID of the Job that contains the Task. */
    jobId(value: string): az_batch_task_show_command_builder;
    /** The ID of the Task to get information about. */
    taskId(value: string): az_batch_task_show_command_builder;
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    accountEndpoint(value: string): az_batch_task_show_command_builder;
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    accountKey(value: string): az_batch_task_show_command_builder;
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    accountName(value: string): az_batch_task_show_command_builder;
    /** An OData $expand clause. */
    expand(value: string): az_batch_task_show_command_builder;
    /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client. */
    ifMatch(value: string): az_batch_task_show_command_builder;
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. */
    ifModifiedSince(value: string): az_batch_task_show_command_builder;
    /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client. */
    ifNoneMatch(value: string): az_batch_task_show_command_builder;
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. */
    ifUnmodifiedSince(value: string): az_batch_task_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_batch_task_show_command_builder;
    /** An OData $select clause. */
    select(value: string): az_batch_task_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_batch_task_show_command_builder;
}
/**
 * Terminates the specified Task.
 *
 * Syntax:
 * ```
 * az batch task stop --job-id
 *                    --task-id
 *                    [--account-endpoint]
 *                    [--account-key]
 *                    [--account-name]
 *                    [--if-match]
 *                    [--if-modified-since]
 *                    [--if-none-match]
 *                    [--if-unmodified-since]
 *                    [--subscription]
 * ```
 *
 * @param {string} jobId The ID of the Job containing the Task.
 * @param {string} taskId The ID of the Task to terminate.
 */
declare class az_batch_task_stop_command_builder extends CommandBuilder<az_batch_task_stop_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, jobId: string, taskId: string);
    /** The ID of the Job containing the Task. */
    jobId(value: string): az_batch_task_stop_command_builder;
    /** The ID of the Task to terminate. */
    taskId(value: string): az_batch_task_stop_command_builder;
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    accountEndpoint(value: string): az_batch_task_stop_command_builder;
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    accountKey(value: string): az_batch_task_stop_command_builder;
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    accountName(value: string): az_batch_task_stop_command_builder;
    /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client. */
    ifMatch(value: string): az_batch_task_stop_command_builder;
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. */
    ifModifiedSince(value: string): az_batch_task_stop_command_builder;
    /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client. */
    ifNoneMatch(value: string): az_batch_task_stop_command_builder;
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. */
    ifUnmodifiedSince(value: string): az_batch_task_stop_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_batch_task_stop_command_builder;
}
export {};
