import { CommandBuilder } from '../base';
import { az_disk_access_create_command_result } from './models/az_disk_access_create_command_result';
import { az_disk_access_delete_command_result } from './models/az_disk_access_delete_command_result';
import { az_disk_access_list_command_result } from './models/az_disk_access_list_command_result';
import { az_disk_access_show_command_result } from './models/az_disk_access_show_command_result';
import { az_disk_access_update_command_result } from './models/az_disk_access_update_command_result';
import { az_disk_access_wait_command_result } from './models/az_disk_access_wait_command_result';
import { az_disk_encryption_set_create_command_result } from './models/az_disk_encryption_set_create_command_result';
import { az_disk_encryption_set_delete_command_result } from './models/az_disk_encryption_set_delete_command_result';
import { az_disk_encryption_set_list_command_result } from './models/az_disk_encryption_set_list_command_result';
import { az_disk_encryption_set_list_associated_resources_command_result } from './models/az_disk_encryption_set_list_associated_resources_command_result';
import { az_disk_encryption_set_show_command_result } from './models/az_disk_encryption_set_show_command_result';
import { az_disk_encryption_set_update_command_result } from './models/az_disk_encryption_set_update_command_result';
import { az_disk_create_command_result } from './models/az_disk_create_command_result';
import { az_disk_delete_command_result } from './models/az_disk_delete_command_result';
import { az_disk_grant_access_command_result } from './models/az_disk_grant_access_command_result';
import { az_disk_list_command_result } from './models/az_disk_list_command_result';
import { az_disk_revoke_access_command_result } from './models/az_disk_revoke_access_command_result';
import { az_disk_show_command_result } from './models/az_disk_show_command_result';
import { az_disk_update_command_result } from './models/az_disk_update_command_result';
import { az_disk_wait_command_result } from './models/az_disk_wait_command_result';
/** Manage disk access resources. */
export declare class az_disk_access {
    /**
     * Create a disk access resource.
     *
     * Syntax:
     * ```
     * az disk-access create --name
     *                       --resource-group
     *                       [--location]
     *                       [--no-wait]
     *                       [--subscription]
     *                       [--tags]
     * ```
     *
     * @param {string} name Name of the disk access resource.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static create(name: string, resourceGroup: string): az_disk_access_create_command_builder;
    /**
     * Delete a disk access resource.
     *
     * Syntax:
     * ```
     * az disk-access delete [--ids]
     *                       [--name]
     *                       [--resource-group]
     *                       [--subscription]
     * ```
     */
    static delete(): az_disk_access_delete_command_builder;
    /**
     * List disk access resources.
     *
     * Syntax:
     * ```
     * az disk-access list [--query-examples]
     *                     [--resource-group]
     *                     [--subscription]
     * ```
     */
    static list(): az_disk_access_list_command_builder;
    /**
     * Get information of a disk access resource.
     *
     * Syntax:
     * ```
     * az disk-access show [--ids]
     *                     [--name]
     *                     [--query-examples]
     *                     [--resource-group]
     *                     [--subscription]
     * ```
     */
    static show(): az_disk_access_show_command_builder;
    /**
     * Update a disk access resource.
     *
     * Syntax:
     * ```
     * az disk-access update [--add]
     *                       [--force-string]
     *                       [--ids]
     *                       [--name]
     *                       [--no-wait]
     *                       [--remove]
     *                       [--resource-group]
     *                       [--set]
     *                       [--subscription]
     *                       [--tags]
     * ```
     */
    static update(): az_disk_access_update_command_builder;
    /**
     * Place the CLI in a waiting state until a condition of a disk access is met.
     *
     * Syntax:
     * ```
     * az disk-access wait [--created]
     *                     [--custom]
     *                     [--deleted]
     *                     [--exists]
     *                     [--ids]
     *                     [--interval]
     *                     [--name]
     *                     [--resource-group]
     *                     [--subscription]
     *                     [--timeout]
     *                     [--updated]
     * ```
     */
    static wait(): az_disk_access_wait_command_builder;
}
/** Disk Encryption Set resource. */
export declare class az_disk_encryption_set {
    /**
     * Create a disk encryption set.
     *
     * Syntax:
     * ```
     * az disk-encryption-set create --key-url
     *                               --name
     *                               --resource-group
     *                               --source-vault
     *                               [--encryption-type {EncryptionAtRestWithCustomerKey, EncryptionAtRestWithPlatformAndCustomerKeys, EncryptionAtRestWithPlatformKey}]
     *                               [--location]
     *                               [--no-wait]
     *                               [--subscription]
     *                               [--tags]
     * ```
     *
     * @param {string} keyUrl URL pointing to a key or secret in KeyVault.
     * @param {string} name Name of disk encryption set.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} sourceVault Name or ID of the KeyVault containing the key or secret.
     */
    static create(keyUrl: string, name: string, resourceGroup: string, sourceVault: string): az_disk_encryption_set_create_command_builder;
    /**
     * Delete a disk encryption set.
     *
     * Syntax:
     * ```
     * az disk-encryption-set delete [--ids]
     *                               [--name]
     *                               [--resource-group]
     *                               [--subscription]
     * ```
     */
    static delete(): az_disk_encryption_set_delete_command_builder;
    /**
     * List disk encryption sets.
     *
     * Syntax:
     * ```
     * az disk-encryption-set list [--query-examples]
     *                             [--resource-group]
     *                             [--subscription]
     * ```
     */
    static list(): az_disk_encryption_set_list_command_builder;
    /**
     * Lists all resources that are encrypted with this disk encryption set.
     *
     * Syntax:
     * ```
     * az disk-encryption-set list-associated-resources [--ids]
     *                                                  [--name]
     *                                                  [--resource-group]
     *                                                  [--subscription]
     * ```
     */
    static list_associated_resources(): az_disk_encryption_set_list_associated_resources_command_builder;
    /**
     * Get information of a disk encryption sets.
     *
     * Syntax:
     * ```
     * az disk-encryption-set show [--ids]
     *                             [--name]
     *                             [--query-examples]
     *                             [--resource-group]
     *                             [--subscription]
     * ```
     */
    static show(): az_disk_encryption_set_show_command_builder;
    /**
     * Update a disk encryption set.
     *
     * Syntax:
     * ```
     * az disk-encryption-set update [--add]
     *                               [--force-string]
     *                               [--ids]
     *                               [--key-url]
     *                               [--name]
     *                               [--remove]
     *                               [--resource-group]
     *                               [--set]
     *                               [--source-vault]
     *                               [--subscription]
     * ```
     */
    static update(): az_disk_encryption_set_update_command_builder;
}
/** Manage Azure Managed Disks. */
export declare class az_disk {
    /**
     * Create a managed disk.
     *
     * Syntax:
     * ```
     * az disk create --name
     *                --resource-group
     *                [--disk-access]
     *                [--disk-encryption-set]
     *                [--disk-iops-read-only]
     *                [--disk-iops-read-write]
     *                [--disk-mbps-read-only]
     *                [--disk-mbps-read-write]
     *                [--encryption-type]
     *                [--for-upload {false, true}]
     *                [--gallery-image-reference]
     *                [--gallery-image-reference-lun]
     *                [--hyper-v-generation {V1, V2}]
     *                [--image-reference]
     *                [--image-reference-lun]
     *                [--location]
     *                [--logical-sector-size]
     *                [--max-shares]
     *                [--network-access-policy {AllowAll, AllowPrivate, DenyAll}]
     *                [--no-wait]
     *                [--os-type {Linux, Windows}]
     *                [--size-gb]
     *                [--sku {Premium_LRS, StandardSSD_LRS, Standard_LRS, UltraSSD_LRS}]
     *                [--source]
     *                [--source-storage-account-id]
     *                [--subscription]
     *                [--tags]
     *                [--tier]
     *                [--upload-size-bytes]
     *                [--zone {1, 2, 3}]
     * ```
     *
     * @param {string} name The name of the managed disk.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    static create(name: string, resourceGroup: string): az_disk_create_command_builder;
    /**
     * Delete a managed disk.
     *
     * Syntax:
     * ```
     * az disk delete [--ids]
     *                [--name]
     *                [--no-wait]
     *                [--resource-group]
     *                [--subscription]
     *                [--yes]
     * ```
     */
    static delete(): az_disk_delete_command_builder;
    /**
     * Grant a resource access to a managed disk.
     *
     * Syntax:
     * ```
     * az disk grant-access --duration-in-seconds
     *                      [--access-level {Read, Write}]
     *                      [--ids]
     *                      [--name]
     *                      [--resource-group]
     *                      [--subscription]
     * ```
     *
     * @param {string} durationInSeconds Time duration in seconds until the SAS access expires.
     */
    static grant_access(durationInSeconds: string): az_disk_grant_access_command_builder;
    /**
     * List managed disks.
     *
     * Syntax:
     * ```
     * az disk list [--query-examples]
     *              [--resource-group]
     *              [--subscription]
     * ```
     */
    static list(): az_disk_list_command_builder;
    /**
     * Revoke a resource's read access to a managed disk.
     *
     * Syntax:
     * ```
     * az disk revoke-access [--ids]
     *                       [--name]
     *                       [--resource-group]
     *                       [--subscription]
     * ```
     */
    static revoke_access(): az_disk_revoke_access_command_builder;
    /**
     * Gets information about a disk.
     *
     * Syntax:
     * ```
     * az disk show [--ids]
     *              [--name]
     *              [--query-examples]
     *              [--resource-group]
     *              [--subscription]
     * ```
     */
    static show(): az_disk_show_command_builder;
    /**
     * Update a managed disk.
     *
     * Syntax:
     * ```
     * az disk update [--add]
     *                [--disk-access]
     *                [--disk-encryption-set]
     *                [--disk-iops-read-only]
     *                [--disk-iops-read-write]
     *                [--disk-mbps-read-only]
     *                [--disk-mbps-read-write]
     *                [--encryption-type]
     *                [--force-string]
     *                [--ids]
     *                [--max-shares]
     *                [--name]
     *                [--network-access-policy {AllowAll, AllowPrivate, DenyAll}]
     *                [--no-wait]
     *                [--remove]
     *                [--resource-group]
     *                [--set]
     *                [--size-gb]
     *                [--sku {Premium_LRS, StandardSSD_LRS, Standard_LRS, UltraSSD_LRS}]
     *                [--subscription]
     * ```
     */
    static update(): az_disk_update_command_builder;
    /**
     * Place the CLI in a waiting state until a condition of a managed disk is met.
     *
     * Syntax:
     * ```
     * az disk wait [--created]
     *              [--custom]
     *              [--deleted]
     *              [--exists]
     *              [--ids]
     *              [--interval]
     *              [--name]
     *              [--resource-group]
     *              [--subscription]
     *              [--timeout]
     *              [--updated]
     * ```
     */
    static wait(): az_disk_wait_command_builder;
}
/**
 * Create a disk access resource.
 *
 * Syntax:
 * ```
 * az disk-access create --name
 *                       --resource-group
 *                       [--location]
 *                       [--no-wait]
 *                       [--subscription]
 *                       [--tags]
 * ```
 *
 * @param {string} name Name of the disk access resource.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_disk_access_create_command_builder extends CommandBuilder<az_disk_access_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** Name of the disk access resource. */
    name(value: string): az_disk_access_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_disk_access_create_command_builder;
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_disk_access_create_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_disk_access_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_disk_access_create_command_builder;
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_disk_access_create_command_builder;
}
/**
 * Delete a disk access resource.
 *
 * Syntax:
 * ```
 * az disk-access delete [--ids]
 *                       [--name]
 *                       [--resource-group]
 *                       [--subscription]
 * ```
 */
declare class az_disk_access_delete_command_builder extends CommandBuilder<az_disk_access_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_disk_access_delete_command_builder;
    /** Name of the disk access resource. */
    name(value: string): az_disk_access_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_disk_access_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_disk_access_delete_command_builder;
}
/**
 * List disk access resources.
 *
 * Syntax:
 * ```
 * az disk-access list [--query-examples]
 *                     [--resource-group]
 *                     [--subscription]
 * ```
 */
declare class az_disk_access_list_command_builder extends CommandBuilder<az_disk_access_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_disk_access_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_disk_access_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_disk_access_list_command_builder;
}
/**
 * Get information of a disk access resource.
 *
 * Syntax:
 * ```
 * az disk-access show [--ids]
 *                     [--name]
 *                     [--query-examples]
 *                     [--resource-group]
 *                     [--subscription]
 * ```
 */
declare class az_disk_access_show_command_builder extends CommandBuilder<az_disk_access_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_disk_access_show_command_builder;
    /** Name of the disk access resource. */
    name(value: string): az_disk_access_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_disk_access_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_disk_access_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_disk_access_show_command_builder;
}
/**
 * Update a disk access resource.
 *
 * Syntax:
 * ```
 * az disk-access update [--add]
 *                       [--force-string]
 *                       [--ids]
 *                       [--name]
 *                       [--no-wait]
 *                       [--remove]
 *                       [--resource-group]
 *                       [--set]
 *                       [--subscription]
 *                       [--tags]
 * ```
 */
declare class az_disk_access_update_command_builder extends CommandBuilder<az_disk_access_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_disk_access_update_command_builder;
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_disk_access_update_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_disk_access_update_command_builder;
    /** Name of the disk access resource. */
    name(value: string): az_disk_access_update_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_disk_access_update_command_builder;
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_disk_access_update_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_disk_access_update_command_builder;
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_disk_access_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_disk_access_update_command_builder;
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_disk_access_update_command_builder;
}
/**
 * Place the CLI in a waiting state until a condition of a disk access is met.
 *
 * Syntax:
 * ```
 * az disk-access wait [--created]
 *                     [--custom]
 *                     [--deleted]
 *                     [--exists]
 *                     [--ids]
 *                     [--interval]
 *                     [--name]
 *                     [--resource-group]
 *                     [--subscription]
 *                     [--timeout]
 *                     [--updated]
 * ```
 */
declare class az_disk_access_wait_command_builder extends CommandBuilder<az_disk_access_wait_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    created(value: string): az_disk_access_wait_command_builder;
    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    custom(value: string): az_disk_access_wait_command_builder;
    /** Wait until deleted. */
    deleted(value: string): az_disk_access_wait_command_builder;
    /** Wait until the resource exists. */
    exists(value: string): az_disk_access_wait_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_disk_access_wait_command_builder;
    /** Polling interval in seconds. */
    interval(value: string): az_disk_access_wait_command_builder;
    /** Name of the disk access resource. */
    name(value: string): az_disk_access_wait_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_disk_access_wait_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_disk_access_wait_command_builder;
    /** Maximum wait in seconds. */
    timeout(value: string): az_disk_access_wait_command_builder;
    /** Wait until updated with provisioningState at 'Succeeded'. */
    updated(value: string): az_disk_access_wait_command_builder;
}
/**
 * Create a disk encryption set.
 *
 * Syntax:
 * ```
 * az disk-encryption-set create --key-url
 *                               --name
 *                               --resource-group
 *                               --source-vault
 *                               [--encryption-type {EncryptionAtRestWithCustomerKey, EncryptionAtRestWithPlatformAndCustomerKeys, EncryptionAtRestWithPlatformKey}]
 *                               [--location]
 *                               [--no-wait]
 *                               [--subscription]
 *                               [--tags]
 * ```
 *
 * @param {string} keyUrl URL pointing to a key or secret in KeyVault.
 * @param {string} name Name of disk encryption set.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} sourceVault Name or ID of the KeyVault containing the key or secret.
 */
declare class az_disk_encryption_set_create_command_builder extends CommandBuilder<az_disk_encryption_set_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, keyUrl: string, name: string, resourceGroup: string, sourceVault: string);
    /** URL pointing to a key or secret in KeyVault. */
    keyUrl(value: string): az_disk_encryption_set_create_command_builder;
    /** Name of disk encryption set. */
    name(value: string): az_disk_encryption_set_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_disk_encryption_set_create_command_builder;
    /** Name or ID of the KeyVault containing the key or secret. */
    sourceVault(value: string): az_disk_encryption_set_create_command_builder;
    /** The type of key used to encrypt the data of the disk. EncryptionAtRestWithPlatformKey: Disk is encrypted at rest with Platform managed key. It is the default encryption type. EncryptionAtRestWithCustomerKey: Disk is encrypted at rest with Customer managed key that can be changed and revoked by a customer. EncryptionAtRestWithPlatformAndCustomerKeys: Disk is encrypted at rest with 2 layers of encryption. One of the keys is Customer managed and the other key is Platform managed. */
    encryptionType(value: 'EncryptionAtRestWithCustomerKey' | 'EncryptionAtRestWithPlatformAndCustomerKeys' | 'EncryptionAtRestWithPlatformKey'): az_disk_encryption_set_create_command_builder;
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_disk_encryption_set_create_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_disk_encryption_set_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_disk_encryption_set_create_command_builder;
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_disk_encryption_set_create_command_builder;
}
/**
 * Delete a disk encryption set.
 *
 * Syntax:
 * ```
 * az disk-encryption-set delete [--ids]
 *                               [--name]
 *                               [--resource-group]
 *                               [--subscription]
 * ```
 */
declare class az_disk_encryption_set_delete_command_builder extends CommandBuilder<az_disk_encryption_set_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_disk_encryption_set_delete_command_builder;
    /** Name of disk encryption set. */
    name(value: string): az_disk_encryption_set_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_disk_encryption_set_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_disk_encryption_set_delete_command_builder;
}
/**
 * List disk encryption sets.
 *
 * Syntax:
 * ```
 * az disk-encryption-set list [--query-examples]
 *                             [--resource-group]
 *                             [--subscription]
 * ```
 */
declare class az_disk_encryption_set_list_command_builder extends CommandBuilder<az_disk_encryption_set_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_disk_encryption_set_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_disk_encryption_set_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_disk_encryption_set_list_command_builder;
}
/**
 * Lists all resources that are encrypted with this disk encryption set.
 *
 * Syntax:
 * ```
 * az disk-encryption-set list-associated-resources [--ids]
 *                                                  [--name]
 *                                                  [--resource-group]
 *                                                  [--subscription]
 * ```
 */
declare class az_disk_encryption_set_list_associated_resources_command_builder extends CommandBuilder<az_disk_encryption_set_list_associated_resources_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_disk_encryption_set_list_associated_resources_command_builder;
    /** Name of disk encryption set. */
    name(value: string): az_disk_encryption_set_list_associated_resources_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_disk_encryption_set_list_associated_resources_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_disk_encryption_set_list_associated_resources_command_builder;
}
/**
 * Get information of a disk encryption sets.
 *
 * Syntax:
 * ```
 * az disk-encryption-set show [--ids]
 *                             [--name]
 *                             [--query-examples]
 *                             [--resource-group]
 *                             [--subscription]
 * ```
 */
declare class az_disk_encryption_set_show_command_builder extends CommandBuilder<az_disk_encryption_set_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_disk_encryption_set_show_command_builder;
    /** Name of disk encryption set. */
    name(value: string): az_disk_encryption_set_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_disk_encryption_set_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_disk_encryption_set_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_disk_encryption_set_show_command_builder;
}
/**
 * Update a disk encryption set.
 *
 * Syntax:
 * ```
 * az disk-encryption-set update [--add]
 *                               [--force-string]
 *                               [--ids]
 *                               [--key-url]
 *                               [--name]
 *                               [--remove]
 *                               [--resource-group]
 *                               [--set]
 *                               [--source-vault]
 *                               [--subscription]
 * ```
 */
declare class az_disk_encryption_set_update_command_builder extends CommandBuilder<az_disk_encryption_set_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_disk_encryption_set_update_command_builder;
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_disk_encryption_set_update_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_disk_encryption_set_update_command_builder;
    /** URL pointing to a key or secret in KeyVault. */
    keyUrl(value: string): az_disk_encryption_set_update_command_builder;
    /** Name of disk encryption set. */
    name(value: string): az_disk_encryption_set_update_command_builder;
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_disk_encryption_set_update_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_disk_encryption_set_update_command_builder;
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_disk_encryption_set_update_command_builder;
    /** Name or ID of the KeyVault containing the key or secret. */
    sourceVault(value: string): az_disk_encryption_set_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_disk_encryption_set_update_command_builder;
}
/**
 * Create a managed disk.
 *
 * Syntax:
 * ```
 * az disk create --name
 *                --resource-group
 *                [--disk-access]
 *                [--disk-encryption-set]
 *                [--disk-iops-read-only]
 *                [--disk-iops-read-write]
 *                [--disk-mbps-read-only]
 *                [--disk-mbps-read-write]
 *                [--encryption-type]
 *                [--for-upload {false, true}]
 *                [--gallery-image-reference]
 *                [--gallery-image-reference-lun]
 *                [--hyper-v-generation {V1, V2}]
 *                [--image-reference]
 *                [--image-reference-lun]
 *                [--location]
 *                [--logical-sector-size]
 *                [--max-shares]
 *                [--network-access-policy {AllowAll, AllowPrivate, DenyAll}]
 *                [--no-wait]
 *                [--os-type {Linux, Windows}]
 *                [--size-gb]
 *                [--sku {Premium_LRS, StandardSSD_LRS, Standard_LRS, UltraSSD_LRS}]
 *                [--source]
 *                [--source-storage-account-id]
 *                [--subscription]
 *                [--tags]
 *                [--tier]
 *                [--upload-size-bytes]
 *                [--zone {1, 2, 3}]
 * ```
 *
 * @param {string} name The name of the managed disk.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
declare class az_disk_create_command_builder extends CommandBuilder<az_disk_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** The name of the managed disk. */
    name(value: string): az_disk_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_disk_create_command_builder;
    /** Name or ID of the disk access resource for using private endpoints on disks. */
    diskAccess(value: string): az_disk_create_command_builder;
    /** Name or ID of disk encryption set that is used to encrypt the disk. */
    diskEncryptionSet(value: string): az_disk_create_command_builder;
    /** The total number of IOPS that will be allowed across all VMs mounting the shared disk as ReadOnly. One operation can transfer between 4k and 256k bytes. */
    diskIopsReadOnly(value: string): az_disk_create_command_builder;
    /** The number of IOPS allowed for this disk. Only settable for UltraSSD disks. One operation can transfer between 4k and 256k bytes. */
    diskIopsReadWrite(value: string): az_disk_create_command_builder;
    /** The total throughput (MBps) that will be allowed across all VMs mounting the shared disk as ReadOnly. MBps means millions of bytes per second - MB here uses the ISO notation, of powers of 10. */
    diskMbpsReadOnly(value: string): az_disk_create_command_builder;
    /** The bandwidth allowed for this disk. Only settable for UltraSSD disks. MBps means millions of bytes per second with ISO notation of powers of 10. */
    diskMbpsReadWrite(value: string): az_disk_create_command_builder;
    /** Encryption type. EncryptionAtRestWithPlatformKey: Disk is encrypted with XStore managed key at rest. It is the default encryption type. EncryptionAtRestWithCustomerKey: Disk is encrypted with Customer managed key at rest. */
    encryptionType(value: string): az_disk_create_command_builder;
    /** Create the disk for uploading blobs later on through storage commands. Run "az disk grant-access --access-level Write" to retrieve the disk's SAS token. */
    forUpload(value: boolean): az_disk_create_command_builder;
    /** ID of the shared galley image version from which to create a disk. */
    galleryImageReference(value: string): az_disk_create_command_builder;
    /** If the disk is created from an image's data disk, this is an index that indicates which of the data disks in the image to use. For OS disks, this field is null. */
    galleryImageReferenceLun(value: string): az_disk_create_command_builder;
    /** The hypervisor generation of the Virtual Machine. Applicable to OS disks only. */
    hyperVGeneration(value: 'V1' | 'V2'): az_disk_create_command_builder;
    /** ID or URN (publisher:offer:sku:version) of the image from which to create a disk. */
    imageReference(value: string): az_disk_create_command_builder;
    /** If the disk is created from an image's data disk, this is an index that indicates which of the data disks in the image to use. For OS disks, this field is null. */
    imageReferenceLun(value: string): az_disk_create_command_builder;
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. If location is not specified and no default location specified, location will be automatically set as same as the resource group. */
    location(value: string): az_disk_create_command_builder;
    /** Logical sector size in bytes for Ultra disks. Supported values are 512 ad 4096. 4096 is the default. */
    logicalSectorSize(value: string): az_disk_create_command_builder;
    /** The maximum number of VMs that can attach to the disk at the same time. Value greater than one indicates a disk that can be mounted on multiple VMs at the same time. */
    maxShares(value: string): az_disk_create_command_builder;
    /** Policy for accessing the disk via network. */
    networkAccessPolicy(value: 'AllowAll' | 'AllowPrivate' | 'DenyAll'): az_disk_create_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_disk_create_command_builder;
    /** The Operating System type of the Disk. */
    osType(value: 'Linux' | 'Windows'): az_disk_create_command_builder;
    /** Size in GB. Max size: 4095 GB (certain preview disks can be larger). */
    sizeGb(value: string): az_disk_create_command_builder;
    /** Underlying storage SKU. */
    sku(value: 'Premium_LRS' | 'StandardSSD_LRS' | 'Standard_LRS' | 'UltraSSD_LRS'): az_disk_create_command_builder;
    /** Source to create the disk/snapshot from, including unmanaged blob uri, managed disk id or name, or snapshot id or name. */
    source(value: string): az_disk_create_command_builder;
    /** Used when source blob is in a different subscription. */
    sourceStorageAccountId(value: string): az_disk_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_disk_create_command_builder;
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_disk_create_command_builder;
    /** Performance tier of the disk (e.g, P4, S10) as described here: <a href="https://azure.microsoft.com/en-us/pricing/details/managed-disks/">https://azure.microsoft.com/en-us/pricing/details/managed-disks/</a>. Does not apply to Ultra disks. */
    tier(value: string): az_disk_create_command_builder;
    /** The size (in bytes) of the contents of the upload including the VHD footer. Min value: 20972032. Max value: 35183298347520. */
    uploadSizeBytes(value: string): az_disk_create_command_builder;
    /** Availability zone into which to provision the resource. */
    zone(value: '1' | '2' | '3'): az_disk_create_command_builder;
}
/**
 * Delete a managed disk.
 *
 * Syntax:
 * ```
 * az disk delete [--ids]
 *                [--name]
 *                [--no-wait]
 *                [--resource-group]
 *                [--subscription]
 *                [--yes]
 * ```
 */
declare class az_disk_delete_command_builder extends CommandBuilder<az_disk_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_disk_delete_command_builder;
    /** The name of the managed disk. */
    name(value: string): az_disk_delete_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_disk_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_disk_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_disk_delete_command_builder;
    /** Do not prompt for confirmation. */
    yes(value: string): az_disk_delete_command_builder;
}
/**
 * Grant a resource access to a managed disk.
 *
 * Syntax:
 * ```
 * az disk grant-access --duration-in-seconds
 *                      [--access-level {Read, Write}]
 *                      [--ids]
 *                      [--name]
 *                      [--resource-group]
 *                      [--subscription]
 * ```
 *
 * @param {string} durationInSeconds Time duration in seconds until the SAS access expires.
 */
declare class az_disk_grant_access_command_builder extends CommandBuilder<az_disk_grant_access_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, durationInSeconds: string);
    /** Time duration in seconds until the SAS access expires. */
    durationInSeconds(value: string): az_disk_grant_access_command_builder;
    /** Access level. */
    accessLevel(value: 'Read' | 'Write'): az_disk_grant_access_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_disk_grant_access_command_builder;
    /** The name of the managed disk. */
    name(value: string): az_disk_grant_access_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_disk_grant_access_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_disk_grant_access_command_builder;
}
/**
 * List managed disks.
 *
 * Syntax:
 * ```
 * az disk list [--query-examples]
 *              [--resource-group]
 *              [--subscription]
 * ```
 */
declare class az_disk_list_command_builder extends CommandBuilder<az_disk_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_disk_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_disk_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_disk_list_command_builder;
}
/**
 * Revoke a resource's read access to a managed disk.
 *
 * Syntax:
 * ```
 * az disk revoke-access [--ids]
 *                       [--name]
 *                       [--resource-group]
 *                       [--subscription]
 * ```
 */
declare class az_disk_revoke_access_command_builder extends CommandBuilder<az_disk_revoke_access_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_disk_revoke_access_command_builder;
    /** The name of the managed disk. */
    name(value: string): az_disk_revoke_access_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_disk_revoke_access_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_disk_revoke_access_command_builder;
}
/**
 * Gets information about a disk.
 *
 * Syntax:
 * ```
 * az disk show [--ids]
 *              [--name]
 *              [--query-examples]
 *              [--resource-group]
 *              [--subscription]
 * ```
 */
declare class az_disk_show_command_builder extends CommandBuilder<az_disk_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_disk_show_command_builder;
    /** The name of the managed disk. */
    name(value: string): az_disk_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_disk_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_disk_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_disk_show_command_builder;
}
/**
 * Update a managed disk.
 *
 * Syntax:
 * ```
 * az disk update [--add]
 *                [--disk-access]
 *                [--disk-encryption-set]
 *                [--disk-iops-read-only]
 *                [--disk-iops-read-write]
 *                [--disk-mbps-read-only]
 *                [--disk-mbps-read-write]
 *                [--encryption-type]
 *                [--force-string]
 *                [--ids]
 *                [--max-shares]
 *                [--name]
 *                [--network-access-policy {AllowAll, AllowPrivate, DenyAll}]
 *                [--no-wait]
 *                [--remove]
 *                [--resource-group]
 *                [--set]
 *                [--size-gb]
 *                [--sku {Premium_LRS, StandardSSD_LRS, Standard_LRS, UltraSSD_LRS}]
 *                [--subscription]
 * ```
 */
declare class az_disk_update_command_builder extends CommandBuilder<az_disk_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_disk_update_command_builder;
    /** Name or ID of the disk access resource for using private endpoints on disks. */
    diskAccess(value: string): az_disk_update_command_builder;
    /** Name or ID of disk encryption set that is used to encrypt the disk. */
    diskEncryptionSet(value: string): az_disk_update_command_builder;
    /** The total number of IOPS that will be allowed across all VMs mounting the shared disk as ReadOnly. One operation can transfer between 4k and 256k bytes. */
    diskIopsReadOnly(value: string): az_disk_update_command_builder;
    /** The number of IOPS allowed for this disk. Only settable for UltraSSD disks. One operation can transfer between 4k and 256k bytes. */
    diskIopsReadWrite(value: string): az_disk_update_command_builder;
    /** The total throughput (MBps) that will be allowed across all VMs mounting the shared disk as ReadOnly. MBps means millions of bytes per second - MB here uses the ISO notation, of powers of 10. */
    diskMbpsReadOnly(value: string): az_disk_update_command_builder;
    /** The bandwidth allowed for this disk. Only settable for UltraSSD disks. MBps means millions of bytes per second with ISO notation of powers of 10. */
    diskMbpsReadWrite(value: string): az_disk_update_command_builder;
    /** Encryption type. EncryptionAtRestWithPlatformKey: Disk is encrypted with XStore managed key at rest. It is the default encryption type. EncryptionAtRestWithCustomerKey: Disk is encrypted with Customer managed key at rest. */
    encryptionType(value: string): az_disk_update_command_builder;
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_disk_update_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_disk_update_command_builder;
    /** The maximum number of VMs that can attach to the disk at the same time. Value greater than one indicates a disk that can be mounted on multiple VMs at the same time. */
    maxShares(value: string): az_disk_update_command_builder;
    /** The name of the managed disk. */
    name(value: string): az_disk_update_command_builder;
    /** Policy for accessing the disk via network. */
    networkAccessPolicy(value: 'AllowAll' | 'AllowPrivate' | 'DenyAll'): az_disk_update_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_disk_update_command_builder;
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_disk_update_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_disk_update_command_builder;
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_disk_update_command_builder;
    /** Size in GB. Max size: 4095 GB (certain preview disks can be larger). */
    sizeGb(value: string): az_disk_update_command_builder;
    /** Underlying storage SKU. */
    sku(value: 'Premium_LRS' | 'StandardSSD_LRS' | 'Standard_LRS' | 'UltraSSD_LRS'): az_disk_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_disk_update_command_builder;
}
/**
 * Place the CLI in a waiting state until a condition of a managed disk is met.
 *
 * Syntax:
 * ```
 * az disk wait [--created]
 *              [--custom]
 *              [--deleted]
 *              [--exists]
 *              [--ids]
 *              [--interval]
 *              [--name]
 *              [--resource-group]
 *              [--subscription]
 *              [--timeout]
 *              [--updated]
 * ```
 */
declare class az_disk_wait_command_builder extends CommandBuilder<az_disk_wait_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    created(value: string): az_disk_wait_command_builder;
    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    custom(value: string): az_disk_wait_command_builder;
    /** Wait until deleted. */
    deleted(value: string): az_disk_wait_command_builder;
    /** Wait until the resource exists. */
    exists(value: string): az_disk_wait_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_disk_wait_command_builder;
    /** Polling interval in seconds. */
    interval(value: string): az_disk_wait_command_builder;
    /** The name of the managed disk. */
    name(value: string): az_disk_wait_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_disk_wait_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_disk_wait_command_builder;
    /** Maximum wait in seconds. */
    timeout(value: string): az_disk_wait_command_builder;
    /** Wait until updated with provisioningState at 'Succeeded'. */
    updated(value: string): az_disk_wait_command_builder;
}
export {};
