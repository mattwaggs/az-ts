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
/** Manage links between Data Lake Analytics accounts and Azure Storage. */
var az_dla_account_blob_storage = /** @class */ (function () {
    function az_dla_account_blob_storage() {
    }
    /**
     * Links an Azure Storage account to the specified Data Lake Analytics account.
     *
     * Syntax:
     * ```
     * az dla account blob-storage add --access-key
     *                                 --storage-account-name
     *                                 [--account]
     *                                 [--ids]
     *                                 [--resource-group]
     *                                 [--subscription]
     *                                 [--suffix]
     * ```
     *
     * @param {string} accessKey The access key associated with this Azure Storage account that will be used to connect to it.
     * @param {string} storageAccountName Name of an existing storage account to link to.
     */
    az_dla_account_blob_storage.add = function (accessKey, storageAccountName) {
        return new az_dla_account_blob_storage_add_command_builder("az dla account blob-storage add", 'az_dla_account_blob_storage_add_command_result', accessKey, storageAccountName);
    };
    /**
     * Updates the specified Data Lake Analytics account to remove an Azure Storage account.
     *
     * Syntax:
     * ```
     * az dla account blob-storage delete --storage-account-name
     *                                    [--account]
     *                                    [--ids]
     *                                    [--resource-group]
     *                                    [--subscription]
     * ```
     *
     * @param {string} storageAccountName Name of an existing storage account to link to.
     */
    az_dla_account_blob_storage["delete"] = function (storageAccountName) {
        return new az_dla_account_blob_storage_delete_command_builder("az dla account blob-storage delete", 'az_dla_account_blob_storage_delete_command_result', storageAccountName);
    };
    /**
     * Gets the first page of Azure Storage accounts, if any, linked to the specified Data Lake Analytics account.
     *
     * Syntax:
     * ```
     * az dla account blob-storage list [--account]
     *                                  [--count]
     *                                  [--filter]
     *                                  [--ids]
     *                                  [--orderby]
     *                                  [--query-examples]
     *                                  [--resource-group]
     *                                  [--select]
     *                                  [--skip]
     *                                  [--subscription]
     *                                  [--top]
     * ```
     */
    az_dla_account_blob_storage.list = function () {
        return new az_dla_account_blob_storage_list_command_builder("az dla account blob-storage list", 'az_dla_account_blob_storage_list_command_result');
    };
    /**
     * Gets the specified Azure Storage account linked to the given Data Lake Analytics account.
     *
     * Syntax:
     * ```
     * az dla account blob-storage show --storage-account-name
     *                                  [--account]
     *                                  [--ids]
     *                                  [--query-examples]
     *                                  [--resource-group]
     *                                  [--subscription]
     * ```
     *
     * @param {string} storageAccountName Name of an existing storage account to link to.
     */
    az_dla_account_blob_storage.show = function (storageAccountName) {
        return new az_dla_account_blob_storage_show_command_builder("az dla account blob-storage show", 'az_dla_account_blob_storage_show_command_result', storageAccountName);
    };
    /**
     * Updates an Azure Storage account linked to the specified Data Lake Analytics account.
     *
     * Syntax:
     * ```
     * az dla account blob-storage update --access-key
     *                                    --storage-account-name
     *                                    [--account]
     *                                    [--ids]
     *                                    [--resource-group]
     *                                    [--subscription]
     *                                    [--suffix]
     * ```
     *
     * @param {string} accessKey The access key associated with this Azure Storage account that will be used to connect to it.
     * @param {string} storageAccountName Name of an existing storage account to link to.
     */
    az_dla_account_blob_storage.update = function (accessKey, storageAccountName) {
        return new az_dla_account_blob_storage_update_command_builder("az dla account blob-storage update", 'az_dla_account_blob_storage_update_command_result', accessKey, storageAccountName);
    };
    return az_dla_account_blob_storage;
}());
exports.az_dla_account_blob_storage = az_dla_account_blob_storage;
/** Manage Data Lake Analytics account compute policies. */
var az_dla_account_compute_policy = /** @class */ (function () {
    function az_dla_account_compute_policy() {
    }
    /**
     * Create a compute policy in the Data Lake Analytics account.
     *
     * Syntax:
     * ```
     * az dla account compute-policy create --account
     *                                      --compute-policy-name
     *                                      --object-id
     *                                      --object-type
     *                                      [--max-dop-per-job]
     *                                      [--min-priority-per-job]
     *                                      [--resource-group]
     *                                      [--subscription]
     * ```
     *
     * @param {string} account Name of the Data Lake Analytics account.
     * @param {string} computePolicyName The name of the compute policy to create.
     * @param {string} objectId The Azure Active Directory object ID of the user, group, or service principal to apply the policy to.
     * @param {string} objectType The Azure Active Directory object type associated with the supplied object ID.
     */
    az_dla_account_compute_policy.create = function (account, computePolicyName, objectId, objectType) {
        return new az_dla_account_compute_policy_create_command_builder("az dla account compute-policy create", 'az_dla_account_compute_policy_create_command_result', account, computePolicyName, objectId, objectType);
    };
    /**
     * Delete a compute policy in a Data Lake Analytics account.
     *
     * Syntax:
     * ```
     * az dla account compute-policy delete --compute-policy-name
     *                                      [--account]
     *                                      [--ids]
     *                                      [--resource-group]
     *                                      [--subscription]
     * ```
     *
     * @param {string} computePolicyName The name of the compute policy to delete.
     */
    az_dla_account_compute_policy["delete"] = function (computePolicyName) {
        return new az_dla_account_compute_policy_delete_command_builder("az dla account compute-policy delete", 'az_dla_account_compute_policy_delete_command_result', computePolicyName);
    };
    /**
     * List compute policies in the a Lake Analytics account.
     *
     * Syntax:
     * ```
     * az dla account compute-policy list [--account]
     *                                    [--ids]
     *                                    [--query-examples]
     *                                    [--resource-group]
     *                                    [--subscription]
     * ```
     */
    az_dla_account_compute_policy.list = function () {
        return new az_dla_account_compute_policy_list_command_builder("az dla account compute-policy list", 'az_dla_account_compute_policy_list_command_result');
    };
    /**
     * Retrieve a compute policy in a Data Lake Analytics account.
     *
     * Syntax:
     * ```
     * az dla account compute-policy show --compute-policy-name
     *                                    [--account]
     *                                    [--ids]
     *                                    [--query-examples]
     *                                    [--resource-group]
     *                                    [--subscription]
     * ```
     *
     * @param {string} computePolicyName The name of the compute policy to retrieve.
     */
    az_dla_account_compute_policy.show = function (computePolicyName) {
        return new az_dla_account_compute_policy_show_command_builder("az dla account compute-policy show", 'az_dla_account_compute_policy_show_command_result', computePolicyName);
    };
    /**
     * Update a compute policy in the Data Lake Analytics account.
     *
     * Syntax:
     * ```
     * az dla account compute-policy update --compute-policy-name
     *                                      [--account]
     *                                      [--ids]
     *                                      [--max-dop-per-job]
     *                                      [--min-priority-per-job]
     *                                      [--resource-group]
     *                                      [--subscription]
     * ```
     *
     * @param {string} computePolicyName The name of the compute policy to update.
     */
    az_dla_account_compute_policy.update = function (computePolicyName) {
        return new az_dla_account_compute_policy_update_command_builder("az dla account compute-policy update", 'az_dla_account_compute_policy_update_command_result', computePolicyName);
    };
    return az_dla_account_compute_policy;
}());
exports.az_dla_account_compute_policy = az_dla_account_compute_policy;
/** Manage links between Data Lake Analytics and Data Lake Store accounts. */
var az_dla_account_data_lake_store = /** @class */ (function () {
    function az_dla_account_data_lake_store() {
    }
    /**
     * Updates the specified Data Lake Analytics account to include the additional Data Lake Store account.
     *
     * Syntax:
     * ```
     * az dla account data-lake-store add --data-lake-store-account-name
     *                                    [--account]
     *                                    [--ids]
     *                                    [--resource-group]
     *                                    [--subscription]
     *                                    [--suffix]
     * ```
     *
     * @param {string} dataLakeStoreAccountName The name of the Data Lake Store account to add.
     */
    az_dla_account_data_lake_store.add = function (dataLakeStoreAccountName) {
        return new az_dla_account_data_lake_store_add_command_builder("az dla account data-lake-store add", 'az_dla_account_data_lake_store_add_command_result', dataLakeStoreAccountName);
    };
    /**
     * Updates the Data Lake Analytics account specified to remove the specified Data Lake Store account.
     *
     * Syntax:
     * ```
     * az dla account data-lake-store delete --data-lake-store-account-name
     *                                       [--account]
     *                                       [--ids]
     *                                       [--resource-group]
     *                                       [--subscription]
     * ```
     *
     * @param {string} dataLakeStoreAccountName The name of the Data Lake Store account to remove.
     */
    az_dla_account_data_lake_store["delete"] = function (dataLakeStoreAccountName) {
        return new az_dla_account_data_lake_store_delete_command_builder("az dla account data-lake-store delete", 'az_dla_account_data_lake_store_delete_command_result', dataLakeStoreAccountName);
    };
    /**
     * Gets the first page of Data Lake Store accounts linked to the specified Data Lake Analytics account.
     *
     * Syntax:
     * ```
     * az dla account data-lake-store list [--account]
     *                                     [--count]
     *                                     [--filter]
     *                                     [--ids]
     *                                     [--orderby]
     *                                     [--query-examples]
     *                                     [--resource-group]
     *                                     [--select]
     *                                     [--skip]
     *                                     [--subscription]
     *                                     [--top]
     * ```
     */
    az_dla_account_data_lake_store.list = function () {
        return new az_dla_account_data_lake_store_list_command_builder("az dla account data-lake-store list", 'az_dla_account_data_lake_store_list_command_result');
    };
    /**
     * Gets the specified Data Lake Store account details in the specified Data Lake Analytics account.
     *
     * Syntax:
     * ```
     * az dla account data-lake-store show --data-lake-store-account-name
     *                                     [--account]
     *                                     [--ids]
     *                                     [--query-examples]
     *                                     [--resource-group]
     *                                     [--subscription]
     * ```
     *
     * @param {string} dataLakeStoreAccountName The name of the Data Lake Store account to retrieve.
     */
    az_dla_account_data_lake_store.show = function (dataLakeStoreAccountName) {
        return new az_dla_account_data_lake_store_show_command_builder("az dla account data-lake-store show", 'az_dla_account_data_lake_store_show_command_result', dataLakeStoreAccountName);
    };
    return az_dla_account_data_lake_store;
}());
exports.az_dla_account_data_lake_store = az_dla_account_data_lake_store;
/** Manage Data Lake Analytics account firewall rules. */
var az_dla_account_firewall = /** @class */ (function () {
    function az_dla_account_firewall() {
    }
    /**
     * Create a firewall rule in a Data Lake Analytics account.
     *
     * Syntax:
     * ```
     * az dla account firewall create --account
     *                                --end-ip-address
     *                                --firewall-rule-name
     *                                --start-ip-address
     *                                [--resource-group]
     *                                [--subscription]
     * ```
     *
     * @param {string} account Name of the Data Lake Analytics account.
     * @param {string} endIpAddress The end of the valid IP range for the firewall rule.
     * @param {string} firewallRuleName The name of the firewall rule.
     * @param {string} startIpAddress The start of the valid IP range for the firewall rule.
     */
    az_dla_account_firewall.create = function (account, endIpAddress, firewallRuleName, startIpAddress) {
        return new az_dla_account_firewall_create_command_builder("az dla account firewall create", 'az_dla_account_firewall_create_command_result', account, endIpAddress, firewallRuleName, startIpAddress);
    };
    /**
     * Delete a firewall rule in a Data Lake Analytics account.
     *
     * Syntax:
     * ```
     * az dla account firewall delete --firewall-rule-name
     *                                [--account]
     *                                [--ids]
     *                                [--resource-group]
     *                                [--subscription]
     * ```
     *
     * @param {string} firewallRuleName The name of the firewall rule to delete.
     */
    az_dla_account_firewall["delete"] = function (firewallRuleName) {
        return new az_dla_account_firewall_delete_command_builder("az dla account firewall delete", 'az_dla_account_firewall_delete_command_result', firewallRuleName);
    };
    /**
     * List firewall rules in a Data Lake Analytics account.
     *
     * Syntax:
     * ```
     * az dla account firewall list [--account]
     *                              [--ids]
     *                              [--query-examples]
     *                              [--resource-group]
     *                              [--subscription]
     * ```
     */
    az_dla_account_firewall.list = function () {
        return new az_dla_account_firewall_list_command_builder("az dla account firewall list", 'az_dla_account_firewall_list_command_result');
    };
    /**
     * Retrieve a firewall rule in a Data Lake Analytics account.
     *
     * Syntax:
     * ```
     * az dla account firewall show --firewall-rule-name
     *                              [--account]
     *                              [--ids]
     *                              [--query-examples]
     *                              [--resource-group]
     *                              [--subscription]
     * ```
     *
     * @param {string} firewallRuleName The name of the firewall rule to retrieve.
     */
    az_dla_account_firewall.show = function (firewallRuleName) {
        return new az_dla_account_firewall_show_command_builder("az dla account firewall show", 'az_dla_account_firewall_show_command_result', firewallRuleName);
    };
    /**
     * Update a firewall rule in a Data Lake Analytics account.
     *
     * Syntax:
     * ```
     * az dla account firewall update --firewall-rule-name
     *                                [--account]
     *                                [--end-ip-address]
     *                                [--ids]
     *                                [--resource-group]
     *                                [--start-ip-address]
     *                                [--subscription]
     * ```
     *
     * @param {string} firewallRuleName The name of the firewall rule to update.
     */
    az_dla_account_firewall.update = function (firewallRuleName) {
        return new az_dla_account_firewall_update_command_builder("az dla account firewall update", 'az_dla_account_firewall_update_command_result', firewallRuleName);
    };
    return az_dla_account_firewall;
}());
exports.az_dla_account_firewall = az_dla_account_firewall;
/** Manage Data Lake Analytics accounts. */
var az_dla_account = /** @class */ (function () {
    function az_dla_account() {
    }
    /**
     * Create a Data Lake Analytics account.
     *
     * Syntax:
     * ```
     * az dla account create --account
     *                       --default-data-lake-store
     *                       [--location]
     *                       [--max-degree-of-parallelism]
     *                       [--max-job-count]
     *                       [--query-store-retention]
     *                       [--resource-group]
     *                       [--subscription]
     *                       [--tags]
     *                       [--tier {Commitment_100000AUHours, Commitment_10000AUHours, Commitment_1000AUHours, Commitment_100AUHours, Commitment_500000AUHours, Commitment_50000AUHours, Commitment_5000AUHours, Commitment_500AUHours, Consumption}]
     * ```
     *
     * @param {string} account Name of the Data Lake Analytics account.
     * @param {string} defaultDataLakeStore The default Data Lake Store account to associate with the created account.
     */
    az_dla_account.create = function (account, defaultDataLakeStore) {
        return new az_dla_account_create_command_builder("az dla account create", 'az_dla_account_create_command_result', account, defaultDataLakeStore);
    };
    /**
     * Delete a Data Lake Analytics account.
     *
     * Syntax:
     * ```
     * az dla account delete [--account]
     *                       [--ids]
     *                       [--resource-group]
     *                       [--subscription]
     * ```
     */
    az_dla_account["delete"] = function () {
        return new az_dla_account_delete_command_builder("az dla account delete", 'az_dla_account_delete_command_result');
    };
    /**
     * List available Data Lake Analytics accounts.
     *
     * Syntax:
     * ```
     * az dla account list [--query-examples]
     *                     [--resource-group]
     *                     [--subscription]
     * ```
     */
    az_dla_account.list = function () {
        return new az_dla_account_list_command_builder("az dla account list", 'az_dla_account_list_command_result');
    };
    /**
     * Get the details of a Data Lake Analytics account.
     *
     * Syntax:
     * ```
     * az dla account show [--account]
     *                     [--ids]
     *                     [--query-examples]
     *                     [--resource-group]
     *                     [--subscription]
     * ```
     */
    az_dla_account.show = function () {
        return new az_dla_account_show_command_builder("az dla account show", 'az_dla_account_show_command_result');
    };
    /**
     * Update a Data Lake Analytics account.
     *
     * Syntax:
     * ```
     * az dla account update [--account]
     *                       [--allow-azure-ips {Disabled, Enabled}]
     *                       [--firewall-state {Disabled, Enabled}]
     *                       [--ids]
     *                       [--max-degree-of-parallelism]
     *                       [--max-job-count]
     *                       [--query-store-retention]
     *                       [--resource-group]
     *                       [--subscription]
     *                       [--tags]
     *                       [--tier {Commitment_100000AUHours, Commitment_10000AUHours, Commitment_1000AUHours, Commitment_100AUHours, Commitment_500000AUHours, Commitment_50000AUHours, Commitment_5000AUHours, Commitment_500AUHours, Consumption}]
     * ```
     */
    az_dla_account.update = function () {
        return new az_dla_account_update_command_builder("az dla account update", 'az_dla_account_update_command_result');
    };
    return az_dla_account;
}());
exports.az_dla_account = az_dla_account;
/** Manage Data Lake Analytics catalog assemblies. */
var az_dla_catalog_assembly = /** @class */ (function () {
    function az_dla_catalog_assembly() {
    }
    /**
     * Retrieves the list of assemblies from the Data Lake Analytics catalog.
     *
     * Syntax:
     * ```
     * az dla catalog assembly list --database-name
     *                              [--account]
     *                              [--count]
     *                              [--filter]
     *                              [--ids]
     *                              [--orderby]
     *                              [--query-examples]
     *                              [--select]
     *                              [--skip]
     *                              [--subscription]
     *                              [--top]
     * ```
     *
     * @param {string} databaseName The name of the database containing the assembly.
     */
    az_dla_catalog_assembly.list = function (databaseName) {
        return new az_dla_catalog_assembly_list_command_builder("az dla catalog assembly list", 'az_dla_catalog_assembly_list_command_result', databaseName);
    };
    /**
     * Retrieves the specified assembly from the Data Lake Analytics catalog.
     *
     * Syntax:
     * ```
     * az dla catalog assembly show --assembly-name
     *                              --database-name
     *                              [--account]
     *                              [--ids]
     *                              [--query-examples]
     *                              [--subscription]
     * ```
     *
     * @param {string} assemblyName The name of the assembly.
     * @param {string} databaseName The name of the database containing the assembly.
     */
    az_dla_catalog_assembly.show = function (assemblyName, databaseName) {
        return new az_dla_catalog_assembly_show_command_builder("az dla catalog assembly show", 'az_dla_catalog_assembly_show_command_result', assemblyName, databaseName);
    };
    return az_dla_catalog_assembly;
}());
exports.az_dla_catalog_assembly = az_dla_catalog_assembly;
/** Manage Data Lake Analytics catalog credentials. */
var az_dla_catalog_credential = /** @class */ (function () {
    function az_dla_catalog_credential() {
    }
    /**
     * Create a new catalog credential for use with an external data source.
     *
     * Syntax:
     * ```
     * az dla catalog credential create --account
     *                                  --credential-name
     *                                  --database-name
     *                                  --uri
     *                                  --user-name
     *                                  [--password]
     *                                  [--subscription]
     * ```
     *
     * @param {string} account Name of the Data Lake Analytics account.
     * @param {string} credentialName The name of the credential.
     * @param {string} databaseName The name of the database in which to create the credential.
     * @param {string} uri URI of the external data source.
     * @param {string} userName The user name that will be used when authenticating with this credential.
     */
    az_dla_catalog_credential.create = function (account, credentialName, databaseName, uri, userName) {
        return new az_dla_catalog_credential_create_command_builder("az dla catalog credential create", 'az_dla_catalog_credential_create_command_result', account, credentialName, databaseName, uri, userName);
    };
    /**
     * Delete a catalog credential.
     *
     * Syntax:
     * ```
     * az dla catalog credential delete --credential-name
     *                                  --database-name
     *                                  [--account]
     *                                  [--cascade]
     *                                  [--ids]
     *                                  [--password]
     *                                  [--subscription]
     * ```
     *
     * @param {string} credentialName The name of the credential to delete.
     * @param {string} databaseName The name of the database containing the credential.
     */
    az_dla_catalog_credential["delete"] = function (credentialName, databaseName) {
        return new az_dla_catalog_credential_delete_command_builder("az dla catalog credential delete", 'az_dla_catalog_credential_delete_command_result', credentialName, databaseName);
    };
    /**
     * List catalog credentials.
     *
     * Syntax:
     * ```
     * az dla catalog credential list --database-name
     *                                [--account]
     *                                [--count]
     *                                [--filter]
     *                                [--ids]
     *                                [--orderby]
     *                                [--query-examples]
     *                                [--select]
     *                                [--skip]
     *                                [--subscription]
     *                                [--top]
     * ```
     *
     * @param {string} databaseName The name of the database containing the schema.
     */
    az_dla_catalog_credential.list = function (databaseName) {
        return new az_dla_catalog_credential_list_command_builder("az dla catalog credential list", 'az_dla_catalog_credential_list_command_result', databaseName);
    };
    /**
     * Retrieve a catalog credential.
     *
     * Syntax:
     * ```
     * az dla catalog credential show --credential-name
     *                                --database-name
     *                                [--account]
     *                                [--ids]
     *                                [--query-examples]
     *                                [--subscription]
     * ```
     *
     * @param {string} credentialName The name of the credential.
     * @param {string} databaseName The name of the database containing the schema.
     */
    az_dla_catalog_credential.show = function (credentialName, databaseName) {
        return new az_dla_catalog_credential_show_command_builder("az dla catalog credential show", 'az_dla_catalog_credential_show_command_result', credentialName, databaseName);
    };
    /**
     * Update a catalog credential for use with an external data source.
     *
     * Syntax:
     * ```
     * az dla catalog credential update --credential-name
     *                                  --database-name
     *                                  --uri
     *                                  --user-name
     *                                  [--account]
     *                                  [--ids]
     *                                  [--new-password]
     *                                  [--password]
     *                                  [--subscription]
     * ```
     *
     * @param {string} credentialName The name of the credential to update.
     * @param {string} databaseName The name of the database in which the credential exists.
     * @param {string} uri URI of the external data source.
     * @param {string} userName The user name associated with the credential that will have its password updated.
     */
    az_dla_catalog_credential.update = function (credentialName, databaseName, uri, userName) {
        return new az_dla_catalog_credential_update_command_builder("az dla catalog credential update", 'az_dla_catalog_credential_update_command_result', credentialName, databaseName, uri, userName);
    };
    return az_dla_catalog_credential;
}());
exports.az_dla_catalog_credential = az_dla_catalog_credential;
/** Manage Data Lake Analytics catalog databases. */
var az_dla_catalog_database = /** @class */ (function () {
    function az_dla_catalog_database() {
    }
    /**
     * Retrieves the list of databases from the Data Lake Analytics catalog.
     *
     * Syntax:
     * ```
     * az dla catalog database list [--account]
     *                              [--count]
     *                              [--filter]
     *                              [--ids]
     *                              [--orderby]
     *                              [--query-examples]
     *                              [--select]
     *                              [--skip]
     *                              [--subscription]
     *                              [--top]
     * ```
     */
    az_dla_catalog_database.list = function () {
        return new az_dla_catalog_database_list_command_builder("az dla catalog database list", 'az_dla_catalog_database_list_command_result');
    };
    /**
     * Retrieves the specified database from the Data Lake Analytics catalog.
     *
     * Syntax:
     * ```
     * az dla catalog database show --database-name
     *                              [--account]
     *                              [--ids]
     *                              [--query-examples]
     *                              [--subscription]
     * ```
     *
     * @param {string} databaseName The name of the database.
     */
    az_dla_catalog_database.show = function (databaseName) {
        return new az_dla_catalog_database_show_command_builder("az dla catalog database show", 'az_dla_catalog_database_show_command_result', databaseName);
    };
    return az_dla_catalog_database;
}());
exports.az_dla_catalog_database = az_dla_catalog_database;
/** Manage Data Lake Analytics catalog external data sources. */
var az_dla_catalog_external_data_source = /** @class */ (function () {
    function az_dla_catalog_external_data_source() {
    }
    /**
     * Retrieves the list of external data sources from the Data Lake Analytics catalog.
     *
     * Syntax:
     * ```
     * az dla catalog external-data-source list --database-name
     *                                          [--account]
     *                                          [--count]
     *                                          [--filter]
     *                                          [--ids]
     *                                          [--orderby]
     *                                          [--query-examples]
     *                                          [--select]
     *                                          [--skip]
     *                                          [--subscription]
     *                                          [--top]
     * ```
     *
     * @param {string} databaseName The name of the database containing the external data sources.
     */
    az_dla_catalog_external_data_source.list = function (databaseName) {
        return new az_dla_catalog_external_data_source_list_command_builder("az dla catalog external-data-source list", 'az_dla_catalog_external_data_source_list_command_result', databaseName);
    };
    /**
     * Retrieves the specified external data source from the Data Lake Analytics catalog.
     *
     * Syntax:
     * ```
     * az dla catalog external-data-source show --database-name
     *                                          --external-data-source-name
     *                                          [--account]
     *                                          [--ids]
     *                                          [--query-examples]
     *                                          [--subscription]
     * ```
     *
     * @param {string} databaseName The name of the database containing the external data source.
     * @param {string} externalDataSourceName The name of the external data source.
     */
    az_dla_catalog_external_data_source.show = function (databaseName, externalDataSourceName) {
        return new az_dla_catalog_external_data_source_show_command_builder("az dla catalog external-data-source show", 'az_dla_catalog_external_data_source_show_command_result', databaseName, externalDataSourceName);
    };
    return az_dla_catalog_external_data_source;
}());
exports.az_dla_catalog_external_data_source = az_dla_catalog_external_data_source;
/** Manage Data Lake Analytics catalog packages. */
var az_dla_catalog_package = /** @class */ (function () {
    function az_dla_catalog_package() {
    }
    /**
     * Retrieves the list of packages from the Data Lake Analytics catalog.
     *
     * Syntax:
     * ```
     * az dla catalog package list --database-name
     *                             --schema-name
     *                             [--account]
     *                             [--count]
     *                             [--filter]
     *                             [--ids]
     *                             [--orderby]
     *                             [--query-examples]
     *                             [--select]
     *                             [--skip]
     *                             [--subscription]
     *                             [--top]
     * ```
     *
     * @param {string} databaseName The name of the database containing the packages.
     * @param {string} schemaName The name of the schema containing the packages.
     */
    az_dla_catalog_package.list = function (databaseName, schemaName) {
        return new az_dla_catalog_package_list_command_builder("az dla catalog package list", 'az_dla_catalog_package_list_command_result', databaseName, schemaName);
    };
    /**
     * Retrieves the specified package from the Data Lake Analytics catalog.
     *
     * Syntax:
     * ```
     * az dla catalog package show --database-name
     *                             --package-name
     *                             --schema-name
     *                             [--account]
     *                             [--ids]
     *                             [--query-examples]
     *                             [--subscription]
     * ```
     *
     * @param {string} databaseName The name of the database containing the package.
     * @param {string} packageName The name of the package.
     * @param {string} schemaName The name of the schema containing the package.
     */
    az_dla_catalog_package.show = function (databaseName, packageName, schemaName) {
        return new az_dla_catalog_package_show_command_builder("az dla catalog package show", 'az_dla_catalog_package_show_command_result', databaseName, packageName, schemaName);
    };
    return az_dla_catalog_package;
}());
exports.az_dla_catalog_package = az_dla_catalog_package;
/** Manage Data Lake Analytics catalog stored procedures. */
var az_dla_catalog_procedure = /** @class */ (function () {
    function az_dla_catalog_procedure() {
    }
    /**
     * Retrieves the list of procedures from the Data Lake Analytics catalog.
     *
     * Syntax:
     * ```
     * az dla catalog procedure list --database-name
     *                               --schema-name
     *                               [--account]
     *                               [--count]
     *                               [--filter]
     *                               [--ids]
     *                               [--orderby]
     *                               [--query-examples]
     *                               [--select]
     *                               [--skip]
     *                               [--subscription]
     *                               [--top]
     * ```
     *
     * @param {string} databaseName The name of the database containing the procedures.
     * @param {string} schemaName The name of the schema containing the procedures.
     */
    az_dla_catalog_procedure.list = function (databaseName, schemaName) {
        return new az_dla_catalog_procedure_list_command_builder("az dla catalog procedure list", 'az_dla_catalog_procedure_list_command_result', databaseName, schemaName);
    };
    /**
     * Retrieves the specified procedure from the Data Lake Analytics catalog.
     *
     * Syntax:
     * ```
     * az dla catalog procedure show --database-name
     *                               --procedure-name
     *                               --schema-name
     *                               [--account]
     *                               [--ids]
     *                               [--query-examples]
     *                               [--subscription]
     * ```
     *
     * @param {string} databaseName The name of the database containing the procedure.
     * @param {string} procedureName The name of the procedure.
     * @param {string} schemaName The name of the schema containing the procedure.
     */
    az_dla_catalog_procedure.show = function (databaseName, procedureName, schemaName) {
        return new az_dla_catalog_procedure_show_command_builder("az dla catalog procedure show", 'az_dla_catalog_procedure_show_command_result', databaseName, procedureName, schemaName);
    };
    return az_dla_catalog_procedure;
}());
exports.az_dla_catalog_procedure = az_dla_catalog_procedure;
/** Manage Data Lake Analytics catalog schemas. */
var az_dla_catalog_schema = /** @class */ (function () {
    function az_dla_catalog_schema() {
    }
    /**
     * Retrieves the list of schemas from the Data Lake Analytics catalog.
     *
     * Syntax:
     * ```
     * az dla catalog schema list --database-name
     *                            [--account]
     *                            [--count]
     *                            [--filter]
     *                            [--ids]
     *                            [--orderby]
     *                            [--query-examples]
     *                            [--select]
     *                            [--skip]
     *                            [--subscription]
     *                            [--top]
     * ```
     *
     * @param {string} databaseName The name of the database containing the schema.
     */
    az_dla_catalog_schema.list = function (databaseName) {
        return new az_dla_catalog_schema_list_command_builder("az dla catalog schema list", 'az_dla_catalog_schema_list_command_result', databaseName);
    };
    /**
     * Retrieves the specified schema from the Data Lake Analytics catalog.
     *
     * Syntax:
     * ```
     * az dla catalog schema show --database-name
     *                            --schema-name
     *                            [--account]
     *                            [--ids]
     *                            [--query-examples]
     *                            [--subscription]
     * ```
     *
     * @param {string} databaseName The name of the database containing the schema.
     * @param {string} schemaName The name of the schema.
     */
    az_dla_catalog_schema.show = function (databaseName, schemaName) {
        return new az_dla_catalog_schema_show_command_builder("az dla catalog schema show", 'az_dla_catalog_schema_show_command_result', databaseName, schemaName);
    };
    return az_dla_catalog_schema;
}());
exports.az_dla_catalog_schema = az_dla_catalog_schema;
/** Manage Data Lake Analytics catalog table partitions. */
var az_dla_catalog_table_partition = /** @class */ (function () {
    function az_dla_catalog_table_partition() {
    }
    /**
     * Retrieves the list of table partitions from the Data Lake Analytics catalog.
     *
     * Syntax:
     * ```
     * az dla catalog table-partition list --database-name
     *                                     --schema-name
     *                                     --table-name
     *                                     [--account]
     *                                     [--count]
     *                                     [--filter]
     *                                     [--ids]
     *                                     [--orderby]
     *                                     [--query-examples]
     *                                     [--select]
     *                                     [--skip]
     *                                     [--subscription]
     *                                     [--top]
     * ```
     *
     * @param {string} databaseName The name of the database containing the partitions.
     * @param {string} schemaName The name of the schema containing the partitions.
     * @param {string} tableName The name of the table containing the partitions.
     */
    az_dla_catalog_table_partition.list = function (databaseName, schemaName, tableName) {
        return new az_dla_catalog_table_partition_list_command_builder("az dla catalog table-partition list", 'az_dla_catalog_table_partition_list_command_result', databaseName, schemaName, tableName);
    };
    /**
     * Retrieves the specified table partition from the Data Lake Analytics catalog.
     *
     * Syntax:
     * ```
     * az dla catalog table-partition show --database-name
     *                                     --partition-name
     *                                     --schema-name
     *                                     --table-name
     *                                     [--account]
     *                                     [--ids]
     *                                     [--query-examples]
     *                                     [--subscription]
     * ```
     *
     * @param {string} databaseName The name of the database containing the partition.
     * @param {string} partitionName The name of the table partition.
     * @param {string} schemaName The name of the schema containing the partition.
     * @param {string} tableName The name of the table containing the partition.
     */
    az_dla_catalog_table_partition.show = function (databaseName, partitionName, schemaName, tableName) {
        return new az_dla_catalog_table_partition_show_command_builder("az dla catalog table-partition show", 'az_dla_catalog_table_partition_show_command_result', databaseName, partitionName, schemaName, tableName);
    };
    return az_dla_catalog_table_partition;
}());
exports.az_dla_catalog_table_partition = az_dla_catalog_table_partition;
/** Manage Data Lake Analytics catalog table statistics. */
var az_dla_catalog_table_stats = /** @class */ (function () {
    function az_dla_catalog_table_stats() {
    }
    /**
     * List table statistics in a database, table, or schema.
     *
     * Syntax:
     * ```
     * az dla catalog table-stats list --database-name
     *                                 [--account]
     *                                 [--ids]
     *                                 [--query-examples]
     *                                 [--schema-name]
     *                                 [--subscription]
     *                                 [--table-name]
     * ```
     *
     * @param {string} databaseName The name of the database.
     */
    az_dla_catalog_table_stats.list = function (databaseName) {
        return new az_dla_catalog_table_stats_list_command_builder("az dla catalog table-stats list", 'az_dla_catalog_table_stats_list_command_result', databaseName);
    };
    /**
     * Retrieves the specified table statistics from the Data Lake Analytics catalog.
     *
     * Syntax:
     * ```
     * az dla catalog table-stats show --database-name
     *                                 --schema-name
     *                                 --statistics-name
     *                                 --table-name
     *                                 [--account]
     *                                 [--ids]
     *                                 [--query-examples]
     *                                 [--subscription]
     * ```
     *
     * @param {string} databaseName The name of the database containing the statistics.
     * @param {string} schemaName The name of the schema containing the statistics.
     * @param {string} statisticsName The name of the table statistics.
     * @param {string} tableName The name of the table containing the statistics.
     */
    az_dla_catalog_table_stats.show = function (databaseName, schemaName, statisticsName, tableName) {
        return new az_dla_catalog_table_stats_show_command_builder("az dla catalog table-stats show", 'az_dla_catalog_table_stats_show_command_result', databaseName, schemaName, statisticsName, tableName);
    };
    return az_dla_catalog_table_stats;
}());
exports.az_dla_catalog_table_stats = az_dla_catalog_table_stats;
/** Manage Data Lake Analytics catalog table types. */
var az_dla_catalog_table_type = /** @class */ (function () {
    function az_dla_catalog_table_type() {
    }
    /**
     * Retrieves the list of table types from the Data Lake Analytics catalog.
     *
     * Syntax:
     * ```
     * az dla catalog table-type list --database-name
     *                                --schema-name
     *                                [--account]
     *                                [--count]
     *                                [--filter]
     *                                [--ids]
     *                                [--orderby]
     *                                [--query-examples]
     *                                [--select]
     *                                [--skip]
     *                                [--subscription]
     *                                [--top]
     * ```
     *
     * @param {string} databaseName The name of the database containing the table types.
     * @param {string} schemaName The name of the schema containing the table types.
     */
    az_dla_catalog_table_type.list = function (databaseName, schemaName) {
        return new az_dla_catalog_table_type_list_command_builder("az dla catalog table-type list", 'az_dla_catalog_table_type_list_command_result', databaseName, schemaName);
    };
    /**
     * Retrieves the specified table type from the Data Lake Analytics catalog.
     *
     * Syntax:
     * ```
     * az dla catalog table-type show --database-name
     *                                --schema-name
     *                                --table-type-name
     *                                [--account]
     *                                [--ids]
     *                                [--query-examples]
     *                                [--subscription]
     * ```
     *
     * @param {string} databaseName The name of the database containing the table type.
     * @param {string} schemaName The name of the schema containing the table type.
     * @param {string} tableTypeName The name of the table type to retrieve.
     */
    az_dla_catalog_table_type.show = function (databaseName, schemaName, tableTypeName) {
        return new az_dla_catalog_table_type_show_command_builder("az dla catalog table-type show", 'az_dla_catalog_table_type_show_command_result', databaseName, schemaName, tableTypeName);
    };
    return az_dla_catalog_table_type;
}());
exports.az_dla_catalog_table_type = az_dla_catalog_table_type;
/** Manage Data Lake Analytics catalog tables. */
var az_dla_catalog_table = /** @class */ (function () {
    function az_dla_catalog_table() {
    }
    /**
     * List tables in a database or schema.
     *
     * Syntax:
     * ```
     * az dla catalog table list --database-name
     *                           [--account]
     *                           [--ids]
     *                           [--query-examples]
     *                           [--schema-name]
     *                           [--subscription]
     * ```
     *
     * @param {string} databaseName The name of the database.
     */
    az_dla_catalog_table.list = function (databaseName) {
        return new az_dla_catalog_table_list_command_builder("az dla catalog table list", 'az_dla_catalog_table_list_command_result', databaseName);
    };
    /**
     * Retrieves the specified table from the Data Lake Analytics catalog.
     *
     * Syntax:
     * ```
     * az dla catalog table show --database-name
     *                           --schema-name
     *                           --table-name
     *                           [--account]
     *                           [--ids]
     *                           [--query-examples]
     *                           [--subscription]
     * ```
     *
     * @param {string} databaseName The name of the database containing the table.
     * @param {string} schemaName The name of the schema containing the table.
     * @param {string} tableName The name of the table.
     */
    az_dla_catalog_table.show = function (databaseName, schemaName, tableName) {
        return new az_dla_catalog_table_show_command_builder("az dla catalog table show", 'az_dla_catalog_table_show_command_result', databaseName, schemaName, tableName);
    };
    return az_dla_catalog_table;
}());
exports.az_dla_catalog_table = az_dla_catalog_table;
/** Manage Data Lake Analytics catalog table valued functions. */
var az_dla_catalog_tvf = /** @class */ (function () {
    function az_dla_catalog_tvf() {
    }
    /**
     * List table valued functions in a database or schema.
     *
     * Syntax:
     * ```
     * az dla catalog tvf list --database-name
     *                         [--account]
     *                         [--ids]
     *                         [--query-examples]
     *                         [--schema-name]
     *                         [--subscription]
     * ```
     *
     * @param {string} databaseName The name of the database.
     */
    az_dla_catalog_tvf.list = function (databaseName) {
        return new az_dla_catalog_tvf_list_command_builder("az dla catalog tvf list", 'az_dla_catalog_tvf_list_command_result', databaseName);
    };
    /**
     * Retrieves the specified table valued function from the Data Lake Analytics catalog.
     *
     * Syntax:
     * ```
     * az dla catalog tvf show --database-name
     *                         --schema-name
     *                         --table-valued-function-name
     *                         [--account]
     *                         [--ids]
     *                         [--query-examples]
     *                         [--subscription]
     * ```
     *
     * @param {string} databaseName The name of the database containing the table valued function.
     * @param {string} schemaName The name of the schema containing the table valued function.
     * @param {string} tableValuedFunctionName The name of the tableValuedFunction.
     */
    az_dla_catalog_tvf.show = function (databaseName, schemaName, tableValuedFunctionName) {
        return new az_dla_catalog_tvf_show_command_builder("az dla catalog tvf show", 'az_dla_catalog_tvf_show_command_result', databaseName, schemaName, tableValuedFunctionName);
    };
    return az_dla_catalog_tvf;
}());
exports.az_dla_catalog_tvf = az_dla_catalog_tvf;
/** Manage Data Lake Analytics catalog views. */
var az_dla_catalog_view = /** @class */ (function () {
    function az_dla_catalog_view() {
    }
    /**
     * List views in a database or schema.
     *
     * Syntax:
     * ```
     * az dla catalog view list --database-name
     *                          [--account]
     *                          [--ids]
     *                          [--query-examples]
     *                          [--schema-name]
     *                          [--subscription]
     * ```
     *
     * @param {string} databaseName The name of the database.
     */
    az_dla_catalog_view.list = function (databaseName) {
        return new az_dla_catalog_view_list_command_builder("az dla catalog view list", 'az_dla_catalog_view_list_command_result', databaseName);
    };
    /**
     * Retrieves the specified view from the Data Lake Analytics catalog.
     *
     * Syntax:
     * ```
     * az dla catalog view show --database-name
     *                          --schema-name
     *                          --view-name
     *                          [--account]
     *                          [--ids]
     *                          [--query-examples]
     *                          [--subscription]
     * ```
     *
     * @param {string} databaseName The name of the database containing the view.
     * @param {string} schemaName The name of the schema containing the view.
     * @param {string} viewName The name of the view.
     */
    az_dla_catalog_view.show = function (databaseName, schemaName, viewName) {
        return new az_dla_catalog_view_show_command_builder("az dla catalog view show", 'az_dla_catalog_view_show_command_result', databaseName, schemaName, viewName);
    };
    return az_dla_catalog_view;
}());
exports.az_dla_catalog_view = az_dla_catalog_view;
/** Manage Data Lake Analytics catalogs. */
var az_dla_catalog = /** @class */ (function () {
    function az_dla_catalog() {
    }
    return az_dla_catalog;
}());
exports.az_dla_catalog = az_dla_catalog;
/** Manage Data Lake Analytics job pipelines. */
var az_dla_job_pipeline = /** @class */ (function () {
    function az_dla_job_pipeline() {
    }
    /**
     * List job pipelines in a Data Lake Analytics account.
     *
     * Syntax:
     * ```
     * az dla job pipeline list [--account]
     *                          [--end-date-time]
     *                          [--ids]
     *                          [--query-examples]
     *                          [--start-date-time]
     *                          [--subscription]
     * ```
     */
    az_dla_job_pipeline.list = function () {
        return new az_dla_job_pipeline_list_command_builder("az dla job pipeline list", 'az_dla_job_pipeline_list_command_result');
    };
    /**
     * Retrieve a job pipeline in a Data Lake Analytics account.
     *
     * Syntax:
     * ```
     * az dla job pipeline show --pipeline-identity
     *                          [--account]
     *                          [--end-date-time]
     *                          [--ids]
     *                          [--query-examples]
     *                          [--start-date-time]
     *                          [--subscription]
     * ```
     *
     * @param {string} pipelineIdentity Pipeline ID.
     */
    az_dla_job_pipeline.show = function (pipelineIdentity) {
        return new az_dla_job_pipeline_show_command_builder("az dla job pipeline show", 'az_dla_job_pipeline_show_command_result', pipelineIdentity);
    };
    return az_dla_job_pipeline;
}());
exports.az_dla_job_pipeline = az_dla_job_pipeline;
/** Manage Data Lake Analytics job recurrences. */
var az_dla_job_recurrence = /** @class */ (function () {
    function az_dla_job_recurrence() {
    }
    /**
     * List job recurrences in a Data Lake Analytics account.
     *
     * Syntax:
     * ```
     * az dla job recurrence list [--account]
     *                            [--end-date-time]
     *                            [--ids]
     *                            [--query-examples]
     *                            [--start-date-time]
     *                            [--subscription]
     * ```
     */
    az_dla_job_recurrence.list = function () {
        return new az_dla_job_recurrence_list_command_builder("az dla job recurrence list", 'az_dla_job_recurrence_list_command_result');
    };
    /**
     * Retrieve a job recurrence in a Data Lake Analytics account.
     *
     * Syntax:
     * ```
     * az dla job recurrence show --recurrence-identity
     *                            [--account]
     *                            [--end-date-time]
     *                            [--ids]
     *                            [--query-examples]
     *                            [--start-date-time]
     *                            [--subscription]
     * ```
     *
     * @param {string} recurrenceIdentity Recurrence ID.
     */
    az_dla_job_recurrence.show = function (recurrenceIdentity) {
        return new az_dla_job_recurrence_show_command_builder("az dla job recurrence show", 'az_dla_job_recurrence_show_command_result', recurrenceIdentity);
    };
    return az_dla_job_recurrence;
}());
exports.az_dla_job_recurrence = az_dla_job_recurrence;
/** Manage Data Lake Analytics jobs. */
var az_dla_job = /** @class */ (function () {
    function az_dla_job() {
    }
    /**
     * Cancel a Data Lake Analytics job.
     *
     * Syntax:
     * ```
     * az dla job cancel --job-identity
     *                   [--account]
     *                   [--ids]
     *                   [--subscription]
     * ```
     *
     * @param {string} jobIdentity JobInfo ID to cancel.
     */
    az_dla_job.cancel = function (jobIdentity) {
        return new az_dla_job_cancel_command_builder("az dla job cancel", 'az_dla_job_cancel_command_result', jobIdentity);
    };
    /**
     * List Data Lake Analytics jobs.
     *
     * Syntax:
     * ```
     * az dla job list [--account]
     *                 [--ids]
     *                 [--name]
     *                 [--pipeline-id]
     *                 [--query-examples]
     *                 [--recurrence-id]
     *                 [--result {Cancelled, Failed, None, Succeeded}]
     *                 [--state {Accepted, Compiling, Ended, New, Paused, Queued, Running, Scheduling, Starting, WaitingForCapacity}]
     *                 [--submitted-after]
     *                 [--submitted-before]
     *                 [--submitter]
     *                 [--subscription]
     *                 [--top]
     * ```
     */
    az_dla_job.list = function () {
        return new az_dla_job_list_command_builder("az dla job list", 'az_dla_job_list_command_result');
    };
    /**
     * Get information for a Data Lake Analytics job.
     *
     * Syntax:
     * ```
     * az dla job show --job-identity
     *                 [--account]
     *                 [--ids]
     *                 [--query-examples]
     *                 [--subscription]
     * ```
     *
     * @param {string} jobIdentity JobInfo ID.
     */
    az_dla_job.show = function (jobIdentity) {
        return new az_dla_job_show_command_builder("az dla job show", 'az_dla_job_show_command_result', jobIdentity);
    };
    /**
     * Submit a job to a Data Lake Analytics account.
     *
     * Syntax:
     * ```
     * az dla job submit --job-name
     *                   --script
     *                   [--account]
     *                   [--compile-mode {Full, Semantic, SingleBox}]
     *                   [--compile-only]
     *                   [--degree-of-parallelism]
     *                   [--ids]
     *                   [--pipeline-id]
     *                   [--pipeline-name]
     *                   [--pipeline-uri]
     *                   [--priority]
     *                   [--recurrence-id]
     *                   [--recurrence-name]
     *                   [--run-id]
     *                   [--runtime-version]
     *                   [--subscription]
     * ```
     *
     * @param {string} jobName Name for the submitted job.
     * @param {string} script Script to submit. This may be '@{file}' to load from a file.
     */
    az_dla_job.submit = function (jobName, script) {
        return new az_dla_job_submit_command_builder("az dla job submit", 'az_dla_job_submit_command_result', jobName, script);
    };
    /**
     * Wait for a Data Lake Analytics job to finish.
     *
     * Syntax:
     * ```
     * az dla job wait --job-id
     *                 [--account]
     *                 [--ids]
     *                 [--max-wait-time-sec]
     *                 [--subscription]
     *                 [--wait-interval-sec]
     * ```
     *
     * @param {string} jobId Job ID to poll for completion.
     */
    az_dla_job.wait = function (jobId) {
        return new az_dla_job_wait_command_builder("az dla job wait", 'az_dla_job_wait_command_result', jobId);
    };
    return az_dla_job;
}());
exports.az_dla_job = az_dla_job;
/** Manage Data Lake Analytics accounts, jobs, and catalogs. */
var az_dla = /** @class */ (function () {
    function az_dla() {
    }
    return az_dla;
}());
exports.az_dla = az_dla;
/**
 * Links an Azure Storage account to the specified Data Lake Analytics account.
 *
 * Syntax:
 * ```
 * az dla account blob-storage add --access-key
 *                                 --storage-account-name
 *                                 [--account]
 *                                 [--ids]
 *                                 [--resource-group]
 *                                 [--subscription]
 *                                 [--suffix]
 * ```
 *
 * @param {string} accessKey The access key associated with this Azure Storage account that will be used to connect to it.
 * @param {string} storageAccountName Name of an existing storage account to link to.
 */
var az_dla_account_blob_storage_add_command_builder = /** @class */ (function (_super) {
    __extends(az_dla_account_blob_storage_add_command_builder, _super);
    function az_dla_account_blob_storage_add_command_builder(commandPath, resultDataTypeName, accessKey, storageAccountName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accessKey(accessKey);
        _this.storageAccountName(storageAccountName);
        return _this;
    }
    /** The access key associated with this Azure Storage account that will be used to connect to it. */
    az_dla_account_blob_storage_add_command_builder.prototype.accessKey = function (value) {
        this.setFlag("--access-key", value);
        return this;
    };
    /** Name of an existing storage account to link to. */
    az_dla_account_blob_storage_add_command_builder.prototype.storageAccountName = function (value) {
        this.setFlag("--storage-account-name", value);
        return this;
    };
    /** Name of the Data Lake Analytics account. */
    az_dla_account_blob_storage_add_command_builder.prototype.account = function (value) {
        this.setFlag("--account", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_dla_account_blob_storage_add_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** If not specified, will attempt to discover the resource group for the specified Data Lake Analytics account. */
    az_dla_account_blob_storage_add_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dla_account_blob_storage_add_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The optional suffix for the storage account. */
    az_dla_account_blob_storage_add_command_builder.prototype.suffix = function (value) {
        this.setFlag("--suffix", value);
        return this;
    };
    return az_dla_account_blob_storage_add_command_builder;
}(base_1.CommandBuilder));
/**
 * Updates the specified Data Lake Analytics account to remove an Azure Storage account.
 *
 * Syntax:
 * ```
 * az dla account blob-storage delete --storage-account-name
 *                                    [--account]
 *                                    [--ids]
 *                                    [--resource-group]
 *                                    [--subscription]
 * ```
 *
 * @param {string} storageAccountName Name of an existing storage account to link to.
 */
var az_dla_account_blob_storage_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_dla_account_blob_storage_delete_command_builder, _super);
    function az_dla_account_blob_storage_delete_command_builder(commandPath, resultDataTypeName, storageAccountName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.storageAccountName(storageAccountName);
        return _this;
    }
    /** Name of an existing storage account to link to. */
    az_dla_account_blob_storage_delete_command_builder.prototype.storageAccountName = function (value) {
        this.setFlag("--storage-account-name", value);
        return this;
    };
    /** Name of the Data Lake Analytics account. */
    az_dla_account_blob_storage_delete_command_builder.prototype.account = function (value) {
        this.setFlag("--account", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_dla_account_blob_storage_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** If not specified, will attempt to discover the resource group for the specified Data Lake Analytics account. */
    az_dla_account_blob_storage_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dla_account_blob_storage_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_dla_account_blob_storage_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * Gets the first page of Azure Storage accounts, if any, linked to the specified Data Lake Analytics account.
 *
 * Syntax:
 * ```
 * az dla account blob-storage list [--account]
 *                                  [--count]
 *                                  [--filter]
 *                                  [--ids]
 *                                  [--orderby]
 *                                  [--query-examples]
 *                                  [--resource-group]
 *                                  [--select]
 *                                  [--skip]
 *                                  [--subscription]
 *                                  [--top]
 * ```
 */
var az_dla_account_blob_storage_list_command_builder = /** @class */ (function (_super) {
    __extends(az_dla_account_blob_storage_list_command_builder, _super);
    function az_dla_account_blob_storage_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Name of the Data Lake Analytics account. */
    az_dla_account_blob_storage_list_command_builder.prototype.account = function (value) {
        this.setFlag("--account", value);
        return this;
    };
    /** The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. */
    az_dla_account_blob_storage_list_command_builder.prototype.count = function (value) {
        this.setFlag("--count", value);
        return this;
    };
    /** The OData filter. Optional. */
    az_dla_account_blob_storage_list_command_builder.prototype.filter = function (value) {
        this.setFlag("--filter", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_dla_account_blob_storage_list_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional. */
    az_dla_account_blob_storage_list_command_builder.prototype.orderby = function (value) {
        this.setFlag("--orderby", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_dla_account_blob_storage_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** If not specified, will attempt to discover the resource group for the specified Data Lake Analytics account. */
    az_dla_account_blob_storage_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional. */
    az_dla_account_blob_storage_list_command_builder.prototype.select = function (value) {
        this.setFlag("--select", value);
        return this;
    };
    /** The number of items to skip over before returning elements. */
    az_dla_account_blob_storage_list_command_builder.prototype.skip = function (value) {
        this.setFlag("--skip", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dla_account_blob_storage_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Maximum number of items to return. */
    az_dla_account_blob_storage_list_command_builder.prototype.top = function (value) {
        this.setFlag("--top", value);
        return this;
    };
    return az_dla_account_blob_storage_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Gets the specified Azure Storage account linked to the given Data Lake Analytics account.
 *
 * Syntax:
 * ```
 * az dla account blob-storage show --storage-account-name
 *                                  [--account]
 *                                  [--ids]
 *                                  [--query-examples]
 *                                  [--resource-group]
 *                                  [--subscription]
 * ```
 *
 * @param {string} storageAccountName Name of an existing storage account to link to.
 */
var az_dla_account_blob_storage_show_command_builder = /** @class */ (function (_super) {
    __extends(az_dla_account_blob_storage_show_command_builder, _super);
    function az_dla_account_blob_storage_show_command_builder(commandPath, resultDataTypeName, storageAccountName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.storageAccountName(storageAccountName);
        return _this;
    }
    /** Name of an existing storage account to link to. */
    az_dla_account_blob_storage_show_command_builder.prototype.storageAccountName = function (value) {
        this.setFlag("--storage-account-name", value);
        return this;
    };
    /** Name of the Data Lake Analytics account. */
    az_dla_account_blob_storage_show_command_builder.prototype.account = function (value) {
        this.setFlag("--account", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_dla_account_blob_storage_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_dla_account_blob_storage_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** If not specified, will attempt to discover the resource group for the specified Data Lake Analytics account. */
    az_dla_account_blob_storage_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dla_account_blob_storage_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_dla_account_blob_storage_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Updates an Azure Storage account linked to the specified Data Lake Analytics account.
 *
 * Syntax:
 * ```
 * az dla account blob-storage update --access-key
 *                                    --storage-account-name
 *                                    [--account]
 *                                    [--ids]
 *                                    [--resource-group]
 *                                    [--subscription]
 *                                    [--suffix]
 * ```
 *
 * @param {string} accessKey The access key associated with this Azure Storage account that will be used to connect to it.
 * @param {string} storageAccountName Name of an existing storage account to link to.
 */
var az_dla_account_blob_storage_update_command_builder = /** @class */ (function (_super) {
    __extends(az_dla_account_blob_storage_update_command_builder, _super);
    function az_dla_account_blob_storage_update_command_builder(commandPath, resultDataTypeName, accessKey, storageAccountName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accessKey(accessKey);
        _this.storageAccountName(storageAccountName);
        return _this;
    }
    /** The access key associated with this Azure Storage account that will be used to connect to it. */
    az_dla_account_blob_storage_update_command_builder.prototype.accessKey = function (value) {
        this.setFlag("--access-key", value);
        return this;
    };
    /** Name of an existing storage account to link to. */
    az_dla_account_blob_storage_update_command_builder.prototype.storageAccountName = function (value) {
        this.setFlag("--storage-account-name", value);
        return this;
    };
    /** Name of the Data Lake Analytics account. */
    az_dla_account_blob_storage_update_command_builder.prototype.account = function (value) {
        this.setFlag("--account", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_dla_account_blob_storage_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** If not specified, will attempt to discover the resource group for the specified Data Lake Analytics account. */
    az_dla_account_blob_storage_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dla_account_blob_storage_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The optional suffix for the storage account. */
    az_dla_account_blob_storage_update_command_builder.prototype.suffix = function (value) {
        this.setFlag("--suffix", value);
        return this;
    };
    return az_dla_account_blob_storage_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a compute policy in the Data Lake Analytics account.
 *
 * Syntax:
 * ```
 * az dla account compute-policy create --account
 *                                      --compute-policy-name
 *                                      --object-id
 *                                      --object-type
 *                                      [--max-dop-per-job]
 *                                      [--min-priority-per-job]
 *                                      [--resource-group]
 *                                      [--subscription]
 * ```
 *
 * @param {string} account Name of the Data Lake Analytics account.
 * @param {string} computePolicyName The name of the compute policy to create.
 * @param {string} objectId The Azure Active Directory object ID of the user, group, or service principal to apply the policy to.
 * @param {string} objectType The Azure Active Directory object type associated with the supplied object ID.
 */
var az_dla_account_compute_policy_create_command_builder = /** @class */ (function (_super) {
    __extends(az_dla_account_compute_policy_create_command_builder, _super);
    function az_dla_account_compute_policy_create_command_builder(commandPath, resultDataTypeName, account, computePolicyName, objectId, objectType) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.account(account);
        _this.computePolicyName(computePolicyName);
        _this.objectId(objectId);
        _this.objectType(objectType);
        return _this;
    }
    /** Name of the Data Lake Analytics account. */
    az_dla_account_compute_policy_create_command_builder.prototype.account = function (value) {
        this.setFlag("--account", value);
        return this;
    };
    /** The name of the compute policy to create. */
    az_dla_account_compute_policy_create_command_builder.prototype.computePolicyName = function (value) {
        this.setFlag("--compute-policy-name", value);
        return this;
    };
    /** The Azure Active Directory object ID of the user, group, or service principal to apply the policy to. */
    az_dla_account_compute_policy_create_command_builder.prototype.objectId = function (value) {
        this.setFlag("--object-id", value);
        return this;
    };
    /** The Azure Active Directory object type associated with the supplied object ID. */
    az_dla_account_compute_policy_create_command_builder.prototype.objectType = function (value) {
        this.setFlag("--object-type", value);
        return this;
    };
    /** The maximum degree of parallelism allowed per job for this policy. At least one of `--min-priority-per-job` and `--max-dop-per-job` must be specified. */
    az_dla_account_compute_policy_create_command_builder.prototype.maxDopPerJob = function (value) {
        this.setFlag("--max-dop-per-job", value);
        return this;
    };
    /** The minimum priority allowed per job for this policy. At least one of `--min-priority-per-job` and `--max-dop-per-job` must be specified. */
    az_dla_account_compute_policy_create_command_builder.prototype.minPriorityPerJob = function (value) {
        this.setFlag("--min-priority-per-job", value);
        return this;
    };
    /** If not specified, will attempt to discover the resource group for the specified Data Lake Analytics account. */
    az_dla_account_compute_policy_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dla_account_compute_policy_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_dla_account_compute_policy_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a compute policy in a Data Lake Analytics account.
 *
 * Syntax:
 * ```
 * az dla account compute-policy delete --compute-policy-name
 *                                      [--account]
 *                                      [--ids]
 *                                      [--resource-group]
 *                                      [--subscription]
 * ```
 *
 * @param {string} computePolicyName The name of the compute policy to delete.
 */
var az_dla_account_compute_policy_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_dla_account_compute_policy_delete_command_builder, _super);
    function az_dla_account_compute_policy_delete_command_builder(commandPath, resultDataTypeName, computePolicyName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.computePolicyName(computePolicyName);
        return _this;
    }
    /** The name of the compute policy to delete. */
    az_dla_account_compute_policy_delete_command_builder.prototype.computePolicyName = function (value) {
        this.setFlag("--compute-policy-name", value);
        return this;
    };
    /** Name of the Data Lake Analytics account. */
    az_dla_account_compute_policy_delete_command_builder.prototype.account = function (value) {
        this.setFlag("--account", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_dla_account_compute_policy_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** If not specified, will attempt to discover the resource group for the specified Data Lake Analytics account. */
    az_dla_account_compute_policy_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dla_account_compute_policy_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_dla_account_compute_policy_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List compute policies in the a Lake Analytics account.
 *
 * Syntax:
 * ```
 * az dla account compute-policy list [--account]
 *                                    [--ids]
 *                                    [--query-examples]
 *                                    [--resource-group]
 *                                    [--subscription]
 * ```
 */
var az_dla_account_compute_policy_list_command_builder = /** @class */ (function (_super) {
    __extends(az_dla_account_compute_policy_list_command_builder, _super);
    function az_dla_account_compute_policy_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Name of the Data Lake Analytics account. */
    az_dla_account_compute_policy_list_command_builder.prototype.account = function (value) {
        this.setFlag("--account", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_dla_account_compute_policy_list_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_dla_account_compute_policy_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** If not specified, will attempt to discover the resource group for the specified Data Lake Analytics account. */
    az_dla_account_compute_policy_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dla_account_compute_policy_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_dla_account_compute_policy_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Retrieve a compute policy in a Data Lake Analytics account.
 *
 * Syntax:
 * ```
 * az dla account compute-policy show --compute-policy-name
 *                                    [--account]
 *                                    [--ids]
 *                                    [--query-examples]
 *                                    [--resource-group]
 *                                    [--subscription]
 * ```
 *
 * @param {string} computePolicyName The name of the compute policy to retrieve.
 */
var az_dla_account_compute_policy_show_command_builder = /** @class */ (function (_super) {
    __extends(az_dla_account_compute_policy_show_command_builder, _super);
    function az_dla_account_compute_policy_show_command_builder(commandPath, resultDataTypeName, computePolicyName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.computePolicyName(computePolicyName);
        return _this;
    }
    /** The name of the compute policy to retrieve. */
    az_dla_account_compute_policy_show_command_builder.prototype.computePolicyName = function (value) {
        this.setFlag("--compute-policy-name", value);
        return this;
    };
    /** Name of the Data Lake Analytics account. */
    az_dla_account_compute_policy_show_command_builder.prototype.account = function (value) {
        this.setFlag("--account", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_dla_account_compute_policy_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_dla_account_compute_policy_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** If not specified, will attempt to discover the resource group for the specified Data Lake Analytics account. */
    az_dla_account_compute_policy_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dla_account_compute_policy_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_dla_account_compute_policy_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update a compute policy in the Data Lake Analytics account.
 *
 * Syntax:
 * ```
 * az dla account compute-policy update --compute-policy-name
 *                                      [--account]
 *                                      [--ids]
 *                                      [--max-dop-per-job]
 *                                      [--min-priority-per-job]
 *                                      [--resource-group]
 *                                      [--subscription]
 * ```
 *
 * @param {string} computePolicyName The name of the compute policy to update.
 */
var az_dla_account_compute_policy_update_command_builder = /** @class */ (function (_super) {
    __extends(az_dla_account_compute_policy_update_command_builder, _super);
    function az_dla_account_compute_policy_update_command_builder(commandPath, resultDataTypeName, computePolicyName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.computePolicyName(computePolicyName);
        return _this;
    }
    /** The name of the compute policy to update. */
    az_dla_account_compute_policy_update_command_builder.prototype.computePolicyName = function (value) {
        this.setFlag("--compute-policy-name", value);
        return this;
    };
    /** Name of the Data Lake Analytics account. */
    az_dla_account_compute_policy_update_command_builder.prototype.account = function (value) {
        this.setFlag("--account", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_dla_account_compute_policy_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The maximum degree of parallelism allowed per job for this policy. At least one of `--min-priority-per-job` and `--max-dop-per-job` must be specified. */
    az_dla_account_compute_policy_update_command_builder.prototype.maxDopPerJob = function (value) {
        this.setFlag("--max-dop-per-job", value);
        return this;
    };
    /** The minimum priority allowed per job for this policy. At least one of `--min-priority-per-job` and `--max-dop-per-job` must be specified. */
    az_dla_account_compute_policy_update_command_builder.prototype.minPriorityPerJob = function (value) {
        this.setFlag("--min-priority-per-job", value);
        return this;
    };
    /** If not specified, will attempt to discover the resource group for the specified Data Lake Analytics account. */
    az_dla_account_compute_policy_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dla_account_compute_policy_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_dla_account_compute_policy_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Updates the specified Data Lake Analytics account to include the additional Data Lake Store account.
 *
 * Syntax:
 * ```
 * az dla account data-lake-store add --data-lake-store-account-name
 *                                    [--account]
 *                                    [--ids]
 *                                    [--resource-group]
 *                                    [--subscription]
 *                                    [--suffix]
 * ```
 *
 * @param {string} dataLakeStoreAccountName The name of the Data Lake Store account to add.
 */
var az_dla_account_data_lake_store_add_command_builder = /** @class */ (function (_super) {
    __extends(az_dla_account_data_lake_store_add_command_builder, _super);
    function az_dla_account_data_lake_store_add_command_builder(commandPath, resultDataTypeName, dataLakeStoreAccountName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.dataLakeStoreAccountName(dataLakeStoreAccountName);
        return _this;
    }
    /** The name of the Data Lake Store account to add. */
    az_dla_account_data_lake_store_add_command_builder.prototype.dataLakeStoreAccountName = function (value) {
        this.setFlag("--data-lake-store-account-name", value);
        return this;
    };
    /** Name of the Data Lake Analytics account. */
    az_dla_account_data_lake_store_add_command_builder.prototype.account = function (value) {
        this.setFlag("--account", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_dla_account_data_lake_store_add_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** If not specified, will attempt to discover the resource group for the specified Data Lake Analytics account. */
    az_dla_account_data_lake_store_add_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dla_account_data_lake_store_add_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The optional suffix for the Data Lake Store account. */
    az_dla_account_data_lake_store_add_command_builder.prototype.suffix = function (value) {
        this.setFlag("--suffix", value);
        return this;
    };
    return az_dla_account_data_lake_store_add_command_builder;
}(base_1.CommandBuilder));
/**
 * Updates the Data Lake Analytics account specified to remove the specified Data Lake Store account.
 *
 * Syntax:
 * ```
 * az dla account data-lake-store delete --data-lake-store-account-name
 *                                       [--account]
 *                                       [--ids]
 *                                       [--resource-group]
 *                                       [--subscription]
 * ```
 *
 * @param {string} dataLakeStoreAccountName The name of the Data Lake Store account to remove.
 */
var az_dla_account_data_lake_store_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_dla_account_data_lake_store_delete_command_builder, _super);
    function az_dla_account_data_lake_store_delete_command_builder(commandPath, resultDataTypeName, dataLakeStoreAccountName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.dataLakeStoreAccountName(dataLakeStoreAccountName);
        return _this;
    }
    /** The name of the Data Lake Store account to remove. */
    az_dla_account_data_lake_store_delete_command_builder.prototype.dataLakeStoreAccountName = function (value) {
        this.setFlag("--data-lake-store-account-name", value);
        return this;
    };
    /** Name of the Data Lake Analytics account. */
    az_dla_account_data_lake_store_delete_command_builder.prototype.account = function (value) {
        this.setFlag("--account", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_dla_account_data_lake_store_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** If not specified, will attempt to discover the resource group for the specified Data Lake Analytics account. */
    az_dla_account_data_lake_store_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dla_account_data_lake_store_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_dla_account_data_lake_store_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * Gets the first page of Data Lake Store accounts linked to the specified Data Lake Analytics account.
 *
 * Syntax:
 * ```
 * az dla account data-lake-store list [--account]
 *                                     [--count]
 *                                     [--filter]
 *                                     [--ids]
 *                                     [--orderby]
 *                                     [--query-examples]
 *                                     [--resource-group]
 *                                     [--select]
 *                                     [--skip]
 *                                     [--subscription]
 *                                     [--top]
 * ```
 */
var az_dla_account_data_lake_store_list_command_builder = /** @class */ (function (_super) {
    __extends(az_dla_account_data_lake_store_list_command_builder, _super);
    function az_dla_account_data_lake_store_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Name of the Data Lake Analytics account. */
    az_dla_account_data_lake_store_list_command_builder.prototype.account = function (value) {
        this.setFlag("--account", value);
        return this;
    };
    /** The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. */
    az_dla_account_data_lake_store_list_command_builder.prototype.count = function (value) {
        this.setFlag("--count", value);
        return this;
    };
    /** OData filter. Optional. */
    az_dla_account_data_lake_store_list_command_builder.prototype.filter = function (value) {
        this.setFlag("--filter", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_dla_account_data_lake_store_list_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional. */
    az_dla_account_data_lake_store_list_command_builder.prototype.orderby = function (value) {
        this.setFlag("--orderby", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_dla_account_data_lake_store_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** If not specified, will attempt to discover the resource group for the specified Data Lake Analytics account. */
    az_dla_account_data_lake_store_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional. */
    az_dla_account_data_lake_store_list_command_builder.prototype.select = function (value) {
        this.setFlag("--select", value);
        return this;
    };
    /** The number of items to skip over before returning elements. */
    az_dla_account_data_lake_store_list_command_builder.prototype.skip = function (value) {
        this.setFlag("--skip", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dla_account_data_lake_store_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Maximum number of items to return. */
    az_dla_account_data_lake_store_list_command_builder.prototype.top = function (value) {
        this.setFlag("--top", value);
        return this;
    };
    return az_dla_account_data_lake_store_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Gets the specified Data Lake Store account details in the specified Data Lake Analytics account.
 *
 * Syntax:
 * ```
 * az dla account data-lake-store show --data-lake-store-account-name
 *                                     [--account]
 *                                     [--ids]
 *                                     [--query-examples]
 *                                     [--resource-group]
 *                                     [--subscription]
 * ```
 *
 * @param {string} dataLakeStoreAccountName The name of the Data Lake Store account to retrieve.
 */
var az_dla_account_data_lake_store_show_command_builder = /** @class */ (function (_super) {
    __extends(az_dla_account_data_lake_store_show_command_builder, _super);
    function az_dla_account_data_lake_store_show_command_builder(commandPath, resultDataTypeName, dataLakeStoreAccountName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.dataLakeStoreAccountName(dataLakeStoreAccountName);
        return _this;
    }
    /** The name of the Data Lake Store account to retrieve. */
    az_dla_account_data_lake_store_show_command_builder.prototype.dataLakeStoreAccountName = function (value) {
        this.setFlag("--data-lake-store-account-name", value);
        return this;
    };
    /** Name of the Data Lake Analytics account. */
    az_dla_account_data_lake_store_show_command_builder.prototype.account = function (value) {
        this.setFlag("--account", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_dla_account_data_lake_store_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_dla_account_data_lake_store_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** If not specified, will attempt to discover the resource group for the specified Data Lake Analytics account. */
    az_dla_account_data_lake_store_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dla_account_data_lake_store_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_dla_account_data_lake_store_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a firewall rule in a Data Lake Analytics account.
 *
 * Syntax:
 * ```
 * az dla account firewall create --account
 *                                --end-ip-address
 *                                --firewall-rule-name
 *                                --start-ip-address
 *                                [--resource-group]
 *                                [--subscription]
 * ```
 *
 * @param {string} account Name of the Data Lake Analytics account.
 * @param {string} endIpAddress The end of the valid IP range for the firewall rule.
 * @param {string} firewallRuleName The name of the firewall rule.
 * @param {string} startIpAddress The start of the valid IP range for the firewall rule.
 */
var az_dla_account_firewall_create_command_builder = /** @class */ (function (_super) {
    __extends(az_dla_account_firewall_create_command_builder, _super);
    function az_dla_account_firewall_create_command_builder(commandPath, resultDataTypeName, account, endIpAddress, firewallRuleName, startIpAddress) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.account(account);
        _this.endIpAddress(endIpAddress);
        _this.firewallRuleName(firewallRuleName);
        _this.startIpAddress(startIpAddress);
        return _this;
    }
    /** Name of the Data Lake Analytics account. */
    az_dla_account_firewall_create_command_builder.prototype.account = function (value) {
        this.setFlag("--account", value);
        return this;
    };
    /** The end of the valid IP range for the firewall rule. */
    az_dla_account_firewall_create_command_builder.prototype.endIpAddress = function (value) {
        this.setFlag("--end-ip-address", value);
        return this;
    };
    /** The name of the firewall rule. */
    az_dla_account_firewall_create_command_builder.prototype.firewallRuleName = function (value) {
        this.setFlag("--firewall-rule-name", value);
        return this;
    };
    /** The start of the valid IP range for the firewall rule. */
    az_dla_account_firewall_create_command_builder.prototype.startIpAddress = function (value) {
        this.setFlag("--start-ip-address", value);
        return this;
    };
    /** If not specified, will attempt to discover the resource group for the specified Data Lake Analytics account. */
    az_dla_account_firewall_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dla_account_firewall_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_dla_account_firewall_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a firewall rule in a Data Lake Analytics account.
 *
 * Syntax:
 * ```
 * az dla account firewall delete --firewall-rule-name
 *                                [--account]
 *                                [--ids]
 *                                [--resource-group]
 *                                [--subscription]
 * ```
 *
 * @param {string} firewallRuleName The name of the firewall rule to delete.
 */
var az_dla_account_firewall_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_dla_account_firewall_delete_command_builder, _super);
    function az_dla_account_firewall_delete_command_builder(commandPath, resultDataTypeName, firewallRuleName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.firewallRuleName(firewallRuleName);
        return _this;
    }
    /** The name of the firewall rule to delete. */
    az_dla_account_firewall_delete_command_builder.prototype.firewallRuleName = function (value) {
        this.setFlag("--firewall-rule-name", value);
        return this;
    };
    /** Name of the Data Lake Analytics account. */
    az_dla_account_firewall_delete_command_builder.prototype.account = function (value) {
        this.setFlag("--account", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_dla_account_firewall_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** If not specified, will attempt to discover the resource group for the specified Data Lake Analytics account. */
    az_dla_account_firewall_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dla_account_firewall_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_dla_account_firewall_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List firewall rules in a Data Lake Analytics account.
 *
 * Syntax:
 * ```
 * az dla account firewall list [--account]
 *                              [--ids]
 *                              [--query-examples]
 *                              [--resource-group]
 *                              [--subscription]
 * ```
 */
var az_dla_account_firewall_list_command_builder = /** @class */ (function (_super) {
    __extends(az_dla_account_firewall_list_command_builder, _super);
    function az_dla_account_firewall_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Name of the Data Lake Analytics account. */
    az_dla_account_firewall_list_command_builder.prototype.account = function (value) {
        this.setFlag("--account", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_dla_account_firewall_list_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_dla_account_firewall_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** If not specified, will attempt to discover the resource group for the specified Data Lake Analytics account. */
    az_dla_account_firewall_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dla_account_firewall_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_dla_account_firewall_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Retrieve a firewall rule in a Data Lake Analytics account.
 *
 * Syntax:
 * ```
 * az dla account firewall show --firewall-rule-name
 *                              [--account]
 *                              [--ids]
 *                              [--query-examples]
 *                              [--resource-group]
 *                              [--subscription]
 * ```
 *
 * @param {string} firewallRuleName The name of the firewall rule to retrieve.
 */
var az_dla_account_firewall_show_command_builder = /** @class */ (function (_super) {
    __extends(az_dla_account_firewall_show_command_builder, _super);
    function az_dla_account_firewall_show_command_builder(commandPath, resultDataTypeName, firewallRuleName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.firewallRuleName(firewallRuleName);
        return _this;
    }
    /** The name of the firewall rule to retrieve. */
    az_dla_account_firewall_show_command_builder.prototype.firewallRuleName = function (value) {
        this.setFlag("--firewall-rule-name", value);
        return this;
    };
    /** Name of the Data Lake Analytics account. */
    az_dla_account_firewall_show_command_builder.prototype.account = function (value) {
        this.setFlag("--account", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_dla_account_firewall_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_dla_account_firewall_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** If not specified, will attempt to discover the resource group for the specified Data Lake Analytics account. */
    az_dla_account_firewall_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dla_account_firewall_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_dla_account_firewall_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update a firewall rule in a Data Lake Analytics account.
 *
 * Syntax:
 * ```
 * az dla account firewall update --firewall-rule-name
 *                                [--account]
 *                                [--end-ip-address]
 *                                [--ids]
 *                                [--resource-group]
 *                                [--start-ip-address]
 *                                [--subscription]
 * ```
 *
 * @param {string} firewallRuleName The name of the firewall rule to update.
 */
var az_dla_account_firewall_update_command_builder = /** @class */ (function (_super) {
    __extends(az_dla_account_firewall_update_command_builder, _super);
    function az_dla_account_firewall_update_command_builder(commandPath, resultDataTypeName, firewallRuleName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.firewallRuleName(firewallRuleName);
        return _this;
    }
    /** The name of the firewall rule to update. */
    az_dla_account_firewall_update_command_builder.prototype.firewallRuleName = function (value) {
        this.setFlag("--firewall-rule-name", value);
        return this;
    };
    /** Name of the Data Lake Analytics account. */
    az_dla_account_firewall_update_command_builder.prototype.account = function (value) {
        this.setFlag("--account", value);
        return this;
    };
    /** The end IP address for the firewall rule. This can be either ipv4 or ipv6. Start and End should be in the same protocol. */
    az_dla_account_firewall_update_command_builder.prototype.endIpAddress = function (value) {
        this.setFlag("--end-ip-address", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_dla_account_firewall_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** If not specified, will attempt to discover the resource group for the specified Data Lake Analytics account. */
    az_dla_account_firewall_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The start IP address for the firewall rule. This can be either ipv4 or ipv6. Start and End should be in the same protocol. */
    az_dla_account_firewall_update_command_builder.prototype.startIpAddress = function (value) {
        this.setFlag("--start-ip-address", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dla_account_firewall_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_dla_account_firewall_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a Data Lake Analytics account.
 *
 * Syntax:
 * ```
 * az dla account create --account
 *                       --default-data-lake-store
 *                       [--location]
 *                       [--max-degree-of-parallelism]
 *                       [--max-job-count]
 *                       [--query-store-retention]
 *                       [--resource-group]
 *                       [--subscription]
 *                       [--tags]
 *                       [--tier {Commitment_100000AUHours, Commitment_10000AUHours, Commitment_1000AUHours, Commitment_100AUHours, Commitment_500000AUHours, Commitment_50000AUHours, Commitment_5000AUHours, Commitment_500AUHours, Consumption}]
 * ```
 *
 * @param {string} account Name of the Data Lake Analytics account.
 * @param {string} defaultDataLakeStore The default Data Lake Store account to associate with the created account.
 */
var az_dla_account_create_command_builder = /** @class */ (function (_super) {
    __extends(az_dla_account_create_command_builder, _super);
    function az_dla_account_create_command_builder(commandPath, resultDataTypeName, account, defaultDataLakeStore) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.account(account);
        _this.defaultDataLakeStore(defaultDataLakeStore);
        return _this;
    }
    /** Name of the Data Lake Analytics account. */
    az_dla_account_create_command_builder.prototype.account = function (value) {
        this.setFlag("--account", value);
        return this;
    };
    /** The default Data Lake Store account to associate with the created account. */
    az_dla_account_create_command_builder.prototype.defaultDataLakeStore = function (value) {
        this.setFlag("--default-data-lake-store", value);
        return this;
    };
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_dla_account_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** The maximum degree of parallelism for this account. */
    az_dla_account_create_command_builder.prototype.maxDegreeOfParallelism = function (value) {
        this.setFlag("--max-degree-of-parallelism", value);
        return this;
    };
    /** The maximum number of concurrent jobs for this account. */
    az_dla_account_create_command_builder.prototype.maxJobCount = function (value) {
        this.setFlag("--max-job-count", value);
        return this;
    };
    /** The number of days to retain job metadata. */
    az_dla_account_create_command_builder.prototype.queryStoreRetention = function (value) {
        this.setFlag("--query-store-retention", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_dla_account_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dla_account_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_dla_account_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    /** The desired commitment tier for this account to use. */
    az_dla_account_create_command_builder.prototype.tier = function (value) {
        this.setFlag("--tier", value);
        return this;
    };
    return az_dla_account_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a Data Lake Analytics account.
 *
 * Syntax:
 * ```
 * az dla account delete [--account]
 *                       [--ids]
 *                       [--resource-group]
 *                       [--subscription]
 * ```
 */
var az_dla_account_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_dla_account_delete_command_builder, _super);
    function az_dla_account_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Name of the Data Lake Analytics account. */
    az_dla_account_delete_command_builder.prototype.account = function (value) {
        this.setFlag("--account", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_dla_account_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** If not specified, will attempt to discover the resource group for the specified Data Lake Analytics account. */
    az_dla_account_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dla_account_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_dla_account_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List available Data Lake Analytics accounts.
 *
 * Syntax:
 * ```
 * az dla account list [--query-examples]
 *                     [--resource-group]
 *                     [--subscription]
 * ```
 */
var az_dla_account_list_command_builder = /** @class */ (function (_super) {
    __extends(az_dla_account_list_command_builder, _super);
    function az_dla_account_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_dla_account_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_dla_account_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dla_account_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_dla_account_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Get the details of a Data Lake Analytics account.
 *
 * Syntax:
 * ```
 * az dla account show [--account]
 *                     [--ids]
 *                     [--query-examples]
 *                     [--resource-group]
 *                     [--subscription]
 * ```
 */
var az_dla_account_show_command_builder = /** @class */ (function (_super) {
    __extends(az_dla_account_show_command_builder, _super);
    function az_dla_account_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Name of the Data Lake Analytics account. */
    az_dla_account_show_command_builder.prototype.account = function (value) {
        this.setFlag("--account", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_dla_account_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_dla_account_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** If not specified, will attempt to discover the resource group for the specified Data Lake Analytics account. */
    az_dla_account_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dla_account_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_dla_account_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update a Data Lake Analytics account.
 *
 * Syntax:
 * ```
 * az dla account update [--account]
 *                       [--allow-azure-ips {Disabled, Enabled}]
 *                       [--firewall-state {Disabled, Enabled}]
 *                       [--ids]
 *                       [--max-degree-of-parallelism]
 *                       [--max-job-count]
 *                       [--query-store-retention]
 *                       [--resource-group]
 *                       [--subscription]
 *                       [--tags]
 *                       [--tier {Commitment_100000AUHours, Commitment_10000AUHours, Commitment_1000AUHours, Commitment_100AUHours, Commitment_500000AUHours, Commitment_50000AUHours, Commitment_5000AUHours, Commitment_500AUHours, Consumption}]
 * ```
 */
var az_dla_account_update_command_builder = /** @class */ (function (_super) {
    __extends(az_dla_account_update_command_builder, _super);
    function az_dla_account_update_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Name of the Data Lake Analytics account. */
    az_dla_account_update_command_builder.prototype.account = function (value) {
        this.setFlag("--account", value);
        return this;
    };
    /** Allow or block IPs originating from Azure through the firewall. */
    az_dla_account_update_command_builder.prototype.allowAzureIps = function (value) {
        this.setFlag("--allow-azure-ips", value);
        return this;
    };
    /** Enable or disable existing firewall rules. */
    az_dla_account_update_command_builder.prototype.firewallState = function (value) {
        this.setFlag("--firewall-state", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_dla_account_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The maximum degree of parallelism for this account. */
    az_dla_account_update_command_builder.prototype.maxDegreeOfParallelism = function (value) {
        this.setFlag("--max-degree-of-parallelism", value);
        return this;
    };
    /** The maximum number of concurrent jobs for this account. */
    az_dla_account_update_command_builder.prototype.maxJobCount = function (value) {
        this.setFlag("--max-job-count", value);
        return this;
    };
    /** The number of days to retain job metadata. */
    az_dla_account_update_command_builder.prototype.queryStoreRetention = function (value) {
        this.setFlag("--query-store-retention", value);
        return this;
    };
    /** If not specified, will attempt to discover the resource group for the specified Data Lake Analytics account. */
    az_dla_account_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dla_account_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_dla_account_update_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    /** The desired commitment tier for this account to use. */
    az_dla_account_update_command_builder.prototype.tier = function (value) {
        this.setFlag("--tier", value);
        return this;
    };
    return az_dla_account_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Retrieves the list of assemblies from the Data Lake Analytics catalog.
 *
 * Syntax:
 * ```
 * az dla catalog assembly list --database-name
 *                              [--account]
 *                              [--count]
 *                              [--filter]
 *                              [--ids]
 *                              [--orderby]
 *                              [--query-examples]
 *                              [--select]
 *                              [--skip]
 *                              [--subscription]
 *                              [--top]
 * ```
 *
 * @param {string} databaseName The name of the database containing the assembly.
 */
var az_dla_catalog_assembly_list_command_builder = /** @class */ (function (_super) {
    __extends(az_dla_catalog_assembly_list_command_builder, _super);
    function az_dla_catalog_assembly_list_command_builder(commandPath, resultDataTypeName, databaseName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.databaseName(databaseName);
        return _this;
    }
    /** The name of the database containing the assembly. */
    az_dla_catalog_assembly_list_command_builder.prototype.databaseName = function (value) {
        this.setFlag("--database-name", value);
        return this;
    };
    /** Name of the Data Lake Analytics account. */
    az_dla_catalog_assembly_list_command_builder.prototype.account = function (value) {
        this.setFlag("--account", value);
        return this;
    };
    /** The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. */
    az_dla_catalog_assembly_list_command_builder.prototype.count = function (value) {
        this.setFlag("--count", value);
        return this;
    };
    /** OData filter. Optional. */
    az_dla_catalog_assembly_list_command_builder.prototype.filter = function (value) {
        this.setFlag("--filter", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_dla_catalog_assembly_list_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional. */
    az_dla_catalog_assembly_list_command_builder.prototype.orderby = function (value) {
        this.setFlag("--orderby", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_dla_catalog_assembly_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional. */
    az_dla_catalog_assembly_list_command_builder.prototype.select = function (value) {
        this.setFlag("--select", value);
        return this;
    };
    /** The number of items to skip over before returning elements. */
    az_dla_catalog_assembly_list_command_builder.prototype.skip = function (value) {
        this.setFlag("--skip", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dla_catalog_assembly_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Maximum number of items to return. */
    az_dla_catalog_assembly_list_command_builder.prototype.top = function (value) {
        this.setFlag("--top", value);
        return this;
    };
    return az_dla_catalog_assembly_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Retrieves the specified assembly from the Data Lake Analytics catalog.
 *
 * Syntax:
 * ```
 * az dla catalog assembly show --assembly-name
 *                              --database-name
 *                              [--account]
 *                              [--ids]
 *                              [--query-examples]
 *                              [--subscription]
 * ```
 *
 * @param {string} assemblyName The name of the assembly.
 * @param {string} databaseName The name of the database containing the assembly.
 */
var az_dla_catalog_assembly_show_command_builder = /** @class */ (function (_super) {
    __extends(az_dla_catalog_assembly_show_command_builder, _super);
    function az_dla_catalog_assembly_show_command_builder(commandPath, resultDataTypeName, assemblyName, databaseName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.assemblyName(assemblyName);
        _this.databaseName(databaseName);
        return _this;
    }
    /** The name of the assembly. */
    az_dla_catalog_assembly_show_command_builder.prototype.assemblyName = function (value) {
        this.setFlag("--assembly-name", value);
        return this;
    };
    /** The name of the database containing the assembly. */
    az_dla_catalog_assembly_show_command_builder.prototype.databaseName = function (value) {
        this.setFlag("--database-name", value);
        return this;
    };
    /** Name of the Data Lake Analytics account. */
    az_dla_catalog_assembly_show_command_builder.prototype.account = function (value) {
        this.setFlag("--account", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_dla_catalog_assembly_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_dla_catalog_assembly_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dla_catalog_assembly_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_dla_catalog_assembly_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a new catalog credential for use with an external data source.
 *
 * Syntax:
 * ```
 * az dla catalog credential create --account
 *                                  --credential-name
 *                                  --database-name
 *                                  --uri
 *                                  --user-name
 *                                  [--password]
 *                                  [--subscription]
 * ```
 *
 * @param {string} account Name of the Data Lake Analytics account.
 * @param {string} credentialName The name of the credential.
 * @param {string} databaseName The name of the database in which to create the credential.
 * @param {string} uri URI of the external data source.
 * @param {string} userName The user name that will be used when authenticating with this credential.
 */
var az_dla_catalog_credential_create_command_builder = /** @class */ (function (_super) {
    __extends(az_dla_catalog_credential_create_command_builder, _super);
    function az_dla_catalog_credential_create_command_builder(commandPath, resultDataTypeName, account, credentialName, databaseName, uri, userName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.account(account);
        _this.credentialName(credentialName);
        _this.databaseName(databaseName);
        _this.uri(uri);
        _this.userName(userName);
        return _this;
    }
    /** Name of the Data Lake Analytics account. */
    az_dla_catalog_credential_create_command_builder.prototype.account = function (value) {
        this.setFlag("--account", value);
        return this;
    };
    /** The name of the credential. */
    az_dla_catalog_credential_create_command_builder.prototype.credentialName = function (value) {
        this.setFlag("--credential-name", value);
        return this;
    };
    /** The name of the database in which to create the credential. */
    az_dla_catalog_credential_create_command_builder.prototype.databaseName = function (value) {
        this.setFlag("--database-name", value);
        return this;
    };
    /** URI of the external data source. */
    az_dla_catalog_credential_create_command_builder.prototype.uri = function (value) {
        this.setFlag("--uri", value);
        return this;
    };
    /** The user name that will be used when authenticating with this credential. */
    az_dla_catalog_credential_create_command_builder.prototype.userName = function (value) {
        this.setFlag("--user-name", value);
        return this;
    };
    /** Password for the credential user. Will prompt if not given. */
    az_dla_catalog_credential_create_command_builder.prototype.password = function (value) {
        this.setFlag("--password", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dla_catalog_credential_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_dla_catalog_credential_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a catalog credential.
 *
 * Syntax:
 * ```
 * az dla catalog credential delete --credential-name
 *                                  --database-name
 *                                  [--account]
 *                                  [--cascade]
 *                                  [--ids]
 *                                  [--password]
 *                                  [--subscription]
 * ```
 *
 * @param {string} credentialName The name of the credential to delete.
 * @param {string} databaseName The name of the database containing the credential.
 */
var az_dla_catalog_credential_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_dla_catalog_credential_delete_command_builder, _super);
    function az_dla_catalog_credential_delete_command_builder(commandPath, resultDataTypeName, credentialName, databaseName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.credentialName(credentialName);
        _this.databaseName(databaseName);
        return _this;
    }
    /** The name of the credential to delete. */
    az_dla_catalog_credential_delete_command_builder.prototype.credentialName = function (value) {
        this.setFlag("--credential-name", value);
        return this;
    };
    /** The name of the database containing the credential. */
    az_dla_catalog_credential_delete_command_builder.prototype.databaseName = function (value) {
        this.setFlag("--database-name", value);
        return this;
    };
    /** Name of the Data Lake Analytics account. */
    az_dla_catalog_credential_delete_command_builder.prototype.account = function (value) {
        this.setFlag("--account", value);
        return this;
    };
    /** Indicates if the delete should be a cascading delete (which deletes all resources dependent on the credential as well as the credential) or not. If false will fail if there are any resources relying on the credential. */
    az_dla_catalog_credential_delete_command_builder.prototype.cascade = function (value) {
        this.setFlag("--cascade", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_dla_catalog_credential_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The current password for the credential and user with access to the data source. This is required if the requester is not the account owner. */
    az_dla_catalog_credential_delete_command_builder.prototype.password = function (value) {
        this.setFlag("--password", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dla_catalog_credential_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_dla_catalog_credential_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List catalog credentials.
 *
 * Syntax:
 * ```
 * az dla catalog credential list --database-name
 *                                [--account]
 *                                [--count]
 *                                [--filter]
 *                                [--ids]
 *                                [--orderby]
 *                                [--query-examples]
 *                                [--select]
 *                                [--skip]
 *                                [--subscription]
 *                                [--top]
 * ```
 *
 * @param {string} databaseName The name of the database containing the schema.
 */
var az_dla_catalog_credential_list_command_builder = /** @class */ (function (_super) {
    __extends(az_dla_catalog_credential_list_command_builder, _super);
    function az_dla_catalog_credential_list_command_builder(commandPath, resultDataTypeName, databaseName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.databaseName(databaseName);
        return _this;
    }
    /** The name of the database containing the schema. */
    az_dla_catalog_credential_list_command_builder.prototype.databaseName = function (value) {
        this.setFlag("--database-name", value);
        return this;
    };
    /** Name of the Data Lake Analytics account. */
    az_dla_catalog_credential_list_command_builder.prototype.account = function (value) {
        this.setFlag("--account", value);
        return this;
    };
    /** The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. */
    az_dla_catalog_credential_list_command_builder.prototype.count = function (value) {
        this.setFlag("--count", value);
        return this;
    };
    /** OData filter. Optional. */
    az_dla_catalog_credential_list_command_builder.prototype.filter = function (value) {
        this.setFlag("--filter", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_dla_catalog_credential_list_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional. */
    az_dla_catalog_credential_list_command_builder.prototype.orderby = function (value) {
        this.setFlag("--orderby", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_dla_catalog_credential_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional. */
    az_dla_catalog_credential_list_command_builder.prototype.select = function (value) {
        this.setFlag("--select", value);
        return this;
    };
    /** The number of items to skip over before returning elements. */
    az_dla_catalog_credential_list_command_builder.prototype.skip = function (value) {
        this.setFlag("--skip", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dla_catalog_credential_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Maximum number of items to return. */
    az_dla_catalog_credential_list_command_builder.prototype.top = function (value) {
        this.setFlag("--top", value);
        return this;
    };
    return az_dla_catalog_credential_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Retrieve a catalog credential.
 *
 * Syntax:
 * ```
 * az dla catalog credential show --credential-name
 *                                --database-name
 *                                [--account]
 *                                [--ids]
 *                                [--query-examples]
 *                                [--subscription]
 * ```
 *
 * @param {string} credentialName The name of the credential.
 * @param {string} databaseName The name of the database containing the schema.
 */
var az_dla_catalog_credential_show_command_builder = /** @class */ (function (_super) {
    __extends(az_dla_catalog_credential_show_command_builder, _super);
    function az_dla_catalog_credential_show_command_builder(commandPath, resultDataTypeName, credentialName, databaseName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.credentialName(credentialName);
        _this.databaseName(databaseName);
        return _this;
    }
    /** The name of the credential. */
    az_dla_catalog_credential_show_command_builder.prototype.credentialName = function (value) {
        this.setFlag("--credential-name", value);
        return this;
    };
    /** The name of the database containing the schema. */
    az_dla_catalog_credential_show_command_builder.prototype.databaseName = function (value) {
        this.setFlag("--database-name", value);
        return this;
    };
    /** Name of the Data Lake Analytics account. */
    az_dla_catalog_credential_show_command_builder.prototype.account = function (value) {
        this.setFlag("--account", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_dla_catalog_credential_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_dla_catalog_credential_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dla_catalog_credential_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_dla_catalog_credential_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update a catalog credential for use with an external data source.
 *
 * Syntax:
 * ```
 * az dla catalog credential update --credential-name
 *                                  --database-name
 *                                  --uri
 *                                  --user-name
 *                                  [--account]
 *                                  [--ids]
 *                                  [--new-password]
 *                                  [--password]
 *                                  [--subscription]
 * ```
 *
 * @param {string} credentialName The name of the credential to update.
 * @param {string} databaseName The name of the database in which the credential exists.
 * @param {string} uri URI of the external data source.
 * @param {string} userName The user name associated with the credential that will have its password updated.
 */
var az_dla_catalog_credential_update_command_builder = /** @class */ (function (_super) {
    __extends(az_dla_catalog_credential_update_command_builder, _super);
    function az_dla_catalog_credential_update_command_builder(commandPath, resultDataTypeName, credentialName, databaseName, uri, userName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.credentialName(credentialName);
        _this.databaseName(databaseName);
        _this.uri(uri);
        _this.userName(userName);
        return _this;
    }
    /** The name of the credential to update. */
    az_dla_catalog_credential_update_command_builder.prototype.credentialName = function (value) {
        this.setFlag("--credential-name", value);
        return this;
    };
    /** The name of the database in which the credential exists. */
    az_dla_catalog_credential_update_command_builder.prototype.databaseName = function (value) {
        this.setFlag("--database-name", value);
        return this;
    };
    /** URI of the external data source. */
    az_dla_catalog_credential_update_command_builder.prototype.uri = function (value) {
        this.setFlag("--uri", value);
        return this;
    };
    /** The user name associated with the credential that will have its password updated. */
    az_dla_catalog_credential_update_command_builder.prototype.userName = function (value) {
        this.setFlag("--user-name", value);
        return this;
    };
    /** Name of the Data Lake Analytics account. */
    az_dla_catalog_credential_update_command_builder.prototype.account = function (value) {
        this.setFlag("--account", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_dla_catalog_credential_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** New password for the credential user. Will prompt if not given. */
    az_dla_catalog_credential_update_command_builder.prototype.newPassword = function (value) {
        this.setFlag("--new-password", value);
        return this;
    };
    /** Current password for the credential user. Will prompt if not given. */
    az_dla_catalog_credential_update_command_builder.prototype.password = function (value) {
        this.setFlag("--password", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dla_catalog_credential_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_dla_catalog_credential_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Retrieves the list of databases from the Data Lake Analytics catalog.
 *
 * Syntax:
 * ```
 * az dla catalog database list [--account]
 *                              [--count]
 *                              [--filter]
 *                              [--ids]
 *                              [--orderby]
 *                              [--query-examples]
 *                              [--select]
 *                              [--skip]
 *                              [--subscription]
 *                              [--top]
 * ```
 */
var az_dla_catalog_database_list_command_builder = /** @class */ (function (_super) {
    __extends(az_dla_catalog_database_list_command_builder, _super);
    function az_dla_catalog_database_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Name of the Data Lake Analytics account. */
    az_dla_catalog_database_list_command_builder.prototype.account = function (value) {
        this.setFlag("--account", value);
        return this;
    };
    /** The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. */
    az_dla_catalog_database_list_command_builder.prototype.count = function (value) {
        this.setFlag("--count", value);
        return this;
    };
    /** OData filter. Optional. */
    az_dla_catalog_database_list_command_builder.prototype.filter = function (value) {
        this.setFlag("--filter", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_dla_catalog_database_list_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional. */
    az_dla_catalog_database_list_command_builder.prototype.orderby = function (value) {
        this.setFlag("--orderby", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_dla_catalog_database_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional. */
    az_dla_catalog_database_list_command_builder.prototype.select = function (value) {
        this.setFlag("--select", value);
        return this;
    };
    /** The number of items to skip over before returning elements. */
    az_dla_catalog_database_list_command_builder.prototype.skip = function (value) {
        this.setFlag("--skip", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dla_catalog_database_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Maximum number of items to return. */
    az_dla_catalog_database_list_command_builder.prototype.top = function (value) {
        this.setFlag("--top", value);
        return this;
    };
    return az_dla_catalog_database_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Retrieves the specified database from the Data Lake Analytics catalog.
 *
 * Syntax:
 * ```
 * az dla catalog database show --database-name
 *                              [--account]
 *                              [--ids]
 *                              [--query-examples]
 *                              [--subscription]
 * ```
 *
 * @param {string} databaseName The name of the database.
 */
var az_dla_catalog_database_show_command_builder = /** @class */ (function (_super) {
    __extends(az_dla_catalog_database_show_command_builder, _super);
    function az_dla_catalog_database_show_command_builder(commandPath, resultDataTypeName, databaseName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.databaseName(databaseName);
        return _this;
    }
    /** The name of the database. */
    az_dla_catalog_database_show_command_builder.prototype.databaseName = function (value) {
        this.setFlag("--database-name", value);
        return this;
    };
    /** Name of the Data Lake Analytics account. */
    az_dla_catalog_database_show_command_builder.prototype.account = function (value) {
        this.setFlag("--account", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_dla_catalog_database_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_dla_catalog_database_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dla_catalog_database_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_dla_catalog_database_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Retrieves the list of external data sources from the Data Lake Analytics catalog.
 *
 * Syntax:
 * ```
 * az dla catalog external-data-source list --database-name
 *                                          [--account]
 *                                          [--count]
 *                                          [--filter]
 *                                          [--ids]
 *                                          [--orderby]
 *                                          [--query-examples]
 *                                          [--select]
 *                                          [--skip]
 *                                          [--subscription]
 *                                          [--top]
 * ```
 *
 * @param {string} databaseName The name of the database containing the external data sources.
 */
var az_dla_catalog_external_data_source_list_command_builder = /** @class */ (function (_super) {
    __extends(az_dla_catalog_external_data_source_list_command_builder, _super);
    function az_dla_catalog_external_data_source_list_command_builder(commandPath, resultDataTypeName, databaseName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.databaseName(databaseName);
        return _this;
    }
    /** The name of the database containing the external data sources. */
    az_dla_catalog_external_data_source_list_command_builder.prototype.databaseName = function (value) {
        this.setFlag("--database-name", value);
        return this;
    };
    /** Name of the Data Lake Analytics account. */
    az_dla_catalog_external_data_source_list_command_builder.prototype.account = function (value) {
        this.setFlag("--account", value);
        return this;
    };
    /** The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. */
    az_dla_catalog_external_data_source_list_command_builder.prototype.count = function (value) {
        this.setFlag("--count", value);
        return this;
    };
    /** OData filter. Optional. */
    az_dla_catalog_external_data_source_list_command_builder.prototype.filter = function (value) {
        this.setFlag("--filter", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_dla_catalog_external_data_source_list_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional. */
    az_dla_catalog_external_data_source_list_command_builder.prototype.orderby = function (value) {
        this.setFlag("--orderby", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_dla_catalog_external_data_source_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional. */
    az_dla_catalog_external_data_source_list_command_builder.prototype.select = function (value) {
        this.setFlag("--select", value);
        return this;
    };
    /** The number of items to skip over before returning elements. */
    az_dla_catalog_external_data_source_list_command_builder.prototype.skip = function (value) {
        this.setFlag("--skip", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dla_catalog_external_data_source_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Maximum number of items to return. */
    az_dla_catalog_external_data_source_list_command_builder.prototype.top = function (value) {
        this.setFlag("--top", value);
        return this;
    };
    return az_dla_catalog_external_data_source_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Retrieves the specified external data source from the Data Lake Analytics catalog.
 *
 * Syntax:
 * ```
 * az dla catalog external-data-source show --database-name
 *                                          --external-data-source-name
 *                                          [--account]
 *                                          [--ids]
 *                                          [--query-examples]
 *                                          [--subscription]
 * ```
 *
 * @param {string} databaseName The name of the database containing the external data source.
 * @param {string} externalDataSourceName The name of the external data source.
 */
var az_dla_catalog_external_data_source_show_command_builder = /** @class */ (function (_super) {
    __extends(az_dla_catalog_external_data_source_show_command_builder, _super);
    function az_dla_catalog_external_data_source_show_command_builder(commandPath, resultDataTypeName, databaseName, externalDataSourceName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.databaseName(databaseName);
        _this.externalDataSourceName(externalDataSourceName);
        return _this;
    }
    /** The name of the database containing the external data source. */
    az_dla_catalog_external_data_source_show_command_builder.prototype.databaseName = function (value) {
        this.setFlag("--database-name", value);
        return this;
    };
    /** The name of the external data source. */
    az_dla_catalog_external_data_source_show_command_builder.prototype.externalDataSourceName = function (value) {
        this.setFlag("--external-data-source-name", value);
        return this;
    };
    /** Name of the Data Lake Analytics account. */
    az_dla_catalog_external_data_source_show_command_builder.prototype.account = function (value) {
        this.setFlag("--account", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_dla_catalog_external_data_source_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_dla_catalog_external_data_source_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dla_catalog_external_data_source_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_dla_catalog_external_data_source_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Retrieves the list of packages from the Data Lake Analytics catalog.
 *
 * Syntax:
 * ```
 * az dla catalog package list --database-name
 *                             --schema-name
 *                             [--account]
 *                             [--count]
 *                             [--filter]
 *                             [--ids]
 *                             [--orderby]
 *                             [--query-examples]
 *                             [--select]
 *                             [--skip]
 *                             [--subscription]
 *                             [--top]
 * ```
 *
 * @param {string} databaseName The name of the database containing the packages.
 * @param {string} schemaName The name of the schema containing the packages.
 */
var az_dla_catalog_package_list_command_builder = /** @class */ (function (_super) {
    __extends(az_dla_catalog_package_list_command_builder, _super);
    function az_dla_catalog_package_list_command_builder(commandPath, resultDataTypeName, databaseName, schemaName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.databaseName(databaseName);
        _this.schemaName(schemaName);
        return _this;
    }
    /** The name of the database containing the packages. */
    az_dla_catalog_package_list_command_builder.prototype.databaseName = function (value) {
        this.setFlag("--database-name", value);
        return this;
    };
    /** The name of the schema containing the packages. */
    az_dla_catalog_package_list_command_builder.prototype.schemaName = function (value) {
        this.setFlag("--schema-name", value);
        return this;
    };
    /** Name of the Data Lake Analytics account. */
    az_dla_catalog_package_list_command_builder.prototype.account = function (value) {
        this.setFlag("--account", value);
        return this;
    };
    /** The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. */
    az_dla_catalog_package_list_command_builder.prototype.count = function (value) {
        this.setFlag("--count", value);
        return this;
    };
    /** OData filter. Optional. */
    az_dla_catalog_package_list_command_builder.prototype.filter = function (value) {
        this.setFlag("--filter", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_dla_catalog_package_list_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional. */
    az_dla_catalog_package_list_command_builder.prototype.orderby = function (value) {
        this.setFlag("--orderby", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_dla_catalog_package_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional. */
    az_dla_catalog_package_list_command_builder.prototype.select = function (value) {
        this.setFlag("--select", value);
        return this;
    };
    /** The number of items to skip over before returning elements. */
    az_dla_catalog_package_list_command_builder.prototype.skip = function (value) {
        this.setFlag("--skip", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dla_catalog_package_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Maximum number of items to return. */
    az_dla_catalog_package_list_command_builder.prototype.top = function (value) {
        this.setFlag("--top", value);
        return this;
    };
    return az_dla_catalog_package_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Retrieves the specified package from the Data Lake Analytics catalog.
 *
 * Syntax:
 * ```
 * az dla catalog package show --database-name
 *                             --package-name
 *                             --schema-name
 *                             [--account]
 *                             [--ids]
 *                             [--query-examples]
 *                             [--subscription]
 * ```
 *
 * @param {string} databaseName The name of the database containing the package.
 * @param {string} packageName The name of the package.
 * @param {string} schemaName The name of the schema containing the package.
 */
var az_dla_catalog_package_show_command_builder = /** @class */ (function (_super) {
    __extends(az_dla_catalog_package_show_command_builder, _super);
    function az_dla_catalog_package_show_command_builder(commandPath, resultDataTypeName, databaseName, packageName, schemaName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.databaseName(databaseName);
        _this.packageName(packageName);
        _this.schemaName(schemaName);
        return _this;
    }
    /** The name of the database containing the package. */
    az_dla_catalog_package_show_command_builder.prototype.databaseName = function (value) {
        this.setFlag("--database-name", value);
        return this;
    };
    /** The name of the package. */
    az_dla_catalog_package_show_command_builder.prototype.packageName = function (value) {
        this.setFlag("--package-name", value);
        return this;
    };
    /** The name of the schema containing the package. */
    az_dla_catalog_package_show_command_builder.prototype.schemaName = function (value) {
        this.setFlag("--schema-name", value);
        return this;
    };
    /** Name of the Data Lake Analytics account. */
    az_dla_catalog_package_show_command_builder.prototype.account = function (value) {
        this.setFlag("--account", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_dla_catalog_package_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_dla_catalog_package_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dla_catalog_package_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_dla_catalog_package_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Retrieves the list of procedures from the Data Lake Analytics catalog.
 *
 * Syntax:
 * ```
 * az dla catalog procedure list --database-name
 *                               --schema-name
 *                               [--account]
 *                               [--count]
 *                               [--filter]
 *                               [--ids]
 *                               [--orderby]
 *                               [--query-examples]
 *                               [--select]
 *                               [--skip]
 *                               [--subscription]
 *                               [--top]
 * ```
 *
 * @param {string} databaseName The name of the database containing the procedures.
 * @param {string} schemaName The name of the schema containing the procedures.
 */
var az_dla_catalog_procedure_list_command_builder = /** @class */ (function (_super) {
    __extends(az_dla_catalog_procedure_list_command_builder, _super);
    function az_dla_catalog_procedure_list_command_builder(commandPath, resultDataTypeName, databaseName, schemaName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.databaseName(databaseName);
        _this.schemaName(schemaName);
        return _this;
    }
    /** The name of the database containing the procedures. */
    az_dla_catalog_procedure_list_command_builder.prototype.databaseName = function (value) {
        this.setFlag("--database-name", value);
        return this;
    };
    /** The name of the schema containing the procedures. */
    az_dla_catalog_procedure_list_command_builder.prototype.schemaName = function (value) {
        this.setFlag("--schema-name", value);
        return this;
    };
    /** Name of the Data Lake Analytics account. */
    az_dla_catalog_procedure_list_command_builder.prototype.account = function (value) {
        this.setFlag("--account", value);
        return this;
    };
    /** The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. */
    az_dla_catalog_procedure_list_command_builder.prototype.count = function (value) {
        this.setFlag("--count", value);
        return this;
    };
    /** OData filter. Optional. */
    az_dla_catalog_procedure_list_command_builder.prototype.filter = function (value) {
        this.setFlag("--filter", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_dla_catalog_procedure_list_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional. */
    az_dla_catalog_procedure_list_command_builder.prototype.orderby = function (value) {
        this.setFlag("--orderby", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_dla_catalog_procedure_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional. */
    az_dla_catalog_procedure_list_command_builder.prototype.select = function (value) {
        this.setFlag("--select", value);
        return this;
    };
    /** The number of items to skip over before returning elements. */
    az_dla_catalog_procedure_list_command_builder.prototype.skip = function (value) {
        this.setFlag("--skip", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dla_catalog_procedure_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Maximum number of items to return. */
    az_dla_catalog_procedure_list_command_builder.prototype.top = function (value) {
        this.setFlag("--top", value);
        return this;
    };
    return az_dla_catalog_procedure_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Retrieves the specified procedure from the Data Lake Analytics catalog.
 *
 * Syntax:
 * ```
 * az dla catalog procedure show --database-name
 *                               --procedure-name
 *                               --schema-name
 *                               [--account]
 *                               [--ids]
 *                               [--query-examples]
 *                               [--subscription]
 * ```
 *
 * @param {string} databaseName The name of the database containing the procedure.
 * @param {string} procedureName The name of the procedure.
 * @param {string} schemaName The name of the schema containing the procedure.
 */
var az_dla_catalog_procedure_show_command_builder = /** @class */ (function (_super) {
    __extends(az_dla_catalog_procedure_show_command_builder, _super);
    function az_dla_catalog_procedure_show_command_builder(commandPath, resultDataTypeName, databaseName, procedureName, schemaName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.databaseName(databaseName);
        _this.procedureName(procedureName);
        _this.schemaName(schemaName);
        return _this;
    }
    /** The name of the database containing the procedure. */
    az_dla_catalog_procedure_show_command_builder.prototype.databaseName = function (value) {
        this.setFlag("--database-name", value);
        return this;
    };
    /** The name of the procedure. */
    az_dla_catalog_procedure_show_command_builder.prototype.procedureName = function (value) {
        this.setFlag("--procedure-name", value);
        return this;
    };
    /** The name of the schema containing the procedure. */
    az_dla_catalog_procedure_show_command_builder.prototype.schemaName = function (value) {
        this.setFlag("--schema-name", value);
        return this;
    };
    /** Name of the Data Lake Analytics account. */
    az_dla_catalog_procedure_show_command_builder.prototype.account = function (value) {
        this.setFlag("--account", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_dla_catalog_procedure_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_dla_catalog_procedure_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dla_catalog_procedure_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_dla_catalog_procedure_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Retrieves the list of schemas from the Data Lake Analytics catalog.
 *
 * Syntax:
 * ```
 * az dla catalog schema list --database-name
 *                            [--account]
 *                            [--count]
 *                            [--filter]
 *                            [--ids]
 *                            [--orderby]
 *                            [--query-examples]
 *                            [--select]
 *                            [--skip]
 *                            [--subscription]
 *                            [--top]
 * ```
 *
 * @param {string} databaseName The name of the database containing the schema.
 */
var az_dla_catalog_schema_list_command_builder = /** @class */ (function (_super) {
    __extends(az_dla_catalog_schema_list_command_builder, _super);
    function az_dla_catalog_schema_list_command_builder(commandPath, resultDataTypeName, databaseName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.databaseName(databaseName);
        return _this;
    }
    /** The name of the database containing the schema. */
    az_dla_catalog_schema_list_command_builder.prototype.databaseName = function (value) {
        this.setFlag("--database-name", value);
        return this;
    };
    /** Name of the Data Lake Analytics account. */
    az_dla_catalog_schema_list_command_builder.prototype.account = function (value) {
        this.setFlag("--account", value);
        return this;
    };
    /** The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. */
    az_dla_catalog_schema_list_command_builder.prototype.count = function (value) {
        this.setFlag("--count", value);
        return this;
    };
    /** OData filter. Optional. */
    az_dla_catalog_schema_list_command_builder.prototype.filter = function (value) {
        this.setFlag("--filter", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_dla_catalog_schema_list_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional. */
    az_dla_catalog_schema_list_command_builder.prototype.orderby = function (value) {
        this.setFlag("--orderby", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_dla_catalog_schema_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional. */
    az_dla_catalog_schema_list_command_builder.prototype.select = function (value) {
        this.setFlag("--select", value);
        return this;
    };
    /** The number of items to skip over before returning elements. */
    az_dla_catalog_schema_list_command_builder.prototype.skip = function (value) {
        this.setFlag("--skip", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dla_catalog_schema_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Maximum number of items to return. */
    az_dla_catalog_schema_list_command_builder.prototype.top = function (value) {
        this.setFlag("--top", value);
        return this;
    };
    return az_dla_catalog_schema_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Retrieves the specified schema from the Data Lake Analytics catalog.
 *
 * Syntax:
 * ```
 * az dla catalog schema show --database-name
 *                            --schema-name
 *                            [--account]
 *                            [--ids]
 *                            [--query-examples]
 *                            [--subscription]
 * ```
 *
 * @param {string} databaseName The name of the database containing the schema.
 * @param {string} schemaName The name of the schema.
 */
var az_dla_catalog_schema_show_command_builder = /** @class */ (function (_super) {
    __extends(az_dla_catalog_schema_show_command_builder, _super);
    function az_dla_catalog_schema_show_command_builder(commandPath, resultDataTypeName, databaseName, schemaName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.databaseName(databaseName);
        _this.schemaName(schemaName);
        return _this;
    }
    /** The name of the database containing the schema. */
    az_dla_catalog_schema_show_command_builder.prototype.databaseName = function (value) {
        this.setFlag("--database-name", value);
        return this;
    };
    /** The name of the schema. */
    az_dla_catalog_schema_show_command_builder.prototype.schemaName = function (value) {
        this.setFlag("--schema-name", value);
        return this;
    };
    /** Name of the Data Lake Analytics account. */
    az_dla_catalog_schema_show_command_builder.prototype.account = function (value) {
        this.setFlag("--account", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_dla_catalog_schema_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_dla_catalog_schema_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dla_catalog_schema_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_dla_catalog_schema_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Retrieves the list of table partitions from the Data Lake Analytics catalog.
 *
 * Syntax:
 * ```
 * az dla catalog table-partition list --database-name
 *                                     --schema-name
 *                                     --table-name
 *                                     [--account]
 *                                     [--count]
 *                                     [--filter]
 *                                     [--ids]
 *                                     [--orderby]
 *                                     [--query-examples]
 *                                     [--select]
 *                                     [--skip]
 *                                     [--subscription]
 *                                     [--top]
 * ```
 *
 * @param {string} databaseName The name of the database containing the partitions.
 * @param {string} schemaName The name of the schema containing the partitions.
 * @param {string} tableName The name of the table containing the partitions.
 */
var az_dla_catalog_table_partition_list_command_builder = /** @class */ (function (_super) {
    __extends(az_dla_catalog_table_partition_list_command_builder, _super);
    function az_dla_catalog_table_partition_list_command_builder(commandPath, resultDataTypeName, databaseName, schemaName, tableName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.databaseName(databaseName);
        _this.schemaName(schemaName);
        _this.tableName(tableName);
        return _this;
    }
    /** The name of the database containing the partitions. */
    az_dla_catalog_table_partition_list_command_builder.prototype.databaseName = function (value) {
        this.setFlag("--database-name", value);
        return this;
    };
    /** The name of the schema containing the partitions. */
    az_dla_catalog_table_partition_list_command_builder.prototype.schemaName = function (value) {
        this.setFlag("--schema-name", value);
        return this;
    };
    /** The name of the table containing the partitions. */
    az_dla_catalog_table_partition_list_command_builder.prototype.tableName = function (value) {
        this.setFlag("--table-name", value);
        return this;
    };
    /** Name of the Data Lake Analytics account. */
    az_dla_catalog_table_partition_list_command_builder.prototype.account = function (value) {
        this.setFlag("--account", value);
        return this;
    };
    /** The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. */
    az_dla_catalog_table_partition_list_command_builder.prototype.count = function (value) {
        this.setFlag("--count", value);
        return this;
    };
    /** OData filter. Optional. */
    az_dla_catalog_table_partition_list_command_builder.prototype.filter = function (value) {
        this.setFlag("--filter", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_dla_catalog_table_partition_list_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional. */
    az_dla_catalog_table_partition_list_command_builder.prototype.orderby = function (value) {
        this.setFlag("--orderby", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_dla_catalog_table_partition_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional. */
    az_dla_catalog_table_partition_list_command_builder.prototype.select = function (value) {
        this.setFlag("--select", value);
        return this;
    };
    /** The number of items to skip over before returning elements. */
    az_dla_catalog_table_partition_list_command_builder.prototype.skip = function (value) {
        this.setFlag("--skip", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dla_catalog_table_partition_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Maximum number of items to return. */
    az_dla_catalog_table_partition_list_command_builder.prototype.top = function (value) {
        this.setFlag("--top", value);
        return this;
    };
    return az_dla_catalog_table_partition_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Retrieves the specified table partition from the Data Lake Analytics catalog.
 *
 * Syntax:
 * ```
 * az dla catalog table-partition show --database-name
 *                                     --partition-name
 *                                     --schema-name
 *                                     --table-name
 *                                     [--account]
 *                                     [--ids]
 *                                     [--query-examples]
 *                                     [--subscription]
 * ```
 *
 * @param {string} databaseName The name of the database containing the partition.
 * @param {string} partitionName The name of the table partition.
 * @param {string} schemaName The name of the schema containing the partition.
 * @param {string} tableName The name of the table containing the partition.
 */
var az_dla_catalog_table_partition_show_command_builder = /** @class */ (function (_super) {
    __extends(az_dla_catalog_table_partition_show_command_builder, _super);
    function az_dla_catalog_table_partition_show_command_builder(commandPath, resultDataTypeName, databaseName, partitionName, schemaName, tableName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.databaseName(databaseName);
        _this.partitionName(partitionName);
        _this.schemaName(schemaName);
        _this.tableName(tableName);
        return _this;
    }
    /** The name of the database containing the partition. */
    az_dla_catalog_table_partition_show_command_builder.prototype.databaseName = function (value) {
        this.setFlag("--database-name", value);
        return this;
    };
    /** The name of the table partition. */
    az_dla_catalog_table_partition_show_command_builder.prototype.partitionName = function (value) {
        this.setFlag("--partition-name", value);
        return this;
    };
    /** The name of the schema containing the partition. */
    az_dla_catalog_table_partition_show_command_builder.prototype.schemaName = function (value) {
        this.setFlag("--schema-name", value);
        return this;
    };
    /** The name of the table containing the partition. */
    az_dla_catalog_table_partition_show_command_builder.prototype.tableName = function (value) {
        this.setFlag("--table-name", value);
        return this;
    };
    /** Name of the Data Lake Analytics account. */
    az_dla_catalog_table_partition_show_command_builder.prototype.account = function (value) {
        this.setFlag("--account", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_dla_catalog_table_partition_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_dla_catalog_table_partition_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dla_catalog_table_partition_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_dla_catalog_table_partition_show_command_builder;
}(base_1.CommandBuilder));
/**
 * List table statistics in a database, table, or schema.
 *
 * Syntax:
 * ```
 * az dla catalog table-stats list --database-name
 *                                 [--account]
 *                                 [--ids]
 *                                 [--query-examples]
 *                                 [--schema-name]
 *                                 [--subscription]
 *                                 [--table-name]
 * ```
 *
 * @param {string} databaseName The name of the database.
 */
var az_dla_catalog_table_stats_list_command_builder = /** @class */ (function (_super) {
    __extends(az_dla_catalog_table_stats_list_command_builder, _super);
    function az_dla_catalog_table_stats_list_command_builder(commandPath, resultDataTypeName, databaseName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.databaseName(databaseName);
        return _this;
    }
    /** The name of the database. */
    az_dla_catalog_table_stats_list_command_builder.prototype.databaseName = function (value) {
        this.setFlag("--database-name", value);
        return this;
    };
    /** Name of the Data Lake Analytics account. */
    az_dla_catalog_table_stats_list_command_builder.prototype.account = function (value) {
        this.setFlag("--account", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_dla_catalog_table_stats_list_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_dla_catalog_table_stats_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** The schema associated with the tables to list. */
    az_dla_catalog_table_stats_list_command_builder.prototype.schemaName = function (value) {
        this.setFlag("--schema-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dla_catalog_table_stats_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The table to list statistics for. `--schema-name` must also be specified. */
    az_dla_catalog_table_stats_list_command_builder.prototype.tableName = function (value) {
        this.setFlag("--table-name", value);
        return this;
    };
    return az_dla_catalog_table_stats_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Retrieves the specified table statistics from the Data Lake Analytics catalog.
 *
 * Syntax:
 * ```
 * az dla catalog table-stats show --database-name
 *                                 --schema-name
 *                                 --statistics-name
 *                                 --table-name
 *                                 [--account]
 *                                 [--ids]
 *                                 [--query-examples]
 *                                 [--subscription]
 * ```
 *
 * @param {string} databaseName The name of the database containing the statistics.
 * @param {string} schemaName The name of the schema containing the statistics.
 * @param {string} statisticsName The name of the table statistics.
 * @param {string} tableName The name of the table containing the statistics.
 */
var az_dla_catalog_table_stats_show_command_builder = /** @class */ (function (_super) {
    __extends(az_dla_catalog_table_stats_show_command_builder, _super);
    function az_dla_catalog_table_stats_show_command_builder(commandPath, resultDataTypeName, databaseName, schemaName, statisticsName, tableName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.databaseName(databaseName);
        _this.schemaName(schemaName);
        _this.statisticsName(statisticsName);
        _this.tableName(tableName);
        return _this;
    }
    /** The name of the database containing the statistics. */
    az_dla_catalog_table_stats_show_command_builder.prototype.databaseName = function (value) {
        this.setFlag("--database-name", value);
        return this;
    };
    /** The name of the schema containing the statistics. */
    az_dla_catalog_table_stats_show_command_builder.prototype.schemaName = function (value) {
        this.setFlag("--schema-name", value);
        return this;
    };
    /** The name of the table statistics. */
    az_dla_catalog_table_stats_show_command_builder.prototype.statisticsName = function (value) {
        this.setFlag("--statistics-name", value);
        return this;
    };
    /** The name of the table containing the statistics. */
    az_dla_catalog_table_stats_show_command_builder.prototype.tableName = function (value) {
        this.setFlag("--table-name", value);
        return this;
    };
    /** Name of the Data Lake Analytics account. */
    az_dla_catalog_table_stats_show_command_builder.prototype.account = function (value) {
        this.setFlag("--account", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_dla_catalog_table_stats_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_dla_catalog_table_stats_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dla_catalog_table_stats_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_dla_catalog_table_stats_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Retrieves the list of table types from the Data Lake Analytics catalog.
 *
 * Syntax:
 * ```
 * az dla catalog table-type list --database-name
 *                                --schema-name
 *                                [--account]
 *                                [--count]
 *                                [--filter]
 *                                [--ids]
 *                                [--orderby]
 *                                [--query-examples]
 *                                [--select]
 *                                [--skip]
 *                                [--subscription]
 *                                [--top]
 * ```
 *
 * @param {string} databaseName The name of the database containing the table types.
 * @param {string} schemaName The name of the schema containing the table types.
 */
var az_dla_catalog_table_type_list_command_builder = /** @class */ (function (_super) {
    __extends(az_dla_catalog_table_type_list_command_builder, _super);
    function az_dla_catalog_table_type_list_command_builder(commandPath, resultDataTypeName, databaseName, schemaName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.databaseName(databaseName);
        _this.schemaName(schemaName);
        return _this;
    }
    /** The name of the database containing the table types. */
    az_dla_catalog_table_type_list_command_builder.prototype.databaseName = function (value) {
        this.setFlag("--database-name", value);
        return this;
    };
    /** The name of the schema containing the table types. */
    az_dla_catalog_table_type_list_command_builder.prototype.schemaName = function (value) {
        this.setFlag("--schema-name", value);
        return this;
    };
    /** Name of the Data Lake Analytics account. */
    az_dla_catalog_table_type_list_command_builder.prototype.account = function (value) {
        this.setFlag("--account", value);
        return this;
    };
    /** The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. */
    az_dla_catalog_table_type_list_command_builder.prototype.count = function (value) {
        this.setFlag("--count", value);
        return this;
    };
    /** OData filter. Optional. */
    az_dla_catalog_table_type_list_command_builder.prototype.filter = function (value) {
        this.setFlag("--filter", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_dla_catalog_table_type_list_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional. */
    az_dla_catalog_table_type_list_command_builder.prototype.orderby = function (value) {
        this.setFlag("--orderby", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_dla_catalog_table_type_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional. */
    az_dla_catalog_table_type_list_command_builder.prototype.select = function (value) {
        this.setFlag("--select", value);
        return this;
    };
    /** The number of items to skip over before returning elements. */
    az_dla_catalog_table_type_list_command_builder.prototype.skip = function (value) {
        this.setFlag("--skip", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dla_catalog_table_type_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Maximum number of items to return. */
    az_dla_catalog_table_type_list_command_builder.prototype.top = function (value) {
        this.setFlag("--top", value);
        return this;
    };
    return az_dla_catalog_table_type_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Retrieves the specified table type from the Data Lake Analytics catalog.
 *
 * Syntax:
 * ```
 * az dla catalog table-type show --database-name
 *                                --schema-name
 *                                --table-type-name
 *                                [--account]
 *                                [--ids]
 *                                [--query-examples]
 *                                [--subscription]
 * ```
 *
 * @param {string} databaseName The name of the database containing the table type.
 * @param {string} schemaName The name of the schema containing the table type.
 * @param {string} tableTypeName The name of the table type to retrieve.
 */
var az_dla_catalog_table_type_show_command_builder = /** @class */ (function (_super) {
    __extends(az_dla_catalog_table_type_show_command_builder, _super);
    function az_dla_catalog_table_type_show_command_builder(commandPath, resultDataTypeName, databaseName, schemaName, tableTypeName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.databaseName(databaseName);
        _this.schemaName(schemaName);
        _this.tableTypeName(tableTypeName);
        return _this;
    }
    /** The name of the database containing the table type. */
    az_dla_catalog_table_type_show_command_builder.prototype.databaseName = function (value) {
        this.setFlag("--database-name", value);
        return this;
    };
    /** The name of the schema containing the table type. */
    az_dla_catalog_table_type_show_command_builder.prototype.schemaName = function (value) {
        this.setFlag("--schema-name", value);
        return this;
    };
    /** The name of the table type to retrieve. */
    az_dla_catalog_table_type_show_command_builder.prototype.tableTypeName = function (value) {
        this.setFlag("--table-type-name", value);
        return this;
    };
    /** Name of the Data Lake Analytics account. */
    az_dla_catalog_table_type_show_command_builder.prototype.account = function (value) {
        this.setFlag("--account", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_dla_catalog_table_type_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_dla_catalog_table_type_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dla_catalog_table_type_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_dla_catalog_table_type_show_command_builder;
}(base_1.CommandBuilder));
/**
 * List tables in a database or schema.
 *
 * Syntax:
 * ```
 * az dla catalog table list --database-name
 *                           [--account]
 *                           [--ids]
 *                           [--query-examples]
 *                           [--schema-name]
 *                           [--subscription]
 * ```
 *
 * @param {string} databaseName The name of the database.
 */
var az_dla_catalog_table_list_command_builder = /** @class */ (function (_super) {
    __extends(az_dla_catalog_table_list_command_builder, _super);
    function az_dla_catalog_table_list_command_builder(commandPath, resultDataTypeName, databaseName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.databaseName(databaseName);
        return _this;
    }
    /** The name of the database. */
    az_dla_catalog_table_list_command_builder.prototype.databaseName = function (value) {
        this.setFlag("--database-name", value);
        return this;
    };
    /** Name of the Data Lake Analytics account. */
    az_dla_catalog_table_list_command_builder.prototype.account = function (value) {
        this.setFlag("--account", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_dla_catalog_table_list_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_dla_catalog_table_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** The schema assocated with the tables to list. */
    az_dla_catalog_table_list_command_builder.prototype.schemaName = function (value) {
        this.setFlag("--schema-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dla_catalog_table_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_dla_catalog_table_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Retrieves the specified table from the Data Lake Analytics catalog.
 *
 * Syntax:
 * ```
 * az dla catalog table show --database-name
 *                           --schema-name
 *                           --table-name
 *                           [--account]
 *                           [--ids]
 *                           [--query-examples]
 *                           [--subscription]
 * ```
 *
 * @param {string} databaseName The name of the database containing the table.
 * @param {string} schemaName The name of the schema containing the table.
 * @param {string} tableName The name of the table.
 */
var az_dla_catalog_table_show_command_builder = /** @class */ (function (_super) {
    __extends(az_dla_catalog_table_show_command_builder, _super);
    function az_dla_catalog_table_show_command_builder(commandPath, resultDataTypeName, databaseName, schemaName, tableName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.databaseName(databaseName);
        _this.schemaName(schemaName);
        _this.tableName(tableName);
        return _this;
    }
    /** The name of the database containing the table. */
    az_dla_catalog_table_show_command_builder.prototype.databaseName = function (value) {
        this.setFlag("--database-name", value);
        return this;
    };
    /** The name of the schema containing the table. */
    az_dla_catalog_table_show_command_builder.prototype.schemaName = function (value) {
        this.setFlag("--schema-name", value);
        return this;
    };
    /** The name of the table. */
    az_dla_catalog_table_show_command_builder.prototype.tableName = function (value) {
        this.setFlag("--table-name", value);
        return this;
    };
    /** Name of the Data Lake Analytics account. */
    az_dla_catalog_table_show_command_builder.prototype.account = function (value) {
        this.setFlag("--account", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_dla_catalog_table_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_dla_catalog_table_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dla_catalog_table_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_dla_catalog_table_show_command_builder;
}(base_1.CommandBuilder));
/**
 * List table valued functions in a database or schema.
 *
 * Syntax:
 * ```
 * az dla catalog tvf list --database-name
 *                         [--account]
 *                         [--ids]
 *                         [--query-examples]
 *                         [--schema-name]
 *                         [--subscription]
 * ```
 *
 * @param {string} databaseName The name of the database.
 */
var az_dla_catalog_tvf_list_command_builder = /** @class */ (function (_super) {
    __extends(az_dla_catalog_tvf_list_command_builder, _super);
    function az_dla_catalog_tvf_list_command_builder(commandPath, resultDataTypeName, databaseName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.databaseName(databaseName);
        return _this;
    }
    /** The name of the database. */
    az_dla_catalog_tvf_list_command_builder.prototype.databaseName = function (value) {
        this.setFlag("--database-name", value);
        return this;
    };
    /** Name of the Data Lake Analytics account. */
    az_dla_catalog_tvf_list_command_builder.prototype.account = function (value) {
        this.setFlag("--account", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_dla_catalog_tvf_list_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_dla_catalog_tvf_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** The name of the schema assocated with table valued functions to list. */
    az_dla_catalog_tvf_list_command_builder.prototype.schemaName = function (value) {
        this.setFlag("--schema-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dla_catalog_tvf_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_dla_catalog_tvf_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Retrieves the specified table valued function from the Data Lake Analytics catalog.
 *
 * Syntax:
 * ```
 * az dla catalog tvf show --database-name
 *                         --schema-name
 *                         --table-valued-function-name
 *                         [--account]
 *                         [--ids]
 *                         [--query-examples]
 *                         [--subscription]
 * ```
 *
 * @param {string} databaseName The name of the database containing the table valued function.
 * @param {string} schemaName The name of the schema containing the table valued function.
 * @param {string} tableValuedFunctionName The name of the tableValuedFunction.
 */
var az_dla_catalog_tvf_show_command_builder = /** @class */ (function (_super) {
    __extends(az_dla_catalog_tvf_show_command_builder, _super);
    function az_dla_catalog_tvf_show_command_builder(commandPath, resultDataTypeName, databaseName, schemaName, tableValuedFunctionName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.databaseName(databaseName);
        _this.schemaName(schemaName);
        _this.tableValuedFunctionName(tableValuedFunctionName);
        return _this;
    }
    /** The name of the database containing the table valued function. */
    az_dla_catalog_tvf_show_command_builder.prototype.databaseName = function (value) {
        this.setFlag("--database-name", value);
        return this;
    };
    /** The name of the schema containing the table valued function. */
    az_dla_catalog_tvf_show_command_builder.prototype.schemaName = function (value) {
        this.setFlag("--schema-name", value);
        return this;
    };
    /** The name of the tableValuedFunction. */
    az_dla_catalog_tvf_show_command_builder.prototype.tableValuedFunctionName = function (value) {
        this.setFlag("--table-valued-function-name", value);
        return this;
    };
    /** Name of the Data Lake Analytics account. */
    az_dla_catalog_tvf_show_command_builder.prototype.account = function (value) {
        this.setFlag("--account", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_dla_catalog_tvf_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_dla_catalog_tvf_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dla_catalog_tvf_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_dla_catalog_tvf_show_command_builder;
}(base_1.CommandBuilder));
/**
 * List views in a database or schema.
 *
 * Syntax:
 * ```
 * az dla catalog view list --database-name
 *                          [--account]
 *                          [--ids]
 *                          [--query-examples]
 *                          [--schema-name]
 *                          [--subscription]
 * ```
 *
 * @param {string} databaseName The name of the database.
 */
var az_dla_catalog_view_list_command_builder = /** @class */ (function (_super) {
    __extends(az_dla_catalog_view_list_command_builder, _super);
    function az_dla_catalog_view_list_command_builder(commandPath, resultDataTypeName, databaseName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.databaseName(databaseName);
        return _this;
    }
    /** The name of the database. */
    az_dla_catalog_view_list_command_builder.prototype.databaseName = function (value) {
        this.setFlag("--database-name", value);
        return this;
    };
    /** Name of the Data Lake Analytics account. */
    az_dla_catalog_view_list_command_builder.prototype.account = function (value) {
        this.setFlag("--account", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_dla_catalog_view_list_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_dla_catalog_view_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** The name of the schema associated with the views to list. */
    az_dla_catalog_view_list_command_builder.prototype.schemaName = function (value) {
        this.setFlag("--schema-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dla_catalog_view_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_dla_catalog_view_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Retrieves the specified view from the Data Lake Analytics catalog.
 *
 * Syntax:
 * ```
 * az dla catalog view show --database-name
 *                          --schema-name
 *                          --view-name
 *                          [--account]
 *                          [--ids]
 *                          [--query-examples]
 *                          [--subscription]
 * ```
 *
 * @param {string} databaseName The name of the database containing the view.
 * @param {string} schemaName The name of the schema containing the view.
 * @param {string} viewName The name of the view.
 */
var az_dla_catalog_view_show_command_builder = /** @class */ (function (_super) {
    __extends(az_dla_catalog_view_show_command_builder, _super);
    function az_dla_catalog_view_show_command_builder(commandPath, resultDataTypeName, databaseName, schemaName, viewName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.databaseName(databaseName);
        _this.schemaName(schemaName);
        _this.viewName(viewName);
        return _this;
    }
    /** The name of the database containing the view. */
    az_dla_catalog_view_show_command_builder.prototype.databaseName = function (value) {
        this.setFlag("--database-name", value);
        return this;
    };
    /** The name of the schema containing the view. */
    az_dla_catalog_view_show_command_builder.prototype.schemaName = function (value) {
        this.setFlag("--schema-name", value);
        return this;
    };
    /** The name of the view. */
    az_dla_catalog_view_show_command_builder.prototype.viewName = function (value) {
        this.setFlag("--view-name", value);
        return this;
    };
    /** Name of the Data Lake Analytics account. */
    az_dla_catalog_view_show_command_builder.prototype.account = function (value) {
        this.setFlag("--account", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_dla_catalog_view_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_dla_catalog_view_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dla_catalog_view_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_dla_catalog_view_show_command_builder;
}(base_1.CommandBuilder));
/**
 * List job pipelines in a Data Lake Analytics account.
 *
 * Syntax:
 * ```
 * az dla job pipeline list [--account]
 *                          [--end-date-time]
 *                          [--ids]
 *                          [--query-examples]
 *                          [--start-date-time]
 *                          [--subscription]
 * ```
 */
var az_dla_job_pipeline_list_command_builder = /** @class */ (function (_super) {
    __extends(az_dla_job_pipeline_list_command_builder, _super);
    function az_dla_job_pipeline_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Name of the Data Lake Analytics account. */
    az_dla_job_pipeline_list_command_builder.prototype.account = function (value) {
        this.setFlag("--account", value);
        return this;
    };
    /** The end date for when to get the list of pipelines. The startDateTime and endDateTime can be no more than 30 days apart. */
    az_dla_job_pipeline_list_command_builder.prototype.endDateTime = function (value) {
        this.setFlag("--end-date-time", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_dla_job_pipeline_list_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_dla_job_pipeline_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** The start date for when to get the list of pipelines. The startDateTime and endDateTime can be no more than 30 days apart. */
    az_dla_job_pipeline_list_command_builder.prototype.startDateTime = function (value) {
        this.setFlag("--start-date-time", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dla_job_pipeline_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_dla_job_pipeline_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Retrieve a job pipeline in a Data Lake Analytics account.
 *
 * Syntax:
 * ```
 * az dla job pipeline show --pipeline-identity
 *                          [--account]
 *                          [--end-date-time]
 *                          [--ids]
 *                          [--query-examples]
 *                          [--start-date-time]
 *                          [--subscription]
 * ```
 *
 * @param {string} pipelineIdentity Pipeline ID.
 */
var az_dla_job_pipeline_show_command_builder = /** @class */ (function (_super) {
    __extends(az_dla_job_pipeline_show_command_builder, _super);
    function az_dla_job_pipeline_show_command_builder(commandPath, resultDataTypeName, pipelineIdentity) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.pipelineIdentity(pipelineIdentity);
        return _this;
    }
    /** Pipeline ID. */
    az_dla_job_pipeline_show_command_builder.prototype.pipelineIdentity = function (value) {
        this.setFlag("--pipeline-identity", value);
        return this;
    };
    /** Name of the Data Lake Analytics account. */
    az_dla_job_pipeline_show_command_builder.prototype.account = function (value) {
        this.setFlag("--account", value);
        return this;
    };
    /** The end date for when to get the pipeline and aggregate its data. The startDateTime and endDateTime can be no more than 30 days apart. */
    az_dla_job_pipeline_show_command_builder.prototype.endDateTime = function (value) {
        this.setFlag("--end-date-time", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_dla_job_pipeline_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_dla_job_pipeline_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** The start date for when to get the pipeline and aggregate its data. The startDateTime and endDateTime can be no more than 30 days apart. */
    az_dla_job_pipeline_show_command_builder.prototype.startDateTime = function (value) {
        this.setFlag("--start-date-time", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dla_job_pipeline_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_dla_job_pipeline_show_command_builder;
}(base_1.CommandBuilder));
/**
 * List job recurrences in a Data Lake Analytics account.
 *
 * Syntax:
 * ```
 * az dla job recurrence list [--account]
 *                            [--end-date-time]
 *                            [--ids]
 *                            [--query-examples]
 *                            [--start-date-time]
 *                            [--subscription]
 * ```
 */
var az_dla_job_recurrence_list_command_builder = /** @class */ (function (_super) {
    __extends(az_dla_job_recurrence_list_command_builder, _super);
    function az_dla_job_recurrence_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Name of the Data Lake Analytics account. */
    az_dla_job_recurrence_list_command_builder.prototype.account = function (value) {
        this.setFlag("--account", value);
        return this;
    };
    /** The end date for when to get the list of recurrences. The startDateTime and endDateTime can be no more than 30 days apart. */
    az_dla_job_recurrence_list_command_builder.prototype.endDateTime = function (value) {
        this.setFlag("--end-date-time", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_dla_job_recurrence_list_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_dla_job_recurrence_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** The start date for when to get the list of recurrences. The startDateTime and endDateTime can be no more than 30 days apart. */
    az_dla_job_recurrence_list_command_builder.prototype.startDateTime = function (value) {
        this.setFlag("--start-date-time", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dla_job_recurrence_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_dla_job_recurrence_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Retrieve a job recurrence in a Data Lake Analytics account.
 *
 * Syntax:
 * ```
 * az dla job recurrence show --recurrence-identity
 *                            [--account]
 *                            [--end-date-time]
 *                            [--ids]
 *                            [--query-examples]
 *                            [--start-date-time]
 *                            [--subscription]
 * ```
 *
 * @param {string} recurrenceIdentity Recurrence ID.
 */
var az_dla_job_recurrence_show_command_builder = /** @class */ (function (_super) {
    __extends(az_dla_job_recurrence_show_command_builder, _super);
    function az_dla_job_recurrence_show_command_builder(commandPath, resultDataTypeName, recurrenceIdentity) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.recurrenceIdentity(recurrenceIdentity);
        return _this;
    }
    /** Recurrence ID. */
    az_dla_job_recurrence_show_command_builder.prototype.recurrenceIdentity = function (value) {
        this.setFlag("--recurrence-identity", value);
        return this;
    };
    /** Name of the Data Lake Analytics account. */
    az_dla_job_recurrence_show_command_builder.prototype.account = function (value) {
        this.setFlag("--account", value);
        return this;
    };
    /** The end date for when to get recurrence and aggregate its data. The startDateTime and endDateTime can be no more than 30 days apart. */
    az_dla_job_recurrence_show_command_builder.prototype.endDateTime = function (value) {
        this.setFlag("--end-date-time", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_dla_job_recurrence_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_dla_job_recurrence_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** The start date for when to get the recurrence and aggregate its data. The startDateTime and endDateTime can be no more than 30 days apart. */
    az_dla_job_recurrence_show_command_builder.prototype.startDateTime = function (value) {
        this.setFlag("--start-date-time", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dla_job_recurrence_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_dla_job_recurrence_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Cancel a Data Lake Analytics job.
 *
 * Syntax:
 * ```
 * az dla job cancel --job-identity
 *                   [--account]
 *                   [--ids]
 *                   [--subscription]
 * ```
 *
 * @param {string} jobIdentity JobInfo ID to cancel.
 */
var az_dla_job_cancel_command_builder = /** @class */ (function (_super) {
    __extends(az_dla_job_cancel_command_builder, _super);
    function az_dla_job_cancel_command_builder(commandPath, resultDataTypeName, jobIdentity) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.jobIdentity(jobIdentity);
        return _this;
    }
    /** JobInfo ID to cancel. */
    az_dla_job_cancel_command_builder.prototype.jobIdentity = function (value) {
        this.setFlag("--job-identity", value);
        return this;
    };
    /** Name of the Data Lake Analytics account. */
    az_dla_job_cancel_command_builder.prototype.account = function (value) {
        this.setFlag("--account", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_dla_job_cancel_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dla_job_cancel_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_dla_job_cancel_command_builder;
}(base_1.CommandBuilder));
/**
 * List Data Lake Analytics jobs.
 *
 * Syntax:
 * ```
 * az dla job list [--account]
 *                 [--ids]
 *                 [--name]
 *                 [--pipeline-id]
 *                 [--query-examples]
 *                 [--recurrence-id]
 *                 [--result {Cancelled, Failed, None, Succeeded}]
 *                 [--state {Accepted, Compiling, Ended, New, Paused, Queued, Running, Scheduling, Starting, WaitingForCapacity}]
 *                 [--submitted-after]
 *                 [--submitted-before]
 *                 [--submitter]
 *                 [--subscription]
 *                 [--top]
 * ```
 */
var az_dla_job_list_command_builder = /** @class */ (function (_super) {
    __extends(az_dla_job_list_command_builder, _super);
    function az_dla_job_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Name of the Data Lake Analytics account. */
    az_dla_job_list_command_builder.prototype.account = function (value) {
        this.setFlag("--account", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_dla_job_list_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** A filter which returns jobs only by the specified friendly name. */
    az_dla_job_list_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** A filter which returns jobs only containing the specified pipeline_id. */
    az_dla_job_list_command_builder.prototype.pipelineId = function (value) {
        this.setFlag("--pipeline-id", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_dla_job_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** A filter which returns jobs only containing the specified recurrence_id. */
    az_dla_job_list_command_builder.prototype.recurrenceId = function (value) {
        this.setFlag("--recurrence-id", value);
        return this;
    };
    /** A filter which returns jobs with only the specified result(s). */
    az_dla_job_list_command_builder.prototype.result = function (value) {
        this.setFlag("--result", value);
        return this;
    };
    /** A filter which returns jobs with only the specified state(s). */
    az_dla_job_list_command_builder.prototype.state = function (value) {
        this.setFlag("--state", value);
        return this;
    };
    /** A filter which returns jobs only submitted after the specified time, in ISO-8601 format. */
    az_dla_job_list_command_builder.prototype.submittedAfter = function (value) {
        this.setFlag("--submitted-after", value);
        return this;
    };
    /** A filter which returns jobs only submitted before the specified time, in ISO-8601 format. */
    az_dla_job_list_command_builder.prototype.submittedBefore = function (value) {
        this.setFlag("--submitted-before", value);
        return this;
    };
    /** A filter which returns jobs only by the specified submitter. */
    az_dla_job_list_command_builder.prototype.submitter = function (value) {
        this.setFlag("--submitter", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dla_job_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Maximum number of items to return. */
    az_dla_job_list_command_builder.prototype.top = function (value) {
        this.setFlag("--top", value);
        return this;
    };
    return az_dla_job_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Get information for a Data Lake Analytics job.
 *
 * Syntax:
 * ```
 * az dla job show --job-identity
 *                 [--account]
 *                 [--ids]
 *                 [--query-examples]
 *                 [--subscription]
 * ```
 *
 * @param {string} jobIdentity JobInfo ID.
 */
var az_dla_job_show_command_builder = /** @class */ (function (_super) {
    __extends(az_dla_job_show_command_builder, _super);
    function az_dla_job_show_command_builder(commandPath, resultDataTypeName, jobIdentity) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.jobIdentity(jobIdentity);
        return _this;
    }
    /** JobInfo ID. */
    az_dla_job_show_command_builder.prototype.jobIdentity = function (value) {
        this.setFlag("--job-identity", value);
        return this;
    };
    /** Name of the Data Lake Analytics account. */
    az_dla_job_show_command_builder.prototype.account = function (value) {
        this.setFlag("--account", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_dla_job_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_dla_job_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dla_job_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_dla_job_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Submit a job to a Data Lake Analytics account.
 *
 * Syntax:
 * ```
 * az dla job submit --job-name
 *                   --script
 *                   [--account]
 *                   [--compile-mode {Full, Semantic, SingleBox}]
 *                   [--compile-only]
 *                   [--degree-of-parallelism]
 *                   [--ids]
 *                   [--pipeline-id]
 *                   [--pipeline-name]
 *                   [--pipeline-uri]
 *                   [--priority]
 *                   [--recurrence-id]
 *                   [--recurrence-name]
 *                   [--run-id]
 *                   [--runtime-version]
 *                   [--subscription]
 * ```
 *
 * @param {string} jobName Name for the submitted job.
 * @param {string} script Script to submit. This may be '@{file}' to load from a file.
 */
var az_dla_job_submit_command_builder = /** @class */ (function (_super) {
    __extends(az_dla_job_submit_command_builder, _super);
    function az_dla_job_submit_command_builder(commandPath, resultDataTypeName, jobName, script) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.jobName(jobName);
        _this.script(script);
        return _this;
    }
    /** Name for the submitted job. */
    az_dla_job_submit_command_builder.prototype.jobName = function (value) {
        this.setFlag("--job-name", value);
        return this;
    };
    /** Script to submit. This may be '@{file}' to load from a file. */
    az_dla_job_submit_command_builder.prototype.script = function (value) {
        this.setFlag("--script", value);
        return this;
    };
    /** Name of the Data Lake Analytics account. */
    az_dla_job_submit_command_builder.prototype.account = function (value) {
        this.setFlag("--account", value);
        return this;
    };
    /** Indicates the type of compilation to be done on this job. Valid values are: 'Semantic' (Only performs semantic checks and necessary sanity checks), 'Full' (full compilation) and 'SingleBox' (Full compilation performed locally). */
    az_dla_job_submit_command_builder.prototype.compileMode = function (value) {
        this.setFlag("--compile-mode", value);
        return this;
    };
    /** Indicates that the submission should only build the job and not execute if set to true. */
    az_dla_job_submit_command_builder.prototype.compileOnly = function (value) {
        this.setFlag("--compile-only", value);
        return this;
    };
    /** The degree of parallelism for the job. */
    az_dla_job_submit_command_builder.prototype.degreeOfParallelism = function (value) {
        this.setFlag("--degree-of-parallelism", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_dla_job_submit_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Job relationship pipeline GUID. */
    az_dla_job_submit_command_builder.prototype.pipelineId = function (value) {
        this.setFlag("--pipeline-id", value);
        return this;
    };
    /** Friendly name of the job relationship pipeline. */
    az_dla_job_submit_command_builder.prototype.pipelineName = function (value) {
        this.setFlag("--pipeline-name", value);
        return this;
    };
    /** Unique pipeline URI which links to the originating service for this pipeline. */
    az_dla_job_submit_command_builder.prototype.pipelineUri = function (value) {
        this.setFlag("--pipeline-uri", value);
        return this;
    };
    /** The priority of the job. */
    az_dla_job_submit_command_builder.prototype.priority = function (value) {
        this.setFlag("--priority", value);
        return this;
    };
    /** Recurrence GUID, unique per activity/script, regardless of iteration. Links different occurrences of the same job together. */
    az_dla_job_submit_command_builder.prototype.recurrenceId = function (value) {
        this.setFlag("--recurrence-id", value);
        return this;
    };
    /** Friendly recurrence nae for the correlation between jobs. */
    az_dla_job_submit_command_builder.prototype.recurrenceName = function (value) {
        this.setFlag("--recurrence-name", value);
        return this;
    };
    /** GUID of the iteration of this pipeline. */
    az_dla_job_submit_command_builder.prototype.runId = function (value) {
        this.setFlag("--run-id", value);
        return this;
    };
    /** The runtime version to use. */
    az_dla_job_submit_command_builder.prototype.runtimeVersion = function (value) {
        this.setFlag("--runtime-version", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dla_job_submit_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_dla_job_submit_command_builder;
}(base_1.CommandBuilder));
/**
 * Wait for a Data Lake Analytics job to finish.
 *
 * Syntax:
 * ```
 * az dla job wait --job-id
 *                 [--account]
 *                 [--ids]
 *                 [--max-wait-time-sec]
 *                 [--subscription]
 *                 [--wait-interval-sec]
 * ```
 *
 * @param {string} jobId Job ID to poll for completion.
 */
var az_dla_job_wait_command_builder = /** @class */ (function (_super) {
    __extends(az_dla_job_wait_command_builder, _super);
    function az_dla_job_wait_command_builder(commandPath, resultDataTypeName, jobId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.jobId(jobId);
        return _this;
    }
    /** Job ID to poll for completion. */
    az_dla_job_wait_command_builder.prototype.jobId = function (value) {
        this.setFlag("--job-id", value);
        return this;
    };
    /** Name of the Data Lake Analytics account. */
    az_dla_job_wait_command_builder.prototype.account = function (value) {
        this.setFlag("--account", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_dla_job_wait_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The maximum amount of time to wait before erroring out. Default value is to never timeout. Any value <= 0 means never timeout. */
    az_dla_job_wait_command_builder.prototype.maxWaitTimeSec = function (value) {
        this.setFlag("--max-wait-time-sec", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_dla_job_wait_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The polling interval between checks for the job status, in seconds. */
    az_dla_job_wait_command_builder.prototype.waitIntervalSec = function (value) {
        this.setFlag("--wait-interval-sec", value);
        return this;
    };
    return az_dla_job_wait_command_builder;
}(base_1.CommandBuilder));
