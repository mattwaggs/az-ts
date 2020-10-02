import { CommandBuilder } from '../base';
import { az_snapshot_create_command_result } from './models/az_snapshot_create_command_result';
import { az_snapshot_delete_command_result } from './models/az_snapshot_delete_command_result';
import { az_snapshot_grant_access_command_result } from './models/az_snapshot_grant_access_command_result';
import { az_snapshot_list_command_result } from './models/az_snapshot_list_command_result';
import { az_snapshot_revoke_access_command_result } from './models/az_snapshot_revoke_access_command_result';
import { az_snapshot_show_command_result } from './models/az_snapshot_show_command_result';
import { az_snapshot_update_command_result } from './models/az_snapshot_update_command_result';
import { az_snapshot_wait_command_result } from './models/az_snapshot_wait_command_result';
/** Manage point-in-time copies of managed disks, native blobs, or other snapshots. */
export declare class az_snapshot {
    /**
     * Create a snapshot.
     *
     * Syntax:
     * ```
     * az snapshot create --name
     *                    --resource-group
     *                    [--disk-access]
     *                    [--disk-encryption-set]
     *                    [--encryption-type]
     *                    [--for-upload {false, true}]
     *                    [--hyper-v-generation {V1, V2}]
     *                    [--incremental {false, true}]
     *                    [--location]
     *                    [--network-access-policy {AllowAll, AllowPrivate, DenyAll}]
     *                    [--no-wait]
     *                    [--size-gb]
     *                    [--sku {Premium_LRS, Standard_LRS, Standard_ZRS}]
     *                    [--source]
     *                    [--source-storage-account-id]
     *                    [--subscription]
     *                    [--tags]
     * ```
     *
     * @param {string} name The name of the snapshot.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static create(name: string, resourceGroup: string): az_snapshot_create_command_builder;
    /**
     * Deletes a snapshot.
     *
     * Syntax:
     * ```
     * az snapshot delete [--ids]
     *                    [--name]
     *                    [--resource-group]
     *                    [--subscription]
     * ```
     */
    static delete(): az_snapshot_delete_command_builder;
    /**
     * Grant read access to a snapshot.
     *
     * Syntax:
     * ```
     * az snapshot grant-access --duration-in-seconds
     *                          [--access-level {Read, Write}]
     *                          [--ids]
     *                          [--name]
     *                          [--resource-group]
     *                          [--subscription]
     * ```
     *
     * @param {string} durationInSeconds Time duration in seconds until the SAS access expires.
     */
    static grant_access(durationInSeconds: string): az_snapshot_grant_access_command_builder;
    /**
     * List snapshots.
     *
     * Syntax:
     * ```
     * az snapshot list [--query-examples]
     *                  [--resource-group]
     *                  [--subscription]
     * ```
     */
    static list(): az_snapshot_list_command_builder;
    /**
     * Revoke read access to a snapshot.
     *
     * Syntax:
     * ```
     * az snapshot revoke-access [--ids]
     *                           [--name]
     *                           [--resource-group]
     *                           [--subscription]
     * ```
     */
    static revoke_access(): az_snapshot_revoke_access_command_builder;
    /**
     * Gets information about a snapshot.
     *
     * Syntax:
     * ```
     * az snapshot show [--ids]
     *                  [--name]
     *                  [--query-examples]
     *                  [--resource-group]
     *                  [--subscription]
     * ```
     */
    static show(): az_snapshot_show_command_builder;
    /**
     * Update a snapshot.
     *
     * Syntax:
     * ```
     * az snapshot update [--add]
     *                    [--disk-access]
     *                    [--disk-encryption-set]
     *                    [--encryption-type]
     *                    [--force-string]
     *                    [--ids]
     *                    [--name]
     *                    [--network-access-policy {AllowAll, AllowPrivate, DenyAll}]
     *                    [--no-wait]
     *                    [--remove]
     *                    [--resource-group]
     *                    [--set]
     *                    [--sku {Premium_LRS, Standard_LRS, Standard_ZRS}]
     *                    [--subscription]
     * ```
     */
    static update(): az_snapshot_update_command_builder;
    /**
     * Place the CLI in a waiting state until a condition of a snapshot is met.
     *
     * Syntax:
     * ```
     * az snapshot wait [--created]
     *                  [--custom]
     *                  [--deleted]
     *                  [--exists]
     *                  [--ids]
     *                  [--interval]
     *                  [--name]
     *                  [--resource-group]
     *                  [--subscription]
     *                  [--timeout]
     *                  [--updated]
     * ```
     */
    static wait(): az_snapshot_wait_command_builder;
}
/**
 * Create a snapshot.
 *
 * Syntax:
 * ```
 * az snapshot create --name
 *                    --resource-group
 *                    [--disk-access]
 *                    [--disk-encryption-set]
 *                    [--encryption-type]
 *                    [--for-upload {false, true}]
 *                    [--hyper-v-generation {V1, V2}]
 *                    [--incremental {false, true}]
 *                    [--location]
 *                    [--network-access-policy {AllowAll, AllowPrivate, DenyAll}]
 *                    [--no-wait]
 *                    [--size-gb]
 *                    [--sku {Premium_LRS, Standard_LRS, Standard_ZRS}]
 *                    [--source]
 *                    [--source-storage-account-id]
 *                    [--subscription]
 *                    [--tags]
 * ```
 *
 * @param {string} name The name of the snapshot.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_snapshot_create_command_builder extends CommandBuilder<az_snapshot_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** The name of the snapshot. */
    name(value: string): az_snapshot_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_snapshot_create_command_builder;
    /** Name or ID of the disk access resource for using private endpoints on disks. */
    diskAccess(value: string): az_snapshot_create_command_builder;
    /** Name or ID of disk encryption set that is used to encrypt the disk. */
    diskEncryptionSet(value: string): az_snapshot_create_command_builder;
    /** Encryption type. EncryptionAtRestWithPlatformKey: Disk is encrypted with XStore managed key at rest. It is the default encryption type. EncryptionAtRestWithCustomerKey: Disk is encrypted with Customer managed key at rest. */
    encryptionType(value: string): az_snapshot_create_command_builder;
    /** Create the snapshot for uploading blobs later on through storage commands. Run "az snapshot grant-access --access-level Write" to retrieve the snapshot's SAS token. */
    forUpload(value: boolean): az_snapshot_create_command_builder;
    /** The hypervisor generation of the Virtual Machine. Applicable to OS disks only. */
    hyperVGeneration(value: 'V1' | 'V2'): az_snapshot_create_command_builder;
    /** Whether a snapshot is incremental. Incremental snapshots on the same disk occupy less space than full snapshots and can be diffed. */
    incremental(value: boolean): az_snapshot_create_command_builder;
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. If location is not specified and no default location specified, location will be automatically set as same as the resource group. */
    location(value: string): az_snapshot_create_command_builder;
    /** Policy for accessing the disk via network. */
    networkAccessPolicy(value: 'AllowAll' | 'AllowPrivate' | 'DenyAll'): az_snapshot_create_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_snapshot_create_command_builder;
    /** Size in GB. Max size: 4095 GB (certain preview disks can be larger). */
    sizeGb(value: string): az_snapshot_create_command_builder;
    /** */
    sku(value: 'Premium_LRS' | 'Standard_LRS' | 'Standard_ZRS'): az_snapshot_create_command_builder;
    /** Source to create the disk/snapshot from, including unmanaged blob uri, managed disk id or name, or snapshot id or name. */
    source(value: string): az_snapshot_create_command_builder;
    /** Used when source blob is in a different subscription. */
    sourceStorageAccountId(value: string): az_snapshot_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_snapshot_create_command_builder;
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_snapshot_create_command_builder;
}
/**
 * Deletes a snapshot.
 *
 * Syntax:
 * ```
 * az snapshot delete [--ids]
 *                    [--name]
 *                    [--resource-group]
 *                    [--subscription]
 * ```
 */
declare class az_snapshot_delete_command_builder extends CommandBuilder<az_snapshot_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_snapshot_delete_command_builder;
    /** The name of the snapshot. */
    name(value: string): az_snapshot_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_snapshot_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_snapshot_delete_command_builder;
}
/**
 * Grant read access to a snapshot.
 *
 * Syntax:
 * ```
 * az snapshot grant-access --duration-in-seconds
 *                          [--access-level {Read, Write}]
 *                          [--ids]
 *                          [--name]
 *                          [--resource-group]
 *                          [--subscription]
 * ```
 *
 * @param {string} durationInSeconds Time duration in seconds until the SAS access expires.
 */
declare class az_snapshot_grant_access_command_builder extends CommandBuilder<az_snapshot_grant_access_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, durationInSeconds: string);
    /** Time duration in seconds until the SAS access expires. */
    durationInSeconds(value: string): az_snapshot_grant_access_command_builder;
    /** Access level. */
    accessLevel(value: 'Read' | 'Write'): az_snapshot_grant_access_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_snapshot_grant_access_command_builder;
    /** The name of the snapshot. */
    name(value: string): az_snapshot_grant_access_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_snapshot_grant_access_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_snapshot_grant_access_command_builder;
}
/**
 * List snapshots.
 *
 * Syntax:
 * ```
 * az snapshot list [--query-examples]
 *                  [--resource-group]
 *                  [--subscription]
 * ```
 */
declare class az_snapshot_list_command_builder extends CommandBuilder<az_snapshot_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_snapshot_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_snapshot_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_snapshot_list_command_builder;
}
/**
 * Revoke read access to a snapshot.
 *
 * Syntax:
 * ```
 * az snapshot revoke-access [--ids]
 *                           [--name]
 *                           [--resource-group]
 *                           [--subscription]
 * ```
 */
declare class az_snapshot_revoke_access_command_builder extends CommandBuilder<az_snapshot_revoke_access_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_snapshot_revoke_access_command_builder;
    /** The name of the snapshot. */
    name(value: string): az_snapshot_revoke_access_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_snapshot_revoke_access_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_snapshot_revoke_access_command_builder;
}
/**
 * Gets information about a snapshot.
 *
 * Syntax:
 * ```
 * az snapshot show [--ids]
 *                  [--name]
 *                  [--query-examples]
 *                  [--resource-group]
 *                  [--subscription]
 * ```
 */
declare class az_snapshot_show_command_builder extends CommandBuilder<az_snapshot_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_snapshot_show_command_builder;
    /** The name of the snapshot. */
    name(value: string): az_snapshot_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_snapshot_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_snapshot_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_snapshot_show_command_builder;
}
/**
 * Update a snapshot.
 *
 * Syntax:
 * ```
 * az snapshot update [--add]
 *                    [--disk-access]
 *                    [--disk-encryption-set]
 *                    [--encryption-type]
 *                    [--force-string]
 *                    [--ids]
 *                    [--name]
 *                    [--network-access-policy {AllowAll, AllowPrivate, DenyAll}]
 *                    [--no-wait]
 *                    [--remove]
 *                    [--resource-group]
 *                    [--set]
 *                    [--sku {Premium_LRS, Standard_LRS, Standard_ZRS}]
 *                    [--subscription]
 * ```
 */
declare class az_snapshot_update_command_builder extends CommandBuilder<az_snapshot_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_snapshot_update_command_builder;
    /** Name or ID of the disk access resource for using private endpoints on disks. */
    diskAccess(value: string): az_snapshot_update_command_builder;
    /** Name or ID of disk encryption set that is used to encrypt the disk. */
    diskEncryptionSet(value: string): az_snapshot_update_command_builder;
    /** Encryption type. EncryptionAtRestWithPlatformKey: Disk is encrypted with XStore managed key at rest. It is the default encryption type. EncryptionAtRestWithCustomerKey: Disk is encrypted with Customer managed key at rest. */
    encryptionType(value: string): az_snapshot_update_command_builder;
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_snapshot_update_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_snapshot_update_command_builder;
    /** The name of the snapshot. */
    name(value: string): az_snapshot_update_command_builder;
    /** Policy for accessing the disk via network. */
    networkAccessPolicy(value: 'AllowAll' | 'AllowPrivate' | 'DenyAll'): az_snapshot_update_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_snapshot_update_command_builder;
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_snapshot_update_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_snapshot_update_command_builder;
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_snapshot_update_command_builder;
    /** */
    sku(value: 'Premium_LRS' | 'Standard_LRS' | 'Standard_ZRS'): az_snapshot_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_snapshot_update_command_builder;
}
/**
 * Place the CLI in a waiting state until a condition of a snapshot is met.
 *
 * Syntax:
 * ```
 * az snapshot wait [--created]
 *                  [--custom]
 *                  [--deleted]
 *                  [--exists]
 *                  [--ids]
 *                  [--interval]
 *                  [--name]
 *                  [--resource-group]
 *                  [--subscription]
 *                  [--timeout]
 *                  [--updated]
 * ```
 */
declare class az_snapshot_wait_command_builder extends CommandBuilder<az_snapshot_wait_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    created(value: string): az_snapshot_wait_command_builder;
    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    custom(value: string): az_snapshot_wait_command_builder;
    /** Wait until deleted. */
    deleted(value: string): az_snapshot_wait_command_builder;
    /** Wait until the resource exists. */
    exists(value: string): az_snapshot_wait_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_snapshot_wait_command_builder;
    /** Polling interval in seconds. */
    interval(value: string): az_snapshot_wait_command_builder;
    /** The name of the snapshot. */
    name(value: string): az_snapshot_wait_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_snapshot_wait_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_snapshot_wait_command_builder;
    /** Maximum wait in seconds. */
    timeout(value: string): az_snapshot_wait_command_builder;
    /** Wait until updated with provisioningState at 'Succeeded'. */
    updated(value: string): az_snapshot_wait_command_builder;
}
export {};
