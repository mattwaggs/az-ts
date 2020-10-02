import { CommandBuilder } from '../base';
import { az_dla_account_blob_storage_add_command_result } from './models/az_dla_account_blob_storage_add_command_result';
import { az_dla_account_blob_storage_delete_command_result } from './models/az_dla_account_blob_storage_delete_command_result';
import { az_dla_account_blob_storage_list_command_result } from './models/az_dla_account_blob_storage_list_command_result';
import { az_dla_account_blob_storage_show_command_result } from './models/az_dla_account_blob_storage_show_command_result';
import { az_dla_account_blob_storage_update_command_result } from './models/az_dla_account_blob_storage_update_command_result';
import { az_dla_account_compute_policy_create_command_result } from './models/az_dla_account_compute_policy_create_command_result';
import { az_dla_account_compute_policy_delete_command_result } from './models/az_dla_account_compute_policy_delete_command_result';
import { az_dla_account_compute_policy_list_command_result } from './models/az_dla_account_compute_policy_list_command_result';
import { az_dla_account_compute_policy_show_command_result } from './models/az_dla_account_compute_policy_show_command_result';
import { az_dla_account_compute_policy_update_command_result } from './models/az_dla_account_compute_policy_update_command_result';
import { az_dla_account_data_lake_store_add_command_result } from './models/az_dla_account_data_lake_store_add_command_result';
import { az_dla_account_data_lake_store_delete_command_result } from './models/az_dla_account_data_lake_store_delete_command_result';
import { az_dla_account_data_lake_store_list_command_result } from './models/az_dla_account_data_lake_store_list_command_result';
import { az_dla_account_data_lake_store_show_command_result } from './models/az_dla_account_data_lake_store_show_command_result';
import { az_dla_account_firewall_create_command_result } from './models/az_dla_account_firewall_create_command_result';
import { az_dla_account_firewall_delete_command_result } from './models/az_dla_account_firewall_delete_command_result';
import { az_dla_account_firewall_list_command_result } from './models/az_dla_account_firewall_list_command_result';
import { az_dla_account_firewall_show_command_result } from './models/az_dla_account_firewall_show_command_result';
import { az_dla_account_firewall_update_command_result } from './models/az_dla_account_firewall_update_command_result';
import { az_dla_account_create_command_result } from './models/az_dla_account_create_command_result';
import { az_dla_account_delete_command_result } from './models/az_dla_account_delete_command_result';
import { az_dla_account_list_command_result } from './models/az_dla_account_list_command_result';
import { az_dla_account_show_command_result } from './models/az_dla_account_show_command_result';
import { az_dla_account_update_command_result } from './models/az_dla_account_update_command_result';
import { az_dla_catalog_assembly_list_command_result } from './models/az_dla_catalog_assembly_list_command_result';
import { az_dla_catalog_assembly_show_command_result } from './models/az_dla_catalog_assembly_show_command_result';
import { az_dla_catalog_credential_create_command_result } from './models/az_dla_catalog_credential_create_command_result';
import { az_dla_catalog_credential_delete_command_result } from './models/az_dla_catalog_credential_delete_command_result';
import { az_dla_catalog_credential_list_command_result } from './models/az_dla_catalog_credential_list_command_result';
import { az_dla_catalog_credential_show_command_result } from './models/az_dla_catalog_credential_show_command_result';
import { az_dla_catalog_credential_update_command_result } from './models/az_dla_catalog_credential_update_command_result';
import { az_dla_catalog_database_list_command_result } from './models/az_dla_catalog_database_list_command_result';
import { az_dla_catalog_database_show_command_result } from './models/az_dla_catalog_database_show_command_result';
import { az_dla_catalog_external_data_source_list_command_result } from './models/az_dla_catalog_external_data_source_list_command_result';
import { az_dla_catalog_external_data_source_show_command_result } from './models/az_dla_catalog_external_data_source_show_command_result';
import { az_dla_catalog_package_list_command_result } from './models/az_dla_catalog_package_list_command_result';
import { az_dla_catalog_package_show_command_result } from './models/az_dla_catalog_package_show_command_result';
import { az_dla_catalog_procedure_list_command_result } from './models/az_dla_catalog_procedure_list_command_result';
import { az_dla_catalog_procedure_show_command_result } from './models/az_dla_catalog_procedure_show_command_result';
import { az_dla_catalog_schema_list_command_result } from './models/az_dla_catalog_schema_list_command_result';
import { az_dla_catalog_schema_show_command_result } from './models/az_dla_catalog_schema_show_command_result';
import { az_dla_catalog_table_partition_list_command_result } from './models/az_dla_catalog_table_partition_list_command_result';
import { az_dla_catalog_table_partition_show_command_result } from './models/az_dla_catalog_table_partition_show_command_result';
import { az_dla_catalog_table_stats_list_command_result } from './models/az_dla_catalog_table_stats_list_command_result';
import { az_dla_catalog_table_stats_show_command_result } from './models/az_dla_catalog_table_stats_show_command_result';
import { az_dla_catalog_table_type_list_command_result } from './models/az_dla_catalog_table_type_list_command_result';
import { az_dla_catalog_table_type_show_command_result } from './models/az_dla_catalog_table_type_show_command_result';
import { az_dla_catalog_table_list_command_result } from './models/az_dla_catalog_table_list_command_result';
import { az_dla_catalog_table_show_command_result } from './models/az_dla_catalog_table_show_command_result';
import { az_dla_catalog_tvf_list_command_result } from './models/az_dla_catalog_tvf_list_command_result';
import { az_dla_catalog_tvf_show_command_result } from './models/az_dla_catalog_tvf_show_command_result';
import { az_dla_catalog_view_list_command_result } from './models/az_dla_catalog_view_list_command_result';
import { az_dla_catalog_view_show_command_result } from './models/az_dla_catalog_view_show_command_result';
import { az_dla_job_pipeline_list_command_result } from './models/az_dla_job_pipeline_list_command_result';
import { az_dla_job_pipeline_show_command_result } from './models/az_dla_job_pipeline_show_command_result';
import { az_dla_job_recurrence_list_command_result } from './models/az_dla_job_recurrence_list_command_result';
import { az_dla_job_recurrence_show_command_result } from './models/az_dla_job_recurrence_show_command_result';
import { az_dla_job_cancel_command_result } from './models/az_dla_job_cancel_command_result';
import { az_dla_job_list_command_result } from './models/az_dla_job_list_command_result';
import { az_dla_job_show_command_result } from './models/az_dla_job_show_command_result';
import { az_dla_job_submit_command_result } from './models/az_dla_job_submit_command_result';
import { az_dla_job_wait_command_result } from './models/az_dla_job_wait_command_result';
/** Manage links between Data Lake Analytics accounts and Azure Storage. */
export declare class az_dla_account_blob_storage {
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
    static add(accessKey: string, storageAccountName: string): az_dla_account_blob_storage_add_command_builder;
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
    static delete(storageAccountName: string): az_dla_account_blob_storage_delete_command_builder;
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
    static list(): az_dla_account_blob_storage_list_command_builder;
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
    static show(storageAccountName: string): az_dla_account_blob_storage_show_command_builder;
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
    static update(accessKey: string, storageAccountName: string): az_dla_account_blob_storage_update_command_builder;
}
/** Manage Data Lake Analytics account compute policies. */
export declare class az_dla_account_compute_policy {
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
    static create(account: string, computePolicyName: string, objectId: string, objectType: string): az_dla_account_compute_policy_create_command_builder;
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
    static delete(computePolicyName: string): az_dla_account_compute_policy_delete_command_builder;
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
    static list(): az_dla_account_compute_policy_list_command_builder;
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
    static show(computePolicyName: string): az_dla_account_compute_policy_show_command_builder;
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
    static update(computePolicyName: string): az_dla_account_compute_policy_update_command_builder;
}
/** Manage links between Data Lake Analytics and Data Lake Store accounts. */
export declare class az_dla_account_data_lake_store {
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
    static add(dataLakeStoreAccountName: string): az_dla_account_data_lake_store_add_command_builder;
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
    static delete(dataLakeStoreAccountName: string): az_dla_account_data_lake_store_delete_command_builder;
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
    static list(): az_dla_account_data_lake_store_list_command_builder;
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
    static show(dataLakeStoreAccountName: string): az_dla_account_data_lake_store_show_command_builder;
}
/** Manage Data Lake Analytics account firewall rules. */
export declare class az_dla_account_firewall {
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
    static create(account: string, endIpAddress: string, firewallRuleName: string, startIpAddress: string): az_dla_account_firewall_create_command_builder;
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
    static delete(firewallRuleName: string): az_dla_account_firewall_delete_command_builder;
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
    static list(): az_dla_account_firewall_list_command_builder;
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
    static show(firewallRuleName: string): az_dla_account_firewall_show_command_builder;
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
    static update(firewallRuleName: string): az_dla_account_firewall_update_command_builder;
}
/** Manage Data Lake Analytics accounts. */
export declare class az_dla_account {
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
    static create(account: string, defaultDataLakeStore: string): az_dla_account_create_command_builder;
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
    static delete(): az_dla_account_delete_command_builder;
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
    static list(): az_dla_account_list_command_builder;
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
    static show(): az_dla_account_show_command_builder;
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
    static update(): az_dla_account_update_command_builder;
}
/** Manage Data Lake Analytics catalog assemblies. */
export declare class az_dla_catalog_assembly {
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
    static list(databaseName: string): az_dla_catalog_assembly_list_command_builder;
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
    static show(assemblyName: string, databaseName: string): az_dla_catalog_assembly_show_command_builder;
}
/** Manage Data Lake Analytics catalog credentials. */
export declare class az_dla_catalog_credential {
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
    static create(account: string, credentialName: string, databaseName: string, uri: string, userName: string): az_dla_catalog_credential_create_command_builder;
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
    static delete(credentialName: string, databaseName: string): az_dla_catalog_credential_delete_command_builder;
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
    static list(databaseName: string): az_dla_catalog_credential_list_command_builder;
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
    static show(credentialName: string, databaseName: string): az_dla_catalog_credential_show_command_builder;
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
    static update(credentialName: string, databaseName: string, uri: string, userName: string): az_dla_catalog_credential_update_command_builder;
}
/** Manage Data Lake Analytics catalog databases. */
export declare class az_dla_catalog_database {
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
    static list(): az_dla_catalog_database_list_command_builder;
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
    static show(databaseName: string): az_dla_catalog_database_show_command_builder;
}
/** Manage Data Lake Analytics catalog external data sources. */
export declare class az_dla_catalog_external_data_source {
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
    static list(databaseName: string): az_dla_catalog_external_data_source_list_command_builder;
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
    static show(databaseName: string, externalDataSourceName: string): az_dla_catalog_external_data_source_show_command_builder;
}
/** Manage Data Lake Analytics catalog packages. */
export declare class az_dla_catalog_package {
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
    static list(databaseName: string, schemaName: string): az_dla_catalog_package_list_command_builder;
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
    static show(databaseName: string, packageName: string, schemaName: string): az_dla_catalog_package_show_command_builder;
}
/** Manage Data Lake Analytics catalog stored procedures. */
export declare class az_dla_catalog_procedure {
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
    static list(databaseName: string, schemaName: string): az_dla_catalog_procedure_list_command_builder;
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
    static show(databaseName: string, procedureName: string, schemaName: string): az_dla_catalog_procedure_show_command_builder;
}
/** Manage Data Lake Analytics catalog schemas. */
export declare class az_dla_catalog_schema {
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
    static list(databaseName: string): az_dla_catalog_schema_list_command_builder;
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
    static show(databaseName: string, schemaName: string): az_dla_catalog_schema_show_command_builder;
}
/** Manage Data Lake Analytics catalog table partitions. */
export declare class az_dla_catalog_table_partition {
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
    static list(databaseName: string, schemaName: string, tableName: string): az_dla_catalog_table_partition_list_command_builder;
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
    static show(databaseName: string, partitionName: string, schemaName: string, tableName: string): az_dla_catalog_table_partition_show_command_builder;
}
/** Manage Data Lake Analytics catalog table statistics. */
export declare class az_dla_catalog_table_stats {
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
    static list(databaseName: string): az_dla_catalog_table_stats_list_command_builder;
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
    static show(databaseName: string, schemaName: string, statisticsName: string, tableName: string): az_dla_catalog_table_stats_show_command_builder;
}
/** Manage Data Lake Analytics catalog table types. */
export declare class az_dla_catalog_table_type {
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
    static list(databaseName: string, schemaName: string): az_dla_catalog_table_type_list_command_builder;
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
    static show(databaseName: string, schemaName: string, tableTypeName: string): az_dla_catalog_table_type_show_command_builder;
}
/** Manage Data Lake Analytics catalog tables. */
export declare class az_dla_catalog_table {
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
    static list(databaseName: string): az_dla_catalog_table_list_command_builder;
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
    static show(databaseName: string, schemaName: string, tableName: string): az_dla_catalog_table_show_command_builder;
}
/** Manage Data Lake Analytics catalog table valued functions. */
export declare class az_dla_catalog_tvf {
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
    static list(databaseName: string): az_dla_catalog_tvf_list_command_builder;
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
    static show(databaseName: string, schemaName: string, tableValuedFunctionName: string): az_dla_catalog_tvf_show_command_builder;
}
/** Manage Data Lake Analytics catalog views. */
export declare class az_dla_catalog_view {
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
    static list(databaseName: string): az_dla_catalog_view_list_command_builder;
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
    static show(databaseName: string, schemaName: string, viewName: string): az_dla_catalog_view_show_command_builder;
}
/** Manage Data Lake Analytics catalogs. */
export declare class az_dla_catalog {
}
/** Manage Data Lake Analytics job pipelines. */
export declare class az_dla_job_pipeline {
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
    static list(): az_dla_job_pipeline_list_command_builder;
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
    static show(pipelineIdentity: string): az_dla_job_pipeline_show_command_builder;
}
/** Manage Data Lake Analytics job recurrences. */
export declare class az_dla_job_recurrence {
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
    static list(): az_dla_job_recurrence_list_command_builder;
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
    static show(recurrenceIdentity: string): az_dla_job_recurrence_show_command_builder;
}
/** Manage Data Lake Analytics jobs. */
export declare class az_dla_job {
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
    static cancel(jobIdentity: string): az_dla_job_cancel_command_builder;
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
    static list(): az_dla_job_list_command_builder;
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
    static show(jobIdentity: string): az_dla_job_show_command_builder;
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
    static submit(jobName: string, script: string): az_dla_job_submit_command_builder;
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
    static wait(jobId: string): az_dla_job_wait_command_builder;
}
/** Manage Data Lake Analytics accounts, jobs, and catalogs. */
export declare class az_dla {
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
declare class az_dla_account_blob_storage_add_command_builder extends CommandBuilder<az_dla_account_blob_storage_add_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accessKey: string, storageAccountName: string);
    /** The access key associated with this Azure Storage account that will be used to connect to it. */
    accessKey(value: string): az_dla_account_blob_storage_add_command_builder;
    /** Name of an existing storage account to link to. */
    storageAccountName(value: string): az_dla_account_blob_storage_add_command_builder;
    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_account_blob_storage_add_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_account_blob_storage_add_command_builder;
    /** If not specified, will attempt to discover the resource group for the specified Data Lake Analytics account. */
    resourceGroup(value: string): az_dla_account_blob_storage_add_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_account_blob_storage_add_command_builder;
    /** The optional suffix for the storage account. */
    suffix(value: string): az_dla_account_blob_storage_add_command_builder;
}
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
declare class az_dla_account_blob_storage_delete_command_builder extends CommandBuilder<az_dla_account_blob_storage_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, storageAccountName: string);
    /** Name of an existing storage account to link to. */
    storageAccountName(value: string): az_dla_account_blob_storage_delete_command_builder;
    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_account_blob_storage_delete_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_account_blob_storage_delete_command_builder;
    /** If not specified, will attempt to discover the resource group for the specified Data Lake Analytics account. */
    resourceGroup(value: string): az_dla_account_blob_storage_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_account_blob_storage_delete_command_builder;
}
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
declare class az_dla_account_blob_storage_list_command_builder extends CommandBuilder<az_dla_account_blob_storage_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_account_blob_storage_list_command_builder;
    /** The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. */
    count(value: string): az_dla_account_blob_storage_list_command_builder;
    /** The OData filter. Optional. */
    filter(value: string): az_dla_account_blob_storage_list_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_account_blob_storage_list_command_builder;
    /** OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional. */
    orderby(value: string): az_dla_account_blob_storage_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dla_account_blob_storage_list_command_builder;
    /** If not specified, will attempt to discover the resource group for the specified Data Lake Analytics account. */
    resourceGroup(value: string): az_dla_account_blob_storage_list_command_builder;
    /** OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional. */
    select(value: string): az_dla_account_blob_storage_list_command_builder;
    /** The number of items to skip over before returning elements. */
    skip(value: string): az_dla_account_blob_storage_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_account_blob_storage_list_command_builder;
    /** Maximum number of items to return. */
    top(value: string): az_dla_account_blob_storage_list_command_builder;
}
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
declare class az_dla_account_blob_storage_show_command_builder extends CommandBuilder<az_dla_account_blob_storage_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, storageAccountName: string);
    /** Name of an existing storage account to link to. */
    storageAccountName(value: string): az_dla_account_blob_storage_show_command_builder;
    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_account_blob_storage_show_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_account_blob_storage_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dla_account_blob_storage_show_command_builder;
    /** If not specified, will attempt to discover the resource group for the specified Data Lake Analytics account. */
    resourceGroup(value: string): az_dla_account_blob_storage_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_account_blob_storage_show_command_builder;
}
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
declare class az_dla_account_blob_storage_update_command_builder extends CommandBuilder<az_dla_account_blob_storage_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, accessKey: string, storageAccountName: string);
    /** The access key associated with this Azure Storage account that will be used to connect to it. */
    accessKey(value: string): az_dla_account_blob_storage_update_command_builder;
    /** Name of an existing storage account to link to. */
    storageAccountName(value: string): az_dla_account_blob_storage_update_command_builder;
    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_account_blob_storage_update_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_account_blob_storage_update_command_builder;
    /** If not specified, will attempt to discover the resource group for the specified Data Lake Analytics account. */
    resourceGroup(value: string): az_dla_account_blob_storage_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_account_blob_storage_update_command_builder;
    /** The optional suffix for the storage account. */
    suffix(value: string): az_dla_account_blob_storage_update_command_builder;
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
declare class az_dla_account_compute_policy_create_command_builder extends CommandBuilder<az_dla_account_compute_policy_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, account: string, computePolicyName: string, objectId: string, objectType: string);
    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_account_compute_policy_create_command_builder;
    /** The name of the compute policy to create. */
    computePolicyName(value: string): az_dla_account_compute_policy_create_command_builder;
    /** The Azure Active Directory object ID of the user, group, or service principal to apply the policy to. */
    objectId(value: string): az_dla_account_compute_policy_create_command_builder;
    /** The Azure Active Directory object type associated with the supplied object ID. */
    objectType(value: string): az_dla_account_compute_policy_create_command_builder;
    /** The maximum degree of parallelism allowed per job for this policy. At least one of `--min-priority-per-job` and `--max-dop-per-job` must be specified. */
    maxDopPerJob(value: string): az_dla_account_compute_policy_create_command_builder;
    /** The minimum priority allowed per job for this policy. At least one of `--min-priority-per-job` and `--max-dop-per-job` must be specified. */
    minPriorityPerJob(value: string): az_dla_account_compute_policy_create_command_builder;
    /** If not specified, will attempt to discover the resource group for the specified Data Lake Analytics account. */
    resourceGroup(value: string): az_dla_account_compute_policy_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_account_compute_policy_create_command_builder;
}
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
declare class az_dla_account_compute_policy_delete_command_builder extends CommandBuilder<az_dla_account_compute_policy_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, computePolicyName: string);
    /** The name of the compute policy to delete. */
    computePolicyName(value: string): az_dla_account_compute_policy_delete_command_builder;
    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_account_compute_policy_delete_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_account_compute_policy_delete_command_builder;
    /** If not specified, will attempt to discover the resource group for the specified Data Lake Analytics account. */
    resourceGroup(value: string): az_dla_account_compute_policy_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_account_compute_policy_delete_command_builder;
}
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
declare class az_dla_account_compute_policy_list_command_builder extends CommandBuilder<az_dla_account_compute_policy_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_account_compute_policy_list_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_account_compute_policy_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dla_account_compute_policy_list_command_builder;
    /** If not specified, will attempt to discover the resource group for the specified Data Lake Analytics account. */
    resourceGroup(value: string): az_dla_account_compute_policy_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_account_compute_policy_list_command_builder;
}
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
declare class az_dla_account_compute_policy_show_command_builder extends CommandBuilder<az_dla_account_compute_policy_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, computePolicyName: string);
    /** The name of the compute policy to retrieve. */
    computePolicyName(value: string): az_dla_account_compute_policy_show_command_builder;
    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_account_compute_policy_show_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_account_compute_policy_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dla_account_compute_policy_show_command_builder;
    /** If not specified, will attempt to discover the resource group for the specified Data Lake Analytics account. */
    resourceGroup(value: string): az_dla_account_compute_policy_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_account_compute_policy_show_command_builder;
}
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
declare class az_dla_account_compute_policy_update_command_builder extends CommandBuilder<az_dla_account_compute_policy_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, computePolicyName: string);
    /** The name of the compute policy to update. */
    computePolicyName(value: string): az_dla_account_compute_policy_update_command_builder;
    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_account_compute_policy_update_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_account_compute_policy_update_command_builder;
    /** The maximum degree of parallelism allowed per job for this policy. At least one of `--min-priority-per-job` and `--max-dop-per-job` must be specified. */
    maxDopPerJob(value: string): az_dla_account_compute_policy_update_command_builder;
    /** The minimum priority allowed per job for this policy. At least one of `--min-priority-per-job` and `--max-dop-per-job` must be specified. */
    minPriorityPerJob(value: string): az_dla_account_compute_policy_update_command_builder;
    /** If not specified, will attempt to discover the resource group for the specified Data Lake Analytics account. */
    resourceGroup(value: string): az_dla_account_compute_policy_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_account_compute_policy_update_command_builder;
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
declare class az_dla_account_data_lake_store_add_command_builder extends CommandBuilder<az_dla_account_data_lake_store_add_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, dataLakeStoreAccountName: string);
    /** The name of the Data Lake Store account to add. */
    dataLakeStoreAccountName(value: string): az_dla_account_data_lake_store_add_command_builder;
    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_account_data_lake_store_add_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_account_data_lake_store_add_command_builder;
    /** If not specified, will attempt to discover the resource group for the specified Data Lake Analytics account. */
    resourceGroup(value: string): az_dla_account_data_lake_store_add_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_account_data_lake_store_add_command_builder;
    /** The optional suffix for the Data Lake Store account. */
    suffix(value: string): az_dla_account_data_lake_store_add_command_builder;
}
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
declare class az_dla_account_data_lake_store_delete_command_builder extends CommandBuilder<az_dla_account_data_lake_store_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, dataLakeStoreAccountName: string);
    /** The name of the Data Lake Store account to remove. */
    dataLakeStoreAccountName(value: string): az_dla_account_data_lake_store_delete_command_builder;
    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_account_data_lake_store_delete_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_account_data_lake_store_delete_command_builder;
    /** If not specified, will attempt to discover the resource group for the specified Data Lake Analytics account. */
    resourceGroup(value: string): az_dla_account_data_lake_store_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_account_data_lake_store_delete_command_builder;
}
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
declare class az_dla_account_data_lake_store_list_command_builder extends CommandBuilder<az_dla_account_data_lake_store_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_account_data_lake_store_list_command_builder;
    /** The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. */
    count(value: string): az_dla_account_data_lake_store_list_command_builder;
    /** OData filter. Optional. */
    filter(value: string): az_dla_account_data_lake_store_list_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_account_data_lake_store_list_command_builder;
    /** OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional. */
    orderby(value: string): az_dla_account_data_lake_store_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dla_account_data_lake_store_list_command_builder;
    /** If not specified, will attempt to discover the resource group for the specified Data Lake Analytics account. */
    resourceGroup(value: string): az_dla_account_data_lake_store_list_command_builder;
    /** OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional. */
    select(value: string): az_dla_account_data_lake_store_list_command_builder;
    /** The number of items to skip over before returning elements. */
    skip(value: string): az_dla_account_data_lake_store_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_account_data_lake_store_list_command_builder;
    /** Maximum number of items to return. */
    top(value: string): az_dla_account_data_lake_store_list_command_builder;
}
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
declare class az_dla_account_data_lake_store_show_command_builder extends CommandBuilder<az_dla_account_data_lake_store_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, dataLakeStoreAccountName: string);
    /** The name of the Data Lake Store account to retrieve. */
    dataLakeStoreAccountName(value: string): az_dla_account_data_lake_store_show_command_builder;
    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_account_data_lake_store_show_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_account_data_lake_store_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dla_account_data_lake_store_show_command_builder;
    /** If not specified, will attempt to discover the resource group for the specified Data Lake Analytics account. */
    resourceGroup(value: string): az_dla_account_data_lake_store_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_account_data_lake_store_show_command_builder;
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
declare class az_dla_account_firewall_create_command_builder extends CommandBuilder<az_dla_account_firewall_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, account: string, endIpAddress: string, firewallRuleName: string, startIpAddress: string);
    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_account_firewall_create_command_builder;
    /** The end of the valid IP range for the firewall rule. */
    endIpAddress(value: string): az_dla_account_firewall_create_command_builder;
    /** The name of the firewall rule. */
    firewallRuleName(value: string): az_dla_account_firewall_create_command_builder;
    /** The start of the valid IP range for the firewall rule. */
    startIpAddress(value: string): az_dla_account_firewall_create_command_builder;
    /** If not specified, will attempt to discover the resource group for the specified Data Lake Analytics account. */
    resourceGroup(value: string): az_dla_account_firewall_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_account_firewall_create_command_builder;
}
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
declare class az_dla_account_firewall_delete_command_builder extends CommandBuilder<az_dla_account_firewall_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, firewallRuleName: string);
    /** The name of the firewall rule to delete. */
    firewallRuleName(value: string): az_dla_account_firewall_delete_command_builder;
    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_account_firewall_delete_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_account_firewall_delete_command_builder;
    /** If not specified, will attempt to discover the resource group for the specified Data Lake Analytics account. */
    resourceGroup(value: string): az_dla_account_firewall_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_account_firewall_delete_command_builder;
}
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
declare class az_dla_account_firewall_list_command_builder extends CommandBuilder<az_dla_account_firewall_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_account_firewall_list_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_account_firewall_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dla_account_firewall_list_command_builder;
    /** If not specified, will attempt to discover the resource group for the specified Data Lake Analytics account. */
    resourceGroup(value: string): az_dla_account_firewall_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_account_firewall_list_command_builder;
}
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
declare class az_dla_account_firewall_show_command_builder extends CommandBuilder<az_dla_account_firewall_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, firewallRuleName: string);
    /** The name of the firewall rule to retrieve. */
    firewallRuleName(value: string): az_dla_account_firewall_show_command_builder;
    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_account_firewall_show_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_account_firewall_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dla_account_firewall_show_command_builder;
    /** If not specified, will attempt to discover the resource group for the specified Data Lake Analytics account. */
    resourceGroup(value: string): az_dla_account_firewall_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_account_firewall_show_command_builder;
}
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
declare class az_dla_account_firewall_update_command_builder extends CommandBuilder<az_dla_account_firewall_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, firewallRuleName: string);
    /** The name of the firewall rule to update. */
    firewallRuleName(value: string): az_dla_account_firewall_update_command_builder;
    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_account_firewall_update_command_builder;
    /** The end IP address for the firewall rule. This can be either ipv4 or ipv6. Start and End should be in the same protocol. */
    endIpAddress(value: string): az_dla_account_firewall_update_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_account_firewall_update_command_builder;
    /** If not specified, will attempt to discover the resource group for the specified Data Lake Analytics account. */
    resourceGroup(value: string): az_dla_account_firewall_update_command_builder;
    /** The start IP address for the firewall rule. This can be either ipv4 or ipv6. Start and End should be in the same protocol. */
    startIpAddress(value: string): az_dla_account_firewall_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_account_firewall_update_command_builder;
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
declare class az_dla_account_create_command_builder extends CommandBuilder<az_dla_account_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, account: string, defaultDataLakeStore: string);
    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_account_create_command_builder;
    /** The default Data Lake Store account to associate with the created account. */
    defaultDataLakeStore(value: string): az_dla_account_create_command_builder;
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_dla_account_create_command_builder;
    /** The maximum degree of parallelism for this account. */
    maxDegreeOfParallelism(value: string): az_dla_account_create_command_builder;
    /** The maximum number of concurrent jobs for this account. */
    maxJobCount(value: string): az_dla_account_create_command_builder;
    /** The number of days to retain job metadata. */
    queryStoreRetention(value: string): az_dla_account_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_dla_account_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_account_create_command_builder;
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_dla_account_create_command_builder;
    /** The desired commitment tier for this account to use. */
    tier(value: 'Commitment_100000AUHours' | 'Commitment_10000AUHours' | 'Commitment_1000AUHours' | 'Commitment_100AUHours' | 'Commitment_500000AUHours' | 'Commitment_50000AUHours' | 'Commitment_5000AUHours' | 'Commitment_500AUHours' | 'Consumption'): az_dla_account_create_command_builder;
}
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
declare class az_dla_account_delete_command_builder extends CommandBuilder<az_dla_account_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_account_delete_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_account_delete_command_builder;
    /** If not specified, will attempt to discover the resource group for the specified Data Lake Analytics account. */
    resourceGroup(value: string): az_dla_account_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_account_delete_command_builder;
}
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
declare class az_dla_account_list_command_builder extends CommandBuilder<az_dla_account_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dla_account_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_dla_account_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_account_list_command_builder;
}
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
declare class az_dla_account_show_command_builder extends CommandBuilder<az_dla_account_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_account_show_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_account_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dla_account_show_command_builder;
    /** If not specified, will attempt to discover the resource group for the specified Data Lake Analytics account. */
    resourceGroup(value: string): az_dla_account_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_account_show_command_builder;
}
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
declare class az_dla_account_update_command_builder extends CommandBuilder<az_dla_account_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_account_update_command_builder;
    /** Allow or block IPs originating from Azure through the firewall. */
    allowAzureIps(value: 'Disabled' | 'Enabled'): az_dla_account_update_command_builder;
    /** Enable or disable existing firewall rules. */
    firewallState(value: 'Disabled' | 'Enabled'): az_dla_account_update_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_account_update_command_builder;
    /** The maximum degree of parallelism for this account. */
    maxDegreeOfParallelism(value: string): az_dla_account_update_command_builder;
    /** The maximum number of concurrent jobs for this account. */
    maxJobCount(value: string): az_dla_account_update_command_builder;
    /** The number of days to retain job metadata. */
    queryStoreRetention(value: string): az_dla_account_update_command_builder;
    /** If not specified, will attempt to discover the resource group for the specified Data Lake Analytics account. */
    resourceGroup(value: string): az_dla_account_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_account_update_command_builder;
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_dla_account_update_command_builder;
    /** The desired commitment tier for this account to use. */
    tier(value: 'Commitment_100000AUHours' | 'Commitment_10000AUHours' | 'Commitment_1000AUHours' | 'Commitment_100AUHours' | 'Commitment_500000AUHours' | 'Commitment_50000AUHours' | 'Commitment_5000AUHours' | 'Commitment_500AUHours' | 'Consumption'): az_dla_account_update_command_builder;
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
declare class az_dla_catalog_assembly_list_command_builder extends CommandBuilder<az_dla_catalog_assembly_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, databaseName: string);
    /** The name of the database containing the assembly. */
    databaseName(value: string): az_dla_catalog_assembly_list_command_builder;
    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_catalog_assembly_list_command_builder;
    /** The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. */
    count(value: string): az_dla_catalog_assembly_list_command_builder;
    /** OData filter. Optional. */
    filter(value: string): az_dla_catalog_assembly_list_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_catalog_assembly_list_command_builder;
    /** OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional. */
    orderby(value: string): az_dla_catalog_assembly_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dla_catalog_assembly_list_command_builder;
    /** OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional. */
    select(value: string): az_dla_catalog_assembly_list_command_builder;
    /** The number of items to skip over before returning elements. */
    skip(value: string): az_dla_catalog_assembly_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_catalog_assembly_list_command_builder;
    /** Maximum number of items to return. */
    top(value: string): az_dla_catalog_assembly_list_command_builder;
}
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
declare class az_dla_catalog_assembly_show_command_builder extends CommandBuilder<az_dla_catalog_assembly_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, assemblyName: string, databaseName: string);
    /** The name of the assembly. */
    assemblyName(value: string): az_dla_catalog_assembly_show_command_builder;
    /** The name of the database containing the assembly. */
    databaseName(value: string): az_dla_catalog_assembly_show_command_builder;
    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_catalog_assembly_show_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_catalog_assembly_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dla_catalog_assembly_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_catalog_assembly_show_command_builder;
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
declare class az_dla_catalog_credential_create_command_builder extends CommandBuilder<az_dla_catalog_credential_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, account: string, credentialName: string, databaseName: string, uri: string, userName: string);
    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_catalog_credential_create_command_builder;
    /** The name of the credential. */
    credentialName(value: string): az_dla_catalog_credential_create_command_builder;
    /** The name of the database in which to create the credential. */
    databaseName(value: string): az_dla_catalog_credential_create_command_builder;
    /** URI of the external data source. */
    uri(value: string): az_dla_catalog_credential_create_command_builder;
    /** The user name that will be used when authenticating with this credential. */
    userName(value: string): az_dla_catalog_credential_create_command_builder;
    /** Password for the credential user. Will prompt if not given. */
    password(value: string): az_dla_catalog_credential_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_catalog_credential_create_command_builder;
}
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
declare class az_dla_catalog_credential_delete_command_builder extends CommandBuilder<az_dla_catalog_credential_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, credentialName: string, databaseName: string);
    /** The name of the credential to delete. */
    credentialName(value: string): az_dla_catalog_credential_delete_command_builder;
    /** The name of the database containing the credential. */
    databaseName(value: string): az_dla_catalog_credential_delete_command_builder;
    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_catalog_credential_delete_command_builder;
    /** Indicates if the delete should be a cascading delete (which deletes all resources dependent on the credential as well as the credential) or not. If false will fail if there are any resources relying on the credential. */
    cascade(value: string): az_dla_catalog_credential_delete_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_catalog_credential_delete_command_builder;
    /** The current password for the credential and user with access to the data source. This is required if the requester is not the account owner. */
    password(value: string): az_dla_catalog_credential_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_catalog_credential_delete_command_builder;
}
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
declare class az_dla_catalog_credential_list_command_builder extends CommandBuilder<az_dla_catalog_credential_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, databaseName: string);
    /** The name of the database containing the schema. */
    databaseName(value: string): az_dla_catalog_credential_list_command_builder;
    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_catalog_credential_list_command_builder;
    /** The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. */
    count(value: string): az_dla_catalog_credential_list_command_builder;
    /** OData filter. Optional. */
    filter(value: string): az_dla_catalog_credential_list_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_catalog_credential_list_command_builder;
    /** OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional. */
    orderby(value: string): az_dla_catalog_credential_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dla_catalog_credential_list_command_builder;
    /** OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional. */
    select(value: string): az_dla_catalog_credential_list_command_builder;
    /** The number of items to skip over before returning elements. */
    skip(value: string): az_dla_catalog_credential_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_catalog_credential_list_command_builder;
    /** Maximum number of items to return. */
    top(value: string): az_dla_catalog_credential_list_command_builder;
}
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
declare class az_dla_catalog_credential_show_command_builder extends CommandBuilder<az_dla_catalog_credential_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, credentialName: string, databaseName: string);
    /** The name of the credential. */
    credentialName(value: string): az_dla_catalog_credential_show_command_builder;
    /** The name of the database containing the schema. */
    databaseName(value: string): az_dla_catalog_credential_show_command_builder;
    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_catalog_credential_show_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_catalog_credential_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dla_catalog_credential_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_catalog_credential_show_command_builder;
}
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
declare class az_dla_catalog_credential_update_command_builder extends CommandBuilder<az_dla_catalog_credential_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, credentialName: string, databaseName: string, uri: string, userName: string);
    /** The name of the credential to update. */
    credentialName(value: string): az_dla_catalog_credential_update_command_builder;
    /** The name of the database in which the credential exists. */
    databaseName(value: string): az_dla_catalog_credential_update_command_builder;
    /** URI of the external data source. */
    uri(value: string): az_dla_catalog_credential_update_command_builder;
    /** The user name associated with the credential that will have its password updated. */
    userName(value: string): az_dla_catalog_credential_update_command_builder;
    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_catalog_credential_update_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_catalog_credential_update_command_builder;
    /** New password for the credential user. Will prompt if not given. */
    newPassword(value: string): az_dla_catalog_credential_update_command_builder;
    /** Current password for the credential user. Will prompt if not given. */
    password(value: string): az_dla_catalog_credential_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_catalog_credential_update_command_builder;
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
declare class az_dla_catalog_database_list_command_builder extends CommandBuilder<az_dla_catalog_database_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_catalog_database_list_command_builder;
    /** The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. */
    count(value: string): az_dla_catalog_database_list_command_builder;
    /** OData filter. Optional. */
    filter(value: string): az_dla_catalog_database_list_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_catalog_database_list_command_builder;
    /** OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional. */
    orderby(value: string): az_dla_catalog_database_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dla_catalog_database_list_command_builder;
    /** OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional. */
    select(value: string): az_dla_catalog_database_list_command_builder;
    /** The number of items to skip over before returning elements. */
    skip(value: string): az_dla_catalog_database_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_catalog_database_list_command_builder;
    /** Maximum number of items to return. */
    top(value: string): az_dla_catalog_database_list_command_builder;
}
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
declare class az_dla_catalog_database_show_command_builder extends CommandBuilder<az_dla_catalog_database_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, databaseName: string);
    /** The name of the database. */
    databaseName(value: string): az_dla_catalog_database_show_command_builder;
    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_catalog_database_show_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_catalog_database_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dla_catalog_database_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_catalog_database_show_command_builder;
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
declare class az_dla_catalog_external_data_source_list_command_builder extends CommandBuilder<az_dla_catalog_external_data_source_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, databaseName: string);
    /** The name of the database containing the external data sources. */
    databaseName(value: string): az_dla_catalog_external_data_source_list_command_builder;
    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_catalog_external_data_source_list_command_builder;
    /** The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. */
    count(value: string): az_dla_catalog_external_data_source_list_command_builder;
    /** OData filter. Optional. */
    filter(value: string): az_dla_catalog_external_data_source_list_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_catalog_external_data_source_list_command_builder;
    /** OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional. */
    orderby(value: string): az_dla_catalog_external_data_source_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dla_catalog_external_data_source_list_command_builder;
    /** OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional. */
    select(value: string): az_dla_catalog_external_data_source_list_command_builder;
    /** The number of items to skip over before returning elements. */
    skip(value: string): az_dla_catalog_external_data_source_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_catalog_external_data_source_list_command_builder;
    /** Maximum number of items to return. */
    top(value: string): az_dla_catalog_external_data_source_list_command_builder;
}
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
declare class az_dla_catalog_external_data_source_show_command_builder extends CommandBuilder<az_dla_catalog_external_data_source_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, databaseName: string, externalDataSourceName: string);
    /** The name of the database containing the external data source. */
    databaseName(value: string): az_dla_catalog_external_data_source_show_command_builder;
    /** The name of the external data source. */
    externalDataSourceName(value: string): az_dla_catalog_external_data_source_show_command_builder;
    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_catalog_external_data_source_show_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_catalog_external_data_source_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dla_catalog_external_data_source_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_catalog_external_data_source_show_command_builder;
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
declare class az_dla_catalog_package_list_command_builder extends CommandBuilder<az_dla_catalog_package_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, databaseName: string, schemaName: string);
    /** The name of the database containing the packages. */
    databaseName(value: string): az_dla_catalog_package_list_command_builder;
    /** The name of the schema containing the packages. */
    schemaName(value: string): az_dla_catalog_package_list_command_builder;
    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_catalog_package_list_command_builder;
    /** The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. */
    count(value: string): az_dla_catalog_package_list_command_builder;
    /** OData filter. Optional. */
    filter(value: string): az_dla_catalog_package_list_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_catalog_package_list_command_builder;
    /** OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional. */
    orderby(value: string): az_dla_catalog_package_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dla_catalog_package_list_command_builder;
    /** OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional. */
    select(value: string): az_dla_catalog_package_list_command_builder;
    /** The number of items to skip over before returning elements. */
    skip(value: string): az_dla_catalog_package_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_catalog_package_list_command_builder;
    /** Maximum number of items to return. */
    top(value: string): az_dla_catalog_package_list_command_builder;
}
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
declare class az_dla_catalog_package_show_command_builder extends CommandBuilder<az_dla_catalog_package_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, databaseName: string, packageName: string, schemaName: string);
    /** The name of the database containing the package. */
    databaseName(value: string): az_dla_catalog_package_show_command_builder;
    /** The name of the package. */
    packageName(value: string): az_dla_catalog_package_show_command_builder;
    /** The name of the schema containing the package. */
    schemaName(value: string): az_dla_catalog_package_show_command_builder;
    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_catalog_package_show_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_catalog_package_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dla_catalog_package_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_catalog_package_show_command_builder;
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
declare class az_dla_catalog_procedure_list_command_builder extends CommandBuilder<az_dla_catalog_procedure_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, databaseName: string, schemaName: string);
    /** The name of the database containing the procedures. */
    databaseName(value: string): az_dla_catalog_procedure_list_command_builder;
    /** The name of the schema containing the procedures. */
    schemaName(value: string): az_dla_catalog_procedure_list_command_builder;
    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_catalog_procedure_list_command_builder;
    /** The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. */
    count(value: string): az_dla_catalog_procedure_list_command_builder;
    /** OData filter. Optional. */
    filter(value: string): az_dla_catalog_procedure_list_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_catalog_procedure_list_command_builder;
    /** OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional. */
    orderby(value: string): az_dla_catalog_procedure_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dla_catalog_procedure_list_command_builder;
    /** OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional. */
    select(value: string): az_dla_catalog_procedure_list_command_builder;
    /** The number of items to skip over before returning elements. */
    skip(value: string): az_dla_catalog_procedure_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_catalog_procedure_list_command_builder;
    /** Maximum number of items to return. */
    top(value: string): az_dla_catalog_procedure_list_command_builder;
}
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
declare class az_dla_catalog_procedure_show_command_builder extends CommandBuilder<az_dla_catalog_procedure_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, databaseName: string, procedureName: string, schemaName: string);
    /** The name of the database containing the procedure. */
    databaseName(value: string): az_dla_catalog_procedure_show_command_builder;
    /** The name of the procedure. */
    procedureName(value: string): az_dla_catalog_procedure_show_command_builder;
    /** The name of the schema containing the procedure. */
    schemaName(value: string): az_dla_catalog_procedure_show_command_builder;
    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_catalog_procedure_show_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_catalog_procedure_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dla_catalog_procedure_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_catalog_procedure_show_command_builder;
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
declare class az_dla_catalog_schema_list_command_builder extends CommandBuilder<az_dla_catalog_schema_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, databaseName: string);
    /** The name of the database containing the schema. */
    databaseName(value: string): az_dla_catalog_schema_list_command_builder;
    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_catalog_schema_list_command_builder;
    /** The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. */
    count(value: string): az_dla_catalog_schema_list_command_builder;
    /** OData filter. Optional. */
    filter(value: string): az_dla_catalog_schema_list_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_catalog_schema_list_command_builder;
    /** OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional. */
    orderby(value: string): az_dla_catalog_schema_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dla_catalog_schema_list_command_builder;
    /** OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional. */
    select(value: string): az_dla_catalog_schema_list_command_builder;
    /** The number of items to skip over before returning elements. */
    skip(value: string): az_dla_catalog_schema_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_catalog_schema_list_command_builder;
    /** Maximum number of items to return. */
    top(value: string): az_dla_catalog_schema_list_command_builder;
}
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
declare class az_dla_catalog_schema_show_command_builder extends CommandBuilder<az_dla_catalog_schema_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, databaseName: string, schemaName: string);
    /** The name of the database containing the schema. */
    databaseName(value: string): az_dla_catalog_schema_show_command_builder;
    /** The name of the schema. */
    schemaName(value: string): az_dla_catalog_schema_show_command_builder;
    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_catalog_schema_show_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_catalog_schema_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dla_catalog_schema_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_catalog_schema_show_command_builder;
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
declare class az_dla_catalog_table_partition_list_command_builder extends CommandBuilder<az_dla_catalog_table_partition_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, databaseName: string, schemaName: string, tableName: string);
    /** The name of the database containing the partitions. */
    databaseName(value: string): az_dla_catalog_table_partition_list_command_builder;
    /** The name of the schema containing the partitions. */
    schemaName(value: string): az_dla_catalog_table_partition_list_command_builder;
    /** The name of the table containing the partitions. */
    tableName(value: string): az_dla_catalog_table_partition_list_command_builder;
    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_catalog_table_partition_list_command_builder;
    /** The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. */
    count(value: string): az_dla_catalog_table_partition_list_command_builder;
    /** OData filter. Optional. */
    filter(value: string): az_dla_catalog_table_partition_list_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_catalog_table_partition_list_command_builder;
    /** OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional. */
    orderby(value: string): az_dla_catalog_table_partition_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dla_catalog_table_partition_list_command_builder;
    /** OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional. */
    select(value: string): az_dla_catalog_table_partition_list_command_builder;
    /** The number of items to skip over before returning elements. */
    skip(value: string): az_dla_catalog_table_partition_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_catalog_table_partition_list_command_builder;
    /** Maximum number of items to return. */
    top(value: string): az_dla_catalog_table_partition_list_command_builder;
}
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
declare class az_dla_catalog_table_partition_show_command_builder extends CommandBuilder<az_dla_catalog_table_partition_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, databaseName: string, partitionName: string, schemaName: string, tableName: string);
    /** The name of the database containing the partition. */
    databaseName(value: string): az_dla_catalog_table_partition_show_command_builder;
    /** The name of the table partition. */
    partitionName(value: string): az_dla_catalog_table_partition_show_command_builder;
    /** The name of the schema containing the partition. */
    schemaName(value: string): az_dla_catalog_table_partition_show_command_builder;
    /** The name of the table containing the partition. */
    tableName(value: string): az_dla_catalog_table_partition_show_command_builder;
    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_catalog_table_partition_show_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_catalog_table_partition_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dla_catalog_table_partition_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_catalog_table_partition_show_command_builder;
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
declare class az_dla_catalog_table_stats_list_command_builder extends CommandBuilder<az_dla_catalog_table_stats_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, databaseName: string);
    /** The name of the database. */
    databaseName(value: string): az_dla_catalog_table_stats_list_command_builder;
    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_catalog_table_stats_list_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_catalog_table_stats_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dla_catalog_table_stats_list_command_builder;
    /** The schema associated with the tables to list. */
    schemaName(value: string): az_dla_catalog_table_stats_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_catalog_table_stats_list_command_builder;
    /** The table to list statistics for. `--schema-name` must also be specified. */
    tableName(value: string): az_dla_catalog_table_stats_list_command_builder;
}
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
declare class az_dla_catalog_table_stats_show_command_builder extends CommandBuilder<az_dla_catalog_table_stats_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, databaseName: string, schemaName: string, statisticsName: string, tableName: string);
    /** The name of the database containing the statistics. */
    databaseName(value: string): az_dla_catalog_table_stats_show_command_builder;
    /** The name of the schema containing the statistics. */
    schemaName(value: string): az_dla_catalog_table_stats_show_command_builder;
    /** The name of the table statistics. */
    statisticsName(value: string): az_dla_catalog_table_stats_show_command_builder;
    /** The name of the table containing the statistics. */
    tableName(value: string): az_dla_catalog_table_stats_show_command_builder;
    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_catalog_table_stats_show_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_catalog_table_stats_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dla_catalog_table_stats_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_catalog_table_stats_show_command_builder;
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
declare class az_dla_catalog_table_type_list_command_builder extends CommandBuilder<az_dla_catalog_table_type_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, databaseName: string, schemaName: string);
    /** The name of the database containing the table types. */
    databaseName(value: string): az_dla_catalog_table_type_list_command_builder;
    /** The name of the schema containing the table types. */
    schemaName(value: string): az_dla_catalog_table_type_list_command_builder;
    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_catalog_table_type_list_command_builder;
    /** The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. */
    count(value: string): az_dla_catalog_table_type_list_command_builder;
    /** OData filter. Optional. */
    filter(value: string): az_dla_catalog_table_type_list_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_catalog_table_type_list_command_builder;
    /** OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional. */
    orderby(value: string): az_dla_catalog_table_type_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dla_catalog_table_type_list_command_builder;
    /** OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional. */
    select(value: string): az_dla_catalog_table_type_list_command_builder;
    /** The number of items to skip over before returning elements. */
    skip(value: string): az_dla_catalog_table_type_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_catalog_table_type_list_command_builder;
    /** Maximum number of items to return. */
    top(value: string): az_dla_catalog_table_type_list_command_builder;
}
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
declare class az_dla_catalog_table_type_show_command_builder extends CommandBuilder<az_dla_catalog_table_type_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, databaseName: string, schemaName: string, tableTypeName: string);
    /** The name of the database containing the table type. */
    databaseName(value: string): az_dla_catalog_table_type_show_command_builder;
    /** The name of the schema containing the table type. */
    schemaName(value: string): az_dla_catalog_table_type_show_command_builder;
    /** The name of the table type to retrieve. */
    tableTypeName(value: string): az_dla_catalog_table_type_show_command_builder;
    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_catalog_table_type_show_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_catalog_table_type_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dla_catalog_table_type_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_catalog_table_type_show_command_builder;
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
declare class az_dla_catalog_table_list_command_builder extends CommandBuilder<az_dla_catalog_table_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, databaseName: string);
    /** The name of the database. */
    databaseName(value: string): az_dla_catalog_table_list_command_builder;
    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_catalog_table_list_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_catalog_table_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dla_catalog_table_list_command_builder;
    /** The schema assocated with the tables to list. */
    schemaName(value: string): az_dla_catalog_table_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_catalog_table_list_command_builder;
}
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
declare class az_dla_catalog_table_show_command_builder extends CommandBuilder<az_dla_catalog_table_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, databaseName: string, schemaName: string, tableName: string);
    /** The name of the database containing the table. */
    databaseName(value: string): az_dla_catalog_table_show_command_builder;
    /** The name of the schema containing the table. */
    schemaName(value: string): az_dla_catalog_table_show_command_builder;
    /** The name of the table. */
    tableName(value: string): az_dla_catalog_table_show_command_builder;
    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_catalog_table_show_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_catalog_table_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dla_catalog_table_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_catalog_table_show_command_builder;
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
declare class az_dla_catalog_tvf_list_command_builder extends CommandBuilder<az_dla_catalog_tvf_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, databaseName: string);
    /** The name of the database. */
    databaseName(value: string): az_dla_catalog_tvf_list_command_builder;
    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_catalog_tvf_list_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_catalog_tvf_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dla_catalog_tvf_list_command_builder;
    /** The name of the schema assocated with table valued functions to list. */
    schemaName(value: string): az_dla_catalog_tvf_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_catalog_tvf_list_command_builder;
}
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
declare class az_dla_catalog_tvf_show_command_builder extends CommandBuilder<az_dla_catalog_tvf_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, databaseName: string, schemaName: string, tableValuedFunctionName: string);
    /** The name of the database containing the table valued function. */
    databaseName(value: string): az_dla_catalog_tvf_show_command_builder;
    /** The name of the schema containing the table valued function. */
    schemaName(value: string): az_dla_catalog_tvf_show_command_builder;
    /** The name of the tableValuedFunction. */
    tableValuedFunctionName(value: string): az_dla_catalog_tvf_show_command_builder;
    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_catalog_tvf_show_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_catalog_tvf_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dla_catalog_tvf_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_catalog_tvf_show_command_builder;
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
declare class az_dla_catalog_view_list_command_builder extends CommandBuilder<az_dla_catalog_view_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, databaseName: string);
    /** The name of the database. */
    databaseName(value: string): az_dla_catalog_view_list_command_builder;
    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_catalog_view_list_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_catalog_view_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dla_catalog_view_list_command_builder;
    /** The name of the schema associated with the views to list. */
    schemaName(value: string): az_dla_catalog_view_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_catalog_view_list_command_builder;
}
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
declare class az_dla_catalog_view_show_command_builder extends CommandBuilder<az_dla_catalog_view_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, databaseName: string, schemaName: string, viewName: string);
    /** The name of the database containing the view. */
    databaseName(value: string): az_dla_catalog_view_show_command_builder;
    /** The name of the schema containing the view. */
    schemaName(value: string): az_dla_catalog_view_show_command_builder;
    /** The name of the view. */
    viewName(value: string): az_dla_catalog_view_show_command_builder;
    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_catalog_view_show_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_catalog_view_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dla_catalog_view_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_catalog_view_show_command_builder;
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
declare class az_dla_job_pipeline_list_command_builder extends CommandBuilder<az_dla_job_pipeline_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_job_pipeline_list_command_builder;
    /** The end date for when to get the list of pipelines. The startDateTime and endDateTime can be no more than 30 days apart. */
    endDateTime(value: string): az_dla_job_pipeline_list_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_job_pipeline_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dla_job_pipeline_list_command_builder;
    /** The start date for when to get the list of pipelines. The startDateTime and endDateTime can be no more than 30 days apart. */
    startDateTime(value: string): az_dla_job_pipeline_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_job_pipeline_list_command_builder;
}
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
declare class az_dla_job_pipeline_show_command_builder extends CommandBuilder<az_dla_job_pipeline_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, pipelineIdentity: string);
    /** Pipeline ID. */
    pipelineIdentity(value: string): az_dla_job_pipeline_show_command_builder;
    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_job_pipeline_show_command_builder;
    /** The end date for when to get the pipeline and aggregate its data. The startDateTime and endDateTime can be no more than 30 days apart. */
    endDateTime(value: string): az_dla_job_pipeline_show_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_job_pipeline_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dla_job_pipeline_show_command_builder;
    /** The start date for when to get the pipeline and aggregate its data. The startDateTime and endDateTime can be no more than 30 days apart. */
    startDateTime(value: string): az_dla_job_pipeline_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_job_pipeline_show_command_builder;
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
declare class az_dla_job_recurrence_list_command_builder extends CommandBuilder<az_dla_job_recurrence_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_job_recurrence_list_command_builder;
    /** The end date for when to get the list of recurrences. The startDateTime and endDateTime can be no more than 30 days apart. */
    endDateTime(value: string): az_dla_job_recurrence_list_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_job_recurrence_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dla_job_recurrence_list_command_builder;
    /** The start date for when to get the list of recurrences. The startDateTime and endDateTime can be no more than 30 days apart. */
    startDateTime(value: string): az_dla_job_recurrence_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_job_recurrence_list_command_builder;
}
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
declare class az_dla_job_recurrence_show_command_builder extends CommandBuilder<az_dla_job_recurrence_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, recurrenceIdentity: string);
    /** Recurrence ID. */
    recurrenceIdentity(value: string): az_dla_job_recurrence_show_command_builder;
    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_job_recurrence_show_command_builder;
    /** The end date for when to get recurrence and aggregate its data. The startDateTime and endDateTime can be no more than 30 days apart. */
    endDateTime(value: string): az_dla_job_recurrence_show_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_job_recurrence_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dla_job_recurrence_show_command_builder;
    /** The start date for when to get the recurrence and aggregate its data. The startDateTime and endDateTime can be no more than 30 days apart. */
    startDateTime(value: string): az_dla_job_recurrence_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_job_recurrence_show_command_builder;
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
declare class az_dla_job_cancel_command_builder extends CommandBuilder<az_dla_job_cancel_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, jobIdentity: string);
    /** JobInfo ID to cancel. */
    jobIdentity(value: string): az_dla_job_cancel_command_builder;
    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_job_cancel_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_job_cancel_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_job_cancel_command_builder;
}
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
declare class az_dla_job_list_command_builder extends CommandBuilder<az_dla_job_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_job_list_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_job_list_command_builder;
    /** A filter which returns jobs only by the specified friendly name. */
    name(value: string): az_dla_job_list_command_builder;
    /** A filter which returns jobs only containing the specified pipeline_id. */
    pipelineId(value: string): az_dla_job_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dla_job_list_command_builder;
    /** A filter which returns jobs only containing the specified recurrence_id. */
    recurrenceId(value: string): az_dla_job_list_command_builder;
    /** A filter which returns jobs with only the specified result(s). */
    result(value: 'Cancelled' | 'Failed' | 'None' | 'Succeeded'): az_dla_job_list_command_builder;
    /** A filter which returns jobs with only the specified state(s). */
    state(value: 'Accepted' | 'Compiling' | 'Ended' | 'New' | 'Paused' | 'Queued' | 'Running' | 'Scheduling' | 'Starting' | 'WaitingForCapacity'): az_dla_job_list_command_builder;
    /** A filter which returns jobs only submitted after the specified time, in ISO-8601 format. */
    submittedAfter(value: string): az_dla_job_list_command_builder;
    /** A filter which returns jobs only submitted before the specified time, in ISO-8601 format. */
    submittedBefore(value: string): az_dla_job_list_command_builder;
    /** A filter which returns jobs only by the specified submitter. */
    submitter(value: string): az_dla_job_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_job_list_command_builder;
    /** Maximum number of items to return. */
    top(value: string): az_dla_job_list_command_builder;
}
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
declare class az_dla_job_show_command_builder extends CommandBuilder<az_dla_job_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, jobIdentity: string);
    /** JobInfo ID. */
    jobIdentity(value: string): az_dla_job_show_command_builder;
    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_job_show_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_job_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dla_job_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_job_show_command_builder;
}
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
declare class az_dla_job_submit_command_builder extends CommandBuilder<az_dla_job_submit_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, jobName: string, script: string);
    /** Name for the submitted job. */
    jobName(value: string): az_dla_job_submit_command_builder;
    /** Script to submit. This may be '@{file}' to load from a file. */
    script(value: string): az_dla_job_submit_command_builder;
    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_job_submit_command_builder;
    /** Indicates the type of compilation to be done on this job. Valid values are: 'Semantic' (Only performs semantic checks and necessary sanity checks), 'Full' (full compilation) and 'SingleBox' (Full compilation performed locally). */
    compileMode(value: 'Full' | 'Semantic' | 'SingleBox'): az_dla_job_submit_command_builder;
    /** Indicates that the submission should only build the job and not execute if set to true. */
    compileOnly(value: string): az_dla_job_submit_command_builder;
    /** The degree of parallelism for the job. */
    degreeOfParallelism(value: string): az_dla_job_submit_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_job_submit_command_builder;
    /** Job relationship pipeline GUID. */
    pipelineId(value: string): az_dla_job_submit_command_builder;
    /** Friendly name of the job relationship pipeline. */
    pipelineName(value: string): az_dla_job_submit_command_builder;
    /** Unique pipeline URI which links to the originating service for this pipeline. */
    pipelineUri(value: string): az_dla_job_submit_command_builder;
    /** The priority of the job. */
    priority(value: string): az_dla_job_submit_command_builder;
    /** Recurrence GUID, unique per activity/script, regardless of iteration. Links different occurrences of the same job together. */
    recurrenceId(value: string): az_dla_job_submit_command_builder;
    /** Friendly recurrence nae for the correlation between jobs. */
    recurrenceName(value: string): az_dla_job_submit_command_builder;
    /** GUID of the iteration of this pipeline. */
    runId(value: string): az_dla_job_submit_command_builder;
    /** The runtime version to use. */
    runtimeVersion(value: string): az_dla_job_submit_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_job_submit_command_builder;
}
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
declare class az_dla_job_wait_command_builder extends CommandBuilder<az_dla_job_wait_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, jobId: string);
    /** Job ID to poll for completion. */
    jobId(value: string): az_dla_job_wait_command_builder;
    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_job_wait_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_job_wait_command_builder;
    /** The maximum amount of time to wait before erroring out. Default value is to never timeout. Any value <= 0 means never timeout. */
    maxWaitTimeSec(value: string): az_dla_job_wait_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_job_wait_command_builder;
    /** The polling interval between checks for the job status, in seconds. */
    waitIntervalSec(value: string): az_dla_job_wait_command_builder;
}
export {};
