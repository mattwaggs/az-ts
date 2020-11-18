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
exports.az_backup = exports.az_backup_vault = exports.az_backup_vault_backup_properties = exports.az_backup_restore = exports.az_backup_restore_files = exports.az_backup_recoverypoint = exports.az_backup_recoveryconfig = exports.az_backup_protection = exports.az_backup_protectable_item = exports.az_backup_policy = exports.az_backup_job = exports.az_backup_item = exports.az_backup_container = void 0;
var base_1 = require("../base");
/** Resource which houses items or applications to be protected. */
var az_backup_container = /** @class */ (function () {
    function az_backup_container() {
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
    az_backup_container.list = function (backupManagementType, resourceGroup, vaultName) {
        return new az_backup_container_list_command_builder("az backup container list", 'az_backup_container_list_command_result', backupManagementType, resourceGroup, vaultName);
    };
    /**
     * Reset the registration details for a given container.
     *
     * Syntax:
     * ```
     * az backup container re-register --container-name
     *                                 --workload-type {MSSQL, SAPASE, SAPHANA}
     *                                 [--backup-management-type {AzureIaasVM, AzureStorage, AzureWorkload}]
     *                                 [--ids]
     *                                 [--resource-group]
     *                                 [--subscription]
     *                                 [--vault-name]
     *                                 [--yes]
     * ```
     *
     * @param {string} containerName Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required.
     * @param {'MSSQL' | 'SAPASE' | 'SAPHANA'} workloadType Specifiy the type of applications within the Resource which should be discovered and protected by Azure Backup.
     */
    az_backup_container.re_register = function (containerName, workloadType) {
        return new az_backup_container_re_register_command_builder("az backup container re-register", 'az_backup_container_re_register_command_result', containerName, workloadType);
    };
    /**
     * Register a Resource to the given Recovery Services Vault.
     *
     * Syntax:
     * ```
     * az backup container register --resource-id
     *                              --workload-type {MSSQL, SAPASE, SAPHANA}
     *                              [--backup-management-type {AzureIaasVM, AzureStorage, AzureWorkload}]
     *                              [--ids]
     *                              [--resource-group]
     *                              [--subscription]
     *                              [--vault-name]
     * ```
     *
     * @param {string} resourceId ID of the Azure Resource containing items to be protected by Azure Backup service. Currently, only Azure VM resource IDs are supported.
     * @param {'MSSQL' | 'SAPASE' | 'SAPHANA'} workloadType Specifiy the type of applications within the Resource which should be discovered and protected by Azure Backup.
     */
    az_backup_container.register = function (resourceId, workloadType) {
        return new az_backup_container_register_command_builder("az backup container register", 'az_backup_container_register_command_result', resourceId, workloadType);
    };
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
    az_backup_container.show = function (name) {
        return new az_backup_container_show_command_builder("az backup container show", 'az_backup_container_show_command_result', name);
    };
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
    az_backup_container.unregister = function (containerName) {
        return new az_backup_container_unregister_command_builder("az backup container unregister", 'az_backup_container_unregister_command_result', containerName);
    };
    return az_backup_container;
}());
exports.az_backup_container = az_backup_container;
/** An item which is already protected or backed up to an Azure Recovery services vault with an associated policy. */
var az_backup_item = /** @class */ (function () {
    function az_backup_item() {
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
    az_backup_item.list = function (resourceGroup, vaultName) {
        return new az_backup_item_list_command_builder("az backup item list", 'az_backup_item_list_command_result', resourceGroup, vaultName);
    };
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
    az_backup_item.set_policy = function (containerName, policyName) {
        return new az_backup_item_set_policy_command_builder("az backup item set-policy", 'az_backup_item_set_policy_command_result', containerName, policyName);
    };
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
    az_backup_item.show = function (containerName, name) {
        return new az_backup_item_show_command_builder("az backup item show", 'az_backup_item_show_command_result', containerName, name);
    };
    return az_backup_item;
}());
exports.az_backup_item = az_backup_item;
/** Entity which contains details of the job. */
var az_backup_job = /** @class */ (function () {
    function az_backup_job() {
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
    az_backup_job.list = function (resourceGroup, vaultName) {
        return new az_backup_job_list_command_builder("az backup job list", 'az_backup_job_list_command_result', resourceGroup, vaultName);
    };
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
    az_backup_job.show = function (name) {
        return new az_backup_job_show_command_builder("az backup job show", 'az_backup_job_show_command_result', name);
    };
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
    az_backup_job.stop = function (name) {
        return new az_backup_job_stop_command_builder("az backup job stop", 'az_backup_job_stop_command_result', name);
    };
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
    az_backup_job.wait = function (name) {
        return new az_backup_job_wait_command_builder("az backup job wait", 'az_backup_job_wait_command_result', name);
    };
    return az_backup_job;
}());
exports.az_backup_job = az_backup_job;
/** A backup policy defines when you want to take a backup and for how long you would retain each backup copy. */
var az_backup_policy = /** @class */ (function () {
    function az_backup_policy() {
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
    az_backup_policy.create = function (backupManagementType, name, policy, resourceGroup, vaultName) {
        return new az_backup_policy_create_command_builder("az backup policy create", 'az_backup_policy_create_command_result', backupManagementType, name, policy, resourceGroup, vaultName);
    };
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
    az_backup_policy["delete"] = function (name) {
        return new az_backup_policy_delete_command_builder("az backup policy delete", 'az_backup_policy_delete_command_result', name);
    };
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
    az_backup_policy.get_default_for_vm = function () {
        return new az_backup_policy_get_default_for_vm_command_builder("az backup policy get-default-for-vm", 'az_backup_policy_get_default_for_vm_command_result');
    };
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
    az_backup_policy.list = function (resourceGroup, vaultName) {
        return new az_backup_policy_list_command_builder("az backup policy list", 'az_backup_policy_list_command_result', resourceGroup, vaultName);
    };
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
    az_backup_policy.list_associated_items = function (name) {
        return new az_backup_policy_list_associated_items_command_builder("az backup policy list-associated-items", 'az_backup_policy_list_associated_items_command_result', name);
    };
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
    az_backup_policy.set = function () {
        return new az_backup_policy_set_command_builder("az backup policy set", 'az_backup_policy_set_command_result');
    };
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
    az_backup_policy.show = function (name) {
        return new az_backup_policy_show_command_builder("az backup policy show", 'az_backup_policy_show_command_result', name);
    };
    return az_backup_policy;
}());
exports.az_backup_policy = az_backup_policy;
/** Manage the item which is yet to be protected or backed up to an Azure Recovery services vault with an associated policy. */
var az_backup_protectable_item = /** @class */ (function () {
    function az_backup_protectable_item() {
    }
    /**
     * Trigger the discovery of any unprotected items of the given workload type in the given container.
     *
     * Syntax:
     * ```
     * az backup protectable-item initialize --container-name
     *                                       --resource-group
     *                                       --vault-name
     *                                       --workload-type {MSSQL, SAPASE, SAPHANA}
     *                                       [--subscription]
     * ```
     *
     * @param {string} containerName Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} vaultName Name of the Recovery services vault.
     * @param {'MSSQL' | 'SAPASE' | 'SAPHANA'} workloadType Specifiy the type of applications within the Resource which should be discovered and protected by Azure Backup.
     */
    az_backup_protectable_item.initialize = function (containerName, resourceGroup, vaultName, workloadType) {
        return new az_backup_protectable_item_initialize_command_builder("az backup protectable-item initialize", 'az_backup_protectable_item_initialize_command_result', containerName, resourceGroup, vaultName, workloadType);
    };
    /**
     * Retrieve all protectable items within a certain container or across all registered containers.
     *
     * Syntax:
     * ```
     * az backup protectable-item list --resource-group
     *                                 --vault-name
     *                                 --workload-type {MSSQL, SAPASE, SAPHANA}
     *                                 [--container-name]
     *                                 [--query-examples]
     *                                 [--subscription]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} vaultName Name of the Recovery services vault.
     * @param {'MSSQL' | 'SAPASE' | 'SAPHANA'} workloadType Specifiy the type of applications within the Resource which should be discovered and protected by Azure Backup.
     */
    az_backup_protectable_item.list = function (resourceGroup, vaultName, workloadType) {
        return new az_backup_protectable_item_list_command_builder("az backup protectable-item list", 'az_backup_protectable_item_list_command_result', resourceGroup, vaultName, workloadType);
    };
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
     *                                 --workload-type {MSSQL, SAPASE, SAPHANA}
     *                                 [--query-examples]
     *                                 [--subscription]
     * ```
     *
     * @param {string} name Name of the protectable item.
     * @param {'HANAInstance' | 'SAPHanaDatabase' | 'SAPHanaSystem' | 'SQLAG' | 'SQLDatabase' | 'SQLInstance'} protectableItemType Specifiy the type of applications within the Resource which should be discovered and protected by Azure Backup.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} serverName Parent Server name of the item.
     * @param {string} vaultName Name of the Recovery services vault.
     * @param {'MSSQL' | 'SAPASE' | 'SAPHANA'} workloadType Specifiy the type of applications within the Resource which should be discovered and protected by Azure Backup.
     */
    az_backup_protectable_item.show = function (name, protectableItemType, resourceGroup, serverName, vaultName, workloadType) {
        return new az_backup_protectable_item_show_command_builder("az backup protectable-item show", 'az_backup_protectable_item_show_command_result', name, protectableItemType, resourceGroup, serverName, vaultName, workloadType);
    };
    return az_backup_protectable_item;
}());
exports.az_backup_protectable_item = az_backup_protectable_item;
/** Manage protection of your items, enable protection or disable it, or take on-demand backups. */
var az_backup_protection = /** @class */ (function () {
    function az_backup_protection() {
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
    az_backup_protection.auto_disable_for_azurewl = function (itemName) {
        return new az_backup_protection_auto_disable_for_azurewl_command_builder("az backup protection auto-disable-for-azurewl", 'az_backup_protection_auto_disable_for_azurewl_command_result', itemName);
    };
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
    az_backup_protection.auto_enable_for_azurewl = function (policyName, protectableItemName, protectableItemType, serverName, workloadType) {
        return new az_backup_protection_auto_enable_for_azurewl_command_builder("az backup protection auto-enable-for-azurewl", 'az_backup_protection_auto_enable_for_azurewl_command_result', policyName, protectableItemName, protectableItemType, serverName, workloadType);
    };
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
    az_backup_protection.backup_now = function (itemName) {
        return new az_backup_protection_backup_now_command_builder("az backup protection backup-now", 'az_backup_protection_backup_now_command_result', itemName);
    };
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
    az_backup_protection.check_vm = function (vmId) {
        return new az_backup_protection_check_vm_command_builder("az backup protection check-vm", 'az_backup_protection_check_vm_command_result', vmId);
    };
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
    az_backup_protection.disable = function (containerName, itemName) {
        return new az_backup_protection_disable_command_builder("az backup protection disable", 'az_backup_protection_disable_command_result', containerName, itemName);
    };
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
    az_backup_protection.enable_for_azurefileshare = function (azureFileShare, policyName, storageAccount) {
        return new az_backup_protection_enable_for_azurefileshare_command_builder("az backup protection enable-for-azurefileshare", 'az_backup_protection_enable_for_azurefileshare_command_result', azureFileShare, policyName, storageAccount);
    };
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
    az_backup_protection.enable_for_azurewl = function (policyName, protectableItemName, protectableItemType, serverName, workloadType) {
        return new az_backup_protection_enable_for_azurewl_command_builder("az backup protection enable-for-azurewl", 'az_backup_protection_enable_for_azurewl_command_result', policyName, protectableItemName, protectableItemType, serverName, workloadType);
    };
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
    az_backup_protection.enable_for_vm = function (policyName, vm) {
        return new az_backup_protection_enable_for_vm_command_builder("az backup protection enable-for-vm", 'az_backup_protection_enable_for_vm_command_result', policyName, vm);
    };
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
    az_backup_protection.resume = function (containerName, itemName, policyName) {
        return new az_backup_protection_resume_command_builder("az backup protection resume", 'az_backup_protection_resume_command_result', containerName, itemName, policyName);
    };
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
    az_backup_protection.undelete = function (backupManagementType, containerName, itemName) {
        return new az_backup_protection_undelete_command_builder("az backup protection undelete", 'az_backup_protection_undelete_command_result', backupManagementType, containerName, itemName);
    };
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
    az_backup_protection.update_for_vm = function (containerName, itemName) {
        return new az_backup_protection_update_for_vm_command_builder("az backup protection update-for-vm", 'az_backup_protection_update_for_vm_command_result', containerName, itemName);
    };
    return az_backup_protection;
}());
exports.az_backup_protection = az_backup_protection;
/** Manage recovery configuration of an Azure workload backed up item. */
var az_backup_recoveryconfig = /** @class */ (function () {
    function az_backup_recoveryconfig() {
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
     *                               [--workload-type {MSSQL, SAPASE, SAPHANA}]
     * ```
     *
     * @param {string} containerName Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required.
     * @param {string} itemName Name of the backed up item.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {'AlternateWorkloadRestore' | 'OriginalWorkloadRestore' | 'RestoreAsFiles'} restoreMode Specify the restore mode.
     * @param {string} vaultName Name of the Recovery services vault.
     */
    az_backup_recoveryconfig.show = function (containerName, itemName, resourceGroup, restoreMode, vaultName) {
        return new az_backup_recoveryconfig_show_command_builder("az backup recoveryconfig show", 'az_backup_recoveryconfig_show_command_result', containerName, itemName, resourceGroup, restoreMode, vaultName);
    };
    return az_backup_recoveryconfig;
}());
exports.az_backup_recoveryconfig = az_backup_recoveryconfig;
/** A snapshot of data at that point-of-time, stored in Recovery Services Vault, from which you can restore information. */
var az_backup_recoverypoint = /** @class */ (function () {
    function az_backup_recoverypoint() {
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
    az_backup_recoverypoint.list = function (containerName, itemName, resourceGroup, vaultName) {
        return new az_backup_recoverypoint_list_command_builder("az backup recoverypoint list", 'az_backup_recoverypoint_list_command_result', containerName, itemName, resourceGroup, vaultName);
    };
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
    az_backup_recoverypoint.show = function (containerName, itemName, name) {
        return new az_backup_recoverypoint_show_command_builder("az backup recoverypoint show", 'az_backup_recoverypoint_show_command_result', containerName, itemName, name);
    };
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
    az_backup_recoverypoint.show_log_chain = function (containerName, itemName, resourceGroup, vaultName) {
        return new az_backup_recoverypoint_show_log_chain_command_builder("az backup recoverypoint show-log-chain", 'az_backup_recoverypoint_show_log_chain_command_result', containerName, itemName, resourceGroup, vaultName);
    };
    return az_backup_recoverypoint;
}());
exports.az_backup_recoverypoint = az_backup_recoverypoint;
/** Gives access to all files of a recovery point. */
var az_backup_restore_files = /** @class */ (function () {
    function az_backup_restore_files() {
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
    az_backup_restore_files.mount_rp = function (containerName, itemName, rpName) {
        return new az_backup_restore_files_mount_rp_command_builder("az backup restore files mount-rp", 'az_backup_restore_files_mount_rp_command_result', containerName, itemName, rpName);
    };
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
    az_backup_restore_files.unmount_rp = function (containerName, itemName, rpName) {
        return new az_backup_restore_files_unmount_rp_command_builder("az backup restore files unmount-rp", 'az_backup_restore_files_unmount_rp_command_result', containerName, itemName, rpName);
    };
    return az_backup_restore_files;
}());
exports.az_backup_restore_files = az_backup_restore_files;
/** Restore backed up items from recovery points in a Recovery Services vault. */
var az_backup_restore = /** @class */ (function () {
    function az_backup_restore() {
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
    az_backup_restore.restore_azurefiles = function (containerName, itemName, resolveConflict, restoreMode, rpName) {
        return new az_backup_restore_restore_azurefiles_command_builder("az backup restore restore-azurefiles", 'az_backup_restore_restore_azurefiles_command_result', containerName, itemName, resolveConflict, restoreMode, rpName);
    };
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
    az_backup_restore.restore_azurefileshare = function (containerName, itemName, resolveConflict, restoreMode, rpName) {
        return new az_backup_restore_restore_azurefileshare_command_builder("az backup restore restore-azurefileshare", 'az_backup_restore_restore_azurefileshare_command_result', containerName, itemName, resolveConflict, restoreMode, rpName);
    };
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
    az_backup_restore.restore_azurewl = function (recoveryConfig) {
        return new az_backup_restore_restore_azurewl_command_builder("az backup restore restore-azurewl", 'az_backup_restore_restore_azurewl_command_result', recoveryConfig);
    };
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
    az_backup_restore.restore_disks = function (containerName, itemName, rpName, storageAccount) {
        return new az_backup_restore_restore_disks_command_builder("az backup restore restore-disks", 'az_backup_restore_restore_disks_command_result', containerName, itemName, rpName, storageAccount);
    };
    return az_backup_restore;
}());
exports.az_backup_restore = az_backup_restore;
/** Properties of the Recovery Services vault. */
var az_backup_vault_backup_properties = /** @class */ (function () {
    function az_backup_vault_backup_properties() {
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
    az_backup_vault_backup_properties.set = function () {
        return new az_backup_vault_backup_properties_set_command_builder("az backup vault backup-properties set", 'az_backup_vault_backup_properties_set_command_result');
    };
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
    az_backup_vault_backup_properties.show = function () {
        return new az_backup_vault_backup_properties_show_command_builder("az backup vault backup-properties show", 'az_backup_vault_backup_properties_show_command_result');
    };
    return az_backup_vault_backup_properties;
}());
exports.az_backup_vault_backup_properties = az_backup_vault_backup_properties;
/** Online storage entity in Azure used to hold data such as backup copies, recovery points and backup policies. */
var az_backup_vault = /** @class */ (function () {
    function az_backup_vault() {
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
    az_backup_vault.create = function (location, name, resourceGroup) {
        return new az_backup_vault_create_command_builder("az backup vault create", 'az_backup_vault_create_command_result', location, name, resourceGroup);
    };
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
    az_backup_vault["delete"] = function () {
        return new az_backup_vault_delete_command_builder("az backup vault delete", 'az_backup_vault_delete_command_result');
    };
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
    az_backup_vault.list = function () {
        return new az_backup_vault_list_command_builder("az backup vault list", 'az_backup_vault_list_command_result');
    };
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
    az_backup_vault.show = function () {
        return new az_backup_vault_show_command_builder("az backup vault show", 'az_backup_vault_show_command_result');
    };
    return az_backup_vault;
}());
exports.az_backup_vault = az_backup_vault;
/** Manage Azure Backups. */
var az_backup = /** @class */ (function () {
    function az_backup() {
    }
    return az_backup;
}());
exports.az_backup = az_backup;
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
var az_backup_container_list_command_builder = /** @class */ (function (_super) {
    __extends(az_backup_container_list_command_builder, _super);
    function az_backup_container_list_command_builder(commandPath, resultDataTypeName, backupManagementType, resourceGroup, vaultName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.backupManagementType(backupManagementType);
        _this.resourceGroup(resourceGroup);
        _this.vaultName(vaultName);
        return _this;
    }
    /** Specifiy the backup management type. Define how Azure Backup manages the backup of entities within the ARM resource. For eg: AzureWorkloads refers to workloads installed within Azure VMs, AzureStorage refers to entities within Storage account. Required only if friendly name is used as Container name. */
    az_backup_container_list_command_builder.prototype.backupManagementType = function (value) {
        this.setFlag("--backup-management-type", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_backup_container_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Recovery services vault. */
    az_backup_container_list_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_backup_container_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_backup_container_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_backup_container_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Reset the registration details for a given container.
 *
 * Syntax:
 * ```
 * az backup container re-register --container-name
 *                                 --workload-type {MSSQL, SAPASE, SAPHANA}
 *                                 [--backup-management-type {AzureIaasVM, AzureStorage, AzureWorkload}]
 *                                 [--ids]
 *                                 [--resource-group]
 *                                 [--subscription]
 *                                 [--vault-name]
 *                                 [--yes]
 * ```
 *
 * @param {string} containerName Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required.
 * @param {'MSSQL' | 'SAPASE' | 'SAPHANA'} workloadType Specifiy the type of applications within the Resource which should be discovered and protected by Azure Backup.
 */
var az_backup_container_re_register_command_builder = /** @class */ (function (_super) {
    __extends(az_backup_container_re_register_command_builder, _super);
    function az_backup_container_re_register_command_builder(commandPath, resultDataTypeName, containerName, workloadType) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.containerName(containerName);
        _this.workloadType(workloadType);
        return _this;
    }
    /** Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required. */
    az_backup_container_re_register_command_builder.prototype.containerName = function (value) {
        this.setFlag("--container-name", value);
        return this;
    };
    /** Specifiy the type of applications within the Resource which should be discovered and protected by Azure Backup. */
    az_backup_container_re_register_command_builder.prototype.workloadType = function (value) {
        this.setFlag("--workload-type", value);
        return this;
    };
    /** Specifiy the backup management type. Define how Azure Backup manages the backup of entities within the ARM resource. For eg: AzureWorkloads refers to workloads installed within Azure VMs, AzureStorage refers to entities within Storage account. Required only if friendly name is used as Container name. */
    az_backup_container_re_register_command_builder.prototype.backupManagementType = function (value) {
        this.setFlag("--backup-management-type", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_backup_container_re_register_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_backup_container_re_register_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_backup_container_re_register_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Name of the Recovery services vault. */
    az_backup_container_re_register_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_backup_container_re_register_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_backup_container_re_register_command_builder;
}(base_1.CommandBuilder));
/**
 * Register a Resource to the given Recovery Services Vault.
 *
 * Syntax:
 * ```
 * az backup container register --resource-id
 *                              --workload-type {MSSQL, SAPASE, SAPHANA}
 *                              [--backup-management-type {AzureIaasVM, AzureStorage, AzureWorkload}]
 *                              [--ids]
 *                              [--resource-group]
 *                              [--subscription]
 *                              [--vault-name]
 * ```
 *
 * @param {string} resourceId ID of the Azure Resource containing items to be protected by Azure Backup service. Currently, only Azure VM resource IDs are supported.
 * @param {'MSSQL' | 'SAPASE' | 'SAPHANA'} workloadType Specifiy the type of applications within the Resource which should be discovered and protected by Azure Backup.
 */
var az_backup_container_register_command_builder = /** @class */ (function (_super) {
    __extends(az_backup_container_register_command_builder, _super);
    function az_backup_container_register_command_builder(commandPath, resultDataTypeName, resourceId, workloadType) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceId(resourceId);
        _this.workloadType(workloadType);
        return _this;
    }
    /** ID of the Azure Resource containing items to be protected by Azure Backup service. Currently, only Azure VM resource IDs are supported. */
    az_backup_container_register_command_builder.prototype.resourceId = function (value) {
        this.setFlag("--resource-id", value);
        return this;
    };
    /** Specifiy the type of applications within the Resource which should be discovered and protected by Azure Backup. */
    az_backup_container_register_command_builder.prototype.workloadType = function (value) {
        this.setFlag("--workload-type", value);
        return this;
    };
    /** Specifiy the backup management type. Define how Azure Backup manages the backup of entities within the ARM resource. For eg: AzureWorkloads refers to workloads installed within Azure VMs, AzureStorage refers to entities within Storage account. Required only if friendly name is used as Container name. */
    az_backup_container_register_command_builder.prototype.backupManagementType = function (value) {
        this.setFlag("--backup-management-type", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_backup_container_register_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_backup_container_register_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_backup_container_register_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Name of the Recovery services vault. */
    az_backup_container_register_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    return az_backup_container_register_command_builder;
}(base_1.CommandBuilder));
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
var az_backup_container_show_command_builder = /** @class */ (function (_super) {
    __extends(az_backup_container_show_command_builder, _super);
    function az_backup_container_show_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** Name of the container. You can use the backup container list command to get the name of a container. */
    az_backup_container_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Specifiy the backup management type. Define how Azure Backup manages the backup of entities within the ARM resource. For eg: AzureWorkloads refers to workloads installed within Azure VMs, AzureStorage refers to entities within Storage account. Required only if friendly name is used as Container name. */
    az_backup_container_show_command_builder.prototype.backupManagementType = function (value) {
        this.setFlag("--backup-management-type", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_backup_container_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_backup_container_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_backup_container_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_backup_container_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Name of the Recovery services vault. */
    az_backup_container_show_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    return az_backup_container_show_command_builder;
}(base_1.CommandBuilder));
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
var az_backup_container_unregister_command_builder = /** @class */ (function (_super) {
    __extends(az_backup_container_unregister_command_builder, _super);
    function az_backup_container_unregister_command_builder(commandPath, resultDataTypeName, containerName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.containerName(containerName);
        return _this;
    }
    /** Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required. */
    az_backup_container_unregister_command_builder.prototype.containerName = function (value) {
        this.setFlag("--container-name", value);
        return this;
    };
    /** Specifiy the backup management type. Define how Azure Backup manages the backup of entities within the ARM resource. For eg: AzureWorkloads refers to workloads installed within Azure VMs, AzureStorage refers to entities within Storage account. Required only if friendly name is used as Container name. */
    az_backup_container_unregister_command_builder.prototype.backupManagementType = function (value) {
        this.setFlag("--backup-management-type", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_backup_container_unregister_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_backup_container_unregister_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_backup_container_unregister_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Name of the Recovery services vault. */
    az_backup_container_unregister_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_backup_container_unregister_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_backup_container_unregister_command_builder;
}(base_1.CommandBuilder));
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
var az_backup_item_list_command_builder = /** @class */ (function (_super) {
    __extends(az_backup_item_list_command_builder, _super);
    function az_backup_item_list_command_builder(commandPath, resultDataTypeName, resourceGroup, vaultName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        _this.vaultName(vaultName);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_backup_item_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Recovery services vault. */
    az_backup_item_list_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    /** Specifiy the backup management type. Define how Azure Backup manages the backup of entities within the ARM resource. For eg: AzureWorkloads refers to workloads installed within Azure VMs, AzureStorage refers to entities within Storage account. Required only if friendly name is used as Container name. */
    az_backup_item_list_command_builder.prototype.backupManagementType = function (value) {
        this.setFlag("--backup-management-type", value);
        return this;
    };
    /** Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required. */
    az_backup_item_list_command_builder.prototype.containerName = function (value) {
        this.setFlag("--container-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_backup_item_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_backup_item_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Specifiy the type of applications within the Resource which should be discovered and protected by Azure Backup. */
    az_backup_item_list_command_builder.prototype.workloadType = function (value) {
        this.setFlag("--workload-type", value);
        return this;
    };
    return az_backup_item_list_command_builder;
}(base_1.CommandBuilder));
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
var az_backup_item_set_policy_command_builder = /** @class */ (function (_super) {
    __extends(az_backup_item_set_policy_command_builder, _super);
    function az_backup_item_set_policy_command_builder(commandPath, resultDataTypeName, containerName, policyName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.containerName(containerName);
        _this.policyName(policyName);
        return _this;
    }
    /** Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required. */
    az_backup_item_set_policy_command_builder.prototype.containerName = function (value) {
        this.setFlag("--container-name", value);
        return this;
    };
    /** Name of the Backup policy. You can use the backup policy list command to get the name of a backup policy. */
    az_backup_item_set_policy_command_builder.prototype.policyName = function (value) {
        this.setFlag("--policy-name", value);
        return this;
    };
    /** Specifiy the backup management type. Define how Azure Backup manages the backup of entities within the ARM resource. For eg: AzureWorkloads refers to workloads installed within Azure VMs, AzureStorage refers to entities within Storage account. Required only if friendly name is used as Container name. */
    az_backup_item_set_policy_command_builder.prototype.backupManagementType = function (value) {
        this.setFlag("--backup-management-type", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_backup_item_set_policy_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the backed up item. You can use the backup item list command to get the name of a backed up item. */
    az_backup_item_set_policy_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_backup_item_set_policy_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_backup_item_set_policy_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Name of the Recovery services vault. */
    az_backup_item_set_policy_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    /** Specifiy the type of applications within the Resource which should be discovered and protected by Azure Backup. */
    az_backup_item_set_policy_command_builder.prototype.workloadType = function (value) {
        this.setFlag("--workload-type", value);
        return this;
    };
    return az_backup_item_set_policy_command_builder;
}(base_1.CommandBuilder));
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
var az_backup_item_show_command_builder = /** @class */ (function (_super) {
    __extends(az_backup_item_show_command_builder, _super);
    function az_backup_item_show_command_builder(commandPath, resultDataTypeName, containerName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.containerName(containerName);
        _this.name(name);
        return _this;
    }
    /** Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required. */
    az_backup_item_show_command_builder.prototype.containerName = function (value) {
        this.setFlag("--container-name", value);
        return this;
    };
    /** Name of the backed up item. You can use the backup item list command to get the name of a backed up item. */
    az_backup_item_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Specifiy the backup management type. Define how Azure Backup manages the backup of entities within the ARM resource. For eg: AzureWorkloads refers to workloads installed within Azure VMs, AzureStorage refers to entities within Storage account. Required only if friendly name is used as Container name. */
    az_backup_item_show_command_builder.prototype.backupManagementType = function (value) {
        this.setFlag("--backup-management-type", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_backup_item_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_backup_item_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_backup_item_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_backup_item_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Name of the Recovery services vault. */
    az_backup_item_show_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    /** Specifiy the type of applications within the Resource which should be discovered and protected by Azure Backup. */
    az_backup_item_show_command_builder.prototype.workloadType = function (value) {
        this.setFlag("--workload-type", value);
        return this;
    };
    return az_backup_item_show_command_builder;
}(base_1.CommandBuilder));
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
var az_backup_job_list_command_builder = /** @class */ (function (_super) {
    __extends(az_backup_job_list_command_builder, _super);
    function az_backup_job_list_command_builder(commandPath, resultDataTypeName, resourceGroup, vaultName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        _this.vaultName(vaultName);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_backup_job_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Recovery services vault. */
    az_backup_job_list_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    /** The end date of the range in UTC (d-m-Y). */
    az_backup_job_list_command_builder.prototype.endDate = function (value) {
        this.setFlag("--end-date", value);
        return this;
    };
    /** User initiated operation. */
    az_backup_job_list_command_builder.prototype.operation = function (value) {
        this.setFlag("--operation", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_backup_job_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** The start date of the range in UTC (d-m-Y). */
    az_backup_job_list_command_builder.prototype.startDate = function (value) {
        this.setFlag("--start-date", value);
        return this;
    };
    /** Status of the Job. */
    az_backup_job_list_command_builder.prototype.status = function (value) {
        this.setFlag("--status", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_backup_job_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_backup_job_list_command_builder;
}(base_1.CommandBuilder));
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
var az_backup_job_show_command_builder = /** @class */ (function (_super) {
    __extends(az_backup_job_show_command_builder, _super);
    function az_backup_job_show_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** Name of the job. You can use the backup job list command to get the name of a job. */
    az_backup_job_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_backup_job_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_backup_job_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_backup_job_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_backup_job_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Name of the Recovery services vault. */
    az_backup_job_show_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    return az_backup_job_show_command_builder;
}(base_1.CommandBuilder));
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
var az_backup_job_stop_command_builder = /** @class */ (function (_super) {
    __extends(az_backup_job_stop_command_builder, _super);
    function az_backup_job_stop_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** Name of the job. You can use the backup job list command to get the name of a job. */
    az_backup_job_stop_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_backup_job_stop_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_backup_job_stop_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_backup_job_stop_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Name of the Recovery services vault. */
    az_backup_job_stop_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    return az_backup_job_stop_command_builder;
}(base_1.CommandBuilder));
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
var az_backup_job_wait_command_builder = /** @class */ (function (_super) {
    __extends(az_backup_job_wait_command_builder, _super);
    function az_backup_job_wait_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** Name of the job. You can use the backup job list command to get the name of a job. */
    az_backup_job_wait_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_backup_job_wait_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_backup_job_wait_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_backup_job_wait_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Maximum time, in seconds, to wait before aborting. */
    az_backup_job_wait_command_builder.prototype.timeout = function (value) {
        this.setFlag("--timeout", value);
        return this;
    };
    /** Name of the Recovery services vault. */
    az_backup_job_wait_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    return az_backup_job_wait_command_builder;
}(base_1.CommandBuilder));
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
var az_backup_policy_create_command_builder = /** @class */ (function (_super) {
    __extends(az_backup_policy_create_command_builder, _super);
    function az_backup_policy_create_command_builder(commandPath, resultDataTypeName, backupManagementType, name, policy, resourceGroup, vaultName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.backupManagementType(backupManagementType);
        _this.name(name);
        _this.policy(policy);
        _this.resourceGroup(resourceGroup);
        _this.vaultName(vaultName);
        return _this;
    }
    /** Specifiy the backup management type. Define how Azure Backup manages the backup of entities within the ARM resource. For eg: AzureWorkloads refers to workloads installed within Azure VMs, AzureStorage refers to entities within Storage account. Required only if friendly name is used as Container name. */
    az_backup_policy_create_command_builder.prototype.backupManagementType = function (value) {
        this.setFlag("--backup-management-type", value);
        return this;
    };
    /** Name of the Policy. */
    az_backup_policy_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** JSON encoded policy definition. Use the show command with JSON output to obtain a policy object. Modify the values using a file editor and pass the object. */
    az_backup_policy_create_command_builder.prototype.policy = function (value) {
        this.setFlag("--policy", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_backup_policy_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Recovery services vault. */
    az_backup_policy_create_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_backup_policy_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Specifiy the type of applications within the Resource which should be discovered and protected by Azure Backup. */
    az_backup_policy_create_command_builder.prototype.workloadType = function (value) {
        this.setFlag("--workload-type", value);
        return this;
    };
    return az_backup_policy_create_command_builder;
}(base_1.CommandBuilder));
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
var az_backup_policy_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_backup_policy_delete_command_builder, _super);
    function az_backup_policy_delete_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** Name of the backup policy. You can use the backup policy list command to get the name of a policy. */
    az_backup_policy_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_backup_policy_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_backup_policy_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_backup_policy_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Name of the Recovery services vault. */
    az_backup_policy_delete_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    return az_backup_policy_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_backup_policy_get_default_for_vm_command_builder = /** @class */ (function (_super) {
    __extends(az_backup_policy_get_default_for_vm_command_builder, _super);
    function az_backup_policy_get_default_for_vm_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_backup_policy_get_default_for_vm_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_backup_policy_get_default_for_vm_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_backup_policy_get_default_for_vm_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Name of the Recovery services vault. */
    az_backup_policy_get_default_for_vm_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    return az_backup_policy_get_default_for_vm_command_builder;
}(base_1.CommandBuilder));
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
var az_backup_policy_list_command_builder = /** @class */ (function (_super) {
    __extends(az_backup_policy_list_command_builder, _super);
    function az_backup_policy_list_command_builder(commandPath, resultDataTypeName, resourceGroup, vaultName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        _this.vaultName(vaultName);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_backup_policy_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Recovery services vault. */
    az_backup_policy_list_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    /** Specifiy the backup management type. Define how Azure Backup manages the backup of entities within the ARM resource. For eg: AzureWorkloads refers to workloads installed within Azure VMs, AzureStorage refers to entities within Storage account. Required only if friendly name is used as Container name. */
    az_backup_policy_list_command_builder.prototype.backupManagementType = function (value) {
        this.setFlag("--backup-management-type", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_backup_policy_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_backup_policy_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Specifiy the type of applications within the Resource which should be discovered and protected by Azure Backup. */
    az_backup_policy_list_command_builder.prototype.workloadType = function (value) {
        this.setFlag("--workload-type", value);
        return this;
    };
    return az_backup_policy_list_command_builder;
}(base_1.CommandBuilder));
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
var az_backup_policy_list_associated_items_command_builder = /** @class */ (function (_super) {
    __extends(az_backup_policy_list_associated_items_command_builder, _super);
    function az_backup_policy_list_associated_items_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** Name of the backup policy. You can use the backup policy list command to get the name of a policy. */
    az_backup_policy_list_associated_items_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Specifiy the backup management type. Define how Azure Backup manages the backup of entities within the ARM resource. For eg: AzureWorkloads refers to workloads installed within Azure VMs, AzureStorage refers to entities within Storage account. Required only if friendly name is used as Container name. */
    az_backup_policy_list_associated_items_command_builder.prototype.backupManagementType = function (value) {
        this.setFlag("--backup-management-type", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_backup_policy_list_associated_items_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_backup_policy_list_associated_items_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_backup_policy_list_associated_items_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Name of the Recovery services vault. */
    az_backup_policy_list_associated_items_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    return az_backup_policy_list_associated_items_command_builder;
}(base_1.CommandBuilder));
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
var az_backup_policy_set_command_builder = /** @class */ (function (_super) {
    __extends(az_backup_policy_set_command_builder, _super);
    function az_backup_policy_set_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Specifiy the backup management type. Define how Azure Backup manages the backup of entities within the ARM resource. For eg: AzureWorkloads refers to workloads installed within Azure VMs, AzureStorage refers to entities within Storage account. Required only if friendly name is used as Container name. */
    az_backup_policy_set_command_builder.prototype.backupManagementType = function (value) {
        this.setFlag("--backup-management-type", value);
        return this;
    };
    /** Specify whether or not to retry Policy Update for failed items. */
    az_backup_policy_set_command_builder.prototype.fixForInconsistentItems = function (value) {
        this.setFlag("--fix-for-inconsistent-items", value.toString());
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_backup_policy_set_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the Policy. */
    az_backup_policy_set_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** JSON encoded policy definition. Use the show command with JSON output to obtain a policy object. Modify the values using a file editor and pass the object. */
    az_backup_policy_set_command_builder.prototype.policy = function (value) {
        this.setFlag("--policy", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_backup_policy_set_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_backup_policy_set_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Name of the Recovery services vault. */
    az_backup_policy_set_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    return az_backup_policy_set_command_builder;
}(base_1.CommandBuilder));
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
var az_backup_policy_show_command_builder = /** @class */ (function (_super) {
    __extends(az_backup_policy_show_command_builder, _super);
    function az_backup_policy_show_command_builder(commandPath, resultDataTypeName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        return _this;
    }
    /** Name of the backup policy. You can use the backup policy list command to get the name of a policy. */
    az_backup_policy_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_backup_policy_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_backup_policy_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_backup_policy_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_backup_policy_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Name of the Recovery services vault. */
    az_backup_policy_show_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    return az_backup_policy_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Trigger the discovery of any unprotected items of the given workload type in the given container.
 *
 * Syntax:
 * ```
 * az backup protectable-item initialize --container-name
 *                                       --resource-group
 *                                       --vault-name
 *                                       --workload-type {MSSQL, SAPASE, SAPHANA}
 *                                       [--subscription]
 * ```
 *
 * @param {string} containerName Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} vaultName Name of the Recovery services vault.
 * @param {'MSSQL' | 'SAPASE' | 'SAPHANA'} workloadType Specifiy the type of applications within the Resource which should be discovered and protected by Azure Backup.
 */
var az_backup_protectable_item_initialize_command_builder = /** @class */ (function (_super) {
    __extends(az_backup_protectable_item_initialize_command_builder, _super);
    function az_backup_protectable_item_initialize_command_builder(commandPath, resultDataTypeName, containerName, resourceGroup, vaultName, workloadType) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.containerName(containerName);
        _this.resourceGroup(resourceGroup);
        _this.vaultName(vaultName);
        _this.workloadType(workloadType);
        return _this;
    }
    /** Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required. */
    az_backup_protectable_item_initialize_command_builder.prototype.containerName = function (value) {
        this.setFlag("--container-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_backup_protectable_item_initialize_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Recovery services vault. */
    az_backup_protectable_item_initialize_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    /** Specifiy the type of applications within the Resource which should be discovered and protected by Azure Backup. */
    az_backup_protectable_item_initialize_command_builder.prototype.workloadType = function (value) {
        this.setFlag("--workload-type", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_backup_protectable_item_initialize_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_backup_protectable_item_initialize_command_builder;
}(base_1.CommandBuilder));
/**
 * Retrieve all protectable items within a certain container or across all registered containers.
 *
 * Syntax:
 * ```
 * az backup protectable-item list --resource-group
 *                                 --vault-name
 *                                 --workload-type {MSSQL, SAPASE, SAPHANA}
 *                                 [--container-name]
 *                                 [--query-examples]
 *                                 [--subscription]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} vaultName Name of the Recovery services vault.
 * @param {'MSSQL' | 'SAPASE' | 'SAPHANA'} workloadType Specifiy the type of applications within the Resource which should be discovered and protected by Azure Backup.
 */
var az_backup_protectable_item_list_command_builder = /** @class */ (function (_super) {
    __extends(az_backup_protectable_item_list_command_builder, _super);
    function az_backup_protectable_item_list_command_builder(commandPath, resultDataTypeName, resourceGroup, vaultName, workloadType) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        _this.vaultName(vaultName);
        _this.workloadType(workloadType);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_backup_protectable_item_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Recovery services vault. */
    az_backup_protectable_item_list_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    /** Specifiy the type of applications within the Resource which should be discovered and protected by Azure Backup. */
    az_backup_protectable_item_list_command_builder.prototype.workloadType = function (value) {
        this.setFlag("--workload-type", value);
        return this;
    };
    /** Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required. */
    az_backup_protectable_item_list_command_builder.prototype.containerName = function (value) {
        this.setFlag("--container-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_backup_protectable_item_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_backup_protectable_item_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_backup_protectable_item_list_command_builder;
}(base_1.CommandBuilder));
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
 *                                 --workload-type {MSSQL, SAPASE, SAPHANA}
 *                                 [--query-examples]
 *                                 [--subscription]
 * ```
 *
 * @param {string} name Name of the protectable item.
 * @param {'HANAInstance' | 'SAPHanaDatabase' | 'SAPHanaSystem' | 'SQLAG' | 'SQLDatabase' | 'SQLInstance'} protectableItemType Specifiy the type of applications within the Resource which should be discovered and protected by Azure Backup.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} serverName Parent Server name of the item.
 * @param {string} vaultName Name of the Recovery services vault.
 * @param {'MSSQL' | 'SAPASE' | 'SAPHANA'} workloadType Specifiy the type of applications within the Resource which should be discovered and protected by Azure Backup.
 */
var az_backup_protectable_item_show_command_builder = /** @class */ (function (_super) {
    __extends(az_backup_protectable_item_show_command_builder, _super);
    function az_backup_protectable_item_show_command_builder(commandPath, resultDataTypeName, name, protectableItemType, resourceGroup, serverName, vaultName, workloadType) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.protectableItemType(protectableItemType);
        _this.resourceGroup(resourceGroup);
        _this.serverName(serverName);
        _this.vaultName(vaultName);
        _this.workloadType(workloadType);
        return _this;
    }
    /** Name of the protectable item. */
    az_backup_protectable_item_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Specifiy the type of applications within the Resource which should be discovered and protected by Azure Backup. */
    az_backup_protectable_item_show_command_builder.prototype.protectableItemType = function (value) {
        this.setFlag("--protectable-item-type", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_backup_protectable_item_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Parent Server name of the item. */
    az_backup_protectable_item_show_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** Name of the Recovery services vault. */
    az_backup_protectable_item_show_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    /** Specifiy the type of applications within the Resource which should be discovered and protected by Azure Backup. */
    az_backup_protectable_item_show_command_builder.prototype.workloadType = function (value) {
        this.setFlag("--workload-type", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_backup_protectable_item_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_backup_protectable_item_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_backup_protectable_item_show_command_builder;
}(base_1.CommandBuilder));
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
var az_backup_protection_auto_disable_for_azurewl_command_builder = /** @class */ (function (_super) {
    __extends(az_backup_protection_auto_disable_for_azurewl_command_builder, _super);
    function az_backup_protection_auto_disable_for_azurewl_command_builder(commandPath, resultDataTypeName, itemName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.itemName(itemName);
        return _this;
    }
    /** Name of the backed up item. */
    az_backup_protection_auto_disable_for_azurewl_command_builder.prototype.itemName = function (value) {
        this.setFlag("--item-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_backup_protection_auto_disable_for_azurewl_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_backup_protection_auto_disable_for_azurewl_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_backup_protection_auto_disable_for_azurewl_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Name of the Recovery services vault. */
    az_backup_protection_auto_disable_for_azurewl_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    return az_backup_protection_auto_disable_for_azurewl_command_builder;
}(base_1.CommandBuilder));
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
var az_backup_protection_auto_enable_for_azurewl_command_builder = /** @class */ (function (_super) {
    __extends(az_backup_protection_auto_enable_for_azurewl_command_builder, _super);
    function az_backup_protection_auto_enable_for_azurewl_command_builder(commandPath, resultDataTypeName, policyName, protectableItemName, protectableItemType, serverName, workloadType) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.policyName(policyName);
        _this.protectableItemName(protectableItemName);
        _this.protectableItemType(protectableItemType);
        _this.serverName(serverName);
        _this.workloadType(workloadType);
        return _this;
    }
    /** Name of the backup policy. */
    az_backup_protection_auto_enable_for_azurewl_command_builder.prototype.policyName = function (value) {
        this.setFlag("--policy-name", value);
        return this;
    };
    /** Specify the resource name to be protected by Azure Backup service. */
    az_backup_protection_auto_enable_for_azurewl_command_builder.prototype.protectableItemName = function (value) {
        this.setFlag("--protectable-item-name", value);
        return this;
    };
    /** Specifiy the type of applications within the Resource which should be discovered and protected by Azure Backup. */
    az_backup_protection_auto_enable_for_azurewl_command_builder.prototype.protectableItemType = function (value) {
        this.setFlag("--protectable-item-type", value);
        return this;
    };
    /** Parent Server name of the item. */
    az_backup_protection_auto_enable_for_azurewl_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** Specifiy the type of applications within the Resource which should be discovered and protected by Azure Backup. */
    az_backup_protection_auto_enable_for_azurewl_command_builder.prototype.workloadType = function (value) {
        this.setFlag("--workload-type", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_backup_protection_auto_enable_for_azurewl_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_backup_protection_auto_enable_for_azurewl_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_backup_protection_auto_enable_for_azurewl_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Name of the Recovery services vault. */
    az_backup_protection_auto_enable_for_azurewl_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    return az_backup_protection_auto_enable_for_azurewl_command_builder;
}(base_1.CommandBuilder));
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
var az_backup_protection_backup_now_command_builder = /** @class */ (function (_super) {
    __extends(az_backup_protection_backup_now_command_builder, _super);
    function az_backup_protection_backup_now_command_builder(commandPath, resultDataTypeName, itemName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.itemName(itemName);
        return _this;
    }
    /** Name of the backed up item. */
    az_backup_protection_backup_now_command_builder.prototype.itemName = function (value) {
        this.setFlag("--item-name", value);
        return this;
    };
    /** Specifiy the backup management type. Define how Azure Backup manages the backup of entities within the ARM resource. For eg: AzureWorkloads refers to workloads installed within Azure VMs, AzureStorage refers to entities within Storage account. Required only if friendly name is used as Container name. */
    az_backup_protection_backup_now_command_builder.prototype.backupManagementType = function (value) {
        this.setFlag("--backup-management-type", value);
        return this;
    };
    /** 'Full, Differential, Log, Copy-only-full' for backup Item type 'MSSQL'. 'Full, Differential' for backup item type 'SAPHANA'. */
    az_backup_protection_backup_now_command_builder.prototype.backupType = function (value) {
        this.setFlag("--backup-type", value);
        return this;
    };
    /** Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required. */
    az_backup_protection_backup_now_command_builder.prototype.containerName = function (value) {
        this.setFlag("--container-name", value);
        return this;
    };
    /** Option to enable compression. */
    az_backup_protection_backup_now_command_builder.prototype.enableCompression = function (value) {
        this.setFlag("--enable-compression", value.toString());
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_backup_protection_backup_now_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_backup_protection_backup_now_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The date until which this backed up copy will be available for retrieval, in UTC (d-m-Y). For SAPHANA and SQL workload, retain-until parameter value will be overridden by the underlying policy. */
    az_backup_protection_backup_now_command_builder.prototype.retainUntil = function (value) {
        this.setFlag("--retain-until", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_backup_protection_backup_now_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Name of the Recovery services vault. */
    az_backup_protection_backup_now_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    /** Specifiy the type of applications within the Resource which should be discovered and protected by Azure Backup. */
    az_backup_protection_backup_now_command_builder.prototype.workloadType = function (value) {
        this.setFlag("--workload-type", value);
        return this;
    };
    return az_backup_protection_backup_now_command_builder;
}(base_1.CommandBuilder));
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
var az_backup_protection_check_vm_command_builder = /** @class */ (function (_super) {
    __extends(az_backup_protection_check_vm_command_builder, _super);
    function az_backup_protection_check_vm_command_builder(commandPath, resultDataTypeName, vmId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.vmId(vmId);
        return _this;
    }
    /** ID of the virtual machine to be checked for protection. */
    az_backup_protection_check_vm_command_builder.prototype.vmId = function (value) {
        this.setFlag("--vm-id", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_backup_protection_check_vm_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_backup_protection_check_vm_command_builder;
}(base_1.CommandBuilder));
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
var az_backup_protection_disable_command_builder = /** @class */ (function (_super) {
    __extends(az_backup_protection_disable_command_builder, _super);
    function az_backup_protection_disable_command_builder(commandPath, resultDataTypeName, containerName, itemName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.containerName(containerName);
        _this.itemName(itemName);
        return _this;
    }
    /** Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required. */
    az_backup_protection_disable_command_builder.prototype.containerName = function (value) {
        this.setFlag("--container-name", value);
        return this;
    };
    /** Name of the backed up item. */
    az_backup_protection_disable_command_builder.prototype.itemName = function (value) {
        this.setFlag("--item-name", value);
        return this;
    };
    /** Specifiy the backup management type. Define how Azure Backup manages the backup of entities within the ARM resource. For eg: AzureWorkloads refers to workloads installed within Azure VMs, AzureStorage refers to entities within Storage account. Required only if friendly name is used as Container name. */
    az_backup_protection_disable_command_builder.prototype.backupManagementType = function (value) {
        this.setFlag("--backup-management-type", value);
        return this;
    };
    /** Option to delete existing backed up data in the Recovery services vault. */
    az_backup_protection_disable_command_builder.prototype.deleteBackupData = function (value) {
        this.setFlag("--delete-backup-data", value.toString());
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_backup_protection_disable_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_backup_protection_disable_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_backup_protection_disable_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Name of the Recovery services vault. */
    az_backup_protection_disable_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    /** Specifiy the type of applications within the Resource which should be discovered and protected by Azure Backup. */
    az_backup_protection_disable_command_builder.prototype.workloadType = function (value) {
        this.setFlag("--workload-type", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_backup_protection_disable_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_backup_protection_disable_command_builder;
}(base_1.CommandBuilder));
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
var az_backup_protection_enable_for_azurefileshare_command_builder = /** @class */ (function (_super) {
    __extends(az_backup_protection_enable_for_azurefileshare_command_builder, _super);
    function az_backup_protection_enable_for_azurefileshare_command_builder(commandPath, resultDataTypeName, azureFileShare, policyName, storageAccount) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.azureFileShare(azureFileShare);
        _this.policyName(policyName);
        _this.storageAccount(storageAccount);
        return _this;
    }
    /** Name of the Azure FileShare. */
    az_backup_protection_enable_for_azurefileshare_command_builder.prototype.azureFileShare = function (value) {
        this.setFlag("--azure-file-share", value);
        return this;
    };
    /** Name of the backup policy. */
    az_backup_protection_enable_for_azurefileshare_command_builder.prototype.policyName = function (value) {
        this.setFlag("--policy-name", value);
        return this;
    };
    /** Name of the Storage Account of the FileShare. */
    az_backup_protection_enable_for_azurefileshare_command_builder.prototype.storageAccount = function (value) {
        this.setFlag("--storage-account", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_backup_protection_enable_for_azurefileshare_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_backup_protection_enable_for_azurefileshare_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_backup_protection_enable_for_azurefileshare_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Name of the Recovery services vault. */
    az_backup_protection_enable_for_azurefileshare_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    return az_backup_protection_enable_for_azurefileshare_command_builder;
}(base_1.CommandBuilder));
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
var az_backup_protection_enable_for_azurewl_command_builder = /** @class */ (function (_super) {
    __extends(az_backup_protection_enable_for_azurewl_command_builder, _super);
    function az_backup_protection_enable_for_azurewl_command_builder(commandPath, resultDataTypeName, policyName, protectableItemName, protectableItemType, serverName, workloadType) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.policyName(policyName);
        _this.protectableItemName(protectableItemName);
        _this.protectableItemType(protectableItemType);
        _this.serverName(serverName);
        _this.workloadType(workloadType);
        return _this;
    }
    /** Name of the backup policy. */
    az_backup_protection_enable_for_azurewl_command_builder.prototype.policyName = function (value) {
        this.setFlag("--policy-name", value);
        return this;
    };
    /** Specify the resource name to be protected by Azure Backup service. */
    az_backup_protection_enable_for_azurewl_command_builder.prototype.protectableItemName = function (value) {
        this.setFlag("--protectable-item-name", value);
        return this;
    };
    /** Specifiy the type of applications within the Resource which should be discovered and protected by Azure Backup. */
    az_backup_protection_enable_for_azurewl_command_builder.prototype.protectableItemType = function (value) {
        this.setFlag("--protectable-item-type", value);
        return this;
    };
    /** Parent Server name of the item. */
    az_backup_protection_enable_for_azurewl_command_builder.prototype.serverName = function (value) {
        this.setFlag("--server-name", value);
        return this;
    };
    /** Specifiy the type of applications within the Resource which should be discovered and protected by Azure Backup. */
    az_backup_protection_enable_for_azurewl_command_builder.prototype.workloadType = function (value) {
        this.setFlag("--workload-type", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_backup_protection_enable_for_azurewl_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_backup_protection_enable_for_azurewl_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_backup_protection_enable_for_azurewl_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Name of the Recovery services vault. */
    az_backup_protection_enable_for_azurewl_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    return az_backup_protection_enable_for_azurewl_command_builder;
}(base_1.CommandBuilder));
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
var az_backup_protection_enable_for_vm_command_builder = /** @class */ (function (_super) {
    __extends(az_backup_protection_enable_for_vm_command_builder, _super);
    function az_backup_protection_enable_for_vm_command_builder(commandPath, resultDataTypeName, policyName, vm) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.policyName(policyName);
        _this.vm(vm);
        return _this;
    }
    /** Name of the backup policy. */
    az_backup_protection_enable_for_vm_command_builder.prototype.policyName = function (value) {
        this.setFlag("--policy-name", value);
        return this;
    };
    /** Name or ID of the Virtual Machine to be protected. */
    az_backup_protection_enable_for_vm_command_builder.prototype.vm = function (value) {
        this.setFlag("--vm", value);
        return this;
    };
    /** Option to decide whether to include or exclude the disk or reset any previous settings to default behavior. */
    az_backup_protection_enable_for_vm_command_builder.prototype.diskListSetting = function (value) {
        this.setFlag("--disk-list-setting", value);
        return this;
    };
    /** List of disks to be excluded or included. */
    az_backup_protection_enable_for_vm_command_builder.prototype.diskslist = function (value) {
        this.setFlag("--diskslist", value);
        return this;
    };
    /** Option to specify to backup OS disk only. */
    az_backup_protection_enable_for_vm_command_builder.prototype.excludeAllDataDisks = function (value) {
        this.setFlag("--exclude-all-data-disks", value.toString());
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_backup_protection_enable_for_vm_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_backup_protection_enable_for_vm_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_backup_protection_enable_for_vm_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Name of the Recovery services vault. */
    az_backup_protection_enable_for_vm_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    return az_backup_protection_enable_for_vm_command_builder;
}(base_1.CommandBuilder));
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
var az_backup_protection_resume_command_builder = /** @class */ (function (_super) {
    __extends(az_backup_protection_resume_command_builder, _super);
    function az_backup_protection_resume_command_builder(commandPath, resultDataTypeName, containerName, itemName, policyName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.containerName(containerName);
        _this.itemName(itemName);
        _this.policyName(policyName);
        return _this;
    }
    /** Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required. */
    az_backup_protection_resume_command_builder.prototype.containerName = function (value) {
        this.setFlag("--container-name", value);
        return this;
    };
    /** Name of the backed up item. */
    az_backup_protection_resume_command_builder.prototype.itemName = function (value) {
        this.setFlag("--item-name", value);
        return this;
    };
    /** Name of the backup policy. */
    az_backup_protection_resume_command_builder.prototype.policyName = function (value) {
        this.setFlag("--policy-name", value);
        return this;
    };
    /** Specifiy the backup management type. Define how Azure Backup manages the backup of entities within the ARM resource. For eg: AzureWorkloads refers to workloads installed within Azure VMs, AzureStorage refers to entities within Storage account. Required only if friendly name is used as Container name. */
    az_backup_protection_resume_command_builder.prototype.backupManagementType = function (value) {
        this.setFlag("--backup-management-type", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_backup_protection_resume_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_backup_protection_resume_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_backup_protection_resume_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Name of the Recovery services vault. */
    az_backup_protection_resume_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    /** Specifiy the type of applications within the Resource which should be discovered and protected by Azure Backup. */
    az_backup_protection_resume_command_builder.prototype.workloadType = function (value) {
        this.setFlag("--workload-type", value);
        return this;
    };
    return az_backup_protection_resume_command_builder;
}(base_1.CommandBuilder));
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
var az_backup_protection_undelete_command_builder = /** @class */ (function (_super) {
    __extends(az_backup_protection_undelete_command_builder, _super);
    function az_backup_protection_undelete_command_builder(commandPath, resultDataTypeName, backupManagementType, containerName, itemName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.backupManagementType(backupManagementType);
        _this.containerName(containerName);
        _this.itemName(itemName);
        return _this;
    }
    /** Specifiy the backup management type. Define how Azure Backup manages the backup of entities within the ARM resource. For eg: AzureWorkloads refers to workloads installed within Azure VMs, AzureStorage refers to entities within Storage account. Required only if friendly name is used as Container name. */
    az_backup_protection_undelete_command_builder.prototype.backupManagementType = function (value) {
        this.setFlag("--backup-management-type", value);
        return this;
    };
    /** Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required. */
    az_backup_protection_undelete_command_builder.prototype.containerName = function (value) {
        this.setFlag("--container-name", value);
        return this;
    };
    /** Name of the backed up item. */
    az_backup_protection_undelete_command_builder.prototype.itemName = function (value) {
        this.setFlag("--item-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_backup_protection_undelete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_backup_protection_undelete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_backup_protection_undelete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Name of the Recovery services vault. */
    az_backup_protection_undelete_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    /** Specifiy the type of applications within the Resource which should be discovered and protected by Azure Backup. */
    az_backup_protection_undelete_command_builder.prototype.workloadType = function (value) {
        this.setFlag("--workload-type", value);
        return this;
    };
    return az_backup_protection_undelete_command_builder;
}(base_1.CommandBuilder));
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
var az_backup_protection_update_for_vm_command_builder = /** @class */ (function (_super) {
    __extends(az_backup_protection_update_for_vm_command_builder, _super);
    function az_backup_protection_update_for_vm_command_builder(commandPath, resultDataTypeName, containerName, itemName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.containerName(containerName);
        _this.itemName(itemName);
        return _this;
    }
    /** Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required. */
    az_backup_protection_update_for_vm_command_builder.prototype.containerName = function (value) {
        this.setFlag("--container-name", value);
        return this;
    };
    /** Name of the backed up item. */
    az_backup_protection_update_for_vm_command_builder.prototype.itemName = function (value) {
        this.setFlag("--item-name", value);
        return this;
    };
    /** Option to decide whether to include or exclude the disk or reset any previous settings to default behavior. */
    az_backup_protection_update_for_vm_command_builder.prototype.diskListSetting = function (value) {
        this.setFlag("--disk-list-setting", value);
        return this;
    };
    /** List of disks to be excluded or included. */
    az_backup_protection_update_for_vm_command_builder.prototype.diskslist = function (value) {
        this.setFlag("--diskslist", value);
        return this;
    };
    /** Option to specify to backup OS disk only. */
    az_backup_protection_update_for_vm_command_builder.prototype.excludeAllDataDisks = function (value) {
        this.setFlag("--exclude-all-data-disks", value.toString());
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_backup_protection_update_for_vm_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_backup_protection_update_for_vm_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_backup_protection_update_for_vm_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Name of the Recovery services vault. */
    az_backup_protection_update_for_vm_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    return az_backup_protection_update_for_vm_command_builder;
}(base_1.CommandBuilder));
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
 *                               [--workload-type {MSSQL, SAPASE, SAPHANA}]
 * ```
 *
 * @param {string} containerName Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required.
 * @param {string} itemName Name of the backed up item.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {'AlternateWorkloadRestore' | 'OriginalWorkloadRestore' | 'RestoreAsFiles'} restoreMode Specify the restore mode.
 * @param {string} vaultName Name of the Recovery services vault.
 */
var az_backup_recoveryconfig_show_command_builder = /** @class */ (function (_super) {
    __extends(az_backup_recoveryconfig_show_command_builder, _super);
    function az_backup_recoveryconfig_show_command_builder(commandPath, resultDataTypeName, containerName, itemName, resourceGroup, restoreMode, vaultName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.containerName(containerName);
        _this.itemName(itemName);
        _this.resourceGroup(resourceGroup);
        _this.restoreMode(restoreMode);
        _this.vaultName(vaultName);
        return _this;
    }
    /** Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required. */
    az_backup_recoveryconfig_show_command_builder.prototype.containerName = function (value) {
        this.setFlag("--container-name", value);
        return this;
    };
    /** Name of the backed up item. */
    az_backup_recoveryconfig_show_command_builder.prototype.itemName = function (value) {
        this.setFlag("--item-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_backup_recoveryconfig_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Specify the restore mode. */
    az_backup_recoveryconfig_show_command_builder.prototype.restoreMode = function (value) {
        this.setFlag("--restore-mode", value);
        return this;
    };
    /** Name of the Recovery services vault. */
    az_backup_recoveryconfig_show_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    /** Specifiy the backup management type. Define how Azure Backup manages the backup of entities within the ARM resource. For eg: AzureWorkloads refers to workloads installed within Azure VMs, AzureStorage refers to entities within Storage account. Required only if friendly name is used as Container name. */
    az_backup_recoveryconfig_show_command_builder.prototype.backupManagementType = function (value) {
        this.setFlag("--backup-management-type", value);
        return this;
    };
    /** The path to which the DB should be restored as files. */
    az_backup_recoveryconfig_show_command_builder.prototype.filepath = function (value) {
        this.setFlag("--filepath", value);
        return this;
    };
    /** Name of the starting Recovery point. */
    az_backup_recoveryconfig_show_command_builder.prototype.fromFullRpName = function (value) {
        this.setFlag("--from-full-rp-name", value);
        return this;
    };
    /** Specify the point-in-time which will be restored. */
    az_backup_recoveryconfig_show_command_builder.prototype.logPointInTime = function (value) {
        this.setFlag("--log-point-in-time", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_backup_recoveryconfig_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of the recovery point. */
    az_backup_recoveryconfig_show_command_builder.prototype.rpName = function (value) {
        this.setFlag("--rp-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_backup_recoveryconfig_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The target container to which the DB recovery point should be downloaded as files. */
    az_backup_recoveryconfig_show_command_builder.prototype.targetContainerName = function (value) {
        this.setFlag("--target-container-name", value);
        return this;
    };
    /** Specify the target item name for the restore operation. */
    az_backup_recoveryconfig_show_command_builder.prototype.targetItemName = function (value) {
        this.setFlag("--target-item-name", value);
        return this;
    };
    /** Specify the parent server name of the target item. */
    az_backup_recoveryconfig_show_command_builder.prototype.targetServerName = function (value) {
        this.setFlag("--target-server-name", value);
        return this;
    };
    /** Specify the type of the server which should be discovered. */
    az_backup_recoveryconfig_show_command_builder.prototype.targetServerType = function (value) {
        this.setFlag("--target-server-type", value);
        return this;
    };
    /** Specifiy the type of applications within the Resource which should be discovered and protected by Azure Backup. */
    az_backup_recoveryconfig_show_command_builder.prototype.workloadType = function (value) {
        this.setFlag("--workload-type", value);
        return this;
    };
    return az_backup_recoveryconfig_show_command_builder;
}(base_1.CommandBuilder));
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
var az_backup_recoverypoint_list_command_builder = /** @class */ (function (_super) {
    __extends(az_backup_recoverypoint_list_command_builder, _super);
    function az_backup_recoverypoint_list_command_builder(commandPath, resultDataTypeName, containerName, itemName, resourceGroup, vaultName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.containerName(containerName);
        _this.itemName(itemName);
        _this.resourceGroup(resourceGroup);
        _this.vaultName(vaultName);
        return _this;
    }
    /** Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required. */
    az_backup_recoverypoint_list_command_builder.prototype.containerName = function (value) {
        this.setFlag("--container-name", value);
        return this;
    };
    /** Name of the backed up item. */
    az_backup_recoverypoint_list_command_builder.prototype.itemName = function (value) {
        this.setFlag("--item-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_backup_recoverypoint_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Recovery services vault. */
    az_backup_recoverypoint_list_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    /** Specifiy the backup management type. Define how Azure Backup manages the backup of entities within the ARM resource. For eg: AzureWorkloads refers to workloads installed within Azure VMs, AzureStorage refers to entities within Storage account. Required only if friendly name is used as Container name. */
    az_backup_recoverypoint_list_command_builder.prototype.backupManagementType = function (value) {
        this.setFlag("--backup-management-type", value);
        return this;
    };
    /** The end date of the range in UTC (d-m-Y). */
    az_backup_recoverypoint_list_command_builder.prototype.endDate = function (value) {
        this.setFlag("--end-date", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_backup_recoverypoint_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** The start date of the range in UTC (d-m-Y). */
    az_backup_recoverypoint_list_command_builder.prototype.startDate = function (value) {
        this.setFlag("--start-date", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_backup_recoverypoint_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Specifiy the type of applications within the Resource which should be discovered and protected by Azure Backup. */
    az_backup_recoverypoint_list_command_builder.prototype.workloadType = function (value) {
        this.setFlag("--workload-type", value);
        return this;
    };
    return az_backup_recoverypoint_list_command_builder;
}(base_1.CommandBuilder));
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
var az_backup_recoverypoint_show_command_builder = /** @class */ (function (_super) {
    __extends(az_backup_recoverypoint_show_command_builder, _super);
    function az_backup_recoverypoint_show_command_builder(commandPath, resultDataTypeName, containerName, itemName, name) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.containerName(containerName);
        _this.itemName(itemName);
        _this.name(name);
        return _this;
    }
    /** Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required. */
    az_backup_recoverypoint_show_command_builder.prototype.containerName = function (value) {
        this.setFlag("--container-name", value);
        return this;
    };
    /** Name of the backed up item. */
    az_backup_recoverypoint_show_command_builder.prototype.itemName = function (value) {
        this.setFlag("--item-name", value);
        return this;
    };
    /** Name of the recovery point. You can use the backup recovery point list command to get the name of a backed up item. */
    az_backup_recoverypoint_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Specifiy the backup management type. Define how Azure Backup manages the backup of entities within the ARM resource. For eg: AzureWorkloads refers to workloads installed within Azure VMs, AzureStorage refers to entities within Storage account. Required only if friendly name is used as Container name. */
    az_backup_recoverypoint_show_command_builder.prototype.backupManagementType = function (value) {
        this.setFlag("--backup-management-type", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_backup_recoverypoint_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_backup_recoverypoint_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_backup_recoverypoint_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_backup_recoverypoint_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Name of the Recovery services vault. */
    az_backup_recoverypoint_show_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    /** Specifiy the type of applications within the Resource which should be discovered and protected by Azure Backup. */
    az_backup_recoverypoint_show_command_builder.prototype.workloadType = function (value) {
        this.setFlag("--workload-type", value);
        return this;
    };
    return az_backup_recoverypoint_show_command_builder;
}(base_1.CommandBuilder));
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
var az_backup_recoverypoint_show_log_chain_command_builder = /** @class */ (function (_super) {
    __extends(az_backup_recoverypoint_show_log_chain_command_builder, _super);
    function az_backup_recoverypoint_show_log_chain_command_builder(commandPath, resultDataTypeName, containerName, itemName, resourceGroup, vaultName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.containerName(containerName);
        _this.itemName(itemName);
        _this.resourceGroup(resourceGroup);
        _this.vaultName(vaultName);
        return _this;
    }
    /** Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required. */
    az_backup_recoverypoint_show_log_chain_command_builder.prototype.containerName = function (value) {
        this.setFlag("--container-name", value);
        return this;
    };
    /** Name of the backed up item. */
    az_backup_recoverypoint_show_log_chain_command_builder.prototype.itemName = function (value) {
        this.setFlag("--item-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_backup_recoverypoint_show_log_chain_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name of the Recovery services vault. */
    az_backup_recoverypoint_show_log_chain_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    /** Specifiy the backup management type. Define how Azure Backup manages the backup of entities within the ARM resource. For eg: AzureWorkloads refers to workloads installed within Azure VMs, AzureStorage refers to entities within Storage account. Required only if friendly name is used as Container name. */
    az_backup_recoverypoint_show_log_chain_command_builder.prototype.backupManagementType = function (value) {
        this.setFlag("--backup-management-type", value);
        return this;
    };
    /** The end date of the range in UTC (d-m-Y). */
    az_backup_recoverypoint_show_log_chain_command_builder.prototype.endDate = function (value) {
        this.setFlag("--end-date", value);
        return this;
    };
    /** The start date of the range in UTC (d-m-Y). */
    az_backup_recoverypoint_show_log_chain_command_builder.prototype.startDate = function (value) {
        this.setFlag("--start-date", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_backup_recoverypoint_show_log_chain_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Specifiy the type of applications within the Resource which should be discovered and protected by Azure Backup. */
    az_backup_recoverypoint_show_log_chain_command_builder.prototype.workloadType = function (value) {
        this.setFlag("--workload-type", value);
        return this;
    };
    return az_backup_recoverypoint_show_log_chain_command_builder;
}(base_1.CommandBuilder));
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
var az_backup_restore_files_mount_rp_command_builder = /** @class */ (function (_super) {
    __extends(az_backup_restore_files_mount_rp_command_builder, _super);
    function az_backup_restore_files_mount_rp_command_builder(commandPath, resultDataTypeName, containerName, itemName, rpName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.containerName(containerName);
        _this.itemName(itemName);
        _this.rpName(rpName);
        return _this;
    }
    /** Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required. */
    az_backup_restore_files_mount_rp_command_builder.prototype.containerName = function (value) {
        this.setFlag("--container-name", value);
        return this;
    };
    /** Name of the backed up item. */
    az_backup_restore_files_mount_rp_command_builder.prototype.itemName = function (value) {
        this.setFlag("--item-name", value);
        return this;
    };
    /** Name of the recovery point. */
    az_backup_restore_files_mount_rp_command_builder.prototype.rpName = function (value) {
        this.setFlag("--rp-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_backup_restore_files_mount_rp_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_backup_restore_files_mount_rp_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_backup_restore_files_mount_rp_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Name of the Recovery services vault. */
    az_backup_restore_files_mount_rp_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    return az_backup_restore_files_mount_rp_command_builder;
}(base_1.CommandBuilder));
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
var az_backup_restore_files_unmount_rp_command_builder = /** @class */ (function (_super) {
    __extends(az_backup_restore_files_unmount_rp_command_builder, _super);
    function az_backup_restore_files_unmount_rp_command_builder(commandPath, resultDataTypeName, containerName, itemName, rpName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.containerName(containerName);
        _this.itemName(itemName);
        _this.rpName(rpName);
        return _this;
    }
    /** Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required. */
    az_backup_restore_files_unmount_rp_command_builder.prototype.containerName = function (value) {
        this.setFlag("--container-name", value);
        return this;
    };
    /** Name of the backed up item. */
    az_backup_restore_files_unmount_rp_command_builder.prototype.itemName = function (value) {
        this.setFlag("--item-name", value);
        return this;
    };
    /** Name of the recovery point. */
    az_backup_restore_files_unmount_rp_command_builder.prototype.rpName = function (value) {
        this.setFlag("--rp-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_backup_restore_files_unmount_rp_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_backup_restore_files_unmount_rp_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_backup_restore_files_unmount_rp_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Name of the Recovery services vault. */
    az_backup_restore_files_unmount_rp_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    return az_backup_restore_files_unmount_rp_command_builder;
}(base_1.CommandBuilder));
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
var az_backup_restore_restore_azurefiles_command_builder = /** @class */ (function (_super) {
    __extends(az_backup_restore_restore_azurefiles_command_builder, _super);
    function az_backup_restore_restore_azurefiles_command_builder(commandPath, resultDataTypeName, containerName, itemName, resolveConflict, restoreMode, rpName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.containerName(containerName);
        _this.itemName(itemName);
        _this.resolveConflict(resolveConflict);
        _this.restoreMode(restoreMode);
        _this.rpName(rpName);
        return _this;
    }
    /** Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required. */
    az_backup_restore_restore_azurefiles_command_builder.prototype.containerName = function (value) {
        this.setFlag("--container-name", value);
        return this;
    };
    /** Name of the backed up item. */
    az_backup_restore_restore_azurefiles_command_builder.prototype.itemName = function (value) {
        this.setFlag("--item-name", value);
        return this;
    };
    /** Instruction if there's a conflict with the restored data. */
    az_backup_restore_restore_azurefiles_command_builder.prototype.resolveConflict = function (value) {
        this.setFlag("--resolve-conflict", value);
        return this;
    };
    /** Specify the restore mode. */
    az_backup_restore_restore_azurefiles_command_builder.prototype.restoreMode = function (value) {
        this.setFlag("--restore-mode", value);
        return this;
    };
    /** Name of the recovery point. */
    az_backup_restore_restore_azurefiles_command_builder.prototype.rpName = function (value) {
        this.setFlag("--rp-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_backup_restore_restore_azurefiles_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_backup_restore_restore_azurefiles_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The absolute path of the file, to be restored within the file share, as a string. This path is the same path used in the 'az storage file download' or 'az storage file show' CLI commands. */
    az_backup_restore_restore_azurefiles_command_builder.prototype.sourceFilePath = function (value) {
        this.setFlag("--source-file-path", value);
        return this;
    };
    /** Specify the source file type to be selected. */
    az_backup_restore_restore_azurefiles_command_builder.prototype.sourceFileType = function (value) {
        this.setFlag("--source-file-type", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_backup_restore_restore_azurefiles_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Destination file share to which content will be restored. */
    az_backup_restore_restore_azurefiles_command_builder.prototype.targetFileShare = function (value) {
        this.setFlag("--target-file-share", value);
        return this;
    };
    /** Destination folder to which content will be restored. To restore content to root , leave the folder name empty. */
    az_backup_restore_restore_azurefiles_command_builder.prototype.targetFolder = function (value) {
        this.setFlag("--target-folder", value);
        return this;
    };
    /** Destination storage account to which content will be restored. */
    az_backup_restore_restore_azurefiles_command_builder.prototype.targetStorageAccount = function (value) {
        this.setFlag("--target-storage-account", value);
        return this;
    };
    /** Name of the Recovery services vault. */
    az_backup_restore_restore_azurefiles_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    return az_backup_restore_restore_azurefiles_command_builder;
}(base_1.CommandBuilder));
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
var az_backup_restore_restore_azurefileshare_command_builder = /** @class */ (function (_super) {
    __extends(az_backup_restore_restore_azurefileshare_command_builder, _super);
    function az_backup_restore_restore_azurefileshare_command_builder(commandPath, resultDataTypeName, containerName, itemName, resolveConflict, restoreMode, rpName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.containerName(containerName);
        _this.itemName(itemName);
        _this.resolveConflict(resolveConflict);
        _this.restoreMode(restoreMode);
        _this.rpName(rpName);
        return _this;
    }
    /** Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required. */
    az_backup_restore_restore_azurefileshare_command_builder.prototype.containerName = function (value) {
        this.setFlag("--container-name", value);
        return this;
    };
    /** Name of the backed up item. */
    az_backup_restore_restore_azurefileshare_command_builder.prototype.itemName = function (value) {
        this.setFlag("--item-name", value);
        return this;
    };
    /** Instruction if there's a conflict with the restored data. */
    az_backup_restore_restore_azurefileshare_command_builder.prototype.resolveConflict = function (value) {
        this.setFlag("--resolve-conflict", value);
        return this;
    };
    /** Specify the restore mode. */
    az_backup_restore_restore_azurefileshare_command_builder.prototype.restoreMode = function (value) {
        this.setFlag("--restore-mode", value);
        return this;
    };
    /** Name of the recovery point. */
    az_backup_restore_restore_azurefileshare_command_builder.prototype.rpName = function (value) {
        this.setFlag("--rp-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_backup_restore_restore_azurefileshare_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_backup_restore_restore_azurefileshare_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_backup_restore_restore_azurefileshare_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Destination file share to which content will be restored. */
    az_backup_restore_restore_azurefileshare_command_builder.prototype.targetFileShare = function (value) {
        this.setFlag("--target-file-share", value);
        return this;
    };
    /** Destination folder to which content will be restored. To restore content to root , leave the folder name empty. */
    az_backup_restore_restore_azurefileshare_command_builder.prototype.targetFolder = function (value) {
        this.setFlag("--target-folder", value);
        return this;
    };
    /** Destination storage account to which content will be restored. */
    az_backup_restore_restore_azurefileshare_command_builder.prototype.targetStorageAccount = function (value) {
        this.setFlag("--target-storage-account", value);
        return this;
    };
    /** Name of the Recovery services vault. */
    az_backup_restore_restore_azurefileshare_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    return az_backup_restore_restore_azurefileshare_command_builder;
}(base_1.CommandBuilder));
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
var az_backup_restore_restore_azurewl_command_builder = /** @class */ (function (_super) {
    __extends(az_backup_restore_restore_azurewl_command_builder, _super);
    function az_backup_restore_restore_azurewl_command_builder(commandPath, resultDataTypeName, recoveryConfig) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.recoveryConfig(recoveryConfig);
        return _this;
    }
    /** Specify the recovery configuration of a backed up item. The configuration object can be obtained from 'backup recoveryconfig show' command. */
    az_backup_restore_restore_azurewl_command_builder.prototype.recoveryConfig = function (value) {
        this.setFlag("--recovery-config", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_backup_restore_restore_azurewl_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_backup_restore_restore_azurewl_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_backup_restore_restore_azurewl_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Name of the Recovery services vault. */
    az_backup_restore_restore_azurewl_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    return az_backup_restore_restore_azurewl_command_builder;
}(base_1.CommandBuilder));
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
var az_backup_restore_restore_disks_command_builder = /** @class */ (function (_super) {
    __extends(az_backup_restore_restore_disks_command_builder, _super);
    function az_backup_restore_restore_disks_command_builder(commandPath, resultDataTypeName, containerName, itemName, rpName, storageAccount) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.containerName(containerName);
        _this.itemName(itemName);
        _this.rpName(rpName);
        _this.storageAccount(storageAccount);
        return _this;
    }
    /** Name of the backup container. Accepts 'Name' or 'FriendlyName' from the output of az backup container list command. If 'FriendlyName' is passed then BackupManagementType is required. */
    az_backup_restore_restore_disks_command_builder.prototype.containerName = function (value) {
        this.setFlag("--container-name", value);
        return this;
    };
    /** Name of the backed up item. */
    az_backup_restore_restore_disks_command_builder.prototype.itemName = function (value) {
        this.setFlag("--item-name", value);
        return this;
    };
    /** Name of the recovery point. */
    az_backup_restore_restore_disks_command_builder.prototype.rpName = function (value) {
        this.setFlag("--rp-name", value);
        return this;
    };
    /** Name or ID of the staging storage account. The VM configuration will be restored to this storage account. See the help for --restore-to-staging-storage-account parameter for more info. */
    az_backup_restore_restore_disks_command_builder.prototype.storageAccount = function (value) {
        this.setFlag("--storage-account", value);
        return this;
    };
    /** List of disks to be excluded or included. */
    az_backup_restore_restore_disks_command_builder.prototype.diskslist = function (value) {
        this.setFlag("--diskslist", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_backup_restore_restore_disks_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_backup_restore_restore_disks_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Use this flag to specify to restore as unmanaged disks. */
    az_backup_restore_restore_disks_command_builder.prototype.restoreAsUnmanagedDisks = function (value) {
        this.setFlag("--restore-as-unmanaged-disks", value.toString());
        return this;
    };
    /** Use this flag to restore only OS disks of a backed up VM. */
    az_backup_restore_restore_disks_command_builder.prototype.restoreOnlyOsdisk = function (value) {
        this.setFlag("--restore-only-osdisk", value.toString());
        return this;
    };
    /** Use this flag when you want disks to be restored to the staging storage account using the --storage-account parameter. When not specified, disks will be restored to their original storage accounts. Default: false. */
    az_backup_restore_restore_disks_command_builder.prototype.restoreToStagingStorageAccount = function (value) {
        this.setFlag("--restore-to-staging-storage-account", value.toString());
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_backup_restore_restore_disks_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Use this to specify the target resource group in which the restored disks will be saved. */
    az_backup_restore_restore_disks_command_builder.prototype.targetResourceGroup = function (value) {
        this.setFlag("--target-resource-group", value);
        return this;
    };
    /** Name of the Recovery services vault. */
    az_backup_restore_restore_disks_command_builder.prototype.vaultName = function (value) {
        this.setFlag("--vault-name", value);
        return this;
    };
    return az_backup_restore_restore_disks_command_builder;
}(base_1.CommandBuilder));
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
var az_backup_vault_backup_properties_set_command_builder = /** @class */ (function (_super) {
    __extends(az_backup_vault_backup_properties_set_command_builder, _super);
    function az_backup_vault_backup_properties_set_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Sets backup storage properties for a Recovery Services vault. */
    az_backup_vault_backup_properties_set_command_builder.prototype.backupStorageRedundancy = function (value) {
        this.setFlag("--backup-storage-redundancy", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_backup_vault_backup_properties_set_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the Recovery services vault. */
    az_backup_vault_backup_properties_set_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_backup_vault_backup_properties_set_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Set soft-delete feature state for a Recovery Services Vault. */
    az_backup_vault_backup_properties_set_command_builder.prototype.softDeleteFeatureState = function (value) {
        this.setFlag("--soft-delete-feature-state", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_backup_vault_backup_properties_set_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_backup_vault_backup_properties_set_command_builder;
}(base_1.CommandBuilder));
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
var az_backup_vault_backup_properties_show_command_builder = /** @class */ (function (_super) {
    __extends(az_backup_vault_backup_properties_show_command_builder, _super);
    function az_backup_vault_backup_properties_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_backup_vault_backup_properties_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the Recovery services vault. */
    az_backup_vault_backup_properties_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_backup_vault_backup_properties_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_backup_vault_backup_properties_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_backup_vault_backup_properties_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_backup_vault_backup_properties_show_command_builder;
}(base_1.CommandBuilder));
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
var az_backup_vault_create_command_builder = /** @class */ (function (_super) {
    __extends(az_backup_vault_create_command_builder, _super);
    function az_backup_vault_create_command_builder(commandPath, resultDataTypeName, location, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.location(location);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_backup_vault_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Name of the Recovery services vault. */
    az_backup_vault_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_backup_vault_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_backup_vault_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_backup_vault_create_command_builder;
}(base_1.CommandBuilder));
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
var az_backup_vault_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_backup_vault_delete_command_builder, _super);
    function az_backup_vault_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Force completion of the requested action. */
    az_backup_vault_delete_command_builder.prototype.force = function (value) {
        this.setFlag("--force", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_backup_vault_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the Recovery services vault. */
    az_backup_vault_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_backup_vault_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_backup_vault_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_backup_vault_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_backup_vault_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_backup_vault_list_command_builder = /** @class */ (function (_super) {
    __extends(az_backup_vault_list_command_builder, _super);
    function az_backup_vault_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_backup_vault_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_backup_vault_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_backup_vault_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_backup_vault_list_command_builder;
}(base_1.CommandBuilder));
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
var az_backup_vault_show_command_builder = /** @class */ (function (_super) {
    __extends(az_backup_vault_show_command_builder, _super);
    function az_backup_vault_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_backup_vault_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the Recovery services vault. */
    az_backup_vault_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_backup_vault_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_backup_vault_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_backup_vault_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_backup_vault_show_command_builder;
}(base_1.CommandBuilder));
