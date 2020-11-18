import { CommandBuilder } from '../base';
import { az_sig_image_definition_create_command_result } from './models/az_sig_image_definition_create_command_result'
import { az_sig_image_definition_delete_command_result } from './models/az_sig_image_definition_delete_command_result'
import { az_sig_image_definition_list_command_result } from './models/az_sig_image_definition_list_command_result'
import { az_sig_image_definition_show_command_result } from './models/az_sig_image_definition_show_command_result'
import { az_sig_image_definition_update_command_result } from './models/az_sig_image_definition_update_command_result'
import { az_sig_image_version_create_command_result } from './models/az_sig_image_version_create_command_result'
import { az_sig_image_version_delete_command_result } from './models/az_sig_image_version_delete_command_result'
import { az_sig_image_version_list_command_result } from './models/az_sig_image_version_list_command_result'
import { az_sig_image_version_show_command_result } from './models/az_sig_image_version_show_command_result'
import { az_sig_image_version_update_command_result } from './models/az_sig_image_version_update_command_result'
import { az_sig_image_version_wait_command_result } from './models/az_sig_image_version_wait_command_result'
import { az_sig_create_command_result } from './models/az_sig_create_command_result'
import { az_sig_delete_command_result } from './models/az_sig_delete_command_result'
import { az_sig_list_command_result } from './models/az_sig_list_command_result'
import { az_sig_show_command_result } from './models/az_sig_show_command_result'
import { az_sig_update_command_result } from './models/az_sig_update_command_result'

/** Create an image definition. */
export class az_sig_image_definition {
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
     *                                [--features]
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
    static create(galleryImageDefinition: string, galleryName: string, offer: string, osType: 'Linux' | 'Windows', publisher: string, resourceGroup: string, sku: string): az_sig_image_definition_create_command_builder {
        return new az_sig_image_definition_create_command_builder("az sig image-definition create", 'az_sig_image_definition_create_command_result', galleryImageDefinition, galleryName, offer, osType, publisher, resourceGroup, sku);
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
    static delete(): az_sig_image_definition_delete_command_builder {
        return new az_sig_image_definition_delete_command_builder("az sig image-definition delete", 'az_sig_image_definition_delete_command_result');
    }

    /**
     * List gallery image definitions in a gallery.
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
    static list(galleryName: string, resourceGroup: string): az_sig_image_definition_list_command_builder {
        return new az_sig_image_definition_list_command_builder("az sig image-definition list", 'az_sig_image_definition_list_command_result', galleryName, resourceGroup);
    }

    /**
     * Retrieves information about a gallery image definition.
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
    static show(): az_sig_image_definition_show_command_builder {
        return new az_sig_image_definition_show_command_builder("az sig image-definition show", 'az_sig_image_definition_show_command_result');
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
    static update(galleryImageDefinition: string, galleryName: string, resourceGroup: string): az_sig_image_definition_update_command_builder {
        return new az_sig_image_definition_update_command_builder("az sig image-definition update", 'az_sig_image_definition_update_command_result', galleryImageDefinition, galleryName, resourceGroup);
    }
}

/** Create a new version from an image defintion. */
export class az_sig_image_version {
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
    static create(galleryImageDefinition: string, galleryImageVersion: string, galleryName: string, resourceGroup: string): az_sig_image_version_create_command_builder {
        return new az_sig_image_version_create_command_builder("az sig image-version create", 'az_sig_image_version_create_command_result', galleryImageDefinition, galleryImageVersion, galleryName, resourceGroup);
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
    static delete(galleryImageDefinition: string, galleryImageVersion: string, galleryName: string, resourceGroup: string): az_sig_image_version_delete_command_builder {
        return new az_sig_image_version_delete_command_builder("az sig image-version delete", 'az_sig_image_version_delete_command_result', galleryImageDefinition, galleryImageVersion, galleryName, resourceGroup);
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
    static list(galleryImageDefinition: string, galleryName: string, resourceGroup: string): az_sig_image_version_list_command_builder {
        return new az_sig_image_version_list_command_builder("az sig image-version list", 'az_sig_image_version_list_command_result', galleryImageDefinition, galleryName, resourceGroup);
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
    static show(galleryImageDefinition: string, galleryImageVersion: string, galleryName: string, resourceGroup: string): az_sig_image_version_show_command_builder {
        return new az_sig_image_version_show_command_builder("az sig image-version show", 'az_sig_image_version_show_command_result', galleryImageDefinition, galleryImageVersion, galleryName, resourceGroup);
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
    static update(galleryImageDefinition: string, galleryImageVersion: string, galleryName: string, resourceGroup: string): az_sig_image_version_update_command_builder {
        return new az_sig_image_version_update_command_builder("az sig image-version update", 'az_sig_image_version_update_command_result', galleryImageDefinition, galleryImageVersion, galleryName, resourceGroup);
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
    static wait(galleryImageDefinition: string, galleryImageVersion: string, galleryName: string, resourceGroup: string): az_sig_image_version_wait_command_builder {
        return new az_sig_image_version_wait_command_builder("az sig image-version wait", 'az_sig_image_version_wait_command_result', galleryImageDefinition, galleryImageVersion, galleryName, resourceGroup);
    }
}

/** Manage shared image gallery. */
export class az_sig {
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
    static create(galleryName: string, resourceGroup: string): az_sig_create_command_builder {
        return new az_sig_create_command_builder("az sig create", 'az_sig_create_command_result', galleryName, resourceGroup);
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
    static delete(galleryName: string, resourceGroup: string): az_sig_delete_command_builder {
        return new az_sig_delete_command_builder("az sig delete", 'az_sig_delete_command_result', galleryName, resourceGroup);
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
    static list(): az_sig_list_command_builder {
        return new az_sig_list_command_builder("az sig list", 'az_sig_list_command_result');
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
    static show(): az_sig_show_command_builder {
        return new az_sig_show_command_builder("az sig show", 'az_sig_show_command_result');
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
    static update(galleryName: string, resourceGroup: string): az_sig_update_command_builder {
        return new az_sig_update_command_builder("az sig update", 'az_sig_update_command_result', galleryName, resourceGroup);
    }
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
 *                                [--features]
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
class az_sig_image_definition_create_command_builder extends CommandBuilder<az_sig_image_definition_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, galleryImageDefinition: string, galleryName: string, offer: string, osType: 'Linux' | 'Windows', publisher: string, resourceGroup: string, sku: string) {
        super(commandPath, resultDataTypeName);
        this.galleryImageDefinition(galleryImageDefinition)
        this.galleryName(galleryName)
        this.offer(offer)
        this.osType(osType)
        this.publisher(publisher)
        this.resourceGroup(resourceGroup)
        this.sku(sku)
    }

    /** Gallery image definition. */
    galleryImageDefinition(value: string): az_sig_image_definition_create_command_builder {
        this.setFlag("--gallery-image-definition", value);
        return this;
    }

    /** Gallery name. */
    galleryName(value: string): az_sig_image_definition_create_command_builder {
        this.setFlag("--gallery-name", value);
        return this;
    }

    /** Image offer. */
    offer(value: string): az_sig_image_definition_create_command_builder {
        this.setFlag("--offer", value);
        return this;
    }

    /** The type of the OS that is included in the disk if creating a VM from user-image or a specialized VHD. */
    osType(value: 'Linux' | 'Windows'): az_sig_image_definition_create_command_builder {
        this.setFlag("--os-type", value);
        return this;
    }

    /** Image publisher. */
    publisher(value: string): az_sig_image_definition_create_command_builder {
        this.setFlag("--publisher", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sig_image_definition_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Image sku. */
    sku(value: string): az_sig_image_definition_create_command_builder {
        this.setFlag("--sku", value);
        return this;
    }

    /** The description of the gallery image definition. */
    description(value: string): az_sig_image_definition_create_command_builder {
        this.setFlag("--description", value);
        return this;
    }

    /** Disk types which would not work with the image, e.g., Standard_LRS. */
    disallowedDiskTypes(value: string): az_sig_image_definition_create_command_builder {
        this.setFlag("--disallowed-disk-types", value);
        return this;
    }

    /** The end of life date, e.g. '2020-12-31'. */
    endOfLifeDate(value: string): az_sig_image_definition_create_command_builder {
        this.setFlag("--end-of-life-date", value);
        return this;
    }

    /** The Eula agreement for the gallery image. */
    eula(value: string): az_sig_image_definition_create_command_builder {
        this.setFlag("--eula", value);
        return this;
    }

    /** A list of gallery image features. E.g. "IsSecureBootSupported=true IsMeasuredBootSupported=false". */
    features(value: string): az_sig_image_definition_create_command_builder {
        this.setFlag("--features", value);
        return this;
    }

    /** The hypervisor generation of the Virtual Machine. Applicable to OS disks only. */
    hyperVGeneration(value: 'V1' | 'V2'): az_sig_image_definition_create_command_builder {
        this.setFlag("--hyper-v-generation", value);
        return this;
    }

    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_sig_image_definition_create_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** Maximum cpu cores. */
    maximumCpuCore(value: string): az_sig_image_definition_create_command_builder {
        this.setFlag("--maximum-cpu-core", value);
        return this;
    }

    /** Maximum memory in MB. */
    maximumMemory(value: string): az_sig_image_definition_create_command_builder {
        this.setFlag("--maximum-memory", value);
        return this;
    }

    /** Minimum cpu cores. */
    minimumCpuCore(value: string): az_sig_image_definition_create_command_builder {
        this.setFlag("--minimum-cpu-core", value);
        return this;
    }

    /** Minimum memory in MB. */
    minimumMemory(value: string): az_sig_image_definition_create_command_builder {
        this.setFlag("--minimum-memory", value);
        return this;
    }

    /** This property allows the user to specify whether the virtual machines created under this image are 'Generalized' or 'Specialized'. */
    osState(value: 'Generalized' | 'Specialized'): az_sig_image_definition_create_command_builder {
        this.setFlag("--os-state", value);
        return this;
    }

    /** Plan name. */
    planName(value: string): az_sig_image_definition_create_command_builder {
        this.setFlag("--plan-name", value);
        return this;
    }

    /** Plan product. */
    planProduct(value: string): az_sig_image_definition_create_command_builder {
        this.setFlag("--plan-product", value);
        return this;
    }

    /** Plan publisher. */
    planPublisher(value: string): az_sig_image_definition_create_command_builder {
        this.setFlag("--plan-publisher", value);
        return this;
    }

    /** The privacy statement uri. */
    privacyStatementUri(value: string): az_sig_image_definition_create_command_builder {
        this.setFlag("--privacy-statement-uri", value);
        return this;
    }

    /** The release note uri. */
    releaseNoteUri(value: string): az_sig_image_definition_create_command_builder {
        this.setFlag("--release-note-uri", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sig_image_definition_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_sig_image_definition_create_command_builder {
        this.setFlag("--tags", value);
        return this;
    }
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
class az_sig_image_definition_delete_command_builder extends CommandBuilder<az_sig_image_definition_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** Gallery image definition. */
    galleryImageDefinition(value: string): az_sig_image_definition_delete_command_builder {
        this.setFlag("--gallery-image-definition", value);
        return this;
    }

    /** Gallery name. */
    galleryName(value: string): az_sig_image_definition_delete_command_builder {
        this.setFlag("--gallery-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sig_image_definition_delete_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sig_image_definition_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sig_image_definition_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * List gallery image definitions in a gallery.
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
class az_sig_image_definition_list_command_builder extends CommandBuilder<az_sig_image_definition_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, galleryName: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.galleryName(galleryName)
        this.resourceGroup(resourceGroup)
    }

    /** Gallery name. */
    galleryName(value: string): az_sig_image_definition_list_command_builder {
        this.setFlag("--gallery-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sig_image_definition_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_sig_image_definition_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sig_image_definition_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}

/**
 * Retrieves information about a gallery image definition.
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
class az_sig_image_definition_show_command_builder extends CommandBuilder<az_sig_image_definition_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** Gallery image definition. */
    galleryImageDefinition(value: string): az_sig_image_definition_show_command_builder {
        this.setFlag("--gallery-image-definition", value);
        return this;
    }

    /** Gallery name. */
    galleryName(value: string): az_sig_image_definition_show_command_builder {
        this.setFlag("--gallery-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sig_image_definition_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_sig_image_definition_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sig_image_definition_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sig_image_definition_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_sig_image_definition_update_command_builder extends CommandBuilder<az_sig_image_definition_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, galleryImageDefinition: string, galleryName: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.galleryImageDefinition(galleryImageDefinition)
        this.galleryName(galleryName)
        this.resourceGroup(resourceGroup)
    }

    /** Gallery image definition. */
    galleryImageDefinition(value: string): az_sig_image_definition_update_command_builder {
        this.setFlag("--gallery-image-definition", value);
        return this;
    }

    /** Gallery name. */
    galleryName(value: string): az_sig_image_definition_update_command_builder {
        this.setFlag("--gallery-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sig_image_definition_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_sig_image_definition_update_command_builder {
        this.setFlag("--add", value);
        return this;
    }

    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_sig_image_definition_update_command_builder {
        this.setFlag("--force-string", value);
        return this;
    }

    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_sig_image_definition_update_command_builder {
        this.setFlag("--remove", value);
        return this;
    }

    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_sig_image_definition_update_command_builder {
        this.setFlag("--set", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sig_image_definition_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_sig_image_version_create_command_builder extends CommandBuilder<az_sig_image_version_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, galleryImageDefinition: string, galleryImageVersion: string, galleryName: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.galleryImageDefinition(galleryImageDefinition)
        this.galleryImageVersion(galleryImageVersion)
        this.galleryName(galleryName)
        this.resourceGroup(resourceGroup)
    }

    /** Gallery image definition. */
    galleryImageDefinition(value: string): az_sig_image_version_create_command_builder {
        this.setFlag("--gallery-image-definition", value);
        return this;
    }

    /** Gallery image version in semantic version pattern. The allowed characters are digit and period. Digits must be within the range of a 32-bit integer, e.g. `<MajorVersion>.<MinorVersion>.<Patch>`. */
    galleryImageVersion(value: string): az_sig_image_version_create_command_builder {
        this.setFlag("--gallery-image-version", value);
        return this;
    }

    /** Gallery name. */
    galleryName(value: string): az_sig_image_version_create_command_builder {
        this.setFlag("--gallery-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sig_image_version_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Logical unit numbers (space-delimited) of data disk snapshots. */
    dataSnapshotLuns(value: string): az_sig_image_version_create_command_builder {
        this.setFlag("--data-snapshot-luns", value);
        return this;
    }

    /** Names or IDs (space-delimited) of data disk snapshots. */
    dataSnapshots(value: string): az_sig_image_version_create_command_builder {
        this.setFlag("--data-snapshots", value);
        return this;
    }

    /** The end of life date, e.g. '2020-12-31'. */
    endOfLifeDate(value: string): az_sig_image_version_create_command_builder {
        this.setFlag("--end-of-life-date", value);
        return this;
    }

    /** The flag means that if it is set to true, people deploying VMs with version omitted will not use this version. */
    excludeFromLatest(value: boolean): az_sig_image_version_create_command_builder {
        this.setFlag("--exclude-from-latest", value.toString());
        return this;
    }

    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_sig_image_version_create_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** Image name(if in the same resource group) or resource id. */
    managedImage(value: string): az_sig_image_version_create_command_builder {
        this.setFlag("--managed-image", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_sig_image_version_create_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Name or ID of OS disk snapshot. */
    osSnapshot(value: string): az_sig_image_version_create_command_builder {
        this.setFlag("--os-snapshot", value);
        return this;
    }

    /** The default number of replicas to be created per region. To set regional replication counts, use --target-regions. */
    replicaCount(value: string): az_sig_image_version_create_command_builder {
        this.setFlag("--replica-count", value);
        return this;
    }

    /** The default storage account type to be used per region. To set regional storage account types, use --target-regions. */
    storageAccountType(value: 'Premium_LRS' | 'Standard_LRS' | 'Standard_ZRS'): az_sig_image_version_create_command_builder {
        this.setFlag("--storage-account-type", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sig_image_version_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_sig_image_version_create_command_builder {
        this.setFlag("--tags", value);
        return this;
    }

    /** Space-separated list of customer managed keys for encrypting the OS and data disks in the gallery artifact for each region. Format for each region: `<os_des>,<lun1>,<lun1_des>,<lun2>,<lun2_des>`. Use "null" as a placeholder. */
    targetRegionEncryption(value: string): az_sig_image_version_create_command_builder {
        this.setFlag("--target-region-encryption", value);
        return this;
    }

    /** Space-separated list of regions and their replica counts. Use `<region>[=<replica count>][=<storage account type>]` to optionally set the replica count and/or storage account type for each region. If a replica count is not specified, the default replica count will be used. If a storage account type is not specified, the default storage account type will be used. */
    targetRegions(value: string): az_sig_image_version_create_command_builder {
        this.setFlag("--target-regions", value);
        return this;
    }
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
class az_sig_image_version_delete_command_builder extends CommandBuilder<az_sig_image_version_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, galleryImageDefinition: string, galleryImageVersion: string, galleryName: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.galleryImageDefinition(galleryImageDefinition)
        this.galleryImageVersion(galleryImageVersion)
        this.galleryName(galleryName)
        this.resourceGroup(resourceGroup)
    }

    /** Gallery image definition. */
    galleryImageDefinition(value: string): az_sig_image_version_delete_command_builder {
        this.setFlag("--gallery-image-definition", value);
        return this;
    }

    /** Gallery image version in semantic version pattern. The allowed characters are digit and period. Digits must be within the range of a 32-bit integer, e.g. `<MajorVersion>.<MinorVersion>.<Patch>`. */
    galleryImageVersion(value: string): az_sig_image_version_delete_command_builder {
        this.setFlag("--gallery-image-version", value);
        return this;
    }

    /** Gallery name. */
    galleryName(value: string): az_sig_image_version_delete_command_builder {
        this.setFlag("--gallery-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sig_image_version_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sig_image_version_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_sig_image_version_list_command_builder extends CommandBuilder<az_sig_image_version_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, galleryImageDefinition: string, galleryName: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.galleryImageDefinition(galleryImageDefinition)
        this.galleryName(galleryName)
        this.resourceGroup(resourceGroup)
    }

    /** Gallery image definition. */
    galleryImageDefinition(value: string): az_sig_image_version_list_command_builder {
        this.setFlag("--gallery-image-definition", value);
        return this;
    }

    /** Gallery name. */
    galleryName(value: string): az_sig_image_version_list_command_builder {
        this.setFlag("--gallery-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sig_image_version_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_sig_image_version_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sig_image_version_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_sig_image_version_show_command_builder extends CommandBuilder<az_sig_image_version_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, galleryImageDefinition: string, galleryImageVersion: string, galleryName: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.galleryImageDefinition(galleryImageDefinition)
        this.galleryImageVersion(galleryImageVersion)
        this.galleryName(galleryName)
        this.resourceGroup(resourceGroup)
    }

    /** Gallery image definition. */
    galleryImageDefinition(value: string): az_sig_image_version_show_command_builder {
        this.setFlag("--gallery-image-definition", value);
        return this;
    }

    /** Gallery image version in semantic version pattern. The allowed characters are digit and period. Digits must be within the range of a 32-bit integer, e.g. `<MajorVersion>.<MinorVersion>.<Patch>`. */
    galleryImageVersion(value: string): az_sig_image_version_show_command_builder {
        this.setFlag("--gallery-image-version", value);
        return this;
    }

    /** Gallery name. */
    galleryName(value: string): az_sig_image_version_show_command_builder {
        this.setFlag("--gallery-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sig_image_version_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The expand expression to apply on the operation, e.g. 'ReplicationStatus'. */
    expand(value: string): az_sig_image_version_show_command_builder {
        this.setFlag("--expand", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_sig_image_version_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sig_image_version_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_sig_image_version_update_command_builder extends CommandBuilder<az_sig_image_version_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, galleryImageDefinition: string, galleryImageVersion: string, galleryName: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.galleryImageDefinition(galleryImageDefinition)
        this.galleryImageVersion(galleryImageVersion)
        this.galleryName(galleryName)
        this.resourceGroup(resourceGroup)
    }

    /** Gallery image definition. */
    galleryImageDefinition(value: string): az_sig_image_version_update_command_builder {
        this.setFlag("--gallery-image-definition", value);
        return this;
    }

    /** Gallery image version in semantic version pattern. The allowed characters are digit and period. Digits must be within the range of a 32-bit integer, e.g. `<MajorVersion>.<MinorVersion>.<Patch>`. */
    galleryImageVersion(value: string): az_sig_image_version_update_command_builder {
        this.setFlag("--gallery-image-version", value);
        return this;
    }

    /** Gallery name. */
    galleryName(value: string): az_sig_image_version_update_command_builder {
        this.setFlag("--gallery-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sig_image_version_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_sig_image_version_update_command_builder {
        this.setFlag("--add", value);
        return this;
    }

    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_sig_image_version_update_command_builder {
        this.setFlag("--force-string", value);
        return this;
    }

    /** Do not wait for the long-running operation to finish. */
    noWait(value: string): az_sig_image_version_update_command_builder {
        this.setFlag("--no-wait", value);
        return this;
    }

    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_sig_image_version_update_command_builder {
        this.setFlag("--remove", value);
        return this;
    }

    /** The default number of replicas to be created per region. To set regional replication counts, use --target-regions. */
    replicaCount(value: string): az_sig_image_version_update_command_builder {
        this.setFlag("--replica-count", value);
        return this;
    }

    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_sig_image_version_update_command_builder {
        this.setFlag("--set", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sig_image_version_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated list of regions and their replica counts. Use `<region>[=<replica count>][=<storage account type>]` to optionally set the replica count and/or storage account type for each region. If a replica count is not specified, the default replica count will be used. If a storage account type is not specified, the default storage account type will be used. */
    targetRegions(value: string): az_sig_image_version_update_command_builder {
        this.setFlag("--target-regions", value);
        return this;
    }
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
class az_sig_image_version_wait_command_builder extends CommandBuilder<az_sig_image_version_wait_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, galleryImageDefinition: string, galleryImageVersion: string, galleryName: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.galleryImageDefinition(galleryImageDefinition)
        this.galleryImageVersion(galleryImageVersion)
        this.galleryName(galleryName)
        this.resourceGroup(resourceGroup)
    }

    /** Gallery image definition. */
    galleryImageDefinition(value: string): az_sig_image_version_wait_command_builder {
        this.setFlag("--gallery-image-definition", value);
        return this;
    }

    /** Gallery image version in semantic version pattern. The allowed characters are digit and period. Digits must be within the range of a 32-bit integer, e.g. `<MajorVersion>.<MinorVersion>.<Patch>`. */
    galleryImageVersion(value: string): az_sig_image_version_wait_command_builder {
        this.setFlag("--gallery-image-version", value);
        return this;
    }

    /** Gallery name. */
    galleryName(value: string): az_sig_image_version_wait_command_builder {
        this.setFlag("--gallery-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sig_image_version_wait_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    created(value: string): az_sig_image_version_wait_command_builder {
        this.setFlag("--created", value);
        return this;
    }

    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    custom(value: string): az_sig_image_version_wait_command_builder {
        this.setFlag("--custom", value);
        return this;
    }

    /** Wait until deleted. */
    deleted(value: string): az_sig_image_version_wait_command_builder {
        this.setFlag("--deleted", value);
        return this;
    }

    /** Wait until the resource exists. */
    exists(value: string): az_sig_image_version_wait_command_builder {
        this.setFlag("--exists", value);
        return this;
    }

    /** The expand expression to apply on the operation. */
    expand(value: string): az_sig_image_version_wait_command_builder {
        this.setFlag("--expand", value);
        return this;
    }

    /** Polling interval in seconds. */
    interval(value: string): az_sig_image_version_wait_command_builder {
        this.setFlag("--interval", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sig_image_version_wait_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Maximum wait in seconds. */
    timeout(value: string): az_sig_image_version_wait_command_builder {
        this.setFlag("--timeout", value);
        return this;
    }

    /** Wait until updated with provisioningState at 'Succeeded'. */
    updated(value: string): az_sig_image_version_wait_command_builder {
        this.setFlag("--updated", value);
        return this;
    }
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
class az_sig_create_command_builder extends CommandBuilder<az_sig_create_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, galleryName: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.galleryName(galleryName)
        this.resourceGroup(resourceGroup)
    }

    /** Gallery name. */
    galleryName(value: string): az_sig_create_command_builder {
        this.setFlag("--gallery-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sig_create_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** The description of the gallery. */
    description(value: string): az_sig_create_command_builder {
        this.setFlag("--description", value);
        return this;
    }

    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    location(value: string): az_sig_create_command_builder {
        this.setFlag("--location", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sig_create_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }

    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    tags(value: string): az_sig_create_command_builder {
        this.setFlag("--tags", value);
        return this;
    }
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
class az_sig_delete_command_builder extends CommandBuilder<az_sig_delete_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, galleryName: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.galleryName(galleryName)
        this.resourceGroup(resourceGroup)
    }

    /** Gallery name. */
    galleryName(value: string): az_sig_delete_command_builder {
        this.setFlag("--gallery-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sig_delete_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sig_delete_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_sig_list_command_builder extends CommandBuilder<az_sig_list_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_sig_list_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sig_list_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sig_list_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_sig_show_command_builder extends CommandBuilder<az_sig_show_command_result> {
    constructor(commandPath: string, resultDataTypeName: string) {
        super(commandPath, resultDataTypeName);
    }

    /** Gallery name. */
    galleryName(value: string): az_sig_show_command_builder {
        this.setFlag("--gallery-name", value);
        return this;
    }

    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    ids(value: string): az_sig_show_command_builder {
        this.setFlag("--ids", value);
        return this;
    }

    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    queryExamples(value: string): az_sig_show_command_builder {
        this.setFlag("--query-examples", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sig_show_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sig_show_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
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
class az_sig_update_command_builder extends CommandBuilder<az_sig_update_command_result> {
    constructor(commandPath: string, resultDataTypeName: string, galleryName: string, resourceGroup: string) {
        super(commandPath, resultDataTypeName);
        this.galleryName(galleryName)
        this.resourceGroup(resourceGroup)
    }

    /** Gallery name. */
    galleryName(value: string): az_sig_update_command_builder {
        this.setFlag("--gallery-name", value);
        return this;
    }

    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    resourceGroup(value: string): az_sig_update_command_builder {
        this.setFlag("--resource-group", value);
        return this;
    }

    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    add(value: string): az_sig_update_command_builder {
        this.setFlag("--add", value);
        return this;
    }

    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    forceString(value: string): az_sig_update_command_builder {
        this.setFlag("--force-string", value);
        return this;
    }

    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    remove(value: string): az_sig_update_command_builder {
        this.setFlag("--remove", value);
        return this;
    }

    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    set(value: string): az_sig_update_command_builder {
        this.setFlag("--set", value);
        return this;
    }

    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    subscription(value: string): az_sig_update_command_builder {
        this.setFlag("--subscription", value);
        return this;
    }
}
