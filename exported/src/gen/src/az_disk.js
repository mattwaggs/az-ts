"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var base_1 = require("../base");
/** Manage disk access resources. */
var az_disk_access = /** @class */ (function () {
    function az_disk_access() {
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
    az_disk_access.create = function (name, resourceGroup) {
        return new az_disk_access_create_command_builder("az disk-access create", 'az_disk_access_create_command_result', name, resourceGroup);
    };
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
    az_disk_access["delete"] = function () {
        return new az_disk_access_delete_command_builder("az disk-access delete", 'az_disk_access_delete_command_result');
    };
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
    az_disk_access.list = function () {
        return new az_disk_access_list_command_builder("az disk-access list", 'az_disk_access_list_command_result');
    };
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
    az_disk_access.show = function () {
        return new az_disk_access_show_command_builder("az disk-access show", 'az_disk_access_show_command_result');
    };
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
    az_disk_access.update = function () {
        return new az_disk_access_update_command_builder("az disk-access update", 'az_disk_access_update_command_result');
    };
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
    az_disk_access.wait = function () {
        return new az_disk_access_wait_command_builder("az disk-access wait", 'az_disk_access_wait_command_result');
    };
    return az_disk_access;
}());
exports.az_disk_access = az_disk_access;
/** Disk Encryption Set resource. */
var az_disk_encryption_set = /** @class */ (function () {
    function az_disk_encryption_set() {
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
    az_disk_encryption_set.create = function (keyUrl, name, resourceGroup, sourceVault) {
        return new az_disk_encryption_set_create_command_builder("az disk-encryption-set create", 'az_disk_encryption_set_create_command_result', keyUrl, name, resourceGroup, sourceVault);
    };
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
    az_disk_encryption_set["delete"] = function () {
        return new az_disk_encryption_set_delete_command_builder("az disk-encryption-set delete", 'az_disk_encryption_set_delete_command_result');
    };
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
    az_disk_encryption_set.list = function () {
        return new az_disk_encryption_set_list_command_builder("az disk-encryption-set list", 'az_disk_encryption_set_list_command_result');
    };
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
    az_disk_encryption_set.list_associated_resources = function () {
        return new az_disk_encryption_set_list_associated_resources_command_builder("az disk-encryption-set list-associated-resources", 'az_disk_encryption_set_list_associated_resources_command_result');
    };
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
    az_disk_encryption_set.show = function () {
        return new az_disk_encryption_set_show_command_builder("az disk-encryption-set show", 'az_disk_encryption_set_show_command_result');
    };
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
    az_disk_encryption_set.update = function () {
        return new az_disk_encryption_set_update_command_builder("az disk-encryption-set update", 'az_disk_encryption_set_update_command_result');
    };
    return az_disk_encryption_set;
}());
exports.az_disk_encryption_set = az_disk_encryption_set;
/** Manage Azure Managed Disks. */
var az_disk = /** @class */ (function () {
    function az_disk() {
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
    az_disk.create = function (name, resourceGroup) {
        return new az_disk_create_command_builder("az disk create", 'az_disk_create_command_result', name, resourceGroup);
    };
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
    az_disk["delete"] = function () {
        return new az_disk_delete_command_builder("az disk delete", 'az_disk_delete_command_result');
    };
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
    az_disk.grant_access = function (durationInSeconds) {
        return new az_disk_grant_access_command_builder("az disk grant-access", 'az_disk_grant_access_command_result', durationInSeconds);
    };
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
    az_disk.list = function () {
        return new az_disk_list_command_builder("az disk list", 'az_disk_list_command_result');
    };
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
    az_disk.revoke_access = function () {
        return new az_disk_revoke_access_command_builder("az disk revoke-access", 'az_disk_revoke_access_command_result');
    };
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
    az_disk.show = function () {
        return new az_disk_show_command_builder("az disk show", 'az_disk_show_command_result');
    };
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
    az_disk.update = function () {
        return new az_disk_update_command_builder("az disk update", 'az_disk_update_command_result');
    };
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
    az_disk.wait = function () {
        return new az_disk_wait_command_builder("az disk wait", 'az_disk_wait_command_result');
    };
    return az_disk;
}());
exports.az_disk = az_disk;
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
var az_disk_access_create_command_builder = /** @class */ (function (_super) {
    __extends(az_disk_access_create_command_builder, _super);
    function az_disk_access_create_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the disk access resource. */
    az_disk_access_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_disk_access_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_disk_access_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_disk_access_create_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_disk_access_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_disk_access_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_disk_access_create_command_builder;
}(base_1.CommandBuilder));
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
var az_disk_access_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_disk_access_delete_command_builder, _super);
    function az_disk_access_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_disk_access_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the disk access resource. */
    az_disk_access_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_disk_access_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_disk_access_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_disk_access_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_disk_access_list_command_builder = /** @class */ (function (_super) {
    __extends(az_disk_access_list_command_builder, _super);
    function az_disk_access_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_disk_access_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_disk_access_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_disk_access_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_disk_access_list_command_builder;
}(base_1.CommandBuilder));
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
var az_disk_access_show_command_builder = /** @class */ (function (_super) {
    __extends(az_disk_access_show_command_builder, _super);
    function az_disk_access_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_disk_access_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the disk access resource. */
    az_disk_access_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_disk_access_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_disk_access_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_disk_access_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_disk_access_show_command_builder;
}(base_1.CommandBuilder));
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
var az_disk_access_update_command_builder = /** @class */ (function (_super) {
    __extends(az_disk_access_update_command_builder, _super);
    function az_disk_access_update_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_disk_access_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_disk_access_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_disk_access_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the disk access resource. */
    az_disk_access_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_disk_access_update_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_disk_access_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_disk_access_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_disk_access_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_disk_access_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_disk_access_update_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_disk_access_update_command_builder;
}(base_1.CommandBuilder));
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
var az_disk_access_wait_command_builder = /** @class */ (function (_super) {
    __extends(az_disk_access_wait_command_builder, _super);
    function az_disk_access_wait_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    az_disk_access_wait_command_builder.prototype.created = function (value) {
        this.setFlag("--created", value);
        return this;
    };
    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    az_disk_access_wait_command_builder.prototype.custom = function (value) {
        this.setFlag("--custom", value);
        return this;
    };
    /** Wait until deleted. */
    az_disk_access_wait_command_builder.prototype.deleted = function (value) {
        this.setFlag("--deleted", value);
        return this;
    };
    /** Wait until the resource exists. */
    az_disk_access_wait_command_builder.prototype.exists = function (value) {
        this.setFlag("--exists", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_disk_access_wait_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Polling interval in seconds. */
    az_disk_access_wait_command_builder.prototype.interval = function (value) {
        this.setFlag("--interval", value);
        return this;
    };
    /** Name of the disk access resource. */
    az_disk_access_wait_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_disk_access_wait_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_disk_access_wait_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Maximum wait in seconds. */
    az_disk_access_wait_command_builder.prototype.timeout = function (value) {
        this.setFlag("--timeout", value);
        return this;
    };
    /** Wait until updated with provisioningState at 'Succeeded'. */
    az_disk_access_wait_command_builder.prototype.updated = function (value) {
        this.setFlag("--updated", value);
        return this;
    };
    return az_disk_access_wait_command_builder;
}(base_1.CommandBuilder));
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
var az_disk_encryption_set_create_command_builder = /** @class */ (function (_super) {
    __extends(az_disk_encryption_set_create_command_builder, _super);
    function az_disk_encryption_set_create_command_builder(commandPath, resultDataTypeName, keyUrl, name, resourceGroup, sourceVault) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.keyUrl(keyUrl);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.sourceVault(sourceVault);
        return _this;
    }
    /** URL pointing to a key or secret in KeyVault. */
    az_disk_encryption_set_create_command_builder.prototype.keyUrl = function (value) {
        this.setFlag("--key-url", value);
        return this;
    };
    /** Name of disk encryption set. */
    az_disk_encryption_set_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_disk_encryption_set_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of the KeyVault containing the key or secret. */
    az_disk_encryption_set_create_command_builder.prototype.sourceVault = function (value) {
        this.setFlag("--source-vault", value);
        return this;
    };
    /** The type of key used to encrypt the data of the disk. EncryptionAtRestWithPlatformKey: Disk is encrypted at rest with Platform managed key. It is the default encryption type. EncryptionAtRestWithCustomerKey: Disk is encrypted at rest with Customer managed key that can be changed and revoked by a customer. EncryptionAtRestWithPlatformAndCustomerKeys: Disk is encrypted at rest with 2 layers of encryption. One of the keys is Customer managed and the other key is Platform managed. */
    az_disk_encryption_set_create_command_builder.prototype.encryptionType = function (value) {
        this.setFlag("--encryption-type", value);
        return this;
    };
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_disk_encryption_set_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_disk_encryption_set_create_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_disk_encryption_set_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_disk_encryption_set_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_disk_encryption_set_create_command_builder;
}(base_1.CommandBuilder));
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
var az_disk_encryption_set_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_disk_encryption_set_delete_command_builder, _super);
    function az_disk_encryption_set_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_disk_encryption_set_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of disk encryption set. */
    az_disk_encryption_set_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_disk_encryption_set_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_disk_encryption_set_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_disk_encryption_set_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_disk_encryption_set_list_command_builder = /** @class */ (function (_super) {
    __extends(az_disk_encryption_set_list_command_builder, _super);
    function az_disk_encryption_set_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_disk_encryption_set_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_disk_encryption_set_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_disk_encryption_set_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_disk_encryption_set_list_command_builder;
}(base_1.CommandBuilder));
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
var az_disk_encryption_set_list_associated_resources_command_builder = /** @class */ (function (_super) {
    __extends(az_disk_encryption_set_list_associated_resources_command_builder, _super);
    function az_disk_encryption_set_list_associated_resources_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_disk_encryption_set_list_associated_resources_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of disk encryption set. */
    az_disk_encryption_set_list_associated_resources_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_disk_encryption_set_list_associated_resources_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_disk_encryption_set_list_associated_resources_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_disk_encryption_set_list_associated_resources_command_builder;
}(base_1.CommandBuilder));
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
var az_disk_encryption_set_show_command_builder = /** @class */ (function (_super) {
    __extends(az_disk_encryption_set_show_command_builder, _super);
    function az_disk_encryption_set_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_disk_encryption_set_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of disk encryption set. */
    az_disk_encryption_set_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_disk_encryption_set_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_disk_encryption_set_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_disk_encryption_set_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_disk_encryption_set_show_command_builder;
}(base_1.CommandBuilder));
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
var az_disk_encryption_set_update_command_builder = /** @class */ (function (_super) {
    __extends(az_disk_encryption_set_update_command_builder, _super);
    function az_disk_encryption_set_update_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_disk_encryption_set_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_disk_encryption_set_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_disk_encryption_set_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** URL pointing to a key or secret in KeyVault. */
    az_disk_encryption_set_update_command_builder.prototype.keyUrl = function (value) {
        this.setFlag("--key-url", value);
        return this;
    };
    /** Name of disk encryption set. */
    az_disk_encryption_set_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_disk_encryption_set_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_disk_encryption_set_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_disk_encryption_set_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Name or ID of the KeyVault containing the key or secret. */
    az_disk_encryption_set_update_command_builder.prototype.sourceVault = function (value) {
        this.setFlag("--source-vault", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_disk_encryption_set_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_disk_encryption_set_update_command_builder;
}(base_1.CommandBuilder));
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
var az_disk_create_command_builder = /** @class */ (function (_super) {
    __extends(az_disk_create_command_builder, _super);
    function az_disk_create_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the managed disk. */
    az_disk_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_disk_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of the disk access resource for using private endpoints on disks. */
    az_disk_create_command_builder.prototype.diskAccess = function (value) {
        this.setFlag("--disk-access", value);
        return this;
    };
    /** Name or ID of disk encryption set that is used to encrypt the disk. */
    az_disk_create_command_builder.prototype.diskEncryptionSet = function (value) {
        this.setFlag("--disk-encryption-set", value);
        return this;
    };
    /** The total number of IOPS that will be allowed across all VMs mounting the shared disk as ReadOnly. One operation can transfer between 4k and 256k bytes. */
    az_disk_create_command_builder.prototype.diskIopsReadOnly = function (value) {
        this.setFlag("--disk-iops-read-only", value);
        return this;
    };
    /** The number of IOPS allowed for this disk. Only settable for UltraSSD disks. One operation can transfer between 4k and 256k bytes. */
    az_disk_create_command_builder.prototype.diskIopsReadWrite = function (value) {
        this.setFlag("--disk-iops-read-write", value);
        return this;
    };
    /** The total throughput (MBps) that will be allowed across all VMs mounting the shared disk as ReadOnly. MBps means millions of bytes per second - MB here uses the ISO notation, of powers of 10. */
    az_disk_create_command_builder.prototype.diskMbpsReadOnly = function (value) {
        this.setFlag("--disk-mbps-read-only", value);
        return this;
    };
    /** The bandwidth allowed for this disk. Only settable for UltraSSD disks. MBps means millions of bytes per second with ISO notation of powers of 10. */
    az_disk_create_command_builder.prototype.diskMbpsReadWrite = function (value) {
        this.setFlag("--disk-mbps-read-write", value);
        return this;
    };
    /** Encryption type. EncryptionAtRestWithPlatformKey: Disk is encrypted with XStore managed key at rest. It is the default encryption type. EncryptionAtRestWithCustomerKey: Disk is encrypted with Customer managed key at rest. */
    az_disk_create_command_builder.prototype.encryptionType = function (value) {
        this.setFlag("--encryption-type", value);
        return this;
    };
    /** Create the disk for uploading blobs later on through storage commands. Run "az disk grant-access --access-level Write" to retrieve the disk's SAS token. */
    az_disk_create_command_builder.prototype.forUpload = function (value) {
        this.setFlag("--for-upload", value.toString());
        return this;
    };
    /** ID of the shared galley image version from which to create a disk. */
    az_disk_create_command_builder.prototype.galleryImageReference = function (value) {
        this.setFlag("--gallery-image-reference", value);
        return this;
    };
    /** If the disk is created from an image's data disk, this is an index that indicates which of the data disks in the image to use. For OS disks, this field is null. */
    az_disk_create_command_builder.prototype.galleryImageReferenceLun = function (value) {
        this.setFlag("--gallery-image-reference-lun", value);
        return this;
    };
    /** The hypervisor generation of the Virtual Machine. Applicable to OS disks only. */
    az_disk_create_command_builder.prototype.hyperVGeneration = function (value) {
        this.setFlag("--hyper-v-generation", value);
        return this;
    };
    /** ID or URN (publisher:offer:sku:version) of the image from which to create a disk. */
    az_disk_create_command_builder.prototype.imageReference = function (value) {
        this.setFlag("--image-reference", value);
        return this;
    };
    /** If the disk is created from an image's data disk, this is an index that indicates which of the data disks in the image to use. For OS disks, this field is null. */
    az_disk_create_command_builder.prototype.imageReferenceLun = function (value) {
        this.setFlag("--image-reference-lun", value);
        return this;
    };
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. If location is not specified and no default location specified, location will be automatically set as same as the resource group. */
    az_disk_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Logical sector size in bytes for Ultra disks. Supported values are 512 ad 4096. 4096 is the default. */
    az_disk_create_command_builder.prototype.logicalSectorSize = function (value) {
        this.setFlag("--logical-sector-size", value);
        return this;
    };
    /** The maximum number of VMs that can attach to the disk at the same time. Value greater than one indicates a disk that can be mounted on multiple VMs at the same time. */
    az_disk_create_command_builder.prototype.maxShares = function (value) {
        this.setFlag("--max-shares", value);
        return this;
    };
    /** Policy for accessing the disk via network. */
    az_disk_create_command_builder.prototype.networkAccessPolicy = function (value) {
        this.setFlag("--network-access-policy", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_disk_create_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** The Operating System type of the Disk. */
    az_disk_create_command_builder.prototype.osType = function (value) {
        this.setFlag("--os-type", value);
        return this;
    };
    /** Size in GB. Max size: 4095 GB (certain preview disks can be larger). */
    az_disk_create_command_builder.prototype.sizeGb = function (value) {
        this.setFlag("--size-gb", value);
        return this;
    };
    /** Underlying storage SKU. */
    az_disk_create_command_builder.prototype.sku = function (value) {
        this.setFlag("--sku", value);
        return this;
    };
    /** Source to create the disk/snapshot from, including unmanaged blob uri, managed disk id or name, or snapshot id or name. */
    az_disk_create_command_builder.prototype.source = function (value) {
        this.setFlag("--source", value);
        return this;
    };
    /** Used when source blob is in a different subscription. */
    az_disk_create_command_builder.prototype.sourceStorageAccountId = function (value) {
        this.setFlag("--source-storage-account-id", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_disk_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_disk_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    /** Performance tier of the disk (e.g, P4, S10) as described here: <a href="https://azure.microsoft.com/en-us/pricing/details/managed-disks/">https://azure.microsoft.com/en-us/pricing/details/managed-disks/</a>. Does not apply to Ultra disks. */
    az_disk_create_command_builder.prototype.tier = function (value) {
        this.setFlag("--tier", value);
        return this;
    };
    /** The size (in bytes) of the contents of the upload including the VHD footer. Min value: 20972032. Max value: 35183298347520. */
    az_disk_create_command_builder.prototype.uploadSizeBytes = function (value) {
        this.setFlag("--upload-size-bytes", value);
        return this;
    };
    /** Availability zone into which to provision the resource. */
    az_disk_create_command_builder.prototype.zone = function (value) {
        this.setFlag("--zone", value);
        return this;
    };
    return az_disk_create_command_builder;
}(base_1.CommandBuilder));
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
var az_disk_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_disk_delete_command_builder, _super);
    function az_disk_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_disk_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the managed disk. */
    az_disk_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_disk_delete_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_disk_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_disk_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_disk_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_disk_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_disk_grant_access_command_builder = /** @class */ (function (_super) {
    __extends(az_disk_grant_access_command_builder, _super);
    function az_disk_grant_access_command_builder(commandPath, resultDataTypeName, durationInSeconds) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.durationInSeconds(durationInSeconds);
        return _this;
    }
    /** Time duration in seconds until the SAS access expires. */
    az_disk_grant_access_command_builder.prototype.durationInSeconds = function (value) {
        this.setFlag("--duration-in-seconds", value);
        return this;
    };
    /** Access level. */
    az_disk_grant_access_command_builder.prototype.accessLevel = function (value) {
        this.setFlag("--access-level", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_disk_grant_access_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the managed disk. */
    az_disk_grant_access_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_disk_grant_access_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_disk_grant_access_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_disk_grant_access_command_builder;
}(base_1.CommandBuilder));
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
var az_disk_list_command_builder = /** @class */ (function (_super) {
    __extends(az_disk_list_command_builder, _super);
    function az_disk_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_disk_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_disk_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_disk_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_disk_list_command_builder;
}(base_1.CommandBuilder));
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
var az_disk_revoke_access_command_builder = /** @class */ (function (_super) {
    __extends(az_disk_revoke_access_command_builder, _super);
    function az_disk_revoke_access_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_disk_revoke_access_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the managed disk. */
    az_disk_revoke_access_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_disk_revoke_access_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_disk_revoke_access_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_disk_revoke_access_command_builder;
}(base_1.CommandBuilder));
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
var az_disk_show_command_builder = /** @class */ (function (_super) {
    __extends(az_disk_show_command_builder, _super);
    function az_disk_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_disk_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the managed disk. */
    az_disk_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_disk_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_disk_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_disk_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_disk_show_command_builder;
}(base_1.CommandBuilder));
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
var az_disk_update_command_builder = /** @class */ (function (_super) {
    __extends(az_disk_update_command_builder, _super);
    function az_disk_update_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_disk_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** Name or ID of the disk access resource for using private endpoints on disks. */
    az_disk_update_command_builder.prototype.diskAccess = function (value) {
        this.setFlag("--disk-access", value);
        return this;
    };
    /** Name or ID of disk encryption set that is used to encrypt the disk. */
    az_disk_update_command_builder.prototype.diskEncryptionSet = function (value) {
        this.setFlag("--disk-encryption-set", value);
        return this;
    };
    /** The total number of IOPS that will be allowed across all VMs mounting the shared disk as ReadOnly. One operation can transfer between 4k and 256k bytes. */
    az_disk_update_command_builder.prototype.diskIopsReadOnly = function (value) {
        this.setFlag("--disk-iops-read-only", value);
        return this;
    };
    /** The number of IOPS allowed for this disk. Only settable for UltraSSD disks. One operation can transfer between 4k and 256k bytes. */
    az_disk_update_command_builder.prototype.diskIopsReadWrite = function (value) {
        this.setFlag("--disk-iops-read-write", value);
        return this;
    };
    /** The total throughput (MBps) that will be allowed across all VMs mounting the shared disk as ReadOnly. MBps means millions of bytes per second - MB here uses the ISO notation, of powers of 10. */
    az_disk_update_command_builder.prototype.diskMbpsReadOnly = function (value) {
        this.setFlag("--disk-mbps-read-only", value);
        return this;
    };
    /** The bandwidth allowed for this disk. Only settable for UltraSSD disks. MBps means millions of bytes per second with ISO notation of powers of 10. */
    az_disk_update_command_builder.prototype.diskMbpsReadWrite = function (value) {
        this.setFlag("--disk-mbps-read-write", value);
        return this;
    };
    /** Encryption type. EncryptionAtRestWithPlatformKey: Disk is encrypted with XStore managed key at rest. It is the default encryption type. EncryptionAtRestWithCustomerKey: Disk is encrypted with Customer managed key at rest. */
    az_disk_update_command_builder.prototype.encryptionType = function (value) {
        this.setFlag("--encryption-type", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_disk_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_disk_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The maximum number of VMs that can attach to the disk at the same time. Value greater than one indicates a disk that can be mounted on multiple VMs at the same time. */
    az_disk_update_command_builder.prototype.maxShares = function (value) {
        this.setFlag("--max-shares", value);
        return this;
    };
    /** The name of the managed disk. */
    az_disk_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Policy for accessing the disk via network. */
    az_disk_update_command_builder.prototype.networkAccessPolicy = function (value) {
        this.setFlag("--network-access-policy", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_disk_update_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_disk_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_disk_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_disk_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Size in GB. Max size: 4095 GB (certain preview disks can be larger). */
    az_disk_update_command_builder.prototype.sizeGb = function (value) {
        this.setFlag("--size-gb", value);
        return this;
    };
    /** Underlying storage SKU. */
    az_disk_update_command_builder.prototype.sku = function (value) {
        this.setFlag("--sku", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_disk_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_disk_update_command_builder;
}(base_1.CommandBuilder));
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
var az_disk_wait_command_builder = /** @class */ (function (_super) {
    __extends(az_disk_wait_command_builder, _super);
    function az_disk_wait_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    az_disk_wait_command_builder.prototype.created = function (value) {
        this.setFlag("--created", value);
        return this;
    };
    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    az_disk_wait_command_builder.prototype.custom = function (value) {
        this.setFlag("--custom", value);
        return this;
    };
    /** Wait until deleted. */
    az_disk_wait_command_builder.prototype.deleted = function (value) {
        this.setFlag("--deleted", value);
        return this;
    };
    /** Wait until the resource exists. */
    az_disk_wait_command_builder.prototype.exists = function (value) {
        this.setFlag("--exists", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_disk_wait_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Polling interval in seconds. */
    az_disk_wait_command_builder.prototype.interval = function (value) {
        this.setFlag("--interval", value);
        return this;
    };
    /** The name of the managed disk. */
    az_disk_wait_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_disk_wait_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_disk_wait_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Maximum wait in seconds. */
    az_disk_wait_command_builder.prototype.timeout = function (value) {
        this.setFlag("--timeout", value);
        return this;
    };
    /** Wait until updated with provisioningState at 'Succeeded'. */
    az_disk_wait_command_builder.prototype.updated = function (value) {
        this.setFlag("--updated", value);
        return this;
    };
    return az_disk_wait_command_builder;
}(base_1.CommandBuilder));
