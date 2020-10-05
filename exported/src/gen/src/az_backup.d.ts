import { CommandBuilder } from '../base';
import { az_backup_container_list_command_result } from './models/az_backup_container_list_command_result';
import { az_backup_container_re_register_command_result } from './models/az_backup_container_re_register_command_result';
import { az_backup_container_register_command_result } from './models/az_backup_container_register_command_result';
import { az_backup_container_show_command_result } from './models/az_backup_container_show_command_result';
import { az_backup_container_unregister_command_result } from './models/az_backup_container_unregister_command_result';
import { az_backup_item_list_command_result } from './models/az_backup_item_list_command_result';
import { az_backup_item_set_policy_command_result } from './models/az_backup_item_set_policy_command_result';
import { az_backup_item_show_command_result } from './models/az_backup_item_show_command_result';
import { az_backup_job_list_command_result } from './models/az_backup_job_list_command_result';
import { az_backup_job_show_command_result } from './models/az_backup_job_show_command_result';
import { az_backup_job_stop_command_result } from './models/az_backup_job_stop_command_result';
import { az_backup_job_wait_command_result } from './models/az_backup_job_wait_command_result';
import { az_backup_policy_create_command_result } from './models/az_backup_policy_create_command_result';
import { az_backup_policy_delete_command_result } from './models/az_backup_policy_delete_command_result';
import { az_backup_policy_get_default_for_vm_command_result } from './models/az_backup_policy_get_default_for_vm_command_result';
import { az_backup_policy_list_command_result } from './models/az_backup_policy_list_command_result';
import { az_backup_policy_list_associated_items_command_result } from './models/az_backup_policy_list_associated_items_command_result';
import { az_backup_policy_set_command_result } from './models/az_backup_policy_set_command_result';
import { az_backup_policy_show_command_result } from './models/az_backup_policy_show_command_result';
import { az_backup_protectable_item_initialize_command_result } from './models/az_backup_protectable_item_initialize_command_result';
import { az_backup_protectable_item_list_command_result } from './models/az_backup_protectable_item_list_command_result';
import { az_backup_protectable_item_show_command_result } from './models/az_backup_protectable_item_show_command_result';
import { az_backup_protection_auto_disable_for_azurewl_command_result } from './models/az_backup_protection_auto_disable_for_azurewl_command_result';
import { az_backup_protection_auto_enable_for_azurewl_command_result } from './models/az_backup_protection_auto_enable_for_azurewl_command_result';
import { az_backup_protection_backup_now_command_result } from './models/az_backup_protection_backup_now_command_result';
import { az_backup_protection_check_vm_command_result } from './models/az_backup_protection_check_vm_command_result';
import { az_backup_protection_disable_command_result } from './models/az_backup_protection_disable_command_result';
import { az_backup_protection_enable_for_azurefileshare_command_result } from './models/az_backup_protection_enable_for_azurefileshare_command_result';
import { az_backup_protection_enable_for_azurewl_command_result } from './models/az_backup_protection_enable_for_azurewl_command_result';
import { az_backup_protection_enable_for_vm_command_result } from './models/az_backup_protection_enable_for_vm_command_result';
import { az_backup_protection_resume_command_result } from './models/az_backup_protection_resume_command_result';
import { az_backup_protection_undelete_command_result } from './models/az_backup_protection_undelete_command_result';
import { az_backup_protection_update_for_vm_command_result } from './models/az_backup_protection_update_for_vm_command_result';
import { az_backup_recoveryconfig_show_command_result } from './models/az_backup_recoveryconfig_show_command_result';
import { az_backup_recoverypoint_list_command_result } from './models/az_backup_recoverypoint_list_command_result';
import { az_backup_recoverypoint_show_command_result } from './models/az_backup_recoverypoint_show_command_result';
import { az_backup_recoverypoint_show_log_chain_command_result } from './models/az_backup_recoverypoint_show_log_chain_command_result';
import { az_backup_restore_files_mount_rp_command_result } from './models/az_backup_restore_files_mount_rp_command_result';
import { az_backup_restore_files_unmount_rp_command_result } from './models/az_backup_restore_files_unmount_rp_command_result';
import { az_backup_restore_restore_azurefiles_command_result } from './models/az_backup_restore_restore_azurefiles_command_result';
import { az_backup_restore_restore_azurefileshare_command_result } from './models/az_backup_restore_restore_azurefileshare_command_result';
import { az_backup_restore_restore_azurewl_command_result } from './models/az_backup_restore_restore_azurewl_command_result';
import { az_backup_restore_restore_disks_command_result } from './models/az_backup_restore_restore_disks_command_result';
import { az_backup_vault_backup_properties_set_command_result } from './models/az_backup_vault_backup_properties_set_command_result';
import { az_backup_vault_backup_properties_show_command_result } from './models/az_backup_vault_backup_properties_show_command_result';
import { az_backup_vault_create_command_result } from './models/az_backup_vault_create_command_result';
import { az_backup_vault_delete_command_result } from './models/az_backup_vault_delete_command_result';
import { az_backup_vault_list_command_result } from './models/az_backup_vault_list_command_result';
import { az_backup_vault_show_command_result } from './models/az_backup_vault_show_command_result';
/** Resource which houses items or applications to be protected. */
export declare class az_backup_container {
    /**
     * List containers registered to a Recovery services vault.
     *
     * Syntax:
     * ```
     * az backup container list --backup-management-type {AzureIaasVM, AzureStorage, AzureWorkload}
     *                          --resource-group
     *                          --vault-name
     *                          [--query-examples]
     *                          [--subscription]
     * ```
     *
     * @param {'AzureIaasVM' | 'AzureStorage' | 'AzureWorkload'} backupManagementType Specifiy the backup management type. Define how Azure Backup manages the backup of entities within the ARM resource. For eg: AzureWorkloads refers to workloads installed within Azure VMs, AzureStorage refers to entities within Storage account. Required only if friendly name is used as Container name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} vaultName Name of the Recovery services vault.
     */
    static list(backupManagementType: 'AzureIaasVM' | 'AzureStorage' | 'AzureWorkload', resourceGroup: string, vaultName: string): az_backup_container_list_command_builder;
    /**
     * Reset the registration details for a given container.
     *
     * Syntax:
     * ```
     * az backup container re-register --container-name
     *                                 --workload-type {AzureFileShare, MSSQL, SAPHANA, SAPHanaDatabase, SQLDataBase, VM}
     *                                 [--backup-management-type {AzureIaasVM, AzureStorage, AzureWorkload}]
     *                                 [--ids]
     *                                 [--resource-group]
     *                                 [--subscription]
     *                                 [--vault-name]
     *                                 [--yes]
     * ```
     *
     * @param {string} containerName Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required.
     * @param {'AzureFileShare' | 'MSSQL' | 'SAPHANA' | 'SAPHanaDatabase' | 'SQLDataBase' | 'VM'} workloadType Specifiy the type of applications within the Resource which should be discovered and protected by Azure Backup.
     */
    static re_register(containerName: string, workloadType: 'AzureFileShare' | 'MSSQL' | 'SAPHANA' | 'SAPHanaDatabase' | 'SQLDataBase' | 'VM'): az_backup_container_re_register_command_builder;
    /**
     * Register a Resource to the given Recovery Services Vault.
     *
     * Syntax:
     * ```
     * az backup container register --resource-id
     *                              --workload-type {AzureFileShare, MSSQL, SAPHANA, SAPHanaDatabase, SQLDataBase, VM}
     *                              [--backup-management-type {AzureIaasVM, AzureStorage, AzureWorkload}]
     *                              [--ids]
     *                              [--resource-group]
     *                              [--subscription]
     *                              [--vault-name]
     * ```
     *
     * @param {string} resourceId ID of the Azure Resource containing items to be protected by Azure Backup service. Currently, only Azure VM resource IDs are supported.
     * @param {'AzureFileShare' | 'MSSQL' | 'SAPHANA' | 'SAPHanaDatabase' | 'SQLDataBase' | 'VM'} workloadType Specifiy the type of applications within the Resource which should be discovered and protected by Azure Backup.
     */
    static register(resourceId: string, workloadType: 'AzureFileShare' | 'MSSQL' | 'SAPHANA' | 'SAPHanaDatabase' | 'SQLDataBase' | 'VM'): az_backup_container_register_command_builder;
    /**
     * Show details of a container registered to a Recovery services vault.
     *
     * Syntax:
     * ```
     * az backup container show --name
     *                          [--backup-management-type {AzureIaasVM, AzureStorage, AzureWorkload}]
     *                          [--ids]
     *                          [--query-examples]
     *                          [--resource-group]
     *                          [--subscription]
     *                          [--vault-name]
     * ```
     *
     * @param {string} name Name of the container. You can use the backup container list command to get the name of a container.
     */
    static show(name: string): az_backup_container_show_command_builder;
    /**
     * Unregister a Backup Container to make the underlying 'resource' be protected by another vault.
     *
     * Syntax:
     * ```
     * az backup container unregister --container-name
     *                                [--backup-management-type {AzureIaasVM, AzureStorage, AzureWorkload}]
     *                                [--ids]
     *                                [--resource-group]
     *                                [--subscription]
     *                                [--vault-name]
     *                                [--yes]
     * ```
     *
     * @param {string} containerName Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required.
     */
    static unregister(containerName: string): az_backup_container_unregister_command_builder;
}
/** An item which is already protected or backed up to an Azure Recovery services vault with an associated policy. */
export declare class az_backup_item {
    /**
     * List all backed up items within a container.
     *
     * Syntax:
     * ```
     * az backup item list --resource-group
     *                     --vault-name
     *                     [--backup-management-type {AzureIaasVM, AzureStorage, AzureWorkload, MAB}]
     *                     [--container-name]
     *                     [--query-examples]
     *                     [--subscription]
     *                     [--workload-type {AzureFileShare, MSSQL, SAPHANA, SAPHanaDatabase, SQLDataBase, VM}]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} vaultName Name of the Recovery services vault.
     */
    static list(resourceGroup: string, vaultName: string): az_backup_item_list_command_builder;
    /**
     * Update the policy associated with this item. Use this to change policies of the backup item.
     *
     * Syntax:
     * ```
     * az backup item set-policy --container-name
     *                           --policy-name
     *                           [--backup-management-type]
     *                           [--ids]
     *                           [--name]
     *                           [--resource-group]
     *                           [--subscription]
     *                           [--vault-name]
     *                           [--workload-type {AzureFileShare, MSSQL, SAPHANA, SAPHanaDatabase, SQLDataBase, VM}]
     * ```
     *
     * @param {string} containerName Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required.
     * @param {string} policyName Name of the Backup policy. You can use the backup policy list command to get the name of a backup policy.
     */
    static set_policy(containerName: string, policyName: string): az_backup_item_set_policy_command_builder;
    /**
     * Show details of a particular backed up item.
     *
     * Syntax:
     * ```
     * az backup item show --container-name
     *                     --name
     *                     [--backup-management-type {AzureIaasVM, AzureStorage, AzureWorkload}]
     *                     [--ids]
     *                     [--query-examples]
     *                     [--resource-group]
     *                     [--subscription]
     *                     [--vault-name]
     *                     [--workload-type {AzureFileShare, MSSQL, SAPHANA, SAPHanaDatabase, SQLDataBase, VM}]
     * ```
     *
     * @param {string} containerName Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required.
     * @param {string} name Name of the backed up item. You can use the backup item list command to get the name of a backed up item.
     */
    static show(containerName: string, name: string): az_backup_item_show_command_builder;
}
/** Entity which contains details of the job. */
export declare class az_backup_job {
    /**
     * List all backup jobs of a Recovery Services vault.
     *
     * Syntax:
     * ```
     * az backup job list --resource-group
     *                    --vault-name
     *                    [--end-date]
     *                    [--operation {Backup, ConfigureBackup, DeleteBackupData, DisableBackup, Restore}]
     *                    [--query-examples]
     *                    [--start-date]
     *                    [--status {Cancelled, Completed, CompletedWithWarnings, Failed, InProgress}]
     *                    [--subscription]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} vaultName Name of the Recovery services vault.
     */
    static list(resourceGroup: string, vaultName: string): az_backup_job_list_command_builder;
    /**
     * Show details of a particular job.
     *
     * Syntax:
     * ```
     * az backup job show --name
     *                    [--ids]
     *                    [--query-examples]
     *                    [--resource-group]
     *                    [--subscription]
     *                    [--vault-name]
     * ```
     *
     * @param {string} name Name of the job. You can use the backup job list command to get the name of a job.
     */
    static show(name: string): az_backup_job_show_command_builder;
    /**
     * Suspend or terminate a currently running job.
     *
     * Syntax:
     * ```
     * az backup job stop --name
     *                    [--ids]
     *                    [--resource-group]
     *                    [--subscription]
     *                    [--vault-name]
     * ```
     *
     * @param {string} name Name of the job. You can use the backup job list command to get the name of a job.
     */
    static stop(name: string): az_backup_job_stop_command_builder;
    /**
     * Wait until either the job completes or the specified timeout value is reached.
     *
     * Syntax:
     * ```
     * az backup job wait --name
     *                    [--ids]
     *                    [--resource-group]
     *                    [--subscription]
     *                    [--timeout]
     *                    [--vault-name]
     * ```
     *
     * @param {string} name Name of the job. You can use the backup job list command to get the name of a job.
     */
    static wait(name: string): az_backup_job_wait_command_builder;
}
/** A backup policy defines when you want to take a backup and for how long you would retain each backup copy. */
export declare class az_backup_policy {
    /**
     * Create a new policy for the given BackupManagementType and workloadType.
     *
     * Syntax:
     * ```
     * az backup policy create --backup-management-type {AzureIaasVM, AzureStorage, AzureWorkload}
     *                         --name
     *                         --policy
     *                         --resource-group
     *                         --vault-name
     *                         [--subscription]
     *                         [--workload-type {AzureFileShare, MSSQL, SAPHANA, SAPHanaDatabase, SQLDataBase, VM}]
     * ```
     *
     * @param {'AzureIaasVM' | 'AzureStorage' | 'AzureWorkload'} backupManagementType Specifiy the backup management type. Define how Azure Backup manages the backup of entities within the ARM resource. For eg: AzureWorkloads refers to workloads installed within Azure VMs, AzureStorage refers to entities within Storage account. Required only if friendly name is used as Container name.
     * @param {string} name Name of the Policy.
     * @param {string} policy JSON encoded policy definition. Use the show command with JSON output to obtain a policy object. Modify the values using a file editor and pass the object.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} vaultName Name of the Recovery services vault.
     */
    static create(backupManagementType: 'AzureIaasVM' | 'AzureStorage' | 'AzureWorkload', name: string, policy: string, resourceGroup: string, vaultName: string): az_backup_policy_create_command_builder;
    /**
     * Delete a backup policy which doesn't have any associated backup items.
     *
     * Syntax:
     * ```
     * az backup policy delete --name
     *                         [--ids]
     *                         [--resource-group]
     *                         [--subscription]
     *                         [--vault-name]
     * ```
     *
     * @param {string} name Name of the backup policy. You can use the backup policy list command to get the name of a policy.
     */
    static delete(name: string): az_backup_policy_delete_command_builder;
    /**
     * Get the default policy with default values to backup a VM.
     *
     * Syntax:
     * ```
     * az backup policy get-default-for-vm [--ids]
     *                                     [--resource-group]
     *                                     [--subscription]
     *                                     [--vault-name]
     * ```
     */
    static get_default_for_vm(): az_backup_policy_get_default_for_vm_command_builder;
    /**
     * List all policies for a Recovery services vault.
     *
     * Syntax:
     * ```
     * az backup policy list --resource-group
     *                       --vault-name
     *                       [--backup-management-type {AzureIaasVM, AzureStorage, AzureWorkload}]
     *                       [--query-examples]
     *                       [--subscription]
     *                       [--workload-type {AzureFileShare, MSSQL, SAPHANA, SAPHanaDatabase, SQLDataBase, VM}]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} vaultName Name of the Recovery services vault.
     */
    static list(resourceGroup: string, vaultName: string): az_backup_policy_list_command_builder;
    /**
     * List all items protected by a backup policy.
     *
     * Syntax:
     * ```
     * az backup policy list-associated-items --name
     *                                        [--backup-management-type {AzureIaasVM, AzureStorage, AzureWorkload}]
     *                                        [--ids]
     *                                        [--resource-group]
     *                                        [--subscription]
     *                                        [--vault-name]
     * ```
     *
     * @param {string} name Name of the backup policy. You can use the backup policy list command to get the name of a policy.
     */
    static list_associated_items(name: string): az_backup_policy_list_associated_items_command_builder;
    /**
     * Update the existing policy with the provided details.
     *
     * Syntax:
     * ```
     * az backup policy set [--backup-management-type {AzureIaasVM, AzureStorage, AzureWorkload}]
     *                      [--fix-for-inconsistent-items {false, true}]
     *                      [--ids]
     *                      [--name]
     *                      [--policy]
     *                      [--resource-group]
     *                      [--subscription]
     *                      [--vault-name]
     * ```
     */
    static set(): az_backup_policy_set_command_builder;
    /**
     * Show details of a particular policy.
     *
     * Syntax:
     * ```
     * az backup policy show --name
     *                       [--ids]
     *                       [--query-examples]
     *                       [--resource-group]
     *                       [--subscription]
     *                       [--vault-name]
     * ```
     *
     * @param {string} name Name of the backup policy. You can use the backup policy list command to get the name of a policy.
     */
    static show(name: string): az_backup_policy_show_command_builder;
}
/** Manage the item which is yet to be protected or backed up to an Azure Recovery services vault with an associated policy. */
export declare class az_backup_protectable_item {
    /**
     * Trigger the discovery of any unprotected items of the given workload type in the given container.
     *
     * Syntax:
     * ```
     * az backup protectable-item initialize --container-name
     *                                       --resource-group
     *                                       --vault-name
     *                                       --workload-type {AzureFileShare, MSSQL, SAPHANA, SAPHanaDatabase, SQLDataBase, VM}
     *                                       [--subscription]
     * ```
     *
     * @param {string} containerName Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} vaultName Name of the Recovery services vault.
     * @param {'AzureFileShare' | 'MSSQL' | 'SAPHANA' | 'SAPHanaDatabase' | 'SQLDataBase' | 'VM'} workloadType Specifiy the type of applications within the Resource which should be discovered and protected by Azure Backup.
     */
    static initialize(containerName: string, resourceGroup: string, vaultName: string, workloadType: 'AzureFileShare' | 'MSSQL' | 'SAPHANA' | 'SAPHanaDatabase' | 'SQLDataBase' | 'VM'): az_backup_protectable_item_initialize_command_builder;
    /**
     * Retrieve all protectable items within a certain container or across all registered containers.
     *
     * Syntax:
     * ```
     * az backup protectable-item list --resource-group
     *                                 --vault-name
     *                                 --workload-type {AzureFileShare, MSSQL, SAPHANA, SAPHanaDatabase, SQLDataBase, VM}
     *                                 [--container-name]
     *                                 [--query-examples]
     *                                 [--subscription]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} vaultName Name of the Recovery services vault.
     * @param {'AzureFileShare' | 'MSSQL' | 'SAPHANA' | 'SAPHanaDatabase' | 'SQLDataBase' | 'VM'} workloadType Specifiy the type of applications within the Resource which should be discovered and protected by Azure Backup.
     */
    static list(resourceGroup: string, vaultName: string, workloadType: 'AzureFileShare' | 'MSSQL' | 'SAPHANA' | 'SAPHanaDatabase' | 'SQLDataBase' | 'VM'): az_backup_protectable_item_list_command_builder;
    /**
     * Retrieve the specified protectable item within the given container.
     *
     * Syntax:
     * ```
     * az backup protectable-item show --name
     *                                 --protectable-item-type {HANAInstance, SAPHanaDatabase, SAPHanaSystem, SQLAG, SQLDatabase, SQLInstance}
     *                                 --resource-group
     *                                 --server-name
     *                                 --vault-name
     *                                 --workload-type {AzureFileShare, MSSQL, SAPHANA, SAPHanaDatabase, SQLDataBase, VM}
     *                                 [--query-examples]
     *                                 [--subscription]
     * ```
     *
     * @param {string} name Name of the protectable item.
     * @param {'HANAInstance' | 'SAPHanaDatabase' | 'SAPHanaSystem' | 'SQLAG' | 'SQLDatabase' | 'SQLInstance'} protectableItemType Specifiy the type of applications within the Resource which should be discovered and protected by Azure Backup.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serverName Parent Server name of the item.
     * @param {string} vaultName Name of the Recovery services vault.
     * @param {'AzureFileShare' | 'MSSQL' | 'SAPHANA' | 'SAPHanaDatabase' | 'SQLDataBase' | 'VM'} workloadType Specifiy the type of applications within the Resource which should be discovered and protected by Azure Backup.
     */
    static show(name: string, protectableItemType: 'HANAInstance' | 'SAPHanaDatabase' | 'SAPHanaSystem' | 'SQLAG' | 'SQLDatabase' | 'SQLInstance', resourceGroup: string, serverName: string, vaultName: string, workloadType: 'AzureFileShare' | 'MSSQL' | 'SAPHANA' | 'SAPHanaDatabase' | 'SQLDataBase' | 'VM'): az_backup_protectable_item_show_command_builder;
}
/** Manage protection of your items, enable protection or disable it, or take on-demand backups. */
export declare class az_backup_protection {
    /**
     * Disable auto-protection for the specified item.
     *
     * Syntax:
     * ```
     * az backup protection auto-disable-for-azurewl --item-name
     *                                               [--ids]
     *                                               [--resource-group]
     *                                               [--subscription]
     *                                               [--vault-name]
     * ```
     *
     * @param {string} itemName Name of the backed up item.
     */
    static auto_disable_for_azurewl(itemName: string): az_backup_protection_auto_disable_for_azurewl_command_builder;
    /**
     * Automatically protect all existing unprotected DBs and any DB which will be added later with the given policy.
     *
     * Syntax:
     * ```
     * az backup protection auto-enable-for-azurewl --policy-name
     *                                              --protectable-item-name
     *                                              --protectable-item-type {HANAInstance, SAPHanaDatabase, SAPHanaSystem, SQLAG, SQLDatabase, SQLInstance}
     *                                              --server-name
     *                                              --workload-type {AzureFileShare, MSSQL, SAPHANA, SAPHanaDatabase, SQLDataBase, VM}
     *                                              [--ids]
     *                                              [--resource-group]
     *                                              [--subscription]
     *                                              [--vault-name]
     * ```
     *
     * @param {string} policyName Name of the backup policy.
     * @param {string} protectableItemName Specify the resource name to be protected by Azure Backup service.
     * @param {'HANAInstance' | 'SAPHanaDatabase' | 'SAPHanaSystem' | 'SQLAG' | 'SQLDatabase' | 'SQLInstance'} protectableItemType Specifiy the type of applications within the Resource which should be discovered and protected by Azure Backup.
     * @param {string} serverName Parent Server name of the item.
     * @param {'AzureFileShare' | 'MSSQL' | 'SAPHANA' | 'SAPHanaDatabase' | 'SQLDataBase' | 'VM'} workloadType Specifiy the type of applications within the Resource which should be discovered and protected by Azure Backup.
     */
    static auto_enable_for_azurewl(policyName: string, protectableItemName: string, protectableItemType: 'HANAInstance' | 'SAPHanaDatabase' | 'SAPHanaSystem' | 'SQLAG' | 'SQLDatabase' | 'SQLInstance', serverName: string, workloadType: 'AzureFileShare' | 'MSSQL' | 'SAPHANA' | 'SAPHanaDatabase' | 'SQLDataBase' | 'VM'): az_backup_protection_auto_enable_for_azurewl_command_builder;
    /**
     * Perform an on-demand backup of a backed up item.
     *
     * Syntax:
     * ```
     * az backup protection backup-now --item-name
     *                                 [--backup-management-type {AzureIaasVM, AzureStorage, AzureWorkload}]
     *                                 [--backup-type]
     *                                 [--container-name]
     *                                 [--enable-compression {false, true}]
     *                                 [--ids]
     *                                 [--resource-group]
     *                                 [--retain-until]
     *                                 [--subscription]
     *                                 [--vault-name]
     *                                 [--workload-type {AzureFileShare, MSSQL, SAPHANA, SAPHanaDatabase, SQLDataBase, VM}]
     * ```
     *
     * @param {string} itemName Name of the backed up item.
     */
    static backup_now(itemName: string): az_backup_protection_backup_now_command_builder;
    /**
     * Find out whether the virtual machine is protected or not. If protected, it returns the recovery services vault ID, otherwise it returns empty.
     *
     * Syntax:
     * ```
     * az backup protection check-vm --vm-id
     *                               [--subscription]
     * ```
     *
     * @param {string} vmId ID of the virtual machine to be checked for protection.
     */
    static check_vm(vmId: string): az_backup_protection_check_vm_command_builder;
    /**
     * Stop protecting a backed up item. Can retain the backed up data forever or choose to delete it.
     *
     * Syntax:
     * ```
     * az backup protection disable --container-name
     *                              --item-name
     *                              [--backup-management-type {AzureIaasVM, AzureStorage, AzureWorkload}]
     *                              [--delete-backup-data {false, true}]
     *                              [--ids]
     *                              [--resource-group]
     *                              [--subscription]
     *                              [--vault-name]
     *                              [--workload-type {AzureFileShare, MSSQL, SAPHANA, SAPHanaDatabase, SQLDataBase, VM}]
     *                              [--yes]
     * ```
     *
     * @param {string} containerName Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required.
     * @param {string} itemName Name of the backed up item.
     */
    static disable(containerName: string, itemName: string): az_backup_protection_disable_command_builder;
    /**
     * Start protecting a previously unprotected Azure File share within an Azure Storage account as per the specified policy to a Recovery services vault.
     *
     * Syntax:
     * ```
     * az backup protection enable-for-azurefileshare --azure-file-share
     *                                                --policy-name
     *                                                --storage-account
     *                                                [--ids]
     *                                                [--resource-group]
     *                                                [--subscription]
     *                                                [--vault-name]
     * ```
     *
     * @param {string} azureFileShare Name of the Azure FileShare.
     * @param {string} policyName Name of the backup policy.
     * @param {string} storageAccount Name of the Storage Account of the FileShare.
     */
    static enable_for_azurefileshare(azureFileShare: string, policyName: string, storageAccount: string): az_backup_protection_enable_for_azurefileshare_command_builder;
    /**
     * Start protecting a previously unprotected workload within an Azure VM as per the specified policy to a Recovery services vault. Provide the workload details as a protectable item.
     *
     * Syntax:
     * ```
     * az backup protection enable-for-azurewl --policy-name
     *                                         --protectable-item-name
     *                                         --protectable-item-type {HANAInstance, SAPHanaDatabase, SAPHanaSystem, SQLAG, SQLDatabase, SQLInstance}
     *                                         --server-name
     *                                         --workload-type {AzureFileShare, MSSQL, SAPHANA, SAPHanaDatabase, SQLDataBase, VM}
     *                                         [--ids]
     *                                         [--resource-group]
     *                                         [--subscription]
     *                                         [--vault-name]
     * ```
     *
     * @param {string} policyName Name of the backup policy.
     * @param {string} protectableItemName Specify the resource name to be protected by Azure Backup service.
     * @param {'HANAInstance' | 'SAPHanaDatabase' | 'SAPHanaSystem' | 'SQLAG' | 'SQLDatabase' | 'SQLInstance'} protectableItemType Specifiy the type of applications within the Resource which should be discovered and protected by Azure Backup.
     * @param {string} serverName Parent Server name of the item.
     * @param {'AzureFileShare' | 'MSSQL' | 'SAPHANA' | 'SAPHanaDatabase' | 'SQLDataBase' | 'VM'} workloadType Specifiy the type of applications within the Resource which should be discovered and protected by Azure Backup.
     */
    static enable_for_azurewl(policyName: string, protectableItemName: string, protectableItemType: 'HANAInstance' | 'SAPHanaDatabase' | 'SAPHanaSystem' | 'SQLAG' | 'SQLDatabase' | 'SQLInstance', serverName: string, workloadType: 'AzureFileShare' | 'MSSQL' | 'SAPHANA' | 'SAPHanaDatabase' | 'SQLDataBase' | 'VM'): az_backup_protection_enable_for_azurewl_command_builder;
    /**
     * Start protecting a previously unprotected Azure VM as per the specified policy to a Recovery services vault.
     *
     * Syntax:
     * ```
     * az backup protection enable-for-vm --policy-name
     *                                    --vm
     *                                    [--disk-list-setting {exclude, include}]
     *                                    [--diskslist]
     *                                    [--exclude-all-data-disks {false, true}]
     *                                    [--ids]
     *                                    [--resource-group]
     *                                    [--subscription]
     *                                    [--vault-name]
     * ```
     *
     * @param {string} policyName Name of the backup policy.
     * @param {string} vm Name or ID of the Virtual Machine to be protected.
     */
    static enable_for_vm(policyName: string, vm: string): az_backup_protection_enable_for_vm_command_builder;
    /**
     * Resume backup for the associated backup item. Use this to change the policy associated with the backup item.
     *
     * Syntax:
     * ```
     * az backup protection resume --container-name
     *                             --item-name
     *                             --policy-name
     *                             [--backup-management-type {AzureIaasVM, AzureStorage, AzureWorkload}]
     *                             [--ids]
     *                             [--resource-group]
     *                             [--subscription]
     *                             [--vault-name]
     *                             [--workload-type {AzureFileShare, MSSQL, SAPHANA, SAPHanaDatabase, SQLDataBase, VM}]
     * ```
     *
     * @param {string} containerName Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required.
     * @param {string} itemName Name of the backed up item.
     * @param {string} policyName Name of the backup policy.
     */
    static resume(containerName: string, itemName: string, policyName: string): az_backup_protection_resume_command_builder;
    /**
     * Rehydrate an item from softdeleted state to stop protection with retained data state.
     *
     * Syntax:
     * ```
     * az backup protection undelete --backup-management-type {AzureIaasVM, AzureStorage, AzureWorkload}
     *                               --container-name
     *                               --item-name
     *                               [--ids]
     *                               [--resource-group]
     *                               [--subscription]
     *                               [--vault-name]
     *                               [--workload-type {AzureFileShare, MSSQL, SAPHANA, SAPHanaDatabase, SQLDataBase, VM}]
     * ```
     *
     * @param {'AzureIaasVM' | 'AzureStorage' | 'AzureWorkload'} backupManagementType Specifiy the backup management type. Define how Azure Backup manages the backup of entities within the ARM resource. For eg: AzureWorkloads refers to workloads installed within Azure VMs, AzureStorage refers to entities within Storage account. Required only if friendly name is used as Container name.
     * @param {string} containerName Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required.
     * @param {string} itemName Name of the backed up item.
     */
    static undelete(backupManagementType: 'AzureIaasVM' | 'AzureStorage' | 'AzureWorkload', containerName: string, itemName: string): az_backup_protection_undelete_command_builder;
    /**
     * Update disk exclusion settings associated with a backed up VM item.
     *
     * Syntax:
     * ```
     * az backup protection update-for-vm --container-name
     *                                    --item-name
     *                                    [--disk-list-setting {exclude, include, resetexclusionsettings}]
     *                                    [--diskslist]
     *                                    [--exclude-all-data-disks {false, true}]
     *                                    [--ids]
     *                                    [--resource-group]
     *                                    [--subscription]
     *                                    [--vault-name]
     * ```
     *
     * @param {string} containerName Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required.
     * @param {string} itemName Name of the backed up item.
     */
    static update_for_vm(containerName: string, itemName: string): az_backup_protection_update_for_vm_command_builder;
}
/** Manage recovery configuration of an Azure workload backed up item. */
export declare class az_backup_recoveryconfig {
    /**
     * Construct the recovery configuration of an Azure workload backed up item.
     *
     * Syntax:
     * ```
     * az backup recoveryconfig show --container-name
     *                               --item-name
     *                               --resource-group
     *                               --restore-mode {AlternateWorkloadRestore, OriginalWorkloadRestore, RestoreAsFiles}
     *                               --vault-name
     *                               [--backup-management-type {AzureIaasVM, AzureStorage, AzureWorkload}]
     *                               [--filepath]
     *                               [--from-full-rp-name]
     *                               [--log-point-in-time]
     *                               [--query-examples]
     *                               [--rp-name]
     *                               [--subscription]
     *                               [--target-container-name]
     *                               [--target-item-name]
     *                               [--target-server-name]
     *                               [--target-server-type {HANAInstance, SAPHanaDatabase, SAPHanaSystem, SQLAG, SQLDatabase, SQLInstance}]
     *                               [--workload-type {AzureFileShare, MSSQL, SAPHANA, SAPHanaDatabase, SQLDataBase, VM}]
     * ```
     *
     * @param {string} containerName Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required.
     * @param {string} itemName Name of the backed up item.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {'AlternateWorkloadRestore' | 'OriginalWorkloadRestore' | 'RestoreAsFiles'} restoreMode Specify the restore mode.
     * @param {string} vaultName Name of the Recovery services vault.
     */
    static show(containerName: string, itemName: string, resourceGroup: string, restoreMode: 'AlternateWorkloadRestore' | 'OriginalWorkloadRestore' | 'RestoreAsFiles', vaultName: string): az_backup_recoveryconfig_show_command_builder;
}
/** A snapshot of data at that point-of-time, stored in Recovery Services Vault, from which you can restore information. */
export declare class az_backup_recoverypoint {
    /**
     * List all recovery points of a backed up item.
     *
     * Syntax:
     * ```
     * az backup recoverypoint list --container-name
     *                              --item-name
     *                              --resource-group
     *                              --vault-name
     *                              [--backup-management-type {AzureIaasVM, AzureStorage, AzureWorkload}]
     *                              [--end-date]
     *                              [--query-examples]
     *                              [--start-date]
     *                              [--subscription]
     *                              [--workload-type {AzureFileShare, MSSQL, SAPHANA, SAPHanaDatabase, SQLDataBase, VM}]
     * ```
     *
     * @param {string} containerName Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required.
     * @param {string} itemName Name of the backed up item.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} vaultName Name of the Recovery services vault.
     */
    static list(containerName: string, itemName: string, resourceGroup: string, vaultName: string): az_backup_recoverypoint_list_command_builder;
    /**
     * Shows details of a particular recovery point.
     *
     * Syntax:
     * ```
     * az backup recoverypoint show --container-name
     *                              --item-name
     *                              --name
     *                              [--backup-management-type {AzureIaasVM, AzureStorage, AzureWorkload}]
     *                              [--ids]
     *                              [--query-examples]
     *                              [--resource-group]
     *                              [--subscription]
     *                              [--vault-name]
     *                              [--workload-type {AzureFileShare, MSSQL, SAPHANA, SAPHanaDatabase, SQLDataBase, VM}]
     * ```
     *
     * @param {string} containerName Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required.
     * @param {string} itemName Name of the backed up item.
     * @param {string} name Name of the recovery point. You can use the backup recovery point list command to get the name of a backed up item.
     */
    static show(containerName: string, itemName: string, name: string): az_backup_recoverypoint_show_command_builder;
    /**
     * List the start and end points of the unbroken log chain(s) of the given backup item.
     *
     * Syntax:
     * ```
     * az backup recoverypoint show-log-chain --container-name
     *                                        --item-name
     *                                        --resource-group
     *                                        --vault-name
     *                                        [--backup-management-type {AzureIaasVM, AzureStorage, AzureWorkload}]
     *                                        [--end-date]
     *                                        [--start-date]
     *                                        [--subscription]
     *                                        [--workload-type {AzureFileShare, MSSQL, SAPHANA, SAPHanaDatabase, SQLDataBase, VM}]
     * ```
     *
     * @param {string} containerName Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required.
     * @param {string} itemName Name of the backed up item.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} vaultName Name of the Recovery services vault.
     */
    static show_log_chain(containerName: string, itemName: string, resourceGroup: string, vaultName: string): az_backup_recoverypoint_show_log_chain_command_builder;
}
/** Gives access to all files of a recovery point. */
export declare class az_backup_restore_files {
    /**
     * Download a script which mounts files of a recovery point.
     *
     * Syntax:
     * ```
     * az backup restore files mount-rp --container-name
     *                                  --item-name
     *                                  --rp-name
     *                                  [--ids]
     *                                  [--resource-group]
     *                                  [--subscription]
     *                                  [--vault-name]
     * ```
     *
     * @param {string} containerName Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required.
     * @param {string} itemName Name of the backed up item.
     * @param {string} rpName Name of the recovery point.
     */
    static mount_rp(containerName: string, itemName: string, rpName: string): az_backup_restore_files_mount_rp_command_builder;
    /**
     * Close access to the recovery point.
     *
     * Syntax:
     * ```
     * az backup restore files unmount-rp --container-name
     *                                    --item-name
     *                                    --rp-name
     *                                    [--ids]
     *                                    [--resource-group]
     *                                    [--subscription]
     *                                    [--vault-name]
     * ```
     *
     * @param {string} containerName Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required.
     * @param {string} itemName Name of the backed up item.
     * @param {string} rpName Name of the recovery point.
     */
    static unmount_rp(containerName: string, itemName: string, rpName: string): az_backup_restore_files_unmount_rp_command_builder;
}
/** Restore backed up items from recovery points in a Recovery Services vault. */
export declare class az_backup_restore {
    /**
     * Restore backed up Azure files within a file-share to the same file-share or another file-share in registered storage accounts.
     *
     * Syntax:
     * ```
     * az backup restore restore-azurefiles --container-name
     *                                      --item-name
     *                                      --resolve-conflict {Overwrite, Skip}
     *                                      --restore-mode {AlternateLocation, OriginalLocation}
     *                                      --rp-name
     *                                      [--ids]
     *                                      [--resource-group]
     *                                      [--source-file-path]
     *                                      [--source-file-type {Directory, File}]
     *                                      [--subscription]
     *                                      [--target-file-share]
     *                                      [--target-folder]
     *                                      [--target-storage-account]
     *                                      [--vault-name]
     * ```
     *
     * @param {string} containerName Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required.
     * @param {string} itemName Name of the backed up item.
     * @param {'Overwrite' | 'Skip'} resolveConflict Instruction if there's a conflict with the restored data.
     * @param {'AlternateLocation' | 'OriginalLocation'} restoreMode Specify the restore mode.
     * @param {string} rpName Name of the recovery point.
     */
    static restore_azurefiles(containerName: string, itemName: string, resolveConflict: 'Overwrite' | 'Skip', restoreMode: 'AlternateLocation' | 'OriginalLocation', rpName: string): az_backup_restore_restore_azurefiles_command_builder;
    /**
     * Restore backed up Azure file shares to the same file-share or another file-share in registered storage accounts.
     *
     * Syntax:
     * ```
     * az backup restore restore-azurefileshare --container-name
     *                                          --item-name
     *                                          --resolve-conflict {Overwrite, Skip}
     *                                          --restore-mode {AlternateLocation, OriginalLocation}
     *                                          --rp-name
     *                                          [--ids]
     *                                          [--resource-group]
     *                                          [--subscription]
     *                                          [--target-file-share]
     *                                          [--target-folder]
     *                                          [--target-storage-account]
     *                                          [--vault-name]
     * ```
     *
     * @param {string} containerName Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required.
     * @param {string} itemName Name of the backed up item.
     * @param {'Overwrite' | 'Skip'} resolveConflict Instruction if there's a conflict with the restored data.
     * @param {'AlternateLocation' | 'OriginalLocation'} restoreMode Specify the restore mode.
     * @param {string} rpName Name of the recovery point.
     */
    static restore_azurefileshare(containerName: string, itemName: string, resolveConflict: 'Overwrite' | 'Skip', restoreMode: 'AlternateLocation' | 'OriginalLocation', rpName: string): az_backup_restore_restore_azurefileshare_command_builder;
    /**
     * Restore backed up Azure Workloads in a Recovery services vault to another registered container or to the same container.
     *
     * Syntax:
     * ```
     * az backup restore restore-azurewl --recovery-config
     *                                   [--ids]
     *                                   [--resource-group]
     *                                   [--subscription]
     *                                   [--vault-name]
     * ```
     *
     * @param {string} recoveryConfig Specify the recovery configuration of a backed up item. The configuration object can be obtained from 'backup recoveryconfig show' command.
     */
    static restore_azurewl(recoveryConfig: string): az_backup_restore_restore_azurewl_command_builder;
    /**
     * Restore disks of the backed VM from the specified recovery point.
     *
     * Syntax:
     * ```
     * az backup restore restore-disks --container-name
     *                                 --item-name
     *                                 --rp-name
     *                                 --storage-account
     *                                 [--diskslist]
     *                                 [--ids]
     *                                 [--resource-group]
     *                                 [--restore-as-unmanaged-disks {false, true}]
     *                                 [--restore-only-osdisk {false, true}]
     *                                 [--restore-to-staging-storage-account {false, true}]
     *                                 [--subscription]
     *                                 [--target-resource-group]
     *                                 [--vault-name]
     * ```
     *
     * @param {string} containerName Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required.
     * @param {string} itemName Name of the backed up item.
     * @param {string} rpName Name of the recovery point.
     * @param {string} storageAccount Name or ID of the staging storage account. The VM configuration will be restored to this storage account. See the help for --restore-to-staging-storage-account parameter for more info.
     */
    static restore_disks(containerName: string, itemName: string, rpName: string, storageAccount: string): az_backup_restore_restore_disks_command_builder;
}
/** Properties of the Recovery Services vault. */
export declare class az_backup_vault_backup_properties {
    /**
     * Sets backup related properties of the Recovery Services vault.
     *
     * Syntax:
     * ```
     * az backup vault backup-properties set [--backup-storage-redundancy {GeoRedundant, LocallyRedundant}]
     *                                       [--ids]
     *                                       [--name]
     *                                       [--resource-group]
     *                                       [--soft-delete-feature-state {Disable, Enable}]
     *                                       [--subscription]
     * ```
     */
    static set(): az_backup_vault_backup_properties_set_command_builder;
    /**
     * Gets backup related properties of the Recovery Services vault.
     *
     * Syntax:
     * ```
     * az backup vault backup-properties show [--ids]
     *                                        [--name]
     *                                        [--query-examples]
     *                                        [--resource-group]
     *                                        [--subscription]
     * ```
     */
    static show(): az_backup_vault_backup_properties_show_command_builder;
}
/** Online storage entity in Azure used to hold data such as backup copies, recovery points and backup policies. */
export declare class az_backup_vault {
    /**
     * Create a new Recovery Services vault.
     *
     * Syntax:
     * ```
     * az backup vault create --location
     *                        --name
     *                        --resource-group
     *                        [--subscription]
     * ```
     *
     * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
     * @param {string} name Name of the Recovery services vault.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static create(location: string, name: string, resourceGroup: string): az_backup_vault_create_command_builder;
    /**
     * Delete an existing Recovery services vault.
     *
     * Syntax:
     * ```
     * az backup vault delete [--force]
     *                        [--ids]
     *                        [--name]
     *                        [--resource-group]
     *                        [--subscription]
     *                        [--yes]
     * ```
     */
    static delete(): az_backup_vault_delete_command_builder;
    /**
     * List Recovery service vaults within a subscription.
     *
     * Syntax:
     * ```
     * az backup vault list [--query-examples]
     *                      [--resource-group]
     *                      [--subscription]
     * ```
     */
    static list(): az_backup_vault_list_command_builder;
    /**
     * Show details of a particular Recovery service vault.
     *
     * Syntax:
     * ```
     * az backup vault show [--ids]
     *                      [--name]
     *                      [--query-examples]
     *                      [--resource-group]
     *                      [--subscription]
     * ```
     */
    static show(): az_backup_vault_show_command_builder;
}
/** Manage Azure Backups. */
export declare class az_backup {
}
/**
 * List containers registered to a Recovery services vault.
 *
 * Syntax:
 * ```
 * az backup container list --backup-management-type {AzureIaasVM, AzureStorage, AzureWorkload}
 *                          --resource-group
 *                          --vault-name
 *                          [--query-examples]
 *                          [--subscription]
 * ```
 *
 * @param {'AzureIaasVM' | 'AzureStorage' | 'AzureWorkload'} backupManagementType Specifiy the backup management type. Define how Azure Backup manages the backup of entities within the ARM resource. For eg: AzureWorkloads refers to workloads installed within Azure VMs, AzureStorage refers to entities within Storage account. Required only if friendly name is used as Container name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} vaultName Name of the Recovery services vault.
 */
declare class az_backup_container_list_command_builder extends CommandBuilder<az_backup_container_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, backupManagementType: 'AzureIaasVM' | 'AzureStorage' | 'AzureWorkload', resourceGroup: string, vaultName: string);
    /** Specifiy the backup management type. Define how Azure Backup manages the backup of entities within the ARM resource. For eg: AzureWorkloads refers to workloads installed within Azure VMs, AzureStorage refers to entities within Storage account. Required only if friendly name is used as Container name. */
    backupManagementType(value: 'AzureIaasVM' | 'AzureStorage' | 'AzureWorkload'): az_backup_container_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_backup_container_list_command_builder;
    /** Name of the Recovery services vault. */
    vaultName(value: string): az_backup_container_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_backup_container_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_backup_container_list_command_builder;
}
/**
 * Reset the registration details for a given container.
 *
 * Syntax:
 * ```
 * az backup container re-register --container-name
 *                                 --workload-type {AzureFileShare, MSSQL, SAPHANA, SAPHanaDatabase, SQLDataBase, VM}
 *                                 [--backup-management-type {AzureIaasVM, AzureStorage, AzureWorkload}]
 *                                 [--ids]
 *                                 [--resource-group]
 *                                 [--subscription]
 *                                 [--vault-name]
 *                                 [--yes]
 * ```
 *
 * @param {string} containerName Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required.
 * @param {'AzureFileShare' | 'MSSQL' | 'SAPHANA' | 'SAPHanaDatabase' | 'SQLDataBase' | 'VM'} workloadType Specifiy the type of applications within the Resource which should be discovered and protected by Azure Backup.
 */
declare class az_backup_container_re_register_command_builder extends CommandBuilder<az_backup_container_re_register_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, containerName: string, workloadType: 'AzureFileShare' | 'MSSQL' | 'SAPHANA' | 'SAPHanaDatabase' | 'SQLDataBase' | 'VM');
    /** Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required. */
    containerName(value: string): az_backup_container_re_register_command_builder;
    /** Specifiy the type of applications within the Resource which should be discovered and protected by Azure Backup. */
    workloadType(value: 'AzureFileShare' | 'MSSQL' | 'SAPHANA' | 'SAPHanaDatabase' | 'SQLDataBase' | 'VM'): az_backup_container_re_register_command_builder;
    /** Specifiy the backup management type. Define how Azure Backup manages the backup of entities within the ARM resource. For eg: AzureWorkloads refers to workloads installed within Azure VMs, AzureStorage refers to entities within Storage account. Required only if friendly name is used as Container name. */
    backupManagementType(value: 'AzureIaasVM' | 'AzureStorage' | 'AzureWorkload'): az_backup_container_re_register_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_backup_container_re_register_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_backup_container_re_register_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_backup_container_re_register_command_builder;
    /** Name of the Recovery services vault. */
    vaultName(value: string): az_backup_container_re_register_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_backup_container_re_register_command_builder;
}
/**
 * Register a Resource to the given Recovery Services Vault.
 *
 * Syntax:
 * ```
 * az backup container register --resource-id
 *                              --workload-type {AzureFileShare, MSSQL, SAPHANA, SAPHanaDatabase, SQLDataBase, VM}
 *                              [--backup-management-type {AzureIaasVM, AzureStorage, AzureWorkload}]
 *                              [--ids]
 *                              [--resource-group]
 *                              [--subscription]
 *                              [--vault-name]
 * ```
 *
 * @param {string} resourceId ID of the Azure Resource containing items to be protected by Azure Backup service. Currently, only Azure VM resource IDs are supported.
 * @param {'AzureFileShare' | 'MSSQL' | 'SAPHANA' | 'SAPHanaDatabase' | 'SQLDataBase' | 'VM'} workloadType Specifiy the type of applications within the Resource which should be discovered and protected by Azure Backup.
 */
declare class az_backup_container_register_command_builder extends CommandBuilder<az_backup_container_register_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, resourceId: string, workloadType: 'AzureFileShare' | 'MSSQL' | 'SAPHANA' | 'SAPHanaDatabase' | 'SQLDataBase' | 'VM');
    /** ID of the Azure Resource containing items to be protected by Azure Backup service. Currently, only Azure VM resource IDs are supported. */
    resourceId(value: string): az_backup_container_register_command_builder;
    /** Specifiy the type of applications within the Resource which should be discovered and protected by Azure Backup. */
    workloadType(value: 'AzureFileShare' | 'MSSQL' | 'SAPHANA' | 'SAPHanaDatabase' | 'SQLDataBase' | 'VM'): az_backup_container_register_command_builder;
    /** Specifiy the backup management type. Define how Azure Backup manages the backup of entities within the ARM resource. For eg: AzureWorkloads refers to workloads installed within Azure VMs, AzureStorage refers to entities within Storage account. Required only if friendly name is used as Container name. */
    backupManagementType(value: 'AzureIaasVM' | 'AzureStorage' | 'AzureWorkload'): az_backup_container_register_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_backup_container_register_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_backup_container_register_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_backup_container_register_command_builder;
    /** Name of the Recovery services vault. */
    vaultName(value: string): az_backup_container_register_command_builder;
}
/**
 * Show details of a container registered to a Recovery services vault.
 *
 * Syntax:
 * ```
 * az backup container show --name
 *                          [--backup-management-type {AzureIaasVM, AzureStorage, AzureWorkload}]
 *                          [--ids]
 *                          [--query-examples]
 *                          [--resource-group]
 *                          [--subscription]
 *                          [--vault-name]
 * ```
 *
 * @param {string} name Name of the container. You can use the backup container list command to get the name of a container.
 */
declare class az_backup_container_show_command_builder extends CommandBuilder<az_backup_container_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** Name of the container. You can use the backup container list command to get the name of a container. */
    name(value: string): az_backup_container_show_command_builder;
    /** Specifiy the backup management type. Define how Azure Backup manages the backup of entities within the ARM resource. For eg: AzureWorkloads refers to workloads installed within Azure VMs, AzureStorage refers to entities within Storage account. Required only if friendly name is used as Container name. */
    backupManagementType(value: 'AzureIaasVM' | 'AzureStorage' | 'AzureWorkload'): az_backup_container_show_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_backup_container_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_backup_container_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_backup_container_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_backup_container_show_command_builder;
    /** Name of the Recovery services vault. */
    vaultName(value: string): az_backup_container_show_command_builder;
}
/**
 * Unregister a Backup Container to make the underlying 'resource' be protected by another vault.
 *
 * Syntax:
 * ```
 * az backup container unregister --container-name
 *                                [--backup-management-type {AzureIaasVM, AzureStorage, AzureWorkload}]
 *                                [--ids]
 *                                [--resource-group]
 *                                [--subscription]
 *                                [--vault-name]
 *                                [--yes]
 * ```
 *
 * @param {string} containerName Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required.
 */
declare class az_backup_container_unregister_command_builder extends CommandBuilder<az_backup_container_unregister_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, containerName: string);
    /** Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required. */
    containerName(value: string): az_backup_container_unregister_command_builder;
    /** Specifiy the backup management type. Define how Azure Backup manages the backup of entities within the ARM resource. For eg: AzureWorkloads refers to workloads installed within Azure VMs, AzureStorage refers to entities within Storage account. Required only if friendly name is used as Container name. */
    backupManagementType(value: 'AzureIaasVM' | 'AzureStorage' | 'AzureWorkload'): az_backup_container_unregister_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_backup_container_unregister_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_backup_container_unregister_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_backup_container_unregister_command_builder;
    /** Name of the Recovery services vault. */
    vaultName(value: string): az_backup_container_unregister_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_backup_container_unregister_command_builder;
}
/**
 * List all backed up items within a container.
 *
 * Syntax:
 * ```
 * az backup item list --resource-group
 *                     --vault-name
 *                     [--backup-management-type {AzureIaasVM, AzureStorage, AzureWorkload, MAB}]
 *                     [--container-name]
 *                     [--query-examples]
 *                     [--subscription]
 *                     [--workload-type {AzureFileShare, MSSQL, SAPHANA, SAPHanaDatabase, SQLDataBase, VM}]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} vaultName Name of the Recovery services vault.
 */
declare class az_backup_item_list_command_builder extends CommandBuilder<az_backup_item_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, resourceGroup: string, vaultName: string);
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_backup_item_list_command_builder;
    /** Name of the Recovery services vault. */
    vaultName(value: string): az_backup_item_list_command_builder;
    /** Specifiy the backup management type. Define how Azure Backup manages the backup of entities within the ARM resource. For eg: AzureWorkloads refers to workloads installed within Azure VMs, AzureStorage refers to entities within Storage account. Required only if friendly name is used as Container name. */
    backupManagementType(value: 'AzureIaasVM' | 'AzureStorage' | 'AzureWorkload' | 'MAB'): az_backup_item_list_command_builder;
    /** Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required. */
    containerName(value: string): az_backup_item_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_backup_item_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_backup_item_list_command_builder;
    /** Specifiy the type of applications within the Resource which should be discovered and protected by Azure Backup. */
    workloadType(value: 'AzureFileShare' | 'MSSQL' | 'SAPHANA' | 'SAPHanaDatabase' | 'SQLDataBase' | 'VM'): az_backup_item_list_command_builder;
}
/**
 * Update the policy associated with this item. Use this to change policies of the backup item.
 *
 * Syntax:
 * ```
 * az backup item set-policy --container-name
 *                           --policy-name
 *                           [--backup-management-type]
 *                           [--ids]
 *                           [--name]
 *                           [--resource-group]
 *                           [--subscription]
 *                           [--vault-name]
 *                           [--workload-type {AzureFileShare, MSSQL, SAPHANA, SAPHanaDatabase, SQLDataBase, VM}]
 * ```
 *
 * @param {string} containerName Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required.
 * @param {string} policyName Name of the Backup policy. You can use the backup policy list command to get the name of a backup policy.
 */
declare class az_backup_item_set_policy_command_builder extends CommandBuilder<az_backup_item_set_policy_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, containerName: string, policyName: string);
    /** Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required. */
    containerName(value: string): az_backup_item_set_policy_command_builder;
    /** Name of the Backup policy. You can use the backup policy list command to get the name of a backup policy. */
    policyName(value: string): az_backup_item_set_policy_command_builder;
    /** Specifiy the backup management type. Define how Azure Backup manages the backup of entities within the ARM resource. For eg: AzureWorkloads refers to workloads installed within Azure VMs, AzureStorage refers to entities within Storage account. Required only if friendly name is used as Container name. */
    backupManagementType(value: string): az_backup_item_set_policy_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_backup_item_set_policy_command_builder;
    /** Name of the backed up item. You can use the backup item list command to get the name of a backed up item. */
    name(value: string): az_backup_item_set_policy_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_backup_item_set_policy_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_backup_item_set_policy_command_builder;
    /** Name of the Recovery services vault. */
    vaultName(value: string): az_backup_item_set_policy_command_builder;
    /** Specifiy the type of applications within the Resource which should be discovered and protected by Azure Backup. */
    workloadType(value: 'AzureFileShare' | 'MSSQL' | 'SAPHANA' | 'SAPHanaDatabase' | 'SQLDataBase' | 'VM'): az_backup_item_set_policy_command_builder;
}
/**
 * Show details of a particular backed up item.
 *
 * Syntax:
 * ```
 * az backup item show --container-name
 *                     --name
 *                     [--backup-management-type {AzureIaasVM, AzureStorage, AzureWorkload}]
 *                     [--ids]
 *                     [--query-examples]
 *                     [--resource-group]
 *                     [--subscription]
 *                     [--vault-name]
 *                     [--workload-type {AzureFileShare, MSSQL, SAPHANA, SAPHanaDatabase, SQLDataBase, VM}]
 * ```
 *
 * @param {string} containerName Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required.
 * @param {string} name Name of the backed up item. You can use the backup item list command to get the name of a backed up item.
 */
declare class az_backup_item_show_command_builder extends CommandBuilder<az_backup_item_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, containerName: string, name: string);
    /** Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required. */
    containerName(value: string): az_backup_item_show_command_builder;
    /** Name of the backed up item. You can use the backup item list command to get the name of a backed up item. */
    name(value: string): az_backup_item_show_command_builder;
    /** Specifiy the backup management type. Define how Azure Backup manages the backup of entities within the ARM resource. For eg: AzureWorkloads refers to workloads installed within Azure VMs, AzureStorage refers to entities within Storage account. Required only if friendly name is used as Container name. */
    backupManagementType(value: 'AzureIaasVM' | 'AzureStorage' | 'AzureWorkload'): az_backup_item_show_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_backup_item_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_backup_item_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_backup_item_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_backup_item_show_command_builder;
    /** Name of the Recovery services vault. */
    vaultName(value: string): az_backup_item_show_command_builder;
    /** Specifiy the type of applications within the Resource which should be discovered and protected by Azure Backup. */
    workloadType(value: 'AzureFileShare' | 'MSSQL' | 'SAPHANA' | 'SAPHanaDatabase' | 'SQLDataBase' | 'VM'): az_backup_item_show_command_builder;
}
/**
 * List all backup jobs of a Recovery Services vault.
 *
 * Syntax:
 * ```
 * az backup job list --resource-group
 *                    --vault-name
 *                    [--end-date]
 *                    [--operation {Backup, ConfigureBackup, DeleteBackupData, DisableBackup, Restore}]
 *                    [--query-examples]
 *                    [--start-date]
 *                    [--status {Cancelled, Completed, CompletedWithWarnings, Failed, InProgress}]
 *                    [--subscription]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} vaultName Name of the Recovery services vault.
 */
declare class az_backup_job_list_command_builder extends CommandBuilder<az_backup_job_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, resourceGroup: string, vaultName: string);
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_backup_job_list_command_builder;
    /** Name of the Recovery services vault. */
    vaultName(value: string): az_backup_job_list_command_builder;
    /** The end date of the range in UTC (d-m-Y). */
    endDate(value: string): az_backup_job_list_command_builder;
    /** User initiated operation. */
    operation(value: 'Backup' | 'ConfigureBackup' | 'DeleteBackupData' | 'DisableBackup' | 'Restore'): az_backup_job_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_backup_job_list_command_builder;
    /** The start date of the range in UTC (d-m-Y). */
    startDate(value: string): az_backup_job_list_command_builder;
    /** Status of the Job. */
    status(value: 'Cancelled' | 'Completed' | 'CompletedWithWarnings' | 'Failed' | 'InProgress'): az_backup_job_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_backup_job_list_command_builder;
}
/**
 * Show details of a particular job.
 *
 * Syntax:
 * ```
 * az backup job show --name
 *                    [--ids]
 *                    [--query-examples]
 *                    [--resource-group]
 *                    [--subscription]
 *                    [--vault-name]
 * ```
 *
 * @param {string} name Name of the job. You can use the backup job list command to get the name of a job.
 */
declare class az_backup_job_show_command_builder extends CommandBuilder<az_backup_job_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** Name of the job. You can use the backup job list command to get the name of a job. */
    name(value: string): az_backup_job_show_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_backup_job_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_backup_job_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_backup_job_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_backup_job_show_command_builder;
    /** Name of the Recovery services vault. */
    vaultName(value: string): az_backup_job_show_command_builder;
}
/**
 * Suspend or terminate a currently running job.
 *
 * Syntax:
 * ```
 * az backup job stop --name
 *                    [--ids]
 *                    [--resource-group]
 *                    [--subscription]
 *                    [--vault-name]
 * ```
 *
 * @param {string} name Name of the job. You can use the backup job list command to get the name of a job.
 */
declare class az_backup_job_stop_command_builder extends CommandBuilder<az_backup_job_stop_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** Name of the job. You can use the backup job list command to get the name of a job. */
    name(value: string): az_backup_job_stop_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_backup_job_stop_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_backup_job_stop_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_backup_job_stop_command_builder;
    /** Name of the Recovery services vault. */
    vaultName(value: string): az_backup_job_stop_command_builder;
}
/**
 * Wait until either the job completes or the specified timeout value is reached.
 *
 * Syntax:
 * ```
 * az backup job wait --name
 *                    [--ids]
 *                    [--resource-group]
 *                    [--subscription]
 *                    [--timeout]
 *                    [--vault-name]
 * ```
 *
 * @param {string} name Name of the job. You can use the backup job list command to get the name of a job.
 */
declare class az_backup_job_wait_command_builder extends CommandBuilder<az_backup_job_wait_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** Name of the job. You can use the backup job list command to get the name of a job. */
    name(value: string): az_backup_job_wait_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_backup_job_wait_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_backup_job_wait_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_backup_job_wait_command_builder;
    /** Maximum time, in seconds, to wait before aborting. */
    timeout(value: string): az_backup_job_wait_command_builder;
    /** Name of the Recovery services vault. */
    vaultName(value: string): az_backup_job_wait_command_builder;
}
/**
 * Create a new policy for the given BackupManagementType and workloadType.
 *
 * Syntax:
 * ```
 * az backup policy create --backup-management-type {AzureIaasVM, AzureStorage, AzureWorkload}
 *                         --name
 *                         --policy
 *                         --resource-group
 *                         --vault-name
 *                         [--subscription]
 *                         [--workload-type {AzureFileShare, MSSQL, SAPHANA, SAPHanaDatabase, SQLDataBase, VM}]
 * ```
 *
 * @param {'AzureIaasVM' | 'AzureStorage' | 'AzureWorkload'} backupManagementType Specifiy the backup management type. Define how Azure Backup manages the backup of entities within the ARM resource. For eg: AzureWorkloads refers to workloads installed within Azure VMs, AzureStorage refers to entities within Storage account. Required only if friendly name is used as Container name.
 * @param {string} name Name of the Policy.
 * @param {string} policy JSON encoded policy definition. Use the show command with JSON output to obtain a policy object. Modify the values using a file editor and pass the object.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} vaultName Name of the Recovery services vault.
 */
declare class az_backup_policy_create_command_builder extends CommandBuilder<az_backup_policy_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, backupManagementType: 'AzureIaasVM' | 'AzureStorage' | 'AzureWorkload', name: string, policy: string, resourceGroup: string, vaultName: string);
    /** Specifiy the backup management type. Define how Azure Backup manages the backup of entities within the ARM resource. For eg: AzureWorkloads refers to workloads installed within Azure VMs, AzureStorage refers to entities within Storage account. Required only if friendly name is used as Container name. */
    backupManagementType(value: 'AzureIaasVM' | 'AzureStorage' | 'AzureWorkload'): az_backup_policy_create_command_builder;
    /** Name of the Policy. */
    name(value: string): az_backup_policy_create_command_builder;
    /** JSON encoded policy definition. Use the show command with JSON output to obtain a policy object. Modify the values using a file editor and pass the object. */
    policy(value: string): az_backup_policy_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_backup_policy_create_command_builder;
    /** Name of the Recovery services vault. */
    vaultName(value: string): az_backup_policy_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_backup_policy_create_command_builder;
    /** Specifiy the type of applications within the Resource which should be discovered and protected by Azure Backup. */
    workloadType(value: 'AzureFileShare' | 'MSSQL' | 'SAPHANA' | 'SAPHanaDatabase' | 'SQLDataBase' | 'VM'): az_backup_policy_create_command_builder;
}
/**
 * Delete a backup policy which doesn't have any associated backup items.
 *
 * Syntax:
 * ```
 * az backup policy delete --name
 *                         [--ids]
 *                         [--resource-group]
 *                         [--subscription]
 *                         [--vault-name]
 * ```
 *
 * @param {string} name Name of the backup policy. You can use the backup policy list command to get the name of a policy.
 */
declare class az_backup_policy_delete_command_builder extends CommandBuilder<az_backup_policy_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** Name of the backup policy. You can use the backup policy list command to get the name of a policy. */
    name(value: string): az_backup_policy_delete_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_backup_policy_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_backup_policy_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_backup_policy_delete_command_builder;
    /** Name of the Recovery services vault. */
    vaultName(value: string): az_backup_policy_delete_command_builder;
}
/**
 * Get the default policy with default values to backup a VM.
 *
 * Syntax:
 * ```
 * az backup policy get-default-for-vm [--ids]
 *                                     [--resource-group]
 *                                     [--subscription]
 *                                     [--vault-name]
 * ```
 */
declare class az_backup_policy_get_default_for_vm_command_builder extends CommandBuilder<az_backup_policy_get_default_for_vm_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_backup_policy_get_default_for_vm_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_backup_policy_get_default_for_vm_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_backup_policy_get_default_for_vm_command_builder;
    /** Name of the Recovery services vault. */
    vaultName(value: string): az_backup_policy_get_default_for_vm_command_builder;
}
/**
 * List all policies for a Recovery services vault.
 *
 * Syntax:
 * ```
 * az backup policy list --resource-group
 *                       --vault-name
 *                       [--backup-management-type {AzureIaasVM, AzureStorage, AzureWorkload}]
 *                       [--query-examples]
 *                       [--subscription]
 *                       [--workload-type {AzureFileShare, MSSQL, SAPHANA, SAPHanaDatabase, SQLDataBase, VM}]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} vaultName Name of the Recovery services vault.
 */
declare class az_backup_policy_list_command_builder extends CommandBuilder<az_backup_policy_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, resourceGroup: string, vaultName: string);
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_backup_policy_list_command_builder;
    /** Name of the Recovery services vault. */
    vaultName(value: string): az_backup_policy_list_command_builder;
    /** Specifiy the backup management type. Define how Azure Backup manages the backup of entities within the ARM resource. For eg: AzureWorkloads refers to workloads installed within Azure VMs, AzureStorage refers to entities within Storage account. Required only if friendly name is used as Container name. */
    backupManagementType(value: 'AzureIaasVM' | 'AzureStorage' | 'AzureWorkload'): az_backup_policy_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_backup_policy_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_backup_policy_list_command_builder;
    /** Specifiy the type of applications within the Resource which should be discovered and protected by Azure Backup. */
    workloadType(value: 'AzureFileShare' | 'MSSQL' | 'SAPHANA' | 'SAPHanaDatabase' | 'SQLDataBase' | 'VM'): az_backup_policy_list_command_builder;
}
/**
 * List all items protected by a backup policy.
 *
 * Syntax:
 * ```
 * az backup policy list-associated-items --name
 *                                        [--backup-management-type {AzureIaasVM, AzureStorage, AzureWorkload}]
 *                                        [--ids]
 *                                        [--resource-group]
 *                                        [--subscription]
 *                                        [--vault-name]
 * ```
 *
 * @param {string} name Name of the backup policy. You can use the backup policy list command to get the name of a policy.
 */
declare class az_backup_policy_list_associated_items_command_builder extends CommandBuilder<az_backup_policy_list_associated_items_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** Name of the backup policy. You can use the backup policy list command to get the name of a policy. */
    name(value: string): az_backup_policy_list_associated_items_command_builder;
    /** Specifiy the backup management type. Define how Azure Backup manages the backup of entities within the ARM resource. For eg: AzureWorkloads refers to workloads installed within Azure VMs, AzureStorage refers to entities within Storage account. Required only if friendly name is used as Container name. */
    backupManagementType(value: 'AzureIaasVM' | 'AzureStorage' | 'AzureWorkload'): az_backup_policy_list_associated_items_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_backup_policy_list_associated_items_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_backup_policy_list_associated_items_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_backup_policy_list_associated_items_command_builder;
    /** Name of the Recovery services vault. */
    vaultName(value: string): az_backup_policy_list_associated_items_command_builder;
}
/**
 * Update the existing policy with the provided details.
 *
 * Syntax:
 * ```
 * az backup policy set [--backup-management-type {AzureIaasVM, AzureStorage, AzureWorkload}]
 *                      [--fix-for-inconsistent-items {false, true}]
 *                      [--ids]
 *                      [--name]
 *                      [--policy]
 *                      [--resource-group]
 *                      [--subscription]
 *                      [--vault-name]
 * ```
 */
declare class az_backup_policy_set_command_builder extends CommandBuilder<az_backup_policy_set_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Specifiy the backup management type. Define how Azure Backup manages the backup of entities within the ARM resource. For eg: AzureWorkloads refers to workloads installed within Azure VMs, AzureStorage refers to entities within Storage account. Required only if friendly name is used as Container name. */
    backupManagementType(value: 'AzureIaasVM' | 'AzureStorage' | 'AzureWorkload'): az_backup_policy_set_command_builder;
    /** Specify whether or not to retry Policy Update for failed items. */
    fixForInconsistentItems(value: boolean): az_backup_policy_set_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_backup_policy_set_command_builder;
    /** Name of the Policy. */
    name(value: string): az_backup_policy_set_command_builder;
    /** JSON encoded policy definition. Use the show command with JSON output to obtain a policy object. Modify the values using a file editor and pass the object. */
    policy(value: string): az_backup_policy_set_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_backup_policy_set_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_backup_policy_set_command_builder;
    /** Name of the Recovery services vault. */
    vaultName(value: string): az_backup_policy_set_command_builder;
}
/**
 * Show details of a particular policy.
 *
 * Syntax:
 * ```
 * az backup policy show --name
 *                       [--ids]
 *                       [--query-examples]
 *                       [--resource-group]
 *                       [--subscription]
 *                       [--vault-name]
 * ```
 *
 * @param {string} name Name of the backup policy. You can use the backup policy list command to get the name of a policy.
 */
declare class az_backup_policy_show_command_builder extends CommandBuilder<az_backup_policy_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string);
    /** Name of the backup policy. You can use the backup policy list command to get the name of a policy. */
    name(value: string): az_backup_policy_show_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_backup_policy_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_backup_policy_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_backup_policy_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_backup_policy_show_command_builder;
    /** Name of the Recovery services vault. */
    vaultName(value: string): az_backup_policy_show_command_builder;
}
/**
 * Trigger the discovery of any unprotected items of the given workload type in the given container.
 *
 * Syntax:
 * ```
 * az backup protectable-item initialize --container-name
 *                                       --resource-group
 *                                       --vault-name
 *                                       --workload-type {AzureFileShare, MSSQL, SAPHANA, SAPHanaDatabase, SQLDataBase, VM}
 *                                       [--subscription]
 * ```
 *
 * @param {string} containerName Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} vaultName Name of the Recovery services vault.
 * @param {'AzureFileShare' | 'MSSQL' | 'SAPHANA' | 'SAPHanaDatabase' | 'SQLDataBase' | 'VM'} workloadType Specifiy the type of applications within the Resource which should be discovered and protected by Azure Backup.
 */
declare class az_backup_protectable_item_initialize_command_builder extends CommandBuilder<az_backup_protectable_item_initialize_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, containerName: string, resourceGroup: string, vaultName: string, workloadType: 'AzureFileShare' | 'MSSQL' | 'SAPHANA' | 'SAPHanaDatabase' | 'SQLDataBase' | 'VM');
    /** Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required. */
    containerName(value: string): az_backup_protectable_item_initialize_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_backup_protectable_item_initialize_command_builder;
    /** Name of the Recovery services vault. */
    vaultName(value: string): az_backup_protectable_item_initialize_command_builder;
    /** Specifiy the type of applications within the Resource which should be discovered and protected by Azure Backup. */
    workloadType(value: 'AzureFileShare' | 'MSSQL' | 'SAPHANA' | 'SAPHanaDatabase' | 'SQLDataBase' | 'VM'): az_backup_protectable_item_initialize_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_backup_protectable_item_initialize_command_builder;
}
/**
 * Retrieve all protectable items within a certain container or across all registered containers.
 *
 * Syntax:
 * ```
 * az backup protectable-item list --resource-group
 *                                 --vault-name
 *                                 --workload-type {AzureFileShare, MSSQL, SAPHANA, SAPHanaDatabase, SQLDataBase, VM}
 *                                 [--container-name]
 *                                 [--query-examples]
 *                                 [--subscription]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} vaultName Name of the Recovery services vault.
 * @param {'AzureFileShare' | 'MSSQL' | 'SAPHANA' | 'SAPHanaDatabase' | 'SQLDataBase' | 'VM'} workloadType Specifiy the type of applications within the Resource which should be discovered and protected by Azure Backup.
 */
declare class az_backup_protectable_item_list_command_builder extends CommandBuilder<az_backup_protectable_item_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, resourceGroup: string, vaultName: string, workloadType: 'AzureFileShare' | 'MSSQL' | 'SAPHANA' | 'SAPHanaDatabase' | 'SQLDataBase' | 'VM');
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_backup_protectable_item_list_command_builder;
    /** Name of the Recovery services vault. */
    vaultName(value: string): az_backup_protectable_item_list_command_builder;
    /** Specifiy the type of applications within the Resource which should be discovered and protected by Azure Backup. */
    workloadType(value: 'AzureFileShare' | 'MSSQL' | 'SAPHANA' | 'SAPHanaDatabase' | 'SQLDataBase' | 'VM'): az_backup_protectable_item_list_command_builder;
    /** Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required. */
    containerName(value: string): az_backup_protectable_item_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_backup_protectable_item_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_backup_protectable_item_list_command_builder;
}
/**
 * Retrieve the specified protectable item within the given container.
 *
 * Syntax:
 * ```
 * az backup protectable-item show --name
 *                                 --protectable-item-type {HANAInstance, SAPHanaDatabase, SAPHanaSystem, SQLAG, SQLDatabase, SQLInstance}
 *                                 --resource-group
 *                                 --server-name
 *                                 --vault-name
 *                                 --workload-type {AzureFileShare, MSSQL, SAPHANA, SAPHanaDatabase, SQLDataBase, VM}
 *                                 [--query-examples]
 *                                 [--subscription]
 * ```
 *
 * @param {string} name Name of the protectable item.
 * @param {'HANAInstance' | 'SAPHanaDatabase' | 'SAPHanaSystem' | 'SQLAG' | 'SQLDatabase' | 'SQLInstance'} protectableItemType Specifiy the type of applications within the Resource which should be discovered and protected by Azure Backup.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serverName Parent Server name of the item.
 * @param {string} vaultName Name of the Recovery services vault.
 * @param {'AzureFileShare' | 'MSSQL' | 'SAPHANA' | 'SAPHanaDatabase' | 'SQLDataBase' | 'VM'} workloadType Specifiy the type of applications within the Resource which should be discovered and protected by Azure Backup.
 */
declare class az_backup_protectable_item_show_command_builder extends CommandBuilder<az_backup_protectable_item_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, protectableItemType: 'HANAInstance' | 'SAPHanaDatabase' | 'SAPHanaSystem' | 'SQLAG' | 'SQLDatabase' | 'SQLInstance', resourceGroup: string, serverName: string, vaultName: string, workloadType: 'AzureFileShare' | 'MSSQL' | 'SAPHANA' | 'SAPHanaDatabase' | 'SQLDataBase' | 'VM');
    /** Name of the protectable item. */
    name(value: string): az_backup_protectable_item_show_command_builder;
    /** Specifiy the type of applications within the Resource which should be discovered and protected by Azure Backup. */
    protectableItemType(value: 'HANAInstance' | 'SAPHanaDatabase' | 'SAPHanaSystem' | 'SQLAG' | 'SQLDatabase' | 'SQLInstance'): az_backup_protectable_item_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_backup_protectable_item_show_command_builder;
    /** Parent Server name of the item. */
    serverName(value: string): az_backup_protectable_item_show_command_builder;
    /** Name of the Recovery services vault. */
    vaultName(value: string): az_backup_protectable_item_show_command_builder;
    /** Specifiy the type of applications within the Resource which should be discovered and protected by Azure Backup. */
    workloadType(value: 'AzureFileShare' | 'MSSQL' | 'SAPHANA' | 'SAPHanaDatabase' | 'SQLDataBase' | 'VM'): az_backup_protectable_item_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_backup_protectable_item_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_backup_protectable_item_show_command_builder;
}
/**
 * Disable auto-protection for the specified item.
 *
 * Syntax:
 * ```
 * az backup protection auto-disable-for-azurewl --item-name
 *                                               [--ids]
 *                                               [--resource-group]
 *                                               [--subscription]
 *                                               [--vault-name]
 * ```
 *
 * @param {string} itemName Name of the backed up item.
 */
declare class az_backup_protection_auto_disable_for_azurewl_command_builder extends CommandBuilder<az_backup_protection_auto_disable_for_azurewl_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, itemName: string);
    /** Name of the backed up item. */
    itemName(value: string): az_backup_protection_auto_disable_for_azurewl_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_backup_protection_auto_disable_for_azurewl_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_backup_protection_auto_disable_for_azurewl_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_backup_protection_auto_disable_for_azurewl_command_builder;
    /** Name of the Recovery services vault. */
    vaultName(value: string): az_backup_protection_auto_disable_for_azurewl_command_builder;
}
/**
 * Automatically protect all existing unprotected DBs and any DB which will be added later with the given policy.
 *
 * Syntax:
 * ```
 * az backup protection auto-enable-for-azurewl --policy-name
 *                                              --protectable-item-name
 *                                              --protectable-item-type {HANAInstance, SAPHanaDatabase, SAPHanaSystem, SQLAG, SQLDatabase, SQLInstance}
 *                                              --server-name
 *                                              --workload-type {AzureFileShare, MSSQL, SAPHANA, SAPHanaDatabase, SQLDataBase, VM}
 *                                              [--ids]
 *                                              [--resource-group]
 *                                              [--subscription]
 *                                              [--vault-name]
 * ```
 *
 * @param {string} policyName Name of the backup policy.
 * @param {string} protectableItemName Specify the resource name to be protected by Azure Backup service.
 * @param {'HANAInstance' | 'SAPHanaDatabase' | 'SAPHanaSystem' | 'SQLAG' | 'SQLDatabase' | 'SQLInstance'} protectableItemType Specifiy the type of applications within the Resource which should be discovered and protected by Azure Backup.
 * @param {string} serverName Parent Server name of the item.
 * @param {'AzureFileShare' | 'MSSQL' | 'SAPHANA' | 'SAPHanaDatabase' | 'SQLDataBase' | 'VM'} workloadType Specifiy the type of applications within the Resource which should be discovered and protected by Azure Backup.
 */
declare class az_backup_protection_auto_enable_for_azurewl_command_builder extends CommandBuilder<az_backup_protection_auto_enable_for_azurewl_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, policyName: string, protectableItemName: string, protectableItemType: 'HANAInstance' | 'SAPHanaDatabase' | 'SAPHanaSystem' | 'SQLAG' | 'SQLDatabase' | 'SQLInstance', serverName: string, workloadType: 'AzureFileShare' | 'MSSQL' | 'SAPHANA' | 'SAPHanaDatabase' | 'SQLDataBase' | 'VM');
    /** Name of the backup policy. */
    policyName(value: string): az_backup_protection_auto_enable_for_azurewl_command_builder;
    /** Specify the resource name to be protected by Azure Backup service. */
    protectableItemName(value: string): az_backup_protection_auto_enable_for_azurewl_command_builder;
    /** Specifiy the type of applications within the Resource which should be discovered and protected by Azure Backup. */
    protectableItemType(value: 'HANAInstance' | 'SAPHanaDatabase' | 'SAPHanaSystem' | 'SQLAG' | 'SQLDatabase' | 'SQLInstance'): az_backup_protection_auto_enable_for_azurewl_command_builder;
    /** Parent Server name of the item. */
    serverName(value: string): az_backup_protection_auto_enable_for_azurewl_command_builder;
    /** Specifiy the type of applications within the Resource which should be discovered and protected by Azure Backup. */
    workloadType(value: 'AzureFileShare' | 'MSSQL' | 'SAPHANA' | 'SAPHanaDatabase' | 'SQLDataBase' | 'VM'): az_backup_protection_auto_enable_for_azurewl_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_backup_protection_auto_enable_for_azurewl_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_backup_protection_auto_enable_for_azurewl_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_backup_protection_auto_enable_for_azurewl_command_builder;
    /** Name of the Recovery services vault. */
    vaultName(value: string): az_backup_protection_auto_enable_for_azurewl_command_builder;
}
/**
 * Perform an on-demand backup of a backed up item.
 *
 * Syntax:
 * ```
 * az backup protection backup-now --item-name
 *                                 [--backup-management-type {AzureIaasVM, AzureStorage, AzureWorkload}]
 *                                 [--backup-type]
 *                                 [--container-name]
 *                                 [--enable-compression {false, true}]
 *                                 [--ids]
 *                                 [--resource-group]
 *                                 [--retain-until]
 *                                 [--subscription]
 *                                 [--vault-name]
 *                                 [--workload-type {AzureFileShare, MSSQL, SAPHANA, SAPHanaDatabase, SQLDataBase, VM}]
 * ```
 *
 * @param {string} itemName Name of the backed up item.
 */
declare class az_backup_protection_backup_now_command_builder extends CommandBuilder<az_backup_protection_backup_now_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, itemName: string);
    /** Name of the backed up item. */
    itemName(value: string): az_backup_protection_backup_now_command_builder;
    /** Specifiy the backup management type. Define how Azure Backup manages the backup of entities within the ARM resource. For eg: AzureWorkloads refers to workloads installed within Azure VMs, AzureStorage refers to entities within Storage account. Required only if friendly name is used as Container name. */
    backupManagementType(value: 'AzureIaasVM' | 'AzureStorage' | 'AzureWorkload'): az_backup_protection_backup_now_command_builder;
    /** 'Full, Differential, Log, Copy-only-full' for backup Item type 'MSSQL'. 'Full, Differential' for backup item type 'SAPHANA'. */
    backupType(value: string): az_backup_protection_backup_now_command_builder;
    /** Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required. */
    containerName(value: string): az_backup_protection_backup_now_command_builder;
    /** Option to enable compression. */
    enableCompression(value: boolean): az_backup_protection_backup_now_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_backup_protection_backup_now_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_backup_protection_backup_now_command_builder;
    /** The date until which this backed up copy will be available for retrieval, in UTC (d-m-Y). For SAPHANA and SQL workload, retain-until parameter value will be overridden by the underlying policy. */
    retainUntil(value: string): az_backup_protection_backup_now_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_backup_protection_backup_now_command_builder;
    /** Name of the Recovery services vault. */
    vaultName(value: string): az_backup_protection_backup_now_command_builder;
    /** Specifiy the type of applications within the Resource which should be discovered and protected by Azure Backup. */
    workloadType(value: 'AzureFileShare' | 'MSSQL' | 'SAPHANA' | 'SAPHanaDatabase' | 'SQLDataBase' | 'VM'): az_backup_protection_backup_now_command_builder;
}
/**
 * Find out whether the virtual machine is protected or not. If protected, it returns the recovery services vault ID, otherwise it returns empty.
 *
 * Syntax:
 * ```
 * az backup protection check-vm --vm-id
 *                               [--subscription]
 * ```
 *
 * @param {string} vmId ID of the virtual machine to be checked for protection.
 */
declare class az_backup_protection_check_vm_command_builder extends CommandBuilder<az_backup_protection_check_vm_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, vmId: string);
    /** ID of the virtual machine to be checked for protection. */
    vmId(value: string): az_backup_protection_check_vm_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_backup_protection_check_vm_command_builder;
}
/**
 * Stop protecting a backed up item. Can retain the backed up data forever or choose to delete it.
 *
 * Syntax:
 * ```
 * az backup protection disable --container-name
 *                              --item-name
 *                              [--backup-management-type {AzureIaasVM, AzureStorage, AzureWorkload}]
 *                              [--delete-backup-data {false, true}]
 *                              [--ids]
 *                              [--resource-group]
 *                              [--subscription]
 *                              [--vault-name]
 *                              [--workload-type {AzureFileShare, MSSQL, SAPHANA, SAPHanaDatabase, SQLDataBase, VM}]
 *                              [--yes]
 * ```
 *
 * @param {string} containerName Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required.
 * @param {string} itemName Name of the backed up item.
 */
declare class az_backup_protection_disable_command_builder extends CommandBuilder<az_backup_protection_disable_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, containerName: string, itemName: string);
    /** Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required. */
    containerName(value: string): az_backup_protection_disable_command_builder;
    /** Name of the backed up item. */
    itemName(value: string): az_backup_protection_disable_command_builder;
    /** Specifiy the backup management type. Define how Azure Backup manages the backup of entities within the ARM resource. For eg: AzureWorkloads refers to workloads installed within Azure VMs, AzureStorage refers to entities within Storage account. Required only if friendly name is used as Container name. */
    backupManagementType(value: 'AzureIaasVM' | 'AzureStorage' | 'AzureWorkload'): az_backup_protection_disable_command_builder;
    /** Option to delete existing backed up data in the Recovery services vault. */
    deleteBackupData(value: boolean): az_backup_protection_disable_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_backup_protection_disable_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_backup_protection_disable_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_backup_protection_disable_command_builder;
    /** Name of the Recovery services vault. */
    vaultName(value: string): az_backup_protection_disable_command_builder;
    /** Specifiy the type of applications within the Resource which should be discovered and protected by Azure Backup. */
    workloadType(value: 'AzureFileShare' | 'MSSQL' | 'SAPHANA' | 'SAPHanaDatabase' | 'SQLDataBase' | 'VM'): az_backup_protection_disable_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_backup_protection_disable_command_builder;
}
/**
 * Start protecting a previously unprotected Azure File share within an Azure Storage account as per the specified policy to a Recovery services vault.
 *
 * Syntax:
 * ```
 * az backup protection enable-for-azurefileshare --azure-file-share
 *                                                --policy-name
 *                                                --storage-account
 *                                                [--ids]
 *                                                [--resource-group]
 *                                                [--subscription]
 *                                                [--vault-name]
 * ```
 *
 * @param {string} azureFileShare Name of the Azure FileShare.
 * @param {string} policyName Name of the backup policy.
 * @param {string} storageAccount Name of the Storage Account of the FileShare.
 */
declare class az_backup_protection_enable_for_azurefileshare_command_builder extends CommandBuilder<az_backup_protection_enable_for_azurefileshare_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, azureFileShare: string, policyName: string, storageAccount: string);
    /** Name of the Azure FileShare. */
    azureFileShare(value: string): az_backup_protection_enable_for_azurefileshare_command_builder;
    /** Name of the backup policy. */
    policyName(value: string): az_backup_protection_enable_for_azurefileshare_command_builder;
    /** Name of the Storage Account of the FileShare. */
    storageAccount(value: string): az_backup_protection_enable_for_azurefileshare_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_backup_protection_enable_for_azurefileshare_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_backup_protection_enable_for_azurefileshare_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_backup_protection_enable_for_azurefileshare_command_builder;
    /** Name of the Recovery services vault. */
    vaultName(value: string): az_backup_protection_enable_for_azurefileshare_command_builder;
}
/**
 * Start protecting a previously unprotected workload within an Azure VM as per the specified policy to a Recovery services vault. Provide the workload details as a protectable item.
 *
 * Syntax:
 * ```
 * az backup protection enable-for-azurewl --policy-name
 *                                         --protectable-item-name
 *                                         --protectable-item-type {HANAInstance, SAPHanaDatabase, SAPHanaSystem, SQLAG, SQLDatabase, SQLInstance}
 *                                         --server-name
 *                                         --workload-type {AzureFileShare, MSSQL, SAPHANA, SAPHanaDatabase, SQLDataBase, VM}
 *                                         [--ids]
 *                                         [--resource-group]
 *                                         [--subscription]
 *                                         [--vault-name]
 * ```
 *
 * @param {string} policyName Name of the backup policy.
 * @param {string} protectableItemName Specify the resource name to be protected by Azure Backup service.
 * @param {'HANAInstance' | 'SAPHanaDatabase' | 'SAPHanaSystem' | 'SQLAG' | 'SQLDatabase' | 'SQLInstance'} protectableItemType Specifiy the type of applications within the Resource which should be discovered and protected by Azure Backup.
 * @param {string} serverName Parent Server name of the item.
 * @param {'AzureFileShare' | 'MSSQL' | 'SAPHANA' | 'SAPHanaDatabase' | 'SQLDataBase' | 'VM'} workloadType Specifiy the type of applications within the Resource which should be discovered and protected by Azure Backup.
 */
declare class az_backup_protection_enable_for_azurewl_command_builder extends CommandBuilder<az_backup_protection_enable_for_azurewl_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, policyName: string, protectableItemName: string, protectableItemType: 'HANAInstance' | 'SAPHanaDatabase' | 'SAPHanaSystem' | 'SQLAG' | 'SQLDatabase' | 'SQLInstance', serverName: string, workloadType: 'AzureFileShare' | 'MSSQL' | 'SAPHANA' | 'SAPHanaDatabase' | 'SQLDataBase' | 'VM');
    /** Name of the backup policy. */
    policyName(value: string): az_backup_protection_enable_for_azurewl_command_builder;
    /** Specify the resource name to be protected by Azure Backup service. */
    protectableItemName(value: string): az_backup_protection_enable_for_azurewl_command_builder;
    /** Specifiy the type of applications within the Resource which should be discovered and protected by Azure Backup. */
    protectableItemType(value: 'HANAInstance' | 'SAPHanaDatabase' | 'SAPHanaSystem' | 'SQLAG' | 'SQLDatabase' | 'SQLInstance'): az_backup_protection_enable_for_azurewl_command_builder;
    /** Parent Server name of the item. */
    serverName(value: string): az_backup_protection_enable_for_azurewl_command_builder;
    /** Specifiy the type of applications within the Resource which should be discovered and protected by Azure Backup. */
    workloadType(value: 'AzureFileShare' | 'MSSQL' | 'SAPHANA' | 'SAPHanaDatabase' | 'SQLDataBase' | 'VM'): az_backup_protection_enable_for_azurewl_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_backup_protection_enable_for_azurewl_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_backup_protection_enable_for_azurewl_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_backup_protection_enable_for_azurewl_command_builder;
    /** Name of the Recovery services vault. */
    vaultName(value: string): az_backup_protection_enable_for_azurewl_command_builder;
}
/**
 * Start protecting a previously unprotected Azure VM as per the specified policy to a Recovery services vault.
 *
 * Syntax:
 * ```
 * az backup protection enable-for-vm --policy-name
 *                                    --vm
 *                                    [--disk-list-setting {exclude, include}]
 *                                    [--diskslist]
 *                                    [--exclude-all-data-disks {false, true}]
 *                                    [--ids]
 *                                    [--resource-group]
 *                                    [--subscription]
 *                                    [--vault-name]
 * ```
 *
 * @param {string} policyName Name of the backup policy.
 * @param {string} vm Name or ID of the Virtual Machine to be protected.
 */
declare class az_backup_protection_enable_for_vm_command_builder extends CommandBuilder<az_backup_protection_enable_for_vm_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, policyName: string, vm: string);
    /** Name of the backup policy. */
    policyName(value: string): az_backup_protection_enable_for_vm_command_builder;
    /** Name or ID of the Virtual Machine to be protected. */
    vm(value: string): az_backup_protection_enable_for_vm_command_builder;
    /** Option to decide whether to include or exclude the disk or reset any previous settings to default behavior. */
    diskListSetting(value: 'exclude' | 'include'): az_backup_protection_enable_for_vm_command_builder;
    /** List of disks to be excluded or included. */
    diskslist(value: string): az_backup_protection_enable_for_vm_command_builder;
    /** Option to specify to backup OS disk only. */
    excludeAllDataDisks(value: boolean): az_backup_protection_enable_for_vm_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_backup_protection_enable_for_vm_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_backup_protection_enable_for_vm_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_backup_protection_enable_for_vm_command_builder;
    /** Name of the Recovery services vault. */
    vaultName(value: string): az_backup_protection_enable_for_vm_command_builder;
}
/**
 * Resume backup for the associated backup item. Use this to change the policy associated with the backup item.
 *
 * Syntax:
 * ```
 * az backup protection resume --container-name
 *                             --item-name
 *                             --policy-name
 *                             [--backup-management-type {AzureIaasVM, AzureStorage, AzureWorkload}]
 *                             [--ids]
 *                             [--resource-group]
 *                             [--subscription]
 *                             [--vault-name]
 *                             [--workload-type {AzureFileShare, MSSQL, SAPHANA, SAPHanaDatabase, SQLDataBase, VM}]
 * ```
 *
 * @param {string} containerName Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required.
 * @param {string} itemName Name of the backed up item.
 * @param {string} policyName Name of the backup policy.
 */
declare class az_backup_protection_resume_command_builder extends CommandBuilder<az_backup_protection_resume_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, containerName: string, itemName: string, policyName: string);
    /** Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required. */
    containerName(value: string): az_backup_protection_resume_command_builder;
    /** Name of the backed up item. */
    itemName(value: string): az_backup_protection_resume_command_builder;
    /** Name of the backup policy. */
    policyName(value: string): az_backup_protection_resume_command_builder;
    /** Specifiy the backup management type. Define how Azure Backup manages the backup of entities within the ARM resource. For eg: AzureWorkloads refers to workloads installed within Azure VMs, AzureStorage refers to entities within Storage account. Required only if friendly name is used as Container name. */
    backupManagementType(value: 'AzureIaasVM' | 'AzureStorage' | 'AzureWorkload'): az_backup_protection_resume_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_backup_protection_resume_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_backup_protection_resume_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_backup_protection_resume_command_builder;
    /** Name of the Recovery services vault. */
    vaultName(value: string): az_backup_protection_resume_command_builder;
    /** Specifiy the type of applications within the Resource which should be discovered and protected by Azure Backup. */
    workloadType(value: 'AzureFileShare' | 'MSSQL' | 'SAPHANA' | 'SAPHanaDatabase' | 'SQLDataBase' | 'VM'): az_backup_protection_resume_command_builder;
}
/**
 * Rehydrate an item from softdeleted state to stop protection with retained data state.
 *
 * Syntax:
 * ```
 * az backup protection undelete --backup-management-type {AzureIaasVM, AzureStorage, AzureWorkload}
 *                               --container-name
 *                               --item-name
 *                               [--ids]
 *                               [--resource-group]
 *                               [--subscription]
 *                               [--vault-name]
 *                               [--workload-type {AzureFileShare, MSSQL, SAPHANA, SAPHanaDatabase, SQLDataBase, VM}]
 * ```
 *
 * @param {'AzureIaasVM' | 'AzureStorage' | 'AzureWorkload'} backupManagementType Specifiy the backup management type. Define how Azure Backup manages the backup of entities within the ARM resource. For eg: AzureWorkloads refers to workloads installed within Azure VMs, AzureStorage refers to entities within Storage account. Required only if friendly name is used as Container name.
 * @param {string} containerName Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required.
 * @param {string} itemName Name of the backed up item.
 */
declare class az_backup_protection_undelete_command_builder extends CommandBuilder<az_backup_protection_undelete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, backupManagementType: 'AzureIaasVM' | 'AzureStorage' | 'AzureWorkload', containerName: string, itemName: string);
    /** Specifiy the backup management type. Define how Azure Backup manages the backup of entities within the ARM resource. For eg: AzureWorkloads refers to workloads installed within Azure VMs, AzureStorage refers to entities within Storage account. Required only if friendly name is used as Container name. */
    backupManagementType(value: 'AzureIaasVM' | 'AzureStorage' | 'AzureWorkload'): az_backup_protection_undelete_command_builder;
    /** Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required. */
    containerName(value: string): az_backup_protection_undelete_command_builder;
    /** Name of the backed up item. */
    itemName(value: string): az_backup_protection_undelete_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_backup_protection_undelete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_backup_protection_undelete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_backup_protection_undelete_command_builder;
    /** Name of the Recovery services vault. */
    vaultName(value: string): az_backup_protection_undelete_command_builder;
    /** Specifiy the type of applications within the Resource which should be discovered and protected by Azure Backup. */
    workloadType(value: 'AzureFileShare' | 'MSSQL' | 'SAPHANA' | 'SAPHanaDatabase' | 'SQLDataBase' | 'VM'): az_backup_protection_undelete_command_builder;
}
/**
 * Update disk exclusion settings associated with a backed up VM item.
 *
 * Syntax:
 * ```
 * az backup protection update-for-vm --container-name
 *                                    --item-name
 *                                    [--disk-list-setting {exclude, include, resetexclusionsettings}]
 *                                    [--diskslist]
 *                                    [--exclude-all-data-disks {false, true}]
 *                                    [--ids]
 *                                    [--resource-group]
 *                                    [--subscription]
 *                                    [--vault-name]
 * ```
 *
 * @param {string} containerName Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required.
 * @param {string} itemName Name of the backed up item.
 */
declare class az_backup_protection_update_for_vm_command_builder extends CommandBuilder<az_backup_protection_update_for_vm_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, containerName: string, itemName: string);
    /** Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required. */
    containerName(value: string): az_backup_protection_update_for_vm_command_builder;
    /** Name of the backed up item. */
    itemName(value: string): az_backup_protection_update_for_vm_command_builder;
    /** Option to decide whether to include or exclude the disk or reset any previous settings to default behavior. */
    diskListSetting(value: 'exclude' | 'include' | 'resetexclusionsettings'): az_backup_protection_update_for_vm_command_builder;
    /** List of disks to be excluded or included. */
    diskslist(value: string): az_backup_protection_update_for_vm_command_builder;
    /** Option to specify to backup OS disk only. */
    excludeAllDataDisks(value: boolean): az_backup_protection_update_for_vm_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_backup_protection_update_for_vm_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_backup_protection_update_for_vm_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_backup_protection_update_for_vm_command_builder;
    /** Name of the Recovery services vault. */
    vaultName(value: string): az_backup_protection_update_for_vm_command_builder;
}
/**
 * Construct the recovery configuration of an Azure workload backed up item.
 *
 * Syntax:
 * ```
 * az backup recoveryconfig show --container-name
 *                               --item-name
 *                               --resource-group
 *                               --restore-mode {AlternateWorkloadRestore, OriginalWorkloadRestore, RestoreAsFiles}
 *                               --vault-name
 *                               [--backup-management-type {AzureIaasVM, AzureStorage, AzureWorkload}]
 *                               [--filepath]
 *                               [--from-full-rp-name]
 *                               [--log-point-in-time]
 *                               [--query-examples]
 *                               [--rp-name]
 *                               [--subscription]
 *                               [--target-container-name]
 *                               [--target-item-name]
 *                               [--target-server-name]
 *                               [--target-server-type {HANAInstance, SAPHanaDatabase, SAPHanaSystem, SQLAG, SQLDatabase, SQLInstance}]
 *                               [--workload-type {AzureFileShare, MSSQL, SAPHANA, SAPHanaDatabase, SQLDataBase, VM}]
 * ```
 *
 * @param {string} containerName Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required.
 * @param {string} itemName Name of the backed up item.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {'AlternateWorkloadRestore' | 'OriginalWorkloadRestore' | 'RestoreAsFiles'} restoreMode Specify the restore mode.
 * @param {string} vaultName Name of the Recovery services vault.
 */
declare class az_backup_recoveryconfig_show_command_builder extends CommandBuilder<az_backup_recoveryconfig_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, containerName: string, itemName: string, resourceGroup: string, restoreMode: 'AlternateWorkloadRestore' | 'OriginalWorkloadRestore' | 'RestoreAsFiles', vaultName: string);
    /** Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required. */
    containerName(value: string): az_backup_recoveryconfig_show_command_builder;
    /** Name of the backed up item. */
    itemName(value: string): az_backup_recoveryconfig_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_backup_recoveryconfig_show_command_builder;
    /** Specify the restore mode. */
    restoreMode(value: 'AlternateWorkloadRestore' | 'OriginalWorkloadRestore' | 'RestoreAsFiles'): az_backup_recoveryconfig_show_command_builder;
    /** Name of the Recovery services vault. */
    vaultName(value: string): az_backup_recoveryconfig_show_command_builder;
    /** Specifiy the backup management type. Define how Azure Backup manages the backup of entities within the ARM resource. For eg: AzureWorkloads refers to workloads installed within Azure VMs, AzureStorage refers to entities within Storage account. Required only if friendly name is used as Container name. */
    backupManagementType(value: 'AzureIaasVM' | 'AzureStorage' | 'AzureWorkload'): az_backup_recoveryconfig_show_command_builder;
    /** The path to which the DB should be restored as files. */
    filepath(value: string): az_backup_recoveryconfig_show_command_builder;
    /** Name of the starting Recovery point. */
    fromFullRpName(value: string): az_backup_recoveryconfig_show_command_builder;
    /** Specify the point-in-time which will be restored. */
    logPointInTime(value: string): az_backup_recoveryconfig_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_backup_recoveryconfig_show_command_builder;
    /** Name of the recovery point. */
    rpName(value: string): az_backup_recoveryconfig_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_backup_recoveryconfig_show_command_builder;
    /** The target container to which the DB recovery point should be downloaded as files. */
    targetContainerName(value: string): az_backup_recoveryconfig_show_command_builder;
    /** Specify the target item name for the restore operation. */
    targetItemName(value: string): az_backup_recoveryconfig_show_command_builder;
    /** Specify the parent server name of the target item. */
    targetServerName(value: string): az_backup_recoveryconfig_show_command_builder;
    /** Specify the type of the server which should be discovered. */
    targetServerType(value: 'HANAInstance' | 'SAPHanaDatabase' | 'SAPHanaSystem' | 'SQLAG' | 'SQLDatabase' | 'SQLInstance'): az_backup_recoveryconfig_show_command_builder;
    /** Specifiy the type of applications within the Resource which should be discovered and protected by Azure Backup. */
    workloadType(value: 'AzureFileShare' | 'MSSQL' | 'SAPHANA' | 'SAPHanaDatabase' | 'SQLDataBase' | 'VM'): az_backup_recoveryconfig_show_command_builder;
}
/**
 * List all recovery points of a backed up item.
 *
 * Syntax:
 * ```
 * az backup recoverypoint list --container-name
 *                              --item-name
 *                              --resource-group
 *                              --vault-name
 *                              [--backup-management-type {AzureIaasVM, AzureStorage, AzureWorkload}]
 *                              [--end-date]
 *                              [--query-examples]
 *                              [--start-date]
 *                              [--subscription]
 *                              [--workload-type {AzureFileShare, MSSQL, SAPHANA, SAPHanaDatabase, SQLDataBase, VM}]
 * ```
 *
 * @param {string} containerName Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required.
 * @param {string} itemName Name of the backed up item.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} vaultName Name of the Recovery services vault.
 */
declare class az_backup_recoverypoint_list_command_builder extends CommandBuilder<az_backup_recoverypoint_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, containerName: string, itemName: string, resourceGroup: string, vaultName: string);
    /** Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required. */
    containerName(value: string): az_backup_recoverypoint_list_command_builder;
    /** Name of the backed up item. */
    itemName(value: string): az_backup_recoverypoint_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_backup_recoverypoint_list_command_builder;
    /** Name of the Recovery services vault. */
    vaultName(value: string): az_backup_recoverypoint_list_command_builder;
    /** Specifiy the backup management type. Define how Azure Backup manages the backup of entities within the ARM resource. For eg: AzureWorkloads refers to workloads installed within Azure VMs, AzureStorage refers to entities within Storage account. Required only if friendly name is used as Container name. */
    backupManagementType(value: 'AzureIaasVM' | 'AzureStorage' | 'AzureWorkload'): az_backup_recoverypoint_list_command_builder;
    /** The end date of the range in UTC (d-m-Y). */
    endDate(value: string): az_backup_recoverypoint_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_backup_recoverypoint_list_command_builder;
    /** The start date of the range in UTC (d-m-Y). */
    startDate(value: string): az_backup_recoverypoint_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_backup_recoverypoint_list_command_builder;
    /** Specifiy the type of applications within the Resource which should be discovered and protected by Azure Backup. */
    workloadType(value: 'AzureFileShare' | 'MSSQL' | 'SAPHANA' | 'SAPHanaDatabase' | 'SQLDataBase' | 'VM'): az_backup_recoverypoint_list_command_builder;
}
/**
 * Shows details of a particular recovery point.
 *
 * Syntax:
 * ```
 * az backup recoverypoint show --container-name
 *                              --item-name
 *                              --name
 *                              [--backup-management-type {AzureIaasVM, AzureStorage, AzureWorkload}]
 *                              [--ids]
 *                              [--query-examples]
 *                              [--resource-group]
 *                              [--subscription]
 *                              [--vault-name]
 *                              [--workload-type {AzureFileShare, MSSQL, SAPHANA, SAPHanaDatabase, SQLDataBase, VM}]
 * ```
 *
 * @param {string} containerName Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required.
 * @param {string} itemName Name of the backed up item.
 * @param {string} name Name of the recovery point. You can use the backup recovery point list command to get the name of a backed up item.
 */
declare class az_backup_recoverypoint_show_command_builder extends CommandBuilder<az_backup_recoverypoint_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, containerName: string, itemName: string, name: string);
    /** Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required. */
    containerName(value: string): az_backup_recoverypoint_show_command_builder;
    /** Name of the backed up item. */
    itemName(value: string): az_backup_recoverypoint_show_command_builder;
    /** Name of the recovery point. You can use the backup recovery point list command to get the name of a backed up item. */
    name(value: string): az_backup_recoverypoint_show_command_builder;
    /** Specifiy the backup management type. Define how Azure Backup manages the backup of entities within the ARM resource. For eg: AzureWorkloads refers to workloads installed within Azure VMs, AzureStorage refers to entities within Storage account. Required only if friendly name is used as Container name. */
    backupManagementType(value: 'AzureIaasVM' | 'AzureStorage' | 'AzureWorkload'): az_backup_recoverypoint_show_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_backup_recoverypoint_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_backup_recoverypoint_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_backup_recoverypoint_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_backup_recoverypoint_show_command_builder;
    /** Name of the Recovery services vault. */
    vaultName(value: string): az_backup_recoverypoint_show_command_builder;
    /** Specifiy the type of applications within the Resource which should be discovered and protected by Azure Backup. */
    workloadType(value: 'AzureFileShare' | 'MSSQL' | 'SAPHANA' | 'SAPHanaDatabase' | 'SQLDataBase' | 'VM'): az_backup_recoverypoint_show_command_builder;
}
/**
 * List the start and end points of the unbroken log chain(s) of the given backup item.
 *
 * Syntax:
 * ```
 * az backup recoverypoint show-log-chain --container-name
 *                                        --item-name
 *                                        --resource-group
 *                                        --vault-name
 *                                        [--backup-management-type {AzureIaasVM, AzureStorage, AzureWorkload}]
 *                                        [--end-date]
 *                                        [--start-date]
 *                                        [--subscription]
 *                                        [--workload-type {AzureFileShare, MSSQL, SAPHANA, SAPHanaDatabase, SQLDataBase, VM}]
 * ```
 *
 * @param {string} containerName Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required.
 * @param {string} itemName Name of the backed up item.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} vaultName Name of the Recovery services vault.
 */
declare class az_backup_recoverypoint_show_log_chain_command_builder extends CommandBuilder<az_backup_recoverypoint_show_log_chain_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, containerName: string, itemName: string, resourceGroup: string, vaultName: string);
    /** Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required. */
    containerName(value: string): az_backup_recoverypoint_show_log_chain_command_builder;
    /** Name of the backed up item. */
    itemName(value: string): az_backup_recoverypoint_show_log_chain_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_backup_recoverypoint_show_log_chain_command_builder;
    /** Name of the Recovery services vault. */
    vaultName(value: string): az_backup_recoverypoint_show_log_chain_command_builder;
    /** Specifiy the backup management type. Define how Azure Backup manages the backup of entities within the ARM resource. For eg: AzureWorkloads refers to workloads installed within Azure VMs, AzureStorage refers to entities within Storage account. Required only if friendly name is used as Container name. */
    backupManagementType(value: 'AzureIaasVM' | 'AzureStorage' | 'AzureWorkload'): az_backup_recoverypoint_show_log_chain_command_builder;
    /** The end date of the range in UTC (d-m-Y). */
    endDate(value: string): az_backup_recoverypoint_show_log_chain_command_builder;
    /** The start date of the range in UTC (d-m-Y). */
    startDate(value: string): az_backup_recoverypoint_show_log_chain_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_backup_recoverypoint_show_log_chain_command_builder;
    /** Specifiy the type of applications within the Resource which should be discovered and protected by Azure Backup. */
    workloadType(value: 'AzureFileShare' | 'MSSQL' | 'SAPHANA' | 'SAPHanaDatabase' | 'SQLDataBase' | 'VM'): az_backup_recoverypoint_show_log_chain_command_builder;
}
/**
 * Download a script which mounts files of a recovery point.
 *
 * Syntax:
 * ```
 * az backup restore files mount-rp --container-name
 *                                  --item-name
 *                                  --rp-name
 *                                  [--ids]
 *                                  [--resource-group]
 *                                  [--subscription]
 *                                  [--vault-name]
 * ```
 *
 * @param {string} containerName Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required.
 * @param {string} itemName Name of the backed up item.
 * @param {string} rpName Name of the recovery point.
 */
declare class az_backup_restore_files_mount_rp_command_builder extends CommandBuilder<az_backup_restore_files_mount_rp_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, containerName: string, itemName: string, rpName: string);
    /** Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required. */
    containerName(value: string): az_backup_restore_files_mount_rp_command_builder;
    /** Name of the backed up item. */
    itemName(value: string): az_backup_restore_files_mount_rp_command_builder;
    /** Name of the recovery point. */
    rpName(value: string): az_backup_restore_files_mount_rp_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_backup_restore_files_mount_rp_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_backup_restore_files_mount_rp_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_backup_restore_files_mount_rp_command_builder;
    /** Name of the Recovery services vault. */
    vaultName(value: string): az_backup_restore_files_mount_rp_command_builder;
}
/**
 * Close access to the recovery point.
 *
 * Syntax:
 * ```
 * az backup restore files unmount-rp --container-name
 *                                    --item-name
 *                                    --rp-name
 *                                    [--ids]
 *                                    [--resource-group]
 *                                    [--subscription]
 *                                    [--vault-name]
 * ```
 *
 * @param {string} containerName Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required.
 * @param {string} itemName Name of the backed up item.
 * @param {string} rpName Name of the recovery point.
 */
declare class az_backup_restore_files_unmount_rp_command_builder extends CommandBuilder<az_backup_restore_files_unmount_rp_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, containerName: string, itemName: string, rpName: string);
    /** Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required. */
    containerName(value: string): az_backup_restore_files_unmount_rp_command_builder;
    /** Name of the backed up item. */
    itemName(value: string): az_backup_restore_files_unmount_rp_command_builder;
    /** Name of the recovery point. */
    rpName(value: string): az_backup_restore_files_unmount_rp_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_backup_restore_files_unmount_rp_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_backup_restore_files_unmount_rp_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_backup_restore_files_unmount_rp_command_builder;
    /** Name of the Recovery services vault. */
    vaultName(value: string): az_backup_restore_files_unmount_rp_command_builder;
}
/**
 * Restore backed up Azure files within a file-share to the same file-share or another file-share in registered storage accounts.
 *
 * Syntax:
 * ```
 * az backup restore restore-azurefiles --container-name
 *                                      --item-name
 *                                      --resolve-conflict {Overwrite, Skip}
 *                                      --restore-mode {AlternateLocation, OriginalLocation}
 *                                      --rp-name
 *                                      [--ids]
 *                                      [--resource-group]
 *                                      [--source-file-path]
 *                                      [--source-file-type {Directory, File}]
 *                                      [--subscription]
 *                                      [--target-file-share]
 *                                      [--target-folder]
 *                                      [--target-storage-account]
 *                                      [--vault-name]
 * ```
 *
 * @param {string} containerName Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required.
 * @param {string} itemName Name of the backed up item.
 * @param {'Overwrite' | 'Skip'} resolveConflict Instruction if there's a conflict with the restored data.
 * @param {'AlternateLocation' | 'OriginalLocation'} restoreMode Specify the restore mode.
 * @param {string} rpName Name of the recovery point.
 */
declare class az_backup_restore_restore_azurefiles_command_builder extends CommandBuilder<az_backup_restore_restore_azurefiles_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, containerName: string, itemName: string, resolveConflict: 'Overwrite' | 'Skip', restoreMode: 'AlternateLocation' | 'OriginalLocation', rpName: string);
    /** Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required. */
    containerName(value: string): az_backup_restore_restore_azurefiles_command_builder;
    /** Name of the backed up item. */
    itemName(value: string): az_backup_restore_restore_azurefiles_command_builder;
    /** Instruction if there's a conflict with the restored data. */
    resolveConflict(value: 'Overwrite' | 'Skip'): az_backup_restore_restore_azurefiles_command_builder;
    /** Specify the restore mode. */
    restoreMode(value: 'AlternateLocation' | 'OriginalLocation'): az_backup_restore_restore_azurefiles_command_builder;
    /** Name of the recovery point. */
    rpName(value: string): az_backup_restore_restore_azurefiles_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_backup_restore_restore_azurefiles_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_backup_restore_restore_azurefiles_command_builder;
    /** The absolute path of the file, to be restored within the file share, as a string. This path is the same path used in the 'az storage file download' or 'az storage file show' CLI commands. */
    sourceFilePath(value: string): az_backup_restore_restore_azurefiles_command_builder;
    /** Specify the source file type to be selected. */
    sourceFileType(value: 'Directory' | 'File'): az_backup_restore_restore_azurefiles_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_backup_restore_restore_azurefiles_command_builder;
    /** Destination file share to which content will be restored. */
    targetFileShare(value: string): az_backup_restore_restore_azurefiles_command_builder;
    /** Destination folder to which content will be restored. To restore content to root , leave the folder name empty. */
    targetFolder(value: string): az_backup_restore_restore_azurefiles_command_builder;
    /** Destination storage account to which content will be restored. */
    targetStorageAccount(value: string): az_backup_restore_restore_azurefiles_command_builder;
    /** Name of the Recovery services vault. */
    vaultName(value: string): az_backup_restore_restore_azurefiles_command_builder;
}
/**
 * Restore backed up Azure file shares to the same file-share or another file-share in registered storage accounts.
 *
 * Syntax:
 * ```
 * az backup restore restore-azurefileshare --container-name
 *                                          --item-name
 *                                          --resolve-conflict {Overwrite, Skip}
 *                                          --restore-mode {AlternateLocation, OriginalLocation}
 *                                          --rp-name
 *                                          [--ids]
 *                                          [--resource-group]
 *                                          [--subscription]
 *                                          [--target-file-share]
 *                                          [--target-folder]
 *                                          [--target-storage-account]
 *                                          [--vault-name]
 * ```
 *
 * @param {string} containerName Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required.
 * @param {string} itemName Name of the backed up item.
 * @param {'Overwrite' | 'Skip'} resolveConflict Instruction if there's a conflict with the restored data.
 * @param {'AlternateLocation' | 'OriginalLocation'} restoreMode Specify the restore mode.
 * @param {string} rpName Name of the recovery point.
 */
declare class az_backup_restore_restore_azurefileshare_command_builder extends CommandBuilder<az_backup_restore_restore_azurefileshare_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, containerName: string, itemName: string, resolveConflict: 'Overwrite' | 'Skip', restoreMode: 'AlternateLocation' | 'OriginalLocation', rpName: string);
    /** Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required. */
    containerName(value: string): az_backup_restore_restore_azurefileshare_command_builder;
    /** Name of the backed up item. */
    itemName(value: string): az_backup_restore_restore_azurefileshare_command_builder;
    /** Instruction if there's a conflict with the restored data. */
    resolveConflict(value: 'Overwrite' | 'Skip'): az_backup_restore_restore_azurefileshare_command_builder;
    /** Specify the restore mode. */
    restoreMode(value: 'AlternateLocation' | 'OriginalLocation'): az_backup_restore_restore_azurefileshare_command_builder;
    /** Name of the recovery point. */
    rpName(value: string): az_backup_restore_restore_azurefileshare_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_backup_restore_restore_azurefileshare_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_backup_restore_restore_azurefileshare_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_backup_restore_restore_azurefileshare_command_builder;
    /** Destination file share to which content will be restored. */
    targetFileShare(value: string): az_backup_restore_restore_azurefileshare_command_builder;
    /** Destination folder to which content will be restored. To restore content to root , leave the folder name empty. */
    targetFolder(value: string): az_backup_restore_restore_azurefileshare_command_builder;
    /** Destination storage account to which content will be restored. */
    targetStorageAccount(value: string): az_backup_restore_restore_azurefileshare_command_builder;
    /** Name of the Recovery services vault. */
    vaultName(value: string): az_backup_restore_restore_azurefileshare_command_builder;
}
/**
 * Restore backed up Azure Workloads in a Recovery services vault to another registered container or to the same container.
 *
 * Syntax:
 * ```
 * az backup restore restore-azurewl --recovery-config
 *                                   [--ids]
 *                                   [--resource-group]
 *                                   [--subscription]
 *                                   [--vault-name]
 * ```
 *
 * @param {string} recoveryConfig Specify the recovery configuration of a backed up item. The configuration object can be obtained from 'backup recoveryconfig show' command.
 */
declare class az_backup_restore_restore_azurewl_command_builder extends CommandBuilder<az_backup_restore_restore_azurewl_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, recoveryConfig: string);
    /** Specify the recovery configuration of a backed up item. The configuration object can be obtained from 'backup recoveryconfig show' command. */
    recoveryConfig(value: string): az_backup_restore_restore_azurewl_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_backup_restore_restore_azurewl_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_backup_restore_restore_azurewl_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_backup_restore_restore_azurewl_command_builder;
    /** Name of the Recovery services vault. */
    vaultName(value: string): az_backup_restore_restore_azurewl_command_builder;
}
/**
 * Restore disks of the backed VM from the specified recovery point.
 *
 * Syntax:
 * ```
 * az backup restore restore-disks --container-name
 *                                 --item-name
 *                                 --rp-name
 *                                 --storage-account
 *                                 [--diskslist]
 *                                 [--ids]
 *                                 [--resource-group]
 *                                 [--restore-as-unmanaged-disks {false, true}]
 *                                 [--restore-only-osdisk {false, true}]
 *                                 [--restore-to-staging-storage-account {false, true}]
 *                                 [--subscription]
 *                                 [--target-resource-group]
 *                                 [--vault-name]
 * ```
 *
 * @param {string} containerName Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required.
 * @param {string} itemName Name of the backed up item.
 * @param {string} rpName Name of the recovery point.
 * @param {string} storageAccount Name or ID of the staging storage account. The VM configuration will be restored to this storage account. See the help for --restore-to-staging-storage-account parameter for more info.
 */
declare class az_backup_restore_restore_disks_command_builder extends CommandBuilder<az_backup_restore_restore_disks_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, containerName: string, itemName: string, rpName: string, storageAccount: string);
    /** Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required. */
    containerName(value: string): az_backup_restore_restore_disks_command_builder;
    /** Name of the backed up item. */
    itemName(value: string): az_backup_restore_restore_disks_command_builder;
    /** Name of the recovery point. */
    rpName(value: string): az_backup_restore_restore_disks_command_builder;
    /** Name or ID of the staging storage account. The VM configuration will be restored to this storage account. See the help for --restore-to-staging-storage-account parameter for more info. */
    storageAccount(value: string): az_backup_restore_restore_disks_command_builder;
    /** List of disks to be excluded or included. */
    diskslist(value: string): az_backup_restore_restore_disks_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_backup_restore_restore_disks_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_backup_restore_restore_disks_command_builder;
    /** Use this flag to specify to restore as unmanaged disks. */
    restoreAsUnmanagedDisks(value: boolean): az_backup_restore_restore_disks_command_builder;
    /** Use this flag to restore only OS disks of a backed up VM. */
    restoreOnlyOsdisk(value: boolean): az_backup_restore_restore_disks_command_builder;
    /** Use this flag when you want disks to be restored to the staging storage account using the --storage-account parameter. When not specified, disks will be restored to their original storage accounts. Default: false. */
    restoreToStagingStorageAccount(value: boolean): az_backup_restore_restore_disks_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_backup_restore_restore_disks_command_builder;
    /** Use this to specify the target resource group in which the restored disks will be saved. */
    targetResourceGroup(value: string): az_backup_restore_restore_disks_command_builder;
    /** Name of the Recovery services vault. */
    vaultName(value: string): az_backup_restore_restore_disks_command_builder;
}
/**
 * Sets backup related properties of the Recovery Services vault.
 *
 * Syntax:
 * ```
 * az backup vault backup-properties set [--backup-storage-redundancy {GeoRedundant, LocallyRedundant}]
 *                                       [--ids]
 *                                       [--name]
 *                                       [--resource-group]
 *                                       [--soft-delete-feature-state {Disable, Enable}]
 *                                       [--subscription]
 * ```
 */
declare class az_backup_vault_backup_properties_set_command_builder extends CommandBuilder<az_backup_vault_backup_properties_set_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Sets backup storage properties for a Recovery Services vault. */
    backupStorageRedundancy(value: 'GeoRedundant' | 'LocallyRedundant'): az_backup_vault_backup_properties_set_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_backup_vault_backup_properties_set_command_builder;
    /** Name of the Recovery services vault. */
    name(value: string): az_backup_vault_backup_properties_set_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_backup_vault_backup_properties_set_command_builder;
    /** Set soft-delete feature state for a Recovery Services Vault. */
    softDeleteFeatureState(value: 'Disable' | 'Enable'): az_backup_vault_backup_properties_set_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_backup_vault_backup_properties_set_command_builder;
}
/**
 * Gets backup related properties of the Recovery Services vault.
 *
 * Syntax:
 * ```
 * az backup vault backup-properties show [--ids]
 *                                        [--name]
 *                                        [--query-examples]
 *                                        [--resource-group]
 *                                        [--subscription]
 * ```
 */
declare class az_backup_vault_backup_properties_show_command_builder extends CommandBuilder<az_backup_vault_backup_properties_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_backup_vault_backup_properties_show_command_builder;
    /** Name of the Recovery services vault. */
    name(value: string): az_backup_vault_backup_properties_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_backup_vault_backup_properties_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_backup_vault_backup_properties_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_backup_vault_backup_properties_show_command_builder;
}
/**
 * Create a new Recovery Services vault.
 *
 * Syntax:
 * ```
 * az backup vault create --location
 *                        --name
 *                        --resource-group
 *                        [--subscription]
 * ```
 *
 * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
 * @param {string} name Name of the Recovery services vault.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_backup_vault_create_command_builder extends CommandBuilder<az_backup_vault_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, location: string, name: string, resourceGroup: string);
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_backup_vault_create_command_builder;
    /** Name of the Recovery services vault. */
    name(value: string): az_backup_vault_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_backup_vault_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_backup_vault_create_command_builder;
}
/**
 * Delete an existing Recovery services vault.
 *
 * Syntax:
 * ```
 * az backup vault delete [--force]
 *                        [--ids]
 *                        [--name]
 *                        [--resource-group]
 *                        [--subscription]
 *                        [--yes]
 * ```
 */
declare class az_backup_vault_delete_command_builder extends CommandBuilder<az_backup_vault_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Force completion of the requested action. */
    force(value: string): az_backup_vault_delete_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_backup_vault_delete_command_builder;
    /** Name of the Recovery services vault. */
    name(value: string): az_backup_vault_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_backup_vault_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_backup_vault_delete_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_backup_vault_delete_command_builder;
}
/**
 * List Recovery service vaults within a subscription.
 *
 * Syntax:
 * ```
 * az backup vault list [--query-examples]
 *                      [--resource-group]
 *                      [--subscription]
 * ```
 */
declare class az_backup_vault_list_command_builder extends CommandBuilder<az_backup_vault_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_backup_vault_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_backup_vault_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_backup_vault_list_command_builder;
}
/**
 * Show details of a particular Recovery service vault.
 *
 * Syntax:
 * ```
 * az backup vault show [--ids]
 *                      [--name]
 *                      [--query-examples]
 *                      [--resource-group]
 *                      [--subscription]
 * ```
 */
declare class az_backup_vault_show_command_builder extends CommandBuilder<az_backup_vault_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_backup_vault_show_command_builder;
    /** Name of the Recovery services vault. */
    name(value: string): az_backup_vault_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_backup_vault_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_backup_vault_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_backup_vault_show_command_builder;
}
export {};
