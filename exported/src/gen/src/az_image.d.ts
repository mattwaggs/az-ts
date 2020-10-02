import { CommandBuilder } from '../base';
import { az_image_builder_customizer_add_command_result } from './models/az_image_builder_customizer_add_command_result';
import { az_image_builder_customizer_clear_command_result } from './models/az_image_builder_customizer_clear_command_result';
import { az_image_builder_customizer_remove_command_result } from './models/az_image_builder_customizer_remove_command_result';
import { az_image_builder_output_add_command_result } from './models/az_image_builder_output_add_command_result';
import { az_image_builder_output_clear_command_result } from './models/az_image_builder_output_clear_command_result';
import { az_image_builder_output_remove_command_result } from './models/az_image_builder_output_remove_command_result';
import { az_image_builder_cancel_command_result } from './models/az_image_builder_cancel_command_result';
import { az_image_builder_create_command_result } from './models/az_image_builder_create_command_result';
import { az_image_builder_delete_command_result } from './models/az_image_builder_delete_command_result';
import { az_image_builder_list_command_result } from './models/az_image_builder_list_command_result';
import { az_image_builder_run_command_result } from './models/az_image_builder_run_command_result';
import { az_image_builder_show_command_result } from './models/az_image_builder_show_command_result';
import { az_image_builder_show_runs_command_result } from './models/az_image_builder_show_runs_command_result';
import { az_image_builder_update_command_result } from './models/az_image_builder_update_command_result';
import { az_image_builder_wait_command_result } from './models/az_image_builder_wait_command_result';
import { az_image_create_command_result } from './models/az_image_create_command_result';
import { az_image_delete_command_result } from './models/az_image_delete_command_result';
import { az_image_list_command_result } from './models/az_image_list_command_result';
import { az_image_show_command_result } from './models/az_image_show_command_result';
import { az_image_update_command_result } from './models/az_image_update_command_result';
/** Manage image builder template customizers. */
export declare class az_image_builder_customizer {
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
    static add(customizerName: string, type: 'file' | 'powershell' | 'shell' | 'windows-restart' | 'windows-update'): az_image_builder_customizer_add_command_builder;
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
    static clear(): az_image_builder_customizer_clear_command_builder;
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
    static remove(customizerName: string): az_image_builder_customizer_remove_command_builder;
}
/** Manage image builder template output distributors. */
export declare class az_image_builder_output {
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
    static add(): az_image_builder_output_add_command_builder;
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
    static clear(): az_image_builder_output_clear_command_builder;
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
    static remove(outputName: string): az_image_builder_output_remove_command_builder;
}
/** Manage and build image builder templates. */
export declare class az_image_builder {
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
    static cancel(): az_image_builder_cancel_command_builder;
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
    static create(name: string, resourceGroup: string): az_image_builder_create_command_builder;
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
    static delete(): az_image_builder_delete_command_builder;
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
    static list(): az_image_builder_list_command_builder;
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
    static run(): az_image_builder_run_command_builder;
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
    static show(): az_image_builder_show_command_builder;
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
    static show_runs(): az_image_builder_show_runs_command_builder;
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
    static update(): az_image_builder_update_command_builder;
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
    static wait(): az_image_builder_wait_command_builder;
}
/** Manage custom virtual machine images. */
export declare class az_image {
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
    static create(name: string, resourceGroup: string, source: string): az_image_create_command_builder;
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
    static delete(): az_image_delete_command_builder;
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
    static list(): az_image_list_command_builder;
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
    static show(): az_image_show_command_builder;
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
    static update(): az_image_update_command_builder;
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
declare class az_image_builder_customizer_add_command_builder extends CommandBuilder<az_image_builder_customizer_add_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, customizerName: string, type: 'file' | 'powershell' | 'shell' | 'windows-restart' | 'windows-update');
    /** Name of the customizer. */
    customizerName(value: string): az_image_builder_customizer_add_command_builder;
    /** Type of customizer to be added to the image template. */
    type(value: 'file' | 'powershell' | 'shell' | 'windows-restart' | 'windows-update'): az_image_builder_customizer_add_command_builder;
    /** Temporarily store the object in the local cache instead of sending to Azure. Use `az cache` commands to view/clear. */
    defer(value: string): az_image_builder_customizer_add_command_builder;
    /** The absolute destination path where the file specified in --file-source will be downloaded to in the image. */
    destPath(value: string): az_image_builder_customizer_add_command_builder;
    /** Space-separated list of valid exit codes, as integers. */
    exitCodes(value: string): az_image_builder_customizer_add_command_builder;
    /** The URI of the file to be downloaded into the image. It can be a github link, SAS URI for Azure Storage, etc. */
    fileSource(value: string): az_image_builder_customizer_add_command_builder;
    /** Space delimited filters to select updates to apply. Omit or specify empty array to use the default (no filter). */
    filters(value: string): az_image_builder_customizer_add_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_image_builder_customizer_add_command_builder;
    /** Space-separated list of inline script lines to customize the image with. */
    inlineScript(value: string): az_image_builder_customizer_add_command_builder;
    /** The name of the image template. */
    name(value: string): az_image_builder_customizer_add_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_image_builder_customizer_add_command_builder;
    /** Command to verify that restart succeeded. */
    restartCheckCommand(value: string): az_image_builder_customizer_add_command_builder;
    /** Command to execute the restart operation. */
    restartCommand(value: string): az_image_builder_customizer_add_command_builder;
    /** Restart timeout specified as a string consisting of a magnitude and unit, e.g. '5m' (5 minutes) or '2h' (2 hours). */
    restartTimeout(value: string): az_image_builder_customizer_add_command_builder;
    /** URL of script to customize the image with. The URL must be publicly accessible. */
    scriptUrl(value: string): az_image_builder_customizer_add_command_builder;
    /** Criteria to search updates. Omit or specify empty string to use the default (search all). Refer to above link for examples and detailed description of this field. */
    searchCriteria(value: string): az_image_builder_customizer_add_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_image_builder_customizer_add_command_builder;
    /** Maximum number of updates to apply at a time. Omit or specify 0 to use the default (1000). */
    updateLimit(value: string): az_image_builder_customizer_add_command_builder;
}
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
declare class az_image_builder_customizer_clear_command_builder extends CommandBuilder<az_image_builder_customizer_clear_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Temporarily store the object in the local cache instead of sending to Azure. Use `az cache` commands to view/clear. */
    defer(value: string): az_image_builder_customizer_clear_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_image_builder_customizer_clear_command_builder;
    /** The name of the image template. */
    name(value: string): az_image_builder_customizer_clear_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_image_builder_customizer_clear_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_image_builder_customizer_clear_command_builder;
}
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
declare class az_image_builder_customizer_remove_command_builder extends CommandBuilder<az_image_builder_customizer_remove_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, customizerName: string);
    /** Name of the customizer. */
    customizerName(value: string): az_image_builder_customizer_remove_command_builder;
    /** Temporarily store the object in the local cache instead of sending to Azure. Use `az cache` commands to view/clear. */
    defer(value: string): az_image_builder_customizer_remove_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_image_builder_customizer_remove_command_builder;
    /** The name of the image template. */
    name(value: string): az_image_builder_customizer_remove_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_image_builder_customizer_remove_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_image_builder_customizer_remove_command_builder;
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
declare class az_image_builder_output_add_command_builder extends CommandBuilder<az_image_builder_output_add_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Tags that will be applied to the output artifact once it has been created by the distributor. space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    artifactTags(value: string): az_image_builder_output_add_command_builder;
    /** Temporarily store the object in the local cache instead of sending to Azure. Use `az cache` commands to view/clear. */
    defer(value: string): az_image_builder_output_add_command_builder;
    /** Name or ID of the existing SIG image definition to create the customized image version with. */
    galleryImageDefinition(value: string): az_image_builder_output_add_command_builder;
    /** Shared image gallery name, if image definition name and not ID was provided. */
    galleryName(value: string): az_image_builder_output_add_command_builder;
    /** Space-separated list of regions to replicate the image version into. Defaults to resource group's location. */
    galleryReplicationRegions(value: string): az_image_builder_output_add_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_image_builder_output_add_command_builder;
    /** The output is a VHD distributor. */
    isVhd(value: string): az_image_builder_output_add_command_builder;
    /** Name or ID of the customized managed image to be created. */
    managedImage(value: string): az_image_builder_output_add_command_builder;
    /** Location where the customized image will be created. Defaults to resource group's location. */
    managedImageLocation(value: string): az_image_builder_output_add_command_builder;
    /** The name of the image template. */
    name(value: string): az_image_builder_output_add_command_builder;
    /** Name of the image builder run output. Defaults to the name of the managed image or sig image definition. */
    outputName(value: string): az_image_builder_output_add_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_image_builder_output_add_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_image_builder_output_add_command_builder;
}
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
declare class az_image_builder_output_clear_command_builder extends CommandBuilder<az_image_builder_output_clear_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Temporarily store the object in the local cache instead of sending to Azure. Use `az cache` commands to view/clear. */
    defer(value: string): az_image_builder_output_clear_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_image_builder_output_clear_command_builder;
    /** The name of the image template. */
    name(value: string): az_image_builder_output_clear_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_image_builder_output_clear_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_image_builder_output_clear_command_builder;
}
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
declare class az_image_builder_output_remove_command_builder extends CommandBuilder<az_image_builder_output_remove_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, outputName: string);
    /** Name of the image builder run output. */
    outputName(value: string): az_image_builder_output_remove_command_builder;
    /** Temporarily store the object in the local cache instead of sending to Azure. Use `az cache` commands to view/clear. */
    defer(value: string): az_image_builder_output_remove_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_image_builder_output_remove_command_builder;
    /** The name of the image template. */
    name(value: string): az_image_builder_output_remove_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_image_builder_output_remove_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_image_builder_output_remove_command_builder;
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
declare class az_image_builder_cancel_command_builder extends CommandBuilder<az_image_builder_cancel_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_image_builder_cancel_command_builder;
    /** The name of the image template. */
    name(value: string): az_image_builder_cancel_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_image_builder_cancel_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_image_builder_cancel_command_builder;
}
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
declare class az_image_builder_create_command_builder extends CommandBuilder<az_image_builder_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string);
    /** The name of the image template. */
    name(value: string): az_image_builder_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_image_builder_create_command_builder;
    /** The Maximum duration to wait while building the image template, in minutes. Default is 60. */
    buildTimeout(value: string): az_image_builder_create_command_builder;
    /** The SHA256 checksum of the Red Hat ISO image. */
    checksum(value: string): az_image_builder_create_command_builder;
    /** Temporarily store the object in the local cache instead of sending to Azure. Use `az cache` commands to view/clear. */
    defer(value: string): az_image_builder_create_command_builder;
    /** List of user assigned identities (name or ID, space delimited) of the image template. */
    identity(value: string): az_image_builder_create_command_builder;
    /** The base image to customize. Must be a valid platform image URN, platform image alias, Red Hat ISO image URI, managed image name/ID, or shared image version ID. */
    imageSource(value: string): az_image_builder_create_command_builder;
    /** Local path or URL to an image template file. When using --image-template, all other parameters are ignored except -g and -n. Reference: <a href="https://docs.microsoft.com/en-us/azure/virtual-machines/linux/image-builder-json">https://docs.microsoft.com/en-us/azure/virtual-machines/linux/image-builder-json</a>. */
    imageTemplate(value: string): az_image_builder_create_command_builder;
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_image_builder_create_command_builder;
    /** Managed image output distributor information. Space-separated list of key-value pairs. E.g "image_1=westus2 image_2=westus". Each key is the name or resource ID of the managed image to be created. Each value is the location of the image. */
    managedImageDestinations(value: string): az_image_builder_create_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_image_builder_create_command_builder;
    /** Size of the OS disk in GB. Omit or specify 0 to use Azure's default OS disk size. */
    osDiskSize(value: string): az_image_builder_create_command_builder;
    /** Space-separated list of shell or powershell scripts to customize the image with. Each script must be a publicly accessible URL. Infers type of script from file extension ('.sh' or'.ps1') or from source type. More more customizer options and flexibility, see: 'az image template customizer add'. */
    scripts(value: string): az_image_builder_create_command_builder;
    /** Shared image gallery (sig) output distributor information. Space-separated list of key-value pairs. E.g "my_gallery_1/image_def_1=eastus,westus  my_gallery_2/image_def_2=uksouth,canadaeast,francesouth." Each key is the sig image definition ID or sig gallery name and sig image definition delimited by a "/". Each value is a comma-delimited list of replica locations. */
    sharedImageDestinations(value: string): az_image_builder_create_command_builder;
    /** Name or ID of subnet to deploy the build virtual machine. */
    subnet(value: string): az_image_builder_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_image_builder_create_command_builder;
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_image_builder_create_command_builder;
    /** Size of the virtual machine used to build, customize and capture images. Omit or specify empty string to use the default (Standard_D1_v2). */
    vmSize(value: string): az_image_builder_create_command_builder;
    /** Name of VNET to deploy the build virtual machine. You should only specify it when subnet is a name. */
    vnet(value: string): az_image_builder_create_command_builder;
}
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
declare class az_image_builder_delete_command_builder extends CommandBuilder<az_image_builder_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_image_builder_delete_command_builder;
    /** The name of the image template. */
    name(value: string): az_image_builder_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_image_builder_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_image_builder_delete_command_builder;
}
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
declare class az_image_builder_list_command_builder extends CommandBuilder<az_image_builder_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_image_builder_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_image_builder_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_image_builder_list_command_builder;
}
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
declare class az_image_builder_run_command_builder extends CommandBuilder<az_image_builder_run_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_image_builder_run_command_builder;
    /** The name of the image template. */
    name(value: string): az_image_builder_run_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_image_builder_run_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_image_builder_run_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_image_builder_run_command_builder;
}
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
declare class az_image_builder_show_command_builder extends CommandBuilder<az_image_builder_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_image_builder_show_command_builder;
    /** The name of the image template. */
    name(value: string): az_image_builder_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_image_builder_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_image_builder_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_image_builder_show_command_builder;
}
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
declare class az_image_builder_show_runs_command_builder extends CommandBuilder<az_image_builder_show_runs_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_image_builder_show_runs_command_builder;
    /** The name of the image template. */
    name(value: string): az_image_builder_show_runs_command_builder;
    /** Name of the image builder run output. */
    outputName(value: string): az_image_builder_show_runs_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_image_builder_show_runs_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_image_builder_show_runs_command_builder;
}
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
declare class az_image_builder_update_command_builder extends CommandBuilder<az_image_builder_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_image_builder_update_command_builder;
    /** Temporarily store the object in the local cache instead of sending to Azure. Use `az cache` commands to view/clear. */
    defer(value: string): az_image_builder_update_command_builder;
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_image_builder_update_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_image_builder_update_command_builder;
    /** The name of the image template. */
    name(value: string): az_image_builder_update_command_builder;
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_image_builder_update_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_image_builder_update_command_builder;
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_image_builder_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_image_builder_update_command_builder;
}
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
declare class az_image_builder_wait_command_builder extends CommandBuilder<az_image_builder_wait_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    created(value: string): az_image_builder_wait_command_builder;
    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    custom(value: string): az_image_builder_wait_command_builder;
    /** Wait until deleted. */
    deleted(value: string): az_image_builder_wait_command_builder;
    /** Wait until the resource exists. */
    exists(value: string): az_image_builder_wait_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_image_builder_wait_command_builder;
    /** Polling interval in seconds. */
    interval(value: string): az_image_builder_wait_command_builder;
    /** The name of the image template. */
    name(value: string): az_image_builder_wait_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_image_builder_wait_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_image_builder_wait_command_builder;
    /** Maximum wait in seconds. */
    timeout(value: string): az_image_builder_wait_command_builder;
    /** Wait until updated with provisioningState at 'Succeeded'. */
    updated(value: string): az_image_builder_wait_command_builder;
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
declare class az_image_create_command_builder extends CommandBuilder<az_image_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, name: string, resourceGroup: string, source: string);
    /** New image name. */
    name(value: string): az_image_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_image_create_command_builder;
    /** OS disk source from the same region, including a virtual machine ID or name, OS disk blob URI, managed OS disk ID or name, or OS snapshot ID or name. */
    source(value: string): az_image_create_command_builder;
    /** Storage caching type for the image's data disk. */
    dataDiskCaching(value: 'None' | 'ReadOnly' | 'ReadWrite'): az_image_create_command_builder;
    /** Space-separated list of data disk sources, including unmanaged blob URI, managed disk ID or name, or snapshot ID or name. */
    dataDiskSources(value: string): az_image_create_command_builder;
    /** The hypervisor generation of the Virtual Machine created from the image. */
    hyperVGeneration(value: 'V1' | 'V2'): az_image_create_command_builder;
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_image_create_command_builder;
    /** Storage caching type for the image's OS disk. */
    osDiskCaching(value: 'None' | 'ReadOnly' | 'ReadWrite'): az_image_create_command_builder;
    /** */
    osType(value: 'Linux' | 'Windows'): az_image_create_command_builder;
    /** The SKU of the storage account with which to create the VM image. Unused if source VM is specified. */
    storageSku(value: 'Premium_LRS' | 'StandardSSD_LRS' | 'Standard_LRS' | 'UltraSSD_LRS'): az_image_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_image_create_command_builder;
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_image_create_command_builder;
    /** Specifies whether an image is zone resilient or not. Default is false. Zone resilient images can be created only in regions that provide Zone Redundant Storage. */
    zoneResilient(value: boolean): az_image_create_command_builder;
}
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
declare class az_image_delete_command_builder extends CommandBuilder<az_image_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_image_delete_command_builder;
    /** The name of the image. */
    name(value: string): az_image_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_image_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_image_delete_command_builder;
}
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
declare class az_image_list_command_builder extends CommandBuilder<az_image_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_image_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_image_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_image_list_command_builder;
}
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
declare class az_image_show_command_builder extends CommandBuilder<az_image_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** The expand expression to apply on the operation. */
    expand(value: string): az_image_show_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_image_show_command_builder;
    /** The name of the image. */
    name(value: string): az_image_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_image_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_image_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_image_show_command_builder;
}
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
declare class az_image_update_command_builder extends CommandBuilder<az_image_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_image_update_command_builder;
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_image_update_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_image_update_command_builder;
    /** The name of the image. */
    name(value: string): az_image_update_command_builder;
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_image_update_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_image_update_command_builder;
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_image_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_image_update_command_builder;
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_image_update_command_builder;
}
export {};
