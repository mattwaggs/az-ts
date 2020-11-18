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
exports.az_netappfiles = exports.az_netappfiles_volume = exports.az_netappfiles_volume_replication = exports.az_netappfiles_volume_export_policy = exports.az_netappfiles_volume_backup = exports.az_netappfiles_vault = exports.az_netappfiles_snapshot = exports.az_netappfiles_snapshot_policy = exports.az_netappfiles_pool = exports.az_netappfiles_account = exports.az_netappfiles_account_backup = exports.az_netappfiles_account_backup_policy = exports.az_netappfiles_account_ad = void 0;
var base_1 = require("../base");
/** Manage Azure NetApp Files (ANF) Account active directories. */
var az_netappfiles_account_ad = /** @class */ (function () {
    function az_netappfiles_account_ad() {
    }
    /**
     * Add an active directory to the account.
     *
     * Syntax:
     * ```
     * az netappfiles account ad add --dns
     *                               --domain
     *                               --password
     *                               --smb-server-name
     *                               --username
     *                               [--account-name]
     *                               [--ad-name]
     *                               [--add]
     *                               [--backup-operators]
     *                               [--force-string]
     *                               [--ids]
     *                               [--kdc-ip]
     *                               [--organizational-unit]
     *                               [--remove]
     *                               [--resource-group]
     *                               [--server-root-ca-cert]
     *                               [--set]
     *                               [--subscription]
     * ```
     *
     * @param {string} dns Comma separated list of DNS server IP addresses for the Active Directory domain.
     * @param {string} domain Name of the Active Directory domain.
     * @param {string} password Plain text password of Active Directory domain administrator.
     * @param {string} smbServerName NetBIOS name of the SMB server. This name will be registered as a computer account in the AD and used to mount volumes. Must be 10 characters or less.
     * @param {string} username Username of Active Directory domain administrator.
     */
    az_netappfiles_account_ad.add = function (dns, domain, password, smbServerName, username) {
        return new az_netappfiles_account_ad_add_command_builder("az netappfiles account ad add", 'az_netappfiles_account_ad_add_command_result', dns, domain, password, smbServerName, username);
    };
    /**
     * List the active directories of an account.
     *
     * Syntax:
     * ```
     * az netappfiles account ad list --account-name
     *                                --resource-group
     *                                [--query-examples]
     *                                [--subscription]
     * ```
     *
     * @param {string} accountName The name of the ANF account.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_netappfiles_account_ad.list = function (accountName, resourceGroup) {
        return new az_netappfiles_account_ad_list_command_builder("az netappfiles account ad list", 'az_netappfiles_account_ad_list_command_result', accountName, resourceGroup);
    };
    /**
     * Remove an active directory from the account.
     *
     * Syntax:
     * ```
     * az netappfiles account ad remove --active-directory
     *                                  [--account-name]
     *                                  [--ids]
     *                                  [--resource-group]
     *                                  [--subscription]
     * ```
     *
     * @param {string} activeDirectory The id of the active directory.
     */
    az_netappfiles_account_ad.remove = function (activeDirectory) {
        return new az_netappfiles_account_ad_remove_command_builder("az netappfiles account ad remove", 'az_netappfiles_account_ad_remove_command_result', activeDirectory);
    };
    return az_netappfiles_account_ad;
}());
exports.az_netappfiles_account_ad = az_netappfiles_account_ad;
/** Manage Azure NetApp Files (ANF) Backup Policy Resources. */
var az_netappfiles_account_backup_policy = /** @class */ (function () {
    function az_netappfiles_account_backup_policy() {
    }
    /**
     * Create a new Azure NetApp Files (ANF) backup policy.
     *
     * Syntax:
     * ```
     * az netappfiles account backup-policy create --account-name
     *                                             --backup-policy-name
     *                                             --location
     *                                             --resource-group
     *                                             [--daily-backups]
     *                                             [--enabled {false, true}]
     *                                             [--monthly-backups]
     *                                             [--subscription]
     *                                             [--tags]
     *                                             [--weekly-backups]
     *                                             [--yearly-backups]
     * ```
     *
     * @param {string} accountName The name of the ANF account.
     * @param {string} backupPolicyName The name of the ANF backup policy.
     * @param {string} location The location of the backup.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_netappfiles_account_backup_policy.create = function (accountName, backupPolicyName, location, resourceGroup) {
        return new az_netappfiles_account_backup_policy_create_command_builder("az netappfiles account backup-policy create", 'az_netappfiles_account_backup_policy_create_command_result', accountName, backupPolicyName, location, resourceGroup);
    };
    /**
     * Delete the specified ANF backup policy.
     *
     * Syntax:
     * ```
     * az netappfiles account backup-policy delete [--account-name]
     *                                             [--backup-policy-name]
     *                                             [--ids]
     *                                             [--resource-group]
     *                                             [--subscription]
     * ```
     */
    az_netappfiles_account_backup_policy["delete"] = function () {
        return new az_netappfiles_account_backup_policy_delete_command_builder("az netappfiles account backup-policy delete", 'az_netappfiles_account_backup_policy_delete_command_result');
    };
    /**
     * List the ANF backup policy for the specified account.
     *
     * Syntax:
     * ```
     * az netappfiles account backup-policy list --account-name
     *                                           --resource-group
     *                                           [--query-examples]
     *                                           [--subscription]
     * ```
     *
     * @param {string} accountName The name of the ANF account.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_netappfiles_account_backup_policy.list = function (accountName, resourceGroup) {
        return new az_netappfiles_account_backup_policy_list_command_builder("az netappfiles account backup-policy list", 'az_netappfiles_account_backup_policy_list_command_result', accountName, resourceGroup);
    };
    /**
     * Get the specified ANF backup policy.
     *
     * Syntax:
     * ```
     * az netappfiles account backup-policy show [--account-name]
     *                                           [--backup-policy-name]
     *                                           [--ids]
     *                                           [--query-examples]
     *                                           [--resource-group]
     *                                           [--subscription]
     * ```
     */
    az_netappfiles_account_backup_policy.show = function () {
        return new az_netappfiles_account_backup_policy_show_command_builder("az netappfiles account backup-policy show", 'az_netappfiles_account_backup_policy_show_command_result');
    };
    /**
     * Update the specified ANF backup policy.
     *
     * Syntax:
     * ```
     * az netappfiles account backup-policy update --location
     *                                             [--account-name]
     *                                             [--backup-policy-name]
     *                                             [--daily-backups]
     *                                             [--enabled {false, true}]
     *                                             [--ids]
     *                                             [--monthly-backups]
     *                                             [--resource-group]
     *                                             [--subscription]
     *                                             [--weekly-backups]
     *                                             [--yearly-backups]
     * ```
     *
     * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
     */
    az_netappfiles_account_backup_policy.update = function (location) {
        return new az_netappfiles_account_backup_policy_update_command_builder("az netappfiles account backup-policy update", 'az_netappfiles_account_backup_policy_update_command_result', location);
    };
    return az_netappfiles_account_backup_policy;
}());
exports.az_netappfiles_account_backup_policy = az_netappfiles_account_backup_policy;
/** Manage Azure NetApp Files (ANF) Account Backup Resources. */
var az_netappfiles_account_backup = /** @class */ (function () {
    function az_netappfiles_account_backup() {
    }
    /**
     * Get list of all Azure NetApp Files (ANF) Account Backups.
     *
     * Syntax:
     * ```
     * az netappfiles account backup list --account-name
     *                                    --resource-group
     *                                    [--query-examples]
     *                                    [--subscription]
     * ```
     *
     * @param {string} accountName The name of the ANF account.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_netappfiles_account_backup.list = function (accountName, resourceGroup) {
        return new az_netappfiles_account_backup_list_command_builder("az netappfiles account backup list", 'az_netappfiles_account_backup_list_command_result', accountName, resourceGroup);
    };
    return az_netappfiles_account_backup;
}());
exports.az_netappfiles_account_backup = az_netappfiles_account_backup;
/** Manage Azure NetApp Files (ANF) Account Resources. */
var az_netappfiles_account = /** @class */ (function () {
    function az_netappfiles_account() {
    }
    /**
     * Create a new Azure NetApp Files (ANF) account. Note that active directories are added using the subgroup commands.
     *
     * Syntax:
     * ```
     * az netappfiles account create --account-name
     *                               --location
     *                               --resource-group
     *                               [--subscription]
     *                               [--tags]
     * ```
     *
     * @param {string} accountName The name of the ANF account.
     * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_netappfiles_account.create = function (accountName, location, resourceGroup) {
        return new az_netappfiles_account_create_command_builder("az netappfiles account create", 'az_netappfiles_account_create_command_result', accountName, location, resourceGroup);
    };
    /**
     * Delete the specified ANF account.
     *
     * Syntax:
     * ```
     * az netappfiles account delete [--account-name]
     *                               [--ids]
     *                               [--resource-group]
     *                               [--subscription]
     * ```
     */
    az_netappfiles_account["delete"] = function () {
        return new az_netappfiles_account_delete_command_builder("az netappfiles account delete", 'az_netappfiles_account_delete_command_result');
    };
    /**
     * List ANF accounts.
     *
     * Syntax:
     * ```
     * az netappfiles account list --resource-group
     *                             [--query-examples]
     *                             [--subscription]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_netappfiles_account.list = function (resourceGroup) {
        return new az_netappfiles_account_list_command_builder("az netappfiles account list", 'az_netappfiles_account_list_command_result', resourceGroup);
    };
    /**
     * Get the specified ANF account.
     *
     * Syntax:
     * ```
     * az netappfiles account show [--account-name]
     *                             [--ids]
     *                             [--query-examples]
     *                             [--resource-group]
     *                             [--subscription]
     * ```
     */
    az_netappfiles_account.show = function () {
        return new az_netappfiles_account_show_command_builder("az netappfiles account show", 'az_netappfiles_account_show_command_result');
    };
    /**
     * Set/modify the tags for a specified ANF account.
     *
     * Syntax:
     * ```
     * az netappfiles account update [--account-name]
     *                               [--add]
     *                               [--force-string]
     *                               [--ids]
     *                               [--remove]
     *                               [--resource-group]
     *                               [--set]
     *                               [--subscription]
     *                               [--tags]
     * ```
     */
    az_netappfiles_account.update = function () {
        return new az_netappfiles_account_update_command_builder("az netappfiles account update", 'az_netappfiles_account_update_command_result');
    };
    return az_netappfiles_account;
}());
exports.az_netappfiles_account = az_netappfiles_account;
/** Manage Azure NetApp Files (ANF) Pool Resources. */
var az_netappfiles_pool = /** @class */ (function () {
    function az_netappfiles_pool() {
    }
    /**
     * Create a new Azure NetApp Files (ANF) pool.
     *
     * Syntax:
     * ```
     * az netappfiles pool create --account-name
     *                            --location
     *                            --name
     *                            --resource-group
     *                            --service-level {Premium, Standard, Ultra}
     *                            --size
     *                            [--qos-type]
     *                            [--subscription]
     *                            [--tags]
     * ```
     *
     * @param {string} accountName The name of the ANF account.
     * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
     * @param {string} poolName The name of the ANF pool.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {'Premium' | 'Standard' | 'Ultra'} serviceLevel The service level for the ANF pool.
     * @param {string} size The size for the ANF pool. Must be an integer number of tebibytes in multiples of 4.
     */
    az_netappfiles_pool.create = function (accountName, location, poolName, resourceGroup, serviceLevel, size) {
        return new az_netappfiles_pool_create_command_builder("az netappfiles pool create", 'az_netappfiles_pool_create_command_result', accountName, location, poolName, resourceGroup, serviceLevel, size);
    };
    /**
     * Delete the specified ANF pool.
     *
     * Syntax:
     * ```
     * az netappfiles pool delete [--account-name]
     *                            [--ids]
     *                            [--name]
     *                            [--resource-group]
     *                            [--subscription]
     * ```
     */
    az_netappfiles_pool["delete"] = function () {
        return new az_netappfiles_pool_delete_command_builder("az netappfiles pool delete", 'az_netappfiles_pool_delete_command_result');
    };
    /**
     * L:ist the ANF pools for the specified account.
     *
     * Syntax:
     * ```
     * az netappfiles pool list --account-name
     *                          --resource-group
     *                          [--query-examples]
     *                          [--subscription]
     * ```
     *
     * @param {string} accountName The name of the ANF account.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_netappfiles_pool.list = function (accountName, resourceGroup) {
        return new az_netappfiles_pool_list_command_builder("az netappfiles pool list", 'az_netappfiles_pool_list_command_result', accountName, resourceGroup);
    };
    /**
     * Get the specified ANF pool.
     *
     * Syntax:
     * ```
     * az netappfiles pool show [--account-name]
     *                          [--ids]
     *                          [--name]
     *                          [--query-examples]
     *                          [--resource-group]
     *                          [--subscription]
     * ```
     */
    az_netappfiles_pool.show = function () {
        return new az_netappfiles_pool_show_command_builder("az netappfiles pool show", 'az_netappfiles_pool_show_command_result');
    };
    /**
     * Update the tags of the specified ANF pool.
     *
     * Syntax:
     * ```
     * az netappfiles pool update [--account-name]
     *                            [--add]
     *                            [--force-string]
     *                            [--ids]
     *                            [--name]
     *                            [--qos-type]
     *                            [--remove]
     *                            [--resource-group]
     *                            [--set]
     *                            [--size]
     *                            [--subscription]
     *                            [--tags]
     * ```
     */
    az_netappfiles_pool.update = function () {
        return new az_netappfiles_pool_update_command_builder("az netappfiles pool update", 'az_netappfiles_pool_update_command_result');
    };
    return az_netappfiles_pool;
}());
exports.az_netappfiles_pool = az_netappfiles_pool;
/** Manage Azure NetApp Files (ANF) Snapshot Policy Resources. */
var az_netappfiles_snapshot_policy = /** @class */ (function () {
    function az_netappfiles_snapshot_policy() {
    }
    /**
     * Create a new Azure NetApp Files (ANF) snapshot policy.
     *
     * Syntax:
     * ```
     * az netappfiles snapshot policy create --account-name
     *                                       --location
     *                                       --resource-group
     *                                       --snapshot-policy-name
     *                                       [--daily-hour]
     *                                       [--daily-minute]
     *                                       [--daily-snapshots]
     *                                       [--enabled {false, true}]
     *                                       [--hourly-minute]
     *                                       [--hourly-snapshots]
     *                                       [--monthly-days]
     *                                       [--monthly-hour]
     *                                       [--monthly-minute]
     *                                       [--monthly-snapshots]
     *                                       [--subscription]
     *                                       [--tags]
     *                                       [--weekly-day]
     *                                       [--weekly-hour]
     *                                       [--weekly-minute]
     *                                       [--weekly-snapshots]
     * ```
     *
     * @param {string} accountName The name of the ANF account.
     * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} snapshotPolicyName The name of the ANF snapshot policy.
     */
    az_netappfiles_snapshot_policy.create = function (accountName, location, resourceGroup, snapshotPolicyName) {
        return new az_netappfiles_snapshot_policy_create_command_builder("az netappfiles snapshot policy create", 'az_netappfiles_snapshot_policy_create_command_result', accountName, location, resourceGroup, snapshotPolicyName);
    };
    /**
     * Delete the specified ANF snapshot policy.
     *
     * Syntax:
     * ```
     * az netappfiles snapshot policy delete [--account-name]
     *                                       [--ids]
     *                                       [--resource-group]
     *                                       [--snapshot-policy-name]
     *                                       [--subscription]
     * ```
     */
    az_netappfiles_snapshot_policy["delete"] = function () {
        return new az_netappfiles_snapshot_policy_delete_command_builder("az netappfiles snapshot policy delete", 'az_netappfiles_snapshot_policy_delete_command_result');
    };
    /**
     * List the ANF snapshot policies for the specified account.
     *
     * Syntax:
     * ```
     * az netappfiles snapshot policy list --account-name
     *                                     --resource-group
     *                                     [--query-examples]
     *                                     [--subscription]
     * ```
     *
     * @param {string} accountName The name of the ANF account.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_netappfiles_snapshot_policy.list = function (accountName, resourceGroup) {
        return new az_netappfiles_snapshot_policy_list_command_builder("az netappfiles snapshot policy list", 'az_netappfiles_snapshot_policy_list_command_result', accountName, resourceGroup);
    };
    /**
     * Get the specified ANF snapshot policy.
     *
     * Syntax:
     * ```
     * az netappfiles snapshot policy show [--account-name]
     *                                     [--ids]
     *                                     [--query-examples]
     *                                     [--resource-group]
     *                                     [--snapshot-policy-name]
     *                                     [--subscription]
     * ```
     */
    az_netappfiles_snapshot_policy.show = function () {
        return new az_netappfiles_snapshot_policy_show_command_builder("az netappfiles snapshot policy show", 'az_netappfiles_snapshot_policy_show_command_result');
    };
    /**
     * Update the specified ANF snapshot policy.
     *
     * Syntax:
     * ```
     * az netappfiles snapshot policy update --location
     *                                       [--account-name]
     *                                       [--daily-hour]
     *                                       [--daily-minute]
     *                                       [--daily-snapshots]
     *                                       [--enabled {false, true}]
     *                                       [--hourly-minute]
     *                                       [--hourly-snapshots]
     *                                       [--ids]
     *                                       [--monthly-days]
     *                                       [--monthly-hour]
     *                                       [--monthly-minute]
     *                                       [--monthly-snapshots]
     *                                       [--resource-group]
     *                                       [--snapshot-policy-name]
     *                                       [--subscription]
     *                                       [--weekly-day]
     *                                       [--weekly-hour]
     *                                       [--weekly-minute]
     *                                       [--weekly-snapshots]
     * ```
     *
     * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
     */
    az_netappfiles_snapshot_policy.update = function (location) {
        return new az_netappfiles_snapshot_policy_update_command_builder("az netappfiles snapshot policy update", 'az_netappfiles_snapshot_policy_update_command_result', location);
    };
    /**
     * Get the all ANF volumes associated with snapshot policy.
     *
     * Syntax:
     * ```
     * az netappfiles snapshot policy volumes [--account-name]
     *                                        [--ids]
     *                                        [--resource-group]
     *                                        [--snapshot-policy-name]
     *                                        [--subscription]
     * ```
     */
    az_netappfiles_snapshot_policy.volumes = function () {
        return new az_netappfiles_snapshot_policy_volumes_command_builder("az netappfiles snapshot policy volumes", 'az_netappfiles_snapshot_policy_volumes_command_result');
    };
    return az_netappfiles_snapshot_policy;
}());
exports.az_netappfiles_snapshot_policy = az_netappfiles_snapshot_policy;
/** Manage Azure NetApp Files (ANF) Snapshot Resources. */
var az_netappfiles_snapshot = /** @class */ (function () {
    function az_netappfiles_snapshot() {
    }
    /**
     * Create a new Azure NetApp Files (ANF) snapshot.
     *
     * Syntax:
     * ```
     * az netappfiles snapshot create --account-name
     *                                --location
     *                                --name
     *                                --pool-name
     *                                --resource-group
     *                                --volume-name
     *                                [--subscription]
     * ```
     *
     * @param {string} accountName The name of the ANF account.
     * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
     * @param {string} snapshotName The name of the ANF snapshot.
     * @param {string} poolName The name of the ANF pool.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} volumeName The name of the ANF volume.
     */
    az_netappfiles_snapshot.create = function (accountName, location, snapshotName, poolName, resourceGroup, volumeName) {
        return new az_netappfiles_snapshot_create_command_builder("az netappfiles snapshot create", 'az_netappfiles_snapshot_create_command_result', accountName, location, snapshotName, poolName, resourceGroup, volumeName);
    };
    /**
     * Delete the specified ANF snapshot.
     *
     * Syntax:
     * ```
     * az netappfiles snapshot delete [--account-name]
     *                                [--ids]
     *                                [--name]
     *                                [--pool-name]
     *                                [--resource-group]
     *                                [--subscription]
     *                                [--volume-name]
     * ```
     */
    az_netappfiles_snapshot["delete"] = function () {
        return new az_netappfiles_snapshot_delete_command_builder("az netappfiles snapshot delete", 'az_netappfiles_snapshot_delete_command_result');
    };
    /**
     * List the snapshots of an ANF volume.
     *
     * Syntax:
     * ```
     * az netappfiles snapshot list --account-name
     *                              --pool-name
     *                              --resource-group
     *                              --volume-name
     *                              [--query-examples]
     *                              [--subscription]
     * ```
     *
     * @param {string} accountName The name of the ANF account.
     * @param {string} poolName The name of the ANF pool.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} volumeName The name of the ANF volume.
     */
    az_netappfiles_snapshot.list = function (accountName, poolName, resourceGroup, volumeName) {
        return new az_netappfiles_snapshot_list_command_builder("az netappfiles snapshot list", 'az_netappfiles_snapshot_list_command_result', accountName, poolName, resourceGroup, volumeName);
    };
    /**
     * Get the specified ANF snapshot.
     *
     * Syntax:
     * ```
     * az netappfiles snapshot show [--account-name]
     *                              [--ids]
     *                              [--name]
     *                              [--pool-name]
     *                              [--query-examples]
     *                              [--resource-group]
     *                              [--subscription]
     *                              [--volume-name]
     * ```
     */
    az_netappfiles_snapshot.show = function () {
        return new az_netappfiles_snapshot_show_command_builder("az netappfiles snapshot show", 'az_netappfiles_snapshot_show_command_result');
    };
    return az_netappfiles_snapshot;
}());
exports.az_netappfiles_snapshot = az_netappfiles_snapshot;
/** Manage Azure NetApp Files (ANF) Vault Resources. */
var az_netappfiles_vault = /** @class */ (function () {
    function az_netappfiles_vault() {
    }
    /**
     * List the ANF vaults for NetApp Account.
     *
     * Syntax:
     * ```
     * az netappfiles vault list --account-name
     *                           --resource-group
     *                           [--query-examples]
     *                           [--subscription]
     * ```
     *
     * @param {string} accountName The name of the ANF account.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_netappfiles_vault.list = function (accountName, resourceGroup) {
        return new az_netappfiles_vault_list_command_builder("az netappfiles vault list", 'az_netappfiles_vault_list_command_result', accountName, resourceGroup);
    };
    return az_netappfiles_vault;
}());
exports.az_netappfiles_vault = az_netappfiles_vault;
/** Manage Azure NetApp Files (ANF) Volume Backup Resources. */
var az_netappfiles_volume_backup = /** @class */ (function () {
    function az_netappfiles_volume_backup() {
    }
    /**
     * Create specified ANF volume backup.
     *
     * Syntax:
     * ```
     * az netappfiles volume backup create --account-name
     *                                     --backup-name
     *                                     --location
     *                                     --name
     *                                     --pool-name
     *                                     --resource-group
     *                                     [--label]
     *                                     [--subscription]
     * ```
     *
     * @param {string} accountName The name of the ANF account.
     * @param {string} backupName The name of the ANF backup.
     * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
     * @param {string} volumeName The name of the ANF volume.
     * @param {string} poolName The name of the ANF pool.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_netappfiles_volume_backup.create = function (accountName, backupName, location, volumeName, poolName, resourceGroup) {
        return new az_netappfiles_volume_backup_create_command_builder("az netappfiles volume backup create", 'az_netappfiles_volume_backup_create_command_result', accountName, backupName, location, volumeName, poolName, resourceGroup);
    };
    /**
     * Delete backup.
     *
     * Syntax:
     * ```
     * az netappfiles volume backup delete [--account-name]
     *                                     [--backup-name]
     *                                     [--ids]
     *                                     [--name]
     *                                     [--pool-name]
     *                                     [--resource-group]
     *                                     [--subscription]
     * ```
     */
    az_netappfiles_volume_backup["delete"] = function () {
        return new az_netappfiles_volume_backup_delete_command_builder("az netappfiles volume backup delete", 'az_netappfiles_volume_backup_delete_command_result');
    };
    /**
     * List the ANF Backups for the specified volume.
     *
     * Syntax:
     * ```
     * az netappfiles volume backup list --account-name
     *                                   --name
     *                                   --pool-name
     *                                   --resource-group
     *                                   [--query-examples]
     *                                   [--subscription]
     * ```
     *
     * @param {string} accountName The name of the ANF account.
     * @param {string} volumeName The name of the ANF pool.
     * @param {string} poolName The name of the ANF pool.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_netappfiles_volume_backup.list = function (accountName, volumeName, poolName, resourceGroup) {
        return new az_netappfiles_volume_backup_list_command_builder("az netappfiles volume backup list", 'az_netappfiles_volume_backup_list_command_result', accountName, volumeName, poolName, resourceGroup);
    };
    /**
     * Get the specified ANF Backup.
     *
     * Syntax:
     * ```
     * az netappfiles volume backup show [--account-name]
     *                                   [--backup-name]
     *                                   [--ids]
     *                                   [--name]
     *                                   [--pool-name]
     *                                   [--query-examples]
     *                                   [--resource-group]
     *                                   [--subscription]
     * ```
     */
    az_netappfiles_volume_backup.show = function () {
        return new az_netappfiles_volume_backup_show_command_builder("az netappfiles volume backup show", 'az_netappfiles_volume_backup_show_command_result');
    };
    /**
     * Update the specified ANF backup with the values provided.
     *
     * Syntax:
     * ```
     * az netappfiles volume backup update [--account-name]
     *                                     [--backup-name]
     *                                     [--ids]
     *                                     [--label]
     *                                     [--name]
     *                                     [--pool-name]
     *                                     [--resource-group]
     *                                     [--subscription]
     *                                     [--tags]
     * ```
     */
    az_netappfiles_volume_backup.update = function () {
        return new az_netappfiles_volume_backup_update_command_builder("az netappfiles volume backup update", 'az_netappfiles_volume_backup_update_command_result');
    };
    return az_netappfiles_volume_backup;
}());
exports.az_netappfiles_volume_backup = az_netappfiles_volume_backup;
/** Manage Azure NetApp Files (ANF) Volume export policies. */
var az_netappfiles_volume_export_policy = /** @class */ (function () {
    function az_netappfiles_volume_export_policy() {
    }
    /**
     * Add a new rule to the export policy for a volume.
     *
     * Syntax:
     * ```
     * az netappfiles volume export-policy add --allowed-clients
     *                                         --cifs {false, true}
     *                                         --nfsv3 {false, true}
     *                                         --nfsv41 {false, true}
     *                                         --rule-index
     *                                         --unix-read-only {false, true}
     *                                         --unix-read-write {false, true}
     *                                         [--account-name]
     *                                         [--add]
     *                                         [--force-string]
     *                                         [--ids]
     *                                         [--name]
     *                                         [--pool-name]
     *                                         [--remove]
     *                                         [--resource-group]
     *                                         [--set]
     *                                         [--subscription]
     * ```
     *
     * @param {string} allowedClients Client ingress specification as comma separated string with IPv4 CIDRs, IPv4 host addresses and host names).
     * @param {boolean} cifs Indication that CIFS protocol is allowed.
     * @param {boolean} nfsv3 Indication that NFSv3 protocol is allowed.
     * @param {boolean} nfsv41 Indication that NFSv4.1 protocol is allowed.
     * @param {string} ruleIndex Order index. No number can be repeated. Max 6 rules.
     * @param {boolean} unixReadOnly Indication of read only access.
     * @param {boolean} unixReadWrite Indication of read and write access.
     */
    az_netappfiles_volume_export_policy.add = function (allowedClients, cifs, nfsv3, nfsv41, ruleIndex, unixReadOnly, unixReadWrite) {
        return new az_netappfiles_volume_export_policy_add_command_builder("az netappfiles volume export-policy add", 'az_netappfiles_volume_export_policy_add_command_result', allowedClients, cifs, nfsv3, nfsv41, ruleIndex, unixReadOnly, unixReadWrite);
    };
    /**
     * List the export policy rules for a volume.
     *
     * Syntax:
     * ```
     * az netappfiles volume export-policy list --account-name
     *                                          --name
     *                                          --pool-name
     *                                          --resource-group
     *                                          [--query-examples]
     *                                          [--subscription]
     * ```
     *
     * @param {string} accountName The name of the ANF account.
     * @param {string} volumeName The name of the ANF volume.
     * @param {string} poolName The name of the ANF pool.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_netappfiles_volume_export_policy.list = function (accountName, volumeName, poolName, resourceGroup) {
        return new az_netappfiles_volume_export_policy_list_command_builder("az netappfiles volume export-policy list", 'az_netappfiles_volume_export_policy_list_command_result', accountName, volumeName, poolName, resourceGroup);
    };
    /**
     * Remove a rule from the export policy for a volume by rule index. The current rules can be obtained by performing the subgroup list command.
     *
     * Syntax:
     * ```
     * az netappfiles volume export-policy remove --rule-index
     *                                            [--account-name]
     *                                            [--add]
     *                                            [--force-string]
     *                                            [--ids]
     *                                            [--name]
     *                                            [--pool-name]
     *                                            [--remove]
     *                                            [--resource-group]
     *                                            [--set]
     *                                            [--subscription]
     * ```
     *
     * @param {string} ruleIndex Order index. Range 1 to 6.
     */
    az_netappfiles_volume_export_policy.remove = function (ruleIndex) {
        return new az_netappfiles_volume_export_policy_remove_command_builder("az netappfiles volume export-policy remove", 'az_netappfiles_volume_export_policy_remove_command_result', ruleIndex);
    };
    return az_netappfiles_volume_export_policy;
}());
exports.az_netappfiles_volume_export_policy = az_netappfiles_volume_export_policy;
/** Manage Azure NetApp Files (ANF) Volume replication operations. */
var az_netappfiles_volume_replication = /** @class */ (function () {
    function az_netappfiles_volume_replication() {
    }
    /**
     * Authorize a volume as a replication destination for a specified source.
     *
     * Syntax:
     * ```
     * az netappfiles volume replication approve --account-name
     *                                           --name
     *                                           --pool-name
     *                                           --remote-volume-resource-id
     *                                           --resource-group
     *                                           [--subscription]
     * ```
     *
     * @param {string} accountName The name of the ANF account.
     * @param {string} volumeName The name of the replication source volume.
     * @param {string} poolName The name of the ANF pool.
     * @param {string} remoteVolumeResourceId The resource id of the destination replication volume.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_netappfiles_volume_replication.approve = function (accountName, volumeName, poolName, remoteVolumeResourceId, resourceGroup) {
        return new az_netappfiles_volume_replication_approve_command_builder("az netappfiles volume replication approve", 'az_netappfiles_volume_replication_approve_command_result', accountName, volumeName, poolName, remoteVolumeResourceId, resourceGroup);
    };
    /**
     * Re-initialise a volume replication for the specified destination volume. The replication process is resumed from source to destination.
     *
     * Syntax:
     * ```
     * az netappfiles volume replication re-initialize [--account-name]
     *                                                 [--ids]
     *                                                 [--name]
     *                                                 [--pool-name]
     *                                                 [--resource-group]
     *                                                 [--subscription]
     * ```
     */
    az_netappfiles_volume_replication.re_initialize = function () {
        return new az_netappfiles_volume_replication_re_initialize_command_builder("az netappfiles volume replication re-initialize", 'az_netappfiles_volume_replication_re_initialize_command_result');
    };
    /**
     * Delete a volume replication for the specified destination volume. The data replication objects of source and destination volumes will be removed.
     *
     * Syntax:
     * ```
     * az netappfiles volume replication remove [--account-name]
     *                                          [--ids]
     *                                          [--name]
     *                                          [--pool-name]
     *                                          [--resource-group]
     *                                          [--subscription]
     * ```
     */
    az_netappfiles_volume_replication.remove = function () {
        return new az_netappfiles_volume_replication_remove_command_builder("az netappfiles volume replication remove", 'az_netappfiles_volume_replication_remove_command_result');
    };
    /**
     * Resync a volume replication for the specified destination volume. The replication process is resumed from source to destination.
     *
     * Syntax:
     * ```
     * az netappfiles volume replication resume [--account-name]
     *                                          [--ids]
     *                                          [--name]
     *                                          [--pool-name]
     *                                          [--resource-group]
     *                                          [--subscription]
     * ```
     */
    az_netappfiles_volume_replication.resume = function () {
        return new az_netappfiles_volume_replication_resume_command_builder("az netappfiles volume replication resume", 'az_netappfiles_volume_replication_resume_command_result');
    };
    /**
     * Get the replication status for the specified replication volume.
     *
     * Syntax:
     * ```
     * az netappfiles volume replication status [--account-name]
     *                                          [--ids]
     *                                          [--name]
     *                                          [--pool-name]
     *                                          [--resource-group]
     *                                          [--subscription]
     * ```
     */
    az_netappfiles_volume_replication.status = function () {
        return new az_netappfiles_volume_replication_status_command_builder("az netappfiles volume replication status", 'az_netappfiles_volume_replication_status_command_result');
    };
    /**
     * Suspend/break a volume replication for the specified destination volume. The replication process is suspended until resumed or deleted.
     *
     * Syntax:
     * ```
     * az netappfiles volume replication suspend [--account-name]
     *                                           [--force {false, true}]
     *                                           [--ids]
     *                                           [--name]
     *                                           [--pool-name]
     *                                           [--resource-group]
     *                                           [--subscription]
     * ```
     */
    az_netappfiles_volume_replication.suspend = function () {
        return new az_netappfiles_volume_replication_suspend_command_builder("az netappfiles volume replication suspend", 'az_netappfiles_volume_replication_suspend_command_result');
    };
    return az_netappfiles_volume_replication;
}());
exports.az_netappfiles_volume_replication = az_netappfiles_volume_replication;
/** Manage Azure NetApp Files (ANF) Volume Resources. */
var az_netappfiles_volume = /** @class */ (function () {
    function az_netappfiles_volume() {
    }
    /**
     * Create a new Azure NetApp Files (ANF) volume. Export policies are applied with the subgroup commands but note that volumes are always created with a default export policy.
     *
     * Syntax:
     * ```
     * az netappfiles volume create --account-name
     *                              --file-path
     *                              --location
     *                              --name
     *                              --pool-name
     *                              --resource-group
     *                              --usage-threshold
     *                              --vnet
     *                              [--backup-enabled {false, true}]
     *                              [--backup-id]
     *                              [--backup-policy-id]
     *                              [--endpoint-type]
     *                              [--has-root-access]
     *                              [--kerberos-enabled]
     *                              [--kerberos5-r]
     *                              [--kerberos5-rw]
     *                              [--kerberos5i-r]
     *                              [--kerberos5i-rw]
     *                              [--kerberos5p-r]
     *                              [--kerberos5p-rw]
     *                              [--policy-enforced {false, true}]
     *                              [--protocol-types]
     *                              [--remote-volume-resource-id]
     *                              [--replication-schedule]
     *                              [--security-style]
     *                              [--service-level {Premium, Standard, Ultra}]
     *                              [--snapshot-dir-visible]
     *                              [--snapshot-id]
     *                              [--snapshot-policy-id]
     *                              [--subnet]
     *                              [--subscription]
     *                              [--tags]
     *                              [--throughput-mibps]
     *                              [--vault-id]
     *                              [--volume-type]
     * ```
     *
     * @param {string} accountName The name of the ANF account.
     * @param {string} filePath A 1-80 character long alphanumeric string value that identifies a unique file share or mount point in the target subnet.
     * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
     * @param {string} volumeName The name of the ANF volume.
     * @param {string} poolName The name of the ANF pool.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} usageThreshold The maximum storage quota allowed for a file system as integer number of GiB. Min 100 GiB, max 100TiB".
     * @param {string} vnet The ARM Id or name of the vnet for the volume.
     */
    az_netappfiles_volume.create = function (accountName, filePath, location, volumeName, poolName, resourceGroup, usageThreshold, vnet) {
        return new az_netappfiles_volume_create_command_builder("az netappfiles volume create", 'az_netappfiles_volume_create_command_result', accountName, filePath, location, volumeName, poolName, resourceGroup, usageThreshold, vnet);
    };
    /**
     * Delete the specified ANF volume.
     *
     * Syntax:
     * ```
     * az netappfiles volume delete [--account-name]
     *                              [--ids]
     *                              [--name]
     *                              [--pool-name]
     *                              [--resource-group]
     *                              [--subscription]
     * ```
     */
    az_netappfiles_volume["delete"] = function () {
        return new az_netappfiles_volume_delete_command_builder("az netappfiles volume delete", 'az_netappfiles_volume_delete_command_result');
    };
    /**
     * List the ANF Pools for the specified account.
     *
     * Syntax:
     * ```
     * az netappfiles volume list --account-name
     *                            --pool-name
     *                            --resource-group
     *                            [--query-examples]
     *                            [--subscription]
     * ```
     *
     * @param {string} accountName The name of the ANF account.
     * @param {string} poolName The name of the ANF pool.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_netappfiles_volume.list = function (accountName, poolName, resourceGroup) {
        return new az_netappfiles_volume_list_command_builder("az netappfiles volume list", 'az_netappfiles_volume_list_command_result', accountName, poolName, resourceGroup);
    };
    /**
     * Get the specified ANF volume.
     *
     * Syntax:
     * ```
     * az netappfiles volume pool-change --new-pool-resource-id
     *                                   [--account-name]
     *                                   [--ids]
     *                                   [--name]
     *                                   [--pool-name]
     *                                   [--resource-group]
     *                                   [--subscription]
     * ```
     *
     * @param {string} newPoolResourceId The resource id of the new ANF pool.
     */
    az_netappfiles_volume.pool_change = function (newPoolResourceId) {
        return new az_netappfiles_volume_pool_change_command_builder("az netappfiles volume pool-change", 'az_netappfiles_volume_pool_change_command_result', newPoolResourceId);
    };
    /**
     * Revert a volume to one of its snapshots.
     *
     * Syntax:
     * ```
     * az netappfiles volume revert --account-name
     *                              --name
     *                              --pool-name
     *                              --resource-group
     *                              --snapshot-id
     *                              [--subscription]
     * ```
     *
     * @param {string} accountName The name of the ANF account.
     * @param {string} volumeName The name of the ANF volume.
     * @param {string} poolName The name of the ANF pool.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} snapshotId SnapshotId of the snapshot. UUID v4 used to identify the Snapshot, example "9760acf5-4638-11e7-9bdb-020073ca3333".
     */
    az_netappfiles_volume.revert = function (accountName, volumeName, poolName, resourceGroup, snapshotId) {
        return new az_netappfiles_volume_revert_command_builder("az netappfiles volume revert", 'az_netappfiles_volume_revert_command_result', accountName, volumeName, poolName, resourceGroup, snapshotId);
    };
    /**
     * Get the specified ANF volume.
     *
     * Syntax:
     * ```
     * az netappfiles volume show [--account-name]
     *                            [--ids]
     *                            [--name]
     *                            [--pool-name]
     *                            [--query-examples]
     *                            [--resource-group]
     *                            [--subscription]
     * ```
     */
    az_netappfiles_volume.show = function () {
        return new az_netappfiles_volume_show_command_builder("az netappfiles volume show", 'az_netappfiles_volume_show_command_result');
    };
    /**
     * Update the specified ANF volume with the values provided. Unspecified values will remain unchanged. Export policies are amended/created with the subgroup commands.
     *
     * Syntax:
     * ```
     * az netappfiles volume update [--account-name]
     *                              [--add]
     *                              [--backup-enabled {false, true}]
     *                              [--backup-policy-id]
     *                              [--force-string]
     *                              [--ids]
     *                              [--name]
     *                              [--policy-enforced {false, true}]
     *                              [--pool-name]
     *                              [--protocol-types]
     *                              [--remove]
     *                              [--resource-group]
     *                              [--service-level {Premium, Standard, Ultra}]
     *                              [--set]
     *                              [--subscription]
     *                              [--tags]
     *                              [--throughput-mibps]
     *                              [--usage-threshold]
     *                              [--vault-id]
     * ```
     */
    az_netappfiles_volume.update = function () {
        return new az_netappfiles_volume_update_command_builder("az netappfiles volume update", 'az_netappfiles_volume_update_command_result');
    };
    return az_netappfiles_volume;
}());
exports.az_netappfiles_volume = az_netappfiles_volume;
/** Manage Azure NetApp Files (ANF) Resources. */
var az_netappfiles = /** @class */ (function () {
    function az_netappfiles() {
    }
    return az_netappfiles;
}());
exports.az_netappfiles = az_netappfiles;
/**
 * Add an active directory to the account.
 *
 * Syntax:
 * ```
 * az netappfiles account ad add --dns
 *                               --domain
 *                               --password
 *                               --smb-server-name
 *                               --username
 *                               [--account-name]
 *                               [--ad-name]
 *                               [--add]
 *                               [--backup-operators]
 *                               [--force-string]
 *                               [--ids]
 *                               [--kdc-ip]
 *                               [--organizational-unit]
 *                               [--remove]
 *                               [--resource-group]
 *                               [--server-root-ca-cert]
 *                               [--set]
 *                               [--subscription]
 * ```
 *
 * @param {string} dns Comma separated list of DNS server IP addresses for the Active Directory domain.
 * @param {string} domain Name of the Active Directory domain.
 * @param {string} password Plain text password of Active Directory domain administrator.
 * @param {string} smbServerName NetBIOS name of the SMB server. This name will be registered as a computer account in the AD and used to mount volumes. Must be 10 characters or less.
 * @param {string} username Username of Active Directory domain administrator.
 */
var az_netappfiles_account_ad_add_command_builder = /** @class */ (function (_super) {
    __extends(az_netappfiles_account_ad_add_command_builder, _super);
    function az_netappfiles_account_ad_add_command_builder(commandPath, resultDataTypeName, dns, domain, password, smbServerName, username) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.dns(dns);
        _this.domain(domain);
        _this.password(password);
        _this.smbServerName(smbServerName);
        _this.username(username);
        return _this;
    }
    /** Comma separated list of DNS server IP addresses for the Active Directory domain. */
    az_netappfiles_account_ad_add_command_builder.prototype.dns = function (value) {
        this.setFlag("--dns", value);
        return this;
    };
    /** Name of the Active Directory domain. */
    az_netappfiles_account_ad_add_command_builder.prototype.domain = function (value) {
        this.setFlag("--domain", value);
        return this;
    };
    /** Plain text password of Active Directory domain administrator. */
    az_netappfiles_account_ad_add_command_builder.prototype.password = function (value) {
        this.setFlag("--password", value);
        return this;
    };
    /** NetBIOS name of the SMB server. This name will be registered as a computer account in the AD and used to mount volumes. Must be 10 characters or less. */
    az_netappfiles_account_ad_add_command_builder.prototype.smbServerName = function (value) {
        this.setFlag("--smb-server-name", value);
        return this;
    };
    /** Username of Active Directory domain administrator. */
    az_netappfiles_account_ad_add_command_builder.prototype.username = function (value) {
        this.setFlag("--username", value);
        return this;
    };
    /** The name of the ANF account. */
    az_netappfiles_account_ad_add_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Name of the active directory machine. This optional parameter is used only while creating kerberos volume. */
    az_netappfiles_account_ad_add_command_builder.prototype.adName = function (value) {
        this.setFlag("--ad-name", value);
        return this;
    };
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_netappfiles_account_ad_add_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** Users to be added to the Built-in Backup Operator active directory group. A list of unique usernames without domain specifier. */
    az_netappfiles_account_ad_add_command_builder.prototype.backupOperators = function (value) {
        this.setFlag("--backup-operators", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_netappfiles_account_ad_add_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_netappfiles_account_ad_add_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Kdc server IP addresses for the active directory machine. This optional parameter is used only while creating kerberos volume. */
    az_netappfiles_account_ad_add_command_builder.prototype.kdcIp = function (value) {
        this.setFlag("--kdc-ip", value);
        return this;
    };
    /** The Organizational Unit (OU) within the Windows Active Directory. */
    az_netappfiles_account_ad_add_command_builder.prototype.organizationalUnit = function (value) {
        this.setFlag("--organizational-unit", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_netappfiles_account_ad_add_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_netappfiles_account_ad_add_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** When LDAP over SSL/TLS is enabled, the LDAP client is required to have base64 encoded Active Directory Certificate Service's self-signed root CA certificate, this optional parameter is used only for dual protocol with LDAP user-mapping volumes. */
    az_netappfiles_account_ad_add_command_builder.prototype.serverRootCaCert = function (value) {
        this.setFlag("--server-root-ca-cert", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_netappfiles_account_ad_add_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_netappfiles_account_ad_add_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_netappfiles_account_ad_add_command_builder;
}(base_1.CommandBuilder));
/**
 * List the active directories of an account.
 *
 * Syntax:
 * ```
 * az netappfiles account ad list --account-name
 *                                --resource-group
 *                                [--query-examples]
 *                                [--subscription]
 * ```
 *
 * @param {string} accountName The name of the ANF account.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_netappfiles_account_ad_list_command_builder = /** @class */ (function (_super) {
    __extends(az_netappfiles_account_ad_list_command_builder, _super);
    function az_netappfiles_account_ad_list_command_builder(commandPath, resultDataTypeName, accountName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the ANF account. */
    az_netappfiles_account_ad_list_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_netappfiles_account_ad_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_netappfiles_account_ad_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_netappfiles_account_ad_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_netappfiles_account_ad_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Remove an active directory from the account.
 *
 * Syntax:
 * ```
 * az netappfiles account ad remove --active-directory
 *                                  [--account-name]
 *                                  [--ids]
 *                                  [--resource-group]
 *                                  [--subscription]
 * ```
 *
 * @param {string} activeDirectory The id of the active directory.
 */
var az_netappfiles_account_ad_remove_command_builder = /** @class */ (function (_super) {
    __extends(az_netappfiles_account_ad_remove_command_builder, _super);
    function az_netappfiles_account_ad_remove_command_builder(commandPath, resultDataTypeName, activeDirectory) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.activeDirectory(activeDirectory);
        return _this;
    }
    /** The id of the active directory. */
    az_netappfiles_account_ad_remove_command_builder.prototype.activeDirectory = function (value) {
        this.setFlag("--active-directory", value);
        return this;
    };
    /** The name of the ANF account. */
    az_netappfiles_account_ad_remove_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_netappfiles_account_ad_remove_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_netappfiles_account_ad_remove_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_netappfiles_account_ad_remove_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_netappfiles_account_ad_remove_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a new Azure NetApp Files (ANF) backup policy.
 *
 * Syntax:
 * ```
 * az netappfiles account backup-policy create --account-name
 *                                             --backup-policy-name
 *                                             --location
 *                                             --resource-group
 *                                             [--daily-backups]
 *                                             [--enabled {false, true}]
 *                                             [--monthly-backups]
 *                                             [--subscription]
 *                                             [--tags]
 *                                             [--weekly-backups]
 *                                             [--yearly-backups]
 * ```
 *
 * @param {string} accountName The name of the ANF account.
 * @param {string} backupPolicyName The name of the ANF backup policy.
 * @param {string} location The location of the backup.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_netappfiles_account_backup_policy_create_command_builder = /** @class */ (function (_super) {
    __extends(az_netappfiles_account_backup_policy_create_command_builder, _super);
    function az_netappfiles_account_backup_policy_create_command_builder(commandPath, resultDataTypeName, accountName, backupPolicyName, location, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.backupPolicyName(backupPolicyName);
        _this.location(location);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the ANF account. */
    az_netappfiles_account_backup_policy_create_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** The name of the ANF backup policy. */
    az_netappfiles_account_backup_policy_create_command_builder.prototype.backupPolicyName = function (value) {
        this.setFlag("--backup-policy-name", value);
        return this;
    };
    /** The location of the backup. */
    az_netappfiles_account_backup_policy_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_netappfiles_account_backup_policy_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Daily backups count to keep. */
    az_netappfiles_account_backup_policy_create_command_builder.prototype.dailyBackups = function (value) {
        this.setFlag("--daily-backups", value);
        return this;
    };
    /** The property to decide policy is enabled or not. */
    az_netappfiles_account_backup_policy_create_command_builder.prototype.enabled = function (value) {
        this.setFlag("--enabled", value.toString());
        return this;
    };
    /** Monthly backups count to keep. */
    az_netappfiles_account_backup_policy_create_command_builder.prototype.monthlyBackups = function (value) {
        this.setFlag("--monthly-backups", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_netappfiles_account_backup_policy_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags in `key[=value]` format. */
    az_netappfiles_account_backup_policy_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    /** Weekly backups count to keep. */
    az_netappfiles_account_backup_policy_create_command_builder.prototype.weeklyBackups = function (value) {
        this.setFlag("--weekly-backups", value);
        return this;
    };
    /** Yearly backups count to keep, not in use at the moment. */
    az_netappfiles_account_backup_policy_create_command_builder.prototype.yearlyBackups = function (value) {
        this.setFlag("--yearly-backups", value);
        return this;
    };
    return az_netappfiles_account_backup_policy_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete the specified ANF backup policy.
 *
 * Syntax:
 * ```
 * az netappfiles account backup-policy delete [--account-name]
 *                                             [--backup-policy-name]
 *                                             [--ids]
 *                                             [--resource-group]
 *                                             [--subscription]
 * ```
 */
var az_netappfiles_account_backup_policy_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_netappfiles_account_backup_policy_delete_command_builder, _super);
    function az_netappfiles_account_backup_policy_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The name of the ANF account. */
    az_netappfiles_account_backup_policy_delete_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** The name of the ANF backup policy. */
    az_netappfiles_account_backup_policy_delete_command_builder.prototype.backupPolicyName = function (value) {
        this.setFlag("--backup-policy-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_netappfiles_account_backup_policy_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_netappfiles_account_backup_policy_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_netappfiles_account_backup_policy_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_netappfiles_account_backup_policy_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List the ANF backup policy for the specified account.
 *
 * Syntax:
 * ```
 * az netappfiles account backup-policy list --account-name
 *                                           --resource-group
 *                                           [--query-examples]
 *                                           [--subscription]
 * ```
 *
 * @param {string} accountName The name of the ANF account.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_netappfiles_account_backup_policy_list_command_builder = /** @class */ (function (_super) {
    __extends(az_netappfiles_account_backup_policy_list_command_builder, _super);
    function az_netappfiles_account_backup_policy_list_command_builder(commandPath, resultDataTypeName, accountName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the ANF account. */
    az_netappfiles_account_backup_policy_list_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_netappfiles_account_backup_policy_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_netappfiles_account_backup_policy_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_netappfiles_account_backup_policy_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_netappfiles_account_backup_policy_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Get the specified ANF backup policy.
 *
 * Syntax:
 * ```
 * az netappfiles account backup-policy show [--account-name]
 *                                           [--backup-policy-name]
 *                                           [--ids]
 *                                           [--query-examples]
 *                                           [--resource-group]
 *                                           [--subscription]
 * ```
 */
var az_netappfiles_account_backup_policy_show_command_builder = /** @class */ (function (_super) {
    __extends(az_netappfiles_account_backup_policy_show_command_builder, _super);
    function az_netappfiles_account_backup_policy_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The name of the ANF account. */
    az_netappfiles_account_backup_policy_show_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** The name of the ANF backup policy. */
    az_netappfiles_account_backup_policy_show_command_builder.prototype.backupPolicyName = function (value) {
        this.setFlag("--backup-policy-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_netappfiles_account_backup_policy_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_netappfiles_account_backup_policy_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_netappfiles_account_backup_policy_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_netappfiles_account_backup_policy_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_netappfiles_account_backup_policy_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update the specified ANF backup policy.
 *
 * Syntax:
 * ```
 * az netappfiles account backup-policy update --location
 *                                             [--account-name]
 *                                             [--backup-policy-name]
 *                                             [--daily-backups]
 *                                             [--enabled {false, true}]
 *                                             [--ids]
 *                                             [--monthly-backups]
 *                                             [--resource-group]
 *                                             [--subscription]
 *                                             [--weekly-backups]
 *                                             [--yearly-backups]
 * ```
 *
 * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
 */
var az_netappfiles_account_backup_policy_update_command_builder = /** @class */ (function (_super) {
    __extends(az_netappfiles_account_backup_policy_update_command_builder, _super);
    function az_netappfiles_account_backup_policy_update_command_builder(commandPath, resultDataTypeName, location) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.location(location);
        return _this;
    }
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_netappfiles_account_backup_policy_update_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** The name of the ANF account. */
    az_netappfiles_account_backup_policy_update_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** The name of the ANF backup policy. */
    az_netappfiles_account_backup_policy_update_command_builder.prototype.backupPolicyName = function (value) {
        this.setFlag("--backup-policy-name", value);
        return this;
    };
    /** Daily backups count to keep. */
    az_netappfiles_account_backup_policy_update_command_builder.prototype.dailyBackups = function (value) {
        this.setFlag("--daily-backups", value);
        return this;
    };
    /** The property to decide policy is enabled or not. */
    az_netappfiles_account_backup_policy_update_command_builder.prototype.enabled = function (value) {
        this.setFlag("--enabled", value.toString());
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_netappfiles_account_backup_policy_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Monthly backups count to keep. */
    az_netappfiles_account_backup_policy_update_command_builder.prototype.monthlyBackups = function (value) {
        this.setFlag("--monthly-backups", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_netappfiles_account_backup_policy_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_netappfiles_account_backup_policy_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Weekly backups count to keep. */
    az_netappfiles_account_backup_policy_update_command_builder.prototype.weeklyBackups = function (value) {
        this.setFlag("--weekly-backups", value);
        return this;
    };
    /** Yearly backups count to keep, not in use at the moment. */
    az_netappfiles_account_backup_policy_update_command_builder.prototype.yearlyBackups = function (value) {
        this.setFlag("--yearly-backups", value);
        return this;
    };
    return az_netappfiles_account_backup_policy_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Get list of all Azure NetApp Files (ANF) Account Backups.
 *
 * Syntax:
 * ```
 * az netappfiles account backup list --account-name
 *                                    --resource-group
 *                                    [--query-examples]
 *                                    [--subscription]
 * ```
 *
 * @param {string} accountName The name of the ANF account.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_netappfiles_account_backup_list_command_builder = /** @class */ (function (_super) {
    __extends(az_netappfiles_account_backup_list_command_builder, _super);
    function az_netappfiles_account_backup_list_command_builder(commandPath, resultDataTypeName, accountName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the ANF account. */
    az_netappfiles_account_backup_list_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_netappfiles_account_backup_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_netappfiles_account_backup_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_netappfiles_account_backup_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_netappfiles_account_backup_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a new Azure NetApp Files (ANF) account. Note that active directories are added using the subgroup commands.
 *
 * Syntax:
 * ```
 * az netappfiles account create --account-name
 *                               --location
 *                               --resource-group
 *                               [--subscription]
 *                               [--tags]
 * ```
 *
 * @param {string} accountName The name of the ANF account.
 * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_netappfiles_account_create_command_builder = /** @class */ (function (_super) {
    __extends(az_netappfiles_account_create_command_builder, _super);
    function az_netappfiles_account_create_command_builder(commandPath, resultDataTypeName, accountName, location, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.location(location);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the ANF account. */
    az_netappfiles_account_create_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_netappfiles_account_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_netappfiles_account_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_netappfiles_account_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags in `key[=value]` format. */
    az_netappfiles_account_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_netappfiles_account_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete the specified ANF account.
 *
 * Syntax:
 * ```
 * az netappfiles account delete [--account-name]
 *                               [--ids]
 *                               [--resource-group]
 *                               [--subscription]
 * ```
 */
var az_netappfiles_account_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_netappfiles_account_delete_command_builder, _super);
    function az_netappfiles_account_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The name of the ANF account. */
    az_netappfiles_account_delete_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_netappfiles_account_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_netappfiles_account_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_netappfiles_account_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_netappfiles_account_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List ANF accounts.
 *
 * Syntax:
 * ```
 * az netappfiles account list --resource-group
 *                             [--query-examples]
 *                             [--subscription]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_netappfiles_account_list_command_builder = /** @class */ (function (_super) {
    __extends(az_netappfiles_account_list_command_builder, _super);
    function az_netappfiles_account_list_command_builder(commandPath, resultDataTypeName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_netappfiles_account_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_netappfiles_account_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_netappfiles_account_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_netappfiles_account_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Get the specified ANF account.
 *
 * Syntax:
 * ```
 * az netappfiles account show [--account-name]
 *                             [--ids]
 *                             [--query-examples]
 *                             [--resource-group]
 *                             [--subscription]
 * ```
 */
var az_netappfiles_account_show_command_builder = /** @class */ (function (_super) {
    __extends(az_netappfiles_account_show_command_builder, _super);
    function az_netappfiles_account_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The name of the ANF account. */
    az_netappfiles_account_show_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_netappfiles_account_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_netappfiles_account_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_netappfiles_account_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_netappfiles_account_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_netappfiles_account_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Set/modify the tags for a specified ANF account.
 *
 * Syntax:
 * ```
 * az netappfiles account update [--account-name]
 *                               [--add]
 *                               [--force-string]
 *                               [--ids]
 *                               [--remove]
 *                               [--resource-group]
 *                               [--set]
 *                               [--subscription]
 *                               [--tags]
 * ```
 */
var az_netappfiles_account_update_command_builder = /** @class */ (function (_super) {
    __extends(az_netappfiles_account_update_command_builder, _super);
    function az_netappfiles_account_update_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The name of the ANF account. */
    az_netappfiles_account_update_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_netappfiles_account_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_netappfiles_account_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_netappfiles_account_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_netappfiles_account_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_netappfiles_account_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_netappfiles_account_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_netappfiles_account_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags in `key[=value]` format. */
    az_netappfiles_account_update_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_netappfiles_account_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a new Azure NetApp Files (ANF) pool.
 *
 * Syntax:
 * ```
 * az netappfiles pool create --account-name
 *                            --location
 *                            --name
 *                            --resource-group
 *                            --service-level {Premium, Standard, Ultra}
 *                            --size
 *                            [--qos-type]
 *                            [--subscription]
 *                            [--tags]
 * ```
 *
 * @param {string} accountName The name of the ANF account.
 * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
 * @param {string} poolName The name of the ANF pool.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {'Premium' | 'Standard' | 'Ultra'} serviceLevel The service level for the ANF pool.
 * @param {string} size The size for the ANF pool. Must be an integer number of tebibytes in multiples of 4.
 */
var az_netappfiles_pool_create_command_builder = /** @class */ (function (_super) {
    __extends(az_netappfiles_pool_create_command_builder, _super);
    function az_netappfiles_pool_create_command_builder(commandPath, resultDataTypeName, accountName, location, poolName, resourceGroup, serviceLevel, size) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.location(location);
        _this.poolName(poolName);
        _this.resourceGroup(resourceGroup);
        _this.serviceLevel(serviceLevel);
        _this.size(size);
        return _this;
    }
    /** The name of the ANF account. */
    az_netappfiles_pool_create_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_netappfiles_pool_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** The name of the ANF pool. */
    az_netappfiles_pool_create_command_builder.prototype.poolName = function (value) {
        this.setFlag("--pool-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_netappfiles_pool_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The service level for the ANF pool. */
    az_netappfiles_pool_create_command_builder.prototype.serviceLevel = function (value) {
        this.setFlag("--service-level", value);
        return this;
    };
    /** The size for the ANF pool. Must be an integer number of tebibytes in multiples of 4. */
    az_netappfiles_pool_create_command_builder.prototype.size = function (value) {
        this.setFlag("--size", value);
        return this;
    };
    /** The qos type of the ANF pool. */
    az_netappfiles_pool_create_command_builder.prototype.qosType = function (value) {
        this.setFlag("--qos-type", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_netappfiles_pool_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags in `key[=value]` format. */
    az_netappfiles_pool_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_netappfiles_pool_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete the specified ANF pool.
 *
 * Syntax:
 * ```
 * az netappfiles pool delete [--account-name]
 *                            [--ids]
 *                            [--name]
 *                            [--resource-group]
 *                            [--subscription]
 * ```
 */
var az_netappfiles_pool_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_netappfiles_pool_delete_command_builder, _super);
    function az_netappfiles_pool_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The name of the ANF account. */
    az_netappfiles_pool_delete_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_netappfiles_pool_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the ANF pool. */
    az_netappfiles_pool_delete_command_builder.prototype.poolName = function (value) {
        this.setFlag("--pool-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_netappfiles_pool_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_netappfiles_pool_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_netappfiles_pool_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * L:ist the ANF pools for the specified account.
 *
 * Syntax:
 * ```
 * az netappfiles pool list --account-name
 *                          --resource-group
 *                          [--query-examples]
 *                          [--subscription]
 * ```
 *
 * @param {string} accountName The name of the ANF account.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_netappfiles_pool_list_command_builder = /** @class */ (function (_super) {
    __extends(az_netappfiles_pool_list_command_builder, _super);
    function az_netappfiles_pool_list_command_builder(commandPath, resultDataTypeName, accountName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the ANF account. */
    az_netappfiles_pool_list_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_netappfiles_pool_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_netappfiles_pool_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_netappfiles_pool_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_netappfiles_pool_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Get the specified ANF pool.
 *
 * Syntax:
 * ```
 * az netappfiles pool show [--account-name]
 *                          [--ids]
 *                          [--name]
 *                          [--query-examples]
 *                          [--resource-group]
 *                          [--subscription]
 * ```
 */
var az_netappfiles_pool_show_command_builder = /** @class */ (function (_super) {
    __extends(az_netappfiles_pool_show_command_builder, _super);
    function az_netappfiles_pool_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The name of the ANF account. */
    az_netappfiles_pool_show_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_netappfiles_pool_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the ANF pool. */
    az_netappfiles_pool_show_command_builder.prototype.poolName = function (value) {
        this.setFlag("--pool-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_netappfiles_pool_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_netappfiles_pool_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_netappfiles_pool_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_netappfiles_pool_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update the tags of the specified ANF pool.
 *
 * Syntax:
 * ```
 * az netappfiles pool update [--account-name]
 *                            [--add]
 *                            [--force-string]
 *                            [--ids]
 *                            [--name]
 *                            [--qos-type]
 *                            [--remove]
 *                            [--resource-group]
 *                            [--set]
 *                            [--size]
 *                            [--subscription]
 *                            [--tags]
 * ```
 */
var az_netappfiles_pool_update_command_builder = /** @class */ (function (_super) {
    __extends(az_netappfiles_pool_update_command_builder, _super);
    function az_netappfiles_pool_update_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The name of the ANF account. */
    az_netappfiles_pool_update_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_netappfiles_pool_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_netappfiles_pool_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_netappfiles_pool_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the ANF pool. */
    az_netappfiles_pool_update_command_builder.prototype.poolName = function (value) {
        this.setFlag("--pool-name", value);
        return this;
    };
    /** The qos type of the ANF pool. */
    az_netappfiles_pool_update_command_builder.prototype.qosType = function (value) {
        this.setFlag("--qos-type", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_netappfiles_pool_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_netappfiles_pool_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_netappfiles_pool_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** The size for the ANF pool. Must be an integer number of tebibytes in multiples of 4. */
    az_netappfiles_pool_update_command_builder.prototype.size = function (value) {
        this.setFlag("--size", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_netappfiles_pool_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags in `key[=value]` format. */
    az_netappfiles_pool_update_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_netappfiles_pool_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a new Azure NetApp Files (ANF) snapshot policy.
 *
 * Syntax:
 * ```
 * az netappfiles snapshot policy create --account-name
 *                                       --location
 *                                       --resource-group
 *                                       --snapshot-policy-name
 *                                       [--daily-hour]
 *                                       [--daily-minute]
 *                                       [--daily-snapshots]
 *                                       [--enabled {false, true}]
 *                                       [--hourly-minute]
 *                                       [--hourly-snapshots]
 *                                       [--monthly-days]
 *                                       [--monthly-hour]
 *                                       [--monthly-minute]
 *                                       [--monthly-snapshots]
 *                                       [--subscription]
 *                                       [--tags]
 *                                       [--weekly-day]
 *                                       [--weekly-hour]
 *                                       [--weekly-minute]
 *                                       [--weekly-snapshots]
 * ```
 *
 * @param {string} accountName The name of the ANF account.
 * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} snapshotPolicyName The name of the ANF snapshot policy.
 */
var az_netappfiles_snapshot_policy_create_command_builder = /** @class */ (function (_super) {
    __extends(az_netappfiles_snapshot_policy_create_command_builder, _super);
    function az_netappfiles_snapshot_policy_create_command_builder(commandPath, resultDataTypeName, accountName, location, resourceGroup, snapshotPolicyName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.location(location);
        _this.resourceGroup(resourceGroup);
        _this.snapshotPolicyName(snapshotPolicyName);
        return _this;
    }
    /** The name of the ANF account. */
    az_netappfiles_snapshot_policy_create_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_netappfiles_snapshot_policy_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_netappfiles_snapshot_policy_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the ANF snapshot policy. */
    az_netappfiles_snapshot_policy_create_command_builder.prototype.snapshotPolicyName = function (value) {
        this.setFlag("--snapshot-policy-name", value);
        return this;
    };
    /** Which hour in UTC timezone the daily snapshot should be taken. */
    az_netappfiles_snapshot_policy_create_command_builder.prototype.dailyHour = function (value) {
        this.setFlag("--daily-hour", value);
        return this;
    };
    /** Which minute the daily snapshot should be taken. */
    az_netappfiles_snapshot_policy_create_command_builder.prototype.dailyMinute = function (value) {
        this.setFlag("--daily-minute", value);
        return this;
    };
    /** Daily snapshots count to keep. */
    az_netappfiles_snapshot_policy_create_command_builder.prototype.dailySnapshots = function (value) {
        this.setFlag("--daily-snapshots", value);
        return this;
    };
    /** The property to decide policy is enabled or not. */
    az_netappfiles_snapshot_policy_create_command_builder.prototype.enabled = function (value) {
        this.setFlag("--enabled", value.toString());
        return this;
    };
    /** Which minute the hourly snapshot should be taken. */
    az_netappfiles_snapshot_policy_create_command_builder.prototype.hourlyMinute = function (value) {
        this.setFlag("--hourly-minute", value);
        return this;
    };
    /** Hourly snapshots count to keep. */
    az_netappfiles_snapshot_policy_create_command_builder.prototype.hourlySnapshots = function (value) {
        this.setFlag("--hourly-snapshots", value);
        return this;
    };
    /** Which days of the month the weekly snapshot should be taken, accepts a comma separated list of days. */
    az_netappfiles_snapshot_policy_create_command_builder.prototype.monthlyDays = function (value) {
        this.setFlag("--monthly-days", value);
        return this;
    };
    /** Which hour in UTC timezone the monthly snapshot should be taken. */
    az_netappfiles_snapshot_policy_create_command_builder.prototype.monthlyHour = function (value) {
        this.setFlag("--monthly-hour", value);
        return this;
    };
    /** Which minute the monthly snapshot should be taken. */
    az_netappfiles_snapshot_policy_create_command_builder.prototype.monthlyMinute = function (value) {
        this.setFlag("--monthly-minute", value);
        return this;
    };
    /** Monthly snapshots count to keep. */
    az_netappfiles_snapshot_policy_create_command_builder.prototype.monthlySnapshots = function (value) {
        this.setFlag("--monthly-snapshots", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_netappfiles_snapshot_policy_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags in `key[=value]` format. */
    az_netappfiles_snapshot_policy_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    /** Which weekday the weekly snapshot should be taken, accepts a comma separated list of week day names in english. */
    az_netappfiles_snapshot_policy_create_command_builder.prototype.weeklyDay = function (value) {
        this.setFlag("--weekly-day", value);
        return this;
    };
    /** Which hour in UTC timezone the weekly snapshot should be taken. */
    az_netappfiles_snapshot_policy_create_command_builder.prototype.weeklyHour = function (value) {
        this.setFlag("--weekly-hour", value);
        return this;
    };
    /** Which minute the weekly snapshot should be taken. */
    az_netappfiles_snapshot_policy_create_command_builder.prototype.weeklyMinute = function (value) {
        this.setFlag("--weekly-minute", value);
        return this;
    };
    /** Weekly snapshots count to keep. */
    az_netappfiles_snapshot_policy_create_command_builder.prototype.weeklySnapshots = function (value) {
        this.setFlag("--weekly-snapshots", value);
        return this;
    };
    return az_netappfiles_snapshot_policy_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete the specified ANF snapshot policy.
 *
 * Syntax:
 * ```
 * az netappfiles snapshot policy delete [--account-name]
 *                                       [--ids]
 *                                       [--resource-group]
 *                                       [--snapshot-policy-name]
 *                                       [--subscription]
 * ```
 */
var az_netappfiles_snapshot_policy_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_netappfiles_snapshot_policy_delete_command_builder, _super);
    function az_netappfiles_snapshot_policy_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The name of the ANF account. */
    az_netappfiles_snapshot_policy_delete_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_netappfiles_snapshot_policy_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_netappfiles_snapshot_policy_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the ANF snapshot policy. */
    az_netappfiles_snapshot_policy_delete_command_builder.prototype.snapshotPolicyName = function (value) {
        this.setFlag("--snapshot-policy-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_netappfiles_snapshot_policy_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_netappfiles_snapshot_policy_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List the ANF snapshot policies for the specified account.
 *
 * Syntax:
 * ```
 * az netappfiles snapshot policy list --account-name
 *                                     --resource-group
 *                                     [--query-examples]
 *                                     [--subscription]
 * ```
 *
 * @param {string} accountName The name of the ANF account.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_netappfiles_snapshot_policy_list_command_builder = /** @class */ (function (_super) {
    __extends(az_netappfiles_snapshot_policy_list_command_builder, _super);
    function az_netappfiles_snapshot_policy_list_command_builder(commandPath, resultDataTypeName, accountName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the ANF account. */
    az_netappfiles_snapshot_policy_list_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_netappfiles_snapshot_policy_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_netappfiles_snapshot_policy_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_netappfiles_snapshot_policy_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_netappfiles_snapshot_policy_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Get the specified ANF snapshot policy.
 *
 * Syntax:
 * ```
 * az netappfiles snapshot policy show [--account-name]
 *                                     [--ids]
 *                                     [--query-examples]
 *                                     [--resource-group]
 *                                     [--snapshot-policy-name]
 *                                     [--subscription]
 * ```
 */
var az_netappfiles_snapshot_policy_show_command_builder = /** @class */ (function (_super) {
    __extends(az_netappfiles_snapshot_policy_show_command_builder, _super);
    function az_netappfiles_snapshot_policy_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The name of the ANF account. */
    az_netappfiles_snapshot_policy_show_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_netappfiles_snapshot_policy_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_netappfiles_snapshot_policy_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_netappfiles_snapshot_policy_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the ANF snapshot policy. */
    az_netappfiles_snapshot_policy_show_command_builder.prototype.snapshotPolicyName = function (value) {
        this.setFlag("--snapshot-policy-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_netappfiles_snapshot_policy_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_netappfiles_snapshot_policy_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update the specified ANF snapshot policy.
 *
 * Syntax:
 * ```
 * az netappfiles snapshot policy update --location
 *                                       [--account-name]
 *                                       [--daily-hour]
 *                                       [--daily-minute]
 *                                       [--daily-snapshots]
 *                                       [--enabled {false, true}]
 *                                       [--hourly-minute]
 *                                       [--hourly-snapshots]
 *                                       [--ids]
 *                                       [--monthly-days]
 *                                       [--monthly-hour]
 *                                       [--monthly-minute]
 *                                       [--monthly-snapshots]
 *                                       [--resource-group]
 *                                       [--snapshot-policy-name]
 *                                       [--subscription]
 *                                       [--weekly-day]
 *                                       [--weekly-hour]
 *                                       [--weekly-minute]
 *                                       [--weekly-snapshots]
 * ```
 *
 * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
 */
var az_netappfiles_snapshot_policy_update_command_builder = /** @class */ (function (_super) {
    __extends(az_netappfiles_snapshot_policy_update_command_builder, _super);
    function az_netappfiles_snapshot_policy_update_command_builder(commandPath, resultDataTypeName, location) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.location(location);
        return _this;
    }
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_netappfiles_snapshot_policy_update_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** The name of the ANF account. */
    az_netappfiles_snapshot_policy_update_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Which hour in UTC timezone the daily snapshot should be taken. */
    az_netappfiles_snapshot_policy_update_command_builder.prototype.dailyHour = function (value) {
        this.setFlag("--daily-hour", value);
        return this;
    };
    /** Which minute the daily snapshot should be taken. */
    az_netappfiles_snapshot_policy_update_command_builder.prototype.dailyMinute = function (value) {
        this.setFlag("--daily-minute", value);
        return this;
    };
    /** Daily snapshots count to keep. */
    az_netappfiles_snapshot_policy_update_command_builder.prototype.dailySnapshots = function (value) {
        this.setFlag("--daily-snapshots", value);
        return this;
    };
    /** The property to decide policy is enabled or not. */
    az_netappfiles_snapshot_policy_update_command_builder.prototype.enabled = function (value) {
        this.setFlag("--enabled", value.toString());
        return this;
    };
    /** Which minute the hourly snapshot should be taken. */
    az_netappfiles_snapshot_policy_update_command_builder.prototype.hourlyMinute = function (value) {
        this.setFlag("--hourly-minute", value);
        return this;
    };
    /** Hourly snapshots count to keep. */
    az_netappfiles_snapshot_policy_update_command_builder.prototype.hourlySnapshots = function (value) {
        this.setFlag("--hourly-snapshots", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_netappfiles_snapshot_policy_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Which days of the month the weekly snapshot should be taken, accepts a comma separated list of days. */
    az_netappfiles_snapshot_policy_update_command_builder.prototype.monthlyDays = function (value) {
        this.setFlag("--monthly-days", value);
        return this;
    };
    /** Which hour in UTC timezone the monthly snapshot should be taken. */
    az_netappfiles_snapshot_policy_update_command_builder.prototype.monthlyHour = function (value) {
        this.setFlag("--monthly-hour", value);
        return this;
    };
    /** Which minute the monthly snapshot should be taken. */
    az_netappfiles_snapshot_policy_update_command_builder.prototype.monthlyMinute = function (value) {
        this.setFlag("--monthly-minute", value);
        return this;
    };
    /** Monthly snapshots count to keep. */
    az_netappfiles_snapshot_policy_update_command_builder.prototype.monthlySnapshots = function (value) {
        this.setFlag("--monthly-snapshots", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_netappfiles_snapshot_policy_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the ANF snapshot policy. */
    az_netappfiles_snapshot_policy_update_command_builder.prototype.snapshotPolicyName = function (value) {
        this.setFlag("--snapshot-policy-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_netappfiles_snapshot_policy_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Which weekday the weekly snapshot should be taken, accepts a comma separated list of week day names in english. */
    az_netappfiles_snapshot_policy_update_command_builder.prototype.weeklyDay = function (value) {
        this.setFlag("--weekly-day", value);
        return this;
    };
    /** Which hour in UTC timezone the weekly snapshot should be taken. */
    az_netappfiles_snapshot_policy_update_command_builder.prototype.weeklyHour = function (value) {
        this.setFlag("--weekly-hour", value);
        return this;
    };
    /** Which minute the weekly snapshot should be taken. */
    az_netappfiles_snapshot_policy_update_command_builder.prototype.weeklyMinute = function (value) {
        this.setFlag("--weekly-minute", value);
        return this;
    };
    /** Weekly snapshots count to keep. */
    az_netappfiles_snapshot_policy_update_command_builder.prototype.weeklySnapshots = function (value) {
        this.setFlag("--weekly-snapshots", value);
        return this;
    };
    return az_netappfiles_snapshot_policy_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Get the all ANF volumes associated with snapshot policy.
 *
 * Syntax:
 * ```
 * az netappfiles snapshot policy volumes [--account-name]
 *                                        [--ids]
 *                                        [--resource-group]
 *                                        [--snapshot-policy-name]
 *                                        [--subscription]
 * ```
 */
var az_netappfiles_snapshot_policy_volumes_command_builder = /** @class */ (function (_super) {
    __extends(az_netappfiles_snapshot_policy_volumes_command_builder, _super);
    function az_netappfiles_snapshot_policy_volumes_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The name of the ANF account. */
    az_netappfiles_snapshot_policy_volumes_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_netappfiles_snapshot_policy_volumes_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_netappfiles_snapshot_policy_volumes_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the ANF snapshot policy. */
    az_netappfiles_snapshot_policy_volumes_command_builder.prototype.snapshotPolicyName = function (value) {
        this.setFlag("--snapshot-policy-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_netappfiles_snapshot_policy_volumes_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_netappfiles_snapshot_policy_volumes_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a new Azure NetApp Files (ANF) snapshot.
 *
 * Syntax:
 * ```
 * az netappfiles snapshot create --account-name
 *                                --location
 *                                --name
 *                                --pool-name
 *                                --resource-group
 *                                --volume-name
 *                                [--subscription]
 * ```
 *
 * @param {string} accountName The name of the ANF account.
 * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
 * @param {string} snapshotName The name of the ANF snapshot.
 * @param {string} poolName The name of the ANF pool.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} volumeName The name of the ANF volume.
 */
var az_netappfiles_snapshot_create_command_builder = /** @class */ (function (_super) {
    __extends(az_netappfiles_snapshot_create_command_builder, _super);
    function az_netappfiles_snapshot_create_command_builder(commandPath, resultDataTypeName, accountName, location, snapshotName, poolName, resourceGroup, volumeName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.location(location);
        _this.snapshotName(snapshotName);
        _this.poolName(poolName);
        _this.resourceGroup(resourceGroup);
        _this.volumeName(volumeName);
        return _this;
    }
    /** The name of the ANF account. */
    az_netappfiles_snapshot_create_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_netappfiles_snapshot_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** The name of the ANF snapshot. */
    az_netappfiles_snapshot_create_command_builder.prototype.snapshotName = function (value) {
        this.setFlag("--snapshot-name", value);
        return this;
    };
    /** The name of the ANF pool. */
    az_netappfiles_snapshot_create_command_builder.prototype.poolName = function (value) {
        this.setFlag("--pool-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_netappfiles_snapshot_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the ANF volume. */
    az_netappfiles_snapshot_create_command_builder.prototype.volumeName = function (value) {
        this.setFlag("--volume-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_netappfiles_snapshot_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_netappfiles_snapshot_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete the specified ANF snapshot.
 *
 * Syntax:
 * ```
 * az netappfiles snapshot delete [--account-name]
 *                                [--ids]
 *                                [--name]
 *                                [--pool-name]
 *                                [--resource-group]
 *                                [--subscription]
 *                                [--volume-name]
 * ```
 */
var az_netappfiles_snapshot_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_netappfiles_snapshot_delete_command_builder, _super);
    function az_netappfiles_snapshot_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The name of the ANF account. */
    az_netappfiles_snapshot_delete_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_netappfiles_snapshot_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the ANF snapshot. */
    az_netappfiles_snapshot_delete_command_builder.prototype.snapshotName = function (value) {
        this.setFlag("--snapshot-name", value);
        return this;
    };
    /** The name of the ANF pool. */
    az_netappfiles_snapshot_delete_command_builder.prototype.poolName = function (value) {
        this.setFlag("--pool-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_netappfiles_snapshot_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_netappfiles_snapshot_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The name of the ANF volume. */
    az_netappfiles_snapshot_delete_command_builder.prototype.volumeName = function (value) {
        this.setFlag("--volume-name", value);
        return this;
    };
    return az_netappfiles_snapshot_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List the snapshots of an ANF volume.
 *
 * Syntax:
 * ```
 * az netappfiles snapshot list --account-name
 *                              --pool-name
 *                              --resource-group
 *                              --volume-name
 *                              [--query-examples]
 *                              [--subscription]
 * ```
 *
 * @param {string} accountName The name of the ANF account.
 * @param {string} poolName The name of the ANF pool.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} volumeName The name of the ANF volume.
 */
var az_netappfiles_snapshot_list_command_builder = /** @class */ (function (_super) {
    __extends(az_netappfiles_snapshot_list_command_builder, _super);
    function az_netappfiles_snapshot_list_command_builder(commandPath, resultDataTypeName, accountName, poolName, resourceGroup, volumeName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.poolName(poolName);
        _this.resourceGroup(resourceGroup);
        _this.volumeName(volumeName);
        return _this;
    }
    /** The name of the ANF account. */
    az_netappfiles_snapshot_list_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** The name of the ANF pool. */
    az_netappfiles_snapshot_list_command_builder.prototype.poolName = function (value) {
        this.setFlag("--pool-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_netappfiles_snapshot_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the ANF volume. */
    az_netappfiles_snapshot_list_command_builder.prototype.volumeName = function (value) {
        this.setFlag("--volume-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_netappfiles_snapshot_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_netappfiles_snapshot_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_netappfiles_snapshot_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Get the specified ANF snapshot.
 *
 * Syntax:
 * ```
 * az netappfiles snapshot show [--account-name]
 *                              [--ids]
 *                              [--name]
 *                              [--pool-name]
 *                              [--query-examples]
 *                              [--resource-group]
 *                              [--subscription]
 *                              [--volume-name]
 * ```
 */
var az_netappfiles_snapshot_show_command_builder = /** @class */ (function (_super) {
    __extends(az_netappfiles_snapshot_show_command_builder, _super);
    function az_netappfiles_snapshot_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The name of the ANF account. */
    az_netappfiles_snapshot_show_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_netappfiles_snapshot_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the ANF snapshot. */
    az_netappfiles_snapshot_show_command_builder.prototype.snapshotName = function (value) {
        this.setFlag("--snapshot-name", value);
        return this;
    };
    /** The name of the ANF pool. */
    az_netappfiles_snapshot_show_command_builder.prototype.poolName = function (value) {
        this.setFlag("--pool-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_netappfiles_snapshot_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_netappfiles_snapshot_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_netappfiles_snapshot_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The name of the ANF volume. */
    az_netappfiles_snapshot_show_command_builder.prototype.volumeName = function (value) {
        this.setFlag("--volume-name", value);
        return this;
    };
    return az_netappfiles_snapshot_show_command_builder;
}(base_1.CommandBuilder));
/**
 * List the ANF vaults for NetApp Account.
 *
 * Syntax:
 * ```
 * az netappfiles vault list --account-name
 *                           --resource-group
 *                           [--query-examples]
 *                           [--subscription]
 * ```
 *
 * @param {string} accountName The name of the ANF account.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_netappfiles_vault_list_command_builder = /** @class */ (function (_super) {
    __extends(az_netappfiles_vault_list_command_builder, _super);
    function az_netappfiles_vault_list_command_builder(commandPath, resultDataTypeName, accountName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the ANF account. */
    az_netappfiles_vault_list_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_netappfiles_vault_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_netappfiles_vault_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_netappfiles_vault_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_netappfiles_vault_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Create specified ANF volume backup.
 *
 * Syntax:
 * ```
 * az netappfiles volume backup create --account-name
 *                                     --backup-name
 *                                     --location
 *                                     --name
 *                                     --pool-name
 *                                     --resource-group
 *                                     [--label]
 *                                     [--subscription]
 * ```
 *
 * @param {string} accountName The name of the ANF account.
 * @param {string} backupName The name of the ANF backup.
 * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
 * @param {string} volumeName The name of the ANF volume.
 * @param {string} poolName The name of the ANF pool.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_netappfiles_volume_backup_create_command_builder = /** @class */ (function (_super) {
    __extends(az_netappfiles_volume_backup_create_command_builder, _super);
    function az_netappfiles_volume_backup_create_command_builder(commandPath, resultDataTypeName, accountName, backupName, location, volumeName, poolName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.backupName(backupName);
        _this.location(location);
        _this.volumeName(volumeName);
        _this.poolName(poolName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the ANF account. */
    az_netappfiles_volume_backup_create_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** The name of the ANF backup. */
    az_netappfiles_volume_backup_create_command_builder.prototype.backupName = function (value) {
        this.setFlag("--backup-name", value);
        return this;
    };
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_netappfiles_volume_backup_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** The name of the ANF volume. */
    az_netappfiles_volume_backup_create_command_builder.prototype.volumeName = function (value) {
        this.setFlag("--volume-name", value);
        return this;
    };
    /** The name of the ANF pool. */
    az_netappfiles_volume_backup_create_command_builder.prototype.poolName = function (value) {
        this.setFlag("--pool-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_netappfiles_volume_backup_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Label for backup. */
    az_netappfiles_volume_backup_create_command_builder.prototype.label = function (value) {
        this.setFlag("--label", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_netappfiles_volume_backup_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_netappfiles_volume_backup_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete backup.
 *
 * Syntax:
 * ```
 * az netappfiles volume backup delete [--account-name]
 *                                     [--backup-name]
 *                                     [--ids]
 *                                     [--name]
 *                                     [--pool-name]
 *                                     [--resource-group]
 *                                     [--subscription]
 * ```
 */
var az_netappfiles_volume_backup_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_netappfiles_volume_backup_delete_command_builder, _super);
    function az_netappfiles_volume_backup_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Name of the ANF account. */
    az_netappfiles_volume_backup_delete_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** The name of the backup. */
    az_netappfiles_volume_backup_delete_command_builder.prototype.backupName = function (value) {
        this.setFlag("--backup-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_netappfiles_volume_backup_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the ANF volume. */
    az_netappfiles_volume_backup_delete_command_builder.prototype.volumeName = function (value) {
        this.setFlag("--volume-name", value);
        return this;
    };
    /** Name of the ANF pool. */
    az_netappfiles_volume_backup_delete_command_builder.prototype.poolName = function (value) {
        this.setFlag("--pool-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_netappfiles_volume_backup_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_netappfiles_volume_backup_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_netappfiles_volume_backup_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List the ANF Backups for the specified volume.
 *
 * Syntax:
 * ```
 * az netappfiles volume backup list --account-name
 *                                   --name
 *                                   --pool-name
 *                                   --resource-group
 *                                   [--query-examples]
 *                                   [--subscription]
 * ```
 *
 * @param {string} accountName The name of the ANF account.
 * @param {string} volumeName The name of the ANF pool.
 * @param {string} poolName The name of the ANF pool.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_netappfiles_volume_backup_list_command_builder = /** @class */ (function (_super) {
    __extends(az_netappfiles_volume_backup_list_command_builder, _super);
    function az_netappfiles_volume_backup_list_command_builder(commandPath, resultDataTypeName, accountName, volumeName, poolName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.volumeName(volumeName);
        _this.poolName(poolName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the ANF account. */
    az_netappfiles_volume_backup_list_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** The name of the ANF pool. */
    az_netappfiles_volume_backup_list_command_builder.prototype.volumeName = function (value) {
        this.setFlag("--volume-name", value);
        return this;
    };
    /** The name of the ANF pool. */
    az_netappfiles_volume_backup_list_command_builder.prototype.poolName = function (value) {
        this.setFlag("--pool-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_netappfiles_volume_backup_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_netappfiles_volume_backup_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_netappfiles_volume_backup_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_netappfiles_volume_backup_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Get the specified ANF Backup.
 *
 * Syntax:
 * ```
 * az netappfiles volume backup show [--account-name]
 *                                   [--backup-name]
 *                                   [--ids]
 *                                   [--name]
 *                                   [--pool-name]
 *                                   [--query-examples]
 *                                   [--resource-group]
 *                                   [--subscription]
 * ```
 */
var az_netappfiles_volume_backup_show_command_builder = /** @class */ (function (_super) {
    __extends(az_netappfiles_volume_backup_show_command_builder, _super);
    function az_netappfiles_volume_backup_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The name of the ANF account. */
    az_netappfiles_volume_backup_show_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** The name of the ANF backup. */
    az_netappfiles_volume_backup_show_command_builder.prototype.backupName = function (value) {
        this.setFlag("--backup-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_netappfiles_volume_backup_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the ANF pool. */
    az_netappfiles_volume_backup_show_command_builder.prototype.volumeName = function (value) {
        this.setFlag("--volume-name", value);
        return this;
    };
    /** The name of the ANF pool. */
    az_netappfiles_volume_backup_show_command_builder.prototype.poolName = function (value) {
        this.setFlag("--pool-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_netappfiles_volume_backup_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_netappfiles_volume_backup_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_netappfiles_volume_backup_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_netappfiles_volume_backup_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update the specified ANF backup with the values provided.
 *
 * Syntax:
 * ```
 * az netappfiles volume backup update [--account-name]
 *                                     [--backup-name]
 *                                     [--ids]
 *                                     [--label]
 *                                     [--name]
 *                                     [--pool-name]
 *                                     [--resource-group]
 *                                     [--subscription]
 *                                     [--tags]
 * ```
 */
var az_netappfiles_volume_backup_update_command_builder = /** @class */ (function (_super) {
    __extends(az_netappfiles_volume_backup_update_command_builder, _super);
    function az_netappfiles_volume_backup_update_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The name of the ANF account. */
    az_netappfiles_volume_backup_update_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** The name of the ANF backup. */
    az_netappfiles_volume_backup_update_command_builder.prototype.backupName = function (value) {
        this.setFlag("--backup-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_netappfiles_volume_backup_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Label for backup. */
    az_netappfiles_volume_backup_update_command_builder.prototype.label = function (value) {
        this.setFlag("--label", value);
        return this;
    };
    /** The name of the ANF volume. */
    az_netappfiles_volume_backup_update_command_builder.prototype.volumeName = function (value) {
        this.setFlag("--volume-name", value);
        return this;
    };
    /** The name of the ANF pool. */
    az_netappfiles_volume_backup_update_command_builder.prototype.poolName = function (value) {
        this.setFlag("--pool-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_netappfiles_volume_backup_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_netappfiles_volume_backup_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_netappfiles_volume_backup_update_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_netappfiles_volume_backup_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Add a new rule to the export policy for a volume.
 *
 * Syntax:
 * ```
 * az netappfiles volume export-policy add --allowed-clients
 *                                         --cifs {false, true}
 *                                         --nfsv3 {false, true}
 *                                         --nfsv41 {false, true}
 *                                         --rule-index
 *                                         --unix-read-only {false, true}
 *                                         --unix-read-write {false, true}
 *                                         [--account-name]
 *                                         [--add]
 *                                         [--force-string]
 *                                         [--ids]
 *                                         [--name]
 *                                         [--pool-name]
 *                                         [--remove]
 *                                         [--resource-group]
 *                                         [--set]
 *                                         [--subscription]
 * ```
 *
 * @param {string} allowedClients Client ingress specification as comma separated string with IPv4 CIDRs, IPv4 host addresses and host names).
 * @param {boolean} cifs Indication that CIFS protocol is allowed.
 * @param {boolean} nfsv3 Indication that NFSv3 protocol is allowed.
 * @param {boolean} nfsv41 Indication that NFSv4.1 protocol is allowed.
 * @param {string} ruleIndex Order index. No number can be repeated. Max 6 rules.
 * @param {boolean} unixReadOnly Indication of read only access.
 * @param {boolean} unixReadWrite Indication of read and write access.
 */
var az_netappfiles_volume_export_policy_add_command_builder = /** @class */ (function (_super) {
    __extends(az_netappfiles_volume_export_policy_add_command_builder, _super);
    function az_netappfiles_volume_export_policy_add_command_builder(commandPath, resultDataTypeName, allowedClients, cifs, nfsv3, nfsv41, ruleIndex, unixReadOnly, unixReadWrite) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.allowedClients(allowedClients);
        _this.cifs(cifs);
        _this.nfsv3(nfsv3);
        _this.nfsv41(nfsv41);
        _this.ruleIndex(ruleIndex);
        _this.unixReadOnly(unixReadOnly);
        _this.unixReadWrite(unixReadWrite);
        return _this;
    }
    /** Client ingress specification as comma separated string with IPv4 CIDRs, IPv4 host addresses and host names). */
    az_netappfiles_volume_export_policy_add_command_builder.prototype.allowedClients = function (value) {
        this.setFlag("--allowed-clients", value);
        return this;
    };
    /** Indication that CIFS protocol is allowed. */
    az_netappfiles_volume_export_policy_add_command_builder.prototype.cifs = function (value) {
        this.setFlag("--cifs", value.toString());
        return this;
    };
    /** Indication that NFSv3 protocol is allowed. */
    az_netappfiles_volume_export_policy_add_command_builder.prototype.nfsv3 = function (value) {
        this.setFlag("--nfsv3", value.toString());
        return this;
    };
    /** Indication that NFSv4.1 protocol is allowed. */
    az_netappfiles_volume_export_policy_add_command_builder.prototype.nfsv41 = function (value) {
        this.setFlag("--nfsv41", value.toString());
        return this;
    };
    /** Order index. No number can be repeated. Max 6 rules. */
    az_netappfiles_volume_export_policy_add_command_builder.prototype.ruleIndex = function (value) {
        this.setFlag("--rule-index", value);
        return this;
    };
    /** Indication of read only access. */
    az_netappfiles_volume_export_policy_add_command_builder.prototype.unixReadOnly = function (value) {
        this.setFlag("--unix-read-only", value.toString());
        return this;
    };
    /** Indication of read and write access. */
    az_netappfiles_volume_export_policy_add_command_builder.prototype.unixReadWrite = function (value) {
        this.setFlag("--unix-read-write", value.toString());
        return this;
    };
    /** The name of the ANF account. */
    az_netappfiles_volume_export_policy_add_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_netappfiles_volume_export_policy_add_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_netappfiles_volume_export_policy_add_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_netappfiles_volume_export_policy_add_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the ANF volume. */
    az_netappfiles_volume_export_policy_add_command_builder.prototype.volumeName = function (value) {
        this.setFlag("--volume-name", value);
        return this;
    };
    /** The name of the ANF pool. */
    az_netappfiles_volume_export_policy_add_command_builder.prototype.poolName = function (value) {
        this.setFlag("--pool-name", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_netappfiles_volume_export_policy_add_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_netappfiles_volume_export_policy_add_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_netappfiles_volume_export_policy_add_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_netappfiles_volume_export_policy_add_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_netappfiles_volume_export_policy_add_command_builder;
}(base_1.CommandBuilder));
/**
 * List the export policy rules for a volume.
 *
 * Syntax:
 * ```
 * az netappfiles volume export-policy list --account-name
 *                                          --name
 *                                          --pool-name
 *                                          --resource-group
 *                                          [--query-examples]
 *                                          [--subscription]
 * ```
 *
 * @param {string} accountName The name of the ANF account.
 * @param {string} volumeName The name of the ANF volume.
 * @param {string} poolName The name of the ANF pool.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_netappfiles_volume_export_policy_list_command_builder = /** @class */ (function (_super) {
    __extends(az_netappfiles_volume_export_policy_list_command_builder, _super);
    function az_netappfiles_volume_export_policy_list_command_builder(commandPath, resultDataTypeName, accountName, volumeName, poolName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.volumeName(volumeName);
        _this.poolName(poolName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the ANF account. */
    az_netappfiles_volume_export_policy_list_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** The name of the ANF volume. */
    az_netappfiles_volume_export_policy_list_command_builder.prototype.volumeName = function (value) {
        this.setFlag("--volume-name", value);
        return this;
    };
    /** The name of the ANF pool. */
    az_netappfiles_volume_export_policy_list_command_builder.prototype.poolName = function (value) {
        this.setFlag("--pool-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_netappfiles_volume_export_policy_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_netappfiles_volume_export_policy_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_netappfiles_volume_export_policy_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_netappfiles_volume_export_policy_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Remove a rule from the export policy for a volume by rule index. The current rules can be obtained by performing the subgroup list command.
 *
 * Syntax:
 * ```
 * az netappfiles volume export-policy remove --rule-index
 *                                            [--account-name]
 *                                            [--add]
 *                                            [--force-string]
 *                                            [--ids]
 *                                            [--name]
 *                                            [--pool-name]
 *                                            [--remove]
 *                                            [--resource-group]
 *                                            [--set]
 *                                            [--subscription]
 * ```
 *
 * @param {string} ruleIndex Order index. Range 1 to 6.
 */
var az_netappfiles_volume_export_policy_remove_command_builder = /** @class */ (function (_super) {
    __extends(az_netappfiles_volume_export_policy_remove_command_builder, _super);
    function az_netappfiles_volume_export_policy_remove_command_builder(commandPath, resultDataTypeName, ruleIndex) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.ruleIndex(ruleIndex);
        return _this;
    }
    /** Order index. Range 1 to 6. */
    az_netappfiles_volume_export_policy_remove_command_builder.prototype.ruleIndex = function (value) {
        this.setFlag("--rule-index", value);
        return this;
    };
    /** The name of the ANF account. */
    az_netappfiles_volume_export_policy_remove_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_netappfiles_volume_export_policy_remove_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_netappfiles_volume_export_policy_remove_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_netappfiles_volume_export_policy_remove_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the ANF volume. */
    az_netappfiles_volume_export_policy_remove_command_builder.prototype.volumeName = function (value) {
        this.setFlag("--volume-name", value);
        return this;
    };
    /** The name of the ANF pool. */
    az_netappfiles_volume_export_policy_remove_command_builder.prototype.poolName = function (value) {
        this.setFlag("--pool-name", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_netappfiles_volume_export_policy_remove_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_netappfiles_volume_export_policy_remove_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_netappfiles_volume_export_policy_remove_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_netappfiles_volume_export_policy_remove_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_netappfiles_volume_export_policy_remove_command_builder;
}(base_1.CommandBuilder));
/**
 * Authorize a volume as a replication destination for a specified source.
 *
 * Syntax:
 * ```
 * az netappfiles volume replication approve --account-name
 *                                           --name
 *                                           --pool-name
 *                                           --remote-volume-resource-id
 *                                           --resource-group
 *                                           [--subscription]
 * ```
 *
 * @param {string} accountName The name of the ANF account.
 * @param {string} volumeName The name of the replication source volume.
 * @param {string} poolName The name of the ANF pool.
 * @param {string} remoteVolumeResourceId The resource id of the destination replication volume.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_netappfiles_volume_replication_approve_command_builder = /** @class */ (function (_super) {
    __extends(az_netappfiles_volume_replication_approve_command_builder, _super);
    function az_netappfiles_volume_replication_approve_command_builder(commandPath, resultDataTypeName, accountName, volumeName, poolName, remoteVolumeResourceId, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.volumeName(volumeName);
        _this.poolName(poolName);
        _this.remoteVolumeResourceId(remoteVolumeResourceId);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the ANF account. */
    az_netappfiles_volume_replication_approve_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** The name of the replication source volume. */
    az_netappfiles_volume_replication_approve_command_builder.prototype.volumeName = function (value) {
        this.setFlag("--volume-name", value);
        return this;
    };
    /** The name of the ANF pool. */
    az_netappfiles_volume_replication_approve_command_builder.prototype.poolName = function (value) {
        this.setFlag("--pool-name", value);
        return this;
    };
    /** The resource id of the destination replication volume. */
    az_netappfiles_volume_replication_approve_command_builder.prototype.remoteVolumeResourceId = function (value) {
        this.setFlag("--remote-volume-resource-id", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_netappfiles_volume_replication_approve_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_netappfiles_volume_replication_approve_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_netappfiles_volume_replication_approve_command_builder;
}(base_1.CommandBuilder));
/**
 * Re-initialise a volume replication for the specified destination volume. The replication process is resumed from source to destination.
 *
 * Syntax:
 * ```
 * az netappfiles volume replication re-initialize [--account-name]
 *                                                 [--ids]
 *                                                 [--name]
 *                                                 [--pool-name]
 *                                                 [--resource-group]
 *                                                 [--subscription]
 * ```
 */
var az_netappfiles_volume_replication_re_initialize_command_builder = /** @class */ (function (_super) {
    __extends(az_netappfiles_volume_replication_re_initialize_command_builder, _super);
    function az_netappfiles_volume_replication_re_initialize_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The name of the ANF account. */
    az_netappfiles_volume_replication_re_initialize_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_netappfiles_volume_replication_re_initialize_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the replication destination volume. */
    az_netappfiles_volume_replication_re_initialize_command_builder.prototype.volumeName = function (value) {
        this.setFlag("--volume-name", value);
        return this;
    };
    /** The name of the ANF pool. */
    az_netappfiles_volume_replication_re_initialize_command_builder.prototype.poolName = function (value) {
        this.setFlag("--pool-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_netappfiles_volume_replication_re_initialize_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_netappfiles_volume_replication_re_initialize_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_netappfiles_volume_replication_re_initialize_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a volume replication for the specified destination volume. The data replication objects of source and destination volumes will be removed.
 *
 * Syntax:
 * ```
 * az netappfiles volume replication remove [--account-name]
 *                                          [--ids]
 *                                          [--name]
 *                                          [--pool-name]
 *                                          [--resource-group]
 *                                          [--subscription]
 * ```
 */
var az_netappfiles_volume_replication_remove_command_builder = /** @class */ (function (_super) {
    __extends(az_netappfiles_volume_replication_remove_command_builder, _super);
    function az_netappfiles_volume_replication_remove_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The name of the ANF account. */
    az_netappfiles_volume_replication_remove_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_netappfiles_volume_replication_remove_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the replication destination volume. */
    az_netappfiles_volume_replication_remove_command_builder.prototype.volumeName = function (value) {
        this.setFlag("--volume-name", value);
        return this;
    };
    /** The name of the ANF pool. */
    az_netappfiles_volume_replication_remove_command_builder.prototype.poolName = function (value) {
        this.setFlag("--pool-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_netappfiles_volume_replication_remove_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_netappfiles_volume_replication_remove_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_netappfiles_volume_replication_remove_command_builder;
}(base_1.CommandBuilder));
/**
 * Resync a volume replication for the specified destination volume. The replication process is resumed from source to destination.
 *
 * Syntax:
 * ```
 * az netappfiles volume replication resume [--account-name]
 *                                          [--ids]
 *                                          [--name]
 *                                          [--pool-name]
 *                                          [--resource-group]
 *                                          [--subscription]
 * ```
 */
var az_netappfiles_volume_replication_resume_command_builder = /** @class */ (function (_super) {
    __extends(az_netappfiles_volume_replication_resume_command_builder, _super);
    function az_netappfiles_volume_replication_resume_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The name of the ANF account. */
    az_netappfiles_volume_replication_resume_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_netappfiles_volume_replication_resume_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the replication destination volume. */
    az_netappfiles_volume_replication_resume_command_builder.prototype.volumeName = function (value) {
        this.setFlag("--volume-name", value);
        return this;
    };
    /** The name of the ANF pool. */
    az_netappfiles_volume_replication_resume_command_builder.prototype.poolName = function (value) {
        this.setFlag("--pool-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_netappfiles_volume_replication_resume_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_netappfiles_volume_replication_resume_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_netappfiles_volume_replication_resume_command_builder;
}(base_1.CommandBuilder));
/**
 * Get the replication status for the specified replication volume.
 *
 * Syntax:
 * ```
 * az netappfiles volume replication status [--account-name]
 *                                          [--ids]
 *                                          [--name]
 *                                          [--pool-name]
 *                                          [--resource-group]
 *                                          [--subscription]
 * ```
 */
var az_netappfiles_volume_replication_status_command_builder = /** @class */ (function (_super) {
    __extends(az_netappfiles_volume_replication_status_command_builder, _super);
    function az_netappfiles_volume_replication_status_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The name of the ANF account. */
    az_netappfiles_volume_replication_status_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_netappfiles_volume_replication_status_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the replication destination volume. */
    az_netappfiles_volume_replication_status_command_builder.prototype.volumeName = function (value) {
        this.setFlag("--volume-name", value);
        return this;
    };
    /** The name of the ANF pool. */
    az_netappfiles_volume_replication_status_command_builder.prototype.poolName = function (value) {
        this.setFlag("--pool-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_netappfiles_volume_replication_status_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_netappfiles_volume_replication_status_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_netappfiles_volume_replication_status_command_builder;
}(base_1.CommandBuilder));
/**
 * Suspend/break a volume replication for the specified destination volume. The replication process is suspended until resumed or deleted.
 *
 * Syntax:
 * ```
 * az netappfiles volume replication suspend [--account-name]
 *                                           [--force {false, true}]
 *                                           [--ids]
 *                                           [--name]
 *                                           [--pool-name]
 *                                           [--resource-group]
 *                                           [--subscription]
 * ```
 */
var az_netappfiles_volume_replication_suspend_command_builder = /** @class */ (function (_super) {
    __extends(az_netappfiles_volume_replication_suspend_command_builder, _super);
    function az_netappfiles_volume_replication_suspend_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The name of the ANF account. */
    az_netappfiles_volume_replication_suspend_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Force break the replication. */
    az_netappfiles_volume_replication_suspend_command_builder.prototype.forceBreakReplication = function (value) {
        this.setFlag("--force-break-replication", value.toString());
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_netappfiles_volume_replication_suspend_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the replication destination volume. */
    az_netappfiles_volume_replication_suspend_command_builder.prototype.volumeName = function (value) {
        this.setFlag("--volume-name", value);
        return this;
    };
    /** The name of the ANF pool. */
    az_netappfiles_volume_replication_suspend_command_builder.prototype.poolName = function (value) {
        this.setFlag("--pool-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_netappfiles_volume_replication_suspend_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_netappfiles_volume_replication_suspend_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_netappfiles_volume_replication_suspend_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a new Azure NetApp Files (ANF) volume. Export policies are applied with the subgroup commands but note that volumes are always created with a default export policy.
 *
 * Syntax:
 * ```
 * az netappfiles volume create --account-name
 *                              --file-path
 *                              --location
 *                              --name
 *                              --pool-name
 *                              --resource-group
 *                              --usage-threshold
 *                              --vnet
 *                              [--backup-enabled {false, true}]
 *                              [--backup-id]
 *                              [--backup-policy-id]
 *                              [--endpoint-type]
 *                              [--has-root-access]
 *                              [--kerberos-enabled]
 *                              [--kerberos5-r]
 *                              [--kerberos5-rw]
 *                              [--kerberos5i-r]
 *                              [--kerberos5i-rw]
 *                              [--kerberos5p-r]
 *                              [--kerberos5p-rw]
 *                              [--policy-enforced {false, true}]
 *                              [--protocol-types]
 *                              [--remote-volume-resource-id]
 *                              [--replication-schedule]
 *                              [--security-style]
 *                              [--service-level {Premium, Standard, Ultra}]
 *                              [--snapshot-dir-visible]
 *                              [--snapshot-id]
 *                              [--snapshot-policy-id]
 *                              [--subnet]
 *                              [--subscription]
 *                              [--tags]
 *                              [--throughput-mibps]
 *                              [--vault-id]
 *                              [--volume-type]
 * ```
 *
 * @param {string} accountName The name of the ANF account.
 * @param {string} filePath A 1-80 character long alphanumeric string value that identifies a unique file share or mount point in the target subnet.
 * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
 * @param {string} volumeName The name of the ANF volume.
 * @param {string} poolName The name of the ANF pool.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} usageThreshold The maximum storage quota allowed for a file system as integer number of GiB. Min 100 GiB, max 100TiB".
 * @param {string} vnet The ARM Id or name of the vnet for the volume.
 */
var az_netappfiles_volume_create_command_builder = /** @class */ (function (_super) {
    __extends(az_netappfiles_volume_create_command_builder, _super);
    function az_netappfiles_volume_create_command_builder(commandPath, resultDataTypeName, accountName, filePath, location, volumeName, poolName, resourceGroup, usageThreshold, vnet) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.filePath(filePath);
        _this.location(location);
        _this.volumeName(volumeName);
        _this.poolName(poolName);
        _this.resourceGroup(resourceGroup);
        _this.usageThreshold(usageThreshold);
        _this.vnet(vnet);
        return _this;
    }
    /** The name of the ANF account. */
    az_netappfiles_volume_create_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** A 1-80 character long alphanumeric string value that identifies a unique file share or mount point in the target subnet. */
    az_netappfiles_volume_create_command_builder.prototype.filePath = function (value) {
        this.setFlag("--file-path", value);
        return this;
    };
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_netappfiles_volume_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** The name of the ANF volume. */
    az_netappfiles_volume_create_command_builder.prototype.volumeName = function (value) {
        this.setFlag("--volume-name", value);
        return this;
    };
    /** The name of the ANF pool. */
    az_netappfiles_volume_create_command_builder.prototype.poolName = function (value) {
        this.setFlag("--pool-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_netappfiles_volume_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The maximum storage quota allowed for a file system as integer number of GiB. Min 100 GiB, max 100TiB". */
    az_netappfiles_volume_create_command_builder.prototype.usageThreshold = function (value) {
        this.setFlag("--usage-threshold", value);
        return this;
    };
    /** The ARM Id or name of the vnet for the volume. */
    az_netappfiles_volume_create_command_builder.prototype.vnet = function (value) {
        this.setFlag("--vnet", value);
        return this;
    };
    /** Backup Enabled. */
    az_netappfiles_volume_create_command_builder.prototype.backupEnabled = function (value) {
        this.setFlag("--backup-enabled", value.toString());
        return this;
    };
    /** Backup ID. UUID v4 or resource identifier used to identify the Backup. */
    az_netappfiles_volume_create_command_builder.prototype.backupId = function (value) {
        this.setFlag("--backup-id", value);
        return this;
    };
    /** Backup Policy Resource ID. */
    az_netappfiles_volume_create_command_builder.prototype.backupPolicyId = function (value) {
        this.setFlag("--backup-policy-id", value);
        return this;
    };
    /** Whether the volume is source ("src") or destination ("dst"). */
    az_netappfiles_volume_create_command_builder.prototype.endpointType = function (value) {
        this.setFlag("--endpoint-type", value);
        return this;
    };
    /** Has root access to volume. */
    az_netappfiles_volume_create_command_builder.prototype.hasRootAccess = function (value) {
        this.setFlag("--has-root-access", value);
        return this;
    };
    /** Describe if a volume is KerberosEnabled. */
    az_netappfiles_volume_create_command_builder.prototype.kerberosEnabled = function (value) {
        this.setFlag("--kerberos-enabled", value);
        return this;
    };
    /** Kerberos5 Read only access. */
    az_netappfiles_volume_create_command_builder.prototype.kerberos5R = function (value) {
        this.setFlag("--kerberos5-r", value);
        return this;
    };
    /** Kerberos5 Read and write access. */
    az_netappfiles_volume_create_command_builder.prototype.kerberos5Rw = function (value) {
        this.setFlag("--kerberos5-rw", value);
        return this;
    };
    /** Kerberos5i Read only access. */
    az_netappfiles_volume_create_command_builder.prototype.kerberos5IR = function (value) {
        this.setFlag("--kerberos5i-r", value);
        return this;
    };
    /** Kerberos5i Read and write access. */
    az_netappfiles_volume_create_command_builder.prototype.kerberos5IRw = function (value) {
        this.setFlag("--kerberos5i-rw", value);
        return this;
    };
    /** Kerberos5p Read only access. */
    az_netappfiles_volume_create_command_builder.prototype.kerberos5PR = function (value) {
        this.setFlag("--kerberos5p-r", value);
        return this;
    };
    /** Kerberos5p Read and write access. */
    az_netappfiles_volume_create_command_builder.prototype.kerberos5PRw = function (value) {
        this.setFlag("--kerberos5p-rw", value);
        return this;
    };
    /** Policy Enforced. */
    az_netappfiles_volume_create_command_builder.prototype.policyEnforced = function (value) {
        this.setFlag("--policy-enforced", value.toString());
        return this;
    };
    /** Space seperated list of protocols that the volume can use, available protocols are "NFSv4.1", "NFSv3", "CIFS". */
    az_netappfiles_volume_create_command_builder.prototype.protocolTypes = function (value) {
        this.setFlag("--protocol-types", value);
        return this;
    };
    /** The volume id of the remote volume of the replication (the destination for "src" volume endpoints and the source for "dst" endpoints). */
    az_netappfiles_volume_create_command_builder.prototype.remoteVolumeResourceId = function (value) {
        this.setFlag("--remote-volume-resource-id", value);
        return this;
    };
    /** The replication schedule, e.g. "_10minutely, hourly, daily, weekly, monthly". */
    az_netappfiles_volume_create_command_builder.prototype.replicationSchedule = function (value) {
        this.setFlag("--replication-schedule", value);
        return this;
    };
    /** The security style of volume. */
    az_netappfiles_volume_create_command_builder.prototype.securityStyle = function (value) {
        this.setFlag("--security-style", value);
        return this;
    };
    /** The service level. */
    az_netappfiles_volume_create_command_builder.prototype.serviceLevel = function (value) {
        this.setFlag("--service-level", value);
        return this;
    };
    /** If enabled (true) the volume will contain a read-only .snapshot directory which provides access to each of the volume's snapshots (default to true). */
    az_netappfiles_volume_create_command_builder.prototype.snapshotDirVisible = function (value) {
        this.setFlag("--snapshot-dir-visible", value);
        return this;
    };
    /** Create a volume created from this snapshot. UUID v4 or resource identifier used to identify the Snapshot. example snapshot-id "9760acf5-4638-11e7-9bdb-020073ca3333". */
    az_netappfiles_volume_create_command_builder.prototype.snapshotId = function (value) {
        this.setFlag("--snapshot-id", value);
        return this;
    };
    /** Snapshot Policy ResourceId. */
    az_netappfiles_volume_create_command_builder.prototype.snapshotPolicyId = function (value) {
        this.setFlag("--snapshot-policy-id", value);
        return this;
    };
    /** The ARM Id or name of the subnet for the vnet. If omitted 'default' will be used. */
    az_netappfiles_volume_create_command_builder.prototype.subnet = function (value) {
        this.setFlag("--subnet", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_netappfiles_volume_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags in `key[=value]` format. */
    az_netappfiles_volume_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    /** Maximum throughput in Mibps that can be achieved by this volume. */
    az_netappfiles_volume_create_command_builder.prototype.throughputMibps = function (value) {
        this.setFlag("--throughput-mibps", value);
        return this;
    };
    /** Vault Resource ID. */
    az_netappfiles_volume_create_command_builder.prototype.vaultId = function (value) {
        this.setFlag("--vault-id", value);
        return this;
    };
    /** Whether the volume should be a data protection volume ("DataProtection"), empty if this is not a data protection volume. */
    az_netappfiles_volume_create_command_builder.prototype.volumeType = function (value) {
        this.setFlag("--volume-type", value);
        return this;
    };
    return az_netappfiles_volume_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete the specified ANF volume.
 *
 * Syntax:
 * ```
 * az netappfiles volume delete [--account-name]
 *                              [--ids]
 *                              [--name]
 *                              [--pool-name]
 *                              [--resource-group]
 *                              [--subscription]
 * ```
 */
var az_netappfiles_volume_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_netappfiles_volume_delete_command_builder, _super);
    function az_netappfiles_volume_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The name of the ANF account. */
    az_netappfiles_volume_delete_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_netappfiles_volume_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the ANF volume. */
    az_netappfiles_volume_delete_command_builder.prototype.volumeName = function (value) {
        this.setFlag("--volume-name", value);
        return this;
    };
    /** The name of the ANF pool. */
    az_netappfiles_volume_delete_command_builder.prototype.poolName = function (value) {
        this.setFlag("--pool-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_netappfiles_volume_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_netappfiles_volume_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_netappfiles_volume_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List the ANF Pools for the specified account.
 *
 * Syntax:
 * ```
 * az netappfiles volume list --account-name
 *                            --pool-name
 *                            --resource-group
 *                            [--query-examples]
 *                            [--subscription]
 * ```
 *
 * @param {string} accountName The name of the ANF account.
 * @param {string} poolName The name of the ANF pool.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_netappfiles_volume_list_command_builder = /** @class */ (function (_super) {
    __extends(az_netappfiles_volume_list_command_builder, _super);
    function az_netappfiles_volume_list_command_builder(commandPath, resultDataTypeName, accountName, poolName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.poolName(poolName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the ANF account. */
    az_netappfiles_volume_list_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** The name of the ANF pool. */
    az_netappfiles_volume_list_command_builder.prototype.poolName = function (value) {
        this.setFlag("--pool-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_netappfiles_volume_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_netappfiles_volume_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_netappfiles_volume_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_netappfiles_volume_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Get the specified ANF volume.
 *
 * Syntax:
 * ```
 * az netappfiles volume pool-change --new-pool-resource-id
 *                                   [--account-name]
 *                                   [--ids]
 *                                   [--name]
 *                                   [--pool-name]
 *                                   [--resource-group]
 *                                   [--subscription]
 * ```
 *
 * @param {string} newPoolResourceId The resource id of the new ANF pool.
 */
var az_netappfiles_volume_pool_change_command_builder = /** @class */ (function (_super) {
    __extends(az_netappfiles_volume_pool_change_command_builder, _super);
    function az_netappfiles_volume_pool_change_command_builder(commandPath, resultDataTypeName, newPoolResourceId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.newPoolResourceId(newPoolResourceId);
        return _this;
    }
    /** The resource id of the new ANF pool. */
    az_netappfiles_volume_pool_change_command_builder.prototype.newPoolResourceId = function (value) {
        this.setFlag("--new-pool-resource-id", value);
        return this;
    };
    /** The name of the ANF account. */
    az_netappfiles_volume_pool_change_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_netappfiles_volume_pool_change_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the ANF volume. */
    az_netappfiles_volume_pool_change_command_builder.prototype.volumeName = function (value) {
        this.setFlag("--volume-name", value);
        return this;
    };
    /** The name of the ANF pool. */
    az_netappfiles_volume_pool_change_command_builder.prototype.poolName = function (value) {
        this.setFlag("--pool-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_netappfiles_volume_pool_change_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_netappfiles_volume_pool_change_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_netappfiles_volume_pool_change_command_builder;
}(base_1.CommandBuilder));
/**
 * Revert a volume to one of its snapshots.
 *
 * Syntax:
 * ```
 * az netappfiles volume revert --account-name
 *                              --name
 *                              --pool-name
 *                              --resource-group
 *                              --snapshot-id
 *                              [--subscription]
 * ```
 *
 * @param {string} accountName The name of the ANF account.
 * @param {string} volumeName The name of the ANF volume.
 * @param {string} poolName The name of the ANF pool.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} snapshotId SnapshotId of the snapshot. UUID v4 used to identify the Snapshot, example "9760acf5-4638-11e7-9bdb-020073ca3333".
 */
var az_netappfiles_volume_revert_command_builder = /** @class */ (function (_super) {
    __extends(az_netappfiles_volume_revert_command_builder, _super);
    function az_netappfiles_volume_revert_command_builder(commandPath, resultDataTypeName, accountName, volumeName, poolName, resourceGroup, snapshotId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.accountName(accountName);
        _this.volumeName(volumeName);
        _this.poolName(poolName);
        _this.resourceGroup(resourceGroup);
        _this.snapshotId(snapshotId);
        return _this;
    }
    /** The name of the ANF account. */
    az_netappfiles_volume_revert_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** The name of the ANF volume. */
    az_netappfiles_volume_revert_command_builder.prototype.volumeName = function (value) {
        this.setFlag("--volume-name", value);
        return this;
    };
    /** The name of the ANF pool. */
    az_netappfiles_volume_revert_command_builder.prototype.poolName = function (value) {
        this.setFlag("--pool-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_netappfiles_volume_revert_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** SnapshotId of the snapshot. UUID v4 used to identify the Snapshot, example "9760acf5-4638-11e7-9bdb-020073ca3333". */
    az_netappfiles_volume_revert_command_builder.prototype.snapshotId = function (value) {
        this.setFlag("--snapshot-id", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_netappfiles_volume_revert_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_netappfiles_volume_revert_command_builder;
}(base_1.CommandBuilder));
/**
 * Get the specified ANF volume.
 *
 * Syntax:
 * ```
 * az netappfiles volume show [--account-name]
 *                            [--ids]
 *                            [--name]
 *                            [--pool-name]
 *                            [--query-examples]
 *                            [--resource-group]
 *                            [--subscription]
 * ```
 */
var az_netappfiles_volume_show_command_builder = /** @class */ (function (_super) {
    __extends(az_netappfiles_volume_show_command_builder, _super);
    function az_netappfiles_volume_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The name of the ANF account. */
    az_netappfiles_volume_show_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_netappfiles_volume_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the ANF pool. */
    az_netappfiles_volume_show_command_builder.prototype.volumeName = function (value) {
        this.setFlag("--volume-name", value);
        return this;
    };
    /** The name of the ANF pool. */
    az_netappfiles_volume_show_command_builder.prototype.poolName = function (value) {
        this.setFlag("--pool-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_netappfiles_volume_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_netappfiles_volume_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_netappfiles_volume_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_netappfiles_volume_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update the specified ANF volume with the values provided. Unspecified values will remain unchanged. Export policies are amended/created with the subgroup commands.
 *
 * Syntax:
 * ```
 * az netappfiles volume update [--account-name]
 *                              [--add]
 *                              [--backup-enabled {false, true}]
 *                              [--backup-policy-id]
 *                              [--force-string]
 *                              [--ids]
 *                              [--name]
 *                              [--policy-enforced {false, true}]
 *                              [--pool-name]
 *                              [--protocol-types]
 *                              [--remove]
 *                              [--resource-group]
 *                              [--service-level {Premium, Standard, Ultra}]
 *                              [--set]
 *                              [--subscription]
 *                              [--tags]
 *                              [--throughput-mibps]
 *                              [--usage-threshold]
 *                              [--vault-id]
 * ```
 */
var az_netappfiles_volume_update_command_builder = /** @class */ (function (_super) {
    __extends(az_netappfiles_volume_update_command_builder, _super);
    function az_netappfiles_volume_update_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The name of the ANF account. */
    az_netappfiles_volume_update_command_builder.prototype.accountName = function (value) {
        this.setFlag("--account-name", value);
        return this;
    };
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_netappfiles_volume_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** Backup Enabled. */
    az_netappfiles_volume_update_command_builder.prototype.backupEnabled = function (value) {
        this.setFlag("--backup-enabled", value.toString());
        return this;
    };
    /** Backup Policy Resource ID. */
    az_netappfiles_volume_update_command_builder.prototype.backupPolicyId = function (value) {
        this.setFlag("--backup-policy-id", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_netappfiles_volume_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_netappfiles_volume_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the ANF volume. */
    az_netappfiles_volume_update_command_builder.prototype.volumeName = function (value) {
        this.setFlag("--volume-name", value);
        return this;
    };
    /** Backup Policy Enforced. */
    az_netappfiles_volume_update_command_builder.prototype.policyEnforced = function (value) {
        this.setFlag("--policy-enforced", value.toString());
        return this;
    };
    /** The name of the ANF pool. */
    az_netappfiles_volume_update_command_builder.prototype.poolName = function (value) {
        this.setFlag("--pool-name", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_netappfiles_volume_update_command_builder.prototype.protocolTypes = function (value) {
        this.setFlag("--protocol-types", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_netappfiles_volume_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_netappfiles_volume_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The service level. */
    az_netappfiles_volume_update_command_builder.prototype.serviceLevel = function (value) {
        this.setFlag("--service-level", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_netappfiles_volume_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_netappfiles_volume_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags in `key[=value]` format. */
    az_netappfiles_volume_update_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    /** Maximum throughput in Mibps that can be achieved by this volume. */
    az_netappfiles_volume_update_command_builder.prototype.throughputMibps = function (value) {
        this.setFlag("--throughput-mibps", value);
        return this;
    };
    /** The maximum storage quota allowed for a file system as integer number of GiB. Min 100 GiB, max 100TiB". */
    az_netappfiles_volume_update_command_builder.prototype.usageThreshold = function (value) {
        this.setFlag("--usage-threshold", value);
        return this;
    };
    /** Vault Resource ID. */
    az_netappfiles_volume_update_command_builder.prototype.vaultId = function (value) {
        this.setFlag("--vault-id", value);
        return this;
    };
    return az_netappfiles_volume_update_command_builder;
}(base_1.CommandBuilder));
