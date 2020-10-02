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
/** Manage the access keys for the auto storage account configured for a Batch account. */
var az_batch_account_autostorage_keys = /** @class */ (function () {
    function az_batch_account_autostorage_keys() {
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
    az_batch_account_autostorage_keys.sync = function (name, resourceGroup) {
        return new az_batch_account_autostorage_keys_sync_command_builder("az batch account autostorage-keys sync", 'az_batch_account_autostorage_keys_sync_command_result', name, resourceGroup);
    };
    return az_batch_account_autostorage_keys;
}());
exports.az_batch_account_autostorage_keys = az_batch_account_autostorage_keys;
/** Manage Batch account keys. */
var az_batch_account_keys = /** @class */ (function () {
    function az_batch_account_keys() {
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
    az_batch_account_keys.list = function (name, resourceGroup) {
        return new az_batch_account_keys_list_command_builder("az batch account keys list", 'az_batch_account_keys_list_command_result', name, resourceGroup);
    };
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
    az_batch_account_keys.renew = function (keyName, name, resourceGroup) {
        return new az_batch_account_keys_renew_command_builder("az batch account keys renew", 'az_batch_account_keys_renew_command_result', keyName, name, resourceGroup);
    };
    return az_batch_account_keys;
}());
exports.az_batch_account_keys = az_batch_account_keys;
/** Manage Azure Batch accounts. */
var az_batch_account = /** @class */ (function () {
    function az_batch_account() {
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
    az_batch_account.create = function (location, name, resourceGroup) {
        return new az_batch_account_create_command_builder("az batch account create", 'az_batch_account_create_command_result', location, name, resourceGroup);
    };
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
    az_batch_account["delete"] = function (name, resourceGroup) {
        return new az_batch_account_delete_command_builder("az batch account delete", 'az_batch_account_delete_command_result', name, resourceGroup);
    };
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
    az_batch_account.list = function () {
        return new az_batch_account_list_command_builder("az batch account list", 'az_batch_account_list_command_result');
    };
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
    az_batch_account.login = function (name, resourceGroup) {
        return new az_batch_account_login_command_builder("az batch account login", 'az_batch_account_login_command_result', name, resourceGroup);
    };
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
    az_batch_account.set = function (name, resourceGroup) {
        return new az_batch_account_set_command_builder("az batch account set", 'az_batch_account_set_command_result', name, resourceGroup);
    };
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
    az_batch_account.show = function () {
        return new az_batch_account_show_command_builder("az batch account show", 'az_batch_account_show_command_result');
    };
    return az_batch_account;
}());
exports.az_batch_account = az_batch_account;
/** Manage Batch application packages. */
var az_batch_application_package = /** @class */ (function () {
    function az_batch_application_package() {
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
    az_batch_application_package.activate = function (applicationName, format, name, resourceGroup, versionName) {
        return new az_batch_application_package_activate_command_builder("az batch application package activate", 'az_batch_application_package_activate_command_result', applicationName, format, name, resourceGroup, versionName);
    };
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
    az_batch_application_package.create = function (applicationName, name, packageFile, resourceGroup, versionName) {
        return new az_batch_application_package_create_command_builder("az batch application package create", 'az_batch_application_package_create_command_result', applicationName, name, packageFile, resourceGroup, versionName);
    };
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
    az_batch_application_package["delete"] = function (applicationName, name, resourceGroup, versionName) {
        return new az_batch_application_package_delete_command_builder("az batch application package delete", 'az_batch_application_package_delete_command_result', applicationName, name, resourceGroup, versionName);
    };
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
    az_batch_application_package.list = function (applicationName, name, resourceGroup) {
        return new az_batch_application_package_list_command_builder("az batch application package list", 'az_batch_application_package_list_command_result', applicationName, name, resourceGroup);
    };
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
    az_batch_application_package.show = function (applicationName, name, resourceGroup, versionName) {
        return new az_batch_application_package_show_command_builder("az batch application package show", 'az_batch_application_package_show_command_result', applicationName, name, resourceGroup, versionName);
    };
    return az_batch_application_package;
}());
exports.az_batch_application_package = az_batch_application_package;
/** View a summary of Batch application packages. */
var az_batch_application_summary = /** @class */ (function () {
    function az_batch_application_summary() {
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
    az_batch_application_summary.list = function () {
        return new az_batch_application_summary_list_command_builder("az batch application summary list", 'az_batch_application_summary_list_command_result');
    };
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
    az_batch_application_summary.show = function (applicationId) {
        return new az_batch_application_summary_show_command_builder("az batch application summary show", 'az_batch_application_summary_show_command_result', applicationId);
    };
    return az_batch_application_summary;
}());
exports.az_batch_application_summary = az_batch_application_summary;
/** Manage Batch applications. */
var az_batch_application = /** @class */ (function () {
    function az_batch_application() {
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
    az_batch_application.create = function (applicationName, name, resourceGroup) {
        return new az_batch_application_create_command_builder("az batch application create", 'az_batch_application_create_command_result', applicationName, name, resourceGroup);
    };
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
    az_batch_application["delete"] = function (applicationName, name, resourceGroup) {
        return new az_batch_application_delete_command_builder("az batch application delete", 'az_batch_application_delete_command_result', applicationName, name, resourceGroup);
    };
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
    az_batch_application.list = function (name, resourceGroup) {
        return new az_batch_application_list_command_builder("az batch application list", 'az_batch_application_list_command_result', name, resourceGroup);
    };
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
    az_batch_application.set = function (applicationName, name, resourceGroup) {
        return new az_batch_application_set_command_builder("az batch application set", 'az_batch_application_set_command_result', applicationName, name, resourceGroup);
    };
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
    az_batch_application.show = function (applicationName, name, resourceGroup) {
        return new az_batch_application_show_command_builder("az batch application show", 'az_batch_application_show_command_result', applicationName, name, resourceGroup);
    };
    return az_batch_application;
}());
exports.az_batch_application = az_batch_application;
/** Manage Batch certificates. */
var az_batch_certificate = /** @class */ (function () {
    function az_batch_certificate() {
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
    az_batch_certificate.create = function (certificateFile, thumbprint) {
        return new az_batch_certificate_create_command_builder("az batch certificate create", 'az_batch_certificate_create_command_result', certificateFile, thumbprint);
    };
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
    az_batch_certificate["delete"] = function (thumbprint) {
        return new az_batch_certificate_delete_command_builder("az batch certificate delete", 'az_batch_certificate_delete_command_result', thumbprint);
    };
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
    az_batch_certificate.list = function () {
        return new az_batch_certificate_list_command_builder("az batch certificate list", 'az_batch_certificate_list_command_result');
    };
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
    az_batch_certificate.show = function (thumbprint) {
        return new az_batch_certificate_show_command_builder("az batch certificate show", 'az_batch_certificate_show_command_result', thumbprint);
    };
    return az_batch_certificate;
}());
exports.az_batch_certificate = az_batch_certificate;
/** View statistics of all jobs under a Batch account. */
var az_batch_job_all_statistics = /** @class */ (function () {
    function az_batch_job_all_statistics() {
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
    az_batch_job_all_statistics.show = function () {
        return new az_batch_job_all_statistics_show_command_builder("az batch job all-statistics show", 'az_batch_job_all_statistics_show_command_result');
    };
    return az_batch_job_all_statistics;
}());
exports.az_batch_job_all_statistics = az_batch_job_all_statistics;
/** View the status of Batch job preparation and release tasks. */
var az_batch_job_prep_release_status = /** @class */ (function () {
    function az_batch_job_prep_release_status() {
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
    az_batch_job_prep_release_status.list = function (jobId) {
        return new az_batch_job_prep_release_status_list_command_builder("az batch job prep-release-status list", 'az_batch_job_prep_release_status_list_command_result', jobId);
    };
    return az_batch_job_prep_release_status;
}());
exports.az_batch_job_prep_release_status = az_batch_job_prep_release_status;
/** View the number of tasks in a Batch job and their states. */
var az_batch_job_task_counts = /** @class */ (function () {
    function az_batch_job_task_counts() {
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
    az_batch_job_task_counts.show = function (jobId) {
        return new az_batch_job_task_counts_show_command_builder("az batch job task-counts show", 'az_batch_job_task_counts_show_command_result', jobId);
    };
    return az_batch_job_task_counts;
}());
exports.az_batch_job_task_counts = az_batch_job_task_counts;
/** Manage Batch job schedules. */
var az_batch_job_schedule = /** @class */ (function () {
    function az_batch_job_schedule() {
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
    az_batch_job_schedule.create = function () {
        return new az_batch_job_schedule_create_command_builder("az batch job-schedule create", 'az_batch_job_schedule_create_command_result');
    };
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
    az_batch_job_schedule["delete"] = function (jobScheduleId) {
        return new az_batch_job_schedule_delete_command_builder("az batch job-schedule delete", 'az_batch_job_schedule_delete_command_result', jobScheduleId);
    };
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
    az_batch_job_schedule.disable = function (jobScheduleId) {
        return new az_batch_job_schedule_disable_command_builder("az batch job-schedule disable", 'az_batch_job_schedule_disable_command_result', jobScheduleId);
    };
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
    az_batch_job_schedule.enable = function (jobScheduleId) {
        return new az_batch_job_schedule_enable_command_builder("az batch job-schedule enable", 'az_batch_job_schedule_enable_command_result', jobScheduleId);
    };
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
    az_batch_job_schedule.list = function () {
        return new az_batch_job_schedule_list_command_builder("az batch job-schedule list", 'az_batch_job_schedule_list_command_result');
    };
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
    az_batch_job_schedule.reset = function (jobScheduleId) {
        return new az_batch_job_schedule_reset_command_builder("az batch job-schedule reset", 'az_batch_job_schedule_reset_command_result', jobScheduleId);
    };
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
    az_batch_job_schedule.set = function (jobScheduleId) {
        return new az_batch_job_schedule_set_command_builder("az batch job-schedule set", 'az_batch_job_schedule_set_command_result', jobScheduleId);
    };
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
    az_batch_job_schedule.show = function (jobScheduleId) {
        return new az_batch_job_schedule_show_command_builder("az batch job-schedule show", 'az_batch_job_schedule_show_command_result', jobScheduleId);
    };
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
    az_batch_job_schedule.stop = function (jobScheduleId) {
        return new az_batch_job_schedule_stop_command_builder("az batch job-schedule stop", 'az_batch_job_schedule_stop_command_result', jobScheduleId);
    };
    return az_batch_job_schedule;
}());
exports.az_batch_job_schedule = az_batch_job_schedule;
/** Manage Batch jobs. */
var az_batch_job = /** @class */ (function () {
    function az_batch_job() {
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
    az_batch_job.create = function () {
        return new az_batch_job_create_command_builder("az batch job create", 'az_batch_job_create_command_result');
    };
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
    az_batch_job["delete"] = function (jobId) {
        return new az_batch_job_delete_command_builder("az batch job delete", 'az_batch_job_delete_command_result', jobId);
    };
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
    az_batch_job.disable = function (jobId) {
        return new az_batch_job_disable_command_builder("az batch job disable", 'az_batch_job_disable_command_result', jobId);
    };
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
    az_batch_job.enable = function (jobId) {
        return new az_batch_job_enable_command_builder("az batch job enable", 'az_batch_job_enable_command_result', jobId);
    };
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
    az_batch_job.list = function () {
        return new az_batch_job_list_command_builder("az batch job list", 'az_batch_job_list_command_result');
    };
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
    az_batch_job.reset = function (jobId) {
        return new az_batch_job_reset_command_builder("az batch job reset", 'az_batch_job_reset_command_result', jobId);
    };
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
    az_batch_job.set = function (jobId) {
        return new az_batch_job_set_command_builder("az batch job set", 'az_batch_job_set_command_result', jobId);
    };
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
    az_batch_job.show = function (jobId) {
        return new az_batch_job_show_command_builder("az batch job show", 'az_batch_job_show_command_result', jobId);
    };
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
    az_batch_job.stop = function (jobId) {
        return new az_batch_job_stop_command_builder("az batch job stop", 'az_batch_job_stop_command_result', jobId);
    };
    return az_batch_job;
}());
exports.az_batch_job = az_batch_job;
/** Manage Batch service quotas at the region level. */
var az_batch_location_quotas = /** @class */ (function () {
    function az_batch_location_quotas() {
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
    az_batch_location_quotas.show = function (location) {
        return new az_batch_location_quotas_show_command_builder("az batch location quotas show", 'az_batch_location_quotas_show_command_result', location);
    };
    return az_batch_location_quotas;
}());
exports.az_batch_location_quotas = az_batch_location_quotas;
/** Manage Batch service options for a subscription at the region level. */
var az_batch_location = /** @class */ (function () {
    function az_batch_location() {
    }
    return az_batch_location;
}());
exports.az_batch_location = az_batch_location;
/** Manage Batch compute node files. */
var az_batch_node_file = /** @class */ (function () {
    function az_batch_node_file() {
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
    az_batch_node_file["delete"] = function (filePath, nodeId, poolId) {
        return new az_batch_node_file_delete_command_builder("az batch node file delete", 'az_batch_node_file_delete_command_result', filePath, nodeId, poolId);
    };
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
    az_batch_node_file.download = function (destination, filePath, nodeId, poolId) {
        return new az_batch_node_file_download_command_builder("az batch node file download", 'az_batch_node_file_download_command_result', destination, filePath, nodeId, poolId);
    };
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
    az_batch_node_file.list = function (nodeId, poolId) {
        return new az_batch_node_file_list_command_builder("az batch node file list", 'az_batch_node_file_list_command_result', nodeId, poolId);
    };
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
    az_batch_node_file.show = function (filePath, nodeId, poolId) {
        return new az_batch_node_file_show_command_builder("az batch node file show", 'az_batch_node_file_show_command_result', filePath, nodeId, poolId);
    };
    return az_batch_node_file;
}());
exports.az_batch_node_file = az_batch_node_file;
/** Retrieve the remote desktop protocol file for a Batch compute node. */
var az_batch_node_remote_desktop = /** @class */ (function () {
    function az_batch_node_remote_desktop() {
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
    az_batch_node_remote_desktop.download = function (destination, nodeId, poolId) {
        return new az_batch_node_remote_desktop_download_command_builder("az batch node remote-desktop download", 'az_batch_node_remote_desktop_download_command_result', destination, nodeId, poolId);
    };
    return az_batch_node_remote_desktop;
}());
exports.az_batch_node_remote_desktop = az_batch_node_remote_desktop;
/** Retrieve the remote login settings for a Batch compute node. */
var az_batch_node_remote_login_settings = /** @class */ (function () {
    function az_batch_node_remote_login_settings() {
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
    az_batch_node_remote_login_settings.show = function (nodeId, poolId) {
        return new az_batch_node_remote_login_settings_show_command_builder("az batch node remote-login-settings show", 'az_batch_node_remote_login_settings_show_command_result', nodeId, poolId);
    };
    return az_batch_node_remote_login_settings;
}());
exports.az_batch_node_remote_login_settings = az_batch_node_remote_login_settings;
/** Manage task scheduling for a Batch compute node. */
var az_batch_node_scheduling = /** @class */ (function () {
    function az_batch_node_scheduling() {
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
    az_batch_node_scheduling.disable = function (nodeId, poolId) {
        return new az_batch_node_scheduling_disable_command_builder("az batch node scheduling disable", 'az_batch_node_scheduling_disable_command_result', nodeId, poolId);
    };
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
    az_batch_node_scheduling.enable = function (nodeId, poolId) {
        return new az_batch_node_scheduling_enable_command_builder("az batch node scheduling enable", 'az_batch_node_scheduling_enable_command_result', nodeId, poolId);
    };
    return az_batch_node_scheduling;
}());
exports.az_batch_node_scheduling = az_batch_node_scheduling;
/** Manage the service log files of a Batch compute node. */
var az_batch_node_service_logs = /** @class */ (function () {
    function az_batch_node_service_logs() {
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
    az_batch_node_service_logs.upload = function (nodeId, poolId) {
        return new az_batch_node_service_logs_upload_command_builder("az batch node service-logs upload", 'az_batch_node_service_logs_upload_command_result', nodeId, poolId);
    };
    return az_batch_node_service_logs;
}());
exports.az_batch_node_service_logs = az_batch_node_service_logs;
/** Manage the user accounts of a Batch compute node. */
var az_batch_node_user = /** @class */ (function () {
    function az_batch_node_user() {
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
    az_batch_node_user.create = function (nodeId, poolId) {
        return new az_batch_node_user_create_command_builder("az batch node user create", 'az_batch_node_user_create_command_result', nodeId, poolId);
    };
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
    az_batch_node_user["delete"] = function (nodeId, poolId, userName) {
        return new az_batch_node_user_delete_command_builder("az batch node user delete", 'az_batch_node_user_delete_command_result', nodeId, poolId, userName);
    };
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
    az_batch_node_user.reset = function (nodeId, poolId, userName) {
        return new az_batch_node_user_reset_command_builder("az batch node user reset", 'az_batch_node_user_reset_command_result', nodeId, poolId, userName);
    };
    return az_batch_node_user;
}());
exports.az_batch_node_user = az_batch_node_user;
/** Manage Batch compute nodes. */
var az_batch_node = /** @class */ (function () {
    function az_batch_node() {
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
    az_batch_node["delete"] = function (poolId) {
        return new az_batch_node_delete_command_builder("az batch node delete", 'az_batch_node_delete_command_result', poolId);
    };
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
    az_batch_node.list = function (poolId) {
        return new az_batch_node_list_command_builder("az batch node list", 'az_batch_node_list_command_result', poolId);
    };
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
    az_batch_node.reboot = function (nodeId, poolId) {
        return new az_batch_node_reboot_command_builder("az batch node reboot", 'az_batch_node_reboot_command_result', nodeId, poolId);
    };
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
    az_batch_node.reimage = function (nodeId, poolId) {
        return new az_batch_node_reimage_command_builder("az batch node reimage", 'az_batch_node_reimage_command_result', nodeId, poolId);
    };
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
    az_batch_node.show = function (nodeId, poolId) {
        return new az_batch_node_show_command_builder("az batch node show", 'az_batch_node_show_command_result', nodeId, poolId);
    };
    return az_batch_node;
}());
exports.az_batch_node = az_batch_node;
/** View statistics of all pools under a Batch account. */
var az_batch_pool_all_statistics = /** @class */ (function () {
    function az_batch_pool_all_statistics() {
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
    az_batch_pool_all_statistics.show = function () {
        return new az_batch_pool_all_statistics_show_command_builder("az batch pool all-statistics show", 'az_batch_pool_all_statistics_show_command_result');
    };
    return az_batch_pool_all_statistics;
}());
exports.az_batch_pool_all_statistics = az_batch_pool_all_statistics;
/** Manage automatic scaling of Batch pools. */
var az_batch_pool_autoscale = /** @class */ (function () {
    function az_batch_pool_autoscale() {
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
    az_batch_pool_autoscale.disable = function (poolId) {
        return new az_batch_pool_autoscale_disable_command_builder("az batch pool autoscale disable", 'az_batch_pool_autoscale_disable_command_result', poolId);
    };
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
    az_batch_pool_autoscale.enable = function (poolId) {
        return new az_batch_pool_autoscale_enable_command_builder("az batch pool autoscale enable", 'az_batch_pool_autoscale_enable_command_result', poolId);
    };
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
    az_batch_pool_autoscale.evaluate = function (autoScaleFormula, poolId) {
        return new az_batch_pool_autoscale_evaluate_command_builder("az batch pool autoscale evaluate", 'az_batch_pool_autoscale_evaluate_command_result', autoScaleFormula, poolId);
    };
    return az_batch_pool_autoscale;
}());
exports.az_batch_pool_autoscale = az_batch_pool_autoscale;
/** Get node counts for Batch pools. */
var az_batch_pool_node_counts = /** @class */ (function () {
    function az_batch_pool_node_counts() {
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
    az_batch_pool_node_counts.list = function () {
        return new az_batch_pool_node_counts_list_command_builder("az batch pool node-counts list", 'az_batch_pool_node_counts_list_command_result');
    };
    return az_batch_pool_node_counts;
}());
exports.az_batch_pool_node_counts = az_batch_pool_node_counts;
/** Query information on VM images supported by Azure Batch service. */
var az_batch_pool_supported_images = /** @class */ (function () {
    function az_batch_pool_supported_images() {
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
    az_batch_pool_supported_images.list = function () {
        return new az_batch_pool_supported_images_list_command_builder("az batch pool supported-images list", 'az_batch_pool_supported_images_list_command_result');
    };
    return az_batch_pool_supported_images;
}());
exports.az_batch_pool_supported_images = az_batch_pool_supported_images;
/** View usage metrics of Batch pools. */
var az_batch_pool_usage_metrics = /** @class */ (function () {
    function az_batch_pool_usage_metrics() {
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
    az_batch_pool_usage_metrics.list = function () {
        return new az_batch_pool_usage_metrics_list_command_builder("az batch pool usage-metrics list", 'az_batch_pool_usage_metrics_list_command_result');
    };
    return az_batch_pool_usage_metrics;
}());
exports.az_batch_pool_usage_metrics = az_batch_pool_usage_metrics;
/** Manage Batch pools. */
var az_batch_pool = /** @class */ (function () {
    function az_batch_pool() {
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
    az_batch_pool.create = function () {
        return new az_batch_pool_create_command_builder("az batch pool create", 'az_batch_pool_create_command_result');
    };
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
    az_batch_pool["delete"] = function (poolId) {
        return new az_batch_pool_delete_command_builder("az batch pool delete", 'az_batch_pool_delete_command_result', poolId);
    };
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
    az_batch_pool.list = function () {
        return new az_batch_pool_list_command_builder("az batch pool list", 'az_batch_pool_list_command_result');
    };
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
    az_batch_pool.reset = function (poolId) {
        return new az_batch_pool_reset_command_builder("az batch pool reset", 'az_batch_pool_reset_command_result', poolId);
    };
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
    az_batch_pool.resize = function (poolId) {
        return new az_batch_pool_resize_command_builder("az batch pool resize", 'az_batch_pool_resize_command_result', poolId);
    };
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
    az_batch_pool.set = function (poolId) {
        return new az_batch_pool_set_command_builder("az batch pool set", 'az_batch_pool_set_command_result', poolId);
    };
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
    az_batch_pool.show = function (poolId) {
        return new az_batch_pool_show_command_builder("az batch pool show", 'az_batch_pool_show_command_result', poolId);
    };
    return az_batch_pool;
}());
exports.az_batch_pool = az_batch_pool;
/** Manage Batch task files. */
var az_batch_task_file = /** @class */ (function () {
    function az_batch_task_file() {
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
    az_batch_task_file["delete"] = function (filePath, jobId, taskId) {
        return new az_batch_task_file_delete_command_builder("az batch task file delete", 'az_batch_task_file_delete_command_result', filePath, jobId, taskId);
    };
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
    az_batch_task_file.download = function (destination, filePath, jobId, taskId) {
        return new az_batch_task_file_download_command_builder("az batch task file download", 'az_batch_task_file_download_command_result', destination, filePath, jobId, taskId);
    };
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
    az_batch_task_file.list = function (jobId, taskId) {
        return new az_batch_task_file_list_command_builder("az batch task file list", 'az_batch_task_file_list_command_result', jobId, taskId);
    };
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
    az_batch_task_file.show = function (filePath, jobId, taskId) {
        return new az_batch_task_file_show_command_builder("az batch task file show", 'az_batch_task_file_show_command_result', filePath, jobId, taskId);
    };
    return az_batch_task_file;
}());
exports.az_batch_task_file = az_batch_task_file;
/** Manage subtask information of a Batch task. */
var az_batch_task_subtask = /** @class */ (function () {
    function az_batch_task_subtask() {
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
    az_batch_task_subtask.list = function (jobId, taskId) {
        return new az_batch_task_subtask_list_command_builder("az batch task subtask list", 'az_batch_task_subtask_list_command_result', jobId, taskId);
    };
    return az_batch_task_subtask;
}());
exports.az_batch_task_subtask = az_batch_task_subtask;
/** Manage Batch tasks. */
var az_batch_task = /** @class */ (function () {
    function az_batch_task() {
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
    az_batch_task.create = function (jobId) {
        return new az_batch_task_create_command_builder("az batch task create", 'az_batch_task_create_command_result', jobId);
    };
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
    az_batch_task["delete"] = function (jobId, taskId) {
        return new az_batch_task_delete_command_builder("az batch task delete", 'az_batch_task_delete_command_result', jobId, taskId);
    };
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
    az_batch_task.list = function (jobId) {
        return new az_batch_task_list_command_builder("az batch task list", 'az_batch_task_list_command_result', jobId);
    };
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
    az_batch_task.reactivate = function (jobId, taskId) {
        return new az_batch_task_reactivate_command_builder("az batch task reactivate", 'az_batch_task_reactivate_command_result', jobId, taskId);
    };
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
    az_batch_task.reset = function (jobId, taskId) {
        return new az_batch_task_reset_command_builder("az batch task reset", 'az_batch_task_reset_command_result', jobId, taskId);
    };
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
    az_batch_task.show = function (jobId, taskId) {
        return new az_batch_task_show_command_builder("az batch task show", 'az_batch_task_show_command_result', jobId, taskId);
    };
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
    az_batch_task.stop = function (jobId, taskId) {
        return new az_batch_task_stop_command_builder("az batch task stop", 'az_batch_task_stop_command_result', jobId, taskId);
    };
    return az_batch_task;
}());
exports.az_batch_task = az_batch_task;
/** Manage Azure Batch. */
var az_batch = /** @class */ (function () {
    function az_batch() {
    }
    return az_batch;
}());
exports.az_batch = az_batch;
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
var az_batch_account_autostorage_keys_sync_command_builder = /** @class */ (function (_super) {
    __extends(az_batch_account_autostorage_keys_sync_command_builder, _super);
    function az_batch_account_autostorage_keys_sync_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the Batch account. */
    az_batch_account_autostorage_keys_sync_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of the resource group. */
    az_batch_account_autostorage_keys_sync_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_batch_account_autostorage_keys_sync_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_batch_account_autostorage_keys_sync_command_builder;
}(base_1.CommandBuilder));
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
var az_batch_account_keys_list_command_builder = /** @class */ (function (_super) {
    __extends(az_batch_account_keys_list_command_builder, _super);
    function az_batch_account_keys_list_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the Batch account. */
    az_batch_account_keys_list_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of the resource group. */
    az_batch_account_keys_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_batch_account_keys_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_batch_account_keys_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_batch_account_keys_list_command_builder;
}(base_1.CommandBuilder));
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
var az_batch_account_keys_renew_command_builder = /** @class */ (function (_super) {
    __extends(az_batch_account_keys_renew_command_builder, _super);
    function az_batch_account_keys_renew_command_builder(commandPath, resultDataTypeName, keyName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.keyName(keyName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The type of account key to regenerate. */
    az_batch_account_keys_renew_command_builder.prototype.keyName = function (value) {
        this.setFlag("--key-name", value);
        return this;
    };
    /** Name of the Batch account. */
    az_batch_account_keys_renew_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of the resource group. */
    az_batch_account_keys_renew_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_batch_account_keys_renew_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_batch_account_keys_renew_command_builder;
}(base_1.CommandBuilder));
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
var az_batch_account_create_command_builder = /** @class */ (function (_super) {
    __extends(az_batch_account_create_command_builder, _super);
    function az_batch_account_create_command_builder(commandPath, resultDataTypeName, location, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.location(location);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The region in which to create the account. */
    az_batch_account_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Name of the Batch account. */
    az_batch_account_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of the resource group. */
    az_batch_account_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Part of the encryption configuration for the Batch account. Full path to the versioned secret. Example <a href="https://mykeyvault.vault.azure.net/keys/testkey/6e34a81fef704045975661e297a4c053">https://mykeyvault.vault.azure.net/keys/testkey/6e34a81fef704045975661e297a4c053</a>. */
    az_batch_account_create_command_builder.prototype.encryptionKeyIdentifier = function (value) {
        this.setFlag("--encryption-key-identifier", value);
        return this;
    };
    /** Part of the encryption configuration for the Batch account. Type of the key source. Can be either Microsoft.Batch or Microsoft.KeyVault. */
    az_batch_account_create_command_builder.prototype.encryptionKeySource = function (value) {
        this.setFlag("--encryption-key-source", value);
        return this;
    };
    /** The type of identity used for the Batch account. */
    az_batch_account_create_command_builder.prototype.identityType = function (value) {
        this.setFlag("--identity-type", value);
        return this;
    };
    /** The KeyVault name or resource ID to be used for an account with a pool allocation mode of 'User Subscription'. */
    az_batch_account_create_command_builder.prototype.keyvault = function (value) {
        this.setFlag("--keyvault", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_batch_account_create_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** The network access type for accessing Azure Batch account. Values can either be enabled or disabled. */
    az_batch_account_create_command_builder.prototype.publicNetworkAccess = function (value) {
        this.setFlag("--public-network-access", value);
        return this;
    };
    /** The storage account name or resource ID to be used for auto storage. */
    az_batch_account_create_command_builder.prototype.storageAccount = function (value) {
        this.setFlag("--storage-account", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_batch_account_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags in 'key[=value]' format. */
    az_batch_account_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_batch_account_create_command_builder;
}(base_1.CommandBuilder));
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
var az_batch_account_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_batch_account_delete_command_builder, _super);
    function az_batch_account_delete_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the Batch account. */
    az_batch_account_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of the resource group. */
    az_batch_account_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_batch_account_delete_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_batch_account_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_batch_account_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_batch_account_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_batch_account_list_command_builder = /** @class */ (function (_super) {
    __extends(az_batch_account_list_command_builder, _super);
    function az_batch_account_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_batch_account_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of the resource group. */
    az_batch_account_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_batch_account_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_batch_account_list_command_builder;
}(base_1.CommandBuilder));
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
var az_batch_account_login_command_builder = /** @class */ (function (_super) {
    __extends(az_batch_account_login_command_builder, _super);
    function az_batch_account_login_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the Batch account. */
    az_batch_account_login_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of the resource group. */
    az_batch_account_login_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Using Shared Key authentication, if not specified, it will use Azure Active Directory authentication. */
    az_batch_account_login_command_builder.prototype.sharedKeyAuth = function (value) {
        this.setFlag("--shared-key-auth", value);
        return this;
    };
    /** Display the credential information for the Batch account. */
    az_batch_account_login_command_builder.prototype.show = function (value) {
        this.setFlag("--show", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_batch_account_login_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_batch_account_login_command_builder;
}(base_1.CommandBuilder));
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
var az_batch_account_set_command_builder = /** @class */ (function (_super) {
    __extends(az_batch_account_set_command_builder, _super);
    function az_batch_account_set_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the Batch account. */
    az_batch_account_set_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of the resource group. */
    az_batch_account_set_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Part of the encryption configuration for the Batch account. Full path to the versioned secret. Example <a href="https://mykeyvault.vault.azure.net/keys/testkey/6e34a81fef704045975661e297a4c053">https://mykeyvault.vault.azure.net/keys/testkey/6e34a81fef704045975661e297a4c053</a>. */
    az_batch_account_set_command_builder.prototype.encryptionKeyIdentifier = function (value) {
        this.setFlag("--encryption-key-identifier", value);
        return this;
    };
    /** Part of the encryption configuration for the Batch account. Type of the key source. Can be either Microsoft.Batch or Microsoft.KeyVault. */
    az_batch_account_set_command_builder.prototype.encryptionKeySource = function (value) {
        this.setFlag("--encryption-key-source", value);
        return this;
    };
    /** The type of identity used for the Batch account. */
    az_batch_account_set_command_builder.prototype.identityType = function (value) {
        this.setFlag("--identity-type", value);
        return this;
    };
    /** The storage account name or resource ID to be used for auto storage. */
    az_batch_account_set_command_builder.prototype.storageAccount = function (value) {
        this.setFlag("--storage-account", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_batch_account_set_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_batch_account_set_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_batch_account_set_command_builder;
}(base_1.CommandBuilder));
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
var az_batch_account_show_command_builder = /** @class */ (function (_super) {
    __extends(az_batch_account_show_command_builder, _super);
    function az_batch_account_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Name of the batch account to show. If not specified will display currently set account. */
    az_batch_account_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_batch_account_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of the resource group. If not specified will display currently set account. */
    az_batch_account_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_batch_account_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_batch_account_show_command_builder;
}(base_1.CommandBuilder));
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
var az_batch_application_package_activate_command_builder = /** @class */ (function (_super) {
    __extends(az_batch_application_package_activate_command_builder, _super);
    function az_batch_application_package_activate_command_builder(commandPath, resultDataTypeName, applicationName, format, name, resourceGroup, versionName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.applicationName(applicationName);
        _this.format(format);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.versionName(versionName);
        return _this;
    }
    /** The name of the application. This must be unique within the account. */
    az_batch_application_package_activate_command_builder.prototype.applicationName = function (value) {
        this.setFlag("--application-name", value);
        return this;
    };
    /** The format of the application package binary file. */
    az_batch_application_package_activate_command_builder.prototype.format = function (value) {
        this.setFlag("--format", value);
        return this;
    };
    /** Name of the Batch account. */
    az_batch_application_package_activate_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of the resource group. */
    az_batch_application_package_activate_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The version of the application. */
    az_batch_application_package_activate_command_builder.prototype.versionName = function (value) {
        this.setFlag("--version-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_batch_application_package_activate_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_batch_application_package_activate_command_builder;
}(base_1.CommandBuilder));
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
var az_batch_application_package_create_command_builder = /** @class */ (function (_super) {
    __extends(az_batch_application_package_create_command_builder, _super);
    function az_batch_application_package_create_command_builder(commandPath, resultDataTypeName, applicationName, name, packageFile, resourceGroup, versionName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.applicationName(applicationName);
        _this.name(name);
        _this.packageFile(packageFile);
        _this.resourceGroup(resourceGroup);
        _this.versionName(versionName);
        return _this;
    }
    /** The name of the application. */
    az_batch_application_package_create_command_builder.prototype.applicationName = function (value) {
        this.setFlag("--application-name", value);
        return this;
    };
    /** Name of the Batch account. */
    az_batch_application_package_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The path of the application package in zip format. */
    az_batch_application_package_create_command_builder.prototype.packageFile = function (value) {
        this.setFlag("--package-file", value);
        return this;
    };
    /** Name of the resource group. */
    az_batch_application_package_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The version name of the application. */
    az_batch_application_package_create_command_builder.prototype.versionName = function (value) {
        this.setFlag("--version-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_batch_application_package_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_batch_application_package_create_command_builder;
}(base_1.CommandBuilder));
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
var az_batch_application_package_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_batch_application_package_delete_command_builder, _super);
    function az_batch_application_package_delete_command_builder(commandPath, resultDataTypeName, applicationName, name, resourceGroup, versionName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.applicationName(applicationName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.versionName(versionName);
        return _this;
    }
    /** The name of the application. This must be unique within the account. */
    az_batch_application_package_delete_command_builder.prototype.applicationName = function (value) {
        this.setFlag("--application-name", value);
        return this;
    };
    /** Name of the Batch account. */
    az_batch_application_package_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of the resource group. */
    az_batch_application_package_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The version of the application. */
    az_batch_application_package_delete_command_builder.prototype.versionName = function (value) {
        this.setFlag("--version-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_batch_application_package_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_batch_application_package_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_batch_application_package_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_batch_application_package_list_command_builder = /** @class */ (function (_super) {
    __extends(az_batch_application_package_list_command_builder, _super);
    function az_batch_application_package_list_command_builder(commandPath, resultDataTypeName, applicationName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.applicationName(applicationName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the application. This must be unique within the account. */
    az_batch_application_package_list_command_builder.prototype.applicationName = function (value) {
        this.setFlag("--application-name", value);
        return this;
    };
    /** Name of the Batch account. */
    az_batch_application_package_list_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of the resource group. */
    az_batch_application_package_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The maximum number of items to return in the response. */
    az_batch_application_package_list_command_builder.prototype.maxresults = function (value) {
        this.setFlag("--maxresults", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_batch_application_package_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_batch_application_package_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_batch_application_package_list_command_builder;
}(base_1.CommandBuilder));
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
var az_batch_application_package_show_command_builder = /** @class */ (function (_super) {
    __extends(az_batch_application_package_show_command_builder, _super);
    function az_batch_application_package_show_command_builder(commandPath, resultDataTypeName, applicationName, name, resourceGroup, versionName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.applicationName(applicationName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.versionName(versionName);
        return _this;
    }
    /** The name of the application. This must be unique within the account. */
    az_batch_application_package_show_command_builder.prototype.applicationName = function (value) {
        this.setFlag("--application-name", value);
        return this;
    };
    /** Name of the Batch account. */
    az_batch_application_package_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of the resource group. */
    az_batch_application_package_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The version of the application. */
    az_batch_application_package_show_command_builder.prototype.versionName = function (value) {
        this.setFlag("--version-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_batch_application_package_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_batch_application_package_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_batch_application_package_show_command_builder;
}(base_1.CommandBuilder));
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
var az_batch_application_summary_list_command_builder = /** @class */ (function (_super) {
    __extends(az_batch_application_summary_list_command_builder, _super);
    function az_batch_application_summary_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    az_batch_application_summary_list_command_builder.prototype.accountEndpoint = function (value) {
        this.setFlag("--account-endpoint", value);
        return this;
    };
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    az_batch_application_summary_list_command_builder.prototype.accountKey = function (value) {
        this.setFlag("--account-key", value);
        return this;
    };
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    az_batch_application_summary_list_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_batch_application_summary_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_batch_application_summary_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_batch_application_summary_list_command_builder;
}(base_1.CommandBuilder));
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
var az_batch_application_summary_show_command_builder = /** @class */ (function (_super) {
    __extends(az_batch_application_summary_show_command_builder, _super);
    function az_batch_application_summary_show_command_builder(commandPath, resultDataTypeName, applicationId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.applicationId(applicationId);
        return _this;
    }
    /** The ID of the Application. */
    az_batch_application_summary_show_command_builder.prototype.applicationId = function (value) {
        this.setFlag("--application-id", value);
        return this;
    };
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    az_batch_application_summary_show_command_builder.prototype.accountEndpoint = function (value) {
        this.setFlag("--account-endpoint", value);
        return this;
    };
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    az_batch_application_summary_show_command_builder.prototype.accountKey = function (value) {
        this.setFlag("--account-key", value);
        return this;
    };
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    az_batch_application_summary_show_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_batch_application_summary_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_batch_application_summary_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_batch_application_summary_show_command_builder;
}(base_1.CommandBuilder));
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
var az_batch_application_create_command_builder = /** @class */ (function (_super) {
    __extends(az_batch_application_create_command_builder, _super);
    function az_batch_application_create_command_builder(commandPath, resultDataTypeName, applicationName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.applicationName(applicationName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the application. This must be unique within the account. */
    az_batch_application_create_command_builder.prototype.applicationName = function (value) {
        this.setFlag("--application-name", value);
        return this;
    };
    /** Name of the Batch account. */
    az_batch_application_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of the resource group. */
    az_batch_application_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The parameters for the request. */
    az_batch_application_create_command_builder.prototype.parameters = function (value) {
        this.setFlag("--parameters", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_batch_application_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_batch_application_create_command_builder;
}(base_1.CommandBuilder));
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
var az_batch_application_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_batch_application_delete_command_builder, _super);
    function az_batch_application_delete_command_builder(commandPath, resultDataTypeName, applicationName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.applicationName(applicationName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the application. This must be unique within the account. */
    az_batch_application_delete_command_builder.prototype.applicationName = function (value) {
        this.setFlag("--application-name", value);
        return this;
    };
    /** Name of the Batch account. */
    az_batch_application_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of the resource group. */
    az_batch_application_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_batch_application_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_batch_application_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_batch_application_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_batch_application_list_command_builder = /** @class */ (function (_super) {
    __extends(az_batch_application_list_command_builder, _super);
    function az_batch_application_list_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the Batch account. */
    az_batch_application_list_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of the resource group. */
    az_batch_application_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The maximum number of items to return in the response. */
    az_batch_application_list_command_builder.prototype.maxresults = function (value) {
        this.setFlag("--maxresults", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_batch_application_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_batch_application_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_batch_application_list_command_builder;
}(base_1.CommandBuilder));
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
var az_batch_application_set_command_builder = /** @class */ (function (_super) {
    __extends(az_batch_application_set_command_builder, _super);
    function az_batch_application_set_command_builder(commandPath, resultDataTypeName, applicationName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.applicationName(applicationName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the application. */
    az_batch_application_set_command_builder.prototype.applicationName = function (value) {
        this.setFlag("--application-name", value);
        return this;
    };
    /** Name of the Batch account. */
    az_batch_application_set_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of the resource group. */
    az_batch_application_set_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Specify to indicate whether packages within the application may be overwritten using the same version string. Specify either 'true' or 'false' to update the property. */
    az_batch_application_set_command_builder.prototype.allowUpdates = function (value) {
        this.setFlag("--allow-updates", value);
        return this;
    };
    /** The package to use if a client requests the application but does not specify a version. This property can only be set to the name of an existing package. */
    az_batch_application_set_command_builder.prototype.defaultVersion = function (value) {
        this.setFlag("--default-version", value);
        return this;
    };
    /** The display name for the application. */
    az_batch_application_set_command_builder.prototype.displayName = function (value) {
        this.setFlag("--display-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_batch_application_set_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_batch_application_set_command_builder;
}(base_1.CommandBuilder));
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
var az_batch_application_show_command_builder = /** @class */ (function (_super) {
    __extends(az_batch_application_show_command_builder, _super);
    function az_batch_application_show_command_builder(commandPath, resultDataTypeName, applicationName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.applicationName(applicationName);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the application. This must be unique within the account. */
    az_batch_application_show_command_builder.prototype.applicationName = function (value) {
        this.setFlag("--application-name", value);
        return this;
    };
    /** Name of the Batch account. */
    az_batch_application_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of the resource group. */
    az_batch_application_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_batch_application_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_batch_application_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_batch_application_show_command_builder;
}(base_1.CommandBuilder));
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
var az_batch_certificate_create_command_builder = /** @class */ (function (_super) {
    __extends(az_batch_certificate_create_command_builder, _super);
    function az_batch_certificate_create_command_builder(commandPath, resultDataTypeName, certificateFile, thumbprint) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.certificateFile(certificateFile);
        _this.thumbprint(thumbprint);
        return _this;
    }
    /** The certificate file: cer file or pfx file. */
    az_batch_certificate_create_command_builder.prototype.certificateFile = function (value) {
        this.setFlag("--certificate-file", value);
        return this;
    };
    /** The certificate thumbprint. */
    az_batch_certificate_create_command_builder.prototype.thumbprint = function (value) {
        this.setFlag("--thumbprint", value);
        return this;
    };
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    az_batch_certificate_create_command_builder.prototype.accountEndpoint = function (value) {
        this.setFlag("--account-endpoint", value);
        return this;
    };
    /** The Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    az_batch_certificate_create_command_builder.prototype.accountKey = function (value) {
        this.setFlag("--account-key", value);
        return this;
    };
    /** The Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    az_batch_certificate_create_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** The password to access the certificate's private key. */
    az_batch_certificate_create_command_builder.prototype.password = function (value) {
        this.setFlag("--password", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_batch_certificate_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_batch_certificate_create_command_builder;
}(base_1.CommandBuilder));
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
var az_batch_certificate_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_batch_certificate_delete_command_builder, _super);
    function az_batch_certificate_delete_command_builder(commandPath, resultDataTypeName, thumbprint) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.thumbprint(thumbprint);
        return _this;
    }
    /** The certificate thumbprint. */
    az_batch_certificate_delete_command_builder.prototype.thumbprint = function (value) {
        this.setFlag("--thumbprint", value);
        return this;
    };
    /** Cancel the failed certificate deletion operation. */
    az_batch_certificate_delete_command_builder.prototype.abort = function (value) {
        this.setFlag("--abort", value);
        return this;
    };
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    az_batch_certificate_delete_command_builder.prototype.accountEndpoint = function (value) {
        this.setFlag("--account-endpoint", value);
        return this;
    };
    /** The Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    az_batch_certificate_delete_command_builder.prototype.accountKey = function (value) {
        this.setFlag("--account-key", value);
        return this;
    };
    /** The Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    az_batch_certificate_delete_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_batch_certificate_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_batch_certificate_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_batch_certificate_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_batch_certificate_list_command_builder = /** @class */ (function (_super) {
    __extends(az_batch_certificate_list_command_builder, _super);
    function az_batch_certificate_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    az_batch_certificate_list_command_builder.prototype.accountEndpoint = function (value) {
        this.setFlag("--account-endpoint", value);
        return this;
    };
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    az_batch_certificate_list_command_builder.prototype.accountKey = function (value) {
        this.setFlag("--account-key", value);
        return this;
    };
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    az_batch_certificate_list_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** An OData $filter clause. For more information on constructing this filter, see <a href="https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-certificates">https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-certificates</a>. */
    az_batch_certificate_list_command_builder.prototype.filter = function (value) {
        this.setFlag("--filter", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_batch_certificate_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** An OData $select clause. */
    az_batch_certificate_list_command_builder.prototype.select = function (value) {
        this.setFlag("--select", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_batch_certificate_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_batch_certificate_list_command_builder;
}(base_1.CommandBuilder));
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
var az_batch_certificate_show_command_builder = /** @class */ (function (_super) {
    __extends(az_batch_certificate_show_command_builder, _super);
    function az_batch_certificate_show_command_builder(commandPath, resultDataTypeName, thumbprint) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.thumbprint(thumbprint);
        return _this;
    }
    /** The certificate thumbprint. */
    az_batch_certificate_show_command_builder.prototype.thumbprint = function (value) {
        this.setFlag("--thumbprint", value);
        return this;
    };
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    az_batch_certificate_show_command_builder.prototype.accountEndpoint = function (value) {
        this.setFlag("--account-endpoint", value);
        return this;
    };
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    az_batch_certificate_show_command_builder.prototype.accountKey = function (value) {
        this.setFlag("--account-key", value);
        return this;
    };
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    az_batch_certificate_show_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_batch_certificate_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** An OData $select clause. */
    az_batch_certificate_show_command_builder.prototype.select = function (value) {
        this.setFlag("--select", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_batch_certificate_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_batch_certificate_show_command_builder;
}(base_1.CommandBuilder));
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
var az_batch_job_all_statistics_show_command_builder = /** @class */ (function (_super) {
    __extends(az_batch_job_all_statistics_show_command_builder, _super);
    function az_batch_job_all_statistics_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    az_batch_job_all_statistics_show_command_builder.prototype.accountEndpoint = function (value) {
        this.setFlag("--account-endpoint", value);
        return this;
    };
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    az_batch_job_all_statistics_show_command_builder.prototype.accountKey = function (value) {
        this.setFlag("--account-key", value);
        return this;
    };
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    az_batch_job_all_statistics_show_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_batch_job_all_statistics_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_batch_job_all_statistics_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_batch_job_all_statistics_show_command_builder;
}(base_1.CommandBuilder));
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
var az_batch_job_prep_release_status_list_command_builder = /** @class */ (function (_super) {
    __extends(az_batch_job_prep_release_status_list_command_builder, _super);
    function az_batch_job_prep_release_status_list_command_builder(commandPath, resultDataTypeName, jobId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.jobId(jobId);
        return _this;
    }
    /** The ID of the Job. */
    az_batch_job_prep_release_status_list_command_builder.prototype.jobId = function (value) {
        this.setFlag("--job-id", value);
        return this;
    };
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    az_batch_job_prep_release_status_list_command_builder.prototype.accountEndpoint = function (value) {
        this.setFlag("--account-endpoint", value);
        return this;
    };
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    az_batch_job_prep_release_status_list_command_builder.prototype.accountKey = function (value) {
        this.setFlag("--account-key", value);
        return this;
    };
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    az_batch_job_prep_release_status_list_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** An OData $filter clause. For more information on constructing this filter, see <a href="https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-job-preparation-and-release-status">https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-job-preparation-and-release-status</a>. */
    az_batch_job_prep_release_status_list_command_builder.prototype.filter = function (value) {
        this.setFlag("--filter", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_batch_job_prep_release_status_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** An OData $select clause. */
    az_batch_job_prep_release_status_list_command_builder.prototype.select = function (value) {
        this.setFlag("--select", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_batch_job_prep_release_status_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_batch_job_prep_release_status_list_command_builder;
}(base_1.CommandBuilder));
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
var az_batch_job_task_counts_show_command_builder = /** @class */ (function (_super) {
    __extends(az_batch_job_task_counts_show_command_builder, _super);
    function az_batch_job_task_counts_show_command_builder(commandPath, resultDataTypeName, jobId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.jobId(jobId);
        return _this;
    }
    /** The ID of the Job. */
    az_batch_job_task_counts_show_command_builder.prototype.jobId = function (value) {
        this.setFlag("--job-id", value);
        return this;
    };
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    az_batch_job_task_counts_show_command_builder.prototype.accountEndpoint = function (value) {
        this.setFlag("--account-endpoint", value);
        return this;
    };
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    az_batch_job_task_counts_show_command_builder.prototype.accountKey = function (value) {
        this.setFlag("--account-key", value);
        return this;
    };
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    az_batch_job_task_counts_show_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_batch_job_task_counts_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_batch_job_task_counts_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_batch_job_task_counts_show_command_builder;
}(base_1.CommandBuilder));
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
var az_batch_job_schedule_create_command_builder = /** @class */ (function (_super) {
    __extends(az_batch_job_schedule_create_command_builder, _super);
    function az_batch_job_schedule_create_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    az_batch_job_schedule_create_command_builder.prototype.accountEndpoint = function (value) {
        this.setFlag("--account-endpoint", value);
        return this;
    };
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    az_batch_job_schedule_create_command_builder.prototype.accountKey = function (value) {
        this.setFlag("--account-key", value);
        return this;
    };
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    az_batch_job_schedule_create_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** A time after which no Job will be created under this Job Schedule. The schedule will move to the completed state as soon as this deadline is past and there is no active Job under this Job Schedule. If you do not specify a doNotRunAfter time, and you are creating a recurring Job Schedule, the Job Schedule will remain active until you explicitly terminate it. Expected format is an ISO-8601 timestamp. */
    az_batch_job_schedule_create_command_builder.prototype.doNotRunAfter = function (value) {
        this.setFlag("--do-not-run-after", value);
        return this;
    };
    /** The earliest time at which any Job may be created under this Job Schedule. If you do not specify a doNotRunUntil time, the schedule becomes ready to create Jobs immediately. Expected format is an ISO-8601 timestamp. */
    az_batch_job_schedule_create_command_builder.prototype.doNotRunUntil = function (value) {
        this.setFlag("--do-not-run-until", value);
        return this;
    };
    /** Required. A string that uniquely identifies the schedule within the Account. The ID can contain any combination of alphanumeric characters including hyphens and underscores, and cannot contain more than 64 characters. The ID is case-preserving and case-insensitive (that is, you may not have two IDs within an Account that differ only by case). */
    az_batch_job_schedule_create_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Required. The command line of the Job Manager Task. The command line does not run under a shell, and therefore cannot take advantage of shell features such as environment variable expansion. If you want to take advantage of such features, you should invoke the shell in the command line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux. If the command line refers to file paths, it should use a relative path (relative to the Task working directory), or use the Batch provided environment variable (<a href="https://docs.microsoft.com/en-us/azure/batch/batch-compute-node-environment-variables">https://docs.microsoft.com/en-us/azure/batch/batch-compute-node-environment-variables</a>). */
    az_batch_job_schedule_create_command_builder.prototype.jobManagerTaskCommandLine = function (value) {
        this.setFlag("--job-manager-task-command-line", value);
        return this;
    };
    /** Required. A string that uniquely identifies the Job Manager Task within the Job. The ID can contain any combination of alphanumeric characters including hyphens and underscores and cannot contain more than 64 characters. */
    az_batch_job_schedule_create_command_builder.prototype.jobManagerTaskId = function (value) {
        this.setFlag("--job-manager-task-id", value);
        return this;
    };
    /** A list of files that the Batch service will download to the Compute Node before running the command line. Files listed under this element are located in the Task's working directory. There is a maximum size for the list of resource files.  When the max size is exceeded, the request will fail and the response error code will be RequestEntityTooLarge. If this occurs, the collection of ResourceFiles must be reduced in size. This can be achieved using .zip files, Application Packages, or Docker Containers. Space-separated resource references in filename=httpurl format. */
    az_batch_job_schedule_create_command_builder.prototype.jobManagerTaskResourceFiles = function (value) {
        this.setFlag("--job-manager-task-resource-files", value);
        return this;
    };
    /** The maximum number of times each Task may be retried. The Batch service retries a Task if its exit code is nonzero. Note that this value specifically controls the number of retries. The Batch service will try each Task once, and may then retry up to this limit. For example, if the maximum retry count is 3, Batch tries a Task up to 4 times (one initial try and 3 retries). If the maximum retry count is 0, the Batch service does not retry Tasks. If the maximum retry count is -1, the Batch service retries Tasks without limit. The default value is 0 (no retries). */
    az_batch_job_schedule_create_command_builder.prototype.jobMaxTaskRetryCount = function (value) {
        this.setFlag("--job-max-task-retry-count", value);
        return this;
    };
    /** The maximum elapsed time that the Job may run, measured from the time the Job is created. If the Job does not complete within the time limit, the Batch service terminates it and any Tasks that are still running. In this case, the termination reason will be MaxWallClockTimeExpiry. If this property is not specified, there is no time limit on how long the Job may run. Expected format is an ISO-8601 duration. */
    az_batch_job_schedule_create_command_builder.prototype.jobMaxWallClockTime = function (value) {
        this.setFlag("--job-max-wall-clock-time", value);
        return this;
    };
    /** A file containing the cloud job schedule specification in JSON (formatted to match the respective REST API body). If this parameter is specified, all 'Cloud Job Schedule Arguments' are ignored. */
    az_batch_job_schedule_create_command_builder.prototype.jsonFile = function (value) {
        this.setFlag("--json-file", value);
        return this;
    };
    /** A list of name-value pairs associated with the schedule as metadata. The Batch service does not assign any meaning to metadata; it is solely for the use of user code. Space-separated values in 'key=value' format. */
    az_batch_job_schedule_create_command_builder.prototype.metadata = function (value) {
        this.setFlag("--metadata", value);
        return this;
    };
    /** The action the Batch service should take when all Tasks in a Job created under this schedule are in the completed state. Note that if a Job contains no Tasks, then all Tasks are considered complete. This option is therefore most commonly used with a Job Manager task; if you want to use automatic Job termination without a Job Manager, you should initially set onAllTasksComplete to noaction and update the Job properties to set onAllTasksComplete to terminatejob once you have finished adding Tasks. The default is noaction. */
    az_batch_job_schedule_create_command_builder.prototype.onAllTasksComplete = function (value) {
        this.setFlag("--on-all-tasks-complete", value);
        return this;
    };
    /** The id of an existing pool. All the tasks of the job will run on the specified pool. */
    az_batch_job_schedule_create_command_builder.prototype.poolId = function (value) {
        this.setFlag("--pool-id", value);
        return this;
    };
    /** The priority of Jobs created under this schedule. Priority values can range from -1000 to 1000, with -1000 being the lowest priority and 1000 being the highest priority. The default value is 0. This priority is used as the default for all Jobs under the Job Schedule. You can update a Job's priority after it has been created using by using the update Job API. */
    az_batch_job_schedule_create_command_builder.prototype.priority = function (value) {
        this.setFlag("--priority", value);
        return this;
    };
    /** The time interval between the start times of two successive Jobs under the Job Schedule. A Job Schedule can have at most one active Job under it at any given time. Because a Job Schedule can have at most one active Job under it at any given time, if it is time to create a new Job under a Job Schedule, but the previous Job is still running, the Batch service will not create the new Job until the previous Job finishes. If the previous Job does not finish within the startWindow period of the new recurrenceInterval, then no new Job will be scheduled for that interval. For recurring Jobs, you should normally specify a jobManagerTask in the jobSpecification. If you do not use jobManagerTask, you will need an external process to monitor when Jobs are created, add Tasks to the Jobs and terminate the Jobs ready for the next recurrence. The default is that the schedule does not recur: one Job is created, within the startWindow after the doNotRunUntil time, and the schedule is complete as soon as that Job finishes. The minimum value is 1 minute. If you specify a lower value, the Batch service rejects the schedule with an error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). Expected format is an ISO-8601 duration. */
    az_batch_job_schedule_create_command_builder.prototype.recurrenceInterval = function (value) {
        this.setFlag("--recurrence-interval", value);
        return this;
    };
    /** The time interval, starting from the time at which the schedule indicates a Job should be created, within which a Job must be created. If a Job is not created within the startWindow interval, then the 'opportunity' is lost; no Job will be created until the next recurrence of the schedule. If the schedule is recurring, and the startWindow is longer than the recurrence interval, then this is equivalent to an infinite startWindow, because the Job that is 'due' in one recurrenceInterval is not carried forward into the next recurrence interval. The default is infinite. The minimum value is 1 minute. If you specify a lower value, the Batch service rejects the schedule with an error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). Expected format is an ISO-8601 duration. */
    az_batch_job_schedule_create_command_builder.prototype.startWindow = function (value) {
        this.setFlag("--start-window", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_batch_job_schedule_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Whether Tasks in the Job can define dependencies on each other. The default is false. True if flag present. */
    az_batch_job_schedule_create_command_builder.prototype.usesTaskDependencies = function (value) {
        this.setFlag("--uses-task-dependencies", value);
        return this;
    };
    return az_batch_job_schedule_create_command_builder;
}(base_1.CommandBuilder));
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
var az_batch_job_schedule_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_batch_job_schedule_delete_command_builder, _super);
    function az_batch_job_schedule_delete_command_builder(commandPath, resultDataTypeName, jobScheduleId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.jobScheduleId(jobScheduleId);
        return _this;
    }
    /** The ID of the Job Schedule to delete. */
    az_batch_job_schedule_delete_command_builder.prototype.jobScheduleId = function (value) {
        this.setFlag("--job-schedule-id", value);
        return this;
    };
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    az_batch_job_schedule_delete_command_builder.prototype.accountEndpoint = function (value) {
        this.setFlag("--account-endpoint", value);
        return this;
    };
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    az_batch_job_schedule_delete_command_builder.prototype.accountKey = function (value) {
        this.setFlag("--account-key", value);
        return this;
    };
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    az_batch_job_schedule_delete_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client. */
    az_batch_job_schedule_delete_command_builder.prototype.ifMatch = function (value) {
        this.setFlag("--if-match", value);
        return this;
    };
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. */
    az_batch_job_schedule_delete_command_builder.prototype.ifModifiedSince = function (value) {
        this.setFlag("--if-modified-since", value);
        return this;
    };
    /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client. */
    az_batch_job_schedule_delete_command_builder.prototype.ifNoneMatch = function (value) {
        this.setFlag("--if-none-match", value);
        return this;
    };
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. */
    az_batch_job_schedule_delete_command_builder.prototype.ifUnmodifiedSince = function (value) {
        this.setFlag("--if-unmodified-since", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_batch_job_schedule_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_batch_job_schedule_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_batch_job_schedule_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_batch_job_schedule_disable_command_builder = /** @class */ (function (_super) {
    __extends(az_batch_job_schedule_disable_command_builder, _super);
    function az_batch_job_schedule_disable_command_builder(commandPath, resultDataTypeName, jobScheduleId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.jobScheduleId(jobScheduleId);
        return _this;
    }
    /** The ID of the Job Schedule to disable. */
    az_batch_job_schedule_disable_command_builder.prototype.jobScheduleId = function (value) {
        this.setFlag("--job-schedule-id", value);
        return this;
    };
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    az_batch_job_schedule_disable_command_builder.prototype.accountEndpoint = function (value) {
        this.setFlag("--account-endpoint", value);
        return this;
    };
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    az_batch_job_schedule_disable_command_builder.prototype.accountKey = function (value) {
        this.setFlag("--account-key", value);
        return this;
    };
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    az_batch_job_schedule_disable_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client. */
    az_batch_job_schedule_disable_command_builder.prototype.ifMatch = function (value) {
        this.setFlag("--if-match", value);
        return this;
    };
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. */
    az_batch_job_schedule_disable_command_builder.prototype.ifModifiedSince = function (value) {
        this.setFlag("--if-modified-since", value);
        return this;
    };
    /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client. */
    az_batch_job_schedule_disable_command_builder.prototype.ifNoneMatch = function (value) {
        this.setFlag("--if-none-match", value);
        return this;
    };
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. */
    az_batch_job_schedule_disable_command_builder.prototype.ifUnmodifiedSince = function (value) {
        this.setFlag("--if-unmodified-since", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_batch_job_schedule_disable_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_batch_job_schedule_disable_command_builder;
}(base_1.CommandBuilder));
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
var az_batch_job_schedule_enable_command_builder = /** @class */ (function (_super) {
    __extends(az_batch_job_schedule_enable_command_builder, _super);
    function az_batch_job_schedule_enable_command_builder(commandPath, resultDataTypeName, jobScheduleId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.jobScheduleId(jobScheduleId);
        return _this;
    }
    /** The ID of the Job Schedule to enable. */
    az_batch_job_schedule_enable_command_builder.prototype.jobScheduleId = function (value) {
        this.setFlag("--job-schedule-id", value);
        return this;
    };
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    az_batch_job_schedule_enable_command_builder.prototype.accountEndpoint = function (value) {
        this.setFlag("--account-endpoint", value);
        return this;
    };
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    az_batch_job_schedule_enable_command_builder.prototype.accountKey = function (value) {
        this.setFlag("--account-key", value);
        return this;
    };
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    az_batch_job_schedule_enable_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client. */
    az_batch_job_schedule_enable_command_builder.prototype.ifMatch = function (value) {
        this.setFlag("--if-match", value);
        return this;
    };
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. */
    az_batch_job_schedule_enable_command_builder.prototype.ifModifiedSince = function (value) {
        this.setFlag("--if-modified-since", value);
        return this;
    };
    /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client. */
    az_batch_job_schedule_enable_command_builder.prototype.ifNoneMatch = function (value) {
        this.setFlag("--if-none-match", value);
        return this;
    };
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. */
    az_batch_job_schedule_enable_command_builder.prototype.ifUnmodifiedSince = function (value) {
        this.setFlag("--if-unmodified-since", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_batch_job_schedule_enable_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_batch_job_schedule_enable_command_builder;
}(base_1.CommandBuilder));
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
var az_batch_job_schedule_list_command_builder = /** @class */ (function (_super) {
    __extends(az_batch_job_schedule_list_command_builder, _super);
    function az_batch_job_schedule_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    az_batch_job_schedule_list_command_builder.prototype.accountEndpoint = function (value) {
        this.setFlag("--account-endpoint", value);
        return this;
    };
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    az_batch_job_schedule_list_command_builder.prototype.accountKey = function (value) {
        this.setFlag("--account-key", value);
        return this;
    };
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    az_batch_job_schedule_list_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** An OData $expand clause. */
    az_batch_job_schedule_list_command_builder.prototype.expand = function (value) {
        this.setFlag("--expand", value);
        return this;
    };
    /** An OData $filter clause. For more information on constructing this filter, see <a href="https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-job-schedules">https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-job-schedules</a>. */
    az_batch_job_schedule_list_command_builder.prototype.filter = function (value) {
        this.setFlag("--filter", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_batch_job_schedule_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** An OData $select clause. */
    az_batch_job_schedule_list_command_builder.prototype.select = function (value) {
        this.setFlag("--select", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_batch_job_schedule_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_batch_job_schedule_list_command_builder;
}(base_1.CommandBuilder));
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
var az_batch_job_schedule_reset_command_builder = /** @class */ (function (_super) {
    __extends(az_batch_job_schedule_reset_command_builder, _super);
    function az_batch_job_schedule_reset_command_builder(commandPath, resultDataTypeName, jobScheduleId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.jobScheduleId(jobScheduleId);
        return _this;
    }
    /** The ID of the Job Schedule to update. */
    az_batch_job_schedule_reset_command_builder.prototype.jobScheduleId = function (value) {
        this.setFlag("--job-schedule-id", value);
        return this;
    };
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    az_batch_job_schedule_reset_command_builder.prototype.accountEndpoint = function (value) {
        this.setFlag("--account-endpoint", value);
        return this;
    };
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    az_batch_job_schedule_reset_command_builder.prototype.accountKey = function (value) {
        this.setFlag("--account-key", value);
        return this;
    };
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    az_batch_job_schedule_reset_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** A time after which no Job will be created under this Job Schedule. The schedule will move to the completed state as soon as this deadline is past and there is no active Job under this Job Schedule. If you do not specify a doNotRunAfter time, and you are creating a recurring Job Schedule, the Job Schedule will remain active until you explicitly terminate it. Expected format is an ISO-8601 timestamp. */
    az_batch_job_schedule_reset_command_builder.prototype.doNotRunAfter = function (value) {
        this.setFlag("--do-not-run-after", value);
        return this;
    };
    /** The earliest time at which any Job may be created under this Job Schedule. If you do not specify a doNotRunUntil time, the schedule becomes ready to create Jobs immediately. Expected format is an ISO-8601 timestamp. */
    az_batch_job_schedule_reset_command_builder.prototype.doNotRunUntil = function (value) {
        this.setFlag("--do-not-run-until", value);
        return this;
    };
    /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client. */
    az_batch_job_schedule_reset_command_builder.prototype.ifMatch = function (value) {
        this.setFlag("--if-match", value);
        return this;
    };
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. */
    az_batch_job_schedule_reset_command_builder.prototype.ifModifiedSince = function (value) {
        this.setFlag("--if-modified-since", value);
        return this;
    };
    /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client. */
    az_batch_job_schedule_reset_command_builder.prototype.ifNoneMatch = function (value) {
        this.setFlag("--if-none-match", value);
        return this;
    };
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. */
    az_batch_job_schedule_reset_command_builder.prototype.ifUnmodifiedSince = function (value) {
        this.setFlag("--if-unmodified-since", value);
        return this;
    };
    /** A list of Application Packages that the Batch service will deploy to the Compute Node before running the command line. Application Packages are downloaded and deployed to a shared directory, not the Task working directory. Therefore, if a referenced Application Package is already on the Compute Node, and is up to date, then it is not re-downloaded; the existing copy on the Compute Node is used. If a referenced Application Package cannot be installed, for example because the package has been deleted or because download failed, the Task fails. Space-separated application IDs with optional version in 'id[#version]' format. */
    az_batch_job_schedule_reset_command_builder.prototype.jobManagerTaskApplicationPackageReferences = function (value) {
        this.setFlag("--job-manager-task-application-package-references", value);
        return this;
    };
    /** Required. The command line of the Job Manager Task. The command line does not run under a shell, and therefore cannot take advantage of shell features such as environment variable expansion. If you want to take advantage of such features, you should invoke the shell in the command line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux. If the command line refers to file paths, it should use a relative path (relative to the Task working directory), or use the Batch provided environment variable (<a href="https://docs.microsoft.com/en-us/azure/batch/batch-compute-node-environment-variables">https://docs.microsoft.com/en-us/azure/batch/batch-compute-node-environment-variables</a>). */
    az_batch_job_schedule_reset_command_builder.prototype.jobManagerTaskCommandLine = function (value) {
        this.setFlag("--job-manager-task-command-line", value);
        return this;
    };
    /** A list of environment variable settings for the Job Manager Task. Space-separated values in 'key=value' format. */
    az_batch_job_schedule_reset_command_builder.prototype.jobManagerTaskEnvironmentSettings = function (value) {
        this.setFlag("--job-manager-task-environment-settings", value);
        return this;
    };
    /** Required. A string that uniquely identifies the Job Manager Task within the Job. The ID can contain any combination of alphanumeric characters including hyphens and underscores and cannot contain more than 64 characters. */
    az_batch_job_schedule_reset_command_builder.prototype.jobManagerTaskId = function (value) {
        this.setFlag("--job-manager-task-id", value);
        return this;
    };
    /** A list of files that the Batch service will download to the Compute Node before running the command line. Files listed under this element are located in the Task's working directory. There is a maximum size for the list of resource files.  When the max size is exceeded, the request will fail and the response error code will be RequestEntityTooLarge. If this occurs, the collection of ResourceFiles must be reduced in size. This can be achieved using .zip files, Application Packages, or Docker Containers. Space-separated resource references in filename=httpurl format. */
    az_batch_job_schedule_reset_command_builder.prototype.jobManagerTaskResourceFiles = function (value) {
        this.setFlag("--job-manager-task-resource-files", value);
        return this;
    };
    /** A list of name-value pairs associated with each Job created under this schedule as metadata. The Batch service does not assign any meaning to metadata; it is solely for the use of user code. Space-separated values in 'key=value' format. */
    az_batch_job_schedule_reset_command_builder.prototype.jobMetadata = function (value) {
        this.setFlag("--job-metadata", value);
        return this;
    };
    /** A file containing the job schedule update parameter specification in JSON (formatted to match the respective REST API body). If this parameter is specified, all 'Job Schedule Arguments' are ignored. */
    az_batch_job_schedule_reset_command_builder.prototype.jsonFile = function (value) {
        this.setFlag("--json-file", value);
        return this;
    };
    /** A list of name-value pairs associated with the Job Schedule as metadata. If you do not specify this element, it takes the default value of an empty list; in effect, any existing metadata is deleted. Space-separated values in 'key=value' format. */
    az_batch_job_schedule_reset_command_builder.prototype.metadata = function (value) {
        this.setFlag("--metadata", value);
        return this;
    };
    /** The action the Batch service should take when all Tasks in a Job created under this schedule are in the completed state. Note that if a Job contains no Tasks, then all Tasks are considered complete. This option is therefore most commonly used with a Job Manager task; if you want to use automatic Job termination without a Job Manager, you should initially set onAllTasksComplete to noaction and update the Job properties to set onAllTasksComplete to terminatejob once you have finished adding Tasks. The default is noaction. */
    az_batch_job_schedule_reset_command_builder.prototype.onAllTasksComplete = function (value) {
        this.setFlag("--on-all-tasks-complete", value);
        return this;
    };
    /** The id of an existing pool. All the tasks of the job will run on the specified pool. */
    az_batch_job_schedule_reset_command_builder.prototype.poolId = function (value) {
        this.setFlag("--pool-id", value);
        return this;
    };
    /** The priority of Jobs created under this schedule. Priority values can range from -1000 to 1000, with -1000 being the lowest priority and 1000 being the highest priority. The default value is 0. This priority is used as the default for all Jobs under the Job Schedule. You can update a Job's priority after it has been created using by using the update Job API. */
    az_batch_job_schedule_reset_command_builder.prototype.priority = function (value) {
        this.setFlag("--priority", value);
        return this;
    };
    /** The time interval between the start times of two successive Jobs under the Job Schedule. A Job Schedule can have at most one active Job under it at any given time. Because a Job Schedule can have at most one active Job under it at any given time, if it is time to create a new Job under a Job Schedule, but the previous Job is still running, the Batch service will not create the new Job until the previous Job finishes. If the previous Job does not finish within the startWindow period of the new recurrenceInterval, then no new Job will be scheduled for that interval. For recurring Jobs, you should normally specify a jobManagerTask in the jobSpecification. If you do not use jobManagerTask, you will need an external process to monitor when Jobs are created, add Tasks to the Jobs and terminate the Jobs ready for the next recurrence. The default is that the schedule does not recur: one Job is created, within the startWindow after the doNotRunUntil time, and the schedule is complete as soon as that Job finishes. The minimum value is 1 minute. If you specify a lower value, the Batch service rejects the schedule with an error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). Expected format is an ISO-8601 duration. */
    az_batch_job_schedule_reset_command_builder.prototype.recurrenceInterval = function (value) {
        this.setFlag("--recurrence-interval", value);
        return this;
    };
    /** The time interval, starting from the time at which the schedule indicates a Job should be created, within which a Job must be created. If a Job is not created within the startWindow interval, then the 'opportunity' is lost; no Job will be created until the next recurrence of the schedule. If the schedule is recurring, and the startWindow is longer than the recurrence interval, then this is equivalent to an infinite startWindow, because the Job that is 'due' in one recurrenceInterval is not carried forward into the next recurrence interval. The default is infinite. The minimum value is 1 minute. If you specify a lower value, the Batch service rejects the schedule with an error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). Expected format is an ISO-8601 duration. */
    az_batch_job_schedule_reset_command_builder.prototype.startWindow = function (value) {
        this.setFlag("--start-window", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_batch_job_schedule_reset_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Whether Tasks in the Job can define dependencies on each other. The default is false. True if flag present. */
    az_batch_job_schedule_reset_command_builder.prototype.usesTaskDependencies = function (value) {
        this.setFlag("--uses-task-dependencies", value);
        return this;
    };
    return az_batch_job_schedule_reset_command_builder;
}(base_1.CommandBuilder));
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
var az_batch_job_schedule_set_command_builder = /** @class */ (function (_super) {
    __extends(az_batch_job_schedule_set_command_builder, _super);
    function az_batch_job_schedule_set_command_builder(commandPath, resultDataTypeName, jobScheduleId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.jobScheduleId(jobScheduleId);
        return _this;
    }
    /** The ID of the Job Schedule to update. */
    az_batch_job_schedule_set_command_builder.prototype.jobScheduleId = function (value) {
        this.setFlag("--job-schedule-id", value);
        return this;
    };
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    az_batch_job_schedule_set_command_builder.prototype.accountEndpoint = function (value) {
        this.setFlag("--account-endpoint", value);
        return this;
    };
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    az_batch_job_schedule_set_command_builder.prototype.accountKey = function (value) {
        this.setFlag("--account-key", value);
        return this;
    };
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    az_batch_job_schedule_set_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** A time after which no Job will be created under this Job Schedule. The schedule will move to the completed state as soon as this deadline is past and there is no active Job under this Job Schedule. If you do not specify a doNotRunAfter time, and you are creating a recurring Job Schedule, the Job Schedule will remain active until you explicitly terminate it. Expected format is an ISO-8601 timestamp. */
    az_batch_job_schedule_set_command_builder.prototype.doNotRunAfter = function (value) {
        this.setFlag("--do-not-run-after", value);
        return this;
    };
    /** The earliest time at which any Job may be created under this Job Schedule. If you do not specify a doNotRunUntil time, the schedule becomes ready to create Jobs immediately. Expected format is an ISO-8601 timestamp. */
    az_batch_job_schedule_set_command_builder.prototype.doNotRunUntil = function (value) {
        this.setFlag("--do-not-run-until", value);
        return this;
    };
    /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client. */
    az_batch_job_schedule_set_command_builder.prototype.ifMatch = function (value) {
        this.setFlag("--if-match", value);
        return this;
    };
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. */
    az_batch_job_schedule_set_command_builder.prototype.ifModifiedSince = function (value) {
        this.setFlag("--if-modified-since", value);
        return this;
    };
    /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client. */
    az_batch_job_schedule_set_command_builder.prototype.ifNoneMatch = function (value) {
        this.setFlag("--if-none-match", value);
        return this;
    };
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. */
    az_batch_job_schedule_set_command_builder.prototype.ifUnmodifiedSince = function (value) {
        this.setFlag("--if-unmodified-since", value);
        return this;
    };
    /** A list of Application Packages that the Batch service will deploy to the Compute Node before running the command line. Application Packages are downloaded and deployed to a shared directory, not the Task working directory. Therefore, if a referenced Application Package is already on the Compute Node, and is up to date, then it is not re-downloaded; the existing copy on the Compute Node is used. If a referenced Application Package cannot be installed, for example because the package has been deleted or because download failed, the Task fails. Space-separated application IDs with optional version in 'id[#version]' format. */
    az_batch_job_schedule_set_command_builder.prototype.jobManagerTaskApplicationPackageReferences = function (value) {
        this.setFlag("--job-manager-task-application-package-references", value);
        return this;
    };
    /** Required. The command line of the Job Manager Task. The command line does not run under a shell, and therefore cannot take advantage of shell features such as environment variable expansion. If you want to take advantage of such features, you should invoke the shell in the command line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux. If the command line refers to file paths, it should use a relative path (relative to the Task working directory), or use the Batch provided environment variable (<a href="https://docs.microsoft.com/en-us/azure/batch/batch-compute-node-environment-variables">https://docs.microsoft.com/en-us/azure/batch/batch-compute-node-environment-variables</a>). */
    az_batch_job_schedule_set_command_builder.prototype.jobManagerTaskCommandLine = function (value) {
        this.setFlag("--job-manager-task-command-line", value);
        return this;
    };
    /** A list of environment variable settings for the Job Manager Task. Space-separated values in 'key=value' format. */
    az_batch_job_schedule_set_command_builder.prototype.jobManagerTaskEnvironmentSettings = function (value) {
        this.setFlag("--job-manager-task-environment-settings", value);
        return this;
    };
    /** Required. A string that uniquely identifies the Job Manager Task within the Job. The ID can contain any combination of alphanumeric characters including hyphens and underscores and cannot contain more than 64 characters. */
    az_batch_job_schedule_set_command_builder.prototype.jobManagerTaskId = function (value) {
        this.setFlag("--job-manager-task-id", value);
        return this;
    };
    /** A list of files that the Batch service will download to the Compute Node before running the command line. Files listed under this element are located in the Task's working directory. There is a maximum size for the list of resource files.  When the max size is exceeded, the request will fail and the response error code will be RequestEntityTooLarge. If this occurs, the collection of ResourceFiles must be reduced in size. This can be achieved using .zip files, Application Packages, or Docker Containers. Space-separated resource references in filename=httpurl format. */
    az_batch_job_schedule_set_command_builder.prototype.jobManagerTaskResourceFiles = function (value) {
        this.setFlag("--job-manager-task-resource-files", value);
        return this;
    };
    /** A list of name-value pairs associated with each Job created under this schedule as metadata. The Batch service does not assign any meaning to metadata; it is solely for the use of user code. Space-separated values in 'key=value' format. */
    az_batch_job_schedule_set_command_builder.prototype.jobMetadata = function (value) {
        this.setFlag("--job-metadata", value);
        return this;
    };
    /** A file containing the job schedule patch parameter specification in JSON (formatted to match the respective REST API body). If this parameter is specified, all 'Job Schedule Arguments' are ignored. */
    az_batch_job_schedule_set_command_builder.prototype.jsonFile = function (value) {
        this.setFlag("--json-file", value);
        return this;
    };
    /** A list of name-value pairs associated with the Job Schedule as metadata. If you do not specify this element, existing metadata is left unchanged. Space-separated values in 'key=value' format. */
    az_batch_job_schedule_set_command_builder.prototype.metadata = function (value) {
        this.setFlag("--metadata", value);
        return this;
    };
    /** The action the Batch service should take when all Tasks in a Job created under this schedule are in the completed state. Note that if a Job contains no Tasks, then all Tasks are considered complete. This option is therefore most commonly used with a Job Manager task; if you want to use automatic Job termination without a Job Manager, you should initially set onAllTasksComplete to noaction and update the Job properties to set onAllTasksComplete to terminatejob once you have finished adding Tasks. The default is noaction. */
    az_batch_job_schedule_set_command_builder.prototype.onAllTasksComplete = function (value) {
        this.setFlag("--on-all-tasks-complete", value);
        return this;
    };
    /** The id of an existing pool. All the tasks of the job will run on the specified pool. */
    az_batch_job_schedule_set_command_builder.prototype.poolId = function (value) {
        this.setFlag("--pool-id", value);
        return this;
    };
    /** The priority of Jobs created under this schedule. Priority values can range from -1000 to 1000, with -1000 being the lowest priority and 1000 being the highest priority. The default value is 0. This priority is used as the default for all Jobs under the Job Schedule. You can update a Job's priority after it has been created using by using the update Job API. */
    az_batch_job_schedule_set_command_builder.prototype.priority = function (value) {
        this.setFlag("--priority", value);
        return this;
    };
    /** The time interval between the start times of two successive Jobs under the Job Schedule. A Job Schedule can have at most one active Job under it at any given time. Because a Job Schedule can have at most one active Job under it at any given time, if it is time to create a new Job under a Job Schedule, but the previous Job is still running, the Batch service will not create the new Job until the previous Job finishes. If the previous Job does not finish within the startWindow period of the new recurrenceInterval, then no new Job will be scheduled for that interval. For recurring Jobs, you should normally specify a jobManagerTask in the jobSpecification. If you do not use jobManagerTask, you will need an external process to monitor when Jobs are created, add Tasks to the Jobs and terminate the Jobs ready for the next recurrence. The default is that the schedule does not recur: one Job is created, within the startWindow after the doNotRunUntil time, and the schedule is complete as soon as that Job finishes. The minimum value is 1 minute. If you specify a lower value, the Batch service rejects the schedule with an error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). Expected format is an ISO-8601 duration. */
    az_batch_job_schedule_set_command_builder.prototype.recurrenceInterval = function (value) {
        this.setFlag("--recurrence-interval", value);
        return this;
    };
    /** The time interval, starting from the time at which the schedule indicates a Job should be created, within which a Job must be created. If a Job is not created within the startWindow interval, then the 'opportunity' is lost; no Job will be created until the next recurrence of the schedule. If the schedule is recurring, and the startWindow is longer than the recurrence interval, then this is equivalent to an infinite startWindow, because the Job that is 'due' in one recurrenceInterval is not carried forward into the next recurrence interval. The default is infinite. The minimum value is 1 minute. If you specify a lower value, the Batch service rejects the schedule with an error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). Expected format is an ISO-8601 duration. */
    az_batch_job_schedule_set_command_builder.prototype.startWindow = function (value) {
        this.setFlag("--start-window", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_batch_job_schedule_set_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Whether Tasks in the Job can define dependencies on each other. The default is false. Specify either 'true' or 'false' to update the property. */
    az_batch_job_schedule_set_command_builder.prototype.usesTaskDependencies = function (value) {
        this.setFlag("--uses-task-dependencies", value);
        return this;
    };
    return az_batch_job_schedule_set_command_builder;
}(base_1.CommandBuilder));
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
var az_batch_job_schedule_show_command_builder = /** @class */ (function (_super) {
    __extends(az_batch_job_schedule_show_command_builder, _super);
    function az_batch_job_schedule_show_command_builder(commandPath, resultDataTypeName, jobScheduleId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.jobScheduleId(jobScheduleId);
        return _this;
    }
    /** The ID of the Job Schedule to get. */
    az_batch_job_schedule_show_command_builder.prototype.jobScheduleId = function (value) {
        this.setFlag("--job-schedule-id", value);
        return this;
    };
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    az_batch_job_schedule_show_command_builder.prototype.accountEndpoint = function (value) {
        this.setFlag("--account-endpoint", value);
        return this;
    };
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    az_batch_job_schedule_show_command_builder.prototype.accountKey = function (value) {
        this.setFlag("--account-key", value);
        return this;
    };
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    az_batch_job_schedule_show_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** An OData $expand clause. */
    az_batch_job_schedule_show_command_builder.prototype.expand = function (value) {
        this.setFlag("--expand", value);
        return this;
    };
    /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client. */
    az_batch_job_schedule_show_command_builder.prototype.ifMatch = function (value) {
        this.setFlag("--if-match", value);
        return this;
    };
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. */
    az_batch_job_schedule_show_command_builder.prototype.ifModifiedSince = function (value) {
        this.setFlag("--if-modified-since", value);
        return this;
    };
    /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client. */
    az_batch_job_schedule_show_command_builder.prototype.ifNoneMatch = function (value) {
        this.setFlag("--if-none-match", value);
        return this;
    };
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. */
    az_batch_job_schedule_show_command_builder.prototype.ifUnmodifiedSince = function (value) {
        this.setFlag("--if-unmodified-since", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_batch_job_schedule_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** An OData $select clause. */
    az_batch_job_schedule_show_command_builder.prototype.select = function (value) {
        this.setFlag("--select", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_batch_job_schedule_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_batch_job_schedule_show_command_builder;
}(base_1.CommandBuilder));
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
var az_batch_job_schedule_stop_command_builder = /** @class */ (function (_super) {
    __extends(az_batch_job_schedule_stop_command_builder, _super);
    function az_batch_job_schedule_stop_command_builder(commandPath, resultDataTypeName, jobScheduleId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.jobScheduleId(jobScheduleId);
        return _this;
    }
    /** The ID of the Job Schedule to terminates. */
    az_batch_job_schedule_stop_command_builder.prototype.jobScheduleId = function (value) {
        this.setFlag("--job-schedule-id", value);
        return this;
    };
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    az_batch_job_schedule_stop_command_builder.prototype.accountEndpoint = function (value) {
        this.setFlag("--account-endpoint", value);
        return this;
    };
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    az_batch_job_schedule_stop_command_builder.prototype.accountKey = function (value) {
        this.setFlag("--account-key", value);
        return this;
    };
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    az_batch_job_schedule_stop_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client. */
    az_batch_job_schedule_stop_command_builder.prototype.ifMatch = function (value) {
        this.setFlag("--if-match", value);
        return this;
    };
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. */
    az_batch_job_schedule_stop_command_builder.prototype.ifModifiedSince = function (value) {
        this.setFlag("--if-modified-since", value);
        return this;
    };
    /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client. */
    az_batch_job_schedule_stop_command_builder.prototype.ifNoneMatch = function (value) {
        this.setFlag("--if-none-match", value);
        return this;
    };
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. */
    az_batch_job_schedule_stop_command_builder.prototype.ifUnmodifiedSince = function (value) {
        this.setFlag("--if-unmodified-since", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_batch_job_schedule_stop_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_batch_job_schedule_stop_command_builder;
}(base_1.CommandBuilder));
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
var az_batch_job_create_command_builder = /** @class */ (function (_super) {
    __extends(az_batch_job_create_command_builder, _super);
    function az_batch_job_create_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    az_batch_job_create_command_builder.prototype.accountEndpoint = function (value) {
        this.setFlag("--account-endpoint", value);
        return this;
    };
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    az_batch_job_create_command_builder.prototype.accountKey = function (value) {
        this.setFlag("--account-key", value);
        return this;
    };
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    az_batch_job_create_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Required. A string that uniquely identifies the Job within the Account. The ID can contain any combination of alphanumeric characters including hyphens and underscores, and cannot contain more than 64 characters. The ID is case-preserving and case-insensitive (that is, you may not have two IDs within an Account that differ only by case). */
    az_batch_job_create_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** Required. The command line of the Job Manager Task. The command line does not run under a shell, and therefore cannot take advantage of shell features such as environment variable expansion. If you want to take advantage of such features, you should invoke the shell in the command line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux. If the command line refers to file paths, it should use a relative path (relative to the Task working directory), or use the Batch provided environment variable (<a href="https://docs.microsoft.com/en-us/azure/batch/batch-compute-node-environment-variables">https://docs.microsoft.com/en-us/azure/batch/batch-compute-node-environment-variables</a>). */
    az_batch_job_create_command_builder.prototype.jobManagerTaskCommandLine = function (value) {
        this.setFlag("--job-manager-task-command-line", value);
        return this;
    };
    /** A list of environment variable settings for the Job Manager Task. Space-separated values in 'key=value' format. */
    az_batch_job_create_command_builder.prototype.jobManagerTaskEnvironmentSettings = function (value) {
        this.setFlag("--job-manager-task-environment-settings", value);
        return this;
    };
    /** Required. A string that uniquely identifies the Job Manager Task within the Job. The ID can contain any combination of alphanumeric characters including hyphens and underscores and cannot contain more than 64 characters. */
    az_batch_job_create_command_builder.prototype.jobManagerTaskId = function (value) {
        this.setFlag("--job-manager-task-id", value);
        return this;
    };
    /** A list of files that the Batch service will download to the Compute Node before running the command line. Files listed under this element are located in the Task's working directory. There is a maximum size for the list of resource files.  When the max size is exceeded, the request will fail and the response error code will be RequestEntityTooLarge. If this occurs, the collection of ResourceFiles must be reduced in size. This can be achieved using .zip files, Application Packages, or Docker Containers. Space-separated resource references in filename=httpurl format. */
    az_batch_job_create_command_builder.prototype.jobManagerTaskResourceFiles = function (value) {
        this.setFlag("--job-manager-task-resource-files", value);
        return this;
    };
    /** The maximum number of times each Task may be retried. The Batch service retries a Task if its exit code is nonzero. Note that this value specifically controls the number of retries. The Batch service will try each Task once, and may then retry up to this limit. For example, if the maximum retry count is 3, Batch tries a Task up to 4 times (one initial try and 3 retries). If the maximum retry count is 0, the Batch service does not retry Tasks. If the maximum retry count is -1, the Batch service retries Tasks without limit. The default value is 0 (no retries). */
    az_batch_job_create_command_builder.prototype.jobMaxTaskRetryCount = function (value) {
        this.setFlag("--job-max-task-retry-count", value);
        return this;
    };
    /** The maximum elapsed time that the Job may run, measured from the time the Job is created. If the Job does not complete within the time limit, the Batch service terminates it and any Tasks that are still running. In this case, the termination reason will be MaxWallClockTimeExpiry. If this property is not specified, there is no time limit on how long the Job may run. Expected format is an ISO-8601 duration. */
    az_batch_job_create_command_builder.prototype.jobMaxWallClockTime = function (value) {
        this.setFlag("--job-max-wall-clock-time", value);
        return this;
    };
    /** A file containing the job specification in JSON (formatted to match the respective REST API body). If this parameter is specified, all 'Job Arguments' are ignored. */
    az_batch_job_create_command_builder.prototype.jsonFile = function (value) {
        this.setFlag("--json-file", value);
        return this;
    };
    /** A list of name-value pairs associated with the Job as metadata. The Batch service does not assign any meaning to metadata; it is solely for the use of user code. Space-separated values in 'key=value' format. */
    az_batch_job_create_command_builder.prototype.metadata = function (value) {
        this.setFlag("--metadata", value);
        return this;
    };
    /** The id of an existing pool. All the tasks of the job will run on the specified pool. */
    az_batch_job_create_command_builder.prototype.poolId = function (value) {
        this.setFlag("--pool-id", value);
        return this;
    };
    /** The priority of the Job. Priority values can range from -1000 to 1000, with -1000 being the lowest priority and 1000 being the highest priority. The default value is 0. */
    az_batch_job_create_command_builder.prototype.priority = function (value) {
        this.setFlag("--priority", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_batch_job_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Whether Tasks in the Job can define dependencies on each other. The default is false. True if flag present. */
    az_batch_job_create_command_builder.prototype.usesTaskDependencies = function (value) {
        this.setFlag("--uses-task-dependencies", value);
        return this;
    };
    return az_batch_job_create_command_builder;
}(base_1.CommandBuilder));
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
var az_batch_job_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_batch_job_delete_command_builder, _super);
    function az_batch_job_delete_command_builder(commandPath, resultDataTypeName, jobId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.jobId(jobId);
        return _this;
    }
    /** The ID of the Job to delete. */
    az_batch_job_delete_command_builder.prototype.jobId = function (value) {
        this.setFlag("--job-id", value);
        return this;
    };
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    az_batch_job_delete_command_builder.prototype.accountEndpoint = function (value) {
        this.setFlag("--account-endpoint", value);
        return this;
    };
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    az_batch_job_delete_command_builder.prototype.accountKey = function (value) {
        this.setFlag("--account-key", value);
        return this;
    };
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    az_batch_job_delete_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client. */
    az_batch_job_delete_command_builder.prototype.ifMatch = function (value) {
        this.setFlag("--if-match", value);
        return this;
    };
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. */
    az_batch_job_delete_command_builder.prototype.ifModifiedSince = function (value) {
        this.setFlag("--if-modified-since", value);
        return this;
    };
    /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client. */
    az_batch_job_delete_command_builder.prototype.ifNoneMatch = function (value) {
        this.setFlag("--if-none-match", value);
        return this;
    };
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. */
    az_batch_job_delete_command_builder.prototype.ifUnmodifiedSince = function (value) {
        this.setFlag("--if-unmodified-since", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_batch_job_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_batch_job_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_batch_job_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_batch_job_disable_command_builder = /** @class */ (function (_super) {
    __extends(az_batch_job_disable_command_builder, _super);
    function az_batch_job_disable_command_builder(commandPath, resultDataTypeName, jobId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.jobId(jobId);
        return _this;
    }
    /** The ID of the Job to disable. */
    az_batch_job_disable_command_builder.prototype.jobId = function (value) {
        this.setFlag("--job-id", value);
        return this;
    };
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    az_batch_job_disable_command_builder.prototype.accountEndpoint = function (value) {
        this.setFlag("--account-endpoint", value);
        return this;
    };
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    az_batch_job_disable_command_builder.prototype.accountKey = function (value) {
        this.setFlag("--account-key", value);
        return this;
    };
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    az_batch_job_disable_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** What to do with active Tasks associated with the Job. */
    az_batch_job_disable_command_builder.prototype.disableTasks = function (value) {
        this.setFlag("--disable-tasks", value);
        return this;
    };
    /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client. */
    az_batch_job_disable_command_builder.prototype.ifMatch = function (value) {
        this.setFlag("--if-match", value);
        return this;
    };
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. */
    az_batch_job_disable_command_builder.prototype.ifModifiedSince = function (value) {
        this.setFlag("--if-modified-since", value);
        return this;
    };
    /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client. */
    az_batch_job_disable_command_builder.prototype.ifNoneMatch = function (value) {
        this.setFlag("--if-none-match", value);
        return this;
    };
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. */
    az_batch_job_disable_command_builder.prototype.ifUnmodifiedSince = function (value) {
        this.setFlag("--if-unmodified-since", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_batch_job_disable_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_batch_job_disable_command_builder;
}(base_1.CommandBuilder));
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
var az_batch_job_enable_command_builder = /** @class */ (function (_super) {
    __extends(az_batch_job_enable_command_builder, _super);
    function az_batch_job_enable_command_builder(commandPath, resultDataTypeName, jobId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.jobId(jobId);
        return _this;
    }
    /** The ID of the Job to enable. */
    az_batch_job_enable_command_builder.prototype.jobId = function (value) {
        this.setFlag("--job-id", value);
        return this;
    };
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    az_batch_job_enable_command_builder.prototype.accountEndpoint = function (value) {
        this.setFlag("--account-endpoint", value);
        return this;
    };
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    az_batch_job_enable_command_builder.prototype.accountKey = function (value) {
        this.setFlag("--account-key", value);
        return this;
    };
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    az_batch_job_enable_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client. */
    az_batch_job_enable_command_builder.prototype.ifMatch = function (value) {
        this.setFlag("--if-match", value);
        return this;
    };
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. */
    az_batch_job_enable_command_builder.prototype.ifModifiedSince = function (value) {
        this.setFlag("--if-modified-since", value);
        return this;
    };
    /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client. */
    az_batch_job_enable_command_builder.prototype.ifNoneMatch = function (value) {
        this.setFlag("--if-none-match", value);
        return this;
    };
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. */
    az_batch_job_enable_command_builder.prototype.ifUnmodifiedSince = function (value) {
        this.setFlag("--if-unmodified-since", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_batch_job_enable_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_batch_job_enable_command_builder;
}(base_1.CommandBuilder));
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
var az_batch_job_list_command_builder = /** @class */ (function (_super) {
    __extends(az_batch_job_list_command_builder, _super);
    function az_batch_job_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    az_batch_job_list_command_builder.prototype.accountEndpoint = function (value) {
        this.setFlag("--account-endpoint", value);
        return this;
    };
    /** The Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    az_batch_job_list_command_builder.prototype.accountKey = function (value) {
        this.setFlag("--account-key", value);
        return this;
    };
    /** The Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    az_batch_job_list_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** An OData $expand clause. */
    az_batch_job_list_command_builder.prototype.expand = function (value) {
        this.setFlag("--expand", value);
        return this;
    };
    /** An OData $filter clause. */
    az_batch_job_list_command_builder.prototype.filter = function (value) {
        this.setFlag("--filter", value);
        return this;
    };
    /** The ID of the job schedule from which you want to get a list of jobs. If omitted, lists all jobs in the account. */
    az_batch_job_list_command_builder.prototype.jobScheduleId = function (value) {
        this.setFlag("--job-schedule-id", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_batch_job_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** An OData $select clause. */
    az_batch_job_list_command_builder.prototype.select = function (value) {
        this.setFlag("--select", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_batch_job_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_batch_job_list_command_builder;
}(base_1.CommandBuilder));
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
var az_batch_job_reset_command_builder = /** @class */ (function (_super) {
    __extends(az_batch_job_reset_command_builder, _super);
    function az_batch_job_reset_command_builder(commandPath, resultDataTypeName, jobId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.jobId(jobId);
        return _this;
    }
    /** The ID of the Job whose properties you want to update. */
    az_batch_job_reset_command_builder.prototype.jobId = function (value) {
        this.setFlag("--job-id", value);
        return this;
    };
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    az_batch_job_reset_command_builder.prototype.accountEndpoint = function (value) {
        this.setFlag("--account-endpoint", value);
        return this;
    };
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    az_batch_job_reset_command_builder.prototype.accountKey = function (value) {
        this.setFlag("--account-key", value);
        return this;
    };
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    az_batch_job_reset_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client. */
    az_batch_job_reset_command_builder.prototype.ifMatch = function (value) {
        this.setFlag("--if-match", value);
        return this;
    };
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. */
    az_batch_job_reset_command_builder.prototype.ifModifiedSince = function (value) {
        this.setFlag("--if-modified-since", value);
        return this;
    };
    /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client. */
    az_batch_job_reset_command_builder.prototype.ifNoneMatch = function (value) {
        this.setFlag("--if-none-match", value);
        return this;
    };
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. */
    az_batch_job_reset_command_builder.prototype.ifUnmodifiedSince = function (value) {
        this.setFlag("--if-unmodified-since", value);
        return this;
    };
    /** The maximum number of times each Task may be retried. The Batch service retries a Task if its exit code is nonzero. Note that this value specifically controls the number of retries. The Batch service will try each Task once, and may then retry up to this limit. For example, if the maximum retry count is 3, Batch tries a Task up to 4 times (one initial try and 3 retries). If the maximum retry count is 0, the Batch service does not retry Tasks. If the maximum retry count is -1, the Batch service retries Tasks without limit. The default value is 0 (no retries). */
    az_batch_job_reset_command_builder.prototype.jobMaxTaskRetryCount = function (value) {
        this.setFlag("--job-max-task-retry-count", value);
        return this;
    };
    /** The maximum elapsed time that the Job may run, measured from the time the Job is created. If the Job does not complete within the time limit, the Batch service terminates it and any Tasks that are still running. In this case, the termination reason will be MaxWallClockTimeExpiry. If this property is not specified, there is no time limit on how long the Job may run. Expected format is an ISO-8601 duration. */
    az_batch_job_reset_command_builder.prototype.jobMaxWallClockTime = function (value) {
        this.setFlag("--job-max-wall-clock-time", value);
        return this;
    };
    /** A file containing the job update parameter specification in JSON (formatted to match the respective REST API body). If this parameter is specified, all 'Job Arguments' are ignored. */
    az_batch_job_reset_command_builder.prototype.jsonFile = function (value) {
        this.setFlag("--json-file", value);
        return this;
    };
    /** A list of name-value pairs associated with the Job as metadata. If omitted, it takes the default value of an empty list; in effect, any existing metadata is deleted. Space-separated values in 'key=value' format. */
    az_batch_job_reset_command_builder.prototype.metadata = function (value) {
        this.setFlag("--metadata", value);
        return this;
    };
    /** The action the Batch service should take when all Tasks in the Job are in the completed state. If omitted, the completion behavior is set to noaction. If the current value is terminatejob, this is an error because a Job's completion behavior may not be changed from terminatejob to noaction. You may not change the value from terminatejob to noaction - that is, once you have engaged automatic Job termination, you cannot turn it off again. If you try to do this, the request fails and Batch returns status code 400 (Bad Request) and an 'invalid property value' error response. If you do not specify this element in a PUT request, it is equivalent to passing noaction. This is an error if the current value is terminatejob. */
    az_batch_job_reset_command_builder.prototype.onAllTasksComplete = function (value) {
        this.setFlag("--on-all-tasks-complete", value);
        return this;
    };
    /** The id of an existing pool. All the tasks of the job will run on the specified pool. */
    az_batch_job_reset_command_builder.prototype.poolId = function (value) {
        this.setFlag("--pool-id", value);
        return this;
    };
    /** The priority of the Job. Priority values can range from -1000 to 1000, with -1000 being the lowest priority and 1000 being the highest priority. If omitted, it is set to the default value 0. */
    az_batch_job_reset_command_builder.prototype.priority = function (value) {
        this.setFlag("--priority", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_batch_job_reset_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_batch_job_reset_command_builder;
}(base_1.CommandBuilder));
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
var az_batch_job_set_command_builder = /** @class */ (function (_super) {
    __extends(az_batch_job_set_command_builder, _super);
    function az_batch_job_set_command_builder(commandPath, resultDataTypeName, jobId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.jobId(jobId);
        return _this;
    }
    /** The ID of the Job whose properties you want to update. */
    az_batch_job_set_command_builder.prototype.jobId = function (value) {
        this.setFlag("--job-id", value);
        return this;
    };
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    az_batch_job_set_command_builder.prototype.accountEndpoint = function (value) {
        this.setFlag("--account-endpoint", value);
        return this;
    };
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    az_batch_job_set_command_builder.prototype.accountKey = function (value) {
        this.setFlag("--account-key", value);
        return this;
    };
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    az_batch_job_set_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client. */
    az_batch_job_set_command_builder.prototype.ifMatch = function (value) {
        this.setFlag("--if-match", value);
        return this;
    };
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. */
    az_batch_job_set_command_builder.prototype.ifModifiedSince = function (value) {
        this.setFlag("--if-modified-since", value);
        return this;
    };
    /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client. */
    az_batch_job_set_command_builder.prototype.ifNoneMatch = function (value) {
        this.setFlag("--if-none-match", value);
        return this;
    };
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. */
    az_batch_job_set_command_builder.prototype.ifUnmodifiedSince = function (value) {
        this.setFlag("--if-unmodified-since", value);
        return this;
    };
    /** The maximum number of times each Task may be retried. The Batch service retries a Task if its exit code is nonzero. Note that this value specifically controls the number of retries. The Batch service will try each Task once, and may then retry up to this limit. For example, if the maximum retry count is 3, Batch tries a Task up to 4 times (one initial try and 3 retries). If the maximum retry count is 0, the Batch service does not retry Tasks. If the maximum retry count is -1, the Batch service retries Tasks without limit. The default value is 0 (no retries). */
    az_batch_job_set_command_builder.prototype.jobMaxTaskRetryCount = function (value) {
        this.setFlag("--job-max-task-retry-count", value);
        return this;
    };
    /** The maximum elapsed time that the Job may run, measured from the time the Job is created. If the Job does not complete within the time limit, the Batch service terminates it and any Tasks that are still running. In this case, the termination reason will be MaxWallClockTimeExpiry. If this property is not specified, there is no time limit on how long the Job may run. Expected format is an ISO-8601 duration. */
    az_batch_job_set_command_builder.prototype.jobMaxWallClockTime = function (value) {
        this.setFlag("--job-max-wall-clock-time", value);
        return this;
    };
    /** A file containing the job patch parameter specification in JSON (formatted to match the respective REST API body). If this parameter is specified, all 'Job Arguments' are ignored. */
    az_batch_job_set_command_builder.prototype.jsonFile = function (value) {
        this.setFlag("--json-file", value);
        return this;
    };
    /** A list of name-value pairs associated with the Job as metadata. If omitted, the existing Job metadata is left unchanged. Space-separated values in 'key=value' format. */
    az_batch_job_set_command_builder.prototype.metadata = function (value) {
        this.setFlag("--metadata", value);
        return this;
    };
    /** The action the Batch service should take when all Tasks in the Job are in the completed state. If omitted, the completion behavior is left unchanged. You may not change the value from terminatejob to noaction - that is, once you have engaged automatic Job termination, you cannot turn it off again. If you try to do this, the request fails with an 'invalid property value' error response; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). */
    az_batch_job_set_command_builder.prototype.onAllTasksComplete = function (value) {
        this.setFlag("--on-all-tasks-complete", value);
        return this;
    };
    /** The id of an existing pool. All the tasks of the job will run on the specified pool. */
    az_batch_job_set_command_builder.prototype.poolId = function (value) {
        this.setFlag("--pool-id", value);
        return this;
    };
    /** The priority of the Job. Priority values can range from -1000 to 1000, with -1000 being the lowest priority and 1000 being the highest priority. If omitted, the priority of the Job is left unchanged. */
    az_batch_job_set_command_builder.prototype.priority = function (value) {
        this.setFlag("--priority", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_batch_job_set_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_batch_job_set_command_builder;
}(base_1.CommandBuilder));
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
var az_batch_job_show_command_builder = /** @class */ (function (_super) {
    __extends(az_batch_job_show_command_builder, _super);
    function az_batch_job_show_command_builder(commandPath, resultDataTypeName, jobId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.jobId(jobId);
        return _this;
    }
    /** The ID of the Job. */
    az_batch_job_show_command_builder.prototype.jobId = function (value) {
        this.setFlag("--job-id", value);
        return this;
    };
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    az_batch_job_show_command_builder.prototype.accountEndpoint = function (value) {
        this.setFlag("--account-endpoint", value);
        return this;
    };
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    az_batch_job_show_command_builder.prototype.accountKey = function (value) {
        this.setFlag("--account-key", value);
        return this;
    };
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    az_batch_job_show_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** An OData $expand clause. */
    az_batch_job_show_command_builder.prototype.expand = function (value) {
        this.setFlag("--expand", value);
        return this;
    };
    /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client. */
    az_batch_job_show_command_builder.prototype.ifMatch = function (value) {
        this.setFlag("--if-match", value);
        return this;
    };
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. */
    az_batch_job_show_command_builder.prototype.ifModifiedSince = function (value) {
        this.setFlag("--if-modified-since", value);
        return this;
    };
    /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client. */
    az_batch_job_show_command_builder.prototype.ifNoneMatch = function (value) {
        this.setFlag("--if-none-match", value);
        return this;
    };
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. */
    az_batch_job_show_command_builder.prototype.ifUnmodifiedSince = function (value) {
        this.setFlag("--if-unmodified-since", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_batch_job_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** An OData $select clause. */
    az_batch_job_show_command_builder.prototype.select = function (value) {
        this.setFlag("--select", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_batch_job_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_batch_job_show_command_builder;
}(base_1.CommandBuilder));
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
var az_batch_job_stop_command_builder = /** @class */ (function (_super) {
    __extends(az_batch_job_stop_command_builder, _super);
    function az_batch_job_stop_command_builder(commandPath, resultDataTypeName, jobId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.jobId(jobId);
        return _this;
    }
    /** The ID of the Job to terminate. */
    az_batch_job_stop_command_builder.prototype.jobId = function (value) {
        this.setFlag("--job-id", value);
        return this;
    };
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    az_batch_job_stop_command_builder.prototype.accountEndpoint = function (value) {
        this.setFlag("--account-endpoint", value);
        return this;
    };
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    az_batch_job_stop_command_builder.prototype.accountKey = function (value) {
        this.setFlag("--account-key", value);
        return this;
    };
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    az_batch_job_stop_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client. */
    az_batch_job_stop_command_builder.prototype.ifMatch = function (value) {
        this.setFlag("--if-match", value);
        return this;
    };
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. */
    az_batch_job_stop_command_builder.prototype.ifModifiedSince = function (value) {
        this.setFlag("--if-modified-since", value);
        return this;
    };
    /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client. */
    az_batch_job_stop_command_builder.prototype.ifNoneMatch = function (value) {
        this.setFlag("--if-none-match", value);
        return this;
    };
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. */
    az_batch_job_stop_command_builder.prototype.ifUnmodifiedSince = function (value) {
        this.setFlag("--if-unmodified-since", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_batch_job_stop_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The text you want to appear as the Job's TerminateReason. The default is 'UserTerminate'. */
    az_batch_job_stop_command_builder.prototype.terminateReason = function (value) {
        this.setFlag("--terminate-reason", value);
        return this;
    };
    return az_batch_job_stop_command_builder;
}(base_1.CommandBuilder));
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
var az_batch_location_quotas_show_command_builder = /** @class */ (function (_super) {
    __extends(az_batch_location_quotas_show_command_builder, _super);
    function az_batch_location_quotas_show_command_builder(commandPath, resultDataTypeName, location) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.location(location);
        return _this;
    }
    /** The region from which to display the Batch service quotas. */
    az_batch_location_quotas_show_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_batch_location_quotas_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_batch_location_quotas_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_batch_location_quotas_show_command_builder;
}(base_1.CommandBuilder));
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
var az_batch_node_file_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_batch_node_file_delete_command_builder, _super);
    function az_batch_node_file_delete_command_builder(commandPath, resultDataTypeName, filePath, nodeId, poolId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.filePath(filePath);
        _this.nodeId(nodeId);
        _this.poolId(poolId);
        return _this;
    }
    /** The path to the file or directory that you want to delete. */
    az_batch_node_file_delete_command_builder.prototype.filePath = function (value) {
        this.setFlag("--file-path", value);
        return this;
    };
    /** The ID of the Compute Node from which you want to delete the file. */
    az_batch_node_file_delete_command_builder.prototype.nodeId = function (value) {
        this.setFlag("--node-id", value);
        return this;
    };
    /** The ID of the Pool that contains the Compute Node. */
    az_batch_node_file_delete_command_builder.prototype.poolId = function (value) {
        this.setFlag("--pool-id", value);
        return this;
    };
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    az_batch_node_file_delete_command_builder.prototype.accountEndpoint = function (value) {
        this.setFlag("--account-endpoint", value);
        return this;
    };
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    az_batch_node_file_delete_command_builder.prototype.accountKey = function (value) {
        this.setFlag("--account-key", value);
        return this;
    };
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    az_batch_node_file_delete_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Whether to delete children of a directory. If the filePath parameter represents a directory instead of a file, you can set recursive to true to delete the directory and all of the files and subdirectories in it. If recursive is false then the directory must be empty or deletion will fail. */
    az_batch_node_file_delete_command_builder.prototype.recursive = function (value) {
        this.setFlag("--recursive", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_batch_node_file_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_batch_node_file_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_batch_node_file_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_batch_node_file_download_command_builder = /** @class */ (function (_super) {
    __extends(az_batch_node_file_download_command_builder, _super);
    function az_batch_node_file_download_command_builder(commandPath, resultDataTypeName, destination, filePath, nodeId, poolId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.destination(destination);
        _this.filePath(filePath);
        _this.nodeId(nodeId);
        _this.poolId(poolId);
        return _this;
    }
    /** The path to the destination file or directory. */
    az_batch_node_file_download_command_builder.prototype.destination = function (value) {
        this.setFlag("--destination", value);
        return this;
    };
    /** The path to the Compute Node file that you want to get the content of. */
    az_batch_node_file_download_command_builder.prototype.filePath = function (value) {
        this.setFlag("--file-path", value);
        return this;
    };
    /** The ID of the Compute Node that contains the file. */
    az_batch_node_file_download_command_builder.prototype.nodeId = function (value) {
        this.setFlag("--node-id", value);
        return this;
    };
    /** The ID of the Pool that contains the Compute Node. */
    az_batch_node_file_download_command_builder.prototype.poolId = function (value) {
        this.setFlag("--pool-id", value);
        return this;
    };
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    az_batch_node_file_download_command_builder.prototype.accountEndpoint = function (value) {
        this.setFlag("--account-endpoint", value);
        return this;
    };
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    az_batch_node_file_download_command_builder.prototype.accountKey = function (value) {
        this.setFlag("--account-key", value);
        return this;
    };
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    az_batch_node_file_download_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** The byte range to be retrieved. If not set the file will be retrieved to the end. */
    az_batch_node_file_download_command_builder.prototype.endRange = function (value) {
        this.setFlag("--end-range", value);
        return this;
    };
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. */
    az_batch_node_file_download_command_builder.prototype.ifModifiedSince = function (value) {
        this.setFlag("--if-modified-since", value);
        return this;
    };
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. */
    az_batch_node_file_download_command_builder.prototype.ifUnmodifiedSince = function (value) {
        this.setFlag("--if-unmodified-since", value);
        return this;
    };
    /** The byte range to be retrieved. If not set the file will be retrieved from the beginning. */
    az_batch_node_file_download_command_builder.prototype.startRange = function (value) {
        this.setFlag("--start-range", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_batch_node_file_download_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_batch_node_file_download_command_builder;
}(base_1.CommandBuilder));
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
var az_batch_node_file_list_command_builder = /** @class */ (function (_super) {
    __extends(az_batch_node_file_list_command_builder, _super);
    function az_batch_node_file_list_command_builder(commandPath, resultDataTypeName, nodeId, poolId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.nodeId(nodeId);
        _this.poolId(poolId);
        return _this;
    }
    /** The ID of the Compute Node whose files you want to list. */
    az_batch_node_file_list_command_builder.prototype.nodeId = function (value) {
        this.setFlag("--node-id", value);
        return this;
    };
    /** The ID of the Pool that contains the Compute Node. */
    az_batch_node_file_list_command_builder.prototype.poolId = function (value) {
        this.setFlag("--pool-id", value);
        return this;
    };
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    az_batch_node_file_list_command_builder.prototype.accountEndpoint = function (value) {
        this.setFlag("--account-endpoint", value);
        return this;
    };
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    az_batch_node_file_list_command_builder.prototype.accountKey = function (value) {
        this.setFlag("--account-key", value);
        return this;
    };
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    az_batch_node_file_list_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** An OData $filter clause. For more information on constructing this filter, see <a href="https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-compute-node-files">https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-compute-node-files</a>. */
    az_batch_node_file_list_command_builder.prototype.filter = function (value) {
        this.setFlag("--filter", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_batch_node_file_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Whether to list children of a directory. */
    az_batch_node_file_list_command_builder.prototype.recursive = function (value) {
        this.setFlag("--recursive", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_batch_node_file_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_batch_node_file_list_command_builder;
}(base_1.CommandBuilder));
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
var az_batch_node_file_show_command_builder = /** @class */ (function (_super) {
    __extends(az_batch_node_file_show_command_builder, _super);
    function az_batch_node_file_show_command_builder(commandPath, resultDataTypeName, filePath, nodeId, poolId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.filePath(filePath);
        _this.nodeId(nodeId);
        _this.poolId(poolId);
        return _this;
    }
    /** The path to the Compute Node file that you want to get the properties of. */
    az_batch_node_file_show_command_builder.prototype.filePath = function (value) {
        this.setFlag("--file-path", value);
        return this;
    };
    /** The ID of the Compute Node that contains the file. */
    az_batch_node_file_show_command_builder.prototype.nodeId = function (value) {
        this.setFlag("--node-id", value);
        return this;
    };
    /** The ID of the Pool that contains the Compute Node. */
    az_batch_node_file_show_command_builder.prototype.poolId = function (value) {
        this.setFlag("--pool-id", value);
        return this;
    };
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    az_batch_node_file_show_command_builder.prototype.accountEndpoint = function (value) {
        this.setFlag("--account-endpoint", value);
        return this;
    };
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    az_batch_node_file_show_command_builder.prototype.accountKey = function (value) {
        this.setFlag("--account-key", value);
        return this;
    };
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    az_batch_node_file_show_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. */
    az_batch_node_file_show_command_builder.prototype.ifModifiedSince = function (value) {
        this.setFlag("--if-modified-since", value);
        return this;
    };
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. */
    az_batch_node_file_show_command_builder.prototype.ifUnmodifiedSince = function (value) {
        this.setFlag("--if-unmodified-since", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_batch_node_file_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_batch_node_file_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_batch_node_file_show_command_builder;
}(base_1.CommandBuilder));
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
var az_batch_node_remote_desktop_download_command_builder = /** @class */ (function (_super) {
    __extends(az_batch_node_remote_desktop_download_command_builder, _super);
    function az_batch_node_remote_desktop_download_command_builder(commandPath, resultDataTypeName, destination, nodeId, poolId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.destination(destination);
        _this.nodeId(nodeId);
        _this.poolId(poolId);
        return _this;
    }
    /** The path to the destination file or directory. */
    az_batch_node_remote_desktop_download_command_builder.prototype.destination = function (value) {
        this.setFlag("--destination", value);
        return this;
    };
    /** The ID of the Compute Node for which you want to get the Remote Desktop Protocol file. */
    az_batch_node_remote_desktop_download_command_builder.prototype.nodeId = function (value) {
        this.setFlag("--node-id", value);
        return this;
    };
    /** The ID of the Pool that contains the Compute Node. */
    az_batch_node_remote_desktop_download_command_builder.prototype.poolId = function (value) {
        this.setFlag("--pool-id", value);
        return this;
    };
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    az_batch_node_remote_desktop_download_command_builder.prototype.accountEndpoint = function (value) {
        this.setFlag("--account-endpoint", value);
        return this;
    };
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    az_batch_node_remote_desktop_download_command_builder.prototype.accountKey = function (value) {
        this.setFlag("--account-key", value);
        return this;
    };
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    az_batch_node_remote_desktop_download_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_batch_node_remote_desktop_download_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_batch_node_remote_desktop_download_command_builder;
}(base_1.CommandBuilder));
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
var az_batch_node_remote_login_settings_show_command_builder = /** @class */ (function (_super) {
    __extends(az_batch_node_remote_login_settings_show_command_builder, _super);
    function az_batch_node_remote_login_settings_show_command_builder(commandPath, resultDataTypeName, nodeId, poolId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.nodeId(nodeId);
        _this.poolId(poolId);
        return _this;
    }
    /** The ID of the Compute Node for which to obtain the remote login settings. */
    az_batch_node_remote_login_settings_show_command_builder.prototype.nodeId = function (value) {
        this.setFlag("--node-id", value);
        return this;
    };
    /** The ID of the Pool that contains the Compute Node. */
    az_batch_node_remote_login_settings_show_command_builder.prototype.poolId = function (value) {
        this.setFlag("--pool-id", value);
        return this;
    };
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    az_batch_node_remote_login_settings_show_command_builder.prototype.accountEndpoint = function (value) {
        this.setFlag("--account-endpoint", value);
        return this;
    };
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    az_batch_node_remote_login_settings_show_command_builder.prototype.accountKey = function (value) {
        this.setFlag("--account-key", value);
        return this;
    };
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    az_batch_node_remote_login_settings_show_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_batch_node_remote_login_settings_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_batch_node_remote_login_settings_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_batch_node_remote_login_settings_show_command_builder;
}(base_1.CommandBuilder));
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
var az_batch_node_scheduling_disable_command_builder = /** @class */ (function (_super) {
    __extends(az_batch_node_scheduling_disable_command_builder, _super);
    function az_batch_node_scheduling_disable_command_builder(commandPath, resultDataTypeName, nodeId, poolId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.nodeId(nodeId);
        _this.poolId(poolId);
        return _this;
    }
    /** The ID of the Compute Node on which you want to disable Task scheduling. */
    az_batch_node_scheduling_disable_command_builder.prototype.nodeId = function (value) {
        this.setFlag("--node-id", value);
        return this;
    };
    /** The ID of the Pool that contains the Compute Node. */
    az_batch_node_scheduling_disable_command_builder.prototype.poolId = function (value) {
        this.setFlag("--pool-id", value);
        return this;
    };
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    az_batch_node_scheduling_disable_command_builder.prototype.accountEndpoint = function (value) {
        this.setFlag("--account-endpoint", value);
        return this;
    };
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    az_batch_node_scheduling_disable_command_builder.prototype.accountKey = function (value) {
        this.setFlag("--account-key", value);
        return this;
    };
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    az_batch_node_scheduling_disable_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** What to do with currently running Tasks when disabling Task scheduling on the Compute Node. The default value is requeue. */
    az_batch_node_scheduling_disable_command_builder.prototype.nodeDisableSchedulingOption = function (value) {
        this.setFlag("--node-disable-scheduling-option", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_batch_node_scheduling_disable_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_batch_node_scheduling_disable_command_builder;
}(base_1.CommandBuilder));
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
var az_batch_node_scheduling_enable_command_builder = /** @class */ (function (_super) {
    __extends(az_batch_node_scheduling_enable_command_builder, _super);
    function az_batch_node_scheduling_enable_command_builder(commandPath, resultDataTypeName, nodeId, poolId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.nodeId(nodeId);
        _this.poolId(poolId);
        return _this;
    }
    /** The ID of the Compute Node on which you want to enable Task scheduling. */
    az_batch_node_scheduling_enable_command_builder.prototype.nodeId = function (value) {
        this.setFlag("--node-id", value);
        return this;
    };
    /** The ID of the Pool that contains the Compute Node. */
    az_batch_node_scheduling_enable_command_builder.prototype.poolId = function (value) {
        this.setFlag("--pool-id", value);
        return this;
    };
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    az_batch_node_scheduling_enable_command_builder.prototype.accountEndpoint = function (value) {
        this.setFlag("--account-endpoint", value);
        return this;
    };
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    az_batch_node_scheduling_enable_command_builder.prototype.accountKey = function (value) {
        this.setFlag("--account-key", value);
        return this;
    };
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    az_batch_node_scheduling_enable_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_batch_node_scheduling_enable_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_batch_node_scheduling_enable_command_builder;
}(base_1.CommandBuilder));
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
var az_batch_node_service_logs_upload_command_builder = /** @class */ (function (_super) {
    __extends(az_batch_node_service_logs_upload_command_builder, _super);
    function az_batch_node_service_logs_upload_command_builder(commandPath, resultDataTypeName, nodeId, poolId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.nodeId(nodeId);
        _this.poolId(poolId);
        return _this;
    }
    /** The ID of the Compute Node from which you want to upload the Azure Batch service log files. */
    az_batch_node_service_logs_upload_command_builder.prototype.nodeId = function (value) {
        this.setFlag("--node-id", value);
        return this;
    };
    /** The ID of the Pool that contains the Compute Node. */
    az_batch_node_service_logs_upload_command_builder.prototype.poolId = function (value) {
        this.setFlag("--pool-id", value);
        return this;
    };
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    az_batch_node_service_logs_upload_command_builder.prototype.accountEndpoint = function (value) {
        this.setFlag("--account-endpoint", value);
        return this;
    };
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    az_batch_node_service_logs_upload_command_builder.prototype.accountKey = function (value) {
        this.setFlag("--account-key", value);
        return this;
    };
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    az_batch_node_service_logs_upload_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Required. The URL of the container within Azure Blob Storage to which to upload the Batch Service log file(s). The URL must include a Shared Access Signature (SAS) granting write permissions to the container. The SAS duration must allow enough time for the upload to finish. The start time for SAS is optional and recommended to not be specified. */
    az_batch_node_service_logs_upload_command_builder.prototype.containerUrl = function (value) {
        this.setFlag("--container-url", value);
        return this;
    };
    /** The end of the time range from which to upload Batch Service log file(s). Any log file containing a log message in the time range will be uploaded. This means that the operation might retrieve more logs than have been requested since the entire log file is always uploaded, but the operation should not retrieve fewer logs than have been requested. If omitted, the default is to upload all logs available after the startTime. Expected format is an ISO-8601 timestamp. */
    az_batch_node_service_logs_upload_command_builder.prototype.endTime = function (value) {
        this.setFlag("--end-time", value);
        return this;
    };
    /** A file containing the upload batch service logs configuration specification in JSON (formatted to match the respective REST API body). If this parameter is specified, all 'Upload Batch Service Logs Configuration Arguments' are ignored. */
    az_batch_node_service_logs_upload_command_builder.prototype.jsonFile = function (value) {
        this.setFlag("--json-file", value);
        return this;
    };
    /** Required. The start of the time range from which to upload Batch Service log file(s). Any log file containing a log message in the time range will be uploaded. This means that the operation might retrieve more logs than have been requested since the entire log file is always uploaded, but the operation should not retrieve fewer logs than have been requested. Expected format is an ISO-8601 timestamp. */
    az_batch_node_service_logs_upload_command_builder.prototype.startTime = function (value) {
        this.setFlag("--start-time", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_batch_node_service_logs_upload_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_batch_node_service_logs_upload_command_builder;
}(base_1.CommandBuilder));
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
var az_batch_node_user_create_command_builder = /** @class */ (function (_super) {
    __extends(az_batch_node_user_create_command_builder, _super);
    function az_batch_node_user_create_command_builder(commandPath, resultDataTypeName, nodeId, poolId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.nodeId(nodeId);
        _this.poolId(poolId);
        return _this;
    }
    /** The ID of the machine on which you want to create a user Account. */
    az_batch_node_user_create_command_builder.prototype.nodeId = function (value) {
        this.setFlag("--node-id", value);
        return this;
    };
    /** The ID of the Pool that contains the Compute Node. */
    az_batch_node_user_create_command_builder.prototype.poolId = function (value) {
        this.setFlag("--pool-id", value);
        return this;
    };
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    az_batch_node_user_create_command_builder.prototype.accountEndpoint = function (value) {
        this.setFlag("--account-endpoint", value);
        return this;
    };
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    az_batch_node_user_create_command_builder.prototype.accountKey = function (value) {
        this.setFlag("--account-key", value);
        return this;
    };
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    az_batch_node_user_create_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** The time at which the Account should expire. If omitted, the default is 1 day from the current time. For Linux Compute Nodes, the expiryTime has a precision up to a day. Expected format is an ISO-8601 timestamp. */
    az_batch_node_user_create_command_builder.prototype.expiryTime = function (value) {
        this.setFlag("--expiry-time", value);
        return this;
    };
    /** Whether the Account should be an administrator on the Compute Node. The default value is false. True if flag present. */
    az_batch_node_user_create_command_builder.prototype.isAdmin = function (value) {
        this.setFlag("--is-admin", value);
        return this;
    };
    /** A file containing the user specification in JSON (formatted to match the respective REST API body). If this parameter is specified, all 'User Arguments' are ignored. */
    az_batch_node_user_create_command_builder.prototype.jsonFile = function (value) {
        this.setFlag("--json-file", value);
        return this;
    };
    /** Required. The user name of the Account. */
    az_batch_node_user_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The password of the Account. The password is required for Windows Compute Nodes (those created with 'cloudServiceConfiguration', or created with 'virtualMachineConfiguration' using a Windows Image reference). For Linux Compute Nodes, the password can optionally be specified along with the sshPublicKey property. */
    az_batch_node_user_create_command_builder.prototype.password = function (value) {
        this.setFlag("--password", value);
        return this;
    };
    /** The SSH public key that can be used for remote login to the Compute Node. The public key should be compatible with OpenSSH encoding and should be base 64 encoded. This property can be specified only for Linux Compute Nodes. If this is specified for a Windows Compute Node, then the Batch service rejects the request; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). */
    az_batch_node_user_create_command_builder.prototype.sshPublicKey = function (value) {
        this.setFlag("--ssh-public-key", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_batch_node_user_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_batch_node_user_create_command_builder;
}(base_1.CommandBuilder));
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
var az_batch_node_user_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_batch_node_user_delete_command_builder, _super);
    function az_batch_node_user_delete_command_builder(commandPath, resultDataTypeName, nodeId, poolId, userName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.nodeId(nodeId);
        _this.poolId(poolId);
        _this.userName(userName);
        return _this;
    }
    /** The ID of the machine on which you want to delete a user Account. */
    az_batch_node_user_delete_command_builder.prototype.nodeId = function (value) {
        this.setFlag("--node-id", value);
        return this;
    };
    /** The ID of the Pool that contains the Compute Node. */
    az_batch_node_user_delete_command_builder.prototype.poolId = function (value) {
        this.setFlag("--pool-id", value);
        return this;
    };
    /** The name of the user Account to delete. */
    az_batch_node_user_delete_command_builder.prototype.userName = function (value) {
        this.setFlag("--user-name", value);
        return this;
    };
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    az_batch_node_user_delete_command_builder.prototype.accountEndpoint = function (value) {
        this.setFlag("--account-endpoint", value);
        return this;
    };
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    az_batch_node_user_delete_command_builder.prototype.accountKey = function (value) {
        this.setFlag("--account-key", value);
        return this;
    };
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    az_batch_node_user_delete_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_batch_node_user_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_batch_node_user_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_batch_node_user_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_batch_node_user_reset_command_builder = /** @class */ (function (_super) {
    __extends(az_batch_node_user_reset_command_builder, _super);
    function az_batch_node_user_reset_command_builder(commandPath, resultDataTypeName, nodeId, poolId, userName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.nodeId(nodeId);
        _this.poolId(poolId);
        _this.userName(userName);
        return _this;
    }
    /** The ID of the machine on which you want to update a user Account. */
    az_batch_node_user_reset_command_builder.prototype.nodeId = function (value) {
        this.setFlag("--node-id", value);
        return this;
    };
    /** The ID of the Pool that contains the Compute Node. */
    az_batch_node_user_reset_command_builder.prototype.poolId = function (value) {
        this.setFlag("--pool-id", value);
        return this;
    };
    /** The name of the user Account to update. */
    az_batch_node_user_reset_command_builder.prototype.userName = function (value) {
        this.setFlag("--user-name", value);
        return this;
    };
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    az_batch_node_user_reset_command_builder.prototype.accountEndpoint = function (value) {
        this.setFlag("--account-endpoint", value);
        return this;
    };
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    az_batch_node_user_reset_command_builder.prototype.accountKey = function (value) {
        this.setFlag("--account-key", value);
        return this;
    };
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    az_batch_node_user_reset_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** The time at which the Account should expire. If omitted, the default is 1 day from the current time. For Linux Compute Nodes, the expiryTime has a precision up to a day. Expected format is an ISO-8601 timestamp. */
    az_batch_node_user_reset_command_builder.prototype.expiryTime = function (value) {
        this.setFlag("--expiry-time", value);
        return this;
    };
    /** A file containing the node update user parameter specification in JSON (formatted to match the respective REST API body). If this parameter is specified, all 'Node Update User Arguments' are ignored. */
    az_batch_node_user_reset_command_builder.prototype.jsonFile = function (value) {
        this.setFlag("--json-file", value);
        return this;
    };
    /** The password of the Account. The password is required for Windows Compute Nodes (those created with 'cloudServiceConfiguration', or created with 'virtualMachineConfiguration' using a Windows Image reference). For Linux Compute Nodes, the password can optionally be specified along with the sshPublicKey property. If omitted, any existing password is removed. */
    az_batch_node_user_reset_command_builder.prototype.password = function (value) {
        this.setFlag("--password", value);
        return this;
    };
    /** The SSH public key that can be used for remote login to the Compute Node. The public key should be compatible with OpenSSH encoding and should be base 64 encoded. This property can be specified only for Linux Compute Nodes. If this is specified for a Windows Compute Node, then the Batch service rejects the request; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). If omitted, any existing SSH public key is removed. */
    az_batch_node_user_reset_command_builder.prototype.sshPublicKey = function (value) {
        this.setFlag("--ssh-public-key", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_batch_node_user_reset_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_batch_node_user_reset_command_builder;
}(base_1.CommandBuilder));
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
var az_batch_node_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_batch_node_delete_command_builder, _super);
    function az_batch_node_delete_command_builder(commandPath, resultDataTypeName, poolId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.poolId(poolId);
        return _this;
    }
    /** The ID of the Pool from which you want to remove Compute Nodes. */
    az_batch_node_delete_command_builder.prototype.poolId = function (value) {
        this.setFlag("--pool-id", value);
        return this;
    };
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    az_batch_node_delete_command_builder.prototype.accountEndpoint = function (value) {
        this.setFlag("--account-endpoint", value);
        return this;
    };
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    az_batch_node_delete_command_builder.prototype.accountKey = function (value) {
        this.setFlag("--account-key", value);
        return this;
    };
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    az_batch_node_delete_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client. */
    az_batch_node_delete_command_builder.prototype.ifMatch = function (value) {
        this.setFlag("--if-match", value);
        return this;
    };
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. */
    az_batch_node_delete_command_builder.prototype.ifModifiedSince = function (value) {
        this.setFlag("--if-modified-since", value);
        return this;
    };
    /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client. */
    az_batch_node_delete_command_builder.prototype.ifNoneMatch = function (value) {
        this.setFlag("--if-none-match", value);
        return this;
    };
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. */
    az_batch_node_delete_command_builder.prototype.ifUnmodifiedSince = function (value) {
        this.setFlag("--if-unmodified-since", value);
        return this;
    };
    /** A file containing the node remove parameter specification in JSON (formatted to match the respective REST API body). If this parameter is specified, all 'Node Remove Arguments' are ignored. */
    az_batch_node_delete_command_builder.prototype.jsonFile = function (value) {
        this.setFlag("--json-file", value);
        return this;
    };
    /** Determines what to do with a Compute Node and its running task(s) after it has been selected for deallocation. The default value is requeue. */
    az_batch_node_delete_command_builder.prototype.nodeDeallocationOption = function (value) {
        this.setFlag("--node-deallocation-option", value);
        return this;
    };
    /** Required. A list containing the IDs of the Compute Nodes to be removed from the specified Pool. Space-separated values. */
    az_batch_node_delete_command_builder.prototype.nodeList = function (value) {
        this.setFlag("--node-list", value);
        return this;
    };
    /** The timeout for removal of Compute Nodes to the Pool. The default value is 15 minutes. The minimum value is 5 minutes. If you specify a value less than 5 minutes, the Batch service returns an error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). Expected format is an ISO-8601 duration. */
    az_batch_node_delete_command_builder.prototype.resizeTimeout = function (value) {
        this.setFlag("--resize-timeout", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_batch_node_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_batch_node_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_batch_node_list_command_builder = /** @class */ (function (_super) {
    __extends(az_batch_node_list_command_builder, _super);
    function az_batch_node_list_command_builder(commandPath, resultDataTypeName, poolId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.poolId(poolId);
        return _this;
    }
    /** The ID of the Pool from which you want to list Compute Nodes. */
    az_batch_node_list_command_builder.prototype.poolId = function (value) {
        this.setFlag("--pool-id", value);
        return this;
    };
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    az_batch_node_list_command_builder.prototype.accountEndpoint = function (value) {
        this.setFlag("--account-endpoint", value);
        return this;
    };
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    az_batch_node_list_command_builder.prototype.accountKey = function (value) {
        this.setFlag("--account-key", value);
        return this;
    };
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    az_batch_node_list_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** An OData $filter clause. For more information on constructing this filter, see <a href="https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-nodes-in-a-pool">https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-nodes-in-a-pool</a>. */
    az_batch_node_list_command_builder.prototype.filter = function (value) {
        this.setFlag("--filter", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_batch_node_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** An OData $select clause. */
    az_batch_node_list_command_builder.prototype.select = function (value) {
        this.setFlag("--select", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_batch_node_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_batch_node_list_command_builder;
}(base_1.CommandBuilder));
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
var az_batch_node_reboot_command_builder = /** @class */ (function (_super) {
    __extends(az_batch_node_reboot_command_builder, _super);
    function az_batch_node_reboot_command_builder(commandPath, resultDataTypeName, nodeId, poolId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.nodeId(nodeId);
        _this.poolId(poolId);
        return _this;
    }
    /** The ID of the Compute Node that you want to restart. */
    az_batch_node_reboot_command_builder.prototype.nodeId = function (value) {
        this.setFlag("--node-id", value);
        return this;
    };
    /** The ID of the Pool that contains the Compute Node. */
    az_batch_node_reboot_command_builder.prototype.poolId = function (value) {
        this.setFlag("--pool-id", value);
        return this;
    };
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    az_batch_node_reboot_command_builder.prototype.accountEndpoint = function (value) {
        this.setFlag("--account-endpoint", value);
        return this;
    };
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    az_batch_node_reboot_command_builder.prototype.accountKey = function (value) {
        this.setFlag("--account-key", value);
        return this;
    };
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    az_batch_node_reboot_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** When to reboot the Compute Node and what to do with currently running Tasks. The default value is requeue. */
    az_batch_node_reboot_command_builder.prototype.nodeRebootOption = function (value) {
        this.setFlag("--node-reboot-option", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_batch_node_reboot_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_batch_node_reboot_command_builder;
}(base_1.CommandBuilder));
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
var az_batch_node_reimage_command_builder = /** @class */ (function (_super) {
    __extends(az_batch_node_reimage_command_builder, _super);
    function az_batch_node_reimage_command_builder(commandPath, resultDataTypeName, nodeId, poolId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.nodeId(nodeId);
        _this.poolId(poolId);
        return _this;
    }
    /** The ID of the Compute Node that you want to restart. */
    az_batch_node_reimage_command_builder.prototype.nodeId = function (value) {
        this.setFlag("--node-id", value);
        return this;
    };
    /** The ID of the Pool that contains the Compute Node. */
    az_batch_node_reimage_command_builder.prototype.poolId = function (value) {
        this.setFlag("--pool-id", value);
        return this;
    };
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    az_batch_node_reimage_command_builder.prototype.accountEndpoint = function (value) {
        this.setFlag("--account-endpoint", value);
        return this;
    };
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    az_batch_node_reimage_command_builder.prototype.accountKey = function (value) {
        this.setFlag("--account-key", value);
        return this;
    };
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    az_batch_node_reimage_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** When to reimage the Compute Node and what to do with currently running Tasks. The default value is requeue. */
    az_batch_node_reimage_command_builder.prototype.nodeReimageOption = function (value) {
        this.setFlag("--node-reimage-option", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_batch_node_reimage_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_batch_node_reimage_command_builder;
}(base_1.CommandBuilder));
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
var az_batch_node_show_command_builder = /** @class */ (function (_super) {
    __extends(az_batch_node_show_command_builder, _super);
    function az_batch_node_show_command_builder(commandPath, resultDataTypeName, nodeId, poolId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.nodeId(nodeId);
        _this.poolId(poolId);
        return _this;
    }
    /** The ID of the Compute Node that you want to get information about. */
    az_batch_node_show_command_builder.prototype.nodeId = function (value) {
        this.setFlag("--node-id", value);
        return this;
    };
    /** The ID of the Pool that contains the Compute Node. */
    az_batch_node_show_command_builder.prototype.poolId = function (value) {
        this.setFlag("--pool-id", value);
        return this;
    };
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    az_batch_node_show_command_builder.prototype.accountEndpoint = function (value) {
        this.setFlag("--account-endpoint", value);
        return this;
    };
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    az_batch_node_show_command_builder.prototype.accountKey = function (value) {
        this.setFlag("--account-key", value);
        return this;
    };
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    az_batch_node_show_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_batch_node_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** An OData $select clause. */
    az_batch_node_show_command_builder.prototype.select = function (value) {
        this.setFlag("--select", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_batch_node_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_batch_node_show_command_builder;
}(base_1.CommandBuilder));
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
var az_batch_pool_all_statistics_show_command_builder = /** @class */ (function (_super) {
    __extends(az_batch_pool_all_statistics_show_command_builder, _super);
    function az_batch_pool_all_statistics_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    az_batch_pool_all_statistics_show_command_builder.prototype.accountEndpoint = function (value) {
        this.setFlag("--account-endpoint", value);
        return this;
    };
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    az_batch_pool_all_statistics_show_command_builder.prototype.accountKey = function (value) {
        this.setFlag("--account-key", value);
        return this;
    };
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    az_batch_pool_all_statistics_show_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_batch_pool_all_statistics_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_batch_pool_all_statistics_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_batch_pool_all_statistics_show_command_builder;
}(base_1.CommandBuilder));
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
var az_batch_pool_autoscale_disable_command_builder = /** @class */ (function (_super) {
    __extends(az_batch_pool_autoscale_disable_command_builder, _super);
    function az_batch_pool_autoscale_disable_command_builder(commandPath, resultDataTypeName, poolId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.poolId(poolId);
        return _this;
    }
    /** The ID of the Pool on which to disable automatic scaling. */
    az_batch_pool_autoscale_disable_command_builder.prototype.poolId = function (value) {
        this.setFlag("--pool-id", value);
        return this;
    };
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    az_batch_pool_autoscale_disable_command_builder.prototype.accountEndpoint = function (value) {
        this.setFlag("--account-endpoint", value);
        return this;
    };
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    az_batch_pool_autoscale_disable_command_builder.prototype.accountKey = function (value) {
        this.setFlag("--account-key", value);
        return this;
    };
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    az_batch_pool_autoscale_disable_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_batch_pool_autoscale_disable_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_batch_pool_autoscale_disable_command_builder;
}(base_1.CommandBuilder));
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
var az_batch_pool_autoscale_enable_command_builder = /** @class */ (function (_super) {
    __extends(az_batch_pool_autoscale_enable_command_builder, _super);
    function az_batch_pool_autoscale_enable_command_builder(commandPath, resultDataTypeName, poolId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.poolId(poolId);
        return _this;
    }
    /** The ID of the Pool on which to enable automatic scaling. */
    az_batch_pool_autoscale_enable_command_builder.prototype.poolId = function (value) {
        this.setFlag("--pool-id", value);
        return this;
    };
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    az_batch_pool_autoscale_enable_command_builder.prototype.accountEndpoint = function (value) {
        this.setFlag("--account-endpoint", value);
        return this;
    };
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    az_batch_pool_autoscale_enable_command_builder.prototype.accountKey = function (value) {
        this.setFlag("--account-key", value);
        return this;
    };
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    az_batch_pool_autoscale_enable_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** The time interval at which to automatically adjust the Pool size according to the autoscale formula. The default value is 15 minutes. The minimum and maximum value are 5 minutes and 168 hours respectively. If you specify a value less than 5 minutes or greater than 168 hours, the Batch service rejects the request with an invalid property value error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). If you specify a new interval, then the existing autoscale evaluation schedule will be stopped and a new autoscale evaluation schedule will be started, with its starting time being the time when this request was issued. */
    az_batch_pool_autoscale_enable_command_builder.prototype.autoScaleEvaluationInterval = function (value) {
        this.setFlag("--auto-scale-evaluation-interval", value);
        return this;
    };
    /** The formula for the desired number of Compute Nodes in the Pool. The formula is checked for validity before it is applied to the Pool. If the formula is not valid, the Batch service rejects the request with detailed error information. For more information about specifying this formula, see Automatically scale Compute Nodes in an Azure Batch Pool (<a href="https://azure.microsoft.com/en-us/documentation/articles/batch-automatic-scaling">https://azure.microsoft.com/en-us/documentation/articles/batch-automatic-scaling</a>). */
    az_batch_pool_autoscale_enable_command_builder.prototype.autoScaleFormula = function (value) {
        this.setFlag("--auto-scale-formula", value);
        return this;
    };
    /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client. */
    az_batch_pool_autoscale_enable_command_builder.prototype.ifMatch = function (value) {
        this.setFlag("--if-match", value);
        return this;
    };
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. */
    az_batch_pool_autoscale_enable_command_builder.prototype.ifModifiedSince = function (value) {
        this.setFlag("--if-modified-since", value);
        return this;
    };
    /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client. */
    az_batch_pool_autoscale_enable_command_builder.prototype.ifNoneMatch = function (value) {
        this.setFlag("--if-none-match", value);
        return this;
    };
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. */
    az_batch_pool_autoscale_enable_command_builder.prototype.ifUnmodifiedSince = function (value) {
        this.setFlag("--if-unmodified-since", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_batch_pool_autoscale_enable_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_batch_pool_autoscale_enable_command_builder;
}(base_1.CommandBuilder));
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
var az_batch_pool_autoscale_evaluate_command_builder = /** @class */ (function (_super) {
    __extends(az_batch_pool_autoscale_evaluate_command_builder, _super);
    function az_batch_pool_autoscale_evaluate_command_builder(commandPath, resultDataTypeName, autoScaleFormula, poolId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.autoScaleFormula(autoScaleFormula);
        _this.poolId(poolId);
        return _this;
    }
    /** The formula for the desired number of Compute Nodes in the Pool. The formula is validated and its results calculated, but it is not applied to the Pool. To apply the formula to the Pool, 'Enable automatic scaling on a Pool'. For more information about specifying this formula, see Automatically scale Compute Nodes in an Azure Batch Pool (<a href="https://azure.microsoft.com/en-us/documentation/articles/batch-automatic-scaling">https://azure.microsoft.com/en-us/documentation/articles/batch-automatic-scaling</a>). */
    az_batch_pool_autoscale_evaluate_command_builder.prototype.autoScaleFormula = function (value) {
        this.setFlag("--auto-scale-formula", value);
        return this;
    };
    /** The ID of the Pool on which to evaluate the automatic scaling formula. */
    az_batch_pool_autoscale_evaluate_command_builder.prototype.poolId = function (value) {
        this.setFlag("--pool-id", value);
        return this;
    };
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    az_batch_pool_autoscale_evaluate_command_builder.prototype.accountEndpoint = function (value) {
        this.setFlag("--account-endpoint", value);
        return this;
    };
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    az_batch_pool_autoscale_evaluate_command_builder.prototype.accountKey = function (value) {
        this.setFlag("--account-key", value);
        return this;
    };
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    az_batch_pool_autoscale_evaluate_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_batch_pool_autoscale_evaluate_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_batch_pool_autoscale_evaluate_command_builder;
}(base_1.CommandBuilder));
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
var az_batch_pool_node_counts_list_command_builder = /** @class */ (function (_super) {
    __extends(az_batch_pool_node_counts_list_command_builder, _super);
    function az_batch_pool_node_counts_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    az_batch_pool_node_counts_list_command_builder.prototype.accountEndpoint = function (value) {
        this.setFlag("--account-endpoint", value);
        return this;
    };
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    az_batch_pool_node_counts_list_command_builder.prototype.accountKey = function (value) {
        this.setFlag("--account-key", value);
        return this;
    };
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    az_batch_pool_node_counts_list_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** An OData $filter clause. For more information on constructing this filter, see <a href="https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch">https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch</a>. */
    az_batch_pool_node_counts_list_command_builder.prototype.filter = function (value) {
        this.setFlag("--filter", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_batch_pool_node_counts_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_batch_pool_node_counts_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_batch_pool_node_counts_list_command_builder;
}(base_1.CommandBuilder));
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
var az_batch_pool_supported_images_list_command_builder = /** @class */ (function (_super) {
    __extends(az_batch_pool_supported_images_list_command_builder, _super);
    function az_batch_pool_supported_images_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    az_batch_pool_supported_images_list_command_builder.prototype.accountEndpoint = function (value) {
        this.setFlag("--account-endpoint", value);
        return this;
    };
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    az_batch_pool_supported_images_list_command_builder.prototype.accountKey = function (value) {
        this.setFlag("--account-key", value);
        return this;
    };
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    az_batch_pool_supported_images_list_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** An OData $filter clause. For more information on constructing this filter, see <a href="https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-support-images">https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-support-images</a>. */
    az_batch_pool_supported_images_list_command_builder.prototype.filter = function (value) {
        this.setFlag("--filter", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_batch_pool_supported_images_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_batch_pool_supported_images_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_batch_pool_supported_images_list_command_builder;
}(base_1.CommandBuilder));
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
var az_batch_pool_usage_metrics_list_command_builder = /** @class */ (function (_super) {
    __extends(az_batch_pool_usage_metrics_list_command_builder, _super);
    function az_batch_pool_usage_metrics_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    az_batch_pool_usage_metrics_list_command_builder.prototype.accountEndpoint = function (value) {
        this.setFlag("--account-endpoint", value);
        return this;
    };
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    az_batch_pool_usage_metrics_list_command_builder.prototype.accountKey = function (value) {
        this.setFlag("--account-key", value);
        return this;
    };
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    az_batch_pool_usage_metrics_list_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** The latest time from which to include metrics. This must be at least two hours before the current time. If not specified this defaults to the end time of the last aggregation interval currently available. */
    az_batch_pool_usage_metrics_list_command_builder.prototype.endTime = function (value) {
        this.setFlag("--end-time", value);
        return this;
    };
    /** An OData $filter clause. For more information on constructing this filter, see <a href="https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-account-usage-metrics">https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-account-usage-metrics</a>. */
    az_batch_pool_usage_metrics_list_command_builder.prototype.filter = function (value) {
        this.setFlag("--filter", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_batch_pool_usage_metrics_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** The earliest time from which to include metrics. This must be at least two and a half hours before the current time. If not specified this defaults to the start time of the last aggregation interval currently available. */
    az_batch_pool_usage_metrics_list_command_builder.prototype.startTime = function (value) {
        this.setFlag("--start-time", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_batch_pool_usage_metrics_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_batch_pool_usage_metrics_list_command_builder;
}(base_1.CommandBuilder));
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
var az_batch_pool_create_command_builder = /** @class */ (function (_super) {
    __extends(az_batch_pool_create_command_builder, _super);
    function az_batch_pool_create_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    az_batch_pool_create_command_builder.prototype.accountEndpoint = function (value) {
        this.setFlag("--account-endpoint", value);
        return this;
    };
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    az_batch_pool_create_command_builder.prototype.accountKey = function (value) {
        this.setFlag("--account-key", value);
        return this;
    };
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    az_batch_pool_create_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** The list of application licenses the Batch service will make available on each Compute Node in the Pool. The list of application licenses must be a subset of available Batch service application licenses. If a license is requested which is not supported, Pool creation will fail. Space-separated values. */
    az_batch_pool_create_command_builder.prototype.applicationLicenses = function (value) {
        this.setFlag("--application-licenses", value);
        return this;
    };
    /** The list of Packages to be installed on each Compute Node in the Pool. Changes to Package references affect all new Nodes joining the Pool, but do not affect Compute Nodes that are already in the Pool until they are rebooted or reimaged. There is a maximum of 10 Package references on any given Pool. Space-separated application IDs with optional version in 'id[#version]' format. */
    az_batch_pool_create_command_builder.prototype.applicationPackageReferences = function (value) {
        this.setFlag("--application-package-references", value);
        return this;
    };
    /** A formula for the desired number of compute nodes in the pool. The formula is checked for validity before the pool is created. If the formula is not valid, the Batch service rejects the request with detailed error information. For more information about specifying this formula, see <a href="https://azure.microsoft.com/documentation/articles/batch-automatic-scaling/">https://azure.microsoft.com/documentation/articles/batch-automatic-scaling/</a>. */
    az_batch_pool_create_command_builder.prototype.autoScaleFormula = function (value) {
        this.setFlag("--auto-scale-formula", value);
        return this;
    };
    /** The list of Certificates to be installed on each Compute Node in the Pool. For Windows Nodes, the Batch service installs the Certificates to the specified Certificate store and location. For Linux Compute Nodes, the Certificates are stored in a directory inside the Task working directory and an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the Task to query for this location. For Certificates with visibility of 'remoteUser', a 'certs' directory is created in the user's home directory (e.g., /home/{user-name}/certs) and Certificates are placed in that directory. Space-separated certificate thumbprints. */
    az_batch_pool_create_command_builder.prototype.certificateReferences = function (value) {
        this.setFlag("--certificate-references", value);
        return this;
    };
    /** A space separated list of DiskEncryptionTargets. current possible values include OsDisk and TemporaryDisk. */
    az_batch_pool_create_command_builder.prototype.diskEncryptionTargets = function (value) {
        this.setFlag("--disk-encryption-targets", value);
        return this;
    };
    /** Whether the Pool permits direct communication between Compute Nodes. Enabling inter-node communication limits the maximum size of the Pool due to deployment restrictions on the Compute Nodes of the Pool. This may result in the Pool not reaching its desired size. The default value is false. True if flag present. */
    az_batch_pool_create_command_builder.prototype.enableInterNodeCommunication = function (value) {
        this.setFlag("--enable-inter-node-communication", value);
        return this;
    };
    /** Required. A string that uniquely identifies the Pool within the Account. The ID can contain any combination of alphanumeric characters including hyphens and underscores, and cannot contain more than 64 characters. The ID is case-preserving and case-insensitive (that is, you may not have two Pool IDs within an Account that differ only by case). */
    az_batch_pool_create_command_builder.prototype.id = function (value) {
        this.setFlag("--id", value);
        return this;
    };
    /** OS image reference. This can be either 'publisher:offer:sku[:version]' format, or a fully qualified ARM image id of the form '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Compute/images/{imageName}'. If 'publisher:offer:sku[:version]' format, version is optional and if omitted latest will be used. Valid values can be retrieved via 'az batch pool supported-images list'. For example: 'MicrosoftWindowsServer:WindowsServer:2012-R2-Datacenter:latest'. */
    az_batch_pool_create_command_builder.prototype.image = function (value) {
        this.setFlag("--image", value);
        return this;
    };
    /** A file containing the pool specification in JSON (formatted to match the respective REST API body). If this parameter is specified, all 'Pool Arguments' are ignored. */
    az_batch_pool_create_command_builder.prototype.jsonFile = function (value) {
        this.setFlag("--json-file", value);
        return this;
    };
    /** The maximum number of Tasks that can run concurrently on a single Compute Node in the Pool. The default value is 1. The maximum value is the smaller of 4 times the number of cores of the vmSize of the Pool or 256. */
    az_batch_pool_create_command_builder.prototype.maxTasksPerNode = function (value) {
        this.setFlag("--max-tasks-per-node", value);
        return this;
    };
    /** A list of name-value pairs associated with the Pool as metadata. The Batch service does not assign any meaning to metadata; it is solely for the use of user code. Space-separated values in 'key=value' format. */
    az_batch_pool_create_command_builder.prototype.metadata = function (value) {
        this.setFlag("--metadata", value);
        return this;
    };
    /** Required. The SKU of the Batch Compute Node agent to be provisioned on Compute Nodes in the Pool. The Batch Compute Node agent is a program that runs on each Compute Node in the Pool, and provides the command-and-control interface between the Compute Node and the Batch service. There are different implementations of the Compute Node agent, known as SKUs, for different operating systems. You must specify a Compute Node agent SKU which matches the selected Image reference. To get the list of supported Compute Node agent SKUs along with their list of verified Image references, see the 'List supported Compute Node agent SKUs' operation. */
    az_batch_pool_create_command_builder.prototype.nodeAgentSkuId = function (value) {
        this.setFlag("--node-agent-sku-id", value);
        return this;
    };
    /** Required. The Azure Guest OS family to be installed on the virtual machines in the Pool. Possible values are: 2 - OS Family 2, equivalent to Windows Server 2008 R2 SP1. 3 - OS Family 3, equivalent to Windows Server 2012. 4 - OS Family 4, equivalent to Windows Server 2012 R2. 5 - OS Family 5, equivalent to Windows Server 2016. 6 - OS Family 6, equivalent to Windows Server 2019. For more information, see Azure Guest OS Releases (<a href="https://azure.microsoft.com/documentation/articles/cloud-services-guestos-update-matrix/#releases">https://azure.microsoft.com/documentation/articles/cloud-services-guestos-update-matrix/#releases</a>). */
    az_batch_pool_create_command_builder.prototype.osFamily = function (value) {
        this.setFlag("--os-family", value);
        return this;
    };
    /** The Azure Guest OS version to be installed on the virtual machines in the Pool. The default value is \* which specifies the latest operating system version for the specified OS family. */
    az_batch_pool_create_command_builder.prototype.osVersion = function (value) {
        this.setFlag("--os-version", value);
        return this;
    };
    /** The timeout for allocation of Compute Nodes to the Pool. This timeout applies only to manual scaling; it has no effect when enableAutoScale is set to true. The default value is 15 minutes. The minimum value is 5 minutes. If you specify a value less than 5 minutes, the Batch service returns an error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). Expected format is an ISO-8601 duration. */
    az_batch_pool_create_command_builder.prototype.resizeTimeout = function (value) {
        this.setFlag("--resize-timeout", value);
        return this;
    };
    /** Required. The command line of the StartTask. The command line does not run under a shell, and therefore cannot take advantage of shell features such as environment variable expansion. If you want to take advantage of such features, you should invoke the shell in the command line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux. If the command line refers to file paths, it should use a relative path (relative to the Task working directory), or use the Batch provided environment variable (<a href="https://docs.microsoft.com/en-us/azure/batch/batch-compute-node-environment-variables">https://docs.microsoft.com/en-us/azure/batch/batch-compute-node-environment-variables</a>). */
    az_batch_pool_create_command_builder.prototype.startTaskCommandLine = function (value) {
        this.setFlag("--start-task-command-line", value);
        return this;
    };
    /** A list of files that the Batch service will download to the Compute Node before running the command line.  There is a maximum size for the list of resource files. When the max size is exceeded, the request will fail and the response error code will be RequestEntityTooLarge. If this occurs, the collection of ResourceFiles must be reduced in size. This can be achieved using .zip files, Application Packages, or Docker Containers. Files listed under this element are located in the Task's working directory. Space-separated resource references in filename=httpurl format. */
    az_batch_pool_create_command_builder.prototype.startTaskResourceFiles = function (value) {
        this.setFlag("--start-task-resource-files", value);
        return this;
    };
    /** Whether the Batch service should wait for the StartTask to complete successfully (that is, to exit with exit code 0) before scheduling any Tasks on the Compute Node. If true and the StartTask fails on a Node, the Batch service retries the StartTask up to its maximum retry count (maxTaskRetryCount). If the Task has still not completed successfully after all retries, then the Batch service marks the Node unusable, and will not schedule Tasks to it. This condition can be detected via the Compute Node state and failure info details. If false, the Batch service will not wait for the StartTask to complete. In this case, other Tasks can start executing on the Compute Node while the StartTask is still running; and even if the StartTask fails, new Tasks will continue to be scheduled on the Compute Node. The default is true. True if flag present. */
    az_batch_pool_create_command_builder.prototype.startTaskWaitForSuccess = function (value) {
        this.setFlag("--start-task-wait-for-success", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_batch_pool_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The desired number of dedicated Compute Nodes in the Pool. This property must not be specified if enableAutoScale is set to true. If enableAutoScale is set to false, then you must set either targetDedicatedNodes, targetLowPriorityNodes, or both. */
    az_batch_pool_create_command_builder.prototype.targetDedicatedNodes = function (value) {
        this.setFlag("--target-dedicated-nodes", value);
        return this;
    };
    /** The desired number of low-priority Compute Nodes in the Pool. This property must not be specified if enableAutoScale is set to true. If enableAutoScale is set to false, then you must set either targetDedicatedNodes, targetLowPriorityNodes, or both. */
    az_batch_pool_create_command_builder.prototype.targetLowPriorityNodes = function (value) {
        this.setFlag("--target-low-priority-nodes", value);
        return this;
    };
    /** The list of disk targets Batch Service will encrypt on the compute node. If omitted, no disks on the compute nodes in the pool will be encrypted. On Linux pool, only "TemporaryDisk" is supported; on Windows pool, "OsDisk" and "TemporaryDisk" must be specified. Space seperated target disks to be encrypted. Values can either be OsDisk or TemporaryDisk. */
    az_batch_pool_create_command_builder.prototype.targets = function (value) {
        this.setFlag("--targets", value);
        return this;
    };
    /** Required. The size of virtual machines in the Pool. All virtual machines in a Pool are the same size. For information about available sizes of virtual machines for Cloud Services Pools (pools created with cloudServiceConfiguration), see Sizes for Cloud Services (<a href="https://azure.microsoft.com/documentation/articles/cloud-services-sizes-specs/">https://azure.microsoft.com/documentation/articles/cloud-services-sizes-specs/</a>). Batch supports all Cloud Services VM sizes except ExtraSmall, A1V2 and A2V2. For information about available VM sizes for Pools using Images from the Virtual Machines Marketplace (pools created with virtualMachineConfiguration) see Sizes for Virtual Machines (Linux) (<a href="https://azure.microsoft.com/documentation/articles/virtual-machines-linux-sizes/">https://azure.microsoft.com/documentation/articles/virtual-machines-linux-sizes/</a>) or Sizes for Virtual Machines (Windows) (<a href="https://azure.microsoft.com/documentation/articles/virtual-machines-windows-sizes/">https://azure.microsoft.com/documentation/articles/virtual-machines-windows-sizes/</a>). Batch supports all Azure VM sizes except STANDARD_A0 and those with premium storage (STANDARD_GS, STANDARD_DS, and STANDARD_DSV2 series). */
    az_batch_pool_create_command_builder.prototype.vmSize = function (value) {
        this.setFlag("--vm-size", value);
        return this;
    };
    return az_batch_pool_create_command_builder;
}(base_1.CommandBuilder));
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
var az_batch_pool_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_batch_pool_delete_command_builder, _super);
    function az_batch_pool_delete_command_builder(commandPath, resultDataTypeName, poolId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.poolId(poolId);
        return _this;
    }
    /** The ID of the Pool to delete. */
    az_batch_pool_delete_command_builder.prototype.poolId = function (value) {
        this.setFlag("--pool-id", value);
        return this;
    };
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    az_batch_pool_delete_command_builder.prototype.accountEndpoint = function (value) {
        this.setFlag("--account-endpoint", value);
        return this;
    };
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    az_batch_pool_delete_command_builder.prototype.accountKey = function (value) {
        this.setFlag("--account-key", value);
        return this;
    };
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    az_batch_pool_delete_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client. */
    az_batch_pool_delete_command_builder.prototype.ifMatch = function (value) {
        this.setFlag("--if-match", value);
        return this;
    };
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. */
    az_batch_pool_delete_command_builder.prototype.ifModifiedSince = function (value) {
        this.setFlag("--if-modified-since", value);
        return this;
    };
    /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client. */
    az_batch_pool_delete_command_builder.prototype.ifNoneMatch = function (value) {
        this.setFlag("--if-none-match", value);
        return this;
    };
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. */
    az_batch_pool_delete_command_builder.prototype.ifUnmodifiedSince = function (value) {
        this.setFlag("--if-unmodified-since", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_batch_pool_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_batch_pool_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_batch_pool_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_batch_pool_list_command_builder = /** @class */ (function (_super) {
    __extends(az_batch_pool_list_command_builder, _super);
    function az_batch_pool_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    az_batch_pool_list_command_builder.prototype.accountEndpoint = function (value) {
        this.setFlag("--account-endpoint", value);
        return this;
    };
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    az_batch_pool_list_command_builder.prototype.accountKey = function (value) {
        this.setFlag("--account-key", value);
        return this;
    };
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    az_batch_pool_list_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** An OData $expand clause. */
    az_batch_pool_list_command_builder.prototype.expand = function (value) {
        this.setFlag("--expand", value);
        return this;
    };
    /** An OData $filter clause. For more information on constructing this filter, see <a href="https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-pools">https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-pools</a>. */
    az_batch_pool_list_command_builder.prototype.filter = function (value) {
        this.setFlag("--filter", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_batch_pool_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** An OData $select clause. */
    az_batch_pool_list_command_builder.prototype.select = function (value) {
        this.setFlag("--select", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_batch_pool_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_batch_pool_list_command_builder;
}(base_1.CommandBuilder));
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
var az_batch_pool_reset_command_builder = /** @class */ (function (_super) {
    __extends(az_batch_pool_reset_command_builder, _super);
    function az_batch_pool_reset_command_builder(commandPath, resultDataTypeName, poolId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.poolId(poolId);
        return _this;
    }
    /** The ID of the pool to update. */
    az_batch_pool_reset_command_builder.prototype.poolId = function (value) {
        this.setFlag("--pool-id", value);
        return this;
    };
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    az_batch_pool_reset_command_builder.prototype.accountEndpoint = function (value) {
        this.setFlag("--account-endpoint", value);
        return this;
    };
    /** The Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    az_batch_pool_reset_command_builder.prototype.accountKey = function (value) {
        this.setFlag("--account-key", value);
        return this;
    };
    /** The Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    az_batch_pool_reset_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Required. The list of Application Packages to be installed on each Compute Node in the Pool. The list replaces any existing Application Package references on the Pool. Changes to Application Package references affect all new Compute Nodes joining the Pool, but do not affect Compute Nodes that are already in the Pool until they are rebooted or reimaged. There is a maximum of 10 Application Package references on any given Pool. If omitted, or if you specify an empty collection, any existing Application Packages references are removed from the Pool. A maximum of 10 references may be specified on a given Pool. */
    az_batch_pool_reset_command_builder.prototype.applicationPackageReferences = function (value) {
        this.setFlag("--application-package-references", value);
        return this;
    };
    /** Required. A list of Certificates to be installed on each Compute Node in the Pool. This list replaces any existing Certificate references configured on the Pool. If you specify an empty collection, any existing Certificate references are removed from the Pool. For Windows Nodes, the Batch service installs the Certificates to the specified Certificate store and location. For Linux Compute Nodes, the Certificates are stored in a directory inside the Task working directory and an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the Task to query for this location. For Certificates with visibility of 'remoteUser', a 'certs' directory is created in the user's home directory (e.g., /home/{user-name}/certs) and Certificates are placed in that directory. */
    az_batch_pool_reset_command_builder.prototype.certificateReferences = function (value) {
        this.setFlag("--certificate-references", value);
        return this;
    };
    /** The file containing pool update properties parameter specification in JSON(formatted to match REST API request body). If this parameter is specified, all 'Pool Update Properties Parameter Arguments' are ignored. */
    az_batch_pool_reset_command_builder.prototype.jsonFile = function (value) {
        this.setFlag("--json-file", value);
        return this;
    };
    /** Required. A list of name-value pairs associated with the Pool as metadata. This list replaces any existing metadata configured on the Pool. If omitted, or if you specify an empty collection, any existing metadata is removed from the Pool. */
    az_batch_pool_reset_command_builder.prototype.metadata = function (value) {
        this.setFlag("--metadata", value);
        return this;
    };
    /** The command line of the start task. The command line does not run under a shell, and therefore cannot take advantage of shell features such as environment variable expansion. If you want to take advantage of such features, you should invoke the shell in the command line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux. */
    az_batch_pool_reset_command_builder.prototype.startTaskCommandLine = function (value) {
        this.setFlag("--start-task-command-line", value);
        return this;
    };
    /** A list of environment variable settings for the start task. Space-separated values in 'key=value' format. */
    az_batch_pool_reset_command_builder.prototype.startTaskEnvironmentSettings = function (value) {
        this.setFlag("--start-task-environment-settings", value);
        return this;
    };
    /** The maximum number of times the task may be retried. */
    az_batch_pool_reset_command_builder.prototype.startTaskMaxTaskRetryCount = function (value) {
        this.setFlag("--start-task-max-task-retry-count", value);
        return this;
    };
    /** Whether the Batch service should wait for the start task to complete successfully (that is, to exit with exit code 0) before scheduling any tasks on the compute node. True if flag present, otherwise defaults to False. */
    az_batch_pool_reset_command_builder.prototype.startTaskWaitForSuccess = function (value) {
        this.setFlag("--start-task-wait-for-success", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_batch_pool_reset_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_batch_pool_reset_command_builder;
}(base_1.CommandBuilder));
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
var az_batch_pool_resize_command_builder = /** @class */ (function (_super) {
    __extends(az_batch_pool_resize_command_builder, _super);
    function az_batch_pool_resize_command_builder(commandPath, resultDataTypeName, poolId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.poolId(poolId);
        return _this;
    }
    /** The ID of the pool. */
    az_batch_pool_resize_command_builder.prototype.poolId = function (value) {
        this.setFlag("--pool-id", value);
        return this;
    };
    /** Stop the pool resize operation. */
    az_batch_pool_resize_command_builder.prototype.abort = function (value) {
        this.setFlag("--abort", value);
        return this;
    };
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    az_batch_pool_resize_command_builder.prototype.accountEndpoint = function (value) {
        this.setFlag("--account-endpoint", value);
        return this;
    };
    /** The Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    az_batch_pool_resize_command_builder.prototype.accountKey = function (value) {
        this.setFlag("--account-key", value);
        return this;
    };
    /** The Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    az_batch_pool_resize_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** The operation will be performed only if the resource's current ETag exactly matches the specified value. */
    az_batch_pool_resize_command_builder.prototype.ifMatch = function (value) {
        this.setFlag("--if-match", value);
        return this;
    };
    /** The operation will be performed only if the resource has been modified since the specified timestamp. */
    az_batch_pool_resize_command_builder.prototype.ifModifiedSince = function (value) {
        this.setFlag("--if-modified-since", value);
        return this;
    };
    /** The operation will not be performed only if the resource's current ETag exactly matches the specified value. */
    az_batch_pool_resize_command_builder.prototype.ifNoneMatch = function (value) {
        this.setFlag("--if-none-match", value);
        return this;
    };
    /** The operation will not be performed only if the resource has been modified since the specified timestamp. */
    az_batch_pool_resize_command_builder.prototype.ifUnmodifiedSince = function (value) {
        this.setFlag("--if-unmodified-since", value);
        return this;
    };
    /** When nodes may be removed from the pool, if the pool size is decreasing. */
    az_batch_pool_resize_command_builder.prototype.nodeDeallocationOption = function (value) {
        this.setFlag("--node-deallocation-option", value);
        return this;
    };
    /** The timeout for allocation of Nodes to the Pool or removal of Compute Nodes from the Pool. The default value is 15 minutes. The minimum value is 5 minutes. If you specify a value less than 5 minutes, the Batch service returns an error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). */
    az_batch_pool_resize_command_builder.prototype.resizeTimeout = function (value) {
        this.setFlag("--resize-timeout", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_batch_pool_resize_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The desired number of dedicated Compute Nodes in the Pool. */
    az_batch_pool_resize_command_builder.prototype.targetDedicatedNodes = function (value) {
        this.setFlag("--target-dedicated-nodes", value);
        return this;
    };
    /** The desired number of low-priority Compute Nodes in the Pool. */
    az_batch_pool_resize_command_builder.prototype.targetLowPriorityNodes = function (value) {
        this.setFlag("--target-low-priority-nodes", value);
        return this;
    };
    return az_batch_pool_resize_command_builder;
}(base_1.CommandBuilder));
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
var az_batch_pool_set_command_builder = /** @class */ (function (_super) {
    __extends(az_batch_pool_set_command_builder, _super);
    function az_batch_pool_set_command_builder(commandPath, resultDataTypeName, poolId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.poolId(poolId);
        return _this;
    }
    /** The ID of the Pool to update. */
    az_batch_pool_set_command_builder.prototype.poolId = function (value) {
        this.setFlag("--pool-id", value);
        return this;
    };
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    az_batch_pool_set_command_builder.prototype.accountEndpoint = function (value) {
        this.setFlag("--account-endpoint", value);
        return this;
    };
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    az_batch_pool_set_command_builder.prototype.accountKey = function (value) {
        this.setFlag("--account-key", value);
        return this;
    };
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    az_batch_pool_set_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** A list of Packages to be installed on each Compute Node in the Pool. Changes to Package references affect all new Nodes joining the Pool, but do not affect Compute Nodes that are already in the Pool until they are rebooted or reimaged. If this element is present, it replaces any existing Package references. If you specify an empty collection, then all Package references are removed from the Pool. If omitted, any existing Package references are left unchanged. Space-separated application IDs with optional version in 'id[#version]' format. */
    az_batch_pool_set_command_builder.prototype.applicationPackageReferences = function (value) {
        this.setFlag("--application-package-references", value);
        return this;
    };
    /** A list of Certificates to be installed on each Compute Node in the Pool. If this element is present, it replaces any existing Certificate references configured on the Pool. If omitted, any existing Certificate references are left unchanged. For Windows Nodes, the Batch service installs the Certificates to the specified Certificate store and location. For Linux Compute Nodes, the Certificates are stored in a directory inside the Task working directory and an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the Task to query for this location. For Certificates with visibility of 'remoteUser', a 'certs' directory is created in the user's home directory (e.g., /home/{user-name}/certs) and Certificates are placed in that directory. Space-separated certificate thumbprints. */
    az_batch_pool_set_command_builder.prototype.certificateReferences = function (value) {
        this.setFlag("--certificate-references", value);
        return this;
    };
    /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client. */
    az_batch_pool_set_command_builder.prototype.ifMatch = function (value) {
        this.setFlag("--if-match", value);
        return this;
    };
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. */
    az_batch_pool_set_command_builder.prototype.ifModifiedSince = function (value) {
        this.setFlag("--if-modified-since", value);
        return this;
    };
    /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client. */
    az_batch_pool_set_command_builder.prototype.ifNoneMatch = function (value) {
        this.setFlag("--if-none-match", value);
        return this;
    };
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. */
    az_batch_pool_set_command_builder.prototype.ifUnmodifiedSince = function (value) {
        this.setFlag("--if-unmodified-since", value);
        return this;
    };
    /** A file containing the pool patch parameter specification in JSON (formatted to match the respective REST API body). If this parameter is specified, all 'Pool Arguments' are ignored. */
    az_batch_pool_set_command_builder.prototype.jsonFile = function (value) {
        this.setFlag("--json-file", value);
        return this;
    };
    /** A list of name-value pairs associated with the Pool as metadata. If this element is present, it replaces any existing metadata configured on the Pool. If you specify an empty collection, any metadata is removed from the Pool. If omitted, any existing metadata is left unchanged. Space-separated values in 'key=value' format. */
    az_batch_pool_set_command_builder.prototype.metadata = function (value) {
        this.setFlag("--metadata", value);
        return this;
    };
    /** Required. The command line of the StartTask. The command line does not run under a shell, and therefore cannot take advantage of shell features such as environment variable expansion. If you want to take advantage of such features, you should invoke the shell in the command line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux. If the command line refers to file paths, it should use a relative path (relative to the Task working directory), or use the Batch provided environment variable (<a href="https://docs.microsoft.com/en-us/azure/batch/batch-compute-node-environment-variables">https://docs.microsoft.com/en-us/azure/batch/batch-compute-node-environment-variables</a>). */
    az_batch_pool_set_command_builder.prototype.startTaskCommandLine = function (value) {
        this.setFlag("--start-task-command-line", value);
        return this;
    };
    /** A list of environment variable settings for the StartTask. Space-separated values in 'key=value' format. */
    az_batch_pool_set_command_builder.prototype.startTaskEnvironmentSettings = function (value) {
        this.setFlag("--start-task-environment-settings", value);
        return this;
    };
    /** The maximum number of times the Task may be retried. The Batch service retries a Task if its exit code is nonzero. Note that this value specifically controls the number of retries. The Batch service will try the Task once, and may then retry up to this limit. For example, if the maximum retry count is 3, Batch tries the Task up to 4 times (one initial try and 3 retries). If the maximum retry count is 0, the Batch service does not retry the Task. If the maximum retry count is -1, the Batch service retries the Task without limit. */
    az_batch_pool_set_command_builder.prototype.startTaskMaxTaskRetryCount = function (value) {
        this.setFlag("--start-task-max-task-retry-count", value);
        return this;
    };
    /** A list of files that the Batch service will download to the Compute Node before running the command line.  There is a maximum size for the list of resource files. When the max size is exceeded, the request will fail and the response error code will be RequestEntityTooLarge. If this occurs, the collection of ResourceFiles must be reduced in size. This can be achieved using .zip files, Application Packages, or Docker Containers. Files listed under this element are located in the Task's working directory. Space-separated resource references in filename=httpurl format. */
    az_batch_pool_set_command_builder.prototype.startTaskResourceFiles = function (value) {
        this.setFlag("--start-task-resource-files", value);
        return this;
    };
    /** Whether the Batch service should wait for the StartTask to complete successfully (that is, to exit with exit code 0) before scheduling any Tasks on the Compute Node. If true and the StartTask fails on a Node, the Batch service retries the StartTask up to its maximum retry count (maxTaskRetryCount). If the Task has still not completed successfully after all retries, then the Batch service marks the Node unusable, and will not schedule Tasks to it. This condition can be detected via the Compute Node state and failure info details. If false, the Batch service will not wait for the StartTask to complete. In this case, other Tasks can start executing on the Compute Node while the StartTask is still running; and even if the StartTask fails, new Tasks will continue to be scheduled on the Compute Node. The default is true. Specify either 'true' or 'false' to update the property. */
    az_batch_pool_set_command_builder.prototype.startTaskWaitForSuccess = function (value) {
        this.setFlag("--start-task-wait-for-success", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_batch_pool_set_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_batch_pool_set_command_builder;
}(base_1.CommandBuilder));
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
var az_batch_pool_show_command_builder = /** @class */ (function (_super) {
    __extends(az_batch_pool_show_command_builder, _super);
    function az_batch_pool_show_command_builder(commandPath, resultDataTypeName, poolId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.poolId(poolId);
        return _this;
    }
    /** The ID of the Pool to get. */
    az_batch_pool_show_command_builder.prototype.poolId = function (value) {
        this.setFlag("--pool-id", value);
        return this;
    };
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    az_batch_pool_show_command_builder.prototype.accountEndpoint = function (value) {
        this.setFlag("--account-endpoint", value);
        return this;
    };
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    az_batch_pool_show_command_builder.prototype.accountKey = function (value) {
        this.setFlag("--account-key", value);
        return this;
    };
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    az_batch_pool_show_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** An OData $expand clause. */
    az_batch_pool_show_command_builder.prototype.expand = function (value) {
        this.setFlag("--expand", value);
        return this;
    };
    /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client. */
    az_batch_pool_show_command_builder.prototype.ifMatch = function (value) {
        this.setFlag("--if-match", value);
        return this;
    };
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. */
    az_batch_pool_show_command_builder.prototype.ifModifiedSince = function (value) {
        this.setFlag("--if-modified-since", value);
        return this;
    };
    /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client. */
    az_batch_pool_show_command_builder.prototype.ifNoneMatch = function (value) {
        this.setFlag("--if-none-match", value);
        return this;
    };
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. */
    az_batch_pool_show_command_builder.prototype.ifUnmodifiedSince = function (value) {
        this.setFlag("--if-unmodified-since", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_batch_pool_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** An OData $select clause. */
    az_batch_pool_show_command_builder.prototype.select = function (value) {
        this.setFlag("--select", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_batch_pool_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_batch_pool_show_command_builder;
}(base_1.CommandBuilder));
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
var az_batch_task_file_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_batch_task_file_delete_command_builder, _super);
    function az_batch_task_file_delete_command_builder(commandPath, resultDataTypeName, filePath, jobId, taskId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.filePath(filePath);
        _this.jobId(jobId);
        _this.taskId(taskId);
        return _this;
    }
    /** The path to the Task file or directory that you want to delete. */
    az_batch_task_file_delete_command_builder.prototype.filePath = function (value) {
        this.setFlag("--file-path", value);
        return this;
    };
    /** The ID of the Job that contains the Task. */
    az_batch_task_file_delete_command_builder.prototype.jobId = function (value) {
        this.setFlag("--job-id", value);
        return this;
    };
    /** The ID of the Task whose file you want to delete. */
    az_batch_task_file_delete_command_builder.prototype.taskId = function (value) {
        this.setFlag("--task-id", value);
        return this;
    };
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    az_batch_task_file_delete_command_builder.prototype.accountEndpoint = function (value) {
        this.setFlag("--account-endpoint", value);
        return this;
    };
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    az_batch_task_file_delete_command_builder.prototype.accountKey = function (value) {
        this.setFlag("--account-key", value);
        return this;
    };
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    az_batch_task_file_delete_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Whether to delete children of a directory. If the filePath parameter represents a directory instead of a file, you can set recursive to true to delete the directory and all of the files and subdirectories in it. If recursive is false then the directory must be empty or deletion will fail. */
    az_batch_task_file_delete_command_builder.prototype.recursive = function (value) {
        this.setFlag("--recursive", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_batch_task_file_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_batch_task_file_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_batch_task_file_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_batch_task_file_download_command_builder = /** @class */ (function (_super) {
    __extends(az_batch_task_file_download_command_builder, _super);
    function az_batch_task_file_download_command_builder(commandPath, resultDataTypeName, destination, filePath, jobId, taskId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.destination(destination);
        _this.filePath(filePath);
        _this.jobId(jobId);
        _this.taskId(taskId);
        return _this;
    }
    /** The path to the destination file or directory. */
    az_batch_task_file_download_command_builder.prototype.destination = function (value) {
        this.setFlag("--destination", value);
        return this;
    };
    /** The path to the Task file that you want to get the content of. */
    az_batch_task_file_download_command_builder.prototype.filePath = function (value) {
        this.setFlag("--file-path", value);
        return this;
    };
    /** The ID of the Job that contains the Task. */
    az_batch_task_file_download_command_builder.prototype.jobId = function (value) {
        this.setFlag("--job-id", value);
        return this;
    };
    /** The ID of the Task whose file you want to retrieve. */
    az_batch_task_file_download_command_builder.prototype.taskId = function (value) {
        this.setFlag("--task-id", value);
        return this;
    };
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    az_batch_task_file_download_command_builder.prototype.accountEndpoint = function (value) {
        this.setFlag("--account-endpoint", value);
        return this;
    };
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    az_batch_task_file_download_command_builder.prototype.accountKey = function (value) {
        this.setFlag("--account-key", value);
        return this;
    };
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    az_batch_task_file_download_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** The byte range to be retrieved. If not set the file will be retrieved to the end. */
    az_batch_task_file_download_command_builder.prototype.endRange = function (value) {
        this.setFlag("--end-range", value);
        return this;
    };
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. */
    az_batch_task_file_download_command_builder.prototype.ifModifiedSince = function (value) {
        this.setFlag("--if-modified-since", value);
        return this;
    };
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. */
    az_batch_task_file_download_command_builder.prototype.ifUnmodifiedSince = function (value) {
        this.setFlag("--if-unmodified-since", value);
        return this;
    };
    /** The byte range to be retrieved. If not set the file will be retrieved from the beginning. */
    az_batch_task_file_download_command_builder.prototype.startRange = function (value) {
        this.setFlag("--start-range", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_batch_task_file_download_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_batch_task_file_download_command_builder;
}(base_1.CommandBuilder));
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
var az_batch_task_file_list_command_builder = /** @class */ (function (_super) {
    __extends(az_batch_task_file_list_command_builder, _super);
    function az_batch_task_file_list_command_builder(commandPath, resultDataTypeName, jobId, taskId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.jobId(jobId);
        _this.taskId(taskId);
        return _this;
    }
    /** The ID of the Job that contains the Task. */
    az_batch_task_file_list_command_builder.prototype.jobId = function (value) {
        this.setFlag("--job-id", value);
        return this;
    };
    /** The ID of the Task whose files you want to list. */
    az_batch_task_file_list_command_builder.prototype.taskId = function (value) {
        this.setFlag("--task-id", value);
        return this;
    };
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    az_batch_task_file_list_command_builder.prototype.accountEndpoint = function (value) {
        this.setFlag("--account-endpoint", value);
        return this;
    };
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    az_batch_task_file_list_command_builder.prototype.accountKey = function (value) {
        this.setFlag("--account-key", value);
        return this;
    };
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    az_batch_task_file_list_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** An OData $filter clause. For more information on constructing this filter, see <a href="https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-task-files">https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-task-files</a>. */
    az_batch_task_file_list_command_builder.prototype.filter = function (value) {
        this.setFlag("--filter", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_batch_task_file_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Whether to list children of the Task directory. This parameter can be used in combination with the filter parameter to list specific type of files. */
    az_batch_task_file_list_command_builder.prototype.recursive = function (value) {
        this.setFlag("--recursive", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_batch_task_file_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_batch_task_file_list_command_builder;
}(base_1.CommandBuilder));
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
var az_batch_task_file_show_command_builder = /** @class */ (function (_super) {
    __extends(az_batch_task_file_show_command_builder, _super);
    function az_batch_task_file_show_command_builder(commandPath, resultDataTypeName, filePath, jobId, taskId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.filePath(filePath);
        _this.jobId(jobId);
        _this.taskId(taskId);
        return _this;
    }
    /** The path to the Task file that you want to get the properties of. */
    az_batch_task_file_show_command_builder.prototype.filePath = function (value) {
        this.setFlag("--file-path", value);
        return this;
    };
    /** The ID of the Job that contains the Task. */
    az_batch_task_file_show_command_builder.prototype.jobId = function (value) {
        this.setFlag("--job-id", value);
        return this;
    };
    /** The ID of the Task whose file you want to get the properties of. */
    az_batch_task_file_show_command_builder.prototype.taskId = function (value) {
        this.setFlag("--task-id", value);
        return this;
    };
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    az_batch_task_file_show_command_builder.prototype.accountEndpoint = function (value) {
        this.setFlag("--account-endpoint", value);
        return this;
    };
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    az_batch_task_file_show_command_builder.prototype.accountKey = function (value) {
        this.setFlag("--account-key", value);
        return this;
    };
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    az_batch_task_file_show_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. */
    az_batch_task_file_show_command_builder.prototype.ifModifiedSince = function (value) {
        this.setFlag("--if-modified-since", value);
        return this;
    };
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. */
    az_batch_task_file_show_command_builder.prototype.ifUnmodifiedSince = function (value) {
        this.setFlag("--if-unmodified-since", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_batch_task_file_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_batch_task_file_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_batch_task_file_show_command_builder;
}(base_1.CommandBuilder));
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
var az_batch_task_subtask_list_command_builder = /** @class */ (function (_super) {
    __extends(az_batch_task_subtask_list_command_builder, _super);
    function az_batch_task_subtask_list_command_builder(commandPath, resultDataTypeName, jobId, taskId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.jobId(jobId);
        _this.taskId(taskId);
        return _this;
    }
    /** The ID of the Job. */
    az_batch_task_subtask_list_command_builder.prototype.jobId = function (value) {
        this.setFlag("--job-id", value);
        return this;
    };
    /** The ID of the Task. */
    az_batch_task_subtask_list_command_builder.prototype.taskId = function (value) {
        this.setFlag("--task-id", value);
        return this;
    };
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    az_batch_task_subtask_list_command_builder.prototype.accountEndpoint = function (value) {
        this.setFlag("--account-endpoint", value);
        return this;
    };
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    az_batch_task_subtask_list_command_builder.prototype.accountKey = function (value) {
        this.setFlag("--account-key", value);
        return this;
    };
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    az_batch_task_subtask_list_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_batch_task_subtask_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** An OData $select clause. */
    az_batch_task_subtask_list_command_builder.prototype.select = function (value) {
        this.setFlag("--select", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_batch_task_subtask_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_batch_task_subtask_list_command_builder;
}(base_1.CommandBuilder));
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
var az_batch_task_create_command_builder = /** @class */ (function (_super) {
    __extends(az_batch_task_create_command_builder, _super);
    function az_batch_task_create_command_builder(commandPath, resultDataTypeName, jobId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.jobId(jobId);
        return _this;
    }
    /** The ID of the job containing the task. */
    az_batch_task_create_command_builder.prototype.jobId = function (value) {
        this.setFlag("--job-id", value);
        return this;
    };
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    az_batch_task_create_command_builder.prototype.accountEndpoint = function (value) {
        this.setFlag("--account-endpoint", value);
        return this;
    };
    /** The Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    az_batch_task_create_command_builder.prototype.accountKey = function (value) {
        this.setFlag("--account-key", value);
        return this;
    };
    /** The Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    az_batch_task_create_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Required. An opaque string representing the location of a Compute Node or a Task that has run previously. You can pass the affinityId of a Node to indicate that this Task needs to run on that Compute Node. Note that this is just a soft affinity. If the target Compute Node is busy or unavailable at the time the Task is scheduled, then the Task will be scheduled elsewhere. */
    az_batch_task_create_command_builder.prototype.affinityId = function (value) {
        this.setFlag("--affinity-id", value);
        return this;
    };
    /** The space-separated list of IDs specifying the application packages to be installed. Space-separated application IDs with optional version in 'id[#version]' format. */
    az_batch_task_create_command_builder.prototype.applicationPackageReferences = function (value) {
        this.setFlag("--application-package-references", value);
        return this;
    };
    /** The command line of the task. The command line does not run under a shell, and therefore cannot take advantage of shell features such as environment variable expansion. If you want to take advantage of such features, you should invoke the shell in the command line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux. */
    az_batch_task_create_command_builder.prototype.commandLine = function (value) {
        this.setFlag("--command-line", value);
        return this;
    };
    /** A list of environment variable settings for the task. Space-separated values in 'key=value' format. */
    az_batch_task_create_command_builder.prototype.environmentSettings = function (value) {
        this.setFlag("--environment-settings", value);
        return this;
    };
    /** The file containing the task(s) to create in JSON(formatted to match REST API request body). When submitting multiple tasks, accepts either an array of tasks or a TaskAddCollectionParamater. If this parameter is specified, all other parameters are ignored. */
    az_batch_task_create_command_builder.prototype.jsonFile = function (value) {
        this.setFlag("--json-file", value);
        return this;
    };
    /** The maximum number of times the Task may be retried. The Batch service retries a Task if its exit code is nonzero. Note that this value specifically controls the number of retries for the Task executable due to a nonzero exit code. The Batch service will try the Task once, and may then retry up to this limit. For example, if the maximum retry count is 3, Batch tries the Task up to 4 times (one initial try and 3 retries). If the maximum retry count is 0, the Batch service does not retry the Task after the first attempt. If the maximum retry count is -1, the Batch service retries the Task without limit. */
    az_batch_task_create_command_builder.prototype.maxTaskRetryCount = function (value) {
        this.setFlag("--max-task-retry-count", value);
        return this;
    };
    /** The maximum elapsed time that the Task may run, measured from the time the Task starts. If the Task does not complete within the time limit, the Batch service terminates it. If this is not specified, there is no time limit on how long the Task may run. */
    az_batch_task_create_command_builder.prototype.maxWallClockTime = function (value) {
        this.setFlag("--max-wall-clock-time", value);
        return this;
    };
    /** A list of files that the Batch service will download to the compute node before running the command line. Space-separated resource references in filename=httpurl format, with httpurl being any HTTP url with public access or a SAS url with read access. */
    az_batch_task_create_command_builder.prototype.resourceFiles = function (value) {
        this.setFlag("--resource-files", value);
        return this;
    };
    /** The minimum time to retain the Task directory on the Compute Node where it ran, from the time it completes execution. After this time, the Batch service may delete the Task directory and all its contents. The default is 7 days, i.e. the Task directory will be retained for 7 days unless the Compute Node is removed or the Job is deleted. */
    az_batch_task_create_command_builder.prototype.retentionTime = function (value) {
        this.setFlag("--retention-time", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_batch_task_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The ID of the task. */
    az_batch_task_create_command_builder.prototype.taskId = function (value) {
        this.setFlag("--task-id", value);
        return this;
    };
    return az_batch_task_create_command_builder;
}(base_1.CommandBuilder));
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
var az_batch_task_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_batch_task_delete_command_builder, _super);
    function az_batch_task_delete_command_builder(commandPath, resultDataTypeName, jobId, taskId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.jobId(jobId);
        _this.taskId(taskId);
        return _this;
    }
    /** The ID of the Job from which to delete the Task. */
    az_batch_task_delete_command_builder.prototype.jobId = function (value) {
        this.setFlag("--job-id", value);
        return this;
    };
    /** The ID of the Task to delete. */
    az_batch_task_delete_command_builder.prototype.taskId = function (value) {
        this.setFlag("--task-id", value);
        return this;
    };
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    az_batch_task_delete_command_builder.prototype.accountEndpoint = function (value) {
        this.setFlag("--account-endpoint", value);
        return this;
    };
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    az_batch_task_delete_command_builder.prototype.accountKey = function (value) {
        this.setFlag("--account-key", value);
        return this;
    };
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    az_batch_task_delete_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client. */
    az_batch_task_delete_command_builder.prototype.ifMatch = function (value) {
        this.setFlag("--if-match", value);
        return this;
    };
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. */
    az_batch_task_delete_command_builder.prototype.ifModifiedSince = function (value) {
        this.setFlag("--if-modified-since", value);
        return this;
    };
    /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client. */
    az_batch_task_delete_command_builder.prototype.ifNoneMatch = function (value) {
        this.setFlag("--if-none-match", value);
        return this;
    };
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. */
    az_batch_task_delete_command_builder.prototype.ifUnmodifiedSince = function (value) {
        this.setFlag("--if-unmodified-since", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_batch_task_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_batch_task_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_batch_task_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_batch_task_list_command_builder = /** @class */ (function (_super) {
    __extends(az_batch_task_list_command_builder, _super);
    function az_batch_task_list_command_builder(commandPath, resultDataTypeName, jobId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.jobId(jobId);
        return _this;
    }
    /** The ID of the Job. */
    az_batch_task_list_command_builder.prototype.jobId = function (value) {
        this.setFlag("--job-id", value);
        return this;
    };
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    az_batch_task_list_command_builder.prototype.accountEndpoint = function (value) {
        this.setFlag("--account-endpoint", value);
        return this;
    };
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    az_batch_task_list_command_builder.prototype.accountKey = function (value) {
        this.setFlag("--account-key", value);
        return this;
    };
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    az_batch_task_list_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** An OData $expand clause. */
    az_batch_task_list_command_builder.prototype.expand = function (value) {
        this.setFlag("--expand", value);
        return this;
    };
    /** An OData $filter clause. For more information on constructing this filter, see <a href="https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-tasks">https://docs.microsoft.com/en-us/rest/api/batchservice/odata-filters-in-batch#list-tasks</a>. */
    az_batch_task_list_command_builder.prototype.filter = function (value) {
        this.setFlag("--filter", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_batch_task_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** An OData $select clause. */
    az_batch_task_list_command_builder.prototype.select = function (value) {
        this.setFlag("--select", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_batch_task_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_batch_task_list_command_builder;
}(base_1.CommandBuilder));
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
var az_batch_task_reactivate_command_builder = /** @class */ (function (_super) {
    __extends(az_batch_task_reactivate_command_builder, _super);
    function az_batch_task_reactivate_command_builder(commandPath, resultDataTypeName, jobId, taskId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.jobId(jobId);
        _this.taskId(taskId);
        return _this;
    }
    /** The ID of the Job containing the Task. */
    az_batch_task_reactivate_command_builder.prototype.jobId = function (value) {
        this.setFlag("--job-id", value);
        return this;
    };
    /** The ID of the Task to reactivate. */
    az_batch_task_reactivate_command_builder.prototype.taskId = function (value) {
        this.setFlag("--task-id", value);
        return this;
    };
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    az_batch_task_reactivate_command_builder.prototype.accountEndpoint = function (value) {
        this.setFlag("--account-endpoint", value);
        return this;
    };
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    az_batch_task_reactivate_command_builder.prototype.accountKey = function (value) {
        this.setFlag("--account-key", value);
        return this;
    };
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    az_batch_task_reactivate_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client. */
    az_batch_task_reactivate_command_builder.prototype.ifMatch = function (value) {
        this.setFlag("--if-match", value);
        return this;
    };
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. */
    az_batch_task_reactivate_command_builder.prototype.ifModifiedSince = function (value) {
        this.setFlag("--if-modified-since", value);
        return this;
    };
    /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client. */
    az_batch_task_reactivate_command_builder.prototype.ifNoneMatch = function (value) {
        this.setFlag("--if-none-match", value);
        return this;
    };
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. */
    az_batch_task_reactivate_command_builder.prototype.ifUnmodifiedSince = function (value) {
        this.setFlag("--if-unmodified-since", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_batch_task_reactivate_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_batch_task_reactivate_command_builder;
}(base_1.CommandBuilder));
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
var az_batch_task_reset_command_builder = /** @class */ (function (_super) {
    __extends(az_batch_task_reset_command_builder, _super);
    function az_batch_task_reset_command_builder(commandPath, resultDataTypeName, jobId, taskId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.jobId(jobId);
        _this.taskId(taskId);
        return _this;
    }
    /** The ID of the Job containing the Task. */
    az_batch_task_reset_command_builder.prototype.jobId = function (value) {
        this.setFlag("--job-id", value);
        return this;
    };
    /** The ID of the Task to update. */
    az_batch_task_reset_command_builder.prototype.taskId = function (value) {
        this.setFlag("--task-id", value);
        return this;
    };
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    az_batch_task_reset_command_builder.prototype.accountEndpoint = function (value) {
        this.setFlag("--account-endpoint", value);
        return this;
    };
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    az_batch_task_reset_command_builder.prototype.accountKey = function (value) {
        this.setFlag("--account-key", value);
        return this;
    };
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    az_batch_task_reset_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client. */
    az_batch_task_reset_command_builder.prototype.ifMatch = function (value) {
        this.setFlag("--if-match", value);
        return this;
    };
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. */
    az_batch_task_reset_command_builder.prototype.ifModifiedSince = function (value) {
        this.setFlag("--if-modified-since", value);
        return this;
    };
    /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client. */
    az_batch_task_reset_command_builder.prototype.ifNoneMatch = function (value) {
        this.setFlag("--if-none-match", value);
        return this;
    };
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. */
    az_batch_task_reset_command_builder.prototype.ifUnmodifiedSince = function (value) {
        this.setFlag("--if-unmodified-since", value);
        return this;
    };
    /** A file containing the constraints specification in JSON (formatted to match the respective REST API body). If this parameter is specified, all 'Constraints Arguments' are ignored. */
    az_batch_task_reset_command_builder.prototype.jsonFile = function (value) {
        this.setFlag("--json-file", value);
        return this;
    };
    /** The maximum number of times the Task may be retried. The Batch service retries a Task if its exit code is nonzero. Note that this value specifically controls the number of retries for the Task executable due to a nonzero exit code. The Batch service will try the Task once, and may then retry up to this limit. For example, if the maximum retry count is 3, Batch tries the Task up to 4 times (one initial try and 3 retries). If the maximum retry count is 0, the Batch service does not retry the Task after the first attempt. If the maximum retry count is -1, the Batch service retries the Task without limit. */
    az_batch_task_reset_command_builder.prototype.maxTaskRetryCount = function (value) {
        this.setFlag("--max-task-retry-count", value);
        return this;
    };
    /** The maximum elapsed time that the Task may run, measured from the time the Task starts. If the Task does not complete within the time limit, the Batch service terminates it. If this is not specified, there is no time limit on how long the Task may run. Expected format is an ISO-8601 duration. */
    az_batch_task_reset_command_builder.prototype.maxWallClockTime = function (value) {
        this.setFlag("--max-wall-clock-time", value);
        return this;
    };
    /** The minimum time to retain the Task directory on the Compute Node where it ran, from the time it completes execution. After this time, the Batch service may delete the Task directory and all its contents. The default is 7 days, i.e. the Task directory will be retained for 7 days unless the Compute Node is removed or the Job is deleted. Expected format is an ISO-8601 duration. */
    az_batch_task_reset_command_builder.prototype.retentionTime = function (value) {
        this.setFlag("--retention-time", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_batch_task_reset_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_batch_task_reset_command_builder;
}(base_1.CommandBuilder));
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
var az_batch_task_show_command_builder = /** @class */ (function (_super) {
    __extends(az_batch_task_show_command_builder, _super);
    function az_batch_task_show_command_builder(commandPath, resultDataTypeName, jobId, taskId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.jobId(jobId);
        _this.taskId(taskId);
        return _this;
    }
    /** The ID of the Job that contains the Task. */
    az_batch_task_show_command_builder.prototype.jobId = function (value) {
        this.setFlag("--job-id", value);
        return this;
    };
    /** The ID of the Task to get information about. */
    az_batch_task_show_command_builder.prototype.taskId = function (value) {
        this.setFlag("--task-id", value);
        return this;
    };
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    az_batch_task_show_command_builder.prototype.accountEndpoint = function (value) {
        this.setFlag("--account-endpoint", value);
        return this;
    };
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    az_batch_task_show_command_builder.prototype.accountKey = function (value) {
        this.setFlag("--account-key", value);
        return this;
    };
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    az_batch_task_show_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** An OData $expand clause. */
    az_batch_task_show_command_builder.prototype.expand = function (value) {
        this.setFlag("--expand", value);
        return this;
    };
    /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client. */
    az_batch_task_show_command_builder.prototype.ifMatch = function (value) {
        this.setFlag("--if-match", value);
        return this;
    };
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. */
    az_batch_task_show_command_builder.prototype.ifModifiedSince = function (value) {
        this.setFlag("--if-modified-since", value);
        return this;
    };
    /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client. */
    az_batch_task_show_command_builder.prototype.ifNoneMatch = function (value) {
        this.setFlag("--if-none-match", value);
        return this;
    };
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. */
    az_batch_task_show_command_builder.prototype.ifUnmodifiedSince = function (value) {
        this.setFlag("--if-unmodified-since", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_batch_task_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** An OData $select clause. */
    az_batch_task_show_command_builder.prototype.select = function (value) {
        this.setFlag("--select", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_batch_task_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_batch_task_show_command_builder;
}(base_1.CommandBuilder));
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
var az_batch_task_stop_command_builder = /** @class */ (function (_super) {
    __extends(az_batch_task_stop_command_builder, _super);
    function az_batch_task_stop_command_builder(commandPath, resultDataTypeName, jobId, taskId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.jobId(jobId);
        _this.taskId(taskId);
        return _this;
    }
    /** The ID of the Job containing the Task. */
    az_batch_task_stop_command_builder.prototype.jobId = function (value) {
        this.setFlag("--job-id", value);
        return this;
    };
    /** The ID of the Task to terminate. */
    az_batch_task_stop_command_builder.prototype.taskId = function (value) {
        this.setFlag("--task-id", value);
        return this;
    };
    /** Batch service endpoint. Alternatively, set by environment variable: AZURE_BATCH_ENDPOINT. */
    az_batch_task_stop_command_builder.prototype.accountEndpoint = function (value) {
        this.setFlag("--account-endpoint", value);
        return this;
    };
    /** Batch account key. Alternatively, set by environment variable: AZURE_BATCH_ACCESS_KEY. */
    az_batch_task_stop_command_builder.prototype.accountKey = function (value) {
        this.setFlag("--account-key", value);
        return this;
    };
    /** Batch account name. Alternatively, set by environment variable: AZURE_BATCH_ACCOUNT. */
    az_batch_task_stop_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service exactly matches the value specified by the client. */
    az_batch_task_stop_command_builder.prototype.ifMatch = function (value) {
        this.setFlag("--if-match", value);
        return this;
    };
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has been modified since the specified time. */
    az_batch_task_stop_command_builder.prototype.ifModifiedSince = function (value) {
        this.setFlag("--if-modified-since", value);
        return this;
    };
    /** An ETag value associated with the version of the resource known to the client. The operation will be performed only if the resource's current ETag on the service does not match the value specified by the client. */
    az_batch_task_stop_command_builder.prototype.ifNoneMatch = function (value) {
        this.setFlag("--if-none-match", value);
        return this;
    };
    /** A timestamp indicating the last modified time of the resource known to the client. The operation will be performed only if the resource on the service has not been modified since the specified time. */
    az_batch_task_stop_command_builder.prototype.ifUnmodifiedSince = function (value) {
        this.setFlag("--if-unmodified-since", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_batch_task_stop_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_batch_task_stop_command_builder;
}(base_1.CommandBuilder));
