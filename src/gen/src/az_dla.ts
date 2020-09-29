import { CommandBuilder } from '../base';
import { az_dla_account_blob_storage_add_command_result } from './models/az_dla_account_blob_storage_add_command_result'
import { az_dla_account_blob_storage_delete_command_result } from './models/az_dla_account_blob_storage_delete_command_result'
import { az_dla_account_blob_storage_list_command_result } from './models/az_dla_account_blob_storage_list_command_result'
import { az_dla_account_blob_storage_show_command_result } from './models/az_dla_account_blob_storage_show_command_result'
import { az_dla_account_blob_storage_update_command_result } from './models/az_dla_account_blob_storage_update_command_result'
import { az_dla_account_compute_policy_create_command_result } from './models/az_dla_account_compute_policy_create_command_result'
import { az_dla_account_compute_policy_delete_command_result } from './models/az_dla_account_compute_policy_delete_command_result'
import { az_dla_account_compute_policy_list_command_result } from './models/az_dla_account_compute_policy_list_command_result'
import { az_dla_account_compute_policy_show_command_result } from './models/az_dla_account_compute_policy_show_command_result'
import { az_dla_account_compute_policy_update_command_result } from './models/az_dla_account_compute_policy_update_command_result'
import { az_dla_account_data_lake_store_add_command_result } from './models/az_dla_account_data_lake_store_add_command_result'
import { az_dla_account_data_lake_store_delete_command_result } from './models/az_dla_account_data_lake_store_delete_command_result'
import { az_dla_account_data_lake_store_list_command_result } from './models/az_dla_account_data_lake_store_list_command_result'
import { az_dla_account_data_lake_store_show_command_result } from './models/az_dla_account_data_lake_store_show_command_result'
import { az_dla_account_firewall_create_command_result } from './models/az_dla_account_firewall_create_command_result'
import { az_dla_account_firewall_delete_command_result } from './models/az_dla_account_firewall_delete_command_result'
import { az_dla_account_firewall_list_command_result } from './models/az_dla_account_firewall_list_command_result'
import { az_dla_account_firewall_show_command_result } from './models/az_dla_account_firewall_show_command_result'
import { az_dla_account_firewall_update_command_result } from './models/az_dla_account_firewall_update_command_result'
import { az_dla_account_create_command_result } from './models/az_dla_account_create_command_result'
import { az_dla_account_delete_command_result } from './models/az_dla_account_delete_command_result'
import { az_dla_account_list_command_result } from './models/az_dla_account_list_command_result'
import { az_dla_account_show_command_result } from './models/az_dla_account_show_command_result'
import { az_dla_account_update_command_result } from './models/az_dla_account_update_command_result'
import { az_dla_catalog_assembly_list_command_result } from './models/az_dla_catalog_assembly_list_command_result'
import { az_dla_catalog_assembly_show_command_result } from './models/az_dla_catalog_assembly_show_command_result'
import { az_dla_catalog_credential_create_command_result } from './models/az_dla_catalog_credential_create_command_result'
import { az_dla_catalog_credential_delete_command_result } from './models/az_dla_catalog_credential_delete_command_result'
import { az_dla_catalog_credential_list_command_result } from './models/az_dla_catalog_credential_list_command_result'
import { az_dla_catalog_credential_show_command_result } from './models/az_dla_catalog_credential_show_command_result'
import { az_dla_catalog_credential_update_command_result } from './models/az_dla_catalog_credential_update_command_result'
import { az_dla_catalog_database_list_command_result } from './models/az_dla_catalog_database_list_command_result'
import { az_dla_catalog_database_show_command_result } from './models/az_dla_catalog_database_show_command_result'
import { az_dla_catalog_external_data_source_list_command_result } from './models/az_dla_catalog_external_data_source_list_command_result'
import { az_dla_catalog_external_data_source_show_command_result } from './models/az_dla_catalog_external_data_source_show_command_result'
import { az_dla_catalog_package_list_command_result } from './models/az_dla_catalog_package_list_command_result'
import { az_dla_catalog_package_show_command_result } from './models/az_dla_catalog_package_show_command_result'
import { az_dla_catalog_procedure_list_command_result } from './models/az_dla_catalog_procedure_list_command_result'
import { az_dla_catalog_procedure_show_command_result } from './models/az_dla_catalog_procedure_show_command_result'
import { az_dla_catalog_schema_list_command_result } from './models/az_dla_catalog_schema_list_command_result'
import { az_dla_catalog_schema_show_command_result } from './models/az_dla_catalog_schema_show_command_result'
import { az_dla_catalog_table_partition_list_command_result } from './models/az_dla_catalog_table_partition_list_command_result'
import { az_dla_catalog_table_partition_show_command_result } from './models/az_dla_catalog_table_partition_show_command_result'
import { az_dla_catalog_table_stats_list_command_result } from './models/az_dla_catalog_table_stats_list_command_result'
import { az_dla_catalog_table_stats_show_command_result } from './models/az_dla_catalog_table_stats_show_command_result'
import { az_dla_catalog_table_type_list_command_result } from './models/az_dla_catalog_table_type_list_command_result'
import { az_dla_catalog_table_type_show_command_result } from './models/az_dla_catalog_table_type_show_command_result'
import { az_dla_catalog_table_list_command_result } from './models/az_dla_catalog_table_list_command_result'
import { az_dla_catalog_table_show_command_result } from './models/az_dla_catalog_table_show_command_result'
import { az_dla_catalog_tvf_list_command_result } from './models/az_dla_catalog_tvf_list_command_result'
import { az_dla_catalog_tvf_show_command_result } from './models/az_dla_catalog_tvf_show_command_result'
import { az_dla_catalog_view_list_command_result } from './models/az_dla_catalog_view_list_command_result'
import { az_dla_catalog_view_show_command_result } from './models/az_dla_catalog_view_show_command_result'
import { az_dla_job_pipeline_list_command_result } from './models/az_dla_job_pipeline_list_command_result'
import { az_dla_job_pipeline_show_command_result } from './models/az_dla_job_pipeline_show_command_result'
import { az_dla_job_recurrence_list_command_result } from './models/az_dla_job_recurrence_list_command_result'
import { az_dla_job_recurrence_show_command_result } from './models/az_dla_job_recurrence_show_command_result'
import { az_dla_job_cancel_command_result } from './models/az_dla_job_cancel_command_result'
import { az_dla_job_list_command_result } from './models/az_dla_job_list_command_result'
import { az_dla_job_show_command_result } from './models/az_dla_job_show_command_result'
import { az_dla_job_submit_command_result } from './models/az_dla_job_submit_command_result'
import { az_dla_job_wait_command_result } from './models/az_dla_job_wait_command_result'

/** Manage links between Data Lake Analytics accounts and Azure Storage. */
export class az_dla_account_blob_storage {
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
    static add(accessKey: string, storageAccountName: string): az_dla_account_blob_storage_add_command_builder {
        return new az_dla_account_blob_storage_add_command_builder("az dla account blob-storage add", accessKey, storageAccountName);
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
    static delete(storageAccountName: string): az_dla_account_blob_storage_delete_command_builder {
        return new az_dla_account_blob_storage_delete_command_builder("az dla account blob-storage delete", storageAccountName);
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
    static list(): az_dla_account_blob_storage_list_command_builder {
        return new az_dla_account_blob_storage_list_command_builder("az dla account blob-storage list");
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
    static show(storageAccountName: string): az_dla_account_blob_storage_show_command_builder {
        return new az_dla_account_blob_storage_show_command_builder("az dla account blob-storage show", storageAccountName);
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
    static update(accessKey: string, storageAccountName: string): az_dla_account_blob_storage_update_command_builder {
        return new az_dla_account_blob_storage_update_command_builder("az dla account blob-storage update", accessKey, storageAccountName);
    }
}

/** Manage Data Lake Analytics account compute policies. */
export class az_dla_account_compute_policy {
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
    static create(account: string, computePolicyName: string, objectId: string, objectType: string): az_dla_account_compute_policy_create_command_builder {
        return new az_dla_account_compute_policy_create_command_builder("az dla account compute-policy create", account, computePolicyName, objectId, objectType);
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
    static delete(computePolicyName: string): az_dla_account_compute_policy_delete_command_builder {
        return new az_dla_account_compute_policy_delete_command_builder("az dla account compute-policy delete", computePolicyName);
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
    static list(): az_dla_account_compute_policy_list_command_builder {
        return new az_dla_account_compute_policy_list_command_builder("az dla account compute-policy list");
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
    static show(computePolicyName: string): az_dla_account_compute_policy_show_command_builder {
        return new az_dla_account_compute_policy_show_command_builder("az dla account compute-policy show", computePolicyName);
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
    static update(computePolicyName: string): az_dla_account_compute_policy_update_command_builder {
        return new az_dla_account_compute_policy_update_command_builder("az dla account compute-policy update", computePolicyName);
    }
}

/** Manage links between Data Lake Analytics and Data Lake Store accounts. */
export class az_dla_account_data_lake_store {
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
    static add(dataLakeStoreAccountName: string): az_dla_account_data_lake_store_add_command_builder {
        return new az_dla_account_data_lake_store_add_command_builder("az dla account data-lake-store add", dataLakeStoreAccountName);
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
    static delete(dataLakeStoreAccountName: string): az_dla_account_data_lake_store_delete_command_builder {
        return new az_dla_account_data_lake_store_delete_command_builder("az dla account data-lake-store delete", dataLakeStoreAccountName);
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
    static list(): az_dla_account_data_lake_store_list_command_builder {
        return new az_dla_account_data_lake_store_list_command_builder("az dla account data-lake-store list");
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
    static show(dataLakeStoreAccountName: string): az_dla_account_data_lake_store_show_command_builder {
        return new az_dla_account_data_lake_store_show_command_builder("az dla account data-lake-store show", dataLakeStoreAccountName);
    }
}

/** Manage Data Lake Analytics account firewall rules. */
export class az_dla_account_firewall {
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
    static create(account: string, endIpAddress: string, firewallRuleName: string, startIpAddress: string): az_dla_account_firewall_create_command_builder {
        return new az_dla_account_firewall_create_command_builder("az dla account firewall create", account, endIpAddress, firewallRuleName, startIpAddress);
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
    static delete(firewallRuleName: string): az_dla_account_firewall_delete_command_builder {
        return new az_dla_account_firewall_delete_command_builder("az dla account firewall delete", firewallRuleName);
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
    static list(): az_dla_account_firewall_list_command_builder {
        return new az_dla_account_firewall_list_command_builder("az dla account firewall list");
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
    static show(firewallRuleName: string): az_dla_account_firewall_show_command_builder {
        return new az_dla_account_firewall_show_command_builder("az dla account firewall show", firewallRuleName);
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
    static update(firewallRuleName: string): az_dla_account_firewall_update_command_builder {
        return new az_dla_account_firewall_update_command_builder("az dla account firewall update", firewallRuleName);
    }
}

/** Manage Data Lake Analytics accounts. */
export class az_dla_account {
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
    static create(account: string, defaultDataLakeStore: string): az_dla_account_create_command_builder {
        return new az_dla_account_create_command_builder("az dla account create", account, defaultDataLakeStore);
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
    static delete(): az_dla_account_delete_command_builder {
        return new az_dla_account_delete_command_builder("az dla account delete");
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
    static list(): az_dla_account_list_command_builder {
        return new az_dla_account_list_command_builder("az dla account list");
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
    static show(): az_dla_account_show_command_builder {
        return new az_dla_account_show_command_builder("az dla account show");
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
    static update(): az_dla_account_update_command_builder {
        return new az_dla_account_update_command_builder("az dla account update");
    }
}

/** Manage Data Lake Analytics catalog assemblies. */
export class az_dla_catalog_assembly {
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
    static list(databaseName: string): az_dla_catalog_assembly_list_command_builder {
        return new az_dla_catalog_assembly_list_command_builder("az dla catalog assembly list", databaseName);
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
    static show(assemblyName: string, databaseName: string): az_dla_catalog_assembly_show_command_builder {
        return new az_dla_catalog_assembly_show_command_builder("az dla catalog assembly show", assemblyName, databaseName);
    }
}

/** Manage Data Lake Analytics catalog credentials. */
export class az_dla_catalog_credential {
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
    static create(account: string, credentialName: string, databaseName: string, uri: string, userName: string): az_dla_catalog_credential_create_command_builder {
        return new az_dla_catalog_credential_create_command_builder("az dla catalog credential create", account, credentialName, databaseName, uri, userName);
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
    static delete(credentialName: string, databaseName: string): az_dla_catalog_credential_delete_command_builder {
        return new az_dla_catalog_credential_delete_command_builder("az dla catalog credential delete", credentialName, databaseName);
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
    static list(databaseName: string): az_dla_catalog_credential_list_command_builder {
        return new az_dla_catalog_credential_list_command_builder("az dla catalog credential list", databaseName);
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
    static show(credentialName: string, databaseName: string): az_dla_catalog_credential_show_command_builder {
        return new az_dla_catalog_credential_show_command_builder("az dla catalog credential show", credentialName, databaseName);
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
    static update(credentialName: string, databaseName: string, uri: string, userName: string): az_dla_catalog_credential_update_command_builder {
        return new az_dla_catalog_credential_update_command_builder("az dla catalog credential update", credentialName, databaseName, uri, userName);
    }
}

/** Manage Data Lake Analytics catalog databases. */
export class az_dla_catalog_database {
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
    static list(): az_dla_catalog_database_list_command_builder {
        return new az_dla_catalog_database_list_command_builder("az dla catalog database list");
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
    static show(databaseName: string): az_dla_catalog_database_show_command_builder {
        return new az_dla_catalog_database_show_command_builder("az dla catalog database show", databaseName);
    }
}

/** Manage Data Lake Analytics catalog external data sources. */
export class az_dla_catalog_external_data_source {
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
    static list(databaseName: string): az_dla_catalog_external_data_source_list_command_builder {
        return new az_dla_catalog_external_data_source_list_command_builder("az dla catalog external-data-source list", databaseName);
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
    static show(databaseName: string, externalDataSourceName: string): az_dla_catalog_external_data_source_show_command_builder {
        return new az_dla_catalog_external_data_source_show_command_builder("az dla catalog external-data-source show", databaseName, externalDataSourceName);
    }
}

/** Manage Data Lake Analytics catalog packages. */
export class az_dla_catalog_package {
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
    static list(databaseName: string, schemaName: string): az_dla_catalog_package_list_command_builder {
        return new az_dla_catalog_package_list_command_builder("az dla catalog package list", databaseName, schemaName);
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
    static show(databaseName: string, packageName: string, schemaName: string): az_dla_catalog_package_show_command_builder {
        return new az_dla_catalog_package_show_command_builder("az dla catalog package show", databaseName, packageName, schemaName);
    }
}

/** Manage Data Lake Analytics catalog stored procedures. */
export class az_dla_catalog_procedure {
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
    static list(databaseName: string, schemaName: string): az_dla_catalog_procedure_list_command_builder {
        return new az_dla_catalog_procedure_list_command_builder("az dla catalog procedure list", databaseName, schemaName);
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
    static show(databaseName: string, procedureName: string, schemaName: string): az_dla_catalog_procedure_show_command_builder {
        return new az_dla_catalog_procedure_show_command_builder("az dla catalog procedure show", databaseName, procedureName, schemaName);
    }
}

/** Manage Data Lake Analytics catalog schemas. */
export class az_dla_catalog_schema {
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
    static list(databaseName: string): az_dla_catalog_schema_list_command_builder {
        return new az_dla_catalog_schema_list_command_builder("az dla catalog schema list", databaseName);
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
    static show(databaseName: string, schemaName: string): az_dla_catalog_schema_show_command_builder {
        return new az_dla_catalog_schema_show_command_builder("az dla catalog schema show", databaseName, schemaName);
    }
}

/** Manage Data Lake Analytics catalog table partitions. */
export class az_dla_catalog_table_partition {
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
    static list(databaseName: string, schemaName: string, tableName: string): az_dla_catalog_table_partition_list_command_builder {
        return new az_dla_catalog_table_partition_list_command_builder("az dla catalog table-partition list", databaseName, schemaName, tableName);
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
    static show(databaseName: string, partitionName: string, schemaName: string, tableName: string): az_dla_catalog_table_partition_show_command_builder {
        return new az_dla_catalog_table_partition_show_command_builder("az dla catalog table-partition show", databaseName, partitionName, schemaName, tableName);
    }
}

/** Manage Data Lake Analytics catalog table statistics. */
export class az_dla_catalog_table_stats {
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
    static list(databaseName: string): az_dla_catalog_table_stats_list_command_builder {
        return new az_dla_catalog_table_stats_list_command_builder("az dla catalog table-stats list", databaseName);
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
    static show(databaseName: string, schemaName: string, statisticsName: string, tableName: string): az_dla_catalog_table_stats_show_command_builder {
        return new az_dla_catalog_table_stats_show_command_builder("az dla catalog table-stats show", databaseName, schemaName, statisticsName, tableName);
    }
}

/** Manage Data Lake Analytics catalog table types. */
export class az_dla_catalog_table_type {
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
    static list(databaseName: string, schemaName: string): az_dla_catalog_table_type_list_command_builder {
        return new az_dla_catalog_table_type_list_command_builder("az dla catalog table-type list", databaseName, schemaName);
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
    static show(databaseName: string, schemaName: string, tableTypeName: string): az_dla_catalog_table_type_show_command_builder {
        return new az_dla_catalog_table_type_show_command_builder("az dla catalog table-type show", databaseName, schemaName, tableTypeName);
    }
}

/** Manage Data Lake Analytics catalog tables. */
export class az_dla_catalog_table {
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
    static list(databaseName: string): az_dla_catalog_table_list_command_builder {
        return new az_dla_catalog_table_list_command_builder("az dla catalog table list", databaseName);
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
    static show(databaseName: string, schemaName: string, tableName: string): az_dla_catalog_table_show_command_builder {
        return new az_dla_catalog_table_show_command_builder("az dla catalog table show", databaseName, schemaName, tableName);
    }
}

/** Manage Data Lake Analytics catalog table valued functions. */
export class az_dla_catalog_tvf {
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
    static list(databaseName: string): az_dla_catalog_tvf_list_command_builder {
        return new az_dla_catalog_tvf_list_command_builder("az dla catalog tvf list", databaseName);
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
    static show(databaseName: string, schemaName: string, tableValuedFunctionName: string): az_dla_catalog_tvf_show_command_builder {
        return new az_dla_catalog_tvf_show_command_builder("az dla catalog tvf show", databaseName, schemaName, tableValuedFunctionName);
    }
}

/** Manage Data Lake Analytics catalog views. */
export class az_dla_catalog_view {
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
    static list(databaseName: string): az_dla_catalog_view_list_command_builder {
        return new az_dla_catalog_view_list_command_builder("az dla catalog view list", databaseName);
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
    static show(databaseName: string, schemaName: string, viewName: string): az_dla_catalog_view_show_command_builder {
        return new az_dla_catalog_view_show_command_builder("az dla catalog view show", databaseName, schemaName, viewName);
    }
}

/** Manage Data Lake Analytics catalogs. */
export class az_dla_catalog {
}

/** Manage Data Lake Analytics job pipelines. */
export class az_dla_job_pipeline {
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
    static list(): az_dla_job_pipeline_list_command_builder {
        return new az_dla_job_pipeline_list_command_builder("az dla job pipeline list");
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
    static show(pipelineIdentity: string): az_dla_job_pipeline_show_command_builder {
        return new az_dla_job_pipeline_show_command_builder("az dla job pipeline show", pipelineIdentity);
    }
}

/** Manage Data Lake Analytics job recurrences. */
export class az_dla_job_recurrence {
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
    static list(): az_dla_job_recurrence_list_command_builder {
        return new az_dla_job_recurrence_list_command_builder("az dla job recurrence list");
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
    static show(recurrenceIdentity: string): az_dla_job_recurrence_show_command_builder {
        return new az_dla_job_recurrence_show_command_builder("az dla job recurrence show", recurrenceIdentity);
    }
}

/** Manage Data Lake Analytics jobs. */
export class az_dla_job {
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
    static cancel(jobIdentity: string): az_dla_job_cancel_command_builder {
        return new az_dla_job_cancel_command_builder("az dla job cancel", jobIdentity);
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
    static list(): az_dla_job_list_command_builder {
        return new az_dla_job_list_command_builder("az dla job list");
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
    static show(jobIdentity: string): az_dla_job_show_command_builder {
        return new az_dla_job_show_command_builder("az dla job show", jobIdentity);
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
    static submit(jobName: string, script: string): az_dla_job_submit_command_builder {
        return new az_dla_job_submit_command_builder("az dla job submit", jobName, script);
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
    static wait(jobId: string): az_dla_job_wait_command_builder {
        return new az_dla_job_wait_command_builder("az dla job wait", jobId);
    }
}

/** Manage Data Lake Analytics accounts, jobs, and catalogs. */
export class az_dla {
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
class az_dla_account_blob_storage_add_command_builder extends CommandBuilder<az_dla_account_blob_storage_add_command_result> {
    constructor(commandPath: string, accessKey: string, storageAccountName: string) {
        super(commandPath);
        this.accessKey(accessKey)
        this.storageAccountName(storageAccountName)
    }

    /** The access key associated with this Azure Storage account that will be used to connect to it. */
    accessKey(value: string): az_dla_account_blob_storage_add_command_builder {
        this.setFlag("--access-key", value);
        return this;
    }

    /** Name of an existing storage account to link to. */
    storageAccountName(value: string): az_dla_account_blob_storage_add_command_builder {
        this.setFlag("--storage-account-name", value);
        return this;
    }

    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_account_blob_storage_add_command_builder {
        this.setFlag("--account", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_account_blob_storage_add_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** If not specified, will attempt to discover the resource group for the specified Data Lake Analytics account. */
    resourceGroup(value: string): az_dla_account_blob_storage_add_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_account_blob_storage_add_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** The optional suffix for the storage account. */
    suffix(value: string): az_dla_account_blob_storage_add_command_builder {
        this.setFlag("--suffix", value);
        return this;
    }
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
class az_dla_account_blob_storage_delete_command_builder extends CommandBuilder<az_dla_account_blob_storage_delete_command_result> {
    constructor(commandPath: string, storageAccountName: string) {
        super(commandPath);
        this.storageAccountName(storageAccountName)
    }

    /** Name of an existing storage account to link to. */
    storageAccountName(value: string): az_dla_account_blob_storage_delete_command_builder {
        this.setFlag("--storage-account-name", value);
        return this;
    }

    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_account_blob_storage_delete_command_builder {
        this.setFlag("--account", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_account_blob_storage_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** If not specified, will attempt to discover the resource group for the specified Data Lake Analytics account. */
    resourceGroup(value: string): az_dla_account_blob_storage_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_account_blob_storage_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_dla_account_blob_storage_list_command_builder extends CommandBuilder<az_dla_account_blob_storage_list_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_account_blob_storage_list_command_builder {
        this.setFlag("--account", value);
        return this;
    }

    /** The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. */
    count(value: string): az_dla_account_blob_storage_list_command_builder {
        this.setFlag("--count", value);
        return this;
    }

    /** The OData filter. Optional. */
    filter(value: string): az_dla_account_blob_storage_list_command_builder {
        this.setFlag("--filter", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_account_blob_storage_list_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional. */
    orderby(value: string): az_dla_account_blob_storage_list_command_builder {
        this.setFlag("--orderby", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dla_account_blob_storage_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** If not specified, will attempt to discover the resource group for the specified Data Lake Analytics account. */
    resourceGroup(value: string): az_dla_account_blob_storage_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional. */
    select(value: string): az_dla_account_blob_storage_list_command_builder {
        this.setFlag("--select", value);
        return this;
    }

    /** The number of items to skip over before returning elements. */
    skip(value: string): az_dla_account_blob_storage_list_command_builder {
        this.setFlag("--skip", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_account_blob_storage_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Maximum number of items to return. */
    top(value: string): az_dla_account_blob_storage_list_command_builder {
        this.setFlag("--top", value);
        return this;
    }
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
class az_dla_account_blob_storage_show_command_builder extends CommandBuilder<az_dla_account_blob_storage_show_command_result> {
    constructor(commandPath: string, storageAccountName: string) {
        super(commandPath);
        this.storageAccountName(storageAccountName)
    }

    /** Name of an existing storage account to link to. */
    storageAccountName(value: string): az_dla_account_blob_storage_show_command_builder {
        this.setFlag("--storage-account-name", value);
        return this;
    }

    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_account_blob_storage_show_command_builder {
        this.setFlag("--account", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_account_blob_storage_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dla_account_blob_storage_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** If not specified, will attempt to discover the resource group for the specified Data Lake Analytics account. */
    resourceGroup(value: string): az_dla_account_blob_storage_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_account_blob_storage_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_dla_account_blob_storage_update_command_builder extends CommandBuilder<az_dla_account_blob_storage_update_command_result> {
    constructor(commandPath: string, accessKey: string, storageAccountName: string) {
        super(commandPath);
        this.accessKey(accessKey)
        this.storageAccountName(storageAccountName)
    }

    /** The access key associated with this Azure Storage account that will be used to connect to it. */
    accessKey(value: string): az_dla_account_blob_storage_update_command_builder {
        this.setFlag("--access-key", value);
        return this;
    }

    /** Name of an existing storage account to link to. */
    storageAccountName(value: string): az_dla_account_blob_storage_update_command_builder {
        this.setFlag("--storage-account-name", value);
        return this;
    }

    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_account_blob_storage_update_command_builder {
        this.setFlag("--account", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_account_blob_storage_update_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** If not specified, will attempt to discover the resource group for the specified Data Lake Analytics account. */
    resourceGroup(value: string): az_dla_account_blob_storage_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_account_blob_storage_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** The optional suffix for the storage account. */
    suffix(value: string): az_dla_account_blob_storage_update_command_builder {
        this.setFlag("--suffix", value);
        return this;
    }
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
class az_dla_account_compute_policy_create_command_builder extends CommandBuilder<az_dla_account_compute_policy_create_command_result> {
    constructor(commandPath: string, account: string, computePolicyName: string, objectId: string, objectType: string) {
        super(commandPath);
        this.account(account)
        this.computePolicyName(computePolicyName)
        this.objectId(objectId)
        this.objectType(objectType)
    }

    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_account_compute_policy_create_command_builder {
        this.setFlag("--account", value);
        return this;
    }

    /** The name of the compute policy to create. */
    computePolicyName(value: string): az_dla_account_compute_policy_create_command_builder {
        this.setFlag("--compute-policy-name", value);
        return this;
    }

    /** The Azure Active Directory object ID of the user, group, or service principal to apply the policy to. */
    objectId(value: string): az_dla_account_compute_policy_create_command_builder {
        this.setFlag("--object-id", value);
        return this;
    }

    /** The Azure Active Directory object type associated with the supplied object ID. */
    objectType(value: string): az_dla_account_compute_policy_create_command_builder {
        this.setFlag("--object-type", value);
        return this;
    }

    /** The maximum degree of parallelism allowed per job for this policy. At least one of `--min-priority-per-job` and `--max-dop-per-job` must be specified. */
    maxDopPerJob(value: string): az_dla_account_compute_policy_create_command_builder {
        this.setFlag("--max-dop-per-job", value);
        return this;
    }

    /** The minimum priority allowed per job for this policy. At least one of `--min-priority-per-job` and `--max-dop-per-job` must be specified. */
    minPriorityPerJob(value: string): az_dla_account_compute_policy_create_command_builder {
        this.setFlag("--min-priority-per-job", value);
        return this;
    }

    /** If not specified, will attempt to discover the resource group for the specified Data Lake Analytics account. */
    resourceGroup(value: string): az_dla_account_compute_policy_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_account_compute_policy_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_dla_account_compute_policy_delete_command_builder extends CommandBuilder<az_dla_account_compute_policy_delete_command_result> {
    constructor(commandPath: string, computePolicyName: string) {
        super(commandPath);
        this.computePolicyName(computePolicyName)
    }

    /** The name of the compute policy to delete. */
    computePolicyName(value: string): az_dla_account_compute_policy_delete_command_builder {
        this.setFlag("--compute-policy-name", value);
        return this;
    }

    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_account_compute_policy_delete_command_builder {
        this.setFlag("--account", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_account_compute_policy_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** If not specified, will attempt to discover the resource group for the specified Data Lake Analytics account. */
    resourceGroup(value: string): az_dla_account_compute_policy_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_account_compute_policy_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_dla_account_compute_policy_list_command_builder extends CommandBuilder<az_dla_account_compute_policy_list_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_account_compute_policy_list_command_builder {
        this.setFlag("--account", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_account_compute_policy_list_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dla_account_compute_policy_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** If not specified, will attempt to discover the resource group for the specified Data Lake Analytics account. */
    resourceGroup(value: string): az_dla_account_compute_policy_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_account_compute_policy_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_dla_account_compute_policy_show_command_builder extends CommandBuilder<az_dla_account_compute_policy_show_command_result> {
    constructor(commandPath: string, computePolicyName: string) {
        super(commandPath);
        this.computePolicyName(computePolicyName)
    }

    /** The name of the compute policy to retrieve. */
    computePolicyName(value: string): az_dla_account_compute_policy_show_command_builder {
        this.setFlag("--compute-policy-name", value);
        return this;
    }

    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_account_compute_policy_show_command_builder {
        this.setFlag("--account", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_account_compute_policy_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dla_account_compute_policy_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** If not specified, will attempt to discover the resource group for the specified Data Lake Analytics account. */
    resourceGroup(value: string): az_dla_account_compute_policy_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_account_compute_policy_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_dla_account_compute_policy_update_command_builder extends CommandBuilder<az_dla_account_compute_policy_update_command_result> {
    constructor(commandPath: string, computePolicyName: string) {
        super(commandPath);
        this.computePolicyName(computePolicyName)
    }

    /** The name of the compute policy to update. */
    computePolicyName(value: string): az_dla_account_compute_policy_update_command_builder {
        this.setFlag("--compute-policy-name", value);
        return this;
    }

    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_account_compute_policy_update_command_builder {
        this.setFlag("--account", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_account_compute_policy_update_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The maximum degree of parallelism allowed per job for this policy. At least one of `--min-priority-per-job` and `--max-dop-per-job` must be specified. */
    maxDopPerJob(value: string): az_dla_account_compute_policy_update_command_builder {
        this.setFlag("--max-dop-per-job", value);
        return this;
    }

    /** The minimum priority allowed per job for this policy. At least one of `--min-priority-per-job` and `--max-dop-per-job` must be specified. */
    minPriorityPerJob(value: string): az_dla_account_compute_policy_update_command_builder {
        this.setFlag("--min-priority-per-job", value);
        return this;
    }

    /** If not specified, will attempt to discover the resource group for the specified Data Lake Analytics account. */
    resourceGroup(value: string): az_dla_account_compute_policy_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_account_compute_policy_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_dla_account_data_lake_store_add_command_builder extends CommandBuilder<az_dla_account_data_lake_store_add_command_result> {
    constructor(commandPath: string, dataLakeStoreAccountName: string) {
        super(commandPath);
        this.dataLakeStoreAccountName(dataLakeStoreAccountName)
    }

    /** The name of the Data Lake Store account to add. */
    dataLakeStoreAccountName(value: string): az_dla_account_data_lake_store_add_command_builder {
        this.setFlag("--data-lake-store-account-name", value);
        return this;
    }

    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_account_data_lake_store_add_command_builder {
        this.setFlag("--account", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_account_data_lake_store_add_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** If not specified, will attempt to discover the resource group for the specified Data Lake Analytics account. */
    resourceGroup(value: string): az_dla_account_data_lake_store_add_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_account_data_lake_store_add_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** The optional suffix for the Data Lake Store account. */
    suffix(value: string): az_dla_account_data_lake_store_add_command_builder {
        this.setFlag("--suffix", value);
        return this;
    }
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
class az_dla_account_data_lake_store_delete_command_builder extends CommandBuilder<az_dla_account_data_lake_store_delete_command_result> {
    constructor(commandPath: string, dataLakeStoreAccountName: string) {
        super(commandPath);
        this.dataLakeStoreAccountName(dataLakeStoreAccountName)
    }

    /** The name of the Data Lake Store account to remove. */
    dataLakeStoreAccountName(value: string): az_dla_account_data_lake_store_delete_command_builder {
        this.setFlag("--data-lake-store-account-name", value);
        return this;
    }

    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_account_data_lake_store_delete_command_builder {
        this.setFlag("--account", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_account_data_lake_store_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** If not specified, will attempt to discover the resource group for the specified Data Lake Analytics account. */
    resourceGroup(value: string): az_dla_account_data_lake_store_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_account_data_lake_store_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_dla_account_data_lake_store_list_command_builder extends CommandBuilder<az_dla_account_data_lake_store_list_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_account_data_lake_store_list_command_builder {
        this.setFlag("--account", value);
        return this;
    }

    /** The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. */
    count(value: string): az_dla_account_data_lake_store_list_command_builder {
        this.setFlag("--count", value);
        return this;
    }

    /** OData filter. Optional. */
    filter(value: string): az_dla_account_data_lake_store_list_command_builder {
        this.setFlag("--filter", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_account_data_lake_store_list_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional. */
    orderby(value: string): az_dla_account_data_lake_store_list_command_builder {
        this.setFlag("--orderby", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dla_account_data_lake_store_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** If not specified, will attempt to discover the resource group for the specified Data Lake Analytics account. */
    resourceGroup(value: string): az_dla_account_data_lake_store_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional. */
    select(value: string): az_dla_account_data_lake_store_list_command_builder {
        this.setFlag("--select", value);
        return this;
    }

    /** The number of items to skip over before returning elements. */
    skip(value: string): az_dla_account_data_lake_store_list_command_builder {
        this.setFlag("--skip", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_account_data_lake_store_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Maximum number of items to return. */
    top(value: string): az_dla_account_data_lake_store_list_command_builder {
        this.setFlag("--top", value);
        return this;
    }
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
class az_dla_account_data_lake_store_show_command_builder extends CommandBuilder<az_dla_account_data_lake_store_show_command_result> {
    constructor(commandPath: string, dataLakeStoreAccountName: string) {
        super(commandPath);
        this.dataLakeStoreAccountName(dataLakeStoreAccountName)
    }

    /** The name of the Data Lake Store account to retrieve. */
    dataLakeStoreAccountName(value: string): az_dla_account_data_lake_store_show_command_builder {
        this.setFlag("--data-lake-store-account-name", value);
        return this;
    }

    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_account_data_lake_store_show_command_builder {
        this.setFlag("--account", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_account_data_lake_store_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dla_account_data_lake_store_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** If not specified, will attempt to discover the resource group for the specified Data Lake Analytics account. */
    resourceGroup(value: string): az_dla_account_data_lake_store_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_account_data_lake_store_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_dla_account_firewall_create_command_builder extends CommandBuilder<az_dla_account_firewall_create_command_result> {
    constructor(commandPath: string, account: string, endIpAddress: string, firewallRuleName: string, startIpAddress: string) {
        super(commandPath);
        this.account(account)
        this.endIpAddress(endIpAddress)
        this.firewallRuleName(firewallRuleName)
        this.startIpAddress(startIpAddress)
    }

    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_account_firewall_create_command_builder {
        this.setFlag("--account", value);
        return this;
    }

    /** The end of the valid IP range for the firewall rule. */
    endIpAddress(value: string): az_dla_account_firewall_create_command_builder {
        this.setFlag("--end-ip-address", value);
        return this;
    }

    /** The name of the firewall rule. */
    firewallRuleName(value: string): az_dla_account_firewall_create_command_builder {
        this.setFlag("--firewall-rule-name", value);
        return this;
    }

    /** The start of the valid IP range for the firewall rule. */
    startIpAddress(value: string): az_dla_account_firewall_create_command_builder {
        this.setFlag("--start-ip-address", value);
        return this;
    }

    /** If not specified, will attempt to discover the resource group for the specified Data Lake Analytics account. */
    resourceGroup(value: string): az_dla_account_firewall_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_account_firewall_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_dla_account_firewall_delete_command_builder extends CommandBuilder<az_dla_account_firewall_delete_command_result> {
    constructor(commandPath: string, firewallRuleName: string) {
        super(commandPath);
        this.firewallRuleName(firewallRuleName)
    }

    /** The name of the firewall rule to delete. */
    firewallRuleName(value: string): az_dla_account_firewall_delete_command_builder {
        this.setFlag("--firewall-rule-name", value);
        return this;
    }

    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_account_firewall_delete_command_builder {
        this.setFlag("--account", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_account_firewall_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** If not specified, will attempt to discover the resource group for the specified Data Lake Analytics account. */
    resourceGroup(value: string): az_dla_account_firewall_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_account_firewall_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_dla_account_firewall_list_command_builder extends CommandBuilder<az_dla_account_firewall_list_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_account_firewall_list_command_builder {
        this.setFlag("--account", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_account_firewall_list_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dla_account_firewall_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** If not specified, will attempt to discover the resource group for the specified Data Lake Analytics account. */
    resourceGroup(value: string): az_dla_account_firewall_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_account_firewall_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_dla_account_firewall_show_command_builder extends CommandBuilder<az_dla_account_firewall_show_command_result> {
    constructor(commandPath: string, firewallRuleName: string) {
        super(commandPath);
        this.firewallRuleName(firewallRuleName)
    }

    /** The name of the firewall rule to retrieve. */
    firewallRuleName(value: string): az_dla_account_firewall_show_command_builder {
        this.setFlag("--firewall-rule-name", value);
        return this;
    }

    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_account_firewall_show_command_builder {
        this.setFlag("--account", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_account_firewall_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dla_account_firewall_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** If not specified, will attempt to discover the resource group for the specified Data Lake Analytics account. */
    resourceGroup(value: string): az_dla_account_firewall_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_account_firewall_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_dla_account_firewall_update_command_builder extends CommandBuilder<az_dla_account_firewall_update_command_result> {
    constructor(commandPath: string, firewallRuleName: string) {
        super(commandPath);
        this.firewallRuleName(firewallRuleName)
    }

    /** The name of the firewall rule to update. */
    firewallRuleName(value: string): az_dla_account_firewall_update_command_builder {
        this.setFlag("--firewall-rule-name", value);
        return this;
    }

    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_account_firewall_update_command_builder {
        this.setFlag("--account", value);
        return this;
    }

    /** The end IP address for the firewall rule. This can be either ipv4 or ipv6. Start and End should be in the same protocol. */
    endIpAddress(value: string): az_dla_account_firewall_update_command_builder {
        this.setFlag("--end-ip-address", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_account_firewall_update_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** If not specified, will attempt to discover the resource group for the specified Data Lake Analytics account. */
    resourceGroup(value: string): az_dla_account_firewall_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The start IP address for the firewall rule. This can be either ipv4 or ipv6. Start and End should be in the same protocol. */
    startIpAddress(value: string): az_dla_account_firewall_update_command_builder {
        this.setFlag("--start-ip-address", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_account_firewall_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_dla_account_create_command_builder extends CommandBuilder<az_dla_account_create_command_result> {
    constructor(commandPath: string, account: string, defaultDataLakeStore: string) {
        super(commandPath);
        this.account(account)
        this.defaultDataLakeStore(defaultDataLakeStore)
    }

    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_account_create_command_builder {
        this.setFlag("--account", value);
        return this;
    }

    /** The default Data Lake Store account to associate with the created account. */
    defaultDataLakeStore(value: string): az_dla_account_create_command_builder {
        this.setFlag("--default-data-lake-store", value);
        return this;
    }

    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_dla_account_create_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** The maximum degree of parallelism for this account. */
    maxDegreeOfParallelism(value: string): az_dla_account_create_command_builder {
        this.setFlag("--max-degree-of-parallelism", value);
        return this;
    }

    /** The maximum number of concurrent jobs for this account. */
    maxJobCount(value: string): az_dla_account_create_command_builder {
        this.setFlag("--max-job-count", value);
        return this;
    }

    /** The number of days to retain job metadata. */
    queryStoreRetention(value: string): az_dla_account_create_command_builder {
        this.setFlag("--query-store-retention", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_dla_account_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_account_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_dla_account_create_command_builder {
        this.setFlag("--tags", value);
        return this;
    }

    /** The desired commitment tier for this account to use. */
    tier(value: 'Commitment_100000AUHours' | 'Commitment_10000AUHours' | 'Commitment_1000AUHours' | 'Commitment_100AUHours' | 'Commitment_500000AUHours' | 'Commitment_50000AUHours' | 'Commitment_5000AUHours' | 'Commitment_500AUHours' | 'Consumption'): az_dla_account_create_command_builder {
        this.setFlag("--tier", value);
        return this;
    }
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
class az_dla_account_delete_command_builder extends CommandBuilder<az_dla_account_delete_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_account_delete_command_builder {
        this.setFlag("--account", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_account_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** If not specified, will attempt to discover the resource group for the specified Data Lake Analytics account. */
    resourceGroup(value: string): az_dla_account_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_account_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_dla_account_list_command_builder extends CommandBuilder<az_dla_account_list_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dla_account_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_dla_account_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_account_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_dla_account_show_command_builder extends CommandBuilder<az_dla_account_show_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_account_show_command_builder {
        this.setFlag("--account", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_account_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dla_account_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** If not specified, will attempt to discover the resource group for the specified Data Lake Analytics account. */
    resourceGroup(value: string): az_dla_account_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_account_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_dla_account_update_command_builder extends CommandBuilder<az_dla_account_update_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_account_update_command_builder {
        this.setFlag("--account", value);
        return this;
    }

    /** Allow or block IPs originating from Azure through the firewall. */
    allowAzureIps(value: 'Disabled' | 'Enabled'): az_dla_account_update_command_builder {
        this.setFlag("--allow-azure-ips", value);
        return this;
    }

    /** Enable or disable existing firewall rules. */
    firewallState(value: 'Disabled' | 'Enabled'): az_dla_account_update_command_builder {
        this.setFlag("--firewall-state", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_account_update_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The maximum degree of parallelism for this account. */
    maxDegreeOfParallelism(value: string): az_dla_account_update_command_builder {
        this.setFlag("--max-degree-of-parallelism", value);
        return this;
    }

    /** The maximum number of concurrent jobs for this account. */
    maxJobCount(value: string): az_dla_account_update_command_builder {
        this.setFlag("--max-job-count", value);
        return this;
    }

    /** The number of days to retain job metadata. */
    queryStoreRetention(value: string): az_dla_account_update_command_builder {
        this.setFlag("--query-store-retention", value);
        return this;
    }

    /** If not specified, will attempt to discover the resource group for the specified Data Lake Analytics account. */
    resourceGroup(value: string): az_dla_account_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_account_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_dla_account_update_command_builder {
        this.setFlag("--tags", value);
        return this;
    }

    /** The desired commitment tier for this account to use. */
    tier(value: 'Commitment_100000AUHours' | 'Commitment_10000AUHours' | 'Commitment_1000AUHours' | 'Commitment_100AUHours' | 'Commitment_500000AUHours' | 'Commitment_50000AUHours' | 'Commitment_5000AUHours' | 'Commitment_500AUHours' | 'Consumption'): az_dla_account_update_command_builder {
        this.setFlag("--tier", value);
        return this;
    }
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
class az_dla_catalog_assembly_list_command_builder extends CommandBuilder<az_dla_catalog_assembly_list_command_result> {
    constructor(commandPath: string, databaseName: string) {
        super(commandPath);
        this.databaseName(databaseName)
    }

    /** The name of the database containing the assembly. */
    databaseName(value: string): az_dla_catalog_assembly_list_command_builder {
        this.setFlag("--database-name", value);
        return this;
    }

    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_catalog_assembly_list_command_builder {
        this.setFlag("--account", value);
        return this;
    }

    /** The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. */
    count(value: string): az_dla_catalog_assembly_list_command_builder {
        this.setFlag("--count", value);
        return this;
    }

    /** OData filter. Optional. */
    filter(value: string): az_dla_catalog_assembly_list_command_builder {
        this.setFlag("--filter", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_catalog_assembly_list_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional. */
    orderby(value: string): az_dla_catalog_assembly_list_command_builder {
        this.setFlag("--orderby", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dla_catalog_assembly_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional. */
    select(value: string): az_dla_catalog_assembly_list_command_builder {
        this.setFlag("--select", value);
        return this;
    }

    /** The number of items to skip over before returning elements. */
    skip(value: string): az_dla_catalog_assembly_list_command_builder {
        this.setFlag("--skip", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_catalog_assembly_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Maximum number of items to return. */
    top(value: string): az_dla_catalog_assembly_list_command_builder {
        this.setFlag("--top", value);
        return this;
    }
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
class az_dla_catalog_assembly_show_command_builder extends CommandBuilder<az_dla_catalog_assembly_show_command_result> {
    constructor(commandPath: string, assemblyName: string, databaseName: string) {
        super(commandPath);
        this.assemblyName(assemblyName)
        this.databaseName(databaseName)
    }

    /** The name of the assembly. */
    assemblyName(value: string): az_dla_catalog_assembly_show_command_builder {
        this.setFlag("--assembly-name", value);
        return this;
    }

    /** The name of the database containing the assembly. */
    databaseName(value: string): az_dla_catalog_assembly_show_command_builder {
        this.setFlag("--database-name", value);
        return this;
    }

    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_catalog_assembly_show_command_builder {
        this.setFlag("--account", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_catalog_assembly_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dla_catalog_assembly_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_catalog_assembly_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_dla_catalog_credential_create_command_builder extends CommandBuilder<az_dla_catalog_credential_create_command_result> {
    constructor(commandPath: string, account: string, credentialName: string, databaseName: string, uri: string, userName: string) {
        super(commandPath);
        this.account(account)
        this.credentialName(credentialName)
        this.databaseName(databaseName)
        this.uri(uri)
        this.userName(userName)
    }

    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_catalog_credential_create_command_builder {
        this.setFlag("--account", value);
        return this;
    }

    /** The name of the credential. */
    credentialName(value: string): az_dla_catalog_credential_create_command_builder {
        this.setFlag("--credential-name", value);
        return this;
    }

    /** The name of the database in which to create the credential. */
    databaseName(value: string): az_dla_catalog_credential_create_command_builder {
        this.setFlag("--database-name", value);
        return this;
    }

    /** URI of the external data source. */
    uri(value: string): az_dla_catalog_credential_create_command_builder {
        this.setFlag("--uri", value);
        return this;
    }

    /** The user name that will be used when authenticating with this credential. */
    userName(value: string): az_dla_catalog_credential_create_command_builder {
        this.setFlag("--user-name", value);
        return this;
    }

    /** Password for the credential user. Will prompt if not given. */
    password(value: string): az_dla_catalog_credential_create_command_builder {
        this.setFlag("--password", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_catalog_credential_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_dla_catalog_credential_delete_command_builder extends CommandBuilder<az_dla_catalog_credential_delete_command_result> {
    constructor(commandPath: string, credentialName: string, databaseName: string) {
        super(commandPath);
        this.credentialName(credentialName)
        this.databaseName(databaseName)
    }

    /** The name of the credential to delete. */
    credentialName(value: string): az_dla_catalog_credential_delete_command_builder {
        this.setFlag("--credential-name", value);
        return this;
    }

    /** The name of the database containing the credential. */
    databaseName(value: string): az_dla_catalog_credential_delete_command_builder {
        this.setFlag("--database-name", value);
        return this;
    }

    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_catalog_credential_delete_command_builder {
        this.setFlag("--account", value);
        return this;
    }

    /** Indicates if the delete should be a cascading delete (which deletes all resources dependent on the credential as well as the credential) or not. If false will fail if there are any resources relying on the credential. */
    cascade(value: string): az_dla_catalog_credential_delete_command_builder {
        this.setFlag("--cascade", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_catalog_credential_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The current password for the credential and user with access to the data source. This is required if the requester is not the account owner. */
    password(value: string): az_dla_catalog_credential_delete_command_builder {
        this.setFlag("--password", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_catalog_credential_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_dla_catalog_credential_list_command_builder extends CommandBuilder<az_dla_catalog_credential_list_command_result> {
    constructor(commandPath: string, databaseName: string) {
        super(commandPath);
        this.databaseName(databaseName)
    }

    /** The name of the database containing the schema. */
    databaseName(value: string): az_dla_catalog_credential_list_command_builder {
        this.setFlag("--database-name", value);
        return this;
    }

    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_catalog_credential_list_command_builder {
        this.setFlag("--account", value);
        return this;
    }

    /** The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. */
    count(value: string): az_dla_catalog_credential_list_command_builder {
        this.setFlag("--count", value);
        return this;
    }

    /** OData filter. Optional. */
    filter(value: string): az_dla_catalog_credential_list_command_builder {
        this.setFlag("--filter", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_catalog_credential_list_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional. */
    orderby(value: string): az_dla_catalog_credential_list_command_builder {
        this.setFlag("--orderby", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dla_catalog_credential_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional. */
    select(value: string): az_dla_catalog_credential_list_command_builder {
        this.setFlag("--select", value);
        return this;
    }

    /** The number of items to skip over before returning elements. */
    skip(value: string): az_dla_catalog_credential_list_command_builder {
        this.setFlag("--skip", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_catalog_credential_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Maximum number of items to return. */
    top(value: string): az_dla_catalog_credential_list_command_builder {
        this.setFlag("--top", value);
        return this;
    }
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
class az_dla_catalog_credential_show_command_builder extends CommandBuilder<az_dla_catalog_credential_show_command_result> {
    constructor(commandPath: string, credentialName: string, databaseName: string) {
        super(commandPath);
        this.credentialName(credentialName)
        this.databaseName(databaseName)
    }

    /** The name of the credential. */
    credentialName(value: string): az_dla_catalog_credential_show_command_builder {
        this.setFlag("--credential-name", value);
        return this;
    }

    /** The name of the database containing the schema. */
    databaseName(value: string): az_dla_catalog_credential_show_command_builder {
        this.setFlag("--database-name", value);
        return this;
    }

    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_catalog_credential_show_command_builder {
        this.setFlag("--account", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_catalog_credential_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dla_catalog_credential_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_catalog_credential_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_dla_catalog_credential_update_command_builder extends CommandBuilder<az_dla_catalog_credential_update_command_result> {
    constructor(commandPath: string, credentialName: string, databaseName: string, uri: string, userName: string) {
        super(commandPath);
        this.credentialName(credentialName)
        this.databaseName(databaseName)
        this.uri(uri)
        this.userName(userName)
    }

    /** The name of the credential to update. */
    credentialName(value: string): az_dla_catalog_credential_update_command_builder {
        this.setFlag("--credential-name", value);
        return this;
    }

    /** The name of the database in which the credential exists. */
    databaseName(value: string): az_dla_catalog_credential_update_command_builder {
        this.setFlag("--database-name", value);
        return this;
    }

    /** URI of the external data source. */
    uri(value: string): az_dla_catalog_credential_update_command_builder {
        this.setFlag("--uri", value);
        return this;
    }

    /** The user name associated with the credential that will have its password updated. */
    userName(value: string): az_dla_catalog_credential_update_command_builder {
        this.setFlag("--user-name", value);
        return this;
    }

    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_catalog_credential_update_command_builder {
        this.setFlag("--account", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_catalog_credential_update_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** New password for the credential user. Will prompt if not given. */
    newPassword(value: string): az_dla_catalog_credential_update_command_builder {
        this.setFlag("--new-password", value);
        return this;
    }

    /** Current password for the credential user. Will prompt if not given. */
    password(value: string): az_dla_catalog_credential_update_command_builder {
        this.setFlag("--password", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_catalog_credential_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_dla_catalog_database_list_command_builder extends CommandBuilder<az_dla_catalog_database_list_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_catalog_database_list_command_builder {
        this.setFlag("--account", value);
        return this;
    }

    /** The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. */
    count(value: string): az_dla_catalog_database_list_command_builder {
        this.setFlag("--count", value);
        return this;
    }

    /** OData filter. Optional. */
    filter(value: string): az_dla_catalog_database_list_command_builder {
        this.setFlag("--filter", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_catalog_database_list_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional. */
    orderby(value: string): az_dla_catalog_database_list_command_builder {
        this.setFlag("--orderby", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dla_catalog_database_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional. */
    select(value: string): az_dla_catalog_database_list_command_builder {
        this.setFlag("--select", value);
        return this;
    }

    /** The number of items to skip over before returning elements. */
    skip(value: string): az_dla_catalog_database_list_command_builder {
        this.setFlag("--skip", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_catalog_database_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Maximum number of items to return. */
    top(value: string): az_dla_catalog_database_list_command_builder {
        this.setFlag("--top", value);
        return this;
    }
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
class az_dla_catalog_database_show_command_builder extends CommandBuilder<az_dla_catalog_database_show_command_result> {
    constructor(commandPath: string, databaseName: string) {
        super(commandPath);
        this.databaseName(databaseName)
    }

    /** The name of the database. */
    databaseName(value: string): az_dla_catalog_database_show_command_builder {
        this.setFlag("--database-name", value);
        return this;
    }

    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_catalog_database_show_command_builder {
        this.setFlag("--account", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_catalog_database_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dla_catalog_database_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_catalog_database_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_dla_catalog_external_data_source_list_command_builder extends CommandBuilder<az_dla_catalog_external_data_source_list_command_result> {
    constructor(commandPath: string, databaseName: string) {
        super(commandPath);
        this.databaseName(databaseName)
    }

    /** The name of the database containing the external data sources. */
    databaseName(value: string): az_dla_catalog_external_data_source_list_command_builder {
        this.setFlag("--database-name", value);
        return this;
    }

    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_catalog_external_data_source_list_command_builder {
        this.setFlag("--account", value);
        return this;
    }

    /** The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. */
    count(value: string): az_dla_catalog_external_data_source_list_command_builder {
        this.setFlag("--count", value);
        return this;
    }

    /** OData filter. Optional. */
    filter(value: string): az_dla_catalog_external_data_source_list_command_builder {
        this.setFlag("--filter", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_catalog_external_data_source_list_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional. */
    orderby(value: string): az_dla_catalog_external_data_source_list_command_builder {
        this.setFlag("--orderby", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dla_catalog_external_data_source_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional. */
    select(value: string): az_dla_catalog_external_data_source_list_command_builder {
        this.setFlag("--select", value);
        return this;
    }

    /** The number of items to skip over before returning elements. */
    skip(value: string): az_dla_catalog_external_data_source_list_command_builder {
        this.setFlag("--skip", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_catalog_external_data_source_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Maximum number of items to return. */
    top(value: string): az_dla_catalog_external_data_source_list_command_builder {
        this.setFlag("--top", value);
        return this;
    }
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
class az_dla_catalog_external_data_source_show_command_builder extends CommandBuilder<az_dla_catalog_external_data_source_show_command_result> {
    constructor(commandPath: string, databaseName: string, externalDataSourceName: string) {
        super(commandPath);
        this.databaseName(databaseName)
        this.externalDataSourceName(externalDataSourceName)
    }

    /** The name of the database containing the external data source. */
    databaseName(value: string): az_dla_catalog_external_data_source_show_command_builder {
        this.setFlag("--database-name", value);
        return this;
    }

    /** The name of the external data source. */
    externalDataSourceName(value: string): az_dla_catalog_external_data_source_show_command_builder {
        this.setFlag("--external-data-source-name", value);
        return this;
    }

    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_catalog_external_data_source_show_command_builder {
        this.setFlag("--account", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_catalog_external_data_source_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dla_catalog_external_data_source_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_catalog_external_data_source_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_dla_catalog_package_list_command_builder extends CommandBuilder<az_dla_catalog_package_list_command_result> {
    constructor(commandPath: string, databaseName: string, schemaName: string) {
        super(commandPath);
        this.databaseName(databaseName)
        this.schemaName(schemaName)
    }

    /** The name of the database containing the packages. */
    databaseName(value: string): az_dla_catalog_package_list_command_builder {
        this.setFlag("--database-name", value);
        return this;
    }

    /** The name of the schema containing the packages. */
    schemaName(value: string): az_dla_catalog_package_list_command_builder {
        this.setFlag("--schema-name", value);
        return this;
    }

    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_catalog_package_list_command_builder {
        this.setFlag("--account", value);
        return this;
    }

    /** The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. */
    count(value: string): az_dla_catalog_package_list_command_builder {
        this.setFlag("--count", value);
        return this;
    }

    /** OData filter. Optional. */
    filter(value: string): az_dla_catalog_package_list_command_builder {
        this.setFlag("--filter", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_catalog_package_list_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional. */
    orderby(value: string): az_dla_catalog_package_list_command_builder {
        this.setFlag("--orderby", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dla_catalog_package_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional. */
    select(value: string): az_dla_catalog_package_list_command_builder {
        this.setFlag("--select", value);
        return this;
    }

    /** The number of items to skip over before returning elements. */
    skip(value: string): az_dla_catalog_package_list_command_builder {
        this.setFlag("--skip", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_catalog_package_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Maximum number of items to return. */
    top(value: string): az_dla_catalog_package_list_command_builder {
        this.setFlag("--top", value);
        return this;
    }
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
class az_dla_catalog_package_show_command_builder extends CommandBuilder<az_dla_catalog_package_show_command_result> {
    constructor(commandPath: string, databaseName: string, packageName: string, schemaName: string) {
        super(commandPath);
        this.databaseName(databaseName)
        this.packageName(packageName)
        this.schemaName(schemaName)
    }

    /** The name of the database containing the package. */
    databaseName(value: string): az_dla_catalog_package_show_command_builder {
        this.setFlag("--database-name", value);
        return this;
    }

    /** The name of the package. */
    packageName(value: string): az_dla_catalog_package_show_command_builder {
        this.setFlag("--package-name", value);
        return this;
    }

    /** The name of the schema containing the package. */
    schemaName(value: string): az_dla_catalog_package_show_command_builder {
        this.setFlag("--schema-name", value);
        return this;
    }

    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_catalog_package_show_command_builder {
        this.setFlag("--account", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_catalog_package_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dla_catalog_package_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_catalog_package_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_dla_catalog_procedure_list_command_builder extends CommandBuilder<az_dla_catalog_procedure_list_command_result> {
    constructor(commandPath: string, databaseName: string, schemaName: string) {
        super(commandPath);
        this.databaseName(databaseName)
        this.schemaName(schemaName)
    }

    /** The name of the database containing the procedures. */
    databaseName(value: string): az_dla_catalog_procedure_list_command_builder {
        this.setFlag("--database-name", value);
        return this;
    }

    /** The name of the schema containing the procedures. */
    schemaName(value: string): az_dla_catalog_procedure_list_command_builder {
        this.setFlag("--schema-name", value);
        return this;
    }

    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_catalog_procedure_list_command_builder {
        this.setFlag("--account", value);
        return this;
    }

    /** The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. */
    count(value: string): az_dla_catalog_procedure_list_command_builder {
        this.setFlag("--count", value);
        return this;
    }

    /** OData filter. Optional. */
    filter(value: string): az_dla_catalog_procedure_list_command_builder {
        this.setFlag("--filter", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_catalog_procedure_list_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional. */
    orderby(value: string): az_dla_catalog_procedure_list_command_builder {
        this.setFlag("--orderby", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dla_catalog_procedure_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional. */
    select(value: string): az_dla_catalog_procedure_list_command_builder {
        this.setFlag("--select", value);
        return this;
    }

    /** The number of items to skip over before returning elements. */
    skip(value: string): az_dla_catalog_procedure_list_command_builder {
        this.setFlag("--skip", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_catalog_procedure_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Maximum number of items to return. */
    top(value: string): az_dla_catalog_procedure_list_command_builder {
        this.setFlag("--top", value);
        return this;
    }
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
class az_dla_catalog_procedure_show_command_builder extends CommandBuilder<az_dla_catalog_procedure_show_command_result> {
    constructor(commandPath: string, databaseName: string, procedureName: string, schemaName: string) {
        super(commandPath);
        this.databaseName(databaseName)
        this.procedureName(procedureName)
        this.schemaName(schemaName)
    }

    /** The name of the database containing the procedure. */
    databaseName(value: string): az_dla_catalog_procedure_show_command_builder {
        this.setFlag("--database-name", value);
        return this;
    }

    /** The name of the procedure. */
    procedureName(value: string): az_dla_catalog_procedure_show_command_builder {
        this.setFlag("--procedure-name", value);
        return this;
    }

    /** The name of the schema containing the procedure. */
    schemaName(value: string): az_dla_catalog_procedure_show_command_builder {
        this.setFlag("--schema-name", value);
        return this;
    }

    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_catalog_procedure_show_command_builder {
        this.setFlag("--account", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_catalog_procedure_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dla_catalog_procedure_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_catalog_procedure_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_dla_catalog_schema_list_command_builder extends CommandBuilder<az_dla_catalog_schema_list_command_result> {
    constructor(commandPath: string, databaseName: string) {
        super(commandPath);
        this.databaseName(databaseName)
    }

    /** The name of the database containing the schema. */
    databaseName(value: string): az_dla_catalog_schema_list_command_builder {
        this.setFlag("--database-name", value);
        return this;
    }

    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_catalog_schema_list_command_builder {
        this.setFlag("--account", value);
        return this;
    }

    /** The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. */
    count(value: string): az_dla_catalog_schema_list_command_builder {
        this.setFlag("--count", value);
        return this;
    }

    /** OData filter. Optional. */
    filter(value: string): az_dla_catalog_schema_list_command_builder {
        this.setFlag("--filter", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_catalog_schema_list_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional. */
    orderby(value: string): az_dla_catalog_schema_list_command_builder {
        this.setFlag("--orderby", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dla_catalog_schema_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional. */
    select(value: string): az_dla_catalog_schema_list_command_builder {
        this.setFlag("--select", value);
        return this;
    }

    /** The number of items to skip over before returning elements. */
    skip(value: string): az_dla_catalog_schema_list_command_builder {
        this.setFlag("--skip", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_catalog_schema_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Maximum number of items to return. */
    top(value: string): az_dla_catalog_schema_list_command_builder {
        this.setFlag("--top", value);
        return this;
    }
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
class az_dla_catalog_schema_show_command_builder extends CommandBuilder<az_dla_catalog_schema_show_command_result> {
    constructor(commandPath: string, databaseName: string, schemaName: string) {
        super(commandPath);
        this.databaseName(databaseName)
        this.schemaName(schemaName)
    }

    /** The name of the database containing the schema. */
    databaseName(value: string): az_dla_catalog_schema_show_command_builder {
        this.setFlag("--database-name", value);
        return this;
    }

    /** The name of the schema. */
    schemaName(value: string): az_dla_catalog_schema_show_command_builder {
        this.setFlag("--schema-name", value);
        return this;
    }

    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_catalog_schema_show_command_builder {
        this.setFlag("--account", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_catalog_schema_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dla_catalog_schema_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_catalog_schema_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_dla_catalog_table_partition_list_command_builder extends CommandBuilder<az_dla_catalog_table_partition_list_command_result> {
    constructor(commandPath: string, databaseName: string, schemaName: string, tableName: string) {
        super(commandPath);
        this.databaseName(databaseName)
        this.schemaName(schemaName)
        this.tableName(tableName)
    }

    /** The name of the database containing the partitions. */
    databaseName(value: string): az_dla_catalog_table_partition_list_command_builder {
        this.setFlag("--database-name", value);
        return this;
    }

    /** The name of the schema containing the partitions. */
    schemaName(value: string): az_dla_catalog_table_partition_list_command_builder {
        this.setFlag("--schema-name", value);
        return this;
    }

    /** The name of the table containing the partitions. */
    tableName(value: string): az_dla_catalog_table_partition_list_command_builder {
        this.setFlag("--table-name", value);
        return this;
    }

    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_catalog_table_partition_list_command_builder {
        this.setFlag("--account", value);
        return this;
    }

    /** The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. */
    count(value: string): az_dla_catalog_table_partition_list_command_builder {
        this.setFlag("--count", value);
        return this;
    }

    /** OData filter. Optional. */
    filter(value: string): az_dla_catalog_table_partition_list_command_builder {
        this.setFlag("--filter", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_catalog_table_partition_list_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional. */
    orderby(value: string): az_dla_catalog_table_partition_list_command_builder {
        this.setFlag("--orderby", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dla_catalog_table_partition_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional. */
    select(value: string): az_dla_catalog_table_partition_list_command_builder {
        this.setFlag("--select", value);
        return this;
    }

    /** The number of items to skip over before returning elements. */
    skip(value: string): az_dla_catalog_table_partition_list_command_builder {
        this.setFlag("--skip", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_catalog_table_partition_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Maximum number of items to return. */
    top(value: string): az_dla_catalog_table_partition_list_command_builder {
        this.setFlag("--top", value);
        return this;
    }
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
class az_dla_catalog_table_partition_show_command_builder extends CommandBuilder<az_dla_catalog_table_partition_show_command_result> {
    constructor(commandPath: string, databaseName: string, partitionName: string, schemaName: string, tableName: string) {
        super(commandPath);
        this.databaseName(databaseName)
        this.partitionName(partitionName)
        this.schemaName(schemaName)
        this.tableName(tableName)
    }

    /** The name of the database containing the partition. */
    databaseName(value: string): az_dla_catalog_table_partition_show_command_builder {
        this.setFlag("--database-name", value);
        return this;
    }

    /** The name of the table partition. */
    partitionName(value: string): az_dla_catalog_table_partition_show_command_builder {
        this.setFlag("--partition-name", value);
        return this;
    }

    /** The name of the schema containing the partition. */
    schemaName(value: string): az_dla_catalog_table_partition_show_command_builder {
        this.setFlag("--schema-name", value);
        return this;
    }

    /** The name of the table containing the partition. */
    tableName(value: string): az_dla_catalog_table_partition_show_command_builder {
        this.setFlag("--table-name", value);
        return this;
    }

    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_catalog_table_partition_show_command_builder {
        this.setFlag("--account", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_catalog_table_partition_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dla_catalog_table_partition_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_catalog_table_partition_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_dla_catalog_table_stats_list_command_builder extends CommandBuilder<az_dla_catalog_table_stats_list_command_result> {
    constructor(commandPath: string, databaseName: string) {
        super(commandPath);
        this.databaseName(databaseName)
    }

    /** The name of the database. */
    databaseName(value: string): az_dla_catalog_table_stats_list_command_builder {
        this.setFlag("--database-name", value);
        return this;
    }

    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_catalog_table_stats_list_command_builder {
        this.setFlag("--account", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_catalog_table_stats_list_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dla_catalog_table_stats_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** The schema associated with the tables to list. */
    schemaName(value: string): az_dla_catalog_table_stats_list_command_builder {
        this.setFlag("--schema-name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_catalog_table_stats_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** The table to list statistics for. `--schema-name` must also be specified. */
    tableName(value: string): az_dla_catalog_table_stats_list_command_builder {
        this.setFlag("--table-name", value);
        return this;
    }
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
class az_dla_catalog_table_stats_show_command_builder extends CommandBuilder<az_dla_catalog_table_stats_show_command_result> {
    constructor(commandPath: string, databaseName: string, schemaName: string, statisticsName: string, tableName: string) {
        super(commandPath);
        this.databaseName(databaseName)
        this.schemaName(schemaName)
        this.statisticsName(statisticsName)
        this.tableName(tableName)
    }

    /** The name of the database containing the statistics. */
    databaseName(value: string): az_dla_catalog_table_stats_show_command_builder {
        this.setFlag("--database-name", value);
        return this;
    }

    /** The name of the schema containing the statistics. */
    schemaName(value: string): az_dla_catalog_table_stats_show_command_builder {
        this.setFlag("--schema-name", value);
        return this;
    }

    /** The name of the table statistics. */
    statisticsName(value: string): az_dla_catalog_table_stats_show_command_builder {
        this.setFlag("--statistics-name", value);
        return this;
    }

    /** The name of the table containing the statistics. */
    tableName(value: string): az_dla_catalog_table_stats_show_command_builder {
        this.setFlag("--table-name", value);
        return this;
    }

    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_catalog_table_stats_show_command_builder {
        this.setFlag("--account", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_catalog_table_stats_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dla_catalog_table_stats_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_catalog_table_stats_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_dla_catalog_table_type_list_command_builder extends CommandBuilder<az_dla_catalog_table_type_list_command_result> {
    constructor(commandPath: string, databaseName: string, schemaName: string) {
        super(commandPath);
        this.databaseName(databaseName)
        this.schemaName(schemaName)
    }

    /** The name of the database containing the table types. */
    databaseName(value: string): az_dla_catalog_table_type_list_command_builder {
        this.setFlag("--database-name", value);
        return this;
    }

    /** The name of the schema containing the table types. */
    schemaName(value: string): az_dla_catalog_table_type_list_command_builder {
        this.setFlag("--schema-name", value);
        return this;
    }

    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_catalog_table_type_list_command_builder {
        this.setFlag("--account", value);
        return this;
    }

    /** The Boolean value of true or false to request a count of the matching resources included with the resources in the response, e.g. Categories?$count=true. */
    count(value: string): az_dla_catalog_table_type_list_command_builder {
        this.setFlag("--count", value);
        return this;
    }

    /** OData filter. Optional. */
    filter(value: string): az_dla_catalog_table_type_list_command_builder {
        this.setFlag("--filter", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_catalog_table_type_list_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** OrderBy clause. One or more comma-separated expressions with an optional "asc" (the default) or "desc" depending on the order you'd like the values sorted, e.g. Categories?$orderby=CategoryName desc. Optional. */
    orderby(value: string): az_dla_catalog_table_type_list_command_builder {
        this.setFlag("--orderby", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dla_catalog_table_type_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** OData Select statement. Limits the properties on each entry to just those requested, e.g. Categories?$select=CategoryName,Description. Optional. */
    select(value: string): az_dla_catalog_table_type_list_command_builder {
        this.setFlag("--select", value);
        return this;
    }

    /** The number of items to skip over before returning elements. */
    skip(value: string): az_dla_catalog_table_type_list_command_builder {
        this.setFlag("--skip", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_catalog_table_type_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Maximum number of items to return. */
    top(value: string): az_dla_catalog_table_type_list_command_builder {
        this.setFlag("--top", value);
        return this;
    }
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
class az_dla_catalog_table_type_show_command_builder extends CommandBuilder<az_dla_catalog_table_type_show_command_result> {
    constructor(commandPath: string, databaseName: string, schemaName: string, tableTypeName: string) {
        super(commandPath);
        this.databaseName(databaseName)
        this.schemaName(schemaName)
        this.tableTypeName(tableTypeName)
    }

    /** The name of the database containing the table type. */
    databaseName(value: string): az_dla_catalog_table_type_show_command_builder {
        this.setFlag("--database-name", value);
        return this;
    }

    /** The name of the schema containing the table type. */
    schemaName(value: string): az_dla_catalog_table_type_show_command_builder {
        this.setFlag("--schema-name", value);
        return this;
    }

    /** The name of the table type to retrieve. */
    tableTypeName(value: string): az_dla_catalog_table_type_show_command_builder {
        this.setFlag("--table-type-name", value);
        return this;
    }

    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_catalog_table_type_show_command_builder {
        this.setFlag("--account", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_catalog_table_type_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dla_catalog_table_type_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_catalog_table_type_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_dla_catalog_table_list_command_builder extends CommandBuilder<az_dla_catalog_table_list_command_result> {
    constructor(commandPath: string, databaseName: string) {
        super(commandPath);
        this.databaseName(databaseName)
    }

    /** The name of the database. */
    databaseName(value: string): az_dla_catalog_table_list_command_builder {
        this.setFlag("--database-name", value);
        return this;
    }

    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_catalog_table_list_command_builder {
        this.setFlag("--account", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_catalog_table_list_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dla_catalog_table_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** The schema assocated with the tables to list. */
    schemaName(value: string): az_dla_catalog_table_list_command_builder {
        this.setFlag("--schema-name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_catalog_table_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_dla_catalog_table_show_command_builder extends CommandBuilder<az_dla_catalog_table_show_command_result> {
    constructor(commandPath: string, databaseName: string, schemaName: string, tableName: string) {
        super(commandPath);
        this.databaseName(databaseName)
        this.schemaName(schemaName)
        this.tableName(tableName)
    }

    /** The name of the database containing the table. */
    databaseName(value: string): az_dla_catalog_table_show_command_builder {
        this.setFlag("--database-name", value);
        return this;
    }

    /** The name of the schema containing the table. */
    schemaName(value: string): az_dla_catalog_table_show_command_builder {
        this.setFlag("--schema-name", value);
        return this;
    }

    /** The name of the table. */
    tableName(value: string): az_dla_catalog_table_show_command_builder {
        this.setFlag("--table-name", value);
        return this;
    }

    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_catalog_table_show_command_builder {
        this.setFlag("--account", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_catalog_table_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dla_catalog_table_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_catalog_table_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_dla_catalog_tvf_list_command_builder extends CommandBuilder<az_dla_catalog_tvf_list_command_result> {
    constructor(commandPath: string, databaseName: string) {
        super(commandPath);
        this.databaseName(databaseName)
    }

    /** The name of the database. */
    databaseName(value: string): az_dla_catalog_tvf_list_command_builder {
        this.setFlag("--database-name", value);
        return this;
    }

    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_catalog_tvf_list_command_builder {
        this.setFlag("--account", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_catalog_tvf_list_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dla_catalog_tvf_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** The name of the schema assocated with table valued functions to list. */
    schemaName(value: string): az_dla_catalog_tvf_list_command_builder {
        this.setFlag("--schema-name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_catalog_tvf_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_dla_catalog_tvf_show_command_builder extends CommandBuilder<az_dla_catalog_tvf_show_command_result> {
    constructor(commandPath: string, databaseName: string, schemaName: string, tableValuedFunctionName: string) {
        super(commandPath);
        this.databaseName(databaseName)
        this.schemaName(schemaName)
        this.tableValuedFunctionName(tableValuedFunctionName)
    }

    /** The name of the database containing the table valued function. */
    databaseName(value: string): az_dla_catalog_tvf_show_command_builder {
        this.setFlag("--database-name", value);
        return this;
    }

    /** The name of the schema containing the table valued function. */
    schemaName(value: string): az_dla_catalog_tvf_show_command_builder {
        this.setFlag("--schema-name", value);
        return this;
    }

    /** The name of the tableValuedFunction. */
    tableValuedFunctionName(value: string): az_dla_catalog_tvf_show_command_builder {
        this.setFlag("--table-valued-function-name", value);
        return this;
    }

    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_catalog_tvf_show_command_builder {
        this.setFlag("--account", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_catalog_tvf_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dla_catalog_tvf_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_catalog_tvf_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_dla_catalog_view_list_command_builder extends CommandBuilder<az_dla_catalog_view_list_command_result> {
    constructor(commandPath: string, databaseName: string) {
        super(commandPath);
        this.databaseName(databaseName)
    }

    /** The name of the database. */
    databaseName(value: string): az_dla_catalog_view_list_command_builder {
        this.setFlag("--database-name", value);
        return this;
    }

    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_catalog_view_list_command_builder {
        this.setFlag("--account", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_catalog_view_list_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dla_catalog_view_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** The name of the schema associated with the views to list. */
    schemaName(value: string): az_dla_catalog_view_list_command_builder {
        this.setFlag("--schema-name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_catalog_view_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_dla_catalog_view_show_command_builder extends CommandBuilder<az_dla_catalog_view_show_command_result> {
    constructor(commandPath: string, databaseName: string, schemaName: string, viewName: string) {
        super(commandPath);
        this.databaseName(databaseName)
        this.schemaName(schemaName)
        this.viewName(viewName)
    }

    /** The name of the database containing the view. */
    databaseName(value: string): az_dla_catalog_view_show_command_builder {
        this.setFlag("--database-name", value);
        return this;
    }

    /** The name of the schema containing the view. */
    schemaName(value: string): az_dla_catalog_view_show_command_builder {
        this.setFlag("--schema-name", value);
        return this;
    }

    /** The name of the view. */
    viewName(value: string): az_dla_catalog_view_show_command_builder {
        this.setFlag("--view-name", value);
        return this;
    }

    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_catalog_view_show_command_builder {
        this.setFlag("--account", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_catalog_view_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dla_catalog_view_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_catalog_view_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_dla_job_pipeline_list_command_builder extends CommandBuilder<az_dla_job_pipeline_list_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_job_pipeline_list_command_builder {
        this.setFlag("--account", value);
        return this;
    }

    /** The end date for when to get the list of pipelines. The startDateTime and endDateTime can be no more than 30 days apart. */
    endDateTime(value: string): az_dla_job_pipeline_list_command_builder {
        this.setFlag("--end-date-time", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_job_pipeline_list_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dla_job_pipeline_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** The start date for when to get the list of pipelines. The startDateTime and endDateTime can be no more than 30 days apart. */
    startDateTime(value: string): az_dla_job_pipeline_list_command_builder {
        this.setFlag("--start-date-time", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_job_pipeline_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_dla_job_pipeline_show_command_builder extends CommandBuilder<az_dla_job_pipeline_show_command_result> {
    constructor(commandPath: string, pipelineIdentity: string) {
        super(commandPath);
        this.pipelineIdentity(pipelineIdentity)
    }

    /** Pipeline ID. */
    pipelineIdentity(value: string): az_dla_job_pipeline_show_command_builder {
        this.setFlag("--pipeline-identity", value);
        return this;
    }

    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_job_pipeline_show_command_builder {
        this.setFlag("--account", value);
        return this;
    }

    /** The end date for when to get the pipeline and aggregate its data. The startDateTime and endDateTime can be no more than 30 days apart. */
    endDateTime(value: string): az_dla_job_pipeline_show_command_builder {
        this.setFlag("--end-date-time", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_job_pipeline_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dla_job_pipeline_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** The start date for when to get the pipeline and aggregate its data. The startDateTime and endDateTime can be no more than 30 days apart. */
    startDateTime(value: string): az_dla_job_pipeline_show_command_builder {
        this.setFlag("--start-date-time", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_job_pipeline_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_dla_job_recurrence_list_command_builder extends CommandBuilder<az_dla_job_recurrence_list_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_job_recurrence_list_command_builder {
        this.setFlag("--account", value);
        return this;
    }

    /** The end date for when to get the list of recurrences. The startDateTime and endDateTime can be no more than 30 days apart. */
    endDateTime(value: string): az_dla_job_recurrence_list_command_builder {
        this.setFlag("--end-date-time", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_job_recurrence_list_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dla_job_recurrence_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** The start date for when to get the list of recurrences. The startDateTime and endDateTime can be no more than 30 days apart. */
    startDateTime(value: string): az_dla_job_recurrence_list_command_builder {
        this.setFlag("--start-date-time", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_job_recurrence_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_dla_job_recurrence_show_command_builder extends CommandBuilder<az_dla_job_recurrence_show_command_result> {
    constructor(commandPath: string, recurrenceIdentity: string) {
        super(commandPath);
        this.recurrenceIdentity(recurrenceIdentity)
    }

    /** Recurrence ID. */
    recurrenceIdentity(value: string): az_dla_job_recurrence_show_command_builder {
        this.setFlag("--recurrence-identity", value);
        return this;
    }

    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_job_recurrence_show_command_builder {
        this.setFlag("--account", value);
        return this;
    }

    /** The end date for when to get recurrence and aggregate its data. The startDateTime and endDateTime can be no more than 30 days apart. */
    endDateTime(value: string): az_dla_job_recurrence_show_command_builder {
        this.setFlag("--end-date-time", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_job_recurrence_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dla_job_recurrence_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** The start date for when to get the recurrence and aggregate its data. The startDateTime and endDateTime can be no more than 30 days apart. */
    startDateTime(value: string): az_dla_job_recurrence_show_command_builder {
        this.setFlag("--start-date-time", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_job_recurrence_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_dla_job_cancel_command_builder extends CommandBuilder<az_dla_job_cancel_command_result> {
    constructor(commandPath: string, jobIdentity: string) {
        super(commandPath);
        this.jobIdentity(jobIdentity)
    }

    /** JobInfo ID to cancel. */
    jobIdentity(value: string): az_dla_job_cancel_command_builder {
        this.setFlag("--job-identity", value);
        return this;
    }

    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_job_cancel_command_builder {
        this.setFlag("--account", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_job_cancel_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_job_cancel_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_dla_job_list_command_builder extends CommandBuilder<az_dla_job_list_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_job_list_command_builder {
        this.setFlag("--account", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_job_list_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** A filter which returns jobs only by the specified friendly name. */
    name(value: string): az_dla_job_list_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** A filter which returns jobs only containing the specified pipeline_id. */
    pipelineId(value: string): az_dla_job_list_command_builder {
        this.setFlag("--pipeline-id", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dla_job_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** A filter which returns jobs only containing the specified recurrence_id. */
    recurrenceId(value: string): az_dla_job_list_command_builder {
        this.setFlag("--recurrence-id", value);
        return this;
    }

    /** A filter which returns jobs with only the specified result(s). */
    result(value: 'Cancelled' | 'Failed' | 'None' | 'Succeeded'): az_dla_job_list_command_builder {
        this.setFlag("--result", value);
        return this;
    }

    /** A filter which returns jobs with only the specified state(s). */
    state(value: 'Accepted' | 'Compiling' | 'Ended' | 'New' | 'Paused' | 'Queued' | 'Running' | 'Scheduling' | 'Starting' | 'WaitingForCapacity'): az_dla_job_list_command_builder {
        this.setFlag("--state", value);
        return this;
    }

    /** A filter which returns jobs only submitted after the specified time, in ISO-8601 format. */
    submittedAfter(value: string): az_dla_job_list_command_builder {
        this.setFlag("--submitted-after", value);
        return this;
    }

    /** A filter which returns jobs only submitted before the specified time, in ISO-8601 format. */
    submittedBefore(value: string): az_dla_job_list_command_builder {
        this.setFlag("--submitted-before", value);
        return this;
    }

    /** A filter which returns jobs only by the specified submitter. */
    submitter(value: string): az_dla_job_list_command_builder {
        this.setFlag("--submitter", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_job_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Maximum number of items to return. */
    top(value: string): az_dla_job_list_command_builder {
        this.setFlag("--top", value);
        return this;
    }
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
class az_dla_job_show_command_builder extends CommandBuilder<az_dla_job_show_command_result> {
    constructor(commandPath: string, jobIdentity: string) {
        super(commandPath);
        this.jobIdentity(jobIdentity)
    }

    /** JobInfo ID. */
    jobIdentity(value: string): az_dla_job_show_command_builder {
        this.setFlag("--job-identity", value);
        return this;
    }

    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_job_show_command_builder {
        this.setFlag("--account", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_job_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_dla_job_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_job_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_dla_job_submit_command_builder extends CommandBuilder<az_dla_job_submit_command_result> {
    constructor(commandPath: string, jobName: string, script: string) {
        super(commandPath);
        this.jobName(jobName)
        this.script(script)
    }

    /** Name for the submitted job. */
    jobName(value: string): az_dla_job_submit_command_builder {
        this.setFlag("--job-name", value);
        return this;
    }

    /** Script to submit. This may be '@{file}' to load from a file. */
    script(value: string): az_dla_job_submit_command_builder {
        this.setFlag("--script", value);
        return this;
    }

    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_job_submit_command_builder {
        this.setFlag("--account", value);
        return this;
    }

    /** Indicates the type of compilation to be done on this job. Valid values are: 'Semantic' (Only performs semantic checks and necessary sanity checks), 'Full' (full compilation) and 'SingleBox' (Full compilation performed locally). */
    compileMode(value: 'Full' | 'Semantic' | 'SingleBox'): az_dla_job_submit_command_builder {
        this.setFlag("--compile-mode", value);
        return this;
    }

    /** Indicates that the submission should only build the job and not execute if set to true. */
    compileOnly(value: string): az_dla_job_submit_command_builder {
        this.setFlag("--compile-only", value);
        return this;
    }

    /** The degree of parallelism for the job. */
    degreeOfParallelism(value: string): az_dla_job_submit_command_builder {
        this.setFlag("--degree-of-parallelism", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_job_submit_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Job relationship pipeline GUID. */
    pipelineId(value: string): az_dla_job_submit_command_builder {
        this.setFlag("--pipeline-id", value);
        return this;
    }

    /** Friendly name of the job relationship pipeline. */
    pipelineName(value: string): az_dla_job_submit_command_builder {
        this.setFlag("--pipeline-name", value);
        return this;
    }

    /** Unique pipeline URI which links to the originating service for this pipeline. */
    pipelineUri(value: string): az_dla_job_submit_command_builder {
        this.setFlag("--pipeline-uri", value);
        return this;
    }

    /** The priority of the job. */
    priority(value: string): az_dla_job_submit_command_builder {
        this.setFlag("--priority", value);
        return this;
    }

    /** Recurrence GUID, unique per activity/script, regardless of iteration. Links different occurrences of the same job together. */
    recurrenceId(value: string): az_dla_job_submit_command_builder {
        this.setFlag("--recurrence-id", value);
        return this;
    }

    /** Friendly recurrence nae for the correlation between jobs. */
    recurrenceName(value: string): az_dla_job_submit_command_builder {
        this.setFlag("--recurrence-name", value);
        return this;
    }

    /** GUID of the iteration of this pipeline. */
    runId(value: string): az_dla_job_submit_command_builder {
        this.setFlag("--run-id", value);
        return this;
    }

    /** The runtime version to use. */
    runtimeVersion(value: string): az_dla_job_submit_command_builder {
        this.setFlag("--runtime-version", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_job_submit_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_dla_job_wait_command_builder extends CommandBuilder<az_dla_job_wait_command_result> {
    constructor(commandPath: string, jobId: string) {
        super(commandPath);
        this.jobId(jobId)
    }

    /** Job ID to poll for completion. */
    jobId(value: string): az_dla_job_wait_command_builder {
        this.setFlag("--job-id", value);
        return this;
    }

    /** Name of the Data Lake Analytics account. */
    account(value: string): az_dla_job_wait_command_builder {
        this.setFlag("--account", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_dla_job_wait_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The maximum amount of time to wait before erroring out. Default value is to never timeout. Any value <= 0 means never timeout. */
    maxWaitTimeSec(value: string): az_dla_job_wait_command_builder {
        this.setFlag("--max-wait-time-sec", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_dla_job_wait_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** The polling interval between checks for the job status, in seconds. */
    waitIntervalSec(value: string): az_dla_job_wait_command_builder {
        this.setFlag("--wait-interval-sec", value);
        return this;
    }
}
