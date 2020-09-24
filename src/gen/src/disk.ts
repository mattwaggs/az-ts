import { CommandBuilder, ICommandParent } from '../base';

/** Manage disk access resources. */
export class az_disk_access implements ICommandParent<any> {
    commandPath = "az disk-access";

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
    az_disk_access_create(name: string, resourceGroup: string): az_disk_access_create_command_builder {
        return new az_disk_access_create_command_builder(this, name, resourceGroup);
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
    az_disk_access_delete(): az_disk_access_delete_command_builder {
        return new az_disk_access_delete_command_builder(this);
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
    az_disk_access_list(): az_disk_access_list_command_builder {
        return new az_disk_access_list_command_builder(this);
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
    az_disk_access_show(): az_disk_access_show_command_builder {
        return new az_disk_access_show_command_builder(this);
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
    az_disk_access_update(): az_disk_access_update_command_builder {
        return new az_disk_access_update_command_builder(this);
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
    az_disk_access_wait(): az_disk_access_wait_command_builder {
        return new az_disk_access_wait_command_builder(this);
    }
}

/** Disk Encryption Set resource. */
export class az_disk_encryption_set implements ICommandParent<any> {
    commandPath = "az disk-encryption-set";

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
    az_disk_encryption_set_create(keyUrl: string, name: string, resourceGroup: string, sourceVault: string): az_disk_encryption_set_create_command_builder {
        return new az_disk_encryption_set_create_command_builder(this, keyUrl, name, resourceGroup, sourceVault);
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
    az_disk_encryption_set_delete(): az_disk_encryption_set_delete_command_builder {
        return new az_disk_encryption_set_delete_command_builder(this);
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
    az_disk_encryption_set_list(): az_disk_encryption_set_list_command_builder {
        return new az_disk_encryption_set_list_command_builder(this);
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
    az_disk_encryption_set_list_associated_resources(): az_disk_encryption_set_list_associated_resources_command_builder {
        return new az_disk_encryption_set_list_associated_resources_command_builder(this);
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
    az_disk_encryption_set_show(): az_disk_encryption_set_show_command_builder {
        return new az_disk_encryption_set_show_command_builder(this);
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
    az_disk_encryption_set_update(): az_disk_encryption_set_update_command_builder {
        return new az_disk_encryption_set_update_command_builder(this);
    }
}

/** Manage Azure Managed Disks. */
export class az_disk implements ICommandParent<any> {
    commandPath = "az disk";

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
    az_disk_create(name: string, resourceGroup: string): az_disk_create_command_builder {
        return new az_disk_create_command_builder(this, name, resourceGroup);
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
    az_disk_delete(): az_disk_delete_command_builder {
        return new az_disk_delete_command_builder(this);
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
    az_disk_grant_access(durationInSeconds: string): az_disk_grant_access_command_builder {
        return new az_disk_grant_access_command_builder(this, durationInSeconds);
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
    az_disk_list(): az_disk_list_command_builder {
        return new az_disk_list_command_builder(this);
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
    az_disk_revoke_access(): az_disk_revoke_access_command_builder {
        return new az_disk_revoke_access_command_builder(this);
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
    az_disk_show(): az_disk_show_command_builder {
        return new az_disk_show_command_builder(this);
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
    az_disk_update(): az_disk_update_command_builder {
        return new az_disk_update_command_builder(this);
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
    az_disk_wait(): az_disk_wait_command_builder {
        return new az_disk_wait_command_builder(this);
    }
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
class az_disk_access_create_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, name: string, resourceGroup: string) {
        super(commandParent);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** Name of the disk access resource. */
    name(value: string): az_disk_access_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_disk_access_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_disk_access_create_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_disk_access_create_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_disk_access_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_disk_access_create_command_builder {
        this.setFlag("--tags", value);
        return this;
    }
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
class az_disk_access_delete_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_disk_access_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the disk access resource. */
    name(value: string): az_disk_access_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_disk_access_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_disk_access_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_disk_access_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_disk_access_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_disk_access_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_disk_access_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_disk_access_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_disk_access_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the disk access resource. */
    name(value: string): az_disk_access_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_disk_access_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_disk_access_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_disk_access_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_disk_access_update_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_disk_access_update_command_builder {
        this.setFlag("--add", value);
        return this;
    }

    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_disk_access_update_command_builder {
        this.setFlag("--force-string", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_disk_access_update_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of the disk access resource. */
    name(value: string): az_disk_access_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_disk_access_update_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_disk_access_update_command_builder {
        this.setFlag("--remove", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_disk_access_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_disk_access_update_command_builder {
        this.setFlag("--set", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_disk_access_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_disk_access_update_command_builder {
        this.setFlag("--tags", value);
        return this;
    }
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
class az_disk_access_wait_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    created(value: string): az_disk_access_wait_command_builder {
        this.setFlag("--created", value);
        return this;
    }

    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    custom(value: string): az_disk_access_wait_command_builder {
        this.setFlag("--custom", value);
        return this;
    }

    /** Wait until deleted. */
    deleted(value: string): az_disk_access_wait_command_builder {
        this.setFlag("--deleted", value);
        return this;
    }

    /** Wait until the resource exists. */
    exists(value: string): az_disk_access_wait_command_builder {
        this.setFlag("--exists", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_disk_access_wait_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Polling interval in seconds. */
    interval(value: string): az_disk_access_wait_command_builder {
        this.setFlag("--interval", value);
        return this;
    }

    /** Name of the disk access resource. */
    name(value: string): az_disk_access_wait_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_disk_access_wait_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_disk_access_wait_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Maximum wait in seconds. */
    timeout(value: string): az_disk_access_wait_command_builder {
        this.setFlag("--timeout", value);
        return this;
    }

    /** Wait until updated with provisioningState at 'Succeeded'. */
    updated(value: string): az_disk_access_wait_command_builder {
        this.setFlag("--updated", value);
        return this;
    }
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
class az_disk_encryption_set_create_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, keyUrl: string, name: string, resourceGroup: string, sourceVault: string) {
        super(commandParent);
        this.keyUrl(keyUrl)
        this.name(name)
        this.resourceGroup(resourceGroup)
        this.sourceVault(sourceVault)
    }

    /** URL pointing to a key or secret in KeyVault. */
    keyUrl(value: string): az_disk_encryption_set_create_command_builder {
        this.setFlag("--key-url", value);
        return this;
    }

    /** Name of disk encryption set. */
    name(value: string): az_disk_encryption_set_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_disk_encryption_set_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of the KeyVault containing the key or secret. */
    sourceVault(value: string): az_disk_encryption_set_create_command_builder {
        this.setFlag("--source-vault", value);
        return this;
    }

    /** The type of key used to encrypt the data of the disk. EncryptionAtRestWithPlatformKey: Disk is encrypted at rest with Platform managed key. It is the default encryption type. EncryptionAtRestWithCustomerKey: Disk is encrypted at rest with Customer managed key that can be changed and revoked by a customer. EncryptionAtRestWithPlatformAndCustomerKeys: Disk is encrypted at rest with 2 layers of encryption. One of the keys is Customer managed and the other key is Platform managed. */
    encryptionType(value: 'EncryptionAtRestWithCustomerKey' | 'EncryptionAtRestWithPlatformAndCustomerKeys' | 'EncryptionAtRestWithPlatformKey'): az_disk_encryption_set_create_command_builder {
        this.setFlag("--encryption-type", value);
        return this;
    }

    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_disk_encryption_set_create_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_disk_encryption_set_create_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_disk_encryption_set_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_disk_encryption_set_create_command_builder {
        this.setFlag("--tags", value);
        return this;
    }
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
class az_disk_encryption_set_delete_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_disk_encryption_set_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of disk encryption set. */
    name(value: string): az_disk_encryption_set_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_disk_encryption_set_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_disk_encryption_set_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_disk_encryption_set_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_disk_encryption_set_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_disk_encryption_set_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_disk_encryption_set_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_disk_encryption_set_list_associated_resources_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_disk_encryption_set_list_associated_resources_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of disk encryption set. */
    name(value: string): az_disk_encryption_set_list_associated_resources_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_disk_encryption_set_list_associated_resources_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_disk_encryption_set_list_associated_resources_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_disk_encryption_set_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_disk_encryption_set_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of disk encryption set. */
    name(value: string): az_disk_encryption_set_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_disk_encryption_set_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_disk_encryption_set_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_disk_encryption_set_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_disk_encryption_set_update_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_disk_encryption_set_update_command_builder {
        this.setFlag("--add", value);
        return this;
    }

    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_disk_encryption_set_update_command_builder {
        this.setFlag("--force-string", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_disk_encryption_set_update_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** URL pointing to a key or secret in KeyVault. */
    keyUrl(value: string): az_disk_encryption_set_update_command_builder {
        this.setFlag("--key-url", value);
        return this;
    }

    /** Name of disk encryption set. */
    name(value: string): az_disk_encryption_set_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_disk_encryption_set_update_command_builder {
        this.setFlag("--remove", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_disk_encryption_set_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_disk_encryption_set_update_command_builder {
        this.setFlag("--set", value);
        return this;
    }

    /** Name or ID of the KeyVault containing the key or secret. */
    sourceVault(value: string): az_disk_encryption_set_update_command_builder {
        this.setFlag("--source-vault", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_disk_encryption_set_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_disk_create_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, name: string, resourceGroup: string) {
        super(commandParent);
        this.name(name)
        this.resourceGroup(resourceGroup)
    }

    /** The name of the managed disk. */
    name(value: string): az_disk_create_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_disk_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of the disk access resource for using private endpoints on disks. */
    diskAccess(value: string): az_disk_create_command_builder {
        this.setFlag("--disk-access", value);
        return this;
    }

    /** Name or ID of disk encryption set that is used to encrypt the disk. */
    diskEncryptionSet(value: string): az_disk_create_command_builder {
        this.setFlag("--disk-encryption-set", value);
        return this;
    }

    /** The total number of IOPS that will be allowed across all VMs mounting the shared disk as ReadOnly. One operation can transfer between 4k and 256k bytes. */
    diskIopsReadOnly(value: string): az_disk_create_command_builder {
        this.setFlag("--disk-iops-read-only", value);
        return this;
    }

    /** The number of IOPS allowed for this disk. Only settable for UltraSSD disks. One operation can transfer between 4k and 256k bytes. */
    diskIopsReadWrite(value: string): az_disk_create_command_builder {
        this.setFlag("--disk-iops-read-write", value);
        return this;
    }

    /** The total throughput (MBps) that will be allowed across all VMs mounting the shared disk as ReadOnly. MBps means millions of bytes per second - MB here uses the ISO notation, of powers of 10. */
    diskMbpsReadOnly(value: string): az_disk_create_command_builder {
        this.setFlag("--disk-mbps-read-only", value);
        return this;
    }

    /** The bandwidth allowed for this disk. Only settable for UltraSSD disks. MBps means millions of bytes per second with ISO notation of powers of 10. */
    diskMbpsReadWrite(value: string): az_disk_create_command_builder {
        this.setFlag("--disk-mbps-read-write", value);
        return this;
    }

    /** Encryption type. EncryptionAtRestWithPlatformKey: Disk is encrypted with XStore managed key at rest. It is the default encryption type. EncryptionAtRestWithCustomerKey: Disk is encrypted with Customer managed key at rest. */
    encryptionType(value: string): az_disk_create_command_builder {
        this.setFlag("--encryption-type", value);
        return this;
    }

    /** Create the disk for uploading blobs later on through storage commands. Run "az disk grant-access --access-level Write" to retrieve the disk's SAS token. */
    forUpload(value: boolean): az_disk_create_command_builder {
        this.setFlag("--for-upload", value.toString());
        return this;
    }

    /** ID of the shared galley image version from which to create a disk. */
    galleryImageReference(value: string): az_disk_create_command_builder {
        this.setFlag("--gallery-image-reference", value);
        return this;
    }

    /** If the disk is created from an image's data disk, this is an index that indicates which of the data disks in the image to use. For OS disks, this field is null. */
    galleryImageReferenceLun(value: string): az_disk_create_command_builder {
        this.setFlag("--gallery-image-reference-lun", value);
        return this;
    }

    /** The hypervisor generation of the Virtual Machine. Applicable to OS disks only. */
    hyperVGeneration(value: 'V1' | 'V2'): az_disk_create_command_builder {
        this.setFlag("--hyper-v-generation", value);
        return this;
    }

    /** ID or URN (publisher:offer:sku:version) of the image from which to create a disk. */
    imageReference(value: string): az_disk_create_command_builder {
        this.setFlag("--image-reference", value);
        return this;
    }

    /** If the disk is created from an image's data disk, this is an index that indicates which of the data disks in the image to use. For OS disks, this field is null. */
    imageReferenceLun(value: string): az_disk_create_command_builder {
        this.setFlag("--image-reference-lun", value);
        return this;
    }

    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. If location is not specified and no default location specified, location will be automatically set as same as the resource group. */
    location(value: string): az_disk_create_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** Logical sector size in bytes for Ultra disks. Supported values are 512 ad 4096. 4096 is the default. */
    logicalSectorSize(value: string): az_disk_create_command_builder {
        this.setFlag("--logical-sector-size", value);
        return this;
    }

    /** The maximum number of VMs that can attach to the disk at the same time. Value greater than one indicates a disk that can be mounted on multiple VMs at the same time. */
    maxShares(value: string): az_disk_create_command_builder {
        this.setFlag("--max-shares", value);
        return this;
    }

    /** Policy for accessing the disk via network. */
    networkAccessPolicy(value: 'AllowAll' | 'AllowPrivate' | 'DenyAll'): az_disk_create_command_builder {
        this.setFlag("--network-access-policy", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_disk_create_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** The Operating System type of the Disk. */
    osType(value: 'Linux' | 'Windows'): az_disk_create_command_builder {
        this.setFlag("--os-type", value);
        return this;
    }

    /** Size in GB. Max size: 4095 GB (certain preview disks can be larger). */
    sizeGb(value: string): az_disk_create_command_builder {
        this.setFlag("--size-gb", value);
        return this;
    }

    /** Underlying storage SKU. */
    sku(value: 'Premium_LRS' | 'StandardSSD_LRS' | 'Standard_LRS' | 'UltraSSD_LRS'): az_disk_create_command_builder {
        this.setFlag("--sku", value);
        return this;
    }

    /** Source to create the disk/snapshot from, including unmanaged blob uri, managed disk id or name, or snapshot id or name. */
    source(value: string): az_disk_create_command_builder {
        this.setFlag("--source", value);
        return this;
    }

    /** Used when source blob is in a different subscription. */
    sourceStorageAccountId(value: string): az_disk_create_command_builder {
        this.setFlag("--source-storage-account-id", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_disk_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_disk_create_command_builder {
        this.setFlag("--tags", value);
        return this;
    }

    /** Performance tier of the disk (e.g, P4, S10) as described here: <a href="https://azure.microsoft.com/en-us/pricing/details/managed-disks/">https://azure.microsoft.com/en-us/pricing/details/managed-disks/</a>. Does not apply to Ultra disks. */
    tier(value: string): az_disk_create_command_builder {
        this.setFlag("--tier", value);
        return this;
    }

    /** The size (in bytes) of the contents of the upload including the VHD footer. Min value: 20972032. Max value: 35183298347520. */
    uploadSizeBytes(value: string): az_disk_create_command_builder {
        this.setFlag("--upload-size-bytes", value);
        return this;
    }

    /** Availability zone into which to provision the resource. */
    zone(value: '1' | '2' | '3'): az_disk_create_command_builder {
        this.setFlag("--zone", value);
        return this;
    }
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
class az_disk_delete_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_disk_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the managed disk. */
    name(value: string): az_disk_delete_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_disk_delete_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_disk_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_disk_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Do not prompt for confirmation. */
    yes(value: string): az_disk_delete_command_builder {
        this.setFlag("--yes", value);
        return this;
    }
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
class az_disk_grant_access_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>, durationInSeconds: string) {
        super(commandParent);
        this.durationInSeconds(durationInSeconds)
    }

    /** Time duration in seconds until the SAS access expires. */
    durationInSeconds(value: string): az_disk_grant_access_command_builder {
        this.setFlag("--duration-in-seconds", value);
        return this;
    }

    /** Access level. */
    accessLevel(value: 'Read' | 'Write'): az_disk_grant_access_command_builder {
        this.setFlag("--access-level", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_disk_grant_access_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the managed disk. */
    name(value: string): az_disk_grant_access_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_disk_grant_access_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_disk_grant_access_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_disk_list_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_disk_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_disk_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_disk_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_disk_revoke_access_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_disk_revoke_access_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the managed disk. */
    name(value: string): az_disk_revoke_access_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_disk_revoke_access_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_disk_revoke_access_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_disk_show_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_disk_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The name of the managed disk. */
    name(value: string): az_disk_show_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_disk_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_disk_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_disk_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_disk_update_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_disk_update_command_builder {
        this.setFlag("--add", value);
        return this;
    }

    /** Name or ID of the disk access resource for using private endpoints on disks. */
    diskAccess(value: string): az_disk_update_command_builder {
        this.setFlag("--disk-access", value);
        return this;
    }

    /** Name or ID of disk encryption set that is used to encrypt the disk. */
    diskEncryptionSet(value: string): az_disk_update_command_builder {
        this.setFlag("--disk-encryption-set", value);
        return this;
    }

    /** The total number of IOPS that will be allowed across all VMs mounting the shared disk as ReadOnly. One operation can transfer between 4k and 256k bytes. */
    diskIopsReadOnly(value: string): az_disk_update_command_builder {
        this.setFlag("--disk-iops-read-only", value);
        return this;
    }

    /** The number of IOPS allowed for this disk. Only settable for UltraSSD disks. One operation can transfer between 4k and 256k bytes. */
    diskIopsReadWrite(value: string): az_disk_update_command_builder {
        this.setFlag("--disk-iops-read-write", value);
        return this;
    }

    /** The total throughput (MBps) that will be allowed across all VMs mounting the shared disk as ReadOnly. MBps means millions of bytes per second - MB here uses the ISO notation, of powers of 10. */
    diskMbpsReadOnly(value: string): az_disk_update_command_builder {
        this.setFlag("--disk-mbps-read-only", value);
        return this;
    }

    /** The bandwidth allowed for this disk. Only settable for UltraSSD disks. MBps means millions of bytes per second with ISO notation of powers of 10. */
    diskMbpsReadWrite(value: string): az_disk_update_command_builder {
        this.setFlag("--disk-mbps-read-write", value);
        return this;
    }

    /** Encryption type. EncryptionAtRestWithPlatformKey: Disk is encrypted with XStore managed key at rest. It is the default encryption type. EncryptionAtRestWithCustomerKey: Disk is encrypted with Customer managed key at rest. */
    encryptionType(value: string): az_disk_update_command_builder {
        this.setFlag("--encryption-type", value);
        return this;
    }

    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_disk_update_command_builder {
        this.setFlag("--force-string", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_disk_update_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** The maximum number of VMs that can attach to the disk at the same time. Value greater than one indicates a disk that can be mounted on multiple VMs at the same time. */
    maxShares(value: string): az_disk_update_command_builder {
        this.setFlag("--max-shares", value);
        return this;
    }

    /** The name of the managed disk. */
    name(value: string): az_disk_update_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Policy for accessing the disk via network. */
    networkAccessPolicy(value: 'AllowAll' | 'AllowPrivate' | 'DenyAll'): az_disk_update_command_builder {
        this.setFlag("--network-access-policy", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_disk_update_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_disk_update_command_builder {
        this.setFlag("--remove", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_disk_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_disk_update_command_builder {
        this.setFlag("--set", value);
        return this;
    }

    /** Size in GB. Max size: 4095 GB (certain preview disks can be larger). */
    sizeGb(value: string): az_disk_update_command_builder {
        this.setFlag("--size-gb", value);
        return this;
    }

    /** Underlying storage SKU. */
    sku(value: 'Premium_LRS' | 'StandardSSD_LRS' | 'Standard_LRS' | 'UltraSSD_LRS'): az_disk_update_command_builder {
        this.setFlag("--sku", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_disk_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_disk_wait_command_builder extends CommandBuilder {
    constructor(commandParent: ICommandParent<any>) {
        super(commandParent);
    }

    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    created(value: string): az_disk_wait_command_builder {
        this.setFlag("--created", value);
        return this;
    }

    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    custom(value: string): az_disk_wait_command_builder {
        this.setFlag("--custom", value);
        return this;
    }

    /** Wait until deleted. */
    deleted(value: string): az_disk_wait_command_builder {
        this.setFlag("--deleted", value);
        return this;
    }

    /** Wait until the resource exists. */
    exists(value: string): az_disk_wait_command_builder {
        this.setFlag("--exists", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_disk_wait_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Polling interval in seconds. */
    interval(value: string): az_disk_wait_command_builder {
        this.setFlag("--interval", value);
        return this;
    }

    /** The name of the managed disk. */
    name(value: string): az_disk_wait_command_builder {
        this.setFlag("--name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_disk_wait_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_disk_wait_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Maximum wait in seconds. */
    timeout(value: string): az_disk_wait_command_builder {
        this.setFlag("--timeout", value);
        return this;
    }

    /** Wait until updated with provisioningState at 'Succeeded'. */
    updated(value: string): az_disk_wait_command_builder {
        this.setFlag("--updated", value);
        return this;
    }
}
