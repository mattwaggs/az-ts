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
/** Manage image builder template customizers. */
var az_image_builder_customizer = /** @class */ (function () {
    function az_image_builder_customizer() {
    }
    /**
     * Add an image builder customizer to an image builder template.
     *
     * Syntax:
     * ```
     * az image builder customizer add --customizer-name
     *                                 --type {file, powershell, shell, windows-restart, windows-update}
     *                                 [--defer]
     *                                 [--dest-path]
     *                                 [--exit-codes]
     *                                 [--file-source]
     *                                 [--filters]
     *                                 [--ids]
     *                                 [--inline-script]
     *                                 [--name]
     *                                 [--resource-group]
     *                                 [--restart-check-command]
     *                                 [--restart-command]
     *                                 [--restart-timeout]
     *                                 [--script-url]
     *                                 [--search-criteria]
     *                                 [--subscription]
     *                                 [--update-limit]
     * ```
     *
     * @param {string} customizerName Name of the customizer.
     * @param {'file' | 'powershell' | 'shell' | 'windows-restart' | 'windows-update'} type Type of customizer to be added to the image template.
     */
    az_image_builder_customizer.add = function (customizerName, type) {
        return new az_image_builder_customizer_add_command_builder("az image builder customizer add", 'az_image_builder_customizer_add_command_result', customizerName, type);
    };
    /**
     * Remove all image builder customizers from an image builder template.
     *
     * Syntax:
     * ```
     * az image builder customizer clear [--defer]
     *                                   [--ids]
     *                                   [--name]
     *                                   [--resource-group]
     *                                   [--subscription]
     * ```
     */
    az_image_builder_customizer.clear = function () {
        return new az_image_builder_customizer_clear_command_builder("az image builder customizer clear", 'az_image_builder_customizer_clear_command_result');
    };
    /**
     * Remove an image builder customizer from an image builder template.
     *
     * Syntax:
     * ```
     * az image builder customizer remove --customizer-name
     *                                    [--defer]
     *                                    [--ids]
     *                                    [--name]
     *                                    [--resource-group]
     *                                    [--subscription]
     * ```
     *
     * @param {string} customizerName Name of the customizer.
     */
    az_image_builder_customizer.remove = function (customizerName) {
        return new az_image_builder_customizer_remove_command_builder("az image builder customizer remove", 'az_image_builder_customizer_remove_command_result', customizerName);
    };
    return az_image_builder_customizer;
}());
exports.az_image_builder_customizer = az_image_builder_customizer;
/** Manage image builder template output distributors. */
var az_image_builder_output = /** @class */ (function () {
    function az_image_builder_output() {
    }
    /**
     * Add an image builder output distributor to an image builder template.
     *
     * Syntax:
     * ```
     * az image builder output add [--artifact-tags]
     *                             [--defer]
     *                             [--gallery-image-definition]
     *                             [--gallery-name]
     *                             [--gallery-replication-regions]
     *                             [--ids]
     *                             [--is-vhd]
     *                             [--managed-image]
     *                             [--managed-image-location]
     *                             [--name]
     *                             [--output-name]
     *                             [--resource-group]
     *                             [--subscription]
     * ```
     */
    az_image_builder_output.add = function () {
        return new az_image_builder_output_add_command_builder("az image builder output add", 'az_image_builder_output_add_command_result');
    };
    /**
     * Remove all image builder output distributors from an image builder template.
     *
     * Syntax:
     * ```
     * az image builder output clear [--defer]
     *                               [--ids]
     *                               [--name]
     *                               [--resource-group]
     *                               [--subscription]
     * ```
     */
    az_image_builder_output.clear = function () {
        return new az_image_builder_output_clear_command_builder("az image builder output clear", 'az_image_builder_output_clear_command_result');
    };
    /**
     * Remove an image builder output distributor from an image builder template.
     *
     * Syntax:
     * ```
     * az image builder output remove --output-name
     *                                [--defer]
     *                                [--ids]
     *                                [--name]
     *                                [--resource-group]
     *                                [--subscription]
     * ```
     *
     * @param {string} outputName Name of the image builder run output.
     */
    az_image_builder_output.remove = function (outputName) {
        return new az_image_builder_output_remove_command_builder("az image builder output remove", 'az_image_builder_output_remove_command_result', outputName);
    };
    return az_image_builder_output;
}());
exports.az_image_builder_output = az_image_builder_output;
/** Manage and build image builder templates. */
var az_image_builder = /** @class */ (function () {
    function az_image_builder() {
    }
    /**
     * Cancel the long running image build based on the image template.
     *
     * Syntax:
     * ```
     * az image builder cancel [--ids]
     *                         [--name]
     *                         [--resource-group]
     *                         [--subscription]
     * ```
     */
    az_image_builder.cancel = function () {
        return new az_image_builder_cancel_command_builder("az image builder cancel", 'az_image_builder_cancel_command_result');
    };
    /**
     * Create an image builder template.
     *
     * Syntax:
     * ```
     * az image builder create --name
     *                         --resource-group
     *                         [--build-timeout]
     *                         [--checksum]
     *                         [--defer]
     *                         [--identity]
     *                         [--image-source]
     *                         [--image-template]
     *                         [--location]
     *                         [--managed-image-destinations]
     *                         [--no-wait]
     *                         [--os-disk-size]
     *                         [--scripts]
     *                         [--shared-image-destinations]
     *                         [--subnet]
     *                         [--subscription]
     *                         [--tags]
     *                         [--vm-size]
     *                         [--vnet]
     * ```
     *
     * @param {string} name The name of the image template.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_image_builder.create = function (name, resourceGroup) {
        return new az_image_builder_create_command_builder("az image builder create", 'az_image_builder_create_command_result', name, resourceGroup);
    };
    /**
     * Delete image builder template.
     *
     * Syntax:
     * ```
     * az image builder delete [--ids]
     *                         [--name]
     *                         [--resource-group]
     *                         [--subscription]
     * ```
     */
    az_image_builder["delete"] = function () {
        return new az_image_builder_delete_command_builder("az image builder delete", 'az_image_builder_delete_command_result');
    };
    /**
     * List image builder templates.
     *
     * Syntax:
     * ```
     * az image builder list [--query-examples]
     *                       [--resource-group]
     *                       [--subscription]
     * ```
     */
    az_image_builder.list = function () {
        return new az_image_builder_list_command_builder("az image builder list", 'az_image_builder_list_command_result');
    };
    /**
     * Build an image builder template.
     *
     * Syntax:
     * ```
     * az image builder run [--ids]
     *                      [--name]
     *                      [--no-wait]
     *                      [--resource-group]
     *                      [--subscription]
     * ```
     */
    az_image_builder.run = function () {
        return new az_image_builder_run_command_builder("az image builder run", 'az_image_builder_run_command_result');
    };
    /**
     * Show an image builder template.
     *
     * Syntax:
     * ```
     * az image builder show [--ids]
     *                       [--name]
     *                       [--query-examples]
     *                       [--resource-group]
     *                       [--subscription]
     * ```
     */
    az_image_builder.show = function () {
        return new az_image_builder_show_command_builder("az image builder show", 'az_image_builder_show_command_result');
    };
    /**
     * Show an image builder template's run outputs.
     *
     * Syntax:
     * ```
     * az image builder show-runs [--ids]
     *                            [--name]
     *                            [--output-name]
     *                            [--resource-group]
     *                            [--subscription]
     * ```
     */
    az_image_builder.show_runs = function () {
        return new az_image_builder_show_runs_command_builder("az image builder show-runs", 'az_image_builder_show_runs_command_result');
    };
    /**
     * Update an image builder template.
     *
     * Syntax:
     * ```
     * az image builder update [--add]
     *                         [--defer]
     *                         [--force-string]
     *                         [--ids]
     *                         [--name]
     *                         [--remove]
     *                         [--resource-group]
     *                         [--set]
     *                         [--subscription]
     * ```
     */
    az_image_builder.update = function () {
        return new az_image_builder_update_command_builder("az image builder update", 'az_image_builder_update_command_result');
    };
    /**
     * Place the CLI in a waiting state until a condition of the template is met.
     *
     * Syntax:
     * ```
     * az image builder wait [--created]
     *                       [--custom]
     *                       [--deleted]
     *                       [--exists]
     *                       [--ids]
     *                       [--interval]
     *                       [--name]
     *                       [--resource-group]
     *                       [--subscription]
     *                       [--timeout]
     *                       [--updated]
     * ```
     */
    az_image_builder.wait = function () {
        return new az_image_builder_wait_command_builder("az image builder wait", 'az_image_builder_wait_command_result');
    };
    return az_image_builder;
}());
exports.az_image_builder = az_image_builder;
/** Manage custom virtual machine images. */
var az_image = /** @class */ (function () {
    function az_image() {
    }
    /**
     * Create a custom Virtual Machine Image from managed disks or snapshots.
     *
     * Syntax:
     * ```
     * az image create --name
     *                 --resource-group
     *                 --source
     *                 [--data-disk-caching {None, ReadOnly, ReadWrite}]
     *                 [--data-disk-sources]
     *                 [--hyper-v-generation {V1, V2}]
     *                 [--location]
     *                 [--os-disk-caching {None, ReadOnly, ReadWrite}]
     *                 [--os-type {Linux, Windows}]
     *                 [--storage-sku {Premium_LRS, StandardSSD_LRS, Standard_LRS, UltraSSD_LRS}]
     *                 [--subscription]
     *                 [--tags]
     *                 [--zone-resilient {false, true}]
     * ```
     *
     * @param {string} name New image name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} source OS disk source from the same region, including a virtual machine ID or name, OS disk blob URI, managed OS disk ID or name, or OS snapshot ID or name.
     */
    az_image.create = function (name, resourceGroup, source) {
        return new az_image_create_command_builder("az image create", 'az_image_create_command_result', name, resourceGroup, source);
    };
    /**
     * Deletes an Image.
     *
     * Syntax:
     * ```
     * az image delete [--ids]
     *                 [--name]
     *                 [--resource-group]
     *                 [--subscription]
     * ```
     */
    az_image["delete"] = function () {
        return new az_image_delete_command_builder("az image delete", 'az_image_delete_command_result');
    };
    /**
     * List custom VM images.
     *
     * Syntax:
     * ```
     * az image list [--query-examples]
     *               [--resource-group]
     *               [--subscription]
     * ```
     */
    az_image.list = function () {
        return new az_image_list_command_builder("az image list", 'az_image_list_command_result');
    };
    /**
     * Gets an image.
     *
     * Syntax:
     * ```
     * az image show [--expand]
     *               [--ids]
     *               [--name]
     *               [--query-examples]
     *               [--resource-group]
     *               [--subscription]
     * ```
     */
    az_image.show = function () {
        return new az_image_show_command_builder("az image show", 'az_image_show_command_result');
    };
    /**
     * Update custom VM images.
     *
     * Syntax:
     * ```
     * az image update [--add]
     *                 [--force-string]
     *                 [--ids]
     *                 [--name]
     *                 [--remove]
     *                 [--resource-group]
     *                 [--set]
     *                 [--subscription]
     *                 [--tags]
     * ```
     */
    az_image.update = function () {
        return new az_image_update_command_builder("az image update", 'az_image_update_command_result');
    };
    return az_image;
}());
exports.az_image = az_image;
/**
 * Add an image builder customizer to an image builder template.
 *
 * Syntax:
 * ```
 * az image builder customizer add --customizer-name
 *                                 --type {file, powershell, shell, windows-restart, windows-update}
 *                                 [--defer]
 *                                 [--dest-path]
 *                                 [--exit-codes]
 *                                 [--file-source]
 *                                 [--filters]
 *                                 [--ids]
 *                                 [--inline-script]
 *                                 [--name]
 *                                 [--resource-group]
 *                                 [--restart-check-command]
 *                                 [--restart-command]
 *                                 [--restart-timeout]
 *                                 [--script-url]
 *                                 [--search-criteria]
 *                                 [--subscription]
 *                                 [--update-limit]
 * ```
 *
 * @param {string} customizerName Name of the customizer.
 * @param {'file' | 'powershell' | 'shell' | 'windows-restart' | 'windows-update'} type Type of customizer to be added to the image template.
 */
var az_image_builder_customizer_add_command_builder = /** @class */ (function (_super) {
    __extends(az_image_builder_customizer_add_command_builder, _super);
    function az_image_builder_customizer_add_command_builder(commandPath, resultDataTypeName, customizerName, type) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.customizerName(customizerName);
        _this.type(type);
        return _this;
    }
    /** Name of the customizer. */
    az_image_builder_customizer_add_command_builder.prototype.customizerName = function (value) {
        this.setFlag("--customizer-name", value);
        return this;
    };
    /** Type of customizer to be added to the image template. */
    az_image_builder_customizer_add_command_builder.prototype.type = function (value) {
        this.setFlag("--type", value);
        return this;
    };
    /** Temporarily store the object in the local cache instead of sending to Azure. Use `az cache` commands to view/clear. */
    az_image_builder_customizer_add_command_builder.prototype.defer = function (value) {
        this.setFlag("--defer", value);
        return this;
    };
    /** The absolute destination path where the file specified in --file-source will be downloaded to in the image. */
    az_image_builder_customizer_add_command_builder.prototype.destPath = function (value) {
        this.setFlag("--dest-path", value);
        return this;
    };
    /** Space-separated list of valid exit codes, as integers. */
    az_image_builder_customizer_add_command_builder.prototype.exitCodes = function (value) {
        this.setFlag("--exit-codes", value);
        return this;
    };
    /** The URI of the file to be downloaded into the image. It can be a github link, SAS URI for Azure Storage, etc. */
    az_image_builder_customizer_add_command_builder.prototype.fileSource = function (value) {
        this.setFlag("--file-source", value);
        return this;
    };
    /** Space delimited filters to select updates to apply. Omit or specify empty array to use the default (no filter). */
    az_image_builder_customizer_add_command_builder.prototype.filters = function (value) {
        this.setFlag("--filters", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_image_builder_customizer_add_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Space-separated list of inline script lines to customize the image with. */
    az_image_builder_customizer_add_command_builder.prototype.inlineScript = function (value) {
        this.setFlag("--inline-script", value);
        return this;
    };
    /** The name of the image template. */
    az_image_builder_customizer_add_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_image_builder_customizer_add_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Command to verify that restart succeeded. */
    az_image_builder_customizer_add_command_builder.prototype.restartCheckCommand = function (value) {
        this.setFlag("--restart-check-command", value);
        return this;
    };
    /** Command to execute the restart operation. */
    az_image_builder_customizer_add_command_builder.prototype.restartCommand = function (value) {
        this.setFlag("--restart-command", value);
        return this;
    };
    /** Restart timeout specified as a string consisting of a magnitude and unit, e.g. '5m' (5 minutes) or '2h' (2 hours). */
    az_image_builder_customizer_add_command_builder.prototype.restartTimeout = function (value) {
        this.setFlag("--restart-timeout", value);
        return this;
    };
    /** URL of script to customize the image with. The URL must be publicly accessible. */
    az_image_builder_customizer_add_command_builder.prototype.scriptUrl = function (value) {
        this.setFlag("--script-url", value);
        return this;
    };
    /** Criteria to search updates. Omit or specify empty string to use the default (search all). Refer to above link for examples and detailed description of this field. */
    az_image_builder_customizer_add_command_builder.prototype.searchCriteria = function (value) {
        this.setFlag("--search-criteria", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_image_builder_customizer_add_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Maximum number of updates to apply at a time. Omit or specify 0 to use the default (1000). */
    az_image_builder_customizer_add_command_builder.prototype.updateLimit = function (value) {
        this.setFlag("--update-limit", value);
        return this;
    };
    return az_image_builder_customizer_add_command_builder;
}(base_1.CommandBuilder));
/**
 * Remove all image builder customizers from an image builder template.
 *
 * Syntax:
 * ```
 * az image builder customizer clear [--defer]
 *                                   [--ids]
 *                                   [--name]
 *                                   [--resource-group]
 *                                   [--subscription]
 * ```
 */
var az_image_builder_customizer_clear_command_builder = /** @class */ (function (_super) {
    __extends(az_image_builder_customizer_clear_command_builder, _super);
    function az_image_builder_customizer_clear_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Temporarily store the object in the local cache instead of sending to Azure. Use `az cache` commands to view/clear. */
    az_image_builder_customizer_clear_command_builder.prototype.defer = function (value) {
        this.setFlag("--defer", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_image_builder_customizer_clear_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the image template. */
    az_image_builder_customizer_clear_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_image_builder_customizer_clear_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_image_builder_customizer_clear_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_image_builder_customizer_clear_command_builder;
}(base_1.CommandBuilder));
/**
 * Remove an image builder customizer from an image builder template.
 *
 * Syntax:
 * ```
 * az image builder customizer remove --customizer-name
 *                                    [--defer]
 *                                    [--ids]
 *                                    [--name]
 *                                    [--resource-group]
 *                                    [--subscription]
 * ```
 *
 * @param {string} customizerName Name of the customizer.
 */
var az_image_builder_customizer_remove_command_builder = /** @class */ (function (_super) {
    __extends(az_image_builder_customizer_remove_command_builder, _super);
    function az_image_builder_customizer_remove_command_builder(commandPath, resultDataTypeName, customizerName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.customizerName(customizerName);
        return _this;
    }
    /** Name of the customizer. */
    az_image_builder_customizer_remove_command_builder.prototype.customizerName = function (value) {
        this.setFlag("--customizer-name", value);
        return this;
    };
    /** Temporarily store the object in the local cache instead of sending to Azure. Use `az cache` commands to view/clear. */
    az_image_builder_customizer_remove_command_builder.prototype.defer = function (value) {
        this.setFlag("--defer", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_image_builder_customizer_remove_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the image template. */
    az_image_builder_customizer_remove_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_image_builder_customizer_remove_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_image_builder_customizer_remove_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_image_builder_customizer_remove_command_builder;
}(base_1.CommandBuilder));
/**
 * Add an image builder output distributor to an image builder template.
 *
 * Syntax:
 * ```
 * az image builder output add [--artifact-tags]
 *                             [--defer]
 *                             [--gallery-image-definition]
 *                             [--gallery-name]
 *                             [--gallery-replication-regions]
 *                             [--ids]
 *                             [--is-vhd]
 *                             [--managed-image]
 *                             [--managed-image-location]
 *                             [--name]
 *                             [--output-name]
 *                             [--resource-group]
 *                             [--subscription]
 * ```
 */
var az_image_builder_output_add_command_builder = /** @class */ (function (_super) {
    __extends(az_image_builder_output_add_command_builder, _super);
    function az_image_builder_output_add_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Tags that will be applied to the output artifact once it has been created by the distributor. space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_image_builder_output_add_command_builder.prototype.artifactTags = function (value) {
        this.setFlag("--artifact-tags", value);
        return this;
    };
    /** Temporarily store the object in the local cache instead of sending to Azure. Use `az cache` commands to view/clear. */
    az_image_builder_output_add_command_builder.prototype.defer = function (value) {
        this.setFlag("--defer", value);
        return this;
    };
    /** Name or ID of the existing SIG image definition to create the customized image version with. */
    az_image_builder_output_add_command_builder.prototype.galleryImageDefinition = function (value) {
        this.setFlag("--gallery-image-definition", value);
        return this;
    };
    /** Shared image gallery name, if image definition name and not ID was provided. */
    az_image_builder_output_add_command_builder.prototype.galleryName = function (value) {
        this.setFlag("--gallery-name", value);
        return this;
    };
    /** Space-separated list of regions to replicate the image version into. Defaults to resource group's location. */
    az_image_builder_output_add_command_builder.prototype.galleryReplicationRegions = function (value) {
        this.setFlag("--gallery-replication-regions", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_image_builder_output_add_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The output is a VHD distributor. */
    az_image_builder_output_add_command_builder.prototype.isVhd = function (value) {
        this.setFlag("--is-vhd", value);
        return this;
    };
    /** Name or ID of the customized managed image to be created. */
    az_image_builder_output_add_command_builder.prototype.managedImage = function (value) {
        this.setFlag("--managed-image", value);
        return this;
    };
    /** Location where the customized image will be created. Defaults to resource group's location. */
    az_image_builder_output_add_command_builder.prototype.managedImageLocation = function (value) {
        this.setFlag("--managed-image-location", value);
        return this;
    };
    /** The name of the image template. */
    az_image_builder_output_add_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of the image builder run output. Defaults to the name of the managed image or sig image definition. */
    az_image_builder_output_add_command_builder.prototype.outputName = function (value) {
        this.setFlag("--output-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_image_builder_output_add_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_image_builder_output_add_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_image_builder_output_add_command_builder;
}(base_1.CommandBuilder));
/**
 * Remove all image builder output distributors from an image builder template.
 *
 * Syntax:
 * ```
 * az image builder output clear [--defer]
 *                               [--ids]
 *                               [--name]
 *                               [--resource-group]
 *                               [--subscription]
 * ```
 */
var az_image_builder_output_clear_command_builder = /** @class */ (function (_super) {
    __extends(az_image_builder_output_clear_command_builder, _super);
    function az_image_builder_output_clear_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Temporarily store the object in the local cache instead of sending to Azure. Use `az cache` commands to view/clear. */
    az_image_builder_output_clear_command_builder.prototype.defer = function (value) {
        this.setFlag("--defer", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_image_builder_output_clear_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the image template. */
    az_image_builder_output_clear_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_image_builder_output_clear_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_image_builder_output_clear_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_image_builder_output_clear_command_builder;
}(base_1.CommandBuilder));
/**
 * Remove an image builder output distributor from an image builder template.
 *
 * Syntax:
 * ```
 * az image builder output remove --output-name
 *                                [--defer]
 *                                [--ids]
 *                                [--name]
 *                                [--resource-group]
 *                                [--subscription]
 * ```
 *
 * @param {string} outputName Name of the image builder run output.
 */
var az_image_builder_output_remove_command_builder = /** @class */ (function (_super) {
    __extends(az_image_builder_output_remove_command_builder, _super);
    function az_image_builder_output_remove_command_builder(commandPath, resultDataTypeName, outputName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.outputName(outputName);
        return _this;
    }
    /** Name of the image builder run output. */
    az_image_builder_output_remove_command_builder.prototype.outputName = function (value) {
        this.setFlag("--output-name", value);
        return this;
    };
    /** Temporarily store the object in the local cache instead of sending to Azure. Use `az cache` commands to view/clear. */
    az_image_builder_output_remove_command_builder.prototype.defer = function (value) {
        this.setFlag("--defer", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_image_builder_output_remove_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the image template. */
    az_image_builder_output_remove_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_image_builder_output_remove_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_image_builder_output_remove_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_image_builder_output_remove_command_builder;
}(base_1.CommandBuilder));
/**
 * Cancel the long running image build based on the image template.
 *
 * Syntax:
 * ```
 * az image builder cancel [--ids]
 *                         [--name]
 *                         [--resource-group]
 *                         [--subscription]
 * ```
 */
var az_image_builder_cancel_command_builder = /** @class */ (function (_super) {
    __extends(az_image_builder_cancel_command_builder, _super);
    function az_image_builder_cancel_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_image_builder_cancel_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the image template. */
    az_image_builder_cancel_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_image_builder_cancel_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_image_builder_cancel_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_image_builder_cancel_command_builder;
}(base_1.CommandBuilder));
/**
 * Create an image builder template.
 *
 * Syntax:
 * ```
 * az image builder create --name
 *                         --resource-group
 *                         [--build-timeout]
 *                         [--checksum]
 *                         [--defer]
 *                         [--identity]
 *                         [--image-source]
 *                         [--image-template]
 *                         [--location]
 *                         [--managed-image-destinations]
 *                         [--no-wait]
 *                         [--os-disk-size]
 *                         [--scripts]
 *                         [--shared-image-destinations]
 *                         [--subnet]
 *                         [--subscription]
 *                         [--tags]
 *                         [--vm-size]
 *                         [--vnet]
 * ```
 *
 * @param {string} name The name of the image template.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_image_builder_create_command_builder = /** @class */ (function (_super) {
    __extends(az_image_builder_create_command_builder, _super);
    function az_image_builder_create_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the image template. */
    az_image_builder_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_image_builder_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The Maximum duration to wait while building the image template, in minutes. Default is 60. */
    az_image_builder_create_command_builder.prototype.buildTimeout = function (value) {
        this.setFlag("--build-timeout", value);
        return this;
    };
    /** The SHA256 checksum of the Red Hat ISO image. */
    az_image_builder_create_command_builder.prototype.checksum = function (value) {
        this.setFlag("--checksum", value);
        return this;
    };
    /** Temporarily store the object in the local cache instead of sending to Azure. Use `az cache` commands to view/clear. */
    az_image_builder_create_command_builder.prototype.defer = function (value) {
        this.setFlag("--defer", value);
        return this;
    };
    /** List of user assigned identities (name or ID, space delimited) of the image template. */
    az_image_builder_create_command_builder.prototype.identity = function (value) {
        this.setFlag("--identity", value);
        return this;
    };
    /** The base image to customize. Must be a valid platform image URN, platform image alias, Red Hat ISO image URI, managed image name/ID, or shared image version ID. */
    az_image_builder_create_command_builder.prototype.imageSource = function (value) {
        this.setFlag("--image-source", value);
        return this;
    };
    /** Local path or URL to an image template file. When using --image-template, all other parameters are ignored except -g and -n. Reference: <a href="https://docs.microsoft.com/en-us/azure/virtual-machines/linux/image-builder-json">https://docs.microsoft.com/en-us/azure/virtual-machines/linux/image-builder-json</a>. */
    az_image_builder_create_command_builder.prototype.imageTemplate = function (value) {
        this.setFlag("--image-template", value);
        return this;
    };
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_image_builder_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Managed image output distributor information. Space-separated list of key-value pairs. E.g "image_1=westus2 image_2=westus". Each key is the name or resource ID of the managed image to be created. Each value is the location of the image. */
    az_image_builder_create_command_builder.prototype.managedImageDestinations = function (value) {
        this.setFlag("--managed-image-destinations", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_image_builder_create_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Size of the OS disk in GB. Omit or specify 0 to use Azure's default OS disk size. */
    az_image_builder_create_command_builder.prototype.osDiskSize = function (value) {
        this.setFlag("--os-disk-size", value);
        return this;
    };
    /** Space-separated list of shell or powershell scripts to customize the image with. Each script must be a publicly accessible URL. Infers type of script from file extension ('.sh' or'.ps1') or from source type. More more customizer options and flexibility, see: 'az image template customizer add'. */
    az_image_builder_create_command_builder.prototype.scripts = function (value) {
        this.setFlag("--scripts", value);
        return this;
    };
    /** Shared image gallery (sig) output distributor information. Space-separated list of key-value pairs. E.g "my_gallery_1/image_def_1=eastus,westus  my_gallery_2/image_def_2=uksouth,canadaeast,francesouth." Each key is the sig image definition ID or sig gallery name and sig image definition delimited by a "/". Each value is a comma-delimited list of replica locations. */
    az_image_builder_create_command_builder.prototype.sharedImageDestinations = function (value) {
        this.setFlag("--shared-image-destinations", value);
        return this;
    };
    /** Name or ID of subnet to deploy the build virtual machine. */
    az_image_builder_create_command_builder.prototype.subnet = function (value) {
        this.setFlag("--subnet", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_image_builder_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_image_builder_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    /** Size of the virtual machine used to build, customize and capture images. Omit or specify empty string to use the default (Standard_D1_v2). */
    az_image_builder_create_command_builder.prototype.vmSize = function (value) {
        this.setFlag("--vm-size", value);
        return this;
    };
    /** Name of VNET to deploy the build virtual machine. You should only specify it when subnet is a name. */
    az_image_builder_create_command_builder.prototype.vnet = function (value) {
        this.setFlag("--vnet", value);
        return this;
    };
    return az_image_builder_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete image builder template.
 *
 * Syntax:
 * ```
 * az image builder delete [--ids]
 *                         [--name]
 *                         [--resource-group]
 *                         [--subscription]
 * ```
 */
var az_image_builder_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_image_builder_delete_command_builder, _super);
    function az_image_builder_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_image_builder_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the image template. */
    az_image_builder_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_image_builder_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_image_builder_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_image_builder_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List image builder templates.
 *
 * Syntax:
 * ```
 * az image builder list [--query-examples]
 *                       [--resource-group]
 *                       [--subscription]
 * ```
 */
var az_image_builder_list_command_builder = /** @class */ (function (_super) {
    __extends(az_image_builder_list_command_builder, _super);
    function az_image_builder_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_image_builder_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_image_builder_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_image_builder_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_image_builder_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Build an image builder template.
 *
 * Syntax:
 * ```
 * az image builder run [--ids]
 *                      [--name]
 *                      [--no-wait]
 *                      [--resource-group]
 *                      [--subscription]
 * ```
 */
var az_image_builder_run_command_builder = /** @class */ (function (_super) {
    __extends(az_image_builder_run_command_builder, _super);
    function az_image_builder_run_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_image_builder_run_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the image template. */
    az_image_builder_run_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_image_builder_run_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_image_builder_run_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_image_builder_run_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_image_builder_run_command_builder;
}(base_1.CommandBuilder));
/**
 * Show an image builder template.
 *
 * Syntax:
 * ```
 * az image builder show [--ids]
 *                       [--name]
 *                       [--query-examples]
 *                       [--resource-group]
 *                       [--subscription]
 * ```
 */
var az_image_builder_show_command_builder = /** @class */ (function (_super) {
    __extends(az_image_builder_show_command_builder, _super);
    function az_image_builder_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_image_builder_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the image template. */
    az_image_builder_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_image_builder_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_image_builder_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_image_builder_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_image_builder_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Show an image builder template's run outputs.
 *
 * Syntax:
 * ```
 * az image builder show-runs [--ids]
 *                            [--name]
 *                            [--output-name]
 *                            [--resource-group]
 *                            [--subscription]
 * ```
 */
var az_image_builder_show_runs_command_builder = /** @class */ (function (_super) {
    __extends(az_image_builder_show_runs_command_builder, _super);
    function az_image_builder_show_runs_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_image_builder_show_runs_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the image template. */
    az_image_builder_show_runs_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of the image builder run output. */
    az_image_builder_show_runs_command_builder.prototype.outputName = function (value) {
        this.setFlag("--output-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_image_builder_show_runs_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_image_builder_show_runs_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_image_builder_show_runs_command_builder;
}(base_1.CommandBuilder));
/**
 * Update an image builder template.
 *
 * Syntax:
 * ```
 * az image builder update [--add]
 *                         [--defer]
 *                         [--force-string]
 *                         [--ids]
 *                         [--name]
 *                         [--remove]
 *                         [--resource-group]
 *                         [--set]
 *                         [--subscription]
 * ```
 */
var az_image_builder_update_command_builder = /** @class */ (function (_super) {
    __extends(az_image_builder_update_command_builder, _super);
    function az_image_builder_update_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_image_builder_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** Temporarily store the object in the local cache instead of sending to Azure. Use `az cache` commands to view/clear. */
    az_image_builder_update_command_builder.prototype.defer = function (value) {
        this.setFlag("--defer", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_image_builder_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_image_builder_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the image template. */
    az_image_builder_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_image_builder_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_image_builder_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_image_builder_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_image_builder_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_image_builder_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Place the CLI in a waiting state until a condition of the template is met.
 *
 * Syntax:
 * ```
 * az image builder wait [--created]
 *                       [--custom]
 *                       [--deleted]
 *                       [--exists]
 *                       [--ids]
 *                       [--interval]
 *                       [--name]
 *                       [--resource-group]
 *                       [--subscription]
 *                       [--timeout]
 *                       [--updated]
 * ```
 */
var az_image_builder_wait_command_builder = /** @class */ (function (_super) {
    __extends(az_image_builder_wait_command_builder, _super);
    function az_image_builder_wait_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    az_image_builder_wait_command_builder.prototype.created = function (value) {
        this.setFlag("--created", value);
        return this;
    };
    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    az_image_builder_wait_command_builder.prototype.custom = function (value) {
        this.setFlag("--custom", value);
        return this;
    };
    /** Wait until deleted. */
    az_image_builder_wait_command_builder.prototype.deleted = function (value) {
        this.setFlag("--deleted", value);
        return this;
    };
    /** Wait until the resource exists. */
    az_image_builder_wait_command_builder.prototype.exists = function (value) {
        this.setFlag("--exists", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_image_builder_wait_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Polling interval in seconds. */
    az_image_builder_wait_command_builder.prototype.interval = function (value) {
        this.setFlag("--interval", value);
        return this;
    };
    /** The name of the image template. */
    az_image_builder_wait_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_image_builder_wait_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_image_builder_wait_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Maximum wait in seconds. */
    az_image_builder_wait_command_builder.prototype.timeout = function (value) {
        this.setFlag("--timeout", value);
        return this;
    };
    /** Wait until updated with provisioningState at 'Succeeded'. */
    az_image_builder_wait_command_builder.prototype.updated = function (value) {
        this.setFlag("--updated", value);
        return this;
    };
    return az_image_builder_wait_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a custom Virtual Machine Image from managed disks or snapshots.
 *
 * Syntax:
 * ```
 * az image create --name
 *                 --resource-group
 *                 --source
 *                 [--data-disk-caching {None, ReadOnly, ReadWrite}]
 *                 [--data-disk-sources]
 *                 [--hyper-v-generation {V1, V2}]
 *                 [--location]
 *                 [--os-disk-caching {None, ReadOnly, ReadWrite}]
 *                 [--os-type {Linux, Windows}]
 *                 [--storage-sku {Premium_LRS, StandardSSD_LRS, Standard_LRS, UltraSSD_LRS}]
 *                 [--subscription]
 *                 [--tags]
 *                 [--zone-resilient {false, true}]
 * ```
 *
 * @param {string} name New image name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} source OS disk source from the same region, including a virtual machine ID or name, OS disk blob URI, managed OS disk ID or name, or OS snapshot ID or name.
 */
var az_image_create_command_builder = /** @class */ (function (_super) {
    __extends(az_image_create_command_builder, _super);
    function az_image_create_command_builder(commandPath, resultDataTypeName, name, resourceGroup, source) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.source(source);
        return _this;
    }
    /** New image name. */
    az_image_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_image_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** OS disk source from the same region, including a virtual machine ID or name, OS disk blob URI, managed OS disk ID or name, or OS snapshot ID or name. */
    az_image_create_command_builder.prototype.source = function (value) {
        this.setFlag("--source", value);
        return this;
    };
    /** Storage caching type for the image's data disk. */
    az_image_create_command_builder.prototype.dataDiskCaching = function (value) {
        this.setFlag("--data-disk-caching", value);
        return this;
    };
    /** Space-separated list of data disk sources, including unmanaged blob URI, managed disk ID or name, or snapshot ID or name. */
    az_image_create_command_builder.prototype.dataDiskSources = function (value) {
        this.setFlag("--data-disk-sources", value);
        return this;
    };
    /** The hypervisor generation of the Virtual Machine created from the image. */
    az_image_create_command_builder.prototype.hyperVGeneration = function (value) {
        this.setFlag("--hyper-v-generation", value);
        return this;
    };
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_image_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Storage caching type for the image's OS disk. */
    az_image_create_command_builder.prototype.osDiskCaching = function (value) {
        this.setFlag("--os-disk-caching", value);
        return this;
    };
    /** */
    az_image_create_command_builder.prototype.osType = function (value) {
        this.setFlag("--os-type", value);
        return this;
    };
    /** The SKU of the storage account with which to create the VM image. Unused if source VM is specified. */
    az_image_create_command_builder.prototype.storageSku = function (value) {
        this.setFlag("--storage-sku", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_image_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_image_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    /** Specifies whether an image is zone resilient or not. Default is false. Zone resilient images can be created only in regions that provide Zone Redundant Storage. */
    az_image_create_command_builder.prototype.zoneResilient = function (value) {
        this.setFlag("--zone-resilient", value.toString());
        return this;
    };
    return az_image_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Deletes an Image.
 *
 * Syntax:
 * ```
 * az image delete [--ids]
 *                 [--name]
 *                 [--resource-group]
 *                 [--subscription]
 * ```
 */
var az_image_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_image_delete_command_builder, _super);
    function az_image_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_image_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the image. */
    az_image_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_image_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_image_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_image_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List custom VM images.
 *
 * Syntax:
 * ```
 * az image list [--query-examples]
 *               [--resource-group]
 *               [--subscription]
 * ```
 */
var az_image_list_command_builder = /** @class */ (function (_super) {
    __extends(az_image_list_command_builder, _super);
    function az_image_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_image_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_image_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_image_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_image_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Gets an image.
 *
 * Syntax:
 * ```
 * az image show [--expand]
 *               [--ids]
 *               [--name]
 *               [--query-examples]
 *               [--resource-group]
 *               [--subscription]
 * ```
 */
var az_image_show_command_builder = /** @class */ (function (_super) {
    __extends(az_image_show_command_builder, _super);
    function az_image_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The expand expression to apply on the operation. */
    az_image_show_command_builder.prototype.expand = function (value) {
        this.setFlag("--expand", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_image_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the image. */
    az_image_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_image_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_image_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_image_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_image_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update custom VM images.
 *
 * Syntax:
 * ```
 * az image update [--add]
 *                 [--force-string]
 *                 [--ids]
 *                 [--name]
 *                 [--remove]
 *                 [--resource-group]
 *                 [--set]
 *                 [--subscription]
 *                 [--tags]
 * ```
 */
var az_image_update_command_builder = /** @class */ (function (_super) {
    __extends(az_image_update_command_builder, _super);
    function az_image_update_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_image_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_image_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_image_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the image. */
    az_image_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_image_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_image_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_image_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_image_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_image_update_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_image_update_command_builder;
}(base_1.CommandBuilder));
