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
exports.az_vm = exports.az_vm_user = exports.az_vm_unmanaged_disk = exports.az_vm_secret = exports.az_vm_run_command = exports.az_vm_nic = exports.az_vm_monitor = exports.az_vm_monitor_metrics = exports.az_vm_monitor_log = exports.az_vm_image = exports.az_vm_image_terms = exports.az_vm_identity = exports.az_vm_host = exports.az_vm_host_group = exports.az_vm_extension = exports.az_vm_extension_image = exports.az_vm_encryption = exports.az_vm_disk = exports.az_vm_diagnostics = exports.az_vm_boot_diagnostics = exports.az_vm_availability_set = void 0;
var base_1 = require("../base");
/** Group resources into availability sets. */
var az_vm_availability_set = /** @class */ (function () {
    function az_vm_availability_set() {
    }
    /**
     * Convert an Azure Availability Set to contain VMs with managed disks.
     *
     * Syntax:
     * ```
     * az vm availability-set convert [--ids]
     *                                [--name]
     *                                [--resource-group]
     *                                [--subscription]
     * ```
     */
    az_vm_availability_set.convert = function () {
        return new az_vm_availability_set_convert_command_builder("az vm availability-set convert", 'az_vm_availability_set_convert_command_result');
    };
    /**
     * Create an Azure Availability Set.
     *
     * Syntax:
     * ```
     * az vm availability-set create --name
     *                               --resource-group
     *                               [--location]
     *                               [--no-wait]
     *                               [--platform-fault-domain-count]
     *                               [--platform-update-domain-count]
     *                               [--ppg]
     *                               [--subscription]
     *                               [--tags]
     *                               [--unmanaged]
     *                               [--validate]
     * ```
     *
     * @param {string} name Name of the availability set.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_vm_availability_set.create = function (name, resourceGroup) {
        return new az_vm_availability_set_create_command_builder("az vm availability-set create", 'az_vm_availability_set_create_command_result', name, resourceGroup);
    };
    /**
     * Delete an availability set.
     *
     * Syntax:
     * ```
     * az vm availability-set delete [--ids]
     *                               [--name]
     *                               [--resource-group]
     *                               [--subscription]
     * ```
     */
    az_vm_availability_set["delete"] = function () {
        return new az_vm_availability_set_delete_command_builder("az vm availability-set delete", 'az_vm_availability_set_delete_command_result');
    };
    /**
     * List availability sets.
     *
     * Syntax:
     * ```
     * az vm availability-set list [--query-examples]
     *                             [--resource-group]
     *                             [--subscription]
     * ```
     */
    az_vm_availability_set.list = function () {
        return new az_vm_availability_set_list_command_builder("az vm availability-set list", 'az_vm_availability_set_list_command_result');
    };
    /**
     * List VM sizes for an availability set.
     *
     * Syntax:
     * ```
     * az vm availability-set list-sizes [--ids]
     *                                   [--name]
     *                                   [--resource-group]
     *                                   [--subscription]
     * ```
     */
    az_vm_availability_set.list_sizes = function () {
        return new az_vm_availability_set_list_sizes_command_builder("az vm availability-set list-sizes", 'az_vm_availability_set_list_sizes_command_result');
    };
    /**
     * Get information for an availability set.
     *
     * Syntax:
     * ```
     * az vm availability-set show [--ids]
     *                             [--name]
     *                             [--query-examples]
     *                             [--resource-group]
     *                             [--subscription]
     * ```
     */
    az_vm_availability_set.show = function () {
        return new az_vm_availability_set_show_command_builder("az vm availability-set show", 'az_vm_availability_set_show_command_result');
    };
    /**
     * Update an Azure Availability Set.
     *
     * Syntax:
     * ```
     * az vm availability-set update [--add]
     *                               [--force-string]
     *                               [--ids]
     *                               [--name]
     *                               [--ppg]
     *                               [--remove]
     *                               [--resource-group]
     *                               [--set]
     *                               [--subscription]
     * ```
     */
    az_vm_availability_set.update = function () {
        return new az_vm_availability_set_update_command_builder("az vm availability-set update", 'az_vm_availability_set_update_command_result');
    };
    return az_vm_availability_set;
}());
exports.az_vm_availability_set = az_vm_availability_set;
/** Troubleshoot the startup of an Azure Virtual Machine. */
var az_vm_boot_diagnostics = /** @class */ (function () {
    function az_vm_boot_diagnostics() {
    }
    /**
     * Disable the boot diagnostics on a VM.
     *
     * Syntax:
     * ```
     * az vm boot-diagnostics disable [--ids]
     *                                [--name]
     *                                [--resource-group]
     *                                [--subscription]
     * ```
     */
    az_vm_boot_diagnostics.disable = function () {
        return new az_vm_boot_diagnostics_disable_command_builder("az vm boot-diagnostics disable", 'az_vm_boot_diagnostics_disable_command_result');
    };
    /**
     * Enable the boot diagnostics on a VM.
     *
     * Syntax:
     * ```
     * az vm boot-diagnostics enable [--ids]
     *                               [--name]
     *                               [--resource-group]
     *                               [--storage]
     *                               [--subscription]
     * ```
     */
    az_vm_boot_diagnostics.enable = function () {
        return new az_vm_boot_diagnostics_enable_command_builder("az vm boot-diagnostics enable", 'az_vm_boot_diagnostics_enable_command_result');
    };
    /**
     * Get the boot diagnostics log from a VM.
     *
     * Syntax:
     * ```
     * az vm boot-diagnostics get-boot-log [--ids]
     *                                     [--name]
     *                                     [--resource-group]
     *                                     [--subscription]
     * ```
     */
    az_vm_boot_diagnostics.get_boot_log = function () {
        return new az_vm_boot_diagnostics_get_boot_log_command_builder("az vm boot-diagnostics get-boot-log", 'az_vm_boot_diagnostics_get_boot_log_command_result');
    };
    /**
     * Get SAS URIs for a virtual machine's boot diagnostic logs.
     *
     * Syntax:
     * ```
     * az vm boot-diagnostics get-boot-log-uris [--expire]
     *                                          [--ids]
     *                                          [--name]
     *                                          [--resource-group]
     *                                          [--subscription]
     * ```
     */
    az_vm_boot_diagnostics.get_boot_log_uris = function () {
        return new az_vm_boot_diagnostics_get_boot_log_uris_command_builder("az vm boot-diagnostics get-boot-log-uris", 'az_vm_boot_diagnostics_get_boot_log_uris_command_result');
    };
    return az_vm_boot_diagnostics;
}());
exports.az_vm_boot_diagnostics = az_vm_boot_diagnostics;
/** Configure the Azure Virtual Machine diagnostics extension. */
var az_vm_diagnostics = /** @class */ (function () {
    function az_vm_diagnostics() {
    }
    /**
     * Get the default configuration settings for a VM.
     *
     * Syntax:
     * ```
     * az vm diagnostics get-default-config [--is-windows-os]
     *                                      [--subscription]
     * ```
     */
    az_vm_diagnostics.get_default_config = function () {
        return new az_vm_diagnostics_get_default_config_command_builder("az vm diagnostics get-default-config", 'az_vm_diagnostics_get_default_config_command_result');
    };
    /**
     * Configure the Azure VM diagnostics extension.
     *
     * Syntax:
     * ```
     * az vm diagnostics set --settings
     *                       [--ids]
     *                       [--no-auto-upgrade {false, true}]
     *                       [--protected-settings]
     *                       [--resource-group]
     *                       [--subscription]
     *                       [--version]
     *                       [--vm-name]
     * ```
     *
     * @param {string} settings Json string or a file path, which defines data to be collected.
     */
    az_vm_diagnostics.set = function (settings) {
        return new az_vm_diagnostics_set_command_builder("az vm diagnostics set", 'az_vm_diagnostics_set_command_result', settings);
    };
    return az_vm_diagnostics;
}());
exports.az_vm_diagnostics = az_vm_diagnostics;
/** Manage the managed data disks attached to a VM. */
var az_vm_disk = /** @class */ (function () {
    function az_vm_disk() {
    }
    /**
     * Attach a managed persistent disk to a VM.
     *
     * Syntax:
     * ```
     * az vm disk attach --vm-name
     *                   [--caching {None, ReadOnly, ReadWrite}]
     *                   [--enable-write-accelerator]
     *                   [--ids]
     *                   [--lun]
     *                   [--name]
     *                   [--new]
     *                   [--resource-group]
     *                   [--size-gb]
     *                   [--sku {Premium_LRS, StandardSSD_LRS, Standard_LRS, UltraSSD_LRS}]
     *                   [--subscription]
     * ```
     *
     * @param {string} vmName The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`.
     */
    az_vm_disk.attach = function (vmName) {
        return new az_vm_disk_attach_command_builder("az vm disk attach", 'az_vm_disk_attach_command_result', vmName);
    };
    /**
     * Detach a managed disk from a VM.
     *
     * Syntax:
     * ```
     * az vm disk detach --name
     *                   --resource-group
     *                   --vm-name
     *                   [--subscription]
     * ```
     *
     * @param {string} name The data disk name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} vmName The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`.
     */
    az_vm_disk.detach = function (name, resourceGroup, vmName) {
        return new az_vm_disk_detach_command_builder("az vm disk detach", 'az_vm_disk_detach_command_result', name, resourceGroup, vmName);
    };
    return az_vm_disk;
}());
exports.az_vm_disk = az_vm_disk;
/** Manage encryption of VM disks. */
var az_vm_encryption = /** @class */ (function () {
    function az_vm_encryption() {
    }
    /**
     * Disable disk encryption on the OS disk and/or data disks. Decrypt mounted disks.
     *
     * Syntax:
     * ```
     * az vm encryption disable [--force]
     *                          [--ids]
     *                          [--name]
     *                          [--resource-group]
     *                          [--subscription]
     *                          [--volume-type {ALL, DATA, OS}]
     * ```
     */
    az_vm_encryption.disable = function () {
        return new az_vm_encryption_disable_command_builder("az vm encryption disable", 'az_vm_encryption_disable_command_result');
    };
    /**
     * Enable disk encryption on the OS disk and/or data disks. Encrypt mounted disks.
     *
     * Syntax:
     * ```
     * az vm encryption enable --disk-encryption-keyvault
     *                         [--aad-client-cert-thumbprint]
     *                         [--aad-client-id]
     *                         [--aad-client-secret]
     *                         [--encrypt-format-all]
     *                         [--force]
     *                         [--ids]
     *                         [--key-encryption-algorithm]
     *                         [--key-encryption-key]
     *                         [--key-encryption-keyvault]
     *                         [--name]
     *                         [--resource-group]
     *                         [--subscription]
     *                         [--volume-type {ALL, DATA, OS}]
     * ```
     *
     * @param {string} diskEncryptionKeyvault Name or ID of the key vault where the generated encryption key will be placed.
     */
    az_vm_encryption.enable = function (diskEncryptionKeyvault) {
        return new az_vm_encryption_enable_command_builder("az vm encryption enable", 'az_vm_encryption_enable_command_result', diskEncryptionKeyvault);
    };
    /**
     * Show encryption status.
     *
     * Syntax:
     * ```
     * az vm encryption show [--ids]
     *                       [--name]
     *                       [--query-examples]
     *                       [--resource-group]
     *                       [--subscription]
     * ```
     */
    az_vm_encryption.show = function () {
        return new az_vm_encryption_show_command_builder("az vm encryption show", 'az_vm_encryption_show_command_result');
    };
    return az_vm_encryption;
}());
exports.az_vm_encryption = az_vm_encryption;
/** Find the available VM extensions for a subscription and region. */
var az_vm_extension_image = /** @class */ (function () {
    function az_vm_extension_image() {
    }
    /**
     * List the information on available extensions.
     *
     * Syntax:
     * ```
     * az vm extension image list [--latest]
     *                            [--location]
     *                            [--name]
     *                            [--publisher]
     *                            [--query-examples]
     *                            [--subscription]
     *                            [--version]
     * ```
     */
    az_vm_extension_image.list = function () {
        return new az_vm_extension_image_list_command_builder("az vm extension image list", 'az_vm_extension_image_list_command_result');
    };
    /**
     * List the names of available extensions.
     *
     * Syntax:
     * ```
     * az vm extension image list-names --location
     *                                  --publisher
     *                                  [--subscription]
     * ```
     *
     * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
     * @param {string} publisher Image publisher name.
     */
    az_vm_extension_image.list_names = function (location, publisher) {
        return new az_vm_extension_image_list_names_command_builder("az vm extension image list-names", 'az_vm_extension_image_list_names_command_result', location, publisher);
    };
    /**
     * List the versions for available extensions.
     *
     * Syntax:
     * ```
     * az vm extension image list-versions --location
     *                                     --name
     *                                     --publisher
     *                                     [--filter]
     *                                     [--orderby]
     *                                     [--subscription]
     *                                     [--top]
     * ```
     *
     * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
     * @param {string} name Name of the extension.
     * @param {string} publisher Image publisher name.
     */
    az_vm_extension_image.list_versions = function (location, name, publisher) {
        return new az_vm_extension_image_list_versions_command_builder("az vm extension image list-versions", 'az_vm_extension_image_list_versions_command_result', location, name, publisher);
    };
    /**
     * Display information for an extension.
     *
     * Syntax:
     * ```
     * az vm extension image show --location
     *                            --name
     *                            --publisher
     *                            --version
     *                            [--query-examples]
     *                            [--subscription]
     * ```
     *
     * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
     * @param {string} name Name of the extension.
     * @param {string} publisher Image publisher name.
     * @param {string} version Extension version.
     */
    az_vm_extension_image.show = function (location, name, publisher, version) {
        return new az_vm_extension_image_show_command_builder("az vm extension image show", 'az_vm_extension_image_show_command_result', location, name, publisher, version);
    };
    return az_vm_extension_image;
}());
exports.az_vm_extension_image = az_vm_extension_image;
/** Manage extensions on VMs. */
var az_vm_extension = /** @class */ (function () {
    function az_vm_extension() {
    }
    /**
     * Remove an extension attached to a VM.
     *
     * Syntax:
     * ```
     * az vm extension delete [--ids]
     *                        [--name]
     *                        [--no-wait]
     *                        [--resource-group]
     *                        [--subscription]
     *                        [--vm-name]
     * ```
     */
    az_vm_extension["delete"] = function () {
        return new az_vm_extension_delete_command_builder("az vm extension delete", 'az_vm_extension_delete_command_result');
    };
    /**
     * List the extensions attached to a VM.
     *
     * Syntax:
     * ```
     * az vm extension list --resource-group
     *                      --vm-name
     *                      [--query-examples]
     *                      [--subscription]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} vmName The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`.
     */
    az_vm_extension.list = function (resourceGroup, vmName) {
        return new az_vm_extension_list_command_builder("az vm extension list", 'az_vm_extension_list_command_result', resourceGroup, vmName);
    };
    /**
     * Set extensions for a VM.
     *
     * Syntax:
     * ```
     * az vm extension set --name
     *                     --publisher
     *                     [--extension-instance-name]
     *                     [--force-update]
     *                     [--ids]
     *                     [--no-auto-upgrade {false, true}]
     *                     [--no-wait]
     *                     [--protected-settings]
     *                     [--resource-group]
     *                     [--settings]
     *                     [--subscription]
     *                     [--version]
     *                     [--vm-name]
     * ```
     *
     * @param {string} name Name of the extension.
     * @param {string} publisher The name of the extension publisher.
     */
    az_vm_extension.set = function (name, publisher) {
        return new az_vm_extension_set_command_builder("az vm extension set", 'az_vm_extension_set_command_result', name, publisher);
    };
    /**
     * Display information about extensions attached to a VM.
     *
     * Syntax:
     * ```
     * az vm extension show [--expand]
     *                      [--ids]
     *                      [--name]
     *                      [--query-examples]
     *                      [--resource-group]
     *                      [--subscription]
     *                      [--vm-name]
     * ```
     */
    az_vm_extension.show = function () {
        return new az_vm_extension_show_command_builder("az vm extension show", 'az_vm_extension_show_command_result');
    };
    /**
     * Place the CLI in a waiting state until a condition of a virtual machine extension is met.
     *
     * Syntax:
     * ```
     * az vm extension wait [--created]
     *                      [--custom]
     *                      [--deleted]
     *                      [--exists]
     *                      [--expand]
     *                      [--ids]
     *                      [--interval]
     *                      [--name]
     *                      [--resource-group]
     *                      [--subscription]
     *                      [--timeout]
     *                      [--updated]
     *                      [--vm-name]
     * ```
     */
    az_vm_extension.wait = function () {
        return new az_vm_extension_wait_command_builder("az vm extension wait", 'az_vm_extension_wait_command_result');
    };
    return az_vm_extension;
}());
exports.az_vm_extension = az_vm_extension;
/** Manage Dedicated Host Groups. */
var az_vm_host_group = /** @class */ (function () {
    function az_vm_host_group() {
    }
    /**
     * Create a dedicated host group.
     *
     * Syntax:
     * ```
     * az vm host group create --name
     *                         --resource-group
     *                         [--automatic-placement {false, true}]
     *                         [--location]
     *                         [--platform-fault-domain-count]
     *                         [--subscription]
     *                         [--tags]
     *                         [--zone {1, 2, 3}]
     * ```
     *
     * @param {string} name Name of the Dedicated Host Group.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_vm_host_group.create = function (name, resourceGroup) {
        return new az_vm_host_group_create_command_builder("az vm host group create", 'az_vm_host_group_create_command_result', name, resourceGroup);
    };
    /**
     * Delete a dedicated host group.
     *
     * Syntax:
     * ```
     * az vm host group delete [--ids]
     *                         [--name]
     *                         [--resource-group]
     *                         [--subscription]
     *                         [--yes]
     * ```
     */
    az_vm_host_group["delete"] = function () {
        return new az_vm_host_group_delete_command_builder("az vm host group delete", 'az_vm_host_group_delete_command_result');
    };
    /**
     * Get instance view of a dedicated host group.
     *
     * Syntax:
     * ```
     * az vm host group get-instance-view [--ids]
     *                                    [--name]
     *                                    [--resource-group]
     *                                    [--subscription]
     * ```
     */
    az_vm_host_group.get_instance_view = function () {
        return new az_vm_host_group_get_instance_view_command_builder("az vm host group get-instance-view", 'az_vm_host_group_get_instance_view_command_result');
    };
    /**
     * List dedicated host groups.
     *
     * Syntax:
     * ```
     * az vm host group list [--query-examples]
     *                       [--resource-group]
     *                       [--subscription]
     * ```
     */
    az_vm_host_group.list = function () {
        return new az_vm_host_group_list_command_builder("az vm host group list", 'az_vm_host_group_list_command_result');
    };
    /**
     * Get the details of a dedicated host group.
     *
     * Syntax:
     * ```
     * az vm host group show [--ids]
     *                       [--name]
     *                       [--query-examples]
     *                       [--resource-group]
     *                       [--subscription]
     * ```
     */
    az_vm_host_group.show = function () {
        return new az_vm_host_group_show_command_builder("az vm host group show", 'az_vm_host_group_show_command_result');
    };
    /**
     * Update a dedicated host group.
     *
     * Syntax:
     * ```
     * az vm host group update [--add]
     *                         [--force-string]
     *                         [--ids]
     *                         [--name]
     *                         [--remove]
     *                         [--resource-group]
     *                         [--set]
     *                         [--subscription]
     * ```
     */
    az_vm_host_group.update = function () {
        return new az_vm_host_group_update_command_builder("az vm host group update", 'az_vm_host_group_update_command_result');
    };
    return az_vm_host_group;
}());
exports.az_vm_host_group = az_vm_host_group;
/** Manage Dedicated Hosts for Virtual Machines. */
var az_vm_host = /** @class */ (function () {
    function az_vm_host() {
    }
    /**
     * Create a dedicated host.
     *
     * Syntax:
     * ```
     * az vm host create --host-group
     *                   --name
     *                   --resource-group
     *                   --sku {DSv3-Type1, ESv3-Type1, FSv2-Type2}
     *                   [--auto-replace {false, true}]
     *                   [--license-type {None, Windows_Server_Hybrid, Windows_Server_Perpetual}]
     *                   [--location]
     *                   [--platform-fault-domain]
     *                   [--subscription]
     *                   [--tags]
     * ```
     *
     * @param {string} hostGroup Name of the Dedicated Host Group.
     * @param {string} name Name of the Dedicated Host.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {'DSv3-Type1' | 'ESv3-Type1' | 'FSv2-Type2'} sku Sku of the dedicated host.
     */
    az_vm_host.create = function (hostGroup, name, resourceGroup, sku) {
        return new az_vm_host_create_command_builder("az vm host create", 'az_vm_host_create_command_result', hostGroup, name, resourceGroup, sku);
    };
    /**
     * Delete a dedicated host.
     *
     * Syntax:
     * ```
     * az vm host delete [--host-group]
     *                   [--ids]
     *                   [--name]
     *                   [--resource-group]
     *                   [--subscription]
     *                   [--yes]
     * ```
     */
    az_vm_host["delete"] = function () {
        return new az_vm_host_delete_command_builder("az vm host delete", 'az_vm_host_delete_command_result');
    };
    /**
     * Get instance information about a dedicated host.
     *
     * Syntax:
     * ```
     * az vm host get-instance-view [--host-group]
     *                              [--ids]
     *                              [--name]
     *                              [--resource-group]
     *                              [--subscription]
     * ```
     */
    az_vm_host.get_instance_view = function () {
        return new az_vm_host_get_instance_view_command_builder("az vm host get-instance-view", 'az_vm_host_get_instance_view_command_result');
    };
    /**
     * List dedicated hosts.
     *
     * Syntax:
     * ```
     * az vm host list --host-group
     *                 --resource-group
     *                 [--query-examples]
     *                 [--subscription]
     * ```
     *
     * @param {string} hostGroup Name of the Dedicated Host Group.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_vm_host.list = function (hostGroup, resourceGroup) {
        return new az_vm_host_list_command_builder("az vm host list", 'az_vm_host_list_command_result', hostGroup, resourceGroup);
    };
    /**
     * Get the details of a dedicated host.
     *
     * Syntax:
     * ```
     * az vm host show [--host-group]
     *                 [--ids]
     *                 [--name]
     *                 [--query-examples]
     *                 [--resource-group]
     *                 [--subscription]
     * ```
     */
    az_vm_host.show = function () {
        return new az_vm_host_show_command_builder("az vm host show", 'az_vm_host_show_command_result');
    };
    /**
     * Update a dedicated host.
     *
     * Syntax:
     * ```
     * az vm host update [--add]
     *                   [--force-string]
     *                   [--host-group]
     *                   [--ids]
     *                   [--name]
     *                   [--remove]
     *                   [--resource-group]
     *                   [--set]
     *                   [--subscription]
     * ```
     */
    az_vm_host.update = function () {
        return new az_vm_host_update_command_builder("az vm host update", 'az_vm_host_update_command_result');
    };
    return az_vm_host;
}());
exports.az_vm_host = az_vm_host;
/** Manage service identities of a VM. */
var az_vm_identity = /** @class */ (function () {
    function az_vm_identity() {
    }
    /**
     * Enable managed service identity on a VM.
     *
     * Syntax:
     * ```
     * az vm identity assign [--identities]
     *                       [--ids]
     *                       [--name]
     *                       [--resource-group]
     *                       [--role]
     *                       [--scope]
     *                       [--subscription]
     * ```
     */
    az_vm_identity.assign = function () {
        return new az_vm_identity_assign_command_builder("az vm identity assign", 'az_vm_identity_assign_command_result');
    };
    /**
     * Remove managed service identities from a VM.
     *
     * Syntax:
     * ```
     * az vm identity remove [--identities]
     *                       [--ids]
     *                       [--name]
     *                       [--resource-group]
     *                       [--subscription]
     * ```
     */
    az_vm_identity.remove = function () {
        return new az_vm_identity_remove_command_builder("az vm identity remove", 'az_vm_identity_remove_command_result');
    };
    /**
     * Display VM's managed identity info.
     *
     * Syntax:
     * ```
     * az vm identity show [--ids]
     *                     [--name]
     *                     [--query-examples]
     *                     [--resource-group]
     *                     [--subscription]
     * ```
     */
    az_vm_identity.show = function () {
        return new az_vm_identity_show_command_builder("az vm identity show", 'az_vm_identity_show_command_result');
    };
    return az_vm_identity;
}());
exports.az_vm_identity = az_vm_identity;
/** Manage Azure Marketplace image terms. */
var az_vm_image_terms = /** @class */ (function () {
    function az_vm_image_terms() {
    }
    /**
     * Accept Azure Marketplace image terms so that the image can be used to create VMs.
     *
     * Syntax:
     * ```
     * az vm image terms accept [--offer]
     *                          [--plan]
     *                          [--publisher]
     *                          [--subscription]
     *                          [--urn]
     * ```
     */
    az_vm_image_terms.accept = function () {
        return new az_vm_image_terms_accept_command_builder("az vm image terms accept", 'az_vm_image_terms_accept_command_result');
    };
    /**
     * Cancel Azure Marketplace image terms.
     *
     * Syntax:
     * ```
     * az vm image terms cancel [--offer]
     *                          [--plan]
     *                          [--publisher]
     *                          [--subscription]
     *                          [--urn]
     * ```
     */
    az_vm_image_terms.cancel = function () {
        return new az_vm_image_terms_cancel_command_builder("az vm image terms cancel", 'az_vm_image_terms_cancel_command_result');
    };
    /**
     * Get the details of Azure Marketplace image terms.
     *
     * Syntax:
     * ```
     * az vm image terms show [--offer]
     *                        [--plan]
     *                        [--publisher]
     *                        [--query-examples]
     *                        [--subscription]
     *                        [--urn]
     * ```
     */
    az_vm_image_terms.show = function () {
        return new az_vm_image_terms_show_command_builder("az vm image terms show", 'az_vm_image_terms_show_command_result');
    };
    return az_vm_image_terms;
}());
exports.az_vm_image_terms = az_vm_image_terms;
/** Information on available virtual machine images. */
var az_vm_image = /** @class */ (function () {
    function az_vm_image() {
    }
    /**
     * Accept Azure Marketplace term so that the image can be used to create VMs.
     *
     * Syntax:
     * ```
     * az vm image accept-terms [--offer]
     *                          [--plan]
     *                          [--publisher]
     *                          [--subscription]
     *                          [--urn]
     * ```
     */
    az_vm_image.accept_terms = function () {
        return new az_vm_image_accept_terms_command_builder("az vm image accept-terms", 'az_vm_image_accept_terms_command_result');
    };
    /**
     * List the VM/VMSS images available in the Azure Marketplace.
     *
     * Syntax:
     * ```
     * az vm image list [--all]
     *                  [--location]
     *                  [--offer]
     *                  [--publisher]
     *                  [--query-examples]
     *                  [--sku]
     *                  [--subscription]
     * ```
     */
    az_vm_image.list = function () {
        return new az_vm_image_list_command_builder("az vm image list", 'az_vm_image_list_command_result');
    };
    /**
     * List the VM image offers available in the Azure Marketplace.
     *
     * Syntax:
     * ```
     * az vm image list-offers --location
     *                         --publisher
     *                         [--subscription]
     * ```
     *
     * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
     * @param {string} publisher A valid image publisher.
     */
    az_vm_image.list_offers = function (location, publisher) {
        return new az_vm_image_list_offers_command_builder("az vm image list-offers", 'az_vm_image_list_offers_command_result', location, publisher);
    };
    /**
     * List the VM image publishers available in the Azure Marketplace.
     *
     * Syntax:
     * ```
     * az vm image list-publishers --location
     *                             [--subscription]
     * ```
     *
     * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
     */
    az_vm_image.list_publishers = function (location) {
        return new az_vm_image_list_publishers_command_builder("az vm image list-publishers", 'az_vm_image_list_publishers_command_result', location);
    };
    /**
     * List the VM image SKUs available in the Azure Marketplace.
     *
     * Syntax:
     * ```
     * az vm image list-skus --location
     *                       --offer
     *                       --publisher
     *                       [--subscription]
     * ```
     *
     * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
     * @param {string} offer Image offer.
     * @param {string} publisher A valid image publisher.
     */
    az_vm_image.list_skus = function (location, offer, publisher) {
        return new az_vm_image_list_skus_command_builder("az vm image list-skus", 'az_vm_image_list_skus_command_result', location, offer, publisher);
    };
    /**
     * Get the details for a VM image available in the Azure Marketplace.
     *
     * Syntax:
     * ```
     * az vm image show [--location]
     *                  [--offer]
     *                  [--publisher]
     *                  [--query-examples]
     *                  [--sku]
     *                  [--subscription]
     *                  [--urn]
     *                  [--version]
     * ```
     */
    az_vm_image.show = function () {
        return new az_vm_image_show_command_builder("az vm image show", 'az_vm_image_show_command_result');
    };
    return az_vm_image;
}());
exports.az_vm_image = az_vm_image;
/** Manage log analytics workspace for a vm. */
var az_vm_monitor_log = /** @class */ (function () {
    function az_vm_monitor_log() {
    }
    /**
     * Execute a query against the Log Analytics workspace linked with a VM.
     *
     * Syntax:
     * ```
     * az vm monitor log show --analytics-query
     *                        [--ids]
     *                        [--name]
     *                        [--query-examples]
     *                        [--resource-group]
     *                        [--subscription]
     *                        [--timespan]
     * ```
     *
     * @param {string} analyticsQuery Query to execute over Log Analytics data.
     */
    az_vm_monitor_log.show = function (analyticsQuery) {
        return new az_vm_monitor_log_show_command_builder("az vm monitor log show", 'az_vm_monitor_log_show_command_result', analyticsQuery);
    };
    return az_vm_monitor_log;
}());
exports.az_vm_monitor_log = az_vm_monitor_log;
/** Manage metrics for a vm. */
var az_vm_monitor_metrics = /** @class */ (function () {
    function az_vm_monitor_metrics() {
    }
    /**
     * List the metric definitions for a VM.
     *
     * Syntax:
     * ```
     * az vm monitor metrics list-definitions --name
     *                                        --resource-group
     *                                        [--namespace]
     *                                        [--subscription]
     * ```
     *
     * @param {string} name Name or ID of a virtual machine.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_vm_monitor_metrics.list_definitions = function (name, resourceGroup) {
        return new az_vm_monitor_metrics_list_definitions_command_builder("az vm monitor metrics list-definitions", 'az_vm_monitor_metrics_list_definitions_command_result', name, resourceGroup);
    };
    /**
     * List the metric values for a VM.
     *
     * Syntax:
     * ```
     * az vm monitor metrics tail --name
     *                            --resource-group
     *                            [--aggregation {Average, Count, Maximum, Minimum, Total}]
     *                            [--dimension]
     *                            [--end-time]
     *                            [--filter]
     *                            [--interval]
     *                            [--metadata]
     *                            [--metrics]
     *                            [--namespace]
     *                            [--offset]
     *                            [--orderby]
     *                            [--start-time]
     *                            [--subscription]
     *                            [--top]
     * ```
     *
     * @param {string} name Name or ID of a virtual machine.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_vm_monitor_metrics.tail = function (name, resourceGroup) {
        return new az_vm_monitor_metrics_tail_command_builder("az vm monitor metrics tail", 'az_vm_monitor_metrics_tail_command_result', name, resourceGroup);
    };
    return az_vm_monitor_metrics;
}());
exports.az_vm_monitor_metrics = az_vm_monitor_metrics;
/** Manage monitor aspect for a vm. */
var az_vm_monitor = /** @class */ (function () {
    function az_vm_monitor() {
    }
    return az_vm_monitor;
}());
exports.az_vm_monitor = az_vm_monitor;
/** Manage network interfaces. See also `az network nic`. */
var az_vm_nic = /** @class */ (function () {
    function az_vm_nic() {
    }
    /**
     * Add existing NICs to a VM.
     *
     * Syntax:
     * ```
     * az vm nic add --nics
     *               --resource-group
     *               --vm-name
     *               [--primary-nic]
     *               [--subscription]
     * ```
     *
     * @param {string} nics Names or IDs of NICs.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} vmName The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`.
     */
    az_vm_nic.add = function (nics, resourceGroup, vmName) {
        return new az_vm_nic_add_command_builder("az vm nic add", 'az_vm_nic_add_command_result', nics, resourceGroup, vmName);
    };
    /**
     * List the NICs available on a VM.
     *
     * Syntax:
     * ```
     * az vm nic list --resource-group
     *                --vm-name
     *                [--query-examples]
     *                [--subscription]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} vmName The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`.
     */
    az_vm_nic.list = function (resourceGroup, vmName) {
        return new az_vm_nic_list_command_builder("az vm nic list", 'az_vm_nic_list_command_result', resourceGroup, vmName);
    };
    /**
     * Remove NICs from a VM.
     *
     * Syntax:
     * ```
     * az vm nic remove --nics
     *                  --resource-group
     *                  --vm-name
     *                  [--primary-nic]
     *                  [--subscription]
     * ```
     *
     * @param {string} nics Names or IDs of NICs.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} vmName The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`.
     */
    az_vm_nic.remove = function (nics, resourceGroup, vmName) {
        return new az_vm_nic_remove_command_builder("az vm nic remove", 'az_vm_nic_remove_command_result', nics, resourceGroup, vmName);
    };
    /**
     * Configure settings of a NIC attached to a VM.
     *
     * Syntax:
     * ```
     * az vm nic set --nics
     *               --resource-group
     *               --vm-name
     *               [--primary-nic]
     *               [--subscription]
     * ```
     *
     * @param {string} nics Names or IDs of NICs.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} vmName The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`.
     */
    az_vm_nic.set = function (nics, resourceGroup, vmName) {
        return new az_vm_nic_set_command_builder("az vm nic set", 'az_vm_nic_set_command_result', nics, resourceGroup, vmName);
    };
    /**
     * Display information for a NIC attached to a VM.
     *
     * Syntax:
     * ```
     * az vm nic show --nic
     *                --resource-group
     *                --vm-name
     *                [--query-examples]
     *                [--subscription]
     * ```
     *
     * @param {string} nic NIC name or ID.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} vmName The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`.
     */
    az_vm_nic.show = function (nic, resourceGroup, vmName) {
        return new az_vm_nic_show_command_builder("az vm nic show", 'az_vm_nic_show_command_result', nic, resourceGroup, vmName);
    };
    return az_vm_nic;
}());
exports.az_vm_nic = az_vm_nic;
/** Manage run commands on a Virtual Machine. */
var az_vm_run_command = /** @class */ (function () {
    function az_vm_run_command() {
    }
    /**
     * Execute a specific run command on a vm.
     *
     * Syntax:
     * ```
     * az vm run-command invoke --command-id
     *                          [--ids]
     *                          [--name]
     *                          [--parameters]
     *                          [--resource-group]
     *                          [--scripts]
     *                          [--subscription]
     * ```
     *
     * @param {string} commandId The command id.
     */
    az_vm_run_command.invoke = function (commandId) {
        return new az_vm_run_command_invoke_command_builder("az vm run-command invoke", 'az_vm_run_command_invoke_command_result', commandId);
    };
    /**
     * Lists all available run commands for a subscription in a location.
     *
     * Syntax:
     * ```
     * az vm run-command list --location
     *                        [--query-examples]
     *                        [--subscription]
     * ```
     *
     * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
     */
    az_vm_run_command.list = function (location) {
        return new az_vm_run_command_list_command_builder("az vm run-command list", 'az_vm_run_command_list_command_result', location);
    };
    /**
     * Gets specific run command for a subscription in a location.
     *
     * Syntax:
     * ```
     * az vm run-command show --command-id
     *                        --location
     *                        [--query-examples]
     *                        [--subscription]
     * ```
     *
     * @param {string} commandId The command id.
     * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
     */
    az_vm_run_command.show = function (commandId, location) {
        return new az_vm_run_command_show_command_builder("az vm run-command show", 'az_vm_run_command_show_command_result', commandId, location);
    };
    return az_vm_run_command;
}());
exports.az_vm_run_command = az_vm_run_command;
/** Manage VM secrets. */
var az_vm_secret = /** @class */ (function () {
    function az_vm_secret() {
    }
    /**
     * Add a secret to a VM.
     *
     * Syntax:
     * ```
     * az vm secret add --certificate
     *                  --keyvault
     *                  [--certificate-store]
     *                  [--ids]
     *                  [--name]
     *                  [--resource-group]
     *                  [--subscription]
     * ```
     *
     * @param {string} certificate Key vault certificate name or its full secret URL.
     * @param {string} keyvault Name or ID of the key vault.
     */
    az_vm_secret.add = function (certificate, keyvault) {
        return new az_vm_secret_add_command_builder("az vm secret add", 'az_vm_secret_add_command_result', certificate, keyvault);
    };
    /**
     * Transform secrets into a form that can be used by VMs and VMSSes.
     *
     * Syntax:
     * ```
     * az vm secret format --secrets
     *                     [--certificate-store]
     *                     [--keyvault]
     *                     [--resource-group]
     *                     [--subscription]
     * ```
     *
     * @param {string} secrets Space-separated list of key vault secret URIs. Perhaps, produced by 'az keyvault secret list-versions --vault-name vaultname -n cert1 --query "[?attributes.enabled].id" -o tsv'.
     */
    az_vm_secret.format = function (secrets) {
        return new az_vm_secret_format_command_builder("az vm secret format", 'az_vm_secret_format_command_result', secrets);
    };
    /**
     * List secrets on a VM.
     *
     * Syntax:
     * ```
     * az vm secret list --name
     *                   --resource-group
     *                   [--query-examples]
     *                   [--subscription]
     * ```
     *
     * @param {string} name The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_vm_secret.list = function (name, resourceGroup) {
        return new az_vm_secret_list_command_builder("az vm secret list", 'az_vm_secret_list_command_result', name, resourceGroup);
    };
    /**
     * Remove a secret from a VM.
     *
     * Syntax:
     * ```
     * az vm secret remove --keyvault
     *                     [--certificate]
     *                     [--ids]
     *                     [--name]
     *                     [--resource-group]
     *                     [--subscription]
     * ```
     *
     * @param {string} keyvault Name or ID of the key vault.
     */
    az_vm_secret.remove = function (keyvault) {
        return new az_vm_secret_remove_command_builder("az vm secret remove", 'az_vm_secret_remove_command_result', keyvault);
    };
    return az_vm_secret;
}());
exports.az_vm_secret = az_vm_secret;
/** Manage the unmanaged data disks attached to a VM. */
var az_vm_unmanaged_disk = /** @class */ (function () {
    function az_vm_unmanaged_disk() {
    }
    /**
     * Attach an unmanaged persistent disk to a VM.
     *
     * Syntax:
     * ```
     * az vm unmanaged-disk attach --resource-group
     *                             --vm-name
     *                             [--caching {None, ReadOnly, ReadWrite}]
     *                             [--lun]
     *                             [--name]
     *                             [--new]
     *                             [--size-gb]
     *                             [--subscription]
     *                             [--vhd-uri]
     * ```
     *
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} vmName The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`.
     */
    az_vm_unmanaged_disk.attach = function (resourceGroup, vmName) {
        return new az_vm_unmanaged_disk_attach_command_builder("az vm unmanaged-disk attach", 'az_vm_unmanaged_disk_attach_command_result', resourceGroup, vmName);
    };
    /**
     * Detach an unmanaged disk from a VM.
     *
     * Syntax:
     * ```
     * az vm unmanaged-disk detach --name
     *                             --resource-group
     *                             --vm-name
     *                             [--subscription]
     * ```
     *
     * @param {string} name The data disk name.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     * @param {string} vmName The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`.
     */
    az_vm_unmanaged_disk.detach = function (name, resourceGroup, vmName) {
        return new az_vm_unmanaged_disk_detach_command_builder("az vm unmanaged-disk detach", 'az_vm_unmanaged_disk_detach_command_result', name, resourceGroup, vmName);
    };
    /**
     * List unmanaged disks of a VM.
     *
     * Syntax:
     * ```
     * az vm unmanaged-disk list --name
     *                           --resource-group
     *                           [--query-examples]
     *                           [--subscription]
     * ```
     *
     * @param {string} vmName The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_vm_unmanaged_disk.list = function (vmName, resourceGroup) {
        return new az_vm_unmanaged_disk_list_command_builder("az vm unmanaged-disk list", 'az_vm_unmanaged_disk_list_command_result', vmName, resourceGroup);
    };
    return az_vm_unmanaged_disk;
}());
exports.az_vm_unmanaged_disk = az_vm_unmanaged_disk;
/** Manage user accounts for a VM. */
var az_vm_user = /** @class */ (function () {
    function az_vm_user() {
    }
    /**
     * Delete a user account from a VM.
     *
     * Syntax:
     * ```
     * az vm user delete --username
     *                   [--ids]
     *                   [--name]
     *                   [--no-wait]
     *                   [--resource-group]
     *                   [--subscription]
     * ```
     *
     * @param {string} username The user name.
     */
    az_vm_user["delete"] = function (username) {
        return new az_vm_user_delete_command_builder("az vm user delete", 'az_vm_user_delete_command_result', username);
    };
    /**
     * Reset the SSH configuration on a VM.
     *
     * Syntax:
     * ```
     * az vm user reset-ssh [--ids]
     *                      [--name]
     *                      [--no-wait]
     *                      [--resource-group]
     *                      [--subscription]
     * ```
     */
    az_vm_user.reset_ssh = function () {
        return new az_vm_user_reset_ssh_command_builder("az vm user reset-ssh", 'az_vm_user_reset_ssh_command_result');
    };
    /**
     * Update a user account.
     *
     * Syntax:
     * ```
     * az vm user update --username
     *                   [--ids]
     *                   [--name]
     *                   [--no-wait]
     *                   [--password]
     *                   [--resource-group]
     *                   [--ssh-key-value]
     *                   [--subscription]
     * ```
     *
     * @param {string} username The user name.
     */
    az_vm_user.update = function (username) {
        return new az_vm_user_update_command_builder("az vm user update", 'az_vm_user_update_command_result', username);
    };
    return az_vm_user;
}());
exports.az_vm_user = az_vm_user;
/** Manage Linux or Windows virtual machines. */
var az_vm = /** @class */ (function () {
    function az_vm() {
    }
    /**
     * Assess patches on a VM.
     *
     * Syntax:
     * ```
     * az vm assess-patches [--ids]
     *                      [--name]
     *                      [--resource-group]
     *                      [--subscription]
     * ```
     */
    az_vm.assess_patches = function () {
        return new az_vm_assess_patches_command_builder("az vm assess-patches", 'az_vm_assess_patches_command_result');
    };
    /**
     * Manage auto-shutdown for VM.
     *
     * Syntax:
     * ```
     * az vm auto-shutdown [--email]
     *                     [--ids]
     *                     [--location]
     *                     [--name]
     *                     [--off]
     *                     [--resource-group]
     *                     [--subscription]
     *                     [--time]
     *                     [--webhook]
     * ```
     */
    az_vm.auto_shutdown = function () {
        return new az_vm_auto_shutdown_command_builder("az vm auto-shutdown", 'az_vm_auto_shutdown_command_result');
    };
    /**
     * Capture information for a stopped VM.
     *
     * Syntax:
     * ```
     * az vm capture --vhd-name-prefix
     *               [--ids]
     *               [--name]
     *               [--overwrite]
     *               [--resource-group]
     *               [--storage-container]
     *               [--subscription]
     * ```
     *
     * @param {string} vhdNamePrefix The VHD name prefix specify for the VM disks.
     */
    az_vm.capture = function (vhdNamePrefix) {
        return new az_vm_capture_command_builder("az vm capture", 'az_vm_capture_command_result', vhdNamePrefix);
    };
    /**
     * Convert a VM with unmanaged disks to use managed disks.
     *
     * Syntax:
     * ```
     * az vm convert [--ids]
     *               [--name]
     *               [--resource-group]
     *               [--subscription]
     * ```
     */
    az_vm.convert = function () {
        return new az_vm_convert_command_builder("az vm convert", 'az_vm_convert_command_result');
    };
    /**
     * Create an Azure Virtual Machine.
     *
     * Syntax:
     * ```
     * az vm create --name
     *              --resource-group
     *              [--accelerated-networking {false, true}]
     *              [--admin-password]
     *              [--admin-username]
     *              [--asgs]
     *              [--assign-identity]
     *              [--attach-data-disks]
     *              [--attach-os-disk]
     *              [--authentication-type {all, password, ssh}]
     *              [--availability-set]
     *              [--boot-diagnostics-storage]
     *              [--computer-name]
     *              [--custom-data]
     *              [--data-disk-caching]
     *              [--data-disk-encryption-sets]
     *              [--data-disk-sizes-gb]
     *              [--enable-agent {false, true}]
     *              [--enable-auto-update {false, true}]
     *              [--encryption-at-host {false, true}]
     *              [--ephemeral-os-disk {false, true}]
     *              [--eviction-policy {Deallocate, Delete}]
     *              [--generate-ssh-keys]
     *              [--host]
     *              [--host-group]
     *              [--image]
     *              [--license-type {None, RHEL_BYOS, SLES_BYOS, Windows_Client, Windows_Server}]
     *              [--location]
     *              [--max-price]
     *              [--nics]
     *              [--no-wait]
     *              [--nsg]
     *              [--nsg-rule {NONE, RDP, SSH}]
     *              [--os-disk-caching {None, ReadOnly, ReadWrite}]
     *              [--os-disk-encryption-set]
     *              [--os-disk-name]
     *              [--os-disk-size-gb]
     *              [--os-type {linux, windows}]
     *              [--patch-mode {AutomaticByOS, AutomaticByPlatform, Manual}]
     *              [--plan-name]
     *              [--plan-product]
     *              [--plan-promotion-code]
     *              [--plan-publisher]
     *              [--ppg]
     *              [--priority {Low, Regular, Spot}]
     *              [--private-ip-address]
     *              [--public-ip-address]
     *              [--public-ip-address-allocation {dynamic, static}]
     *              [--public-ip-address-dns-name]
     *              [--public-ip-sku {Basic, Standard}]
     *              [--role]
     *              [--scope]
     *              [--secrets]
     *              [--size]
     *              [--specialized {false, true}]
     *              [--ssh-dest-key-path]
     *              [--ssh-key-values]
     *              [--storage-account]
     *              [--storage-container-name]
     *              [--storage-sku]
     *              [--subnet]
     *              [--subnet-address-prefix]
     *              [--subscription]
     *              [--tags]
     *              [--ultra-ssd-enabled {false, true}]
     *              [--use-unmanaged-disk]
     *              [--validate]
     *              [--vmss]
     *              [--vnet-address-prefix]
     *              [--vnet-name]
     *              [--workspace]
     *              [--zone {1, 2, 3}]
     * ```
     *
     * @param {string} name Name of the virtual machine.
     * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
     */
    az_vm.create = function (name, resourceGroup) {
        return new az_vm_create_command_builder("az vm create", 'az_vm_create_command_result', name, resourceGroup);
    };
    /**
     * Deallocate a VM.
     *
     * Syntax:
     * ```
     * az vm deallocate [--ids]
     *                  [--name]
     *                  [--no-wait]
     *                  [--resource-group]
     *                  [--subscription]
     * ```
     */
    az_vm.deallocate = function () {
        return new az_vm_deallocate_command_builder("az vm deallocate", 'az_vm_deallocate_command_result');
    };
    /**
     * Delete a VM.
     *
     * Syntax:
     * ```
     * az vm delete [--ids]
     *              [--name]
     *              [--no-wait]
     *              [--resource-group]
     *              [--subscription]
     *              [--yes]
     * ```
     */
    az_vm["delete"] = function () {
        return new az_vm_delete_command_builder("az vm delete", 'az_vm_delete_command_result');
    };
    /**
     * Mark a VM as generalized, allowing it to be imaged for multiple deployments.
     *
     * Syntax:
     * ```
     * az vm generalize [--ids]
     *                  [--name]
     *                  [--no-wait]
     *                  [--resource-group]
     *                  [--subscription]
     * ```
     */
    az_vm.generalize = function () {
        return new az_vm_generalize_command_builder("az vm generalize", 'az_vm_generalize_command_result');
    };
    /**
     * Get instance information about a VM.
     *
     * Syntax:
     * ```
     * az vm get-instance-view [--ids]
     *                         [--name]
     *                         [--resource-group]
     *                         [--subscription]
     * ```
     */
    az_vm.get_instance_view = function () {
        return new az_vm_get_instance_view_command_builder("az vm get-instance-view", 'az_vm_get_instance_view_command_result');
    };
    /**
     * List details of Virtual Machines.
     *
     * Syntax:
     * ```
     * az vm list [--query-examples]
     *            [--resource-group]
     *            [--show-details]
     *            [--subscription]
     * ```
     */
    az_vm.list = function () {
        return new az_vm_list_command_builder("az vm list", 'az_vm_list_command_result');
    };
    /**
     * List IP addresses associated with a VM.
     *
     * Syntax:
     * ```
     * az vm list-ip-addresses [--ids]
     *                         [--name]
     *                         [--resource-group]
     *                         [--subscription]
     * ```
     */
    az_vm.list_ip_addresses = function () {
        return new az_vm_list_ip_addresses_command_builder("az vm list-ip-addresses", 'az_vm_list_ip_addresses_command_result');
    };
    /**
     * List available sizes for VMs.
     *
     * Syntax:
     * ```
     * az vm list-sizes --location
     *                  [--subscription]
     * ```
     *
     * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
     */
    az_vm.list_sizes = function (location) {
        return new az_vm_list_sizes_command_builder("az vm list-sizes", 'az_vm_list_sizes_command_result', location);
    };
    /**
     * Get details for compute-related resource SKUs.
     *
     * Syntax:
     * ```
     * az vm list-skus [--all {false, true}]
     *                 [--location]
     *                 [--resource-type]
     *                 [--size]
     *                 [--subscription]
     *                 [--zone {false, true}]
     * ```
     */
    az_vm.list_skus = function () {
        return new az_vm_list_skus_command_builder("az vm list-skus", 'az_vm_list_skus_command_result');
    };
    /**
     * List available usage resources for VMs.
     *
     * Syntax:
     * ```
     * az vm list-usage --location
     *                  [--subscription]
     * ```
     *
     * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
     */
    az_vm.list_usage = function (location) {
        return new az_vm_list_usage_command_builder("az vm list-usage", 'az_vm_list_usage_command_result', location);
    };
    /**
     * List available resizing options for VMs.
     *
     * Syntax:
     * ```
     * az vm list-vm-resize-options [--ids]
     *                              [--name]
     *                              [--resource-group]
     *                              [--subscription]
     * ```
     */
    az_vm.list_vm_resize_options = function () {
        return new az_vm_list_vm_resize_options_command_builder("az vm list-vm-resize-options", 'az_vm_list_vm_resize_options_command_result');
    };
    /**
     * Opens a VM to inbound traffic on specified ports.
     *
     * Syntax:
     * ```
     * az vm open-port --port
     *                 [--apply-to-subnet]
     *                 [--ids]
     *                 [--name]
     *                 [--nsg-name]
     *                 [--priority]
     *                 [--resource-group]
     *                 [--subscription]
     * ```
     *
     * @param {string} port The port or port range (ex: 80-100) to open inbound traffic to. Use '\*' to allow traffic to all ports.
     */
    az_vm.open_port = function (port) {
        return new az_vm_open_port_command_builder("az vm open-port", 'az_vm_open_port_command_result', port);
    };
    /**
     * The operation to perform maintenance on a virtual machine.
     *
     * Syntax:
     * ```
     * az vm perform-maintenance [--ids]
     *                           [--name]
     *                           [--resource-group]
     *                           [--subscription]
     * ```
     */
    az_vm.perform_maintenance = function () {
        return new az_vm_perform_maintenance_command_builder("az vm perform-maintenance", 'az_vm_perform_maintenance_command_result');
    };
    /**
     * Reapply VMs.
     *
     * Syntax:
     * ```
     * az vm reapply [--ids]
     *               [--name]
     *               [--no-wait]
     *               [--resource-group]
     *               [--subscription]
     * ```
     */
    az_vm.reapply = function () {
        return new az_vm_reapply_command_builder("az vm reapply", 'az_vm_reapply_command_result');
    };
    /**
     * Redeploy an existing VM.
     *
     * Syntax:
     * ```
     * az vm redeploy [--ids]
     *                [--name]
     *                [--no-wait]
     *                [--resource-group]
     *                [--subscription]
     * ```
     */
    az_vm.redeploy = function () {
        return new az_vm_redeploy_command_builder("az vm redeploy", 'az_vm_redeploy_command_result');
    };
    /**
     * Update a VM's size.
     *
     * Syntax:
     * ```
     * az vm resize --size
     *              [--ids]
     *              [--name]
     *              [--no-wait]
     *              [--resource-group]
     *              [--subscription]
     * ```
     *
     * @param {string} size The VM size.
     */
    az_vm.resize = function (size) {
        return new az_vm_resize_command_builder("az vm resize", 'az_vm_resize_command_result', size);
    };
    /**
     * Restart VMs.
     *
     * Syntax:
     * ```
     * az vm restart [--force]
     *               [--ids]
     *               [--name]
     *               [--no-wait]
     *               [--resource-group]
     *               [--subscription]
     * ```
     */
    az_vm.restart = function () {
        return new az_vm_restart_command_builder("az vm restart", 'az_vm_restart_command_result');
    };
    /**
     * Get the details of a VM.
     *
     * Syntax:
     * ```
     * az vm show [--ids]
     *            [--name]
     *            [--query-examples]
     *            [--resource-group]
     *            [--show-details]
     *            [--subscription]
     * ```
     */
    az_vm.show = function () {
        return new az_vm_show_command_builder("az vm show", 'az_vm_show_command_result');
    };
    /**
     * Simulate the eviction of a Spot VM.
     *
     * Syntax:
     * ```
     * az vm simulate-eviction [--ids]
     *                         [--name]
     *                         [--resource-group]
     *                         [--subscription]
     * ```
     */
    az_vm.simulate_eviction = function () {
        return new az_vm_simulate_eviction_command_builder("az vm simulate-eviction", 'az_vm_simulate_eviction_command_result');
    };
    /**
     * Start a stopped VM.
     *
     * Syntax:
     * ```
     * az vm start [--ids]
     *             [--name]
     *             [--no-wait]
     *             [--resource-group]
     *             [--subscription]
     * ```
     */
    az_vm.start = function () {
        return new az_vm_start_command_builder("az vm start", 'az_vm_start_command_result');
    };
    /**
     * Power off (stop) a running VM.
     *
     * Syntax:
     * ```
     * az vm stop [--ids]
     *            [--name]
     *            [--no-wait]
     *            [--resource-group]
     *            [--skip-shutdown]
     *            [--subscription]
     * ```
     */
    az_vm.stop = function () {
        return new az_vm_stop_command_builder("az vm stop", 'az_vm_stop_command_result');
    };
    /**
     * Update the properties of a VM.
     *
     * Syntax:
     * ```
     * az vm update [--add]
     *              [--disk-caching]
     *              [--force-string]
     *              [--ids]
     *              [--license-type {None, RHEL_BYOS, SLES_BYOS, Windows_Client, Windows_Server}]
     *              [--max-price]
     *              [--name]
     *              [--no-wait]
     *              [--os-disk]
     *              [--ppg]
     *              [--priority {Low, Regular, Spot}]
     *              [--remove]
     *              [--resource-group]
     *              [--set]
     *              [--subscription]
     *              [--ultra-ssd-enabled {false, true}]
     *              [--workspace]
     *              [--write-accelerator]
     * ```
     */
    az_vm.update = function () {
        return new az_vm_update_command_builder("az vm update", 'az_vm_update_command_result');
    };
    /**
     * Place the CLI in a waiting state until a condition of the VM is met.
     *
     * Syntax:
     * ```
     * az vm wait [--created]
     *            [--custom]
     *            [--deleted]
     *            [--exists]
     *            [--ids]
     *            [--interval]
     *            [--name]
     *            [--resource-group]
     *            [--subscription]
     *            [--timeout]
     *            [--updated]
     * ```
     */
    az_vm.wait = function () {
        return new az_vm_wait_command_builder("az vm wait", 'az_vm_wait_command_result');
    };
    return az_vm;
}());
exports.az_vm = az_vm;
/**
 * Convert an Azure Availability Set to contain VMs with managed disks.
 *
 * Syntax:
 * ```
 * az vm availability-set convert [--ids]
 *                                [--name]
 *                                [--resource-group]
 *                                [--subscription]
 * ```
 */
var az_vm_availability_set_convert_command_builder = /** @class */ (function (_super) {
    __extends(az_vm_availability_set_convert_command_builder, _super);
    function az_vm_availability_set_convert_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_vm_availability_set_convert_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the availability set. */
    az_vm_availability_set_convert_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vm_availability_set_convert_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vm_availability_set_convert_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vm_availability_set_convert_command_builder;
}(base_1.CommandBuilder));
/**
 * Create an Azure Availability Set.
 *
 * Syntax:
 * ```
 * az vm availability-set create --name
 *                               --resource-group
 *                               [--location]
 *                               [--no-wait]
 *                               [--platform-fault-domain-count]
 *                               [--platform-update-domain-count]
 *                               [--ppg]
 *                               [--subscription]
 *                               [--tags]
 *                               [--unmanaged]
 *                               [--validate]
 * ```
 *
 * @param {string} name Name of the availability set.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_vm_availability_set_create_command_builder = /** @class */ (function (_super) {
    __extends(az_vm_availability_set_create_command_builder, _super);
    function az_vm_availability_set_create_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the availability set. */
    az_vm_availability_set_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vm_availability_set_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_vm_availability_set_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_vm_availability_set_create_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Fault Domain count. */
    az_vm_availability_set_create_command_builder.prototype.platformFaultDomainCount = function (value) {
        this.setFlag("--platform-fault-domain-count", value);
        return this;
    };
    /** Update Domain count. If unspecified, the server will pick the most optimal number like 5. */
    az_vm_availability_set_create_command_builder.prototype.platformUpdateDomainCount = function (value) {
        this.setFlag("--platform-update-domain-count", value);
        return this;
    };
    /** The name or ID of the proximity placement group the availability set should be associated with. */
    az_vm_availability_set_create_command_builder.prototype.ppg = function (value) {
        this.setFlag("--ppg", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vm_availability_set_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_vm_availability_set_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    /** Contained VMs should use unmanaged disks. */
    az_vm_availability_set_create_command_builder.prototype.unmanaged = function (value) {
        this.setFlag("--unmanaged", value);
        return this;
    };
    /** Generate and validate the ARM template without creating any resources. */
    az_vm_availability_set_create_command_builder.prototype.validate = function (value) {
        this.setFlag("--validate", value);
        return this;
    };
    return az_vm_availability_set_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete an availability set.
 *
 * Syntax:
 * ```
 * az vm availability-set delete [--ids]
 *                               [--name]
 *                               [--resource-group]
 *                               [--subscription]
 * ```
 */
var az_vm_availability_set_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_vm_availability_set_delete_command_builder, _super);
    function az_vm_availability_set_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_vm_availability_set_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the availability set. */
    az_vm_availability_set_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vm_availability_set_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vm_availability_set_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vm_availability_set_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List availability sets.
 *
 * Syntax:
 * ```
 * az vm availability-set list [--query-examples]
 *                             [--resource-group]
 *                             [--subscription]
 * ```
 */
var az_vm_availability_set_list_command_builder = /** @class */ (function (_super) {
    __extends(az_vm_availability_set_list_command_builder, _super);
    function az_vm_availability_set_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_vm_availability_set_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vm_availability_set_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vm_availability_set_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vm_availability_set_list_command_builder;
}(base_1.CommandBuilder));
/**
 * List VM sizes for an availability set.
 *
 * Syntax:
 * ```
 * az vm availability-set list-sizes [--ids]
 *                                   [--name]
 *                                   [--resource-group]
 *                                   [--subscription]
 * ```
 */
var az_vm_availability_set_list_sizes_command_builder = /** @class */ (function (_super) {
    __extends(az_vm_availability_set_list_sizes_command_builder, _super);
    function az_vm_availability_set_list_sizes_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_vm_availability_set_list_sizes_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the availability set. */
    az_vm_availability_set_list_sizes_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vm_availability_set_list_sizes_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vm_availability_set_list_sizes_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vm_availability_set_list_sizes_command_builder;
}(base_1.CommandBuilder));
/**
 * Get information for an availability set.
 *
 * Syntax:
 * ```
 * az vm availability-set show [--ids]
 *                             [--name]
 *                             [--query-examples]
 *                             [--resource-group]
 *                             [--subscription]
 * ```
 */
var az_vm_availability_set_show_command_builder = /** @class */ (function (_super) {
    __extends(az_vm_availability_set_show_command_builder, _super);
    function az_vm_availability_set_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_vm_availability_set_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the availability set. */
    az_vm_availability_set_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_vm_availability_set_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vm_availability_set_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vm_availability_set_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vm_availability_set_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update an Azure Availability Set.
 *
 * Syntax:
 * ```
 * az vm availability-set update [--add]
 *                               [--force-string]
 *                               [--ids]
 *                               [--name]
 *                               [--ppg]
 *                               [--remove]
 *                               [--resource-group]
 *                               [--set]
 *                               [--subscription]
 * ```
 */
var az_vm_availability_set_update_command_builder = /** @class */ (function (_super) {
    __extends(az_vm_availability_set_update_command_builder, _super);
    function az_vm_availability_set_update_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_vm_availability_set_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_vm_availability_set_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_vm_availability_set_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the availability set. */
    az_vm_availability_set_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The name or ID of the proximity placement group the availability set should be associated with. */
    az_vm_availability_set_update_command_builder.prototype.ppg = function (value) {
        this.setFlag("--ppg", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_vm_availability_set_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vm_availability_set_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_vm_availability_set_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vm_availability_set_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vm_availability_set_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Disable the boot diagnostics on a VM.
 *
 * Syntax:
 * ```
 * az vm boot-diagnostics disable [--ids]
 *                                [--name]
 *                                [--resource-group]
 *                                [--subscription]
 * ```
 */
var az_vm_boot_diagnostics_disable_command_builder = /** @class */ (function (_super) {
    __extends(az_vm_boot_diagnostics_disable_command_builder, _super);
    function az_vm_boot_diagnostics_disable_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_vm_boot_diagnostics_disable_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    az_vm_boot_diagnostics_disable_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vm_boot_diagnostics_disable_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vm_boot_diagnostics_disable_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vm_boot_diagnostics_disable_command_builder;
}(base_1.CommandBuilder));
/**
 * Enable the boot diagnostics on a VM.
 *
 * Syntax:
 * ```
 * az vm boot-diagnostics enable [--ids]
 *                               [--name]
 *                               [--resource-group]
 *                               [--storage]
 *                               [--subscription]
 * ```
 */
var az_vm_boot_diagnostics_enable_command_builder = /** @class */ (function (_super) {
    __extends(az_vm_boot_diagnostics_enable_command_builder, _super);
    function az_vm_boot_diagnostics_enable_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_vm_boot_diagnostics_enable_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    az_vm_boot_diagnostics_enable_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vm_boot_diagnostics_enable_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or URI of a storage account (e.g. <a href="https://your_storage_account_name.blob.core.windows.net/">https://your_storage_account_name.blob.core.windows.net/</a>). If it's not specified, managed storage will be used. */
    az_vm_boot_diagnostics_enable_command_builder.prototype.storage = function (value) {
        this.setFlag("--storage", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vm_boot_diagnostics_enable_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vm_boot_diagnostics_enable_command_builder;
}(base_1.CommandBuilder));
/**
 * Get the boot diagnostics log from a VM.
 *
 * Syntax:
 * ```
 * az vm boot-diagnostics get-boot-log [--ids]
 *                                     [--name]
 *                                     [--resource-group]
 *                                     [--subscription]
 * ```
 */
var az_vm_boot_diagnostics_get_boot_log_command_builder = /** @class */ (function (_super) {
    __extends(az_vm_boot_diagnostics_get_boot_log_command_builder, _super);
    function az_vm_boot_diagnostics_get_boot_log_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_vm_boot_diagnostics_get_boot_log_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    az_vm_boot_diagnostics_get_boot_log_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vm_boot_diagnostics_get_boot_log_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vm_boot_diagnostics_get_boot_log_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vm_boot_diagnostics_get_boot_log_command_builder;
}(base_1.CommandBuilder));
/**
 * Get SAS URIs for a virtual machine's boot diagnostic logs.
 *
 * Syntax:
 * ```
 * az vm boot-diagnostics get-boot-log-uris [--expire]
 *                                          [--ids]
 *                                          [--name]
 *                                          [--resource-group]
 *                                          [--subscription]
 * ```
 */
var az_vm_boot_diagnostics_get_boot_log_uris_command_builder = /** @class */ (function (_super) {
    __extends(az_vm_boot_diagnostics_get_boot_log_uris_command_builder, _super);
    function az_vm_boot_diagnostics_get_boot_log_uris_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Expiration duration in minutes for the SAS URIs with a value between 1 to 1440 minutes. If not specified, SAS URIs will be generated with a default expiration duration of 120 minutes. */
    az_vm_boot_diagnostics_get_boot_log_uris_command_builder.prototype.expire = function (value) {
        this.setFlag("--expire", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_vm_boot_diagnostics_get_boot_log_uris_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    az_vm_boot_diagnostics_get_boot_log_uris_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vm_boot_diagnostics_get_boot_log_uris_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vm_boot_diagnostics_get_boot_log_uris_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vm_boot_diagnostics_get_boot_log_uris_command_builder;
}(base_1.CommandBuilder));
/**
 * Get the default configuration settings for a VM.
 *
 * Syntax:
 * ```
 * az vm diagnostics get-default-config [--is-windows-os]
 *                                      [--subscription]
 * ```
 */
var az_vm_diagnostics_get_default_config_command_builder = /** @class */ (function (_super) {
    __extends(az_vm_diagnostics_get_default_config_command_builder, _super);
    function az_vm_diagnostics_get_default_config_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** For Windows VMs. */
    az_vm_diagnostics_get_default_config_command_builder.prototype.isWindowsOs = function (value) {
        this.setFlag("--is-windows-os", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vm_diagnostics_get_default_config_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vm_diagnostics_get_default_config_command_builder;
}(base_1.CommandBuilder));
/**
 * Configure the Azure VM diagnostics extension.
 *
 * Syntax:
 * ```
 * az vm diagnostics set --settings
 *                       [--ids]
 *                       [--no-auto-upgrade {false, true}]
 *                       [--protected-settings]
 *                       [--resource-group]
 *                       [--subscription]
 *                       [--version]
 *                       [--vm-name]
 * ```
 *
 * @param {string} settings Json string or a file path, which defines data to be collected.
 */
var az_vm_diagnostics_set_command_builder = /** @class */ (function (_super) {
    __extends(az_vm_diagnostics_set_command_builder, _super);
    function az_vm_diagnostics_set_command_builder(commandPath, resultDataTypeName, settings) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.settings(settings);
        return _this;
    }
    /** Json string or a file path, which defines data to be collected. */
    az_vm_diagnostics_set_command_builder.prototype.settings = function (value) {
        this.setFlag("--settings", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_vm_diagnostics_set_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** If set, the extension service will not automatically pick or upgrade to the latest minor version, even if the extension is redeployed. */
    az_vm_diagnostics_set_command_builder.prototype.noAutoUpgrade = function (value) {
        this.setFlag("--no-auto-upgrade", value.toString());
        return this;
    };
    /** Json string or a file path containing private configurations such as storage account keys, etc. */
    az_vm_diagnostics_set_command_builder.prototype.protectedSettings = function (value) {
        this.setFlag("--protected-settings", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vm_diagnostics_set_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vm_diagnostics_set_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Version of the diagnostics extension. Will use the latest if not specfied. */
    az_vm_diagnostics_set_command_builder.prototype.version = function (value) {
        this.setFlag("--version", value);
        return this;
    };
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    az_vm_diagnostics_set_command_builder.prototype.vmName = function (value) {
        this.setFlag("--vm-name", value);
        return this;
    };
    return az_vm_diagnostics_set_command_builder;
}(base_1.CommandBuilder));
/**
 * Attach a managed persistent disk to a VM.
 *
 * Syntax:
 * ```
 * az vm disk attach --vm-name
 *                   [--caching {None, ReadOnly, ReadWrite}]
 *                   [--enable-write-accelerator]
 *                   [--ids]
 *                   [--lun]
 *                   [--name]
 *                   [--new]
 *                   [--resource-group]
 *                   [--size-gb]
 *                   [--sku {Premium_LRS, StandardSSD_LRS, Standard_LRS, UltraSSD_LRS}]
 *                   [--subscription]
 * ```
 *
 * @param {string} vmName The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`.
 */
var az_vm_disk_attach_command_builder = /** @class */ (function (_super) {
    __extends(az_vm_disk_attach_command_builder, _super);
    function az_vm_disk_attach_command_builder(commandPath, resultDataTypeName, vmName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.vmName(vmName);
        return _this;
    }
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    az_vm_disk_attach_command_builder.prototype.vmName = function (value) {
        this.setFlag("--vm-name", value);
        return this;
    };
    /** Disk caching policy. */
    az_vm_disk_attach_command_builder.prototype.caching = function (value) {
        this.setFlag("--caching", value);
        return this;
    };
    /** Enable write accelerator. */
    az_vm_disk_attach_command_builder.prototype.enableWriteAccelerator = function (value) {
        this.setFlag("--enable-write-accelerator", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_vm_disk_attach_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** 0-based logical unit number (LUN). Max value depends on the Virtual Machine size. */
    az_vm_disk_attach_command_builder.prototype.lun = function (value) {
        this.setFlag("--lun", value);
        return this;
    };
    /** The name or ID of the managed disk. */
    az_vm_disk_attach_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Create a new disk. */
    az_vm_disk_attach_command_builder.prototype["new"] = function (value) {
        this.setFlag("--new", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vm_disk_attach_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Size in GB. Max size: 4095 GB (certain preview disks can be larger). */
    az_vm_disk_attach_command_builder.prototype.sizeGb = function (value) {
        this.setFlag("--size-gb", value);
        return this;
    };
    /** Underlying storage SKU. */
    az_vm_disk_attach_command_builder.prototype.sku = function (value) {
        this.setFlag("--sku", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vm_disk_attach_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vm_disk_attach_command_builder;
}(base_1.CommandBuilder));
/**
 * Detach a managed disk from a VM.
 *
 * Syntax:
 * ```
 * az vm disk detach --name
 *                   --resource-group
 *                   --vm-name
 *                   [--subscription]
 * ```
 *
 * @param {string} name The data disk name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} vmName The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`.
 */
var az_vm_disk_detach_command_builder = /** @class */ (function (_super) {
    __extends(az_vm_disk_detach_command_builder, _super);
    function az_vm_disk_detach_command_builder(commandPath, resultDataTypeName, name, resourceGroup, vmName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.vmName(vmName);
        return _this;
    }
    /** The data disk name. */
    az_vm_disk_detach_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vm_disk_detach_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    az_vm_disk_detach_command_builder.prototype.vmName = function (value) {
        this.setFlag("--vm-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vm_disk_detach_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vm_disk_detach_command_builder;
}(base_1.CommandBuilder));
/**
 * Disable disk encryption on the OS disk and/or data disks. Decrypt mounted disks.
 *
 * Syntax:
 * ```
 * az vm encryption disable [--force]
 *                          [--ids]
 *                          [--name]
 *                          [--resource-group]
 *                          [--subscription]
 *                          [--volume-type {ALL, DATA, OS}]
 * ```
 */
var az_vm_encryption_disable_command_builder = /** @class */ (function (_super) {
    __extends(az_vm_encryption_disable_command_builder, _super);
    function az_vm_encryption_disable_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Continue by ignoring client side validation errors. */
    az_vm_encryption_disable_command_builder.prototype.force = function (value) {
        this.setFlag("--force", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_vm_encryption_disable_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    az_vm_encryption_disable_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vm_encryption_disable_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vm_encryption_disable_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Type of volume that the encryption operation is performed on. */
    az_vm_encryption_disable_command_builder.prototype.volumeType = function (value) {
        this.setFlag("--volume-type", value);
        return this;
    };
    return az_vm_encryption_disable_command_builder;
}(base_1.CommandBuilder));
/**
 * Enable disk encryption on the OS disk and/or data disks. Encrypt mounted disks.
 *
 * Syntax:
 * ```
 * az vm encryption enable --disk-encryption-keyvault
 *                         [--aad-client-cert-thumbprint]
 *                         [--aad-client-id]
 *                         [--aad-client-secret]
 *                         [--encrypt-format-all]
 *                         [--force]
 *                         [--ids]
 *                         [--key-encryption-algorithm]
 *                         [--key-encryption-key]
 *                         [--key-encryption-keyvault]
 *                         [--name]
 *                         [--resource-group]
 *                         [--subscription]
 *                         [--volume-type {ALL, DATA, OS}]
 * ```
 *
 * @param {string} diskEncryptionKeyvault Name or ID of the key vault where the generated encryption key will be placed.
 */
var az_vm_encryption_enable_command_builder = /** @class */ (function (_super) {
    __extends(az_vm_encryption_enable_command_builder, _super);
    function az_vm_encryption_enable_command_builder(commandPath, resultDataTypeName, diskEncryptionKeyvault) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.diskEncryptionKeyvault(diskEncryptionKeyvault);
        return _this;
    }
    /** Name or ID of the key vault where the generated encryption key will be placed. */
    az_vm_encryption_enable_command_builder.prototype.diskEncryptionKeyvault = function (value) {
        this.setFlag("--disk-encryption-keyvault", value);
        return this;
    };
    /** Thumbprint of the AAD app certificate with permissions to write secrets to the key vault. */
    az_vm_encryption_enable_command_builder.prototype.aadClientCertThumbprint = function (value) {
        this.setFlag("--aad-client-cert-thumbprint", value);
        return this;
    };
    /** Client ID of an AAD app with permissions to write secrets to the key vault. */
    az_vm_encryption_enable_command_builder.prototype.aadClientId = function (value) {
        this.setFlag("--aad-client-id", value);
        return this;
    };
    /** Client secret of the AAD app with permissions to write secrets to the key vault. */
    az_vm_encryption_enable_command_builder.prototype.aadClientSecret = function (value) {
        this.setFlag("--aad-client-secret", value);
        return this;
    };
    /** Encrypts-formats data disks instead of encrypting them. Encrypt-formatting is a lot faster than in-place encryption but wipes out the partition getting encrypt-formatted. */
    az_vm_encryption_enable_command_builder.prototype.encryptFormatAll = function (value) {
        this.setFlag("--encrypt-format-all", value);
        return this;
    };
    /** Continue by ignoring client side validation errors. */
    az_vm_encryption_enable_command_builder.prototype.force = function (value) {
        this.setFlag("--force", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_vm_encryption_enable_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** */
    az_vm_encryption_enable_command_builder.prototype.keyEncryptionAlgorithm = function (value) {
        this.setFlag("--key-encryption-algorithm", value);
        return this;
    };
    /** Key vault key name or URL used to encrypt the disk encryption key. */
    az_vm_encryption_enable_command_builder.prototype.keyEncryptionKey = function (value) {
        this.setFlag("--key-encryption-key", value);
        return this;
    };
    /** Name or ID of the key vault containing the key encryption key used to encrypt the disk encryption key. If missing, CLI will use `--disk-encryption-keyvault`. */
    az_vm_encryption_enable_command_builder.prototype.keyEncryptionKeyvault = function (value) {
        this.setFlag("--key-encryption-keyvault", value);
        return this;
    };
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    az_vm_encryption_enable_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vm_encryption_enable_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vm_encryption_enable_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Type of volume that the encryption operation is performed on. */
    az_vm_encryption_enable_command_builder.prototype.volumeType = function (value) {
        this.setFlag("--volume-type", value);
        return this;
    };
    return az_vm_encryption_enable_command_builder;
}(base_1.CommandBuilder));
/**
 * Show encryption status.
 *
 * Syntax:
 * ```
 * az vm encryption show [--ids]
 *                       [--name]
 *                       [--query-examples]
 *                       [--resource-group]
 *                       [--subscription]
 * ```
 */
var az_vm_encryption_show_command_builder = /** @class */ (function (_super) {
    __extends(az_vm_encryption_show_command_builder, _super);
    function az_vm_encryption_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_vm_encryption_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    az_vm_encryption_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_vm_encryption_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vm_encryption_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vm_encryption_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vm_encryption_show_command_builder;
}(base_1.CommandBuilder));
/**
 * List the information on available extensions.
 *
 * Syntax:
 * ```
 * az vm extension image list [--latest]
 *                            [--location]
 *                            [--name]
 *                            [--publisher]
 *                            [--query-examples]
 *                            [--subscription]
 *                            [--version]
 * ```
 */
var az_vm_extension_image_list_command_builder = /** @class */ (function (_super) {
    __extends(az_vm_extension_image_list_command_builder, _super);
    function az_vm_extension_image_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Show the latest version only. */
    az_vm_extension_image_list_command_builder.prototype.latest = function (value) {
        this.setFlag("--latest", value);
        return this;
    };
    /** Image location. */
    az_vm_extension_image_list_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Image name. */
    az_vm_extension_image_list_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Image publisher name. */
    az_vm_extension_image_list_command_builder.prototype.publisher = function (value) {
        this.setFlag("--publisher", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_vm_extension_image_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vm_extension_image_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Extension version. */
    az_vm_extension_image_list_command_builder.prototype.version = function (value) {
        this.setFlag("--version", value);
        return this;
    };
    return az_vm_extension_image_list_command_builder;
}(base_1.CommandBuilder));
/**
 * List the names of available extensions.
 *
 * Syntax:
 * ```
 * az vm extension image list-names --location
 *                                  --publisher
 *                                  [--subscription]
 * ```
 *
 * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
 * @param {string} publisher Image publisher name.
 */
var az_vm_extension_image_list_names_command_builder = /** @class */ (function (_super) {
    __extends(az_vm_extension_image_list_names_command_builder, _super);
    function az_vm_extension_image_list_names_command_builder(commandPath, resultDataTypeName, location, publisher) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.location(location);
        _this.publisher(publisher);
        return _this;
    }
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_vm_extension_image_list_names_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Image publisher name. */
    az_vm_extension_image_list_names_command_builder.prototype.publisher = function (value) {
        this.setFlag("--publisher", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vm_extension_image_list_names_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vm_extension_image_list_names_command_builder;
}(base_1.CommandBuilder));
/**
 * List the versions for available extensions.
 *
 * Syntax:
 * ```
 * az vm extension image list-versions --location
 *                                     --name
 *                                     --publisher
 *                                     [--filter]
 *                                     [--orderby]
 *                                     [--subscription]
 *                                     [--top]
 * ```
 *
 * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
 * @param {string} name Name of the extension.
 * @param {string} publisher Image publisher name.
 */
var az_vm_extension_image_list_versions_command_builder = /** @class */ (function (_super) {
    __extends(az_vm_extension_image_list_versions_command_builder, _super);
    function az_vm_extension_image_list_versions_command_builder(commandPath, resultDataTypeName, location, name, publisher) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.location(location);
        _this.name(name);
        _this.publisher(publisher);
        return _this;
    }
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_vm_extension_image_list_versions_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Name of the extension. */
    az_vm_extension_image_list_versions_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Image publisher name. */
    az_vm_extension_image_list_versions_command_builder.prototype.publisher = function (value) {
        this.setFlag("--publisher", value);
        return this;
    };
    /** The filter to apply on the operation. */
    az_vm_extension_image_list_versions_command_builder.prototype.filter = function (value) {
        this.setFlag("--filter", value);
        return this;
    };
    /** The $orderby odata query option. */
    az_vm_extension_image_list_versions_command_builder.prototype.orderby = function (value) {
        this.setFlag("--orderby", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vm_extension_image_list_versions_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The $top odata query option. */
    az_vm_extension_image_list_versions_command_builder.prototype.top = function (value) {
        this.setFlag("--top", value);
        return this;
    };
    return az_vm_extension_image_list_versions_command_builder;
}(base_1.CommandBuilder));
/**
 * Display information for an extension.
 *
 * Syntax:
 * ```
 * az vm extension image show --location
 *                            --name
 *                            --publisher
 *                            --version
 *                            [--query-examples]
 *                            [--subscription]
 * ```
 *
 * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
 * @param {string} name Name of the extension.
 * @param {string} publisher Image publisher name.
 * @param {string} version Extension version.
 */
var az_vm_extension_image_show_command_builder = /** @class */ (function (_super) {
    __extends(az_vm_extension_image_show_command_builder, _super);
    function az_vm_extension_image_show_command_builder(commandPath, resultDataTypeName, location, name, publisher, version) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.location(location);
        _this.name(name);
        _this.publisher(publisher);
        _this.version(version);
        return _this;
    }
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_vm_extension_image_show_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Name of the extension. */
    az_vm_extension_image_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Image publisher name. */
    az_vm_extension_image_show_command_builder.prototype.publisher = function (value) {
        this.setFlag("--publisher", value);
        return this;
    };
    /** Extension version. */
    az_vm_extension_image_show_command_builder.prototype.version = function (value) {
        this.setFlag("--version", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_vm_extension_image_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vm_extension_image_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vm_extension_image_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Remove an extension attached to a VM.
 *
 * Syntax:
 * ```
 * az vm extension delete [--ids]
 *                        [--name]
 *                        [--no-wait]
 *                        [--resource-group]
 *                        [--subscription]
 *                        [--vm-name]
 * ```
 */
var az_vm_extension_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_vm_extension_delete_command_builder, _super);
    function az_vm_extension_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_vm_extension_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the extension. */
    az_vm_extension_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_vm_extension_delete_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vm_extension_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vm_extension_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    az_vm_extension_delete_command_builder.prototype.vmName = function (value) {
        this.setFlag("--vm-name", value);
        return this;
    };
    return az_vm_extension_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * List the extensions attached to a VM.
 *
 * Syntax:
 * ```
 * az vm extension list --resource-group
 *                      --vm-name
 *                      [--query-examples]
 *                      [--subscription]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} vmName The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`.
 */
var az_vm_extension_list_command_builder = /** @class */ (function (_super) {
    __extends(az_vm_extension_list_command_builder, _super);
    function az_vm_extension_list_command_builder(commandPath, resultDataTypeName, resourceGroup, vmName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        _this.vmName(vmName);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vm_extension_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    az_vm_extension_list_command_builder.prototype.vmName = function (value) {
        this.setFlag("--vm-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_vm_extension_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vm_extension_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vm_extension_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Set extensions for a VM.
 *
 * Syntax:
 * ```
 * az vm extension set --name
 *                     --publisher
 *                     [--extension-instance-name]
 *                     [--force-update]
 *                     [--ids]
 *                     [--no-auto-upgrade {false, true}]
 *                     [--no-wait]
 *                     [--protected-settings]
 *                     [--resource-group]
 *                     [--settings]
 *                     [--subscription]
 *                     [--version]
 *                     [--vm-name]
 * ```
 *
 * @param {string} name Name of the extension.
 * @param {string} publisher The name of the extension publisher.
 */
var az_vm_extension_set_command_builder = /** @class */ (function (_super) {
    __extends(az_vm_extension_set_command_builder, _super);
    function az_vm_extension_set_command_builder(commandPath, resultDataTypeName, name, publisher) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.publisher(publisher);
        return _this;
    }
    /** Name of the extension. */
    az_vm_extension_set_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The name of the extension publisher. */
    az_vm_extension_set_command_builder.prototype.publisher = function (value) {
        this.setFlag("--publisher", value);
        return this;
    };
    /** Name of extension instance, which can be customized. Default: name of the extension. */
    az_vm_extension_set_command_builder.prototype.extensionInstanceName = function (value) {
        this.setFlag("--extension-instance-name", value);
        return this;
    };
    /** Force to update even if the extension configuration has not changed. */
    az_vm_extension_set_command_builder.prototype.forceUpdate = function (value) {
        this.setFlag("--force-update", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_vm_extension_set_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** If set, the extension service will not automatically pick or upgrade to the latest minor version, even if the extension is redeployed. */
    az_vm_extension_set_command_builder.prototype.noAutoUpgrade = function (value) {
        this.setFlag("--no-auto-upgrade", value.toString());
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_vm_extension_set_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Protected settings in JSON format for sensitive information like credentials. A JSON file path is also accepted. */
    az_vm_extension_set_command_builder.prototype.protectedSettings = function (value) {
        this.setFlag("--protected-settings", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vm_extension_set_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Extension settings in JSON format. A JSON file path is also accepted. */
    az_vm_extension_set_command_builder.prototype.settings = function (value) {
        this.setFlag("--settings", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vm_extension_set_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The version of the extension. To pin extension version to this value, please specify --no-auto-upgrade. */
    az_vm_extension_set_command_builder.prototype.version = function (value) {
        this.setFlag("--version", value);
        return this;
    };
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    az_vm_extension_set_command_builder.prototype.vmName = function (value) {
        this.setFlag("--vm-name", value);
        return this;
    };
    return az_vm_extension_set_command_builder;
}(base_1.CommandBuilder));
/**
 * Display information about extensions attached to a VM.
 *
 * Syntax:
 * ```
 * az vm extension show [--expand]
 *                      [--ids]
 *                      [--name]
 *                      [--query-examples]
 *                      [--resource-group]
 *                      [--subscription]
 *                      [--vm-name]
 * ```
 */
var az_vm_extension_show_command_builder = /** @class */ (function (_super) {
    __extends(az_vm_extension_show_command_builder, _super);
    function az_vm_extension_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The expand expression to apply on the operation. */
    az_vm_extension_show_command_builder.prototype.expand = function (value) {
        this.setFlag("--expand", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_vm_extension_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the extension. */
    az_vm_extension_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_vm_extension_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vm_extension_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vm_extension_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    az_vm_extension_show_command_builder.prototype.vmName = function (value) {
        this.setFlag("--vm-name", value);
        return this;
    };
    return az_vm_extension_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Place the CLI in a waiting state until a condition of a virtual machine extension is met.
 *
 * Syntax:
 * ```
 * az vm extension wait [--created]
 *                      [--custom]
 *                      [--deleted]
 *                      [--exists]
 *                      [--expand]
 *                      [--ids]
 *                      [--interval]
 *                      [--name]
 *                      [--resource-group]
 *                      [--subscription]
 *                      [--timeout]
 *                      [--updated]
 *                      [--vm-name]
 * ```
 */
var az_vm_extension_wait_command_builder = /** @class */ (function (_super) {
    __extends(az_vm_extension_wait_command_builder, _super);
    function az_vm_extension_wait_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    az_vm_extension_wait_command_builder.prototype.created = function (value) {
        this.setFlag("--created", value);
        return this;
    };
    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    az_vm_extension_wait_command_builder.prototype.custom = function (value) {
        this.setFlag("--custom", value);
        return this;
    };
    /** Wait until deleted. */
    az_vm_extension_wait_command_builder.prototype.deleted = function (value) {
        this.setFlag("--deleted", value);
        return this;
    };
    /** Wait until the resource exists. */
    az_vm_extension_wait_command_builder.prototype.exists = function (value) {
        this.setFlag("--exists", value);
        return this;
    };
    /** The expand expression to apply on the operation. */
    az_vm_extension_wait_command_builder.prototype.expand = function (value) {
        this.setFlag("--expand", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_vm_extension_wait_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Polling interval in seconds. */
    az_vm_extension_wait_command_builder.prototype.interval = function (value) {
        this.setFlag("--interval", value);
        return this;
    };
    /** Name of the extension. */
    az_vm_extension_wait_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vm_extension_wait_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vm_extension_wait_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Maximum wait in seconds. */
    az_vm_extension_wait_command_builder.prototype.timeout = function (value) {
        this.setFlag("--timeout", value);
        return this;
    };
    /** Wait until updated with provisioningState at 'Succeeded'. */
    az_vm_extension_wait_command_builder.prototype.updated = function (value) {
        this.setFlag("--updated", value);
        return this;
    };
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    az_vm_extension_wait_command_builder.prototype.vmName = function (value) {
        this.setFlag("--vm-name", value);
        return this;
    };
    return az_vm_extension_wait_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a dedicated host group.
 *
 * Syntax:
 * ```
 * az vm host group create --name
 *                         --resource-group
 *                         [--automatic-placement {false, true}]
 *                         [--location]
 *                         [--platform-fault-domain-count]
 *                         [--subscription]
 *                         [--tags]
 *                         [--zone {1, 2, 3}]
 * ```
 *
 * @param {string} name Name of the Dedicated Host Group.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_vm_host_group_create_command_builder = /** @class */ (function (_super) {
    __extends(az_vm_host_group_create_command_builder, _super);
    function az_vm_host_group_create_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the Dedicated Host Group. */
    az_vm_host_group_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vm_host_group_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Specify whether virtual machines or virtual machine scale sets can be placed automatically on the dedicated host group. Automatic placement means resources are allocated on dedicated hosts, that are chosen by Azure, under the dedicated host group. The value is defaulted to true when not provided. */
    az_vm_host_group_create_command_builder.prototype.automaticPlacement = function (value) {
        this.setFlag("--automatic-placement", value.toString());
        return this;
    };
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. Otherwise, location will default to the resource group's location. */
    az_vm_host_group_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Number of fault domains that the host group can span. Allowed values: 1, 2, 3. */
    az_vm_host_group_create_command_builder.prototype.platformFaultDomainCount = function (value) {
        this.setFlag("--platform-fault-domain-count", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vm_host_group_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_vm_host_group_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    /** Availability zone into which to provision the resource. */
    az_vm_host_group_create_command_builder.prototype.zone = function (value) {
        this.setFlag("--zone", value);
        return this;
    };
    return az_vm_host_group_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a dedicated host group.
 *
 * Syntax:
 * ```
 * az vm host group delete [--ids]
 *                         [--name]
 *                         [--resource-group]
 *                         [--subscription]
 *                         [--yes]
 * ```
 */
var az_vm_host_group_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_vm_host_group_delete_command_builder, _super);
    function az_vm_host_group_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_vm_host_group_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the Dedicated Host Group. */
    az_vm_host_group_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vm_host_group_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vm_host_group_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_vm_host_group_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_vm_host_group_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * Get instance view of a dedicated host group.
 *
 * Syntax:
 * ```
 * az vm host group get-instance-view [--ids]
 *                                    [--name]
 *                                    [--resource-group]
 *                                    [--subscription]
 * ```
 */
var az_vm_host_group_get_instance_view_command_builder = /** @class */ (function (_super) {
    __extends(az_vm_host_group_get_instance_view_command_builder, _super);
    function az_vm_host_group_get_instance_view_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_vm_host_group_get_instance_view_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the Dedicated Host Group. */
    az_vm_host_group_get_instance_view_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vm_host_group_get_instance_view_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vm_host_group_get_instance_view_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vm_host_group_get_instance_view_command_builder;
}(base_1.CommandBuilder));
/**
 * List dedicated host groups.
 *
 * Syntax:
 * ```
 * az vm host group list [--query-examples]
 *                       [--resource-group]
 *                       [--subscription]
 * ```
 */
var az_vm_host_group_list_command_builder = /** @class */ (function (_super) {
    __extends(az_vm_host_group_list_command_builder, _super);
    function az_vm_host_group_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_vm_host_group_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vm_host_group_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vm_host_group_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vm_host_group_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Get the details of a dedicated host group.
 *
 * Syntax:
 * ```
 * az vm host group show [--ids]
 *                       [--name]
 *                       [--query-examples]
 *                       [--resource-group]
 *                       [--subscription]
 * ```
 */
var az_vm_host_group_show_command_builder = /** @class */ (function (_super) {
    __extends(az_vm_host_group_show_command_builder, _super);
    function az_vm_host_group_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_vm_host_group_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the Dedicated Host Group. */
    az_vm_host_group_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_vm_host_group_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vm_host_group_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vm_host_group_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vm_host_group_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update a dedicated host group.
 *
 * Syntax:
 * ```
 * az vm host group update [--add]
 *                         [--force-string]
 *                         [--ids]
 *                         [--name]
 *                         [--remove]
 *                         [--resource-group]
 *                         [--set]
 *                         [--subscription]
 * ```
 */
var az_vm_host_group_update_command_builder = /** @class */ (function (_super) {
    __extends(az_vm_host_group_update_command_builder, _super);
    function az_vm_host_group_update_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_vm_host_group_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_vm_host_group_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_vm_host_group_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the Dedicated Host Group. */
    az_vm_host_group_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_vm_host_group_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vm_host_group_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_vm_host_group_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vm_host_group_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vm_host_group_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Create a dedicated host.
 *
 * Syntax:
 * ```
 * az vm host create --host-group
 *                   --name
 *                   --resource-group
 *                   --sku {DSv3-Type1, ESv3-Type1, FSv2-Type2}
 *                   [--auto-replace {false, true}]
 *                   [--license-type {None, Windows_Server_Hybrid, Windows_Server_Perpetual}]
 *                   [--location]
 *                   [--platform-fault-domain]
 *                   [--subscription]
 *                   [--tags]
 * ```
 *
 * @param {string} hostGroup Name of the Dedicated Host Group.
 * @param {string} name Name of the Dedicated Host.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {'DSv3-Type1' | 'ESv3-Type1' | 'FSv2-Type2'} sku Sku of the dedicated host.
 */
var az_vm_host_create_command_builder = /** @class */ (function (_super) {
    __extends(az_vm_host_create_command_builder, _super);
    function az_vm_host_create_command_builder(commandPath, resultDataTypeName, hostGroup, name, resourceGroup, sku) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.hostGroup(hostGroup);
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.sku(sku);
        return _this;
    }
    /** Name of the Dedicated Host Group. */
    az_vm_host_create_command_builder.prototype.hostGroup = function (value) {
        this.setFlag("--host-group", value);
        return this;
    };
    /** Name of the Dedicated Host. */
    az_vm_host_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vm_host_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Sku of the dedicated host. */
    az_vm_host_create_command_builder.prototype.sku = function (value) {
        this.setFlag("--sku", value);
        return this;
    };
    /** Replace the host automatically if a failure occurs. */
    az_vm_host_create_command_builder.prototype.autoReplace = function (value) {
        this.setFlag("--auto-replace", value.toString());
        return this;
    };
    /** The software license type that will be applied to the VMs deployed on the dedicated host. */
    az_vm_host_create_command_builder.prototype.licenseType = function (value) {
        this.setFlag("--license-type", value);
        return this;
    };
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. Otherwise, location will default to the resource group's location. */
    az_vm_host_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Fault domain of the host within a group. Allowed values: 0, 1, 2. */
    az_vm_host_create_command_builder.prototype.platformFaultDomain = function (value) {
        this.setFlag("--platform-fault-domain", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vm_host_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_vm_host_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    return az_vm_host_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a dedicated host.
 *
 * Syntax:
 * ```
 * az vm host delete [--host-group]
 *                   [--ids]
 *                   [--name]
 *                   [--resource-group]
 *                   [--subscription]
 *                   [--yes]
 * ```
 */
var az_vm_host_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_vm_host_delete_command_builder, _super);
    function az_vm_host_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Name of the Dedicated Host Group. */
    az_vm_host_delete_command_builder.prototype.hostGroup = function (value) {
        this.setFlag("--host-group", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_vm_host_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the Dedicated Host. */
    az_vm_host_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vm_host_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vm_host_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_vm_host_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_vm_host_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * Get instance information about a dedicated host.
 *
 * Syntax:
 * ```
 * az vm host get-instance-view [--host-group]
 *                              [--ids]
 *                              [--name]
 *                              [--resource-group]
 *                              [--subscription]
 * ```
 */
var az_vm_host_get_instance_view_command_builder = /** @class */ (function (_super) {
    __extends(az_vm_host_get_instance_view_command_builder, _super);
    function az_vm_host_get_instance_view_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Name of the Dedicated Host Group. */
    az_vm_host_get_instance_view_command_builder.prototype.hostGroup = function (value) {
        this.setFlag("--host-group", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_vm_host_get_instance_view_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the Dedicated Host. */
    az_vm_host_get_instance_view_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vm_host_get_instance_view_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vm_host_get_instance_view_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vm_host_get_instance_view_command_builder;
}(base_1.CommandBuilder));
/**
 * List dedicated hosts.
 *
 * Syntax:
 * ```
 * az vm host list --host-group
 *                 --resource-group
 *                 [--query-examples]
 *                 [--subscription]
 * ```
 *
 * @param {string} hostGroup Name of the Dedicated Host Group.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_vm_host_list_command_builder = /** @class */ (function (_super) {
    __extends(az_vm_host_list_command_builder, _super);
    function az_vm_host_list_command_builder(commandPath, resultDataTypeName, hostGroup, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.hostGroup(hostGroup);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the Dedicated Host Group. */
    az_vm_host_list_command_builder.prototype.hostGroup = function (value) {
        this.setFlag("--host-group", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vm_host_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_vm_host_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vm_host_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vm_host_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Get the details of a dedicated host.
 *
 * Syntax:
 * ```
 * az vm host show [--host-group]
 *                 [--ids]
 *                 [--name]
 *                 [--query-examples]
 *                 [--resource-group]
 *                 [--subscription]
 * ```
 */
var az_vm_host_show_command_builder = /** @class */ (function (_super) {
    __extends(az_vm_host_show_command_builder, _super);
    function az_vm_host_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Name of the Dedicated Host Group. */
    az_vm_host_show_command_builder.prototype.hostGroup = function (value) {
        this.setFlag("--host-group", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_vm_host_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the Dedicated Host. */
    az_vm_host_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_vm_host_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vm_host_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vm_host_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vm_host_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Update a dedicated host.
 *
 * Syntax:
 * ```
 * az vm host update [--add]
 *                   [--force-string]
 *                   [--host-group]
 *                   [--ids]
 *                   [--name]
 *                   [--remove]
 *                   [--resource-group]
 *                   [--set]
 *                   [--subscription]
 * ```
 */
var az_vm_host_update_command_builder = /** @class */ (function (_super) {
    __extends(az_vm_host_update_command_builder, _super);
    function az_vm_host_update_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_vm_host_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_vm_host_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** Name of the Dedicated Host Group. */
    az_vm_host_update_command_builder.prototype.hostGroup = function (value) {
        this.setFlag("--host-group", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_vm_host_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Name of the Dedicated Host. */
    az_vm_host_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_vm_host_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vm_host_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_vm_host_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vm_host_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vm_host_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Enable managed service identity on a VM.
 *
 * Syntax:
 * ```
 * az vm identity assign [--identities]
 *                       [--ids]
 *                       [--name]
 *                       [--resource-group]
 *                       [--role]
 *                       [--scope]
 *                       [--subscription]
 * ```
 */
var az_vm_identity_assign_command_builder = /** @class */ (function (_super) {
    __extends(az_vm_identity_assign_command_builder, _super);
    function az_vm_identity_assign_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Space-separated identities to assign. Use '[system]' to refer to the system assigned identity. Default: '[system]'. */
    az_vm_identity_assign_command_builder.prototype.identities = function (value) {
        this.setFlag("--identities", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_vm_identity_assign_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    az_vm_identity_assign_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vm_identity_assign_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Role name or id the system assigned identity will have. */
    az_vm_identity_assign_command_builder.prototype.role = function (value) {
        this.setFlag("--role", value);
        return this;
    };
    /** Scope that the system assigned identity can access. */
    az_vm_identity_assign_command_builder.prototype.scope = function (value) {
        this.setFlag("--scope", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vm_identity_assign_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vm_identity_assign_command_builder;
}(base_1.CommandBuilder));
/**
 * Remove managed service identities from a VM.
 *
 * Syntax:
 * ```
 * az vm identity remove [--identities]
 *                       [--ids]
 *                       [--name]
 *                       [--resource-group]
 *                       [--subscription]
 * ```
 */
var az_vm_identity_remove_command_builder = /** @class */ (function (_super) {
    __extends(az_vm_identity_remove_command_builder, _super);
    function az_vm_identity_remove_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Space-separated identities to remove. Use '[system]' to refer to the system assigned identity. Default: '[system]'. */
    az_vm_identity_remove_command_builder.prototype.identities = function (value) {
        this.setFlag("--identities", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_vm_identity_remove_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    az_vm_identity_remove_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vm_identity_remove_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vm_identity_remove_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vm_identity_remove_command_builder;
}(base_1.CommandBuilder));
/**
 * Display VM's managed identity info.
 *
 * Syntax:
 * ```
 * az vm identity show [--ids]
 *                     [--name]
 *                     [--query-examples]
 *                     [--resource-group]
 *                     [--subscription]
 * ```
 */
var az_vm_identity_show_command_builder = /** @class */ (function (_super) {
    __extends(az_vm_identity_show_command_builder, _super);
    function az_vm_identity_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_vm_identity_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    az_vm_identity_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_vm_identity_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vm_identity_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vm_identity_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vm_identity_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Accept Azure Marketplace image terms so that the image can be used to create VMs.
 *
 * Syntax:
 * ```
 * az vm image terms accept [--offer]
 *                          [--plan]
 *                          [--publisher]
 *                          [--subscription]
 *                          [--urn]
 * ```
 */
var az_vm_image_terms_accept_command_builder = /** @class */ (function (_super) {
    __extends(az_vm_image_terms_accept_command_builder, _super);
    function az_vm_image_terms_accept_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Image offer. */
    az_vm_image_terms_accept_command_builder.prototype.offer = function (value) {
        this.setFlag("--offer", value);
        return this;
    };
    /** Image billing plan. */
    az_vm_image_terms_accept_command_builder.prototype.plan = function (value) {
        this.setFlag("--plan", value);
        return this;
    };
    /** Image publisher. */
    az_vm_image_terms_accept_command_builder.prototype.publisher = function (value) {
        this.setFlag("--publisher", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vm_image_terms_accept_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** URN, in the format of 'publisher:offer:sku:version'. If specified, other argument values can be omitted. */
    az_vm_image_terms_accept_command_builder.prototype.urn = function (value) {
        this.setFlag("--urn", value);
        return this;
    };
    return az_vm_image_terms_accept_command_builder;
}(base_1.CommandBuilder));
/**
 * Cancel Azure Marketplace image terms.
 *
 * Syntax:
 * ```
 * az vm image terms cancel [--offer]
 *                          [--plan]
 *                          [--publisher]
 *                          [--subscription]
 *                          [--urn]
 * ```
 */
var az_vm_image_terms_cancel_command_builder = /** @class */ (function (_super) {
    __extends(az_vm_image_terms_cancel_command_builder, _super);
    function az_vm_image_terms_cancel_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Image offer. */
    az_vm_image_terms_cancel_command_builder.prototype.offer = function (value) {
        this.setFlag("--offer", value);
        return this;
    };
    /** Image billing plan. */
    az_vm_image_terms_cancel_command_builder.prototype.plan = function (value) {
        this.setFlag("--plan", value);
        return this;
    };
    /** Image publisher. */
    az_vm_image_terms_cancel_command_builder.prototype.publisher = function (value) {
        this.setFlag("--publisher", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vm_image_terms_cancel_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** URN, in the format of 'publisher:offer:sku:version'. If specified, other argument values can be omitted. */
    az_vm_image_terms_cancel_command_builder.prototype.urn = function (value) {
        this.setFlag("--urn", value);
        return this;
    };
    return az_vm_image_terms_cancel_command_builder;
}(base_1.CommandBuilder));
/**
 * Get the details of Azure Marketplace image terms.
 *
 * Syntax:
 * ```
 * az vm image terms show [--offer]
 *                        [--plan]
 *                        [--publisher]
 *                        [--query-examples]
 *                        [--subscription]
 *                        [--urn]
 * ```
 */
var az_vm_image_terms_show_command_builder = /** @class */ (function (_super) {
    __extends(az_vm_image_terms_show_command_builder, _super);
    function az_vm_image_terms_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Image offer. */
    az_vm_image_terms_show_command_builder.prototype.offer = function (value) {
        this.setFlag("--offer", value);
        return this;
    };
    /** Image billing plan. */
    az_vm_image_terms_show_command_builder.prototype.plan = function (value) {
        this.setFlag("--plan", value);
        return this;
    };
    /** Image publisher. */
    az_vm_image_terms_show_command_builder.prototype.publisher = function (value) {
        this.setFlag("--publisher", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_vm_image_terms_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vm_image_terms_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** URN, in the format of 'publisher:offer:sku:version'. If specified, other argument values can be omitted. */
    az_vm_image_terms_show_command_builder.prototype.urn = function (value) {
        this.setFlag("--urn", value);
        return this;
    };
    return az_vm_image_terms_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Accept Azure Marketplace term so that the image can be used to create VMs.
 *
 * Syntax:
 * ```
 * az vm image accept-terms [--offer]
 *                          [--plan]
 *                          [--publisher]
 *                          [--subscription]
 *                          [--urn]
 * ```
 */
var az_vm_image_accept_terms_command_builder = /** @class */ (function (_super) {
    __extends(az_vm_image_accept_terms_command_builder, _super);
    function az_vm_image_accept_terms_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Image offer. */
    az_vm_image_accept_terms_command_builder.prototype.offer = function (value) {
        this.setFlag("--offer", value);
        return this;
    };
    /** Image billing plan. */
    az_vm_image_accept_terms_command_builder.prototype.plan = function (value) {
        this.setFlag("--plan", value);
        return this;
    };
    /** Image publisher. */
    az_vm_image_accept_terms_command_builder.prototype.publisher = function (value) {
        this.setFlag("--publisher", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vm_image_accept_terms_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** URN, in format of 'publisher:offer:sku:version'. If specified, other argument values can be omitted. */
    az_vm_image_accept_terms_command_builder.prototype.urn = function (value) {
        this.setFlag("--urn", value);
        return this;
    };
    return az_vm_image_accept_terms_command_builder;
}(base_1.CommandBuilder));
/**
 * List the VM/VMSS images available in the Azure Marketplace.
 *
 * Syntax:
 * ```
 * az vm image list [--all]
 *                  [--location]
 *                  [--offer]
 *                  [--publisher]
 *                  [--query-examples]
 *                  [--sku]
 *                  [--subscription]
 * ```
 */
var az_vm_image_list_command_builder = /** @class */ (function (_super) {
    __extends(az_vm_image_list_command_builder, _super);
    function az_vm_image_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Retrieve image list from live Azure service rather using an offline image list. */
    az_vm_image_list_command_builder.prototype.all = function (value) {
        this.setFlag("--all", value);
        return this;
    };
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_vm_image_list_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Image offer name, partial name is accepted. */
    az_vm_image_list_command_builder.prototype.offer = function (value) {
        this.setFlag("--offer", value);
        return this;
    };
    /** Image publisher name, partial name is accepted. */
    az_vm_image_list_command_builder.prototype.publisher = function (value) {
        this.setFlag("--publisher", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_vm_image_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Image sku name, partial name is accepted. */
    az_vm_image_list_command_builder.prototype.sku = function (value) {
        this.setFlag("--sku", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vm_image_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vm_image_list_command_builder;
}(base_1.CommandBuilder));
/**
 * List the VM image offers available in the Azure Marketplace.
 *
 * Syntax:
 * ```
 * az vm image list-offers --location
 *                         --publisher
 *                         [--subscription]
 * ```
 *
 * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
 * @param {string} publisher A valid image publisher.
 */
var az_vm_image_list_offers_command_builder = /** @class */ (function (_super) {
    __extends(az_vm_image_list_offers_command_builder, _super);
    function az_vm_image_list_offers_command_builder(commandPath, resultDataTypeName, location, publisher) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.location(location);
        _this.publisher(publisher);
        return _this;
    }
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_vm_image_list_offers_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** A valid image publisher. */
    az_vm_image_list_offers_command_builder.prototype.publisher = function (value) {
        this.setFlag("--publisher", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vm_image_list_offers_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vm_image_list_offers_command_builder;
}(base_1.CommandBuilder));
/**
 * List the VM image publishers available in the Azure Marketplace.
 *
 * Syntax:
 * ```
 * az vm image list-publishers --location
 *                             [--subscription]
 * ```
 *
 * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
 */
var az_vm_image_list_publishers_command_builder = /** @class */ (function (_super) {
    __extends(az_vm_image_list_publishers_command_builder, _super);
    function az_vm_image_list_publishers_command_builder(commandPath, resultDataTypeName, location) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.location(location);
        return _this;
    }
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_vm_image_list_publishers_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vm_image_list_publishers_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vm_image_list_publishers_command_builder;
}(base_1.CommandBuilder));
/**
 * List the VM image SKUs available in the Azure Marketplace.
 *
 * Syntax:
 * ```
 * az vm image list-skus --location
 *                       --offer
 *                       --publisher
 *                       [--subscription]
 * ```
 *
 * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
 * @param {string} offer Image offer.
 * @param {string} publisher A valid image publisher.
 */
var az_vm_image_list_skus_command_builder = /** @class */ (function (_super) {
    __extends(az_vm_image_list_skus_command_builder, _super);
    function az_vm_image_list_skus_command_builder(commandPath, resultDataTypeName, location, offer, publisher) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.location(location);
        _this.offer(offer);
        _this.publisher(publisher);
        return _this;
    }
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_vm_image_list_skus_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Image offer. */
    az_vm_image_list_skus_command_builder.prototype.offer = function (value) {
        this.setFlag("--offer", value);
        return this;
    };
    /** A valid image publisher. */
    az_vm_image_list_skus_command_builder.prototype.publisher = function (value) {
        this.setFlag("--publisher", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vm_image_list_skus_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vm_image_list_skus_command_builder;
}(base_1.CommandBuilder));
/**
 * Get the details for a VM image available in the Azure Marketplace.
 *
 * Syntax:
 * ```
 * az vm image show [--location]
 *                  [--offer]
 *                  [--publisher]
 *                  [--query-examples]
 *                  [--sku]
 *                  [--subscription]
 *                  [--urn]
 *                  [--version]
 * ```
 */
var az_vm_image_show_command_builder = /** @class */ (function (_super) {
    __extends(az_vm_image_show_command_builder, _super);
    function az_vm_image_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_vm_image_show_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Image offer. */
    az_vm_image_show_command_builder.prototype.offer = function (value) {
        this.setFlag("--offer", value);
        return this;
    };
    /** Image publisher. */
    az_vm_image_show_command_builder.prototype.publisher = function (value) {
        this.setFlag("--publisher", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_vm_image_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Image sku. */
    az_vm_image_show_command_builder.prototype.sku = function (value) {
        this.setFlag("--sku", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vm_image_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** URN, in format of 'publisher:offer:sku:version'. If specified, other argument values can be omitted. */
    az_vm_image_show_command_builder.prototype.urn = function (value) {
        this.setFlag("--urn", value);
        return this;
    };
    /** Image sku's version. */
    az_vm_image_show_command_builder.prototype.version = function (value) {
        this.setFlag("--version", value);
        return this;
    };
    return az_vm_image_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Execute a query against the Log Analytics workspace linked with a VM.
 *
 * Syntax:
 * ```
 * az vm monitor log show --analytics-query
 *                        [--ids]
 *                        [--name]
 *                        [--query-examples]
 *                        [--resource-group]
 *                        [--subscription]
 *                        [--timespan]
 * ```
 *
 * @param {string} analyticsQuery Query to execute over Log Analytics data.
 */
var az_vm_monitor_log_show_command_builder = /** @class */ (function (_super) {
    __extends(az_vm_monitor_log_show_command_builder, _super);
    function az_vm_monitor_log_show_command_builder(commandPath, resultDataTypeName, analyticsQuery) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.analyticsQuery(analyticsQuery);
        return _this;
    }
    /** Query to execute over Log Analytics data. */
    az_vm_monitor_log_show_command_builder.prototype.analyticsQuery = function (value) {
        this.setFlag("--analytics-query", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_vm_monitor_log_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    az_vm_monitor_log_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_vm_monitor_log_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vm_monitor_log_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vm_monitor_log_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Timespan over which to query. Defaults to querying all available data. */
    az_vm_monitor_log_show_command_builder.prototype.timespan = function (value) {
        this.setFlag("--timespan", value);
        return this;
    };
    return az_vm_monitor_log_show_command_builder;
}(base_1.CommandBuilder));
/**
 * List the metric definitions for a VM.
 *
 * Syntax:
 * ```
 * az vm monitor metrics list-definitions --name
 *                                        --resource-group
 *                                        [--namespace]
 *                                        [--subscription]
 * ```
 *
 * @param {string} name Name or ID of a virtual machine.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_vm_monitor_metrics_list_definitions_command_builder = /** @class */ (function (_super) {
    __extends(az_vm_monitor_metrics_list_definitions_command_builder, _super);
    function az_vm_monitor_metrics_list_definitions_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name or ID of a virtual machine. */
    az_vm_monitor_metrics_list_definitions_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vm_monitor_metrics_list_definitions_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Namespace to query metric definitions for. */
    az_vm_monitor_metrics_list_definitions_command_builder.prototype.namespace = function (value) {
        this.setFlag("--namespace", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vm_monitor_metrics_list_definitions_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vm_monitor_metrics_list_definitions_command_builder;
}(base_1.CommandBuilder));
/**
 * List the metric values for a VM.
 *
 * Syntax:
 * ```
 * az vm monitor metrics tail --name
 *                            --resource-group
 *                            [--aggregation {Average, Count, Maximum, Minimum, Total}]
 *                            [--dimension]
 *                            [--end-time]
 *                            [--filter]
 *                            [--interval]
 *                            [--metadata]
 *                            [--metrics]
 *                            [--namespace]
 *                            [--offset]
 *                            [--orderby]
 *                            [--start-time]
 *                            [--subscription]
 *                            [--top]
 * ```
 *
 * @param {string} name Name or ID of a virtual machine.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_vm_monitor_metrics_tail_command_builder = /** @class */ (function (_super) {
    __extends(az_vm_monitor_metrics_tail_command_builder, _super);
    function az_vm_monitor_metrics_tail_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name or ID of a virtual machine. */
    az_vm_monitor_metrics_tail_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vm_monitor_metrics_tail_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The list of aggregation types (space-separated) to retrieve. */
    az_vm_monitor_metrics_tail_command_builder.prototype.aggregation = function (value) {
        this.setFlag("--aggregation", value);
        return this;
    };
    /** The list of dimensions (space-separated) the metrics are queried into. */
    az_vm_monitor_metrics_tail_command_builder.prototype.dimension = function (value) {
        this.setFlag("--dimension", value);
        return this;
    };
    /** End time of the query. Defaults to the current time. Format: date (yyyy-mm-dd) time (hh:mm:ss.xxxxx) timezone (+/-hh:mm). */
    az_vm_monitor_metrics_tail_command_builder.prototype.endTime = function (value) {
        this.setFlag("--end-time", value);
        return this;
    };
    /** A string used to reduce the set of metric data returned. eg. "LUN eq '\*'". */
    az_vm_monitor_metrics_tail_command_builder.prototype.filter = function (value) {
        this.setFlag("--filter", value);
        return this;
    };
    /** The interval over which to aggregate metrics, in ##h##m format. */
    az_vm_monitor_metrics_tail_command_builder.prototype.interval = function (value) {
        this.setFlag("--interval", value);
        return this;
    };
    /** Return the metadata values instead of metric data. */
    az_vm_monitor_metrics_tail_command_builder.prototype.metadata = function (value) {
        this.setFlag("--metadata", value);
        return this;
    };
    /** Space-separated list of metric names to retrieve. */
    az_vm_monitor_metrics_tail_command_builder.prototype.metrics = function (value) {
        this.setFlag("--metrics", value);
        return this;
    };
    /** Namespace to query metric definitions for. */
    az_vm_monitor_metrics_tail_command_builder.prototype.namespace = function (value) {
        this.setFlag("--namespace", value);
        return this;
    };
    /** Time offset of the query range, in ##d##h format. */
    az_vm_monitor_metrics_tail_command_builder.prototype.offset = function (value) {
        this.setFlag("--offset", value);
        return this;
    };
    /** Aggregation to use for sorting results and the direction of the sort. Only one order can be specificed. Examples: sum asc. */
    az_vm_monitor_metrics_tail_command_builder.prototype.orderby = function (value) {
        this.setFlag("--orderby", value);
        return this;
    };
    /** Start time of the query. Format: date (yyyy-mm-dd) time (hh:mm:ss.xxxxx) timezone (+/-hh:mm). */
    az_vm_monitor_metrics_tail_command_builder.prototype.startTime = function (value) {
        this.setFlag("--start-time", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vm_monitor_metrics_tail_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Max number of records to retrieve. Valid only if --filter used. */
    az_vm_monitor_metrics_tail_command_builder.prototype.top = function (value) {
        this.setFlag("--top", value);
        return this;
    };
    return az_vm_monitor_metrics_tail_command_builder;
}(base_1.CommandBuilder));
/**
 * Add existing NICs to a VM.
 *
 * Syntax:
 * ```
 * az vm nic add --nics
 *               --resource-group
 *               --vm-name
 *               [--primary-nic]
 *               [--subscription]
 * ```
 *
 * @param {string} nics Names or IDs of NICs.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} vmName The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`.
 */
var az_vm_nic_add_command_builder = /** @class */ (function (_super) {
    __extends(az_vm_nic_add_command_builder, _super);
    function az_vm_nic_add_command_builder(commandPath, resultDataTypeName, nics, resourceGroup, vmName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.nics(nics);
        _this.resourceGroup(resourceGroup);
        _this.vmName(vmName);
        return _this;
    }
    /** Names or IDs of NICs. */
    az_vm_nic_add_command_builder.prototype.nics = function (value) {
        this.setFlag("--nics", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vm_nic_add_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    az_vm_nic_add_command_builder.prototype.vmName = function (value) {
        this.setFlag("--vm-name", value);
        return this;
    };
    /** Name or ID of the primary NIC. If missing, the first NIC in the list will be the primary. */
    az_vm_nic_add_command_builder.prototype.primaryNic = function (value) {
        this.setFlag("--primary-nic", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vm_nic_add_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vm_nic_add_command_builder;
}(base_1.CommandBuilder));
/**
 * List the NICs available on a VM.
 *
 * Syntax:
 * ```
 * az vm nic list --resource-group
 *                --vm-name
 *                [--query-examples]
 *                [--subscription]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} vmName The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`.
 */
var az_vm_nic_list_command_builder = /** @class */ (function (_super) {
    __extends(az_vm_nic_list_command_builder, _super);
    function az_vm_nic_list_command_builder(commandPath, resultDataTypeName, resourceGroup, vmName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        _this.vmName(vmName);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vm_nic_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    az_vm_nic_list_command_builder.prototype.vmName = function (value) {
        this.setFlag("--vm-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_vm_nic_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vm_nic_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vm_nic_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Remove NICs from a VM.
 *
 * Syntax:
 * ```
 * az vm nic remove --nics
 *                  --resource-group
 *                  --vm-name
 *                  [--primary-nic]
 *                  [--subscription]
 * ```
 *
 * @param {string} nics Names or IDs of NICs.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} vmName The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`.
 */
var az_vm_nic_remove_command_builder = /** @class */ (function (_super) {
    __extends(az_vm_nic_remove_command_builder, _super);
    function az_vm_nic_remove_command_builder(commandPath, resultDataTypeName, nics, resourceGroup, vmName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.nics(nics);
        _this.resourceGroup(resourceGroup);
        _this.vmName(vmName);
        return _this;
    }
    /** Names or IDs of NICs. */
    az_vm_nic_remove_command_builder.prototype.nics = function (value) {
        this.setFlag("--nics", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vm_nic_remove_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    az_vm_nic_remove_command_builder.prototype.vmName = function (value) {
        this.setFlag("--vm-name", value);
        return this;
    };
    /** Name or ID of the primary NIC. If missing, the first NIC in the list will be the primary. */
    az_vm_nic_remove_command_builder.prototype.primaryNic = function (value) {
        this.setFlag("--primary-nic", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vm_nic_remove_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vm_nic_remove_command_builder;
}(base_1.CommandBuilder));
/**
 * Configure settings of a NIC attached to a VM.
 *
 * Syntax:
 * ```
 * az vm nic set --nics
 *               --resource-group
 *               --vm-name
 *               [--primary-nic]
 *               [--subscription]
 * ```
 *
 * @param {string} nics Names or IDs of NICs.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} vmName The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`.
 */
var az_vm_nic_set_command_builder = /** @class */ (function (_super) {
    __extends(az_vm_nic_set_command_builder, _super);
    function az_vm_nic_set_command_builder(commandPath, resultDataTypeName, nics, resourceGroup, vmName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.nics(nics);
        _this.resourceGroup(resourceGroup);
        _this.vmName(vmName);
        return _this;
    }
    /** Names or IDs of NICs. */
    az_vm_nic_set_command_builder.prototype.nics = function (value) {
        this.setFlag("--nics", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vm_nic_set_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    az_vm_nic_set_command_builder.prototype.vmName = function (value) {
        this.setFlag("--vm-name", value);
        return this;
    };
    /** Name or ID of the primary NIC. If missing, the first NIC in the list will be the primary. */
    az_vm_nic_set_command_builder.prototype.primaryNic = function (value) {
        this.setFlag("--primary-nic", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vm_nic_set_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vm_nic_set_command_builder;
}(base_1.CommandBuilder));
/**
 * Display information for a NIC attached to a VM.
 *
 * Syntax:
 * ```
 * az vm nic show --nic
 *                --resource-group
 *                --vm-name
 *                [--query-examples]
 *                [--subscription]
 * ```
 *
 * @param {string} nic NIC name or ID.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} vmName The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`.
 */
var az_vm_nic_show_command_builder = /** @class */ (function (_super) {
    __extends(az_vm_nic_show_command_builder, _super);
    function az_vm_nic_show_command_builder(commandPath, resultDataTypeName, nic, resourceGroup, vmName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.nic(nic);
        _this.resourceGroup(resourceGroup);
        _this.vmName(vmName);
        return _this;
    }
    /** NIC name or ID. */
    az_vm_nic_show_command_builder.prototype.nic = function (value) {
        this.setFlag("--nic", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vm_nic_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    az_vm_nic_show_command_builder.prototype.vmName = function (value) {
        this.setFlag("--vm-name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_vm_nic_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vm_nic_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vm_nic_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Execute a specific run command on a vm.
 *
 * Syntax:
 * ```
 * az vm run-command invoke --command-id
 *                          [--ids]
 *                          [--name]
 *                          [--parameters]
 *                          [--resource-group]
 *                          [--scripts]
 *                          [--subscription]
 * ```
 *
 * @param {string} commandId The command id.
 */
var az_vm_run_command_invoke_command_builder = /** @class */ (function (_super) {
    __extends(az_vm_run_command_invoke_command_builder, _super);
    function az_vm_run_command_invoke_command_builder(commandPath, resultDataTypeName, commandId) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.commandId(commandId);
        return _this;
    }
    /** The command id. */
    az_vm_run_command_invoke_command_builder.prototype.commandId = function (value) {
        this.setFlag("--command-id", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_vm_run_command_invoke_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    az_vm_run_command_invoke_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Space-separated parameters in the format of '[name=]value'. */
    az_vm_run_command_invoke_command_builder.prototype.parameters = function (value) {
        this.setFlag("--parameters", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vm_run_command_invoke_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Space-separated script lines. Use @{file} to load script from a file. */
    az_vm_run_command_invoke_command_builder.prototype.scripts = function (value) {
        this.setFlag("--scripts", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vm_run_command_invoke_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vm_run_command_invoke_command_builder;
}(base_1.CommandBuilder));
/**
 * Lists all available run commands for a subscription in a location.
 *
 * Syntax:
 * ```
 * az vm run-command list --location
 *                        [--query-examples]
 *                        [--subscription]
 * ```
 *
 * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
 */
var az_vm_run_command_list_command_builder = /** @class */ (function (_super) {
    __extends(az_vm_run_command_list_command_builder, _super);
    function az_vm_run_command_list_command_builder(commandPath, resultDataTypeName, location) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.location(location);
        return _this;
    }
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_vm_run_command_list_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_vm_run_command_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vm_run_command_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vm_run_command_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Gets specific run command for a subscription in a location.
 *
 * Syntax:
 * ```
 * az vm run-command show --command-id
 *                        --location
 *                        [--query-examples]
 *                        [--subscription]
 * ```
 *
 * @param {string} commandId The command id.
 * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
 */
var az_vm_run_command_show_command_builder = /** @class */ (function (_super) {
    __extends(az_vm_run_command_show_command_builder, _super);
    function az_vm_run_command_show_command_builder(commandPath, resultDataTypeName, commandId, location) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.commandId(commandId);
        _this.location(location);
        return _this;
    }
    /** The command id. */
    az_vm_run_command_show_command_builder.prototype.commandId = function (value) {
        this.setFlag("--command-id", value);
        return this;
    };
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_vm_run_command_show_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_vm_run_command_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vm_run_command_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vm_run_command_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Add a secret to a VM.
 *
 * Syntax:
 * ```
 * az vm secret add --certificate
 *                  --keyvault
 *                  [--certificate-store]
 *                  [--ids]
 *                  [--name]
 *                  [--resource-group]
 *                  [--subscription]
 * ```
 *
 * @param {string} certificate Key vault certificate name or its full secret URL.
 * @param {string} keyvault Name or ID of the key vault.
 */
var az_vm_secret_add_command_builder = /** @class */ (function (_super) {
    __extends(az_vm_secret_add_command_builder, _super);
    function az_vm_secret_add_command_builder(commandPath, resultDataTypeName, certificate, keyvault) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.certificate(certificate);
        _this.keyvault(keyvault);
        return _this;
    }
    /** Key vault certificate name or its full secret URL. */
    az_vm_secret_add_command_builder.prototype.certificate = function (value) {
        this.setFlag("--certificate", value);
        return this;
    };
    /** Name or ID of the key vault. */
    az_vm_secret_add_command_builder.prototype.keyvault = function (value) {
        this.setFlag("--keyvault", value);
        return this;
    };
    /** Windows certificate store names. Default: My. */
    az_vm_secret_add_command_builder.prototype.certificateStore = function (value) {
        this.setFlag("--certificate-store", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_vm_secret_add_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    az_vm_secret_add_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vm_secret_add_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vm_secret_add_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vm_secret_add_command_builder;
}(base_1.CommandBuilder));
/**
 * Transform secrets into a form that can be used by VMs and VMSSes.
 *
 * Syntax:
 * ```
 * az vm secret format --secrets
 *                     [--certificate-store]
 *                     [--keyvault]
 *                     [--resource-group]
 *                     [--subscription]
 * ```
 *
 * @param {string} secrets Space-separated list of key vault secret URIs. Perhaps, produced by 'az keyvault secret list-versions --vault-name vaultname -n cert1 --query "[?attributes.enabled].id" -o tsv'.
 */
var az_vm_secret_format_command_builder = /** @class */ (function (_super) {
    __extends(az_vm_secret_format_command_builder, _super);
    function az_vm_secret_format_command_builder(commandPath, resultDataTypeName, secrets) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.secrets(secrets);
        return _this;
    }
    /** Space-separated list of key vault secret URIs. Perhaps, produced by 'az keyvault secret list-versions --vault-name vaultname -n cert1 --query "[?attributes.enabled].id" -o tsv'. */
    az_vm_secret_format_command_builder.prototype.secrets = function (value) {
        this.setFlag("--secrets", value);
        return this;
    };
    /** Windows certificate store names. Default: My. */
    az_vm_secret_format_command_builder.prototype.certificateStore = function (value) {
        this.setFlag("--certificate-store", value);
        return this;
    };
    /** Name or ID of the key vault. */
    az_vm_secret_format_command_builder.prototype.keyvault = function (value) {
        this.setFlag("--keyvault", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vm_secret_format_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vm_secret_format_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vm_secret_format_command_builder;
}(base_1.CommandBuilder));
/**
 * List secrets on a VM.
 *
 * Syntax:
 * ```
 * az vm secret list --name
 *                   --resource-group
 *                   [--query-examples]
 *                   [--subscription]
 * ```
 *
 * @param {string} name The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_vm_secret_list_command_builder = /** @class */ (function (_super) {
    __extends(az_vm_secret_list_command_builder, _super);
    function az_vm_secret_list_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    az_vm_secret_list_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vm_secret_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_vm_secret_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vm_secret_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vm_secret_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Remove a secret from a VM.
 *
 * Syntax:
 * ```
 * az vm secret remove --keyvault
 *                     [--certificate]
 *                     [--ids]
 *                     [--name]
 *                     [--resource-group]
 *                     [--subscription]
 * ```
 *
 * @param {string} keyvault Name or ID of the key vault.
 */
var az_vm_secret_remove_command_builder = /** @class */ (function (_super) {
    __extends(az_vm_secret_remove_command_builder, _super);
    function az_vm_secret_remove_command_builder(commandPath, resultDataTypeName, keyvault) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.keyvault(keyvault);
        return _this;
    }
    /** Name or ID of the key vault. */
    az_vm_secret_remove_command_builder.prototype.keyvault = function (value) {
        this.setFlag("--keyvault", value);
        return this;
    };
    /** Key vault certificate name or its full secret URL. */
    az_vm_secret_remove_command_builder.prototype.certificate = function (value) {
        this.setFlag("--certificate", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_vm_secret_remove_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    az_vm_secret_remove_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vm_secret_remove_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vm_secret_remove_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vm_secret_remove_command_builder;
}(base_1.CommandBuilder));
/**
 * Attach an unmanaged persistent disk to a VM.
 *
 * Syntax:
 * ```
 * az vm unmanaged-disk attach --resource-group
 *                             --vm-name
 *                             [--caching {None, ReadOnly, ReadWrite}]
 *                             [--lun]
 *                             [--name]
 *                             [--new]
 *                             [--size-gb]
 *                             [--subscription]
 *                             [--vhd-uri]
 * ```
 *
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} vmName The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`.
 */
var az_vm_unmanaged_disk_attach_command_builder = /** @class */ (function (_super) {
    __extends(az_vm_unmanaged_disk_attach_command_builder, _super);
    function az_vm_unmanaged_disk_attach_command_builder(commandPath, resultDataTypeName, resourceGroup, vmName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.resourceGroup(resourceGroup);
        _this.vmName(vmName);
        return _this;
    }
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vm_unmanaged_disk_attach_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    az_vm_unmanaged_disk_attach_command_builder.prototype.vmName = function (value) {
        this.setFlag("--vm-name", value);
        return this;
    };
    /** Disk caching policy. */
    az_vm_unmanaged_disk_attach_command_builder.prototype.caching = function (value) {
        this.setFlag("--caching", value);
        return this;
    };
    /** 0-based logical unit number (LUN). Max value depends on the Virtual Machine size. */
    az_vm_unmanaged_disk_attach_command_builder.prototype.lun = function (value) {
        this.setFlag("--lun", value);
        return this;
    };
    /** The data disk name. */
    az_vm_unmanaged_disk_attach_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Create a new disk. */
    az_vm_unmanaged_disk_attach_command_builder.prototype["new"] = function (value) {
        this.setFlag("--new", value);
        return this;
    };
    /** Size in GB. Max size: 4095 GB (certain preview disks can be larger). */
    az_vm_unmanaged_disk_attach_command_builder.prototype.sizeGb = function (value) {
        this.setFlag("--size-gb", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vm_unmanaged_disk_attach_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Virtual hard disk URI. For example: <a href="https://mystorage.blob.core.windows.net/vhds/d1.vhd">https://mystorage.blob.core.windows.net/vhds/d1.vhd</a>. */
    az_vm_unmanaged_disk_attach_command_builder.prototype.vhdUri = function (value) {
        this.setFlag("--vhd-uri", value);
        return this;
    };
    return az_vm_unmanaged_disk_attach_command_builder;
}(base_1.CommandBuilder));
/**
 * Detach an unmanaged disk from a VM.
 *
 * Syntax:
 * ```
 * az vm unmanaged-disk detach --name
 *                             --resource-group
 *                             --vm-name
 *                             [--subscription]
 * ```
 *
 * @param {string} name The data disk name.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 * @param {string} vmName The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`.
 */
var az_vm_unmanaged_disk_detach_command_builder = /** @class */ (function (_super) {
    __extends(az_vm_unmanaged_disk_detach_command_builder, _super);
    function az_vm_unmanaged_disk_detach_command_builder(commandPath, resultDataTypeName, name, resourceGroup, vmName) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        _this.vmName(vmName);
        return _this;
    }
    /** The data disk name. */
    az_vm_unmanaged_disk_detach_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vm_unmanaged_disk_detach_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    az_vm_unmanaged_disk_detach_command_builder.prototype.vmName = function (value) {
        this.setFlag("--vm-name", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vm_unmanaged_disk_detach_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vm_unmanaged_disk_detach_command_builder;
}(base_1.CommandBuilder));
/**
 * List unmanaged disks of a VM.
 *
 * Syntax:
 * ```
 * az vm unmanaged-disk list --name
 *                           --resource-group
 *                           [--query-examples]
 *                           [--subscription]
 * ```
 *
 * @param {string} vmName The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_vm_unmanaged_disk_list_command_builder = /** @class */ (function (_super) {
    __extends(az_vm_unmanaged_disk_list_command_builder, _super);
    function az_vm_unmanaged_disk_list_command_builder(commandPath, resultDataTypeName, vmName, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.vmName(vmName);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    az_vm_unmanaged_disk_list_command_builder.prototype.vmName = function (value) {
        this.setFlag("--vm-name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vm_unmanaged_disk_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_vm_unmanaged_disk_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vm_unmanaged_disk_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vm_unmanaged_disk_list_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a user account from a VM.
 *
 * Syntax:
 * ```
 * az vm user delete --username
 *                   [--ids]
 *                   [--name]
 *                   [--no-wait]
 *                   [--resource-group]
 *                   [--subscription]
 * ```
 *
 * @param {string} username The user name.
 */
var az_vm_user_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_vm_user_delete_command_builder, _super);
    function az_vm_user_delete_command_builder(commandPath, resultDataTypeName, username) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.username(username);
        return _this;
    }
    /** The user name. */
    az_vm_user_delete_command_builder.prototype.username = function (value) {
        this.setFlag("--username", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_vm_user_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    az_vm_user_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_vm_user_delete_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vm_user_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vm_user_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vm_user_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * Reset the SSH configuration on a VM.
 *
 * Syntax:
 * ```
 * az vm user reset-ssh [--ids]
 *                      [--name]
 *                      [--no-wait]
 *                      [--resource-group]
 *                      [--subscription]
 * ```
 */
var az_vm_user_reset_ssh_command_builder = /** @class */ (function (_super) {
    __extends(az_vm_user_reset_ssh_command_builder, _super);
    function az_vm_user_reset_ssh_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_vm_user_reset_ssh_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    az_vm_user_reset_ssh_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_vm_user_reset_ssh_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vm_user_reset_ssh_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vm_user_reset_ssh_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vm_user_reset_ssh_command_builder;
}(base_1.CommandBuilder));
/**
 * Update a user account.
 *
 * Syntax:
 * ```
 * az vm user update --username
 *                   [--ids]
 *                   [--name]
 *                   [--no-wait]
 *                   [--password]
 *                   [--resource-group]
 *                   [--ssh-key-value]
 *                   [--subscription]
 * ```
 *
 * @param {string} username The user name.
 */
var az_vm_user_update_command_builder = /** @class */ (function (_super) {
    __extends(az_vm_user_update_command_builder, _super);
    function az_vm_user_update_command_builder(commandPath, resultDataTypeName, username) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.username(username);
        return _this;
    }
    /** The user name. */
    az_vm_user_update_command_builder.prototype.username = function (value) {
        this.setFlag("--username", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_vm_user_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    az_vm_user_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_vm_user_update_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** The user password. */
    az_vm_user_update_command_builder.prototype.password = function (value) {
        this.setFlag("--password", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vm_user_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** SSH public key file value or public key file path. This command appends the new public key text to the ~/.ssh/authorized_keys file for the admin user on the VM. This does not replace or remove any existing SSH keys. */
    az_vm_user_update_command_builder.prototype.sshKeyValue = function (value) {
        this.setFlag("--ssh-key-value", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vm_user_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vm_user_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Assess patches on a VM.
 *
 * Syntax:
 * ```
 * az vm assess-patches [--ids]
 *                      [--name]
 *                      [--resource-group]
 *                      [--subscription]
 * ```
 */
var az_vm_assess_patches_command_builder = /** @class */ (function (_super) {
    __extends(az_vm_assess_patches_command_builder, _super);
    function az_vm_assess_patches_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_vm_assess_patches_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    az_vm_assess_patches_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vm_assess_patches_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vm_assess_patches_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vm_assess_patches_command_builder;
}(base_1.CommandBuilder));
/**
 * Manage auto-shutdown for VM.
 *
 * Syntax:
 * ```
 * az vm auto-shutdown [--email]
 *                     [--ids]
 *                     [--location]
 *                     [--name]
 *                     [--off]
 *                     [--resource-group]
 *                     [--subscription]
 *                     [--time]
 *                     [--webhook]
 * ```
 */
var az_vm_auto_shutdown_command_builder = /** @class */ (function (_super) {
    __extends(az_vm_auto_shutdown_command_builder, _super);
    function az_vm_auto_shutdown_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** The email recipient to send notifications to (can be a list of semi-colon separated email addresses). */
    az_vm_auto_shutdown_command_builder.prototype.email = function (value) {
        this.setFlag("--email", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_vm_auto_shutdown_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_vm_auto_shutdown_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    az_vm_auto_shutdown_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Turn off auto-shutdown for VM. Configuration will be cleared. */
    az_vm_auto_shutdown_command_builder.prototype.off = function (value) {
        this.setFlag("--off", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vm_auto_shutdown_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vm_auto_shutdown_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** The UTC time of day the schedule will occur every day. Format: hhmm. Example: 1730. */
    az_vm_auto_shutdown_command_builder.prototype.time = function (value) {
        this.setFlag("--time", value);
        return this;
    };
    /** The webhook URL to which the notification will be sent. */
    az_vm_auto_shutdown_command_builder.prototype.webhook = function (value) {
        this.setFlag("--webhook", value);
        return this;
    };
    return az_vm_auto_shutdown_command_builder;
}(base_1.CommandBuilder));
/**
 * Capture information for a stopped VM.
 *
 * Syntax:
 * ```
 * az vm capture --vhd-name-prefix
 *               [--ids]
 *               [--name]
 *               [--overwrite]
 *               [--resource-group]
 *               [--storage-container]
 *               [--subscription]
 * ```
 *
 * @param {string} vhdNamePrefix The VHD name prefix specify for the VM disks.
 */
var az_vm_capture_command_builder = /** @class */ (function (_super) {
    __extends(az_vm_capture_command_builder, _super);
    function az_vm_capture_command_builder(commandPath, resultDataTypeName, vhdNamePrefix) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.vhdNamePrefix(vhdNamePrefix);
        return _this;
    }
    /** The VHD name prefix specify for the VM disks. */
    az_vm_capture_command_builder.prototype.vhdNamePrefix = function (value) {
        this.setFlag("--vhd-name-prefix", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_vm_capture_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    az_vm_capture_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Overwrite the existing disk file. */
    az_vm_capture_command_builder.prototype.overwrite = function (value) {
        this.setFlag("--overwrite", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vm_capture_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** The storage account container name in which to save the disks. */
    az_vm_capture_command_builder.prototype.storageContainer = function (value) {
        this.setFlag("--storage-container", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vm_capture_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vm_capture_command_builder;
}(base_1.CommandBuilder));
/**
 * Convert a VM with unmanaged disks to use managed disks.
 *
 * Syntax:
 * ```
 * az vm convert [--ids]
 *               [--name]
 *               [--resource-group]
 *               [--subscription]
 * ```
 */
var az_vm_convert_command_builder = /** @class */ (function (_super) {
    __extends(az_vm_convert_command_builder, _super);
    function az_vm_convert_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_vm_convert_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    az_vm_convert_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vm_convert_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vm_convert_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vm_convert_command_builder;
}(base_1.CommandBuilder));
/**
 * Create an Azure Virtual Machine.
 *
 * Syntax:
 * ```
 * az vm create --name
 *              --resource-group
 *              [--accelerated-networking {false, true}]
 *              [--admin-password]
 *              [--admin-username]
 *              [--asgs]
 *              [--assign-identity]
 *              [--attach-data-disks]
 *              [--attach-os-disk]
 *              [--authentication-type {all, password, ssh}]
 *              [--availability-set]
 *              [--boot-diagnostics-storage]
 *              [--computer-name]
 *              [--custom-data]
 *              [--data-disk-caching]
 *              [--data-disk-encryption-sets]
 *              [--data-disk-sizes-gb]
 *              [--enable-agent {false, true}]
 *              [--enable-auto-update {false, true}]
 *              [--encryption-at-host {false, true}]
 *              [--ephemeral-os-disk {false, true}]
 *              [--eviction-policy {Deallocate, Delete}]
 *              [--generate-ssh-keys]
 *              [--host]
 *              [--host-group]
 *              [--image]
 *              [--license-type {None, RHEL_BYOS, SLES_BYOS, Windows_Client, Windows_Server}]
 *              [--location]
 *              [--max-price]
 *              [--nics]
 *              [--no-wait]
 *              [--nsg]
 *              [--nsg-rule {NONE, RDP, SSH}]
 *              [--os-disk-caching {None, ReadOnly, ReadWrite}]
 *              [--os-disk-encryption-set]
 *              [--os-disk-name]
 *              [--os-disk-size-gb]
 *              [--os-type {linux, windows}]
 *              [--patch-mode {AutomaticByOS, AutomaticByPlatform, Manual}]
 *              [--plan-name]
 *              [--plan-product]
 *              [--plan-promotion-code]
 *              [--plan-publisher]
 *              [--ppg]
 *              [--priority {Low, Regular, Spot}]
 *              [--private-ip-address]
 *              [--public-ip-address]
 *              [--public-ip-address-allocation {dynamic, static}]
 *              [--public-ip-address-dns-name]
 *              [--public-ip-sku {Basic, Standard}]
 *              [--role]
 *              [--scope]
 *              [--secrets]
 *              [--size]
 *              [--specialized {false, true}]
 *              [--ssh-dest-key-path]
 *              [--ssh-key-values]
 *              [--storage-account]
 *              [--storage-container-name]
 *              [--storage-sku]
 *              [--subnet]
 *              [--subnet-address-prefix]
 *              [--subscription]
 *              [--tags]
 *              [--ultra-ssd-enabled {false, true}]
 *              [--use-unmanaged-disk]
 *              [--validate]
 *              [--vmss]
 *              [--vnet-address-prefix]
 *              [--vnet-name]
 *              [--workspace]
 *              [--zone {1, 2, 3}]
 * ```
 *
 * @param {string} name Name of the virtual machine.
 * @param {string} resourceGroup Name of resource group. You can configure the default group using `az configure --defaults group=<name>`.
 */
var az_vm_create_command_builder = /** @class */ (function (_super) {
    __extends(az_vm_create_command_builder, _super);
    function az_vm_create_command_builder(commandPath, resultDataTypeName, name, resourceGroup) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.name(name);
        _this.resourceGroup(resourceGroup);
        return _this;
    }
    /** Name of the virtual machine. */
    az_vm_create_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vm_create_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Enable accelerated networking. Unless specified, CLI will enable it based on machine image and size. */
    az_vm_create_command_builder.prototype.acceleratedNetworking = function (value) {
        this.setFlag("--accelerated-networking", value.toString());
        return this;
    };
    /** Password for the VM if authentication type is 'Password'. */
    az_vm_create_command_builder.prototype.adminPassword = function (value) {
        this.setFlag("--admin-password", value);
        return this;
    };
    /** Username for the VM. Default value is current username of OS. If the default value is system reserved, then default value will be set to azureuser. Please refer to <a href="https://docs.microsoft.com/en-us/rest/api/compute/virtualmachines/createorupdate#osprofile">https://docs.microsoft.com/en-us/rest/api/compute/virtualmachines/createorupdate#osprofile</a> to get a full list of reserved values. */
    az_vm_create_command_builder.prototype.adminUsername = function (value) {
        this.setFlag("--admin-username", value);
        return this;
    };
    /** Space-separated list of existing application security groups to associate with the VM. */
    az_vm_create_command_builder.prototype.asgs = function (value) {
        this.setFlag("--asgs", value);
        return this;
    };
    /** Accept system or user assigned identities separated by spaces. Use '[system]' to refer system assigned identity, or a resource id to refer user assigned identity. Check out help for more examples. */
    az_vm_create_command_builder.prototype.assignIdentity = function (value) {
        this.setFlag("--assign-identity", value);
        return this;
    };
    /** Attach existing data disks to the VM. Can use the name or ID of a managed disk or the URI to an unmanaged disk VHD. */
    az_vm_create_command_builder.prototype.attachDataDisks = function (value) {
        this.setFlag("--attach-data-disks", value);
        return this;
    };
    /** Attach an existing OS disk to the VM. Can use the name or ID of a managed disk or the URI to an unmanaged disk VHD. */
    az_vm_create_command_builder.prototype.attachOsDisk = function (value) {
        this.setFlag("--attach-os-disk", value);
        return this;
    };
    /** Type of authentication to use with the VM. Defaults to password for Windows and SSH public key for Linux. "all" enables both ssh and password authentication. */
    az_vm_create_command_builder.prototype.authenticationType = function (value) {
        this.setFlag("--authentication-type", value);
        return this;
    };
    /** Name or ID of an existing availability set to add the VM to. None by default. */
    az_vm_create_command_builder.prototype.availabilitySet = function (value) {
        this.setFlag("--availability-set", value);
        return this;
    };
    /** Pre-existing storage account name or its blob uri to capture boot diagnostics. Its sku should be one of Standard_GRS, Standard_LRS and Standard_RAGRS. */
    az_vm_create_command_builder.prototype.bootDiagnosticsStorage = function (value) {
        this.setFlag("--boot-diagnostics-storage", value);
        return this;
    };
    /** The host OS name of the virtual machine. Defaults to the name of the VM. */
    az_vm_create_command_builder.prototype.computerName = function (value) {
        this.setFlag("--computer-name", value);
        return this;
    };
    /** Custom init script file or text (cloud-init, cloud-config, etc..). */
    az_vm_create_command_builder.prototype.customData = function (value) {
        this.setFlag("--custom-data", value);
        return this;
    };
    /** Storage caching type for data disk(s), including 'None', 'ReadOnly', 'ReadWrite', etc. Use a singular value to apply on all disks, or use `<lun>=<vaule1> <lun>=<value2>` to configure individual disk. */
    az_vm_create_command_builder.prototype.dataDiskCaching = function (value) {
        this.setFlag("--data-disk-caching", value);
        return this;
    };
    /** Names or IDs (space delimited) of disk encryption sets for data disks. */
    az_vm_create_command_builder.prototype.dataDiskEncryptionSets = function (value) {
        this.setFlag("--data-disk-encryption-sets", value);
        return this;
    };
    /** Space-separated empty managed data disk sizes in GB to create. */
    az_vm_create_command_builder.prototype.dataDiskSizesGb = function (value) {
        this.setFlag("--data-disk-sizes-gb", value);
        return this;
    };
    /** Indicates whether virtual machine agent should be provisioned on the virtual machine. When this property is not specified, default behavior is to set it to true. This will ensure that VM Agent is installed on the VM so that extensions can be added to the VM later. */
    az_vm_create_command_builder.prototype.enableAgent = function (value) {
        this.setFlag("--enable-agent", value.toString());
        return this;
    };
    /** Indicate whether Automatic Updates is enabled for the Windows virtual machine. */
    az_vm_create_command_builder.prototype.enableAutoUpdate = function (value) {
        this.setFlag("--enable-auto-update", value.toString());
        return this;
    };
    /** Enable Host Encryption for the VM or VMSS. This will enable the encryption for all the disks including Resource/Temp disk at host itself. */
    az_vm_create_command_builder.prototype.encryptionAtHost = function (value) {
        this.setFlag("--encryption-at-host", value.toString());
        return this;
    };
    /** Allows you to create an OS disk directly on the host node, providing local disk performance and faster VM/VMSS reimage time. */
    az_vm_create_command_builder.prototype.ephemeralOsDisk = function (value) {
        this.setFlag("--ephemeral-os-disk", value.toString());
        return this;
    };
    /** The eviction policy for the Spot priority virtual machine. Default eviction policy is Deallocate for a Spot priority virtual machine. */
    az_vm_create_command_builder.prototype.evictionPolicy = function (value) {
        this.setFlag("--eviction-policy", value);
        return this;
    };
    /** Generate SSH public and private key files if missing. The keys will be stored in the ~/.ssh directory. */
    az_vm_create_command_builder.prototype.generateSshKeys = function (value) {
        this.setFlag("--generate-ssh-keys", value);
        return this;
    };
    /** Name or ID of the dedicated host this VM will reside in. If a name is specified, a host group must be specified via `--host-group`. */
    az_vm_create_command_builder.prototype.host = function (value) {
        this.setFlag("--host", value);
        return this;
    };
    /** Name of the dedicated host group containing the dedicated host this VM will reside in. */
    az_vm_create_command_builder.prototype.hostGroup = function (value) {
        this.setFlag("--host-group", value);
        return this;
    };
    /** The name of the operating system image as a URN alias, URN, custom image name or ID, custom image version ID, or VHD blob URI. This parameter is required unless using `--attach-os-disk.` Valid URN format: "Publisher:Offer:Sku:Version". */
    az_vm_create_command_builder.prototype.image = function (value) {
        this.setFlag("--image", value);
        return this;
    };
    /** Specifies that the Windows image or disk was licensed on-premises. To enable Azure Hybrid Benefit for Windows Server, use 'Windows_Server'. To enable Multitenant Hosting Rights for Windows 10, use 'Windows_Client'. For more information see the Azure Windows VM online docs. */
    az_vm_create_command_builder.prototype.licenseType = function (value) {
        this.setFlag("--license-type", value);
        return this;
    };
    /** Location in which to create VM and related resources. If default location is not configured, will default to the resource group's location. */
    az_vm_create_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** The maximum price (in US Dollars) you are willing to pay for a Spot VM/VMSS. -1 indicates that the Spot VM/VMSS should not be evicted for price reasons. */
    az_vm_create_command_builder.prototype.maxPrice = function (value) {
        this.setFlag("--max-price", value);
        return this;
    };
    /** Names or IDs of existing NICs to attach to the VM. The first NIC will be designated as primary. If omitted, a new NIC will be created. If an existing NIC is specified, do not specify subnet, VNet, public IP or NSG. */
    az_vm_create_command_builder.prototype.nics = function (value) {
        this.setFlag("--nics", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_vm_create_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** The name to use when creating a new Network Security Group (default) or referencing an existing one. Can also reference an existing NSG by ID or specify "" for none ('""' in Azure CLI using PowerShell or --% operator). */
    az_vm_create_command_builder.prototype.nsg = function (value) {
        this.setFlag("--nsg", value);
        return this;
    };
    /** NSG rule to create when creating a new NSG. Defaults to open ports for allowing RDP on Windows and allowing SSH on Linux. NONE represents no NSG rule. */
    az_vm_create_command_builder.prototype.nsgRule = function (value) {
        this.setFlag("--nsg-rule", value);
        return this;
    };
    /** Storage caching type for the VM OS disk. Default: ReadWrite. */
    az_vm_create_command_builder.prototype.osDiskCaching = function (value) {
        this.setFlag("--os-disk-caching", value);
        return this;
    };
    /** Name or ID of disk encryption set for OS disk. */
    az_vm_create_command_builder.prototype.osDiskEncryptionSet = function (value) {
        this.setFlag("--os-disk-encryption-set", value);
        return this;
    };
    /** The name of the new VM OS disk. */
    az_vm_create_command_builder.prototype.osDiskName = function (value) {
        this.setFlag("--os-disk-name", value);
        return this;
    };
    /** OS disk size in GB to create. */
    az_vm_create_command_builder.prototype.osDiskSizeGb = function (value) {
        this.setFlag("--os-disk-size-gb", value);
        return this;
    };
    /** Type of OS installed on a custom VHD. Do not use when specifying an URN or URN alias. */
    az_vm_create_command_builder.prototype.osType = function (value) {
        this.setFlag("--os-type", value);
        return this;
    };
    /** Mode of in-guest patching to IaaS virtual machine. Possible values are: Manual - You  control the application of patches to a virtual machine. You do this by applying patches manually inside the VM. In this mode, automatic updates are disabled; the paramater --enable-auto-update must be false. AutomaticByOS - The virtual machine will automatically be updated by the OS. The parameter --enable-auto-update must be true. AutomaticByPlatform - the virtual machine will automatically updated by the OS. The parameter --enable-agent and --enable-auto-update must be true. */
    az_vm_create_command_builder.prototype.patchMode = function (value) {
        this.setFlag("--patch-mode", value);
        return this;
    };
    /** Plan name. */
    az_vm_create_command_builder.prototype.planName = function (value) {
        this.setFlag("--plan-name", value);
        return this;
    };
    /** Plan product. */
    az_vm_create_command_builder.prototype.planProduct = function (value) {
        this.setFlag("--plan-product", value);
        return this;
    };
    /** Plan promotion code. */
    az_vm_create_command_builder.prototype.planPromotionCode = function (value) {
        this.setFlag("--plan-promotion-code", value);
        return this;
    };
    /** Plan publisher. */
    az_vm_create_command_builder.prototype.planPublisher = function (value) {
        this.setFlag("--plan-publisher", value);
        return this;
    };
    /** The name or ID of the proximity placement group the VM should be associated with. */
    az_vm_create_command_builder.prototype.ppg = function (value) {
        this.setFlag("--ppg", value);
        return this;
    };
    /** Priority. Use 'Spot' to run short-lived workloads in a cost-effective way. 'Low' enum will be deprecated in the future. Please use 'Spot' to deploy Azure spot VM and/or VMSS. Default to Regular. */
    az_vm_create_command_builder.prototype.priority = function (value) {
        this.setFlag("--priority", value);
        return this;
    };
    /** Static private IP address (e.g. 10.0.0.5). */
    az_vm_create_command_builder.prototype.privateIpAddress = function (value) {
        this.setFlag("--private-ip-address", value);
        return this;
    };
    /** Name of the public IP address when creating one (default) or referencing an existing one. Can also reference an existing public IP by ID or specify "" for None ('""' in Azure CLI using PowerShell or --% operator). */
    az_vm_create_command_builder.prototype.publicIpAddress = function (value) {
        this.setFlag("--public-ip-address", value);
        return this;
    };
    /** */
    az_vm_create_command_builder.prototype.publicIpAddressAllocation = function (value) {
        this.setFlag("--public-ip-address-allocation", value);
        return this;
    };
    /** Globally unique DNS name for a newly created public IP. */
    az_vm_create_command_builder.prototype.publicIpAddressDnsName = function (value) {
        this.setFlag("--public-ip-address-dns-name", value);
        return this;
    };
    /** Public IP SKU. It is set to Basic by default. */
    az_vm_create_command_builder.prototype.publicIpSku = function (value) {
        this.setFlag("--public-ip-sku", value);
        return this;
    };
    /** Role name or id the system assigned identity will have. */
    az_vm_create_command_builder.prototype.role = function (value) {
        this.setFlag("--role", value);
        return this;
    };
    /** Scope that the system assigned identity can access. */
    az_vm_create_command_builder.prototype.scope = function (value) {
        this.setFlag("--scope", value);
        return this;
    };
    /** One or many Key Vault secrets as JSON strings or files via `@{path}` containing `[{ "sourceVault": { "id": "value" }, "vaultCertificates": [{ "certificateUrl": "value", "certificateStore": "cert store name (only on windows)"}] }]`. */
    az_vm_create_command_builder.prototype.secrets = function (value) {
        this.setFlag("--secrets", value);
        return this;
    };
    /** The VM size to be created. See <a href="https://azure.microsoft.com/pricing/details/virtual-machines/">https://azure.microsoft.com/pricing/details/virtual-machines/</a> for size info. */
    az_vm_create_command_builder.prototype.size = function (value) {
        this.setFlag("--size", value);
        return this;
    };
    /** Indicate whether the source image is specialized. */
    az_vm_create_command_builder.prototype.specialized = function (value) {
        this.setFlag("--specialized", value.toString());
        return this;
    };
    /** Destination file path on the VM for the SSH key. If the file already exists, the specified key(s) are appended to the file. Destination path for SSH public keys is currently limited to its default value "/home/username/.ssh/authorized_keys" due to a known issue in Linux provisioning agent. */
    az_vm_create_command_builder.prototype.sshDestKeyPath = function (value) {
        this.setFlag("--ssh-dest-key-path", value);
        return this;
    };
    /** Space-separated list of SSH public keys or public key file paths. */
    az_vm_create_command_builder.prototype.sshKeyValues = function (value) {
        this.setFlag("--ssh-key-values", value);
        return this;
    };
    /** Only applicable when used with `--use-unmanaged-disk`. The name to use when creating a new storage account or referencing an existing one. If omitted, an appropriate storage account in the same resource group and location will be used, or a new one will be created. */
    az_vm_create_command_builder.prototype.storageAccount = function (value) {
        this.setFlag("--storage-account", value);
        return this;
    };
    /** Only applicable when used with `--use-unmanaged-disk`. Name of the storage container for the VM OS disk. Default: vhds. */
    az_vm_create_command_builder.prototype.storageContainerName = function (value) {
        this.setFlag("--storage-container-name", value);
        return this;
    };
    /** The SKU of the storage account with which to persist VM. Use a singular sku that would be applied across all disks, or specify individual disks. Usage: [--storage-sku SKU | --storage-sku ID=SKU ID=SKU ID=SKU...], where each ID is "os" or a 0-indexed lun. Allowed values: Standard_LRS, Premium_LRS, StandardSSD_LRS, UltraSSD_LRS. */
    az_vm_create_command_builder.prototype.storageSku = function (value) {
        this.setFlag("--storage-sku", value);
        return this;
    };
    /** The name of the subnet when creating a new VNet or referencing an existing one. Can also reference an existing subnet by ID. If both vnet-name and subnet are omitted, an appropriate VNet and subnet will be selected automatically, or a new one will be created. */
    az_vm_create_command_builder.prototype.subnet = function (value) {
        this.setFlag("--subnet", value);
        return this;
    };
    /** The subnet IP address prefix to use when creating a new VNet in CIDR format. */
    az_vm_create_command_builder.prototype.subnetAddressPrefix = function (value) {
        this.setFlag("--subnet-address-prefix", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vm_create_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags. */
    az_vm_create_command_builder.prototype.tags = function (value) {
        this.setFlag("--tags", value);
        return this;
    };
    /** Enables or disables the capability to have 1 or more managed data disks with UltraSSD_LRS storage account. */
    az_vm_create_command_builder.prototype.ultraSsdEnabled = function (value) {
        this.setFlag("--ultra-ssd-enabled", value.toString());
        return this;
    };
    /** Do not use managed disk to persist VM. */
    az_vm_create_command_builder.prototype.useUnmanagedDisk = function (value) {
        this.setFlag("--use-unmanaged-disk", value);
        return this;
    };
    /** Generate and validate the ARM template without creating any resources. */
    az_vm_create_command_builder.prototype.validate = function (value) {
        this.setFlag("--validate", value);
        return this;
    };
    /** Name or ID of an existing virtual machine scale set that the virtual machine should be assigned to. None by default. */
    az_vm_create_command_builder.prototype.vmss = function (value) {
        this.setFlag("--vmss", value);
        return this;
    };
    /** The IP address prefix to use when creating a new VNet in CIDR format. */
    az_vm_create_command_builder.prototype.vnetAddressPrefix = function (value) {
        this.setFlag("--vnet-address-prefix", value);
        return this;
    };
    /** Name of the virtual network when creating a new one or referencing an existing one. */
    az_vm_create_command_builder.prototype.vnetName = function (value) {
        this.setFlag("--vnet-name", value);
        return this;
    };
    /** Name or ID of Log Analytics Workspace. If you specify the workspace through its name, the workspace should be in the same resource group with the vm, otherwise a new workspace will be created. */
    az_vm_create_command_builder.prototype.workspace = function (value) {
        this.setFlag("--workspace", value);
        return this;
    };
    /** Availability zone into which to provision the resource. */
    az_vm_create_command_builder.prototype.zone = function (value) {
        this.setFlag("--zone", value);
        return this;
    };
    return az_vm_create_command_builder;
}(base_1.CommandBuilder));
/**
 * Deallocate a VM.
 *
 * Syntax:
 * ```
 * az vm deallocate [--ids]
 *                  [--name]
 *                  [--no-wait]
 *                  [--resource-group]
 *                  [--subscription]
 * ```
 */
var az_vm_deallocate_command_builder = /** @class */ (function (_super) {
    __extends(az_vm_deallocate_command_builder, _super);
    function az_vm_deallocate_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_vm_deallocate_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    az_vm_deallocate_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_vm_deallocate_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vm_deallocate_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vm_deallocate_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vm_deallocate_command_builder;
}(base_1.CommandBuilder));
/**
 * Delete a VM.
 *
 * Syntax:
 * ```
 * az vm delete [--ids]
 *              [--name]
 *              [--no-wait]
 *              [--resource-group]
 *              [--subscription]
 *              [--yes]
 * ```
 */
var az_vm_delete_command_builder = /** @class */ (function (_super) {
    __extends(az_vm_delete_command_builder, _super);
    function az_vm_delete_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_vm_delete_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    az_vm_delete_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_vm_delete_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vm_delete_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vm_delete_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Do not prompt for confirmation. */
    az_vm_delete_command_builder.prototype.yes = function (value) {
        this.setFlag("--yes", value);
        return this;
    };
    return az_vm_delete_command_builder;
}(base_1.CommandBuilder));
/**
 * Mark a VM as generalized, allowing it to be imaged for multiple deployments.
 *
 * Syntax:
 * ```
 * az vm generalize [--ids]
 *                  [--name]
 *                  [--no-wait]
 *                  [--resource-group]
 *                  [--subscription]
 * ```
 */
var az_vm_generalize_command_builder = /** @class */ (function (_super) {
    __extends(az_vm_generalize_command_builder, _super);
    function az_vm_generalize_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_vm_generalize_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    az_vm_generalize_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_vm_generalize_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vm_generalize_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vm_generalize_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vm_generalize_command_builder;
}(base_1.CommandBuilder));
/**
 * Get instance information about a VM.
 *
 * Syntax:
 * ```
 * az vm get-instance-view [--ids]
 *                         [--name]
 *                         [--resource-group]
 *                         [--subscription]
 * ```
 */
var az_vm_get_instance_view_command_builder = /** @class */ (function (_super) {
    __extends(az_vm_get_instance_view_command_builder, _super);
    function az_vm_get_instance_view_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_vm_get_instance_view_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    az_vm_get_instance_view_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vm_get_instance_view_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vm_get_instance_view_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vm_get_instance_view_command_builder;
}(base_1.CommandBuilder));
/**
 * List details of Virtual Machines.
 *
 * Syntax:
 * ```
 * az vm list [--query-examples]
 *            [--resource-group]
 *            [--show-details]
 *            [--subscription]
 * ```
 */
var az_vm_list_command_builder = /** @class */ (function (_super) {
    __extends(az_vm_list_command_builder, _super);
    function az_vm_list_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_vm_list_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vm_list_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Show public ip address, FQDN, and power states. command will run slow. */
    az_vm_list_command_builder.prototype.showDetails = function (value) {
        this.setFlag("--show-details", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vm_list_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vm_list_command_builder;
}(base_1.CommandBuilder));
/**
 * List IP addresses associated with a VM.
 *
 * Syntax:
 * ```
 * az vm list-ip-addresses [--ids]
 *                         [--name]
 *                         [--resource-group]
 *                         [--subscription]
 * ```
 */
var az_vm_list_ip_addresses_command_builder = /** @class */ (function (_super) {
    __extends(az_vm_list_ip_addresses_command_builder, _super);
    function az_vm_list_ip_addresses_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_vm_list_ip_addresses_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    az_vm_list_ip_addresses_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vm_list_ip_addresses_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vm_list_ip_addresses_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vm_list_ip_addresses_command_builder;
}(base_1.CommandBuilder));
/**
 * List available sizes for VMs.
 *
 * Syntax:
 * ```
 * az vm list-sizes --location
 *                  [--subscription]
 * ```
 *
 * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
 */
var az_vm_list_sizes_command_builder = /** @class */ (function (_super) {
    __extends(az_vm_list_sizes_command_builder, _super);
    function az_vm_list_sizes_command_builder(commandPath, resultDataTypeName, location) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.location(location);
        return _this;
    }
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_vm_list_sizes_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vm_list_sizes_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vm_list_sizes_command_builder;
}(base_1.CommandBuilder));
/**
 * Get details for compute-related resource SKUs.
 *
 * Syntax:
 * ```
 * az vm list-skus [--all {false, true}]
 *                 [--location]
 *                 [--resource-type]
 *                 [--size]
 *                 [--subscription]
 *                 [--zone {false, true}]
 * ```
 */
var az_vm_list_skus_command_builder = /** @class */ (function (_super) {
    __extends(az_vm_list_skus_command_builder, _super);
    function az_vm_list_skus_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Show all information including vm sizes not available under the current subscription. */
    az_vm_list_skus_command_builder.prototype.all = function (value) {
        this.setFlag("--all", value.toString());
        return this;
    };
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_vm_list_skus_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Resource types e.g. "availabilitySets", "snapshots", "disks", etc. */
    az_vm_list_skus_command_builder.prototype.resourceType = function (value) {
        this.setFlag("--resource-type", value);
        return this;
    };
    /** Size name, partial name is accepted. */
    az_vm_list_skus_command_builder.prototype.size = function (value) {
        this.setFlag("--size", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vm_list_skus_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Show skus supporting availability zones. */
    az_vm_list_skus_command_builder.prototype.zone = function (value) {
        this.setFlag("--zone", value.toString());
        return this;
    };
    return az_vm_list_skus_command_builder;
}(base_1.CommandBuilder));
/**
 * List available usage resources for VMs.
 *
 * Syntax:
 * ```
 * az vm list-usage --location
 *                  [--subscription]
 * ```
 *
 * @param {string} location Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`.
 */
var az_vm_list_usage_command_builder = /** @class */ (function (_super) {
    __extends(az_vm_list_usage_command_builder, _super);
    function az_vm_list_usage_command_builder(commandPath, resultDataTypeName, location) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.location(location);
        return _this;
    }
    /** Location. Values from: `az account list-locations`. You can configure the default location using `az configure --defaults location=<location>`. */
    az_vm_list_usage_command_builder.prototype.location = function (value) {
        this.setFlag("--location", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vm_list_usage_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vm_list_usage_command_builder;
}(base_1.CommandBuilder));
/**
 * List available resizing options for VMs.
 *
 * Syntax:
 * ```
 * az vm list-vm-resize-options [--ids]
 *                              [--name]
 *                              [--resource-group]
 *                              [--subscription]
 * ```
 */
var az_vm_list_vm_resize_options_command_builder = /** @class */ (function (_super) {
    __extends(az_vm_list_vm_resize_options_command_builder, _super);
    function az_vm_list_vm_resize_options_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_vm_list_vm_resize_options_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    az_vm_list_vm_resize_options_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vm_list_vm_resize_options_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vm_list_vm_resize_options_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vm_list_vm_resize_options_command_builder;
}(base_1.CommandBuilder));
/**
 * Opens a VM to inbound traffic on specified ports.
 *
 * Syntax:
 * ```
 * az vm open-port --port
 *                 [--apply-to-subnet]
 *                 [--ids]
 *                 [--name]
 *                 [--nsg-name]
 *                 [--priority]
 *                 [--resource-group]
 *                 [--subscription]
 * ```
 *
 * @param {string} port The port or port range (ex: 80-100) to open inbound traffic to. Use '\*' to allow traffic to all ports.
 */
var az_vm_open_port_command_builder = /** @class */ (function (_super) {
    __extends(az_vm_open_port_command_builder, _super);
    function az_vm_open_port_command_builder(commandPath, resultDataTypeName, port) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.port(port);
        return _this;
    }
    /** The port or port range (ex: 80-100) to open inbound traffic to. Use '\*' to allow traffic to all ports. */
    az_vm_open_port_command_builder.prototype.port = function (value) {
        this.setFlag("--port", value);
        return this;
    };
    /** Allow inbound traffic on the subnet instead of the NIC. */
    az_vm_open_port_command_builder.prototype.applyToSubnet = function (value) {
        this.setFlag("--apply-to-subnet", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_vm_open_port_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the virtual machine to open inbound traffic on. */
    az_vm_open_port_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** The name of the network security group to create if one does not exist. Ignored if an NSG already exists. */
    az_vm_open_port_command_builder.prototype.nsgName = function (value) {
        this.setFlag("--nsg-name", value);
        return this;
    };
    /** Rule priority, between 100 (highest priority) and 4096 (lowest priority). Must be unique for each rule in the collection. */
    az_vm_open_port_command_builder.prototype.priority = function (value) {
        this.setFlag("--priority", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vm_open_port_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vm_open_port_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vm_open_port_command_builder;
}(base_1.CommandBuilder));
/**
 * The operation to perform maintenance on a virtual machine.
 *
 * Syntax:
 * ```
 * az vm perform-maintenance [--ids]
 *                           [--name]
 *                           [--resource-group]
 *                           [--subscription]
 * ```
 */
var az_vm_perform_maintenance_command_builder = /** @class */ (function (_super) {
    __extends(az_vm_perform_maintenance_command_builder, _super);
    function az_vm_perform_maintenance_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_vm_perform_maintenance_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    az_vm_perform_maintenance_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vm_perform_maintenance_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vm_perform_maintenance_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vm_perform_maintenance_command_builder;
}(base_1.CommandBuilder));
/**
 * Reapply VMs.
 *
 * Syntax:
 * ```
 * az vm reapply [--ids]
 *               [--name]
 *               [--no-wait]
 *               [--resource-group]
 *               [--subscription]
 * ```
 */
var az_vm_reapply_command_builder = /** @class */ (function (_super) {
    __extends(az_vm_reapply_command_builder, _super);
    function az_vm_reapply_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_vm_reapply_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    az_vm_reapply_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_vm_reapply_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vm_reapply_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vm_reapply_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vm_reapply_command_builder;
}(base_1.CommandBuilder));
/**
 * Redeploy an existing VM.
 *
 * Syntax:
 * ```
 * az vm redeploy [--ids]
 *                [--name]
 *                [--no-wait]
 *                [--resource-group]
 *                [--subscription]
 * ```
 */
var az_vm_redeploy_command_builder = /** @class */ (function (_super) {
    __extends(az_vm_redeploy_command_builder, _super);
    function az_vm_redeploy_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_vm_redeploy_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    az_vm_redeploy_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_vm_redeploy_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vm_redeploy_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vm_redeploy_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vm_redeploy_command_builder;
}(base_1.CommandBuilder));
/**
 * Update a VM's size.
 *
 * Syntax:
 * ```
 * az vm resize --size
 *              [--ids]
 *              [--name]
 *              [--no-wait]
 *              [--resource-group]
 *              [--subscription]
 * ```
 *
 * @param {string} size The VM size.
 */
var az_vm_resize_command_builder = /** @class */ (function (_super) {
    __extends(az_vm_resize_command_builder, _super);
    function az_vm_resize_command_builder(commandPath, resultDataTypeName, size) {
        var _this = _super.call(this, commandPath, resultDataTypeName) || this;
        _this.size(size);
        return _this;
    }
    /** The VM size. */
    az_vm_resize_command_builder.prototype.size = function (value) {
        this.setFlag("--size", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_vm_resize_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    az_vm_resize_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_vm_resize_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vm_resize_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vm_resize_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vm_resize_command_builder;
}(base_1.CommandBuilder));
/**
 * Restart VMs.
 *
 * Syntax:
 * ```
 * az vm restart [--force]
 *               [--ids]
 *               [--name]
 *               [--no-wait]
 *               [--resource-group]
 *               [--subscription]
 * ```
 */
var az_vm_restart_command_builder = /** @class */ (function (_super) {
    __extends(az_vm_restart_command_builder, _super);
    function az_vm_restart_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Force the VM to restart by redeploying it. Use if the VM is unresponsive. */
    az_vm_restart_command_builder.prototype.force = function (value) {
        this.setFlag("--force", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_vm_restart_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    az_vm_restart_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_vm_restart_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vm_restart_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vm_restart_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vm_restart_command_builder;
}(base_1.CommandBuilder));
/**
 * Get the details of a VM.
 *
 * Syntax:
 * ```
 * az vm show [--ids]
 *            [--name]
 *            [--query-examples]
 *            [--resource-group]
 *            [--show-details]
 *            [--subscription]
 * ```
 */
var az_vm_show_command_builder = /** @class */ (function (_super) {
    __extends(az_vm_show_command_builder, _super);
    function az_vm_show_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_vm_show_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    az_vm_show_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Recommend JMESPath string for you. You can copy one of the query and paste it after --query parameter within double quotation marks to see the results. You can add one or more positional keywords so that we can give suggestions based on these key words. */
    az_vm_show_command_builder.prototype.queryExamples = function (value) {
        this.setFlag("--query-examples", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vm_show_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Show public ip address, FQDN, and power states. command will run slow. */
    az_vm_show_command_builder.prototype.showDetails = function (value) {
        this.setFlag("--show-details", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vm_show_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vm_show_command_builder;
}(base_1.CommandBuilder));
/**
 * Simulate the eviction of a Spot VM.
 *
 * Syntax:
 * ```
 * az vm simulate-eviction [--ids]
 *                         [--name]
 *                         [--resource-group]
 *                         [--subscription]
 * ```
 */
var az_vm_simulate_eviction_command_builder = /** @class */ (function (_super) {
    __extends(az_vm_simulate_eviction_command_builder, _super);
    function az_vm_simulate_eviction_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_vm_simulate_eviction_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    az_vm_simulate_eviction_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vm_simulate_eviction_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vm_simulate_eviction_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vm_simulate_eviction_command_builder;
}(base_1.CommandBuilder));
/**
 * Start a stopped VM.
 *
 * Syntax:
 * ```
 * az vm start [--ids]
 *             [--name]
 *             [--no-wait]
 *             [--resource-group]
 *             [--subscription]
 * ```
 */
var az_vm_start_command_builder = /** @class */ (function (_super) {
    __extends(az_vm_start_command_builder, _super);
    function az_vm_start_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_vm_start_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    az_vm_start_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_vm_start_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vm_start_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vm_start_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vm_start_command_builder;
}(base_1.CommandBuilder));
/**
 * Power off (stop) a running VM.
 *
 * Syntax:
 * ```
 * az vm stop [--ids]
 *            [--name]
 *            [--no-wait]
 *            [--resource-group]
 *            [--skip-shutdown]
 *            [--subscription]
 * ```
 */
var az_vm_stop_command_builder = /** @class */ (function (_super) {
    __extends(az_vm_stop_command_builder, _super);
    function az_vm_stop_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_vm_stop_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    az_vm_stop_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_vm_stop_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vm_stop_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Skip shutdown and power-off immediately. */
    az_vm_stop_command_builder.prototype.skipShutdown = function (value) {
        this.setFlag("--skip-shutdown", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vm_stop_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    return az_vm_stop_command_builder;
}(base_1.CommandBuilder));
/**
 * Update the properties of a VM.
 *
 * Syntax:
 * ```
 * az vm update [--add]
 *              [--disk-caching]
 *              [--force-string]
 *              [--ids]
 *              [--license-type {None, RHEL_BYOS, SLES_BYOS, Windows_Client, Windows_Server}]
 *              [--max-price]
 *              [--name]
 *              [--no-wait]
 *              [--os-disk]
 *              [--ppg]
 *              [--priority {Low, Regular, Spot}]
 *              [--remove]
 *              [--resource-group]
 *              [--set]
 *              [--subscription]
 *              [--ultra-ssd-enabled {false, true}]
 *              [--workspace]
 *              [--write-accelerator]
 * ```
 */
var az_vm_update_command_builder = /** @class */ (function (_super) {
    __extends(az_vm_update_command_builder, _super);
    function az_vm_update_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Add an object to a list of objects by specifying a path and key value pairs.  Example: --add property.listProperty <key=value, string or JSON string>. */
    az_vm_update_command_builder.prototype.add = function (value) {
        this.setFlag("--add", value);
        return this;
    };
    /** Use singular value to apply across, or specify individual disks, e.g. 'os=ReadWrite 0=None 1=ReadOnly' should enable update os disk and 2 data disks. */
    az_vm_update_command_builder.prototype.diskCaching = function (value) {
        this.setFlag("--disk-caching", value);
        return this;
    };
    /** When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON. */
    az_vm_update_command_builder.prototype.forceString = function (value) {
        this.setFlag("--force-string", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_vm_update_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Specifies that the Windows image or disk was licensed on-premises. To enable Azure Hybrid Benefit for Windows Server, use 'Windows_Server'. To enable Multitenant Hosting Rights for Windows 10, use 'Windows_Client'. For more information see the Azure Windows VM online docs. */
    az_vm_update_command_builder.prototype.licenseType = function (value) {
        this.setFlag("--license-type", value);
        return this;
    };
    /** The maximum price (in US Dollars) you are willing to pay for a Spot VM/VMSS. -1 indicates that the Spot VM/VMSS should not be evicted for price reasons. */
    az_vm_update_command_builder.prototype.maxPrice = function (value) {
        this.setFlag("--max-price", value);
        return this;
    };
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    az_vm_update_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Do not wait for the long-running operation to finish. */
    az_vm_update_command_builder.prototype.noWait = function (value) {
        this.setFlag("--no-wait", value);
        return this;
    };
    /** Managed OS disk ID or name to swap to. */
    az_vm_update_command_builder.prototype.osDisk = function (value) {
        this.setFlag("--os-disk", value);
        return this;
    };
    /** The name or ID of the proximity placement group the VM should be associated with. */
    az_vm_update_command_builder.prototype.ppg = function (value) {
        this.setFlag("--ppg", value);
        return this;
    };
    /** Priority. Use 'Spot' to run short-lived workloads in a cost-effective way. 'Low' enum will be deprecated in the future. Please use 'Spot' to deploy Azure spot VM and/or VMSS. Default to Regular. */
    az_vm_update_command_builder.prototype.priority = function (value) {
        this.setFlag("--priority", value);
        return this;
    };
    /** Remove a property or an element from a list.  Example: --remove property.list <indexToRemove> OR --remove propertyToRemove. */
    az_vm_update_command_builder.prototype.remove = function (value) {
        this.setFlag("--remove", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vm_update_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Update an object by specifying a property path and value to set.  Example: --set property1.property2=<value>. */
    az_vm_update_command_builder.prototype.set = function (value) {
        this.setFlag("--set", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vm_update_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Enables or disables the capability to have 1 or more managed data disks with UltraSSD_LRS storage account. */
    az_vm_update_command_builder.prototype.ultraSsdEnabled = function (value) {
        this.setFlag("--ultra-ssd-enabled", value.toString());
        return this;
    };
    /** Name or ID of Log Analytics Workspace. If you specify the workspace through its name, the workspace should be in the same resource group with the vm, otherwise a new workspace will be created. */
    az_vm_update_command_builder.prototype.workspace = function (value) {
        this.setFlag("--workspace", value);
        return this;
    };
    /** Enable/disable disk write accelerator. Use singular value 'true/false' to apply across, or specify individual disks, e.g.'os=true 1=true 2=true' for os disk and data disks with lun of 1 & 2. */
    az_vm_update_command_builder.prototype.writeAccelerator = function (value) {
        this.setFlag("--write-accelerator", value);
        return this;
    };
    return az_vm_update_command_builder;
}(base_1.CommandBuilder));
/**
 * Place the CLI in a waiting state until a condition of the VM is met.
 *
 * Syntax:
 * ```
 * az vm wait [--created]
 *            [--custom]
 *            [--deleted]
 *            [--exists]
 *            [--ids]
 *            [--interval]
 *            [--name]
 *            [--resource-group]
 *            [--subscription]
 *            [--timeout]
 *            [--updated]
 * ```
 */
var az_vm_wait_command_builder = /** @class */ (function (_super) {
    __extends(az_vm_wait_command_builder, _super);
    function az_vm_wait_command_builder(commandPath, resultDataTypeName) {
        return _super.call(this, commandPath, resultDataTypeName) || this;
    }
    /** Wait until created with 'provisioningState' at 'Succeeded'. */
    az_vm_wait_command_builder.prototype.created = function (value) {
        this.setFlag("--created", value);
        return this;
    };
    /** Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']. */
    az_vm_wait_command_builder.prototype.custom = function (value) {
        this.setFlag("--custom", value);
        return this;
    };
    /** Wait until deleted. */
    az_vm_wait_command_builder.prototype.deleted = function (value) {
        this.setFlag("--deleted", value);
        return this;
    };
    /** Wait until the resource exists. */
    az_vm_wait_command_builder.prototype.exists = function (value) {
        this.setFlag("--exists", value);
        return this;
    };
    /** One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments. */
    az_vm_wait_command_builder.prototype.ids = function (value) {
        this.setFlag("--ids", value);
        return this;
    };
    /** Polling interval in seconds. */
    az_vm_wait_command_builder.prototype.interval = function (value) {
        this.setFlag("--interval", value);
        return this;
    };
    /** The name of the Virtual Machine. You can configure the default using `az configure --defaults vm=<name>`. */
    az_vm_wait_command_builder.prototype.name = function (value) {
        this.setFlag("--name", value);
        return this;
    };
    /** Name of resource group. You can configure the default group using `az configure --defaults group=<name>`. */
    az_vm_wait_command_builder.prototype.resourceGroup = function (value) {
        this.setFlag("--resource-group", value);
        return this;
    };
    /** Name or ID of subscription. You can configure the default subscription using `az account set -s NAME_OR_ID`. */
    az_vm_wait_command_builder.prototype.subscription = function (value) {
        this.setFlag("--subscription", value);
        return this;
    };
    /** Maximum wait in seconds. */
    az_vm_wait_command_builder.prototype.timeout = function (value) {
        this.setFlag("--timeout", value);
        return this;
    };
    /** Wait until updated with provisioningState at 'Succeeded'. */
    az_vm_wait_command_builder.prototype.updated = function (value) {
        this.setFlag("--updated", value);
        return this;
    };
    return az_vm_wait_command_builder;
}(base_1.CommandBuilder));
