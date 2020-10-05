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
exports.az_sig = exports.az_sig_image_version = exports.az_sig_image_definition = void 0;
var base_1 = require("../base");
/** Create an image definition. */
var az_sig_image_definition = /** @class */ (function () {
    function az_sig_image_definition() {
    }
    /**
     * Create a gallery image definition.
     *
     * Syntax:
     * ```
     * az sig image-definition create --gallery-image-definition
     *                                --gallery-name
     *                                --offer
     *                                --os-type {Linux, Windows}
     *                                --publisher
     *                                --resource-group
     *                                --sku
     *                                [--description]
     *                                [--disallowed-disk-types]
     *                                [--end-of-life-date]
     *                                [--eula]
     *                                [--hyper-v-generation {V1, V2}]
     *                                [--location]
     *                                [--maximum-cpu-core]
     *                                [--maximum-memory]
     *                                [--minimum-cpu-core]
     *                                [--minimum-memory]
     *                                [--os-state {Generalized, Specialized}]
     *                                [--plan-name]
     *                                [--plan-product]
     *                                [--plan-publisher]
     *                                [--privacy-statement-uri]
     *                                [--release-note-uri]
     *                                [--subscription]
     *                                [--tags]
     * ```
     *
     * @param {string} galleryImageDefinition Gallery image definition.
     * @param {string} galleryName Gallery name.
     * @param {string} offer Image offer.
     * @param {'Linux' | 'Windows'} osType The type of the OS that is included in the disk if creating a VM from user-image or a specialized VHD.
     * @param {string} publisher Image publisher.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} sku Image sku.
     */
    az_sig_image_definition.create = function (galleryImageDefinition, galleryName, offer, osType, publisher, resourceGroup, sku) {
        return new az_sig_image_definition_create_command_builder("az sig image-definition create", 'az_sig_image_definition_create_command_result', galleryImageDefinition, galleryName, offer, osType, publisher, resourceGroup, sku);
    };
    /**
     * Delete a gallery image.
     *
     * Syntax:
     * ```
     * az sig image-definition delete [--gallery-image-definition]
     *                                [--gallery-name]
     *                                [--ids]
     *                                [--resource-group]
     *                                [--subscription]
     * ```
     */
    az_sig_image_definition["delete"] = function () {
        return new az_sig_image_definition_delete_command_builder("az sig image-definition delete", 'az_sig_image_definition_delete_command_result');
    };
    /**
     * List gallery Image Definitions in a gallery.
     *
     * Syntax:
     * ```
     * az sig image-definition list --gallery-name
     *                              --resource-group
     *                              [--query-examples]
     *                              [--subscription]
     * ```
     *
     * @param {string} galleryName Gallery name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_sig_image_definition.list = function (galleryName, resourceGroup) {
        return new az_sig_image_definition_list_command_builder("az sig image-definition list", 'az_sig_image_definition_list_command_result', galleryName, resourceGroup);
    };
    /**
     * Retrieves information about a gallery Image Definition.
     *
     * Syntax:
     * ```
     * az sig image-definition show [--gallery-image-definition]
     *                              [--gallery-name]
     *                              [--ids]
     *                              [--query-examples]
     *                              [--resource-group]
     *                              [--subscription]
     * ```
     */
    az_sig_image_definition.show = function () {
        return new az_sig_image_definition_show_command_builder("az sig image-definition show", 'az_sig_image_definition_show_command_result');
    };
    /**
     * Update a share image defintiion.
     *
     * Syntax:
     * ```
     * az sig image-definition update --gallery-image-definition
     *                                --gallery-name
     *                                --resource-group
     *                                [--add]
     *                                [--force-string]
     *                                [--remove]
     *                                [--set]
     *                                [--subscription]
     * ```
     *
     * @param {string} galleryImageDefinition Gallery image definition.
     * @param {string} galleryName Gallery name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_sig_image_definition.update = function (galleryImageDefinition, galleryName, resourceGroup) {
        return new az_sig_image_definition_update_command_builder("az sig image-definition update", 'az_sig_image_definition_update_command_result', galleryImageDefinition, galleryName, resourceGroup);
    };
    return az_sig_image_definition;
}());
exports.az_sig_image_definition = az_sig_image_definition;
/** Create a new version from an image defintion. */
var az_sig_image_version = /** @class */ (function () {
    function az_sig_image_version() {
    }
    /**
     * Create a new image version.
     *
     * Syntax:
     * ```
     * az sig image-version create --gallery-image-definition
     *                             --gallery-image-version
     *                             --gallery-name
     *                             --resource-group
     *                             [--data-snapshot-luns]
     *                             [--data-snapshots]
     *                             [--end-of-life-date]
     *                             [--exclude-from-latest {false, true}]
     *                             [--location]
     *                             [--managed-image]
     *                             [--no-wait]
     *                             [--os-snapshot]
     *                             [--replica-count]
     *                             [--storage-account-type {Premium_LRS, Standard_LRS, Standard_ZRS}]
     *                             [--subscription]
     *                             [--tags]
     *                             [--target-region-encryption]
     *                             [--target-regions]
     * ```
     *
     * @param {string} galleryImageDefinition Gallery image definition.
     * @param {string} galleryImageVersion Gallery image version in semantic version pattern. The allowed characters are digit and period. Digits must be within the range of a 32-bit integer, e.g. `<MajorVersion>.<MinorVersion>.<Patch>`.
     * @param {string} galleryName Gallery name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_sig_image_version.create = function (galleryImageDefinition, galleryImageVersion, galleryName, resourceGroup) {
        return new az_sig_image_version_create_command_builder("az sig image-version create", 'az_sig_image_version_create_command_result', galleryImageDefinition, galleryImageVersion, galleryName, resourceGroup);
    };
    /**
     * Delete a gallery Image Version.
     *
     * Syntax:
     * ```
     * az sig image-version delete --gallery-image-definition
     *                             --gallery-image-version
     *                             --gallery-name
     *                             --resource-group
     *                             [--subscription]
     * ```
     *
     * @param {string} galleryImageDefinition Gallery image definition.
     * @param {string} galleryImageVersion Gallery image version in semantic version pattern. The allowed characters are digit and period. Digits must be within the range of a 32-bit integer, e.g. `<MajorVersion>.<MinorVersion>.<Patch>`.
     * @param {string} galleryName Gallery name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_sig_image_version["delete"] = function (galleryImageDefinition, galleryImageVersion, galleryName, resourceGroup) {
        return new az_sig_image_version_delete_command_builder("az sig image-version delete", 'az_sig_image_version_delete_command_result', galleryImageDefinition, galleryImageVersion, galleryName, resourceGroup);
    };
    /**
     * List gallery Image Versions in a gallery Image Definition.
     *
     * Syntax:
     * ```
     * az sig image-version list --gallery-image-definition
     *                           --gallery-name
     *                           --resource-group
     *                           [--query-examples]
     *                           [--subscription]
     * ```
     *
     * @param {string} galleryImageDefinition Gallery image definition.
     * @param {string} galleryName Gallery name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_sig_image_version.list = function (galleryImageDefinition, galleryName, resourceGroup) {
        return new az_sig_image_version_list_command_builder("az sig image-version list", 'az_sig_image_version_list_command_result', galleryImageDefinition, galleryName, resourceGroup);
    };
    /**
     * Retrieves information about a gallery Image Version.
     *
     * Syntax:
     * ```
     * az sig image-version show --gallery-image-definition
     *                           --gallery-image-version
     *                           --gallery-name
     *                           --resource-group
     *                           [--expand]
     *                           [--query-examples]
     *                           [--subscription]
     * ```
     *
     * @param {string} galleryImageDefinition Gallery image definition.
     * @param {string} galleryImageVersion Gallery image version in semantic version pattern. The allowed characters are digit and period. Digits must be within the range of a 32-bit integer, e.g. `<MajorVersion>.<MinorVersion>.<Patch>`.
     * @param {string} galleryName Gallery name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_sig_image_version.show = function (galleryImageDefinition, galleryImageVersion, galleryName, resourceGroup) {
        return new az_sig_image_version_show_command_builder("az sig image-version show", 'az_sig_image_version_show_command_result', galleryImageDefinition, galleryImageVersion, galleryName, resourceGroup);
    };
    /**
     * Update a share image version.
     *
     * Syntax:
     * ```
     * az sig image-version update --gallery-image-definition
     *                             --gallery-image-version
     *                             --gallery-name
     *                             --resource-group
     *                             [--add]
     *                             [--force-string]
     *                             [--no-wait]
     *                             [--remove]
     *                             [--replica-count]
     *                             [--set]
     *                             [--subscription]
     *                             [--target-regions]
     * ```
     *
     * @param {string} galleryImageDefinition Gallery image definition.
     * @param {string} galleryImageVersion Gallery image version in semantic version pattern. The allowed characters are digit and period. Digits must be within the range of a 32-bit integer, e.g. `<MajorVersion>.<MinorVersion>.<Patch>`.
     * @param {string} galleryName Gallery name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_sig_image_version.update = function (galleryImageDefinition, galleryImageVersion, galleryName, resourceGroup) {
        return new az_sig_image_version_update_command_builder("az sig image-version update", 'az_sig_image_version_update_command_result', galleryImageDefinition, galleryImageVersion, galleryName, resourceGroup);
    };
    /**
     * Wait for image version related operation.
     *
     * Syntax:
     * ```
     * az sig image-version wait --gallery-image-definition
     *                           --gallery-image-version
     *                           --gallery-name
     *                           --resource-group
     *                           [--created]
     *                           [--custom]
     *                           [--deleted]
     *                           [--exists]
     *                           [--expand]
     *                           [--interval]
     *                           [--subscription]
     *                           [--timeout]
     *                           [--updated]
     * ```
     *
     * @param {string} galleryImageDefinition Gallery image definition.
     * @param {string} galleryImageVersion Gallery image version in semantic version pattern. The allowed characters are digit and period. Digits must be within the range of a 32-bit integer, e.g. `<MajorVersion>.<MinorVersion>.<Patch>`.
     * @param {string} galleryName Gallery name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_sig_image_version.wait = function (galleryImageDefinition, galleryImageVersion, galleryName, resourceGroup) {
        return new az_sig_image_version_wait_command_builder("az sig image-version wait", 'az_sig_image_version_wait_command_result', galleryImageDefinition, galleryImageVersion, galleryName, resourceGroup);
    };
    return az_sig_image_version;
}());
exports.az_sig_image_version = az_sig_image_version;
/** Manage shared image gallery. */
var az_sig = /** @class */ (function () {
    function az_sig() {
    }
    /**
     * Create a share image gallery.
     *
     * Syntax:
     * ```
     * az sig create --gallery-name
     *               --resource-group
     *               [--description]
     *               [--location]
     *               [--subscription]
     *               [--tags]
     * ```
     *
     * @param {string} galleryName Gallery name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_sig.create = function (galleryName, resourceGroup) {
        return new az_sig_create_command_builder("az sig create", 'az_sig_create_command_result', galleryName, resourceGroup);
    };
    /**
     * Delete a Shared Image Gallery.
     *
     * Syntax:
     * ```
     * az sig delete --gallery-name
     *               --resource-group
     *               [--subscription]
     * ```
     *
     * @param {string} galleryName Gallery name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_sig["delete"] = function (galleryName, resourceGroup) {
        return new az_sig_delete_command_builder("az sig delete", 'az_sig_delete_command_result', galleryName, resourceGroup);
    };
    /**
     * List share image galleries.
     *
     * Syntax:
     * ```
     * az sig list [--query-examples]
     *             [--resource-group]
     *             [--subscription]
     * ```
     */
    az_sig.list = function () {
        return new az_sig_list_command_builder("az sig list", 'az_sig_list_command_result');
    };
    /**
     * Retrieves information about a Shared Image Gallery.
     *
     * Syntax:
     * ```
     * az sig show [--gallery-name]
     *             [--ids]
     *             [--query-examples]
     *             [--resource-group]
     *             [--subscription]
     * ```
     */
    az_sig.show = function () {
        return new az_sig_show_command_builder("az sig show", 'az_sig_show_command_result');
    };
    /**
     * Update a share image gallery.
     *
     * Syntax:
     * ```
     * az sig update --gallery-name
     *               --resource-group
     *               [--add]
     *               [--force-string]
     *               [--remove]
     *               [--set]
     *               [--subscription]
     * ```
     *
     * @param {string} galleryName Gallery name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_sig.update = function (galleryName, resourceGroup) {
        return new az_sig_update_command_builder("az sig update", 'az_sig_update_command_result', galleryName, resourceGroup);
    };
    return az_sig;
}());
exports.az_sig = az_sig;
/**
 * Create a gallery image definition.
 *
 * Syntax:
 * ```
 * az sig image-definition create --gallery-image-definition
 *                                --gallery-name
 *                                --offer
 *                                --os-type {Linux, Windows}
 *                                --publisher
 *                                --resource-group
 *                                --sku
 *                                [--description]
 *                                [--disallowed-disk-types]
 *                                [--end-of-life-date]
 *                                [--eula]
 *                                [--hyper-v-generation {V1, V2}]
 *                                [--location]
 *                                [--maximum-cpu-core]
 *                                [--maximum-memory]
 *                                [--minimum-cpu-core]
 *                                [--minimum-memory]
 *                                [--os-state {Generalized, Specialized}]
 *                                [--plan-name]
 *                                [--plan-product]
 *                                [--plan-publisher]
 *                                [--privacy-statement-uri]
 *                                [--release-note-uri]
 *                                [--subscription]
 *                                [--tags]
 * ```
 *
 * @param {string} galleryImageDefinition Gallery image definition.
 * @param {string} galleryName Gallery name.
 * @param {string} offer Image offer.
 * @param {'Linux' | 'Windows'} osType The type of the OS that is included in the disk if creating a VM from user-image or a specialized VHD.
 * @param {string} publisher Image publisher.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} sku Image sku.
 */
var az_sig_image_definition_create_command_builder = /** @class */ (function (_super) {
    __extends(az_sig_image_definition_create_command_builder, _super);
    function az_sig_image_definition_create_command_builder(commandPath, resultDataTypeName, galleryImageDefinition, galleryName, offer, osType, publisher, resourceGroup, sku) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.galleryImageDefinition(galleryImageDefinition);
        _this.galleryName(galleryName);
        _this.offer(offer);
        _this.osType(osType);
        _this.publisher(publisher);
        _this.resourceGroup(resourceGroup);
        _this.sku(sku);
        return _this;
    }
    /** Gallery image definition. */
    az_sig_image_definition_create_command_builder.prototype.galleryImageDefinition = function (value) {
        this.setFlag("--gallery-image-definition", value);
        return this;
    };
    /** Gallery name. */
    az_sig_image_definition_create_command_builder.prototype.galleryName = function (value) {
        this.setFlag("--gallery-name", value);
        return this;
    };
    /** Image offer. */
    az_sig_image_definition_create_command_builder.prototype.offer = function (value) {
        this.setFlag("--offer", value);
        return this;
    };
    /** The type of the OS that is included in the disk if creating a VM from user-image or a specialized VHD. */
    az_sig_image_definition_create_command_builder.prototype.osType = function (value) {
        this.setFlag("--os-type", value);
        return this;
    };
    /** Image publisher. */
    az_sig_image_definition_create_command_builder.prototype.publisher = function (value) {
        this.setFlag("--publisher", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sig_image_definition_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Image sku. */
    az_sig_image_definition_create_command_builder.prototype.sku = function (value) {
        this.setFlag("--sku", value);
        return this;
    };
    /** The description of the gallery image definition. */
    az_sig_image_definition_create_command_builder.prototype.description = function (value) {
        this.setFlag("--description", value);
        return this;
    };
    /** Disk types which would not work with the image, e.g., Standard_LRS. */
    az_sig_image_definition_create_command_builder.prototype.disallowedDiskTypes = function (value) {
        this.setFlag("--disallowed-disk-types", value);
        return this;
    };
    /** The end of life date, e.g. '2020-12-31'. */
    az_sig_image_definition_create_command_builder.prototype.endOfLifeDate = function (value) {
        this.setFlag("--end-of-life-date", value);
        return this;
    };
    /** The Eula agreement for the gallery image. */
    az_sig_image_definition_create_command_builder.prototype.eula = function (value) {
        this.setFlag("--eula", value);
        return this;
    };
    /** The hypervisor generation of the Virtual Machine. Applicable to OS disks only. */
    az_sig_image_definition_create_command_builder.prototype.hyperVGeneration = function (value) {
        this.setFlag("--hyper-v-generation", value);
        return this;
    };
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_sig_image_definition_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Maximum cpu cores. */
    az_sig_image_definition_create_command_builder.prototype.maximumCpuCore = function (value) {
        this.setFlag("--maximum-cpu-core", value);
        return this;
    };
    /** Maximum memory in MB. */
    az_sig_image_definition_create_command_builder.prototype.maximumMemory = function (value) {
        this.setFlag("--maximum-memory", value);
        return this;
    };
    /** Minimum cpu cores. */
    az_sig_image_definition_create_command_builder.prototype.minimumCpuCore = function (value) {
        this.setFlag("--minimum-cpu-core", value);
        return this;
    };
    /** Minimum memory in MB. */
    az_sig_image_definition_create_command_builder.prototype.minimumMemory = function (value) {
        this.setFlag("--minimum-memory", value);
        return this;
    };
    /** This property allows the user to specify whether the virtual machines created under this image are 'Generalized' or 'Specialized'. */
    az_sig_image_definition_create_command_builder.prototype.osState = function (value) {
        this.setFlag("--os-state", value);
        return this;
    };
    /** Plan name. */
    az_sig_image_definition_create_command_builder.prototype.planName = function (value) {
        this.setFlag("--plan-name", value);
        return this;
    };
    /** Plan product. */
    az_sig_image_definition_create_command_builder.prototype.planProduct = function (value) {
        this.setFlag("--plan-product", value);
        return this;
    };
    /** Plan publisher. */
    az_sig_image_definition_create_command_builder.prototype.planPublisher = function (value) {
        this.setFlag("--plan-publisher", value);
        return this;
    };
    /** The privacy statement uri. */
    az_sig_image_definition_create_command_builder.prototype.privacyStatementUri = function (value) {
        this.setFlag("--privacy-statement-uri", value);
        return this;
    };
    /** The release note uri. */
    az_sig_image_definition_create_command_builder.prototype.releaseNoteUri = function (value) {
        this.setFlag("--release-note-uri", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sig_image_definition_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_sig_image_definition_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_sig_image_definition_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a gallery image.
 *
 * Syntax:
 * ```
 * az sig image-definition delete [--gallery-image-definition]
 *                                [--gallery-name]
 *                                [--ids]
 *                                [--resource-group]
 *                                [--subscription]
 * ```
 */
var az_sig_image_definition_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_sig_image_definition_delete_command_builder, _super);
    function az_sig_image_definition_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Gallery image definition. */
    az_sig_image_definition_delete_command_builder.prototype.galleryImageDefinition = function (value) {
        this.setFlag("--gallery-image-definition", value);
        return this;
    };
    /** Gallery name. */
    az_sig_image_definition_delete_command_builder.prototype.galleryName = function (value) {
        this.setFlag("--gallery-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sig_image_definition_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sig_image_definition_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sig_image_definition_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sig_image_definition_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List gallery Image Definitions in a gallery.
 *
 * Syntax:
 * ```
 * az sig image-definition list --gallery-name
 *                              --resource-group
 *                              [--query-examples]
 *                              [--subscription]
 * ```
 *
 * @param {string} galleryName Gallery name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_sig_image_definition_list_command_builder = /** @class */ (function (_super) {
    __extends(az_sig_image_definition_list_command_builder, _super);
    function az_sig_image_definition_list_command_builder(commandPath, resultDataTypeName, galleryName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.galleryName(galleryName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Gallery name. */
    az_sig_image_definition_list_command_builder.prototype.galleryName = function (value) {
        this.setFlag("--gallery-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sig_image_definition_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_sig_image_definition_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sig_image_definition_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sig_image_definition_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Retrieves information about a gallery Image Definition.
 *
 * Syntax:
 * ```
 * az sig image-definition show [--gallery-image-definition]
 *                              [--gallery-name]
 *                              [--ids]
 *                              [--query-examples]
 *                              [--resource-group]
 *                              [--subscription]
 * ```
 */
var az_sig_image_definition_show_command_builder = /** @class */ (function (_super) {
    __extends(az_sig_image_definition_show_command_builder, _super);
    function az_sig_image_definition_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Gallery image definition. */
    az_sig_image_definition_show_command_builder.prototype.galleryImageDefinition = function (value) {
        this.setFlag("--gallery-image-definition", value);
        return this;
    };
    /** Gallery name. */
    az_sig_image_definition_show_command_builder.prototype.galleryName = function (value) {
        this.setFlag("--gallery-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sig_image_definition_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_sig_image_definition_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sig_image_definition_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sig_image_definition_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sig_image_definition_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update a share image defintiion.
 *
 * Syntax:
 * ```
 * az sig image-definition update --gallery-image-definition
 *                                --gallery-name
 *                                --resource-group
 *                                [--add]
 *                                [--force-string]
 *                                [--remove]
 *                                [--set]
 *                                [--subscription]
 * ```
 *
 * @param {string} galleryImageDefinition Gallery image definition.
 * @param {string} galleryName Gallery name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_sig_image_definition_update_command_builder = /** @class */ (function (_super) {
    __extends(az_sig_image_definition_update_command_builder, _super);
    function az_sig_image_definition_update_command_builder(commandPath, resultDataTypeName, galleryImageDefinition, galleryName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.galleryImageDefinition(galleryImageDefinition);
        _this.galleryName(galleryName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Gallery image definition. */
    az_sig_image_definition_update_command_builder.prototype.galleryImageDefinition = function (value) {
        this.setFlag("--gallery-image-definition", value);
        return this;
    };
    /** Gallery name. */
    az_sig_image_definition_update_command_builder.prototype.galleryName = function (value) {
        this.setFlag("--gallery-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sig_image_definition_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_sig_image_definition_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_sig_image_definition_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_sig_image_definition_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_sig_image_definition_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sig_image_definition_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sig_image_definition_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a new image version.
 *
 * Syntax:
 * ```
 * az sig image-version create --gallery-image-definition
 *                             --gallery-image-version
 *                             --gallery-name
 *                             --resource-group
 *                             [--data-snapshot-luns]
 *                             [--data-snapshots]
 *                             [--end-of-life-date]
 *                             [--exclude-from-latest {false, true}]
 *                             [--location]
 *                             [--managed-image]
 *                             [--no-wait]
 *                             [--os-snapshot]
 *                             [--replica-count]
 *                             [--storage-account-type {Premium_LRS, Standard_LRS, Standard_ZRS}]
 *                             [--subscription]
 *                             [--tags]
 *                             [--target-region-encryption]
 *                             [--target-regions]
 * ```
 *
 * @param {string} galleryImageDefinition Gallery image definition.
 * @param {string} galleryImageVersion Gallery image version in semantic version pattern. The allowed characters are digit and period. Digits must be within the range of a 32-bit integer, e.g. `<MajorVersion>.<MinorVersion>.<Patch>`.
 * @param {string} galleryName Gallery name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_sig_image_version_create_command_builder = /** @class */ (function (_super) {
    __extends(az_sig_image_version_create_command_builder, _super);
    function az_sig_image_version_create_command_builder(commandPath, resultDataTypeName, galleryImageDefinition, galleryImageVersion, galleryName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.galleryImageDefinition(galleryImageDefinition);
        _this.galleryImageVersion(galleryImageVersion);
        _this.galleryName(galleryName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Gallery image definition. */
    az_sig_image_version_create_command_builder.prototype.galleryImageDefinition = function (value) {
        this.setFlag("--gallery-image-definition", value);
        return this;
    };
    /** Gallery image version in semantic version pattern. The allowed characters are digit and period. Digits must be within the range of a 32-bit integer, e.g. `<MajorVersion>.<MinorVersion>.<Patch>`. */
    az_sig_image_version_create_command_builder.prototype.galleryImageVersion = function (value) {
        this.setFlag("--gallery-image-version", value);
        return this;
    };
    /** Gallery name. */
    az_sig_image_version_create_command_builder.prototype.galleryName = function (value) {
        this.setFlag("--gallery-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sig_image_version_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Logical unit numbers (space-delimited) of data disk snapshots. */
    az_sig_image_version_create_command_builder.prototype.dataSnapshotLuns = function (value) {
        this.setFlag("--data-snapshot-luns", value);
        return this;
    };
    /** Names or IDs (space-delimited) of data disk snapshots. */
    az_sig_image_version_create_command_builder.prototype.dataSnapshots = function (value) {
        this.setFlag("--data-snapshots", value);
        return this;
    };
    /** The end of life date, e.g. '2020-12-31'. */
    az_sig_image_version_create_command_builder.prototype.endOfLifeDate = function (value) {
        this.setFlag("--end-of-life-date", value);
        return this;
    };
    /** The flag means that if it is set to true, people deploying VMs with version omitted will not use this version. */
    az_sig_image_version_create_command_builder.prototype.excludeFromLatest = function (value) {
        this.setFlag("--exclude-from-latest", value.toString());
        return this;
    };
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_sig_image_version_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Image name(if in the same resource group) or resource id. */
    az_sig_image_version_create_command_builder.prototype.managedImage = function (value) {
        this.setFlag("--managed-image", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_sig_image_version_create_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name or ID of OS disk snapshot. */
    az_sig_image_version_create_command_builder.prototype.osSnapshot = function (value) {
        this.setFlag("--os-snapshot", value);
        return this;
    };
    /** The default number of replicas to be created per region. To set regional replication counts, use --target-regions. */
    az_sig_image_version_create_command_builder.prototype.replicaCount = function (value) {
        this.setFlag("--replica-count", value);
        return this;
    };
    /** The default storage account type to be used per region. To set regional storage account types, use --target-regions. */
    az_sig_image_version_create_command_builder.prototype.storageAccountType = function (value) {
        this.setFlag("--storage-account-type", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sig_image_version_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_sig_image_version_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    /** Space-separated list of customer managed keys for encrypting the OS and data disks in the gallery artifact for each region. Format for each region: `<os_des>,<lun1>,<lun1_des>,<lun2>,<lun2_des>`. Use "null" as a placeholder. */
    az_sig_image_version_create_command_builder.prototype.targetRegionEncryption = function (value) {
        this.setFlag("--target-region-encryption", value);
        return this;
    };
    /** Space-separated list of regions and their replica counts. Use `<region>[=<replica count>][=<storage account type>]` to optionally set the replica count and/or storage account type for each region. If a replica count is not specified, the default replica count will be used. If a storage account type is not specified, the default storage account type will be used. */
    az_sig_image_version_create_command_builder.prototype.targetRegions = function (value) {
        this.setFlag("--target-regions", value);
        return this;
    };
    return az_sig_image_version_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a gallery Image Version.
 *
 * Syntax:
 * ```
 * az sig image-version delete --gallery-image-definition
 *                             --gallery-image-version
 *                             --gallery-name
 *                             --resource-group
 *                             [--subscription]
 * ```
 *
 * @param {string} galleryImageDefinition Gallery image definition.
 * @param {string} galleryImageVersion Gallery image version in semantic version pattern. The allowed characters are digit and period. Digits must be within the range of a 32-bit integer, e.g. `<MajorVersion>.<MinorVersion>.<Patch>`.
 * @param {string} galleryName Gallery name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_sig_image_version_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_sig_image_version_delete_command_builder, _super);
    function az_sig_image_version_delete_command_builder(commandPath, resultDataTypeName, galleryImageDefinition, galleryImageVersion, galleryName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.galleryImageDefinition(galleryImageDefinition);
        _this.galleryImageVersion(galleryImageVersion);
        _this.galleryName(galleryName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Gallery image definition. */
    az_sig_image_version_delete_command_builder.prototype.galleryImageDefinition = function (value) {
        this.setFlag("--gallery-image-definition", value);
        return this;
    };
    /** Gallery image version in semantic version pattern. The allowed characters are digit and period. Digits must be within the range of a 32-bit integer, e.g. `<MajorVersion>.<MinorVersion>.<Patch>`. */
    az_sig_image_version_delete_command_builder.prototype.galleryImageVersion = function (value) {
        this.setFlag("--gallery-image-version", value);
        return this;
    };
    /** Gallery name. */
    az_sig_image_version_delete_command_builder.prototype.galleryName = function (value) {
        this.setFlag("--gallery-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sig_image_version_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sig_image_version_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sig_image_version_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List gallery Image Versions in a gallery Image Definition.
 *
 * Syntax:
 * ```
 * az sig image-version list --gallery-image-definition
 *                           --gallery-name
 *                           --resource-group
 *                           [--query-examples]
 *                           [--subscription]
 * ```
 *
 * @param {string} galleryImageDefinition Gallery image definition.
 * @param {string} galleryName Gallery name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_sig_image_version_list_command_builder = /** @class */ (function (_super) {
    __extends(az_sig_image_version_list_command_builder, _super);
    function az_sig_image_version_list_command_builder(commandPath, resultDataTypeName, galleryImageDefinition, galleryName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.galleryImageDefinition(galleryImageDefinition);
        _this.galleryName(galleryName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Gallery image definition. */
    az_sig_image_version_list_command_builder.prototype.galleryImageDefinition = function (value) {
        this.setFlag("--gallery-image-definition", value);
        return this;
    };
    /** Gallery name. */
    az_sig_image_version_list_command_builder.prototype.galleryName = function (value) {
        this.setFlag("--gallery-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sig_image_version_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_sig_image_version_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sig_image_version_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sig_image_version_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Retrieves information about a gallery Image Version.
 *
 * Syntax:
 * ```
 * az sig image-version show --gallery-image-definition
 *                           --gallery-image-version
 *                           --gallery-name
 *                           --resource-group
 *                           [--expand]
 *                           [--query-examples]
 *                           [--subscription]
 * ```
 *
 * @param {string} galleryImageDefinition Gallery image definition.
 * @param {string} galleryImageVersion Gallery image version in semantic version pattern. The allowed characters are digit and period. Digits must be within the range of a 32-bit integer, e.g. `<MajorVersion>.<MinorVersion>.<Patch>`.
 * @param {string} galleryName Gallery name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_sig_image_version_show_command_builder = /** @class */ (function (_super) {
    __extends(az_sig_image_version_show_command_builder, _super);
    function az_sig_image_version_show_command_builder(commandPath, resultDataTypeName, galleryImageDefinition, galleryImageVersion, galleryName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.galleryImageDefinition(galleryImageDefinition);
        _this.galleryImageVersion(galleryImageVersion);
        _this.galleryName(galleryName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Gallery image definition. */
    az_sig_image_version_show_command_builder.prototype.galleryImageDefinition = function (value) {
        this.setFlag("--gallery-image-definition", value);
        return this;
    };
    /** Gallery image version in semantic version pattern. The allowed characters are digit and period. Digits must be within the range of a 32-bit integer, e.g. `<MajorVersion>.<MinorVersion>.<Patch>`. */
    az_sig_image_version_show_command_builder.prototype.galleryImageVersion = function (value) {
        this.setFlag("--gallery-image-version", value);
        return this;
    };
    /** Gallery name. */
    az_sig_image_version_show_command_builder.prototype.galleryName = function (value) {
        this.setFlag("--gallery-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sig_image_version_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The expand expression to apply on the operation, e.g. 'ReplicationStatus'. */
    az_sig_image_version_show_command_builder.prototype.expand = function (value) {
        this.setFlag("--expand", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_sig_image_version_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sig_image_version_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sig_image_version_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update a share image version.
 *
 * Syntax:
 * ```
 * az sig image-version update --gallery-image-definition
 *                             --gallery-image-version
 *                             --gallery-name
 *                             --resource-group
 *                             [--add]
 *                             [--force-string]
 *                             [--no-wait]
 *                             [--remove]
 *                             [--replica-count]
 *                             [--set]
 *                             [--subscription]
 *                             [--target-regions]
 * ```
 *
 * @param {string} galleryImageDefinition Gallery image definition.
 * @param {string} galleryImageVersion Gallery image version in semantic version pattern. The allowed characters are digit and period. Digits must be within the range of a 32-bit integer, e.g. `<MajorVersion>.<MinorVersion>.<Patch>`.
 * @param {string} galleryName Gallery name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_sig_image_version_update_command_builder = /** @class */ (function (_super) {
    __extends(az_sig_image_version_update_command_builder, _super);
    function az_sig_image_version_update_command_builder(commandPath, resultDataTypeName, galleryImageDefinition, galleryImageVersion, galleryName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.galleryImageDefinition(galleryImageDefinition);
        _this.galleryImageVersion(galleryImageVersion);
        _this.galleryName(galleryName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Gallery image definition. */
    az_sig_image_version_update_command_builder.prototype.galleryImageDefinition = function (value) {
        this.setFlag("--gallery-image-definition", value);
        return this;
    };
    /** Gallery image version in semantic version pattern. The allowed characters are digit and period. Digits must be within the range of a 32-bit integer, e.g. `<MajorVersion>.<MinorVersion>.<Patch>`. */
    az_sig_image_version_update_command_builder.prototype.galleryImageVersion = function (value) {
        this.setFlag("--gallery-image-version", value);
        return this;
    };
    /** Gallery name. */
    az_sig_image_version_update_command_builder.prototype.galleryName = function (value) {
        this.setFlag("--gallery-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sig_image_version_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_sig_image_version_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_sig_image_version_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_sig_image_version_update_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_sig_image_version_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** The default number of replicas to be created per region. To set regional replication counts, use --target-regions. */
    az_sig_image_version_update_command_builder.prototype.replicaCount = function (value) {
        this.setFlag("--replica-count", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_sig_image_version_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sig_image_version_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated list of regions and their replica counts. Use `<region>[=<replica count>][=<storage account type>]` to optionally set the replica count and/or storage account type for each region. If a replica count is not specified, the default replica count will be used. If a storage account type is not specified, the default storage account type will be used. */
    az_sig_image_version_update_command_builder.prototype.targetRegions = function (value) {
        this.setFlag("--target-regions", value);
        return this;
    };
    return az_sig_image_version_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Wait for image version related operation.
 *
 * Syntax:
 * ```
 * az sig image-version wait --gallery-image-definition
 *                           --gallery-image-version
 *                           --gallery-name
 *                           --resource-group
 *                           [--created]
 *                           [--custom]
 *                           [--deleted]
 *                           [--exists]
 *                           [--expand]
 *                           [--interval]
 *                           [--subscription]
 *                           [--timeout]
 *                           [--updated]
 * ```
 *
 * @param {string} galleryImageDefinition Gallery image definition.
 * @param {string} galleryImageVersion Gallery image version in semantic version pattern. The allowed characters are digit and period. Digits must be within the range of a 32-bit integer, e.g. `<MajorVersion>.<MinorVersion>.<Patch>`.
 * @param {string} galleryName Gallery name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_sig_image_version_wait_command_builder = /** @class */ (function (_super) {
    __extends(az_sig_image_version_wait_command_builder, _super);
    function az_sig_image_version_wait_command_builder(commandPath, resultDataTypeName, galleryImageDefinition, galleryImageVersion, galleryName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.galleryImageDefinition(galleryImageDefinition);
        _this.galleryImageVersion(galleryImageVersion);
        _this.galleryName(galleryName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Gallery image definition. */
    az_sig_image_version_wait_command_builder.prototype.galleryImageDefinition = function (value) {
        this.setFlag("--gallery-image-definition", value);
        return this;
    };
    /** Gallery image version in semantic version pattern. The allowed characters are digit and period. Digits must be within the range of a 32-bit integer, e.g. `<MajorVersion>.<MinorVersion>.<Patch>`. */
    az_sig_image_version_wait_command_builder.prototype.galleryImageVersion = function (value) {
        this.setFlag("--gallery-image-version", value);
        return this;
    };
    /** Gallery name. */
    az_sig_image_version_wait_command_builder.prototype.galleryName = function (value) {
        this.setFlag("--gallery-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sig_image_version_wait_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    az_sig_image_version_wait_command_builder.prototype.created = function (value) {
        this.setFlag("--created", value);
        return this;
    };
    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    az_sig_image_version_wait_command_builder.prototype.custom = function (value) {
        this.setFlag("--custom", value);
        return this;
    };
    /** Wait until deleted. */
    az_sig_image_version_wait_command_builder.prototype.deleted = function (value) {
        this.setFlag("--deleted", value);
        return this;
    };
    /** Wait until the resource exists. */
    az_sig_image_version_wait_command_builder.prototype.exists = function (value) {
        this.setFlag("--exists", value);
        return this;
    };
    /** The expand expression to apply on the operation. */
    az_sig_image_version_wait_command_builder.prototype.expand = function (value) {
        this.setFlag("--expand", value);
        return this;
    };
    /** Polling interval in seconds. */
    az_sig_image_version_wait_command_builder.prototype.interval = function (value) {
        this.setFlag("--interval", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sig_image_version_wait_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Maximum wait in seconds. */
    az_sig_image_version_wait_command_builder.prototype.timeout = function (value) {
        this.setFlag("--timeout", value);
        return this;
    };
    /** Wait until updated with provisioningState at 'Succeeded'. */
    az_sig_image_version_wait_command_builder.prototype.updated = function (value) {
        this.setFlag("--updated", value);
        return this;
    };
    return az_sig_image_version_wait_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a share image gallery.
 *
 * Syntax:
 * ```
 * az sig create --gallery-name
 *               --resource-group
 *               [--description]
 *               [--location]
 *               [--subscription]
 *               [--tags]
 * ```
 *
 * @param {string} galleryName Gallery name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_sig_create_command_builder = /** @class */ (function (_super) {
    __extends(az_sig_create_command_builder, _super);
    function az_sig_create_command_builder(commandPath, resultDataTypeName, galleryName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.galleryName(galleryName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Gallery name. */
    az_sig_create_command_builder.prototype.galleryName = function (value) {
        this.setFlag("--gallery-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sig_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The description of the gallery. */
    az_sig_create_command_builder.prototype.description = function (value) {
        this.setFlag("--description", value);
        return this;
    };
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_sig_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sig_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_sig_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_sig_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a Shared Image Gallery.
 *
 * Syntax:
 * ```
 * az sig delete --gallery-name
 *               --resource-group
 *               [--subscription]
 * ```
 *
 * @param {string} galleryName Gallery name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_sig_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_sig_delete_command_builder, _super);
    function az_sig_delete_command_builder(commandPath, resultDataTypeName, galleryName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.galleryName(galleryName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Gallery name. */
    az_sig_delete_command_builder.prototype.galleryName = function (value) {
        this.setFlag("--gallery-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sig_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sig_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sig_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List share image galleries.
 *
 * Syntax:
 * ```
 * az sig list [--query-examples]
 *             [--resource-group]
 *             [--subscription]
 * ```
 */
var az_sig_list_command_builder = /** @class */ (function (_super) {
    __extends(az_sig_list_command_builder, _super);
    function az_sig_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_sig_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sig_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sig_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sig_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Retrieves information about a Shared Image Gallery.
 *
 * Syntax:
 * ```
 * az sig show [--gallery-name]
 *             [--ids]
 *             [--query-examples]
 *             [--resource-group]
 *             [--subscription]
 * ```
 */
var az_sig_show_command_builder = /** @class */ (function (_super) {
    __extends(az_sig_show_command_builder, _super);
    function az_sig_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Gallery name. */
    az_sig_show_command_builder.prototype.galleryName = function (value) {
        this.setFlag("--gallery-name", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_sig_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_sig_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sig_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sig_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sig_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update a share image gallery.
 *
 * Syntax:
 * ```
 * az sig update --gallery-name
 *               --resource-group
 *               [--add]
 *               [--force-string]
 *               [--remove]
 *               [--set]
 *               [--subscription]
 * ```
 *
 * @param {string} galleryName Gallery name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_sig_update_command_builder = /** @class */ (function (_super) {
    __extends(az_sig_update_command_builder, _super);
    function az_sig_update_command_builder(commandPath, resultDataTypeName, galleryName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.galleryName(galleryName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Gallery name. */
    az_sig_update_command_builder.prototype.galleryName = function (value) {
        this.setFlag("--gallery-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_sig_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_sig_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_sig_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_sig_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_sig_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_sig_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_sig_update_command_builder;
}(base_1.CommandBuilder));
