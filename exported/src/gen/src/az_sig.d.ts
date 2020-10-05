import { CommandBuilder } from '../base';
import { az_sig_image_definition_create_command_result } from './models/az_sig_image_definition_create_command_result';
import { az_sig_image_definition_delete_command_result } from './models/az_sig_image_definition_delete_command_result';
import { az_sig_image_definition_list_command_result } from './models/az_sig_image_definition_list_command_result';
import { az_sig_image_definition_show_command_result } from './models/az_sig_image_definition_show_command_result';
import { az_sig_image_definition_update_command_result } from './models/az_sig_image_definition_update_command_result';
import { az_sig_image_version_create_command_result } from './models/az_sig_image_version_create_command_result';
import { az_sig_image_version_delete_command_result } from './models/az_sig_image_version_delete_command_result';
import { az_sig_image_version_list_command_result } from './models/az_sig_image_version_list_command_result';
import { az_sig_image_version_show_command_result } from './models/az_sig_image_version_show_command_result';
import { az_sig_image_version_update_command_result } from './models/az_sig_image_version_update_command_result';
import { az_sig_image_version_wait_command_result } from './models/az_sig_image_version_wait_command_result';
import { az_sig_create_command_result } from './models/az_sig_create_command_result';
import { az_sig_delete_command_result } from './models/az_sig_delete_command_result';
import { az_sig_list_command_result } from './models/az_sig_list_command_result';
import { az_sig_show_command_result } from './models/az_sig_show_command_result';
import { az_sig_update_command_result } from './models/az_sig_update_command_result';
/** Create an image definition. */
export declare class az_sig_image_definition {
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
    static create(galleryImageDefinition: string, galleryName: string, offer: string, osType: 'Linux' | 'Windows', publisher: string, resourceGroup: string, sku: string): az_sig_image_definition_create_command_builder;
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
    static delete(): az_sig_image_definition_delete_command_builder;
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
    static list(galleryName: string, resourceGroup: string): az_sig_image_definition_list_command_builder;
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
    static show(): az_sig_image_definition_show_command_builder;
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
    static update(galleryImageDefinition: string, galleryName: string, resourceGroup: string): az_sig_image_definition_update_command_builder;
}
/** Create a new version from an image defintion. */
export declare class az_sig_image_version {
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
    static create(galleryImageDefinition: string, galleryImageVersion: string, galleryName: string, resourceGroup: string): az_sig_image_version_create_command_builder;
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
    static delete(galleryImageDefinition: string, galleryImageVersion: string, galleryName: string, resourceGroup: string): az_sig_image_version_delete_command_builder;
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
    static list(galleryImageDefinition: string, galleryName: string, resourceGroup: string): az_sig_image_version_list_command_builder;
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
    static show(galleryImageDefinition: string, galleryImageVersion: string, galleryName: string, resourceGroup: string): az_sig_image_version_show_command_builder;
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
    static update(galleryImageDefinition: string, galleryImageVersion: string, galleryName: string, resourceGroup: string): az_sig_image_version_update_command_builder;
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
    static wait(galleryImageDefinition: string, galleryImageVersion: string, galleryName: string, resourceGroup: string): az_sig_image_version_wait_command_builder;
}
/** Manage shared image gallery. */
export declare class az_sig {
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
    static create(galleryName: string, resourceGroup: string): az_sig_create_command_builder;
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
    static delete(galleryName: string, resourceGroup: string): az_sig_delete_command_builder;
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
    static list(): az_sig_list_command_builder;
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
    static show(): az_sig_show_command_builder;
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
    static update(galleryName: string, resourceGroup: string): az_sig_update_command_builder;
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
declare class az_sig_image_definition_create_command_builder extends CommandBuilder<az_sig_image_definition_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, galleryImageDefinition: string, galleryName: string, offer: string, osType: 'Linux' | 'Windows', publisher: string, resourceGroup: string, sku: string);
    /** Gallery image definition. */
    galleryImageDefinition(value: string): az_sig_image_definition_create_command_builder;
    /** Gallery name. */
    galleryName(value: string): az_sig_image_definition_create_command_builder;
    /** Image offer. */
    offer(value: string): az_sig_image_definition_create_command_builder;
    /** The type of the OS that is included in the disk if creating a VM from user-image or a specialized VHD. */
    osType(value: 'Linux' | 'Windows'): az_sig_image_definition_create_command_builder;
    /** Image publisher. */
    publisher(value: string): az_sig_image_definition_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sig_image_definition_create_command_builder;
    /** Image sku. */
    sku(value: string): az_sig_image_definition_create_command_builder;
    /** The description of the gallery image definition. */
    description(value: string): az_sig_image_definition_create_command_builder;
    /** Disk types which would not work with the image, e.g., Standard_LRS. */
    disallowedDiskTypes(value: string): az_sig_image_definition_create_command_builder;
    /** The end of life date, e.g. '2020-12-31'. */
    endOfLifeDate(value: string): az_sig_image_definition_create_command_builder;
    /** The Eula agreement for the gallery image. */
    eula(value: string): az_sig_image_definition_create_command_builder;
    /** The hypervisor generation of the Virtual Machine. Applicable to OS disks only. */
    hyperVGeneration(value: 'V1' | 'V2'): az_sig_image_definition_create_command_builder;
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_sig_image_definition_create_command_builder;
    /** Maximum cpu cores. */
    maximumCpuCore(value: string): az_sig_image_definition_create_command_builder;
    /** Maximum memory in MB. */
    maximumMemory(value: string): az_sig_image_definition_create_command_builder;
    /** Minimum cpu cores. */
    minimumCpuCore(value: string): az_sig_image_definition_create_command_builder;
    /** Minimum memory in MB. */
    minimumMemory(value: string): az_sig_image_definition_create_command_builder;
    /** This property allows the user to specify whether the virtual machines created under this image are 'Generalized' or 'Specialized'. */
    osState(value: 'Generalized' | 'Specialized'): az_sig_image_definition_create_command_builder;
    /** Plan name. */
    planName(value: string): az_sig_image_definition_create_command_builder;
    /** Plan product. */
    planProduct(value: string): az_sig_image_definition_create_command_builder;
    /** Plan publisher. */
    planPublisher(value: string): az_sig_image_definition_create_command_builder;
    /** The privacy statement uri. */
    privacyStatementUri(value: string): az_sig_image_definition_create_command_builder;
    /** The release note uri. */
    releaseNoteUri(value: string): az_sig_image_definition_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sig_image_definition_create_command_builder;
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_sig_image_definition_create_command_builder;
}
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
declare class az_sig_image_definition_delete_command_builder extends CommandBuilder<az_sig_image_definition_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Gallery image definition. */
    galleryImageDefinition(value: string): az_sig_image_definition_delete_command_builder;
    /** Gallery name. */
    galleryName(value: string): az_sig_image_definition_delete_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sig_image_definition_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sig_image_definition_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sig_image_definition_delete_command_builder;
}
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
declare class az_sig_image_definition_list_command_builder extends CommandBuilder<az_sig_image_definition_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, galleryName: string, resourceGroup: string);
    /** Gallery name. */
    galleryName(value: string): az_sig_image_definition_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sig_image_definition_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_sig_image_definition_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sig_image_definition_list_command_builder;
}
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
declare class az_sig_image_definition_show_command_builder extends CommandBuilder<az_sig_image_definition_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Gallery image definition. */
    galleryImageDefinition(value: string): az_sig_image_definition_show_command_builder;
    /** Gallery name. */
    galleryName(value: string): az_sig_image_definition_show_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sig_image_definition_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_sig_image_definition_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sig_image_definition_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sig_image_definition_show_command_builder;
}
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
declare class az_sig_image_definition_update_command_builder extends CommandBuilder<az_sig_image_definition_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, galleryImageDefinition: string, galleryName: string, resourceGroup: string);
    /** Gallery image definition. */
    galleryImageDefinition(value: string): az_sig_image_definition_update_command_builder;
    /** Gallery name. */
    galleryName(value: string): az_sig_image_definition_update_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sig_image_definition_update_command_builder;
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_sig_image_definition_update_command_builder;
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_sig_image_definition_update_command_builder;
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_sig_image_definition_update_command_builder;
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_sig_image_definition_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sig_image_definition_update_command_builder;
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
declare class az_sig_image_version_create_command_builder extends CommandBuilder<az_sig_image_version_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, galleryImageDefinition: string, galleryImageVersion: string, galleryName: string, resourceGroup: string);
    /** Gallery image definition. */
    galleryImageDefinition(value: string): az_sig_image_version_create_command_builder;
    /** Gallery image version in semantic version pattern. The allowed characters are digit and period. Digits must be within the range of a 32-bit integer, e.g. `<MajorVersion>.<MinorVersion>.<Patch>`. */
    galleryImageVersion(value: string): az_sig_image_version_create_command_builder;
    /** Gallery name. */
    galleryName(value: string): az_sig_image_version_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sig_image_version_create_command_builder;
    /** Logical unit numbers (space-delimited) of data disk snapshots. */
    dataSnapshotLuns(value: string): az_sig_image_version_create_command_builder;
    /** Names or IDs (space-delimited) of data disk snapshots. */
    dataSnapshots(value: string): az_sig_image_version_create_command_builder;
    /** The end of life date, e.g. '2020-12-31'. */
    endOfLifeDate(value: string): az_sig_image_version_create_command_builder;
    /** The flag means that if it is set to true, people deploying VMs with version omitted will not use this version. */
    excludeFromLatest(value: boolean): az_sig_image_version_create_command_builder;
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_sig_image_version_create_command_builder;
    /** Image name(if in the same resource group) or resource id. */
    managedImage(value: string): az_sig_image_version_create_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_sig_image_version_create_command_builder;
    /** Name or ID of OS disk snapshot. */
    osSnapshot(value: string): az_sig_image_version_create_command_builder;
    /** The default number of replicas to be created per region. To set regional replication counts, use --target-regions. */
    replicaCount(value: string): az_sig_image_version_create_command_builder;
    /** The default storage account type to be used per region. To set regional storage account types, use --target-regions. */
    storageAccountType(value: 'Premium_LRS' | 'Standard_LRS' | 'Standard_ZRS'): az_sig_image_version_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sig_image_version_create_command_builder;
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_sig_image_version_create_command_builder;
    /** Space-separated list of customer managed keys for encrypting the OS and data disks in the gallery artifact for each region. Format for each region: `<os_des>,<lun1>,<lun1_des>,<lun2>,<lun2_des>`. Use "null" as a placeholder. */
    targetRegionEncryption(value: string): az_sig_image_version_create_command_builder;
    /** Space-separated list of regions and their replica counts. Use `<region>[=<replica count>][=<storage account type>]` to optionally set the replica count and/or storage account type for each region. If a replica count is not specified, the default replica count will be used. If a storage account type is not specified, the default storage account type will be used. */
    targetRegions(value: string): az_sig_image_version_create_command_builder;
}
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
declare class az_sig_image_version_delete_command_builder extends CommandBuilder<az_sig_image_version_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, galleryImageDefinition: string, galleryImageVersion: string, galleryName: string, resourceGroup: string);
    /** Gallery image definition. */
    galleryImageDefinition(value: string): az_sig_image_version_delete_command_builder;
    /** Gallery image version in semantic version pattern. The allowed characters are digit and period. Digits must be within the range of a 32-bit integer, e.g. `<MajorVersion>.<MinorVersion>.<Patch>`. */
    galleryImageVersion(value: string): az_sig_image_version_delete_command_builder;
    /** Gallery name. */
    galleryName(value: string): az_sig_image_version_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sig_image_version_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sig_image_version_delete_command_builder;
}
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
declare class az_sig_image_version_list_command_builder extends CommandBuilder<az_sig_image_version_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, galleryImageDefinition: string, galleryName: string, resourceGroup: string);
    /** Gallery image definition. */
    galleryImageDefinition(value: string): az_sig_image_version_list_command_builder;
    /** Gallery name. */
    galleryName(value: string): az_sig_image_version_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sig_image_version_list_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_sig_image_version_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sig_image_version_list_command_builder;
}
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
declare class az_sig_image_version_show_command_builder extends CommandBuilder<az_sig_image_version_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, galleryImageDefinition: string, galleryImageVersion: string, galleryName: string, resourceGroup: string);
    /** Gallery image definition. */
    galleryImageDefinition(value: string): az_sig_image_version_show_command_builder;
    /** Gallery image version in semantic version pattern. The allowed characters are digit and period. Digits must be within the range of a 32-bit integer, e.g. `<MajorVersion>.<MinorVersion>.<Patch>`. */
    galleryImageVersion(value: string): az_sig_image_version_show_command_builder;
    /** Gallery name. */
    galleryName(value: string): az_sig_image_version_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sig_image_version_show_command_builder;
    /** The expand expression to apply on the operation, e.g. 'ReplicationStatus'. */
    expand(value: string): az_sig_image_version_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_sig_image_version_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sig_image_version_show_command_builder;
}
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
declare class az_sig_image_version_update_command_builder extends CommandBuilder<az_sig_image_version_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, galleryImageDefinition: string, galleryImageVersion: string, galleryName: string, resourceGroup: string);
    /** Gallery image definition. */
    galleryImageDefinition(value: string): az_sig_image_version_update_command_builder;
    /** Gallery image version in semantic version pattern. The allowed characters are digit and period. Digits must be within the range of a 32-bit integer, e.g. `<MajorVersion>.<MinorVersion>.<Patch>`. */
    galleryImageVersion(value: string): az_sig_image_version_update_command_builder;
    /** Gallery name. */
    galleryName(value: string): az_sig_image_version_update_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sig_image_version_update_command_builder;
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_sig_image_version_update_command_builder;
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_sig_image_version_update_command_builder;
    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_sig_image_version_update_command_builder;
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_sig_image_version_update_command_builder;
    /** The default number of replicas to be created per region. To set regional replication counts, use --target-regions. */
    replicaCount(value: string): az_sig_image_version_update_command_builder;
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_sig_image_version_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sig_image_version_update_command_builder;
    /** Space-separated list of regions and their replica counts. Use `<region>[=<replica count>][=<storage account type>]` to optionally set the replica count and/or storage account type for each region. If a replica count is not specified, the default replica count will be used. If a storage account type is not specified, the default storage account type will be used. */
    targetRegions(value: string): az_sig_image_version_update_command_builder;
}
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
declare class az_sig_image_version_wait_command_builder extends CommandBuilder<az_sig_image_version_wait_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, galleryImageDefinition: string, galleryImageVersion: string, galleryName: string, resourceGroup: string);
    /** Gallery image definition. */
    galleryImageDefinition(value: string): az_sig_image_version_wait_command_builder;
    /** Gallery image version in semantic version pattern. The allowed characters are digit and period. Digits must be within the range of a 32-bit integer, e.g. `<MajorVersion>.<MinorVersion>.<Patch>`. */
    galleryImageVersion(value: string): az_sig_image_version_wait_command_builder;
    /** Gallery name. */
    galleryName(value: string): az_sig_image_version_wait_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sig_image_version_wait_command_builder;
    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    created(value: string): az_sig_image_version_wait_command_builder;
    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    custom(value: string): az_sig_image_version_wait_command_builder;
    /** Wait until deleted. */
    deleted(value: string): az_sig_image_version_wait_command_builder;
    /** Wait until the resource exists. */
    exists(value: string): az_sig_image_version_wait_command_builder;
    /** The expand expression to apply on the operation. */
    expand(value: string): az_sig_image_version_wait_command_builder;
    /** Polling interval in seconds. */
    interval(value: string): az_sig_image_version_wait_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sig_image_version_wait_command_builder;
    /** Maximum wait in seconds. */
    timeout(value: string): az_sig_image_version_wait_command_builder;
    /** Wait until updated with provisioningState at 'Succeeded'. */
    updated(value: string): az_sig_image_version_wait_command_builder;
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
declare class az_sig_create_command_builder extends CommandBuilder<az_sig_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, galleryName: string, resourceGroup: string);
    /** Gallery name. */
    galleryName(value: string): az_sig_create_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sig_create_command_builder;
    /** The description of the gallery. */
    description(value: string): az_sig_create_command_builder;
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_sig_create_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sig_create_command_builder;
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_sig_create_command_builder;
}
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
declare class az_sig_delete_command_builder extends CommandBuilder<az_sig_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, galleryName: string, resourceGroup: string);
    /** Gallery name. */
    galleryName(value: string): az_sig_delete_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sig_delete_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sig_delete_command_builder;
}
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
declare class az_sig_list_command_builder extends CommandBuilder<az_sig_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_sig_list_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sig_list_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sig_list_command_builder;
}
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
declare class az_sig_show_command_builder extends CommandBuilder<az_sig_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string);
    /** Gallery name. */
    galleryName(value: string): az_sig_show_command_builder;
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sig_show_command_builder;
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_sig_show_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sig_show_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sig_show_command_builder;
}
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
declare class az_sig_update_command_builder extends CommandBuilder<az_sig_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, galleryName: string, resourceGroup: string);
    /** Gallery name. */
    galleryName(value: string): az_sig_update_command_builder;
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sig_update_command_builder;
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_sig_update_command_builder;
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_sig_update_command_builder;
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_sig_update_command_builder;
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_sig_update_command_builder;
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sig_update_command_builder;
}
export {};
