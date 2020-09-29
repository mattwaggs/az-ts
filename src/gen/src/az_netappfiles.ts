import { CommandBuilder } from '../base';

/** Manage Azure NetApp Files (ANF) Account active directories. */
export class az_netappfiles_account_ad {
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
     *                               [--add]
     *                               [--force-string]
     *                               [--ids]
     *                               [--organizational-unit]
     *                               [--remove]
     *                               [--resource-group]
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
    static add(dns: string, domain: string, password: string, smbServerName: string, username: string): az_netappfiles_account_ad_add_command_builder {
        return new az_netappfiles_account_ad_add_command_builder("az netappfiles account ad add", dns, domain, password, smbServerName, username);
    }

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
    static list(accountName: string, resourceGroup: string): az_netappfiles_account_ad_list_command_builder {
        return new az_netappfiles_account_ad_list_command_builder("az netappfiles account ad list", accountName, resourceGroup);
    }

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
    static remove(activeDirectory: string): az_netappfiles_account_ad_remove_command_builder {
        return new az_netappfiles_account_ad_remove_command_builder("az netappfiles account ad remove", activeDirectory);
    }
}

/** Manage Azure NetApp Files (ANF) Account Resources. */
export class az_netappfiles_account {
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
    static create(accountName: string, location: string, resourceGroup: string): az_netappfiles_account_create_command_builder {
        return new az_netappfiles_account_create_command_builder("az netappfiles account create", accountName, location, resourceGroup);
    }

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
    static delete(): az_netappfiles_account_delete_command_builder {
        return new az_netappfiles_account_delete_command_builder("az netappfiles account delete");
    }

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
    static list(resourceGroup: string): az_netappfiles_account_list_command_builder {
        return new az_netappfiles_account_list_command_builder("az netappfiles account list", resourceGroup);
    }

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
    static show(): az_netappfiles_account_show_command_builder {
        return new az_netappfiles_account_show_command_builder("az netappfiles account show");
    }

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
    static update(): az_netappfiles_account_update_command_builder {
        return new az_netappfiles_account_update_command_builder("az netappfiles account update");
    }
}

/** Manage Azure NetApp Files (ANF) Pool Resources. */
export class az_netappfiles_pool {
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
    static create(accountName: string, location: string, poolName: string, resourceGroup: string, serviceLevel: 'Premium' | 'Standard' | 'Ultra', size: string): az_netappfiles_pool_create_command_builder {
        return new az_netappfiles_pool_create_command_builder("az netappfiles pool create", accountName, location, poolName, resourceGroup, serviceLevel, size);
    }

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
    static delete(): az_netappfiles_pool_delete_command_builder {
        return new az_netappfiles_pool_delete_command_builder("az netappfiles pool delete");
    }

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
    static list(accountName: string, resourceGroup: string): az_netappfiles_pool_list_command_builder {
        return new az_netappfiles_pool_list_command_builder("az netappfiles pool list", accountName, resourceGroup);
    }

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
    static show(): az_netappfiles_pool_show_command_builder {
        return new az_netappfiles_pool_show_command_builder("az netappfiles pool show");
    }

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
     *                            [--remove]
     *                            [--resource-group]
     *                            [--service-level {Premium, Standard, Ultra}]
     *                            [--set]
     *                            [--size]
     *                            [--subscription]
     *                            [--tags]
     * ```
     */
    static update(): az_netappfiles_pool_update_command_builder {
        return new az_netappfiles_pool_update_command_builder("az netappfiles pool update");
    }
}

/** Manage Azure NetApp Files (ANF) Snapshot Resources. */
export class az_netappfiles_snapshot {
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
    static create(accountName: string, location: string, snapshotName: string, poolName: string, resourceGroup: string, volumeName: string): az_netappfiles_snapshot_create_command_builder {
        return new az_netappfiles_snapshot_create_command_builder("az netappfiles snapshot create", accountName, location, snapshotName, poolName, resourceGroup, volumeName);
    }

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
    static delete(): az_netappfiles_snapshot_delete_command_builder {
        return new az_netappfiles_snapshot_delete_command_builder("az netappfiles snapshot delete");
    }

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
    static list(accountName: string, poolName: string, resourceGroup: string, volumeName: string): az_netappfiles_snapshot_list_command_builder {
        return new az_netappfiles_snapshot_list_command_builder("az netappfiles snapshot list", accountName, poolName, resourceGroup, volumeName);
    }

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
    static show(): az_netappfiles_snapshot_show_command_builder {
        return new az_netappfiles_snapshot_show_command_builder("az netappfiles snapshot show");
    }
}

/** Manage Azure NetApp Files (ANF) Volume export policies. */
export class az_netappfiles_volume_export_policy {
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
    static add(allowedClients: string, cifs: boolean, nfsv3: boolean, nfsv41: boolean, ruleIndex: string, unixReadOnly: boolean, unixReadWrite: boolean): az_netappfiles_volume_export_policy_add_command_builder {
        return new az_netappfiles_volume_export_policy_add_command_builder("az netappfiles volume export-policy add", allowedClients, cifs, nfsv3, nfsv41, ruleIndex, unixReadOnly, unixReadWrite);
    }

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
    static list(accountName: string, volumeName: string, poolName: string, resourceGroup: string): az_netappfiles_volume_export_policy_list_command_builder {
        return new az_netappfiles_volume_export_policy_list_command_builder("az netappfiles volume export-policy list", accountName, volumeName, poolName, resourceGroup);
    }

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
    static remove(ruleIndex: string): az_netappfiles_volume_export_policy_remove_command_builder {
        return new az_netappfiles_volume_export_policy_remove_command_builder("az netappfiles volume export-policy remove", ruleIndex);
    }
}

/** Manage Azure NetApp Files (ANF) Volume replication operations. */
export class az_netappfiles_volume_replication {
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
    static approve(accountName: string, volumeName: string, poolName: string, remoteVolumeResourceId: string, resourceGroup: string): az_netappfiles_volume_replication_approve_command_builder {
        return new az_netappfiles_volume_replication_approve_command_builder("az netappfiles volume replication approve", accountName, volumeName, poolName, remoteVolumeResourceId, resourceGroup);
    }

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
    static remove(): az_netappfiles_volume_replication_remove_command_builder {
        return new az_netappfiles_volume_replication_remove_command_builder("az netappfiles volume replication remove");
    }

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
    static resume(): az_netappfiles_volume_replication_resume_command_builder {
        return new az_netappfiles_volume_replication_resume_command_builder("az netappfiles volume replication resume");
    }

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
    static status(): az_netappfiles_volume_replication_status_command_builder {
        return new az_netappfiles_volume_replication_status_command_builder("az netappfiles volume replication status");
    }

    /**
     * Suspend/break a volume replication for the specified destination volume. The replication process is suspended until resumed or deleted.
     *
     * Syntax:
     * ```
     * az netappfiles volume replication suspend [--account-name]
     *                                           [--ids]
     *                                           [--name]
     *                                           [--pool-name]
     *                                           [--resource-group]
     *                                           [--subscription]
     * ```
     */
    static suspend(): az_netappfiles_volume_replication_suspend_command_builder {
        return new az_netappfiles_volume_replication_suspend_command_builder("az netappfiles volume replication suspend");
    }
}

/** Manage Azure NetApp Files (ANF) Volume Resources. */
export class az_netappfiles_volume {
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
     *                              [--endpoint-type]
     *                              [--protocol-types]
     *                              [--remote-volume-resource-id]
     *                              [--replication-schedule]
     *                              [--service-level {Premium, Standard, Ultra}]
     *                              [--snapshot-id]
     *                              [--subnet]
     *                              [--subscription]
     *                              [--tags]
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
    static create(accountName: string, filePath: string, location: string, volumeName: string, poolName: string, resourceGroup: string, usageThreshold: string, vnet: string): az_netappfiles_volume_create_command_builder {
        return new az_netappfiles_volume_create_command_builder("az netappfiles volume create", accountName, filePath, location, volumeName, poolName, resourceGroup, usageThreshold, vnet);
    }

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
    static delete(): az_netappfiles_volume_delete_command_builder {
        return new az_netappfiles_volume_delete_command_builder("az netappfiles volume delete");
    }

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
    static list(accountName: string, poolName: string, resourceGroup: string): az_netappfiles_volume_list_command_builder {
        return new az_netappfiles_volume_list_command_builder("az netappfiles volume list", accountName, poolName, resourceGroup);
    }

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
     * @param {string} snapshotId Snapshot_Id of the snapshot. UUID v4 used to identify the Snapshot, example "9760acf5-4638-11e7-9bdb-020073ca3333".
     */
    static revert(accountName: string, volumeName: string, poolName: string, resourceGroup: string, snapshotId: string): az_netappfiles_volume_revert_command_builder {
        return new az_netappfiles_volume_revert_command_builder("az netappfiles volume revert", accountName, volumeName, poolName, resourceGroup, snapshotId);
    }

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
    static show(): az_netappfiles_volume_show_command_builder {
        return new az_netappfiles_volume_show_command_builder("az netappfiles volume show");
    }

    /**
     * Update the specified ANF volume with the values provided. Unspecified values will remain unchanged. Export policies are amended/created with the subgroup commands.
     *
     * Syntax:
     * ```
     * az netappfiles volume update [--account-name]
     *                              [--add]
     *                              [--force-string]
     *                              [--ids]
     *                              [--name]
     *                              [--pool-name]
     *                              [--protocol-types]
     *                              [--remove]
     *                              [--resource-group]
     *                              [--service-level {Premium, Standard, Ultra}]
     *                              [--set]
     *                              [--subscription]
     *                              [--tags]
     *                              [--usage-threshold]
     * ```
     */
    static update(): az_netappfiles_volume_update_command_builder {
        return new az_netappfiles_volume_update_command_builder("az netappfiles volume update");
    }
}

/** Manage Azure NetApp Files (ANF) Resources. */
export class az_netappfiles {
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
 *                               [--add]
 *                               [--force-string]
 *                               [--ids]
 *                               [--organizational-unit]
 *                               [--remove]
 *                               [--resource-group]
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
class az_netappfiles_account_ad_add_command_builder extends CommandBuilder {
    constructor(commandPath: string, dns: string, domain: string, password: string, smbServerName: string, username: string) {
        super(commandPath);
        this.dns(dns)
        this.domain(domain)
        this.password(password)
        this.smbServerName(smbServerName)
        this.username(username)
    }

    /** Comma separated list of DNS server IP addresses for the Active Directory domain. */
    dns(value: string): az_netappfiles_account_ad_add_command_builder {
        this.setFlag("--dns", value);
        return this;
    }

    /** Name of the Active Directory domain. */
    domain(value: string): az_netappfiles_account_ad_add_command_builder {
        this.setFlag("--domain", value);
        return this;
    }

    /** Plain text password of Active Directory domain administrator. */
    password(value: string): az_netappfiles_account_ad_add_command_builder {
        this.setFlag("--password", value);
        return this;
    }

    /** NetBIOS name of the SMB server. This name will be registered as a computer account in the AD and used to mount volumes. Must be 10 characters or less. */
    smbServerName(value: string): az_netappfiles_account_ad_add_command_builder {
        this.setFlag("--smb-server-name", value);
        return this;
    }

    /** Username of Active Directory domain administrator. */
    username(value: string): az_netappfiles_account_ad_add_command_builder {
        this.setFlag("--username", value);
        return this;
    }

    /** The name of the ANF account. */
    accountName(value: string): az_netappfiles_account_ad_add_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_netappfiles_account_ad_add_command_builder {
        this.setFlag("--add", value);
        return this;
    }

    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_netappfiles_account_ad_add_command_builder {
        this.setFlag("--force-string", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_netappfiles_account_ad_add_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The Organizational Unit (OU) within the Windows Active Directory. */
    organizationalUnit(value: string): az_netappfiles_account_ad_add_command_builder {
        this.setFlag("--organizational-unit", value);
        return this;
    }

    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_netappfiles_account_ad_add_command_builder {
        this.setFlag("--remove", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_netappfiles_account_ad_add_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_netappfiles_account_ad_add_command_builder {
        this.setFlag("--set", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_netappfiles_account_ad_add_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_netappfiles_account_ad_list_command_builder extends CommandBuilder {
    constructor(commandPath: string, accountName: string, resourceGroup: string) {
        super(commandPath);
        this.accountName(accountName)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the ANF account. */
    accountName(value: string): az_netappfiles_account_ad_list_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_netappfiles_account_ad_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_netappfiles_account_ad_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_netappfiles_account_ad_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_netappfiles_account_ad_remove_command_builder extends CommandBuilder {
    constructor(commandPath: string, activeDirectory: string) {
        super(commandPath);
        this.activeDirectory(activeDirectory)
    }

    /** The id of the active directory. */
    activeDirectory(value: string): az_netappfiles_account_ad_remove_command_builder {
        this.setFlag("--active-directory", value);
        return this;
    }

    /** The name of the ANF account. */
    accountName(value: string): az_netappfiles_account_ad_remove_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_netappfiles_account_ad_remove_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_netappfiles_account_ad_remove_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_netappfiles_account_ad_remove_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_netappfiles_account_create_command_builder extends CommandBuilder {
    constructor(commandPath: string, accountName: string, location: string, resourceGroup: string) {
        super(commandPath);
        this.accountName(accountName)
        this.location(location)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the ANF account. */
    accountName(value: string): az_netappfiles_account_create_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_netappfiles_account_create_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_netappfiles_account_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_netappfiles_account_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags in `key[=value]` format. */
    tags(value: string): az_netappfiles_account_create_command_builder {
        this.setFlag("--tags", value);
        return this;
    }
}

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
class az_netappfiles_account_delete_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** The name of the ANF account. */
    accountName(value: string): az_netappfiles_account_delete_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_netappfiles_account_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_netappfiles_account_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_netappfiles_account_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_netappfiles_account_list_command_builder extends CommandBuilder {
    constructor(commandPath: string, resourceGroup: string) {
        super(commandPath);
        this.resourceGroup(resourceGroup)
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_netappfiles_account_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_netappfiles_account_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_netappfiles_account_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_netappfiles_account_show_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** The name of the ANF account. */
    accountName(value: string): az_netappfiles_account_show_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_netappfiles_account_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_netappfiles_account_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_netappfiles_account_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_netappfiles_account_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_netappfiles_account_update_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** The name of the ANF account. */
    accountName(value: string): az_netappfiles_account_update_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_netappfiles_account_update_command_builder {
        this.setFlag("--add", value);
        return this;
    }

    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_netappfiles_account_update_command_builder {
        this.setFlag("--force-string", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_netappfiles_account_update_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_netappfiles_account_update_command_builder {
        this.setFlag("--remove", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_netappfiles_account_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_netappfiles_account_update_command_builder {
        this.setFlag("--set", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_netappfiles_account_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags in `key[=value]` format. */
    tags(value: string): az_netappfiles_account_update_command_builder {
        this.setFlag("--tags", value);
        return this;
    }
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
class az_netappfiles_pool_create_command_builder extends CommandBuilder {
    constructor(commandPath: string, accountName: string, location: string, poolName: string, resourceGroup: string, serviceLevel: 'Premium' | 'Standard' | 'Ultra', size: string) {
        super(commandPath);
        this.accountName(accountName)
        this.location(location)
        this.poolName(poolName)
        this.resourceGroup(resourceGroup)
        this.serviceLevel(serviceLevel)
        this.size(size)
    }

    /** The name of the ANF account. */
    accountName(value: string): az_netappfiles_pool_create_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_netappfiles_pool_create_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** The name of the ANF pool. */
    poolName(value: string): az_netappfiles_pool_create_command_builder {
        this.setFlag("--pool-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_netappfiles_pool_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The service level for the ANF pool. */
    serviceLevel(value: 'Premium' | 'Standard' | 'Ultra'): az_netappfiles_pool_create_command_builder {
        this.setFlag("--service-level", value);
        return this;
    }

    /** The size for the ANF pool. Must be an integer number of tebibytes in multiples of 4. */
    size(value: string): az_netappfiles_pool_create_command_builder {
        this.setFlag("--size", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_netappfiles_pool_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags in `key[=value]` format. */
    tags(value: string): az_netappfiles_pool_create_command_builder {
        this.setFlag("--tags", value);
        return this;
    }
}

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
class az_netappfiles_pool_delete_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** The name of the ANF account. */
    accountName(value: string): az_netappfiles_pool_delete_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_netappfiles_pool_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the ANF pool. */
    poolName(value: string): az_netappfiles_pool_delete_command_builder {
        this.setFlag("--pool-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_netappfiles_pool_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_netappfiles_pool_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_netappfiles_pool_list_command_builder extends CommandBuilder {
    constructor(commandPath: string, accountName: string, resourceGroup: string) {
        super(commandPath);
        this.accountName(accountName)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the ANF account. */
    accountName(value: string): az_netappfiles_pool_list_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_netappfiles_pool_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_netappfiles_pool_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_netappfiles_pool_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_netappfiles_pool_show_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** The name of the ANF account. */
    accountName(value: string): az_netappfiles_pool_show_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_netappfiles_pool_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the ANF pool. */
    poolName(value: string): az_netappfiles_pool_show_command_builder {
        this.setFlag("--pool-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_netappfiles_pool_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_netappfiles_pool_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_netappfiles_pool_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
 *                            [--remove]
 *                            [--resource-group]
 *                            [--service-level {Premium, Standard, Ultra}]
 *                            [--set]
 *                            [--size]
 *                            [--subscription]
 *                            [--tags]
 * ```
 */
class az_netappfiles_pool_update_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** The name of the ANF account. */
    accountName(value: string): az_netappfiles_pool_update_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_netappfiles_pool_update_command_builder {
        this.setFlag("--add", value);
        return this;
    }

    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_netappfiles_pool_update_command_builder {
        this.setFlag("--force-string", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_netappfiles_pool_update_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the ANF pool. */
    poolName(value: string): az_netappfiles_pool_update_command_builder {
        this.setFlag("--pool-name", value);
        return this;
    }

    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_netappfiles_pool_update_command_builder {
        this.setFlag("--remove", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_netappfiles_pool_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The service level for the ANF pool. */
    serviceLevel(value: 'Premium' | 'Standard' | 'Ultra'): az_netappfiles_pool_update_command_builder {
        this.setFlag("--service-level", value);
        return this;
    }

    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_netappfiles_pool_update_command_builder {
        this.setFlag("--set", value);
        return this;
    }

    /** The size for the ANF pool. Must be an integer number of tebibytes in multiples of 4. */
    size(value: string): az_netappfiles_pool_update_command_builder {
        this.setFlag("--size", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_netappfiles_pool_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags in `key[=value]` format. */
    tags(value: string): az_netappfiles_pool_update_command_builder {
        this.setFlag("--tags", value);
        return this;
    }
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
class az_netappfiles_snapshot_create_command_builder extends CommandBuilder {
    constructor(commandPath: string, accountName: string, location: string, snapshotName: string, poolName: string, resourceGroup: string, volumeName: string) {
        super(commandPath);
        this.accountName(accountName)
        this.location(location)
        this.snapshotName(snapshotName)
        this.poolName(poolName)
        this.resourceGroup(resourceGroup)
        this.volumeName(volumeName)
    }

    /** The name of the ANF account. */
    accountName(value: string): az_netappfiles_snapshot_create_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_netappfiles_snapshot_create_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** The name of the ANF snapshot. */
    snapshotName(value: string): az_netappfiles_snapshot_create_command_builder {
        this.setFlag("--snapshot-name", value);
        return this;
    }

    /** The name of the ANF pool. */
    poolName(value: string): az_netappfiles_snapshot_create_command_builder {
        this.setFlag("--pool-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_netappfiles_snapshot_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the ANF volume. */
    volumeName(value: string): az_netappfiles_snapshot_create_command_builder {
        this.setFlag("--volume-name", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_netappfiles_snapshot_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_netappfiles_snapshot_delete_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** The name of the ANF account. */
    accountName(value: string): az_netappfiles_snapshot_delete_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_netappfiles_snapshot_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the ANF snapshot. */
    snapshotName(value: string): az_netappfiles_snapshot_delete_command_builder {
        this.setFlag("--snapshot-name", value);
        return this;
    }

    /** The name of the ANF pool. */
    poolName(value: string): az_netappfiles_snapshot_delete_command_builder {
        this.setFlag("--pool-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_netappfiles_snapshot_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_netappfiles_snapshot_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** The name of the ANF volume. */
    volumeName(value: string): az_netappfiles_snapshot_delete_command_builder {
        this.setFlag("--volume-name", value);
        return this;
    }
}

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
class az_netappfiles_snapshot_list_command_builder extends CommandBuilder {
    constructor(commandPath: string, accountName: string, poolName: string, resourceGroup: string, volumeName: string) {
        super(commandPath);
        this.accountName(accountName)
        this.poolName(poolName)
        this.resourceGroup(resourceGroup)
        this.volumeName(volumeName)
    }

    /** The name of the ANF account. */
    accountName(value: string): az_netappfiles_snapshot_list_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** The name of the ANF pool. */
    poolName(value: string): az_netappfiles_snapshot_list_command_builder {
        this.setFlag("--pool-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_netappfiles_snapshot_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The name of the ANF volume. */
    volumeName(value: string): az_netappfiles_snapshot_list_command_builder {
        this.setFlag("--volume-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_netappfiles_snapshot_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_netappfiles_snapshot_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_netappfiles_snapshot_show_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** The name of the ANF account. */
    accountName(value: string): az_netappfiles_snapshot_show_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_netappfiles_snapshot_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the ANF snapshot. */
    snapshotName(value: string): az_netappfiles_snapshot_show_command_builder {
        this.setFlag("--snapshot-name", value);
        return this;
    }

    /** The name of the ANF pool. */
    poolName(value: string): az_netappfiles_snapshot_show_command_builder {
        this.setFlag("--pool-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_netappfiles_snapshot_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_netappfiles_snapshot_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_netappfiles_snapshot_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** The name of the ANF volume. */
    volumeName(value: string): az_netappfiles_snapshot_show_command_builder {
        this.setFlag("--volume-name", value);
        return this;
    }
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
class az_netappfiles_volume_export_policy_add_command_builder extends CommandBuilder {
    constructor(commandPath: string, allowedClients: string, cifs: boolean, nfsv3: boolean, nfsv41: boolean, ruleIndex: string, unixReadOnly: boolean, unixReadWrite: boolean) {
        super(commandPath);
        this.allowedClients(allowedClients)
        this.cifs(cifs)
        this.nfsv3(nfsv3)
        this.nfsv41(nfsv41)
        this.ruleIndex(ruleIndex)
        this.unixReadOnly(unixReadOnly)
        this.unixReadWrite(unixReadWrite)
    }

    /** Client ingress specification as comma separated string with IPv4 CIDRs, IPv4 host addresses and host names). */
    allowedClients(value: string): az_netappfiles_volume_export_policy_add_command_builder {
        this.setFlag("--allowed-clients", value);
        return this;
    }

    /** Indication that CIFS protocol is allowed. */
    cifs(value: boolean): az_netappfiles_volume_export_policy_add_command_builder {
        this.setFlag("--cifs", value.toString());
        return this;
    }

    /** Indication that NFSv3 protocol is allowed. */
    nfsv3(value: boolean): az_netappfiles_volume_export_policy_add_command_builder {
        this.setFlag("--nfsv3", value.toString());
        return this;
    }

    /** Indication that NFSv4.1 protocol is allowed. */
    nfsv41(value: boolean): az_netappfiles_volume_export_policy_add_command_builder {
        this.setFlag("--nfsv41", value.toString());
        return this;
    }

    /** Order index. No number can be repeated. Max 6 rules. */
    ruleIndex(value: string): az_netappfiles_volume_export_policy_add_command_builder {
        this.setFlag("--rule-index", value);
        return this;
    }

    /** Indication of read only access. */
    unixReadOnly(value: boolean): az_netappfiles_volume_export_policy_add_command_builder {
        this.setFlag("--unix-read-only", value.toString());
        return this;
    }

    /** Indication of read and write access. */
    unixReadWrite(value: boolean): az_netappfiles_volume_export_policy_add_command_builder {
        this.setFlag("--unix-read-write", value.toString());
        return this;
    }

    /** The name of the ANF account. */
    accountName(value: string): az_netappfiles_volume_export_policy_add_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_netappfiles_volume_export_policy_add_command_builder {
        this.setFlag("--add", value);
        return this;
    }

    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_netappfiles_volume_export_policy_add_command_builder {
        this.setFlag("--force-string", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_netappfiles_volume_export_policy_add_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the ANF volume. */
    volumeName(value: string): az_netappfiles_volume_export_policy_add_command_builder {
        this.setFlag("--volume-name", value);
        return this;
    }

    /** The name of the ANF pool. */
    poolName(value: string): az_netappfiles_volume_export_policy_add_command_builder {
        this.setFlag("--pool-name", value);
        return this;
    }

    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_netappfiles_volume_export_policy_add_command_builder {
        this.setFlag("--remove", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_netappfiles_volume_export_policy_add_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_netappfiles_volume_export_policy_add_command_builder {
        this.setFlag("--set", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_netappfiles_volume_export_policy_add_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_netappfiles_volume_export_policy_list_command_builder extends CommandBuilder {
    constructor(commandPath: string, accountName: string, volumeName: string, poolName: string, resourceGroup: string) {
        super(commandPath);
        this.accountName(accountName)
        this.volumeName(volumeName)
        this.poolName(poolName)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the ANF account. */
    accountName(value: string): az_netappfiles_volume_export_policy_list_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** The name of the ANF volume. */
    volumeName(value: string): az_netappfiles_volume_export_policy_list_command_builder {
        this.setFlag("--volume-name", value);
        return this;
    }

    /** The name of the ANF pool. */
    poolName(value: string): az_netappfiles_volume_export_policy_list_command_builder {
        this.setFlag("--pool-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_netappfiles_volume_export_policy_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_netappfiles_volume_export_policy_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_netappfiles_volume_export_policy_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_netappfiles_volume_export_policy_remove_command_builder extends CommandBuilder {
    constructor(commandPath: string, ruleIndex: string) {
        super(commandPath);
        this.ruleIndex(ruleIndex)
    }

    /** Order index. Range 1 to 6. */
    ruleIndex(value: string): az_netappfiles_volume_export_policy_remove_command_builder {
        this.setFlag("--rule-index", value);
        return this;
    }

    /** The name of the ANF account. */
    accountName(value: string): az_netappfiles_volume_export_policy_remove_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_netappfiles_volume_export_policy_remove_command_builder {
        this.setFlag("--add", value);
        return this;
    }

    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_netappfiles_volume_export_policy_remove_command_builder {
        this.setFlag("--force-string", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_netappfiles_volume_export_policy_remove_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the ANF volume. */
    volumeName(value: string): az_netappfiles_volume_export_policy_remove_command_builder {
        this.setFlag("--volume-name", value);
        return this;
    }

    /** The name of the ANF pool. */
    poolName(value: string): az_netappfiles_volume_export_policy_remove_command_builder {
        this.setFlag("--pool-name", value);
        return this;
    }

    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_netappfiles_volume_export_policy_remove_command_builder {
        this.setFlag("--remove", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_netappfiles_volume_export_policy_remove_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_netappfiles_volume_export_policy_remove_command_builder {
        this.setFlag("--set", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_netappfiles_volume_export_policy_remove_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_netappfiles_volume_replication_approve_command_builder extends CommandBuilder {
    constructor(commandPath: string, accountName: string, volumeName: string, poolName: string, remoteVolumeResourceId: string, resourceGroup: string) {
        super(commandPath);
        this.accountName(accountName)
        this.volumeName(volumeName)
        this.poolName(poolName)
        this.remoteVolumeResourceId(remoteVolumeResourceId)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the ANF account. */
    accountName(value: string): az_netappfiles_volume_replication_approve_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** The name of the replication source volume. */
    volumeName(value: string): az_netappfiles_volume_replication_approve_command_builder {
        this.setFlag("--volume-name", value);
        return this;
    }

    /** The name of the ANF pool. */
    poolName(value: string): az_netappfiles_volume_replication_approve_command_builder {
        this.setFlag("--pool-name", value);
        return this;
    }

    /** The resource id of the destination replication volume. */
    remoteVolumeResourceId(value: string): az_netappfiles_volume_replication_approve_command_builder {
        this.setFlag("--remote-volume-resource-id", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_netappfiles_volume_replication_approve_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_netappfiles_volume_replication_approve_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_netappfiles_volume_replication_remove_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** The name of the ANF account. */
    accountName(value: string): az_netappfiles_volume_replication_remove_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_netappfiles_volume_replication_remove_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the replication destination volume. */
    volumeName(value: string): az_netappfiles_volume_replication_remove_command_builder {
        this.setFlag("--volume-name", value);
        return this;
    }

    /** The name of the ANF pool. */
    poolName(value: string): az_netappfiles_volume_replication_remove_command_builder {
        this.setFlag("--pool-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_netappfiles_volume_replication_remove_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_netappfiles_volume_replication_remove_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_netappfiles_volume_replication_resume_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** The name of the ANF account. */
    accountName(value: string): az_netappfiles_volume_replication_resume_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_netappfiles_volume_replication_resume_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the replication destination volume. */
    volumeName(value: string): az_netappfiles_volume_replication_resume_command_builder {
        this.setFlag("--volume-name", value);
        return this;
    }

    /** The name of the ANF pool. */
    poolName(value: string): az_netappfiles_volume_replication_resume_command_builder {
        this.setFlag("--pool-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_netappfiles_volume_replication_resume_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_netappfiles_volume_replication_resume_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_netappfiles_volume_replication_status_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** The name of the ANF account. */
    accountName(value: string): az_netappfiles_volume_replication_status_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_netappfiles_volume_replication_status_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the replication destination volume. */
    volumeName(value: string): az_netappfiles_volume_replication_status_command_builder {
        this.setFlag("--volume-name", value);
        return this;
    }

    /** The name of the ANF pool. */
    poolName(value: string): az_netappfiles_volume_replication_status_command_builder {
        this.setFlag("--pool-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_netappfiles_volume_replication_status_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_netappfiles_volume_replication_status_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Suspend/break a volume replication for the specified destination volume. The replication process is suspended until resumed or deleted.
 *
 * Syntax:
 * ```
 * az netappfiles volume replication suspend [--account-name]
 *                                           [--ids]
 *                                           [--name]
 *                                           [--pool-name]
 *                                           [--resource-group]
 *                                           [--subscription]
 * ```
 */
class az_netappfiles_volume_replication_suspend_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** The name of the ANF account. */
    accountName(value: string): az_netappfiles_volume_replication_suspend_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_netappfiles_volume_replication_suspend_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the replication destination volume. */
    volumeName(value: string): az_netappfiles_volume_replication_suspend_command_builder {
        this.setFlag("--volume-name", value);
        return this;
    }

    /** The name of the ANF pool. */
    poolName(value: string): az_netappfiles_volume_replication_suspend_command_builder {
        this.setFlag("--pool-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_netappfiles_volume_replication_suspend_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_netappfiles_volume_replication_suspend_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
 *                              [--endpoint-type]
 *                              [--protocol-types]
 *                              [--remote-volume-resource-id]
 *                              [--replication-schedule]
 *                              [--service-level {Premium, Standard, Ultra}]
 *                              [--snapshot-id]
 *                              [--subnet]
 *                              [--subscription]
 *                              [--tags]
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
class az_netappfiles_volume_create_command_builder extends CommandBuilder {
    constructor(commandPath: string, accountName: string, filePath: string, location: string, volumeName: string, poolName: string, resourceGroup: string, usageThreshold: string, vnet: string) {
        super(commandPath);
        this.accountName(accountName)
        this.filePath(filePath)
        this.location(location)
        this.volumeName(volumeName)
        this.poolName(poolName)
        this.resourceGroup(resourceGroup)
        this.usageThreshold(usageThreshold)
        this.vnet(vnet)
    }

    /** The name of the ANF account. */
    accountName(value: string): az_netappfiles_volume_create_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** A 1-80 character long alphanumeric string value that identifies a unique file share or mount point in the target subnet. */
    filePath(value: string): az_netappfiles_volume_create_command_builder {
        this.setFlag("--file-path", value);
        return this;
    }

    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_netappfiles_volume_create_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** The name of the ANF volume. */
    volumeName(value: string): az_netappfiles_volume_create_command_builder {
        this.setFlag("--volume-name", value);
        return this;
    }

    /** The name of the ANF pool. */
    poolName(value: string): az_netappfiles_volume_create_command_builder {
        this.setFlag("--pool-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_netappfiles_volume_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The maximum storage quota allowed for a file system as integer number of GiB. Min 100 GiB, max 100TiB". */
    usageThreshold(value: string): az_netappfiles_volume_create_command_builder {
        this.setFlag("--usage-threshold", value);
        return this;
    }

    /** The ARM Id or name of the vnet for the volume. */
    vnet(value: string): az_netappfiles_volume_create_command_builder {
        this.setFlag("--vnet", value);
        return this;
    }

    /** Whether the volume is source ("src") or destination ("dst"). */
    endpointType(value: string): az_netappfiles_volume_create_command_builder {
        this.setFlag("--endpoint-type", value);
        return this;
    }

    /** Space seperated list of protocols that the volume can use, available protocols are "NFSv4.1", "NFSv3", "CIFS". */
    protocolTypes(value: string): az_netappfiles_volume_create_command_builder {
        this.setFlag("--protocol-types", value);
        return this;
    }

    /** The volume id of the remote volume of the replication (the destination for "src" volume endpoints and the source for "dst" endpoints). */
    remoteVolumeResourceId(value: string): az_netappfiles_volume_create_command_builder {
        this.setFlag("--remote-volume-resource-id", value);
        return this;
    }

    /** The replication schedule, e.g. "_10minutely, hourly, daily, weekly, monthly". */
    replicationSchedule(value: string): az_netappfiles_volume_create_command_builder {
        this.setFlag("--replication-schedule", value);
        return this;
    }

    /** The service level. */
    serviceLevel(value: 'Premium' | 'Standard' | 'Ultra'): az_netappfiles_volume_create_command_builder {
        this.setFlag("--service-level", value);
        return this;
    }

    /** Create a volume created from this snapshot. UUID v4 or resource identifier used to identify the Snapshot. example snapshot_id "9760acf5-4638-11e7-9bdb-020073ca3333". */
    snapshotId(value: string): az_netappfiles_volume_create_command_builder {
        this.setFlag("--snapshot-id", value);
        return this;
    }

    /** The ARM Id or name of the subnet for the vnet. If omitted 'default' will be used. */
    subnet(value: string): az_netappfiles_volume_create_command_builder {
        this.setFlag("--subnet", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_netappfiles_volume_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags in `key[=value]` format. */
    tags(value: string): az_netappfiles_volume_create_command_builder {
        this.setFlag("--tags", value);
        return this;
    }

    /** Whether the volume should be a data protection volume ("DataProtection"), empty if this is not a data protection volume. */
    volumeType(value: string): az_netappfiles_volume_create_command_builder {
        this.setFlag("--volume-type", value);
        return this;
    }
}

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
class az_netappfiles_volume_delete_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** The name of the ANF account. */
    accountName(value: string): az_netappfiles_volume_delete_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_netappfiles_volume_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the ANF volume. */
    volumeName(value: string): az_netappfiles_volume_delete_command_builder {
        this.setFlag("--volume-name", value);
        return this;
    }

    /** The name of the ANF pool. */
    poolName(value: string): az_netappfiles_volume_delete_command_builder {
        this.setFlag("--pool-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_netappfiles_volume_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_netappfiles_volume_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_netappfiles_volume_list_command_builder extends CommandBuilder {
    constructor(commandPath: string, accountName: string, poolName: string, resourceGroup: string) {
        super(commandPath);
        this.accountName(accountName)
        this.poolName(poolName)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the ANF account. */
    accountName(value: string): az_netappfiles_volume_list_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** The name of the ANF pool. */
    poolName(value: string): az_netappfiles_volume_list_command_builder {
        this.setFlag("--pool-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_netappfiles_volume_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_netappfiles_volume_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_netappfiles_volume_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
 * @param {string} snapshotId Snapshot_Id of the snapshot. UUID v4 used to identify the Snapshot, example "9760acf5-4638-11e7-9bdb-020073ca3333".
 */
class az_netappfiles_volume_revert_command_builder extends CommandBuilder {
    constructor(commandPath: string, accountName: string, volumeName: string, poolName: string, resourceGroup: string, snapshotId: string) {
        super(commandPath);
        this.accountName(accountName)
        this.volumeName(volumeName)
        this.poolName(poolName)
        this.resourceGroup(resourceGroup)
        this.snapshotId(snapshotId)
    }

    /** The name of the ANF account. */
    accountName(value: string): az_netappfiles_volume_revert_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** The name of the ANF volume. */
    volumeName(value: string): az_netappfiles_volume_revert_command_builder {
        this.setFlag("--volume-name", value);
        return this;
    }

    /** The name of the ANF pool. */
    poolName(value: string): az_netappfiles_volume_revert_command_builder {
        this.setFlag("--pool-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_netappfiles_volume_revert_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Snapshot_Id of the snapshot. UUID v4 used to identify the Snapshot, example "9760acf5-4638-11e7-9bdb-020073ca3333". */
    snapshotId(value: string): az_netappfiles_volume_revert_command_builder {
        this.setFlag("--snapshot-id", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_netappfiles_volume_revert_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

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
class az_netappfiles_volume_show_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** The name of the ANF account. */
    accountName(value: string): az_netappfiles_volume_show_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_netappfiles_volume_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the ANF pool. */
    volumeName(value: string): az_netappfiles_volume_show_command_builder {
        this.setFlag("--volume-name", value);
        return this;
    }

    /** The name of the ANF pool. */
    poolName(value: string): az_netappfiles_volume_show_command_builder {
        this.setFlag("--pool-name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_netappfiles_volume_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_netappfiles_volume_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_netappfiles_volume_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Update the specified ANF volume with the values provided. Unspecified values will remain unchanged. Export policies are amended/created with the subgroup commands.
 *
 * Syntax:
 * ```
 * az netappfiles volume update [--account-name]
 *                              [--add]
 *                              [--force-string]
 *                              [--ids]
 *                              [--name]
 *                              [--pool-name]
 *                              [--protocol-types]
 *                              [--remove]
 *                              [--resource-group]
 *                              [--service-level {Premium, Standard, Ultra}]
 *                              [--set]
 *                              [--subscription]
 *                              [--tags]
 *                              [--usage-threshold]
 * ```
 */
class az_netappfiles_volume_update_command_builder extends CommandBuilder {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** The name of the ANF account. */
    accountName(value: string): az_netappfiles_volume_update_command_builder {
        this.setFlag("--account-name", value);
        return this;
    }

    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_netappfiles_volume_update_command_builder {
        this.setFlag("--add", value);
        return this;
    }

    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_netappfiles_volume_update_command_builder {
        this.setFlag("--force-string", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_netappfiles_volume_update_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the ANF volume. */
    volumeName(value: string): az_netappfiles_volume_update_command_builder {
        this.setFlag("--volume-name", value);
        return this;
    }

    /** The name of the ANF pool. */
    poolName(value: string): az_netappfiles_volume_update_command_builder {
        this.setFlag("--pool-name", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    protocolTypes(value: string): az_netappfiles_volume_update_command_builder {
        this.setFlag("--protocol-types", value);
        return this;
    }

    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_netappfiles_volume_update_command_builder {
        this.setFlag("--remove", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_netappfiles_volume_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The service level. */
    serviceLevel(value: 'Premium' | 'Standard' | 'Ultra'): az_netappfiles_volume_update_command_builder {
        this.setFlag("--service-level", value);
        return this;
    }

    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_netappfiles_volume_update_command_builder {
        this.setFlag("--set", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_netappfiles_volume_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags in `key[=value]` format. */
    tags(value: string): az_netappfiles_volume_update_command_builder {
        this.setFlag("--tags", value);
        return this;
    }

    /** The maximum storage quota allowed for a file system as integer number of GiB. Min 100 GiB, max 100TiB". */
    usageThreshold(value: string): az_netappfiles_volume_update_command_builder {
        this.setFlag("--usage-threshold", value);
        return this;
    }
}
