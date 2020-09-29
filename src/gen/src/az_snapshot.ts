import { CommandBuilder } from '../base';
import { az_snapshot_create_command_result } from './models/az_snapshot_create_command_result'
import { az_snapshot_delete_command_result } from './models/az_snapshot_delete_command_result'
import { az_snapshot_grant_access_command_result } from './models/az_snapshot_grant_access_command_result'
import { az_snapshot_list_command_result } from './models/az_snapshot_list_command_result'
import { az_snapshot_revoke_access_command_result } from './models/az_snapshot_revoke_access_command_result'
import { az_snapshot_show_command_result } from './models/az_snapshot_show_command_result'
import { az_snapshot_update_command_result } from './models/az_snapshot_update_command_result'
import { az_snapshot_wait_command_result } from './models/az_snapshot_wait_command_result'

/** Manage point-in-time copies of managed disks, native blobs, or other snapshots. */
export class az_snapshot {
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
    static create(name: string, resourceGroup: string): az_snapshot_create_command_builder {
        return new az_snapshot_create_command_builder("az snapshot create", name, resourceGroup);
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
    static delete(): az_snapshot_delete_command_builder {
        return new az_snapshot_delete_command_builder("az snapshot delete");
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
    static grant_access(durationInSeconds: string): az_snapshot_grant_access_command_builder {
        return new az_snapshot_grant_access_command_builder("az snapshot grant-access", durationInSeconds);
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
    static list(): az_snapshot_list_command_builder {
        return new az_snapshot_list_command_builder("az snapshot list");
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
    static revoke_access(): az_snapshot_revoke_access_command_builder {
        return new az_snapshot_revoke_access_command_builder("az snapshot revoke-access");
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
    static show(): az_snapshot_show_command_builder {
        return new az_snapshot_show_command_builder("az snapshot show");
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
    static update(): az_snapshot_update_command_builder {
        return new az_snapshot_update_command_builder("az snapshot update");
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
    static wait(): az_snapshot_wait_command_builder {
        return new az_snapshot_wait_command_builder("az snapshot wait");
    }
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
class az_snapshot_create_command_builder extends CommandBuilder<az_snapshot_create_command_result> {
    constructor(commandPath: string, name: string, resourceGroup: string) {
        super(commandPath);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the snapshot. */
    name(value: string): az_snapshot_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_snapshot_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of the disk access resource for using private endpoints on disks. */
    diskAccess(value: string): az_snapshot_create_command_builder {
        this.setFlag("--disk-access", value);
        return this;
    }

    /** Name or ID of disk encryption set that is used to encrypt the disk. */
    diskEncryptionSet(value: string): az_snapshot_create_command_builder {
        this.setFlag("--disk-encryption-set", value);
        return this;
    }

    /** Encryption type. EncryptionAtRestWithPlatformKey: Disk is encrypted with XStore managed key at rest. It is the default encryption type. EncryptionAtRestWithCustomerKey: Disk is encrypted with Customer managed key at rest. */
    encryptionType(value: string): az_snapshot_create_command_builder {
        this.setFlag("--encryption-type", value);
        return this;
    }

    /** Create the snapshot for uploading blobs later on through storage commands. Run "az snapshot grant-access --access-level Write" to retrieve the snapshot's SAS token. */
    forUpload(value: boolean): az_snapshot_create_command_builder {
        this.setFlag("--for-upload", value.toString());
        return this;
    }

    /** The hypervisor generation of the Virtual Machine. Applicable to OS disks only. */
    hyperVGeneration(value: 'V1' | 'V2'): az_snapshot_create_command_builder {
        this.setFlag("--hyper-v-generation", value);
        return this;
    }

    /** Whether a snapshot is incremental. Incremental snapshots on the same disk occupy less space than full snapshots and can be diffed. */
    incremental(value: boolean): az_snapshot_create_command_builder {
        this.setFlag("--incremental", value.toString());
        return this;
    }

    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. If location is not specified and no default location specified, location will be automatically set as same as the resource group. */
    location(value: string): az_snapshot_create_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** Policy for accessing the disk via network. */
    networkAccessPolicy(value: 'AllowAll' | 'AllowPrivate' | 'DenyAll'): az_snapshot_create_command_builder {
        this.setFlag("--network-access-policy", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_snapshot_create_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Size in GB. Max size: 4095 GB (certain preview disks can be larger). */
    sizeGb(value: string): az_snapshot_create_command_builder {
        this.setFlag("--size-gb", value);
        return this;
    }

    /** */
    sku(value: 'Premium_LRS' | 'Standard_LRS' | 'Standard_ZRS'): az_snapshot_create_command_builder {
        this.setFlag("--sku", value);
        return this;
    }

    /** Source to create the disk/snapshot from, including unmanaged blob uri, managed disk id or name, or snapshot id or name. */
    source(value: string): az_snapshot_create_command_builder {
        this.setFlag("--source", value);
        return this;
    }

    /** Used when source blob is in a different subscription. */
    sourceStorageAccountId(value: string): az_snapshot_create_command_builder {
        this.setFlag("--source-storage-account-id", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_snapshot_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_snapshot_create_command_builder {
        this.setFlag("--tags", value);
        return this;
    }
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
class az_snapshot_delete_command_builder extends CommandBuilder<az_snapshot_delete_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_snapshot_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the snapshot. */
    name(value: string): az_snapshot_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_snapshot_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_snapshot_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_snapshot_grant_access_command_builder extends CommandBuilder<az_snapshot_grant_access_command_result> {
    constructor(commandPath: string, durationInSeconds: string) {
        super(commandPath);
        this.durationInSeconds(durationInSeconds)
    }

    /** Time duration in seconds until the SAS access expires. */
    durationInSeconds(value: string): az_snapshot_grant_access_command_builder {
        this.setFlag("--duration-in-seconds", value);
        return this;
    }

    /** Access level. */
    accessLevel(value: 'Read' | 'Write'): az_snapshot_grant_access_command_builder {
        this.setFlag("--access-level", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_snapshot_grant_access_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the snapshot. */
    name(value: string): az_snapshot_grant_access_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_snapshot_grant_access_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_snapshot_grant_access_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_snapshot_list_command_builder extends CommandBuilder<az_snapshot_list_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_snapshot_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_snapshot_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_snapshot_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_snapshot_revoke_access_command_builder extends CommandBuilder<az_snapshot_revoke_access_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_snapshot_revoke_access_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the snapshot. */
    name(value: string): az_snapshot_revoke_access_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_snapshot_revoke_access_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_snapshot_revoke_access_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_snapshot_show_command_builder extends CommandBuilder<az_snapshot_show_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_snapshot_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the snapshot. */
    name(value: string): az_snapshot_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_snapshot_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_snapshot_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_snapshot_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_snapshot_update_command_builder extends CommandBuilder<az_snapshot_update_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_snapshot_update_command_builder {
        this.setFlag("--add", value);
        return this;
    }

    /** Name or ID of the disk access resource for using private endpoints on disks. */
    diskAccess(value: string): az_snapshot_update_command_builder {
        this.setFlag("--disk-access", value);
        return this;
    }

    /** Name or ID of disk encryption set that is used to encrypt the disk. */
    diskEncryptionSet(value: string): az_snapshot_update_command_builder {
        this.setFlag("--disk-encryption-set", value);
        return this;
    }

    /** Encryption type. EncryptionAtRestWithPlatformKey: Disk is encrypted with XStore managed key at rest. It is the default encryption type. EncryptionAtRestWithCustomerKey: Disk is encrypted with Customer managed key at rest. */
    encryptionType(value: string): az_snapshot_update_command_builder {
        this.setFlag("--encryption-type", value);
        return this;
    }

    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_snapshot_update_command_builder {
        this.setFlag("--force-string", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_snapshot_update_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the snapshot. */
    name(value: string): az_snapshot_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Policy for accessing the disk via network. */
    networkAccessPolicy(value: 'AllowAll' | 'AllowPrivate' | 'DenyAll'): az_snapshot_update_command_builder {
        this.setFlag("--network-access-policy", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_snapshot_update_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_snapshot_update_command_builder {
        this.setFlag("--remove", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_snapshot_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_snapshot_update_command_builder {
        this.setFlag("--set", value);
        return this;
    }

    /** */
    sku(value: 'Premium_LRS' | 'Standard_LRS' | 'Standard_ZRS'): az_snapshot_update_command_builder {
        this.setFlag("--sku", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_snapshot_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_snapshot_wait_command_builder extends CommandBuilder<az_snapshot_wait_command_result> {
    constructor(commandPath: string) {
        super(commandPath);
    }

    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    created(value: string): az_snapshot_wait_command_builder {
        this.setFlag("--created", value);
        return this;
    }

    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    custom(value: string): az_snapshot_wait_command_builder {
        this.setFlag("--custom", value);
        return this;
    }

    /** Wait until deleted. */
    deleted(value: string): az_snapshot_wait_command_builder {
        this.setFlag("--deleted", value);
        return this;
    }

    /** Wait until the resource exists. */
    exists(value: string): az_snapshot_wait_command_builder {
        this.setFlag("--exists", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_snapshot_wait_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Polling interval in seconds. */
    interval(value: string): az_snapshot_wait_command_builder {
        this.setFlag("--interval", value);
        return this;
    }

    /** The name of the snapshot. */
    name(value: string): az_snapshot_wait_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_snapshot_wait_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_snapshot_wait_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Maximum wait in seconds. */
    timeout(value: string): az_snapshot_wait_command_builder {
        this.setFlag("--timeout", value);
        return this;
    }

    /** Wait until updated with provisioningState at 'Succeeded'. */
    updated(value: string): az_snapshot_wait_command_builder {
        this.setFlag("--updated", value);
        return this;
    }
}
