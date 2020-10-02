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
exports.az_snapshot = void 0;
var base_1 = require("../base");
/** Manage point-in-time copies of managed disks, native blobs, or other snapshots. */
var az_snapshot = /** @class */ (function () {
    function az_snapshot() {
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
    az_snapshot.create = function (name, resourceGroup) {
        return new az_snapshot_create_command_builder("az snapshot create", 'az_snapshot_create_command_result', name, resourceGroup);
    };
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
    az_snapshot["delete"] = function () {
        return new az_snapshot_delete_command_builder("az snapshot delete", 'az_snapshot_delete_command_result');
    };
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
    az_snapshot.grant_access = function (durationInSeconds) {
        return new az_snapshot_grant_access_command_builder("az snapshot grant-access", 'az_snapshot_grant_access_command_result', durationInSeconds);
    };
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
    az_snapshot.list = function () {
        return new az_snapshot_list_command_builder("az snapshot list", 'az_snapshot_list_command_result');
    };
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
    az_snapshot.revoke_access = function () {
        return new az_snapshot_revoke_access_command_builder("az snapshot revoke-access", 'az_snapshot_revoke_access_command_result');
    };
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
    az_snapshot.show = function () {
        return new az_snapshot_show_command_builder("az snapshot show", 'az_snapshot_show_command_result');
    };
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
    az_snapshot.update = function () {
        return new az_snapshot_update_command_builder("az snapshot update", 'az_snapshot_update_command_result');
    };
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
    az_snapshot.wait = function () {
        return new az_snapshot_wait_command_builder("az snapshot wait", 'az_snapshot_wait_command_result');
    };
    return az_snapshot;
}());
exports.az_snapshot = az_snapshot;
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
var az_snapshot_create_command_builder = /** @class */ (function (_super) {
    __extends(az_snapshot_create_command_builder, _super);
    function az_snapshot_create_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the snapshot. */
    az_snapshot_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_snapshot_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of the disk access resource for using private endpoints on disks. */
    az_snapshot_create_command_builder.prototype.diskAccess = function (value) {
        this.setFlag("--disk-access", value);
        return this;
    };
    /** Name or ID of disk encryption set that is used to encrypt the disk. */
    az_snapshot_create_command_builder.prototype.diskEncryptionSet = function (value) {
        this.setFlag("--disk-encryption-set", value);
        return this;
    };
    /** Encryption type. EncryptionAtRestWithPlatformKey: Disk is encrypted with XStore managed key at rest. It is the default encryption type. EncryptionAtRestWithCustomerKey: Disk is encrypted with Customer managed key at rest. */
    az_snapshot_create_command_builder.prototype.encryptionType = function (value) {
        this.setFlag("--encryption-type", value);
        return this;
    };
    /** Create the snapshot for uploading blobs later on through storage commands. Run "az snapshot grant-access --access-level Write" to retrieve the snapshot's SAS token. */
    az_snapshot_create_command_builder.prototype.forUpload = function (value) {
        this.setFlag("--for-upload", value.toString());
        return this;
    };
    /** The hypervisor generation of the Virtual Machine. Applicable to OS disks only. */
    az_snapshot_create_command_builder.prototype.hyperVGeneration = function (value) {
        this.setFlag("--hyper-v-generation", value);
        return this;
    };
    /** Whether a snapshot is incremental. Incremental snapshots on the same disk occupy less space than full snapshots and can be diffed. */
    az_snapshot_create_command_builder.prototype.incremental = function (value) {
        this.setFlag("--incremental", value.toString());
        return this;
    };
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. If location is not specified and no default location specified, location will be automatically set as same as the resource group. */
    az_snapshot_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Policy for accessing the disk via network. */
    az_snapshot_create_command_builder.prototype.networkAccessPolicy = function (value) {
        this.setFlag("--network-access-policy", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_snapshot_create_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Size in GB. Max size: 4095 GB (certain preview disks can be larger). */
    az_snapshot_create_command_builder.prototype.sizeGb = function (value) {
        this.setFlag("--size-gb", value);
        return this;
    };
    /** */
    az_snapshot_create_command_builder.prototype.sku = function (value) {
        this.setFlag("--sku", value);
        return this;
    };
    /** Source to create the disk/snapshot from, including unmanaged blob uri, managed disk id or name, or snapshot id or name. */
    az_snapshot_create_command_builder.prototype.source = function (value) {
        this.setFlag("--source", value);
        return this;
    };
    /** Used when source blob is in a different subscription. */
    az_snapshot_create_command_builder.prototype.sourceStorageAccountId = function (value) {
        this.setFlag("--source-storage-account-id", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_snapshot_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_snapshot_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_snapshot_create_command_builder;
}(base_1.CommandBuilder));
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
var az_snapshot_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_snapshot_delete_command_builder, _super);
    function az_snapshot_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_snapshot_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the snapshot. */
    az_snapshot_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_snapshot_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_snapshot_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_snapshot_delete_command_builder;
}(base_1.CommandBuilder));
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
var az_snapshot_grant_access_command_builder = /** @class */ (function (_super) {
    __extends(az_snapshot_grant_access_command_builder, _super);
    function az_snapshot_grant_access_command_builder(commandPath, resultDataTypeName, durationInSeconds) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.durationInSeconds(durationInSeconds);
        return _this;
    }
    /** Time duration in seconds until the SAS access expires. */
    az_snapshot_grant_access_command_builder.prototype.durationInSeconds = function (value) {
        this.setFlag("--duration-in-seconds", value);
        return this;
    };
    /** Access level. */
    az_snapshot_grant_access_command_builder.prototype.accessLevel = function (value) {
        this.setFlag("--access-level", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_snapshot_grant_access_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the snapshot. */
    az_snapshot_grant_access_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_snapshot_grant_access_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_snapshot_grant_access_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_snapshot_grant_access_command_builder;
}(base_1.CommandBuilder));
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
var az_snapshot_list_command_builder = /** @class */ (function (_super) {
    __extends(az_snapshot_list_command_builder, _super);
    function az_snapshot_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_snapshot_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_snapshot_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_snapshot_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_snapshot_list_command_builder;
}(base_1.CommandBuilder));
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
var az_snapshot_revoke_access_command_builder = /** @class */ (function (_super) {
    __extends(az_snapshot_revoke_access_command_builder, _super);
    function az_snapshot_revoke_access_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_snapshot_revoke_access_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the snapshot. */
    az_snapshot_revoke_access_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_snapshot_revoke_access_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_snapshot_revoke_access_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_snapshot_revoke_access_command_builder;
}(base_1.CommandBuilder));
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
var az_snapshot_show_command_builder = /** @class */ (function (_super) {
    __extends(az_snapshot_show_command_builder, _super);
    function az_snapshot_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_snapshot_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the snapshot. */
    az_snapshot_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_snapshot_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_snapshot_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_snapshot_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_snapshot_show_command_builder;
}(base_1.CommandBuilder));
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
var az_snapshot_update_command_builder = /** @class */ (function (_super) {
    __extends(az_snapshot_update_command_builder, _super);
    function az_snapshot_update_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_snapshot_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** Name or ID of the disk access resource for using private endpoints on disks. */
    az_snapshot_update_command_builder.prototype.diskAccess = function (value) {
        this.setFlag("--disk-access", value);
        return this;
    };
    /** Name or ID of disk encryption set that is used to encrypt the disk. */
    az_snapshot_update_command_builder.prototype.diskEncryptionSet = function (value) {
        this.setFlag("--disk-encryption-set", value);
        return this;
    };
    /** Encryption type. EncryptionAtRestWithPlatformKey: Disk is encrypted with XStore managed key at rest. It is the default encryption type. EncryptionAtRestWithCustomerKey: Disk is encrypted with Customer managed key at rest. */
    az_snapshot_update_command_builder.prototype.encryptionType = function (value) {
        this.setFlag("--encryption-type", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_snapshot_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_snapshot_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the snapshot. */
    az_snapshot_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Policy for accessing the disk via network. */
    az_snapshot_update_command_builder.prototype.networkAccessPolicy = function (value) {
        this.setFlag("--network-access-policy", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_snapshot_update_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_snapshot_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_snapshot_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_snapshot_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** */
    az_snapshot_update_command_builder.prototype.sku = function (value) {
        this.setFlag("--sku", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_snapshot_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_snapshot_update_command_builder;
}(base_1.CommandBuilder));
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
var az_snapshot_wait_command_builder = /** @class */ (function (_super) {
    __extends(az_snapshot_wait_command_builder, _super);
    function az_snapshot_wait_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    az_snapshot_wait_command_builder.prototype.created = function (value) {
        this.setFlag("--created", value);
        return this;
    };
    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    az_snapshot_wait_command_builder.prototype.custom = function (value) {
        this.setFlag("--custom", value);
        return this;
    };
    /** Wait until deleted. */
    az_snapshot_wait_command_builder.prototype.deleted = function (value) {
        this.setFlag("--deleted", value);
        return this;
    };
    /** Wait until the resource exists. */
    az_snapshot_wait_command_builder.prototype.exists = function (value) {
        this.setFlag("--exists", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_snapshot_wait_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Polling interval in seconds. */
    az_snapshot_wait_command_builder.prototype.interval = function (value) {
        this.setFlag("--interval", value);
        return this;
    };
    /** The name of the snapshot. */
    az_snapshot_wait_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_snapshot_wait_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_snapshot_wait_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Maximum wait in seconds. */
    az_snapshot_wait_command_builder.prototype.timeout = function (value) {
        this.setFlag("--timeout", value);
        return this;
    };
    /** Wait until updated with provisioningState at 'Succeeded'. */
    az_snapshot_wait_command_builder.prototype.updated = function (value) {
        this.setFlag("--updated", value);
        return this;
    };
    return az_snapshot_wait_command_builder;
}(base_1.CommandBuilder));
